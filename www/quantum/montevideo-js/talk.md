```meta
title: Firefox in the Quantum Era
description: Or, what is even a browser engine? — Flaki @ Montevideo JS, August 2018
keywords: mozilla, firefox, quantum, servo, rust, browser, engine, jank, webrender
social_image: http://talk.flak.is/pic/baela-wyeworks.jpg
canonical_url: http://talk.flak.is/quantum/montevideo-js/
```

```css
@import url("/s/themes/pinky.css");
```



[](#opening)
!.bg[Baela says hi](/pic/baela-wyeworks.jpg)

```css
#opening h1 {
  margin: auto;
  max-width: 50vw;
}
```

# Hello Montevideo JS!


> Last updated: 2018-08-31

------------------------------------------------------------
[](#title)
!.bg[Firefox Quantum](../img/firefoxquantum.jpg)

```css
#title h1 {
  font-size: 2.0rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60vh;
}
```

# Firefox in the Quantum Era


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

------------------------------------------------------------
[]()
!.bg[Browsers](../img/co-backfire.gif)

### <small>...a.k.a.</small> What Do Browser Engines Do, Even?!

------------------------------------------------------------
[](#whoami)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
```

<div id=tinker>
  <img alt="Mozilla DevRel" src="/pic/mozhacks.png">
  <h3>Developer Outreach / DevRel</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla TechSpeakers</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project, JS+HW hacker</h3>
</div>

------------------------------------------------------------
!.bg.align-top[](/oss/img/firefox-quantum.jpg)

# Emperor Fox's New Clothes: Firefox Quantum

> Firefox Quantum is the collective name of Firefox's new browser engine

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/potch-internet-magic-webpage.png)

### Engine? What engine?

> A browser engine is what sits between webpages on the internet and the picture rendered for your eyes to see by a web browser...

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/quantum-doge.gif)

# Quantum: Servo, Rust; and everything nice...

> The "Firefox Quantum" includes various improvements and parts of Mozilla's "Servo" engine.

<details>
  The "Quantum" moniker covers a host of new technologies that make the new Firefox faster, safer, and in general better. Some of these technologies come from another Mozilla project, called "Servo".
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](/pic/servo.png)

## Much Browser, such Rust: Servo

> [Servo](https://servo.org/) is an experimental browser engine written in Rust by Mozilla.

<details>Servo is mainly focusing on modern hardware, high-level parallelization and cutting edge rendering engine techniques - it allows Mozilla engineers to experiment without breaking your favorite browser every day! Servo is written from the ground-up in Rust, a fairly new systems-level programming language.</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](/pic/rust.png)

## Rust: Speed, Parallelism, Safety

> [Rust](https://rust-lang.org/) is a highly performant systems programming language focusing on speed, memory safety and easy parallelization

------------------------------------------------------------
[](.white-background)
!.bg.centered.drop-shadow[](../img/valentingosu-oxidizing-firefox.jpg)

### Servo isn't the only part of Firefox written in Rust

> Check out Valentin Gosu's talk on "Oxidizing Firefox" (link at the end)


------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/tweet-ticky-rust-parallel.png)

### Rust 💖 Parallel Execution

> One of the things Rust is very good at is parallelism and avoiding data races! [tweet by @ticky](https://twitter.com/ticky/status/1035036463832780800)


------------------------------------------------------------
[]()
!.bg[Browsers](../img/co-superspeed.gif)

# Servo: a browser engine - on steroids


------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/servo-parallel-reddit.png)

### Servo (and Rust) is very good at running things in parallel

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/servo-parallel-layout-perf.png)

### Using all cores is useful!

> Putting all cores helps performance, load times, battery usage, heat dissipation - so in general a very good practice.

<details>
  ...it's also fairly hard to do so. This is where Rust comes into the picture...
</details>


------------------------------------------------------------
!.bg[](../img/firedoge.jpg)

### Quantum 💖 Servo

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/quantum-css.jpg)

### Quantum 💖 Good Ideas™️

> Image by Lin Clark - find the whole blogpost in the links section later!

------------------------------------------------------------
[](#you-need-node.big.white-background)
## The War On JANK

------------------------------------------------------------
!.bg[](../img/co-jank.gif)

------------------------------------------------------------
[](.white-background)
!.bg.contain[](../img/linclark-jank.gif)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/tweet-mike_conley-tabswitch.png)

### Making things FAAASSSSST

> [tweet by @mike_conley](https://twitter.com/mike_conley/status/936728556008329219)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/firefox-omtp.png)

### ...by moving things off the main thread


------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/linclark-sarasoueidan-nightly-tweet.png)

### It makes a difference!

> [tweet by @SaraSoueidan, image by Lin Clark](https://twitter.com/SaraSoueidan/status/902179076236079104)
------------------------------------------------------------
[](#you-need-node.big.slim.white-background)
## What Does The Future Hold?

------------------------------------------------------------
[](.white-background)
!.bg[](../img/linclark-quantum-webrender.jpg)

### The future of Firefox's graphics backend: WebRender

> Read Lin Clark's complete intro to WebRender (link in the end)

<details>
Composited Layers vs Display Lists
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/tweet-pcwalton-webrender.png)

### ...a not-too-distant fututre, actually!

> [tweet by @pcwalton](https://twitter.com/pcwalton/status/1025592938259144705)

------------------------------------------------------------
!.bg[](../img/co-get-it-now.gif)

### You can already try it!

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/enable-webrender.jpg)

### ...in Firefox Nightly now & in Firefox 63 later this fall!

> For some hardware configurations WebRender will be enabled by default in the release version of Firefox 63 coming this fall!

------------------------------------------------------------
!.bg.centered[](/play/img/clouduboy-nodeconfar.jpg)

### Come to NodeConf Argentina in October!

> I'm speaking & giving a workshop in October in Buenos Aires

------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/co-fin.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks!

#### [talk.flak.is/quantum](http://talk.flak.is/quantum/montevideo-js/)

<span class=tweet>
![Mozilla Hacks](/pic/mozhacks.png)
@mozhacks
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message"></div>

------------------------------------------------------------

### Reading list:
- [But what is even a browser engine? by Potch](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/)
- [Watch "How Firefox Quantum came to be?" - a talk by Jean-Yves Perrier](https://www.youtube.com/watch?v=Frwe3x8HfwE)
- [Oxidizing Firefox: putting Rust code in Firefox, watch the talk by Valentin Gosu](https://www.youtube.com/watch?v=7ti6EtP8W8c)
- [About the various Quantum technologies in Firefox, blogpost from Lin Clark](https://hacks.mozilla.org/2017/11/entering-the-quantum-era-how-firefox-got-fast-again-and-where-its-going-to-get-faster/)
- [What is Servo? Nathan Willis' impressions on Lars Bergstrom's LinuxConJP talk](https://lwn.net/Articles/647969/)
- [Off-main-thread painting deep dive from the Mozilla Gfx team](https://mozillagfx.wordpress.com/2017/12/05/off-main-thread-painting/)
- [Parallel parsing of CSS, Potch talks about Firefox 61](https://hacks.mozilla.org/2018/06/firefox-61-quantum-of-solstice/)
- [Why throw away a perfectly good display list? Matt Woodrow on retained display lists in Firefox 61](https://hacks.mozilla.org/2018/06/retained-display-lists/)
- [Is it a browser or an AAA game engine? Lin Clark explaining how WebRender works](https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/)


```js
console.log('Slides locked & loaded!')
```
