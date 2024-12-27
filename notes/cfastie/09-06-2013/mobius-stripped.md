---
title: "Mobius, stripped"

tagnames: 'near-infrared-camera, ndvi, infragram, histogram, infragram-conversion, infragram-sandbox, mobius-actioncam, rcgroups, response:9293'
author: cfastie
path: /notes/cfastie/09-06-2013/mobius-stripped.md
nid: 9296
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/001/413/original/mobiusInfRGBchan1800.jpg)

# Mobius, stripped

by [cfastie](../../../profile/cfastie) | September 06, 2013 01:13

September 06, 2013 01:13 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [histogram](../tag/histogram), [infragram-conversion](../tag/infragram-conversion), [infragram-sandbox](../tag/infragram-sandbox), [mobius-actioncam](../tag/mobius-actioncam), [rcgroups](../tag/rcgroups), [response:9293](../tag/response:9293)

----

<em>Image above: The three channels in part of an infrablue photo taken with a Mobius ActionCam modified with a Rosco filter. All three channels record lots of infrared light. (the images are dark because they each have about a third of the brightness of the original photo)</em>

Carl just posted a great description of his first results with a [Mobius ActionCam modified to take infrablue photos](http://publiclab.org/notes/carllipo/09-05-2013/modifying-a-mobius-actioncam-for-near-ir-photos). The $70 camera takes very nice normal photos with good color and sharpness. Carl did not say which infrablue filter he used, but it might be a Rosco #2007. The color of the infrablue photo is a little different from most other infrablue photos I have seen, and looks bright and crisp. The image above indicates that all three channels in this image have lots of infrared information in them -- tree leaves and grass look like they are covered in snow. As usual, the green channel is a little darker, suggesting that it is recording less infrared. But none of the channels looks like it it would be a good source of information about the visual part of the spectrum that plants use.

[![mobiusInfHist.jpg](https://i.publiclab.org/system/images/photos/000/001/414/large/mobiusInfHist.jpg)](https://i.publiclab.org/system/images/photos/000/001/414/original/mobiusInfHist.jpg)
<p></p><em>Histograms for the grass area in the infrablue photo taken by the Mobius ActionCam. The blue channel for healthy grass is brighter than the red channel, suggesting that there is more IR recorded in the blue channel. The same is true for the tree foliage (not shown).</em>

The histogram of the infrablue photo reveals something I have not seen before. The problem with many inexpensive CMOS cameras is that there is not much separation between the blue and red channels -- both have lots of IR in them. With the Mobius camera, there is separation between them, but the blue channel is brighter than (to the right of) the red, presumably because it has more IR in it. That is new.


[![InfOrgPan.JPG](https://i.publiclab.org/system/images/photos/000/001/415/large/InfOrgPan.JPG)](https://i.publiclab.org/system/images/photos/000/001/415/original/InfOrgPan.JPG)
<p></p><em>Output from Infragram.org. All the NDVI values are below zero.</em>

So when NDVI is calculated, the difference between R and B is negative, and all NDVI values are therefore negative. This could be adjusted, but there may not be much reason to do so. The NDVI values might appear to have meaning because healthy foliage has higher values than other things, but that seems to be an artifact.  It appears that, as in most other small CMOS cameras tested, all the channels are contaminated with IR, and no channel is a good representative of the light used by plants for photosynthesis. 