---
nid: 16060
title: Image Sequencer on Raspberry PI
path: public/static/notes/tech4gt/04-03-2018/image-sequencer-on-raspberry-pi.md
uid: 523178
tagnames: raspberry-pi,pi-camera,raspberry-pi-infragram,activity:raspberry-pi-infragram,activity:raspberry-pi-spectrometer,activity:pi-camera,image-sequencer
---

# Image Sequencer on Raspberry PI

[Image Sequencer](https://github.com/publiclab/image-sequencer) is an image processing library for node.js and the browser written in javascript. Pictures clicked on raspberry pi can be processed with image sequencer through a series of processing modules called steps.

## Installation

Installation can be done easily through npm, ssh into your pi and run hte
following command:

```
npm install -g image-sequencer
```

You must have node.js and npm installed on the pi which can be downloaded [here](https://nodejs.org/en/download/).

## Usage

Image-sequencer has a full featured cli and images can be processed right from the terminal. The cli is also chainable so commands can be chained together like:

```
command to click pictures && sequencer -s "step1 step2"
```

The processed images after each step are saved in the ./output folder.
You can read the complete cli guide in the [documentation](https://github.com/publiclab/image-sequencer).

![](https://raw.githubusercontent.com/publiclab/image-sequencer/master/examples/images/diagram-6-steps.png)

## Use Cases

Pictures can be fed to the pi or can be clicked locally through hardware like piCam. Images can be simply processed and saved by chaining the script to click pictures with the command to run sequencer.