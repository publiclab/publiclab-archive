---
title: 'New data loggers for long-term logging'
tagnames: arduino, datalogger, data-logging, mini-pearl-logger, activity:mini-pearl-logger, tpl5110, mini-pearl-snap-logger, mini-pearl-pro-logger, low-power-logging
author: cfastie
path: /notes/cfastie/01-23-2018/new-data-loggers-for-long-term-logging.md
nid: 15597
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/023/316/original/IMG_20180118_130424122.jpg)

# New data loggers for long-term logging

by [cfastie](../profile/cfastie) January 23, 2018 22:51

January 23, 2018 22:51 | Tags: [arduino](../tag/arduino), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [tpl5110](../tag/tpl5110), [mini-pearl-snap-logger](../tag/mini-pearl-snap-logger), [mini-pearl-pro-logger](../tag/mini-pearl-pro-logger), [low-power-logging](../tag/low-power-logging)

----

_Above: Two Mini Pearl Loggers are in yogurt containers in my woodshed. BME280 sensors extend above the closed containers. TPL5110 timers controlled the Arduino-based loggers. The wooden basket covered both containers to keep blowing snow off the sensors._

A month ago I [posted about a device](https://publiclab.org/notes/cfastie/12-21-2017/log-all-the-data-with-adafruit-s-tpl5110-low-power-timer) which has dramatically changed the way I log environmental data. The TPL5110 low power timer can supply power to a data logger only when it needs it and thereby allow small batteries to last for many months. Previously the programs running on the data loggers had been putting the logger into a low current sleep state between logging events. That can work well, but the low power timer uses much less current than a typical sleeping Arduino-based logger. The timer also eliminates the need to write complicated code which puts the various logger components to sleep and wakes them up again.

[![TPL_20171220-2252.JPG](https://publiclab.org/system/images/photos/000/023/315/medium/TPL_20171220-2252.JPG)](https://publiclab.org/system/images/photos/000/023/315/original/TPL_20171220-2252.JPG)  
_Figure 1\. This Adafruit product can control an Arduino-based data logger and reduce the current needed to run the logger. The first tests of the timer suggest it can make long-term data logging easier and more reliable._

I have been testing the TPL5110 timer with a few Mini Pearl Loggers this month and the results are all very good. I have not determined how long the batteries last because that might take a few (to many) more months. The loggers have been writing data to a microSD card every 10 minutes or so without fail.

[![19day.PNG](https://publiclab.org/system/images/photos/000/023/314/large/19day.PNG)](https://publiclab.org/system/images/photos/000/023/314/original/19day.PNG)  
_Figure 2\. The course of outdoor air temperature in my backyard for the first 19 days of January. A TPL5110 timer turned on a Mini Pearl Logger every 9.3 minutes and wrote 2763 data entries to a microSD card._

Buoyed by the success of these trial deployments, I have made a couple of new data logger kits. The Mini Pearl Logger Kit is now available in three versions. The [original kit](http://kaptery.com/product/mini-pearl-logger-kit) is unchanged and does not include a TPL5110 timer. The new [Mini Pearl Pro Logger Kit](http://kaptery.com/product/mini-pearl-pro-logger-kit) includes a timer but is otherwise similar to the original kit. The [Mini Pearl Snap Logger Kit](http://kaptery.com/product/mini-pearl-snap-logger-kit) includes a timer and is also the only Mini Pearl Kit to require **no soldering**.
.  

###Table 1. Features of three Mini Pearl Logger Kits.  
[![FeatureTable.PNG](https://publiclab.org/system/images/photos/000/023/322/large/FeatureTable.PNG)](https://publiclab.org/system/images/photos/000/023/322/original/FeatureTable.PNG)

Producing a Mini Pearl Snap Logger Kit which can be assembled without soldering requires that I do a lot of soldering before I ship it. So that version is a trial offering and is limited to one per customer. It's not priced high enough to pay a living wage to do the soldering, but I hope it will encourage some people to try long-term data logging.

[![miniGo_20180107-2413.JPG](https://publiclab.org/system/images/photos/000/023/319/medium/miniGo_20180107-2413.JPG)](https://publiclab.org/system/images/photos/000/023/319/original/miniGo_20180107-2413.JPG)  
_Figure 3\. The parts included in the Mini Pearl Snap Logger Kit. Everything needed to log temperature and barometric pressure for many months (except three AA batteries) is included. An FTDI converter (red) for connecting the logger to your computer is also included._

[![miniGo_20180107-2448.JPG](https://publiclab.org/system/images/photos/000/023/318/medium/miniGo_20180107-2448.JPG)](https://publiclab.org/system/images/photos/000/023/318/original/miniGo_20180107-2448.JPG)  
_Figure 4\. An assembled Mini Pearl Snap Logger. The six components are connected with DuPont wires which slide onto header pins on the PCBs. It takes about 15 minutes to get one finished and logging data._

[![ColdDays.PNG](https://publiclab.org/system/images/photos/000/023/320/large/ColdDays.PNG)](https://publiclab.org/system/images/photos/000/023/320/original/ColdDays.PNG)  
_Figure 5\. Temperature during the two coldest days in January (so far). Between these data logging events which took about three seconds each, the only thing using battery power was the TPL5110 timer which is designed to use very little current (30µA). So more than 30µA of current was used only 0.5% of the time._

I have some work to do finishing the user guides for one of the new logger kits, but they are all [available now at the KAPtery](http://kaptery.com/products/data-and-control). Sketches for each of the loggers are available to download at the [KAPtery Guides page](http://kaptery.com/guides/). I am also continuing the tests, and have three loggers running now at various places.
