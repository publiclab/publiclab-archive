---
title: "Thermal Fishing Bob: faster waterproofed temperature sensors"

tagnames: 'water-quality, thermal-fishing-bob, thermal, thermal-pollution, heat, replication:689'
author: lperovich
path: /notes/lperovich/07-07-2015/thermal-fishing-bob-faster-waterproofed-temperature-sensors.md
nid: 12037
uid: 443410
cids: 12115
---

![](https://publiclab.org/public/system/images/photos/000/010/560/original/IMAG3048.jpg)

# Thermal Fishing Bob: faster waterproofed temperature sensors

by [lperovich](/profile/lperovich) | July 07, 2015 22:20

July 07, 2015 22:20 | Tags: [water-quality](/tag/water-quality), [thermal-fishing-bob](/tag/thermal-fishing-bob), [thermal](/tag/thermal), [thermal-pollution](/tag/thermal-pollution), [heat](/tag/heat), [replication:689](/tag/replication:689)

----

**Goal:** 
Test alternative (smaller!) temperature sensors for the thermal fishing bob to achieve faster temperature measurements.

**Choosing sensors:**
The thermistors currently used in the thermal fishing bob are quite slow to respond--roughly minutes--and some of our desired applications require faster response times.  

Don Blair and I selected 8 temperature sensors from digikey that might fit the bill:

--Microchip Technology TC74A5-3.3VCTTR

--Texas Instruments LM95071CIMFX/NOPB

--Texas Instruments TMP103AYFFT

--Texas Instruments TMP112AIDRLT

--TE Connectivity Measurement Specialties G-NIMO-003

--Silicon Labs SI7050-A20-IM

--Atmel AT30TS750A-SS8M-T

--Maxim Integrated DS18B20-PAR+T&R

Sensors were: (1) mostly digital (2) small, but not unbearably so (re: soldering) (3) reasonably cheap/simple (4) fairly fast according to the data sheet (5) I2C compatible

Here I'm testing the Atmel AT30TS750A for speed under various waterproofing methods.

A second look at the ordered sensors shows that some probably aren't worth the hassle (painfully small soldering pads, not great accuracy). Texas Instruments' TMP112AIDRLT and LM95071CIMFX/NOPB might be worth a try later if this one doesn't pan out.

**Board design:**
The boards are designed to connect to the Rifle.  I aimed to make them as small as possible to decrease the thermal mass.  

I designed the boards in Eagle and milled them using the Roland Modela at the Media Lab.


[![IMAG3048.jpg](https://i.publiclab.org/system/images/photos/000/010/554/medium/IMAG3048.jpg)](https://i.publiclab.org/system/images/photos/000/010/554/original/IMAG3048.jpg)


**Code:**
I modified some Arduino code I [found online](https://rheingoldheavy.com/at30ts750a-tutorial-02-retrieving-temperature-value/) for the AT30TS750A.  There were a few different versions that worked.


<a href="https://i.publiclab.org/system/images/photos/000/010/558/original/AT30TS750A.zip"><i class="icon icon-file"></i> AT30TS750A.zip</a>

<a href="https://i.publiclab.org/system/images/photos/000/010/559/original/AT30TS750AWire.zip"><i class="icon icon-file"></i> AT30TS750AWire.zip</a>


**Waterproofing:**
Based on suggestions from Brian Mayton I tried waterproofing the sensor in three ways: (a) adhesive heat shrink tubing (b) thermal adhesive: Arctic Alumina Thermal Adhesive (c) epoxy: MG Chemicals Thermally Conductive Encapsulating and Potting Compound.  The adhesive and epoxy were applied in the thinnest possible layer and selected based on their thermal conductivity.  The epoxy is pretty nasty stuffy at least on the application side.  The thermal adhesive may be questionable as well (and maybe the heat shrink tubing...?).


[![IMAG3105.jpg](https://i.publiclab.org/system/images/photos/000/010/555/medium/IMAG3105.jpg)](https://i.publiclab.org/system/images/photos/000/010/555/original/IMAG3105.jpg)


**Qualitative testing:**
All the sensors worked after waterproofing.  The heat shrink tubing had to be set using a low temperature heat gun so the parts and solder would stay put (thanks for the tip Brian!).  One of the initial epoxies did not work as it required drying at a high temperature, but a second type did work.  The thermal adhesive worked despite the fact that the instructions state it should not be used directly on traces (it has aluminum so could create shorts).

Waterproofing was also successful--all sensors held up through multiple trips in and out of the water.  The adhesive heat shrink sensor eventually died--probably a small leak that eventually led to trouble.  Fortunately, it was also noticeably slower to respond to change in temperature than the other two waterproofing methods, so no big loss.  Onward with the epoxy and thermal adhesive options!

All waterproofed sensors were clearly slower to respond to touch than non-waterproofed sensors.

**Coarse quantitative testing:**
First, I tested temperature change over a large temperature range--going from hot water to cold water and vice versa (~35oC range).  I had a cup of hot water and a cup of cold water of known temperatures and moved the sensor between them.  I also did a few air to water tests for reference.  Rough results:

--epoxy: 0.5 sec/degree C

--thermal adhesive: 0.75 sec/degree C

--heat shrink: 1.25 sec/degree C


<a href="https://i.publiclab.org/system/images/photos/000/010/557/original/tempSensorTestingCoarse.csv"><i class="icon icon-file"></i> tempSensorTestingCoarse.csv</a>



**Finer quantitative testing:**
In reality the sensor will experience temperature changes over a smaller range--about a few degrees.  I put together a quick, somewhat more structured system to try to get better accuracy with this testing (i.e. instead of just me and a stopwatch).  I put together some code that takes the baseline temperature, counts down to a temperature change time, then keeps track of time and temperature until it stabilizes.  At the "temperature change time", a human (me) has to dump new water into the existing water system to change its temperature by a few degrees (ideally).  So there's some human error still in the timing and the amounts--factors that did play a roll in some tests.  Plus the water itself has to mix to become a uniform temperature--which I helped through stirring.  But, overall this set-up seems similar to what we're likely to see in the river.

Overall, the epoxy and the thermal adhesive seemed fairly comparable.  The fastest response time was about 0.5 sec/oC and the median response times were around 1.5 sec/oC.  Heating up and cooling down had similar response times.  The amount of change in temperature influences the time it takes for the temperature to stabilize, but probably nonlinearly.  That is, the sec/oC speeds that we got over a large range are a little optimistic for our case where we expect a change of a couple of degrees.


[![changeAmountChangeTime.jpg](https://i.publiclab.org/system/images/photos/000/010/556/medium/changeAmountChangeTime.jpg)](https://i.publiclab.org/system/images/photos/000/010/556/original/changeAmountChangeTime.jpg)



**Next steps:**
This might be good enough--it's at least a step in the right direction!  

Time for some field testing on the dock.  Hopefully with the Riffle!

Maybe look into the other two promising sensors to see if we can get responses under a second.

Also, better take another look at the MSDS--some epoxy can be pretty toxic to aquatic life. 