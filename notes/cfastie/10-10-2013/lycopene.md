---
title: "Lycopene"\ntagnames: 'near-infrared-camera, spectrometer, ndvi, vermont, ebert, absorption, infragram, par, photosynthesis, garden, infrablue, leaffest2013, response:9088, pigments, tomatoes, red-filter, ndvi-ag, activity:spectrometry, seeks:replications, activity:multispectral-imaging, activity:education, activity:science-fair, activity:classroom, activity:field-studies'
author: cfastie
path: /notes/cfastie/10-10-2013/lycopene.md
nid: 9432
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/001/857/original/Lycopene-249-18.jpg)

# Lycopene

by [cfastie](../profile/cfastie) | October 10, 2013 16:08

October 10, 2013 16:08 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [spectrometer](../tag/spectrometer), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [ebert](../tag/ebert), [absorption](../tag/absorption), [infragram](../tag/infragram), [par](../tag/par), [photosynthesis](../tag/photosynthesis), [garden](../tag/garden), [infrablue](../tag/infrablue), [leaffest2013](../tag/leaffest2013), [response:9088](../tag/response:9088), [pigments](../tag/pigments), [tomatoes](../tag/tomatoes), [red-filter](../tag/red-filter), [ndvi-ag](../tag/ndvi-ag), [activity:spectrometry](../tag/activity:spectrometry), [seeks:replications](../tag/seeks:replications), [activity:multispectral-imaging](../tag/activity:multispectral-imaging), [activity:education](../tag/activity:education), [activity:science-fair](../tag/activity:science-fair), [activity:classroom](../tag/activity:classroom), [activity:field-studies](../tag/activity:field-studies)

----

*Image above: Shaken and stirred, these extracts of ripe and green tomatoes get most of their color from the suspension of tiny plant bits, even after filtering through paper towels. But they served their purpose.*  

We never got around to addressing the [LEAFFEST puzzle of why red and green tomatoes look identical](http://publiclab.org/notes/cfastie/09-02-2013/leaffest-test) in Infragram photos. The weather has been so good that almost all my tomatoes have ripened, so this is my last chance to figure it out. Green tomatoes are green because of chlorophylls, and these are replaced with lycopene as the fruits ripen. Chlorophylls absorb wavelengths at both the blue and red end of the visible spectrum, but lycopene and other carotenoid pigments absorb only at the blue end -- the red wavelengths are reflected, which is why they look red or orange. 

[![PhotoPigments.jpg](https://i.publiclab.org/system/images/photos/000/001/858/medium/PhotoPigments.jpg)](https://i.publiclab.org/system/images/photos/000/001/858/original/PhotoPigments.jpg)  
*Lycopene and other carotenoid pigments absorb only at the blue end of the visible spectrum.*  

Infragram cameras capture visible light at the blue end of the spectrum, but capture little red light because the red channel is dedicated to capturing near infrared light. To an Infragram camera, chlorophyll looks similar to lycopene because it doesn't see what's happening at the red end of the spectrum where chlorophyll is absorbing some light. So tomatoes that look strikingly different to our RGB eyes look the same to Infragram cameras, and Infragram NDVI does not distinguish them.

[![A495_RGB_NIR_2k.jpg](https://i.publiclab.org/system/images/photos/000/001/859/large/A495_RGB_NIR_2k.jpg)](https://i.publiclab.org/system/images/photos/000/001/859/original/A495_RGB_NIR_2k.jpg)  
*Brandywine tomatoes captured by the original Public Lab dual-camera near-infrared system. On the left is a normal photo from an unmodified Canon A495, and on the right is the same scene with an A495 which had its IR block filter replaced with a Wratten 87 IR pass filter. As expected there is no difference between red and green fruits in the NIR photo because no plant pigments absorb NIR - it is mostly reflected away. I used a tripod which had two base plates so I could switch the cameras and repeat the scene precisely.*  

There is not much you can do about Infragram's inability to distinguish chlorophylls from carotenoids. But a two camera infrared system captures both the blue and red ends of the visible spectrum in addition to the near infrared. So NDVI can be computed using either blue or red to represent visible light used by plants. I hypothesized that if NDVI were computed using the blue channel, it would look just like Infragram NDVI, but if it were computed using the red channel, ripe red tomatoes would be distinct from green ones. 

[![BG3infNDVIWB_oS_1_2k.jpg](https://i.publiclab.org/system/images/photos/000/001/860/large/BG3infNDVIWB_oS_1_2k.jpg)](https://i.publiclab.org/system/images/photos/000/001/860/original/BG3infNDVIWB_oS_1_2k.jpg)  
*Infrablue photo of red and green tomatoes taken with a Canon G11 with internal BG3 glass filter, and NDVI from that photo. There is not much difference between the red and green fruits. The G11 was custom white balanced on blue origami paper under a blue sky in the shade.*  

I used Ned's Fiji plugin to make all the NDVI images, and they all use the same color table (NDVIBlu2RedWB.lut). The histogram stretch parameter was 1. 

[![Red_Blue_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/001/862/large/Red_Blue_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/001/862/original/Red_Blue_NDVI_Color.jpg)  
*NDVI from the dual camera system. When the blue channel is used for visible light (left), NDVI resembles infrablue NDVI and red and green tomatoes look similar.  When red is used for visible light (right), red and green tomatoes are distinct.*  

When the red channel is used to compute NDVI, red and green tomatoes are dramatically distinct. This is consistent with the idea that lycopene in red tomatoes looks just like chlorophyll if you can't see red. The more traditional way of computing NDVI, when red is used to represent visible light, assigns an NDVI value to red tomatoes below zero, as if there were no photosynthesis going on there at all. The lycopene pigment is absorbing blue light, and it must be using it for something, but I'm not really sure what.

To confirm this result, I peeled the rind off a big red and a big green tomato and ran them in the blender for several minutes in 95% grain alcohol. I strained and filtered the results, but they were more like suspensions of cell pieces than true extracts. I projected a halogen lamp through small jars of the stuff into [Ebert's](http://publiclab.org/notes/cfastie/2-19-2013/ebert) entrance slit and made [transmittance spectra of both and of pure alcohol](https://spectralworkbench.org/sets/show/700). I then downloaded the data and subtracted the tomato spectra from the alcohol spectrum to make absorbance spectra.

[![LycopeneAbsorbance.JPG](https://i.publiclab.org/system/images/photos/000/001/863/medium/LycopeneAbsorbance.JPG)](https://i.publiclab.org/system/images/photos/000/001/863/original/LycopeneAbsorbance.JPG)  
*Absorbance spectra from a Public Lab spectrometer of red and green tomato rind extracts (really suspensions). Ebert had a Canon A810 with no IR block filter, so near IR light is included in the spectra.The steep zag at 575 nm is an artifact where the green and red channel data meet awkwardly.*  

Consistent with expectations, red tomato mush does not absorb much at the red end of the spectrum, but green tomato mush absorbs at both ends. Neither red nor green tomato mush absorbs in the near IR.  It's another mystery resolved with Public Lab tools. By the way, red and green mush mixed together over rocks with a twist (the PLOTS Muddy Mary?) was a bad idea.







