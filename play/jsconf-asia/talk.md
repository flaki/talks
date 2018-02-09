```css
@import url("/s/themes/pinky.css");
```

[](#opening)
!.bg[Baela says hi](/pic/baela-jsconfasia.jpg)


# Hello there, JSConf Asia!

> Last updated: 2018-01-25

---
[](#title)
!.bg[Microchips & JS](http://www.bab.se/~babse/wp-content/uploads/2013/11/h62.jpg)

```css
#title h1 {
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
}

#title h2 {
  font-size: 1.1rem;
}
```

# Javascript on Hardware
## The stuff you always wanted to know but never dared to ask


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

---
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

---
!.bg[Ryan Dahl introducing Node.js at JSConf EU 2009](../img/ryandahl.png)

### Once upon a time in 2009...

<details>
Pictured: Ryan Dahl at JSConf EU 2009 when he announced version 0.1.17 of Node.js
</details>

---
[](#nodejs)
!.bg.centered[Node.js](../img/nodejs-logo.svg)

## Let There Be Node!

```css
#nodejs {
  background-image: url(../img/jsconfeu-2009.png);
  background-repeat: no-repeat;
  background-position: bottom right;
}
```

---
!.bg.contain[JavaScript World Domination by Flaki](../img/jsdomination.jpg)


---
!.bg[](../img/nodebots.png)

---
!.bg[Nodebots Johnny 5](../img/nodebots1.png)

### Nodebots

---
!.bg[Nodebots Johnny 5](../img/nodebots-j5.jpg)

## Node robotics with Johnny Five


---
!.bg[](../img/nodeboats.png)

### Nodeboats...

---
!.bg[](../img/nodecopter.jpg)

### Node (quadro-)copters...

---
!.bg.centered[](../img/jsconf-2014.png)

---
!.bg[](../img/noderockets.gif)

---
!.bg[](../img/noderockets1.jpg)

### ...even Node rockets!


---
!.bg[Communication between Node.js and an Arduino](../img/node-serialport.png)

### node-serialport

---
!.bg[node-serialport and firmata - Suz Hinton at Web Rebels](../img/suz-babbling-with-merfolk.png)

### The Firmata protocol

---
[](#.white-background)
!.bg.centered.drop-shadow[node-serialport and firmata - Suz Hinton at Web Rebels](../img/noopkat-web-rebels.png)

## See the full talk at "Babbling With Merefolk" (Web Rebels 2015)

<details>
Suz's whole talk from Web Rebels 2015  is one of the most accessible & fun intro talks to working with Arduinos and besides explaining a bunch of core concepts incredibly well it comes loaded with a great bunch of fun & entertaining hand-drawn characters - Pin Kitty & their friends I still regularly cite to people when explaining hardware concepts. You will find a link to the talk listed at the end of this slide deck.
</details>


---
!.bg[](../img/tessel.png)

### The Tessel

---
!.bg[](../img/flaki-tessel-at-budapest-js.jpg)
## Flaki meets the hardware world

---
!.bg.centered[](../img/jon-mckay-embedded-nodejs.png)
### Jon McKay on the Perks & Perils of Node.js on a Microcontroller

---
[](#.white-background)
!.bg.centered[The Espruino Pico](../img/espruino.jpg)

### Espruino

<details>
Standards support used to be bad but improved a lot and now it's "good enough". Espruino has been ported to several other devices since, one of the most well-known is the ESP 8266 which is a wifi-enabled microcontroller board!
</details>

---
[](#.white-background)
!.bg.centered.drop-shadow[Espruino Web IDE](../img/espruino-web-ide.png) => https://www.espruino.com/ide/

### Steal This: The Espruino Web IDE

<div id="mmoore"></div>

<details>
Gordon din't just go "I want to create this thing". He wanted people to use it, to make it as accessible, easy-to-use and ubiquitous as possible. There's a documentary by Michael Moore, "Where to invade next", in which he travels around the world and "annexes" great ideas in other nations (free education, avoidance of using guns by the police, etc.) by planting the US flag - caring and catering for your users is an idea definitely worth stealing.
</details>

```css
#mmoore {
	background: url(../img/steal-this-idea.jpg);
	width: 16vw;
	height: 12vw;
	background-size: contain;
	background-repeat: no-repeat;
	transform: rotate(28deg);
	position: absolute;
	top: 1vh;
	left: 75vw;
	mix-blend-mode: multiply;
}
```

---
[](#.white-background)
!.bg.centered[Puck.js](../img/espruino-puck-js.jpg)

### Puck.js and Web Bluetooth

---
[](#.white-background)
!.bg.centered[Espruino executes JavaScript straight from the source](../img/espruino-source-exec.png)

### Espruino executes JavaScript on the device, straight from source


---
[](#so-what.big)
# SO WHAT?

<details>
Okay this is funny/quirky/silly, but why should a web developer care about any of this?
</details>

---
[](#.white-background)
!.bg.contain[](../img/v8-inlining.png)

### Let me tell you a little story about 600 little ASCII bytes...

---
[](#.white-background)
!.bg.centered[](../img/bmeurer-turbofan-inlining.png)

### The V8 function-inlining limit is _real_

<details>
This behavior is not unique to microcontrollers. It happens all the time, computers are complex contraptions.
</details>

---
[](#.white-background)
!.bg.centered[](../img/bmeurer-turbofan-inlining2.png)

### ...even with Crankshaft gone

<details>
I'm not saying everyone should micro-optimize, or that everyone should know how a JS engine works. I'm just saying there are real, actual benefits of knowing (and expecting) these things that can come handy in everyday work just as much as during casual hobby hardware-hacking.
</details>


---
[](#.white-background)
!.bg.centered[](../img/v8-logo.png)

### If we already have V8...

---
[](#.white-background)
!.bg.centered[](../img/v7-logo.png)

### ...why not have V7, too?

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/what-is-v7.png)

## V7 is an embedded JavaScript engine

> V7 clocks in at a 40-120KB compiled size, which is not bad at all from an ES5.1-compliant engine.

<details>
From te bunch of ex-Googlers at an irish company, we probably shouldn't be of this rather impressive achievement. But it *still* wasn't enough...
</details>

---
[](#.white-background)
!.bg.centered.drop-shadow[V7 is deprecated in favor of mjs](../img/v7-deprecated.png)

## ...well, it _was_

---
[](#.white-background)
!.bg[We need to go smaller](../img/smaller.jpg)

---
[](#.white-background)
!.bg.centered[mjs, part of Cesanta Mongoose OS](../img/mongoose-os.png)

### Enter: mjs

<details>
This is not the same as "mujs", which is an *another* embeddable JS-engine.
</details>

---
[](#.white-background)
!.bg.centered[mjs restrictions](../img/mjs-restrictions.png)

### mjs is a JavaScript-subset-engine

> This makes mJS fit into ~25k of flash space & less than 1k of RAM—but of course this comes at a price.

<details>
But even at this price, it may be "good enough", that is what mJS aims to be. Not perfect but ideal for *some*, very specific usecases that happen to come up when one is trying to get such a tiny device to work.
</details>

---
[](#.white-background)
!.bg.centered[Samsung OSG](../img/samsung-tc39.png)

### A rather large company also tried this, on the highest levels

---
[](#.white-background)
!.bg.centered[Samsung OSG](../img/samsung-osg.png)

<details>
Samsung engineers attended a TC39 (the comitee responsible for JavaScript's standardization) meeting in early 2014 to advocate for a standardization of a "JavaScript-subset", that would be more suitable to be run on microcontrollers. Samsung was met with general skepticims about building an ES-compliant JS engine (even with restrictions) in the multiple-kilobytes-range.
</details>

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/samsung-js-onmicrocontrollers-summary.jpg)

### Embedded explorations

<details>
Of course the negativity of TC-39 didn't stop Samsung from trying and the same year they have started research, exploring the possibilities of adopting such an embeddedded JS engine. Stripping the open source JavaScript Core engine from the superfluous bits turned out to be too much of a hassle, compared to using something that was built with embeddability in mind (e.g. the Duktape engine). Despite (or maybe because of) the findings of this research, Samsung ended up starting development on their very own JS engine...
</details>

---
[](#.white-background)
!.bg.centered[](../img/jerryscript.png)

### JerryScript

> JerryScript can run on devices with less than 64 KB RAM and <200 KB of flash, it is fully ES5.1-compliant & heavily optimized.

<details>
It took Samsung a year to complete the initial version of JerryScript, which they subsequently open-sourced and released to the public. It took about another year for the codebase to stabilize, but today it's one of the best (and most widely adopted) embedded JS engines besides Espruino (especially with companies building their own embedded products, such as...)
</details>

---
[](#.white-background)
!.bg.centered[](../img/microbit.png)


### Preparing yout for a digital age with the BBC Micro:bit

---
[](#.white-background)
!.bg.centered.drop-shadow[The Micro:bit MakeCode visual editor](../img/microbit-makecode.png) => https://makecode.microbit.org/#

### The MakeCode Editor on the Microbit

---
!.bg.centered[](../img/jsconf-2015.png)

<details>
JSConf 15, but also JSConfIS (Iceland), which is funny because this presentation was given at both conferences
</details>

---
!.bg.centered[](../img/pebble.jpg)

### Pebble's Rocky.js / Pebble.js announcement

---
[](#.white-background)
!.bg.contain[](../img/tictoc.png)

### Pebble's smartwatch watchfaces are JS+HTML5!

> They managed to run a JS/HTML5 watchface, powered by JerryScript without _it being less efficient than the C code_!

---
!.bg.contain[](../img/fitbit-ionic.jpg)

### ...and Fitbit took over right where Pebble left off

---
[](#.big)
## I hear 2018 is gonna be the year of the cloud!

---
!.bg.align-top[](../img/custom-arduboy.jpg)

### So how do you put JS on _these_?

<details>
mjs gets close, but not exactly. You'll need something of a very different approach.
</details>

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/clouduboy3-html5.jpg)

## Introducing: Clouduboy

<details>
Clouduboy is a lot of things. A library for creating tiny pixelgraphic images (PIF) and games (MicroCanvas). An online IDE for Arduino-based gaming devices. A compiler to turn JavaScript games to C++ ones and put them onto those tiny microcontrollers
</details>

---
[](#.big.slim)

## That cobbled-together mess. Not very exciting?

---
!.bg.contain[](../img/ruhrjs.jpg)

### How about this?

> The Arduboy is based on the same chipset and peripherals than the one you just saw. It just _looks nicer_ ;)

---
!.bg.cover[](../img/tinyarcade.gif)

### Or this one?

> The Tiny Arcade is slightly different. It has a much more powerful ARM MCU (same as the Micro:bit!) & color screen!


---
[](#keepplaying)
!.bg[](../img/play.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks a bunch!

#### [talk.flak.is/play/jsconf-asia](http://talk.flak.is/play/jsconf-asia/)

<span class=tweet>
![Clouduboy](../img/clouduboy-icon-large.png)
@clouduboy
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message">Keep playing!</div>

---

### Reading list:
- [JavaScript World Domination by Flaki](https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070)
- [Node.js on embedded devices? Why? By Jon Mckay](https://opbeat.com/community/posts/the-eternal-struggle-node-js-in-embedded-devices-by-jon-mckay/)
- [The Firmata protocol](https://github.com/firmata/protocol#readme)
- [Suz Hinton (noopkat) at Web Rebels, on firmata & using an Arduino with Node.js](https://vimeo.com/129003513)
- [Espruino executes code from source (and other performance considerations)](https://www.espruino.com/Performance)
- [Samsung exploring JS on microcontrollers](http://www.slideshare.net/seoyounghwang77/js-onmicrocontrollers)
- [Samsung's IoT pitch at the April 2014 TC39 meeting](http://tc39.github.io/tc39-notes/2014-04_apr-8.html#presentation-by-samsung-representatives)
- [Samsung's TC39 presentation](https://esdiscuss.org/notes/2014-04/ecma-tc39-talk-samsung.pdf)
- [It's JavaScript on the freakin' watch!](https://developer.pebble.com/blog/2016/08/15/introducing-rockyjs-watchfaces/)
- [Heiko Behrens on Rocky.js/Pebble.js](https://gist.github.com/HBehrens/1a91b97e1e98a6a09c5f)
- [Heiko announces Pebble.js at JSConf 2015](https://www.youtube.com/watch?v=2TslKh1tdm4)
- [Julien Crouzet's article about function inlining in node.js/v8 Turbofan](https://top.fse.guru/nodejs-a-quick-optimization-advice-7353b820c92e)
- [Joe McCann - Tuning Node (dotJS 2014)](https://www.youtube.com/watch?v=FXyM1yrtloc)


```js
console.log('Slides locked & loaded!')
```
