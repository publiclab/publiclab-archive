---
title: AREN Project
tagnames: as220, nasa, infragram, aren
author: warren
path: /wiki/aren.md
nid: 15256
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/022/656/original/Screenshot_2017-11-29_at_4.40.13_PM.png)

# AREN Project

by [warren](../profile/warren)

November 28, 2017 23:03 | Tags: [as220](../tag/as220), [nasa](../tag/nasa), [infragram](../tag/infragram), [aren](../tag/aren)

----

A number of Public Lab projects are supported in part by [NASA](https://science.nasa.gov/stem-activation-team) through the [AREN project](https://www.globe.gov/web/aren-project/), which focuses on educational uses of kite aerial photography for photographic and sensor data collection. 

As part of the AREN project, Public Lab is making progress on several projects. In AREN's words:

```
In AREN we...

* Plan and prepare for a launch
* Launch kites
* Attach payloads
* Collect data
* Conduct post-mission debrief
* Analyze and share our data
```

Public Lab's primary project as part of AREN is to create, refine, and improve open source image processing tools for aerial photography, primarily [Infragram](http://infragram.org) and [Image Sequencer](https://github.com/publiclab/image-sequencer/), but also [lens distortion tools](/lens-distortion). Public Lab is also investigating low-cost, DIY sensor platforms for use on aerial platforms. 

****

## Educators

For educators looking to apply these techniques in the classroom, see our [Education page](/education). 

## Activities

These activities were developed as part of Public Lab's collaboration with the AREN project:

[grid:activity:aren](../../tag/grid:activity:aren)

****

![infragram](/system/images/photos/000/021/974/large/Screenshot_2017-10-18_at_5.42.41_PM.png)

## Infragram

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. In the context of the AREN project, the Infragram project will provide an easy to access and easy to use tool for multispectral image analysis in the classroom. You can read more about Infragram at:

http://publiclab.org/infragram

And use the latest version at:

https://infragram.org

****

[![diagram-6-steps.png](https://publiclab.org/system/images/photos/000/022/640/medium/diagram-6-steps.png)](https://publiclab.org/system/images/photos/000/022/640/original/diagram-6-steps.png)

## ImageSequencer

ImageSequencer is a pure JavaScript sequential image processing system, inspired by storyboards, which we are optimizing for analyzing and processing remote sensing imagery.

  
Image Sequencer is different from other image processing systems in that it's non-destructive: instead of modifying the original image, it **creates a new image at each step in a sequence**. This is because it:

- produces a legible trail of operations, to "show your work" for evidential, educational, or reproducibility reasons
- makes the creation of new tools or "modules" simpler -- each must accept an input image, and produce an output image
- allows many images to be run through the same sequence of steps
- works identically in the browser, on Node.js, and on the commandline

More soon!

* Demo: https://publiclab.github.io/image-sequencer/
* Source code: https://github.com/publiclab/image-sequencer/

****

## Leaflet.Multispectral

Multispectral color manipulation and processing (NDVI etc) for Leaflet image overlays with pure JavaScript in Image Sequencer.

Read more here: https://github.com/publiclab/leaflet-multispectral

[![demo-leaflet-multispectral.png](/i/29216)](/i/29216)

## Leaflet.TileFilter

This Leaflet plugin provides multispectral channel manipulation and processing tools (such as NDVI or other remote sensing methods) for Leaflet tile layers using pure client-side JavaScript. 

Read more here: https://github.com/publiclab/leaflet-tile-filter/


****

## Low-cost airborne sensors

We are also working on comparing low-cost, open source wind sensors like that offered by #as220. More broadly, data logging and sensor platform work will address issues of modeling study design, piloting low-cost payloads, testing data logging and analysis workflows.

****

## Questions

[nasa](../../tag/question:nasa)

****

## Updates

[nasa](../../tag/nasa)
