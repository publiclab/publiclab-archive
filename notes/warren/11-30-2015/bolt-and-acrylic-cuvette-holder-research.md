---
title: "Bolt and acrylic cuvette holder research"

tagnames: 'spectrometer, fluorescence, barnraising, cuvette, sampling, oil-testing-kit, barnraising-2015, cuvette-frame'
author: warren
path: /notes/warren/11-30-2015/bolt-and-acrylic-cuvette-holder-research.md
nid: 12462
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/013/093/original/2015-11-30T18_24_10.130Z.jpg)

# Bolt and acrylic cuvette holder research

by [warren](../../../profile/warren) | November 30, 2015 19:20

November 30, 2015 19:20 | Tags: [spectrometer](../tag/spectrometer), [fluorescence](../tag/fluorescence), [barnraising](../tag/barnraising), [cuvette](../tag/cuvette), [sampling](../tag/sampling), [oil-testing-kit](../tag/oil-testing-kit), [barnraising-2015](../tag/barnraising-2015), [cuvette-frame](../tag/cuvette-frame)

----

###What I want to do

I want to try a bolt-and-plate acrylic skeleton for a more rigid attempt at a cuvette holder, following up on a cafeteria design session at the Barnraising with @tonyc, @matej, @ygstcu, and others. Sketches:


[![Screenshot_2015-11-30_at_1.25.45_PM.png](//i.publiclab.org/system/images/photos/000/013/090/medium/Screenshot_2015-11-30_at_1.25.45_PM.png)](//i.publiclab.org/system/images/photos/000/013/090/original/Screenshot_2015-11-30_at_1.25.45_PM.png)


[![Screenshot_2015-11-30_at_1.27.08_PM.png](//i.publiclab.org/system/images/photos/000/013/091/medium/Screenshot_2015-11-30_at_1.27.08_PM.png)](//i.publiclab.org/system/images/photos/000/013/091/original/Screenshot_2015-11-30_at_1.27.08_PM.png)


[![Screenshot_2015-11-30_at_1.27.26_PM.png](//i.publiclab.org/system/images/photos/000/013/092/medium/Screenshot_2015-11-30_at_1.27.26_PM.png)](//i.publiclab.org/system/images/photos/000/013/092/original/Screenshot_2015-11-30_at_1.27.26_PM.png)

###My attempt and results

I'm just sourcing parts right now, and am going to try cardboard "shelves" before doing acrylic ones. 

Nylon spacers in 1/2" lengths with 1/4" exterior diameters for #6 bolts: http://www.mcmaster.com/#94639a303/=101d502 (we may choose different ones later) are $8 per 100.

I'll find bolts and such at the hardware store when these arrive. The key factors are:

* cuvette height off the "floor" so the beam intersects the clear part of the cuvette
* a shelf with square hole at top
* a shelf with square hole somewhere below the beam path, for stability
* eventually a dark material for the shelves
* ensuring the circuit board
* circuit board held in position by the knob bolt
* dial on a C-shaped piece pinned by the shelves (this'll make more sense when I have a prototype built

The knob would allow consistent dimming of the LED using USB power -- no batteries. We're thinking of just using a Digispark or another cheap mini Arduino clone, with a simple program on it for dimming via potentiometer. This might be nice for folks to later add different programs, or different LEDs that could be mixed, or whatever. 

The dimmer could be numbered so you can just turn it to the right setting. I'd hope we could assume the power to the LED is pretty consistent, but we can test that. 

The whole LED/dimmer could also be placed inline with the spectrometer for absorption, instead of at 90 degrees for fluorescence. So this'd be a generalized cuvette frame. 

Eager to try this out to see if it'd work! A lot depends on [if we can get bright enough LEDs](/notes/warren/08-19-2014/ultra-micro-cuvette-tests-uv-led-and-low-temperature-fluorescence)