---
title: 'Visualight board for Thermal Flashlights'
tagnames: thermal-photography, arduino, thermal-flashlight, led, visualight, activity:thermal-flashlight, upgrade:thermal-flashlight
author: warren
path: /notes/warren/11-15-2013/visualight-board-for-thermal-flashlights.md
nid: 9784
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/002/233/original/visualight.jpg)

# Visualight board for Thermal Flashlights

by [warren](../profile/warren) November 15, 2013 17:35

November 15, 2013 17:35 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [led](../tag/led), [visualight](../tag/visualight), [activity:thermal-flashlight](../tag/activity:thermal-flashlight), [upgrade:thermal-flashlight](../tag/upgrade:thermal-flashlight)

----

###What I want to do

Leif Percifield's [Visualight](http://blog.visualight.org) is an affordable Arduino-compatible USB-stick with a powerful RGB LED on it -- perfect for a thermal flashlight! So I jumped into just getting the colors to change. I'll try something with the Melexis infrared sensor later, but Leif left i2c pins open specifically so that we at Public Lab could connect such sensors! It's also [open source](https://github.com/lpercifield/visualight). Leif is the best.

###My attempt and results

I made this Arduino sketch: https://gist.github.com/jywarren/7488213

<script src="https://gist.github.com/jywarren/7488213.js"></script>

It just blinks each LED in succession; real simple.

###Questions and next steps

Next up: connecting a power source (just a 2 AA battery USB power source) and the IR sensor. This thing is so compact, it'll fit nicely into a tube or other enclosure. 
