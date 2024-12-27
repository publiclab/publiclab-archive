---
title: "Dendrometers!"

tagnames: 'alaska, tree, trees, datalogger, sensor-networks, sensor, circuit-board'
author: kinasmith
path: /notes/kinasmith/09-09-2016/dendrometers.md
nid: 13435
uid: 445906

cids: 15357,15745,15746,17362,17378

---

![](https://publiclab.org/public/system/images/photos/000/017/991/original/DSC01267.jpg)

# Dendrometers!

by [kinasmith](../../../profile/kinasmith) | September 09, 2016 22:48

September 09, 2016 22:48 | Tags: [alaska](../tag/alaska), [tree](../tag/tree), [trees](../tag/trees), [datalogger](../tag/datalogger), [sensor-networks](../tag/sensor-networks), [sensor](../tag/sensor), [circuit-board](../tag/circuit-board)

----

###Background

I've been doing work for the University of Alaska Fairbanks for the past few months working on new sensor and datalogger systems for a tree physiology and ground water project. I'm developing a system of Dendrometers, which are sensors that measure tree diameter. I'm not as eloquent about what exactly this measurement tells us as the science scientists are, but it has to do with finding correlations in water content and water movement within the tree. As a tree (especially Birch) takes in water and moves it through its body, it expands. This can happen across a 12 hour period in small, but measureable amounts. The tree will also expand as it puts on biomass, obviously, but the day to day expansions and contractions are what we're trying to understand in combination with sap flux, water content, and meteorological data. We're trying to understand how Birch trees use water across the growing season and trying to predict how changes in snowpack will affect them. The Birch take it most of the water they use during the spring from the snowmelt. 

###Hardware

The sensor/data logger system is comprised of a band which wraps around the tree. One end of the band is fixed on the sensor body and the other end is spring loaded and attached to a linear potentiometer (A Softpot). The Softpot is read by a 16 bit Analog to Digital converter for a higher resolution measurement than an Arduino is capable of. Each sensor has a radio transceiver for communication to the datalogger and is powered from two AA batteries. There is one central data logger for the whole system which communicates with the sensors across the short range radio link (using the HopeRF RFM69 radios). The data is time stamped and saved onto an SD card, which has to be retrieved at the end of the season.

###Why Wireless?

I'm using wireless for multiple reasons. Wires, especially out in the field in Alaska, tend to be unreliable. A friend doing soundscapes work in Denali recently went out to recover their data after a month of recording only to find that a Marmot had chewed through their microphone cable a couple days after the installation. These little radio transceivers I'm using also cost less than the wire it would take to run 20-40 ft between each sensor and the datalogger. Setup time is significantly reduced and the whole system is far more scalable. Yes, there are significant design challenges around power regulation and communication, but it seems like a better option for the situations where there are relatively dense collections of sensors in close proximity. 

###Challenges

This project hasn't been without challenges, and I feel like it hasn't worked quite right more than it has worked. To begin with, I was very concerned with power consumption. These are battery powered sensors, they should consume as little power as possible. I was using a boost regulator which had a very low quiescent current, but didn't produce enough power for the radios to transmit when the battery voltage dropped below 2.5 volts. This produced all sorts of confusion, sometimes corrupted code due to boot loops and brown-outs. And it was exacerbated by the transmitter housings leaking and soaking the batteries and circuits in water. 

####Lessons learned:
- Water will wick through pressure fitted pvc joints which are turned up. Always glue them
- Electronics don't like to be soaked in water for weeks on end
- Test your power regulators at the full range of expected voltage BEFORE installing them at the field site
- Be sure to think of all the things you didn't think of
- It's better to have stable voltage references if you want accurate readings (!!!)
- While connectors are expensive and can fail, it's nice to be able to disconnect things when things break

### Moving Forward

I need to do some updates to these sensors. Update the power regulators so they can operate as the battery voltage declines, add a more reliable voltage reference for the ADC, and add a temperature sensor to the circuit board for doing temperature calibrations.

##Pictures!!
####Sensor PCB's. ATmega328p based, Arduino compatible. Left column shows RFM69HW Radios on bottom of PCB's.
[![IMG_20160523_145223.jpg](//i.publiclab.org/system/images/photos/000/017/994/large/IMG_20160523_145223.jpg)](//i.publiclab.org/system/images/photos/000/017/994/original/IMG_20160523_145223.jpg)

####One sheet of sensor bodies out of the CNC mill.
[![IMG_20160531_160629_1.jpg](//i.publiclab.org/system/images/photos/000/017/995/large/IMG_20160531_160629_1.jpg)](//i.publiclab.org/system/images/photos/000/017/995/original/IMG_20160531_160629_1.jpg)

####Close up of sensor body. Two part design with a channel for a slider which contact the softpot
[![DSC09569.jpg](//i.publiclab.org/system/images/photos/000/017/998/large/DSC09569.jpg)](//i.publiclab.org/system/images/photos/000/017/998/original/DSC09569.jpg)

####All sensors and transmitters of one system ready to be installed
[![IMG_20160604_163500.jpg](//i.publiclab.org/system/images/photos/000/017/996/large/IMG_20160604_163500.jpg)](//i.publiclab.org/system/images/photos/000/017/996/original/IMG_20160604_163500.jpg)

####Installed. The sensor body is basically bolted to a tree on a hinge so it's free to pivot. A wire wraps around the tree, fixed to the sensor body on one end, and attached to a spring loaded slider on the other. As the tree expands, it pulls the free end (attached to the spring) which moves a feeler along the softpot.
[![DSC01274.jpg](//i.publiclab.org/system/images/photos/000/017/992/large/DSC01274.jpg)](//i.publiclab.org/system/images/photos/000/017/992/original/DSC01274.jpg)

####Another install, from the back.
[![DSC01263.jpg](//i.publiclab.org/system/images/photos/000/017/993/large/DSC01263.jpg)](//i.publiclab.org/system/images/photos/000/017/993/original/DSC01263.jpg)

####These cute little boards are new power regulators retrofitted onto the existing boards by soldering them to half of the ISP header. 
[![IMG_20160823_172837_HDR.jpg](//i.publiclab.org/system/images/photos/000/017/997/large/IMG_20160823_172837_HDR.jpg)](//i.publiclab.org/system/images/photos/000/017/997/original/IMG_20160823_172837_HDR.jpg)

That's all for now. Please leave comments with questions.