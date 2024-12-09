---
title: 'Raspberry Pi-in-the-sky'
tagnames: balloon-mapping, kite-mapping, photo-rig, wireless, remote, raspberry-pi, rpi, pi-camera, raspberry-pi-cameras, activity:pi-camera, first-time-poster
author: donblair
path: /notes/donblair/9-20-2012/raspberry-pi-sky.md
nid: 3908
uid: 43651

---

![](https://publiclab.org/sites/default/files/raspberryPIinthesky2_0.png)

# Raspberry Pi-in-the-sky

by [donblair](../profile/donblair) September 20, 2012 13:54

September 20, 2012 13:54 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [photo-rig](../tag/photo-rig), [wireless](../tag/wireless), [remote](../tag/remote), [raspberry-pi](../tag/raspberry-pi), [rpi](../tag/rpi), [pi-camera](../tag/pi-camera), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [activity:pi-camera](../tag/activity:pi-camera), [first-time-poster](../tag/first-time-poster)

----

In preparing for the PLOTS <a href="http://publiclaboratory.org/notes/cfastie/9-5-2012/l-e-f-f-e-s-t">LEAFFEST</a> this weekend, Craig Versek of <a href="http://www.pvos.org">PVOS</a> has just achieved something pretty cool -- a live WiFi webcam feed from a battery-powered <a href="http://www.raspberrypi.org/faqs">Raspberry Pi</a>!  As long as this little baby is within range of a WiFi signal, any web-enabled device (laptop, smart phone) will be able to navigate to a web page and see what the on-board camera is seeing.  Here's a little schematic of how the device is connected up:

<img width=400 src="http://www.pvos.org/images/rpiExploded.png" alt="rpiExploded" />

<strong>Cost.</strong> The Raspberry Pi itself is $35; still waiting for details on the webcam, battery pack, and wireless dongle (the same type of dongle used to get e.g. a laptop online), but they're pretty inexpensive, too. 

<strong>Weight.</strong> The entire device (including the 5 hour <a href="http://adafruit.com/products/962">battery pack</a>) weighs around 300 grams, and should be light enough to, e.g., include on a balloon or kite imaging payload as a way of making sure that a higher-resolution camera on board is looking at what you're hoping it's looking at.  

<strong>Testing.</strong> Craig is still working out some bugs -- the live video is a bit choppy, and he's thinking he might tweak the setup to simply capture a sequence of still images, instead -- but we're hoping to test the device out on a kite- or balloon-based camera rig this weekend at <a href="http://publiclaboratory.org/notes/cfastie/9-5-2012/l-e-f-f-e-s-t">LEAFFEST</a>.

<strong>How he did it:</strong>  To get the R-Pi transmitting images wirelessly, Craig said he followed the instructions <a href="http://sirlagz.net/2012/08/04/how-to-stream-a-webcam-from-the-raspberry-pi/">here</a> and <a href="(http://sirlagz.net/2012/08/09/how-to-use-the-raspberry-pi-as-a-wireless-access-pointrouter-part-1/">here</a>, and provided the following caveat:  "Compiling large source packages like ffmpeg on the RPi is not for the impatient - though easy to set up, it took over 6 hours to compile - but  is well worth the investment."

<strong>Below is a <a href="http://youtu.be/UGZ-3T5-EdE">demo video</a></strong>:</br>

<a href="http://youtu.be/UGZ-3T5-EdE"><img width=400 src="http://pvos.org/images/rpiDemo.png" alt="rpiDemo" /></a>