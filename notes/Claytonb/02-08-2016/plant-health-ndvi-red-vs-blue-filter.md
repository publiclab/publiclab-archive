---
title: Plant health NDVI Red vs Blue filter
tagnames: ndvi, calibration, infrared, infragram, wratten25a, super-red, red-vs-blue, response:9717
author: Claytonb
path: /notes/Claytonb/02-08-2016/plant-health-ndvi-red-vs-blue-filter.md
nid: 12670
uid: 460246

---

![](https://publiclab.org/public/system/images/photos/000/014/151/original/0207161357_HDR_%282%29.jpg)

# Plant health NDVI Red vs Blue filter

by [Claytonb](../profile/Claytonb) February 08, 2016 17:50

February 08, 2016 17:50 | Tags: [ndvi](../tag/ndvi), [calibration](../tag/calibration), [infrared](../tag/infrared), [infragram](../tag/infragram), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [red-vs-blue](../tag/red-vs-blue), [response:9717](../tag/response:9717)

----

While testing Ned Horning's calibration plugin([Ned's plugin](https://publiclab.org/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji)) I had the opportunity to compare some red and blue filters and their contrast and sensitivity in relation to NDVI values and plant health. 

The filters I tested were the [MidOpt](http://midopt.com/filters/dual-bandpass/) DB 475/850, MidOpt DB 660/850, and [Event 38](http://event38.com/product/custom-ngb-filter-glass-for-diy-camera-conversion/) NGB filter. Each were placed internally into Canon S100's that had their internal factory IR filter removed. RAW images were captured from each camera with f/4, 1/1000, ISO 100 on all. They were each calibrated against 4 calibration targets with known reflective values using Ned's plugin. The NIR subtraction is still subjective as I do know yet know exactly how much NIR is in the visible band on these camera's. The leaves in the image were from a brush type plant in my front yard that I noticed had different stages of visible health. The red filter showed much better sensitivity to leaf condition.

I am curious if anyone has images they can share that show certain crops with better contrast using a blue filter vs red filter. So far there has been strong evidence that red is the go-to filter for NDVI.
I would also like to know if anyone has information on the full spectral response of this Canon sensor.

Ned has provided sound logic on why red filters should perform better than blue( [see this research note](https://publiclab.org/notes/nedhorning/11-01-2013/why-a-red-filter-should-work-well-for-ndvi)) when looking at plant vigor or health so I was curious why some still use blue filters for NDVI analysis and what exceptions may exist when a blue filter would be better for this application.

**RGB Image**

[![0207161357_HDR_(2).jpg](//i.publiclab.org/system/images/photos/000/014/145/medium/0207161357_HDR_%282%29.jpg)](//i.publiclab.org/system/images/photos/000/014/145/original/0207161357_HDR_%282%29.jpg)

**MidOpt DB475/850 VIS blue NIR red**

[![475-850_zoom.jpg](//i.publiclab.org/system/images/photos/000/014/146/medium/475-850_zoom.jpg)](//i.publiclab.org/system/images/photos/000/014/146/original/475-850_zoom.jpg)

**Event38 NGB VIS blue NIR red**

[![Event38_zoom.jpg](//i.publiclab.org/system/images/photos/000/014/147/medium/Event38_zoom.jpg)](//i.publiclab.org/system/images/photos/000/014/147/original/Event38_zoom.jpg)

**MidOpt DB660/850 VIS red NIR blue**

[![660-850_zoom.jpg](//i.publiclab.org/system/images/photos/000/014/148/medium/660-850_zoom.jpg)](//i.publiclab.org/system/images/photos/000/014/148/original/660-850_zoom.jpg)

**
Full NDVI image from MidOpt 660/850(red filter)**

[![660-850_with_bar.jpg](//i.publiclab.org/system/images/photos/000/014/150/medium/660-850_with_bar.jpg)](//i.publiclab.org/system/images/photos/000/014/150/original/660-850_with_bar.jpg)

**Another RGB**

[![Closeup_RGB.jpg](//i.publiclab.org/system/images/photos/000/014/197/medium/Closeup_RGB.jpg)](//i.publiclab.org/system/images/photos/000/014/197/original/Closeup_RGB.jpg)

**MidOpt 660/850 VIS red NIR blue**

[![ndviImage_with_bar.jpg](//i.publiclab.org/system/images/photos/000/014/198/medium/ndviImage_with_bar.jpg)](//i.publiclab.org/system/images/photos/000/014/198/original/ndviImage_with_bar.jpg)

**MidOpt 475/850 VIS blue NIR red**

[![ndviImage_with_bar.jpg](//i.publiclab.org/system/images/photos/000/014/199/medium/ndviImage_with_bar.jpg)](//i.publiclab.org/system/images/photos/000/014/199/original/ndviImage_with_bar.jpg)



