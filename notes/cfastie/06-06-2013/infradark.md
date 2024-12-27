---
title: "Infradark"

tagnames: 'ndvi, infragram, night'
author: cfastie
path: /notes/cfastie/06-06-2013/infradark.md
nid: 8089
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/489/original/WillsTwo.jpg)

# Infradark

by [cfastie](../../../profile/cfastie) | June 06, 2013 23:02

June 06, 2013 23:02 | Tags: [ndvi](../tag/ndvi), [infragram](../tag/infragram), [night](../tag/night)

----

<em>Image above: Will Ward's nighttime infrablue and normal photos.</em>

Will Ward took an intriguing infrablue photo in the dark which looked brighter than a normal photo he took at the same time ([posted in this thread](https://groups.google.com/forum/?hl=en&fromgroups=#!topic/plots-infrared/uBoeUUwive0)). My response was that the plants were reflecting lots more near-infrared light (NIR) than visible light, so the infrablue photo (which has a NIR channel) looked brighter.  These photos got me thinking that there are several factors which determine whether a normal or infrablue photo should be brighter. Most importantly:
What is the proportion of visible to near-infrared wavelengths...

+  1) in the light source illuminating the scene,
+  2) in the light reflected from various parts of the scene,
+  3) in the light passed through lenses and filters to the sensor,
+  4) that can be captured by the sensor.

My best answers at the moment: 

 +  1) The light source for Will's normal and infrablue photos is the same (and might have similar intensities of visible and near IR light) so that does not effect the difference between the two photos.
+   2) Green foliage can reflect several times more NIR than visible wavelengths, so near infrared photos of plants should be brighter than regular RGB photos.
+   3) The infrablue filter on Will's camera passes less than half of the blue light, even less green, and very little red. So less blue, green, and red light arrives at the sensor in an infrablue camera than in a normal camera. The filter passes more than half of the really near NIR, and we are not sure how much of the longer wavelength NIR it passes. A normal camera has an IR filter which blocks most NIR light. That filter has been removed in an infrablue camera.
+  4) The sensors in the two cameras are generally similar, and probably don't record much NIR light with wavelengths longer than 850 nm.

So number 2 above could indeed explain why the infrablue photo was brighter. However, Will did not tell us what the ISO or shutter speed or f-stop for either photo was. Some of the difference between his photos could just be due to the photos being exposed differently.

I took some infrablue and normal photos at dusk last night to learn about this effect. I mostly learned some general things about infrablue photos.  

+  **Normal photo:** Canon S95, ISO 800, 0.3 seconds, f/2.0
+  **Infrablue photo: **Canon A810, ISO 800, 0.4 seconds, f/2.8, Rosco #2007

So the exposure was similar for both cameras, and the brightness of both photos is similar. But the infrablue camera has a filter in front of the lens that transmits only about **10% of the incoming light**. It is also missing the IR block filter that blocks much of the NIR light in the normal (S95) camera. 

In the figure below, the images have been brightened -- the originals half as much as the channels. This was done because they were rather dim images (and each channel is only a third as bright as the original), and it was done the same for images from both cameras.

![infdark-chans.jpg](https://i.publiclab.org/system/images/photos/000/000/488/large/infdark-chans.jpg)

**Brighter plants in NIR:** The plants in the infrablue photo are definitely brighter than in the normal photo, and that's because they reflect lots of NIR light. This is confirmed by the relative brightness of the plants in the red channel compared to that channel in the normal photo. The red channel in the infrablue photo records lots of NIR light which makes plants brighter than in the red channel of the normal photo.

**Some NIR in the green channel:** The green channel of the infrablue photo has bright foliage similar to the red channel. That means lots of NIR light is being recorded in the green channel. This contributes to the overall brightness of plants in the original infrablue photo. It also might help explain why [MaxMax computes an enhanced NDVI](http://www.maxmax.com/endvi.htm) index by combining the red channel with the green channel to represent NIR. 

**Dark blue channel:** The infrablue blue channel is quite dim compared to the normal photo blue channel. This makes sense given that a filter which blocks most blue light is in front of the lens. The infrablue filter blocks even more green and red light, but those channels are recording mostly NIR light, so they are not so dark. It also makes sense that the darkest part of the blue channel is where the plants are -- leaves are absorbing lots of blue light. 

_Summary_: In the infrablue camera, the addition of the infrablue filter which blocks 90% of the light across the visible/NIR spectrum is counteracted by the removal of the IR block filter which allows many times more near infrared light to reach the sensor, and brightens both the red and green channels.
 
The goal of an infrablue camera is to capture NIR light in one channel and visible light that is used by plants in another. Both the red and green channels are capturing lots of NIR light, and the blue channel is capturing blue light (which chlorophyll absorbs). NDVI compares the amount of NIR light reflected from plants (red channel) to the amount of blue light reflected (blue channel). There is a big difference (high NDVI) where there are healthy plants, and not so much difference (low NDVI) where there are no plants. 


![ndviImage1200a.jpg](https://i.publiclab.org/system/images/photos/000/000/491/large/ndviImage1200a.jpg)

<em>Healthy foliage typically has NDVI values between 0.2 and 0.8.</em> 



