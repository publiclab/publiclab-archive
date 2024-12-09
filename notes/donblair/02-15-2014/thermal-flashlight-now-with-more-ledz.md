---
title: Thermal flashlight -- now with more LEDz!
tagnames: thermal-photography, thermal-flashlight, led, igloo, snowfest, snowfest2014
author: donblair
path: /notes/donblair/02-15-2014/thermal-flashlight-now-with-more-ledz.md
nid: 10042
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/002/923/original/large_i.png)

# Thermal flashlight -- now with more LEDz!

by [donblair](../profile/donblair) February 15, 2014 17:55

February 15, 2014 17:55 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-flashlight](../tag/thermal-flashlight), [led](../tag/led), [igloo](../tag/igloo), [snowfest](../tag/snowfest), [snowfest2014](../tag/snowfest2014)

----

###What I want to do

I'm trying to generate a circuit board design for Public Lab's [thermal flashlight](http://publiclab.org/wiki/thermal-camera) project.  

I'm using a fairly easy to find and inexpensive LED on the board -- but there was a concern that it might not be bright enough -- so I added three more! :)

If this isn't sufficiently bright, we might consider having a ring of LEDs around the entire board, perhaps?

I'm still learning Eagle, and this is my first attempt at adding what is called a 'ground plane' -- which makes routing easier, and generally helps to smooth out electronic noise in the system.

###My attempt and results

Here's the latest schematic:

[![thermal-flash-32u4-many-schem.png](https://i.publiclab.org/system/images/photos/000/002/925/medium/thermal-flash-32u4-many-schem.png)](https://i.publiclab.org/system/images/photos/000/002/925/original/thermal-flash-32u4-many-schem.png)


It's got:

- four RGB LEDs -- all controlled by the same pin, and wired in parallel (perhaps in another version we could control all the LEDs separately?)
- a 32u4 Arduino-compatible microcontroller
- a footprint for a screw terminal and resistor that would allow for the addition of a thermistor (for use in the thermal fishing bob use case)
- a buzzer (for a cool geiger-counter like temperature effect -- or play a wintry tune if the temp gets too low)
- a holder for a coin battery, and a connector for an external Lipo battery -- both of which can be recharged on-board if the device is plugged into USB power
- two analog input / output pins have been broken out
- and RX / TX is also available (in case you want to interact with the board via a Raspberry Pi)

###Questions and next steps

I'm going to look over the [design files on github](https://github.com/Pioneer-Valley-Open-Science/thermal-flashlight/tree/master/32u4-many), see if I've goofed anything up, and then aim to order a test batch.  If anyone out there knows Eagle and can review the design for any obvious flaws -- or has suggestions for improvement -- please do chime in!

###Why I'm interested

I want to see if I can make a prototype before [SNOWFEST](https://groups.google.com/forum/#!topic/plots-boston/OkyIFZcVQmk) so that we can see exactly how effective igloos are as insulation against the Vermont weather.
