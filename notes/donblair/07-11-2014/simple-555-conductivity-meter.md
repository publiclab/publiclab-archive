---
title: "Simple 555 conductivity meter"

tagnames: 'arduino, water-quality, thermal-fishing-bob, conductivity, 555, openwater, response:10589, response:10538'
author: donblair
path: /notes/donblair/07-11-2014/simple-555-conductivity-meter.md
nid: 10675
uid: 43651
cids: 9480,9481,9483,9499,9503,9506,9537
---

![](https://publiclab.org/public/system/images/photos/000/005/216/original/555conductivity.png)

# Simple 555 conductivity meter

by [donblair](/profile/donblair) | July 11, 2014 04:16

July 11, 2014 04:16 | Tags: [arduino](/tag/arduino), [water-quality](/tag/water-quality), [thermal-fishing-bob](/tag/thermal-fishing-bob), [conductivity](/tag/conductivity), [555](/tag/555), [openwater](/tag/openwater), [response:10589](/tag/response:10589), [response:10538](/tag/response:10538)

----

I'm going to add some notes to this tomorrow, but just wanted to jot some stuff down.

Recipe for a conductivity meter that blinks an LED at a frequency that is inversely proportional to the conductivity of a solution. 

Here's the wiring diagram:


[![555conductivity-nocap.png](https://i.publiclab.org/system/images/photos/000/005/233/medium/555conductivity-nocap.png)](https://i.publiclab.org/system/images/photos/000/005/233/original/555conductivity-nocap.png)





And here's some Arduino code to monitor the output (more explanation tomorrow), as well as measure the temperature (an important variable for conductivity):

https://gist.github.com/dwblair/f0baedb7b8e155b804ae

A preliminary test showed a nice, solid, repeatable relationship between conductivity and the average 555 timer pulse duration (y axis is average pulse duration in seconds, x axis is index of data points, sampled every few seconds -- the probe was initially placed in a higher conductivity solution, then then briefly in a lower conductivity for three separate stretches (indicated by the three higher plateaus)) ...

[![conductivityjuly14-2.png](https://i.publiclab.org/system/images/photos/000/005/221/medium/conductivityjuly14-2.png)](https://i.publiclab.org/system/images/photos/000/005/221/original/conductivityjuly14-2.png)


... more soon!



