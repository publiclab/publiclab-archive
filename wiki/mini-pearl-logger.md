---
title: "Mini Pearl Logger"\ntagnames: 'arduino, sensors, datalogger, data-logging, parent:data-logging, mini-pearl-logger, activities:mini-pearl-logger, community-kits-prep'
author: cfastie
path: /wiki/mini-pearl-logger.md
nid: 14794
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/021/449/original/MiniPearl400.jpg)

# Mini Pearl Logger

by [cfastie](../profile/cfastie)

August 27, 2017 03:50 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [parent:data-logging](../tag/parent:data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [activities:mini-pearl-logger](../tag/activities:mini-pearl-logger), [community-kits-prep](../tag/community-kits-prep)

----

The Mini Pearl Logger is a powerful and inexpensive device for logging environmental data. It is based on an Arduino Pro Mini in combination with a real time clock and a microSD card reader. Combining these common electronic components allows logging data from multiple sensors for multiple months. Three different kits to build a Mini Pearl Logger are available at the [KAPtery](http://kaptery.com/products/data-and-control).  

The [Mini Pearl Logger Kit](http://kaptery.com/product/mini-pearl-logger-kit) is a minimal version that requires soldering and runs a sketch that puts the logger to sleep between logging events to conserve battery power.

The [Mini Pearl Pro Logger Kit](http://kaptery.com/product/mini-pearl-pro-logger-kit) includes a TPL5110 low power timer which turns the logger off between logging events and maximizes battery life.

The [Mini Pearl Snap Logger Kit](http://kaptery.com/product/mini-pearl-snap-logger-kit) includes a TPL5110 timer, a BMP280 sensor, an FTDI converter, and snaps together with no soldering required.

[![FeatureTable.PNG](https://publiclab.org/system/images/photos/000/023/322/large/FeatureTable.PNG)](https://publiclab.org/system/images/photos/000/023/322/original/FeatureTable.PNG)

All three kits include a DS3231 real-time clock which has an integrated temperature sensor and timekeeping is automatically corrected for temperature. Data from this sensor can be read and logged. The Mini Pearl Snap Logger Kit includes an additional external sensor for barometric pressure and temperature, and many other sensors (including I²C, 1 Wire, and Grove) can be connected to any Mini Pearl Logger. 

[![miniGo_20180107-2413.JPG](https://publiclab.org/system/images/photos/000/023/319/medium/miniGo_20180107-2413.JPG)](https://publiclab.org/system/images/photos/000/023/319/original/miniGo_20180107-2413.JPG)   
_Above: The parts included in the Mini Pearl Snap Logger Kit. Everything needed to log temperature and barometric pressure for many months (except three AA batteries) is included. An FTDI converter (red) for connecting the logger to your computer is also included._

This logger is based on Ed Mallon's [Cave Pearl Logger](https://edwardmallon.wordpress.com/2015/10/24/diy-arduino-logger-build-instructions-part-1/) which uses a similar combination of components. Ed has done extensive testing to extend the field longevity to more than a year.

[![miniGo_20180107-2448.JPG](https://publiclab.org/system/images/photos/000/023/318/medium/miniGo_20180107-2448.JPG)](https://publiclab.org/system/images/photos/000/023/318/original/miniGo_20180107-2448.JPG)  
_Above: An assembled Mini Pearl Snap Logger. The six components are connected with DuPont wires which slide onto header pins on the PCBs. It takes about 15 minutes to get one finished and logging data._

###Parts

Primary components:

- **Arduino Pro Mini**. Pro Minis are available on [eBay from sellers in Asia for under $2.00](https://www.ebay.com/sch/i.html?_from=R40&_sacat=0&_nkw=Arduino+Pro+Mini&rt=nc&LH_BIN=1). At US retailers prices are between $4.00 and $20.00. Pro Minis come in 3.3v and 5v versions, and the 3.3v version is required. 
- **Adafruit TPL5110 Low Power Timer**. Available from [Adafruit for $4.95](https://www.adafruit.com/product/3435).
- **DS3231 real time clock**. This module is available on [eBay for about $1.20](https://www.ebay.com/itm/Top-1-2PCS-Arduino-DS3231-AT24C32-IIC-Module-Precision-Real-Time-Clock-Memory/182840998778?hash=item2a922c3b7a:m:mkMwmF_bfaCkRIqfFG3yeTw) or from [US retailers for $4.00 to $15.00](https://www.amazon.com/Diymore-DS3231-AT24C32-Precision-Arduino/dp/B01IXXACD0/ref=sr_1_5?s=electronics&ie=UTF8&qid=1513187359&sr=1-5&keywords=ds3231+real+time+clock+module). Some DS3231 chips do not work at temperatures below 0°C, but these are not included in KAPtery kits.
- **3.3 volt MicroSD card socket**. These modules are available on [eBay for less than $1.00](https://www.ebay.com/sch/sis.html?_nkw=10pcs+Mini+SD+Card+Module+Memory+Module+Micro+SD+Card+Module+for+Arduino+AVR+ARM&_id=331907413969&&_trksid=p2057872.m2749.l2658). There are many different microSD card modules, and some are better at low sleep current.

Also required:

- **Battery or battery case** for AA or AAA. The Mini Pearl Logger is a 3.3 volt device. Three alkaline batteries (3 x 1.5v = 4.5v) are adequate or four NiMH (4 x 1.2v = 4.8v). LiPo or LiPoly batteries (3.7v) are also good.
- **MicroSD card**. Cards of 1 GB or smaller capacity are best if the logger will be slept (instead of turned off with a timer) because they tend to sleep better and at lower current.
- **CR2032 coin cell** battery for real time clock.

###Assembly

There are documents with guidance about assembling and getting started with the Mini Pearl Loggers at the [KAPtery Guides page](http://kaptery.com/guides/). 

###Software

A different Arduino sketch for each version of the Mini Pearl Logger can be downloaded at the [KAPtery Guides page](http://kaptery.com/guides/). 

Below are some research notes about activities done with Mini Pearl Loggers. Some of these notes include the sketch which was used in the activity described.

## Activities

[mini-pearl-logger](../../tag/activity:mini-pearl-logger)

## Questions

[mini-pearl-logger](../../tag/question:mini-pearl-logger)


