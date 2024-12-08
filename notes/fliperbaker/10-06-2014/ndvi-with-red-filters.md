---
title: NDVI with red filters
tagnames: near-infrared-camera, super-red, barnstar:empiricism
author: fliperbaker
path: /notes/fliperbaker/10-06-2014/ndvi-with-red-filters.md
nid: 11240
uid: 421358

---

# NDVI with red filters

by [fliperbaker](../profile/fliperbaker) October 06, 2014 16:24

October 06, 2014 16:24 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [super-red](../tag/super-red), [barnstar:empiricism](../tag/barnstar:empiricism)

###What I want to do
Test the results on NDVI photos using red filters
###My attempt and results
Here a basic analysis about red filters performance for getting NDVI images. I compared four red filters:


[![red_filters.JPG](https://i.publiclab.org/system/images/photos/000/007/324/medium/red_filters.JPG)](https://i.publiclab.org/system/images/photos/000/007/324/original/red_filters.JPG)
<br/>

The spectral response is similar, but it is sharper with #106, #19 and #135, and between these three, #19 and #135 have higher values and are supposed to be more luminous and easier for using fast shutter speed at as needed for aerial platforms. 

Here some photos with the three finalist filters:

[![IMG_1869.JPG](https://i.publiclab.org/system/images/photos/000/007/311/medium/IMG_1869.JPG)](https://i.publiclab.org/system/images/photos/000/007/311/original/IMG_1869.JPG)
#19 red fire<br/><br/>



[![IMG_1885.JPG](https://i.publiclab.org/system/images/photos/000/007/312/medium/IMG_1885.JPG)](https://i.publiclab.org/system/images/photos/000/007/312/original/IMG_1885.JPG)
#135 golden amber<br/><br/>


[![IMG_1860_f106_wb_orange_shadow.JPG](https://i.publiclab.org/system/images/photos/000/007/314/medium/IMG_1860_f106_wb_orange_shadow.JPG)](https://i.publiclab.org/system/images/photos/000/007/314/original/IMG_1860_f106_wb_orange_shadow.JPG)
#106 primary red<br/><br/>






To the naked eye the #135 appears with a brighter blue color, promising.


The NDVI images for each photo are the following (the visible channel used is Red and the NIR channel is Blue.)

[![19_ndvi.JPG](https://i.publiclab.org/system/images/photos/000/007/315/medium/19_ndvi.JPG)](https://i.publiclab.org/system/images/photos/000/007/315/original/19_ndvi.JPG)
#19<br/><br/>



[![135_NDVI.JPG](https://i.publiclab.org/system/images/photos/000/007/316/medium/135_NDVI.JPG)](https://i.publiclab.org/system/images/photos/000/007/316/original/135_NDVI.JPG)
#135<br/><br/>



[![106_ndvi.JPG](https://i.publiclab.org/system/images/photos/000/007/317/medium/106_ndvi.JPG)](https://i.publiclab.org/system/images/photos/000/007/317/original/106_ndvi.JPG)
#106<br/><br/>


The #19 and #135 ndvi images are very similar and quite difficult to distinguish, but in the #106 there are lighter yellow colors and less presence of red is noticeable.


[![ndvi_red_compare_iii.JPG](https://i.publiclab.org/system/images/photos/000/007/318/medium/ndvi_red_compare_iii.JPG)](https://i.publiclab.org/system/images/photos/000/007/318/original/ndvi_red_compare_iii.JPG)
<br/><br/>



Trying to get a more numerical value to base my decission I got the white balance coefficients used for each of the photos. With UfRaw for example you can get which were the camera coefficients used for the photo on each channel. The relation between Red and Blue channel coefficients could be used as an indicator of the goodness of the ndvi relative values. Doing that for each red filter and for each white balance used I got that the #135 golden amber gets the best relation with a custom white balance using a orange origami paper (and better with if it is white balanced in the shadow than in the direct sun light).


[![wb_coeff_compare.JPG](https://i.publiclab.org/system/images/photos/000/007/319/medium/wb_coeff_compare.JPG)](https://i.publiclab.org/system/images/photos/000/007/319/original/wb_coeff_compare.JPG)
<br/>



These NDVI values are not absolute of course, with just one camera and without knowing the sensor spectral response at NIR wavelenghts we just can get relative NDVI valuers, but using #135 filter and the proposed white balances a better interpretable NDVI photos can be achieved.



###Questions and next steps

I am thinking of a method to get a better aproximation to more realistic NDVI values. For that I would need my camera sensor spectral response for NIR (CAnon A490), but I am not able to find it anywhere so:

I though, if I took a photo of a complete white object, a piece of white paper and I get the original color histograms (removing white balance coeficientes from raw file) , supposing that RGB channels have the same real color values (real white color), the differences in the channels will come from NIR exciting the sensor.. 

I tryied this and I get coeffcientes like these (photo of white paper):


[![ufraw_white.JPG](https://i.publiclab.org/system/images/photos/000/007/321/medium/ufraw_white.JPG)](https://i.publiclab.org/system/images/photos/000/007/321/original/ufraw_white.JPG)
<br/>

The relation of mean values: 
Green:1,96
Red:1,56
Blue:1

I did this also with a non modifyied camera (with IR filter), and the results were very similar coefficients, so, what am I missing?, 

I can guess the double green value comes from double green pixels on bayer matrix but why red is double?


###Why I'm interested