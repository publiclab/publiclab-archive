---
title: "Measuring particulate matter from an airplane"\ntagnames: 'particulate-sensing, quebec, canada, dustduino, dust-monitoring, espacelab, first-time-poster'
author: bdebaque
path: /notes/bdebaque/01-10-2016/measuring-particulate-matter-from-an-airplane.md
nid: 12574
uid: 57052

---

![](https://publiclab.org/public/system/images/photos/000/013/595/original/w4science.jpg)

# Measuring particulate matter from an airplane

by [bdebaque](../profile/bdebaque) | January 10, 2016 14:58

January 10, 2016 14:58 | Tags: [particulate-sensing](../tag/particulate-sensing), [quebec](../tag/quebec), [canada](../tag/canada), [dustduino](../tag/dustduino), [dust-monitoring](../tag/dust-monitoring), [espacelab](../tag/espacelab), [first-time-poster](../tag/first-time-poster)

----

###What I want to do
We propose to build and adapt dustduino sensor for air flight collection of particulate matter. This project is a collaboration between Wings for science and EspaceLab (a fablab and a chapter of Public Lab located in Quebec city, Canada).

Wings for science: http://www.wingsforscience.com/
EspaceLab: http://espace-lab.org/ 

###My attempt and results
We are still designing the concept, some electronic design is in progress as well as some packaging mock-up have been tested. The form factor is not a concern yet but the weight is a major one.

So far the basic capabilities will have:
- a WiFi module for internet connection to a server and data collection
- a waterproof box and with easy clips to change the batteries
- an entrance system to prevent water from coming inside the box (an air pump with a U tube and a valve should do)
  
We will release several versions:
- Version 1: will include the following sensors: O3, No2, So2, Temperature, Humidity, air pump, wifi, ground measurement only.
- Version 2: version 1 plus a particulate counter based on dustduino
- Version 3: version 2 plus a wing attachment system.

The next post, hopefully will have pictures and sketches, things are going fast.

###Questions and next steps
We have many questions (a still other to come):
- air flow going into the collection chamber might be too fast
- the sensor housing must be small and make as little air turbulence as possible
- what calibration should we apply (temp, pressure, humidity) to correct the measures
- we might add as well a GPS to the system.
- will temperature be an issue in battery efficiency ? 
- humidity will definitely be a concern, so a safe housing is a must, can we embed the sensor in a gopro housing ?

We have created a github repository for the code: [https://github.com/bendebaque/air_sensor](https://github.com/bendebaque/air_sensor)

###Why I'm interested
This project will collect a huge amount of data that will show us if air pollution is present at places where we don't suspect yet. It will also give a positive impact on air quality concerns.