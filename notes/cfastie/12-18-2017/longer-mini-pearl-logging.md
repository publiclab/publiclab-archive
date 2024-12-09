---
title: 'Longer Mini Pearl logging'
tagnames: arduino, datalogger, low-power, data-logging, bme280, mcp9808, mini-pearl-logger, activity:mini-pearl-logger, bmp280
author: cfastie
path: /notes/cfastie/12-18-2017/longer-mini-pearl-logging.md
nid: 15389
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/022/955/original/sensor_20171217-2146-2.JPG)

# Longer Mini Pearl logging

by [cfastie](../profile/cfastie) December 18, 2017 00:25

December 18, 2017 00:25 | Tags: [arduino](../tag/arduino), [datalogger](../tag/datalogger), [low-power](../tag/low-power), [data-logging](../tag/data-logging), [bme280](../tag/bme280), [mcp9808](../tag/mcp9808), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [bmp280](../tag/bmp280)

----

In mid October I started three [Mini Pearl Data Loggers](https://publiclab.org/wiki/mini-pearl-logger) in my backyard. The goal was to log temperature data for longer than I had the last time I tried. In August, a [Mini Pearl Logger had run for 22 days](https://publiclab.org/notes/cfastie/08-20-2017/mini-pearl-logger-longer) on 4 AAA batteries. I made a few changes this time, and each of the three loggers was doing something a little different.

[![IMG_20171025_152035581a.jpg](https://publiclab.org/system/images/photos/000/022/956/medium/IMG_20171025_152035581a.jpg)](https://publiclab.org/system/images/photos/000/022/956/original/IMG_20171025_152035581a.jpg)  
_Figure 1\. One of the Mini Pearl Loggers was in a Nalgene bottle and logged temperature from two MCP9808 sensors at the center of a compost pile. This is the pile on October 25 after it had been turned and enlarged (with new garden waste)._

One of the loggers collected temperature data from the inside of a compost pile. There were two MCP9808 sensors in the compost, but only one of them worked for most of the time (I assume there was a loose connection, as usual). The MCP9808 can operate on either 3.3 or 5 volts, but does not appear to have a voltage regulator on the PCB, so the temperature sensor chip must handle a range of voltage. The pile was built from fresh yard and garden waste on October 14\.

[![sensor_20171217-2152.JPG](https://publiclab.org/system/images/photos/000/022/957/medium/sensor_20171217-2152.JPG)](https://publiclab.org/system/images/photos/000/022/957/original/sensor_20171217-2152.JPG)  
_Figure 2\. Two of the Mini Pearl loggers were on the kindling shelf of my wood shed._

The other two loggers were in my wood shed where they were exposed to outside air but under a roof and mostly out of direct sun. These two loggers were configured identically except that one had a BME280 sensor and one had a BMP280 sensor. The BME sensor measures barometric pressure, temperature, and humidity, and the BMP sensor does only pressure and temperature. Both of these sensors are 3.3 volt sensors and have no voltage regulator to convert higher voltage.

[![sensor_20171217-2135.JPG](https://publiclab.org/system/images/photos/000/022/958/medium/sensor_20171217-2135.JPG)](https://publiclab.org/system/images/photos/000/022/958/original/sensor_20171217-2135.JPG)  
_Figure 3\. Each of the three loggers deployed had a different type of sensor. Inside the compost, temperature only was measured by MCP9808 sensors (left). In the wood shed, one logger had a BMP280 sensor for pressure and temperature (center) and one had a BME280 sensor for pressure, temperature, and humidity (right)._

What is wrong with this observational study? My goal was to learn how to make the Mini Pearl Logger last longer on batteries. But I changed several things compared to the last time I tried this (Table 1). So if there is a difference this time, I won't know which of my changes were responsible.

**_Table 1\. Configuration differences between the current trial and the [previous trial](https://publiclab.org/notes/cfastie/08-20-2017/mini-pearl-logger-longer) with the Mini Pearl Logger. Several things were changed this time._**  
[![Table1.PNG](https://publiclab.org/system/images/photos/000/022/960/large/Table1.PNG)](https://publiclab.org/system/images/photos/000/022/960/original/Table1.PNG)

There was a big difference this time. All three loggers lasted for more than seven weeks. The logger in the wood shed with the BMP280 sensor lasted for 8 weeks. So the longevity more than doubled. The two changes most likely to explain the increased longevity are using AA batteries instead of AAA, and sleeping the loggers for 15 minutes instead of 10 minutes between logging events.

[![Compost54days.PNG](https://publiclab.org/system/images/photos/000/022/961/large/Compost54days.PNG)](https://publiclab.org/system/images/photos/000/022/961/original/Compost54days.PNG)  
_Figure 4\. Temperature data from three Mini Pearl Loggers. All three loggers operated for more than seven weeks before the battery current dropped too low. An MCP9808 sensor inside the compost pile recorded steep temperature rises when the pile was first built and when it was turned (top). The higher temperature after the pile was turned is likely due to increasing the size of the pile by adding additional material. Two loggers in my wood shed recorded the onset of winter temperatures between October 12 and the first week of December (bottom)._

I am pleased with this result, but concerned about the many configuration details required to achieve it (Table 1). The first five of these details in Table 1 are probably critical to lowering power consumption. Choice of battery is certainly also important, and more expensive LiPo or LiPoly batteries would probably contribute a lot. Logging interval is also critical, especially if the logger can be slept between logging events at a very low current. I suspect that these loggers could last several months if the logging interval was increased to one or two hours.

[![sensor_20171217-2189a.jpg](https://publiclab.org/system/images/photos/000/022/962/medium/sensor_20171217-2189a.jpg)](https://publiclab.org/system/images/photos/000/022/962/original/sensor_20171217-2189a.jpg)  
_Figure 5\. One of the Mini Pearl Loggers used in this trial. All of these components can be purchased on eBay for about $15.00, including shipping. A kit which includes everything except the BME280 sensor and I²C hub is available for [$19.00 at the KAPtery](http://kaptery.com/product/mini-pearl-logger-kit)._

I have in hand a potential solution to this issue of having to heavily modify and configure these data loggers. This solution could make every detail in Table 1 irrelevant. Without careful selection of parts, or tedious modification of parts, or long logging intervals, a Mini Pearl Logger might last for many months. I'll let you know when I give it a try.

[Here is the sketch running on the Mini Pearl Logger with one BMP280 sensor](https://publiclab.org/system/images/photos/000/022/963/original/Mini_WoodShed1BMP.txt)