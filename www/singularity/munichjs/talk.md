```meta
title: Approaching the JavaScript singularity
description: New JS features, across platforms — Flaki @ TechSpeakers Meetup Paris, September 2018
keywords: rust, webassembly, web, javascript, wasm, rustwasm, asmjs
social_image: http://talk.flak.is/singularity/img/nasa-blackhole2.jpg
canonical_url: http://talk.flak.is/singularity/munichjs/
```

```css
@import url("/s/themes/variably.css");
@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=UnifrakturCook:700');
```



[](#opening)
!.bg[hi](../img/hello-munich.jpg)

```css
#opening h1 {
  margin: auto;
  max-width: 100vw;
}
```

# Hello Munich JS!


> Last updated: 2018-10-10


------------------------------------------------------------
[](#whoami.white-background)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
#whoami > h3 { left: 75vw; background: rgba(0,0,0,.75); padding: .5em 3em; }
```

### Szmozsánszky István "Flaki"<br />`@slsoftworks`

<div id=tinker>
  <img alt="Mozilla DevRel" src="/pic/mozhacks.png">
  <h3>Developer Outreach / DevRel</h3>

  <img alt="Mozilla TechSpeakers" src="/pic/ts.png">
  <h3>Mozilla TechSpeakers</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project, JS+HW hacker</h3>
</div>

------------------------------------------------------------
[](#title)
!.bg[](../img/nasa-blackhole2.jpg)

```css
#title h1 {
  font-size: 3.0rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding: 1.75rem;
}
#title blockquote {
  background: white;
  color: black;
  opacity: 1;
}
```

# Approaching the JavaScript Singularity


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

---
[](#onejs.big.slim.white-background)
!.bg.cover[](../img/brendan.jpg)

## One JavaScript <sub><small>_(thread)_</small></sub>

```css
#onejs h2 sub {
  display: block; font-size: 50%;
}

