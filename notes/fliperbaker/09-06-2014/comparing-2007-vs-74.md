---
title: Comparing #2007 vs #74
tagnames: near-infrared-camera, ndvi, filter, infragram, 2007, 74, filter_compare, first-time-poster
author: fliperbaker
path: /notes/fliperbaker/09-06-2014/comparing-2007-vs-74.md
nid: 11114
uid: 421358

---

# Comparing #2007 vs #74

by [fliperbaker](../profile/fliperbaker) September 06, 2014 23:36

September 06, 2014 23:36 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [filter](../tag/filter), [infragram](../tag/infragram), [2007](../tag/2007), [74](../tag/74), [filter_compare](../tag/filter_compare), [first-time-poster](../tag/first-time-poster)

###What I want to do
I want to know which filter performs better to get NDVI images with a Canon A490 (ccd)
###My attempt and results
I am comparing here the results obtained with this two Rosco filters when getting NDVI images from NIR photos. The camera used was a Canon A490 with the IR filter previously removed. Camera was white balanced with a blue origami paper before taking photos with each filter. The software to process NIR photos was Fiji and Photomonitoring plugin.

The ideal criteria would be to compare NDVI values with real biological plant data, but as this is not possible for me I would compare photo histograms, that is objective data, and then interpret NDVI image, a more subjective analaysis.

Firstly it is interesting to compare filter spectral response. #74 lets less green wavelengths pass through and a bit less energy from blue channel, also less NIR wavelengths (> 700nm), so we can expect greater red-blue channel differences with #2007. The total area of passing wavelengths seems greater for #2007 so it will generate more luminous photos.

<div align="center">
<img align="middle" src="https://i.publiclab.org/system/images/photos/000/006/644/medium/74vs2007.PNG">
</div>



This photo contains some plants and also some other objects that are not photosynthetic, I took this photo to evaluate filter ability to distinguish photosynthetic materia in an image.

<div align="center">
<img align="center" src="https://i.publiclab.org/system/images/photos/000/006/643/medium/filter_comp_1.PNG">
</div>



The deduction about amount of light seems true as camera used fastest shutter time for #2007. One curious thing is that leaf shadows appears with higher ndvi level than leafs, specially with #74. And also with #74 the shadow that crosses all the circle is noticeable in the #74 NDVI image, but not in the #2007. So one conclusion from this is that #74 is more affected by shadows and could lead to errors when distinguising plants in one image.

The histogram of each photo is the following. The difference between the average values of red a blue channel is 28,4 for #74 and 26,2 for #2007, what is not what I expected, but this full image histogram is not very meaningful as more than 75% of the photo is non photosynthetic material and the amount of plant reflecting more NIR is small. Anyhow I am comparing average values for each channel, which is a very rough analysis.

<div align="center">
<img align="center" src="https://i.publiclab.org/system/images/photos/000/006/645/medium/hist_comp_1.PNG">
</div>



This other image is from just some leafs, all the objects in the image are photosynthetic so here we can evaluate better the ability of each filter to differentiate ndvi levels.

<div align="center">
<img align="center" src="https://i.publiclab.org/system/images/photos/000/006/646/medium/filter_comp_2.PNG">
</div>



The histogram of the image reveals now a R-B everage difference of 62,1 with #74 and 56,2 for #2007. Here the comparison is for a image with 95% of photosynthetic material. And this small difference in channel levels is noticeable in the NDVI image, as the different levels in the main leaf are more clear in the #73 than in the #2007. 

<div align="center">
<img align="center" src="https://i.publiclab.org/system/images/photos/000/006/647/medium/hist_comp_2.PNG">
</div>



My first conclusion is that #74 performs a bit better for my Canon A490 CCD, I will soon try the red filters.

###Questions and next steps 
Is comparing histogram channel average value effective to deduce NIR image quality for getting NDVI values?, what would be better than simple average?

Why shadows have more NDVI level than plant??

###Why I'm interested
Getting aerial crop NDVI images