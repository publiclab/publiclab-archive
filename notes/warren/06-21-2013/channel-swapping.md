---
title: "Channel swapping"\ntagnames: 'near-infrared-camera, ndvi, infrared, infragram, infrablue, response:8190, tests, response:8261, infragram-conversion'
author: warren
path: /notes/warren/06-21-2013/channel-swapping.md
nid: 8353
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/000/557/original/Screen_Shot_2013-06-21_at_11.00.36_AM.png)

# Channel swapping

by [warren](../profile/warren) | June 21, 2013 15:15

June 21, 2013 15:15 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [response:8190](../tag/response:8190), [tests](../tag/tests), [response:8261](../tag/response:8261), [infragram-conversion](../tag/infragram-conversion)

----

##What I want to do

Due to the [issues with blue channel infrared leakage](/notes/warren/06-18-2013/continuing-difficulties-with-infrablue-in-cheaper-cmos-cameras), I was interested to see if it was possible to use the green channel data in place of the blue channel data to create useful [NDVI](/wiki/ndvi) alternatives. (I suggested this approach [in this comment](/notes/warren/06-18-2013/continuing-difficulties-with-infrablue-in-cheaper-cmos-cameras#c5486).) 

##My attempt and results

As you can see in the lead image, the green channel does seem to be detecting reflected infrared (as [this graph](http://farm5.static.flickr.com/4095/5412520298_edc64e6e55.jpg) suggests it will), but much less than the neighboring R and B channels. Unfortunately it also seems to detect less reflected light on non-vegetation, so maybe the approach is doomed from the start...

Anyhow, here is the image with the B and G channels swapped (which I did in order to use the [Infrapix](http://infrapix.pvos.org) prototype web utility), plus the "NDVI" alternative and the infrared channel:

![Screen_Shot_2013-06-21_at_11.03.25_AM.png](https://i.publiclab.org/system/images/photos/000/000/559/medium/Screen_Shot_2013-06-21_at_11.03.25_AM.png)

(see the full data here: http://infrapix.pvos.org/show/blue-green-swap.png)

And here is a larger version of the full alt-NDVI:

![ndvi_blue-green-swap.png](https://i.publiclab.org/system/images/photos/000/000/560/medium/ndvi_blue-green-swap.png)

##Questions and next steps

Basically it seems not to work, from what I can tell -- vegetation is not highlighted vs. the non-vegetation background. 

Perhaps by looking at these histograms of the raw image (working from [Chris Fastie's post](/notes/cfastie/06-13-2013/histograms), we can see if there really is enough differentiation to understand differences in health: 

![Screen_Shot_2013-06-21_at_11.11.05_AM.png](https://i.publiclab.org/system/images/photos/000/000/561/medium/Screen_Shot_2013-06-21_at_11.11.05_AM.png)

![Screen_Shot_2013-06-21_at_11.09.40_AM.png](https://i.publiclab.org/system/images/photos/000/000/562/medium/Screen_Shot_2013-06-21_at_11.09.40_AM.png)

What do you think?

**Update:** I did one more where I ran auto-levels on the green channel to boost the range, which may not be "scientifically justified" but it did produce better contrast in the resulting alt-NDVI. It still did not, however, seem to differentiate plants:

![ndvi_Screen_Shot_2013-06-21_at_11.16.04_AM.png](https://i.publiclab.org/system/images/photos/000/000/563/medium/ndvi_Screen_Shot_2013-06-21_at_11.16.04_AM.png)