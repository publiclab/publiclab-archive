---
title: Calibration cogitation
tagnames: ndvi, calibration, infrared, filter, infragram, plant-health, targets, response:13028, qgis
author: cfastie
path: /notes/cfastie/05-01-2016/calibration-cogitation.md
nid: 13058
uid: 554

---

# Calibration cogitation

by [cfastie](../profile/cfastie) May 01, 2016 19:19

May 01, 2016 19:19 | Tags: [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [filter](../tag/filter), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [targets](../tag/targets), [response:13028](../tag/response:13028), [qgis](../tag/qgis)

Normalized difference vegetation index (NDVI) has been computed from satellite and airborne data for 45 years. The data used are measures of how much energy is reflected from vegetation as light in the red and near infrared (NIR) spectral bands. Healthy leaves reflect much more energy in the NIR than in the red band, so healthy plants have a big 'difference' which computes to a big value for NDVI. The instruments used to measure NDVI are not normal cameras, they are devices which measure radiant energy in particular spectral bands.

To use a photo from a consumer digital camera to compute NDVI, the brightness values captured in each pixel must be related to the amount of energy (radiance) being reflected from things in the photographed scene. In a typical photo, if more energy was reflected from one surface than another, the pixel values for the first surface will generally be higher than for the second surface. Although the camera sensor captures information that is directly (mostly linearly) related to the incoming energy, producing the jpeg image files involves additional processing. So determining the radiance from the jpeg pixel values (digital numbers or DNs) can involve undoing multiple inscrutable processing steps. Camera RAW image files have had little or no processing done so assigning radiance values to DNs is simpler.

NDVI requires data about both red and NIR radiance from each point (pixel) in the scene. Because NDVI is all about the difference between red and NIR, those two bands must be measured in the same way. Whether separate cameras or separate color channels from the same camera are used to capture red and NIR, it is critical that the values for red and NIR represent the actual relationship between the radiant energy in the incoming red and NIR bands. The lenses and filters used probably do not pass the same proportion of incoming red and NIR, and the camera's sensor is probably not equally sensitive to red and NIR. So even if camera RAW images are captured, the recorded "brightness" of red and NIR probably do not represent the actual difference in energy that was reflected from leaves in those two bands.

[![CaliNDVI_a.JPG](//i.publiclab.org/system/images/photos/000/015/891/medium/CaliNDVI_a.JPG)](//i.publiclab.org/system/images/photos/000/015/891/original/CaliNDVI_a.JPG)  
*Figure 1. This is the relationship that we need in order to compute NDVI from a photo. For red light (shown) and also for NIR, we need points on the graph (which we hope will form a tidy line) so the DN for red in each pixel can be converted into a value for radiant energy (radiance) of incoming red light. We need a separate relationship for NIR.*

To convert the DNs in a photo file to an estimate of radiance, we need to establish the relationship between the two (Figure 1). One way to do this is to include in the photo surfaces of known reflectivity in the particular red and NIR bands that the camera captures. These targets must be characterized so that the amount of red and NIR energy reflected from them is known (Figure 2). Some type of spectrometer is needed to characterize targets. 

[![CaliNDVI_1.JPG](//i.publiclab.org/system/images/photos/000/015/892/medium/CaliNDVI_1.JPG)](//i.publiclab.org/system/images/photos/000/015/892/original/CaliNDVI_1.JPG)   
*Figure 2. This is what we need to know for the targets that will be put in the scene we photograph. We need a graph like this for the red band we are capturing (shown) and also for the NIR band. So the red and NIR reflectivity of each target (five are shown but that is arbitrary) must be measured with a spectrometer.*

The carefully characterized targets must then be included in some of the photos we take of plants to make NDVI images. In these photos, pixels which constitute the targets can be used to determine the DNs which result from each level of reflectivity of red or NIR (Figure 3).

[![CaliNDVI_2.JPG](//i.publiclab.org/system/images/photos/000/015/893/medium/CaliNDVI_2.JPG)](//i.publiclab.org/system/images/photos/000/015/893/original/CaliNDVI_2.JPG)  
*Figure 3. This is what we learn when we include the characterized targets in the photos of vegetation. The area in the photo(s) which includes each target will have the pixel values (DNs) that we will use to represent the reflectivity of red (shown) or of NIR.*

We now know two things about each target: 1) we know what percentage of the red and NIR energy that hits each target is reflected from it (Figure 2), and 2) for our photo of vegetation we know the DN in the pixels for each target (Figure 3, for both red and NIR). We can now establish a relationship between these two things. This relationship can be used to estimate how much red or NIR energy was coming from any point in the photo given only the DNs in each pixel. The relationship can be described mathematically with a regression of % reflectivity on DN. Percent reflectivity is assumed to be a good proxy for radiance or the amount of radiant energy coming from each point in the scene (in either the red or NIR spectral band).

[![CaliNDVI_3.JPG](//i.publiclab.org/system/images/photos/000/015/894/medium/CaliNDVI_3.JPG)](//i.publiclab.org/system/images/photos/000/015/894/original/CaliNDVI_3.JPG)  
*Figure 4. To establish the relationship we have all been waiting for, we take the y axes from the two preceding figures and graph them against each other. A linear regression (the red line) based on those five points gives an average relationship which can be used to predict % reflectivity for any value (DN) of red (another regression is needed for NIR). Ideally, the regression line should pass through zero, but it might not and this could produce unrealistic NDVI values for low DNs. Similar artifacts can arise at the high end of the regression line.*

This seems like a lot of work to get an NDVI image. Fortunately, most of the work can be done by free software that already exists. Ned Horning has written a plugin for Fiji that does all the math with all those DNs in all those pixels in all those photos. Although it is possible to make an NDVI-like image without doing this, it is not possible to know how your results compare with results from another day or another researcher. By tying your results to actual measures of reflectivity (the targets), all of your results are mathematically related to those of anyone else who does the same.

The remaining obstacle for most people is finding suitable targets. Commercial targets which have been spectrally characterized can be incredibly expensive. Characterizing your own targets is easy if you have access to a spectrometer which can measure the absolute brightness of both red and NIR. Public Lab type spectrometers do not allow this, although a simple upgrade and some readily available data about the red and NIR sensitivity of the camera used should make it possible. 

Ta da. I haven't written the word calibration since the title.
