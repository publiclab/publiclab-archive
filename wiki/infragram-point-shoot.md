---
title: Infragram Point & Shoot
tagnames: infragram, parent:infragram
author: warren
path: /wiki/infragram-point-shoot.md
nid: 10634
uid: 1

---

# Infragram Point & Shoot

by [warren](../profile/warren), [abdul](../profile/abdul), [mathew](../profile/mathew), [natalie](../profile/natalie)

June 30, 2014 16:12 | Tags: [infragram](../tag/infragram), [parent:infragram](../tag/parent:infragram)

The Infragram Point & Shoot is a handheld, battery powered mini camera (a modified Mobius Action Cam) for doing plant analysis. We [modify these](https://publiclab.org/notes/warren/10-19-2017/install-a-filter-or-change-the-lens-in-a-mobius-action-cam) to replace the infrared-blocking filter with a red filter, effectively exchanging its blue light channel for infrared light. 

(_Lead image by @mathew_)

This is based on a great deal of [research by Public Lab contributors](http://publiclab.org/tag/infragram) and was initially pioneered in our community by @nedhorning and @cfastie. See especially [these](http://publiclab.org/notes/cfastie/04-22-2014/mobius-ir-conversion) [two](http://publiclab.org/notes/cfastie/04-18-2014/mobius-filter-o-matic) research notes.  

Also see [this page](/wiki/raspberry-pi-infragram) for how to do this with a [Raspberry Pi camera](/wiki/pi-camera). 

## Why

Vineyards, large farms, and NASA all use [near-infrared photography](http://publiclab.org/wiki/near-infrared-camera) for assessing plant health, usually by mounting expensive sensors on airplanes and satellites. At Public Lab, we've developed a Do-It-Yourself way to take these kinds of photos, enabling us to monitor our environment through quantifiable data. [Read more about the Infragram project here](/wiki/infragram).

[![5412520298_93873f36d0_o.png](https://i.publiclab.org/system/images/photos/000/005/386/medium/5412520298_93873f36d0_o.png)](https://i.publiclab.org/system/images/photos/000/005/386/original/5412520298_93873f36d0_o.png)

Our technique uses a modified digital camera to capture near-infrared and red light in the same image, but in **different color channels**. We then post-process the image (see Infragram.org, below) to attempt to infer how much plants are photosynthesizing. This allows us to better understand and quantify how much of the available light plants are using to produce sugar via photosynthesis.

### Basics

Before you begin, to take useful plant analysis photos, **you'll have to modify your camera's white balance**, so that vegetation looks "bluish" but there is not an overall red tinge to the images. You can achieve this with a custom config file, as described below. 

Some cameras may require a firmware upgrade to v1.20. If you've gotten your Infragram Point & Shoot from the [Public Lab store](http://store.publiclab.org), both the config file and the v1.20 firmware should be on the SD card provided. However, you'll still have to load up the white balance configuration as described in the Activities section below.

[![Infragram_Parts.jpg](https://publiclab.org/system/images/photos/000/022/006/large/Infragram_Parts.jpg)](https://publiclab.org/system/images/photos/000/022/006/original/Infragram_Parts.jpg)

(_above image by @abdul_)

## Activities

[activities:infragram-point-shoot]

****

## Questions

These are questions just for the Infragram Point & Shoot, also known as the Mobius Action Cam. For questions about infrared imaging or the Infragram project more broadly, see [the Infragram page](/wiki/infragram#Questions).

[questions:infragram-point-shoot]

For any information, support, or troubleshooting not covered here, please look to [this epic thread about the Mobius Action Cam at RCGroups.com](http://www.rcgroups.com/forums/showthread.php?t=1904559) which contains a great deal of information about using and modifying the camera. 

****

## Upgrades

Done something cool with your Mobius? Added to it or improved on it? Post your upgrade guides here:

[upgrades:infragram-point-shoot]

**** 

### Software

There is a variety of software available to process your images to calculate [NDVI](/wiki/ndvi) and better understand or compare plant health. See [Infrared software](/wiki/infrared-software) for options.

To get started quickly, see our guide on [Getting started with Infragram.org](https://publiclab.org/notes/warren/10-20-2017/getting-started-with-infrared-photography-on-infragram-org).

****

### White balance

One step you need to take to set up this camera is to configure the **white balance**; otherwise, your images will be flooded with infrared and will look pinkish -- and the NDVI post-processing steps (see above) won't work.

To set the white balance on your Mobius, follow the steps in this activity:

https://publiclab.org/notes/warren/10-23-2017/change-the-white-balance-or-other-configuration-on-a-mobius-camera

Images should look roughly like the "GOOD" example below -- vegetation should appear generally pastel blue. An incorrectly white-balanced image such as the "BAD" example below may appear with an overall reddish tint. This means the camera probably has not accepted your config file, possibly due to misformatting or incorrect uploading. 

[![good-bad.png](https://i.publiclab.org/system/images/photos/000/005/383/medium/good-bad.png)](https://i.publiclab.org/system/images/photos/000/005/383/original/good-bad.png)

For more on white balance, see:

> [Infrablue white balance](/wiki/infrablue-white-balance)

****

### Resources

Kit insert: <a href="https://i.publiclab.org/system/images/photos/000/005/388/original/infragram-ps-insert.pdf"><i class="icon icon-file"></i> infragram-ps-insert.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/005/390/original/timelapse.svg"><i class="icon icon-file"></i> timelapse.svg</a>

<a href="https://i.publiclab.org/system/images/photos/000/005/389/original/modes.svg"><i class="icon icon-file"></i> modes.svg</a>

An official manual for the Mobius Action Cam can also be found here: <a href="https://www.mobius-actioncam.com/downloads-info/" target="_blank" > https://www.mobius-actioncam.com/downloads-info// </a>
