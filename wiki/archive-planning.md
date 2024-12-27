---
title: "Archive Planning"

tagnames: ''
author: warren
path: /wiki/archive-planning.md
nid: 159
uid: 1
cids: 
---

# Archive Planning

by [gonzoearth](/profile/gonzoearth), [warren](/profile/warren)

April 06, 2011 19:24 | Tags: 

----

##Planning for the upcoming Public Laboratory archive##

_This project is being led by **[Jeff Warren](/people/warren)** (website, design) and **[Stewart Long](/people/gonzoearth)** (data preparation)_

_The current status is:_ Up and running, comment system with geolocated comments is in the pipeline. Some zoom-level issues on OpenLayers maps. 

----

* media plan (outreach) (liz)
* printed edition (see [Posters](/wiki/posters) project)
* search function
* “embed”
* Reach out to people involved in mapping, for "field notes" and those who may be able to use the data. 

**Map Archive Outline and Backup Structure (Server and DVD)**

* formats
  * http://publiclaboratory.org/wiki/map-formats

* paths
  * parent directory:
  * http://archive.publiclaboratory.org/site-name/date-year-month-day-state(or region)-city(or sub-region)-exact place name (optional)
  * example http://archive.publiclaboratory.org/cambridge/2011-6-22-massachusetts-cambridge-mit-knightcivicmediaconference/
* site root directory organization:
  * README.txt - explanatory text file
  * site-name.tif - Spherical mercator un-georeferenced Tiff image
  * site-name-geotiff.tif - GeoTIFF is a public domain metadata standard which allows georeferencing information to be embedded within a TIFF file. 
  * site-name-geotiff.zip - DVDs will offer .zip compressed GeoTiffs to save disk space.
  * site-name.jpg - full-resolution JPG based on the GeoTiff
  * site-name-tms/ - a folder containing TMS folders and map tiles - TMS is a specification for storing and retrieving tiled mapping data. This will include an OpenLayers-based HTML viewer for reading/exploring it in a web browser.
  * /raw - directory of original images
  * site-name-raw.zip - archive of original images

Example root directory for DVD:

<small><pre>
/2010-5-7-louisiana-portfourchon/2010-5-7-louisiana-portfourchon-raw.zip
/2010-5-7-louisiana-portfourchon/2010-5-7-louisiana-portfourchon.jpg
/2010-5-7-louisiana-portfourchon/2010-5-7-louisiana-portfourchon-geotiff.zip
/2010-5-7-louisiana-portfourchon/2010-5-7-louisiana-portfourchon-tif.zip
/2010-5-7-louisiana-portfourchon/2010-5-7-louisiana-portfourchon-tms/
</pre></small>


**Contact list**

* Jon Fong <jfong@indiana.edu>, re: Grand Isle State Park
* Don and Justin Blancher, re: Perdido Point and others
* USGS contact (via Brenda something) -- asked for formats, now we have 'em!
