---
title: "Calibrating DIY NIR cameras - part 3"

tagnames: 'near-infrared-camera, ndvi, calibration, infrared, infrablue, calibrate-ndvi, ndvi-calibrate, multispectral-imaging'
author: nedhorning
path: /notes/nedhorning/10-25-2013/calibrating-diy-nir-cameras-part-3.md
nid: 9550
uid: 133
cids: 7359,7362,7363,7364,7365,7367,7368,7369,7371,7375,7377,7378,7380,7733,7734,7735,7738
---

![](https://publiclab.org/public/system/images/photos/000/002/055/original/A495Vis_0.JPG)

# Calibrating DIY NIR cameras - part 3

by [nedhorning](/profile/nedhorning) | October 25, 2013 20:41

October 25, 2013 20:41 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [ndvi](/tag/ndvi), [calibration](/tag/calibration), [infrared](/tag/infrared), [infrablue](/tag/infrablue), [calibrate-ndvi](/tag/calibrate-ndvi), [ndvi-calibrate](/tag/ndvi-calibrate), [multispectral-imaging](/tag/multispectral-imaging)

----

This is the third and final note of a series on DIY NIR camera calibration. The first part is at: http://publiclab.org/notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1 and the second part is at: http://publiclab.org/notes/nedhorning/10-23-2013/calibrating-diy-nir-cameras-part-2

In this note I show NDVI images created using the calibration procedure discribed in part 1 to calibrated photos acquired from a dual visible / near-infrared (NIR) setup. I also present an example NDVI image created by calibrating directly to NDVI using a photo from a single camera with a blue filter.

For the dual-camera setup both cameras were Canon A495s. One was not altered and the other had the hot mirror replaced by unexposed developed film so the camera recorded mostly near-infrared light. The first image in the sequence below is a false color image from the dual-camera setup created using the [Fiji plugin](http://publiclab.org/notes/nedhorning/11-1-2012/update-photo-monitoring-plugin-imagejfiji). I put this here so you can assess how well the visible and NIR images are co-registered. The NDVI images were created using the red and NIR bands from this false color image. The first NDVI image below was created using the Fiji plugin and the second was created by calibrating the red band from the visible camera and the blue band from the NIR camera as descripted in part 1. The third image is the same as the second image but I used a gray gradient look-up-table since the color image is confusing with red representing NDVI values of less than or equal to 0 and 1. Both sets of NDVI images were created from photos that had white balance set using a cinder block and no exposure compensation. The last NDVI image was created from a Canon A810 with a Rosco 2008 filter using the simple (single band) regression methods described in part 1.


[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/056/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/056/original/LookUpTableSmall.jpg)

[![A495Vis_0_NRG.jpg](https://i.publiclab.org/system/images/photos/000/002/057/medium/A495Vis_0_NRG.jpg)](https://i.publiclab.org/system/images/photos/000/002/057/original/A495Vis_0_NRG.jpg)

_**A false color image from a Canon A495 dual-camera setup using Fiji plugin** _
<p></p>
<p></p>

[![A495Vis_0_NDVI_FloatSpectrum.jpg](https://i.publiclab.org/system/images/photos/000/002/058/medium/A495Vis_0_NDVI_FloatSpectrum.jpg)](https://i.publiclab.org/system/images/photos/000/002/058/original/A495Vis_0_NDVI_FloatSpectrum.jpg)

_**NDVI from a Canon A495 dual-camera setup using Fiji plugin with no stretch**_
<p></p>
<p></p>

[![A495Vis_0_NRG_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/059/medium/A495Vis_0_NRG_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/059/original/A495Vis_0_NRG_NDVI1.jpg)


_**NDVI from a Canon A495 dual-camera setup using single regression calibration**_
<p></p>
<p></p>

[![A495Vis_0_NRG_NDVI1Gray.jpg](https://i.publiclab.org/system/images/photos/000/002/060/medium/A495Vis_0_NRG_NDVI1Gray.jpg)](https://i.publiclab.org/system/images/photos/000/002/060/original/A495Vis_0_NRG_NDVI1Gray.jpg)

_**Same as the above image but displayed with a gray look-up-table**_
<p></p>
<p></p>

[![A810Rosco2008_Block_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/061/medium/A810Rosco2008_Block_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/061/original/A810Rosco2008_Block_0_NDVI1.jpg)

_**NDVI from a A810 with a Rosco 2008 filter using simple regression calibration**_
<p></p>
<p></p>

One thing to notice with the dual-camera images compared to the single band image is that non-photosynthetic targets have low NDVI values in the dual-camera photos and high NDVI in the single camera photos. The reason for this was discussed briefly in  part 1. NDVI calculated using blue light instead of red light with produce high NDVI values when the the reflectance of blue light is much lower than reflectance of NIR light which is quite often the case with non-photosynthetic material. That effect is clear with the wood and insulation but also with leaves in the grass. This tends to indicate that using a blue filter is not ideal for calculating NDVI since differentiating between photosynthetic and nonphotosynthetic material is not always clear. 

Another thing to note is that the NDVI image from the dual-camera setup using simple regression calibration is that the values for grass are higher than they should be. I expect this is primarily an artifact of how I collected sample pixels to compare with the reference NDVI values so I am reasonably confident this can be ameliorated using better reference targets.

The last set of NDVI images from this discussion were created by calibrating directly to NDVI values instead of calibrating the individual bands and then creating an NDVI image. For independent (predictor) variables I used the blue and red bands from an image acquired using the Canon A810 with a Rosco 2008 filter with white balance from a cinder block and no exposure compensation. The dependent (response) variable was NDVI calculated from the reference reflectance data using wavelengths of 650 nm (red) and 840 nm (NIR) which should be similar to NDVI derived from Landsat Thematic Mapper imagery. I also tried a multiple regression using all three bands. 

[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/064/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/064/original/LookUpTableSmall.jpg)

[![A810Rosco2008_Block_0_NDVIReg.jpg](https://i.publiclab.org/system/images/photos/000/002/062/medium/A810Rosco2008_Block_0_NDVIReg.jpg)](https://i.publiclab.org/system/images/photos/000/002/062/original/A810Rosco2008_Block_0_NDVIReg.jpg)

_**NDVI from Canon A810 with a Rosco 2008 filter using multiple (blue +  red ) regression to calibrate directly to NDVI**_
<p></p>
<p></p>

[![A810Rosco2008_Block_0_NDVIReg3Bands.jpg](https://i.publiclab.org/system/images/photos/000/002/063/medium/A810Rosco2008_Block_0_NDVIReg3Bands.jpg)](https://i.publiclab.org/system/images/photos/000/002/063/original/A810Rosco2008_Block_0_NDVIReg3Bands.jpg)
_
**NDVI from Canon A810 with a Rosco 2008 filter using multiple (blue + green + red ) regression to calibrate directly to NDVI**_
<p></p>
<p></p>


The results from calibrating directly to NDVI using the blue and red bands seem quite improved, at least for the non-photosynthetic targets when compared to the the NDVI image created by first calibrating the individual bands to reflectance than calculating NDVI. Adding the green band into the regression seems to produce a noisy image. 

I will try to continue developing a calibration protocol with the hope of developing something that will be easy to use to produce decent reproducible NDVI imagery. The two primary tasks are creating a reference panel and writing software for processing. I also would like to play with a red filter to see if there are advantages when compared to using a blue filter for calculating NDVI with a single camera system. 