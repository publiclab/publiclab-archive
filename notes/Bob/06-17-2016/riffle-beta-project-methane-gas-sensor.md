---
title: Riffle Beta project - Methane Gas Sensor
tagnames: mapping, air-quality, methane, riffle, gas, gas-sensor, riffle-beta, activity:riffle, upgrade:riffle, oil-and-gas, riffle-examples, gas-leaks
author: Bob
path: /notes/Bob/06-17-2016/riffle-beta-project-methane-gas-sensor.md
nid: 13205
uid: 43743

---

# Riffle Beta project - Methane Gas Sensor

by [Bob](../profile/Bob) June 17, 2016 17:38

June 17, 2016 17:38 | Tags: [mapping](../tag/mapping), [air-quality](../tag/air-quality), [methane](../tag/methane), [riffle](../tag/riffle), [gas](../tag/gas), [gas-sensor](../tag/gas-sensor), [riffle-beta](../tag/riffle-beta), [activity:riffle](../tag/activity:riffle), [upgrade:riffle](../tag/upgrade:riffle), [oil-and-gas](../tag/oil-and-gas), [riffle-examples](../tag/riffle-examples), [gas-leaks](../tag/gas-leaks)

[Leaking natural gas infrastructure](https://en.wikipedia.org/wiki/Gas_leak) is a known problem. A major component of natural gas is methane, which is a greenhouse gas.

I was inspired by recent efforts to map these leaks (https://www.edf.org/climate/methanemaps/city-snapshots) to assemble my own datalogging gas sensor. I've combined a Riffle, a methane gas sensor and a GPS receiver... the Sniffle!

For the past few years, natural gas has been leaking in my own neighborhood. The utility company responsible for repairs has not fixed it, probably because it's not an "explosion hazard". But the natural gas odor is very noticeable.

The goal is to have a handheld unit which can be carried around to areas with known gas leaks, sampling a few times per minute. The data could then be imported into a map to visualize the levels of methane detected. The analog sensor is not calibrated with a known standard, so the logged data is just a range 0-1024. 

My initial attempts to program the Riffle included the analog methane sensor (MQ-4), the built-in real time clock, SD card, and GP-735 GPS module (using the SoftwareSerial Library) but I found the compiled sketch was too large for the ATmega328P. The GPS receiver also includes a timestamp with its latitude and longitude data, so I decided to not use the RTC for this project.

The MQ-4 gas sensor uses a 5V heater element as part of its circuit, which I have wired to the VBAT pin on the 2x7 header. The sensor appears to work OK at this lower voltage. Further testing is needed - a 5V boost circuit could be added. The analog out is wired to A0 on the Riffle. 

The GP-735 GPS module is a TTL-UART device, running at 9600 baud. The Riffle is already using the hardware serial port for the CH340G usb converter, so I setup a software serial port on D3/D2. 

The next steps will be to improve the logging of the GPS signal, to alert when the fix has been acquired or lost, and work on the mapping of the collected data. See update below.

[![Riffle-MQ6-sensor-2.jpg](//i.publiclab.org/system/images/photos/000/016/665/large/Riffle-MQ6-sensor-2.jpg)](//i.publiclab.org/system/images/photos/000/016/665/original/Riffle-MQ6-sensor-2.jpg)

_A secondary project was to design a [3D-printable battery clip](https://github.com/BobStevens/riffle/blob/master/RiffleBattery.stl), to secure the Li-ion battery to the main Riffle board._


[![sniffle-2.jpg](//i.publiclab.org/system/images/photos/000/016/666/large/sniffle-2.jpg)](//i.publiclab.org/system/images/photos/000/016/666/original/sniffle-2.jpg)

_The assembled Sniffle._

Update: I've reworked the Riffle code to improve handling of the GPS data. Originally I was using the [SoftwareSerial](https://www.arduino.cc/en/Reference/SoftwareSerial) and [MicroNMEA](https://github.com/stevemarple/MicroNMEA) libraries, but the GPS signal fixing and data quality was inconsistent. Switching to [NeoSWSerial](https://github.com/SlashDevin/NeoSWSerial) and [TinyGPS++](https://github.com/mikalhart/TinyGPSPlus) libraries was an improvement. This also allowed me to utilize the Riffle RTC again, with the [DS3232RTC](https://github.com/JChristensen/DS3232RTC) library. The RTC timestamp and temperature can now be logged along with the gas sensor readings independent of a valid GPS fix.

I carried the reprogrammed Sniffle on hike to the top of a local summit. This was a test of the sensor in an area of (hopefully) low gas contamination and a test of the GPS module, including altitude data, in an area with a forest canopy. The larger data points are stronger gas readings, the lighter greens are for higher altitudes. It appears the gas sensor was detecting less methane near the summit. At lower elevations the methane readings were slightly higher, perhaps due to nearby wetlands. Wetlands can be a natural source of methane.

[![testhike-20160716-small.png](//i.publiclab.org/system/images/photos/000/017/568/large/testhike-20160716-small.png)](//i.publiclab.org/system/images/photos/000/017/568/original/testhike-20160716-small.png)

_A D3.js scatterplot of GPS and sensor data._

The plot below shows gas sensor readings overlaid on a map in the area of a known gas leak from a buried utility gas pipe. The large red data point is my verification of the sensor functionality by directly exposing it to a source of butane gas. The smaller orange-brown data point is the location of the gas leak as it emerges from the ground through an inspection hole drilled in the pavement by the utility company. The plot was created using D3.js / Leaflet / OpenStreetMap.

[![sensormap.20160716.png](//i.publiclab.org/system/images/photos/000/017/567/large/sensormap.20160716.png)](//i.publiclab.org/system/images/photos/000/017/567/original/sensormap.20160716.png)

_A collection of sensor readings overlayed on a map._

I have a few ideas for next steps with the design of the Sniffle. A tall walking stick might provide a simple frame to attach the components. The Riffle, battery, and GPS mounted at the top of the stick - for the best GPS signal reception and visibility of the status LED. The gas sensor mounted near the lower end of the stick, closer to the source of ground-based leaks, where sensor readings might be strongest. 

Another idea is to add a small OLED display, to provide more detailed feedback than the single blue LED. I will need to determine if there is enough program space / RAM left on the ATmega328P for the OLED.