---
title: 'Download & Analyze Purple Air data'
tagnames: analysis, air-quality, maps, dust, pm, seeks:replications, air-sensors, purpleair, activity:purpleair
author: jiteovien
path: /notes/jiteovien/08-28-2018/download-analyze-your-purple-air-data.md
nid: 17007
uid: 540008

---

![](https://publiclab.org/public/system/images/photos/000/026/367/original/Screen_Shot_2018-08-28_at_12.19.30_PM.png)

# Download & Analyze Purple Air data

by [jiteovien](../profile/jiteovien) August 28, 2018 16:27

August 28, 2018 16:27 | Tags: [analysis](../tag/analysis), [air-quality](../tag/air-quality), [maps](../tag/maps), [dust](../tag/dust), [pm](../tag/pm), [seeks:replications](../tag/seeks:replications), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [activity:purpleair](../tag/activity:purpleair)

----

**To do this activity you do not need to actually have a PurpleAir.**

On the [PurpleAir Map](https://www.purpleair.com/map#1/25/-30), you can search by ID name or location to find a PurpleAir that is actively logging data. If you have your own PurpleAir setup, you can search for that one. If there is another location you are interested in, you can search for that city and see if there are any PurpleAirs setup in that area.  

For example, I am from Keller, Texas, so i decided to search for that location. I found one live PurpleAir in that area. Take note of the ID name for the data you are interested in. The ID name of the sensor is '908 Bellstone Dr' as shown on the graph.

![image description](/i/26364.png "Screen_Shot_2018-08-28_at_10.53.00_AM.png")

Once you have selected a PurpleAir you want to work with, go to [purpleair.com/sensorlist](http://purpleair.com/sensorlist) where you can download data from _any_ PurpleAir sensor whether or not you own one. Unfortunately, there isn't a search by ID function but the sensors are in alphanumeric order so you can find your ID that way. Then select a range of dates that you are interested in. I selected a range of dates of one week because on the map, it looked like the AQI changed a lot in that period of time. Press download. Select both the channel A (not labeled A) and channel B.

![image description](/i/26365.png "Screen_Shot_2018-08-28_at_11.27.57_AM.png")

For each sensor that you download, the excel files should be named something along the lines of:

SensorIDname Primary

SensorIDname Secondary

SensorIDname B Primary

SensorIDname B Secondary

The difference between Primary and Secondary data is described on the [Purple Air wiki page](https://publiclab.org/wiki/purpleair). Generally, you'll be interested in just the Primary data but you may want the Secondary data as well. Channel A and Channel B are intended to be redundant data. Briefly browse 'SensorIDname Primary' next to 'SensorIDname B Primary'. The data should be mostly similar but might have different time steps. See Below:

![image description](/i/26366.png "Screen_Shot_2018-08-28_at_11.53.23_AM.png")

At this step, you may either choose to work with just one of the channel's or you may use both if you're interested in comparing them - up to you!

Now, decide how you want to manipulate and present your data. You can use excel to insert graphs or you can use a programming language such as Python, Java or Arduino to analyze it.

Some ideas for graphs:

- You could do a simple concentration over time line graph
- You could compare several closeby locations
- You could compare PurpleAir data to Federal AQ data. Details about accessing Federal data are described on the [Purple Air wiki page](https://publiclab.org/wiki/purpleair).
  - How closely does your PurpleAir match Federal Data?
  - How often does your PurpleAir read higher or lower than Federal data?
- Using the [concentration -\> AQI conversion chart](https://aqicn.org/calculator/), you could parse your excel file to see how often the air quality index is above a certain reading. [Read more about AQI here](https://en.wikipedia.org/wiki/Air_quality_index).
  - For example, how often is your PM 2.5 AQI in the "moderately unhealthy" category?
  - How long does the AQI stay in a "hazardous" category

Try it out and see what types of trends you can find!