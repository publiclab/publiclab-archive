---
title: How do I calculate error for averages?
tagnames: purpleair, question:purpleair, first-time-poster
author: wu_ming2
path: /notes/wu_ming2/02-02-2019/how-do-i-calculate-error-for-averages.md
nid: 18243
uid: 572116

---

# How do I calculate error for averages?

by [wu_ming2](../profile/wu_ming2) February 02, 2019 03:27

February 02, 2019 03:27 | Tags: [purpleair](../tag/purpleair), [question:purpleair](../tag/question:purpleair), [first-time-poster](../tag/first-time-poster)

----

I just installed the device indoor to check PM2.5 air quality in our flat and how the new air purifier works.  After a while I am planning to move it outdoor.  

  
As mentioned elsewhere I developed a micro service to notify me when readings cross a threshold. I have those values expressed as a range since we have the error range for the sensor.  

  
PA-II comes with two PMS 5003 laser counters to estimate air particulate concentration. [Specifications sheet](http://www.aqmd.gov/docs/default-source/aq-spec/resources-page/plantower-pms5003-manual_v2-3.pdf) among other things cite a maximum consistency error for PM2.5\.  This tells me the internal precision w/o reference to a true or known value. But what kind of distribution is assumed for this precision estimate? And what is the significance? As example I would have expected to read +-10% with a significance of 2.5 standard deviations for a normal distribution. 

  
Without this piece of information I wouldn't know what probably range to assign and how to calculate the precision for averages between the two sensors and for different timeframes. Am I overthinking it and +-10% is just fine enough? Thanks.