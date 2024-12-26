---
title: "The Blair House Project"\ntagnames: 'vermont, events:vermont, riffle, snowfest, blair-house, quinzee, snowfest2014, riffle-examples'
author: lauradietz
path: /notes/lauradietz/02-23-2014/the-blairhouse-project.md
nid: 10058
uid: 420993

---

![](https://publiclab.org/public/system/images/photos/000/002/999/original/blair-house-temperature.png)

# The Blair House Project

by [lauradietz](../profile/lauradietz) | February 23, 2014 20:22

February 23, 2014 20:22 | Tags: [vermont](../tag/vermont), [events:vermont](../tag/events:vermont), [riffle](../tag/riffle), [snowfest](../tag/snowfest), [blair-house](../tag/blair-house), [quinzee](../tag/quinzee), [snowfest2014](../tag/snowfest2014), [riffle-examples](../tag/riffle-examples)

----

###What I want to do
Measure overnight temperature inside verus outside a quinzee.

The quinzee is henceforce called "Blair House" was built by Galen and Chris Fastie to provide a mansion for Don Blair to take residence in during SNOWFEST 2014.

### Experimental Setup
The experimental setup involves two [RIFFLE](http://publiclab.org/wiki/riffle)-like temperature taking prototype (called RIFFLE, henceforth) to take real-time calibrated temperature data. One RIFFLE spent the night with Don inside Blair House, the other RIFFLE was placed on top of Blair House.

The data was taken on the night from Saturday to Sunday Feb 23rd, 2014 from 1:00 am to 11:00 am. The RIFFLE sensors were activated at 1 am indoors, carried outside and placed in/on Blair House, and removed 10 hours later and carried inside to download data. Don Blair himself was removed from the Blair House around 10:00 am.

### Results

The figure below shows the temperature over time inside and outside Blair House. After the experiment we learned that the "inside" sensor had a bad contact which introduced some noise to the measurement. We denoised the data (both inside and outside) with an overlapping moving average over 4 (*) minutes and report mean (as line) and standard deviation (as a shaded tube).

We see that the temperature inside is stable just above freezing temperature, despite the varying outdoors temperature which was partially well below freezing. The high temperature at the begin and end of the measurement refers to the room temperature of the main convention hall and are not considere part of the experiment. 

Don Blair was removed from Blair house around 10:00 am. His presence/absence did not have any measurable effect on the inside temperature, although the high noise of the inside measurement might be masking any slow effects.

[![blair-house-temperature.png](https://i.publiclab.org/system/images/photos/000/003/021/medium/blair-house-temperature.png)](https://i.publiclab.org/system/images/photos/000/003/021/original/blair-house-temperature.png)


We pair our measurement with data collected by the Weather Underground community in Middlebury State AP, Middlebury, VT, displayed in the Figure below. It confirms the steady incline in outside temperature observed between 6:20 am until the end of the measurement. 


[![hist-temperature-weatherunderground.gif](https://i.publiclab.org/system/images/photos/000/002/998/medium/hist-temperature-weatherunderground.gif)](https://i.publiclab.org/system/images/photos/000/002/998/original/hist-temperature-weatherunderground.gif)

The location of Blair House was on a south face of a mountain and the local morning weather provided sunny and cloudy intervals, which explain the up/down slopes in temperature starting around 9:30.

We notice an increase of the inside temperature around 1:40 am, which is suspected to correspond to the time where Don Blair take a video of the sensor, probably applying a jet of air at body temperature onto the sensor. We can't reject the hypothesis that Don was overcome by loneliness, but we conclude that the RIFFLE did not provide much support and was abandoned quickly. More details on this matter will follow...

### Conclusions

1. The temperature inside Blair House provided stable temperature just above freezing.

2. The RIFFLE  provides reliable temperature estimates confirmed by established weather communities.


###Why I'm interested

With the increased popularity of SNOWFESTs in Middlebury, VT, new environmentally-friendly options for short-term housing needs to be made available. This experiment confirms the feasibility of an ancient old methods invented by Athabascan indians.

I am also concerned about Don Blair's health status.

###Raw Data
The raw data of the measurement is available as tab-separated-files below.

<a href="https://i.publiclab.org/system/images/photos/000/003/001/original/blair-inside.tsv"><i class="icon icon-file"></i> blair-inside.tsv</a>

<a href="https://i.publiclab.org/system/images/photos/000/003/002/original/blair-outside.tsv"><i class="icon icon-file"></i> blair-outside.tsv</a>


(*) Update Feb 25: Noticing that 12 minutes is a wide window hiding rapid changes in temperature I updated the plot with a window which is 4 minutes wide (sliding step 2 minutes)