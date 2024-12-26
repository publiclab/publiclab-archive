---
title: "Sync-mod for ambient background removal -- first tests"\ntagnames: ''
author: donblair
path: /notes/donblair/03-23-2016/sync-mod-for-ambient-background-removal-first-tests.md
nid: 12881
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/015/201/original/IMG_20160321_202615863.jpg)

# Sync-mod for ambient background removal -- first tests

by [donblair](../profile/donblair) | March 23, 2016 18:01

March 23, 2016 18:01 | Tags: 

----

This is a quick follow-up to the idea posted [here](https://publiclab.org/notes/donblair/03-08-2016/removing-ambient-background-light-from-turbidity-measurements-through-signal-modulation).

The idea in that note was that by adding a pulse at a certain frequency to an emitter (i.e. turn an LED on and off at a certain rate) and filtering a detector signal (a photodiode) so that only signals of that frequency are received, we might be able to do light scattering experiments (like turbidity measurements) and avoid contamination from any light sources that don't match our particular frequency.

I'll be posting more details soon, but I attempted this with a visible red LED and a matching phototransistor:

<iframe width="420" height="315" src="https://www.youtube.com/embed/Z-1vPmC7GVw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

In the video, the top green line on the oscilloscope is the detector, and the bottom green line (the nice square wave) is the emitter signal.

What I try to show in the video is:  while closing and opening the box and shining a light don't affect the magnitude of the top trace significantly, it is nevertheless sensitive to any disruption in the pulsed beam of light.

Schematics and more details forthcoming!

Next step: try an 850 nm LED of the sort more commonly used in turbidity, and see how well we can distinguish liquids of different turbidities (while varying ambient light conditions). 

