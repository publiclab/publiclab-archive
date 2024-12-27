---
title: "DaffyCam"

tagnames: 'near-infrared-camera, ndvi, vermont, infrared, imagej, infragram, plant-health, timelapse, superblue, vegetation, infrablue, activity:timelapse'
author: cfastie
path: /notes/cfastie/04-24-2013/daffycam.md
nid: 7031
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/111/original/daffodil-201336168.jpg)

# DaffyCam

by [cfastie](../../../profile/cfastie) | April 24, 2013 16:45

April 24, 2013 16:45 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [infrared](../tag/infrared), [imagej](../tag/imagej), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [timelapse](../tag/timelapse), [superblue](../tag/superblue), [vegetation](../tag/vegetation), [infrablue](../tag/infrablue), [activity:timelapse](../tag/activity:timelapse)

----

<em>Image above: Some of my favorite things are best done on windy days, but timelapse photography is not one of them. To eliminate the shadows of tree branches, I shaded the daffodil with reemay (spunbond polyester fabric) which fortunately responded like a flag instead of a sail.</em>

With CHDK installed in a Powershot camera it is easy to make timelapse videos by having the camera take photos at intervals of seconds or minutes. But to take timelapse sequences over the course of many hours or days, the duration of battery power is inadequate, so an AC power supply is preferred. We have been experimenting with [timelapse sequences made with webcams](http://publiclab.org/notes/cfastie/04-20-2013/crocuscam) connected to computers, so power is not an issue. I assumed it would be a lot of trouble to take long timelapse sequences with Powershot cameras which run on batteries, and that webcams were the best way to go. 

![ACDC-201336232.jpg](https://i.publiclab.org/system/images/photos/000/000/112/medium/ACDC-201336232.jpg)
<p><em>Some Powershots have little doors that allow power cables to access the battery compartment</em></p>

When I disassembled my Canon Powershot A810 to remove the IR block filter, I noticed a little door at the base of the battery compartment. Such a door could have only one function -- to allow a wire to access the compartment.  That meant Canon must make an AC power adapter for this Powershot. I noticed the same feature on Ned's Canon G11 superblue camera. Sure enough, Canon makes an AC power adapter for some Powershots which has a "plug" that looks like a battery and fits in the battery compartment. This meant that my new [Rosco NDVI A810](http://publiclab.org/notes/cfastie/04-21-2013/rosco) camera, and Ned's LifePixel Superblue G11 could gracefully take long-term timelapse sequences. I ordered adapters for each camera, each under $20.

![daffodil-201336155.jpg](https://i.publiclab.org/system/images/photos/000/000/113/medium/daffodil-201336155.jpg)
<p><em>The superblue G11 waited all day for a daffodil to open.</em></p>

The adapter for the G11 arrived first, so I set it up to capture a daffodil flower opening. This happens slowly compared to crocuses, so the capture sequence lasted 10 hours, from 9 AM to 7 PM, and the flower was not even fully open yet. Photos were captured every 30 seconds, but that was too frequent, and I tripled the speed of the final video. 

Ned's ImageJ plugin for processing superblue photos into NDVI images is not yet setup to handle hundreds of images at a time, so I used the standard plugin for making NDVI from two images (just needed duplicate directories of the superblue images). I was surprised to learn that the superblue NDVI does not discriminate between healthy photosynthetic daffodil leaves and bright yellow flowers.  They both have pretty much the same NDVI values. So the final video does little to demonstrate what NDVI is all about. I found a color look-up table that sort of differentiates the daffodil tube from the petals, and then rocked the color balance to highlight that. So there is little scientific meaning to the colors in the video. Maybe by the time the power adapter for the A810 arrives there will be some flowers blooming that are not yellow, and I can demonstrate that NDVI can tell us that they are not photosynthetic. 

Update: I added a second day of action to the video below. The first day's flower continued to open overnight, so I started with another unopened flower this morning. It was much warmer today, and the flower opened completely in several hours. I captured one image per minute today, and did not have to speed up the video which has 25 frames per second, each second representing 25 minutes. I added nine seconds, representing almost three hours.

<iframe width="853" height="480" src="https://www.youtube.com/embed/abIs30C2kZs?rel=0" frameborder="0" allowfullscreen></iframe>