---
title: 'Can open source beat this?'
tagnames: open-hardware, temperature, alaska, sensors, light, microcontroller
author: cfastie
path: /notes/cfastie/07-20-2014/can-open-source-beat-this.md
nid: 10939
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/005/405/original/Den1_0494.jpg)

# Can open source beat this?

by [cfastie](../profile/cfastie) July 20, 2014 18:47

July 20, 2014 18:47 | Tags: [open-hardware](../tag/open-hardware), [temperature](../tag/temperature), [alaska](../tag/alaska), [sensors](../tag/sensors), [light](../tag/light), [microcontroller](../tag/microcontroller)

----

Last summer, Jeremy Littell of the US Department of Interior Alaska Climate Science Center installed some environmental sensors at four of our study sites at alpine treeline in interior Alaska.  Earlier this month we met Jeremy at our sites south of the Alaska Range as he retrieved and replaced the sensors and placed additional sensors at another treeline site.  The sensors record only temperature and light, but strategic placement allows inference of critical environmental variables which could influence the success of tree seedlings. Our 15 year study at these sites suggests that white spruce (*Picea glauca*) is invading alpine tundra, but we have no local data to link this process to climate change.   
.  
[![Den1_0477.jpg](https://i.publiclab.org/system/images/photos/000/005/406/medium/Den1_0477.jpg)](https://i.publiclab.org/system/images/photos/000/005/406/original/Den1_0477.jpg)  
*LogTag temperature loggers (upper right) and the parts to build DIY shelters for recording air temperature.*  
.  
[![Den1_0469.jpg](https://i.publiclab.org/system/images/photos/000/005/407/medium/Den1_0469.jpg)](https://i.publiclab.org/system/images/photos/000/005/407/original/Den1_0469.jpg)  
*HOBO Pendant temperature and light loggers. These were placed on the ground to record surface temperature and light levels for a year.*  
.  
The sensors are proprietary devices and require proprietary hardware and software to collect and read the data. If the current field tests are successful, Jeremy will want to deploy hundreds of these sensors in Alaska. I suggested that some clever members of the Public Lab community might be able to devise an open alternative which could save money and allow better replication, reliability, and data accessibility.    
.  
[![Littell_Plot10WTC2k.jpg](https://i.publiclab.org/system/images/photos/000/005/418/large/Littell_Plot10WTC2k.jpg)](https://i.publiclab.org/system/images/photos/000/005/418/original/Littell_Plot10WTC2k.jpg)  
*A year’s worth of data from three temperature and two light sensors at a single location at treeline. Three temperature sensors recorded a) air temperature at two meters above ground, b) ground surface temperature, and c) soil temperature several cm below the surface. Light level was recorded at the ground surface.  When light level is zero (November into April), the ground is snow covered. Soil temperature (red line) stays right below zero when the ground is snow covered.  A late January thaw did not melt all the snow (no light was recorded) or thaw the soil. Surface frost occurred through April and May, and had started in late August.*  
.  
Jeremy’s sensors record data at least every hour for a full year. The sensor data allow inference about the beginning and end of the winter snowpack, the period of surface frost, the freezing and thawing of soil, in addition to diurnal and seasonal patterns of temperature.  
.  
[![Den1_0472.jpg](https://i.publiclab.org/system/images/photos/000/005/408/medium/Den1_0472.jpg)](https://i.publiclab.org/system/images/photos/000/005/408/original/Den1_0472.jpg)  
*The HOBO IR data transfer device ($70). The LogTag loggers also require a proprietary data transfer docking station ($50).*  
.  
[![Den1_0483.jpg](https://i.publiclab.org/system/images/photos/000/005/409/medium/Den1_0483.jpg)](https://i.publiclab.org/system/images/photos/000/005/409/original/Den1_0483.jpg)  
*Jeremy assembling the shelters for the LogTag loggers which will record air temperature in a tree.*  
.  
[![Den1_0517.jpg](https://i.publiclab.org/system/images/photos/000/005/410/medium/Den1_0517.jpg)](https://i.publiclab.org/system/images/photos/000/005/410/original/Den1_0517.jpg)  
*A LogTag logger in a waterproof case for recording soil temperature for a year.*  
.  
Generally only one sensor is deployed for each measurement so there is no redundancy or replication at each location, although four replicate locations are instrumented at each site along a 0.5 km transect.    

The temperature sensors are [MicroDAQ LogTags]( http://www.microdaq.com/logtag/trix-8.php). These record up to 8,000 readings with a range of -40° to 85°C and cost $25 for 30 or more units. The batteries can last three years, but are not replaceable.   
.  
[![Den1_0510.jpg](https://i.publiclab.org/system/images/photos/000/005/411/medium/Den1_0510.jpg)](https://i.publiclab.org/system/images/photos/000/005/411/original/Den1_0510.jpg)  
*A lone tree near treeline is chosen and the air temperature logger is hung 2 m above the ground on the north side.*  
.  
[![Den1_0543.jpg](https://i.publiclab.org/system/images/photos/000/005/412/medium/Den1_0543.jpg)](https://i.publiclab.org/system/images/photos/000/005/412/original/Den1_0543.jpg)  
*The air temperature logger in place.*  
.  
The light sensors are [HOBO Pendant loggers]( http://www.onsetcomp.com/products/data-loggers/ua-002-64) which record temperature and light.  These record up to 28,000 combined light and temperature readings and cost $64 apiece. Replaceable coin cell batteries last a year.  
.  
[![Den1_0556.jpg](https://i.publiclab.org/system/images/photos/000/005/413/medium/Den1_0556.jpg)](https://i.publiclab.org/system/images/photos/000/005/413/original/Den1_0556.jpg)  
*A spruce seedling near the larger tree is chosen as the site of loggers for surface temperature, soil temperature, and surface light level.*  
.  
[![Den1_0534.jpg](https://i.publiclab.org/system/images/photos/000/005/414/medium/Den1_0534.jpg)](https://i.publiclab.org/system/images/photos/000/005/414/original/Den1_0534.jpg)  
*A LogTag in its case is buried several cm under the moss, and a HOBO Pendant temperature and light logger is placed on the soil surface near the spruce seedling.*  
.  
[![Den1_0536.jpg](https://i.publiclab.org/system/images/photos/000/005/415/medium/Den1_0536.jpg)](https://i.publiclab.org/system/images/photos/000/005/415/original/Den1_0536.jpg)  
*The HOBO Pendant records temperature and light at the ground surface for a year.*   
.  

[![30_sensors.jpg](https://i.publiclab.org/system/images/photos/000/005/416/large/30_sensors.jpg)](https://i.publiclab.org/system/images/photos/000/005/416/original/30_sensors.jpg)  
*Possible configuration of replicate and redundant sensors with central microcontroller. The microcontroller requires a battery and SD card for storage.*  
.  
One approach to reducing cost and improving replication and reliability might be to use a microcontroller circuit to record the data from multiple sensors.  Instead of recording air, surface, and soil temperature with three separate devices, a single controller could be wired to all the sensors. The sensors themselves are inexpensive ($1 to $3?), so duplicate and replicate sensors could be included.  For each station, there might be three duplicate air temperature sensors, and three replicate nearby substations each with three duplicate surface temperature sensors, three duplicate soil temperature sensors, and three duplicate light sensors. The 30 sensors might cost a total of $50 to $100, and the controller might be less than $20. Lots of cables would be required to connect the controller to the substations 10 m away.  So for less than the cost of the three sensors now being used ($114) it might be possible to increase both replication (three substations instead of one) and duplication (three of each type of sensor at each substation instead of one).  No proprietary docking station would be required to collect the data, which could be recorded to a micro SD card (do those work at -40° C?).   

###Questions and next steps
Assuming that 50 of these stations would be needed, and each station includes 21 temperature sensors and 9 light sensors, this would require 1050 temperature sensors and 450 light sensors.  

Is my estimate of the price for sensors in the right ballpark? The precision of the sensors has to be about 1° C, and the range of the air temperature sensor has to be -40° C to 40° C.  

If the substations are 15 m from the microcontroller, what type of cable is required to carry the signal from nine sensors?  

Is there an existing microcontroller capable of doing the logging? Would it be  cheaper to design and manufacture 50 custom controllers?  
