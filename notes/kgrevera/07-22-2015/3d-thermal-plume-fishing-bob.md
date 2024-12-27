---
title: "3D Thermal Plume Fishing Bob"

tagnames: 'thermal-photography, thermal-fishing-bob, 3d-thermal-plume, multiple-thermistor'
author: kgrevera
path: /notes/kgrevera/07-22-2015/3d-thermal-plume-fishing-bob.md
nid: 12087
uid: 432001

cids: 12237

---

![](https://publiclab.org/public/system/images/photos/000/010/779/original/IMG_6401.pdf)

# 3D Thermal Plume Fishing Bob

by [kgrevera](../../../profile/kgrevera) | July 22, 2015 00:00

July 22, 2015 00:00 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-fishing-bob](../tag/thermal-fishing-bob), [3d-thermal-plume](../tag/3d-thermal-plume), [multiple-thermistor](../tag/multiple-thermistor)

----

##3D Thermal Plume Fishing Bob

###Background
[Sara Wylie](http://www.publiclab.org/profile/Sara) and I are collaborating on a project to further develop the [thermal fishing bob design](http://www.publiclab.org/wiki/thermal-camera). We explored a number of possibilities at our [workshop](http://www.publiclab.org/wiki/thermal-fishing-bob-workshop-northeastern). This is one of the ideas we brainstormed. Our goal for this project is to design a thermal fishing bob that can really show us the gradient of temperatures throughout the thermal plume. An obvious issue with the thermal fishing bob is that it only have one thermistor and one LED so we only get a 2D image of a 3D phenomenon. So, we are working on a design that will allow us to see more of the thermal plume.

###Research Questions
* What is the best way to wire the series of LEDs?
* What is the best way to keep the LEDs from getting wet?
* How do I keep the LEDs visible but still protect them from the water?
* How do I waterproof the thermistors?
* How do I keep the rig afloat?

###Methods
This idea piggybacks of of [Laura's multiple input fishing bob concept](http://www.publiclab.org/notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs), but attempts to solve he problem of not enough inputs by using an Arduino Mega instead of an Uno and of course changes around the standard thermal fishing bob housing.
The first concept I came up with was a series of thermal fishing bobs attached to a long stick of bamboo with their thermistors hanging down into the water. Obviously this was a rough design, but [Sara Wylie](http://www.publiclab.org/profile/Sara) had an idea to improve on it. Her idea was to house the LED's inside a clear plastic pipe which would be above the water and the thermistors below. This pipe would be se upright in a towable rig, like the [pool floatie rig](http://www.publiclab.org/notes/kgrevera/05-04-2015/first-prototype-of-kayak-towable-thermal-fishing-bob-rig) so that it could be pulled behind a kayak.
A second idea was to build a chain of 3 color LED's by soldering them on to long wires. This idea was based on a concept I saw on [Instructables](http://www.instructables.com/id/How-to-make-a-string-of-LEDs-in-parallel-for-ardu/).

###Materials
* Arduino Mega
* Thermal Fishing Bob
* pool floatie
* clear pipe
* 3 LED's
* 3 thermistors of varying lengths

###Concepts


[![Screen_Shot_2015-07-21_at_8.00.04_PM.png](https://i.publiclab.org/system/images/photos/000/010/780/medium/Screen_Shot_2015-07-21_at_8.00.04_PM.png)](https://i.publiclab.org/system/images/photos/000/010/780/original/Screen_Shot_2015-07-21_at_8.00.04_PM.png)
#####Rough first concept

[![Screen_Shot_2015-07-21_at_8.00.04_PM.png](https://i.publiclab.org/system/images/photos/000/010/781/medium/Screen_Shot_2015-07-21_at_8.00.04_PM.png)](https://i.publiclab.org/system/images/photos/000/010/781/original/Screen_Shot_2015-07-21_at_8.00.04_PM.png)
#####Rough second concept of LED chain 

[![Screen_Shot_2015-07-21_at_8.00.17_PM.png](https://i.publiclab.org/system/images/photos/000/010/782/medium/Screen_Shot_2015-07-21_at_8.00.17_PM.png)](https://i.publiclab.org/system/images/photos/000/010/782/original/Screen_Shot_2015-07-21_at_8.00.17_PM.png)
#####[Sara Wylie's](http://www.publiclab.org/profile/Sara) edit

[![Screen_Shot_2015-07-21_at_8.00.29_PM.png](https://i.publiclab.org/system/images/photos/000/010/783/medium/Screen_Shot_2015-07-21_at_8.00.29_PM.png)](https://i.publiclab.org/system/images/photos/000/010/783/original/Screen_Shot_2015-07-21_at_8.00.29_PM.png)
#####[Sara Wylie's](http://www.publiclab.org/profile/Sara) edit with thermal gradient illustrated
