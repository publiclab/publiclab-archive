---
title: "Mobius Actioncam with WRATTEN 25a filter NDVI analysis on PhotoMonitoring Plugin"

tagnames: 'ndvi, infrared-photography, aerial-mapping, fiji, mobius-actioncam, wratten25a, photomonitoring, hsv, first-time-poster'
author: silvanhi
path: /notes/silvanhi/08-22-2014/mobius-actioncam-with-wratten-25a-filter-ndvi-analysis-on-photomonitoring-plugin.md
nid: 11072
uid: 427351

cids: 10107,10108,10109,10110,10111,10112,10113,10125,10500,11544

---

![](https://publiclab.org/public/system/images/photos/000/006/380/original/42.jpeg)

# Mobius Actioncam with WRATTEN 25a filter NDVI analysis on PhotoMonitoring Plugin

by [silvanhi](../../../profile/silvanhi) | August 22, 2014 12:07

August 22, 2014 12:07 | Tags: [ndvi](../tag/ndvi), [infrared-photography](../tag/infrared-photography), [aerial-mapping](../tag/aerial-mapping), [fiji](../tag/fiji), [mobius-actioncam](../tag/mobius-actioncam), [wratten25a](../tag/wratten25a), [photomonitoring](../tag/photomonitoring), [hsv](../tag/hsv), [first-time-poster](../tag/first-time-poster)

----

Hello everybody. I really appreciate this useful and open-minded communtiy. I spent the last couple weeks reading many articles on NDVI photography and made some great progress with all the information provided on this site. Now I'm at a point at which I need some specific help from experts. 

###What I want to do
I'd like to make a big NDVI Map with my quadrocopter. The Idea is to support the farmers around me with useful information. 

###My attempt and results
I did make some progess with a proper white balancing and re-focusing the mobius action Cam. I managed to produce relatively accurate NDVI photos with the Infragram Sandbox-Tool and a custom HSV-Setting. The H-Value is [-(R-B)/(R+B)*4] ; S=V=1. You can see these results in the attachement.

###Questions
Even though I've got some good results with the Infragram Sandbox, the resolution of my images gets really decreased. So I installed Ned Hornings PhotoMonitoring Plugin on Fiji to get the same result but with a much better resolution. Unfortunately I'm not able to reproduce these results. I can't include my custom HSV-Formula i used on the sandbox. I'm also not sure which .lut file and ColorIndex values I have to use to get the same results like on the sandbox.
The best approximation i got is in the attachement.

Additionally I can't understand why in my picture with the sandbox high photosynthesis areas are gree represented and not red.
I would be really thankful if somebody can support me.

Thanks.

Here you can see the scenery (taken with an iPhone). 

[![photo.JPG](https://i.publiclab.org/system/images/photos/000/006/384/medium/photo.JPG)](https://i.publiclab.org/system/images/photos/000/006/384/original/photo.JPG)


Here is the picture I get in he plugin with the questioned settings.
[![Screen_Shot_2014-08-22_at_13.34.26.png](https://i.publiclab.org/system/images/photos/000/006/381/medium/Screen_Shot_2014-08-22_at_13.34.26.png)](https://i.publiclab.org/system/images/photos/000/006/381/original/Screen_Shot_2014-08-22_at_13.34.26.png)

[![Screen_Shot_2014-08-22_at_13.34.43.png](https://i.publiclab.org/system/images/photos/000/006/382/medium/Screen_Shot_2014-08-22_at_13.34.43.png)](https://i.publiclab.org/system/images/photos/000/006/382/original/Screen_Shot_2014-08-22_at_13.34.43.png)


This should be the result:
[![42.jpeg](https://i.publiclab.org/system/images/photos/000/006/383/original/42.jpeg)](https://i.publiclab.org/system/images/photos/000/006/383/original/42.jpeg)

A quick follow up question: The defautl .lut in the infragram sandbox is the following i think.
[![Screen_Shot_2014-08-17_at_20.34.37.png](https://i.publiclab.org/system/images/photos/000/006/385/medium/Screen_Shot_2014-08-17_at_20.34.37.png)](https://i.publiclab.org/system/images/photos/000/006/385/original/Screen_Shot_2014-08-17_at_20.34.37.png)

Even tough a high NDVI value (red) represents high photosyntesis, it does exactly the opposite in my picture. green is high photosynthesis and blue/red is low as you can see. Why is that?

