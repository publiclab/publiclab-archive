---
title: "Capacitive Discharge Welder"\ntagnames: 'spectrometer, sensor, thermocouple, welder'
author: kinasmith
path: /notes/kinasmith/07-12-2016/capacitive-discharge-welder.md
nid: 13284
uid: 445906

---

![](https://publiclab.org/public/system/images/photos/000/017/008/original/IMG_20160709_184753.jpg)

# Capacitive Discharge Welder

by [kinasmith](../profile/kinasmith) | July 12, 2016 20:50

July 12, 2016 20:50 | Tags: [spectrometer](../tag/spectrometer), [sensor](../tag/sensor), [thermocouple](../tag/thermocouple), [welder](../tag/welder)

----

I've been working on this

##Mostly unrelated and relatively dangerous

project over the past week building a small capacitive discharge welder. 

###BackStory

Hi, my name is Kina and I do sensor and datalogger development for with the University of Alaska in Fairbanks. I've been working with folks on some tree physiology projects which I'll post about in another note later. I've just started working on designing some Sap Flux sensors to measure the rate of flow of liquid in a tree.  I'm going to be using the [Granier Method](http://publications.cirad.fr/une_notice.php?dk=522038), which requires two temperature sensor probes and a small heater coil to be embedded into the tree. The flow rate can then be calculated from the temperature difference between the heated probe and the ambient probe. This method uses tiny little thermocouples made from 0.005" dia wire inside of 18 gauge needles. ...so we need to make thermocouples. 

###What is a thermocouple?

There are a multitude of different temperature sensors out there in the world. Thermistors are ones that are commonly mentioned around here which vary resistance based on temperature. Thermocouples are different in that they consist of a junction between two different types of metal alloy which generate a small electrical potential as their temperature changes. Attached to a special amplifier, you can get accurate temperature readings across a very wide range. They can also be made from wires smaller than a human hair (which respond very quickly to temperature changes) and because they operate because of the [Seebeck Effect](https://en.wikipedia.org/wiki/Thermoelectric_effect#Seebeck_effect) they can be used to cool if charge is applied to them. Neat! 

####So why the welder?

Well, soldering thermocouple wires isn't great. Solder doesn't like to stick to them, it also adds a filler metal which affects the response of the junction and adds thermal mass to it, and if you're trying to measure temperatures above the melting point of the solder....yeah, that won't work. So welding them is the ideal....but thermocouple welders [cost thousands of dollars](http://www.omega.com/pptst/TL_WELD.html) and all they are essentially is a bank of capacitors, some big MOSFETS for discharging them and microcontroller to time the discharge.  

###The Welder

I did some quick googling. There isn't much for DIY thermocouple welders, but there sure is for capacitive discharge welders for welding tabs onto batteries. And they're the same thing. Hackaday has a [some nice projects](https://hackaday.com/2012/08/01/hundred-dollar-capacitive-discharge-welder/), but [instructables](http://www.instructables.com/id/Capacitive-Discharge-CD-Welder-for-battery-tabs/) has one project which is nicely documented. There is also [this one](http://zeva.com.au/Projects/SpotWelderV2/) where I got most of the beta for this project. 

The whole system is pretty simple and consists of 2 parts. 

####Energy Storage

The energy storage is a capacitor bank which is charged by a variable benchtop power supply. I used 24 47000uF 25V capacitors arranged into 8 groups of 3. The capacitor bank is discharged through 16 power MOSFETS (2 per group) into some aluminum buss bars I made. The MOSFETS are controlled by the control system.

#####The Control System

The control system is an arduino (I used a pro mini I had laying around), a button, a turny knobby thing, a small screen, and a MOSFET driver chip. The control system is powered from a 9 or 12v wall wart I had laying around (there is a theme here). A button triggers start of the discharge and the arduino controls the timing of it. Pretty simple.

###The Build

Total cost was around $300 for parts I didn't have laying around. The majority of that was the capacitors and the MOSFETS. 

I was able to make my own circuit boards because I own some fancy toys (like a small CNC mill), which made this project a little cheaper. 

[![IMG_20160629_143313.jpg](//i.publiclab.org/system/images/photos/000/016/999/large/IMG_20160629_143313.jpg)](//i.publiclab.org/system/images/photos/000/016/999/original/IMG_20160629_143313.jpg)

The Buss Bars were made from 0.5" square aluminum stock with drilled and tapped holes to match the circuit boards. 

[![IMG_20160707_114837.jpg](//i.publiclab.org/system/images/photos/000/017/000/large/IMG_20160707_114837.jpg)](//i.publiclab.org/system/images/photos/000/017/000/original/IMG_20160707_114837.jpg)

The MOSFETS in between the Busses nicely. Each board plugs into the next one passing along the Trigger signal and balancing the charge across the capacitor bank.
[![IMG_20160707_114844.jpg](//i.publiclab.org/system/images/photos/000/017/001/large/IMG_20160707_114844.jpg)](//i.publiclab.org/system/images/photos/000/017/001/original/IMG_20160707_114844.jpg)

These are the rest of the capacitor boards ready for assembly.

[![IMG_20160707_120501.jpg](//i.publiclab.org/system/images/photos/000/017/002/large/IMG_20160707_120501.jpg)](//i.publiclab.org/system/images/photos/000/017/002/original/IMG_20160707_120501.jpg)

This is assembled capacitor bank. The little board on the end was an array of diodes to protect against flyback voltage due to discharging huge current spikes across an inductive load. I may have designed it up wrong or something because it caused weird biasing issues with the MOSFETS and I ended up just removing it. I tested for voltage spikes using an oscilloscope and didn't see any issues, so it's fine. There was also a large resistor to drain the capacitor bank when everything is shut off to mitigate surprise electrocutions. 
[![IMG_20160707_171513.jpg](//i.publiclab.org/system/images/photos/000/017/003/large/IMG_20160707_171513.jpg)](//i.publiclab.org/system/images/photos/000/017/003/original/IMG_20160707_171513.jpg)

This is the final testing phase...Just don't touch the sparky parts and you'll be fine. The positive lead is stripped and taped to a round carbon rod and the negative lead is stripped and taped to a set of locking hemostats that, guess what, I had laying around!
[![IMG_20160709_184753.jpg](//i.publiclab.org/system/images/photos/000/017/004/large/IMG_20160709_184753.jpg)](//i.publiclab.org/system/images/photos/000/017/004/original/IMG_20160709_184753.jpg)

I ended up just dropping the whole thing into a cardboard box and hot gluing the control board to the top for now. I don't have time for fancy cases and I don't feel like this isn't that much of a fire hazard. 
[![IMG_20160712_112038.jpg](//i.publiclab.org/system/images/photos/000/017/005/large/IMG_20160712_112038.jpg)](//i.publiclab.org/system/images/photos/000/017/005/original/IMG_20160712_112038.jpg)




###Results

Are positive. It welds. And it actually welds pretty good thermocouples that actually work! I've been testing on 0.015" wire with great results. 
[![IMG_20160712_111924.jpg](//i.publiclab.org/system/images/photos/000/017/006/large/IMG_20160712_111924.jpg)](//i.publiclab.org/system/images/photos/000/017/006/original/IMG_20160712_111924.jpg)


[![IMG_20160712_111907.jpg](//i.publiclab.org/system/images/photos/000/017/007/large/IMG_20160712_111907.jpg)](//i.publiclab.org/system/images/photos/000/017/007/original/IMG_20160712_111907.jpg)


<iframe src="https://player.vimeo.com/video/174416231" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/174416231">VID_20160712_111719</a> from <a href="https://vimeo.com/user983495">Kina Smith</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


###Other Uses

With different electrodes this would be magic for welding battery tabs. It works great for vaporising screwdrivers (oops). [Chris Fastie](/profile/cfastie) also suggested it might be really useful for use with the #spectrometer for analysing metal contents by creating an electrical arc on the metal and capturing the spectra from it. 

###Documentation

The code and PCB files are on [Github](https://github.com/kinasmith/CD_Welder). If you want to try building this, please let me know. I would be happy to provide some better system schematics and technical help. 

