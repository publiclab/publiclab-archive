---
title: Photo Monitoring Plugin For NDVI using ImageJ
tagnames: ndvi, imagej, grassrootsmappingforum, with:nedhorning, style:fancy, gmf-9
author: mlamadrid
path: /notes/mlamadrid/12-08-2015/photo-monitoring-plugin-for-ndvi-using-imagej.md
nid: 12489
uid: 45586

---

![](https://publiclab.org/public/system/images/photos/000/013/243/original/NDVIplotsN1k.jpg)

# Photo Monitoring Plugin For NDVI using ImageJ

by [mlamadrid](../profile/mlamadrid) December 08, 2015 21:10

December 08, 2015 21:10 | Tags: [ndvi](../tag/ndvi), [imagej](../tag/imagej), [grassrootsmappingforum](../tag/grassrootsmappingforum), [with:nedhorning](../tag/with:nedhorning), [style:fancy](../tag/style:fancy), [gmf-9](../tag/gmf-9)

----

New calibration capabilities have been added to the ImageJ/FIJI photo monitoring plugin suite hosted on GitHub: [https://github.com/nedhorning/PhotoMonitoringPlugin (https://github.com/nedhorning/PhotoMonitoringPlugin). The calibration plugins can be used to improve the process of creating NDVI images from photographs acquired using single or dual-camera setups by converting image pixel values to reflectance values before calculating NDVI. This provides a more objective approach to calculating NDVI than adjusting parameters based on a visual assessment of the NDVI image and can result in more robust comparisons of NDVI over time. The plugin works best with RAW format images although there is a feature enabling processing of JPEG format images as well. 

The calibration is a two-step process. The first plugin calculates calibration coefficients using at least two different calibration targets with known reflectance qualities that are imaged in a photograph. When the calibration coefficients are calculated a graph showing the relationship between input pixel values vs corrected pixels is output to the screen so you can assess quality of calibration. The graphs are only meaningful if more than 2 calibration targets are used. The second plugin applies the calibration coefficients calculated in the first step to a directory of images that were acquired under the same conditions as the image used to calculate the calibration coefficients and calculates NDVI images. 

Another feature that was added to the calibration and other plugins in the suite is to add EXIF metadata to output images. This was done so people who have photos with GPS coordinates embedded in the EXIF data are able to keep those coordinates in the output images. 

More information about the plugins can be found in the user guide that is available from the Github repository and by reading PLOTS research notes related to the photo monitoring plugin or calibration. 


_Image by Chris Fastie was created with Ned Horning’s new histogram stretching option and new color table for NDVI images._