---
title: "Air Column Monitor"

tagnames: 'balloon-mapping, kite-mapping, kite-balloon-hybrid, air-column-monitor, agriculture, diy-balloon, air-quality, mining, tool, industry, method, oil-and-gas, air-quality-projects'
author: Shannon
path: /wiki/air-column-monitor.md
nid: 1667
uid: 9

---

![](https://publiclab.org/sites/default/files/IMG_4739.JPG)

# Air Column Monitor

by [liz](../profile/liz), [mathew](../profile/mathew), [Shannon](../profile/Shannon), [edborden](../profile/edborden)

April 13, 2012 17:22 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [kite-balloon-hybrid](../tag/kite-balloon-hybrid), [air-column-monitor](../tag/air-column-monitor), [agriculture](../tag/agriculture), [diy-balloon](../tag/diy-balloon), [air-quality](../tag/air-quality), [mining](../tag/mining), [tool](../tag/tool), [industry](../tag/industry), [method](../tag/method), [oil-and-gas](../tag/oil-and-gas), [air-quality-projects](../tag/air-quality-projects)

----

Notes and pages related to this tool can be found by searching "<a href="http://publiclaboratory.org/search/node/air-column-monitor">http://publiclaboratory.org/search/node/air-column-monitor</a>"

The air column monitor is currently in early phases of development. The April 2012 EcoHackII at Parsons in NYC brought together a group of developers, scientists, data visualizers and activists to work on the initial design. This tool is being developed as a partnership between Public Lab and the AirQualityEgg/Sensemakers community.

Some brainstorming has been conducted on this page: http://publiclaboratory.org/wiki/ecohackii

Images/video of air column monitor development from EcoHack: https://www.flickr.com/photos/recordandremember/sets/72157629537600846/ and http://www.meetup.com/sensemakers/photos/7623932/
http://blog.cosm.com/2012/05/open-source-airqualityegg-takes-ride-on.html

Upcoming Goals:
May 12th: hack day- working on app
May 16-20: Workshops at EJ Encuentro in Houston,  stop by TxRx to go over current sensor board
Long-term: "Invisible" cities project
Ongoing over May-June 2012: Storyboarding potential use scenarios

Abstract for pitching the project at EcoHackII:

Balloons and kites are a proven delivery mechanism for launching cameras (grassrootsmapping.org) and simple sensors like temperature (http://cires.colorado.edu/). Public Laboratory for Open Technology and Science and the AirQualityEgg/Sensemakers community will prototype a modular, adaptive system that incorporates a single balloon-mounted air quality sensor that can deliver real-time, altitude-specific data. The system will be able to collect vertical atmospheric profiles to shed light on phenomena such as the urban heat island and the CO2 dome. The original concept emerged from conversations with Craig Mills at the UNEP who envisioned a global mediagenic event of sensor-equipped balloons rising up across the planet.

The second step of this project will build on requests from member communities facing industrial pollution. Public Laboratory has been asked to assist with developing diagnostic air quality monitors that can identify the source (according to wind direction and speed) of the particulate matter and chemicals affecting community health. This step will include the incorporation of sensors for VOC, particulate matter, metal halides, and sulfur dioxide in addition to what the Pachube Air Quality Egg project already features, namely: carbon monoxide, nitrogen oxide, temperature and humidity. 

<a href="https://www.flickr.com/photos/recordandremember/7369799408/" title="Air Column Quality and Wind Sensor v01 (1) by Shannon Dosemagen, on Flickr"><img src="https://farm9.staticflickr.com/8022/7369799408_08e2404f22_m.jpg" width="240" height="180" alt="Air Column Quality and Wind Sensor v01 (1)"></a>

Current list of components on the sensor board:

Wind Speed
Hot wire sensor from Modern Device -- as air is blown through the arms, resistance is measured to determine wind speed
http://shop.moderndevice.com/products/wind-sensor

Wind Direction
A tilt-compensated compass requires that the entire unit turn in the direction that the wind is facing (hence tail/weather vein on balloon concept)
LSM303 - http://www.sparkfun.com/products/10703

Barometer
Measures pressure and temperature. Calculates altitude by manually setting the current sea pressure level at the location.
BMP085 - https://www.adafruit.com/products/391

Temperature and Humidity
DHT22 - https://www.adafruit.com/products/385

Optical Dust Sensor
Sharp GP2Y1010AU0F -
http://www.sparkfun.com/products/9689

VOC
MiCS-5121 - http://www.e2v.com/e2v/assets/File/sensors_datasheets/metal_oxide/MICS-5121.pdf

O3
MiCS-2611 - 
http://www.e2v.com/e2v/assets/File/sensors_datasheets/Metal_Oxide/mics-2611.pdf

CO
MiCS-5521 - 
http://www.e2v.com/e2v/assets/File/sensors_datasheets/metal_oxide/MICS-5521.pdf

NO2
MICS-2710 -
http://www.e2v.com/e2v/assets/File/sensors_datasheets/metal_oxide/MICS-2710.pdf

XBee Series 2 Pro
Wireless Radio Frequency (RF) transmitter. Up to 1-mile communication to a receiver, attached to a computer (or potentially another Arduino that is Ethernet connected)
http://www.sparkfun.com/products/10419
with Antenna: http://www.sparkfun.com/products/145