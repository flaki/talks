[](#opening)
!.bg[Baela says hi](/pic/baela-jsconfasia.jpg)


# Hiyya, 12min.me Budapest!

> Last updated: 2018-02-08

---
[](#title)
!.bg.top[Microchips & JS](../img/ftw-dino.jpg)


# 2,560 bytes
## ought to be enough for anyone


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

---
[](#whoami)
!.bg[Flaki, tinkering](/pic/tinker.jpg)


<div id=tinker>
  <img alt="JavaScript" src="/pic/js.png">
  <h3>JavaScript developer/trainer</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla Tech Speaker</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project member</h3>
</div>

---

!.bg[](../img/tessel.png)

### It all started on a sunny summer afternoon...

---
!.bg[](../img/flaki-tessel-at-budapest-js.jpg)
## Flaki meets the hardware world

---
[](#.big.slim)

## Fake it—or Make it!

---
!.bg.centered[](../img/jon-mckay-embedded-nodejs.png)
## On the Perks & Perils of Node.js on a Microcontroller

> from Technical Machine (Tessel) co-founder Jon McKay

---
[](#.white-background)
!.bg.centered.drop-shadow[](../img/tessel-lua.png)

## Running JavaScript on a microcontroller

> ...or... is it?  
> The Tessel 1 compiled JavaScript to Lua bytecode, which got pushed onto & executed by the device.

---
[](#.white-background)
!.bg.centered[The Espruino Pico](../img/espruino.jpg)

### Running _actual_ JavaScript on the device

> The Espruino sported its own compiler to run JavaScript, on-device

<details>
Standards support used to be bad but improved a lot and now it's "good enough". Espruino has been ported to several other devices since, one of the most well-known is the ESP 8266 which is a wifi-enabled microcontroller board!
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

### Ease of Use matters!

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
[](#.big.slim)

## Fake it 'til you make it!

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

### Developer Ergonomy Matters!

> Pebble managed to run a JS/HTML5 watchface, powered by JerryScript without _it being less efficient than the C code_!

---
!.bg.contain[](../img/fitbit-ionic.jpg)

### ...and Fitbit took over right where Pebble left off


---
[](#give-it-a-go.big)
# GIVE IT A GO!

---
[](#.big.link)
!.bg[](../img/dimorun.jpg)

## [cld.by/mozillaid](//cld.by/mozillaid)

---
[](#.big.link)
!.bg[](../img/offline-dino.png)

## [cld.by/ruhrjs](//cld.by/ruhrjs)

---
[](#.big.link)
!.bg[](../img/spaceinvaders.gif)

## [cld.by/invaders](//cld.by/invaders)

---
[](#keepplaying)
!.bg[](../img/play.gif)

# Thanks a bunch!

#### [talk.flak.is/play/12minbud](http://talk.flak.is/play/12minbud/)

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


```css
.main {
  color: hotpink;
}

p > img:first-child:last-child {
  max-height: calc(.7 * var(--slideh));
  /*! left: 50vw; */
  /*! margin-left: -50%; */
  display: block;
  position: relative;
}

blockquote a,
ul a,
ol a,
p a {
  font-family: Consolas, monospace;
  font-weight: bold;
  font-size: 80%;
  line-height: 80%;
  text-decoration: none;
  padding: .25em;
  color: #777;
}

blockquote ul, blockquote ol,
blockquote p {
  margin: 0 .5rem;
}
blockquote ul, blockquote ol {
  padding-left: 1rem;
}

.box,
h1, h2, h3 {
  display: block;

  color: hotpink;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0.85)) transparent;
  text-shadow: 0 .03em #555;

  padding: .5rem 1rem;
  margin: 1rem;

}

h1, h2, h3 {
	font-family: 'Oswald', sans-serif;
	font-weight: 600;

	text-align: center;
	text-transform: uppercase;
}

/* title h3 */
section > h3 {
  display: inline-block;

  left: 50vw;
  transform: translateX(-50%);
  margin-left: 0;
  min-width: 33%;
}

section>blockquote, section>ul, section>ol {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;

  position: absolute;
  top: unset;
  bottom: 0;
  right: 0;
  color: white;

  min-width: 40%;
  background: rgba(0,0,0,.85);
  padding: .6em;
  margin: 1em;
}


section {
  background: black;
}
.white-background {
  background: white;
}

.big h1,
.big h2 {
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
  padding: 1em;
}
.big h1 {
  font-size: 6rem;
}
.big h2 {
  font-size: 4rem;
}
.slim h1,
.slim h2 {
  font-weight: 300;
  letter-spacing: -.05em;
}

.big.link h2 {
	text-shadow: .05em .05em black,.05em -.05em black,-.05em .05em black,-.05em -.05em black,0 -.05em black,0 .05em black;
	text-transform: none;
	font-size: 5rem;
}
.big.link h2 a {
  text-decoration: none;
  color: inherit;
}


#title h1 {
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
}

#title h2 {
  font-size: 1.1rem;
}


#tinker {
  position: absolute;
  bottom: 0;
  margin: 1rem;

  display: flex;
  flex-wrap: wrap;
}

#tinker > * {
  margin: 0 0 1vw 0;
}

#tinker img {
  width: 3rem;
  height: 3rem;
  margin-left: 25vw;
}
#tinker h3 {
  margin-left: 1em;
  margin-right: 6em;
}

#tinker img[src="/pic/ts.png"] {
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.33);
  width: 2.8rem;
  height: 2.8rem;
  padding-left: .1rem;
}


#nodejs {
  background-image: url(../img/jsconfeu-2009.png);
  background-repeat: no-repeat;
  background-position: bottom right;
}


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


#keepplaying h4 {
  text-align: center;
  padding: 2em 0;
}
#keepplaying h4>a {
  text-decoration: none;
  color: white;
  font-family: 'Share Tech Mono', monospace;
  font-size: 2rem;
  border: .1em solid hotpink;
  padding: .2em .5em .1em;
  border-radius: .5em;
  background: black;
}

#keepplaying picture {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
#keepplaying picture>img {
  object-fit: contain;
  width: 50vh;
  height: auto;
  margin-bottom: 6vh;
  border-radius: 1rem;
}

#keepplaying div.message {
  font-family: 'Caveat';
  font-size: 3rem;
  color: hotpink;
  text-align: center;
  top: 78vh;
  position: absolute;
  text-shadow: 1px 1px black,1px -2px black, -3px 2px black, 3px 4px black, 4px 5px black;
  text-indent: -.5ch;
  width: 100%;
}

p .tweet {
  display: block;
  position: absolute;
  bottom: 2rem;
  left: 10vw;

  border: .25rem solid hotpink;
  border-radius: 1.25rem;
  background: black;

  font-family: Share Tech Mono;
  font-weight: bold;
  letter-spacing: -.05rem;
  color: white;
  text-align: center;
  line-height: 1.5rem;
  padding-bottom: .2rem;
}

p+p .tweet {
  left: auto;
  right: 10vw;
}

.tweet img {
  display: block;
  width: 16vw;
  border: .4rem solid transparent;
  border-radius: 1em;
}
```

```js
console.log('Slides locked & loaded!')
```
