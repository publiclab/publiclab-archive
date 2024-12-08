---
title: Nano Data Logger
tagnames: sensors, tool, datalogger, data-logging, method, nano-data-logger, parent:data-logging, activities:nano-data-logger
author: warren
path: /wiki/nano-data-logger.md
nid: 14522
uid: 1

---

# Nano Data Logger

by [cfastie](../profile/cfastie), [warren](../profile/warren)

June 12, 2017 19:04 | Tags: [sensors](../tag/sensors), [tool](../tag/tool), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [method](../tag/method), [nano-data-logger](../tag/nano-data-logger), [parent:data-logging](../tag/parent:data-logging), [activities:nano-data-logger](../tag/activities:nano-data-logger)

The Nano Data Logger is an easy and inexpensive way to start collecting environmental data. It relies on a shield (a PCB which plugs into another PCB) which snaps onto an Arduino Nano. The shield adds a real time clock and microSD card socket to the Arduino microcontroller. When the components are prepared properly, no soldering is required to start saving data from a sensor. Kits to build a Nano Data Logger are available at the [Public Lab Store](https://store.publiclab.org/collections/water-monitoring/products/nano-data-logger-kit?variant=12516302323821) and the [KAPtery](http://kaptery.com/product/nano-logger-kit).

A Nano Data Logger is very convenient for fast prototyping trials. Sensors and other devices (e.g., small display), can be connected without soldering because all of the pins on the Nano are exposed as male headers. The integrated real time clock and microSD socket make it easy to save sensor data with accurate time stamps.

To achieve the convenience of the Nano Data Logger, the ability to log data for many weeks is lost. It will not last on small batteries for more than several days without clever modification, so it is best suited for data collection for short periods, with alternative power (solar panels), or near mains power.

###Parts

The two primary parts are:

- **Arduino Nano**. Nano clones cost about $3.00 on eBay or [$4.00 to $10.00 at US retailers](https://www.amazon.com/s/?ie=UTF8&keywords=arduino+nano&tag=googhydr-20&index=electronics&hvadid=173554986927&hvpos=1t2&hvnetw=g&hvrand=15080925241715253772&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9003117&hvtargid=aud-345055983774:kwd-15608517219&ref=pd_sl_7sxbv5mstz_e). They can be cheaper if the headers are not soldered on if you want to do this yourself.
- **Logging shield for Nano**. These are mostly available on[ eBay for $5.00 to $6.00](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313.TR0.TRC0.H0.XData+logging+shield++for+Arduino+NANO.TRS5&_nkw=Data+logging+shield++for+Arduino+NANO&_sacat=0).

Also required:

- The real time clock on the logging shield needs a [**CR1220 coin cell** battery](https://www.amazon.com/s/ref=nb_sb_ss_i_1_5?url=search-alias%3Delectronics&field-keywords=1220+battery&sprefix=1220+%2Celectronics%2C159&crid=1QZ3OBPARF67Q&rh=n%3A172282%2Ck%3A1220+battery).
- Data is saved on a [**microSD card** which costs about $5.00 - $10.00](https://www.amazon.com/s/ref=nb_sb_ss_i_3_11?url=search-alias%3Delectronics&field-keywords=4gb+microsd+card&sprefix=4gb+microsd%2Celectronics%2C148&crid=38C6D1YHWDQV1&rh=n%3A172282%2Ck%3A4gb+microsd+card)
- For autonomous operation a battery or case for batteries is required. Four AA or AAA alkaline batteries will supply 6 volts (6 to 12 volts are okay).

The parts above do not include a sensor or USB cable to connect to a computer for programming and data transfer. For use near mains power, a mini USB cable and phone charger (5v) are convenient.

[![Nanolog_20170509-8764.JPG](https://publiclab.org/system/images/photos/000/022/915/medium/Nanolog_20170509-8764.JPG)](https://publiclab.org/system/images/photos/000/022/915/original/Nanolog_20170509-8764.JPG)  
*Above: These parts are included in the [KAPtery kit of the Nano Data Logger](http://kaptery.com/product/nano-logger-kit).*

The Nano Data Logger is available as a kit with everything required to log temperature and barometric pressure without doing any soldering. Order it from the [Public Lab Store](https://store.publiclab.org/collections/water-monitoring/products/nano-data-logger-kit?variant=12516302323821) or the [KAPtery](http://kaptery.com/product/nano-logger-kit).

###Assembly

The Nano data logging shield snaps onto the Arduino nano. A battery or battery pack can be connected with screw down terminal blocks. Power can also be supplied via mini USB cable from a computer or DC converter (phone charger). Sensors can be connected with DuPont wires with female connectors. If all of these components are prepared properly, no soldering is required to assemble the logger. However, preparing some of the components (Nano, sensors) might require soldering.

###Software

A sketch which logs data from a BMP280 sensor for pressure and temperature is available at the [KAPtery Guides page](http://kaptery.com/guides/). 

See below for several examples of data logging with the Nano Logger. Examples include using different sensors to log data for temperature, humidity, pressure, light, and tilt angle.

### Activities

[activities:nano-data-logger]


### Questions

[questions:nano-data-logger]


