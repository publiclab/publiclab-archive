---
nid: 11169
title: Riffle-esque WQ monitoring
path: public/static/wiki/riffle-esque-wq-monitoring.md
uid: 428820
tagnames: water-quality,umass,umass-amherst,riffle,5-college,publiclab-at-amherst-media,publiclab-at-umass,makers-and-amherst-media,amherstcollege,mt.holyoke
---

# Riffle-esque WQ monitoring

This is the main page for the water-quality monitoring team project for the UMass Public Science Maker class. 

## Objective
Create a durable Water Quality monitoring device using an Arduino, which has the capabilities to log data and can withstand inclement weather conditions over a set period of time.

## Mission 
Once the device is made and shows promising results, we will use it to monitor conditions of the Tan Brook, a local watershed that runs through UMass Amherst campus. 

## Background

### Motivation

Surface water quality has direct impacts on human and ecosystem health, and is increasingly impaired from urban runoff, agriculture, industry, and other human activities. Because of the analytical methods required, water-quality monitoring has historically been expensive, and as a result data coverage in time and space has been sparse. Recent improvements in sensor and computing technology have driven down these costs, to the point where active DIY communities have developed around building WQ-monitoring devices. A few such devices are outlined in the *Existing Devices* section below.

### Tan Brook, Amherst, MA 
The Tan Brook Watershed is part of the overall Connecticut River watershed. It runs from its headwaters north of Strong Street and west of Wildwood Cemetery past Wildwood elementary school, Amherst junior high, Amherst Regional High School, and flows north into the Campus Pond at the University of Massachusetts, Amherst. The water continues to flow west towards the Mullins Center before it finally empties into the Mill River.

The brook is essentially an underground system of culverts that convey storm water runoff from town buildings and roads into the UMass Campus Pond. Despite the vast area the Tan Brook watershed covers, being situated underground makes it relatively unheard of and unidentifiable on maps.

Despite their practicality for the implementation of infrastructure, the culverts of Tan Brook have been the cause of increased flooding in the watershed area, increased inflow of pollutants from lawns, impervious surfaces, and an overall degradation of the stream water quality.
 
Residents of Fearing Street, North Pleasant Street and Triangle Street have frequently reported flooded basements Local residents have also reported strong chemical/gasoline odors emanating from the small day-lighted section of the brook located north and south of Fearing Street. Chemical dumping from local tanneries into the stream in the 1820s was commonly practiced, also raises concerns for locals.

Though the Town of Amherst would like to look into the issues of the Tan Brook, it remains low on their priority list. So far students and staff members of the University of Massachusetts have conducted several research projects on the brook, including data collection on water quality. 
 
With our device, we will be able to make monitoring and collecting data easier and, hopefully, cheaper. If our device is a success, we are interested in making more that can be installed at various points in the watershed. 



