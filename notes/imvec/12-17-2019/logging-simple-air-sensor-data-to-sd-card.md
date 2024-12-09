---
title: 'Log Simple Air Sensor data to SD card'
tagnames: arduino, air-quality, dust, pm, air-sensing, seeks:replications, activity:arduino, particulate-matter, datalogging, air-sensors, purpleair, plantower, purple-air, simple-air-sensor, activity:simple-air-sensor, activity:air-sensing, pin:simple-air-sensor, pin:activity:simple-air-sensor, simple-air, simple-air-sensor-data
author: imvec
path: /notes/imvec/12-17-2019/logging-simple-air-sensor-data-to-sd-card.md
nid: 21786
uid: 495038

---

![](https://publiclab.org/public/system/images/photos/000/037/147/original/simpleair-openlog.jpg)

# Log Simple Air Sensor data to SD card

by [imvec](../profile/imvec) December 17, 2019 21:59

December 17, 2019 21:59 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [dust](../tag/dust), [pm](../tag/pm), [air-sensing](../tag/air-sensing), [seeks:replications](../tag/seeks:replications), [activity:arduino](../tag/activity:arduino), [particulate-matter](../tag/particulate-matter), [datalogging](../tag/datalogging), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [plantower](../tag/plantower), [purple-air](../tag/purple-air), [simple-air-sensor](../tag/simple-air-sensor), [activity:simple-air-sensor](../tag/activity:simple-air-sensor), [activity:air-sensing](../tag/activity:air-sensing), [pin:simple-air-sensor](../tag/pin:simple-air-sensor), [pin:activity:simple-air-sensor](../tag/pin:activity:simple-air-sensor), [simple-air](../tag/simple-air), [simple-air-sensor-data](../tag/simple-air-sensor-data)

----

# 

# 

# What we want to do

Logging Simple Air Sensor to SD card so the device can be attached to a Kite or left on the ground for 24 hours close to a polluting area and data later analyzed.

# Our attempt and results

We have modified the original Arduino code to incorporate the Openlog datalogger to the device, a tiny lightweight datalogger easy to program and storing data on a micro SD card.

We have also modified the sampling rate to 10 seconds (10000 miliseconds) so the device will measure 6 times every minute. If you want to change this rate modify line 86 of code: delay(10000).

We have also modified the code to store data on CSV format. The original code prints data with this format:

Concentration Units (standard)

PM 1.0: 308 PM 2.5: 529 PM 10: 665

Concentration Units (environmental)

PM 1.0: 205 PM 2.5: 352 PM 10: 443

Particles \> 0.3um / 0.1L air:48522

Particles \> 0.5um / 0.1L air:15278

Particles \> 1.0um / 0.1L air:3990

Particles \> 2.5um / 0.1L air:468

Particles \> 5.0um / 0.1L air:127

Particles \> 10.0 um / 0.1L air:103

We have simplified it for further use with spreadsheets and graphs. For this purpouse we have erased the description of every single value getting this:

236,388,442,157,257,294,36096,11110,2706,285,26,19,

232,380,433,154,252,288,36096,11110,2706,285,26,19,

Three first values are the Standard Concentration Units.

Next three values are the Environmental Concentration Units.

Last six values of the line are the um / 0.1L air.

This way data can be imported to a spreadsheet and then processed and visualizad using graphics.

# Hook up

Plug the six pins on the Openlog as follow:

Openlog → Arduino

GRN → RST

RX → TX

TX → RX

VCC → 3.3v

GND → GND

BLK → GND

# Programming

To program the Arduino with the code download it, plug the board with the USB cable and unplug the RX pin on the Arduino. This is mandatory or you will get an error message from the Arduino IDE.

Download the code here → [https://h2o.regist.ro/s/wd35NfM3PzJCfkg](https://h2o.regist.ro/s/wd35NfM3PzJCfkg "https://h2o.regist.ro/s/wd35NfM3PzJCfkg")

# Logging data

Connect the device once. Let a blue led light up on the logger and then turn off.  

  
Extract the SD card and insert it on your computer. You'll find a CONFIG.txt you have to edit. Open it up with a text editor and change 9600 for 115200\. Save the file and pug again on the Openlog,   

Now you are ready to use the logger.

  
It creates a single document for every log session.  

  
  
# Questions and next steps

Attach a Real Time Clock to timestamp every measurement.