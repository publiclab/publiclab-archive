---
title: "Frozen Riffle?"

tagnames: 'arduino, temperature, sensors, water-quality, riffle, micro-sd, response:13127, category:test-limits, data-logging, riffle-examples'
author: cfastie
path: /notes/cfastie/05-19-2016/frozen-riffle.md
nid: 13128
uid: 554

cids: 14651,15285,15286

---

![](https://publiclab.org/public/system/images/photos/000/016/219/original/riffle_20160517-5550-2.jpg)

# Frozen Riffle?

by [cfastie](../../../profile/cfastie) | May 19, 2016 03:53

May 19, 2016 03:53 | Tags: [arduino](../tag/arduino), [temperature](../tag/temperature), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [riffle](../tag/riffle), [micro-sd](../tag/micro-sd), [response:13127](../tag/response:13127), [category:test-limits](../tag/category:test-limits), [data-logging](../tag/data-logging), [riffle-examples](../tag/riffle-examples)

----

I put the Riffle in the freezer this morning to see if the temperature sensor on the RTC would notice. The quickly chilling board left a [conspicuous cooling curve](https://publiclab.org/notes/cfastie/05-18-2016/riffle-test-data) in the data on the micro SD card. While the Riffle was in the freezer, it started to record data differently. The change was quick and happened 40 seconds after the recorded temperature dropped below freezing (0°C). Instead of recording data every nine seconds, the timestamps incremented every second for six or seven seconds, and then skip ahead about 55 seconds (Table 1).

Coincidentally, the time this shift in data interval happened was exactly 10:00:00 o'clock (Table 1). So another hypothesis is that the sketch started incrementing differently when the time value had six digits for the first time, or for some other Y2K like reason. 

[![PMrtcTab.JPG](//i.publiclab.org/system/images/photos/000/016/220/large/PMrtcTab.JPG)](//i.publiclab.org/system/images/photos/000/016/220/original/PMrtcTab.JPG)  
*Table 1. The data file from this morning ([see note](https://publiclab.org/notes/cfastie/05-18-2016/riffle-test-data)) at the point when the data interval changed. The first series of new intervals begins right after the temperature dropped below freezing and when the time became 10:00:00.*

I still don't know whether time or temperature was responsible for the change in interval. This morning's logging ended with the interval still weird, so to make sure that the freezing had not broken my Riffle, I logged some more data this evening. 

[![PMRTCtemp.JPG](//i.publiclab.org/system/images/photos/000/016/221/large/PMRTCtemp.JPG)](//i.publiclab.org/system/images/photos/000/016/221/original/PMRTCtemp.JPG)  
*Figure 1. Temperature data logged by the Riffle this evening. The intervals are consistent (about 9 seconds) but the temperature changes no more frequently than about once every minute.*

The intervals between data writes are all correct now, so whatever happened in the freezer was not permanent.  Although the intervals are behaving, the temperature values are always the same for seven consecutive data writes. So the recorded temperature does not change more often than once per minute regardless of how fast the temperature is rising or falling (Fig. 1).

[![PMbatt.JPG](//i.publiclab.org/system/images/photos/000/016/222/large/PMbatt.JPG)](//i.publiclab.org/system/images/photos/000/016/222/original/PMbatt.JPG)  
*Figure 2. Battery level (in unknown units) recorded by the Riffle this evening. Unlike the temperature data, battery level does not stay constant for seven consecutive readings.*

The data logged for battery level do not exhibit the stepped pattern of the temperature data (Fig. 2). As in this morning's trial, the recorded battery level is erratic when the Riffle is moved. This might be due to the battery connector being jostled. Maybe my battery connector is bad, so it will be good to learn whether others can replicate this pattern. If not, then it might be my particular connector.

Battery level increased as the Riffle cooled down and also increased as the Riffle warmed up (compare Figs. 1 and 2). I have no idea what this means.

My next step is to figure out how to connect an external sensor and write a sketch to log its data. Below are the sensors I have. I included links to more information about each sensor in [this thread at the water quality Google Group](https://groups.google.com/forum/#!topic/plots-waterquality/opmcUUVp3yQ). This next step looks like it will entail a lot of study.

**Temperature**

MCP9808 High Accuracy I2C Temperature Sensor Breakout Board (Adafruit PRODUCT ID: 1782) 

**Temperature and humidity**

Adsong AM2301  
Adsong AM2302  similar to this: https://www.adafruit.com/product/393

**Barometric pressure**

BOSCH BMP180 I2C Digital Barometric Pressure Sensor Module Barometer Board  similar to this: https://www.adafruit.com/products/1603

**Light Intensity**

BH1750 Digital Light Sensor 

**Vibration tilt**  

Tilt Angle Module Vibration Sensor Module for Arduino STM32 AVR