```

<details>
JavaScript is single-threaded, long-running tasks in JS-land will block execution of everything else. Node.js tried making up for this by putting I/O into their own separate threads via separate APIs, but JS code remains single-threaded even in Node.js up until today.
</details>

---
!.bg.contain[](../img/webworkers.jpg)

# Solution: Workers!

> ...or, is it..?

(c) [Illustration by `techsith`](https://www.youtube.com/watch?v=pMK-jcOAYI8)

<details>
Different runtimes came up with different solutions to this problem. On the web, we have traditionally solved the issue with Workers (Web Workers, Shared Workers, lately Service Workers and lightweight _worklets_), while Node.js got a bit heavy handed with Cluster module and various other process forking solutions.
</details>

---
!.bg.centered[](../img/nolan-workers.jpg)

# Web Workers in the browser

> * [Web Workers TL;DR by Dan Callahan](https://www.youtube.com/watch?v=WBmttwfA_k8)
> * [Nolan Lawson on Web Workers](https://www.youtube.com/watch?v=OgLemdR65pE)

<details>
Web workers in the browser operate using simple message passing and shared memory (via `SharedArrayBuffer`). It's a tool that is fairly well-known, but actually quite infrequently used.
</details>

---
!.bg.contain[](../img/spectre.png)

# Spectre/Meltdown & `SharedArrayBuffer`

> * [`SharedArrayBuffer` disabled in Firefox](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/)

<details>
</details>

---
!.bg.centered[](../img/node-workers.png)

# Workers coming to Node

(c) [via Anna Henningsen](https://addaleax.net/workers-nordicjs/)

---
!.bg.centered[](../img/node-workers-example.png)

# Well, not quite the same as Web Workers, but close

(c) [via Anna Henningsen](https://addaleax.net/workers-nordicjs/)

---
!.bg.centered[](../img/netscape.jpg)

# Apropos, Speed!

<details>
JS was never intended to be fast
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](/wasm/ts-meetup/img/js-execution-speed.png)

### Our story starts around the JS-engine perf wars...

(c) [JavaScript World Domination](https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070)

<details>
Yet V8's speed enabled Node.js, and Node enabled an amazing variety of possibilities.

Our story starts around 2012. Several years into the JavaScript engine performance arms race kickstarted by V8’s release in 2008 just-in-time compilation and careful optimizations have resulted in an explosive speed-up in JS execution speeds.

</details>

---
[](#.white-background)
!.bg.centered[](/wasm/img/webassembly-logo.svg)

# Enter WebAssembly

<details>
WebAssembly was born.
</details>

------------------------------------------------------------
!.bg.contain[](/wasm/ts-meetup/img/wasm-code-explorer.png)

(c) [WebAssembly code explorer](https://wasdk.github.io/wasmcodeexplorer/)

> * An efficient stack machine
> * Binary representation + text format
> * Open & debuggable
> * A complement to the web—not a competitor

<details>
Ditching the makeshift JS form compresses the code over the wire & improves loading speeds (in Firefox WASM is compiled faster than it comes through the wire!), while WASM code itself supports an initial limited set of numeric types and is executed by the browser with similar safety guarantees as JavaScript (usually running inside the same VM as JS).

Some of these limitations are due to the MVP-nature of the current specification, but some are intentional — WASM is built to communicate extensively with other parts of the browser/JS APIs, and to extend, rather than replace its existing functionalities.
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](/wasm/ts-meetup/img/zengarden-firefox.jpg)

### JavaScript is fast but not this fast

(c) [Epic Zen Garden](https://s3.amazonaws.com/mozilla-games/ZenGarden/EpicZenGarden.html)

<details>
Easy to see why! The web has become the most popular application-development platform (one of the most widely used and accessible ones), and is rapidly gaining new capabilities to cater for the sudden rise in expectations. Games happened to be a pretty good proxy for the vast "high-quality multimedia applications" space — high-performance apps with heavy use of graphics-, audio- & computation resources, networking and interactivity.
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](http://fitzgeraldnick.com/media/set.first.breakpoint.with.sub.sorting.scalajs.svg)

### Fast enough to run parts of your browser

(c) [Speed without Wizardry, by @fitzgen](https://twitter.com/fitzgen/status/968146167132389376)

<details>
…or improving source map parsing speed tenfold in Firefox’s Developer Tools by surgically replacing performance-sensitive parts of its JavaScript-heavy Debugger with tailor-made WebAssembly solutions. Yes, that's JavaScript and WebAssembly powering parts of a production web browser on hundreds of millions of computers all across the world!
</details>

----
!.bg.centered[](../img/node-gyp.png)

### Yearning for speed in Node.js

------------------------------------------------------------
[](.white-background)
!.bg.centered[](/wasm/ts-meetup/img/dan-callahan-pycon.png)

### Lower-level abstractions for performance & control are not new

(c) [Dan Callahan, PyCon 2018](https://www.youtube.com/watch?v=ITksU31c1WY)

<details>
When we take a look at any number of programming languages, dropping to a lower level of abstraction when performance or access to system resources require it is a mainstream practice: high-level languages like Ruby, Python, even Node.js achieve this via platform-specific binary modules; even low-level languages like C/C++ allow for inline assembly when performance & precise control becomes a priority. What WebAssembly brings today is this exact capability to the entire Web Platform — without the drawbacks like platform-dependence, but also with the added choice of virtually any programming language (with big asterisks on "any", at least today).
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](/wasm/ts-meetup/img/node-sass.png)

### A potential fix...

(c) [node-sass on GitHub](https://github.com/sass/node-sass/issues/2011)
<details>
In fact WebAssembly might be first in line for solving some of these platforms’ binary-module-specific woes.
</details>



---
[](.white-background)
!.bg.centered[](https://bertrandg.github.io/images/js_modules/js-modules.png)

# Isolation, Modularization, loose coupling

(c) [illustration via `bertrandg`](https://bertrandg.github.io/)


<details>
Having everything in a single thread/process makes you sloppy

You need modularization, isolation and asynchronous loose coupling (+synchronization)
</details>

---
[](.white-background)
!.bg.centered[](../img/linclark-modules-jquery.png)

# ...wasn't always great

> ...or, like, ever...

(c) [Illustration by Lin Clark](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

<details>
Let's face it, JS wasn't great in isolation, especially async (commonJS is inherently sync - again, it's more 'convenient')

We got better, promises and later async (thanks, Maya!) made async calls _almost_ as convenient as synchronous ones. What about isolation?

Well, good news!
</details>

---
[](.white-background)
!.bg.centered[](../img/esm-import.png)


# ES Modules

> * [Axel Rauschmayer's explainer](http://2ality.com/2014/09/es6-modules-final.html)
  > * [Lin Clark's cartoon explainer](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
> * [MDN docs on `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

