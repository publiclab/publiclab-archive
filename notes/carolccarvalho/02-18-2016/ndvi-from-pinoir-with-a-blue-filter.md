---
title: "NDVI from PiNoir with a blue filter"\ntagnames: 'ndvi, infrared, raspberry-pi, infrared-photography, fiji, ngb, raspberry, pi-camera, pinoir, raspberry-pi-infragram, activity:raspberry-pi-infragram, activity:pi-camera, first-time-poster'
author: carolccarvalho
path: /notes/carolccarvalho/02-18-2016/ndvi-from-pinoir-with-a-blue-filter.md
nid: 12712
uid: 461381

---

![](https://publiclab.org/public/system/images/photos/000/014/392/original/ndvi.jpg)

# NDVI from PiNoir with a blue filter

by [carolccarvalho](../profile/carolccarvalho) | February 18, 2016 23:16

February 18, 2016 23:16 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [raspberry-pi](../tag/raspberry-pi), [infrared-photography](../tag/infrared-photography), [fiji](../tag/fiji), [ngb](../tag/ngb), [raspberry](../tag/raspberry), [pi-camera](../tag/pi-camera), [pinoir](../tag/pinoir), [raspberry-pi-infragram](../tag/raspberry-pi-infragram), [activity:raspberry-pi-infragram](../tag/activity:raspberry-pi-infragram), [activity:pi-camera](../tag/activity:pi-camera), [first-time-poster](../tag/first-time-poster)

----

###What I want to do
Hi!

I'm using a PiNoir camera with a blue filter to take ngb pictures. As I need to do a color balance before turning the picture to ndvi (I'm not using awb_gains) I created a matlab routine to do this adjustment automatically. 

Since I take the pictures with a piece of blue paper, that is my calibration parameter, I insert the location of the blue pixel and it adjusts the red and blue channels until it becomes gray. In the same code, after doing the color balance, matlab turns the photo in ndvi. I've been using vgyrm gradient.

###My attempt and results
I think that the conversion to ndvi is correct. I compared the results with Fiji's.
Some results and foliage related histograms are shown below.

**1 - **

![resultado_2.jpg](//i.publiclab.org/system/images/photos/000/014/386/original/resultado_2.jpg)

[![2.png](//i.publiclab.org/system/images/photos/000/014/387/medium/2.png)](//i.publiclab.org/system/images/photos/000/014/387/original/2.png)

**2 - **

![resultado_1.jpg](//i.publiclab.org/system/images/photos/000/014/388/original/resultado_1.jpg)

[![1.png](//i.publiclab.org/system/images/photos/000/014/389/medium/1.png)](//i.publiclab.org/system/images/photos/000/014/389/original/1.png)

**3 - **

![resultado_3.jpg](//i.publiclab.org/system/images/photos/000/014/390/original/resultado_3.jpg)

[![3.png](//i.publiclab.org/system/images/photos/000/014/391/medium/3.png)](//i.publiclab.org/system/images/photos/000/014/391/original/3.png)

###Questions and next steps
The problem is that I'm not sure if I'm doing color balance correctly in the pictures and if is it possible to increase these results somehow... 

For the same plant, the results were very different. Some areas are magenta colored and I think that the leaves doesn't show high ndvi values (>0.9) so I guess that's ok. But some other areas (not foliage) showed values between 0.2 and 0.9 and I don't know why, since there is no photosynthesis occuring there.

Please could you guys confirm if those results are correct and, if not, what can I do to try to correct them?