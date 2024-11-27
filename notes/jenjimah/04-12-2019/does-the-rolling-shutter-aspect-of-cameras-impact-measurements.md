---
nid: 19046
title: Does the "rolling shutter" aspect of cameras impact measurements?
path: public/static/notes/jenjimah/04-12-2019/does-the-rolling-shutter-aspect-of-cameras-impact-measurements.md
uid: 505738
tagnames: question:general,response:18991,flicker,banding,rolling,shutter
---

# Does the "rolling shutter" aspect of cameras impact measurements?

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