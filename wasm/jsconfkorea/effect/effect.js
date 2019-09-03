const DW = 1920/2
const DH = 1080/2

const testimages = [ 'nuka-jsconf.svg', 'welcome2.svg', 'simple.svg', 'rome.svg', 'pip-ts.svg', 'act3.png', 'disclaimer.png', 'whatis.svg' ]

window.present = async function(slide) {
  slide = slide || document.querySelector('main>section:first-of-type')

  await run(
    async function(renderContext) {
      // Store render context
      window.renderContext = renderContext

      return showSlide(slide)
  }, 'fullscreen')
}

window.nextSlide = async function() {
  window.currentSlide = (window.currentSlide||1) + 1
  const slides = Array.from(document.querySelectorAll('main>section')).length
  if (window.currentSlide>slides) window.currentSlide = slides

  const slide = document.querySelector(`main>section:nth-of-type(${window.currentSlide})`)
  window.showSlide(slide)
}
window.prevSlide = async function() {
  window.currentSlide = (window.currentSlide||1) - 1
  if (window.currentSlide<1) window.currentSlide = 1

  const slide = document.querySelector(`main>section:nth-of-type(${window.currentSlide})`)
  window.showSlide(slide)
}

window.showSlide = async function(slide) {
  const img = slide.querySelector('img')
  const heading = slide.querySelector('h2,h3,h4')

  const image = img ? { im: await load(img.src) } : {}
  const title = heading ? heading.textContent.trim() : ''
  const titlesize = heading ? heading.tagName[1] | 0 : 2

  const effect = slide.classList.contains('no-effect') ? 'none' : 'default'

  updateNotes(slide)

  drawSlide({
    image, title, titlesize, effect
  }, window.renderContext)
}

function updateNotes(next) {
  next = next

  let detailsElement = next.querySelector('.notes')
  let noteContents = detailsElement ? detailsElement.innerHTML : '-'
  noteContents = noteContents.replace(/\n\s*/g,'</p><p>')

  if (window.notesWindow) {
    const b = notesWindow.document.body

    if (!b.children.length) {
      b.innerHTML = `<div style="font-size: 1.9rem; line-height: 2.6rem; padding: 0 20vmin;">
      </div><iframe src="${window.location.href}" style="opacity: 0.0; position: absolute; bottom: 10px; right: 10px;" width="800" height="450">
      </iframe>`
    }

    setTimeout(() => {
      b.firstElementChild.innerHTML = `<p>${noteContents}</p>`
      b.lastElementChild.contentWindow.Slides.goToPage(window.currentSlide)
    }, 100)
  }
}

document.body.addEventListener('keydown', e => {
  if (e.key==='Enter') window.present()
  if (e.key==='ArrowRight') window.nextSlide()
  if (e.key==='ArrowLeft') window.prevSlide()

  // Open speaker notes window
  if (e.key==='n') window.notesWindow = window.open('about:blank');
})

window.demo = function() {
  console.log('demo running')
  run(
    async function(renderContext) {
      console.log('slide rendering')
      return drawSlide({
        image: { im: await load('../assets/'+testimages[Math.random()*testimages.length | 0]) },
        title: "Welcome to Vault 6D-73-61!",
        titlesize: 2
      }, renderContext)
  })
}


async function load(isrc) {
  console.log('loading', isrc)

  //const displayfont = '/font/web/DataControl.woff'
  //await new FontFace('DataControl', `url(${displayfont})`);

  let im = document.createElement('img')

  imready = new Promise((resolve, reject) => {
      function loaded() {
        resolve(im)
      }
      im.addEventListener('load', loaded)
  })

  im.src = isrc
  await imready

  let ow = im.width
  let oh = im.height
  im.width = DW
  im.height = oh/ow*im.width
  console.log('image loaded', im)

  return im
}

