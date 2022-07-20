```meta
title: AV1
description: The wonderful & open internet video future you've never heard of. Presented by Flaki @ FOSS North 2018, Gothenburg
keywords: internet, video, royalty-free,
social_image: http://talk.flak.is/pic/baela-disco.jpg
canonical_url: http://talk.flak.is/av1/fossnorth/
```

```css
@import url("/s/themes/pinky.css");

.purp { background: #a0a0fe; }
```



[](#opening.top-left-title)
!.bg[Hi](/pic/baela-disco.jpg)


## Hi there, Foss North Folks!

> Last updated: 2018-04-23

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
  <h3>Mozilla TechSpeakers &amp; DevRel</h3>

  <img alt="Tessel" src="/pic/tessel.png">
  <h3>Tessel Project — JS 💖 HW</h3>
</div>

------------------------------------------------------------
[](#title)
!.bg[](../img/av1-vs-h264.jpg)


# AV1
### the magical open video future of the web

> István Szmozsánszky _"Flaki"_  
> [@slsoftworks](https://twitter.com/slsoftworks)

<details>

</details>



---
!.bg[](../img/mozilla.jpg)
---
!.bg[](../img/royalty-free.png)
---
!.bg[](../img/daala.png)
---
[](#daala.big)

!.bg[](../img/daala.png)

# Daala

```css
#daala h1 {
	color: white;
	background: black;
	display: inline-block;
	padding: 0;
	width: auto;
	margin: auto;
	height: auto;
	line-height: 1em;
	vertical-align: top;
	left: 50%;
	margin-left: -1.5em;
	top: 20%;
}
```

---
[](#.big.shoutout)

!.bg[](../img/daala.png)

## "&hellip;a video format that's free to implement, use and distribute&hellip;"

<details>
https://wiki.xiph.org/Daala
</details>

```css
.shoutout {
  display: flex;
}
.shoutout h2 {
	line-height: 1.2;
	color: aqua;
  background: rgba(0,0,0,.8);
	font-weight: 400;
}
```
---
[](#.big.shoutout)

!.bg[](../img/daala.png)

## "&hellip;and a reference implementation with technical performance superior to H.265."
---
[](#.white-background)
!.bg.contain[](../img/cisco-internettraffic.png)



------------------------------------------------------------
[](#.big.slim)

## Many grew discontent with the status quo&hellip;

------------------------------------------------------------
[](#.big.slim)

!.bg[not thor](../img/not-that-thor.jpg)

------------------------------------------------------------
[](#.white-background)

!.bg.centered[Cisco Thor](../img/thor.png)

------------------------------------------------------------
[](#.white-background)

!.bg.centered[not vp9](../img/not-that-vp9.jpg)

------------------------------------------------------------
[](#.white-background)

!.bg.centered[VP9](../img/vp9-logo.png)


------------------------------------------------------------
[](#.big.slim)

## This brought about <br>&nbsp; an unlikely alliance&hellip;

---
!.bg[](../img/aom-logo.png)
---
!.bg[](../img/aom-members.png)


---
!.bg[](../img/av1-vs-h264.jpg)
---
!.bg.centered[](../img/av1-vs-h264.jpg)
---
!.bg[](../img/av1-logo.png)
---
[](#.white-background)
!.bg.contain[](../img/msu-comp.png)
---
[](#.white-background)
!.centered.bg[](../img/msu.png)




---
!.bg[](../img/av1-tools-overview.png)


---
!.bg.contain[](../img/cfl1.png)
---
!.bg.contain[](../img/cfl2.jpg)
---
[](#.white-background)
!.bg.centered[](../img/cfl3.png)

---
!.bg.contain[](../img/dering2.png)
---
[](#.white-background)
!.bg.centered[](../img/dering-comp.png)

---
!.bg[](../img/aom-analyzer.png)
---
!.bg.contain[](../img/aom-analyzer-shot2.png)
---
!.bg.contain[](../img/aom-analyzer-shot1.jpg)
---
[](#.white-background)
!.bg.contain[](../img/aom-analyzer-abtesting.png)
---
[](#.white-background)
!.bg.contain[](../img/av1-analyzer.png)



---
[](#.big.slim)
## A Royal(ty) Mess

---

!.bg.contain[](../img/av-codec-licensing.png)

---
[](#.big.slim)
## Okay, so this all looks too good to be true.<br>What's the catch?

---
!.bg[](../img/availability.png)

### Availability

<details>
- :( - It's so new, it barely exists anywhere.
- :| - It's already in Firefox Nightly a
- :) - Open source and patent-unencumbered, this helps the adoption. VLC already ships with an (experimental) AV1 decoder since the February 3.0.0 version.

Expected that products (e.g. browsers) would be shipping support by end of year.

From the industry, Netflix promises to be an early adopter, as well as Google (Youtube?).

https://www.videolan.org/vlc/releases/3.0.0.html
</details>


---
[](#.white-background)
!.bg.centered.dropshadow[](../img/bitmovin-encode.png)

### Encoding


<details>
The encoder is currently in a state of being a "research-grade" code base.

What this means is encoding is fairly unoptimized (50-200x slower than VP9), requires a lot of resources and time.

- :( - Live streaming, WebRTC?
- :| - Youtube and other pre-encoded sources
- :) - Netflix and streaming services with a smaller catalog.
</details>

---
[](#.white-background)
!.bg.centered.dropshadow[](../img/bitmovin.jpg)

### Decoding

<details>
- :( - No hardware support just yet, that means playback will drain battery faster compared to other formats.
- :) - Bitstream has evolved in close cooperation with hardware vendors, decoding hardware should be 1-2 years out, and after that it will be just as commonplace in CPUs, GPUs as any other technology. Being patent-unencumbered also helps adoption.

1080p decoding on a conventional, consumer-grade laptop at ~25% CPU with current (fairly unoptimized codebase)
</details>

---
[](#.video)
!.bg[](../img/negge-briefing.png)

## Learn More

```css
.video::after {
  content: 'video!'
}
```

------------------------------------------------------------
[](#keepplaying)
!.bg[](../img/cat-goes-into-fish-bowl.gif)

```css
@import url("/s/keep-playing.css");
```

# Thanks a bunch!

#### [talk.flak.is/av1/fossnorth](http://talk.flak.is/av1/fossnorth/)

<span class=tweet>
![mozhacks](https://pbs.twimg.com/profile_images/2631319542/aa071efb0ed133973c2ab9fea8b5f6d8_400x400.png)
@mozhacks
</span>

<span class=tweet>
![Flaki](/pic/flaki.png)
@slsoftworks
</span>

<div class="message">Keep compressin'!</div>
