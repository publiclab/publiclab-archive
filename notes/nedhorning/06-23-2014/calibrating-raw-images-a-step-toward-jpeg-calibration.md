---
nid: 10607
title: Calibrating raw images - a step toward JPEG calibration?
path: public/static/notes/nedhorning/06-23-2014/calibrating-raw-images-a-step-toward-jpeg-calibration.md
uid: 133
tagnames: ndvi,nir,calibration,response:10389
---

# Calibrating raw images - a step toward JPEG calibration?

##Introduction
In this research note I'll go over some calibration tests I've been doing using RAW format images from my Canon A2200 with a red Wratten 25A filter in place of the hot mirror. A raw image is an image that represents the signal recorded by a camera's sensor and has not been  modified to make an aesthetically pleasing image often output in a JPEG format. Working with raw images has a number of advantages over processed JPEG images. A primary advantage for calibration is that the digital number (DN) recorded at the sensor has a linear relation to the intensity of light hitting the sensor. In other words, if the intensity of light hiting the sensor doubles the pixel value recorded in the raw image will also double. When an image is processed inside the camera to make a JPEG image that looks nice we loose that linear relationship. As noted in a previous research note ([http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration)) a gamma correction can be applied to the image so a linear relationship is established. It might be good to read that previous note since I'll refer to that frequently throughout this note.


##Methods
For this work I acquired a raw image of six targets with [known reflectance values](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration) and then used the same process I used for the earlier work to get an average pixel value for each calibration target [Figure 1]. 

