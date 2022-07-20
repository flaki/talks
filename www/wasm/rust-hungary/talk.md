```meta
title: Rust and WebAssembly
description: (C)rustaceans of the web, assemble! — Flaki @ Rust Hungary, September 2018
keywords: rust, webassembly, web, javascript, wasm, rustwasm, wasm-bindgen, asmjs, npm, webpack
social_image: http://talk.flak.is/pic/baela-wyeworks.jpg
canonical_url: http://talk.flak.is/wasm/rust-hungary/
```

```css
@import url("/s/themes/pinky.css");
```



[](#opening)
!.bg[Baela says hi](/pic/baela-disco.jpg)

```css
#opening h1 {
  margin: auto;
  max-width: 50vw;
}
```

# Sziasztok magyar Rustíciánusok!


> Last updated: 2018-09-11

------------------------------------------------------------
[](#whoami)
!.bg[Flaki, tinkering](/pic/tinker.jpg)

```css
@import url("/s/tinker.css");
#whoami > h3 { left: 75vw }
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
!.bg[Firefox Quantum](../img/rustwebassembly.jpg)

```css
#title h1 {
  font-size: 2.0rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}
```

# Rust & WebAssembly


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

------------------------------------------------------------
[]()
!.bg[Browsers](../img/spaceship-assemble.gif)

### <small>...a.k.a.</small> What To Expect when You're (Web)Assemblin'

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasmwg.png)

# <small>On Today's Agenda:<br></small> Why WebAssembly? Why Rust? Why Rust-WASM?

> - What is Webassembly, what is it good for?
> - What does Rust have to do with WebAssembly?


(c) WASM WG logo by [@ag_dubs](https://twitter.com/ag_dubs)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/webassembly-logo.svg)

### A little WebAssembly (hi)story


> WebAssembly is an [MVP](https://webassembly.org/docs/mvp/), with [many more features](https://webassembly.org/docs/future-features/) still to come

<details>
  The WebAssembly spec (and implementations) currently encompass an "MVP", minimum viable product. WebAssembly (after years of work) shipped this MVP implementation in 4 major browsers, working closely together at almost the same time. This type of coordination required a lot of of compromises to be made, so WebAssembly shipped with a minimal featureset, with a lot more features currently in the work.

  But we shouldn't jump ahead...
</details>


------------------------------------------------------------
!.bg[](/play/img/we-have-to-go-back.jpg)

<details>
  To really understand the motivations behind WebAssembly we have to go back - waaay back - to the beginnings of compiling to the web and the up-and-coming new kid on the block: asm.js
</details>

------------------------------------------------------------
!.bg.centered[](../img/asmjs.png)

### ASM.js

> - The compile-to-web movement is already >5 years old!
> - [ASM.js](http://asmjs.org/) kickstarted something new...

<details>
  With JavaScript engines getting faster and the improvements in JIT compilation, what was previously impossible (or simply unbearably slow), it became possible: [asm.js landed in 2013](https://blog.mozilla.org/luke/2013/03/21/asm-js-in-firefox-nightly/) in Firefox Nightly and promised compilation of low-level code into JavaScript, to be executed at high speed inside the same JavaScript VM as any other JS.

  Compile-to-JS wasn't born with ASM.js (GWT and others have been targeting browser-js as an output before it), but it is what made really it possible to target the browser with large, low-level codebases, yet keeping it still _fast enough_.
</details>

------------------------------------------------------------
!.bg.centered[](../img/asmjs-unreal-engine.jpg)

### ASM.js was _really_ fast

> [The "Epic Citadel" Unreal 3 demo](https://www.youtube.com/watch?v=XsyogXtyU9o) running smoothly in Firefox 20 thanks to asm.js

<details>
  Compared to what was possible before, asm.js was mind-blowingly fast and amazingly easy to use. Entire C++ codebases compiled to JavaScript, and ran close to native speed (half of native speed, but hey, still!) - including whole AAA game engines like the Unreal Engine in all their 60 fps glory...
</details>


------------------------------------------------------------
!.bg.centered[](../img/kripken-asm-implicitlytyped.png)

### ASM.js wasn't completely new

> - Same language, same VM, no plugins
> - "One JavaScript"
> - Iterative update to the existing ecosystem

<details>
  But how? Easy, JavaScript JITs were already doing optimizations, they just needed to gather implicit type information (while running the code) and speculate about the variable types. So what if we could just *supply* this implicit type information within the code itself? Poof! Asm.js was born and JIT-s were compiling pre-annotated JS code ahead of time. Code that you arguably wouldn't write by hand (and wouldn't really want to read, either) - but code that was _still JavaScript, after all_.
</details>

------------------------------------------------------------
!.bg.centered[](../img/kripken-asm-notanewlanguage.png)

### Still JS, albeit a little strange

> Asm.js is a "JavaScript subset" - the same engine parsed the code as the JS

<details>
  And asm.js wasn't a new language, that promised performant code and breaking away of JS's shackles - looking at you, Dart. It was just a clever subset of JS - but still valid JavaScript code at the end of the day. Could be run on any JS-supporting VM (whether it'd be fast, though—that'd be another question...)
</details>

------------------------------------------------------------
!.bg.centered[](../img/kripken-asm-notanewengine.png)

### "2x slower" is the new _"blazing fast"_ :)

> - You wouldn't really write it by hand...
> - The Asm.js-compilation preserved the type informations of source language
> - Code is compiled/executed by the same JS VM!

<details>
  Asm.js was still JS - and that meant the Asm.js compiler/VM was...simply the JS VM! Not another VM, same engine, same compiler, same optimizations, same memory (and garbage collector), same (secure) sandbox. And even though everything was the same - the world was never the same again. Eventually, Asm.js got from 200% to 133-160% of the performance of native-compiled C-code for some workloads.

  There was just one _tiny_ issue...
</details>

------------------------------------------------------------
[](.big.slim)

## except...

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/parsing-js-is-slow.png)

### Parsing JS is dog slow...

<details>
  Asm.js was _just JavaScript_. Unfortunately parsing JavaScript is _not really performant_. Like really, _really_ slow. Especially on mobile, but yeah 1-2 megabyte per second is a good baseline metric to keep in mind (and this is just the parsing, compilation is just *after* this), except for the fastest desktop CPUs.
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/parsing-1mb-js.jpg)

### Parsing JS is dog slow...

<details>
  On the web we try to avoid multiple-megabyte bundles — but who are we to tell a _complete AAA game engine_ that they shouldn't be clocking in at 45 megabytes once compiled to type-annotated JavaScript code..?
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/webassembly-logo.svg)

### Enter WebAssembly?

<details>
  WebAssembly can be treated as an iterative succession to Asm.js. It's [smaller, faster, more](https://hacks.mozilla.org/2017/03/why-webassembly-is-faster-than-asm-js/) robust in every way - and more easily extensible, created from the ground-up keeping this in mind, making it much more future proof.
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/what-is-webassembly.png)

### What is WebAssembly?

> - Fast & efficient
> - Safe sandbox
> - Integral part of the web platform

<details>
  If JS is slow to parse, why not make our own, optimized binary format? More compact, easier to parse.

  JITs are running on real hardware, so let's make our code's types fit this hardware more - (almost) everything is a number! (...now with 100% more 64-bit types!)

  But still runs in the exaxt same JS VM, uses the exact same low-level optimizations, and lives in a symbiotic relationship with the host browser, JavaScript, DOM etc.
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/emscripten.png)

### <small>Your go-to "compile-to-the-web" tool:<br></small> Emscripten

<details>
  ...it even uses the same tools: Emscripten, Mozilla's go-to tool for C++-to-JS compilation has full support for WASM, and even prefers it.

  There are other tools, as well, Rust for example has really mature out-of-the-box tooling support for WASM output.
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-netscape.png)

### WASM has some cool tricks

> Emulating Netscape, running inside Firefox? Because why not...

(c) tweet by [@nybblr](https://twitter.com/nybblr/status/923569208935493632)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-win2k.png)

### Really cool ones

> [A JSLinux emulated x86 VM running Windows 2000](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/win2k.cfg&mem=192&graphic=1&w=1024&h=768) - inside the browser using WASM

(c) tweet by [@justindarc](https://twitter.com/justindarc/status/1033115285950275586)

------------------------------------------------------------
[](.big.slim.white-background)

## WASM is not a toy

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/unity-webassembly.jpg)

### ...well, okay, maybe sometimes it is...

> - One of the biggest proponents of Compile-to-JS has always been game engines
> - [Unity now has official support for the WASM target](https://blogs.unity3d.com/2018/08/15/webassembly-is-here/)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-fortune500.png)

### But it's good for business!

> WebAssembly allows the web platform do things that previously were not possible, not economical, or both.

(c) tweet thread by [@jxxf](https://twitter.com/jxxf/status/1027358517462626304)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/birth-and-death-of.png)

### But is WebAssembly trying to replace JavaScript??

> - No it is not.
> - Maybe in 2035 that might happen, but not anytime soon...
> - [Gary Bernhardt's "The Birth and Death of Javascript"](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)

<details>
  And this is an important point. WebAssembly wasn't created to replace JavaScript - it was created to replace Asm.js. It was created for offloading demanding computation into a more optimal format, while JavaScript is there for you to cater for scripting, interaction and various other aspects of the browser. They work together hand in hand more than against each other.

  Again: sure it's possible to do data-crunching in JS, or [an entire website in WASM](https://github.com/DenisKolodin/yew), it's just not practical, economical and is not something those tools are good at.
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](/oss/img/devtoolshtml.jpg)

### Even _inside_ your browser, there's WebAssembly!

> - ["Oxidizing Source Maps with Rust and WebAssembly"](https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/)
> - Nick Fitzgerald tells the story of how they used WebAssembly to speed up Firefox's built-in debugger

<details>
  Firefox actually uses WebAssembly *inside* of the browser, to speed up some performance-sensitive computations in the Developer Tools, which have (for some time now) been written in JavaScript (for a variety of reasons, but this is a topic for an entire other talk).
</details>



------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/linclark-rust-love-js.png)

### Rust <3 JS

(c) illustration by [@linclark](https://twitter.com/linclark)

<details>
  But enough about WebAssembly - we are at a Rust meetup, so what does Rust have to do with any of this?

  _Rust loves JavaScript!_
</details>

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/rustwasmjs.png)

### Rust <3 WASM <3 JS

(c) illustration by [@ag_dubs](https://twitter.com/ag_dubs)

<details>
  ...and the reason is because Rust loves (and compiles to) WebAssembly, which, in turn, can help it interact with JavaScript. This is great because Rust is focusing exactly those aspects WASM is trying to solve for JS - speed, safety - while trying to maintain the ease-of-use of a high level language.
</details>

------------------------------------------------------------
[](#animate-pipeline.white-background)
!.bg[](../img/linclark-wasm-pipeline.jpg)

### The Rust-WASM Pipeline

(c) pipeline illustration by [@linclark](https://twitter.com/linclark)

<details>
  JavaScript doesn't exist in a vacuum. The language exists in its ecosystem, that consists of millions, probably even billions of lines of shared code - npm packages. Various tools have made it possible to reuse code (whether ours or others) in JS projects - and there is a plan to make WASM interact and integrate with this same ecosystem.

  There is an entire pipeline envisioned, from the original source language code (be it Rust or otherwise), through various tools producing an NPM package just as easily (re-)usable and embeddable in JS projects as any other JS package.
</details>

```css
#animate-pipeline h3, blockquote {
  opacity: .5
}

