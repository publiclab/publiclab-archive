---
title: Oaktober
tagnames: near-infrared-camera, ndvi, vermont, infragram, photosynthesis, infrablue, pigments, response:9432, red-filter, activity:multispectral-imaging
author: cfastie
path: /notes/cfastie/10-11-2013/oaktober.md
nid: 9437
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/001/894/original/OaktoberVIS-258-22.jpg)

# Oaktober

by [cfastie](../profile/cfastie) October 11, 2013 16:07

October 11, 2013 16:07 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [infragram](../tag/infragram), [photosynthesis](../tag/photosynthesis), [infrablue](../tag/infrablue), [pigments](../tag/pigments), [response:9432](../tag/response:9432), [red-filter](../tag/red-filter), [activity:multispectral-imaging](../tag/activity:multispectral-imaging)

----

With a new inkling of the [effects plant pigments have on NDVI](http://publiclab.org/notes/cfastie/10-10-2013/lycopene) results, I was wondering how this might influence the interpretation of aerial imagery. This month Vermont is lousy with leaf peepers because trees are loosing their chlorophylls and displaying their reddish carotenoid and yellow xanthophyll pigments. I took some photos of leaves from three tree species in various stages of loosing their green chlorophyll. I used the [same setup as previously](http://publiclab.org/notes/cfastie/10-10-2013/lycopene) to compare single camera Infragram NDVI with dual camera NDVI which can use either the blue or red band to represent visible light.  

[![Oak4Pan2k.jpg](https://i.publiclab.org/system/images/photos/000/001/895/large/Oak4Pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/001/895/original/Oak4Pan2k.jpg)  
*Three versions of NDVI for the scene at upper left of red oak (Quercus rubra) leaves. Infrablue NDVI (upper right), and dual camera NDVI using blue (lower left) and red (lower right) for visible light. Only NDVI computed with the red channel discriminates between green and yellowing leaves.*  

As was the case with tomato pigments, infrablue NDVI does not detect the switch from chlorophyll to other pigments because those other pigments do not absorb light at the red end of the spectrum. Infrablue NDVI and dual camera NDVI using the blue channel are both based on the difference between the near infrared (NIR) light and the blue light reflected from leaves. When carotenoids or xanthophylls replace chlorophyll, they continue to absorb light at the blue end of the spectrum so total reflected blue does not change dramatically. If you can't see red wavelengths, you don't see that the chlorophylls are no longer absorbing red. Traditional NDVI, which compares NIR with red, detects the absence of chlorophyll because a lot more red is reflected when that pigment is missing. When more red is reflected, the difference between reflected NIR and red is reduced, and NDVI is lower.  

[![Aspen4Pan2k.jpg](https://i.publiclab.org/system/images/photos/000/001/896/large/Aspen4Pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/001/896/original/Aspen4Pan2k.jpg)  
*Big toothed aspen (Populus grandidentata) leaves. Infrablue NDVI (upper right), and dual camera NDVI using blue (lower left) and red (lower right) for visible light. Six of the green leaves at upper right are face down and show lower NDVI than upright leaves.*  

Aspen leaves display a similar pattern. Only NDVI calculations using red light show a difference between green and yellowing leaves. The underside of leaves is often lighter because the pigment-containing cells are not packed in as tightly and there are more stomatal cells and openings. The aspen leaves (and maple leaves below) which are upside down have lower NDVI values than similar upright leaves. This could be due to the lower concentration of pigments, or just to the more reflective surface of the leaves, although there might not be a real difference between those two explanations.  

[![Maple4Pan2k.jpg](https://i.publiclab.org/system/images/photos/000/001/897/large/Maple4Pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/001/897/original/Maple4Pan2k.jpg)  
*Red maple (Acer rubrum) leaves. Infrablue NDVI (upper right), and dual camera NDVI using blue (lower left) and red (lower right) for visible light. Comparing NIR to blue does not detect the difference among green, yellow, and red leaves. The face down leaves at either end of the three rows are the same color as the other leaves in their row (yes, the yellow leaves are pink underneath). Leaf undersides have lower NDVI than top sides.*  

Although NDVI using the red channel discriminates between green and non-green maple leaves, it does not distinguish red from yellow leaves. This is consistent with the explanation that both carotenoids (reddish) and xanthophylls (yellow) affect NDVI the same same way because they both absorb only at the blue end of the spectrum. Chlorophylls are distinct because they uniquely absorb both red and blue wavelengths.  Carotenoids and xanthophylls look different if you have RGB eyes, but if you only see red or only see blue, they look the same.  

[![Oakshade.jpg](https://i.publiclab.org/system/images/photos/000/001/898/large/Oakshade.jpg)](https://i.publiclab.org/system/images/photos/000/001/898/original/Oakshade.jpg)  
*Detail of red oak scene with NDVI from dual camera system using the blue band. The highest NDVI values (red) are where the leaves are darkest, not necessarily where photosynthesis is greatest. This pattern is present with all three tree species and all methods of NDVI computation.  It is probably not a good thing that completely brown oak leaves are assigned a very high NDVI value.*  

In all of the NDVI images here, there is good dynamic range of leaf NDVI. At minimum, NDVI colors for leaves vary from green to red in all cases, so NDVI values vary from about 0.2 to 0.7. This is a good result. However, most of that variation is probably not due to biology. In most cases, the highest NDVI values are where the leaves are darkest because of shade or surface angle. Although these photos were taken at dusk in the dull light of complete shade, specular reflection from leaf surfaces lightens some areas, and these have lower NDVI values. This seems to be one of the many artifacts inherent in any permutation of NDVI, and is a good reminder that NDVI should always be interpreted cautiously. Finding the signal is these NDVI images requires knowing a lot about their abundant noise.

**Technical note:** The color table (NDVIBlu2RedWB.lut) used for these NDVI images (and most of my recent ones) assigns distinct colors to values of 0 and 255 (the darkest and brightest possible values in these image files). Pixels with the value 0 become white and pixels with the value 255 become black. This is very helpful for detecting wierd NDVI patterns where large areas of some images get pegged at the min or max value. When the color histograms are stretched before computing NDVI (Ned's Fiji plugin allows this) some pixels will always be set to 0 and 255. For the images here, the histogram stretch parameter was set to 1, so some pixels were set to white or black. But when I was satisfied with the NDVI image, I reverted those pixels to the adjacent color, so there are no white or black pixels in the images here. This can be done in Fiji by assigning a new color table without the special end members  (NDVIBlu2Red.lut), or by doing a little math on the values. In Fiji, with an NDVI image open, select Process/Math/Add, enter 2, and click OK. This adds 2 to the value in each pixel, so all zeroes become 2 (the highest value allowed is 255, so that's still the max). Then select Process/Math/Subtract, enter 1, and click OK. Now there are no pixels with the value 0 or 255. Every other value has been shifted by +1, but that is almost impossible to discern. I suspect there are other tricks in Fiji for doing this.









  