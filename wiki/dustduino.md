---
title: "DustDuino"

tagnames: 'indoor-air-quality-mapping, particulate-sensing, agriculture, air-quality, internet, transportation, mining, fracking, tool, datalogger, dustduino, prompt:dustduino, shinyei, method, oil-and-gas, air-sensors, particle-sensor'
author: willie
path: /wiki/dustduino.md
nid: 10357
uid: 235174

---

![](https://publiclab.org/public/system/images/photos/000/003/854/original/dustduino_proto_2_desk.jpg)

# DustDuino

by [bhamster](../profile/bhamster), [warren](../profile/warren), [willie](../profile/willie), [Becky](../profile/Becky)

April 24, 2014 18:47 | Tags: [indoor-air-quality-mapping](../tag/indoor-air-quality-mapping), [particulate-sensing](../tag/particulate-sensing), [agriculture](../tag/agriculture), [air-quality](../tag/air-quality), [internet](../tag/internet), [transportation](../tag/transportation), [mining](../tag/mining), [fracking](../tag/fracking), [tool](../tag/tool), [datalogger](../tag/datalogger), [dustduino](../tag/dustduino), [prompt:dustduino](../tag/prompt:dustduino), [shinyei](../tag/shinyei), [method](../tag/method), [oil-and-gas](../tag/oil-and-gas), [air-sensors](../tag/air-sensors), [particle-sensor](../tag/particle-sensor)

----

## What is it?

DustDuino can help individuals with limited resources monitor PM10 and PM2.5 concentrations, indoors or outdoors. It uses [Shinyei PPD42NS](http://www.sca-shinyei.com/pdf/PPD42NS.pdf), a $15USD optical sensor that uses an LED and a lens to determine the concentration of dust in a partially closed chamber that draws in air from its surroundings. The sensor data is received by an [Arduino](http://www.arduino.cc/) development board and transmitted to Xively. Prototypes of DustDuino have been successfully built and used in various indoor and outdoor locations. 

Also see the [Data Logging page](/w/data-logging) for more on setting up and using different dataloggers, and for more tutorials.

### Questions

[dustduino](../../tag/question:dustduino)

****

## Why make one?

The health eﬀects attributed to outdoor ﬁne particulate matter (PM2.5) rank it among the risk factors with the highest health impacts in the world, [accounting for over 3.2 million premature deaths annually](http://pubs.acs.org/doi/abs/10.1021/es2025752). In October 2013, the World Health Organization [announced](http://www.iarc.fr/en/media-centre/iarcnews/pdf/pr221_E.pdf) they consider particulate matter, a major component of indoor and outdoor air pollution, as a Group 1 carcinogen along with tobacco smoke and asbestos.

## What can the DustDuino Do?

From the [Data Quality Research Note](http://publiclab.org/notes/Willie/03-06-2015/dustduino-data-quality)

Test results indicate that DustDuino provides accurate and useful information, albeit of a somewhat limited scope and under certain conditions. An academic [study](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf) which compared the Shenyei particulate matter sensor to costlier models used by governments, researchers, and companies found that this low-cost sensor produced results equivalent to much  more expensive ones when analyzing data at hourly intervals.

Testing with reference monitors conducted in [Berkeley, California in late 2013](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf) concluded that the results of the low-cost sensor were about equivalent to much more expensive ones when analyzing data at hourly intervals. ”Performance at 1 [hour] integration times was comparable to commercially available optical instruments costing considerably more.”

Testing in high PM2.5 environments such as the city of Xi'an, China also has shown [high correlations between the Shenyei and reference monitors](http://www.sciencedirect.com/science/article/pii/S0269749115000160). By setting up a variety of monitors throughout the city, researchers were able to identify the High-technology Zone site as a potential PM2.5 hotspot with sustained high concentrations compared to the city average throughout the day. 

There are still some unknowns with regard to the sensor - for example, whether it needs to be co-located with higher-quality instruments for calibration, and whether it could be used in extreme environments. There are also some limitations - the sensor may not produce high-quality information at time intervals shorter than an hour, 

## Activities

[dustduino](../../tag/activity:dustduino)

****

## Photos

[![DustDuino.jpg](https://i.publiclab.org/system/images/photos/000/003/998/medium/DustDuino.jpg)](https://i.publiclab.org/system/images/photos/000/003/998/original/DustDuino.jpg)


## Research Notes

[dustduino](../../tag/dustduino)

## DustDuino Sketches

The DustDuino board enables a variety of power, connectivity, and sensor configurations each of which require custom programming to process and send data. As the name would suggest, the DustDuino can be programmed with Arduino libraries and contributors to the project have made a number of Arduino sketches already. A full list of them is available on [DustDuino.org](http://dustduino.org/)

## Scientific Journal Articles

| Title | Author(s) |
|-------------------------|---------------------|
| A [distributed network of low-cost continuous reading sensors](http://www.sciencedirect.com/science/article/pii/S0269749115000160) to measure spatiotemporal variations of PM2.5 in Xi'an, China; January 13, 2015 [PDF LINK](http://ac.els-cdn.com/S0269749115000160/1-s2.0-S0269749115000160-main.pdf?_tid=9ca954e2-ae5c-11e4-9076-00000aacb35f&acdnat=1423267531_78064379fb071e29e3cf180d34d15365) |  Meiling Gao, Junji Cao, Edmund Seto 
| [Field calibrations of a low-cost aerosol sensor at a regulatory monitoring site in California](http://atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf); January 27, 2014. | DM Holstius et al  


## External Tutorials

| Website | Overview |
|-------------------------|---------------------|
| [Mental Munitions](http://www.mentalmunition.com/2013/10/measure-air-pollution-in-your-home-or.html) | The original documentation blog post |
| [Earth Journalism Network- Civic Science & Sensors Program](earthjournalism.net/projects/citizen-science-sensors)| A project page reviewing EJN's sensor journalism pilot project |


## News Articles 

| Publication | Title |
|-------------------------|---------------------|
| Nature |  [Environmental science: Pollution patrol](http://www.nature.com/news/environmental-science-pollution-patrol-1.16654) |
| Scientific American |  [Dust in the Wind: How Data Visualization can Help the Environment](http://blogs.scientificamerican.com/guest-blog/dust-in-the-wind-how-data-visualization-can-help-the-environment/) |
| Newsweek |  [How Civic Science Is Changing Environmentalism](http://www.newsweek.com/2014/11/07/how-civic-science-changing-environmentalism-279777.html) |