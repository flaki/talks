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
    if (e.key==='Enter' || e.key==='Escape') togglePresent();

    // Live webcam view
    if (e.key==='v') toggleLiveView(e);

  });

  function nextPage(e) {
    let current = document.querySelector('main>section.current') || document.querySelector('main>section:first-child');
    if (current && current.nextElementSibling) {
      current.classList.remove('current');
      current.nextElementSibling.classList.add('current');

      // for non-presenting mode
      current.nextElementSibling.scrollIntoView()
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

  function togglePresent() {
    document.documentElement.classList.toggle('present');
  }

  function toggleLiveView(e) {
    if (e.altKey) {
      return showWebcam().then(_ => document.documentElement.classList.add('live-view'))
    }

    document.documentElement.classList.toggle('live-view')
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


  window.Slides = {
    nextPage, prevPage, goToPage, togglePresent
  }
});
