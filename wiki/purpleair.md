---
title: "PurpleAir"

tagnames: 'particulate-sensing, air-quality, pm, method, particulate-matter, air-sensors, purpleair, purple-air, particle-sensor'
author: jiteovien
path: /wiki/purpleair.md
nid: 16947
uid: 540008
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/026/430/original/purpleair-device2x_%281%29.jpeg)

# PurpleAir

by [joyofsoy](/profile/joyofsoy), [warren](/profile/warren), [liz](/profile/liz), [jiteovien](/profile/jiteovien)

August 17, 2018 20:02 | Tags: [particulate-sensing](/tag/particulate-sensing), [air-quality](/tag/air-quality), [pm](/tag/pm), [method](/tag/method), [particulate-matter](/tag/particulate-matter), [air-sensors](/tag/air-sensors), [purpleair](/tag/purpleair), [purple-air](/tag/purple-air), [particle-sensor](/tag/particle-sensor)

----

The [PurpleAir](https://www.purpleair.com/) is one of many low cost devices that use laser optical particle counters to estimate particulate matter mass concentrations in air for PM2.5 and PM10. Other similar devices include the [Dustduino](https://publiclab.org/wiki/dustduino), [Speck](https://publiclab.org/notes/chrisbartley/04-15-2014/speck-particle-monitor), [Dylos](http://www.dylosproducts.com/?gclid=Cj0KCQjw5NnbBRDaARIsAJP-YR_IQiQC0876PaQmo6lWAuRPJ5FG3oh65dc7rsf95xSqDd0Wdqrs6OYaAsxtEALw_wcB) and more. The PurpleAir costs around $200 and provides real time air quality data that can be used to understand indoor or outdoor environments and conduct environmental investigations on air quality. 

**The intention of this page is to create a central location to discuss successful (and unsuccessful) use cases of the PurpleAir and problem solve together. Please contribute any experiences you've had with the PurpleAir. Perhaps consider visiting https://publiclab.org/simple-air-sensor to see the start of a barebones kit that is kicking off the development of a well-supported, open source air sensor similar to the PurpleAir.**

## Why use one?

Every state in the US is mandated by the Environmental Protection Agency to create air quality sensor networks to monitor the six pollutants that the EPA defines as hazardous - Ground-level ozone, Carbon monoxide, Sulfur oxides, Nitrogen oxides, Lead and Particulate Matter. Read more about [particulate matter](https://publiclab.org/wiki/pm#Background+Information) here. However, due to the huge cost upwards of $25,000 associated with Federal Reference Method (FRM) and Federal equivalent method (FEM) sensors, most cities only have a handful of sensors, sometimes just one, measuring each category of pollutant. In addition, FRM sensors often have a lag of several months for quality control before the data is publicly accessible. Optical sensors provide a way to get near real-time data on the particulate matter in your home or community and to have autonomy over the locations being monitored.

##How it Works

[This page](https://publiclab.org/wiki/optical-pm) does a great job of explaining how laser optical particle counters work in detail. But, the most important things to know when deciding to use an optical particle counter like the PurpleAir is that:

1. The data the PurpleAir (and other optical counters) produce is an _estimation_ of particulate mass concentration that relies on several assumptions for shape, diameter and density. The quality of your data will depend on those assumptions as well as environmental considerations such as humidity, light and temperature.
2. Because of the fact that optical counters rely on these assumptions, the data produced by them are _not_ FRM or FEM certified.

That being said, there have been a number of academic studies that have quantified the performance and limitations of some of these optical sensors to help you choose which one to use depending on what you are trying to sense and what level of performance you are looking for. The EPA has an excellent summary of these studies in this table [here](https://www.epa.gov/air-sensor-toolbox/evaluation-emerging-air-pollution-sensor-performance). A higher R^2 value means better performance.

[This page](https://publiclab.org/wiki/optical-pm) has some more links of studies to check out if you scroll a bit. 

[Here](http://www.aqmd.gov/docs/default-source/aq-spec/field-evaluations/purpleair---field-evaluation.pdf) is a study specific to PurpleAir. 

## Use Cases

- PurpleAir maintains a [map](https://www.purpleair.com/map?#0.27/0/-30) of every user's data from around the world. Check it out.
- A use case in [Utah](https://www.good4utah.com/news/local-news/dirty-air-monitors-are-they-telling-us-the-whole-truth/382744964)
- A use case in [California](https://cleantechnica.com/2018/07/09/my-new-favorite-gadget-a-purple-air-air-quality-monitor/)
- [This facebook group](https://www.facebook.com/groups/purpleair/) includes people who own a PurpleAir and discuss their experiences
- [This blog](https://www.wxforum.net/index.php?topic=33031.0) has some dialogue about various use issues

Please add your experiences with PurpleAir too!

## Suggestions for conducting particulate matter investigations

[This page](https://publiclab.org/wiki/general-environmental-monitoring-study-strategies) summarizes important considerations before starting an investigation. To add onto those, specifically in regards to air quality, here are some suggestions.

Before ordering a sensor, check out the data that is freely available to you online. [Visit your state's department of environmental management website](https://www.epa.gov/home/health-and-environmental-agencies-us-states-and-territories) and their air quality section. With some poking around, you can find their ‘Air monitoring network plan’ which will show you the _exact locations_ of all of their different FEM/FRM sensors and what pollutant they are measuring. This can help to identify gaps in their monitoring network that you may be interested in.

[AirNow](https://www.airnow.gov/index.cfm?action=airnow.main) has national daily data from FEM monitors. You can search for your zip code and see the live air quality forecast. This can be used to help inform your day to day movements especially if you are an asthmatic.

You can also download data* from FRM monitors [here](https://www.epa.gov/outdoor-air-quality-data/download-daily-data). This is really cool because you can specify what data you want and it will generate an Excel file for you. You can then start making plots and figures to compare different time periods and locations. [Check out this post](https://publiclab.org/notes/jiteovien/08-01-2018/air-quality-data-visualization-no-coding-necessary) which used this online EPA data to create some visualization of the monitoring in Rhode Island. 

*NOTE: As mentioned earlier, the FRM data has a lag for quality assurance reasons. For example, the most current Rhode Island data is for May 2018. (It is August at the moment this is being written).

Everyone, whether or not you own a Purple Air has free access to the Purple Air's database of global sensors. Read more about this in the activity [Download & Analyze your Purple Air data](https://publiclab.org/notes/jiteovien/08-28-2018/download-analyze-your-purple-air-data?_=1535473842). 

## Questions

Questions can be either frequently asked questions, or "next step" challenges we're looking to solve.

[purpleair](/tag/question:purpleair)

## Activities

Activities show how to use this project, step by step.

[purpleair](/tag/activity:purpleair)


## Other things to know about using your Purple Air

The PurpleAir sensor has two 'channels' that measure data. Channel A and Channel B. Each channel has a 'primary' and 'secondary' data set. The data that Channel A measures is described below:

PrimaryData

- field1: PM1.0 (CF=ATM) ug/m3
- field2: PM2.5 (CF=ATM) ug/m3
- field3: PM10.0 (CF=ATM) ug/m3
- field4: Uptime (Minutes)
- field5: RSSI (WiFi Signal Strength)
- field6: Temperature (F)
- field7: Humidity (%)
- field8: PM2.5 (CF=1) ug/m3 This is the field to use for PM2.5

SecondaryData

- field1: 0.3um particles/deciliter
- field2: 0.5um particles/deciliter
- field3: 1.0um particles/deciliter
- field4: 2.5um particles/deciliter
- field5: 5.0um particles/deciliter
- field6: 10.0um particles/deciliter
- field7: PM1.0 (CF=1) ug/m3 This is the field to use for PM1.0
- field8: PM10 (CF=1) ug/m3 This is the field to use for PM10
 
particles/deciliter is a particle count per volume measurement. ug/m3 is the particle mass concentration - the popular method of measuring particulate matter.

Channel B measures the exact same primary and secondary data. This is likely just done for robustness just in case one of the channel fails or has an error. 

These setup instructions are included with the Simple Air sensors and can be reprinted
<a href="/i/38328"><i class="fa fa-file"></i> Purple_Air_Instructions.pdf</a>


