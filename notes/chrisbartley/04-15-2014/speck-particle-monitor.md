---
title: "Speck particle monitor"

tagnames: 'indoor-air-quality-mapping, particulate-sensing, pittsburgh, cmu, air-quality, visualization, dust, optical-sensor, particulate, speck, pennsylvania, air-sensors'
author: chrisbartley
path: /notes/chrisbartley/04-15-2014/speck-particle-monitor.md
nid: 10316
uid: 422225

---

![](https://publiclab.org/public/system/images/photos/000/003/680/original/speck.jpg)

# Speck particle monitor

by [chrisbartley](../../../profile/chrisbartley) | April 15, 2014 21:23

April 15, 2014 21:23 | Tags: [indoor-air-quality-mapping](../tag/indoor-air-quality-mapping), [particulate-sensing](../tag/particulate-sensing), [pittsburgh](../tag/pittsburgh), [cmu](../tag/cmu), [air-quality](../tag/air-quality), [visualization](../tag/visualization), [dust](../tag/dust), [optical-sensor](../tag/optical-sensor), [particulate](../tag/particulate), [speck](../tag/speck), [pennsylvania](../tag/pennsylvania), [air-sensors](../tag/air-sensors)

----

##About 

Speck is a low-cost particulate monitor currently under development by the [CMU CREATE Lab](http://cmucreatelab.org/) as a tool for citizen science and personal exposure tracking. By combining maps and data visualization tools, we hope to enable communities and individuals to better understand and quantify the quality of the air they breathe.

Speck uses a [Syhitech DSM501A](http://www.chinaeds.com/zl/20123814144392849_DSM501APDF.pdf), similar to the popular Shenyei PM sensor, but we have paired it with a small fan to pull air across the sensor. We found that the fan produces much better responsiveness and more signal than simply relying on the resistor's convection effect.  To convert the sensor's stochastic readings to an actual reading, we did a machine learning-style parameter search to create a custom piecewise linear low-pass filter by comparing the Speck readings to a Hach MET ONE. 

[![speck.png](https://i.publiclab.org/system/images/photos/000/003/678/medium/speck.png)](https://i.publiclab.org/system/images/photos/000/003/678/original/speck.png)

##Results

Initial results are encouraging, with the Speck producing readings for ~PM 2 particles which are recognizably similar to professional-grade sensors such as the MET ONE.  We present here visualizations of two our our tests: a test with 144 specks arranged in 12x12 grid, and another with 64 Specks located in homes around Pittsburgh, PA for a period of five days.

###12x12 Grid Test

We arranged 144 Specks in a 12 x 12 grid to test how particles flow through the room. We tested with a vacuum cleaner, an air purifier, and candles. The video below discusses the results and gives a brief demo of how to use the visualization.

We also encourage you to also [explore the visualization for yourself](http://explorables.cmucreatelab.org/explorables/speck-air-quality-test-explorable.html) (best viewed in Google Chrome).

<iframe src="//player.vimeo.com/video/85833543" width="520" height="330" frameborder="0" allowfullscreen></iframe>

###In Home Test

We loaned 64 Specks to members of the CMU School of Computer Science community to put in their homes for five days.  The Specks recorded samples once per minute.  Once all Specks were returned, we created a visualization which combines geolocation with plots of the recorded data.  

[![speck_in_home.png](https://i.publiclab.org/system/images/photos/000/003/679/medium/speck_in_home.png)](https://i.publiclab.org/system/images/photos/000/003/679/original/speck_in_home.png)

Please [feel free to explore the results](http://explorables.cmucreatelab.org/explorables/speck-in-home-explorable.html) (best viewed in Google Chrome).  Suggested exploration: set the "Show" filter to only show Specks located in the kitchen, and then slowly move the red, triangular cursor back and forth in the timeline to see changes in particles detected during typical mealtimes.

##Future

We're continuing to develop and improve the Speck, and are also developing a visualization portal for environmental sensor data.