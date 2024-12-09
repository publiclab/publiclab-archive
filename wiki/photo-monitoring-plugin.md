---
title: photo-monitoring-plugin
tagnames: near-infrared-camera, ndvi, imagej, infragram, infrablue, fiji, photo-monitoring-plugin, parent:multispectral-imaging
author: warren
path: /wiki/photo-monitoring-plugin.md
nid: 8017
uid: 1

---

# photo-monitoring-plugin

by [cfastie](../profile/cfastie), [nedhorning](../profile/nedhorning), [warren](../profile/warren)

June 02, 2013 14:40 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [imagej](../tag/imagej), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [fiji](../tag/fiji), [photo-monitoring-plugin](../tag/photo-monitoring-plugin), [parent:multispectral-imaging](../tag/parent:multispectral-imaging)

----

![Screen_Shot_2013-06-02_at_10.38.41_AM.png](https://i.publiclab.org/system/images/photos/000/000/460/medium/Screen_Shot_2013-06-02_at_10.38.41_AM.png)

[Ned Horning](http://publiclab.org/profile/nedhorning) (read [original announcement here](http://publiclab.org/notes/nedhorning/5-31-2012/registering-and-processing-photos-acquired-two-cameras)) has released an open source plugin for the cross-platform [ImageJ](http://rsb.info.nih.gov/ij/). It can produce [NDVI composites](/wiki/ndvi) from infrared and visible image pairs as well as single camera infrared filtered images. 

###Features
The photo monitoring plugins are written to work with Fiji image processing software (http://fiji.sc/wiki/index.php/Fiji) and they will also work with ImageJ the software on which Fiji is based. These plugins are designed to improve the efficiency and effectiveness of using infrared photos for monitoring vegetation. The plugins  support dual-camera setups with one camera acquiring a "normal" visible color digital photo and the other acquiring a near-infrared digital photo and also support single camera setups such as [infrablue and super-red cameras](/wiki/infragram). The plugins provide good control of the final appearance of images via increasing the dynamic range (histogram stretching) and selecting a range of index values. 

###Plugin description
There are currently four plugins:
**1 -** The _Create dual image list_ plugin is designed to facilitate the process of matching digital photographs that were acquired at roughly the same time. The plugin outputs a text file with the path and file names for image pairs (e.g., images acquired from two cameras) that can be input into the "Dual image NDVI processing" plugin. The image matching is done by synchronizing the times stored in image EXIF DateTimeOriginal tag from each of two cameras. If for some reason the EXIF DateTimeOriginal tag is not set then the files last modified time will be used.

**2-** The _Dual image NDVI processing_ plugin is designed to co-register two images, one using a near-infrared camera and the other a “normal” visible camera. The plugin will work best if the images were acquired from two cameras mounted with their lenses close to each other, acquired at nearly the same time (so the scene hasn't changed), and it's best if the two cameras have similar characteristics such as image size and resolution. The plugin can output the following:

1. False-color infrared (CIR) image with near infrared (NIR) displayed as red, red displayed as green, and green displayed as blue
2. Normalized difference vegetation index (NDVI) image with a user-selected color table applied
3. Difference vegetation index (DVI)  image with a user-selected color table applied
3. Floating point NDVI image with actual NDVI values in each pixel (data range -1 to +1)
4. A visible image clipped to the common area between the registered near-IR and visible image
5. A log file documenting the registration method used for each image pair

**3-** _The Single image NDVI from directory_ plugin is designed to create color and floating point NDVI images from a directory containing images that recorded visible light in one band and near-infrared light in another. These images can be captured using the SuperBlue filter available from LifePixel (http://www.lifepixel.com/) or an [infrablue or super-red filter from Public Lab](http://publiclab.org/wiki/infragram).

**4-** The _Single image NDVI from displayed image_ plugin is designed to create color and floating point NDVI images from an image displayed in ImageJ/Fiji that recorded visible light in one band and near-infrared light in another. These images can be captured using the SuperBlue filter available from LifePixel (http://www.lifepixel.com/) or an [infrablue or super-red filter from Public Lab](http://publiclab.org/wiki/infragram).


###Links

* Download on GitHub: https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads
* View source on GitHub: https://github.com/nedhorning/PhotoMonitoringPlugin
* Download ImageJ: http://rsb.info.nih.gov/ij/
* Download the friendlier Fiji version of ImageJ: http://fiji.sc/wiki/index.php/Fiji

###Color lookup tables (luts)

These files assign colors to values in NDVI images created by the photo monitoring plugin. There are several luts already installed in ImageJ or Fiji, but the ones below were developed by the Public Lab community for displaying NDVI results. Copy these files into the \Fiji\Fiji.app\luts directory (in Program Files in Windows), and I guess to .../Applications/Fiji.app/luts on Mac. Then select a lut from the dropdown menu in the plugin interface.  

*  <a href="https://i.publiclab.org/system/images/photos/000/007/012/original/NDVI_VGYRM.lut"><i class="icon icon-file"></i> NDVI_VGYRM.lut</a>  This lut maintains detail in the non-plant areas of a scene (NDVI = -1.0 to +0.1) which are grayscale. It colors photosynthesizing areas (NDVI = 0.1 to 0.9) with a heat map from violet to green to yellow to red. Off scale NDVI values (NDVI = 0.9 to 1.0) are colored magenta. More about this lut [here.](http://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap)  
.  
[![NDVI_VGYRM_lutAy.jpg](https://i.publiclab.org/system/images/photos/000/006/414/medium/NDVI_VGYRM_lutAy.jpg)](https://i.publiclab.org/system/images/photos/000/006/414/original/NDVI_VGYRM_lutAy.jpg)  
*Copy the image above to use as a key to your NDVI images.*  

 
.  

* <a href="https://i.publiclab.org/system/images/photos/000/002/684/original/NDVIBlu2Red.lut"><i class="icon icon-file"></i> NDVIBlu2Red.lut</a>    This lut has been used frequently for NDVI in Public Lab research notes, but the one above is probably more useful:
All pixels with NDVI values below zero are colored blue.  This lut will not distinguish different NDVI values between 0.1 and 0.9 as well as the one above. Below is a key to the lut above for pasting into your finished NDVI image so people have some idea what the colors mean:  
 [![NDVIBlu2Redt.jpg](https://i.publiclab.org/system/images/photos/000/002/704/thumb/NDVIBlu2Redt.jpg)](https://i.publiclab.org/system/images/photos/000/002/704/original/NDVIBlu2Redt.jpg) 
.  

* <a href="https://i.publiclab.org/system/images/photos/000/002/685/original/NDVIBlu2RedWB.lut"><i class="icon icon-file"></i> NDVIBlu2RedWB.lut</a> The lut below is similar to the one above, but assigns black to any pixels with the value 255 (maximum NDVI) and white to any pixels with the value 0 (minimum NDVI). It is sometimes good for troubleshooting:   
[![NDVIBlu2RedWBlut.JPG](https://i.publiclab.org/system/images/photos/000/002/837/thumb/NDVIBlu2RedWBlut.JPG)](https://i.publiclab.org/system/images/photos/000/002/837/original/NDVIBlu2RedWBlut.JPG)  





