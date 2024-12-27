---
title: "Engineered Histograms"

tagnames: 'near-infrared-camera, ndvi, infrared, infragram, infrablue, response:8190, tests, response:8261, response:8353'
author: cfastie
path: /notes/cfastie/06-21-2013/engineered-histograms.md
nid: 8358
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/564/original/907_rgbhist.jpg)

# Engineered Histograms

by [cfastie](../../../profile/cfastie) | June 21, 2013 22:04

June 21, 2013 22:04 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [response:8190](../tag/response:8190), [tests](../tag/tests), [response:8261](../tag/response:8261), [response:8353](../tag/response:8353)

----

<em>Image above: An infrablue photo from a little camera Jeff converted. The histograms of a bright area of tree foliage show that the red and blue channels are very similar, probably because they are recording lots of infrared light.</em>

The infrablue photos from Jeff's current test CMOS camera are a challenge. The red and blue channels seem to be recording the same thing for vegetation, which is likely a lot of infrared light. With little difference between the red and blue channels, NDVI calculations will yield very low values. An example of the type of histogram we want is below for one of Brenden's recent test shots. The red, green, and blue histograms are well separated. This photo yields a biologically meaningful NDVI image.

![A490_4400_NDVI_histos.jpg](https://i.publiclab.org/system/images/photos/000/000/565/large/A490_4400_NDVI_histos.jpg)
<p></p><em>Upper: An infrablue photo taken by Brenden with an A490 with an Apollo 4400 filter, and the histograms of the lawn. Lower: The resulting NDVI image and histogram of values for the lawn.</em>

The histograms of Jeff's infrablue photo can be manipulated in Photoshop with the color balance tool to resemble the histogram of Brenden's infrablue photo. But the resulting NDVI does not show the desired pattern with higher values for vegetation than for buildings. In fact, the building has higher values than the plants, I guess because the Photoshop manipulations did the same thing to the building pixels as to the plant pixels.  It looks like you have to start with an infrablue photo that has a particular type of difference between plant and non plant parts of the scene.

![907_CB_NDVI_histos.jpg](https://i.publiclab.org/system/images/photos/000/000/566/large/907_CB_NDVI_histos.jpg)
<p></p><em>Upper: Jeff's infrablue photo after the histogram was tugged around in Photoshop. The histogram is for the selected area of tree top foliage. Lower: The resulting NDVI image and histogram of the tree top foliage. The building is still growing faster than the tree.</em>

