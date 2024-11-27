---
nid: 10610
title: Updated photo monitoring plugin to compare NDVI with DVI
path: public/static/notes/nedhorning/06-24-2014/updated-photo-monitoring-plugin-to-compare-ndvi-with-dvi.md
uid: 133
tagnames: near-infrared-camera,ndvi,imagej,software,plugin,photo,infragram,fiji,photo-monitoring-plugin,monitoring,dvi
---

# Updated photo monitoring plugin to compare NDVI with DVI

I finally got around to updating the Photo Monitoring Plugin that runs in ImageJ/Fiji (https://github.com/nedhorning/PhotoMonitoringPlugin). The main addition is a dropdown menu that allows you to pick the type of two-band index you want to create. For now the only two options are NDVI Normalized Difference Vegetation Index) and DVI (Difference Vegetation Index). I updated the guide to reflect those changes. I also added two of the LUTs that Chris Fastie frequently uses. If you use the new plugin please let me know if something doesn't work as expected or if the guide or interface windows don't make sense.

I had been wanting to add additional indices to the plugin and a recent discussion on [DIYDrones](http://diydrones.com/forum/topics/misconceptions-about-uav-collected-ndvi-imagery-and-the-agribotix?groupUrl=agricultural-uavs&groupId=705844%3AGroup%3A1172596&id=705844%3ATopic%3A1686199&page=1#comments) prompted me to add the DVI so people can compare that with NDVI.

The NDVI and DVI output images in my limited tests are nearly identical if I scale the NDVI from 0 – 1 and DVI from 0 – 255. NDVI tends to increase values in shadow area and DVI tends to decrease values in shadows. So, if the shadow falls over soil or other low vegetation area DVI will be “better” and it the shadow falls over vegetation NDVI will be “better”. In light shadows NDVI seems to give better results but it's difficult to tell which is really “better or worse” with out some rigorous testing. Hopefully adding a DVI option to the plugin will make comparisons easier. Please report your findings.

In the figures below you can see examples from a dual camera system with one unmodified and one NIR pass filter camera (upper figure) and also a single camera with a red Wratten 25A filter (lower figure). Note the shadow in the lower left portion of the image. Note the shadow to the right of the concrete block. The images were not calibrated.

[![DVI_NDVI_Compare.png](https://i.publiclab.org/system/images/photos/000/004/956/medium/DVI_NDVI_Compare.png)](https://i.publiclab.org/system/images/photos/000/004/956/original/DVI_NDVI_Compare.png)


[![RedFilterDVI_NDVI_Compare.png](https://i.publiclab.org/system/images/photos/000/004/957/medium/RedFilterDVI_NDVI_Compare.png)](https://i.publiclab.org/system/images/photos/000/004/957/original/RedFilterDVI_NDVI_Compare.png)

[![LUT.png](https://i.publiclab.org/system/images/photos/000/004/959/medium/LUT.png)](https://i.publiclab.org/system/images/photos/000/004/959/original/LUT.png)