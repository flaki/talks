```meta
title: Clouduboy 👾
description: HTML5 games on a microcontrollers using Clouduboy. Presented by Flaki @ Mozilla SF All-hands 2018
keywords: javascript, microcontrollers, iot, clouduboy, flaki, jerryscript, espruino, nodejs
social_image: http://talk.flak.is/pic/sfallhands.jpg
canonical_url: http://talk.flak.is/play/ec-berlin-2018/
```

```css
@import url("/s/themes/pinky.css");

.purp { background: #a0a0fe; }
```



[](#opening.top-left-title)
!.bg[Techspeakers say hi](/pic/sfallhands.jpg)


## Hello SF All-hands!! 🦊

> Last updated: 2018-06-12

------------------------------------------------------------
[](#whoami.top-right-title)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
```

## István Szmozsánszky "Flaki" <br> @slsoftworks

<div id=tinker>
  <img alt="Mozilla DevRel" src="/pic/mozhacks.png">
  <h3>Developer Outreach / DevRel</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla TechSpeakers</h3>

  <img alt="JavaScript" src="/pic/js.png">
  <h3>JavaScript developer/trainer</h3>
</div>

------------------------------------------------------------
[](#title)
!.bg.top[Microchips & JS](../img/ftw-dino.jpg)


# 2,560 bytes
## ought to be enough for anyone

> <small>a.k.a</small>&nbsp; **JavaScript 💖 Hardware** <br><br>
>
> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

<details>

</details>

------------------------------------------------------------
[](#.big.slim)

## Embedded JavaScript


------------------------------------------------------------
[](#.white-background)
!.bg.centered[The Espruino Pico](../img/espruino.jpg)

### Early adopters: the Espruino

> Initially with JS supporting microcontrollers, ecosystem-compatibility (see: standards) wasn't a priority

<details>
Standards support used to be bad but improved a lot and now it's "good enough". Espruino has been ported to several other devices since, one of the most well-known is the ESP 8266 which is a wifi-enabled microcontroller board!
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/jerryscript.png)

### Embedded JS standards support: JerryScript

> JerryScript can run on devices with less than 64 KB RAM and <200 KB of flash, it is fully ES5.1-compliant & heavily optimized.

<details>
It took Samsung a year to complete the initial version of JerryScript, which they subsequently open-sourced and released to the public. It took about another year for the codebase to stabilize, but today it's one of the best (and most widely adopted) embedded JS engines besides Espruino (especially with companies building their own embedded products, such as...)
</details>


---
[](#.white-background)
!.bg.centered.drop-shadow[The Micro:bit MakeCode visual editor](../img/microbit-makecode.png) => https://makecode.microbit.org/#

### Embracing the web: BBC Micro:bit

<details>
  The MakeCode Editor is a completely browser-based online editor for creating new sketches (firmware code) for the Micro:bit. It lets you code in JavaScript, or use a simple block-based language to create the functionality, and even generates the firmware that just needs to be downloaded and copied over to the device.
</details>



------------------------------------------------------------
[](#.white-background)
!.bg.centered.drop-shadow[](../img/pebble.jpg)

### Rocky.js: familiar APIs in a small form factor


------------------------------------------------------------
[](#.white-background)
!.bg.contain[](../img/tictoc.png)

### Pebble: performant JavaScript on a watch!

> Pebble managed to run a JS/HTML5 watchface, powered by JerryScript without _it being less efficient than the C code_!


------------------------------------------------------------
!.bg.contain[](../img/fitbit-ionic.jpg)

### ...and Fitbit took over right where Pebble left off


---
[](#.white-background)
!.bg.centered[](../img/arduino-micro.png)

> 16 Mhz 8-bit CPU, 2.5 Kilobytes of memory, 32 Kilobytes of program storage!

---
[](#.white-background)
!.bg.centered[](../img/clouduboy/atmega32u4-sizecomp.jpg)



------------------------------------------------------------
[](#.big.slim)

## Learning how to code

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/hcf.jpg)

---
[]()
!.bg[](../img/invaders.gif)


---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/arduboy-rotate.gif)

### The Arduboy

---
!.bg.align-top[](../img/custom-arduboy.jpg)

### So we will see how to put JS on _these_

<details>
Some tiny JS engines get pretty close, but still no match for these resource-constrained devices. You'll need something of a very different approach.
</details>

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/arduino-ide.png)

### Create games with the Arduino IDE




------------------------------------------------------------
[](#clouduboyorg.big.link)

![](https://clouduboy.org/clouduboy-logo.png)

## [clouduboy.org](//clouduboy.org)

```css
@keyframes bob {
  from {
    top: 2.75rem;
  }

  to {
    top: 5rem;
  }
}

#clouduboyorg {
  background: #a0a0fe;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#clouduboyorg img {
  width: 8rem;

  position: relative;
  animation: 2s ease-in-out infinite alternate-reverse bob;
}
```


------------------------------------------------------------
[](#.white-background)
!.bg.centered.drop-shadow[](../img/clouduboy2-js.jpg)

## So what <em>is</em> Clouduboy?

<details>
Clouduboy is a lot of things. A library for creating tiny pixelgraphic images (PIF) and games (MicroCanvas). An online IDE for Arduino-based gaming devices. A compiler to turn JavaScript games to C++ ones and put them onto those tiny microcontrollers
</details>



------------------------------------------------------------
[](#.big.slim)

## Create games!

---
[](#.white-background)

!.bg.centered.drop-shadow[](../img/offline-dino.png)

### Well, rather something more like this:

------------------------------------------------------------
[](#.big.slim)

## Share them!

<details>
[MicroCanvas](https://clouduboy.github.io/microcanvas/examples/)
</details


---
!.bg.contain[](../img/ruhrjs.jpg)

### ...and then put them in your pocket!




------------------------------------------------------------
[](#.big.slim)

## Learn to code

---
!.bg.centered[](../img/clouduboy3-html5.jpg)

---
[](#.purp)
!.bg.centered[](../img/clouduboy/microcanvas-01.png)

---
[](#.purp)
!.bg.centered[](../img/clouduboy/microcanvas-02-loops.png)

---
[](#.purp)
!.bg.contain[](../img/clouduboy/microcanvas-03-if.gif)



------------------------------------------------------------
[](#.big.slim)

## Create whole games in the browser!

---
[](#.purp)
!.bg.centered[](../img/clouduboy/microcanvas-04-game.gif)



------------------------------------------------------------
[](#.big.slim)

## Built-in editing tools

---
!.bg.contain[](../img/clouduboy/clouduboy-paint.gif)


------------------------------------------------------------
[](#.big.slim)

## Turn it into Arduino code


---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/clouduboy/clouduboy-convert.gif)

------------------------------------------------------------
!.bg.contain[](../img/ruhrjs.jpg)

### So it will run on this...

> The Arduboy is based on the same chipset and peripherals than the one you just saw. It just _looks nicer_ ;)

------------------------------------------------------------
!.bg.cover[](../img/tinyarcade.gif)

### ...or even this!

> The Tiny Arcade is slightly different. It has a much more powerful ARM MCU (same as the Micro:bit!) & color screen!

---
!.bg.centered[](../img/clouduboy/microcanvas-microbit.jpg)

### Experimental Micro:bit support!

> The Micro:bit is interesting because it only has 2 buttons (space invaders requires at least three, to move and shoot) but it has built-in accelerometer - Clouduboy uses the device tilt as directional buttons!

------------------------------------------------------------
[](#give-it-a-go.big)
## It's Just The Web!

------------------------------------------------------------
[](#.big.link)
!.bg[](../img/offline-dino.png)

## [cld.by/dino](//cld.by/dino)

------------------------------------------------------------
[](#.big.link)
!.bg[](../img/dimorun.jpg)

## [cld.by/mozillaid](//cld.by/mozillaid)

------------------------------------------------------------
[](#.big.link)
!.bg[](../img/spaceinvaders.gif)

## [cld.by/invaders](//cld.by/invaders)



------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/play.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks a bunch!

#### [talk.flak.is/play/sfallhands](http://talk.flak.is/play/sfallhands/)

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
