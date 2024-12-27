---
title: "Calibrating DIY NIR cameras – part 2"

tagnames: 'near-infrared-camera, ndvi, calibration, infrared, infragram, calibrate-ndvi, infrabluephoto, ndvi-calibrate, multispectral-imaging'
author: nedhorning
path: /notes/nedhorning/10-23-2013/calibrating-diy-nir-cameras-part-2.md
nid: 9538
uid: 133

cids: 7341,7344

---

![](https://publiclab.org/public/system/images/photos/000/001/999/original/G11SuperBlue_Block_0.JPG)

# Calibrating DIY NIR cameras – part 2

by [nedhorning](../../../profile/nedhorning) | October 23, 2013 21:10

October 23, 2013 21:10 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [infragram](../tag/infragram), [calibrate-ndvi](../tag/calibrate-ndvi), [infrabluephoto](../tag/infrabluephoto), [ndvi-calibrate](../tag/ndvi-calibrate), [multispectral-imaging](../tag/multispectral-imaging)

----

This is the second part of a series of notes on camera calibration. The first part is at: http://publiclab.org/notes/nedhorning/10-21-2013/calibrating-diy-nir-cameras-part-1

In this note I'll compare NDVI images created using calibrated photos acquired from two cameras using  different white balance and exposure settings. The calibration routine is the same described in part 1. All but one of the NDVI images were calibrated using the simple (single) regression approach. The different materials used to set white balance were a cinder block, blue origami paper, and the sun setting often available on point-and-shoot cameras. For each NDVI image I include a histogram to give you another perspective of how the images compare. 


[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/009/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/009/original/LookUpTableSmall.jpg)


[![A810Rosco2008_Blue_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/005/medium/A810Rosco2008_Blue_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/005/original/A810Rosco2008_Blue_0_NDVI1.jpg)

[![Histogram_of_A810Rosco2008_Blue_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/008/medium/Histogram_of_A810Rosco2008_Blue_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/008/original/Histogram_of_A810Rosco2008_Blue_0_NDVI1.jpg)


_**Canon A810 with a Rosco 2008 filter, white balance = blue paper, no exposure compensation**_
<p>  </p>
<p>  </p>

[![A810Rosco2008_Sun_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/006/medium/A810Rosco2008_Sun_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/006/original/A810Rosco2008_Sun_0_NDVI1.jpg)

[![Histogram_of_A810Rosco2008_Sun_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/010/medium/Histogram_of_A810Rosco2008_Sun_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/010/original/Histogram_of_A810Rosco2008_Sun_0_NDVI1.jpg)


_**Canon A810 with a Rosco 2008 filter, white balance = sun, no exposure compensation**_
<p>  </p>
<p>  </p>

[![A810Rosco2008_Block_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/007/medium/A810Rosco2008_Block_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/007/original/A810Rosco2008_Block_0_NDVI1.jpg)

[![Histogram_of_A810Rosco2008_Block_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/011/medium/Histogram_of_A810Rosco2008_Block_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/011/original/Histogram_of_A810Rosco2008_Block_0_NDVI1.jpg)


_**Canon A810 with a Rosco 2008 filter, white balance = cinder block, no exposure compensation**_
<p>  </p>
<p>  </p>

The next two images are from a Canon A810 with a Rosco 2008 filter with using a cinder block to set white balance and two different exposure settings.

[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/023/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/023/original/LookUpTableSmall.jpg)


[![A810Rosco2008_Block_13_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/003/medium/A810Rosco2008_Block_13_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/003/original/A810Rosco2008_Block_13_NDVI1.jpg)

[![Histogram_of_A810Rosco2008_Block_13_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/012/medium/Histogram_of_A810Rosco2008_Block_13_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/012/original/Histogram_of_A810Rosco2008_Block_13_NDVI1.jpg)

_**Canon A810 with a Rosco 2008 filter, white balance = cinder block, exposure compensation = -1/3**_
<p>  </p>
<p>  </p>

[![A810Rosco2008_Block_23_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/004/medium/A810Rosco2008_Block_23_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/004/original/A810Rosco2008_Block_23_NDVI1.jpg)

[![Histogram_of_A810Rosco2008_Block_23_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/013/medium/Histogram_of_A810Rosco2008_Block_23_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/013/original/Histogram_of_A810Rosco2008_Block_23_NDVI1.jpg)

_**Canon A810 with a Rosco 2008 filter, white balance = cinder block, exposure compensation = -2/3**_
<p>  </p>
<p>  </p>

The next set is from a Canon G11 with a SuperBlue filter using a cinder block to set white balance with  no exposure compensation using different materials to set the white balance.  

[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/022/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/022/original/LookUpTableSmall.jpg)


[![G11SuperBlue_Blue_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/000/medium/G11SuperBlue_Blue_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/000/original/G11SuperBlue_Blue_0_NDVI1.jpg)

[![Histogram_of_G11SuperBlue_Blue_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/014/medium/Histogram_of_G11SuperBlue_Blue_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/014/original/Histogram_of_G11SuperBlue_Blue_0_NDVI1.jpg)

_**G11 with a Life Pixel Super Blue filter, white balance = blue paper, no exposure compensation**_
<p>  </p>
<p>  </p>

[![G11SuperBlue_Sun_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/001/medium/G11SuperBlue_Sun_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/001/original/G11SuperBlue_Sun_0_NDVI1.jpg)

[![Histogram_of_G11SuperBlue_Sun_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/015/medium/Histogram_of_G11SuperBlue_Sun_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/015/original/Histogram_of_G11SuperBlue_Sun_0_NDVI1.jpg)

**G11 with a Life Pixel Super Blue filter, white balance = sun, no exposure compensation**

[![G11SuperBlue_Block_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/002/medium/G11SuperBlue_Block_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/002/original/G11SuperBlue_Block_0_NDVI1.jpg)

[![Histogram_of_G11SuperBlue_Block_0_NDVI1.jpg](https://i.publiclab.org/system/images/photos/000/002/016/medium/Histogram_of_G11SuperBlue_Block_0_NDVI1.jpg)](https://i.publiclab.org/system/images/photos/000/002/016/original/Histogram_of_G11SuperBlue_Block_0_NDVI1.jpg)

_**G11 with a Life Pixel Super Blue filter, white balance = cinder block, no exposure compensation**_
<p>  </p>
<p>  </p>

In general all of these seem to produce similar results. There is more difference from using different white balance materials than there is from simply changing exposure. That's not too surprising. Even the difference between the two cameras and different blue filters is quite small.

The following two images were calibrated using the multiple regression approach described in part 1 which add data from the photo's green band when calibrating the red and blue band. The difference between them is that the one used a cinder block for white balance and the other use the “sun” 'setting in the camera. 


[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/002/021/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/002/021/original/LookUpTableSmall.jpg)


[![A810Rosco2008_Sun_0_NDVI2.jpg](https://i.publiclab.org/system/images/photos/000/002/020/medium/A810Rosco2008_Sun_0_NDVI2.jpg)](https://i.publiclab.org/system/images/photos/000/002/020/original/A810Rosco2008_Sun_0_NDVI2.jpg)


[![Histogram_of_A810Rosco2008_Sun_0_NDVI2.jpg](https://i.publiclab.org/system/images/photos/000/002/019/medium/Histogram_of_A810Rosco2008_Sun_0_NDVI2.jpg)](https://i.publiclab.org/system/images/photos/000/002/019/original/Histogram_of_A810Rosco2008_Sun_0_NDVI2.jpg)

_**Multi-regression Canon A810 with a Rosco 2008 filter, white balance = sun, no exposure compensation**_
<p>  </p>
<p>  </p>

[![A810Rosco2008_Block_0_NDVI2.jpg](https://i.publiclab.org/system/images/photos/000/002/017/medium/A810Rosco2008_Block_0_NDVI2.jpg)](https://i.publiclab.org/system/images/photos/000/002/017/original/A810Rosco2008_Block_0_NDVI2.jpg)

[![Histogram_of_A810Rosco2008_Block_0_NDVI2.jpg](https://i.publiclab.org/system/images/photos/000/002/018/medium/Histogram_of_A810Rosco2008_Block_0_NDVI2.jpg)](https://i.publiclab.org/system/images/photos/000/002/018/original/Histogram_of_A810Rosco2008_Block_0_NDVI2.jpg)

_**Multi-regression Canon A810 with a Rosco 2008 filter, white balance = block, no exposure compensation**_
<p>  </p>
<p>  </p>

I'd need to dig into this a bit more to better understand why the multiple regression image is so different from the simple regression image. I'm not convinced that the results are any better. They show more variation which could be an improvement but it isn't highlighting features such as leaves in the grass that should have lower NDVI and the tar paper has much more texture than I would expect although since the reflectance levels are much lower for such a dark target one would expect a little more noise. It would be very surprising if the sun white balance produces a more accurate NDVI image since the white balance correction is based on the assumption that the sensor is recording the full visible spectrum from the sun but with the blue filter that assumption is no longer accurate. 

The next note will compare calibrated NDVI from a camera with a blue filter with photos acquired from a dual visible / NIR setup. The results are quite different. I have processed all of the photos and placed them on my ftp site: ftp://ftp.amnh.org/pub/people/horning/CalibrationTestPhotos. The photo file names indicate the camera model, white balance material [cinder block, blue origami paper, sun setting common with many cameras), exposure compensation (0, -1/3, -2/3) and if NDVI was created using single (NDVI1) or multiple (NDVI2) regression.