---
[](#.white-background)
!.bg.centered[](../img/franzi-esm.png)

# Native (Experimental) ES Modules in Node 10

(c) [Illustration by @fhinkel](https://twitter.com/fhinkel)


---
[](.white-background)
!.bg.cover[](../img/linclark-wasm-esm.png)

### WebAssembly + ES Modules interop

(c) [Illustration by @linclark](https://twitter.com/linclark)

---
!.bg.cover[](../img/bugsbunny-future.jpg)
### The Future

> * Threads in WebAssembly!
> * [WebAssembly integration with ES Modules!](https://linclark.github.io/wasm-es-modules/slides/2018-06-12/) (check out Lin Clark's [explainer](https://hacks.mozilla.org/2018/03/making-webassembly-better-for-rust-for-all-languages/))
> * Native `fetch()` coming in node?
> * Brand new [N-API in Node 10](https://medium.com/the-node-js-collection/n-api-next-generation-node-js-apis-for-native-modules-169af5235b06) for native modules
> * [Node.js & JS foundations considering a merger](https://twitter.com/MylesBorins/status/1047875227731070979)
> * What is the Web, even?
>   - [but what *is* the web, really?](https://twitter.com/graydon_pub/status/1047888158514278400)
>   - [tomorrow's Web might by vastly different](https://hacks.mozilla.org/category/dweb/)

(c) BUGS BUNNY PUZZLE Fortune Teller Whitman 1959

<details></details>

---
!.bg.contain[](../img/dachfest.jpg)

# DACHfest

> * Developer conference in Munich in November
> * Use the `munichjs` discount code on [tickets.dachfest.com](https://tickets.dachfest.com/) for a discount!

---
!.bg.contain[](../img/node-js-interactive.png)

# Node+JS Interactive

> [Node+JS Interactive 2018](https://events.linuxfoundation.org/events/node-js-interactive-2018/)

---
!.bg.cover[](/play/img/tiny-arcade-braziljs.jpg)

> Talk to me about JavaScript on hardware & [@clouduboy](https://twitter.com/clouduboy)!



------------------------------------------------------------
!.bg.contain[](https://media.giphy.com/media/10ZpyYs0OvVlnO/giphy.gif)
<details>
The not-so-secret purpose of this talk is to whet your appetite to know more about this exciting feature of the web platform.

Some of the points I made would have deserved their own talks (which I'll probably need to cater for at some point, at least in the form of a blogpost), but if you are interested in any of them in more detail, be sure to find me after the talk or reach out to me on Twitter (@slsoftworks) or any of my other contacts at flak.is.
</details>



------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/assemblin.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks!

#### [talk.flak.is/singularity/munichjs](http://talk.flak.is/singularity/munichjs/)

<span class=tweet>
![Mozilla Hacks](/pic/mozhacks.png)
@mozhacks
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message">Keep on Assemblin'!</div>

------------------------------------------------------------
[](.reading-list)

```css
@import url("/s/reading-list.css");
```

### Reading list:
- [The ASM.js FAQ](http://asmjs.org/faq.html) with [Alon's original presentation](https://kripken.github.io/mloc_emscripten_talk/)
- WebAssembly is [more than just Web](https://words.steveklabnik.com/webassembly-is-more-than-just-the-web) - and definitely  [more than just the revival of Flash](https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash) - articles by Steve Klabnik
- [Understanding WAT, the WebAssembly Text Format - an MDN guide by Chris Mills](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)
- A workshop-style intro to [Rust+WebAssembly](https://ashleygwilliams.github.io/helloWASM/) & [wasm-bindgen](https://rustwasm.github.io/hello-wasm-bindgen/) by Ashley Williams & Steve Klabnik
- [Hack Without Fear!](https://mnt.io/2017/06/06/rust-hack-without-fear/) — [Fearless concurrency in Rust](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html) and in [Servo/Firefox](https://blog.rust-lang.org/2017/11/14/Fearless-Concurrency-In-Firefox-Quantum.html)
- An explainer on [wasm-bindgen](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/) by Alex Crichton and [wasm-pack](https://hacks.mozilla.org/2018/04/hello-wasm-pack/) by Ashley Williams
- [WebP image decoding using WebAssembly & emscripten](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
- [Mozilla's streaming & tiered WebAssembly compilation - a blogpost by Lin Clark](https://hacks.mozilla.org/2018/01/making-webassembly-even-faster-firefoxs-new-streaming-and-tiering-compiler/) and [V8's WebAssembly baseline compiler: Liftoff](https://v8project.blogspot.com/2018/08/liftoff.html)
- [Nick Fitzgerald's post on embedding WASM in the devtools](https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/) with [Vyacheslav's response](https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html) & [Nick's followup](http://fitzgeraldnick.com/2018/02/26/speed-without-wizardry.html)
- Dan Callahan [presents about WebAssembly at JSConf Budapest, runs DOS & Netscape in a browser](https://www.youtube.com/watch?v=bac0dGQbUto)



```js
console.log('Slides locked & loaded!')
```
