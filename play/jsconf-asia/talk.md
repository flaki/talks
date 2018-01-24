[](#opening)
!.bg[Baela says hi](/pic/baela-hwsw.jpg)


# Hello, JSConf Asia!

> Last updated: 2018-01-25

---
[](#title)
!.bg[Microchips & JS](http://www.bab.se/~babse/wp-content/uploads/2013/11/h62.jpg)


# Javascript on Hardware
## The stuff you always wanted to know but never dared to ask


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
!.bg[Ryan Dahl introducing Node.js at JSConf EU 2009](../img/ryandahl.png)

### 2009

> On the picture: Ryan Dahl at JSConf EU 2009 when he announced version 0.1.17 of Node.js

---
!.bg.centered[Node.js](../img/nodejs-logo.svg)


---
!.bg.contain[JavaScript World Domination by Flaki](../img/jsdomination.jpg)


---
!.bg[](../img/nodebots.png)

---
!.bg[Nodebots Johnny 5](../img/nodebots1.png)

### Nodebots


---
!.bg[Nodebots Johnny 5](../img/nodebots-j5.jpg)

## Node-robotics with Johnny Five


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

### Node rockets!


---
Firmata

---
Suz

---

Espruino

---
!.bg.centered[](../img/v8-logo.png)


---
!.bg.centered[](../img/v7-logo.png)


---
!.bg.centered[](../img/what-is-v7.png)


---
mujs
---

Samsung

---

Jerryscript

---
Microbit

---

Jsconf2015/Pebble/Fitbit

---

Clouduboy

---

Demo (Compile, Flash, Fitbit)

---

# Thanks a bunch!

---

### Reading list:
- [Suz Hinton (noopkat) about Firmata & Arduinos](https://vimeo.com/129003513)
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

  margin-left: 50vw;
  transform: translateX(-50%);
  min-width: 33%;
}

section>blockquote, section>ul, section>ol {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;

  position: absolute;
  top: unset;
  bottom: 0;
  right: 0;
  color: white;

  min-width: 40%;
  background: rgba(0,0,0,.85);
  padding: 1em;
  margin: 1em;
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
```

```js
console.log('Slides locked & loaded!')
```
