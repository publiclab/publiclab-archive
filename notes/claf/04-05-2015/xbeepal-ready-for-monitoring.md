---
title: "XbeePal ready for monitoring"\ntagnames: 'air-quality, fracking, mesh, xbee, zigbee, network'
author: claf
path: /notes/claf/04-05-2015/xbeepal-ready-for-monitoring.md
nid: 11743
uid: 426041

---

![](https://publiclab.org/public/system/images/photos/000/009/548/original/alive-sm.jpg)

# XbeePal ready for monitoring

by [claf](../profile/claf) | April 05, 2015 16:40

April 05, 2015 16:40 | Tags: [air-quality](../tag/air-quality), [fracking](../tag/fracking), [mesh](../tag/mesh), [xbee](../tag/xbee), [zigbee](../tag/zigbee), [network](../tag/network)

----

This project could be useful for ways citizens can monitor air quality, for example, specific elements used in fracking, and to combine collection of IR video and gas sensing in one box, or scatter many different sensors over a large area.

[XBeePal](http://clafayette.com/network/index.htm) is a low-power, fairly low cost system for Zigbee 2.5 stand-alone mesh networking (no need for a micro controller). There's a user-friendly interface that automates complicated API messaging. It's built with MaxMSP and is Mac based, but could be ported to Windows fairly easily. With a bit of further development, the system can send data to internet sites. 

**Accomplished**
* Low-cost, can run for extended time periods on battery power…can be deployed in outdoor areas with no power or internet access.

* A coordinator collects data and manages remote devices from a home-based, powered location.

* Tested over at least a mile in a tree-covered rural area

* An infrastructure for any type of sensor-based monitoring, including infrared video (SD card), audio, and other analog and digital sensors.

* Can switch on/off higher power components 

* Optimize sleep and wake for power efficiency

* Survive extreme weather conditions (rain, humidity, heat)

* Automated radio discovery, communications/decisions, data collection


[![IMG_0277.jpg](https://i.publiclab.org/system/images/photos/000/009/549/medium/IMG_0277.jpg)](https://i.publiclab.org/system/images/photos/000/009/549/original/IMG_0277.jpg)


[![IMG_0298.jpg](https://i.publiclab.org/system/images/photos/000/009/550/medium/IMG_0298.jpg)](https://i.publiclab.org/system/images/photos/000/009/550/original/IMG_0298.jpg)

**What’s next**
I’d like to find a way to measure air pollutants specific to oil and gas drilling with a system that can be powered for days. 

Libelium has developed a very expensive [“Smart Environment”](http://www.libelium.com/products/plug-sense/models/) system that isolates several components and works with the Zigbee mesh.

* Carbon Monoxide (CO)
* Carbon Dioxide (CO2)
* Oxygen (O2)
* Methane (CH4)
* Hydrogen (H2)
* Ammonia (NH3)
* Hydrogen Sulfide (H2S)
* Nitrogen Dioxide (NO2)
* Ozone (O3)
* Hydrocarbons (VOC)
* Isobutane
* Ethanol
* Toluene
* Temperature
* Humidity
* Pressure atmospheric

Libelium encloses the sensors inside vacuum chambers, to survive high humidity, something that quickly degrades sensor  readings.

**Help is needed**
The gas sensors are not that expensive, but how can sensors be vacuum-packed inexpensively? I can share circuit, software, and package designs, and can work with you to test it. 

If you have ideas for other applications, I'd like to hear from you.