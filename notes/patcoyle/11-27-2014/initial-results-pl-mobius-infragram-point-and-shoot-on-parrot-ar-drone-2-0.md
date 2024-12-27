---
title: "Initial results: PL Mobius Infragram Point and Shoot on Parrot AR.Drone 2.0 "

tagnames: 'ndvi, infragram, fiji, uav-mapping, gimp, super-red, photomonitoring'
author: patcoyle
path: /notes/patcoyle/11-27-2014/initial-results-pl-mobius-infragram-point-and-shoot-on-parrot-ar-drone-2-0.md
nid: 11413
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/008/144/original/ARParrot_w_Mobius_wo_image_crpd.jpg)

# Initial results: PL Mobius Infragram Point and Shoot on Parrot AR.Drone 2.0 

by [patcoyle](../../../profile/patcoyle) | November 27, 2014 23:59

November 27, 2014 23:59 | Tags: [ndvi](../tag/ndvi), [infragram](../tag/infragram), [fiji](../tag/fiji), [uav-mapping](../tag/uav-mapping), [gimp](../tag/gimp), [super-red](../tag/super-red), [photomonitoring](../tag/photomonitoring)

----

###What I want to do
Explore mapping with lightweight PL Mobius Infragram and low-lift, low altitude UAVs (like Parrot AR.Drone 2.0).

###My attempt and results

Mounted PL Mobius Infragram Point and Shoot on Parrot AR.Drone 2.0 using orange rubber bands.

[![IMG_5148.JPG](https://i.publiclab.org/system/images/photos/000/008/145/medium/IMG_5148.JPG)](https://i.publiclab.org/system/images/photos/000/008/145/original/IMG_5148.JPG)



Flew initial low altitude test. Used paid license version of PTLens to apply fisheye correction and crop the images. 

Example
Before

[![IMAG0093.JPG](https://i.publiclab.org/system/images/photos/000/008/146/medium/IMAG0093.JPG)](https://i.publiclab.org/system/images/photos/000/008/146/original/IMAG0093.JPG)

After

[![IMAG0093_pt.JPG](https://i.publiclab.org/system/images/photos/000/008/147/medium/IMAG0093_pt.JPG)](https://i.publiclab.org/system/images/photos/000/008/147/original/IMAG0093_pt.JPG)





Used Adobe PS to make a panorama from the fisheye corrected, cropped infrablue images. 


[![PL_infragram_from_AR2Parrot_Panorama1.jpg](https://i.publiclab.org/system/images/photos/000/008/148/medium/PL_infragram_from_AR2Parrot_Panorama1.jpg)](https://i.publiclab.org/system/images/photos/000/008/148/original/PL_infragram_from_AR2Parrot_Panorama1.jpg)

[I stitched a couple of the images in Mapknitter](https://mapknitter.org/map/view/infragram-point-and-shoot-on-parrot-ardrone2-0-ii). However, the very low altitude images, require zooming all the way in.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=https://mapknitter.org/tms/infragram-point-and-shoot-on-parrot-ardrone2-0-ii/&lat=37.6655415775&lon=-121.7778756399"></iframe>


[I stitched five of the images in Mapknitter.](https://mapknitter.org/map/view/livermore-ca-test-with-pl-mobius-infragram-point-and-shoot-on-parrot-ar-drone-2-0) After initial null exports, Jeff Warren revised the resolution from 0.39 cm/pixel to 1 cm/pixel, which led to successful export. As noted above, the very low altitude images, require zooming all the way in.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=https://mapknitter.org/tms/livermore-ca-test-with-pl-mobius-infragram-point-and-shoot-on-parrot-ar-drone-2-0/&lat=37.6654626138&lon=-121.7778813222"></iframe>


Cropped, then used Ned Horning's Fiji Photomonitoring plugin to process the infrablue panorama to NDVI. 

Floating Point

[![FP_ndviImage_crpd.jpg](https://i.publiclab.org/system/images/photos/000/008/149/medium/FP_ndviImage_crpd.jpg)](https://i.publiclab.org/system/images/photos/000/008/149/original/FP_ndviImage_crpd.jpg)

Color using NDVIBlu2Red.lut


[![Color_Index_ndvi.jpg](https://i.publiclab.org/system/images/photos/000/008/150/medium/Color_Index_ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/008/150/original/Color_Index_ndvi.jpg)



###Questions and next steps
Get the gps waypoint capability working again, explore niche where this combination of gear makes sense.

###Why I'm interested

The lightweight form factor of PL Mobius Infragram Point and Shoot allows use of it with low-lift UAVs. Together with ability to correct fisheye effect, makes for another (albeit limited niche) aerial mapping tool in the toolbox.