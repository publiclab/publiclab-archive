---
title: "NDVI Calculation"

tagnames: 'ndvi, gdal, python'
author: warren
path: /wiki/ndvi-calculation.md
nid: 62
uid: 1
cids: 
---

# NDVI Calculation

by [warren](/profile/warren)

January 26, 2011 06:39 | Tags: [ndvi](/tag/ndvi), [gdal](/tag/gdal), [python](/tag/python)

----

<a href="https://www.flickr.com/photos/jeffreywarren/5288138022/" title="Plaza San Martin, visible-infrared-NDVI by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5206/5288138022_312eca176a.jpg" width="500" height="133" alt="Plaza San Martin, visible-infrared-NDVI" /></a>

Good example in GDAL/Python: http://www.gis.usu.edu/~chrisg/python/2009/lectures/ospy_slides5.pdf

Script for GDAL: http://www.jeremymsmith.us/davidson/NDVI.py

Remember, NDVI is:

*Infrared - Visible / Infrared + Visible*

##GDAL commands##

Splice out a single band and save as independent geotiff:

<code>gdal_translate -of GTiff -b 2 morflex-freeflight-geo.tif morflex-freeflight-green.tif</code>

On using NDVI.py, I got this error:

<code>nautilus-2:morflex-lima-freeflight warren$ python NDVI.py 
Traceback (most recent call last):
  File "NDVI.py", line 31, in <module>
    var1 = subtract(band4, band3) 
ValueError: shape mismatch: objects cannot be broadcast to a single shape
</code>

Perhaps we can use this GDAL crop script to make both images the same shape: http://www.enricozini.org/2010/tips/gdal-crop/