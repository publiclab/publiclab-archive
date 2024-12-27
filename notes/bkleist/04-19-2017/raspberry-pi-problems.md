---
title: "Raspberry Pi problems"

tagnames: 'troubleshooting, raspberry-pi, air-quality, frac-sand, uwec, science-is-frustrating-sometimes, question:raspberry-pi'
author: bkleist
path: /notes/bkleist/04-19-2017/raspberry-pi-problems.md
nid: 14124
uid: 489504

---

![](https://publiclab.org/public/system/images/photos/000/020/167/original/7513051848_9a6ef2feb8_o.jpeg)

# Raspberry Pi problems

by [bkleist](../../../profile/bkleist) | April 19, 2017 19:11

April 19, 2017 19:11 | Tags: [troubleshooting](../tag/troubleshooting), [raspberry-pi](../tag/raspberry-pi), [air-quality](../tag/air-quality), [frac-sand](../tag/frac-sand), [uwec](../tag/uwec), [science-is-frustrating-sometimes](../tag/science-is-frustrating-sometimes), [question:raspberry-pi](../tag/question:raspberry-pi)

----

The University of Wisconsin Eau Claire, Environmental Public Health research team has been monitoring air quality in small Wisconsin towns for years. Most monitoring locations are in close proximity to industrial sand facilities, which are known sources of airborne particulates. Chronic exposure to these particulates can lead to adverse health effects, including lung cancer. 

  
Recently the research team decided to move monitoring equipment to the roof of one of the buildings on the UWEC campus, to monitor air quality during the [Garfield Ave](http://www.uwec.edu/facprojects/garfield.htm) demolition and construction. A dylos DC1100 (I'm 99% sure that is the model) is connected to a Raspberry Pi computer, which is connected to the internet via an ethernet connection. A previously created [website](https://data.sparkfun.com/streams/pwvJ7v7XDdim0MObQaEp) receives the data from the Dylos, and posts the data. 

  
The problem is that the data is not reaching the website. All of the equipment is responsive and seems to be working correctly, and connections are secure. Does anybody have troubleshooting advice for a Raspberry Pi?