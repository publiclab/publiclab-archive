---
title: "Multiple Thermistor Fishing Bob Field Test"

tagnames: 'thermal-photography, cape-cod, water-quality, thermal-fishing-bob, thermal, thermal-pollution, heat, multiple-input-thermal-fishing-bob, replication:689, upgrade:thermal-fishing-bob'
author: kgrevera
path: /notes/kgrevera/07-07-2015/multiple-thermistor-fishing-bob-field-test.md
nid: 12036
uid: 432001

cids: 12116

---

![](https://publiclab.org/public/system/images/photos/000/010/552/original/Screen_Shot_2015-07-06_at_11.46.21_AM.png)

# Multiple Thermistor Fishing Bob Field Test

by [kgrevera](../../../profile/kgrevera) | July 07, 2015 20:05

July 07, 2015 20:05 | Tags: [thermal-photography](../tag/thermal-photography), [cape-cod](../tag/cape-cod), [water-quality](../tag/water-quality), [thermal-fishing-bob](../tag/thermal-fishing-bob), [thermal](../tag/thermal), [thermal-pollution](../tag/thermal-pollution), [heat](../tag/heat), [multiple-input-thermal-fishing-bob](../tag/multiple-input-thermal-fishing-bob), [replication:689](../tag/replication:689), [upgrade:thermal-fishing-bob](../tag/upgrade:thermal-fishing-bob)

----

##Multiple Thermistor Fishing Bob Field Test

###Background
Becca and I tested out Laura Perovich's [multiple thermistor fishing bob prototype](http://publiclab.org/notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs) in the salt marsh in Cape Cod, MA. This was part of a larger project with [Sara Wylie](http://www.publiclab.org/profile/Sara) to improve upon the [thermal fishing bob design](http://www.publiclab.org/wiki/thermal-camera).

###Research Questions
* How do I house the [multiple thermistor bob](http://publiclab.org/notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs)?
* How do I work with the multiple thermistor bob?

###Procedure
Laura Petrovich designed the thermal fishing bob. I followed her diagram and built it. There are two errors to note though in the diagram. The 3.5V port should be wired to power, not ground as it is in the diagram and the ground port should be wired to ground, not power. In addition, only two LED's are wired into the circuit. The third there are not enough inputs for so this design flaw will have to be further worked out. 

[![MultipleThermistorCorrected.png](https://i.publiclab.org/system/images/photos/000/010/596/medium/MultipleThermistorCorrected.png)](https://i.publiclab.org/system/images/photos/000/010/596/original/MultipleThermistorCorrected.png)
Current Prototype


<a href="https://i.publiclab.org/system/images/photos/000/010/598/original/Multiple_Thermistor_Sketch.zip"><i class="icon icon-file"></i> Multiple_Thermistor_Sketch.zip</a>



Once the multiple thermistor bob was built and programmed, we placed it inside a cranberry juice bottle with the top cut off as it was too long for the usual lemonade contain housing. Once inside the container, we put the lid back on and sealed the opening with water proof tape. The thermistors were left trailing out of the neck of the bottle. A hole was poked in the bottle cap and the cap placed back on with the thermistors sticking out and the hole was sealed with waterproof tape. We still didn't feel comfortable submerging the bottle, so we simple dipped the ends of its thermistors into the water and took a long exposure photo.

###Results
The multiple thermistor bob still needs a lot of work. It is functional, but we need to come up with better housing. Because of the way the arduino and breadboard are wired end to end, the rig needs to be long, so a new housing design is needed. We improvised with a clear juice bottle, but this is certainly not a long-term solution. It did not feel sufficiently waterproofed. In addition, I as pointed out, in the original diagram, two of the wires are in the wrong place. 3.5V needs to connect to the breadboard's power line, not ground, and ground needs to connect to the breadboard's ground line, not power. One of the LED's is also not wired into the circuit. We experimented with wiring it, but could only get it to light up, not actually change in response to temperature, so we wound up just leaving it with the functional wired two.  It's not perfect, but it's definitely a good start.

###Future Directions
The bob needs to be housed in a more secure manner to protect the arduino inside. In addition, the Arduino Uno does not have enough inputs to wire all three LED's. So, other options will need to be explored. 
I have already looked into using a larger arduino in order to fix the issue of there not being enough inputs. I made a new diagram using an Arduino Mega instead of an Arduino Uno. This Arduino is much larger and has more inputs, allowing for the addition of a third LED, or even more.

[![MultipleThermistorRevisionArduinoMega.png](https://i.publiclab.org/system/images/photos/000/010/597/medium/MultipleThermistorRevisionArduinoMega.png)](https://i.publiclab.org/system/images/photos/000/010/597/original/MultipleThermistorRevisionArduinoMega.png)

###Pictures

[![Screen_Shot_2015-07-06_at_11.44.14_AM.png](https://i.publiclab.org/system/images/photos/000/010/538/medium/Screen_Shot_2015-07-06_at_11.44.14_AM.png)]
Multiple Thermistor Circuit

[![Screen_Shot_2015-07-06_at_11.45.13_AM.png](https://i.publiclab.org/system/images/photos/000/010/539/medium/Screen_Shot_2015-07-06_at_11.45.13_AM.png)](https://i.publiclab.org/system/images/photos/000/010/539/original/Screen_Shot_2015-07-06_at_11.45.13_AM.png)
Multiple Thermistor Circuit with all three LED's lit

[![Screen_Shot_2015-07-06_at_11.45.29_AM.png](https://i.publiclab.org/system/images/photos/000/010/540/medium/Screen_Shot_2015-07-06_at_11.45.29_AM.png)](https://i.publiclab.org/system/images/photos/000/010/540/original/Screen_Shot_2015-07-06_at_11.45.29_AM.png)
Kaitlyn Testing Multiple Thermistor Bob

[![Screen_Shot_2015-07-06_at_11.46.21_AM.png](https://i.publiclab.org/system/images/photos/000/010/541/medium/Screen_Shot_2015-07-06_at_11.46.21_AM.png)](https://i.publiclab.org/system/images/photos/000/010/541/original/Screen_Shot_2015-07-06_at_11.46.21_AM.png)
Close up of Multiple Thermistor Test

[![Screen_Shot_2015-07-06_at_11.47.39_AM.png](https://i.publiclab.org/system/images/photos/000/010/542/medium/Screen_Shot_2015-07-06_at_11.47.39_AM.png)](https://i.publiclab.org/system/images/photos/000/010/542/original/Screen_Shot_2015-07-06_at_11.47.39_AM.png)
Multiple Thermistor Long Exposure