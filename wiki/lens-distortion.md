---
nid: 15086
title: Lens Distortion
path: public/static/wiki/lens-distortion.md
uid: 1
tagnames: gopro,mobius-action-cam,fisheyegl,parent:mini-camera
---

# Lens Distortion

Lens distortion removal can help "flatten" images with a "fisheye" or barrel distortion, and make it easier for them to be used in creating maps. 

This is especially helpful when using photos from smaller cameras like the #mobius-action-cam and most #gopro cameras. Nathan Craig says: 

> Also, lens calibration is useful to consider when creating surfaces. In building large surfaces lens error can accumulate and result in distortion. Agisoft, the makers of PhotoScan, provide a free lens calibration program on their website.


****

## Questions

[questions:lens-distortion]

****

## Activities

There are a number of ways to remove lens distortion, including #fisheyegl, [**LensFun**](http://lensfun.sourceforge.net/), and **Agisoft Lens**. We're collecting guides on using these here; please add one if you can!

[activities:lens-distortion]

****

## Lens databases

Databases collecting lens geometries are available, for use with programs like this one:

http://www.agisoft.ru/products/lens/

### LensFun database

The LensFun database is an open source database of lens models for correcting distortion. It'd be great to get the Canon A490 and SD 1300 series in there, and the format is:

<script src="https://gist.github.com/1351843.js"> </script>

You can read more about how to calculate this and generate other types of camera model stuff here: 
http://lensfun.berlios.de/lens-calibration/lens-calibration.html