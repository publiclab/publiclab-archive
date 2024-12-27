---
title: "What is the correct AQI measure ?"

tagnames: 'mapping-meet-up, air-quality, leaflet, dust, pm, question:air-quality, question:pm, general, purpleair, soc-2018, question:purpleair, aqi'
author: sagarpreet
path: /notes/sagarpreet/06-22-2018/what-is-the-correct-aqi-measure.md
nid: 16551
uid: 516343

cids: 19876,19899,19900,19902,19907,19908,19924,19925,19926,19927,19928,19935,21257,23152,23153,23763,23816,23829

---

![](https://publiclab.org/public/system/images/photos/000/025/270/original/Screen_Shot_2018-06-22_at_5.40.41_PM.png)

# What is the correct AQI measure ?

by [sagarpreet](../../../profile/sagarpreet) | June 22, 2018 12:44

June 22, 2018 12:44 | Tags: [mapping-meet-up](../tag/mapping-meet-up), [air-quality](../tag/air-quality), [leaflet](../tag/leaflet), [dust](../tag/dust), [pm](../tag/pm), [question:air-quality](../tag/question:air-quality), [question:pm](../tag/question:pm), [general](../tag/general), [purpleair](../tag/purpleair), [soc-2018](../tag/soc-2018), [question:purpleair](../tag/question:purpleair), [aqi](../tag/aqi)

----

I have been working on showing data from PurpleAir Layer onto a map in the form of a HeatMap .

I have the value of PM2.5 , should i convert it to US-Based value AQI ?
Will that make more sense ?

My work on it so far : [https://github.com/publiclab/leaflet-environmental-layers/issues/14](https://github.com/publiclab/leaflet-environmental-layers/issues/14)

Heat Map looks like this if i am using PM2.5 Value :

![image description](/i/25269.png "Screen_Shot_2018-06-22_at_5.40.41_PM.png")

The conversion can be done using this formula \[source: [https://en.wikipedia.org/wiki/Air\_quality\_index](https://en.wikipedia.org/wiki/Air_quality_index)\]:

[![wiki.png](/i/25271)](/i/25271)