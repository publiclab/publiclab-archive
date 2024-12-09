---
title: Collecting data about Stormwater Issues through Citizen Science
tagnames: arduino, water-sensing, sensors, stormwater, flooding, runoff, study-design, community-organizing, irb, issue-brief, air-sensors, first-time-poster, lat:40.446947, lon:-80.002441
author: panicpuri
path: /notes/panicpuri/09-12-2019/collecting-data-about-stormwater-issues-through-citizen-science.md
nid: 20842
uid: 617886

---

![](https://publiclab.org/public/system/images/photos/000/035/224/original/watershed-map_SP-01.jpg)

# Collecting data about Stormwater Issues through Citizen Science

by [panicpuri](../profile/panicpuri) September 12, 2019 13:57

September 12, 2019 13:57 | Tags: [arduino](../tag/arduino), [water-sensing](../tag/water-sensing), [sensors](../tag/sensors), [stormwater](../tag/stormwater), [flooding](../tag/flooding), [runoff](../tag/runoff), [study-design](../tag/study-design), [community-organizing](../tag/community-organizing), [irb](../tag/irb), [issue-brief](../tag/issue-brief), [air-sensors](../tag/air-sensors), [first-time-poster](../tag/first-time-poster), [lat:40.446947](../tag/lat:40.446947), [lon:-80.002441](../tag/lon:-80.002441)

----

### Introduction:

I am a PhD student trying to build community resilience to flooding events by engaging more citizens in the data collection, processing, and analysis pipeline. I am working with the Nine Mile Run Watershed Association (NMRWA) (non-profit) to collect data that will prove the efficacy of installed Green Stormwater Infrastructure (GSI) in reducing flooding and runoff. I hope to conduct a workshop for interested citizens to build and install their own DIY sensor systems using Arduino boards and sensors in their backyards to measure temperature, air quality, soil moisture, soil pH, and precipitation. I also hope to study the different ways in which this data can be communicated to a web server for visualization - WiFi, GSM (SIM card), LoRaWAN (Low power, long range). And finally, I want to see the engagement and willingness of those who signed up to follow through with taking measurements with the assistance of prompts and reminders. Ideally, the Arduino sensor system will be install-and-forget, as it sends a stream of data periodically and is in a low-power state in-between sensing.

### Our main concern:

Our main concern is the workshop for citizens to make their own sensor systems - and the initial installation in their backyards. The Arduino is not 'too' complicated and I have worked with Raspberry Pis and an Arduino before, but I am wary that the workshop might be throwing not-so-tech-savvy folks under the bus.

### Obstacles and supporting information:

As of now, there are several spots in the watershed where [NMRWA](https://ninemilerun.org/) has installed Green Stormwater Infrastructure and introduced tree-planting efforts. However, the challenge comes in quantifying the benefit that these initiatives have had on the local community and ecosystem.

We hope to be able to point to differences in data between canopied areas and those without trees in terms of temperature (urban heat island effect) and air quality; and we hope to use soil data to investigate the differences in areas that have GSI close-by and those that don't.

We are trying to do this as economically as possible, trying to keep our sensor system affordable (~$50), although my school will be funding the first round of 10 sensor systems. I have built a mobile weather station with solar charging before that cost ~$70, and I do believe a $50 sensing system is possible. [I have tallied the costs](https://pitt.box.com/s/t5rqr79ef4ypnyq36p1lb3wf89om8ch9) of individual sensors, systems, and peripheral components, and if we order the components from aliexpress instead of amazon, the system could be built for ~$33!

I have not worked with soil sensing or air quality sensing before, and I was hoping to get some suggestions or advice from this community about which sensors/systems work best for this type of project. Also open to any criticism, recommendations, links, etc. that will make this project successful.

### Who is engaged in this concern?

The NMRWA has been closely engaged with local community members on this issue and have been working towards more green infrastructure and watershed management strategies that work for everyone. My advisor and I are now getting involved as well, to help use our skillset to gain new insights about how/where/why GSI is helping the community, and how the community can return the favour.

### What are the initial questions?

Are there any sensors or systems that might be more efficient/inexpensive than [these](https://pitt.box.com/s/t5rqr79ef4ypnyq36p1lb3wf89om8ch9)?

Is there a good resource for building a sensor system pretty close to this? (I looked, and found a few similar ones, but nothing that combined soil, air, and temp sensing)

How do I make sure this stays waterproof?

I plan to power the system with a 9v rechargeable battery (link in the doc), approx how long will this last given a sensing interval of 1hr?

What are some possible problems I could run into getting this project off the ground?

---------

I have been planning this project for about a week, and I will be implementing it in the coming months. I would greatly appreciate any input from this community on how to more meaningfully engage citizens and make this experience as seamless as possible. I also hope to be able to write a paper about the challenges faced while setting up this system - as I predict there will be (at least) a few. I am a firm believer in open source principles and I am hoping to build something that can be replicated in other places and engage many more people so that they are aware of the issues that affect their community.

Thank you for creating this platform and allowing this exchange of ideas!

[stormy-pgh](../../tag/question:stormy-pgh)