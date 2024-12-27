---
title: "Standalone NBG export for Images & Video (Mac OS X)"

tagnames: 'near-infrared-camera, video, infragram, nbg, false-color'
author: mathew
path: /notes/mathew/06-01-2013/standalone-nbg-export-for-images-video-mac-os-x.md
nid: 7998
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/000/445/original/Screen_shot_2013-05-31_at_7.12.12_PM.png)

# Standalone NBG export for Images & Video (Mac OS X)

by [mathew](../../../profile/mathew) | June 01, 2013 02:29

June 01, 2013 02:29 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [video](../tag/video), [infragram](../tag/infragram), [nbg](../tag/nbg), [false-color](../tag/false-color)

----

##What I wanted to do
I wanted to make an exporter for NDVI and NBG images using my decade-old license for [Max/MSP/Jitter](http://cycling74.com/), but couldn't get NDVI working, because jit.op objects will only divide video in floating point mode, and I had some trouble with that.

##My attempt and results
[Download Max/MSP 4.6 and Jitter 1.6 Runtime](http://cycling74.com/downloads/older/)  and [this file](https://dl.dropboxusercontent.com/u/31205904/nBG).

you can edit the colors, and then export.  all export files are saved as "NBG.mov" in whatever directory the software is saved to, so re-name each file after export so it doesn't get written over.