function render(id, od, fr, rnd) {
  for (let y = 0; y < DH; ++y) {
    let is_scanline = y % 2

    // blank vis
    //if (y === fr % DH) {
    //  od.fill(0, 4*y*DW, 4*(y+1)*DW - 1)
    //  continue
    //}


    for (let x = 0; x < DW; ++x) {
      let pixelOffset = 4*(x+y*DW)
      let opacity = is_scanline ? 0 : 255

      // bleed into scanlines from above
      if (is_scanline) {
        if (y>0) {
          let pixelAbove = 4*(x+(y-1)*DW)
          // if green channel exists
          if (od[pixelAbove+2] > 0) {
            od[pixelOffset]   = od[pixelAbove]
            od[pixelOffset+1] = od[pixelAbove+1]
            od[pixelOffset+2] = od[pixelAbove+2]
            // bleed intensity
            opacity = .7 * (od[pixelAbove]+od[pixelAbove+1]+od[pixelAbove+2])/3
          }
        }
      } else {
        // lightness
        let pixelValue = (id[pixelOffset] + id[pixelOffset+1] + id[pixelOffset+2] )  / 3

        // cutoff
        pixelValue = (pixelValue < 170) ? 0 : 255

        let red = pixelValue, green=pixelValue, blue=pixelValue
/*
        // shift grayscale to green-ish
        if (pixelValue<140) {
          blue=blue/4
          red = red/2
        }
        if (pixelValue<120) {
          blue=blue/8
          red=red/2
        }
*/
        od[pixelOffset] = red
        od[pixelOffset+1] = green
        od[pixelOffset+2] = blue
      }

      // fully opaque
      // if scanline row don't draw
      od[pixelOffset+3] = opacity
    }

    // bleed effect
    //
    let phase = 0
    for (let x = 2; x < DW-2; ++x) {
      let pixelOffset = 4*(x+y*DW)

      if (phase === 0) {
        // unlit pixels, found a lit pixel, add orange/red shift
        if (od[pixelOffset]) {
          // prev pixel's blues diminished, will be yellow
          od[pixelOffset-4+0] = od[pixelOffset+0]
          od[pixelOffset-4+1] = od[pixelOffset+1]
          od[pixelOffset-4+2] = od[pixelOffset+2]/8
          // even further away orange falloff
          if (!od[pixelOffset-8]) {
            od[pixelOffset-8+0] = od[pixelOffset+0]
            od[pixelOffset-8+1] = od[pixelOffset+1]/4
            od[pixelOffset-8+2] = od[pixelOffset+2]/16
          }
          phase = 1
        }
      } else if (phase === 1) {
        //consecutive lit pixels, found unlit pixel, add falloff
        if (!od[pixelOffset]) {
          // current pixel's blues & reds diminished, will be green
          od[pixelOffset+0] = od[pixelOffset-4+0]/8
          od[pixelOffset+1] = od[pixelOffset-4+1]
          od[pixelOffset+2] = od[pixelOffset-4+2]/8
          // even further away faint green
          if (!od[pixelOffset+4]) {
            od[pixelOffset+4+0] = od[pixelOffset-4+0]/16
            od[pixelOffset+4+1] = od[pixelOffset-4+1]/2
            od[pixelOffset+4+2] = od[pixelOffset-4+2]/16
          }
          phase = 0
        }
      }
    }

    // sync issue vis
    if (y>2 && y === fr % DH) {
      //od.fill(0, 4*y*DW, 4*(y+1)*DW - 1)
      od.copyWithin(4*(y*DW - 1), 4*(y*DW+2), 4*(y+1)*DW -1)
      od.copyWithin(4*((y-2)*DW - 2), 4*((y-2)*DW+2), 4*(y-1)*DW -1)
    }

  }
}

async function drawSlide(descriptor, ctx) {
  ctx.clearRect(0,0,DW,DH)
  console.log(descriptor, ctx.canvas)

  ctx.effect = descriptor.effect || 'default'

  const im = descriptor.image.im
  if (ctx.effect === 'default') ctx.drawImage(im, 0,20, DW,im.height)
  if (ctx.effect === 'none')    ctx.drawImage(im, 0,0 , im.width,im.height)

  const size = descriptor.titlesize||2
  ctx.font = (20 + (4-size)*8) + 'px "DataControl"'
  console.log(ctx.font)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillStyle = 'white'

  const title = descriptor.title.replace(/\n/g,' | ').replace(/\s+/g,'\t').trim()
  ctx.fillText(title, DW/2, DH-20)
}

async function run(slideprovider, fullscreen) {
  const renderCanvas = document.createElement('canvas')
  renderCanvas.width = DW
  renderCanvas.height = DH
  const renderContext = renderCanvas.getContext('2d')

  const displayCanvas = document.createElement('canvas')
  displayCanvas.width = DW
  displayCanvas.height = DH
  const displayContext = displayCanvas.getContext('2d')

  document.body.appendChild(displayCanvas)

  if (fullscreen) {
    if (!document.fullscreenElement) {
      displayCanvas.requestFullscreen()
    }
  }

  await slideprovider(renderContext)

  let srcData = renderContext.getImageData(0,0, DW,DH)
  let outData = displayContext.createImageData(DW,DH)

  let frame = 0
  let show = () => {
    // Render default effect
    displayCanvas.className=`${renderContext.effect}-effect`
    if (renderContext.effect === 'default') {
      render(renderContext.getImageData(0,0, DW,DH).data, outData.data, frame, Math.floor(Math.random()*100))
      displayContext.putImageData(outData, 0,0)

    // Render with effects turned off
    } else {
      displayContext.clearRect(0,0,DW,DH)
      displayContext.drawImage(renderCanvas, 0,0)
    }

    frame++
    requestAnimationFrame(show)
  }

  show()
}
