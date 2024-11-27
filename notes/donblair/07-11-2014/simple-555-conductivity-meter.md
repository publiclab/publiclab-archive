---
nid: 10675
title: Simple 555 conductivity meter
path: public/static/notes/donblair/07-11-2014/simple-555-conductivity-meter.md
uid: 43651
tagnames: arduino,water-quality,thermal-fishing-bob,conductivity,555,openwater,response:10589,response:10538
---

# Simple 555 conductivity meter

I'm going to add some notes to this tomorrow, but just wanted to jot some stuff down.

Recipe for a conductivity meter that blinks an LED at a frequency that is inversely proportional to the conductivity of a solution. 

Here's the wiring diagram:


[![555conductivity-nocap.png](https://i.publiclab.org/system/images/photos/000/005/233/medium/555conductivity-nocap.png)](https://i.publiclab.org/system/images/photos/000/005/233/original/555conductivity-nocap.png)





And here's some Arduino code to monitor the output (more explanation tomorrow), as well as measure the temperature (an important variable for conductivity):

https://gist.github.com/dwblair/f0baedb7b8e155b804ae

A preliminary test showed a nice, solid, repeatable relationship between conductivity and the average 555 timer pulse duration (y axis is average pulse duration in seconds, x axis is index of data points, sampled every few seconds -- the probe was initially placed in a higher conductivity solution, then then briefly in a lower conductivity for three separate stretches (indicated by the three higher plateaus)) ...

[![conductivityjuly14-2.png](https://i.publiclab.org/system/images/photos/000/005/221/medium/conductivityjuly14-2.png)](https://i.publiclab.org/system/images/photos/000/005/221/original/conductivityjuly14-2.png)


... more soon!



