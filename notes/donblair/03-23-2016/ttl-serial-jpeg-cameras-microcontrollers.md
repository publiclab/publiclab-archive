---
title: "TTL Serial JPEG Cameras + microcontrollers"

tagnames: 'riffle, riffle-examples'
author: donblair
path: /notes/donblair/03-23-2016/ttl-serial-jpeg-cameras-microcontrollers.md
nid: 12880
uid: 43651
cids: 14030,14032,14033,14076,14087,14154
---

![](https://publiclab.org/public/system/images/photos/000/015/197/original/IMG_20160323_103253944.jpg)

# TTL Serial JPEG Cameras + microcontrollers

by [donblair](/profile/donblair) | March 23, 2016 17:50

March 23, 2016 17:50 | Tags: [riffle](/tag/riffle), [riffle-examples](/tag/riffle-examples)

----

Just seeing @tonyc 's recent note on [using a Mobius camera for field time lapse](https://publiclab.org/notes/tonyc/03-22-2016/using-mobius-camera-as-a-trap-cam-in-field-deployments) -- great stuff!

I've been trying out a TTL serial JPEG camera -- a [weatherproof version, from Adafruit](https://www.adafruit.com/products/613)-- with an Arduino-compatible device (a [Riffle](http://publiclab.org/wiki/riffle).  

It's quite easy to follow Adafruit's [tutorial](https://learn.adafruit.com/ttl-serial-camera) and get the camera up and running.  I took a few quick snaps of the alley outside my apartment:

[![test_image.JPG](//i.publiclab.org/system/images/photos/000/015/198/medium/test_image.JPG)](//i.publiclab.org/system/images/photos/000/015/198/original/test_image.JPG)

[![test_image_2.JPG](//i.publiclab.org/system/images/photos/000/015/199/medium/test_image_2.JPG)](//i.publiclab.org/system/images/photos/000/015/199/original/test_image_2.JPG)

Not sure yet how great the colors in these snaps will be ... and the resolution on this device maxes out at 640x480.  But it's nice to have control over turning the camera on and telling it when to capture an image, in a simple microcontroller-based context.

The code I'm using to test things out (based on the tutorial linked above) is [here](https://gist.github.com/dwblair/cb11ba25086e7f8139c2). 

The setup is simple -- the only caveat is that the camera comm pins want 3.3V, but the camera itself requires 5V.  Since the Riffle runs at 3.3V, the signal connections are easy -- for powering the camera, I simply used another 5V microcontroller as a power source.  Like @tonyc mentioned, I'm going to look into a 'boost' board to generate 5V for the device.  A special camera-connection board with 5V boost might be something to consider in the future.

Here's a snap of the current setup:  

[![IMG_20160323_103253944.jpg](//i.publiclab.org/system/images/photos/000/015/200/medium/IMG_20160323_103253944.jpg)](//i.publiclab.org/system/images/photos/000/015/200/original/IMG_20160323_103253944.jpg)

- Camera
- Riffle
- Arduino Micro 5V