---
title: Thermal Fishing Bob: multiple inputs/outputs 
tagnames: thermal-fishing-bob, activity:thermal-fishing-bob, first-time-poster
author: lperovich
path: /notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs.md
nid: 11964
uid: 443410

---

# Thermal Fishing Bob: multiple inputs/outputs 

by [lperovich](../profile/lperovich) June 10, 2015 15:28

June 10, 2015 15:28 | Tags: [thermal-fishing-bob](../tag/thermal-fishing-bob), [activity:thermal-fishing-bob](../tag/activity:thermal-fishing-bob), [first-time-poster](../tag/first-time-poster)

I made another iteration of the thermal fishing bob code and electronics.  This builds from the original version found here: [http://publiclab.org/wiki/thermal-fishing-bob-barnraising](http://publiclab.org/wiki/thermal-fishing-bob-barnraising)

Eventually I'm hoping to put together a 3D representation of the water temperature by measuring at different depths. This takes some first steps in that direction by adding multiple thermistors and multiple tricolor LEDs to the original thermal fishing bob. 

Here's the electronics set-up:


[![multiInputThermalFishing_bb.jpg](https://i.publiclab.org/system/images/photos/000/010/266/medium/multiInputThermalFishing_bb.jpg)](https://i.publiclab.org/system/images/photos/000/010/266/original/multiInputThermalFishing_bb.jpg)

(This is a rough match to the resisters I actually used--I was scavenging around the electronics bench so ended up with a mixed bag.)

I modified the code to read off multiple thermistors and write to multiple LEDs.  In the process I reorganized the original code into functions split between multiple files.  I find it easier to stay organized this way.  The code seems to still work, so hopefully nothing got lost in the shuffle!  Here's the code:


<a href="https://i.publiclab.org/system/images/photos/000/010/269/original/ThermalFishingLaura.zip"><i class="icon icon-file"></i> ThermalFishingLaura.zip</a>


Outstanding issues:

(1) The red LED is very dim.  This is mentioned in the original code, but I'm not sure it's ever addressed? 

(2) There are only 6 PWM pins built into the Arduino Uno, so it can't easily output to three tricolor LEDs (each LED requires 3 PWM pins).  You can see this in the electronics diagram--the third LED isn't connected to anything.  This could be solved in software by using the softPWM library.

(3) I'm not sure the calibration of the thermistors is correct.  Also, the thermistors respond to temperature change very slowly.  I think we may need to move to something with a faster response time in the future.

Next on my to-do list is creating a custom board, data logging, and testing out other temperature sensors!
