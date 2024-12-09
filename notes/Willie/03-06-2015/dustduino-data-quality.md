---
title: DustDuino Data Quality
tagnames: indoor-air-quality-mapping, particulate-sensing, air-quality, internet, tool, dustduino, open-air
author: willie
path: /notes/Willie/03-06-2015/dustduino-data-quality.md
nid: 11659
uid: 235174

---

![](https://publiclab.org/public/system/images/photos/000/009/194/original/DustDuino_Logo.jpg)

# DustDuino Data Quality

by [willie](../profile/willie) March 06, 2015 20:01

March 06, 2015 20:01 | Tags: [indoor-air-quality-mapping](../tag/indoor-air-quality-mapping), [particulate-sensing](../tag/particulate-sensing), [air-quality](../tag/air-quality), [internet](../tag/internet), [tool](../tag/tool), [dustduino](../tag/dustduino), [open-air](../tag/open-air)

----

###What level of accuracy can the DustDuino provide?

There is an enormous need for low-cost air pollution monitoring around the world. In particular, particulate matter has been identified as a globally important public heath problem.  The DustDuino measures both PM10 and PM2.5 by utilizing a $15 USD optical sensor, the Shenyei PPD42NS. The construction of the sensor includes an Infrared LED, a focusing lens, and a photodiode to determine the concentration of dust in a partially closed chamber that draws in air from its surroundings.  

[![Picture1.png](https://i.publiclab.org/system/images/photos/000/009/193/medium/Picture1.png)](https://i.publiclab.org/system/images/photos/000/009/193/original/Picture1.png)

Design choices for the DustDuino have been based primarily on the research findings of two scientific studies focused on determining the quality and applicable use cases for the Shenyei PPD42NS with reference monitors including the  [DustTrak](http://www.tsi.com/dusttrak-ii-aerosol-monitor-8530/), the [Dylos laser counter](http://www.dylosproducts.com/ornodcairqum.html), and a Federal Equivalent Method β-attenuation monitor
([BAM-1020 from Met One Instrument](http://www.metone.com/particulate.php)).

Testing with reference monitors conducted in [Berkeley, California in late 2013](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf) concluded that the results of the low-cost sensor were about equivalent to much more expensive ones when analyzing data at hourly intervals. ”Performance at 1 [hour] integration times was comparable to commercially available optical instruments costing considerably more.”

Testing in high PM2.5 environments such as the city of Xi'an, China also has shown [high correlations between the Shenyei and reference monitors](http://www.sciencedirect.com/science/article/pii/S0269749115000160). By setting up a variety of monitors throughout the city, researchers were able to identify the High-technology Zone site as a potential PM2.5 hotspot with sustained high concentrations compared to the city average throughout the day. 

###Critiques and Limitations

Challenging previously held assumptions, adjusting expectations to match the capabilities of the equipment, and following the scientific method is critical for getting the highest quality data from the DustDuino. There are a number of issues and pitfalls to be aware of when both setting up the monitor and reviewing the data it creates. 

**Accounting for Weather**
--Monitoring air-pollution levels is far more involved than the manufacturers and suppliers of cheap sensors suggest. In a [January 2015 article in Nature](http://www.nature.com/news/environmental-science-pollution-patrol-1.16654) about the current status of DIY air monitoring,  Ben Barratt, an air-quality scientist at King's College London stated that the problem is that temperature, humidity and some gases skew the results from sensors making it difficult to compare results between devices. This suggests that calibrating the DustDuino with reference monitors that include local weather information can assist in the modelling process when visualizing the data.

**Stationary vs Mobile**
--The Dustduino is designed to be a stationary monitor since the design of the sensor uses temperature to regulate airflow. If the sensor is moving, the air flow is not consistent and will become an unaccounted for variable. Modifications designed to regulate the airflow are needed to overcome this issue. 

**High Cost vs Low Cost Sensors**
--The [Air Quality Index of China](http://aqicn.org/city/beijing/) conducted an [experiment](http://aqicn.org/sensor/shinyei/) comparing a variety of low-cost particluate matter sensors including the Shenyei in Beijing, China. The study noted that "the low-cost optical sensors are not counting individual particles, but instead, counting the amount of time particles are detected by the photo diode sensor." This can lead to quite noisy data compared to more expensive monitors. This means that the quality of near-real time data is reduced. We suggest following the scientific recommendations and viewing the data as weighted averages at hourly intervals. 

###What gaps are low-cost sensors like the DustDuino trying to fill?

The core problems the DustDuino is designed to fill is the inability of existing monitoring networks are to properly characterize human exposures to particulate matter due to low resolution spatio-temporal data. Today the majority of official monitoring infrastructure is focused on measuring ambient air at very high resolution and then modelling exposure over a large area with a few high quality stations. However, air quality is not as evenly distributed as the monitoring infrastructure. Effective management is particularly difficult in sprawling megacities. This means that hotspots exist that are invisible to official infrastructure and pollution monitoring devices that are accessible to the citizenry could help fill the knowledge gap. 


