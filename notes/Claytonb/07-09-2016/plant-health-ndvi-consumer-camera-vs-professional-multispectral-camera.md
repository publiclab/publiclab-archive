---
title: "Plant Health NDVI Consumer camera vs Professional multispectral camera"

tagnames: 'ndvi, calibration, infrared, near-infrared, infragram, comparison, wratten25a, super-red, red-vs-blue, barnstar:basic, validation, response:12670'
author: Claytonb
path: /notes/Claytonb/07-09-2016/plant-health-ndvi-consumer-camera-vs-professional-multispectral-camera.md
nid: 13275
uid: 460246

cids: 14899,14902,14936,14946,14947,14956,15367,15369,16223

---

![](https://publiclab.org/public/system/images/photos/000/016/938/original/side_by_side_cameras.JPG)

# Plant Health NDVI Consumer camera vs Professional multispectral camera

by [Claytonb](../../../profile/Claytonb) | July 09, 2016 17:50

July 09, 2016 17:50 | Tags: [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [near-infrared](../tag/near-infrared), [infragram](../tag/infragram), [comparison](../tag/comparison), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [red-vs-blue](../tag/red-vs-blue), [barnstar:basic](../tag/barnstar:basic), [validation](../tag/validation), [response:12670](../tag/response:12670)

----

I wanted to share some of my results in comparing a modified consumer camera with a scientific grade multispectral camera when evaluating plant health with NDVI. This note is related to NDVI only as the modified consumer camera tested only has two bands to compare with(Red and NIR). I wanted to see if it was possible to get meaningful and comparable NDVI data from an affordable consumer grade camera vs a scientific multispectral camera and if the difference in price was really worth it.

NDVI is a vegetation index that uses a numerical indicator using visible and near-infrared bands to help analyze remote sensing measurements. It is often used in agriculture to measure general crop health and changes. It is calculated by dividing the difference in the near-infrared and red color bands by the sum of near-infrared and red bands for each pixel. 

[![NDVI_equation.png](//i.publiclab.org/system/images/photos/000/016/926/large/NDVI_equation.png)](//i.publiclab.org/system/images/photos/000/016/926/original/NDVI_equation.png)

The consumer camera used was the Canon S100 with the internal IR filter removed and replaced with the MidOpt DB 660/850 filter(http://midopt.com/filters/db660850/)
**MidOpt Band info**

[![MidOpt_Bands1.jpg](//i.publiclab.org/system/images/photos/000/016/927/large/MidOpt_Bands1.jpg)](//i.publiclab.org/system/images/photos/000/016/927/original/MidOpt_Bands1.jpg)


The scientific camera used was the Micasense RedEdge 3(http://www.micasense.com/rededge/)
**RedEdge Band info**

[![RedEdge_wavelength_info2.jpg](//i.publiclab.org/system/images/photos/000/016/928/large/RedEdge_wavelength_info2.jpg)](//i.publiclab.org/system/images/photos/000/016/928/original/RedEdge_wavelength_info2.jpg)


**Canon S100 Red and NIR channels**

[![Canon_Red.jpg](//i.publiclab.org/system/images/photos/000/016/929/large/Canon_Red.jpg)](//i.publiclab.org/system/images/photos/000/016/929/original/Canon_Red.jpg)


[![Canon_NIR.jpg](//i.publiclab.org/system/images/photos/000/016/930/large/Canon_NIR.jpg)](//i.publiclab.org/system/images/photos/000/016/930/original/Canon_NIR.jpg)


**RedEdge 3 Red and NIR channels**


[![RedEdge_Red.jpg](//i.publiclab.org/system/images/photos/000/016/933/large/RedEdge_Red.jpg)](//i.publiclab.org/system/images/photos/000/016/933/original/RedEdge_Red.jpg)


[![RedEdge_NIR.jpg](//i.publiclab.org/system/images/photos/000/016/934/large/RedEdge_NIR.jpg)](//i.publiclab.org/system/images/photos/000/016/934/original/RedEdge_NIR.jpg)



Both sets of camera images were calibrated against reflectance panels with known values. Only RAW images were used. The images were obtained on the same day at around solar noon. The flight with the Canon camera was flown within five minutes of landing with the RedEdge camera. The image sets were processed with Pix4D Pro with the only difference being a slight modification to the NDVI formula with the Canon to account for the NIR contamination in the red channel.


**Side by side comparison**


[![Screenshot_(136).png](//i.publiclab.org/system/images/photos/000/016/937/large/Screenshot_%28136%29.png)](//i.publiclab.org/system/images/photos/000/016/937/original/Screenshot_%28136%29.png)



The results are very similar especially in terms of sensitivity. Can you tell which image set came from a near $7000 camera and which came from a camera that cost under $200?
The Canon set is on the left of the above image and the RedEdge set is on the right.
With the advances and availability of new filters to modify a consumer camera I think the gap is closing. Scientific cameras certainly have their abilities and value but the modified consumer cameras are proving their abilities and usefulness as well. 
