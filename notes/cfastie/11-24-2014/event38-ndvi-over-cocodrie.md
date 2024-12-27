---
title: "Event38 NDVI over Cocodrie"

tagnames: 'near-infrared-camera, ndvi, image-stitching, louisiana, barnraising, lumcon, infragram, barnraising2014'
author: cfastie
path: /notes/cfastie/11-24-2014/event38-ndvi-over-cocodrie.md
nid: 11394
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/008/098/original/KnitterNDVI.JPG)

# Event38 NDVI over Cocodrie

by [cfastie](../../../profile/cfastie) | November 24, 2014 03:01

November 24, 2014 03:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [image-stitching](../tag/image-stitching), [louisiana](../tag/louisiana), [barnraising](../tag/barnraising), [lumcon](../tag/lumcon), [infragram](../tag/infragram), [barnraising2014](../tag/barnraising2014)

----

The camera [flown by Charles Malveaux during the Barnrainsing](http://publiclab.org/notes/cfastie/11-21-2014/fixed-wing-over-cocodrie) had been converted to near infrared by Event38 with one of [their new NGB filters](http://droneyard.com/2014/08/19/latest-vegetation-stress-filters-now-available/). This blue filter is similar to a Schott BG3 or one of the Rosco blue filters, but with some intriguing improvements. I have not used this camera and I make some assumptions below based on the 12 photos taken during the flight of Charles' model Piper Cub.   
.   
[![BG3Evnt38.jpg](https://i.publiclab.org/system/images/photos/000/008/096/medium/BG3Evnt38.jpg)](https://i.publiclab.org/system/images/photos/000/008/096/original/BG3Evnt38.jpg)   
*Both the BG3 and the Event38 NGB filters block most red light and allow mostly near infrared to be captured in the red channel of each photo. The Event38 filter passes much more blue and green light (400-600 nm) making those channels more similar to the ones in unmodified cameras.*   
.   
Based on the transmission curves above, the BG3 and the Event38 filters should capture a similar proportion of NIR and red light in the red channel. But with the Event38 filter, the blue and green channels should capture more blue and green so the photos should have a more natural look, even though much NIR light is also being captured in both of those channels. For whatever reason, the photos straight from the Event38 camera resemble false color IR images (without any post processing). This is a nice feature, and making these photos does not require a custom white balance -- one of the standard presets (e.g., "Cloudy") seems to work well.  
.   
[![IMG_0427_NDVI_2pan2k.jpg](https://i.publiclab.org/system/images/photos/000/008/097/medium/IMG_0427_NDVI_2pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/097/original/IMG_0427_NDVI_2pan2k.jpg)[![IMG_0422NDVI_2pan2k.jpg](https://i.publiclab.org/system/images/photos/000/008/094/medium/IMG_0422NDVI_2pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/094/original/IMG_0422NDVI_2pan2k.jpg)    
*Two photos from the Event38 camera (top) and the NDVI images made from them (bottom).*  
.   
An even nicer feature is that pseudo NDVI images can be made from these photos. A standard part of the process for Public Lab folks making NDVI images from single camera systems is to apply a wildly artificial custom white balance to the camera which produces strangely hued photos. Not only are photos straight from the Event38 camera (with standard white balance presets) somewhat useful for vegetation analysis, but these photos can be made directly into pseudo NDVI images.  

The NDVI images look like they have reasonable values for vegetation, which is always an achievement for single camera NDVI systems. I have not figured out why this works so well. The blue channel is used for visible light in the NDVI images above, and it would seem that the Event38 filter would have higher values for blue since the filter passes more blue. This could make the NDVI values low because they are based on the difference between the blue and red channels. But there is very good dynamic range in the NDVI values including appropriately high ones. So I guess something more subtle is happening. 

I was able to align 10 of the 12 [NDVI images at MapKnitter](https://mapknitter.org/map/view/defelice-ndvi). It's kind of a confusing, wild looking map, but I sure wish I could figure out where those last two images go.
