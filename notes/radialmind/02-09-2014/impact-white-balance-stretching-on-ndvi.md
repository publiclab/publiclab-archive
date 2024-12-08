---
title: Impact white balance & stretching on NDVI
tagnames: near-infrared-camera, ndvi, infragram
author: radialmind
path: /notes/radialmind/02-09-2014/impact-white-balance-stretching-on-ndvi.md
nid: 10022
uid: 170347

---

# Impact white balance & stretching on NDVI

by [radialmind](../profile/radialmind) February 09, 2014 13:44

February 09, 2014 13:44 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram)

###What I want to do
After my research note yesterday here I'm posting some pictures that are significant improvements (datawise) to the end results. I'm demonstrating the impact that the white balance has on the end data and I'm demonstrating the effect of stretching in the visible band. Stretching in the NIR band didn't have any apparent significant effect, maybe just a slight intensification of the end results, but stretching in the NIR band is something that still needs further investigation.

###My attempt and results
These two pictures show some pictures taken yesterday with a custom white balance, taken in sunny day off a red surface with stretching in the visible band.

[![custom-white-balance.JPG](https://i.publiclab.org/system/images/photos/000/002/842/medium/custom-white-balance.JPG)](https://i.publiclab.org/system/images/photos/000/002/842/original/custom-white-balance.JPG)

[![custom-white-balance-ndvi.jpg](https://i.publiclab.org/system/images/photos/000/002/841/medium/custom-white-balance-ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/002/841/original/custom-white-balance-ndvi.jpg)

These two pictures were taken today with auto white balance and stretching in the visible band. Notice immediately how the ndvi colors are dampened. That dampening is the effect of an "incorrect" white balance setting. The blue channel in the incorrect white balance setting just receives a lot less radiation.

[![auto-white-balance.JPG](https://i.publiclab.org/system/images/photos/000/002/839/medium/auto-white-balance.JPG)](https://i.publiclab.org/system/images/photos/000/002/839/original/auto-white-balance.JPG)

[![auto-white-balance-ndvi.jpg](https://i.publiclab.org/system/images/photos/000/002/840/medium/auto-white-balance-ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/002/840/original/auto-white-balance-ndvi.jpg)

These photos were taken with fluorescent white balance, yet this time no stretching applied on the visible band. Notice how shadows are now correctly represented, although it has resulted in an image that doesn't have a lot of variation. Yellows and reds don't even appear anymore.

[![fluorescent-white-balance.JPG](https://i.publiclab.org/system/images/photos/000/002/843/medium/fluorescent-white-balance.JPG)](https://i.publiclab.org/system/images/photos/000/002/843/original/fluorescent-white-balance.JPG)

[![fluorescent-white-balance-ndvi-nostretch.jpg](https://i.publiclab.org/system/images/photos/000/002/846/medium/fluorescent-white-balance-ndvi-nostretch.jpg)](https://i.publiclab.org/system/images/photos/000/002/846/original/fluorescent-white-balance-ndvi-nostretch.jpg)

###Conclusions and next steps
So white balance does have a large effect on the end result, but it's mostly a question of resolution, the magnitude at which NIR radiation is captured in the blue channel. You can imagine this as if white balance determines the gains per channel. Some gain settings would apply a lot of gain to the red and very little gain to the blue, other settings produce a better (more even) distribution of radiation capture on the sensor. This "evenness" needs to be considered on the basis of the amount of visible and NIR radiation on a given day. These "better" white balance settings have more data in them, so can produce more informative end results.

The stretching in the photomonitoring plugin doesn't seem to work well my results at all. The stretching is the most important feature which negatively impacts NDVI by the shadows in the image. Even mild shadows go crazy. In the last results, shadows around the buildings are now actual shadows and you can now see that the windows are indeed the darker parts, so stretching in the visible band seems to lead to significant distortion of end results.

There's still something to resolve for "more correct" NDVI results. The formula directly compares actual values for NIR and visible light through addition and subtraction. This means that for correct results in the -1.0 to 1.0 range, the radiation magnitude must be directly comparable. I think that this is often not the case. A poor white balance already results in different gains per channel. The amount of visible vs. NIR radiation in the atmosphere is also not necessarily the same (I think it isn't, not an expert there).

This means that without stretching you'd expect to see correct variations of NDVI in the image, but not necessarily the correct coloring. It is as if the entire color scheme is shifted. Stretching the IR channel didn't seem to do anything in my case, so I'm looking at possibilities to apply a gain myself.

Further research could then focus on whether that gain should be multiplicative or additive. 