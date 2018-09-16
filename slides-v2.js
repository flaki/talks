'use strict';

document.addEventListener('DOMContentLoaded', e => {
  function initialize() {
    // Wait until slide content is loaded
    if (!document.querySelector('main')) return setTimeout(initialize, 100)

    let initial = parseInt(window.location.hash.substr(1));

    goToPage(initial || 1);
    if (initial>1) togglePresent();

    console.log('initialized')
  }

  initialize()

  document.body.addEventListener('dblclick', e => togglePresent())
  document.body.addEventListener('click', e => {
    // Only apply in presentation mode
    if (!isPresenting()) return

    // TODO: have proper tap areas for this
    if (e.originalTarget.nodeName === 'DETAILS') {
      e.originalTarget.open = !e.originalTarget.open
      return
    }

    if (e.originalTarget.nodeName !== 'A'
      && e.originalTarget.parentNode.nodeName !== 'A' // a>img
      && e.originalTarget.parentNode.parentNode.nodeName !== 'A' // a>picture>img
    ) {
      if (e.pageX < window.innerWidth/2) {
        prevPage()
      } else {
        nextPage()
      }
    }
  })

  window.addEventListener('keydown', e => {
    if (e.key==='ArrowLeft' || e.key==='PageUp') prevPage();
    if (e.key==='ArrowRight' || e.key==='PageDown' || e.key===' ') nextPage();

    // 8bitdo controller
    if (e.key==='d' || e.key==='e') prevPage();
    if (e.key==='f' || e.key==='c') nextPage();

    // Presentation
    if (e.key==='Enter' /* || e.key==='Escape' */) togglePresent();

    // Live webcam view
    if (e.key==='v') toggleLiveView(e);

    // Show source of processed/generated slide deck in new window
    if (e.key==='x') exportSlides(e);

    // Open speaker notes window
    if (e.key==='n') window.notesWindow = window.open('about:blank');
  });

  function nextPage(e) {
    let current = document.querySelector('main>section.current') || document.querySelector('main>section:first-child');
    if (current && current.nextElementSibling) {
      current.classList.remove('current');
      current.nextElementSibling.classList.add('current');

      // for non-presenting mode
      current.nextElementSibling.scrollIntoView()

      // update notes
      updateNotes(current.nextElementSibling)
    }

    window.location.replace('#'+slideNumber());
  }

  function prevPage(e) {
    let current = document.querySelector('main>section.current') || document.querySelector('main>section:first-child');
    if (current && current.previousElementSibling) {
      current.classList.remove('current');
      current.previousElementSibling.classList.add('current');

      // for non-presenting mode
      current.previousElementSibling.scrollIntoView()

      // update notes
      updateNotes(current.previousElementSibling)
    }

    window.location.replace('#'+slideNumber());
  }

  function goToPage(pg) {
    let current = document.querySelector('main>section.current');
    if (current) {
      current.classList.remove('current');
    }

    let next = document.querySelector('main>section:nth-child('+(parseInt(pg, 10)||1)+')');
    if (!next) {
      console.log('Slide not found: ', pg)
      return
    }
    next.classList.add('current');

    // for non-presenting mode
    next.scrollIntoView()

    window.location.replace('#'+slideNumber(next));
  }

  function isPresenting() {
    return document.documentElement.classList.contains('present');
  }
  function togglePresent(e) {
    document.documentElement.classList.toggle('present', e === 'off' ? false : undefined);

    // Fullscreen mode
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen()
      if (document.webkitExitFullscreen) document.webkitExitFullscreen()
    } else {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen()
      if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen()
    }
  }

  function toggleLiveView(e) {
    if (e === 'off') {
      document.documentElement.classList.toggle('live-view', false)
      return
    }

    if (e.altKey) {
      e.preventDefault()
      return showWebcam().then(_ => document.documentElement.classList.add('live-view'))
    }

    document.documentElement.classList.toggle('live-view')
  }

  function exportSlides(e) {
    if (e.altKey) {
      e.preventDefault()

      togglePresent('off')
      toggleLiveView('off')
      goToPage(1)

      const w = window.open('')
      if (w) {
        w.document.write('<pre>&lt;!doctype html&gt;\n'+document.documentElement.outerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</pre>')

        const range = w.document.createRange();
        range.selectNode(w.document.body);
        w.getSelection().addRange(range);

        w.document.execCommand('copy')
      }
    }
  }

  function slideNumber(current) {
    current = current || document.querySelector('main>section.current')
    return Array.from(document.querySelector('main').children).indexOf(current)+1;
  }


  function showWebcam() {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(function(stream) {
      const video = document.querySelector('body>video') || document.createElement('video')

      video.srcObject = stream
      video.onloadedmetadata = function(e) {
        document.body.prepend(video)
        video.play()
      }
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message)
    })
  }

  function updateNotes(next) {
    next = next || document.querySelector('.current')
    // TODO: show slide image as well

    let detailsElement = next.querySelector('details')
    let noteContents = detailsElement ? detailsElement.innerHTML : '-'
    noteContents = noteContents.replace(/\s*<br\/?>/,'')

    if (window.notesWindow) {
      notesWindow.document.body.innerHTML =
        '<div style="font-size: 3.2rem; line-height: 4.4rem; padding: 5rem;">'
          + noteContents
        +'</div>'
    }
  }

  window.Slides = {
    nextPage, prevPage, goToPage, togglePresent
  }
});
