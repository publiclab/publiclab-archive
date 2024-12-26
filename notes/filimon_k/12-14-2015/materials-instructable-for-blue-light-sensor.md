---
title: "Materials/ Instructable for Blue Light Sensor"\ntagnames: 'sensors, light, blue, wearables, photocell'
author: filimon_k
path: /notes/filimon_k/12-14-2015/materials-instructable-for-blue-light-sensor.md
nid: 12514
uid: 460113

---

![](https://publiclab.org/public/system/images/photos/000/013/307/original/bluelightspec.jpg)

# Materials/ Instructable for Blue Light Sensor

by [filimon_k](../profile/filimon_k) | December 14, 2015 04:17

December 14, 2015 04:17 | Tags: [sensors](../tag/sensors), [light](../tag/light), [blue](../tag/blue), [wearables](../tag/wearables), [photocell](../tag/photocell)

----

###What I want to do
Measure the amount of blue light we encounter on a daily basis
      -How many hours per day?
      -At what intensities, or wavelengths? 
      -How do smartphones add to the exposure to these wavelengths?

Create a wearable device that filters/detects blue light using Arduinos

The specific spectrum we are interested in is 450-470nm
[![bluelightspec.jpg](//i.publiclab.org/system/images/photos/000/013/306/medium/bluelightspec.jpg)](//i.publiclab.org/system/images/photos/000/013/306/original/bluelightspec.jpg)

###My attempt and results
For our device we used an Arduino Uno with a small photocell and a 10 ohm resistor.  The photocell measures in lux, with measurements from 0-1023. We were able to find a tutorial for wiring the board, and code for the photocell here: http://rookieelectronics.com/light-sensor-using-arduino/

[![scheme.png](//i.publiclab.org/system/images/photos/000/013/311/medium/scheme.png)](//i.publiclab.org/system/images/photos/000/013/311/original/scheme.png)


Filters:

One of our biggest problems was finding the correct filter. Anything we did find for the 450-470nm was very expensive. Otherwise, blue light filters in general were difficult to find online. 

Our very first thought for a filter was to simply color something blue, and use it to cover the sensor. Initially we tried this with clear plastic cups and Sharpies. We quickly realized that this was not a valid option as they still let in a lot of light, and we had no way of determining if light was being filtered. 

[![cups.jpg](//i.publiclab.org/system/images/photos/000/013/313/medium/cups.jpg)](//i.publiclab.org/system/images/photos/000/013/313/original/cups.jpg)

Fortunately, we had access to quality light sensors, at very specific wavelengths of 390nm and 430nm. Although these were below our spectrum, they could still be used to test our measurements. 

[![filters.jpg](//i.publiclab.org/system/images/photos/000/013/315/medium/filters.jpg)](//i.publiclab.org/system/images/photos/000/013/315/original/filters.jpg)



###Questions and next steps

###Why I'm interested