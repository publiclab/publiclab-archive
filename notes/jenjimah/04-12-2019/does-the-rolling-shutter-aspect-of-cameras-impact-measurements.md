---
title: "Does the "rolling shutter" aspect of cameras impact measurements?"\ntagnames: 'question:general, response:18991, flicker, banding, rolling, shutter'
author: jenjimah
path: /notes/jenjimah/04-12-2019/does-the-rolling-shutter-aspect-of-cameras-impact-measurements.md
nid: 19046
uid: 505738

---

![](https://publiclab.org/public/system/images/photos/000/031/434/original/lm7HG.jpg)

# Does the "rolling shutter" aspect of cameras impact measurements?

by [jenjimah](../profile/jenjimah) | April 12, 2019 18:53

April 12, 2019 18:53 | Tags: [question:general](../tag/question:general), [response:18991](../tag/response:18991), [flicker](../tag/flicker), [banding](../tag/banding), [rolling](../tag/rolling), [shutter](../tag/shutter)

----

According to [Pi documentation][1], a rolling shutter means that the camera reads the sensor one line at a time. This is a quality of most, if not all, cameras without a physical shutter.

For lights that flicker, e.g. fluorescent lights and LEDs that use pulse width modulation (PWM) for dimming, this can result in "banding" where the intensity varies as the camera reads down the sensor lines.

So aspects of the question are:

 - How noticeable is banding when measuring flickering lights? 
 - Is banding reduced by using longer shutter speeds? 
 - Can this be balanced without overflowing the sensor at "normal" light
   intensities used in research?  
 - What kinds of measurements might this be a problem for, which types of measurements is it
   irrelevant for?  
 - If it's a problem, what are some solutions?

  [1]: https://picamera.readthedocs.io/en/release-1.13/fov.html