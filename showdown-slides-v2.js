let mdConverter;

const showdownInit = new Promise((resolve, reject) => {
  const s = document.createElement('script');
  s.src = '/showdown.js';
  s.onload = resolve;
  s.onerror = reject;
  document.body.appendChild(s); // we don't want this to show up in the generated body
})
  .then(_ => {
    mdConverter = new showdown.Converter({
      openLinksInNewWindow: true,
      simpleLineBreaks: true,
    })
  })
  .catch(e => console.log(e))

const showSlides = showdownInit
  .then(_ => fetch('talk.md'))
  .then(r => r.text())
  .then(md => {
    //document.body.textContent = md
    let pmd = preprocessMd(md)
    let mdToHtml = pmd.length ? pmd.map(s => s.markdown ? mdConverter.makeHtml(s.markdown) : s).join('\n') : mdConverter.makeHtml(pmd)
    document.body.innerHTML = `<main>${mdToHtml}</main>`
    window.$md = md
    window.$pmd = pmd
    window.$html = mdToHtml
  })
  .catch(e => console.log(e))

function extractIdAndClasses(tags) {
  let id, classes = []

  if (tags) {
    tags.split('.').forEach(t => {
      if (t[0] === '#') {
        id = t.slice(1)
      } else {
        if (t) classes.push(t)
      }
    })
  }

  return { id, classes }
}

function extractToElementAttributes(tags) {
  const attr = extractIdAndClasses(tags);

  return (attr.id ? ` id="${attr.id}"` :'') + (attr.classes && attr.classes.length ? ` class="${attr.classes.join(' ')}"` :'')
}

function parseMeta(s) {
  return JSON.parse(
    '{\n'
     +s.trim()
       .replace(/"/g,'\\"')
       .replace(/^(\w+):\s+/gm, '"$1": "')
       .replace(/\n/g,'",')
     +'"\n}'
   )
}

function preprocessMd(text) {
  // Transform !#id.class1.class2 to <picture>...</picture> format
  text = text.replace(/!((?:#[\w\-]+)?(?:\.[\w\-]+)*)(\[[^\]]*\]\([^\)]*\))(?:\s*=>\s*(http[\S]+))?/g, (match, tags, image, link) => {
    // Do not touch non-tagged items
    if (tags === '' && !link) return match

    // Picture element
    let ret = `<picture${extractToElementAttributes(tags)}>\n\!${image}\n</picture>`

    // Links somewhere
    if (link) ret = `<a href="${link}" target="_blank">${ret}</a>`

    return ret
  })

  // Remove custom CSS & JS and metadata from the source and add them to the code
  // TODO: code embedded in slides
  const rx = /```(js|css|meta)([\s\S]+?)```/gm

  text = text.replace(rx, (match, type, content) => {
    switch (type) {
      case 'css':
        document.head.insertAdjacentHTML('beforeend', `<style>${content}</style>`)
        break

      case 'js':
        let newJs = document.createElement('script')
        newJs.textContent = content
        document.body.appendChild(newJs)
        break

      case 'meta':
        let metaObj = parseMeta(content)
        console.log(metaObj)
        if ('title' in metaObj) {
          document.querySelector('title').textContent = metaObj.title
          document.querySelector('meta[name="twitter:title"]').setAttribute('content', metaObj.title)
          document.querySelector('meta[property="og:title"]').setAttribute('content', metaObj.title)
        }
        if ('description' in metaObj) {
          document.querySelector('meta[name="description"]').setAttribute('content', metaObj.description)
          document.querySelector('meta[name="twitter:description"]').setAttribute('content', metaObj.description)
          document.querySelector('meta[property="og:description"]').setAttribute('content', metaObj.description)
        }
        if ('keywords' in metaObj) {
          document.querySelector('meta[name="keywords"]').setAttribute('content', metaObj.keywords)
        }
        if ('social_image' in metaObj) {
          document.querySelector('meta[name="twitter:image:src"]').setAttribute('content', metaObj.social_image)
          document.querySelector('meta[property="og:image"]').setAttribute('content', metaObj.social_image)
        }
        if ('canonical_url' in metaObj) {
          document.querySelector('meta[property="og:url"]').setAttribute('content', metaObj.canonical_url)
        }
        break
    }
    return ''
  })

  // Insert auto-slidebreak before --/== -style headings
  text = text.replace(/^(.+)\r?\n(---+|===+)$/gm, (markdown) => {
    let [ match, matchedTags ] = /\s*`(#?(?:[\w\-]+(?:\.|\s*))+)`/.exec(markdown) || []

    let br = '---'

    if (match) {
      markdown = markdown.replace(match, '')
      matchedTags = matchedTags.replace(/\s+/g, '.')
      br += `\n[](${matchedTags})`
    }

    console.log('match', match)
    console.log('matchedTags', matchedTags)
    console.log(br+'\n\n'+markdown)

    return br+'\n\n'+markdown
  })

  // Slice up to individual slides
  let rxSections = /^[\r\n\s]*\[\]\(((?:#[\w\-]*)?(?:\.[\w\-]+)*)\)/

  let sections = text.split(/\n\n---+$/m)
    .map(markdown => {
      // skip empty content (for empty slides use html comments)
      if (!markdown.trim()) return

      console.log(markdown)
      let [ match, matchedTags ] = rxSections.exec(markdown) || []

      if (matchedTags) {
        markdown = markdown.replace(match,'')
      }

      return [
        `<section${matchedTags ? extractToElementAttributes(matchedTags) : ''}>`,
        { markdown },
        `</section>`
      ]
    }
  ).filter(sec => !!sec)

  // Flatten
  return sections.reduce((a,b) => (b.length ? a.push(...b) : a.push(b), a), [])
}
