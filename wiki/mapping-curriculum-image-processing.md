---
title: "Mapping Curriculum Image Processing"

tagnames: 'education, curriculum, map-curriculum'
author: warren
path: /wiki/mapping-curriculum-image-processing.md
nid: 82
uid: 1

---

# Mapping Curriculum Image Processing

by [gonzoearth](../profile/gonzoearth), [johnsmith2167](../profile/johnsmith2167), [warren](../profile/warren)

February 10, 2011 15:36 | Tags: [education](../tag/education), [curriculum](../tag/curriculum), [map-curriculum](../tag/map-curriculum)

----

*As part of the [Grassroots Mapping Curriculum](/wiki/mapping-curriculum) series.*

##Image processing##

An orthomosaic is made from the imagery. First, a subset of the data is prepared. The scale of the project is realized through both a qualitative and quantitative review of the data set. Base data, ground control points and GPS data are set up in preparation for rectifying images with a given map projection.  Numerous image processing techniques are reviewed during the mosaic creation. 

##Parallax Error, Stitching software?##

Parallax is a term associated with the difference in the apparent position of an object viewed along two different lines of sight. It is caused by a change in position of the point of observation. The Phenomena produces challenges in image acquisition and is also the reason why image panorama stitching softwares are in general unable to process aerial imaging data, the camera position is constantly moving. The phenomena also explains why we only plan for a vertical camera position when acquiring mapping data. An entire scene can be captured from oblique imagery, but only as perceived from that vantage point. Correcting parallax errors with software is not possible. The image processing quality will directly result from the success of the planning and image acquisition.

Image Processing, an iterative method of digital rubber sheeting with GonzoEarth
Discussion of manual image processing techniques. Georeferencing data is used along with image editing software. Discussed work-flow of dynamic selections, transformations, and mosaic creation.

##Image Processing With MapKnitter##

MapKnitter is a client-side dynamic map creation tool that is rendered in html5 framework. A MapKnitter project does not require a constant Internet connection and a project can have multiple mapmaking user agents. Separate images are Georeferenced with base web geodata such as Open Street Map and raster satellite imagery.

<a href="https://www.flickr.com/photos/jeffreywarren/5244471502/" title="MapKnitter for Bayou St. Denis trip by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5203/5244471502_238a66552d.jpg" width="500" height="397" alt="MapKnitter for Bayou St. Denis trip" /></a>

<a href="https://www.flickr.com/photos/jeffreywarren/4749581089/" title="Mapmaking in Al Aroub refugee camp in the West Bank by jeferonix, on Flickr"><img src="http://farm5.static.flickr.com/4137/4749581089_2422605115.jpg" width="500" height="293" alt="Mapmaking in Al Aroub refugee camp in the West Bank" /></a>
Mapmaking in Al Aroub refugee camp in the West Bank

##Image Processing With MapWarper##

Map Warper is an open source online application for rectifying raster images. A raster image is uploader, online mapping services are used for georeferencing, and then the map is exported as GeoTiff or WMS. The same rectification engine used in MapWarper is used by the New York Public Library’s crowd-sourcing georeferencing Map Rectifier tool. 