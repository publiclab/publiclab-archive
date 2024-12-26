---
title: "Preliminary PCBs for Particulates"\ntagnames: 'arduino, air-quality, dustduino, dust, particulate, pm, digispark, shenyei, shinyei, activity:circuit-design, circuit-design'
author: donblair
path: /notes/donblair/05-03-2014/preliminary-pcbs-for-particulates.md
nid: 10405
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/004/013/original/prelimPM)

# Preliminary PCBs for Particulates

by [donblair](../profile/donblair) | May 03, 2014 11:37

May 03, 2014 11:37 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [dustduino](../tag/dustduino), [dust](../tag/dust), [particulate](../tag/particulate), [pm](../tag/pm), [digispark](../tag/digispark), [shenyei](../tag/shenyei), [shinyei](../tag/shinyei), [activity:circuit-design](../tag/activity:circuit-design), [circuit-design](../tag/circuit-design)

----

[Note -- a follow-up discussion around this technology actually works -- with some great commentary from the Public Lab community on ways of perhaps improving upon it -- is [here](http://publiclab.org/notes/donblair/05-03-2014/how-do-we-measure-particulate-stuff-in-the-air)]

###What I want to do

Make a simple, cheap interface between an inexpensive particulate matter sensors described [here](http://publiclab.org/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor) and [here](http://publiclab.org/notes/chrisbartley/04-15-2014/speck-particle-monitor) -- and a laptop, PC, or Raspberry Pi.  This is based on Jeff Warren's suggestion in a [comment thread](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino) that we might using the DigiSpark to make such a connection. Such a design would not be as nicely independent as the [DustDuino](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino) or a [Speck](http://publiclab.org/notes/chrisbartley/04-15-2014/speck-particle-monitor) designs; but if one had a laptop (or Raspberry Pi) available to make the measurement, it might be a very inexpensive solution.

The idea is the device measures the signals coming out of the particulate matter sensor, and the laptop / Raspberry Pi can measure out the particle levels via the USB port:


[![miniMeter.png](https://i.publiclab.org/system/images/photos/000/004/001/medium/miniMeter.png)](https://i.publiclab.org/system/images/photos/000/004/001/original/miniMeter.png)


A breakdown of the sensor innards of the type of device under consideration is depicted here (image is from Willie's great [research note](http://publiclab.org/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor)):

[![ShinyeiPPD42NS_Insides_Labeled_600.jpg](https://i.publiclab.org/system/images/photos/000/003/989/medium/ShinyeiPPD42NS_Insides_Labeled_600.jpg)](https://i.publiclab.org/system/images/photos/000/003/989/original/ShinyeiPPD42NS_Insides_Labeled_600.jpg)

In the same [comment thread](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino) referred to above, I wrote some words about how I think the sensor works.  From what I can gather, the sensor readout provides a 'high' or 'low' voltage depending on whether a particle floating in the air chamber reflects some of an internal IR beam's light into a photodiode inside the device.  Tracking the percentage of 'high' vs. 'low' signal, and using additional information (assumptions about the particle sizes necessary to reflect a certain amount of IR light into the photodiode, maybe?) the particulate matter concentration in the air can (apparently) be assessed.  
 
###My attempt and results

Here's a [design](https://github.com/p-v-o-s/mini-meter/tree/master/REVD) for a simple microcontroller interface between one of these simple, cheap particulate matter sensors, and a laptop / RPi / PC.  I tried to make the board size as small as possible:

[![mini-meter-revd-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/990/medium/mini-meter-revd-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/990/original/mini-meter-revd-osh-front.png)

... the optimal arrangement of pins and components to make the PCB as tiny as possible ending up resulting in a 'P' shape -- where 'P' stands for 'Particulate matter' or 'Public', say!

I chose the 32u4 processor over the DigiSpark's ATTiny, because:

- The 32u4 allows for a regular serial interface, so that we can easily suck the values into a laptop or Raspberry Pi
- The 32u4 has more memory, so that we can add additional functionality down the line
- The 32u4 has on-board USB, so that we can program the mini-meter board easily (with the appropriate bootloader installed, it should show up as a 'Leonardo' in the Arduino IDE).

[I've also added some fuses and diodes -- inspired by the Adafruit Flora design, which uses the same processor -- so that powering the board improperly doesn't 'result in tears', as Lady Ada writes in her Flora description.]

The board itself is designed with a 'PCB USB plug' (Jeff's nice suggestion) -- the board shape and traces on the board allow for insertion into a USB port directly.  This means, I think, that we need to ask for printed PCBs of a certain thickness -- 1.6 mm, I think.  I've also placed a microUSB header on the bottom, in case folks would prefer to attach via a cable.

Other than a 'power' LED on the board, there are no other frills.

The device has D6 and D8 broken out for the two lines on the PM sensor; we also have A0, A1, and SDA + SCL, for additional measurements (e.g., I'm imagining we might want to measure temperature, or air velocity).

###Questions and next steps

- Could such a device be used easily with a Raspberry Pi via USB?  I believe so ... will check.
