---
title: "Testing the Mobile DustDuino"

tagnames: 'particulate-sensing, air-quality, transportation, dustduino, dust, particulates, asia, indonesia, particulate, pm, response:10620, traffic, jakarta, dust-sensing, activity:dustduino'
author: willie
path: /notes/Willie/09-02-2014/testing-the-mobile-dustduino.md
nid: 11097
uid: 235174

---

![](https://publiclab.org/public/system/images/photos/000/006/547/original/Clara's_car_sensor.jpg)

# Testing the Mobile DustDuino

by [willie](../../../profile/willie) | September 02, 2014 19:21

September 02, 2014 19:21 | Tags: [particulate-sensing](../tag/particulate-sensing), [air-quality](../tag/air-quality), [transportation](../tag/transportation), [dustduino](../tag/dustduino), [dust](../tag/dust), [particulates](../tag/particulates), [asia](../tag/asia), [indonesia](../tag/indonesia), [particulate](../tag/particulate), [pm](../tag/pm), [response:10620](../tag/response:10620), [traffic](../tag/traffic), [jakarta](../tag/jakarta), [dust-sensing](../tag/dust-sensing), [activity:dustduino](../tag/activity:dustduino)

----

###Why a mobile dust sensor?

[Clara Rondonuwu](https://twitter.com/clarbondioxide), the project manager of the Indonesian GeoJournalism site [Ekuatorial.com](www.ekuatorial.com), recently made some modifications to the [DustDuino ](http://publiclab.org/wiki/dustduino)prototype to equip the device for mobile use.

Clara’s concept for the mobile DustDuino was inspired by the work presented by researcher Josh Apte at a sensor journalism training carried out by the [Earth Journalism Network](www.earthjournalism.net) in May 2014. Most traditional evaluations of air quality use a few high-quality sensors to model exposure over large areas.  While these methods accurately measure the overall air quality of a city, or ambient air, Apte felt that these measures didn’t give the full story – missing out on what types and levels of pollutants people actually breathe as they go about their daily activities in various parts of the city.

This [UC Berkeley Lab post ](http://newscenter.lbl.gov/2014/08/11/still-a-lot-to-learn-about-indias-deadly-air-pollution/)describes how Apte took to the streets of New Delhi to study the spatial patterns of air quality throughout the city and identify areas that are disproportionately affected by air pollutants. After attaching a video camera and a GPS to an auto-rickshaw, along with sensors that measured the levels of fine particulate matter (PM2.5), black carbon and ultrafine particles—three pollutants that are among the most dangerous to human health—Apte drove the vehicle through the streets and highways of Delhi for four consecutive months during the morning and evening rush hours.
<iframe width="420" height="315" src="//www.youtube.com/embed/JNHhGVeD050" frameborder="0" allowfullscreen></iframe>

Apte’s results highlighted an issue that most commuters had a feeling was true. The concentrations of all three pollutants were significantly higher on the roads than in the ambient air, indicating that air quality is disproportionately poor in these areas. Apte [summarized](http://www.sciencedirect.com/science/article/pii/S1352231011005206) his research by stating that “one’s exposure during a daily commute by auto-rickshaw in Delhi is as least as large as full-day exposures experienced by urban residents of many high income countries.”

Mobile DustDuino monitors—when combined with other tools like video and GPS—may be used to identify micro-environments in which pollutant levels are disproportionately high. While one sensor alone doesn’t necessarily create a large enough dataset to give actionable results, once potential hotspots are identified, a greater number of static sensors can be used to monitor the air quality in the targeted area.  

###The attempt and results: Office Desktop to Car Dashboard
Clara’s conversion of the low-cost DustDuino from a static to a mobile monitor required three steps and allows DustDuino to broadcast data wherever a cellular mobile network is available. The first step was to create a mobile hotspot, by using a smart phone or tablet which has this capability or purchasing mobile WiFi. Second, the WiFi module within DustDuino must be configured to connect to this mobile wireless network. Finally, a portable power source must be found for the sensor. That's all it takes to get this dust sensor on the road.

[![PM_spikes_clara.jpg](https://i.publiclab.org/system/images/photos/000/006/546/medium/PM_spikes_clara.jpg)](https://i.publiclab.org/system/images/photos/000/006/546/original/PM_spikes_clara.jpg)
_Readings from the mobile DustDuino streamed to Xivley_

DustDuino designer Matt Schroyer has suggestions for mobile power sources as well as a more detailed [explanation of each step](http://publiclab.org/notes/Schroyer/06-26-2014/broadcast-dust-readings-from-a-smartphone). The mobile sensor's utility and potential applications are greatly increased without having to worry about staying within range of a WiFi connection and power source.

###Questions and next steps

Clara experimented with mobile data collection while driving around in a car through Jakarta’s notoriously bad traffic but these modifications also make it easier to use DustDuino places away from a power outlet like parks, the countryside, or near industrial operations -- anywhere with a 3G cellular network and a potential air quality issue.  If you plan on experimenting in a similar way, maps of 3G coverage can be seen found on the MobileWorldLive website.


