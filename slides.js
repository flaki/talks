'use strict';

document.addEventListener('DOMContentLoaded', e => {

  let initial = parseInt(window.location.hash.substr(1));

  goToPage(initial || 1);
  //togglePresent();

  window.addEventListener('keydown', e => {
    if (e.key==='ArrowLeft' || e.key==='PageUp') prevPage();
    if (e.key==='ArrowRight' || e.key==='PageDown' || e.key===' ') nextPage();

    // 8bitdo controller
    if (e.key==='d' || e.key==='e') prevPage();
    if (e.key==='f' || e.key==='c') nextPage();

    // Presentation
    if (e.key==='Enter' || e.key==='Escape') togglePresent();
  });

  function nextPage(e) {
    let current = document.querySelector('main>section.current');
    if (current && current.nextElementSibling) {
      current.classList.remove('current');
      current.nextElementSibling.classList.add('current');
    }

    window.location.replace('#'+slideNumber());
  }

  function prevPage(e) {
    let current = document.querySelector('main>section.current');
    if (current && current.previousElementSibling) {
      current.classList.remove('current');
      current.previousElementSibling.classList.add('current');
    }

    window.location.replace('#'+slideNumber());
  }

  function goToPage(pg) {
    let current = document.querySelector('main>section.current');
    if (current) {
      current.classList.remove('current');
    }

    let next = document.querySelector('main>section:nth-child('+parseInt(pg, 10)+')');
    if (next) {
      next.classList.add('current');
    }

    window.location.replace('#'+slideNumber(next));
  }

  function togglePresent() {
    document.documentElement.classList.toggle('present');
  }


  function slideNumber(current) {
    current = current || document.querySelector('main>section.current')
    return Array.from(document.querySelector('main').children).indexOf(current)+1;
  }

  window.Slides = {
    nextPage, prevPage, goToPage, togglePresent
  }
});