[![IMG_0020.JPG](https://i.publiclab.org/system/images/photos/000/004/942/medium/IMG_0020.JPG)](https://i.publiclab.org/system/images/photos/000/004/942/original/IMG_0020.JPG)
**Figure 1:** Photo of the target layout

I then plotted the average raw value against the measured reflectance and calculated a linear regression [Figure 2]. As you can see in the plot there is a very good linear fit which is what I had expected. 

[![RedNIR_Plots.png](https://i.publiclab.org/system/images/photos/000/004/943/medium/RedNIR_Plots.png)](https://i.publiclab.org/system/images/photos/000/004/943/original/RedNIR_Plots.png)
**Figure 2:** Plot of relationship between red (650nm) reflectance vs red channel raw pixel values and near-infrared (850nm) vs blue channel raw pixel values.

Using the linear regression coefficients I calibrated the raw image bands into reflectance bands. The calibrated bands look the same as the uncalibrated bands but the pixel values are in percent reflectance. Calculating NDVI from the calibrated bands produced decent results bu the NDVI values seemed a bit low [Figure 3]. The grass seemed a little stressed since the image was taken after a few days with no rain and my lawn is not very productive but the NDVI values still seemed quite low.

[![LookUpTableSmall.jpg](https://i.publiclab.org/system/images/photos/000/004/947/medium/LookUpTableSmall.jpg)](https://i.publiclab.org/system/images/photos/000/004/947/original/LookUpTableSmall.jpg)
Look up table used for the color NDVI images

[![red1029NoSubtract_NDVI_1.jpg](https://i.publiclab.org/system/images/photos/000/004/945/medium/red1029NoSubtract_NDVI_1.jpg)](https://i.publiclab.org/system/images/photos/000/004/945/original/red1029NoSubtract_NDVI_1.jpg)
Figure 3: NDVI image after calibrating the red and blue channels for reflectance without pre-processing

I expected the results could be improved by removing the NIR “contamination” that was occurring in the red channel. With the red filter the blue channel should be recording nearly “pure” NIR light and the red channel a mixture of red and NIR light [Figure 4]. 


[![spectral-response-ccd.jpg](https://i.publiclab.org/system/images/photos/000/004/948/medium/spectral-response-ccd.jpg)](https://i.publiclab.org/system/images/photos/000/004/948/original/spectral-response-ccd.jpg)
**Figure 4:** Spectral response of a typical CCD camera sensor (downloaded from: http://www.astrosurf.com/luxorion/photo-ir-uv3.htm)

If roughly the same amount of NIR light was hitting the blue and red sensors I should be able to remove the NIR effect for the red sensors by subtracting the blue pixel value from the red pixel values. Doing that before calibrating the images significantly improved the results. Since I wasn't sure if the amount of NIR light recorded by the blue and red sensors was the same I added a multiplier to the formula so I could adjust the amount of NIR being subtracted from the red pixels. The equation was [red – blue * multiplier]. I think two issues are present that can be dealt with, at least to some extent, using the multiplier. One is that I'm not sure if the pixel values recorded by the different sensor (red, green, blue) represent the same intensity. In other words I'm not sure if a certain intensity of red light would give the same pixel value as an identical intensity of blue light. Also, I do not know the sensor response for my camera so I don't know how much NIR light passes the red sensors vs. the blue sensors. 

To get a rough idea what a multiplier value should be I did some quick tests photographing NIR LEDs with ~850nm and 950nm emittance and in those tests the pixel values in the blue channel were about 1.1 times the values in the red channel. This would mean a multiplier of 0.9 should work. Using that multiplier I got the following result [Figure 5] which seems to be an improvement. 


[![red1029Mult0_9_NDVI_1.jpg](https://i.publiclab.org/system/images/photos/000/004/949/medium/red1029Mult0_9_NDVI_1.jpg)](https://i.publiclab.org/system/images/photos/000/004/949/original/red1029Mult0_9_NDVI_1.jpg)


**Figure 5:** NDVI image after subtracting (blue * 0.9) from the red channel and then calibrating for reflectance

The next step will be to test the results with a field spectrometer to see if the NDVI values are in the “correct” range. I don't have a  field spectrometer so maybe someone else would be up for doing field testing? It's possible the multiplier will need to be adjusted but without a spectrometer providing reference data it's difficult to tell for sure. In any case this continues to look promissing.


##Raw processing in ImageJ/Fiji
To process raw images I installed dcraw,  a command line program for processing raw images: [http://en.wikipedia.org/wiki/Dcraw](http://en.wikipedia.org/wiki/Dcraw). The command I use is:
dcraw -D -W -4 /AMNH/PhotoMonitoring/Red25AFilter/BlockLED/Raw/CRW_0979.DNG

That creates a “pgm” file that I can open in ImageJ. The “pgm” file is an actual image of what the sensor records. If you look at Figure 6 below you'll see the raw pixels in the pattern:
G-R-G-R-G-R...  (R=red, G=green, B=blue)
B-G-B-G-B-G.... 

[![CRW_1029_subsetRaw.png](https://i.publiclab.org/system/images/photos/000/004/951/medium/CRW_1029_subsetRaw.png)](https://i.publiclab.org/system/images/photos/000/004/951/original/CRW_1029_subsetRaw.png)
**Figure 6:** Subset of a raw image displaying the pixels with a Bayer pattern from a camera sensor - black pixels are dead detectors on the sensor.

There is a “DCRaw Reader” plugin for ImageJ but I prefer the command-line utility. Once the image is open in ImageJ I run the “Debayer image” plugin ([http://www.umanitoba.ca/faculties/science/astronomy/jwest/plugins.html](http://www.umanitoba.ca/faculties/science/astronomy/jwest/plugins.html)) to take the DNG image with the Bayer pattern and convert it into red, green, and blue layers. Since the CHDK raw images I get have a pixel range from 0 to 4095 I save each band as an integer TIFF image so I can keep the full range of pixel values since many image formats are limited to values from 0 - 255. I then put the images in a stack and extract pixels for a rectangular region of interest and calculate the mean value using the ImageJ histogram function as described in the [previous note](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration).

I wrote a script in R to calculate the regression, calibrate the image bands and create an NDVI image. This can be done in ImageJ or most any other software that does image processing but it's easier for me to use R.


##Next steps for JPEG processing
Although this note focused on calibrating raw images my goal is still to develop a reasonably simple calibration method for calibrating JPEG images. At this point there are several options. 
1. Use multiple calibration targets that provide reflectance values for low medium and high reflectance for the bands you want to calibrate and then use those to estimate the gamma correction as was done in the [previous research note](http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration).
2. Calibrate a raw image using bright and dark calibration targets then use the calibrated bands to calibrate the JPEG image. This might be my next research note.
3. Use bright and dark calibration targets and adjust the gamma correction iteratively using a visual assessment of the result. This would be a bit complicated and arbitrary since both the red and NIR bands could have different gamma correction factors.
4. Figure out how to convert the RGB color space JPEG image back to raw values and then use bright and dark calibration targets for the calibration. This seems to be the ideal option but I'm not certain it's possible. To accomplish this I (or someone else) needs to determine the process to invert the processing that goes on in the camera. That will take some more research. 