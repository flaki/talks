```meta
title: Clouduboy 👾
description: 2,560 bytes ought to be enough for anyone! — JavaScript games on a microcontrollers using Clouduboy. Presented by Flaki @ EnthusiastiCon 2018, Berlin
keywords: javascript, microcontrollers, iot, clouduboy, flaki, jerryscript, espruino, nodejs
social_image: http://talk.flak.is/pic/ducklings-ts.jpg
canonical_url: http://talk.flak.is/play/ec-berlin-2018/
```

```css
@import url("/s/themes/pinky.css");

.purp { background: #a0a0fe; }
```



[](#opening.top-left-title)
!.bg[Techspeakers say hi](/pic/ducklings-ts.jpg)


## Hi there, EnthusiastiCon!! 🦆

> Last updated: 2018-03-28

------------------------------------------------------------
[](#whoami.top-right-title)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
```

## István Szmozsánszky "Flaki" <br> @slsoftworks

<div id=tinker>
  <img alt="JavaScript" src="/pic/js.png">
  <h3>JavaScript developer/trainer</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla Tech Speaker</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project member</h3>
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

## JavaScript on &nbsp;<em>hardware?</em>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[The Espruino Pico](../img/espruino.jpg)

### The Espruino

> The Espruino sported its own compiler to run JavaScript, on-device

<details>
Standards support used to be bad but improved a lot and now it's "good enough". Espruino has been ported to several other devices since, one of the most well-known is the ESP 8266 which is a wifi-enabled microcontroller board!
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/microbit.png)


### The BBC Micro:bit

---
[](#.white-background)
!.bg.centered.drop-shadow[The Micro:bit MakeCode visual editor](../img/microbit-makecode.png) => https://makecode.microbit.org/#

### Online code editor

<details>
  The MakeCode Editor is a completely browser-based online editor for creating new sketches (firmware code) for the Micro:bit. It lets you code in JavaScript, or use a simple block-based language to create the functionality, and even generates the firmware that just needs to be downloaded and copied over to the device.
</details>



------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/jerryscript.png)

### Powered By JerryScript

> JerryScript can run on devices with less than 64 KB RAM and <200 KB of flash, it is fully ES5.1-compliant & heavily optimized.

<details>
It took Samsung a year to complete the initial version of JerryScript, which they subsequently open-sourced and released to the public. It took about another year for the codebase to stabilize, but today it's one of the best (and most widely adopted) embedded JS engines besides Espruino (especially with companies building their own embedded products, such as...)
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.contain[](../img/tictoc.png)

### Pebble: JavaScript on a friggen' watch!

> Pebble managed to run a JS/HTML5 watchface, powered by JerryScript without _it being less efficient than the C code_!

------------------------------------------------------------
!.bg.contain[](../img/fitbit-ionic.jpg)

### ...and Fitbit took over right where Pebble left off


---
[](#.white-background)
!.bg.centered[](../img/clouduboy/atmega32u4.jpg)

---
[](#.white-background)
!.bg.centered[](../img/clouduboy/atmega32u4-sizecomp.jpg)

---
[](#.white-background)
!.bg.centered[](../img/arduino-micro.png)

> 16 Mhz 8-bit CPU, 2.5 Kilobytes of memory, 32 Kilobytes of program storage!

---
[](#.white-background)
!.bg.centered[](../img/clouduboy/gameboy.png)

> Still, in a lot of ways, these microcontrollers are just as powerful (if not more) than the original Gameboy

---
!.bg.align-top[](../img/custom-arduboy.jpg)

### So we will see how to put JS on _these_

<details>
Some tiny JS engines get pretty close, but still no match for these resource-constrained devices. You'll need something of a very different approach.
</details>





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
[](#.big.slim)

# But first...

---
!.bg.cover[](../img/we-have-to-go-back.jpg)

> We have to go back... to 2016



------------------------------------------------------------
[](#.big.slim)

## Learning how to code

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/hcf.jpg)

---
[]()
!.bg[](../img/invaders.gif)




------------------------------------------------------------
[](#.big.slim)

## Hardware

------------------------------------------------------------

!.bg[](../img/tessel.png)

### It all started on a sunny summer afternoon...

------------------------------------------------------------
!.bg[](../img/flaki-tessel-at-budapest-js.jpg)
## Flaki meets the hardware world


------------------------------------------------------------
!.bg.cover[](../img/kickstarter.jpg)

## Then came a Kickstarter campaign...

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/arduboy-rotate.gif)

### The Arduboy

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/arduino-ide.png)

### Create games with the Arduino IDE

---
!.bg[](../img/clouduboy1.jpg)

### The Clouduboy Web IDE is born

> Initially I started Clouduboy as a replacement for the Arduino's clunky interface when it came to writing games for the Arduboy



------------------------------------------------------------
[](#.white-background)
!.bg.centered.drop-shadow[](../img/clouduboy2-js.jpg)

## So what <em>is</em> Clouduboy?

<details>
Clouduboy is a lot of things. A library for creating tiny pixelgraphic images (PIF) and games (MicroCanvas). An online IDE for Arduino-based gaming devices. A compiler to turn JavaScript games to C++ ones and put them onto those tiny microcontrollers
</details>

------------------------------------------------------------
[](#.big.slim)

## With Clouduboy...


------------------------------------------------------------
[](#.big.slim)

## Create your own games!

---
!.bg.cover[](../img/aaa-game.jpg)

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

## Learn to code while having fun!

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

## Create & edit sprites!

---
!.bg.contain[](../img/clouduboy/clouduboy-paint.gif)


------------------------------------------------------------
[](#.big.slim)

## Turn JS into Arduino code!


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
!.bg[](../img/spaceinvaders.gif)

## [cld.by/invaders](//cld.by/invaders)



------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/play.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks a bunch!

#### [talk.flak.is/play/ec-berlin-2018](http://talk.flak.is/play/ec-berlin-2018/)

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
