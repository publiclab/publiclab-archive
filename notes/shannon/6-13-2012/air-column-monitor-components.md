---
title: "Air column monitor components"\ntagnames: 'air-column-monitor'
author: Shannon
path: /notes/shannon/6-13-2012/air-column-monitor-components.md
nid: 2469
uid: 9

---

# Air column monitor components

by [Shannon](../profile/Shannon) | June 13, 2012 10:52

June 13, 2012 10:52 | Tags: [air-column-monitor](../tag/air-column-monitor)

----

Current listing of the air column monitor sensor board:

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