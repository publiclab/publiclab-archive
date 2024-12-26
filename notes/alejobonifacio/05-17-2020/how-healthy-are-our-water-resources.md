---
title: "EcoSen -> How healthy are our water resources? (In construction)"\ntagnames: 'new, draft, south-america, argentina, activity:new, first-time-poster, zoom:14, place:cordoba-argentina, zoom:13, lat:-31.42046, lon:-64.18886, lat:-31.42002, lon:-64.188652'
author: alejobonifacio
path: /notes/alejobonifacio/05-17-2020/how-healthy-are-our-water-resources.md
nid: 23659
uid: 639376

---

![](https://publiclab.org/public/system/images/photos/000/039/428/original/Logo.png)

# EcoSen -> How healthy are our water resources? (In construction)

by [alejobonifacio](../profile/alejobonifacio) | May 17, 2020 20:17

May 17, 2020 20:17 | Tags: [new](../tag/new), [draft](../tag/draft), [south-america](../tag/south-america), [argentina](../tag/argentina), [activity:new](../tag/activity:new), [first-time-poster](../tag/first-time-poster), [zoom:14](../tag/zoom:14), [place:cordoba-argentina](../tag/place:cordoba-argentina), [zoom:13](../tag/zoom:13), [lat:-31.42046](../tag/lat:-31.42046), [lon:-64.18886](../tag/lon:-64.18886), [lat:-31.42002](../tag/lat:-31.42002), [lon:-64.188652](../tag/lon:-64.188652)

----

## Purpose

We need healthy water resources!

Clean freshwater around the world is scarce and it is becoming more scarce. But we can do something.

We can measure water quality to claim to the government or to the people who is polluting it, so we are going to :

- learn how to measure water quality
- build a data logger for environmental quality
- share our work to raise awareness about caring for clean water

# EcoSen - LoRa Data-Loggers for environmental quality (Español abajo)

Environmental monitoring is essential due to the variety of ways in 
which it is threatened.
Usually recording environmental variables can be carried out by private 
data loggers. These devices, due to their high costs, or being of closed
design, do not allow us to buy in quantity or build them.
Our proposal consists in the design and development of open hardware 
data loggers with LoRaWan technology for communication with devices for 
downloading data. The data loggers will be of two types: aquatic and 
terrestrial. Aquatics will measure relevant data for the determination 
of water quality such as turbidity, dissolved oxygen, conductivity and 
pH. The terrestrial, will measure bee activity variables in hive, 
biological indicators of environmental quality.
These data loggers are based mainly in the [Cave Pearl Proyect](https://thecavepearlproject.org/), but with adaptations to surface waters.

[![](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality/raw/master/Images/image_1.jpg)](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality/blob/master/Images/image_1.jpg)

### [](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality#motivation)

### Motivation

We want to bring to society the passion for monitoring rivers and 
lakes. Also with the plus of learning about open electronic projects 
with possibility of reproduce, modify and customize data loggers. The 
Open technology that we bring is associated with open data repositories 
that will make the environmental information accessible to everyone!

### The first steps, measuring
To begin recording environmental variables is necessary to develop some abilities measuring these. To do that we are gonna start making a [Coqui conductivity sensor](https://publiclab.org/wiki/coqui) of [Public Lab](https://publiclab.org/) website.
<img src="Images/Coqui.jpg" width="100%">
With this task, we are learning to measure environmental variables with an open source hardware

### Second step, logging
To begin logging we are going to made an Arduino Uno based data logger. This data logger is based in one of the [Cave Pearl Projects] (https://thecavepearlproject.org/2015/12/22/arduino-uno-based-data-logger-with-no-soldering/). After complete the datalogger we are going to add a DHT11 temperature and relative humidity module to pin 8 of Arduino Uno. The code.ino is downloadable in the following [link](https://drive.google.com/open?id=17P1dIhY--dl7_n6sXm4gY56F4k5InGaj)or in the Codes folder.
<img src="Images/HumTeDL.jpg" width="100%">

\*\*

## 

## Materials needed

### Specifications & Technical Attributes

The specific attributes of the data logger you build will depend 
slightly on the type of sensors you buy for the system. The numbers 
shown below are for the full version of the data logger that contains 
exactly the parts that we suggest in our build documents and parts list.
Below, you can see which parts could be changed for which spec 
upgrades.

| Attribute | Value [SI] |
|-----------|------------|
| Weight    | 1 [kg]     |
| Footprint | 30x5 [cm]  |
| Battery Capacity | 6800 [mAh] |
| Operating time | 3[months](continual use) |
| Approximate Max wireless communication | 3 [km]     |
| Communication (in this guide) | Arduino IDE (windows, mac, GNU/linux) |
| Cost      | ~ U$S350   |

##### [](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality#table-of-compenents)

##### Table of compenents

| <br> | Quantity | Value U$S | Link |
|------|----------|-----------|------|
| arduino pro mini | 1        | 3.881656805 | [->](https://articulo.mercadolibre.com.ar/MLA-643647762-arduino-pro-mini-33v-8mhz-robotica-atmel-atmega328-mona-_JM "https://articulo.mercadolibre.com.ar/MLA-643647762-arduino-pro-mini-33v-8mhz-robotica-atmel-atmega328-mona-_JM") |
| Arduino mega | 1        | 9.349112426 | <br> |
| temperature sensor ds18b20 | 1        | 4.130177515 | <br> |
| sensor de turbidez | 1        | 15.66863905 | <br> |
| pH sensor | 1        | 29.5      | <br> |
| conductivity sensor | 1        | 79.9      | <br> |
| disolved oxygen sensor | 1        | 169       | <br> |
| real time clock | 1        | 2.970414201 | <br> |
| 18650 battery charger | 1        | 2.911242604 | <br> |
| battery holder | 1        | 1.124260355 | <br> |
| rechargable 18650 batteries | 2        | 3.360946746 | <br> |
| LoRa module | 2        | 15        | <br> |
| Hermetic case | 2        | 8,272189349 | <br> |
| Electronic stuff(jumper wires, terminal boards, soldering tin, etc.) | <br>     | 10        | <br> |

### [](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality#features)

### Features

This data logger is designed to function similarly to the [Cave Pearl Proyect data logger](https://thecavepearlproject.org/category/diy-build-a-pro-mini-logger/) designs:

- **Autonomous:** this data logger has an autonomy of several months
- **Customisable:** Allows to choose what sensor you want for your data logger
- **Wireless communication:** Thanks to the LoRa 
connectivity this device can send a measurements to a server and get 
access to the information wherever you are. This feature is new to the 
Cave Pearl Proyect data logger.

We chose a Arduino pro-mini to be the "brain" of this data logger for
its versatility, accessibility, simplicity, and ability to add and 
upgrade your own modifications. Any method with which you can 
communicate with a arduino pro-mini (bluetooth, WiFi, LoRa, etc) can be 
added to the data logger to get the information from its.

[![](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality/raw/master/Images/ArduinoLoRa.png)](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality/blob/master/Images/ArduinoLoRa.png)

[List of components](https://drive.google.com/open?id=1hyrhMyJMDih4w9r664UP0bz__xZFTRils_V-fsFg26g)

---------

## References

* [project on github](https://github.com/Open-Hardware-Leaders/LoRa-Data-Loggers-for-environmental-quality/blob/master/README.md)