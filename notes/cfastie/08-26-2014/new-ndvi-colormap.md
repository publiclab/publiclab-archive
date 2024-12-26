---
title: "New NDVI colormap"\ntagnames: 'balloon-mapping, near-infrared-camera, kite-mapping, ndvi, imagej, super-red, response:4720'
author: cfastie
path: /notes/cfastie/08-26-2014/new-ndvi-colormap.md
nid: 11078
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/006/431/original/ShelburneVGYRN.jpg)

# New NDVI colormap

by [cfastie](../profile/cfastie) | August 26, 2014 16:23

August 26, 2014 16:23 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [ndvi](../tag/ndvi), [imagej](../tag/imagej), [super-red](../tag/super-red), [response:4720](../tag/response:4720)

----

NDVI is an index (a unit-free number) related to how much photosynthetic activity is occurring. A single NDVI value can be determined for an individual leaf or a 200 acre corn field. Or an NDVI value can be determined for every pixel in a photograph of a leaf or of a corn field. If you have a value for every pixel, you can assign different colors to different ranges of NDVI values and make a false color map of how NDVI varies spatially. You can use any color scheme you want, and I have been using one that turns images into "heat maps" of photosynthetic activity by painting high NDVI values with hotter colors. A long time ago, someone suggested that this type of color map was not helpful to people with red/green color blindness like protanopia.
.  
[![NDVIBlu2Red_Protanopeat.jpg](https://i.publiclab.org/system/images/photos/000/006/409/medium/NDVIBlu2Red_Protanopeat.jpg)](https://i.publiclab.org/system/images/photos/000/006/409/original/NDVIBlu2Red_Protanopeat.jpg)  
*My standard color map for NDVI images (top), and how it looks to a person with protanopia (bottom).  NDVI values below zero are assigned a blue color. NDVI values above zero are assigned colors on a gradient from green through yellow to red, so greater photosynthesis is highlighted with hotter colors. Protanopes see this gradient very differently.*  
.  
There are lots of web sites which show you what a color photo looks like to a color blind person. Different sites produce slightly different results, but it is obvious that the eight percent of white men with color blindness (< 1% of white women have it) can't derive much useful information from NDVI images colored with this colormap. The problem is that red and green don't look very different to color blind people. So I made some colormaps which had only red or green but not both.  
.  

[![NDVI_VYgM_Protanop.JPG](https://i.publiclab.org/system/images/photos/000/006/410/medium/NDVI_VYgM_Protanop.JPG)](https://i.publiclab.org/system/images/photos/000/006/410/original/NDVI_VYgM_Protanop.JPG)   
*A colormap (upper) and how it appears to protanopes (lower).*   
.  

[![NDVI_VYRM_Protanop.JPG](https://i.publiclab.org/system/images/photos/000/006/411/medium/NDVI_VYRM_Protanop.JPG)](https://i.publiclab.org/system/images/photos/000/006/411/original/NDVI_VYRM_Protanop.JPG)  
*A colormap (upper) and how it appears to protanopes (lower).*   
.  
I was unable to find a color gradient that allowed color blind people to derive as much information as the rest of us. Without both red and green, it is very hard to find a gradient that would allow similar values of NDVI to be distinguished. There just aren't enough other colors.  Maybe there is a trick I am missing, but I gave up. Sorry bros. NDVI images can use a grayscale gradient or other simple gradient that everybody can discern, but then nobody could get the full impact of the images. For now, I am going to continue using both red and green, and my new colormap is below.   
.  


[![NDVI_VGYRM_protanopt.jpg](https://i.publiclab.org/system/images/photos/000/006/413/medium/NDVI_VGYRM_protanopt.jpg)](https://i.publiclab.org/system/images/photos/000/006/413/original/NDVI_VGYRM_protanopt.jpg)  
*The new colormap I have been using for NDVI images (above) and how it appears to protanopes (lower). It's not very useful to protanopes.*  
.  
This new colormap has several useful features (for about 90% of us).

1. The left half of the colormap has three gradients between black and white. This does not allow you to discern the value from the tone, but the values of NDVI below zero indicate zero photosynthesis, so we generally do not care exactly what the value is. The multiple gradients preserve the detail of non-plants in the NDVI image. It just makes the NDVI image easier to look at because you can recognize objects and textures that are not foliage.
2. The boundary between grayscale and color is not at zero. Live foliage generally does not have NDVI values below 0.1, so that is the boundary between grayscale and color. With this colormap, anything in grayscale is probably not a plant. This allows a more precise differentiation between plant and non-plant when the NDVI values are calibrated.  
3. There is a narrow band of violet between 0.1 and 0.2 which could represent very low photosynthetic activity, but might also be noise or error.
4. The primary gradient of photosynthetic activity is from NDVI values from 0.2 to 0.9, and that is represented with a classic heat map from green to yellow to red. It's a little bit counter intuitive because green does not represent the healthiest plants, but the heat map metaphor seems to work well for most people. 
5. The highest values (> 0.9) are colored magenta. Foliage generally does not have NDVI values this high, so this color represents non-plants. I did not make it a gray so it can be distinguished from low values. In many cases, DIY NDVI values above 0.9 are artifacts where the image is very dark or very bright. 
.  

[![NDVI_VGYRM_lutAy.jpg](https://i.publiclab.org/system/images/photos/000/006/414/medium/NDVI_VGYRM_lutAy.jpg)](https://i.publiclab.org/system/images/photos/000/006/414/original/NDVI_VGYRM_lutAy.jpg)  
*A legend for the new colormap.*  
.  
Below are some NDVI images colored with the new colormap. I have included the original photo, either normal color or Wratten 25A super-red Infragram. If a normal color photo is included, the NDVI image was derived from a two-camera system. In some cases a constant was added to the NDVI values of all the pixels to shift them to a more meaningful range. In other words, these NDVI images are not calibrated except by brute force.  The NDVI images were made with the Photo-monitoring plugin for Fiji.


[![MOGRGB-474_Clipped.jpg](https://i.publiclab.org/system/images/photos/000/006/417/medium/MOGRGB-474_Clipped.jpg)](https://i.publiclab.org/system/images/photos/000/006/417/original/MOGRGB-474_Clipped.jpg)
[![MOGRGB-474_NDVI.jpg](https://i.publiclab.org/system/images/photos/000/006/427/medium/MOGRGB-474_NDVI.jpg)](https://i.publiclab.org/system/images/photos/000/006/427/original/MOGRGB-474_NDVI.jpg)  
*Middlebury College Organic Farm*
.  

[![MCOF.jpg](https://i.publiclab.org/system/images/photos/000/006/429/medium/MCOF.jpg)](https://i.publiclab.org/system/images/photos/000/006/429/original/MCOF.jpg)[![MCOF_VGYRM10.jpg](https://i.publiclab.org/system/images/photos/000/006/430/medium/MCOF_VGYRM10.jpg)](https://i.publiclab.org/system/images/photos/000/006/430/original/MCOF_VGYRM10.jpg)  
*Middlebury College Organic Farm taken by Teddy with an S100*
.  

[![LeeVIS-20120523-175-26_Clipped.jpg](https://i.publiclab.org/system/images/photos/000/006/418/medium/LeeVIS-20120523-175-26_Clipped.jpg)](https://i.publiclab.org/system/images/photos/000/006/418/original/LeeVIS-20120523-175-26_Clipped.jpg)[![LeeVIS-20120523-175-26_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/006/419/medium/LeeVIS-20120523-175-26_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/006/419/original/LeeVIS-20120523-175-26_NDVI_Color.jpg)  
*Cover crop trials*  
.  


[![cryptRGB-467-22cl_Clipped.jpg](https://i.publiclab.org/system/images/photos/000/006/424/medium/cryptRGB-467-22cl_Clipped.jpg)](https://i.publiclab.org/system/images/photos/000/006/424/original/cryptRGB-467-22cl_Clipped.jpg)[![cryptRGB-467-22cl_NDVI.jpg](https://i.publiclab.org/system/images/photos/000/006/426/medium/cryptRGB-467-22cl_NDVI.jpg)](https://i.publiclab.org/system/images/photos/000/006/426/original/cryptRGB-467-22cl_NDVI.jpg)  
*Lichens and moss*  
.  

[![MobiPAP-444-140-1.jpg](https://i.publiclab.org/system/images/photos/000/006/422/medium/MobiPAP-444-140-1.jpg)](https://i.publiclab.org/system/images/photos/000/006/422/original/MobiPAP-444-140-1.jpg)[![MobGard25.jpg](https://i.publiclab.org/system/images/photos/000/006/423/medium/MobGard25.jpg)](https://i.publiclab.org/system/images/photos/000/006/423/original/MobGard25.jpg)  
*Backyard from a Mobius Infragram on a pole*  
.  
I will make this new color map available as a lut file for use in Fiji when I figure out how to add binary files to research notes or wikis.

[UPDATE] 
.  
You can download the new colormap here:

<a href="https://i.publiclab.org/system/images/photos/000/007/012/original/NDVI_VGYRM.lut"><i class="icon icon-file"></i> NDVI_VGYRM.lut</a>

This should be copied to the C:\Program Files (x86)\Fiji\Fiji.app\luts directory or something like that on Windows, and I guess to .../Applications/Fiji.app/luts on Mac.  I will have to ask Ned to include this in the package at Github.  

