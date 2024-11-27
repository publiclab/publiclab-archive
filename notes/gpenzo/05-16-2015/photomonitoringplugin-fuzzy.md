---
nid: 11821
title: PhotoMonitoringPlugin fuzzy
path: public/static/notes/gpenzo/05-16-2015/photomonitoringplugin-fuzzy.md
uid: 420719
tagnames: ndvi,qgis
---

# PhotoMonitoringPlugin fuzzy

###What I want to do
For my [NDVI cap](http://publiclab.org/notes/gpenzo/03-25-2015/ndvi-cape-for-the-beagle-bone) project
i'm trying to make a lightweight PhotoMonitoringPlugin application. In my setup the cameras are ridgid. For evry photo I make the translation and rotation are the same.
What I want to do is to make one calbration and use the translation and rotation for all other pictures. 
This will speed up NDVI picture calculation. I want to verify my implementation with PhotoMonitoringPlugin

###My attempt and results
I got everything working with opencv but I do not get 100% the same result compare to PhotoMonitoringPlugin.
Especially the float images.

PhotoMonitoringPlugin setup:
Calculation NDVI
Minimum scaling -1.0
Maximum scaling 1.0
No stretch for both IR and visible
Lut: NDVIBleu2Red.lut

PhotoMonitoringPlugin result

**PhotoMonitoringPlugin Float image**

[![vis_36_NDVI_Float.jpg](https://i.publiclab.org/system/images/photos/000/009/906/medium/vis_36_NDVI_Float.jpg)](https://i.publiclab.org/system/images/photos/000/009/906/original/vis_36_NDVI_Float.jpg)

**PhotoMonitoringPlugin NDVI image**

[![vis_36_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/009/907/medium/vis_36_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/009/907/original/vis_36_NDVI_Color.jpg)

This is already strange. The color image has more information than the floating image.
I expect them to be the same. Color image has a lut with 255 colors and float image has 255 gray colors.
When I load the float image in Fiji and use the same lut on it I get the following image:

**Lut applied on PhotoMonitoringPlugin Float image**

[![float_with_lut.jpg](https://i.publiclab.org/system/images/photos/000/009/908/medium/float_with_lut.jpg)](https://i.publiclab.org/system/images/photos/000/009/908/original/float_with_lut.jpg)

Can any one explain what is going on here, why does PhotoMonitoringPlugin generate a float with less information. I checked the plugin code but could not find the reason for this.

My application gives the following results.
Applying a lut on my float image gives almost the same result as the plugin.

**NDVICAPE  Float image**

[![ndvi_36_float.jpg](https://i.publiclab.org/system/images/photos/000/009/909/medium/ndvi_36_float.jpg)](https://i.publiclab.org/system/images/photos/000/009/909/original/ndvi_36_float.jpg)

**NDVICAPE  Ndvi image**

[![ndvi_36.jpg](https://i.publiclab.org/system/images/photos/000/009/910/medium/ndvi_36.jpg)](https://i.publiclab.org/system/images/photos/000/009/910/original/ndvi_36.jpg)


###Why I'm interested
Should the floating image be used like this or does it has another purpose.


