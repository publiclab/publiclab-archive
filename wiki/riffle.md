---
nid: 10000
title: Riffle: an Open Source Water Monitoring Approach
path: public/static/wiki/riffle.md
uid: 43651
tagnames: agriculture,pvos,mining,water-quality,water,water-monitoring,water-quality-sensor,fracking,tool,datalogger,riffle,list:plots-waterquality,open-water,data-logging,activities:riffle,upgrades:riffle,method,chemicals,oil-and-gas,electronic-sensors,parent:data-logging,project:water-quality
---

# Riffle: an Open Source Water Monitoring Approach

The **Riffle** is a collection of designs that take an open source approach to water monitoring, with the intent of making gathering water information easier and more accessible. It is part of Public Lab's [Open Water Project](https://publiclab.org/wiki/open-water). (Lead image by @cfastie)

For an overview of the design philosophy behind the Riffle, and **what constraints and uses it was aimed at**, see [this wiki page](https://publiclab.org/wiki/riffle_design_philosophy).

Public Lab has supported development of an [Arduino](https://www.arduino.cc)-compatible [Riffle version - a datalogger enclosed in a water bottle](https://github.com/OpenWaterProject/riffle_328).  This is great, because the Arduino community is huge, and lots of knowledge and troubleshooting resources are now applicable to the Riffle project. (The first **Riffle** design was an [ARM-based datalogger board enclosed in PVC](https://github.com/bgamari/riffle))

****

# Riffle Water Monitor Designs

By now, several instrument designs have been constructed around the **Riffle**, some of which of are described in an array of Github repositories:

- [Openwaterproject](https://github.com/OpenWaterProject) -- the main organization on github
- [riffle_328](https://github.com/OpenWaterProject/riffle_328) -- hardware designs, instructions and software for getting started with the Riffle_328 datalogger
- [riffle_328-conductivity](https://github.com/OpenWaterProject/riffle_328-conductivity) -- Design considerations around conductivity
- [riffle_328-depth](https://github.com/OpenWaterProject/riffle_328-depth) -- Depth measurement circuit prototype
- [riffle_328-turbidity](https://github.com/OpenWaterProject/riffle_328-turbidity) -- Turbidity sensor prototype
- [riffle_328-thermistor](https://github.com/OpenWaterProject/riffle_328-thermistor) -- Connecting a thermistor to a Riffle
- [riffle_328-i2c](https://github.com/OpenWaterProject/riffle_328-i2c) -- Connecting i2c sensors to a Riffle
- [riffle_328-one-wire](https://github.com/OpenWaterProject/riffle_328-one-wire) -- Connecting one-wire sensors to a Riffle

# Sensor Designs

We've started to summarize some of the approaches to sensing water parameters like conductivity and turbidity:

- [Sensing conductivity](https://publiclab.org/wiki/conductivity_sensing)
- [Sensing turbidity](https://publiclab.org/wiki/turbidity_sensing)

# Activities

Here are some activities the Public Lab community has conducted using the Riffle

[activities:riffle]


# Project Status

2017: A second small order of Riffle_328 boards was shipped on May 30th, and is on its way to the Public Lab kits department in Portland, Oregon. From there it will be sent to Public Lab community members who ordered them. The Riffle was available for pre-order until March 17.

https://publiclab.org/questions/warren/06-12-2017/what-s-the-battery-life-of-the-nano-data-logger#answer-comment-16862

2016: A small order of Riffle_328 boards arrived late April 2016, and were sent to Public Lab community members as a way of testing the design and informing further development. 

Projects using this riffle can be found at https://publiclab.org/tag/riffle and https://publiclab.org/tag/riffle-beta



# How to get a Riffle Datalogger

The Riffle is open source, so if Public Lab is not currently offering it for sale, anyone can take the designs above to a PCB fabricator and have one made, copy and remix the design, or investigate other dataloggers.

# Riffle Alternatives

The following dataloggers also have a real time clock and log to a micro SD card as the Riffle does. All of them are based on Arduino and will run more or less the same sketches. These are all open source hardware.

1. [EnviroDIY Mayfly Logger](https://envirodiy.org/mayfly/). Designed at the Stroud Water Research Center and commercially available through Amazon but currently out of stock (as of Feb 2017).
2. [Adafruit Feather M0](https://www.adafruit.com/products/2772) and [Adalogger FeatherWing RTC + SD Add-on](https://www.adafruit.com/products/2922). These are two commercial products which snap together.
3. [Cave Pearl Project logger](https://hackaday.io/project/6961-the-cave-pearl-project). Ed Mallon's design for a DIY data logger made from very inexpensive clone components (Arduino Pro Mini, SD card board, RTC board). Requires soldering and care.
4. see more open source data loggers collected on the [Data Logging page](/wiki/data-logging)

****

## Questions

[questions:riffle]

****

###All updates related to the Riffle

[notes:riffle]

****

##Related Questions

Since the Riffle is Arduino-compatible, here are also some Q&A for Arduinos in general:

[questions:arduino]

The Riffle is also a part of a larger area on data logging. Here are some Q&A asked more generally:

[questions:data_logging]

[questions:nano-data-logger]