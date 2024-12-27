---
title: "Calibrating DIY NIR cameras – part 1"

tagnames: 'calibration, calibrate-ndvi'
author: nedhorning
path: /notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1.md
nid: 9509
uid: 133

cids: 7319,7328,7329,11011,11030,11031,11170,11173,11348,11354,11824,11826,11837,11875,16793,16794,16795,16796

---

![](https://publiclab.org/public/system/images/photos/000/001/989/original/ChrisInAction.JPG)

# Calibrating DIY NIR cameras – part 1

by [nedhorning](../../../profile/nedhorning) | October 21, 2013 20:13

October 21, 2013 20:13 | Tags: [calibration](../tag/calibration), [calibrate-ndvi](../tag/calibrate-ndvi)

----

This is the first of what I hope will be a series of notes related to camera calibration. The intent is to document a process of developing a calibration routine that can be used to improve our ability to create NDVI images from DIY near-infrared (NIR) modified cameras so they can be compared with images acquired by satellites. I will try to explain the process I am using in reasonable detail so it can be critiqued and improved. This first note will provide background information and present initial results.

**Camera calibration**
A goal for many of us who have modified cameras to acquire NIR images is to create NDVI images. A common way to do this is to modify the white balance of the camera or use image math to modify the image until the resulting image appears to have expected NDVI values. This approach works reasonably well if the intent is to detect relative changes in vegetation productivity or health across a single image but has limitations  comparing images acquired from other cameras or using the same camera in different lighting conditions or camera configurations such as shutter speed, aperture ASA speed, or white balance. 

Another approach is to calibrate the camera using a reference target so the image recorded by the camera relates to a physical measurement. Two measurements that could be used for calibration are radiance and reflectance. Radiance is effectively a measure of how many photons are hitting the camera sensor and reflectance is the intensity of light reflected from a target divided by the intensity of light illuminating that target, often expressed as a percent (e.g., the percentage of incoming light that is reflected off a target). In some ways calibrating a camera to radiance makes more sense since that's basically what a camera sensor is measuring but it's a difficult process requiring specialized equipment.  Calibrating to reflectance is a bit easier since published reflectance values for many materials are available in online spectral libraries and calculating NDV from reflectance is often preferred to calculating it from radiance. 

**Acquiring the images**
To start I searched through a few spectral libraries (http://speclab.cr.usgs.gov/spectral-lib.html, http://speclib.jpl.nasa.gov/, http://spectrallibrary.utep.edu/, http://www.frames.gov/partner-sites/assessing-burn-severity/spectral/) to find spectra of objects I had laying around the house. I ended up selecting pine boards (one kiln dried from a lumber yard and one air dried from my property), tar paper, grass, pink fiberglass insulation, and corrugated cardboard. Last Thursday Chris Fastie and I got together to take photos of these “reference” targets. Chris brought a bunch of Canon cameras: G11 with a Life Pixel Super Blue filter, A810 with a Rosco 2008 filter, and a dual visible/NIR camera pair using A495 cameras. All the photos were acquired in (more or less) sunny conditions using exposure compensation settings of 0, -1/3, and -2/3. For each camera we also set different white balances using blue origami paper, a gray cinder block and the “sun” setting available in most cameras. My expectation is that we will be able to generate a similar NDVI images for each camera regardless of the white balance or camera settings. 



[![VisImage.JPG](https://i.publiclab.org/system/images/photos/000/001/977/medium/VisImage.JPG)](https://i.publiclab.org/system/images/photos/000/001/977/original/VisImage.JPG)

**First test**
For the first test I selected a photo from the Canon A810 with the Rosco 2008 filter. The shutter speed was 1/250 second and the aperture was 2.8. White balance was set using a cinder block in the shade. The first step was to extract sample pixels from the photo for each of the reference features. That was done in Fiji (a version of ImageJ) by drawing a rectangle or polygon on each target and then using the Analyze => Color Histogram function to calculate the mean pixel value for each band of the pixels bounded by the rectangle or polygon. These values were pasted into an spreadsheet. 

[![SamplePixelSelection.jpg](https://i.publiclab.org/system/images/photos/000/001/979/medium/SamplePixelSelection.jpg)](https://i.publiclab.org/system/images/photos/000/001/979/original/SamplePixelSelection.jpg)

[![ResultsWindow.jpg](https://i.publiclab.org/system/images/photos/000/001/978/medium/ResultsWindow.jpg)](https://i.publiclab.org/system/images/photos/000/001/978/original/ResultsWindow.jpg)
_**InfraBlue image with a selection polygon on the pine board and the resulting average pixel values for each band**_

Material               |Red band     |Green band     |Blue band
----------------------------|:--------------:|:--------------:|:--------------:|
KD pine board   |193.95   |165.62   |122.45   
Ripton white pine   |196.38|162.32|112.68
Cardboard   |180.63|149.1|108.9
Tar paper   |42.6|32.82|28.32
Grass   |180.06|119.44|57.58
_**Table of average pixel values for each calibration target in the photo**_
The values under each color are the average pixel value of the pixels extracted from the photos. The reference reflectance values from spectral libraries were also entered into the spreadsheet.

Material|Ref 400|Ref 450|Ref 500|Ref 800|Ref 840|Ref 900
-----------------|------------|------------|------------|----------------|-------------|--------------
KD pine board|10.79|23.85|36.19|89.95|91.39|91.90
Ripton white pine|10.79|23.85|36.19|89.95|91.39|91.90
Cardboard|7.456|10.15|13.34|43.74|48.08|51.55
Tar paper|2.26|2.35|2.43|2.91|2.97|3.10
Grass|3.82|4.12|4.54|48.432|49.37|50.79
_**Table of percent reflectance values copied from spectral libraries for the target material**_

The columns hold the percent reflectance values for each material for the wavelength noted in the column label. (e.g., Ref400 = reflectance for 400 micrometers wavelength)

Using these data I calculated the following 12 linear regressions:

* Ref400 (dependent variable) vs Blue (independent variable)
* Ref400 vs Blue + Green
* Ref450 vs Blue; 
* Ref450 vs Blue + Green
* Ref 500 vs Blue
* Ref500 vs Blue + Green
* Ref800 vs Red
* Ref800 vs Red + Green
* Red850 vs Red
* Ref850 vs Red + Green
* Ref900 vs Red
* Ref900 vs Red + Green

Regression coefficients and R squared values were calculated and plots of the regressions with a single independent variable were created. You'll note that the pink fiberglass insulation isn't included in the list of materials. The graphs showed the insulation to be an outlier so I removed it from the list. The insulation was a bit old and it didn't look like “fresh” insulation so I figured it was not very similar to the insulation used to record the reference reflectance I got the the spectral library. 

[![Ref400VsBlue.jpg](https://i.publiclab.org/system/images/photos/000/001/980/medium/Ref400VsBlue.jpg)](https://i.publiclab.org/system/images/photos/000/001/980/original/Ref400VsBlue.jpg)

[![Ref900VsRed.jpg](https://i.publiclab.org/system/images/photos/000/001/981/medium/Ref900VsRed.jpg)](https://i.publiclab.org/system/images/photos/000/001/981/original/Ref900VsRed.jpg)

The results indicated that the best fit for the simple regression (using a single independent variable), based solely on the R2 values, for the blue band was Ref400 and for the red band the best fit was with Ref900. In addition to simple regressions I ran regressions using two independent variables to see if adding information in the green band would improve the results. I did this since there appears to be green light leakage in the blue band and also the NIR band (red). 

The next step was to create NDVI images by applying the regression coefficients to calibrate the blue and red bands and then calculating NDVI. I created a script in the open source statistical software R to create the NDVI images. The range of NDVI values in the images is from 0 to 1. NDVI values less than 0 were set to 0. I used a continuous color table to make it easier to notice differences between images. Below are the results. See the color table for an indication of NDVI values.

**NDVI**

[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/001/987/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/001/987/original/LookUpTableSmall.jpg)



[![ColorNDVINoStretch0_1.jpg](https://i.publiclab.org/system/images/photos/000/001/982/medium/ColorNDVINoStretch0_1.jpg)](https://i.publiclab.org/system/images/photos/000/001/982/original/ColorNDVINoStretch0_1.jpg)
**NDVI  created using the ImageJ/Fiji plugin with no stretch**



[![ColorNDVI_Saturation2Stretch0_1.jpg](https://i.publiclab.org/system/images/photos/000/001/983/medium/ColorNDVI_Saturation2Stretch0_1.jpg)](https://i.publiclab.org/system/images/photos/000/001/983/original/ColorNDVI_Saturation2Stretch0_1.jpg)
**NDVI  created using the ImageJ/Fiji plugin with saturation = 2 stretch**

**NDVI**
[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/001/988/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/001/988/original/LookUpTableSmall.jpg)

[![NDVI_v1_8bit.jpg](https://i.publiclab.org/system/images/photos/000/001/985/medium/NDVI_v1_8bit.jpg)](https://i.publiclab.org/system/images/photos/000/001/985/original/NDVI_v1_8bit.jpg)
**NDVI from simple regression calibration **

[![NDVI_v2_8bit.jpg](https://i.publiclab.org/system/images/photos/000/001/986/medium/NDVI_v2_8bit.jpg)](https://i.publiclab.org/system/images/photos/000/001/986/original/NDVI_v2_8bit.jpg)
**NDVI from multiple (blue + green and red + green) regression calibration**

As a reference for NDVI I calculated the NDVI values for the reference materials using the data from the spectral libraries for 400 and 900 micrometer wavelengths. To compare these with NDVI that would have been calculated using wavelengths similar to those used to create NDVI with Landsat Thematic Mapper data I also included NDVI values calculated using 650 and 840 micrometer wavelengths. 


Material|NDVI (900/400)|NDVI (840/650)
-----------|-------------------------|---------------
KD pine board|0.79|0.08
Ripton white pine|0.79|0.08
Cardboard|0.75|0.24
Tar paper|0.16|0.05
Grass|0.86|0.82
_**Table of NDVI values using the blue band (400 µm) which are what we expect from an InfraBlue photo and the red band (650 µm) which is what we would expect from a Landsat TM image**_

From this table you can see that the NDVI values for vegetation are similar when we substitute the red wavelengths (~650 µm) with blue light (~400 µm)  but there is a very large difference in NDVI values for non-photosynthetic targets. I'll write more about that in a future research note.

**Next steps**
These calibration results are encouraging. Now that I have a work flow established it will be relatively easy to do additional comparisons. The next research note will focus on calibrating of images acquired with the same camera but using different exposures and different white balance settings. After that I'll process the photos from the G11 SuperBlue camera and then finally I'll see how well the calibration works for the dual-camera visible/NIR setup. In the meantime any comments are welcome. I loaded up all of the photos the spreadsheet and R script in case anyone else wants to work with these images: [ftp://ftp.amnh.org/pub/people/horning/CalibrationTestPhotos](ftp://ftp.amnh.org/pub/people/horning/CalibrationTestPhotos).