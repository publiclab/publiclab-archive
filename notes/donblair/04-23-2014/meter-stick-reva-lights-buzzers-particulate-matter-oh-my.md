---
title: "Meter Stick REVA: Lights, Buzzers, Particulate Matter ... oh, my!"

tagnames: 'particulate-sensing, barnstar:basic'
author: donblair
path: /notes/donblair/04-23-2014/meter-stick-reva-lights-buzzers-particulate-matter-oh-my.md
nid: 10349
uid: 43651

cids: 8869,8870,8871,8872,8873,8874,8875,8877,8878,8879,8880

---

![](https://publiclab.org/public/system/images/photos/000/003/836/original/meter-stick-reva-osh-front.png)

# Meter Stick REVA: Lights, Buzzers, Particulate Matter ... oh, my!

by [donblair](../../../profile/donblair) | April 23, 2014 23:27

April 23, 2014 23:27 | Tags: [particulate-sensing](../tag/particulate-sensing), [barnstar:basic](../tag/barnstar:basic)

----

###What I want to do

There'd been a discussion recently (see the comment thread [here](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino)) about interfacing with inexpensive particulate matter sensors.  The particular sensors under discussion -- the Sinyei and Syhitech -- operate at 5V; and the most basic and inexpensive way to get data from such a device, suggested by Jeff, might be: connect the particle sensor to a laptop via a microcontroller, and get data off USB.

Jeff pointed to the wonderful DigiSpark project as a possibility.  This inexpensive, Arduino IDE-compatible device looks like it might handle the job -- it has several digital pins available, and operates at the required 5V.

However, some initial review of the situation leads me to think that there some drawbacks to the DigiSpark for this sort of application:

- the DigiSpark emulates a USB connection, I believe -- so that the standard Arduino IDE serial connection isn't available.  
- what serial connection may be possible is likely not to be very stable in the long term (I may be wrong about this; but this is [apparently the experience of folks who've been doing some really neat virtual USB work](https://rayshobby.net/?p=7363), and also seems to be the import of some [post on the DigiSpark forums](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino)).

These issues with the serial port aren't a serious problem if you're simply looking to program the device to e.g. blink an LED, or make a motor turn -- perfect applications for the super-cheap DigiSpark; but if you want to have a stable data transfer to your laptop, or debug measurements coming from an external device, these issues might make for quite a headache.

This made me think: what might be a nice, minimalist Arduino-compatible design that would allow for connecting to one of these particulate matter sensors?  In addition to finding a more stable serial connection (so that we can get data into a laptop), I was also interested to see how we could make the readings from the device 'legible' in a minimalist way -- using light and sound to indicate particle levels. 
###My attempt and results

Here's my first shot at a design:


[![meter-stick-reva-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/837/medium/meter-stick-reva-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/837/original/meter-stick-reva-osh-front.png)


[![meter-stick-reva-osh-back.png](https://i.publiclab.org/system/images/photos/000/003/838/medium/meter-stick-reva-osh-back.png)](https://i.publiclab.org/system/images/photos/000/003/838/original/meter-stick-reva-osh-back.png)

Schematics and board design files, in Eagle, are available in the github repo [here](https://github.com/Pioneer-Valley-Open-Science/meter-stick). 

- It is an Atmega 32u4 chip (the same as the Leonardo and the Flora), running at 5V and 8 Mhz.
- It has 5, individually-addressed RGB LEDs, to indicate particulate levels, either through color, through lighting them up in sequence (levels "1" through "5"), flashing, or what-have-you.
- It has a piezo buzzer (optional geiger counter effect, that registers individual particle counts?)
- In order to save space and cost, I've arranged the board so that one can use some lengths of standard hook-up wire, soldered to "5V / GND / D6 / D8", solder one end on the pinouts on the side of the board, and then run the individual wires under the board and up through some holes drilled on the opposite side of the board -- allowing for mechanical stability without needing to use (relatively expensive, and space-hogging) screw terminals.  
- I've also arranged the pinout so that it should be straightforward to add a thermistor.  I'm not sure yet if this is useful for particulate measurements, but as there's a heating element in the S----- sensor, I figure it can't hurt to stick a $3 thermistor in there, in case it'd be a good idea to calibrate (and perhaps control for, by powering the device on or off -- which would required an additional mosfet, which I can add to REVB) temperature. 
- It uses a "PCB USB form factor", in which metallic pads on the printed circuit board itself can serve as a USB connector, in order to save slightly on cost.  My experience is that this isn't always a very stable connection to a USB port, though, so I've also put a footprint for a standard Micro USB connector. 

###Questions and next steps

- Maybe I should switch up to 16 Mhz? 
- Should I add a mosfet in here anyway, on a digital line, just in case we want to control the temperature element on e.g. the Shinyei sensor?
- I need to tally up the cost of putting this device together.  The 32u4 has recently come down in price, comparable to a 328P (the UNO chip); I tried to use the minimal set of components to make the device operate, while still being safe in case of e.g. plugging it in upside-down to a laptop USB port (I'm keeping diodes and a fuse on the device).  Still -- could it be a bit more minimalist?  

###Why I'm interested

It'd be nice to have a cheap little device that can measure a few analog and digital inputs, take that in via a serial connection, and give some nice visual and audio indications of what it's measuring.  Thus the "meter stick" appellation. 