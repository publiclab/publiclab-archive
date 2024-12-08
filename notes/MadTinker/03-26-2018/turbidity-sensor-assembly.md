---
title: Turbidity Sensor Assembly
tagnames: water-quality, turbidity, datalogger, data-logging, mini-pearl
author: MadTinker
path: /notes/MadTinker/03-26-2018/turbidity-sensor-assembly.md
nid: 16019
uid: 461206

---

# Turbidity Sensor Assembly

by [MadTinker](../profile/MadTinker) March 26, 2018 17:44

March 26, 2018 17:44 | Tags: [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [mini-pearl](../tag/mini-pearl)

**Abstract**

This research note documents the build and deployment of a turbidity sensor with a data logger. The data logger is a 5V Arduino pro-mini. The turbidity sensor is the [DFRobot SEN0189](https://www.dfrobot.com/product-1394.html). The unit was assembled and deployed in conjunction with the Electrical Conductivity (Total Dissolved Solids) sensor and data logger described [here](https://publiclab.org/n/15996). The goal is to get both of these in the stream before construction starts up-stream on a new flume and also before spring run-off along Willow Creek in Creede, CO.

**Data Logger**

Construction of the data logger is pretty straightforward. The only difference from the the other data loggers common at Public Lab (e.g. Cave Pearl or Mini-Pearl) is that this one is required to be 5V due to the power requirements for the turbidity sensor. This means a change in the Arduino processor from 3.3V to 5V and an upgraded microUSB card that handles both 3.3V and 5V. You can follow instructions provided for the Arduino pro-mini 3.3V provided by either [Ed Mallon](https://thecavepearlproject.org/how-to-build-an-arduino-data-logger/) (Cave Pearl) or [Chris Fastie](https://publiclab.org/wiki/mini-pearl-logger) @cfastie (mini-pearl).

\[Will add Fritzing picture of new connections when I learn Fritzing\]

**Parts List**

This is just a representative sample of sources. A little bit of searching on the net will likely result in a variation of sources and prices.

[Micro SD Storage Board SPI for Arduino](https://www.ebay.com/itm/381812428290) ($0.77)

[DS3231 RTC/AT24C32 eeprom](https://www.ebay.com/itm/DS3231-AT24C32-IIC-Precision-Real-Time-Clock-RTC-Memory-Module-for-Arduino/121936579559?epid=10014451982&hash=item1c63fc8be7:g:7V8AAOSwdJ9aOFnD) ($1.18) Note [power saving modifications suggested here](https://thecavepearlproject.org/2014/05/21/using-a-cheap-3-ds3231-rtc-at24c32-eeprom-from-ebay/)

[Arduino pro-mini 5V](https://www.miniarduino.com/product/5pcs-atmega328p-arduino-pro-mini-module-5v-16mhz-1pcs-ft232rl-ftdi-usb-ttl-serial-adapter/) ($3.00) This package contains the FTDI Adapter

[FT232RL FTDI to TTL Serial Adapter](https://www.ebay.com/itm/FT232RL-3-3V-5-5V-FTDI-USB-to-TTL-Serial-Adapter-Module-for-Arduino-Mini-Port-/381374421597) ($1.78)

[DFRobot SEN0189](https://www.dfrobot.com/product-1394.html) Turbidity sensor ($9.90)

[Battery pack](https://www.ledsupply.com/accessories/aa-battery-holder-switch-leads) ($1.99)

4x AA ($2.50)

[CR2032 ](https://www.digikey.com/product-detail/en/panasonic-bsg/CR2032/P189-ND/31939)[coin battery for RTC](https://www.digikey.com/product-detail/en/panasonic-bsg/CR2032/P189-ND/31939) ($0.29)

Misc pipe, coupling, etc for packaging ($12.50)

![image description](https://publiclab.org/system/images/photos/000/024/361/large/IMG_8553.jpg "IMG_8553.jpg") ![image description](https://publiclab.org/system/images/photos/000/024/362/large/IMG_8554.jpg "IMG_8554.jpg")

**Turbidity Sensor**

Inside of Turbidity Sensor: mostly a couple of LEDs. Definitely not waterproof - per the warning by DFRobot.

![image description](https://publiclab.org/system/images/photos/000/024/291/large/IMG_8537.jpg "IMG_8537.jpg") ![image description](https://publiclab.org/system/images/photos/000/024/316/large/IMG_8550.jpg "IMG_8550.jpg")

![image description](https://publiclab.org/system/images/photos/000/024/317/large/IMG_8549.jpg "IMG_8549.jpg")

The sensor was removed from its shell and the outer shell was epoxied into a 3" pipe plug. A small dab of epoxy was used to hold the sensor to the inside of the outer shell. (The black outer cover would not fit into the recess.)

Software coding was easy, but hardware is currently being contentious ...

Status 4/14: Still waiting on response from [DFRobots](https://www.dfrobot.com/) on lack of analog voltage response from sensor.

Status 4/15: Problem solved and ready for initial deployment

![image description](https://publiclab.org/system/images/photos/000/024/596/large/IMG_8593.jpg "IMG_8593.jpg") ![image description](https://publiclab.org/system/images/photos/000/024/470/large/IMG_8582.jpg "IMG_8582.jpg")

  
Some might recognize the small circuit board on the bottom right as containing the start of Coqui-type electrical conductivity circuit for a STEM class on water quality being planned. Waiting on a speaker...

**Initial Testing**

TBD **  
**

**Deployment**

TBD

**Preliminary Data Analysis**

TBD