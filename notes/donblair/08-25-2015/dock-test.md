---
title: 'Dock Test!'
tagnames: thermal-fishing-bob, riffle, open-water, riffle-examples
author: donblair
path: /notes/donblair/08-25-2015/dock-test.md
nid: 12169
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/011/274/original/thermal-tape.JPG)

# Dock Test!

by [donblair](../profile/donblair) August 25, 2015 21:16

August 25, 2015 21:16 | Tags: [thermal-fishing-bob](../tag/thermal-fishing-bob), [riffle](../tag/riffle), [open-water](../tag/open-water), [riffle-examples](../tag/riffle-examples)

----

Today Laura Perovich led Joe Goldbeck and me on an expedition to the Charles River to deploy a temperature sensor prototype.  The motivation: to test some custom temperature sensor boards that Laura had made with the intention of acquiring temperature readings that were more responsive to rapid temperature changes than a typical thermistor. We don't really know what 'fast enough' is going to be for e.g. the thermal fishing bob; but getting to know the options / range of response times for some common temperature sensors seems like a very useful exercise, in any case. The 10K thermistor we've been using on the Riffle and on the thermal fishing bob seems to be on the 'slow' side of response time: if I recall, it took about 20 seconds to register the difference between room temperature and freezing.  Several devices out there -- integrated circuits for measuring temperature, thermocouples -- have response times closer to 1 second for such a temperature difference, and some of them are potentially much easire to use and keep calibrated in the field. Additionally, digital sensors can make it easy to construct a 'chain' of sensors on a 'bus' wire, to get temperature measurements at various depths / locations simulataneously with fewer wires.  

# Laura's sensor development

Laura's previous research note on making a custom temperature sensor board is [here](http://publiclab.org/notes/lperovich/07-07-2015/thermal-fishing-bob-faster-waterproofed-temperature-sensors). 

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/tempSensor.jpg" width=400>

The device she settled on was the Atmel AT30TS750A.  She made a custom footprint for the device in Eagle, and made her own PCB (see above note); and used various approaches to trying to waterproof the device without putting so much material on it that the thermal response time was increased much ...

So then, a test: putting the sensors into the Charles River.  We all walked out the MIT boathouse dock.  We passed by a nice man working there who didn't seem at all concerned that we were carrying a tangle of wires and circuit boards.

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/lauraBox.jpg" width=400>

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/sensorDock.png" width=400>

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/wiring.png" width=400>

The final device deployed was:

- An Arduino Pro Mini (same processor as the UNO (thermal fishing bob) and as the Riffle)
- An Adafruit SD card breakout board
- Laura's AT30TS750A breakout boards: three of them in a chain

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/finalDevice.jpg" width=400>

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/inBag.jpg" width=400>

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/thermal_001/assets/offDock.jpg" width=400>

# Pro tip

- We spent an entire day debugging the circuit before realizing that we hadn't put 10K 'pullup' resistors on the I2C bus lines (the temp sensor is an I2C device).  Got lots of odd readings until we figured out the problem -- then it worked like a charm.  (E.g. the Riffle breaks out the I2C bus for its add-on sensor boards, and include 10K pull-ups on the main board, so they're not necessary on the add-on boards ... but not sure what happens if you have *extra* on the same bus ...)



# Useful additional info

- A [comparison](http://www.ti.com/lit/an/snia009/snia009.pdf) of thermistors and integrated chip sensors; where each is useful.  

- [Thermocouple response times.](http://www.omega.com/temperature/Z/ThermocoupleResponseTime.html)

- [Thermistor performance](http://www.teamwavelength.com/info/thermistors.php)

- Edward Mallon's great writeup of [calibrating DS18B20 sensors](https://edwardmallon.wordpress.com/2015/03/30/using-ds18b20-one-wire-sensors-to-make-a-diy-thermistor-string-pt-2-calibration/)


