---
title: "ndvi-gradients"

tagnames: 'near-infrared-camera, ndvi, infragram, gradient, colormap, lut, lookup-tables'
author: warren
path: /wiki/ndvi-gradients.md
nid: 7758
uid: 1

---

# ndvi-gradients

by [cfastie](../profile/cfastie), [warren](../profile/warren)

May 21, 2013 03:46 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infragram](../tag/infragram), [gradient](../tag/gradient), [colormap](../tag/colormap), [lut](../tag/lut), [lookup-tables](../tag/lookup-tables)

----

List of gradients for use in [NDVI composites](/wiki/ndvi)

This is my current favorite color map for NDVI:
[![NDVI_VGYRM_lutAy.jpg](https://i.publiclab.org/system/images/photos/000/006/414/medium/NDVI_VGYRM_lutAy.jpg)](https://i.publiclab.org/system/images/photos/000/006/414/original/NDVI_VGYRM_lutAy.jpg)  
*Save this image to use a legend for your NDVI images.*  
.  
I think it is the most useful color look up table I have used. I describe it [here](http://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap), and you can download it here:

<a href="https://i.publiclab.org/system/images/photos/000/007/012/original/NDVI_VGYRM.lut"><i class="icon icon-file"></i> NDVI_VGYRM.lut</a>  

This should be copied to the C:\Program Files (x86)\Fiji\Fiji.app\luts directory or something like that on Windows, and I guess to .../Applications/Fiji.app/luts on Mac. 
.  

![NDVIgray.JPG](https://i.publiclab.org/system/images/photos/000/000/387/medium/NDVIgray.JPG)
<p></p>Continuous, no frills, good for troubleshooting. Plants should be light gray.


![NDVIlutCB-1_1.JPG](https://i.publiclab.org/system/images/photos/000/000/388/medium/NDVIlutCB-1_1.JPG)
<p></p>Ned's protanopia-friendly lut designed for NDVI scaled from -1 to +1. Healthy plants don't have NDVI values below 0, so all those values will be the same color. Plants should be white or green. This has discreet classes, but could also be done with a continuous gradient.


![NDVIlutCB0_1.JPG](https://i.publiclab.org/system/images/photos/000/000/389/medium/NDVIlutCB0_1.JPG)
<p></p>Ned's protanopia-friendly lut designed for NDVI scaled from 0 to +1. Plants should be green.



![PhysicsLUT.JPG](https://i.publiclab.org/system/images/photos/000/000/390/medium/PhysicsLUT.JPG)
<p></p>A continuous lut from ImageJ called Physics. Produces a good heatmap with values below zero colored blue or green. Plants should be green to orange.



![NDVIB2Mlut.JPG](https://i.publiclab.org/system/images/photos/000/000/395/medium/NDVIB2Mlut.JPG)
<p></p>A variant of the physics lut above. This distinguishes NDVI values below zero by making them blue, but retains the gradient so details of the non-plant scene can be discerned. The magenta for values ~0.9 and higher allows troubleshooting of high values. Plants should be greenish yellow to red.




![16colorsLut.JPG](https://i.publiclab.org/system/images/photos/000/000/391/medium/16colorsLut.JPG)
<p></p>A discreet class lut from ImageJ called 16colors.. Produces a good heatmap with the highest values (which should not be plants) colored dull pink or white. Good for troubleshooting the high end. Plants should be yellow to red.
