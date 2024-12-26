---
title: "Focus on filters"\ntagnames: 'near-infrared-camera, vermont, infrared, a2200, conversion, filter, infragram, focus, infrablue, response:9740, bg3, wratten25a'
author: cfastie
path: /notes/cfastie/11-07-2013/focus-on-filters.md
nid: 9744
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/002/153/original/A2200-273-3.jpg)

# Focus on filters

by [cfastie](../profile/cfastie) | November 07, 2013 16:28

November 07, 2013 16:28 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont), [infrared](../tag/infrared), [a2200](../tag/a2200), [conversion](../tag/conversion), [filter](../tag/filter), [infragram](../tag/infragram), [focus](../tag/focus), [infrablue](../tag/infrablue), [response:9740](../tag/response:9740), [bg3](../tag/bg3), [wratten25a](../tag/wratten25a)

----

Ned Horning has decided that the Canon Powershot A2200 is a good choice for kite, balloon, and UAS aerial photography. He watches the [Canon site where refurbished ones sell for $70](http://shop.usa.canon.com/shop/en/catalog/cameras/refurbished-powershot-digital-cameras/powershot-a2200-blue-refurbished) but sometimes are on sale for $55. He had two A2200s with broken ribbon cables, so I ordered replacements on eBay ($11 for both including shipping) and figured out how to install them. 

The A2200 seems to be a good replacement for the A495 family. It is smaller and lighter because it uses a Li-ion battery instead of two AAs. I like AAs better, because I invested in lots of AA Eneloops, but they do have a weight penalty. The A2200 is newer and CHDK can be installed on SD cards larger than 4 GB without partitioning the card. That is a major convenience. The A2200 is a little smarter because it has the newer Digic IV processor, but the two cameras have very similar features. For example they both have custom white balance and infinity focus mode but lack manual focus, shutter priority, and image stabilization. The A2200 has 14 MP instead of 10 MP, but 10 MP is all you need for aerial photography with these little lenses and sensors. They both have 1/2.3" sensors like lots of Powershots. I purchased a [glass BG3 (Superblue) filter for $16](http://www.event38.com/ProductDetails.asp?ProductCode=NGB) and have been looking for a camera to install it in. It's the proper size for these cameras.

The A2200 is pretty easy to convert for infrared photography ([unlike the A2400](http://publiclab.org/notes/jbest/11-06-2013/canon-a2400-ir-conversion)). It's much easier if you unplug a ribbon cable, which requires flipping up a little brown clamp which loosens the connection. The broken ribbon cables were on the back button pads, and replacing them required some extra disassembly (one deep screw to remove the top control assembly) and learning how to open a second type of ribbon cable connector (the black plastic cover hinges up). I installed the BG3 glass filter in one camera and a piece of gelatin Wratten 25A filter in the other. Ned is promoting the [red filter as superior to blue filters for NDVI photography](publiclab.org/notes/nedhorning/11-01-2013/why-a-red-filter-should-work-well-for-ndvi).   
.  


[![DamFocusBG3_2k.jpg](https://i.publiclab.org/system/images/photos/000/002/155/large/DamFocusBG3_2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/155/original/DamFocusBG3_2k.jpg)  
*Infrablue photo from A2200 with BG3 glass filter inside. Image clarity seems to be better than with polyester (Rosco) infrablue filters, but focus is poor around the edges of the photo. This is consistent among many test photos.*  
.  

I was expecting great images with the glass BG3 filter installed, but I am a little disappointed. Although the glass filter should preserve the optics of the original IR block filter, focus does not seem to be as good as with an unmodified camera. Focus is poor at the edges of the photos. The severity of the blur varies, but is present in many test photos using different f/stops and focal lengths. The same problem is present in photos from the other camera with the Wratten 25A gelatin filter.  
.  


[![house2k.jpg](https://i.publiclab.org/system/images/photos/000/002/156/large/house2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/156/original/house2k.jpg)  
*Details of two photos taken by a Canon A2200 with Wratten 25A gelatin filter installed internally. The top photo was taken using Program mode and the blue color reflects the custom white balance setting. The lower photo was taken in Auto mode and the color reflects the white balance preset chosen by the camera. The left halves of both photos have been desaturated to better compare image clarity. The photo taken in Program mode is crisper than the one in Auto mode. Both photos are crisper in their centers than near their edges.*  
.  

There is a current discussion at the plots-infrared Google Group about [camera focus after infrared conversion](https://groups.google.com/forum/#!topic/plots-infrared/cqX3zqfzes8).  Kempo noted that a converted A480 had better focus in Auto mode than in Program mode. I was intrigued, so I tried it. When in Auto mode, shutter speed, f/stop, white balance, and who knows what else are selected by the camera. So you cannot use a custom white balance in Auto mode which makes it unhelpful for infrablue photography. Unlike Kempo, I found that the photos I took in Program mode were crisper than the ones in Auto mode. but they were both more blurry near the edges.  

I am not sure if there is anything that can be done to improve the crispness of these photos.  The problem could be related to the optics of infrared light compared to visible, so I should examine the separate channels in each photo, some of which are all NIR light and some of which are mostly visible.  The inconsistent results with Auto and Program mode are puzzling. I don't know why either mode would degrade clarity, although when the camera chooses f/stop, shutter speed, ISO, and white balance those settings could differ dramatically from Program mode settings, and each of those settings could influence clarity. More tests are needed.


