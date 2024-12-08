---
title: Thermistor Test in Water of Different Temperatures
tagnames: water-quality, thermal-fishing-bob, thermal, thermal-pollution, heat, multiple-input-thermal-fishing-bob, mare-liberum, replication:689
author: kgrevera
path: /notes/kgrevera/08-17-2015/thermistor-test-in-water-of-different-temperatures.md
nid: 12147
uid: 432001

---

# Thermistor Test in Water of Different Temperatures

by [kgrevera](../profile/kgrevera) August 17, 2015 14:45

August 17, 2015 14:45 | Tags: [water-quality](../tag/water-quality), [thermal-fishing-bob](../tag/thermal-fishing-bob), [thermal](../tag/thermal), [thermal-pollution](../tag/thermal-pollution), [heat](../tag/heat), [multiple-input-thermal-fishing-bob](../tag/multiple-input-thermal-fishing-bob), [mare-liberum](../tag/mare-liberum), [replication:689](../tag/replication:689)

##Thermistor Test in Water of Different Temperatures

###Background
This is a continuation of the project [Sara Wylie](http://www.publiclab.org/profile/Sara) and I are working on to further develop the [thermal fishing bob](http://www.publiclab.org/wiki/thermal-camera). Currently we are preparing for a [workshop](http://www.publiclab.org/notes/kgrevera/07-22-2015/mare-liberum-fishing-bob-workshop) in collaboration with New York's [Mare Liberum](http://www.thefreeseas.org). We would like to utilize a [multiple thermistor fishing bob](http://publiclab.org/notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs) for that workshop so I decided to test out an arduino uno with three thermistors plugged in to see how well they read temperature compared to each other and compared to the known temperature of the water (measured with a Taylor digital cooking thermometer). 

###Research Questions
* How accurately do thermistors actually read temperature?
* How long does it take for a thermistor to register change in temperature?
* How do I record this data?

###Procedure
I built a variation on [Laura's](http://publiclab.org/profile/lperovich) [multiple thermistor fishing bob](http://publiclab.org/notes/lperovich/06-10-2015/thermal-fishing-bob-multiple-inputs-outputs). However, I changed it a little so that all three thermistors could be plugged in and read temperature. There really aren't enough pins in Uno to power 3 LED's so often times one wasn't responding, but all three thermistors were reading. I took four cups (of equivalent size) and filled one with ice, one with hot tap water, one with tap water that had been left sitting out for ten minutes, and the last with tap water that had been put in the freezer for ten minutes. This gave me temperatures of 32.1 degrees Fahrenheit, 108.6 degrees, 72.2 degrees, and 57.7 degrees. These temperatures were read by a Taylor digital food thermometer. The fishing bob was plugged in to my computer so that the arduino could collect data using the serial monitor. I then dipped the ends of the thermistors into the water and waited for the temp measurements to level out. This was timed using a stop watch. Once the temp plateaued I copied the information from the serial monitor (auto-scroll turned off) into an excel spreadsheet.

###Results
Here are my excel sheets with their graphs attached to show the change in temperature (and other variables) over time.

<a href="https://i.publiclab.org/system/images/photos/000/011/138/original/ColdWaterTest.xlsx"><i class="icon icon-file"></i> ColdWaterTest.xlsx</a>

<a href="https://i.publiclab.org/system/images/photos/000/011/140/original/IceTest2.xlsx"><i class="icon icon-file"></i> IceTest2.xlsx</a>

<a href="https://i.publiclab.org/system/images/photos/000/011/139/original/HotWaterTest.xlsx"><i class="icon icon-file"></i> HotWaterTest.xlsx</a>

<a href="https://i.publiclab.org/system/images/photos/000/011/141/original/RoomTempTest.xlsx"><i class="icon icon-file"></i> RoomTempTest.xlsx</a>

Overall, the thermistors showed greater accuracy in warmer water (room temp and hot) and less accuracy in cooler water. Ice was the furthest off. The true temp of the ice was 32.1 degrees Fahrenheit, but the thermistors read it as 41.9 at the lowest (and the thermistors weren't as comparable to each other). The thermistor readings weren't identical to each other in all cases, but were closer in the warmer water. 
The thermistors reacted quicker to increases in temperature rather than decreases. The hot water took 14.1 seconds for the temperature to fully increase. Room temp as a control was measured for 15.45 seconds. Cold water took 23.3 seconds and ice took a full 86.3 seconds.

[![Screen_Shot_2015-08-18_at_9.19.06_PM.png](https://i.publiclab.org/system/images/photos/000/011/190/medium/Screen_Shot_2015-08-18_at_9.19.06_PM.png)](https://i.publiclab.org/system/images/photos/000/011/190/original/Screen_Shot_2015-08-18_at_9.19.06_PM.png)

[![Screen_Shot_2015-08-18_at_9.19.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/191/medium/Screen_Shot_2015-08-18_at_9.19.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/191/original/Screen_Shot_2015-08-18_at_9.19.18_PM.png)
######Room Temperature Graphs

[![Screen_Shot_2015-08-18_at_9.21.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/192/medium/Screen_Shot_2015-08-18_at_9.21.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/192/original/Screen_Shot_2015-08-18_at_9.21.18_PM.png)

[![Screen_Shot_2015-08-18_at_9.24.52_PM.png](https://i.publiclab.org/system/images/photos/000/011/198/medium/Screen_Shot_2015-08-18_at_9.24.52_PM.png)](https://i.publiclab.org/system/images/photos/000/011/198/original/Screen_Shot_2015-08-18_at_9.24.52_PM.png)
######Hot Water Graphs

[![Screen_Shot_2015-08-18_at_9.22.17_PM.png](https://i.publiclab.org/system/images/photos/000/011/194/medium/Screen_Shot_2015-08-18_at_9.22.17_PM.png)](https://i.publiclab.org/system/images/photos/000/011/194/original/Screen_Shot_2015-08-18_at_9.22.17_PM.png)

[![Screen_Shot_2015-08-18_at_9.22.24_PM.png](https://i.publiclab.org/system/images/photos/000/011/200/medium/Screen_Shot_2015-08-18_at_9.22.24_PM.png)](https://i.publiclab.org/system/images/photos/000/011/200/original/Screen_Shot_2015-08-18_at_9.22.24_PM.png)
######Ice Graphs

[![Screen_Shot_2015-08-18_at_9.23.12_PM.png](https://i.publiclab.org/system/images/photos/000/011/196/medium/Screen_Shot_2015-08-18_at_9.23.12_PM.png)](https://i.publiclab.org/system/images/photos/000/011/196/original/Screen_Shot_2015-08-18_at_9.23.12_PM.png)

[![Screen_Shot_2015-08-18_at_9.23.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/197/medium/Screen_Shot_2015-08-18_at_9.23.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/197/original/Screen_Shot_2015-08-18_at_9.23.18_PM.png)
######Cold Water Graphs

These results demonstrate that for the most part the thermistors read comparable temperatures. However, the most deviation was seen in the ice test, with final temperatures ranging up to 5 degrees Fahrenheit. The other tests mostly showed differences in a fraction of a degree (cold varied 1 degree). The water temperature was measured with a cooking thermometer, which the thermistor readings were then compared to. The hot water measured 108.6 degrees by the thermometer, but was only read ~106 by the thermistors. The room temperature water was pretty accurate, 72.2 by the thermometer and ~72 by the thermistors. The cooler water was less accurate however. The cold water measured at 57.7 degrees on the thermometer. The thermistors read 59 at the lowest. Ice was the furthest off, reading at 32.1 degrees, but the thermometers never measured lower than 41.9

###Materials
* [multiple thermistor bob](http://www.publiclab.org/notes/kgrevera/07-07-2015/multiple-thermistor-fishing-bob-field-test)

<a href="https://i.publiclab.org/system/images/photos/000/011/150/original/ThermalFishingLaura.ino.zip"><i class="icon icon-file"></i> ThermalFishingLaura.ino.zip</a>

###Continuing Issues
* red LED's are still very dim, I replaced the 180ohm resistors with 100ohm ones, which improved matters but red was still hard to see. 
* a way to log the data as the bob was reading it would make field tests more realistic
* a better way to input the data from the serial monitor into excel and graph as the current method takes far too long
* I used a cooking thermometer to compare the thermistors' readings against but the accuracy of thermometer is unknown which has the potential to skew the interpretation of the data. It is a cooking thermometer after all, not a scientific one. 

###Pictures

[![Screen_Shot_2015-08-17_at_10.31.57_AM.png](https://i.publiclab.org/system/images/photos/000/011/144/medium/Screen_Shot_2015-08-17_at_10.31.57_AM.png)](https://i.publiclab.org/system/images/photos/000/011/144/original/Screen_Shot_2015-08-17_at_10.31.57_AM.png)
######A very chilly fishing bob

[![Screen_Shot_2015-08-17_at_10.31.48_AM.png](https://i.publiclab.org/system/images/photos/000/011/145/medium/Screen_Shot_2015-08-17_at_10.31.48_AM.png)](https://i.publiclab.org/system/images/photos/000/011/145/original/Screen_Shot_2015-08-17_at_10.31.48_AM.png)
######Ice

[![Screen_Shot_2015-08-17_at_10.32.26_AM.png](https://i.publiclab.org/system/images/photos/000/011/146/medium/Screen_Shot_2015-08-17_at_10.32.26_AM.png)](https://i.publiclab.org/system/images/photos/000/011/146/original/Screen_Shot_2015-08-17_at_10.32.26_AM.png)
######Room temp water

[![Screen_Shot_2015-08-17_at_10.31.35_AM.png](https://i.publiclab.org/system/images/photos/000/011/149/medium/Screen_Shot_2015-08-17_at_10.31.35_AM.png)](https://i.publiclab.org/system/images/photos/000/011/149/original/Screen_Shot_2015-08-17_at_10.31.35_AM.png)
######Room temperature fishing bob

[![Screen_Shot_2015-08-17_at_10.32.38_AM.png](https://i.publiclab.org/system/images/photos/000/011/148/medium/Screen_Shot_2015-08-17_at_10.32.38_AM.png)](https://i.publiclab.org/system/images/photos/000/011/148/original/Screen_Shot_2015-08-17_at_10.32.38_AM.png)
######A very toasty fishing bob

[![Screen_Shot_2015-08-17_at_10.32.56_AM.png](https://i.publiclab.org/system/images/photos/000/011/147/medium/Screen_Shot_2015-08-17_at_10.32.56_AM.png)](https://i.publiclab.org/system/images/photos/000/011/147/original/Screen_Shot_2015-08-17_at_10.32.56_AM.png)
######Thermistors in water with fishing bob visible