---
title: "Registering and processing photos acquired from two cameras"

tagnames: 'near-infrared-camera, image-processing, imagej, great-photos, image-registration, first-time-poster'
author: nedhorning
path: /notes/nedhorning/5-31-2012/registering-and-processing-photos-acquired-two-cameras.md
nid: 2279
uid: 133
cids: 812,813,816,833,834,836,837,887,4584
---

![](https://publiclab.org/sites/default/files/TreesVIS_NRG.jpg)

# Registering and processing photos acquired from two cameras

by [nedhorning](/profile/nedhorning) | May 31, 2012 18:16

May 31, 2012 18:16 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [image-processing](/tag/image-processing), [imagej](/tag/imagej), [great-photos](/tag/great-photos), [image-registration](/tag/image-registration), [first-time-poster](/tag/first-time-poster)

----

As people begin mounting near-infrared cameras with visible cameras it will be helpful to automate the processing and registration of the resulting imagery. The open source image processing package Fiji, a distribution of ImageJ, is an excellent tool for doing this. 

I created an ImageJ/Fiji macro that will read in any number of paired images that are specified in a text file and provide options to register the images and create the following outputs:
   NGR image (false-color image with r=near-IR, g=green from visible, and r=red from visible)
   NDVI image with a user-selected color table applied
   Floating point NDVI image with actual NDVI values (data range -1 to +1)

The images are clipped to the common area after they are registered and the user can select the output image format.

The processing takes roughly 10-15 seconds per image pair and the image-to-image matching seem to be pretty good. For now I am using a scale invariant feature transform (SIFT) algorithm to select matching points in the two images and then I use those to apply an affine transformation to register the near-IR image to the visible. This should work well if the two cameras are of a similar type, they are mounted so the lenses are reasonably close, and the images are acquired at roughly the same time so the scene composition is nearly identical in both images. Fiji has some additional registration algorithms that will accommodate wrapping but the ones I have used run slowly and warpping shouldn't be necessary if the above constrains are followed. 

I'm looking for people to test the macro so if you're using a dual-camera setup you might want to give it a try. For now you'll need to contact me (horning@amnh.org) to get the current version but I'll post it on a web site or maybe github or some place like that if more than a couple people are interested. I will also work on a manual or tutorial if there is interest.