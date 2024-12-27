---
title: "Shades of Green - OpenStreetMap Overlays on Satellite images"

tagnames: 'mapknitter, osm, geospatial, satellite-imagery, gsoc-2019, planet, nottingham, lat:52.954783, lon:-1.158108'
author: MaggPi
path: /notes/MaggPi/08-17-2019/shades-of-green-openstreetmap-overlays-on-satellite-images.md
nid: 20562
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/034/595/original/shades_of_green.png)

# Shades of Green - OpenStreetMap Overlays on Satellite images

by [MaggPi](../../../profile/MaggPi) | August 17, 2019 17:41

August 17, 2019 17:41 | Tags: [mapknitter](../tag/mapknitter), [osm](../tag/osm), [geospatial](../tag/geospatial), [satellite-imagery](../tag/satellite-imagery), [gsoc-2019](../tag/gsoc-2019), [planet](../tag/planet), [nottingham](../tag/nottingham), [lat:52.954783](../tag/lat:52.954783), [lon:-1.158108](../tag/lon:-1.158108)

----

## Abstract 
This note provides an example of satellite image processing using OpenStreetMap (OSM) data mining tools and [Jupyter](https://jupyter.org/) interactive computing environment.  Park areas of Nottingham, England are identified and compared using [Planet](https://www.planet.com/) satellite image data and [overpass-turbo](https://overpass-turbo.eu/) overlays.

## Introduction
- This note demonstrates how satellite imagery can be combined with OSM data to highlight and isolate different environmental features.  
- Tools used in this example include:
	- [Planet](https://www.planet.com/) satellite data with 3m resolution (Nottingham England, July 2019).  Nottingham, UK was selected in support of  @molangmuir10 [urban greening studies](https://publiclab.org/notes/molangmuir10/05-13-2019/mapping-nottingham-s-urban-greening-growing-spaces) and [MapKnitter  evaluations.](https://publiclab.org/notes/author/molangmuir10). 
	- The [overpass-turbo](https://overpass-turbo.eu/) application that provides the ability to filter OpenStreetMap data and identify features such as parks.
	- Jupiter python notebook was used as the processing environment to enable [GDAL](https://gdal.org/) and [rasterio](https://pypi.org/project/rasterio/0.13.2/) libraries that allow access to geospatial data.
	- ‘Greeness’ (green over average red and blue channel) is used to highlight park differences.  NDVI comparison could also be used but greeness was selected since it permits an easier comparison with standard video or photography.

## Application
- This demo demonstrates the use of satellite imagery to isolate and process park environmental data.  The same techniques could also be used to monitor other environmental concerns of interest to the Public Lab community.  Other possible features such as waste disposal, pipelines, industrial monitoring, etc. can also be reviewed.
- While this example uses the Jupyter notebook environment, similar processing tools are embedded within MapKnitter, Image Sequencer, and Leaflet Public Lab applications.  The note is designed to illustrate how future applications could mix these different tools for environmental comparisons.

## Walkthrough
Major processing steps are described below:

 1. The first step is to query Planet’s satellite imagery database for scenes with no cloud cover. 
![image description][1]
 2. The next step is to select, merge and download the different satellite images in a geoTIFF format.  The picture below is a composite of the R,G,B channels.

![image description][2]
 3. GDAL is used to select a portion of the image to make the processing more manageable.
![image description][3]
 4. Switching to the [overpass-turbo](https://overpass-turbo.eu/) application, request information about all the parks in Nottingham.  Park shape and location data is stored in a GeoJSON file
![image description][4]
 5. Park information and satellite imagery are mixed and compared.  This graph shows the level of greeness (green/(red+blue)) for each park.  This is done by overlaying the park shape over the satellite image and calculating the average greeness per pixel over the other two channels.
![image description][5]
 6. Park greeness is displayed over OSM and satellite maps by scaling the opacity.  
![image description][6]
![image description][7]
 7. Scenes are ported into MapKnitter for comparison with other types of imagery.
MapKnitter overlay: [https://mapknitter.org/maps/shades-of-green-overlay-of-nottingham-parks](https://mapknitter.org/maps/shades-of-green-overlay-of-nottingham-parks)

## Summary
The note demonstrates how OSM data can be merged with satellite imagery to highlight and compare select areas of interest.  Demonstration involves the uses of GDAL, rasterio, Planet API’s and Jupyter notebook processing tools.

## References
Code available at:

 - [https://github.com/MargaretAN9/GSOC-2019/tree/master/sattelliteImageProcess](https://github.com/MargaretAN9/GSOC-2019/tree/master/sattelliteImageProcess)
 - [https://github.com/MargaretAN9/GSOC-2019/edit/master/sattelliteImageProcess/greenOperpassExV1.ipynb](https://github.com/MargaretAN9/GSOC-2019/edit/master/sattelliteImageProcess/greenOperpassExV1.ipynb)

OSM approach was first demonstrated by Katherine Scott and can be found at:

- [https://github.com/kscottz/PythonFromSpace/blob/master/OpenStreetMapsExample.ipynb](https://github.com/kscottz/PythonFromSpace/blob/master/OpenStreetMapsExample.ipynb)

Planet APIs available at:

 - [https://www.planet.com/account/#/](https://www.planet.com/account/#/)

MapKnitter overlay:

 - [https://mapknitter.org/maps/shades-of-green-overlay-of-nottingham-parks](https://mapknitter.org/maps/shades-of-green-overlay-of-nottingham-parks)

This effort is GSOC 2019 effort available at:

 - [https://publiclab.org/notes/MaggPi/03-30-2019/soc-2019-a-small-proposal-for-global-environmental-monitoring](https://publiclab.org/notes/MaggPi/03-30-2019/soc-2019-a-small-proposal-for-global-environmental-monitoring)

Planet Imagery Reference: Planet Team (2018). Planet Application Program Interface: In Space for Life on Earth. San Francisco, CA. https://api.planet.com.

  [1]: /i/34587.png "Slide1.PNG"
  [2]: /i/34588.png "Slide2.PNG"
  [3]: /i/34589.png "Slide3.PNG"
  [4]: /i/34590.png "Slide4.PNG"
  [5]: /i/34591.png "Slide5.PNG"
  [6]: /i/34592.png "Slide6.PNG"
  [7]: /i/34594.png "Slide7.PNG"