#animate-pipeline blockquote {
  right: auto;
  left: 0;
  background: transparent;
  font-weight: bold;
  color: hotpink;
}
#animate-pipeline img {
  visibility: hidden;
}

#animate-pipeline {
  background-color: white;
  background-image: url(../img/linclark-wasm-pipeline.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  animation: sway 40s ease-in-out alternate infinite;
}

@keyframes sway {
  0% {
    background-position: 200px top;
  }
  100% {
    background-position: -4400px top;
  }
}
```

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-bindgen-1.png)

### wasm-pack

> [wasm-pack](https://github.com/rustwasm/wasm-pack) lets you generate NPM packages out of Rust-generated WebAssembly code

(c) illustration by [@ag_dubs](https://twitter.com/ag_dubs)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-ferris.png)

### wasm-bindgen

> [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) helps you ease the communication between your code (WebAssembly) and JS

(c) WASM-Ferris by [@ag_dubs](https://twitter.com/ag_dubs)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/wasm-bindgen-2.png)

### Rust <3 WASM <3 JS

> One's code can be seamlessly turned into WebAssembly modules that:
> - Operate on native JS language elements (`js-sys`)
> - Call browser- & node-native API-s or DOM methods (`web-sys`)
> - Even interact & call into with other JS libraries!
>
> ...all this from within the original Rust source!

(c) illustration by [@ag_dubs](https://twitter.com/ag_dubs)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](/pic/rust.png)

# But why <em>Rust</em> ?

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/fearless-concurrency.png)

### Hack without fear in Rust

> - Safe, Fast, Parallel
> - Great package manager
> - Minimal runtime
> - Lots of web people :)

------------------------------------------------------------
[](.big.slim)
!.bg.cover[](http://anne-crea.com/annecrea/15092-free-wizard-wallpapers.jpg)

## Speed ⚡ Without Wizardry

> [Speed without Wizardry - by @fitzgen](https://twitter.com/fitzgen/status/968146167132389376)


------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/gowasm.png)

### But: Go

> - Go now supports WebAssembly compilation
> - It will compile in its own _runtime_, though

(c) WebAssembly gopher illustration via [Nicolas Lepage](https://medium.zenika.com/go-webassembly-binding-structures-to-js-references-4eddd6fd4d23)

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/assemblyscript.png)

### But: TypeScript

> - You cannot really compile JS to WebAssembly
>     - _there would be really no point in doing so, at least_
> - TypeScript, on the other hand, is a different story!

------------------------------------------------------------
[](.white-background)
!.bg.centered[](../img/webassembly-studio.png)

## Extensive (and growing) tooling!

> - [WebAssembly Studio](https://webassembly.studio/)
> - [WASM Code Explorer](https://wasdk.github.io/wasmcodeexplorer/)




------------------------------------------------------------
[](.big.slim)

## Shameless plug...

------------------------------------------------------------
[](.big.slim)

## WE ARE LOOKING FOR SPEAKERS!

------------------------------------------------------------
!.bg.centered[](../img/spectrum.png)

### Join us on Spectrum!

> [spectrum.chat/open-source-hungary/rust-hungary](https://spectrum.chat/open-source-hungary/rust-hungary/)



------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/assemblin.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks!

#### [talk.flak.is/wasm/rust-hungary](http://talk.flak.is/wasm/rust-hungary/)

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
