---
title: "Comparison of 4 versions of imagery, moire effects and resampling"

tagnames: ''
author: warren
path: /notes/warren/6-1-2011/comparison-4-versions-imagery-moire-effects-and-resampling.md
nid: 315
uid: 1

---

![](https://publiclab.org/sites/default/files/Screen shot 2011-06-01 at 10.36.23 PM.png)

# Comparison of 4 versions of imagery, moire effects and resampling

by [warren](../../../profile/warren) | June 02, 2011 02:43

June 02, 2011 02:43 | Tags: 

----

Check out this image of Wilkinson Bay, Louisiana, by the USGS. Clockwise from top left:

* Geotiff from USGS opened in Photoshop
* JPG from USGS opened in Photoshop
* Geotiff from USGS opened in Preview -- notice it's apparently reading one of the bands as the alpha channel; cool!
* TMS tiles served through TileStream, generated with raster2mb from the USGS geotiff

I suspected something funny with the upper right image; notice there's some checkerboard patterning due to antialiasing (a moire pattern) in the lower left of that image. I wanted to go back to the source to confirm that it wasn't just from the JPG compression, or from a resize - I'd read that this image was originally 70cm imagery resized to 1m. The original Geotiff has much better color, and while I do see some moire, it may actually be from the waves on the ocean surface interfering with the pixel resolution! I dunno, but I'm glad I went back to the source.