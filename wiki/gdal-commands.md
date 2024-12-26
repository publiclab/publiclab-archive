---
title: "GDAL Commands"\ntagnames: 'gdal'
author: warren
path: /wiki/gdal-commands.md
nid: 228
uid: 1

---

# GDAL Commands

by [liz](../profile/liz), [warren](../profile/warren), [gonzoearth](../profile/gonzoearth)

May 07, 2011 04:08 | Tags: [gdal](../tag/gdal)

----

GDAL commands used for our [public map archive](/maps)

**Lists information about a raster dataset**

> gdalinfo -stats input.tif 

**Prepare image fro new map coordinate system with GCPs**

> gdal_translate -of GTiff -a_srs EPSG:4326 -gcp x(longitude "pixel") y(latitude "line") easting(longitude degree decimal) northing(latitude degree decimal) input.tif output.tif 

**Warp an image into a new coordinate system**

> gdalwarp -of GTiff -t_srs EPSG:4326 input.tif output.tif

**Publish image map for tiled viewer. generating TMS tiles, KMLs and web viewers**

> gdal2tiles.py --title="Map Title" --tile-format="jpeg" --zoom=12-23 --copyright=COPYRIGHT --googlekey=KEYCODE input.tif output_dir
 
**generate MBTiles from GeoTiff**

> raster2mb input.tif output.mbtiles

**generate JPG from GeoTiff**

> gdal_translate -of JPEG -b 1 -b 2 -b 3 input.tif output.jpg

**convert raster data between different formats - With a_ullr**

> gdal_translate -of GTiff -a_srs EPSG:4326 -a_ullr ulx uly lrx lry input.tif output.tif

**convert geotiff to spherical mercator JPG**

> gdalwarp -of GTiff -t_srs EPSG:900913 input.tif output.jpg

**All gdal utility programs**
http://gdal.org/gdal_utilities.html

###Customizations###

**MrSID converting to GeoTIFF**

Resources:
* http://gdal.org/frmt_mrsid.html
* http://casoilresource.lawr.ucdavis.edu/drupal/node/98, we're putting installing a modified GDAL to be able to convert USDA MrSID files into geotiff:
* http://ubuntuforums.org/showthread.php?p=11316499
* http://www.lizardtech.com/developer/

I wanted to use gdal:

    gdal_translate  file.sid file.tif

However, the non-free LizardTech SDK (i used v8.5) comes with a utility called **mrsiddecode**, which can convert to geoTiff, so I ended up using that. Darn government, using non-free/proprietary image formats that have only one commercial vendor and no free alternatives!

Anyhow, the format is:

    mrsiddecode -i input.sid -o output.tif