---
nid: 10309
title: Thermal Flashlight REVA reading changes over distance
path: public/static/notes/sekjal/04-15-2014/thermal-flashlight-reva-reading-changes-over-distance.md
uid: 422460
tagnames: thermal-photography,arduino,thermal-flashlight,thermal-fishing,thermal-fishing-bob,pcb,response:10094
---

# Thermal Flashlight REVA reading changes over distance

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