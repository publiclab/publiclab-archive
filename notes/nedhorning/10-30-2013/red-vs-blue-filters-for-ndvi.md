---
title: Red vs. blue filters for NDVI
tagnames: near-infrared-camera, ndvi, calibration, infrared, infragram, infrablue, wratten25a, super-red, red-vs-blue
author: nedhorning
path: /notes/nedhorning/10-30-2013/red-vs-blue-filters-for-ndvi.md
nid: 9691
uid: 133

---

# Red vs. blue filters for NDVI

by [nedhorning](../profile/nedhorning) October 30, 2013 19:07

October 30, 2013 19:07 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [red-vs-blue](../tag/red-vs-blue)

While working on [calibration techniques](http://publiclab.org/notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1) to improve the quality of DIY NDVI images I noticed that after calibrating the blue and near-infrared (NIR) bands from InfraBlue photos there was not as much difference between green grass and non-photosynthetic material like leaves, dead grass, wood and cardboard as I would have expected. To understand why this was happening I looked at the reflectance spectra for different materials and noticed that when using blue wavelengths instead of red the contrast in NDVI between photosynthetic and non-photosynthetic material is greatly reduced. In remote sensing contrast is very important to improve photo interpretation and classification. This discovery was a little perplexing since some of the InfraBlue images I had seen in the past year seemed to produce half-decent NDVI images. It also got me thinking that perhaps blue filters were not ideal for making NDVI images. 

To better understand the differences between NDVI images produced using blue and red filters I purchased a 3” x 3” sheet of Wratten 25A from eBay and cut a small rectangle which was inserted in a Canon A2200. I decided to compare images acquired using this red filter with images acquired using Chris Fastie's Canon A810 with a blue Rosco 2008 filter. The initial results using photos acquired with Chris Fastie's help are posted below. 


[![Wratten25ATransmission.gif](https://i.publiclab.org/system/images/photos/000/002/078/medium/Wratten25ATransmission.gif)](https://i.publiclab.org/system/images/photos/000/002/078/original/Wratten25ATransmission.gif)

_**Transmission curve for Wratten 25A filter (copied from: http://astronomy.activeboard.com/forum.spark?aBID=58381&p=3&topicID=49503185)**_
<p> </p>


To start with, here is a table showing the difference in NDVI values one would expect when using a blue and red filter. The NDVI values in the table were calculated using reflectance data from different online spectral libraries  - more about that in a forthcoming research note. For the “Blue” NDVI I used 450 nm (blue) and 840 nm (NIR) wavevlengths and for the “Red” NDVI I used 660 nm (red) and 840 nm (NIR).  The typical formula for NDVI is: NDVI = (NIR – Red) / (NIR + Red). For “Blue” NDVI calculations I substituted blue reflectance for red. 

Material | Blue NDVI (840/450) | Red NDVI (840/660)
----------- | ------------------------- | ---------------
pine board | 0.59  |0.08
Cardboard | 0.65 | 0.24
Tar paper | 0.12 | 0.05
Green grass | 0.85 | 0.82
Dead grass | 0.47 | 0.15
_**Table of NDVI values using the blue (450 nm) and the red (660 nm) wavelengths**_

As you can see the NDVI value for green grass is very similar regardless if blue or red reflectance was used. On the other hand, there are significant differences for the other materials. When I create NDVI images by first calibrating individual bands to reflectance and then calculating NDVI the results support the observation that contrast between photosynthetic and non-photosynthetic material is reduced with the blue filter. 

All of the blue filter images below were recorded with a Canon  A810 with a blue Rosco 2008 filter mounted over the lens using a custom white balance set using blue origami paper in the shade. All of the red filter images were recorded with a Canon  A2200 with a red Wratten 25A filter mounted inside the camera over the sensor – in place of the hot mirror. The custom white balance for the “red” camera was a concrete block in the sun. The lookup table displays NDVI values less than or equal to 0 as black and NDVI values of 1 as white. The patch of grass on the upper right corner of the tar paper was cut two days before the photos were taken. Apparently that freshly cut grass has high NDVI values. 

[![targetsBlockExposure0.JPG](https://i.publiclab.org/system/images/photos/000/002/079/medium/targetsBlockExposure0.JPG)](https://i.publiclab.org/system/images/photos/000/002/079/original/targetsBlockExposure0.JPG)

_**Photo from the red filter camera**_
<p> </p>


[![Apple2008-263.jpg](https://i.publiclab.org/system/images/photos/000/002/080/medium/Apple2008-263.jpg)](https://i.publiclab.org/system/images/photos/000/002/080/original/Apple2008-263.jpg)

_**Photo from the blue filter camera**_
<p> </p>
<p> </p>
[![LUT.jpg](https://i.publiclab.org/system/images/photos/000/002/085/medium/LUT.jpg)](https://i.publiclab.org/system/images/photos/000/002/085/original/LUT.jpg)
[![targetsBlockExposure0_NDVI.jpg](https://i.publiclab.org/system/images/photos/000/002/081/medium/targetsBlockExposure0_NDVI.jpg)](https://i.publiclab.org/system/images/photos/000/002/081/original/targetsBlockExposure0_NDVI.jpg)

_**Calibrating individual bands  to reflectance before calculating NDVI for the red filter photo**_

<p> </p>
<p> </p>

[![Apple2008-263_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/082/medium/Apple2008-263_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/082/original/Apple2008-263_NDVI1.jpg)

_**Calibrating individual bands to reflectance before calculating NDVI for the blue filter photo**_

<p> </p>
<p> </p>

My interpretation is that NDVI from the red filter camera is significantly better at differentiating photosynthetic from non-photosynthetic material. There is greater contrast in the NDVI image created with the red filter photo. You will note that in the red filter NDVI image many of the pixels have higher NDVI values than one would expect (saturated at 1). I expect that is due to the way I selected sample pixels for the regression. I selected pixels from a large rectangular patch of grass at the top-center of the photo and correlated the average pixel value from that patch with the green grass reference NDVI value. I am fairly certain that the average NDVI value for the patch of grass I selected was significantly lower than the “ideal” reference grass. 

Normally I would have been tempted to stop there and conclude that the blue filter is a poor choice for monitoring vegetation health but over the last year or so I had seen some pretty convincing NDVI images created using InfraBlue cameras so I explored a little further. The next two images are NDVI create using the Fiji photo-monitoring plugin. The one used the bands without stretching and the other applied the default stretch using a saturation value of 2. 
<p> </p>
<p> </p>
[![LUT.jpg](https://i.publiclab.org/system/images/photos/000/002/086/medium/LUT.jpg)](https://i.publiclab.org/system/images/photos/000/002/086/original/LUT.jpg)


[![Apple2008-263_NDVI_NoStretch.jpg](https://i.publiclab.org/system/images/photos/000/002/083/medium/Apple2008-263_NDVI_NoStretch.jpg)](https://i.publiclab.org/system/images/photos/000/002/083/original/Apple2008-263_NDVI_NoStretch.jpg)

_**NDVI created by using the Fiji plugin with no stretch for the blue Rosco 2008 filter**_
<p> </p>
<p> </p>


[![Apple2008-263_NDVI_WithStretch2.jpg](https://i.publiclab.org/system/images/photos/000/002/084/medium/Apple2008-263_NDVI_WithStretch2.jpg)](https://i.publiclab.org/system/images/photos/000/002/084/original/Apple2008-263_NDVI_WithStretch2.jpg)


_**NDVI created by using the Fiji plugin with a stretch (saturation = 2) for the blue Rosco 2008 filter**_
<p> </p>
<p> </p>

These uncalibrated images look better. Why is that? This question still needs some work but my initial guess is that even though the blue band is not as sensitive to changes in vegetation vigor/health as the red band the white balance setting Chris uses when he's shooting with a blue filter helps amplify those differences. Calibrating the images to reflectance before calculating NDVI reduces the impact of the white balance "enhancement" thereby lowering NDVI contrast for the reasons noted above. 

Based on these results I think red filters need some serious consideration as a replacement for blue filters for the production of NDVI images. In addition to the advantage of increased contrast between  photosynthetic and non-photosynthetic material red wavelengths are less effected by haze which can be important for kite or balloon photography. The red filter is also more similar to the red band that is used to calculate NDVI from satellite and multi-spectral aerial photos which should make comparisons easier and more reliable. This needs more testing but these initial results are encouraging. 

In the next few days I'll try to post a research note to more clearly [](http://publiclab.org/notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1)explain why red wavelengths are better suited than blue for recording differences in photosynthetic activity.