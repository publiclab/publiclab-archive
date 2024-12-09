---
title: Image Sequencer
tagnames: ndvi, image-compositing, infrared, image-processing, image-analysis, method, parent:infrared-software
author: warren
path: /wiki/image-sequencer.md
nid: 15851
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/023/785/original/diagram-6-steps.png)

# Image Sequencer

by [liz](../profile/liz), [warren](../profile/warren)

March 01, 2018 19:36 | Tags: [ndvi](../tag/ndvi), [image-compositing](../tag/image-compositing), [infrared](../tag/infrared), [image-processing](../tag/image-processing), [image-analysis](../tag/image-analysis), [method](../tag/method), [parent:infrared-software](../tag/parent:infrared-software)

----

Image Sequencer is an online tool for image processing -- based on the idea of a storyboard. Each modification makes a new copy of the image, resulting in a series of images showing each step. It is designed for use in browsers, as well as on the [Raspberry Pi](/pi-camera). This project is supported in part by the [NASA AREN project](/aren)

## Why

Image Sequencer is different from other image processing systems in that it's **non-destructive**: instead of modifying the original image, it creates a new image at each step in a sequence. This is because it:

* produces a legible trail of operations, to "show your work" for evidential, educational, or reproducibility reasons
* makes the creation of new tools or "modules" simpler -- [each must accept an input image, and produce an output image](https://github.com/publiclab/image-sequencer/blob/master/CONTRIBUTING.md)
* allows many images to be run through the same sequence of steps - batch processing
* works identically in the browser, on Node.js, and on the command line

[See this great introduction](/notes/ccpandhare/03-18-2017/developing-image-sequencer-as-a-library) by @ccpandhare.

Read more in-depth on the [Image Sequencer GitHub page](https://github.com/publiclab/image-sequencer).

Check out the Image Sequencer User Manual by @MaggPi: https://github.com/MargaretAN9/GSOC-2019/blob/master/ImageSequencerUserManual.md


[![diagram-workflows.png](https://publiclab.org/system/images/photos/000/023/784/large/diagram-workflows.png)](https://publiclab.org/system/images/photos/000/023/784/original/diagram-workflows.png)



****

## Activities

[image-sequencer](../../tag/activity:image-sequencer)

****

## Questions

[image-sequencer](../../tag/question:image-sequencer)

****

## NDVI

There's now an "NDVI" feature in MapKnitter -- a beta -- for converting the images you upload with the #NDVI equation. It's set up for red filters only right now, but more will come. 

It uses Image Sequencer to do the conversion, which is temporary - your map is not affected, so think of it as a "filter" you can turn on.

Need help? Ask questions above!

How it looks:

![Screen_Shot_2018-05-07_at_12.16.38_PM.png](https://publiclab.org/system/images/photos/000/024/833/large/Screen_Shot_2018-05-07_at_12.16.38_PM.png)
