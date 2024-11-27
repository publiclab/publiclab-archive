---
nid: 14553
title: SkyPod GPS Logger
path: public/static/wiki/skypod-gps-logger.md
uid: 554
tagnames: balloon-mapping,kite-mapping,kite-aerial-photography,balloon-telemetry-kit,kap,gps,datalogger,skypod,parent:data-logging,activities:skypod-gps-logger
---

# SkyPod GPS Logger

The SkyPod is an Arduino-based GPS logger designed to fly on a kite or balloon camera rig, but can be used as a general purpose data logger with a GPS receiver. The SkyPod includes an Arduino Nano, GPS module with antenna, and microSD card socket. Environmental sensors for temperature, humidity, and barometric pressure are typically part of the payload. Data can be saved to microSD card at any interval. Everything fits into a 3D printed housing which can be firmly attached to a camera rig. 

There are a few reasons to use a GPS receiver on a flying camera rig to collect location data:

1. Some structure from motion software (makes 3D models from photos) require that photos have GPS data in the EXIF header or work better or faster if GPS data are present.
3. Some orthophoto mapping software can georeference the stitched image if GPS data are present in the photos.
4. Mapknitter and Google Earth will automatically place photos if they contain GPS data.
5. The track followed by the flying camera can be displayed in three dimensions, possibly with other data collected.
6. You can learn how high the camera was.

[![Skypod_20170412-7979b.jpg](https://publiclab.org/system/images/photos/000/022/932/medium/Skypod_20170412-7979b.jpg)](https://publiclab.org/system/images/photos/000/022/932/original/Skypod_20170412-7979b.jpg)  
*Above: These parts can be assembled (soldering required) to make a SkyPod GPS Logger.*

###Parts

- **Arduino Nano**. Nano clones cost about $3.00 on eBay or [$4.00 to $10.00 at US retailers](https://www.amazon.com/s/?ie=UTF8&keywords=arduino+nano&tag=googhydr-20&index=electronics&hvadid=173554986927&hvpos=1t2&hvnetw=g&hvrand=15080925241715253772&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9003117&hvtargid=aud-345055983774:kwd-15608517219&ref=pd_sl_7sxbv5mstz_e). The Nano should not have headers soldered on (to fit in the bracket), and these typically cost less.
- **GPS receiver**. This is a u-blox NEO-7M-000 GPS breakout board and antenna. [It costs about $13.00 on eBay](https://www.ebay.com/sch/sis.html?_nkw=Ublox+NEO-7M-000+GPS+Module+MWC+APM2.6+Replace+NEO-6M+GYGPSV3-NEO7M+D&_id=112083428833&&_trksid=p2057872.m2749.l2658).
- **MicroSD card module**. This module works at either 3.3v or 5v (the Nano is 5v). It is a different module than the 3v version used with the Mini Pearl Logger. It costs [less than $1.00 on eBay](https://www.ebay.com/sch/sis.html?_nkw=Micro+SD+Storage+Board+Mciro+SD+TF+Card+Memory+Shield+Module+SPI+For+Arduino+FT&_id=401202127056&&_trksid=p2057872.m2749.l2658).
- **Battery or battery case**. Four AAA alkaline batteries will supply 6 volts (6 to 12 volts are okay).
- **Bracket**. A 3D printed bracket has been designed to hold all the parts in a compact payload for aerial missions. The model to print the bracket is [freely available at Thingiverse](https://www.thingiverse.com/thing:2712540). The bracket is designed to fit the exact parts linked above.
- **MicroSD card**. Any MicroSD card will do. Large capacity is not needed.
- **Sensor**. Sensors are not required, and many different ones can be connected. A good sensor to connect is the BME280 sensor for barometric pressure, temperature, and humidity. These cost about [$6.00 on eBay](https://www.ebay.com/itm/10DOF-I2C-SPI-GY-91-BME280-MPU9250-BMP280-Kompass-Barom-for-Arduino-Raspberry-Pi/112215372695?ssPageName=STRK%3AMEBIDX%3AIT&var=412478252599&_trksid=p2057872.m2749.l2649). 
- **Additional parts**. Wires, Velcro, a few screws, etc.

Kits with all the parts to build a SkyPod GPS Logger are [available at the KAPtery](http://kaptery.com/product/skypod-kit) for $44.00.

###Assembly

Two documents about assembling the SkyPod GPS Logger are available at the [KAPtery Guides page](http://kaptery.com/guides/). A research note [describes the assembly process.](https://publiclab.org/notes/cfastie/08-07-2017/assembling-a-skypod-gps-logger)

###Software

A sketch which logs data from the GPS receiver and BME280 sensor is available at the [KAPtery Guides page](http://kaptery.com/guides/). 

### Activities

[activities:skypod-gps-logger]

### Questions

[questions:skypod-gps-logger]


