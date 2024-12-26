---
title: "Introducing Image Sequencer: a pure JavaScript non-destructive image processing library for Node, browser and command line"\ntagnames: 'image-processing, software, infragram, gsoc, web, with:warren, image-analysis, javascript, gsoc-2017, soc, soc-2017, image-sequencer'
author: ccpandhare
path: /notes/ccpandhare/10-19-2017/introducing-image-sequencer-a-pure-javascript-non-destructive-image-processing-library-for-node-browser-and-command-line.md
nid: 15066
uid: 503543

---

![](https://publiclab.org/public/system/images/photos/000/021/979/original/Header.png)

# Introducing Image Sequencer: a pure JavaScript non-destructive image processing library for Node, browser and command line

by [ccpandhare](../profile/ccpandhare) | October 19, 2017 19:26

October 19, 2017 19:26 | Tags: [image-processing](../tag/image-processing), [software](../tag/software), [infragram](../tag/infragram), [gsoc](../tag/gsoc), [web](../tag/web), [with:warren](../tag/with:warren), [image-analysis](../tag/image-analysis), [javascript](../tag/javascript), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [image-sequencer](../tag/image-sequencer)

----

_This past summer, myself, Chinmay led a project (mentored by Jeff) as part of Google Summer of Code to develop a new library to do general-purpose image processing and analysis. This post introduces that new library, Image Sequencer._

**Image Sequencer** ([GitHub](https://github.com/publiclab/image-sequencer/), [demo](https://publiclab.github.io/image-sequencer/examples/)) is different from other image processing systems in that it's _non-destructive_: instead of modifying the original image, it **creates a new image at each step** in a sequence. This is because it:

- produces a legible trail of operations, to "show your work" for evidential, educational, or reproducibility reasons.
- makes the creation of [new tools](https://github.com/publiclab/image-sequencer/blob/master/CONTRIBUTING.md) or "modules" simpler and more extensible -- each must accept an input image, and produce an output image
- allows many images to be run through the same sequence of steps
- works identically in the browser, on Node.js, and on the commandline!

How does this compare to a typical image editing workflow?

![Workflow](https://publiclab.org/system/images/photos/000/021/980/large/Workflow.png "Workflow.png")

As you can see, Image Sequencer lets you see the steps in order, not just the output. And if you want to change an earlier step, you can do that and the subsequent images will be updated -- the change will cascade down the sequence. It's a little like going back in time and changing the past... well, a LITTLE like that :-)

## Browser, Node and CLI

Image Sequencer can be used in both NodeJS and in the browser; it can also be used on the command line, and works the same way in each environment.

![Browser, Node, CLI](https://publiclab.org/system/images/photos/000/021/982/large/BrowserNodeCLI.png "BrowserNodeCLI.png")

## Current State

As of today, the core functionality (addition of a step, removal of a step, insertion of a step, etc.) has been implemented, and there are basic tests. There are a few modules present. Most calculations aren't GPU accelerated, but [some modules are](https://github.com/publiclab/image-sequencer/tree/0fa0684076136a44c850aa9c92d3e9b2e1ce2095/src/modules/FisheyeGl) (standardization of this would require a NodeJS WebGL solution). Of course, it's not as efficient as a C-based program like ImageMagick or Photoshop -- there can be a lag when images larger than 700KB are handled.

## Quick Use

_How to begin using Image Sequencer on your webpage or in your code, real fast._

Browser: `sequencer.replaceImage('#photo','invert');`

CLI: `$ ./index.js -i [PATH] -s step-name`

NodeJS: `$ npm install image-sequencer`

Try it out yourself here: [https://publiclab.github.io/image-sequencer/](https://publiclab.github.io/image-sequencer/)

## Next Steps

There's a lot left to do to help this reach its potential. We are actively seeking help in building more modules and refining the architecture -- to get involved, please [check it out on Github](https://github.com/publiclab/image-sequencer/) and see where you can pitch in!

[https://github.com/publiclab/image-sequencer/blob/master/CONTRIBUTING.md](https://github.com/publiclab/image-sequencer/blob/master/CONTRIBUTING.md)

For starters, can you think of other uses? Some we've thought of include:

- filter-like image processing -- applying a transform to any image from a given source, like a proxy. I.e. every image tile of a satellite imagery web map.
- test-based image processing -- the ability to create a sequence of steps that do the same task as some other image processing tool, provable with example before/after images to compare with.
- logging of each step to produce an evidentiary record of modifications to an original image

We'd love to include demos of some of these!

## About The Authors

[Chinmay Pandhare](https://github.com/ccpandhare) : I am a student at BITS Pilani, India with an interest for image processing - which led to me contributing to Image Sequencer in its early stages. After my Google Summer of Code proposal for Image Sequencer got accepted, I worked towards developing the library under Jeff's mentorship, who, by the way, is an excellent guide!

[Jeffrey Warren](https://publiclab.org/profile/warren) : (GitHub [jywarren](https://github.com/jywarren)) I was involved in developing the library concept and was a mentor for Chinmay for 2017's Google Summer of Code program. Chinmay was fantastic to work with! We have been needing a way to do sequential image processing for our Infragram project ([infragram.org](http://infragram.org)) and for other environmental-science related image processing work at [PublicLab.org](http://PublicLab.org) -- anything from dust analysis to quantifying water turbidity. We're always looking for ways to make infrastructure that serves a broader need, and to work with others around open source, general-purpose tools.