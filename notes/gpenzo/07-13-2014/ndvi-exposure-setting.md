---
title: NDVI exposure setting
tagnames: ndvi, calibration, infragram, exposure, time
author: gpenzo
path: /notes/gpenzo/07-13-2014/ndvi-exposure-setting.md
nid: 10684
uid: 420719

---

# NDVI exposure setting

by [gpenzo](../profile/gpenzo) July 13, 2014 21:04

July 13, 2014 21:04 | Tags: [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infragram](../tag/infragram), [exposure](../tag/exposure), [time](../tag/time)

###What I want to do
I want to understand how others which do NDVI with one or two cameras decide which exposure time to use.
###My attempt and results
Setup
Two cameras, one normal and the otehr IR lock filter removed and a 720NM filter in front of the lens.
Result images are converted to jpeg to save disk sapce.
Both chdk raw output
Vis: shutter 1/200 iso 200
NIT: shutter 1/200 and 1/400 iso 200

VIS for NIR 1/200 
[![CRW_0307.jpg](https://i.publiclab.org/system/images/photos/000/005/251/medium/CRW_0307.jpg)](https://i.publiclab.org/system/images/photos/000/005/251/original/CRW_0307.jpg)

VIS for NIR 1/400
[![CRW_0309.jpg](https://i.publiclab.org/system/images/photos/000/005/252/medium/CRW_0309.jpg)](https://i.publiclab.org/system/images/photos/000/005/252/original/CRW_0309.jpg)

NIR  1/200
[![CRW_2647.jpg](https://i.publiclab.org/system/images/photos/000/005/253/medium/CRW_2647.jpg)](https://i.publiclab.org/system/images/photos/000/005/253/original/CRW_2647.jpg)


NIR 1/400
[![CRW_2649.jpg](https://i.publiclab.org/system/images/photos/000/005/254/medium/CRW_2649.jpg)](https://i.publiclab.org/system/images/photos/000/005/254/original/CRW_2649.jpg)

NDVI 1/200
[![CRW_0307_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/005/255/medium/CRW_0307_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/005/255/original/CRW_0307_NDVI_Color.jpg)


NDVI 1/400
[![CRW_0309_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/005/256/medium/CRW_0309_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/005/256/original/CRW_0309_NDVI_Color.jpg)


###Questions and next steps
As you can see, the 1/200 NDVI picture has better indexes.
My question is: How do we determine the correct exposure value for both cameras. Maybe 1/100 was better.
Does anyone have an idea.

One solution which just pop up after my post: Make a picture both visible and NIR and let the camera decide what are the best iso and shuter settings for current lighting conditions. 
With chdk lock these settings, ISO and shutter speed on both cameras.
With these "calibration" every picture made on diffrent days should yield almost the same NVI result.
And Hope the shutter speed is fast enough for the movement on my drone or pictures will be blured.
Comming days only rain .


###Why I'm interested
If I want to use this NDVI pictures with farmers they cannot differ to much between diffrent days.