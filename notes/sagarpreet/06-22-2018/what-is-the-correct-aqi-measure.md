---
nid: 16551
title: What is the correct AQI measure ?
path: public/static/notes/sagarpreet/06-22-2018/what-is-the-correct-aqi-measure.md
uid: 516343
tagnames: mapping-meet-up,air-quality,leaflet,dust,pm,question:air-quality,question:pm,general,purpleair,soc-2018,question:purpleair,aqi
---

# What is the correct AQI measure ?

I have been working on showing data from PurpleAir Layer onto a map in the form of a HeatMap .

I have the value of PM2.5 , should i convert it to US-Based value AQI ?
Will that make more sense ?

My work on it so far : [https://github.com/publiclab/leaflet-environmental-layers/issues/14](https://github.com/publiclab/leaflet-environmental-layers/issues/14)

Heat Map looks like this if i am using PM2.5 Value :

![image description](/i/25269.png "Screen_Shot_2018-06-22_at_5.40.41_PM.png")

The conversion can be done using this formula \[source: [https://en.wikipedia.org/wiki/Air\_quality\_index](https://en.wikipedia.org/wiki/Air_quality_index)\]:

[![wiki.png](/i/25271)](/i/25271)