---
title: Infragrammar: compositing infrared images with simple mathematic expressions
tagnames: near-infrared-camera, ndvi, infragram, nbg, processing, compositing, ngb, infragram-sandbox, infragrammar
author: warren
path: /notes/warren/08-17-2013/infragrammar-compositing-infrared-images-with-simple-mathematic-expressions.md
nid: 9028
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/174/original/Screen_Shot_2013-08-17_at_11.52.00_AM.png)

# Infragrammar: compositing infrared images with simple mathematic expressions

by [warren](../profile/warren) August 17, 2013 16:17

August 17, 2013 16:17 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [nbg](../tag/nbg), [processing](../tag/processing), [compositing](../tag/compositing), [ngb](../tag/ngb), [infragram-sandbox](../tag/infragram-sandbox), [infragrammar](../tag/infragrammar)

----

###Client-side JavaScript image compositing

[Don Blair](/profile/donblair) and I had been chatting about making an in-browser JavaScript-based Infragram system, which would help people experiment more with different composites, color balances, etc. [Chris Fastie](/profile/cfastie) referred to this as a "sandbox" and we all agreed it'd be a great idea... in theory. But when were we going to have time to write it? Low priority.

Along came [Ben Gamari](https://github.com/bgamari/) who whipped up a demo and posted it to Github: https://github.com/bgamari/infragram-js

We quickly put up a temporary site and began refining it a bit, adding Infragram branding, improving the interface, chasing down bugs. It quickly evolved into a working system, able to generate monochromatic NDVI and NIR-channel images. But although it was an impressive technical feat on Ben's part, it didn't do that much more than the original Infragram.org site.

You can access it and try this out at this temporary address: 

http://infragram.org/static/infragram-js/infragram.html

###A simple language for compositing

The potential, however, was to make a completely open-ended environment for anyone to do image compositing in the browser. I was chatting with some friends about the idea, when we thought up the idea (maybe someone else had suggested this before, but I can't remember) of using a simple grammar to describe the operation to run on each pixel. Just like with the [NDVI equation](/wiki/ndvi), people would be able to input a simple mathematical equation, and press "RUN", generating an image with that rule. A rule might be something like `(R-B)/(R+B)` - which would generate NDVI.

![NDVI_is_eq.jpg](/system/images/photos/000/001/173/medium/NDVI_is_eq.jpg)

I realized (with the help of a white board) that this would be pretty easy to do in JavaScript with the `eval()` function, and this morning I coded up a version which not only allows for per-pixel equations for each color channel, but also allows for interactively changing those values with a slider. It's still a prototype, but you can already do NDVI as well as [NBG "false color" images](/notes/cfastie/05-27-2013/infrafilters) as Chris Fastie has written about (the lead image is an example of this).

Anyways, I prepared a quick video walking through some of these features; take a look and give it a spin yourself! And a big shout out to Ben Gamari and Don Blair for making this happen!

<iframe width="640" height="480" src="//www.youtube.com/embed/7sQZZoXnLlc" frameborder="0" allowfullscreen></iframe>