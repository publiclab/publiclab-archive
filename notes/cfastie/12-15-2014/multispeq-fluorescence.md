---
title: "MultispeQ fluorescence"

tagnames: 'fluorescence, barnraising, soil, photosynthesis, photosynq, plant, plant-health, multispeq, barnraising2014, response:11451'
author: cfastie
path: /notes/cfastie/12-15-2014/multispeq-fluorescence.md
nid: 11462
uid: 554
cids: 10950,10951,10953,10954,10967,10968,10969,10970
---

![](https://publiclab.org/public/system/images/photos/000/008/410/original/Barn2014_661.jpg)

# MultispeQ fluorescence

by [cfastie](/profile/cfastie) | December 15, 2014 22:54

December 15, 2014 22:54 | Tags: [fluorescence](/tag/fluorescence), [barnraising](/tag/barnraising), [soil](/tag/soil), [photosynthesis](/tag/photosynthesis), [photosynq](/tag/photosynq), [plant](/tag/plant), [plant-health](/tag/plant-health), [multispeq](/tag/multispeq), [barnraising2014](/tag/barnraising2014), [response:11451](/tag/response:11451)

----

*Image above: Tristan captures Robert explaining the MultispeQ.*

At the Public Lab Barnraising last month I got to meet Geoff and Robert from the [PhotosynQ team at Michigan State University]( http://blog.photosynq.org/collaborators/).  The crash course I got in all matters MultispeQ brought me about 3% of the way to understanding what I might be able to do with one of the devices. I have found a few diagrams that helped me add a few percentage points to that score, so I am posting them here for easy reference.  These diagrams are primarily about fluorescence, which is one of the more clever measurements made by the MultispeQ.

The [PhotosynQ MultispeQ](http://blog.photosynq.org/what-you-can-measure-with-your-multispeq/) is a device that leverages two recent advances:  

1. The ingenious methods of measuring photosynthesis which plant physiologists and biochemists have discovered in the last few decades, and  
2. The more recent availability of cheap microprocessors, single color LEDs, photo diodes, and other sensors.  

PhotosynQ is moving fast to put the capability of field equipment worth about US$20,000 - $30,000 (?) into the hands of hundreds of people for US$150 per unit. The idea is to allow people everywhere to make precise measurements that allow very good estimates of the photosynthetic health of plants.  A wide network of such devices could change the resolution at which we understand the environmental response of plants.  
.  
[![Barn2014_231.jpg](https://i.publiclab.org/system/images/photos/000/008/411/medium/Barn2014_231.jpg)](https://i.publiclab.org/system/images/photos/000/008/411/original/Barn2014_231.jpg)  
*Geoff explains the MultispeQ to Tristan.*  
.  
We have been having a conversation about one of the measurements that the MultispeQ can make.  Most of the visible light that is absorbed by the pigments in plant leaves drives photosynthesis, but some of it just heats up the leaf, and a small fraction causes fluorescence -- it is radiated away as a new color of light.  
.  

[![AbsorbDiagESAcapCit.jpg](https://i.publiclab.org/system/images/photos/000/008/412/large/AbsorbDiagESAcapCit.jpg)](https://i.publiclab.org/system/images/photos/000/008/412/original/AbsorbDiagESAcapCit.jpg)  
*I added the red text above based on the information in the caption, but I’m not sure I interpreted that information correctly.  Some of the actual values vary a lot among different species of plants and for other reasons, so it’s probably close enough. [Source](http://www.esa.int/esapub/bulletin/bullet116/chapter4_bul116.pdf)*  
.  

[![ExcitationCompAnnRevPlantBio.JPG](https://i.publiclab.org/system/images/photos/000/008/413/large/ExcitationCompAnnRevPlantBio.JPG)](https://i.publiclab.org/system/images/photos/000/008/413/original/ExcitationCompAnnRevPlantBio.JPG)  
*The above diagram represents just the light that is absorbed by photosynthetic pigments, so reflectance and transmittance are not included. There are only three important possible fates of the energy entering this system.*  
.  

By manipulating a leaf a certain way and then measuring how much it fluoresces, you can learn a lot about that leaf’s potential to do photosynthesis. Because there are only a few possible fates of the light energy absorbed by plant pigments, if you control or measure all but one, you can estimate that remaining one. The general idea is to measure fluorescence and estimate photosynthesis. This estimate can be very accurate and can reveal differences in plant health that are completely invisible to the eye.  
.  

[![ArabidopsisFl.jpg](https://i.publiclab.org/system/images/photos/000/008/414/large/ArabidopsisFl.jpg)](https://i.publiclab.org/system/images/photos/000/008/414/original/ArabidopsisFl.jpg)  
*Laboratory plant experiment in which seedlings were treated the day before with herbicide. The lower image is an index based entirely on fluorescence and indicates slowing of photosynthesis when the plants still appear healthy (upper photo). This is the type of result many have expected from Public Lab NDVI cameras but have not achieved. The MultispeQ does not produce images like this, but instead produces measurements on individual leaves which could lead to the same conclusion.*  
.  

The light fluoresced by green plants is lower energy (longer wavelength) than the light absorbed by the plant pigment. Chlorophyll fluoresces most strongly at 690nm (red) and at 740 nm (near infrared).  The red light fluoresced by chlorophyll is easy to see if you shine UV light on an extract of leaves in a darkened lab.  Outside, the amount of fluoresced light is trivial compared to the sunlight reflecting off the leaf, so neither the red nor the near infrared emission is noticeable.  
.  

[![Chlorophyll_spectra.png](https://i.publiclab.org/system/images/photos/000/008/416/medium/Chlorophyll_spectra.png)](https://i.publiclab.org/system/images/photos/000/008/416/original/Chlorophyll_spectra.png)  
*Different extracts of plant pigments fluoresce at slightly different wavelengths, but this is a typical result for Chlorophyll a. [Source](http://www.yorku.ca/planters/photosynthesis/2014_08_15_lab_manual_static_html/index.html).*  
.  
[![Fluorescence_of_chlorophyll_under_UV_light.jpg](https://i.publiclab.org/system/images/photos/000/008/415/medium/Fluorescence_of_chlorophyll_under_UV_light.jpg)](https://i.publiclab.org/system/images/photos/000/008/415/original/Fluorescence_of_chlorophyll_under_UV_light.jpg)  
*A chlorophyll extract in alcohol shown under white light (above) and UV light inducing fluorescence (below). The red glow is fluorescence at the peak of 690 nm in the previous figure. [Source](http://en.wikipedia.org/wiki/Chlorophyll_fluorescence).*  
.  
[![Reflect_Fluor.jpg](https://i.publiclab.org/system/images/photos/000/008/417/medium/Reflect_Fluor.jpg)](https://i.publiclab.org/system/images/photos/000/008/417/original/Reflect_Fluor.jpg)  
*Fluorescence from plant pigments is inconspicuous compared to reflection of sunlight from plant leaves.  [Source](http://www.eufar.net/document/publi/meroni_09_a_20091222125051.pdf). Open the full figure and its caption [here](https://i.publiclab.org/system/images/photos/000/008/418/original/Reflect.vs.Fluor.jpg).*  
.  
I still don't understand the photosynthetic pathways that allow the fluorescence measurement to tell us so much about photosynthesis. But I guess I'm better prepared to learn about that now. My interpretations here are from brand new things that I have learned in the past few days, and most of them are probably poor approximations of reality. So let me know about the glaring errors.
