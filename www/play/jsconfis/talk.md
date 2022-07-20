```meta
title: JavaScript 💖 Microcontrollers
description: 2,560 bytes ought to be enough for anyone! — running JavaScript on a microcontroller. Flaki @ JSConf Iceland 2018
keywords: javascript, microcontrollers, iot, clouduboy, flaki, jerryscript, espruino, nodejs
social_image: http://talk.flak.is/pic/baela-jsconfis.jpg
canonical_url: http://talk.flak.is/play/jsconfis/
```

```css
@import url("/s/themes/pinky.css");
```



[](#opening.top-left-title)
!.bg[Baela says hi](/pic/baela-jsconfis.jpg)


## Halló, JSConf Iceland!

> Last updated: 2018-03-01

------------------------------------------------------------
[](#title)
!.bg.top[Microchips & JS](../img/ftw-dino.jpg)


# 2,560 bytes
## ought to be enough for anyone


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

<details>
  [Doesn't matter really if the quote is true, really - it's a meme/story that's, at this point, stuck with us.](https://www.computerworld.com/article/2534312/operating-systems/the--640k--quote-won-t-go-away----but-did-gates-really-say-it-.html). Picture by: <em>[Thomas Nguyen - Own work, CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=46809082)</em>
</details>

------------------------------------------------------------
[](#whoami)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
```

<div id=tinker>
  <img alt="JavaScript" src="/pic/js.png">
  <h3>JavaScript developer/trainer</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla Tech Speaker</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project member</h3>
</div>

------------------------------------------------------------

!.bg[](../img/tessel.png)

### It all started on a sunny summer afternoon...

------------------------------------------------------------
!.bg[](../img/flaki-tessel-at-budapest-js.jpg)
## Flaki meets the hardware world

------------------------------------------------------------
!.bg.centered[](../img/jon-mckay-embedded-nodejs.png)
## On the Perks & Perils of Node.js on a Microcontroller

> from Technical Machine (Tessel) co-founder Jon McKay

------------------------------------------------------------
[](#.white-background)
!.bg.centered[The Espruino Pico](../img/espruino.jpg)

### Running _actual_ JavaScript on the device

> The Espruino sported its own compiler to run JavaScript, on-device

<details>
Standards support used to be bad but improved a lot and now it's "good enough". Espruino has been ported to several other devices since, one of the most well-known is the ESP 8266 which is a wifi-enabled microcontroller board!
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered.drop-shadow[](../img/samsung-js-onmicrocontrollers-summary.jpg)

### Samsung's explorations of JS on embedded

<details>
Samsung engineers attended a TC39 (the comitee responsible for JavaScript's standardization) meeting in early 2014 to advocate for a standardization of a "JavaScript-subset", that would be more suitable to be run on microcontrollers. Samsung was met with general skepticims about building an ES-compliant JS engine (even with restrictions) in the multiple-kilobytes-range.

Of course the negativity of TC-39 didn't stop Samsung from trying and the same year they have started research, exploring the possibilities of adopting such an embeddedded JS engine. Stripping the open source JavaScript Core engine from the superfluous bits turned out to be too much of a hassle, compared to using something that was built with embeddability in mind (e.g. the Duktape engine). Despite (or maybe because of) the findings of this research, Samsung ended up starting development on their very own JS engine...
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/jerryscript.png)

### JerryScript

> JerryScript can run on devices with less than 64 KB RAM and <200 KB of flash, it is fully ES5.1-compliant & heavily optimized.

<details>
It took Samsung a year to complete the initial version of JerryScript, which they subsequently open-sourced and released to the public. It took about another year for the codebase to stabilize, but today it's one of the best (and most widely adopted) embedded JS engines besides Espruino (especially with companies building their own embedded products, such as...)
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/microbit.png)


### Preparing yout for a digital age with the BBC Micro:bit

------------------------------------------------------------
[](#.big.slim)

## JavaScript-powered IoT

------------------------------------------------------------
!.bg.centered[](../img/pebble.jpg)

### Pebble's Rocky.js / Pebble.js announcement

------------------------------------------------------------
[](#.white-background)
!.bg.contain[](../img/tictoc.png)

### Developer Ergonomy Matters!

> Pebble managed to run a JS/HTML5 watchface, powered by JerryScript without _it being less efficient than the C code_!

------------------------------------------------------------
!.bg.contain[](../img/fitbit-ionic.jpg)

### ...and Fitbit took over right where Pebble left off



------------------------------------------------------------
[](#.white-background)
!.bg[We need to go smaller](../img/smaller.jpg)


------------------------------------------------------------
!.bg.align-top[](../img/custom-arduboy.jpg)

### So how do you put JS on _these_?

<details>
mjs gets close, but not exactly. You'll need something of a very different approach.
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered.drop-shadow[](../img/clouduboy3-html5.jpg)

## Introducing: Clouduboy

<details>
Clouduboy is a lot of things. A library for creating tiny pixelgraphic images (PIF) and games (MicroCanvas). An online IDE for Arduino-based gaming devices. A compiler to turn JavaScript games to C++ ones and put them onto those tiny microcontrollers
</details>

------------------------------------------------------------
[](#.big.slim)

## Turn your JS into C++!

------------------------------------------------------------
!.bg.contain[](../img/ruhrjs.jpg)

### So it will run on this...

> The Arduboy is based on the same chipset and peripherals than the one you just saw. It just _looks nicer_ ;)

------------------------------------------------------------
!.bg.cover[](../img/tinyarcade.gif)

### ...or even this!

> The Tiny Arcade is slightly different. It has a much more powerful ARM MCU (same as the Micro:bit!) & color screen!

------------------------------------------------------------
[](#give-it-a-go.big)
# It's Just The Web!

------------------------------------------------------------
[](#.big.link)
!.bg[](../img/offline-dino.png)

## [cld.by/dino](//cld.by/dino)

------------------------------------------------------------
[](#.big.link)
!.bg[](../img/spaceinvaders.gif)

## [cld.by/invaders](//cld.by/invaders)

------------------------------------------------------------
[](#workshoppromo.big.link)
!.bg.centered[](//clouduboy.org/igi-workshop/clouduboy-iceland.png)

## [cld.by/workshop](//cld.by/workshop)

```css
#workshoppromo {
  background-color: #a0a0fe;
}
#workshoppromo picture img {
  padding-top: 6vh;
  padding-bottom: 60vh;
}
```

> Next Saturday at Reykjavík University

------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/play.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks a bunch!

#### [talk.flak.is/play/jsconfis](http://talk.flak.is/play/jsconfis/)

<span class=tweet>
![Clouduboy](../img/clouduboy-icon-large.png)
@clouduboy
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message">Keep playing!</div>

------------------------------------------------------------

### Reading list:
- [JavaScript World Domination by Flaki](https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070)
- [Node.js on embedded devices? Why? By Jon Mckay](https://opbeat.com/community/posts/the-eternal-struggle-node-js-in-embedded-devices-by-jon-mckay/)
- [Suz Hinton (noopkat) at Web Rebels, on firmata & using an Arduino with Node.js](https://vimeo.com/129003513)
- [Espruino executes code from source (and other performance considerations)](https://www.espruino.com/Performance)
- [Samsung exploring JS on microcontrollers](http://www.slideshare.net/seoyounghwang77/js-onmicrocontrollers)
- [Samsung's IoT pitch at the April 2014 TC39 meeting](http://tc39.github.io/tc39-notes/2014-04_apr-8.html#presentation-by-samsung-representatives)
- [Samsung's TC39 presentation](https://esdiscuss.org/notes/2014-04/ecma-tc39-talk-samsung.pdf)
- [It's JavaScript on the freakin' watch!](https://developer.pebble.com/blog/2016/08/15/introducing-rockyjs-watchfaces/)
- [Heiko Behrens on Rocky.js/Pebble.js](https://gist.github.com/HBehrens/1a91b97e1e98a6a09c5f)
- [Heiko announces Pebble.js at JSConf 2015](https://www.youtube.com/watch?v=2TslKh1tdm4)


```js
console.log('Slides locked & loaded!')
```
