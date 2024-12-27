---
title: "Riffle Power Consumption"

tagnames: 'riffle, low-power, riffle-beta, riffle-examples'
author: kinasmith
path: /notes/kinasmith/06-09-2016/riffle-power-consumption.md
nid: 13180
uid: 445906

cids: 14740,14743,17764

---

![](https://publiclab.org/public/system/images/photos/000/016/546/original/NewFile5.bmp)

# Riffle Power Consumption

by [kinasmith](../../../profile/kinasmith) | June 09, 2016 01:54

June 09, 2016 01:54 | Tags: [riffle](../tag/riffle), [low-power](../tag/low-power), [riffle-beta](../tag/riffle-beta), [riffle-examples](../tag/riffle-examples)

----

##Measuring Power Consumption

As with most battery powered devices, it's a reasonable thing to want to know how long they are going to run before running out of power. This depends highly on how much power they actually consume and, obviously, the size of the battery being used. It's [easy](https://www.google.com/search?hl=en&safe=off&client=firefox-a&hs=H2I&rls=org.mozilla%3Aen-US%3Aofficial&q=measure+current+consumption+with+a+multimeter&aq=f&aqi=&aql=&oq=) to measure current consumption with a multimeter, but it is sometimes very interesting to look at it over time. For example, if I'm building a datalogger that records a sensor reading every 15 minutes, I can measure with a multimeter the standby current, how much power the device is consuming while just waiting, but the actual sensor reading and logging events happen fast. To calculate the amount of energy being used, I need to know the current and the exact amount of time. 

It can be measured with an oscilloscope with a couple tricks. 

Ohm's Law states:
```
V = I/R
```
Where I is current, R is resistance, and V is voltage. 

So, if we measure the Voltage across a Resistor, we can calculate the Current flowing through it. If the Resistance stays fixed, and the Voltage changes...the Current changes too. 


[![IMG_20160608_170126.jpg](//i.publiclab.org/system/images/photos/000/016/548/large/IMG_20160608_170126.jpg)](//i.publiclab.org/system/images/photos/000/016/548/original/IMG_20160608_170126.jpg)

##Actual Consumption

The code I was using the example with the SHT-21 Temp/Humidity Sensor and using the RealTime Clock as the scheduler. [The code is on Github here.](https://github.com/kinasmith/publicLab/blob/master/Riffle/SHT21_Logger/SHT21_Logger.ino)

###Results?


![](//i.publiclab.org/system/images/photos/000/016/549/original/NewFile5.bmp)

This is the full Sensor Reading and Data Recording Cycle. You can see the unit divisions on the bottom of the screen, 50mV per square vertically and 100mS per square horizontally. 

The Riffle wakes up, which is the initial rise in current ~300mS from the left of the screen. It takes about 300mS for the sensors to take their readings, then there is a large spike in current, which is the data being written to the SD card, then 300mS to finish up, then it goes back to sleep. 

Looking more closely at that current spike, we can see each individual write event happen. 

![](//i.publiclab.org/system/images/photos/000/016/550/original/NewFile6.bmp)

This is our code for that time chunk.

```C
void writeDataToCard(float t, float h, float v, long utc) {
  File dataFile = SD.open("LOG.CSV", FILE_WRITE);
  if (dataFile) {
    dataFile.print(t);
    dataFile.print(",");
    dataFile.print(h);
    dataFile.print(",");
    dataFile.print(v);
    dataFile.print(",");
    dataFile.print(utc);
    dataFile.println();
    dataFile.close();
  }
}
```
We're writing 4 values to the SD card, the Temperature, the Humidity, the Battery Voltage, and the Time Stamp, and there are 4 spikes...Neat. 

If we want to calculate how much current is being drawn during those write events it's easy. 

```
V=I/R = 150mV=I/2.2ohms = 68mA
```
But those spikes are only about 0.5mS long....so it doesn't really matter too much. 
What's more important is the sleeping and awake average current draw. 

###Awake

![](//i.publiclab.org/system/images/photos/000/016/552/original/NewFile7.bmp)

Awake current is ~11mA, at a battery voltage of 3.8volts, and we're awake for 600mS, which means [it uses 0.007mWh of power](https://www.google.com/search?hl=en&safe=off&client=firefox-a&hs=H2I&rls=org.mozilla%3Aen-US%3Aofficial&q=11milliamps+*+3.8volts+*+600milliseconds&aq=f&aqi=&aql=&oq=#safe=off&hl=en&q=11milliamps+*+3.8volts+*+600milliseconds+in+milliwatt+hours)

###Sleeping

![](//i.publiclab.org/system/images/photos/000/016/551/original/NewFile8.bmp)

Sleeping current is ~ 5mA, and for a time period of always. Let's just calculate power consumption for 1 hour. [Same math applies, and we get 19mWh for an hour of sleeping.](https://www.google.com/search?hl=en&safe=off&client=firefox-a&hs=H2I&rls=org.mozilla%3Aen-US%3Aofficial&q=11milliamps+*+3.8volts+*+600milliseconds&aq=f&aqi=&aql=&oq=#safe=off&hl=en&q=5milliamps+*+3.8volts+*+1hour+in+milliwatt+hours)

###Prospective Battery life

So, if we're using the 18650 battery that came with the Riffle, it's a 2200mAh @ a nominal voltage of 3.7v, [which is a capacity of 8140mWh](https://www.google.com/search?hl=en&safe=off&client=firefox-a&hs=H2I&rls=org.mozilla%3Aen-US%3Aofficial&q=11milliamps+*+3.8volts+*+600milliseconds&aq=f&aqi=&aql=&oq=#safe=off&hl=en&q=2200milliamps+*+3.7volts+*+1hour+in+milliwatt+hours)

8140/19.007 is 428 hours, which is about....

>18 days

This assumes we live in a magical world where the rated capacity of the battery is actually accurate...which unfortunately is not the world we live in. Assuming 50% of the rated capacity on any battery is pretty normal, which leaves us with....

>9 days 

##Thoughts

It's pretty easy to reason out that the amount of power consumption during sleep is the major factor in extending battery life. A sleep current of 5mA is exceedingly high for a device like this. It shouldn't be more than 10 or 20 µA, which is many orders of magnitude smaller. The Atmel ATmega328 is capable of sleep consumption of close to 1µA, as [documented here](https://www.sparkfun.com/tutorials/309).

I'm not sure where the leakage is happening, but it seems like it shouldn't be drawing this much power. Maybe I forgot to turn something off or on....

Those are my thoughts right now. 