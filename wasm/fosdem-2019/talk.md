```meta
title: Speed without Shenanigans
description: WebAssembly & Compile-to-JavaScript’s Rise to Fame — Flaki @ FOSDEM 2019
keywords: rust, webassembly, web, javascript, wasm, rustwasm, asmjs
social_image: http://talk.flak.is/wasm/fosdem-2019/img/robot-unicorn-attack.jpg
canonical_url: http://talk.flak.is/wasm/fosdem-2019/
```

```css
@import url("/s/themes/pinky.css");
@import url('https://fonts.googleapis.com/css?family=Six+Caps');
@import url('https://fonts.googleapis.com/css?family=UnifrakturCook:700');
```

[](#opening)
!.bg[hi](img/robot-unicorn-attack.jpg)

```css
#opening h1 {
  margin: auto;
  max-width: 50vw;
}
```

# Hellooo FOSDEM!


> Last updated: 2019-02-02

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
!.bg[](img/wacky-wasm.jpg)

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

# Speed without Shenanigans


> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

------------------------------------------------------------
[]()
!.bg[Browsers](../img/spaceship-assemble.gif)

### <small>...a.k.a.</small> WebAssembly & Compile-to-JavaScript’s Rise to Fame


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](img/js-execution-speed.png)

### Our story starts around the JS-engine perf wars...

(c) [JavaScript World Domination](https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070)

<details>
Our story starts around 2012. Several years into the JavaScript engine performance arms race kickstarted by V8’s release in 2008 just-in-time compilation and careful optimizations have resulted in an explosive speed-up in JS execution speeds.
</details>

------------------------------------------------------------
!.bg.centered[](img/asmjs-history.png)

### The rise of Compile to JS

