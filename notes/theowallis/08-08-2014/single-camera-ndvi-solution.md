---
title: "Single camera NDVI solution"\ntagnames: 'near-infrared-camera, ndvi, nir, vegetation, infrablue, mobius-actioncam, ir-block'
author: theowallis
path: /notes/theowallis/08-08-2014/single-camera-ndvi-solution.md
nid: 11022
uid: 425909

---

![](https://publiclab.org/public/system/images/photos/000/006/138/original/IMAG0001.JPG)

# Single camera NDVI solution

by [theowallis](../profile/theowallis) | August 08, 2014 16:50

August 08, 2014 16:50 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [nir](../tag/nir), [vegetation](../tag/vegetation), [infrablue](../tag/infrablue), [mobius-actioncam](../tag/mobius-actioncam), [ir-block](../tag/ir-block)

----

###What I want to do

I have a Mobius Actioncam from which I have removed the ir blocking filter. I'm aware that a single camera with a blue filter is an option for pseudo NDVI images. The option for true NDVI images with two consumer cameras as far as I'm aware is to fit one camera with an infrared filter and leave the other camera as a visible spectrum camera so you get the RGB & NIR bands.

I'd like to see if there is a way to isolate, extract and save as three individual bands the NIR, red and green bands from a single camera with only the ir blocking filter removed as it (within the tolerances of the sensor) captures the full light spectrum.


###My attempt and results

My attempt so far is only to remove the ir blocking filter from my camera so that it now takes full spectrum images.


###Questions and next steps

How do I go about extracting and saving the ~700nm to 800nm NIR band with software? I have looked into this but am yet to find a solution.


###Why I'm interested

The intended use of this camera would be for analysing vegetation stress.