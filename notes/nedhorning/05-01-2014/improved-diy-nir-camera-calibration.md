---
title: Improved DIY NIR camera calibration
tagnames: near-infrared-camera, ndvi, nir, calibration, infragram, response:9509, ndvi-calibrate, multispectral-imaging
author: nedhorning
path: /notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration.md
nid: 10389
uid: 133

---

# Improved DIY NIR camera calibration

by [nedhorning](../profile/nedhorning) May 01, 2014 18:50

May 01, 2014 18:50 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [nir](../tag/nir), [calibration](../tag/calibration), [infragram](../tag/infragram), [response:9509](../tag/response:9509), [ndvi-calibrate](../tag/ndvi-calibrate), [multispectral-imaging](../tag/multispectral-imaging)

Last fall I started to look into methods to [calibrate near-infrared cameras to measure reflectance](http://publiclab.org/notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1). The intent of this work is to develop a simple and objective calibration work flow to facilitate the production of accurate NDVI images. The initial tests were conducted using materials I had laying around the house (e.g., pine boards, pink fiberglass, tar paper) and I used spectral reflectance curves from online spectral libraries to characterize the reflectance properties of those materials. The results were promising so I am picking up where I left off. 

To improve upon the initial research I wanted to use reference materials that could be characterized using a spectrometer instead of relying on spectral libraries. I contacted Mary Martin from the University of New Hampshire and she graciously agreed to scan some samples using a FOSS NIR6500 benchtop scanner. I sent her the following samples:

* Black spray paint 
* White spray paint
* Gray spray paint 
* Tar paper 
* White printer paper 
* Red card stock 

The spectral curves of the scans are below. Two scans of each sample were acquired.  
[![InfragramCalSamples.jpg](https://i.publiclab.org/system/images/photos/000/003/950/medium/InfragramCalSamples.jpg)](https://i.publiclab.org/system/images/photos/000/003/950/original/InfragramCalSamples.jpg)  
**Spectral curves of the sample calibration targets **  
.  

To test these new calibration targets I took a photo of them using a Canon 2200 camera with a Wratten 25A (red) filer. Next, I used Fiji to extract the average pixel values for rectangular regions of interest for each of the targets using the Analyze => Color Histogram function.  

[![FijiWindo.jpg](https://i.publiclab.org/system/images/photos/000/003/951/medium/FijiWindo.jpg)](https://i.publiclab.org/system/images/photos/000/003/951/original/FijiWindo.jpg)  
**Extracting sample pixels from the calibration targets in a region of interest using Fiji **  
.  

The average pixel values for each image band were entered into a table:

| Target | Red | Green | Blue |
|-----------------------------|:-------------------------:|:-------------------------:|:----------------------:|
| Black spray paint | 41.62 | 43.6 | 48.16 |
| White spray paint | 219.19 | 220.53 | 214.46 |
| Gray spray paint | 148.81 | 150.45 | 154.11 |
| Tar paper | 37.68 | 42.25 | 50.29 |
| White printer paper | 218.99 | 219.51 | 214.42 |
| Red card stock | 219.19 | 218.35 | 222.93 |

** Mean pixels values in the red, green, and blue channels of the calibration target photo**  
.  

For each target I plotted the average pixel values for the red band vs. the reference reflectance value recorded at 650 nm (red) and then plotted a linear regression line.  
[![withoutGammaCorrection.png](https://i.publiclab.org/system/images/photos/000/003/952/medium/withoutGammaCorrection.png)](https://i.publiclab.org/system/images/photos/000/003/952/original/withoutGammaCorrection.png)  
**Regression of pixel value vs reflectance (as measured by a spectrometer) **  
.  

I noticed the point representing the gray spray paint was a significant distance from the line. After some thought I realized this was the likely result of the gamma correction (http://en.wikipedia.org/wiki/Gamma_correction) that is applied when the image in converted to a JPEG inside the camera to make the camera sensor mimic the response of a human eye. The camera sensor  records light intensity more or less linearly (e.g., if twice as many photons hits the sensor the pixel value will double) but our eyes are more sensitive to low-light conditions than they are to brighter lighting so a gamma correction is applied (unless you are recording in RAW in which case the sensor response is linear) to brighten darker pixels. To transform the image pixel values to their original linear response I inverted the gamma correction formula [linear response pixel value = jpeg pixel value ^ (1/gamma) where “^” is the power function]. I didn't know the value for gamma but after some testing I found that a value of 0.35 worked reasonably well. Here is the plot after applying the inverted gamma correction.  

[![withGammaCorrection.png](https://i.publiclab.org/system/images/photos/000/003/953/medium/withGammaCorrection.png)](https://i.publiclab.org/system/images/photos/000/003/953/original/withGammaCorrection.png)  
**Regression of pixel value (after removing the gamma correction) vs reflectance (as measured by a spectrometer) **  
.  

You can see the outlier point is closer to the regression line.  I calibrated the red and blue (NIR) bands by applying the gain and offset (slope and intercept) values from the regression to produce reflectance images. The reflectance images were then used to calculate an NDVI image  [(NIR – Red) / (NIR + Red)]. The NDVI values in the image seem to be within the range of values I expect. In the image below the grass has NDVI values between 0.6 and 0.7. 


[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/003/957/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/003/957/original/LookUpTableSmall.jpg)  
[![IMG_1013_NDVI_1_color.jpg](https://i.publiclab.org/system/images/photos/000/003/958/medium/IMG_1013_NDVI_1_color.jpg)](https://i.publiclab.org/system/images/photos/000/003/958/original/IMG_1013_NDVI_1_color.jpg)  
**Color NDVI image **  
.  

[![IMG_1013_NDVI_1-1.jpg](https://i.publiclab.org/system/images/photos/000/003/956/medium/IMG_1013_NDVI_1-1.jpg)](https://i.publiclab.org/system/images/photos/000/003/956/original/IMG_1013_NDVI_1-1.jpg)  
**Grayscale NDVI image (black is low NDVI and white is high NDVI**  
.  

I should note that the targets I selected are not ideal but I was trying to use material that would be easy for people to purchase. If there is interest in this sort of calibration it might make sense to investigate manufacturing a stable and portable calibration card.

The next step is to test this work flow with different cameras. If the results continue to look promising I'll work on ways to simplify the process. The processing is still somewhat cumbersome but the intent is to develop an easy to use automated (or at least nearly so) method for calibrating photos so we can create NDVI images using objective methods. Ideally the process would involve taking a photo of a calibration target before a photo mission and then use software to read the photo of the calibration target and automatically extract pixel values and calculate the calibration coefficients which would be used to create NDVI images from the other photos.