(c) [Luke Wagner, 2017](https://lukewagner.github.io/wasm-talk-2017/)

<details>
Around this time various experiments appeared, exploring direct compilation of code from typed, lower-level languages to a subset of JavaScript and ditching garbage collection for linear memory (in hopes for high-speed execution in the browser).
</details>


------------------------------------------------------------
!.bg[](img/emscripten-big.png)

### Emscripten & asm.js

<details>
Although Emscripten & the asm.js format wasn’t the first attempts at this, they ended up being the one proving beyond doubt that the idea of "compiling large, pre-existing codebases to JavaScript" and running them in the browser’s JS VM is not only feasible, but desirable on today's web.

Around this time many parties got fairly excited about "compiling to JavaScript", but one in particular has jumped on the bandwagon early on, and remain a key supporter of the compile-to-js ecosystem:
</details>


------------------------------------------------------------
[](#.big)
!.bg[](img/zengarden.jpg)

## The gaming industry

<details>
The gaming industry.
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](img/zengarden-firefox.jpg)

### Today the web is the biggest app dev platform

(c) [Epic Zen Garden](https://s3.amazonaws.com/mozilla-games/ZenGarden/EpicZenGarden.html)

<details>
Easy to see why! The web has become the most popular application-development platform (one of the most widely used and accessible ones), and is rapidly gaining new capabilities to cater for the sudden rise in expectations. Games happened to be a pretty good proxy for the vast "high-quality multimedia applications" space — high-performance apps with heavy use of graphics-, audio- & computation resources, networking and interactivity.
</details>


------------------------------------------------------------
[](#.white-background)

### ...and the largest open distribution platform

(c) [Dave Herman @littlecalculist](https://twitter.com/littlecalculist/status/728328046332121089)


!.bg.centered[](img/dherman-distribution.png)
<details>
Moreover, the web is also one of the most open distribution platforms — and in the day-and-age of stores, walled gardens and a choice of few giant gatekeepers it's only natural game developers are longing for a more open distribution method that's secure, low-cost and wide-reaching.
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/kripken-asm-notanewengine.png)

### Many ways the same—but also very different

(c) [Article by ZDNet](https://www.zdnet.com/article/apple-google-microsoft-mozilla-close-in-on-making-web-run-as-fast-as-native-apps/)

<details>
Seeded by the idea of repurposing the existing optimizing JavaScript VM in browsers with the feasibility of reusing pre-existing low-level (C/C++) codebases the web platform started exploring new frontiers.

Tools like Emscripten and the standardization of asm.js made it possible to compile low-level languages to a subset of JavaScript to be executed with high speeds by the JS VM. This kickstarted a whole new ecosystem of compile-to-JS libraries, tooling & applications, and eventually paved the way for an incremental update building on these foundations and incorporating ideas from other efforts (like (P)NaCL) in the field:
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/webassembly-logo.svg)

<details>
WebAssembly was born.
</details>


------------------------------------------------------------
[](#jointeffort.big.slim.white-background)
!.bg.contain[](img/zdnet-webassembly.png)

```css
#jointeffort h2 {
  margin: 0;
  padding-top: 14rem;
  background: rgba(255,255,255,.7);
  display: block;
}
```

## &nbsp;&nbsp; **A joint effort**<br>work-in-progress

(c) [ZDNet, 2016](https://www.zdnet.com/article/apple-google-microsoft-mozilla-close-in-on-making-web-run-as-fast-as-native-apps/)

<details>
That's all it is, really, carefully engineered evolution (rather than revolution), aligning stakeholders and browser vendors along a common goal and moving them in lockstep brought us today's WebAssembly "MVP": a platform-independent VM specification with a "minimal but useful" instruction set coupled with a binary transmission format.
</details>


------------------------------------------------------------
!.bg.contain[](img/wasm-code-explorer.png)

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
!.bg[](img/internetarchive-games.png)

(c) [Internet Archive](https://archive.org/details/softwarelibrary_msdos_games&tab=collection)
<details>
Compiling to JavaScript has seen many interesting usecases: from the noble cause of archival & emulation of vintage computer games, to entire operating systems and processor architectures being transposed onto an HTML5 canvas.
</details>


------------------------------------------------------------
!.bg[](img/bnd-of-javascript.jpg)

(c) [Gary Bernhardt, Pycon 2014](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)

<details>
Funnily enough, WASM is not built solely for the browser: giving the spec a quick skim will reveal its rather platform-agnostic nature), and the some of the demos popping up can bring back fond memories of Gary Bernhardt's musings on the implications of sophisticated compile-to-JavaScript tooling.
</details>


------------------------------------------------------------
[](#nebulet)
!.bg[](img/nebula.jpg)

```css
#nebulet blockquote {
  width: 50vw;
  font-family: 'Six Caps', fantasy;
  font-size: 1.25rem;
  font-weight: normal;
}

#nebulet blockquote strong {
  font-size: 4rem;
  font-weight: normal;
}
```

> **Nebulet**
>
> In short, Nebulet is an operating system that runs WebAssembly.
>
> Under the hood, Nebulet is a microkernel that executes WebAssembly modules in ring 0 and a single address space to increase performance.

<details>
Like, there is now an experiment, titled Nebulet, which is an attempt to create a prototype WebAssembly kernel, running exclusively WebAssembly applications.

The WebAssembly MVP is a fair bit more down-to-Earth in its approach, yet it still brings a crucial, deeply missed tool to the web platform…
</details>


------------------------------------------------------------
!.bg[](img/dan-callahan-pycon.png)

### Lower-level abstractions for performance & control are not new

(c) [Dan Callahan, PyCon 2018](https://www.youtube.com/watch?v=ITksU31c1WY)

<details>
When we take a look at any number of programming languages, dropping to a lower level of abstraction when performance or access to system resources require it is a mainstream practice: high-level languages like Ruby, Python, even Node.js achieve this via platform-specific binary modules; even low-level languages like C/C++ allow for inline assembly when performance & precise control becomes a priority. What WebAssembly brings today is this exact capability to the entire Web Platform — without the drawbacks like platform-dependence, but also with the added choice of virtually any programming language (with big asterisks on "any", at least today).
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](img/node-sass.png)

### A potential fix...

(c) [node-sass on GitHub](https://github.com/sass/node-sass/issues/2011)
<details>
In fact WebAssembly might be first in line for solving some of these platforms’ binary-module-specific woes.
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/wasm-fortune500.png)

### Saving millions of dollars in production with WebAssembly

<details>
And although it's early days still, there are already some remarkable success stories being told! Fortune 500 companies saving millions of dollars in server costs by offloading expensive computation to the client…
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.contain[](http://fitzgeraldnick.com/media/set.first.breakpoint.with.sub.sorting.scalajs.svg)

### ...or replacing parts of your browser with it

(c) [Speed without Wizardry, by @fitzgen](https://twitter.com/fitzgen/status/968146167132389376)

<details>
…or improving source map parsing speed tenfold in Firefox’s Developer Tools by surgically replacing performance-sensitive parts of its JavaScript-heavy Debugger with tailor-made WebAssembly solutions. Yes, that's JavaScript and WebAssembly powering parts of a production web browser on hundreds of millions of computers all across the world!
</details>


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/linclark-rust-love-js.png)

### The lurking secret sauce: Rust

(c) [illustration by Ashley Williams @ag_dubs](https://ashleygwilliams.github.io/helloWASM/part2.html)

<details>
These two examples are also interesting for they both used Rust for implementing the source of the WASM logic. Rust is a safe & performant low-level programming language used in later versions of Firefox extensively, and booming in popularity across the industry. It also has out-of-the box (and improving) first-class support for WebAssembly as a compile target.
</details>


------------------------------------------------------------
[](#wizardry.big.slim)
!.bg.cover[](http://anne-crea.com/annecrea/15092-free-wizard-wallpapers.jpg)

```css
#wizardry h2 {
  font-family: 'UnifrakturCook', fantasy;
  font-weight: normal;
  color: #0ff;
  letter-spacing: default;
  text-transform: none;
}
```

## ⚡ <br> Speed Without Wizardry

<details>
Nick Fitzgerald, one of the engineers behind Firefox’s new Rust-WebAssembly source map parser blogged extensively about the process. In the conversations unfolding around its release he highlighted how Rust's excellent ergonomics, safety guarantees & out-of-the box WASM support work together to empower anyone in achieving Blazing Speeds without the Wizardry—without the arcane incantations and weirdly specific knowledge of knowing JS & JIT-internals. I link to the articles in the "Reading List" section of the slides, they are a very rewarding read, even with no particular Rust experience.
</details>


------------------------------------------------------------
!.bg.cover[](../img/linclark-wasm-skilltree.jpg)

(c) [illustration by Lin Clark @linclark](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)


------------------------------------------------------------
[](#.white-background)
!.bg.centered[](../img/jswasminterop.jpg)

(c) [illustration by Lin Clark @linclark](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)

## Expanding what's possible today in the browser

> [Reflecting on Rust & WASM in 2018](https://rustwasm.github.io/2018/12/06/reflecting-on-rust-and-wasm-in-2018.html)


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

#### [talk.flak.is/wasm/fosdem-2019](http://talk.flak.is/wasm/fosdem-2019/)

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
- WebAssembly's post-MVP future [article](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/) & [talk recording](https://www.youtube.com/watch?v=VsYL4Z9sRec), by Lin Clark, Till Schneidereit, Luke Wagner



```js
console.log('Slides locked & loaded!')
```
