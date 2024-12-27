---
title: "NDVI with a key chain camera to use with a mini-drone - Third steps Part A"

tagnames: 'ndvi, imagej, infragram, drone, photomonitoring, ndvi-ag, hi'
author: azaelb
path: /notes/azaelb/05-09-2015/ndvi-with-a-key-chain-camera-to-use-with-a-mini-drone-third-steps-part-a.md
nid: 11802
uid: 319070

cids: 11638,11640

---

![](https://publiclab.org/public/system/images/photos/000/009/859/original/InfragramColorIndex.jpg)

# NDVI with a key chain camera to use with a mini-drone - Third steps Part A

by [azaelb](../../../profile/azaelb) | May 09, 2015 21:50

May 09, 2015 21:50 | Tags: [ndvi](../tag/ndvi), [imagej](../tag/imagej), [infragram](../tag/infragram), [drone](../tag/drone), [photomonitoring](../tag/photomonitoring), [ndvi-ag](../tag/ndvi-ag), [hi](../tag/hi)

----

After the two former steps, [NDVI with a key chain camera to use with a mini-drone - First steps](http://publiclab.org/notes/azaelb/04-11-2015/ndvi-with-a-key-chain-camera-from-a-mini-drone-first-steps) and [NDVI with a key chain camera to use with a mini-drone - second steps](http://publiclab.org/notes/azaelb/04-27-2015/ndvi-with-a-key-chain-camera-to-use-with-a-mini-drone-second-steps) it was time to go to the field, load the camera under the mini-drone and try an open green area which has been battered during the dry season here (by the way El Niño arrived in december over here).
We tried this time only the blue filter we received from Public Lab with the two filters kit, with the mini camera we prepared before. In Part B we will try the red filter.
The mini-drone is a Syma X5C, a cheap one capable of carrying the mini camera we prepared. For more endurance tests we will be using a larger drone with FPV (First Person View) which will carry other sensors to detect CO and CO2.
##Results of Indexing an open field
We obtained a series of short videos with our mini camera. The videos were analyzed using the VSDC video editor from VideoSoftDev.com. From it we extracted snapshots of the runs' videos when the camera was looking onto open fields and stored them as jpeg files.

These images were processed using Infragram Sandbox. The blue-green image was obtained using the GREY (R-B)/(R+B) setup and later colored it.
The pink-red image was obtained using the HSV -(R-B)/(R+B) setup with numbers 1 and 3 in the boxes. Increasing the right number from 1 to 3 allowed to see more detailed features of the images.

[![InfragramAnalysisMay9-2015.jpg](https://i.publiclab.org/system/images/photos/000/009/857/medium/InfragramAnalysisMay9-2015.jpg)](https://i.publiclab.org/system/images/photos/000/009/857/original/InfragramAnalysisMay9-2015.jpg)

This other image set has the original nearIR above and it was processed using ImageJ with the Photomonitoring plugin, result shown below. We use the default setup with lookup table set to 16_colors.lut, blue for Channel for Red, and red for Channel for IR.

[![Color_Index_4revb-withoriginal.jpg](https://i.publiclab.org/system/images/photos/000/009/858/medium/Color_Index_4revb-withoriginal.jpg)](https://i.publiclab.org/system/images/photos/000/009/858/original/Color_Index_4revb-withoriginal.jpg)

In both original images we can see the buildings and the lawn area with two artificial lagoons which have working water fountains. There is an asphalt road to the right in front of the building which also have some lawns in their facades.

##Discussion
The results obtained with the HSV image processing, associates dark red with no vegetation, either is water bodies, asphalt, concrete or edification, whereas the pink coloring seem to indicate vegetation. Where pink gets darker coincides with vegetation in bad shape, where clear indicates vegetation in good shape, as reviewed in site.  The blue-green image is more difficult to understand, it only tells that the green color corresponds more or less to vegetation but does not indicate its state.
In the case of the image obtained with ImageJ/Photomonitoring seems similar to the case of the GREY blue-green above with more details and contours. Dark green corresponds to no vegetation, and shapes the lagoons and asphalt road very well, not that well with buildings. It associates yellow color to vegetation and some of green pixels within the yellow area indicates patches with vegetation in not a good shape, as noticed with the HSV processed image.

The pink-red obtained with Infragram coincides in many features with the yellow-green obtained with Photomonitoring plugin, but without same coloring.

Here is our problem. We have tried to understand why our results are not quite similar to others using the blue filter. Is it that our camera does not have good resolution, or should we take pictures/videos directly from above, or what are we doing wrong with the programs, like Infragram Sandbox or ImageJ with the Photomonitoring plugin?

At this moment we are converting an old but working Nikon Coolpix L22 into a near IR camera to use the blue filter from the Public Lab kit to compare with what we have so far.
We would really appreciate your comments on our work, to see if Part B is a lot better than Part A.

-azaelb