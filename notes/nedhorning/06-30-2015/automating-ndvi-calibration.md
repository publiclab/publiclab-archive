---
title: Automating NDVI calibration
tagnames: ndvi, calibration, infrared, infragram, response:10389, response:10607, ndvi-calibrate, midopt
author: nedhorning
path: /notes/nedhorning/06-30-2015/automating-ndvi-calibration.md
nid: 12021
uid: 133

---

![](https://publiclab.org/public/system/images/photos/000/010/483/original/iFarm2015-621-4.jpg)

# Automating NDVI calibration

by [nedhorning](../profile/nedhorning) June 30, 2015 12:57

June 30, 2015 12:57 | Tags: [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [infragram](../tag/infragram), [response:10389](../tag/response:10389), [response:10607](../tag/response:10607), [ndvi-calibrate](../tag/ndvi-calibrate), [midopt](../tag/midopt)

----

##Introduction
This note provides an update on my effort to simplify NDVI calibration. The images for this set of tests were acquired during iFARM 2015: http://publiclab.org/notes/cfastie/05-21-2015/ifarm-2015-report. For this test I used images acquired using a new MidOpt DB660/850 red / NIR-pass narrow band filter: http://midopt.com/filters/db660850. The specifications for this filter are likely the best I've seen for making NDVI images using point and shoot cameras with the hot-mirror removed - at least for my work. The bands it passes are quite similar to the red and NIR bands used in satellite-based sensors and they are relatively narrow. I've written a couple other notes about my general preference for red filters over blue (http://publiclab.org/notes/nedhorning/10-30-2013/red-vs-blue-filters-for-ndvi , http://publiclab.org/notes/nedhorning/11-01-2013/why-a-red-filter-should-work-well-for-ndvi). The one advantage of blue filters over very broad band red filters is that the red detectors in the camera sensor are much more sensitive to the shorter NIR wavelengths but this DB660/850 filter gets around that by centering the NIR band at 850nm where the sensitivity of the red detectors is roughly the same as the blue detectors (see figure 1). As will be illustrated below I use that feature to subtract out the NIR “noise” that is recorded by the red detectors. 

[![spectral-response-ccd.jpg](https://i.publiclab.org/system/images/photos/000/010/480/medium/spectral-response-ccd.jpg)](https://i.publiclab.org/system/images/photos/000/010/480/original/spectral-response-ccd.jpg)
Figure 1: Spectral response of a typical CCD camera sensor (downloaded from: http://www.astrosurf.com/luxorion/photo-ir-uv3.htm)


##Methods
All of these tests were done in the open software R since I find that relatively easy for prototyping. The basic calibration steps used in previous research notes were followed: http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration and http://publiclab.org/notes/nedhorning/06-23-2014/calibrating-raw-images-a-step-toward-jpeg-calibration

I subtracted 80% of the pixels values recorded in the blue band form those recorded in the red band to subtract out the effect of the NIR light recorded in the red detectors. It's not 100% since the blue detectors record some red light. 

The first step was to try and do the same basic calibration routine used in the previous notes but instead of extracting samples from the different targets before running the calibration program (a fairly time consuming and tedious task) I wanted to see if I could simulate a two-color calibration card and select the calibration targets from the image when the program runs. When the R script for this test is run the image is displayed and then the user draws a rectangle to select pixels from the dark target and then the bright target.  Several sample pixels from each color are used to calculate the coefficients of the line (slope and y-intercept or gain and offset) that correlates pixel values with reflectance values of the dark and bright targets. I used printer paper and tar paper for my bright and dark targets.  

The second step was to try this calibration approach on JPEG images. The same basic process was used but I removed the gamma correction using the process described in this research note: http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration
The results comparing raw and JPEG images are shown in figures 2 and 3. One important note is that the white pixels saturated (pixel values were 255) in the JPEG images and that had a significant effect on the calibration. The camera settings could have also been changed to prevent detector saturation but it would probably be best if the bright calibration target was not a bright white but perhaps off-white. 


[![raw_minus80.png](https://i.publiclab.org/system/images/photos/000/010/481/medium/raw_minus80.png)](https://i.publiclab.org/system/images/photos/000/010/481/original/raw_minus80.png)
Figure 2: Automated NDVI using a RAW image and a white and black calibration target

[![jpeg_minus80.png](https://i.publiclab.org/system/images/photos/000/010/482/medium/jpeg_minus80.png)](https://i.publiclab.org/system/images/photos/000/010/482/original/jpeg_minus80.png)
Figure 3: Automated NDVI using a JPEG image and a white and black calibration target



##Next steps
The next step is to see if I can create a Fiji/ImageJ plugin to make this calibration procedure more accessible so more people can test this calibration routine to see how robust it is. The plugin would use a single image to create the calibration coefficients and then those coefficients would be applied to all of the other images from a mission. Initially an assumption will be made that camera settings (e.g., shutter speed, ISO, aperture) were unchanged after the calibration target was imaged but future testing might reduce or eliminate that requirement. 

I still need to do some more tests and tweaking of some of the parameters but so far I'm encouraged. I will run a few more tests with JPEG images using different white balance settings to see what effect white balance has. My expectation is that we will be able to eliminate the custom white balance. I also want to try and see if I can automatically adjust for changes in camera parameters during a single mission. For example, if shooting in “auto” mode the shutter speed and other camera settings might change and it would be nice to be able to adjust for those changes without any additional input or calibration shots by the user. 

Note: The header image was acquired by by Chris Fastie and it shows the target layout for the tests. 