## Existing Devices
### Riffle
The [Riffle](http://publiclab.org/wiki/riffle) is an open-source conductivity (and temperature?) meter and is a collaborative project from the [OpenWater](http://openwaterproject.io/) PublicLab initiative. The Riffle is currently under [active development](http://publiclab.org/wiki/riffle-dev), and has at least one spinoff version, the riffle-ito. Future additions may include fluorescence, turbidity, and pressure capabilities.

### Riffle-ito
[Don Blair](http://publiclab.org/profile/donblair)'s [Riffle-ito](https://github.com/p-v-o-s/riffle-ito) is a version of the Riffle implemented on Arduino. It is "higher cost and lower functionality" than the Riffle, but is more modifiable thanks to its base hardware. A list of parts with prices is given in [this spreadsheet](https://docs.google.com/spreadsheets/d/1v0O8HmP8-q_kPunHILv5Io3zThpqvPBZZoY3aYnxRDc/edit#gid=0). 


### Our Device
We will begin by implementing the Riffle-ito. If all goes well (and quickly) we can explore adding sensors beyond the thermistor. UV-254 (for organics) and turbidity seem like good candidates. 

## Progress so far

### Connecting thermistor to Arduino (10/7/14)

We applied 5 volts across a 10k resistor and thermistor in series, measured voltage across thermistor only. Then used [Steinhart-Hart equation](http://en.wikipedia.org/wiki/Steinhart%E2%80%93Hart_equation) to convert the thermistor resistance to temperature. This was done by modifying the riffle-ito arduino script from the riffle-ito github repository. 

[thermistor help page for arduino](https://learn.adafruit.com/thermistor/using-a-thermistor)

We got some temperature readings! Thanks to Arduino help from Varun Srinivasan and an old-fashioned physical thermometer, we verified the accuracy (within ~0.1 degrees C) of the thermistor. 

[![thermistor_setup.jpg](https://i.publiclab.org/system/images/photos/000/007/399/medium/thermistor_setup.jpg)](https://i.publiclab.org/system/images/photos/000/007/399/original/thermistor_setup.jpg)


### Measuring electrical resistance using an audio jack (10/8/14)

We replaced the thermistor with an amputated set of headphones, turning the audio jack into a conductivity probe. This idea came straight from the Riffle webpage, and we used [this tutorial on instructables](http://www.instructables.com/id/Replacing-the-jack-on-a-pair-of-headphones/step5/Wireing-it-up/) to figure out how to get the left and right leads into our Arduino breadboard. And it works! It needs calibrating, but that should be straightforward. 


### RE: Measuring electrical resistance using and audio jack (10/15/14) 
We thought perhaps the programming code for conductivity was entered incorrectly. The conductivity rates were very inconsistent and erratic. In the end, we realized this was not due to an issue with the code, but with the audio jack itself. The probe was causing the water to decompose into oxygen and hydrogen gas (electrolysis), hence increasing conductivity of the water. Now, we plan to use an alternate DIY  conductivity probe, this time following a method similar to this: http://publiclab.org/notes/donblair/09-30-2014/making-a-diy-conductivity-probe-from-a-water-bottle-and-metal-screws



### Meeting to discuss current research and data on Tan Brook Watershed (10/16/14)
I met with Dr. Bob Smith, postdoctoral research associate of the Massachusetts Cooperative Fish and Wildlife Research Unit and the Department of Environmental Conservation at UMass Amherst, who has done extensive work with the Tan Brook Watershed and other watersheds in the area. We discussed current and previous projects of students related to the Tan Brook, and reviewed preexisting data on water quality (conductivity, pH, temperature, dissolved oxygen, metals…)

We concluded that a device which has the ability to continuously log data on conductivity and temperature will be very beneficial to ongoing research of the watershed. Additionally, a device that can measure stream flow will also provide useful data. "Flow is a function of water volume and velocity. It is important because of its impact on water quality and on the living organisms and habitats in the stream. Large, swiftly flowing rivers can receive pollution discharges and be little affected, whereas small streams have less capacity to dilute and degrade wastes" (EPA, Water: Monitoring & Assessment).  

He highlighted specific zones of the brook which may give more significant results, i.e.) day lighted areas, the points before and after water enters piping systems, storm water runoff sites. Provided that we make more than one device, he also suggested the idea of comparing water quality from the Tan Brook Watershed with that of the nearby watersheds, by simultaneously logging data from each watershed.   




### Next steps: 

1. modify circuit to calculate temperature and conductance simultaneously
2. Calibrate conductivity meter to conductivity standards, adjust for temperature 
3. Obtain housing (PVC pipe?)
4. Figure out data logging
5. Add functionality to measure turbidity (?) using photoresistor or photodiode and LED
 - On this topic, see [here](http://aem.asm.org/content/44/6/1476.full.pdf) and [here](http://biodesign.cc/2013/03/19/whats-turbidity-got-to-do-with-it/)


### Notes and findings
#### Exploring riffle-ito github repository

Downloaded Cadsoft Eagle to view schematic files

hardware/* directory:

- CSVs
 - datalog4.csv: apparently containing output WQ data
 - riffleito-CTD-REVA.csv, riffleito-KAP-REVB.csv, riffleito-REVC.csv, riffleito-REVD-partslist.csv: unclear (apparently last is a parts list); strange formatting
- reference to *555 circuits*--apparently reference to a timer (see [wikipedia article](http://en.wikipedia.org/wiki/555_timer_IC))
- .brd, .sch files showing various circuit boards, most don't appear to be arduinos. 

software/* directory

- single .ino file: dwbThermistorRtcSD1LowPow6.ino
 - Well-documented, not taking time to read through now, but should later.
- otherwise, only library files. Hopefully I don't need to learn much about these to use them.

#### Resources online
Found a Riffle presentation from pvos github group. (riffleito/riffle-present) Lots of good info in it. 

Also worth reading through [issues](https://github.com/p-v-o-s/riffle-ito/issues) on riffle-ito github page
- (in link #24 on conductivity measurements) a link to [this article on *Conductivity Theory and Practice*](http://www.analytical-chemistry.uoc.gr/files/items/6/618/agwgimometria_2.pdf)
- (in [link #22](https://github.com/p-v-o-s/riffle-ito/issues/22)) "The ~ 18 mm width of the riffle-ito fits snugly inside 3/4" Schedule 40 PVC pipe. There are simple 'screw plugs' that can be attached to the ends of the PVC, and which would allow for the batteries / device to easily be removed -- for now, I was only able to source the rounded end-caps. Ideal configuration might be to have one of these end-caps on one end (with holes drilled for temp and conductivity probes), and the screw-cap on the other."

Data Logging Options
SD Card?
Tutorial on adding an SD card to the arduino for data logging: http://computers.tutsplus.com/tutorials/how-to-add-an-sd-card-data-logger-to-an-arduino-project--cms-21713
-SD cards are cheap options for logging data, and have flexible formatting options. They are also relatively easy to install and replace when worn out.
-Downsides: they might not hold up well with a lot of exposure to moisture and they take up the usage of a significant amount of pins on the micro-controller. 

Wifi Datalogger? https://learn.adafruit.com/low-power-wifi-datalogging/overview
