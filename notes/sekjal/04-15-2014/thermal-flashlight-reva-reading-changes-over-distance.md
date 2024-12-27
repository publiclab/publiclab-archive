---
title: "Thermal Flashlight REVA reading changes over distance"

tagnames: 'thermal-photography, arduino, thermal-flashlight, thermal-fishing, thermal-fishing-bob, pcb, response:10094'
author: sekjal
path: /notes/sekjal/04-15-2014/thermal-flashlight-reva-reading-changes-over-distance.md
nid: 10309
uid: 422460

cids: 8764,8767,8772,8775,8776,8782,8789,19312

---

![](https://publiclab.org/public/system/images/photos/000/003/671/original/Screenshot_from_2014-04-14_21_01_08.png)

# Thermal Flashlight REVA reading changes over distance

by [sekjal](../../../profile/sekjal) | April 15, 2014 01:13

April 15, 2014 01:13 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [thermal-fishing](../tag/thermal-fishing), [thermal-fishing-bob](../tag/thermal-fishing-bob), [pcb](../tag/pcb), [response:10094](../tag/response:10094)

----

###What I want to do

Roughly measure the rate of change in the reading from the MLX90614 as distance increases, and to use Lego pieces to do it.

A theoretical discussion can be found in [this Arduino forum post](http://forum.arduino.cc/index.php?topic=86893.0), but I thought it'd be nice to see it in action.

###My attempt and results

A video of my experiment is up on YouTube:

<iframe width="480" height="360" src="//www.youtube.com/embed/k3LJO0J6UXE" frameborder="0" allowfullscreen></iframe>

Each quarter turn of the Lego device is approximately 7mm further.  The baseline measurement was at approximately 1cm. 

###Questions and next steps

1. Audio feedback
2. Output serial to Raspberry Pi
3. Averaging temperature

###Why I'm interested

Folks need to know how sensitive this device is in order to use it.  Holding the Thermal Flashlight a centimeter away from the object will give different results than 3 centimeters, possibly enough to affect decisions, so users should be aware of that.