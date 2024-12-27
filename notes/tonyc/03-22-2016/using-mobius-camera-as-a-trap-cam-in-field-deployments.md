---
title: "Using Mobius camera as a "trap cam" in field deployments"

tagnames: 'mobius, barnstar:basic, activity:timelapse, activity:photo-monitoring'
author: tonyc
path: /notes/tonyc/03-22-2016/using-mobius-camera-as-a-trap-cam-in-field-deployments.md
nid: 12876
uid: 447491

---

![](https://publiclab.org/public/system/images/photos/000/015/184/original/IMG_1137.JPG)

# Using Mobius camera as a "trap cam" in field deployments

by [tonyc](../../../profile/tonyc) | March 22, 2016 18:36

March 22, 2016 18:36 | Tags: [mobius](../tag/mobius), [barnstar:basic](../tag/barnstar:basic), [activity:timelapse](../tag/activity:timelapse), [activity:photo-monitoring](../tag/activity:photo-monitoring)

----

###What I want to do
Get extended field use from a mobius camera, in intervelometer mode.

###My attempt and results
notes on trap cam using mobius

modifying the config file allows you to do intervelometer, but also once your increments are greater than 5 mins, the camera goes into a power saving mode, going to sleep and waking only for the photo.

This allows for extended operation. Using the stock battery, I was able to capture 5 days of images, and the battery still registered as 2 out of 3. The camera ships with a 820mAh 3.7v battery.

<iframe width="420" height="315" src="https://www.youtube.com/embed/XE7Lwj3OxTU" frameborder="0" allowfullscreen></iframe>

There are options to supply more power. One is to connect a larger battery to the board. We currently have some 2200mAh 3.7v batteries, the only problem being they have a full size JST connector, and the Mobius board has a micro JST connector. Trivial to make an adapter, but it is an additional step.

Another option, using stock batteries or otherwise, is to add power by connecting batteries in parallel. I've ordered a cable for this purpose, allowing for 6x JST batteries to be connected in parallel down to one JST plug.

[![51C7PdehD9L._SL1024_.jpg](//i.publiclab.org/system/images/photos/000/015/181/medium/51C7PdehD9L._SL1024_.jpg)](//i.publiclab.org/system/images/photos/000/015/181/original/51C7PdehD9L._SL1024_.jpg)


The camera can also have power supplied via USB, during normal operation. You can connect an off-the-shelf phone-charger battery pack and provide additional power, beyond the stock battery, via the USB port.

Adafruit sells a power boost board that lets you essentially turn a standard JST Lithium battery into a USB power supply. I've ordered a couple of these: https://www.adafruit.com/products/2030


[![2030-07.jpg](//i.publiclab.org/system/images/photos/000/015/182/medium/2030-07.jpg)](//i.publiclab.org/system/images/photos/000/015/182/original/2030-07.jpg)

I'm also wondering if we couldn't provide a trickle charge via Solar, thorugh the USB port. If this worked, the camera could run indefinitely, until the SD card filled up. Right now there is a 32GB max card supported, but with still photos, this is a rediculously long depoloyment.


###Questions and next steps
More tests using the ideas above.

###Why I'm interested
this would be a univerally cool tool for capturing data. Specifially, thinking this could be used to capture turbidity events in streams, potentially could be deployed in combination with a secchi disk to capture turbidity data, but also contextual data as to stream flow and clarity.

Also, I want to see who is eating my sandwiches in the office.