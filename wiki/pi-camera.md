---
title: "Pi Camera"

tagnames: 'balloon-mapping, kite-mapping, spectrometry, raspberry-pi, timelapse, aerial-mapping, rpi, pi-camera, datasheet'
author: warren
path: /wiki/pi-camera.md
nid: 14571
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/026/785/original/Screenshot_2018-10-04_at_4.52.43_PM.png)

# Pi Camera

by [warren](../profile/warren), [hill58081495](../profile/hill58081495), [nataliatorres](../profile/nataliatorres)

June 22, 2017 18:12 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [spectrometry](../tag/spectrometry), [raspberry-pi](../tag/raspberry-pi), [timelapse](../tag/timelapse), [aerial-mapping](../tag/aerial-mapping), [rpi](../tag/rpi), [pi-camera](../tag/pi-camera), [datasheet](../tag/datasheet)

----

This page collects different ways to use Raspberry Pi computer boards (and related boards) to make small, cheap, lightweight cameras for different purposes, including #aerial-mapping, #balloon-mapping, #kite-mapping, #timelapse and #spectrometry.


## Raspberry Pi Simple Camera Kit

We've [been working on some software](https://github.com/publiclab/image-builder-rpi/) for this widely used mini camera-and-computer in a tiny box (especially the lightweight "Zero W" model) to make it available with a **pre-flashed SD card** that turns this into a **ready-to-use WiFi enabled camera**. This gets over many of the barriers of using the regular Raspberry Pi kit and having to do a lot of programming/installing to get it running. 

We've managed to get a **plug and play** version running! Just plug it in using a Micro USB cable (or battery pack) and it'll create a WiFi network called "00PiCamera" -- password "publiclab" -- which you can log into from your phone or laptop. You'll quickly see streaming video, be able to take photos, timelapses, or videos, do motion triggered capture, and more:

* [Pi Camera Kit](https://store.publiclab.org/products/raspberry-pi-camera)
* [Infragram Pi Camera Kit](https://store.publiclab.org/products/infragram-pi-camera)
* our [Microscope Pi kits](https://store.publiclab.org/collections/microscopes) use this as well
* [Pre-flashed SD cards for Raspberry Pi cameras](https://store.publiclab.org/products/pi-builder-cards)
* combine with (maybe?) [CR123a lithium battery](https://www.amazon.com/s/?ie=UTF8&keywords=cr123a) (and tell us how that goes!)

For more on the open source Pi Builder software that made this possible, [see this blog post](/notes/icarito/10-21-2018/introducing-pi-builder) and [troubleshoot on this wiki page](/pi-builder)

[grid:activity:pi-camera-setup](../../tag/grid:activity:pi-camera-setup)

****

## Questions

Questions can be either frequently asked questions, or "next step" challenges we're looking to solve.

[pi-camera](../../tag/question:pi-camera)

## Activities

Activities show how to use this project, step by step.

[pi-camera](../../tag/activity:pi-camera)

****

### Resources

* Camera module http://m.e-cantonfair.com/#/product/552106
* Focus tricks https://raspi.tv/2013/adapt-your-raspberry-pi-camera-for-close-up-use
* Very detailed documentation https://elinux.org/Rpi_Camera_Module
* Datasheets and very detailed documentation on v1 camera: https://github.com/techyian/MMALSharp/wiki/OmniVision-OV5647-Camera-Module
* Datasheets and very detailed documentation on v2 camera: https://github.com/techyian/MMALSharp/wiki/Sony-IMX219-Camera-Module