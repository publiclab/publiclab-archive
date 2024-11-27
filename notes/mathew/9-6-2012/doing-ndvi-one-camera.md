---
nid: 3668
title: Doing NDVI in one camera
path: public/static/notes/mathew/9-6-2012/doing-ndvi-one-camera.md
uid: 4
tagnames: near-infrared-camera,nrg,ndvi,superblue
---

# Doing NDVI in one camera

This company [LDP LLC](http://www.maxmax.com/) sells converted IR and UV cameras that are being used by [Conservation Drones](http://conservationdrones.org/).  What really piqued my interest is that they claim to do [UV, IR, and visible light in one camera](http://www.maxmax.com/IRCameraConversions.htm), and sell [one-camera NDVI rigs](http://www.maxmax.com/vegetation_stress_mkii.htm).  How? I can't quite tell-- they remove and replace the filters with custom ones, and then I think, based on their conversions page, that it has something to do with the white balance settings.

They're doing NDVI post-processing in [ImageJ](http://rsbweb.nih.gov/ij/), a java library for image processing.