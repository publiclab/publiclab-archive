---
title: "Modified camera with 25A red filter - NDVI needs calibration- Any Ideas?"

tagnames: 'balloon-mapping, near-infrared-camera, ndvi, infrared, infragram, super-red, question:infragram, question:white-balance'
author: Tbtouaki
path: /notes/Tbtouaki/09-24-2014/modified-camera-with-25a-red-filter-ndvi-needs-calibration-any-ideas.md
nid: 11178
uid: 420408
cids: 10408,11014,12072,12840,12841,21707
---

![](https://publiclab.org/public/system/images/photos/000/007/000/original/CORTE_A076_2014_07_18_IR.jpg)

# Modified camera with 25A red filter - NDVI needs calibration- Any Ideas?

by [Tbtouaki](/profile/Tbtouaki) | September 24, 2014 09:56

September 24, 2014 09:56 | Tags: [balloon-mapping](/tag/balloon-mapping), [near-infrared-camera](/tag/near-infrared-camera), [ndvi](/tag/ndvi), [infrared](/tag/infrared), [infragram](/tag/infragram), [super-red](/tag/super-red), [question:infragram](/tag/question:infragram), [question:white-balance](/tag/question:white-balance)

----

###What I want to do
I am trying to measure NDVI with balloon mapping on several burned sites (different time periods after the wildfire).

###My attempt and results
I have a two camera set:
One with true color

[![CORTE_A076_2014_07_18_TC.jpg](https://i.publiclab.org/system/images/photos/000/006/993/medium/CORTE_A076_2014_07_18_TC.jpg)](https://i.publiclab.org/system/images/photos/000/006/993/original/CORTE_A076_2014_07_18_TC.jpg)

The second modified, I removed the IR block filter and inserted a red 25A filter, for IR images.

[![CORTE_A076_2014_07_18_IR.jpg](https://i.publiclab.org/system/images/photos/000/006/994/medium/CORTE_A076_2014_07_18_IR.jpg)](https://i.publiclab.org/system/images/photos/000/006/994/original/CORTE_A076_2014_07_18_IR.jpg)

I put them both on the balloon simultaneously, and shoot burned sites on different recovery stages.



###Questions and next steps
I want to measure NDVI on those pictures, but my values are low, even when the trees survived the fire.

I've read here that a camera modified like mine gives us pure NIR on band 1, NIR+RED on band 2, and RED on band 3.
Because it is easier to use bands from just one picture from the same camera, I've measured NDVI using only the NIR camera's picture (B1-B3/B1+B3). 

[![NDVI_CORTE_A076_2014_07_18_IR.jpg](https://i.publiclab.org/system/images/photos/000/007/001/medium/NDVI_CORTE_A076_2014_07_18_IR.jpg)](https://i.publiclab.org/system/images/photos/000/007/001/original/NDVI_CORTE_A076_2014_07_18_IR.jpg)

I've checked if I might have made a mistake with the picture's bands but I haven't because when I invert the bands I get lower NDVI values for the living plants and higher values for the soil and dead plants.
[![NDVI_CORTE_A076_2014_07_18_IR_invertido.jpg](https://i.publiclab.org/system/images/photos/000/007/002/medium/NDVI_CORTE_A076_2014_07_18_IR_invertido.jpg)](https://i.publiclab.org/system/images/photos/000/007/002/original/NDVI_CORTE_A076_2014_07_18_IR_invertido.jpg)

Should I use the RED band from the true color camera? 
It is hard to over-lapse all my pictures. 
But the values are still very negative when compared with the expected. In fact the values are really similar when not equal to the NDVI measured using only the modified camera.

[![NDVI_CORTE_A076_2014_07_18_IR_TC.jpg](https://i.publiclab.org/system/images/photos/000/007/004/medium/NDVI_CORTE_A076_2014_07_18_IR_TC.jpg)](https://i.publiclab.org/system/images/photos/000/007/004/original/NDVI_CORTE_A076_2014_07_18_IR_TC.jpg)

I need to calibrate the photos or the NDVI.
Any ideas?
Could really use some help