---
nid: 1872
title: Interpreting infrared images
path: public/static/wiki/interpreting-infrared-images.md
uid: 1
tagnames: near-infrared-camera,ndvi,infrared,infragram,image-interpretation,interpretation
---

# Interpreting infrared images

##Types of imagery##

* plain infrared photos?
* NRG (use case?)
* NDVI (use case?)

###What you can identify###

* photosynthesis
  * water usage and flow?
  * healthy and damaged vegetation?
  * algae blooms?

_We could start by linking to some papers and research on these topics_

####NDVI: Definition and use####
It is known that green vegetation exhibits strong absortion of red light (~670nm). Near infrared light (NIR, ~800nm) is strongly reflected by green vegetation; reflectance in this range reaches 40-60%.
The Normalized Difference Vegetation Index (NDVI) [Rouse et al, 1974] combines information contained in two spectral bands, red and NIR: 

       NDVI = (NIR - Red) / (NIR + Red)

, where NIR and Red are the light intensity in each spectral band.

The NDVI is widely used for monitoring, analyzing and mapping temporal and spatial distributions of physiological and biophysical chacateristics of vegetation.

In some way, in NDVI images we can see "how much green" there is in the vegetation.


Reference:
Anatoly Gitelson, "Wide Dynamic Range Vegetation Index for Remote Quantification of Biophysical Characteristics of Vegetation". Journal of Plant Physiology, 161. 2004.