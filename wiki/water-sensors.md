---
title: "Water Sensors"

tagnames: 'water-quality-monitoring, hydrogen-sulfide, sensors, water-quality, water, water-quality-sensor, method, water-sensors, sidebar:none, parent:water-quality, parent:sensors'
author: gretchengehrke
path: /wiki/water-sensors.md
nid: 14596
uid: 430549
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/020/999/original/IMG_20170703_105839_020_2.jpg)

# Water Sensors

by [Nova](/profile/Nova), [warren](/profile/warren), [gilbert](/profile/gilbert), [stevie](/profile/stevie), [gretchengehrke](/profile/gretchengehrke), [liz](/profile/liz), [shanlter](/profile/shanlter)

June 30, 2017 21:34 | Tags: [water-quality-monitoring](/tag/water-quality-monitoring), [hydrogen-sulfide](/tag/hydrogen-sulfide), [sensors](/tag/sensors), [water-quality](/tag/water-quality), [water](/tag/water), [water-quality-sensor](/tag/water-quality-sensor), [method](/tag/method), [water-sensors](/tag/water-sensors), [sidebar:none](/tag/sidebar:none), [parent:water-quality](/tag/parent:water-quality), [parent:sensors](/tag/parent:sensors)

----

Many people interested in measuring various **water quality parameters** that are relevant to environmental health in low-cost and accessible ways. Many have been working on low-cost, open-source sensors for water chemistry and physical properties, and there are also several commercially available water sensors and analog tools that can measure relevant water quality parameters.


[![IMG_20171205_145207.jpg](https://publiclab.org/system/images/photos/000/022/802/large/IMG_20171205_145207.jpg)](https://publiclab.org/system/images/photos/000/022/802/original/IMG_20171205_145207.jpg)



### Overview

Often, electronic environmental sensors are just one part of a system that includes:

* a [data logger](/wiki/data-logging)
* some kind of [water and weather-proof enclosure](/wiki/sensor-enclosures)
* a **sensor of some kind** -- see [Sensors](#Sensors), below

And we also have to consider:

* how to **configure the logging program** & **[connect to the chosen sensors](/notes/warren/12-06-2017/help-document-how-to-connect-different-sensors-to-a-data-logger)**
* how to [download data](/wiki/data-logging#Download)
* how to [visualize](/tag/visualization) data
* how to [design experiments](/tag/experimental-design) using these techniques

It's hard work writing good documentation. Let's team up and share as much of the above as possible -- many of these steps are either not device-specific, or are at least very helpful **if written in a way that supports use across projects**. 

****

[![coqui.png](https://publiclab.org/system/images/photos/000/022/801/large/coqui.png)](https://publiclab.org/system/images/photos/000/022/801/original/coqui.png)

## Getting started

If you have never used an electronic water sensor before, try the Coqui project, which is specifically designed for folks who are just starting out. 

[Build a Coqui](/wiki/coqui) - a simple device to read a sensor via an audible tone. 

The Coqui is also a stellar example of how to document a project.  (above photo by @akshaya)

****

## Choosing Sensors

Often the first step is to **look for a sensor for what you're hoping to measure.** Below we're collecting info on different kinds of water quality sensors, and their:

* cost
* sensitivity/accuracy
* links and documentation

Can you afford a sensor? Can it detect what you're looking for? Where can you learn more about it?

And here's a longer collection of many different sensors ([add to this list here!](/notes/warren/12-06-2017/help-collect-environmental-sensors-probes-on-a-shared-list)):

<iframe style="border: 0; width:100%; height: 1000px; overflow: auto;" src="https://docs.google.com/spreadsheets/d/1UwjRqU8kHTwEcnDdO2Zxkr8zkFkaGfyePJ-cdnxJzw0/pubhtml?widget=true&amp;headers=false"></iframe>

See and [edit the full spreadsheet here](https://docs.google.com/spreadsheets/d/1UwjRqU8kHTwEcnDdO2Zxkr8zkFkaGfyePJ-cdnxJzw0/edit?usp=sharing)

### To be added

* See this [great list of sensors from the KnowFlow](/questions/rockets/07-10-2017/how-accurate-is-the-probe)
* [the Wheestat](/wiki/wheestat-user-s-manual) can be plugged into a datalogger
* we should go through the above list and see which are Arduino-compatible - add to the "Interface" column
* Figaro electronic #hydrogen-sulfide sensors [here](/notes/warren/9-19-2011/prototype-h2s-sensor)

Are there others you're interested in? Please add them to the list here and to the linked Google Doc! (below are some not listed above yet)

- transparency
- chemical oxygen demand - COD
- phosphate
- total dissolved solids - TDS
- Hardness
- Lead
- bacteria
- fluoride

heavy metal

[prompt:text:ie temperature]


****

## Questions

[water-sensors](/tag/question:water-sensors)


****

### Connecting sensors

Most of the [data loggers](/wiki/data-logging) on this site are Arduino-based (#arduino) while some are Raspberry Pi-based (#raspberry-pi). 

Vernier has a lot of good resources on connecting their Arduino-compatible sensors, with example code: https://www.vernier.com/engineering/arduino/

As we build out resources for connecting different sensors or different types of sensor interfaces (i2c, analog, etc), let's think about how best to list those guides and support materials here.

Help add activities below for connecting specific sensors to [different data loggers](/wiki/data-logging), and pitch in on [researching how these connect here](/notes/warren/12-06-2017/help-document-how-to-connect-different-sensors-to-a-data-logger).

[connecting-sensors](/tag/activity:connecting-sensors)

****

### Analog methods

Even though this wiki page is labeled "water sensors," the most accessible modes of measuring water quality parameters are often **analog, non-digital methods** where you directly observe water (e.g. using a secchi disk to assess turbidity) or collect a sample and test it with a visual method (e.g. color-change pH strips). Several analog tools are included in the spreadsheet, and please add more! 

### Hybrid approaches and enclosures

In some cases, it may be possible to couple a commercially available **probe** sensor with a DIY **data logger** (such as the Riffle, https://publiclab.org/riffle) and an water-tight **enclosure** to create a lower-cost deployable sensor. Deployable sensors can be extremely useful for long-term monitoring, monitoring in places that are difficult to access frequently, or to document fluctuations in water chemistry with greater temporal resolution. 

