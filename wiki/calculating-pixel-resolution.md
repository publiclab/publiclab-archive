---
nid: 298
title: calculating pixel resolution
path: public/static/wiki/calculating-pixel-resolution.md
uid: 12
tagnames: curriculum,gis,resolution,parent:mapping-curriculum,mapping-curriculum,pixel,scale
---

# calculating pixel resolution

*As part of the [Grassroots Mapping Curriculum](/wiki/mapping-curriculum) series.*

<a href="https://www.flickr.com/photos/gonzoearth/5760094428/" title="calculating pixel resolution by GonzoEarth, on Flickr"><img src="http://farm3.static.flickr.com/2301/5760094428_002d098d8c.jpg" width="400" height="500" alt="calculating pixel resolution"></a>

Determining the pixel resolution for a PLOTS map in the Wilkinson Bay, Louisiana area. 

We have a finished map, but need to find the pixel resolution to answer the question: "how big is the real world size of a pixel on our map?"

This can be achieved in different ways. In this case we are going to take 3 separate linear measurements on existing identifiable landmarks within both the new map and a existing base map. The resulting ratios should be similar if the measurements are correct, and provide a ratio of pixels to real world units. 

As you can see from the graphic, 3 separate areas have been measured in  both the USGS base map and Photoshop. The USGS measurements are in feet, the Photoshop values in pixels. 
Before we analyze the ratios, the units are converted to metric. 
Ft * 12 = inches / 2.54 = cm
Now the ratio is derived from dividing the cm lengths by the pixel measurements. Our resulting 3 ratios from top to bottom :
4.76 | 4.91 | 4.76 
In conclusion, we can say with confidence that this map has a pixel:cm ratio of around 1:4.8