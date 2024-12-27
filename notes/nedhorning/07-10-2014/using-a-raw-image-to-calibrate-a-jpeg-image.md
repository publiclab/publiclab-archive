---
title: "Using a RAW image to calibrate a JPEG image"

tagnames: 'near-infrared-camera, ndvi, nir, calibration, raw, infragram, barnstar:basic, jpeg, response:10607, ndvi-calibrate, multispectral-imaging'
author: nedhorning
path: /notes/nedhorning/07-10-2014/using-a-raw-image-to-calibrate-a-jpeg-image.md
nid: 10672
uid: 133

---

![](https://publiclab.org/public/system/images/photos/000/005/195/original/IMG_1029.JPG)

# Using a RAW image to calibrate a JPEG image

by [nedhorning](../../../profile/nedhorning) | July 10, 2014 13:01

July 10, 2014 13:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [nir](../tag/nir), [calibration](../tag/calibration), [raw](../tag/raw), [infragram](../tag/infragram), [barnstar:basic](../tag/barnstar:basic), [jpeg](../tag/jpeg), [response:10607](../tag/response:10607), [ndvi-calibrate](../tag/ndvi-calibrate), [multispectral-imaging](../tag/multispectral-imaging)

----

I wanted to test a calibration work flow that involved calibrating a RAW image and then use the resulting image as a reference to calibrate a JPEG image. For my test photo I used CHDK to record a RAW and a JPEG image each time I took a photo. When an image is recorded in JPEG format (the most common setting for consumer cameras) a lot of processing takes place in the camera to create an image that is appealing to our eyes. As a result of this processing the JPEG image pixel values do not have a linear relationship with radiance (the intensity of light hitting the sensor). We can try to correct for that non-linear response by applying a Gamma correction as I did [here](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration) or you can fit a second or greater order polynomial through a set of reference/JPEG sample pairs. For either of these approaches you should have several reference/JPEG sample points. In my [previous experiment](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration) I used reference targets with known reflectance values and for this experiment I used a calibrated RAW image to get my reference data. 

From [previous work](http://publiclab.org/notes/nedhorning/06-23-2014/calibrating-raw-images-a-step-toward-jpeg-calibration) I determined that it is possible to calibrate RAW format images using a light and dark calibration target. When shooting a photo in RAW mode the image records vales that have a linear relationship with radiance which makes calibration a lot easier.

My calibration work flow for this experiment included three steps:
1. Select RAW and JPEG sample points
2: Convert JPEG pixel values to RAW values
3: Calibrate the converted image using methods developed for processing RAW images

To collect the  RAW/JPEG sample points I loaded the RAW and JPEG images into ImageJ/Fiji and then used the rectangle selection tool to select the same block of pixels in each of the images. I visually selected the location and size of each rectangular selection box. I had hoped to write a program to automate to sample point selection but discovered that the image dimensions of the RAW and JPEG image are different (the RAW image is larger) and I wasn't able to determine how to calculate where an area in the RAW image would appear in the JPEG image since the geometry between the two images seemed quite different. 

Next I used the histogram  tool (I used the “Color Histogram” tool for the JPEG image) to calculate the average value for the selected pixels for each band and entered those values into a table:

rawRed|rawGreen|rawBlue|jpegRed|jpegGreen|jpegBlue 
:-------------------------:|:---------------------:|:-----------------------:|:----------------------:|:-------------------------:|:-------------------------:
944|471|287|111|111|99 
195|157|142|13|13|12
** Two samples from a table of RAW and JPEG sample points**

I selected nine sample pairs using areas in the image that appeared to be somewhat homogeneous. 

I processed the images in R using a script. The script used the  RAW and JPEG sample points to calibrate the JPEG image so the values would be similar to what the camera records in RAW mode. 

I applied a Gamma correction to the JPEG images posted below but got similar results when fitting a second order polynomial through the points. The rest of the processing was similar to the steps used to [process a RAW image](http://publiclab.org/notes/nedhorning/06-23-2014/calibrating-raw-images-a-step-toward-jpeg-calibration). 

The resulting images are below. There are slight differences between the RAW and JPEG image but overall I think the results are promising. One of the differences that is obvious is that the RAW image seems to show more detail and the texture is rougher. The color variation between pixels in the JPEG image is likely smoother due to the compression algorithm that is applied during the in-camera processing.


[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/005/197/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/005/197/original/LookUpTableSmall.jpg)
** Look up table used for the NDVI images below**


[![red1029_NDVI_1.jpg](https://i.publiclab.org/system/images/photos/000/005/198/medium/red1029_NDVI_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/198/original/red1029_NDVI_1.jpg)
**NDVI image using RAW image**


[![red1029_NDVI_JPEG.jpg](https://i.publiclab.org/system/images/photos/000/005/199/medium/red1029_NDVI_JPEG.jpg)](https://i.publiclab.org/system/images/photos/000/005/199/original/red1029_NDVI_JPEG.jpg)
**NDVI image using JPEG image produced using the work flow described above** 


Although these results are encouraging I'm not sure this work flow is a sensible way to do calibration. If it was possible to automate the RAW and JPEG sample point selection process it would be easier and perhaps preferable over other methods. 