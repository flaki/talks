```meta
title: Approaching the JavaScript singularity
description: New JS features, across platforms — Flaki @ JSHeroes 2019
keywords: node, nodejs, webassembly, web, javascript, wasm, rustwasm, esm, workers
social_image: http://talk.flak.is/singularity/jsheroes/img/social.jpg
canonical_url: http://talk.flak.is/singularity/jsheroes/
```

```css
@import url(/s/themes/variably.css);
@import url(/fonts/SixCaps.css);
```


[](#opening)
!.bg[hi](/pic/baela-jsheroes.jpg)

```css
#opening h1 {
  margin: auto;
  max-width: 100vw;
}
```

# Hello JS-heroes!!


> Last updated: 2019-04-12

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
.slim h1,
#title h1 {
  font-family: Six Caps;
  font-weight: normal;
  font-size: 6rem;
  line-height: 7rem;
  letter-spacing: 0;
}
```

# Approaching<br>the JavaScript Singularity


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

---
[](#)
!.bg.contain[](./img/blackhole.gif)

## <small>a.k.a.:</small> the burning questions of the JS ecosystem

(c) [@mart3ll](https://twitter.com/mart3ll/status/1115970867509506048)

<details>
</details>

---

### JavaScript in Hyperdrive

!.bg[CERN CMS](img/cern-cms.jpg)

> - 2008: V8 (Node.js in 2009)
> - 2013: asm.js (WebAssembly in 2015)

(c) [CERN](https://cms.cern/detector)

<details>
JavaScript is everywhere. JavaScript is faster than ever. JS became fast despite itself - it was never _intended_ to be particularly fast, but as its adoption grew it was _destined_ to be.
</details>

---
[](#.white-background)
!.bg.centered.bigger[](../img/chanezon-js-speed.jpg)

# Birth of the GREAT DIVIDE

(c) [Patrick Chanezon](https://www.slideshare.net/chanezon/hdc09-keynote-browser-mobile-cloud-social-geo-portrait-of-the-developer-as-a-kid-in-a-candy-store)

<details>
The boom in execution speed gained JavaScript new embedders, as it enabled new usecases.
</details>

---
[](#adactio)
```css
#adactio div.quote {
  width: 80vw;
  margin: auto;
  font-size: 2.9rem;
  font-family: Six Caps;
  line-height: 3rem;
  text-indent: -.25em;
}
#adactio div.quote > img {
  width: 12vw;
  border-radius: 50%;
  float: left;
  margin-right: .5em;
  margin-bottom: 4em;
}
#adactio div.quote > blockquote {
  color: white
}
#adactio div.quote .pink {
  color: var(--heading-color);
  white-space: nowrap;
}
```
### Universal & Isomorphic

<div class="quote">
<img src="https://adactio.com/images/photo-150.jpg" />
<blockquote>“We’ve worked on multiple React projects, but in every case, the output was server-rendered. Developers get the benefit of working with a tool that helps them. Users don’t pay the price.” <span class="pink">— Jeremy Keith</span></blockquote>
</div>

> - [Jeremy Keith - Split](https://adactio.com/journal/15050)
> - [Remy Sharp - Code highlighting](https://twitter.com/rem/status/1115530120838680576)

<details>
SSR! I cannot promise to explain away the framework churn, this isn't a talk for that, I would be up here all day. Jeremy Keith & Remy Sharp in their recent articles provide insights into one particular facet of this issue, though: does it matter, if the user won't see it?

The answer is "Maybe. Maybe not." -- see Adactio's concerns why it might still matter but for the sakes of this talk, I'll focus on how JavaScript's universality on the client AND the "server" enabled this in the first place.
</details>

---
### Let's talk about Node.js

!.bg.centered[Node.js](../img/nodejs-logo-black.jpg)

> It earned its place (tooling, server-side)
> - server side code (servers)
> - functions (serverless)
> - ssr/ssg (back-of-front-end)
> - tooling

<details>
Let's talk about Node.js. Why Node?
</details>

---
[](#.big.slim)
!.bg.cover[](../img/space.jpg)

# COULDA?<br>WOULDA?<br>SHOULDA?

---
[](#.white-background)
!.bg.centered[](img/dshaw-nodejs-webplatform.jpg)

### Node.js & the Web

> - missing secure sandbox
> - unlimited file and network access
> - native modules
> - exec permissions

(c) [@dshaw](https://speakerdeck.com/dshaw/node-dot-js-and-the-web-platform)


<details>
Node is not the Web -- but this is _on purpose_. DShaw actually talks about its ongoing (and much needed!) transformation in the talk I linked to from NodeConf Argentina last year, and I'll get into this in a minute but first...
</details>

---
!.bg[Planet breaking up, by David Edwards](img/david-edwards-moon-break.jpg)

### The Permissions Fissure

>
> - network (request vs fetch -- CORS)
> - filesystem (unlimited -- sandbox/dom api)
> - native (high-speed) execution (native binaries vs ...?)
> - low-level features and system access (hardware, graphics)
> - advanced processing features (threads, simd...)

<details>
A single system cannot cover every single use case. No matter how flexible a system is, there's a good chance someone will need an even more powerful one, and will build it -- there will always be differences. The important question is: how easy it is to move between these systems.
</details>

(c) [David Edwards](https://index.artstation.com/artwork/Kzxkr)

---
[](#.white-background)
!.bg.centered[excerpt](img/jakea-packages-go-bad.png)

### With great power, comes great vulnerability

(c) [Jake Archibald - When packages go bad](https://jakearchibald.com/2018/when-packages-go-bad/)

<details>
When Node chose to forgo the sandbox, that invited all kinds of weirdness. Jake (and few others) have been musing about the security implications of this lately, and while there are mitigations against most of these issues, this insecure baseline is less than ideal. That said...
</details>

---
### Node.js was _inevitable_

!.bg.contain[JavaScript world domination](../img/jsdomination.jpg)

(c) [JavaScript World Domination](https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070)

<details>
Node.js was born out of the need of wanting to do more with a familiar (and now finally fast) language, using it in many more places than just writing scripts that chased the mouse pointer around and greeted the user by their name. Node wasn't the first attempt at this, but for a variety of reason that we cannot dive into here, became a wildly successful driving force in the inevitable rise in JavaScript usage.
</details>




---
[](#.white-background)
!.bg.centered[Node.js and the Web Platform](img/dshaw-nodejs-and-the-webplatform.jpg)

# SHIFTING TIDES

(c) [@dshaw](https://speakerdeck.com/dshaw/node-dot-js-and-the-web-platform)

---
!.bg.centered[](../img/node-workers.png)

# API convergence: slowly but surely

(c) [via Anna Henningsen](https://addaleax.net/workers-nordicjs/)

---
!.bg[](img/anna-roadtoworkers.jpg)

### More on worker threads from Anna Henningsen

(c) [Anna Henningsen - Node.js: The Road to Workers](https://www.youtube.com/watch?v=pO5a10YPQG4)

---
[](#.white-background)
!.bg.centered[Joyee Cheung - Web APIs in Node.js Core: Past, Present, and Future](img/joyee-webapis.png)

### The prodigal son...

(c) [@joyeecheung / JSConf EU](https://2019.jsconf.eu/joyee-cheung/web-apis-in-node-js-core-past-present-and-future.html)

---
[](#.white-background)
!.bg.centered[Joyee Cheung - Web APIs in Node.js Core: Past, Present, and Future](img/joyee-webapis.png)

### The prodigal son... returns?

(c) [@joyeecheung / JSConf EU](https://2019.jsconf.eu/joyee-cheung/web-apis-in-node-js-core-past-present-and-future.html)

> Node.js is slowly [finding its way](https://nodesource.com/blog/experimental-features-in-node.js) back to the Web Platform:
> * [Native `fetch()`](https://mobile.twitter.com/MylesBorins/status/1114039780382261248)
> * Various utility APIs (e.g. TextEncoder/Decoder)
> * Cross-platform viable APIs (e.g. Performance Timing API)
> * WebAssembly & ES Modules

<details>
While most of these are DOM (browser) APIs, the last two come with the JS-engine so it shouldn't be that surprising that they are (eventually) going to be supported -- but, as with everything in Web & Standards land, this is far from being _this_ straightforward :)
</details>




---
[](#.white-background.big.slim)
!.bg.cover[](img/space.jpg)

# À propos modules...

---
[](.white-background)
!.bg.centered[](../img/linclark-modules-jquery.png)

# Code separation in JavaScript

> ...has traditionally been perilous

(c) [Illustration by Lin Clark](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

<details>
Let's face it, JS wasn't great in isolation, especially async (commonJS is inherently sync - again, it's more 'convenient')

We got better, promises and later async (thanks, Maya!) made async calls _almost_ as convenient as synchronous ones. What about isolation?

Well, good news!
</details>

---
[](#.white-background)
!.bg.centered[](img/npm-modules.png)

### Node & npm had a bat at fixing this

(c) [modulecounts.com](http://www.modulecounts.com/)

---
[](.white-background)
!.bg.centered[](https://bertrandg.github.io/images/js_modules/js-modules.png)

(c) [illustration via `bertrandg`](https://bertrandg.github.io/)


<details>
Having everything in a single thread/process makes you sloppy

You need modularization, isolation and asynchronous loose coupling (+synchronization)
</details>

---
[](#.white-background)
!.bg.centered[](img/awb-cjs.png)

(c) [@awbjs](https://twitter.com/awbjs/status/1115303494297108486)


### Okay, so how _big of a mess, exactly?_

---
[](.white-background)
!.bg.centered.bigger[](../img/esm-import.png)


# EcmaScript Modules has set out to fix this mess

> * [Axel Rauschmayer's explainer](http://2ality.com/2014/09/es6-modules-final.html)
  > * [Lin Clark's cartoon explainer](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
> * [MDN docs on `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

