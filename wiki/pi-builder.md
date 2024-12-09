---
title: Pi Builder
tagnames: raspberry-pi, cameras, pi, rpi, activity:community-microscope, pi-builder, parent:pi-camera
author: warren
path: /wiki/pi-builder.md
nid: 17414
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/027/438/original/infragram-pi_copy_2.png)

# Pi Builder

by [warren](../profile/warren)

October 28, 2018 17:18 | Tags: [raspberry-pi](../tag/raspberry-pi), [cameras](../tag/cameras), [pi](../tag/pi), [rpi](../tag/rpi), [activity:community-microscope](../tag/activity:community-microscope), [pi-builder](../tag/pi-builder), [parent:pi-camera](../tag/parent:pi-camera)

----

Documentation for the Pi Builder software; see more at [https://github.com/publiclab/pi-builder](https://github.com/publiclab/pi-builder)

Using Pi Builder, you can download a premade SD card image to use your Pi as a WiFi streaming camera, a timelapse camera, an Infragram camera, and much more! 

Read the [introductory blog post here](/notes/icarito/10-21-2018/introducing-pi-builder)

Pi Builder is used in the following projects:

* [Community Microscope Kit](/micro)
* [Lego Spectrometer Kit](/lego)
* [Infragram Pi Camera Kit](/wiki/raspberry-pi-infragram) (above!)

### Download

Get the most standard `pi-builder` SD card image here, which creates a WiFi network called `00-PiCamera` with password `publiclab`, and includes [Infragram](https://infragram.org), [Image Sequencer](https://sequencer.publiclab.org), and camera access (with timelapse):

> https://github.com/publiclab/pi-builder/pull/53

Here's a direct link to a recent built image: https://gitlab.com/publiclab/pi-builder/-/jobs/121890022/artifacts/download

### Connecting

Once you assemble and plug in your Pi with the provided SD card (or flash your own from [one of the recipes here](https://github.com/publiclab/pi-builder/labels/recipe)):

1. wait 3-5 minutes for it to start up
2. connect to the `00-PiCamera` wifi network with password `publiclab`
3. wait for the popup prompt, or use `Click to log in to this network`, or if nothing happens, go to http://pi.local (NOT `https`, sorry!) and you'll see the welcome page. 

If this doesn't work, please post a question below!

### Video quality

The streaming video you see in the web interfaces is not the highest quality available; to change it, click `Camera settings` at the `http://pi.local/cam/` page, and change the `Wi` value to something higher like `1024`. It can in theory go as high as `1980`, but I think streaming at high framerates at this resolution is probably tough for your Pi.

[![image.png](/i/27333)](/i/27333)

### New recipes

To create a new recipe on Pi Builder, see the GitHub repository (and readme file) here:

https://github.com/publiclab/pi-builder

There you can look at proposed recipes, open an issue, or start developing your own recipe by opening a pull request, which will begin auto-building your image each time you push a commit. 


## Questions

[pi-builder](../../tag/question:pi-builder)

****

## Activities

[pi-builder](../../tag/activity:pi-builder)