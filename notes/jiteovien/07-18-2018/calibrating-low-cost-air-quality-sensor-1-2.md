---
title: "Calibrating low cost air quality sensor (1/2)"

tagnames: 'arduino, calibration, air-quality, pollution, dustduino, dust, autodesk, location:blurred, air-sensors, purpleair, lat:-32, lon:-68, purple-air, zoom:6, place:argentina'
author: jiteovien
path: /notes/jiteovien/07-18-2018/calibrating-low-cost-air-quality-sensor-1-2.md
nid: 16745
uid: 540008

cids: 20161,20165,20171,20244

---

![](https://publiclab.org/public/system/images/photos/000/025/744/original/aq.jpg)

# Calibrating low cost air quality sensor (1/2)

by [jiteovien](../../../profile/jiteovien) | July 18, 2018 18:57

July 18, 2018 18:57 | Tags: [arduino](../tag/arduino), [calibration](../tag/calibration), [air-quality](../tag/air-quality), [pollution](../tag/pollution), [dustduino](../tag/dustduino), [dust](../tag/dust), [autodesk](../tag/autodesk), [location:blurred](../tag/location:blurred), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [lat:-32](../tag/lat:-32), [lon:-68](../tag/lon:-68), [purple-air](../tag/purple-air), [zoom:6](../tag/zoom:6), [place:argentina](../tag/place:argentina)

----

Hello, my name is Ufuoma and I am interning with Public Lab this summer from the Providence office. I wanted to share my summer project on air quality with the hope of getting feedback and/or collaborators and also to learn about related work!

# Literature Review:

Past contributors have written great posts discussing the pressing environmental and health impacts of deteriorating air quality as well as the financial barrier (upwards of $14,000) to producing widespread data compliant with Federal Reference Methods (FRM). see @Schroyer's [post](https://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino) introducing the Dustduino). Because of this expense, cities may not have enough FRM sensors to create an adequate representation of the air quality in a location. For example, Dallas, TX, population of 1.3 million and land mass of 385 square miles has just 5 of these sensors ([source](https://tceq.maps.arcgis.com/apps/webappviewer/index.html?id=ab6f85198bda483a997a6956a8486539)). In comparison, Providence, RI, population of only 180,000, land mass 21 square miles, has 4 of these sensors ([source](http://www.dem.ri.gov/programs/air/air-monitoring.php)). As you can see, the deployment of these sensors are neither proportional nor standardized across the United States.

Schroyer discusses the ever more popular method of using low cost (less than $200) sensors to increase the spatial density of air quality data. There has also been great work analyzing the quality and limitations of low cost methods built around the Shinyei PPD42NS particulate matter (PM) sensor that the DustDuino uses (see @Willie 's [post](https://publiclab.org/notes/Willie/03-06-2015/dustduino-data-quality) that summarizes academic studies performed in [Berkeley](https://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf) and [Xi'an](https://www.sciencedirect.com/science/article/pii/S0269749115000160)). The results of these studies were that the sensor shows promise when calibrated and at longer intervals of at least 1 hour or more.

# Objective:

My objectives for this project are two-fold. In the Berkeley paper's 'conclusion and future work' section, they discuss how the work needs to be extended in terms of ease of use so that this method of calibrating low cost sensors can be more readily adopted by community scientists with varying levels of technical expertise. So my first objective is to develop _readable_ and _repeatable_ protocols for gathering, organizing, calibrating and interpreting air quality measurements from low cost sensors.

My second goal was a method inspired by a Columbia researcher, Franziska Landes, who was [studying soil quality](http://www.crainsnewyork.com/article/20171011/HEALTH_CARE/171019981/columbia-university-graduate-student-finds-unsafe-levels-of-lead-in-greenpoint-brooklyn-backyards) in New York City for the presence of lead. She showed two sets of data. The first was generated independently of the neighborhood community members and found just 14% lead presence exceeding federal standards in their samples. The second data showed samples at locations where parents in the community said their kids play - these samples returned 85% lead presence exceeding federal standards. My second objective is to use a similar framework of community inclusion in my approach to identify neglected sample areas. Federal entities choose the locations of these monitors in what seems to be a randomized way but it is important to gather data that can be put into context for different communities. I plan to work with organizations and communities here in Providence to gather data that is meaningful and interpretable to them.

# Deliverables:

Projects like [PurpleAir](https://www.purpleair.com/) are helpful for this idea of putting communities in charge of their science and data collection. However, there have been multiple reports of PurpleAir drastically reporting 36-48% higher pollution levels than FRM sensors ([source](https://www.wunderground.com/cat6/purple-airs-250-air-pollution-monitor-gives-government-equipment-run-money)). I want to work to reduce the cloud of doubt that we have about our data when using low cost sensors like this.

By the end of this project I will have

(1) Developed relationships with local communities and organizations

(2) Published an open source and interpretable method for deploying and calibrating a low cost sensor (such as DustDuino or PurpleAir).

(3) Published an open source method for data visualization

(4) Contributed to the body of knowledge about the viability and limitations of low cost sensors