---
[](#.white-background)
!.bg.centered[](../img/franzi-esm.png)

# Experimental Native ES Modules in Node 10+

(c) [Illustration by @fhinkel](https://twitter.com/fhinkel)

---
[](#.white-background)
!.bg.centered[](img/myles-node-esm.png)

# It gets even better...

(c) [@MylesBorins](https://twitter.com/MylesBorins/status/1110993825214930944)

<details>
Node.js ESModules Phase two adds seamless support and adoption for the EcmaScript modules spec. CommonJS is basically "legacy" now. Complete opt-in possible, interop with CJS also possible and reasonably effortless. Currently still needs `--experimental-modules` cmdline flag.
</details>

---
[](#.white-background.big.slim)
!.bg.cover[](img/space.jpg)

# But...will it blend (in)?

<details>
So you could _use_ modules across platforms but will they _work_? The API differences between the platforms might mean they won't (and that's exactly why the DOM API convergence is good news), or you could use the appropriate abstractions, but there's a way around this too. But before we get into that, let's have a look into how the fancy stuff works under the hood in Node.js
</details>

---
[](#gyp.white-background)
!.bg.centered.bigger[](../img/node-gyp.png)

# Ever met this guy? :)

<details>
Besides the libUV bindings, Node.js also allows binary modules, compiled during installation from scratch by `node-gyp`. Ideally.
</details>

---
!.bg[](img/electron-arch.jpg)

### The rabbit hole goes even deeper with Electron

[Illustration by Shelley Vohr](https://github.com/codebytere/talks/tree/master/node-summit-2018)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/callahad-portability.jpg)

### These lower-level abstractions are nothing new

(c) [Dan Callahan, PyCon 2018](https://www.youtube.com/watch?v=ITksU31c1WY)

<details>
When we take a look at any number of programming languages, dropping to a lower level of abstraction when performance or access to system resources require it is a mainstream practice: high-level languages like Ruby, Python, even Node.js achieve this via platform-specific binary modules; even low-level languages like C/C++ allow for inline assembly when performance & precise control becomes a priority. What WebAssembly brings today is this exact capability to the entire Web Platform — without the drawbacks like platform-dependence, but also with the added choice of virtually any programming language (with big asterisks on "any", at least today).
</details>

---
[](#.white-background)
!.bg.centered[](/wasm/img/webassembly-logo.svg)

<details>
WebAssembly was born, out of the need for something that was able to cater for those usecases not already covered
</details>

------------------------------------------------------------
[](#.white-background)
!.bg.centered.bigger[](/wasm/ts-meetup/img/node-sass.png)

### WebAssembly one day may solve all your binary portability problems

(c) [node-sass on GitHub](https://github.com/sass/node-sass/issues/2011)

<details>
In fact WebAssembly might be first in line for solving some of these platforms’ binary-module-specific woes.
</details>

---
[](.white-background)
!.bg.cover[](../img/linclark-wasm-esm.png)

### Small, fast, portable bundles with WebAssembly + ES Modules

(c) [Illustration by @linclark](https://twitter.com/linclark)

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/fitzgen-scalajs.svg)

### Fast enough to power parts of your browser!

(c) [Speed without Wizardry, by @fitzgen](https://twitter.com/fitzgen/status/968146167132389376)

<details>
Wasm is used in improving source map parsing speed tenfold in Firefox’s Developer Tools by surgically replacing performance-sensitive parts of its JavaScript-heavy Debugger with tailor-made WebAssembly solutions. Yes, that's JavaScript and WebAssembly powering parts of a production web browser on hundreds of millions of computers all across the world!
</details>

---
[](#.white-background)
!.bg.centered.bigger[](img/sqoosh-piston-rustwasm.png)

### MVP or not, Wasm is already in production

(c) [@DasSurma](https://twitter.com/jaffathecake/status/1103353983538774021)

<details>
Wasm-ifying a small, purpose-built Rust library and using it on the web is the perfect usecase behind WebAssembly!
</details>





------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/electron-history.png)

# Experimentation is essential!

------------------------------------------------------------
!.bg[](img/vscode-firefox.jpg)

### It's like jQuery all over again!

<details>
I'm not saying you should re-implement jQuery in the Lambda-calculus...

Tech that was once experimental, is now running purely in-browser!
</details>

----
[](#.white-background)
!.bg.centered[](../img/iodide.gif)

# Jupyter on steroids

(c) [Iodide: experimental web tool for scientific exploration](https://hacks.mozilla.org/2019/03/iodide-an-experimental-tool-for-scientific-communicatiodide-for-scientific-communication-exploration-on-the-web/)

------------------------------------------------------------
[](#.white-background)
!.bg[](../img/wasi.png)

### Early standardization might help with the later head-scratching

(c) [@linclark - Standardizing the WebAssembly System Interface (WASI)](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)

------------------------------------------------------------
!.bg.contain[](img/lin-wasi-sandbox.jpg)

### Thinking about security early on

(c) [@linclark - The WASI security model](https://www.youtube.com/watch?v=ggtEJC0Jv8A)

------------------------------------------------------------
[](#.white-background)
!.bg.centered.bigger[](../img/node-fetch.png)

## Experiments teach us how to improve our ways

(c) `nodejs/node` [Implement window.fetch into core #19393](https://github.com/nodejs/node/issues/19393)

------------------------------------------------------------
[](#.white-background)
!.bg[](img/deno-permissions.png)

## Deno tried to learn from the permission-cataclysm

(c) `nodejs/node` [Implement window.fetch into core #19393](https://github.com/nodejs/node/issues/19393)

------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/deno.png)

## The tools might be there already

(c) [via @slsoftworks](https://twitter.com/slsoftworks/status/1050677737969475584)

<details>
Node.js might have not had a choice 10 years ago, but the tools might already be there today. Deno is an experiment in exploring these tools.


---
[](#.white-background)
!.bg.contain[](../img/unicorns-n-rainbows.png)

## SUCH AMAZINGNESS!

<details>So much amazingness!</details>

---
[](#nodeconfarq)

```css
#nodeconfarq div.quote {
  width: 80vw;
  margin: auto;
  font-size: 2.9rem;
  font-family: Six Caps;
  line-height: 3.5rem;
  text-indent: -.25em;
}
#nodeconfarq div.quote > img {
  width: 12vw;
  border-radius: 50%;
  float: left;
  margin-right: .5em;
  margin-bottom: 4em;
}
#nodeconfarq div.quote > blockquote {
  color: white;
  text-align: center;
}
#nodeconfarq div.quote .pink {
  color: var(--heading-color);
  white-space: nowrap;
}
#nodeconfarq div.quote em {
  font-style: normal;
  color: cyan;
}
```

### Build your own toolbelt

<div class="quote">
<blockquote>“SHOULD I BE USING <em>NODE.JS</em> IN PRODUCTION?” <span class="pink">—NodeConf Argentina Panel</span></blockquote>
</div>

<details>
This is is from a Node conference.

These are just tools -- use the one that fits the job, and one that you (your team, your company...) is most familiar with.

Bad news: nobody _should_ tell you if you should use a tool. You will have to figure it out for yourself.
</details>


---
[](#.white-background)
!.bg.centered[](img/noopkat-jsparty.png)

### You don't have to know _everything!_

(c) [@noopkat](https://twitter.com/JSPartyFM/status/1115281824501182464) via JS Party

---
[](#.white-background)
!.bg.centered[](img/noopkat-jsparty.png)

### You don't have to know _everything_!

(c) [@noopkat](https://twitter.com/JSPartyFM/status/1115281824501182464) via JS Party

> * You don't have to know everything
> * Play early & often
> * Don't be afraid to step out of your comfort zone
> * Know yourself -- discover your strengths and interests
> * Build a team of different strengths
> * Identify problems & find the right people & tools to solve them with

<details>
But you need to discover new tools to be able to tell if you can use them for something. I'm not saying you should spend your nights & weekends trawling the orange website! Fight for time to discover new tools and regularly embed them in your (and your team's) workflow. R&D time.
</details>


------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/moon.gif)

```css
@import url("/s/keep-playing.css");
```

# Enjoy what you do!

#### [talk.flak.is/singularity](http://talk.flak.is/singularity)

<span class=tweet>
![Mozilla Hacks](/pic/mozhacks.png)
@mozhacks
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message">Thanks!</div>

------------------------------------------------------------
[](.reading-list)

```css
@import url("/s/reading-list.css");
```

### Reading list:
- [The ASM.js FAQ](http://asmjs.org/faq.html) with [Alon Zakai's original presentation](https://kripken.github.io/mloc_emscripten_talk/)
- WebAssembly is [more than just Web](https://words.steveklabnik.com/webassembly-is-more-than-just-the-web) - and definitely  [more than just the revival of Flash](https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash) - articles by Steve Klabnik
- [Understanding WAT, the WebAssembly Text Format - an MDN guide by Chris Mills](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)
- A workshop-style intro to [Rust+WebAssembly](https://ashleygwilliams.github.io/helloWASM/) & [wasm-bindgen](https://rustwasm.github.io/hello-wasm-bindgen/) by Ashley Williams & Steve Klabnik
- [Hack Without Fear!](https://mnt.io/2017/06/06/rust-hack-without-fear/) — [Fearless concurrency in Rust](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html) and in [Servo/Firefox](https://blog.rust-lang.org/2017/11/14/Fearless-Concurrency-In-Firefox-Quantum.html)
- An explainer on [wasm-bindgen](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/) by Alex Crichton and [wasm-pack](https://hacks.mozilla.org/2018/04/hello-wasm-pack/) by Ashley Williams
- [WebP image decoding using WebAssembly & emscripten](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
- [Mozilla's streaming & tiered WebAssembly compilation - a blogpost by Lin Clark](https://hacks.mozilla.org/2018/01/making-webassembly-even-faster-firefoxs-new-streaming-and-tiering-compiler/) and [V8's WebAssembly baseline compiler: Liftoff](https://v8project.blogspot.com/2018/08/liftoff.html)
- [Nick Fitzgerald's post on embedding WASM in the devtools](https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/) with [Vyacheslav's response](https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html) & [Nick's followup](http://fitzgeraldnick.com/2018/02/26/speed-without-wizardry.html)
- Dan Callahan [presents about WebAssembly at JSConf Budapest, runs DOS & Netscape in a browser](https://www.youtube.com/watch?v=bac0dGQbUto)
- [DasSurma's article on WebAssemblifying Squoosh](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm)
- [WASI announcement & explainer](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/) by Lin Clark


```js
console.log('Slides locked & loaded!')
```
