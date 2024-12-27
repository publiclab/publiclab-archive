---
title: "GSOC 2018 Work on Image Sequencer"

tagnames: 'software, gsoc, code, soc, gsoc-2018, soc-2018, image-sequencer, soc-2018-final, soc-2018-final-report'
author: tech4gt
path: /notes/tech4gt/08-09-2018/gsoc-2018-work-on-image-sequencer.md
nid: 16892
uid: 523178
cids: 20351,20352,20353,20354,20608,20609,20611,20615,20616,20617,20618,20620,20628,20910,20937
---

# GSOC 2018 Work on Image Sequencer

by [tech4gt](/profile/tech4gt) | August 09, 2018 11:17

August 09, 2018 11:17 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [code](/tag/code), [soc](/tag/soc), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [image-sequencer](/tag/image-sequencer), [soc-2018-final](/tag/soc-2018-final), [soc-2018-final-report](/tag/soc-2018-final-report)

----

## Project Info

_[Project Repository](https://github.com/publiclab/image-sequencer)_

_[Invert Module Repository](https://github.com/tech4gt/image-sequencer-invert)_

_[Grunt Plugin Repository](https://github.com/tech4gt/grunt-image-sequencer)_

_[Pull requests](https://github.com/publiclab/image-sequencer/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Atech4GT+)_

_[Public Lab Proposal Note](https://publiclab.org/notes/tech4gt/02-19-2018/gsoc-proposal-image-sequencer-v2-processing-on-steroids)_

_[Summer of code proposal](https://summerofcode.withgoogle.com/projects/#4637541576212480)_

_[NPM](https://www.npmjs.com/package/image-sequencer)_

_[Demo](https://publiclab.github.io/image-sequencer/examples/)_

## Introduction

Image Sequencer is a sequential Image Processing and analysis system for browser, Node.js, and the command line. It is non-destructive in the sense that a new Image is created after each processing step. It is targeted towards people trying to run analysis on scientific imagery for their research.

## The Modular Module System  

A `module` is a single image processing step that is applied to all the Images loaded into sequencer. Some of these modules are baked into sequencer by committing their code into the sequencer source itself. To make this system more scalable I have implemented a new module system which allows for modules to be distributed via npm separately and consumed into sequencer dynamically.

An example of this is the new [Invert module](https://github.com/tech4gt/image-sequencer-invert)

The following commands can be used to install modules which are distributed via npm:

CLI

```
sequencer --install-module "invert image-sequencer -invert"
```

This command installs the npm package `image-sequencer-invert` then adds it as a dependency of Image Sequencer locally and loads this new module into sequencer for usage.

Node.js

```
sequencer.saveNewModule("path to files")
sequencer.loadNewModule("module name")
```

In the Browser context the modules can be included as script files.

## Coding a Module

A Module must follow a basic format which makes it compatible with Image Sequencer. This summer I worked on minimizing the amount of code required inside a module, a lot of redundancy was eliminated and the default UI functions are now called automatically rather than the module having to call them.

Old Module Structure:
![](https://i.imgur.com/Fdt2wKZ.png)
New Module Structure:
![](https://i.imgur.com/t1ewpvt.png)

## The New String Syntax

Image Sequencer encodes the applied sequence of steps and their settings into a compact string which is then appended to the URL.
Following are the methods associated with stringifying and JSONifying a sequence.

```
sequencer.toString() // String for the sequence currently loaded 
sequencer.importString() // Imports the stringified sequence
sequencer.toJSON() // returns the current sequence in JSON
sequencer.importJSON() // imports a JSON sequence

```

A simple exaple of a stringified sequence is [`channel{channel:green},blur{blur:2}`](https://publiclab.github.io/image-sequencer/examples/#steps=channel%7Bchannel:green%7D,blur%7Bblur:2%7D)

Sequences can also be saved. In the browser the UI button can be used to save in the browser local storage.![](https://i.imgur.com/hnrJtJ5.png) 

Inside the cli the new `--save-sequence` option can be used.

## Meta Modules

With the work done this summer it is now possible to reuse module code by consuming various modules into one `meta-module`. These meta-modules have their own meta-data and their inputs are the inputs of their constituent steps. I have made a `Colorbar` meta module which adds a colorbar to the image.

See it in action here [colorbar{}](https://publiclab.github.io/image-sequencer/examples/#steps=colorbar%7B%7D)

A meta module expands itself into its constituent steps giving them proper inputs at runtime itself which enables them to be loaded from the URL itself.

## Other Improvements

A lot of other goals were achieved which include:

Optimizing `sequencer.run` method so all the steps are not re-run every time steps are added or removed.

Named exports in the CLI which enable output Images to be exported to a desired location with a desired name and a desired extension

```
sequencer -i "./something.png" -o "./example.jpg" -s "invert"
```

An addition to the UI which enables the user to see the pixel value of an ndvi image by hovering on a particular location
![](https://i.imgur.com/EvxsdZd.png)

A grunt plugin which enables Image sequence4r to be run with grunt - [grunt-image-sequencer](https://npmjs.com/grunt-image-sequencer)

## Contributing

During the later part of my project I created various FTO issues and we were lucky to welcome some newcomers on the project.
![](https://i.imgur.com/05CoWrD.png)![](https://i.imgur.com/pCblyve.png)![](https://i.imgur.com/JQWPw2B.png)

[List of all first timer issues](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=label%3Afirst-timers-only+)

For contribution guidelines please checkout [contributing.md](https://github.com/publiclab/image-sequencer/blob/master/CONTRIBUTING.md)

For further reading please do checkout the [Readme](https://github.com/publiclab/image-sequencer/blob/master/README.md)

## Conclusion

I was able to accomplish a lot of core work this summer which itself adds some great features and sets the platform for future work. I would like to thank google and publiclab for this awesome opportunity which made my summer a blast. Also thanks to all the mentors who have been supporting and reviewing my work.

For now I would continue to work on Image Sequencer but now that summer is over I will shift my focus more towards boosting our community and welcoming even more people to the project. Once again thanks a lot to everyone involved :)