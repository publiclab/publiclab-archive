---
title: 'An Arduino Based UnderWater Sensor Platform'
tagnames: arduino, education, temperature, pvc, water-quality, water, water-monitoring, water-quality-sensor, underwater, datalogger, conductivity, pressure, logger, barnstar:basic, activity:water-sensors, datalogger-option
author: EdMallon
path: /notes/EdMallon/02-11-2014/an-arduino-based-underwater-sensor-platform.md
nid: 10026
uid: 420750

---

![](https://publiclab.org/public/system/images/photos/000/028/790/original/HydrolabVisitsCavePearlwithTrishBeddows.jpg)

# An Arduino Based UnderWater Sensor Platform

by [EdMallon](../profile/EdMallon) February 11, 2014 16:20

February 11, 2014 16:20 | Tags: [arduino](../tag/arduino), [education](../tag/education), [temperature](../tag/temperature), [pvc](../tag/pvc), [water-quality](../tag/water-quality), [water](../tag/water), [water-monitoring](../tag/water-monitoring), [water-quality-sensor](../tag/water-quality-sensor), [underwater](../tag/underwater), [datalogger](../tag/datalogger), [conductivity](../tag/conductivity), [pressure](../tag/pressure), [logger](../tag/logger), [barnstar:basic](../tag/barnstar:basic), [activity:water-sensors](../tag/activity:water-sensors), [datalogger-option](../tag/datalogger-option)

----

For many years, **the Cave Pearl project** \[[https://thecavepearlproject.org/](https://thecavepearlproject.org/ "https://thecavepearlproject.org/")\] has been proving that open source equipment built with inexpensive pre-made modules can serve the needs of both scientific research and STEM education. We've been deploying Pro Mini based data loggers in underwater cave environments since 2014, and the first publication from that work was released in 2018 \[ [https://www.mdpi.com/1424-8220/18/2/530](https://www.mdpi.com/1424-8220/18/2/530 "https://www.mdpi.com/1424-8220/18/2/530") \] At the start of 2019 there are more than 100 of these units in service with a range of sensor configurations, deployed in four countries.

![image description](/i/29070.png "20180210_CavePearlLogger_ProMiniVariant_640pix.png")

In 2015, Dr. Beddows introduced a simplified version of that research logger to her instrumentation students, and they have been building them enthusiastically ever since. Before that time the courses relied on proprietary 'black box' instruments from commercial suppliers. Now students develop a hypothesis, and then build their own instrument to test it. This has transformed the material into a truly problem based learning experience that challenges the students technically & creatively.  
see \[ [https://thecavepearlproject.org/2020/10/22/pro-mini-classroom-datalogger-2020-update/](https://thecavepearlproject.org/2020/10/22/pro-mini-classroom-datalogger-2020-update/ "https://thecavepearlproject.org/2020/10/22/pro-mini-classroom-datalogger-2020-update/") \]![](/i/41264.jpg "2020_ClassroomLogger-Assembled_640pixw.jpg")

**In 2023 we released an even more simplified 2-Module 'EEprom only' version of the logger that runs for more than a year on the Cr2032 coin cell attached to the RTC module:**  
[https://thecavepearlproject.org/2023/12/01/the-e360-a-10-classroom-data-logger-for-science/](https://thecavepearlproject.org/2023/12/01/the-e360-a-10-classroom-data-logger-for-science/ "https://thecavepearlproject.org/2023/12/01/the-e360-a-10-classroom-data-logger-for-science/")  

The e360 course required different sensors for each lab, so we tweaked the 2022 2-part model with 3D printed rails holding mini breadboard to provide this flexibility. The software has also been streamlined significantly and people shouldn't have too much trouble adding other sensors provided you stick to 1,2,4,8 or16 bytes/record and your modules don't pull more power than the coin cell can provide. 
  
**This research note** was started near the beginning of the project, and now provides a readers-digest version of some of the projects developmental milestones, as we pushed the crude early builds towards multi-year performance, and created a complete DIY system including the electronics, sensor configurations, and underwater enclosures.