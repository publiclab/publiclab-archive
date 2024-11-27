---
nid: 397
title: mapping curriculum publishing
path: public/static/wiki/mapping-curriculum-publishing.md
uid: 12
tagnames: 
---

# mapping curriculum publishing

*As part of the [Grassroots Mapping Curriculum](/wiki/mapping-curriculum) series.*

Orthomosaic 
In vertical image mapping an orthomosaic is a map that is resultant to a composite stitch of separate images, and has a unified scale throughout the image. 

The orthomosaic that is created in the image processing stage, is now a map, it has a unified scale, but further steps are needed for publishing the map in different GIS formats and map projections.

GeoTIFF
The Geotiff format represents an open data standard which allows georeferencing information to be embedded in the actual TIFF (Raster) image file.
“GeoTIFF represents an effort by over 160 different remote sensing, GIS, cartographic, and surveying related companies and organizations to establish a  TIFF based interchange format for georeferenced raster imagery” (http://trac.osgeo.org/geotiff/ ) 

GDAL
The Geospatial Data Abstraction Library (GDAL) is used as a tool for Raster translation, warp, and tile creation. http://www.gdal.org/

gdal_translate http://www.gdal.org/gdal_translate.html 
This tool is used to convert raster data between different formats. This tool is also used to assign GCPs to the file itself, in preparation for gdalwarp

gdalwarp http://www.gdal.org/gdalwarp.html 
image reprojection and warping utility

assigning GCPs for gdal_translate
In order to prepare a map for reprojection, GCP information is assigned to the map in the gdal_translate syntax. Essentially, each GCP is a link between the actual x/y location of a given pixel, and the corresponding observed geographic lat/long coordinate information for that given feature.

Tile Map Service (TMS)
TMS creation and display. An important step to interacting with high resolution maps. TMS is a specification for storing and retrieving digital maps. Discussion of viewing TMS layers in desktop and mobile computing environments.

gdal2tiles.py http://www.gdal.org/gdal2tiles.html 

Calculating spatial resolution 
While the spatial resolution can be predicted or estimated through careful pre-flight mission planning as a function of the image sensor type and the height above ground, it is also possible to manually assess the spatial resolution of a finished map. 
Determining the spatial resolution of a finished map is achieved by measuring the linear size of known features in length of pixels and using that value in a ratio with the actual measured size of the same features on the ground. 
For example; An automobile is measured on the map as 30 pixels in length. That same car is measured on the ground as 300cm in length. The resulting ratio of 30:300, or 1:10 reveals that the spatial resolution of the map is 10cm pixel resolution. For better results, multiple observations are made and averaged.