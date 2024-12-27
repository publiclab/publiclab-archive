---
title: "Quantify wetland from aerial UV photo"

tagnames: 'gulf-coast, multispectral, uv, wetlands, ultraviolet, lousiana, activity:image-analysis, activity:wetlands, first-time-poster'
author: cesarharada
path: /notes/cesarharada/2-24-2011/quantify-wetland-aerial-uv-photo.md
nid: 102
uid: 50

cids: 238

---

![](https://publiclab.org/sites/default/files/test_cesar_adam4_0.jpg)

# Quantify wetland from aerial UV photo

by [cesarharada](../../../profile/cesarharada) | February 24, 2011 09:13

February 24, 2011 09:13 | Tags: [gulf-coast](../tag/gulf-coast), [multispectral](../tag/multispectral), [uv](../tag/uv), [wetlands](../tag/wetlands), [ultraviolet](../tag/ultraviolet), [lousiana](../tag/lousiana), [activity:image-analysis](../tag/activity:image-analysis), [activity:wetlands](../tag/activity:wetlands), [first-time-poster](../tag/first-time-poster)

----

You want to watch the video tutorial  :
https://www.youtube.com/watch?v=xKy1EZ_TbNs

>> Question : How can you extract the % of wetland from an UV aerial picture using photoshop? 

_ Instructions : 
1. isolate the part that you are interested in using the menu/ image/ adjustment/ replace color. There you want to have a quite fuzzy selection and darken the desired part. 

2. after isolating the part you are interested in -black area- apply menu/ image/ adjustment/ threshold

3. use magic wand /untick "contiguous" pixel to select all the black pixels available. Open menu/ window/ histogram/ expanded view. Here you will see how many black pixels are selected. Now you know how many black pixels there is on this image - corresponding the area of wetland from the original UV picture. You can convert the number of pixels into a % (proportions of wetland) or in surface area for quantifying. It is possible to optimize this workflow by creating a script or recording the chain of actions.