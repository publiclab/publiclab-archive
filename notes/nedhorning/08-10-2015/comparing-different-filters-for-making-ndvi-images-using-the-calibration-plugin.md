---
title: "Comparing different filters for making NDVI images using the calibration plugin"\ntagnames: 'ndvi-calibrate, midopt'
author: nedhorning
path: /notes/nedhorning/08-10-2015/comparing-different-filters-for-making-ndvi-images-using-the-calibration-plugin.md
nid: 12134
uid: 133

---

![](https://publiclab.org/public/system/images/photos/000/011/093/original/iFarm2015-621-4_Clipped.jpg)

# Comparing different filters for making NDVI images using the calibration plugin

by [nedhorning](../profile/nedhorning) | August 10, 2015 21:30

August 10, 2015 21:30 | Tags: [ndvi-calibrate](../tag/ndvi-calibrate), [midopt](../tag/midopt)

----

This research note compares four different filters using the new calibration capabilities in the photo monitoring plugin: http://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji

The images for this set of tests were acquired during iFARM 2015: http://publiclab.org/notes/cfastie/05-21-2015/ifarm-2015-report. The four filters are from MidOpt:
DB660/850 red / NIR-pass narrow band filter: http://midopt.com/filters/db660850
DB475/850 blue / NIR-pass narrow band filter: http://midopt.com/filters/db450850/
DB650/808  red / NIR-pass narrow band filter
DB450/808 blue / NIR-pass narrow band filter

The filters were attached to a Canon A2200 digital camera with the NIR-block filter (hot mirror) removed and a filter tube taped to the camera body with duct tape. The different filters were threaded on the tube for each shot while the camera was secured with a tripod. 


[![IMG_1406_small.JPG](https://i.publiclab.org/system/images/photos/000/011/085/medium/IMG_1406_small.JPG)](https://i.publiclab.org/system/images/photos/000/011/085/original/IMG_1406_small.JPG)

For the Calculate image calibration coefficients plugin I subtracted 80% of the NIR form the visible band. I used the RAW images processed using the following dcraw command:
dcraw -r 1 1 1 1 -o 0 -q 0 -4 -T /home/nedhorning/filterTesting/InputImages/CRW_0199.DNG

This dcraw command creates an RGB 16-bit TIFF image without applying white balance or gamma correction. I used the raw images since the JPEG image saturated on the bright target. 

To do the calibration I used only two targets, a bright white sheet of computer printer paper and a piece of tar paper. 

Below are the NDVI images created using the calibration work flow. All of the images were colored using the NDVI_VGYRM look-up table.

[![ColorBarNumbers.jpg](https://i.publiclab.org/system/images/photos/000/011/086/medium/ColorBarNumbers.jpg)](https://i.publiclab.org/system/images/photos/000/011/086/original/ColorBarNumbers.jpg)
NDVI_VGYRM look-up table


[![CRW_0196_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/011/087/medium/CRW_0196_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/011/087/original/CRW_0196_NDVI_Color.jpg)
DB660/850 red / NIR-pass narrow band filter


[![CRW_0199_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/011/088/medium/CRW_0199_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/011/088/original/CRW_0199_NDVI_Color.jpg)
DB475/850 blue / NIR-pass narrow band filter


[![CRW_0195_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/011/089/medium/CRW_0195_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/011/089/original/CRW_0195_NDVI_Color.jpg)
DB650/808  red / NIR-pass narrow band filter


[![CRW_0198_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/011/090/medium/CRW_0198_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/011/090/original/CRW_0198_NDVI_Color.jpg)
DB450/808 blue / NIR-pass narrow band filter

The results for some of these filters would be improved by changing the percent of NIR that is subtracted from the visible channel. For example, here is the DB450/808 filter result if the subtraction of NIR from the visible band was not done.


[![CRW_0198_NDVI_Color_NoSubtract.jpg](https://i.publiclab.org/system/images/photos/000/011/092/medium/CRW_0198_NDVI_Color_NoSubtract.jpg)](https://i.publiclab.org/system/images/photos/000/011/092/original/CRW_0198_NDVI_Color_NoSubtract.jpg)

Each filter will requite a little experimentation to find the "best" percentage of NIR to subtract from the visible band but I don't expect that value will vary with scene conditions but only time will tell if that assumption is accurate.

So, what conclusions can we draw from this note? Without investing the time to tune the calibration it's difficult to do an objective comparison. We can compare the photos to see how basic NDVI patterns throughout the images differ and note some areas where one filter appears to be more sensitive to changes than another but that's about all. I'm curious if anyone has comments about the photos. Unfortunately since I'm using raw TIFF images they are too large (~85MB) to post on this site but if anyone is interested in calibrating some of these images please contact me and I'll try to figure out a way to get them to you. 

When working with just two different calibration targets the process of selecting an optimum percentage of NIR to subtract from visible is quite subjective. Basically you run the plugin, look at the result and run it again with a different value and compare. After several runs with different values you will be able to settle on one that looks good. In my next note I'll try to demonstrate a method that uses multiple calibration targets to more objectively determine calibration parameters. 