---
title: "Dock Test Data!"

tagnames: 'water-quality, thermal-fishing-bob, thermal, thermal-pollution, riffle, heat, multiple-input-thermal-fishing-bob, replication:689'
author: lperovich
path: /notes/lperovich/08-26-2015/dock-test-data.md
nid: 12172
uid: 443410
cids: 12453,12471
---

![](https://publiclab.org/public/system/images/photos/000/011/287/original/dockTest8.25.15.jpg)

# Dock Test Data!

by [lperovich](/profile/lperovich) | August 26, 2015 19:09

August 26, 2015 19:09 | Tags: [water-quality](/tag/water-quality), [thermal-fishing-bob](/tag/thermal-fishing-bob), [thermal](/tag/thermal), [thermal-pollution](/tag/thermal-pollution), [riffle](/tag/riffle), [heat](/tag/heat), [multiple-input-thermal-fishing-bob](/tag/multiple-input-thermal-fishing-bob), [replication:689](/tag/replication:689)

----

Don Blair (@donblair), Joe Goldbeck and I deployed the waterproofed temperature sensors on the MIT for a few hours yesterday--check out Don's great [post](http://publiclab.org/notes/donblair/08-25-2015/dock-test) about it!

I had a chance to look at the logged data today and it seems pretty decent.  Remember, there are four temperature sensors taking a measurement every ~10 seconds. Two of the sensors are completely in the water (48 shallower, 4F deeper--but by less than 6"), one is right around the surface of the water (49), and a fourth is completely out of the water (4B).  There's a few minutes of set-up time at the beginning and end of the data when we're preparing the sensors to go in the water or taking them out of the water.

**Summary Data**

Here's the summary data (data from set-up time removed):

ID |  min | mean | median | max
-------|------|-------|------|----------
48 | 24.9 | 27.4 | 27.4 | 32.7
49 | 27.1 | 27.8 | 27.6 | 34.9
4B | 27.2 | 30.3 | 29.6 | 35.6
4F | 26.6 | 27.2 | 27.2 | 31.3


This gives us a reasonable starting point for temperatures we might expect in the Mystic (@sara) or elsewhere.  We'll have to venture deeper into the Charles soon to get more data on temperatures further from the shore and throughout the river (guessing it'll be a bit colder there!).

The sensors that are in the water are also relatively consistent with one another which is good--some calibration could probably improve this, but it's reasonable and some variation could be due to depth.  

**Temperature Plots**

Here's a plot of all the data:


[![dockTest8.25.15.jpg](https://i.publiclab.org/system/images/photos/000/011/285/medium/dockTest8.25.15.jpg)](https://i.publiclab.org/system/images/photos/000/011/285/original/dockTest8.25.15.jpg)



Here's a zoomed in plot that focuses on the three sensors on/near the water during the sampling time:


[![dockTest8.25.15Zoom.jpg](https://i.publiclab.org/system/images/photos/000/011/286/medium/dockTest8.25.15Zoom.jpg)](https://i.publiclab.org/system/images/photos/000/011/286/original/dockTest8.25.15Zoom.jpg)



Note that there's some noise/strange jumps in the red sensor for the first part of the sampling. We should keep an eye on this--though the magnitude of this noise isn't large.  Overall, we see the temperatures on all sensors increase a bit overtime--this makes sense since they were out in the afternoon when the water was likely heating up slowly.

------------------------------------------------------------------
Thanks to @DavidMack for the link to the Charles River EPA buoy data!  Here are some basic comparisons.

The EPA Charles River buoy is outside the Museum of Science; this puts it ~1 mile away from the MIT Sailing Pavilion where we put our sensors. 

Our sensors were out from roughly 12:00 PM - 3:00 PM on August 25th.  The summary data for the EPA buoy at that day and time is:

Min. | Median  |  Mean  |   Max. 
-------|------------|----------|-----------
28.42  | 28.66 |  28.66 | 28.85 

Our sensor data seems to be in the right ballpark--it corresponds reasonable well to the EPA data.  Our median temperatures for the sensors in the water are about 1oC lower than the EPA data.  I'm not sure if this is to be expected--is the Museum of Science part of the river generally warming than the MIT sailing pavilion area?  This does seem like a reasonable amount of within-river variation at least.

Our range (max-min) is also a little wider than the EPA data, but I think at least some of that is due to not fully cutting out the "set-up time" data when were were putting our sensors in and out of the water.

Here's a plot of the EPA buoy data from that day:


[![charlesBuoy8.25.15.jpg](https://i.publiclab.org/system/images/photos/000/011/328/medium/charlesBuoy8.25.15.jpg)](https://i.publiclab.org/system/images/photos/000/011/328/original/charlesBuoy8.25.15.jpg)

The EPA-measured water temperatures also increase slowly from 12:00 - 3:00 PM which agrees with our data.
