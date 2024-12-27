---
title: "How do we get relevant PM data to residents in under 10 minutes?"

tagnames: 'air-quality, pm, particulate-monitoring, weather-station, particulate-matter, activity:air-quality, purpleair, sms, question:purpleair, healthygulf, airwyn, iseechange'
author: eustatic
path: /01-20-2021/how-do-we-get-relevant-pm-data-to-residents-in-under-10-minutes.md
nid: 25501
uid: 379
cids: 27998,28003,28007,28024,28070,28824,28825,28827,29464
---

# How do we get relevant PM data to residents in under 10 minutes?

by [eustatic](/profile/eustatic) | January 20, 2021 03:24

January 20, 2021 03:24 | Tags: [air-quality](/tag/air-quality), [pm](/tag/pm), [particulate-monitoring](/tag/particulate-monitoring), [weather-station](/tag/weather-station), [particulate-matter](/tag/particulate-matter), [activity:air-quality](/tag/activity:air-quality), [purpleair](/tag/purpleair), [sms](/tag/sms), [question:purpleair](/tag/question:purpleair), [healthygulf](/tag/healthygulf), [airwyn](/tag/airwyn), [iseechange](/tag/iseechange)

----

Purple Air has great data that makes a big mess.  Healthy Gulf is spending all of our time maintaining units and working with legal professionals, and doesn't have the labor power to constantly watch, interpret, prompt residents, and attend to units.  We are seeking to recruit volunteers to watch a sensor on the purple air map every four days. This is kind of silly, to be honest, but that is what has been effective so far. 

  
We know PM changes behavior and makes people sick.  We would like to prompt residents with data over SMS, and have a text response forwarded to Healthy Gulf community scientists for summary examination, escalation of communications, and perhaps reportage to agencies. 

  
For every public Purple Air sensor \[ABCDE\], there's a simple website    

[https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=\[ABCDE\]](https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=[ABCDE] "https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=[ABCDE]")   

  
See this for sensor **97223**

[https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=97223](https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=97223 "https://www.purpleair.com/data.json?key=N335I22WH50EWCL1&show=97223")  

  
That displays data for the last six minutes, I think.

One

**--\> What do these fields display?  I've read the Purple Air API page a few times, but it doesn't sink in. I post this question for more programming-savvy people. **

  
We have alerts for flooding rains in New Orleans. There's a service that can text you within 5 minutes based on 

--thresholds of increase

--or a high amount over time (like an hour).

**  
**

**I encourage the reader to make an account here and try these alerts out. I like the Ambient Weather alert system. Their PM sensor is pretty off, though. But this works for flooding rain / climate deluges.**  

[https://ambientweather.net/alerts**  
**](https://ambientweather.net/alerts)

**  
**

I'm thinking of something similar for Particulate Matter.  

  
Imagine this::

If you sign up to a (public) Purple Air sensor, you can get a text prompt SMS everytime   

  
**--duration of readings above US EPA 35 ug/m3 exceeds one hour **   
**--rate of increase of US EPA ug/m3 in the last 5-10 minutes** exceeds  X  

\[We need to analyze some historical data to determine what X will be\]

  
At some duration less than an hour, the rate is fast enough that we can project that after an hour, the reading of US EPA ug/m3 will exceed 35 during the entire hour. We have to assume that air pollution phenomena  "spikes" have some coherent qualities, but I have no problem making these assumptions.  

  
Actually, at some point, the rate can be too fast, at some point, the rate is so fast, it only tells you that the sensor is broken. 

  
**

--sensor has stopped transmitting for the last 20 minutes

--sensor has flatlined to zero for more than a day**

  
Bonus::

--this alert language will include wind direction from a local weather station  

  
Airwyn

Airwyn is great.  [download it now.](https://www.airwyn.app/) Email them, they are responsive, I find.

  
But right now, Airwyn only has the option for  
--Air Quality decreasing for public units**  
**

  
Ideally, I would like to have the local units prompt residents with SMS messages, and have them 

  
1) Text back

if they smell anything or change what they are doing due to the prompt

  
Like **"I'm coughing and can't go to work"**

**"It stinks and I don't want to take my grandchild outside"**

**"This is terrible, and I feel like I can't go outside at all anymore"**

  
2) Post a photo or odor report to the ISeeChange "**Skies and Air**" Investigation

[https://www.iseechange.org/posts/create](https://www.iseechange.org/posts/create)

  
But this is something to consider another day.