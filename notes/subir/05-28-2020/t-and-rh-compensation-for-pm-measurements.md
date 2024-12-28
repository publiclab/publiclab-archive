---
title: "T and RH compensation for PM measurements?"

tagnames: 'air-quality, question:air-quality, air-sampling, pm-measurements'
author: subir
path: /notes/subir/05-28-2020/t-and-rh-compensation-for-pm-measurements.md
nid: 23732
uid: 622299
cids: 26904,26905
---

# T and RH compensation for PM measurements?

by [subir](/profile/subir) | May 28, 2020 18:29

May 28, 2020 18:29 | Tags: [air-quality](/tag/air-quality), [question:air-quality](/tag/question:air-quality), [air-sampling](/tag/air-sampling), [pm-measurements](/tag/pm-measurements)

----

Hi. subir here from Pune, India.

  
We have been developing some [low cost openhardware for PM measurements](https://gitlab.com/smalldesign/breathe2 "https://gitlab.com/smalldesign/breathe2") and have [good amount of data](http://smalldesign.in/category/breathe2/) over the past 6-7 months over 5 locations in our city. When compared to government published PM data, our values approximately match government values during colder days than during hotter days. This observation is seen [repeatedly and consistently](http://smalldesign.in/2020/04/28/on-breath2-data-confidence/) and is especially significant (20-30 ug/m3 difference) now during the hot summer months. 

  
Our system uses Sensirion's SPS30 sensors for PM measurements and Bosch's BME280 for ambient temperature and RH. 

  
I would like to know if we need to cool the air we sample to steady the air sample temperatures to a constant value for consistent results? Anyone who does this on their low-cost systems? Should we also worry about removing moisture?