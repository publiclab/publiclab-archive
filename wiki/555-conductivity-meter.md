---
title: "555-conductivity-meter"

tagnames: 'water-quality-monitoring, water-quality, conductivity, riffle, open-water, 555, response:10538, response:10675, parent:open-water, coqui'
author: kgradow1
path: /wiki/555-conductivity-meter.md
nid: 10683
uid: 297929
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/005/248/original/20140712_143049.jpg)

# 555-conductivity-meter

by [warren](/profile/warren), [kgradow1](/profile/kgradow1)

July 12, 2014 21:10 | Tags: [water-quality-monitoring](/tag/water-quality-monitoring), [water-quality](/tag/water-quality), [conductivity](/tag/conductivity), [riffle](/tag/riffle), [open-water](/tag/open-water), [555](/tag/555), [response:10538](/tag/response:10538), [response:10675](/tag/response:10675), [parent:open-water](/tag/parent:open-water), [coqui](/tag/coqui)

----


###Project
This circuit modifies the [555 Blinky LED circuit](http://www.555-timer-circuits.com/flashing-led.html) to blink an LED at a frequency that is inversely proportional to the conductivity of a solution.   We built a bunch of them during the [7/12/14 Water Quality Workshop @ MIT Media Lab ](http://www.publiclab.org/notes/donblair/07-11-2014/water-quality-workshop-july-12th-mit-media-lab) and tested them out!

###Diagram 

[![555conductivity-nocap.png](https://i.publiclab.org/system/images/photos/000/005/236/medium/555conductivity-nocap.png)](https://i.publiclab.org/system/images/photos/000/005/236/original/555conductivity-nocap.png)

[![FI66X99H7996R0X.MEDIUM.jpg](https://i.publiclab.org/system/images/photos/000/005/238/medium/FI66X99H7996R0X.MEDIUM.jpg)](https://i.publiclab.org/system/images/photos/000/005/238/original/FI66X99H7996R0X.MEDIUM.jpg)

###How to build it

Salt solution:   We used 100 ml water in five different solutions

[![20140712_160519.jpg](https://i.publiclab.org/system/images/photos/000/005/239/medium/20140712_160519.jpg)](https://i.publiclab.org/system/images/photos/000/005/239/original/20140712_160519.jpg)

1 - No salt (distilled water).
2 - 100 mg (low salt).
3 - 425 mg (medium salt).
4 - 1100 mg (high salt).
6 - 5000 mg (brine - similar to salt water).

[A good explanation of conductivity and salinity](http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/)

[We used this page to compare salinity to real-world samples](http://www.fao.org/docrep/t0667e/t0667e05.htm)

[![20140712_143829.jpg](https://i.publiclab.org/system/images/photos/000/005/242/medium/20140712_143829.jpg)](https://i.publiclab.org/system/images/photos/000/005/242/original/20140712_143829.jpg)

Water bottle setup:   Cut the top off and fill your water bottle to 100 ml

[![20140712_150326.jpg](https://i.publiclab.org/system/images/photos/000/005/246/medium/20140712_150326.jpg)](https://i.publiclab.org/system/images/photos/000/005/246/original/20140712_150326.jpg)

Build your sensor    Two screws in the cap, roughly 1 cm apart and attached to alligator clips -- this is your sensor and goes in place of R2

###Pictures of built sensors

[![20140712_143049.jpg](https://i.publiclab.org/system/images/photos/000/005/241/medium/20140712_143049.jpg)](https://i.publiclab.org/system/images/photos/000/005/241/original/20140712_143049.jpg)
With a variable cap in place of R2 for testing

[![20140712_144749.jpg](https://i.publiclab.org/system/images/photos/000/005/243/medium/20140712_144749.jpg)](https://i.publiclab.org/system/images/photos/000/005/243/original/20140712_144749.jpg)
Putting it all together


[![20140712_143028.jpg](https://i.publiclab.org/system/images/photos/000/005/244/medium/20140712_143028.jpg)](https://i.publiclab.org/system/images/photos/000/005/244/original/20140712_143028.jpg)
Modifying the design


[![20140712_160313.jpg](https://i.publiclab.org/system/images/photos/000/005/245/medium/20140712_160313.jpg)](https://i.publiclab.org/system/images/photos/000/005/245/original/20140712_160313.jpg)
4 (~groundwater runoff) vs 6 (~seawater) w/ piezo instead of LED -- one whole tone difference!


###Output to Arduino
Here's some Arduino code to monitor the output (more explanation tomorrow), as well as measure the temperature (an important variable for conductivity):

https://gist.github.com/dwblair/f0baedb7b8e155b804ae

A preliminary test showed a nice, solid, repeatable relationship between conductivity and the average 555 timer pulse duration (y axis is average pulse duration in seconds, x axis is index of data points, sampled every few seconds -- the probe was initially placed in a higher conductivity solution, then then briefly in a lower conductivity for three separate stretches (indicated by the three higher plateaus)) ...

[![conductivityjuly14-2.png](https://i.publiclab.org/system/images/photos/000/005/240/medium/conductivityjuly14-2.png)](https://i.publiclab.org/system/images/photos/000/005/240/original/conductivityjuly14-2.png)

###Mods

**Tone generator dance machine version**
- swap output to an audio cable 
- add a potentiometer to drop the voltage to a safe range for your computer - limit max voltage 0.5V  (without no pot the output is 2.8V)
- feed it into a tone generator -- make some tunes!

**Capacitor swap analog synth version**
- swap 10uf cap for .01uf cap 
- add a piezo speaker in parallel with your LED
- instead of clicks, you hear distinguishable tones!
- one whole step between salinity #4 and #6 -- noticeable difference!  (note:  with the smaller capacitor the LED will not blink for either circuit -- it's blinking too fast and looks like it's permanently on)


See also:  [open water wiki
](http://www.publiclab.org/wiki/open-water)