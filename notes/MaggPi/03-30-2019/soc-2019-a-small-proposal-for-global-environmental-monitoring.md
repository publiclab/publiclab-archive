---
title: "SOC 2019:  A small proposal for global environmental monitoring "\ntagnames: 'software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects, soc-2019-eval, gsoc-2019-final-report, qgis'
author: MaggPi
path: /notes/MaggPi/03-30-2019/soc-2019-a-small-proposal-for-global-environmental-monitoring.md
nid: 18907
uid: 501996

---

# SOC 2019:  A small proposal for global environmental monitoring 

by [MaggPi](../profile/MaggPi) | March 30, 2019 04:51

March 30, 2019 04:51 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects), [soc-2019-eval](../tag/soc-2019-eval), [gsoc-2019-final-report](../tag/gsoc-2019-final-report), [qgis](../tag/qgis)

----

## Title: A small proposal for global environmental monitoring with Image Sequencer

## About me
I am a 19 year old student at The George Washington University in Washington D.C..  I am just finishing my first year and majoring in computer science.  My main interests are computer vision and computer graphics.  Outside of computers I enjoy drawing, math, and hiking.  I participated in Google Summer of Code last year and while it was a lot of work, I really enjoyed it!
## Project description
Proposal submitted in response to [‘Public Labs Idea List’ : Image Sequencer (multiple possible projects)'](https://publiclab.org/wiki/gsoc-ideas)

- The project will increase Image Sequencer capability while simultaneously demonstrating the ability to process satellite images.  The general approach is to develop [Image Sequencer](https://github.com/publiclab/image-sequencer) as a user interface for [openCV.js](https://docs.opencv.org/3.4/df/d0a/tutorial_js_intro.html) and [openCV.js as computer vision processing engine for Image Sequencer](https://github.com/publiclab/image-sequencer/issues/237).    Technical objectives include: 1) streamlining satellite processing capability via image  sequencer functions, 2) enabling/extending opencv applications  for  image sequencer and 3) demonstrate daily satellite environmental analysis over a 3 month period.  
  
### Abstract/summary (<20 words):
OpenCV.js  and Image Sequencer  will be integrated to develop a user friendly workflow for analysis of satellite images.
### Problem and Proposed Solutions
**Increasing Image sequencer applications** 
While Image sequencer provides a baseline capability to display and process images, applications are limited by the lack of analysis tools.  The addition on openCV.js will extend the range of possible applications.  
**Making satellite data accessible **
While there are several commercial and  open source satellite analysis tools available, the tools require hours of users training and/or programming experience.  This project’s goal is to upgrade Image Sequencer processing modules to enable ‘easy’ processing of satellite image data.  

This proposal considers four main problems related to processing satellite data:

- large file size: Satellite file sizes are typically greater than  100 MBs and this often results in data storage problems.  The proposed solution is to  develop an Image Sequencer module that restrict file size (10MB) and  is centered on a region of interest  identified by the user.   While this may provide only a small portion of the remote sensing data, the assumption is that most Public Lab users are primarily interested in monitoring their  local environment  that has a footprint of several kilometers. 
- raster/geoTIFF: Satellite data requires reformatting for display and processing.  This proposal will develop routines to process the data in formats acceptable to image sequencer (jpg). [The initial approach  will be to use OpenCV and GDAL  to read geospatial files](https://docs.opencv.org/3.4.2/d7/d73/tutorial_raster_io_gdal.html) (assuming appropriate javascript bindings and features are available). 

- Image analysis:  While Image Sequencer has several analysis tool such as NDVI, this proposal will develop more advanced processing features.  One application under consideration is the measuring of water levels by comparing different image contours.  
- geo-referencing: Satellite data needs to be geo-referenced  to permit comparison with other data.  The proposed solution is to develop an Image Sequencer  transfer module that provides the coordinates and image for the MapKnitter mapping application. 
 
** Public engagement in environmental monitoring **
This proposal seeks to increase environmental awareness by demonstrating the different ways to collect, process and combine neighborhood environmental data.  As part of the proposal, one or two sites nominated by the Public Lab community will be selected for daily satellite imagery collection. Ideally, the same locations will also be observed by Public Lab Balloon/Kite cameras and other ground sensors.  The objective is to develop ground truth monitoring to assist satellite measurements and for satellite sensing to guide ‘near earth’ based measurements. 


### Planet Satellite Imagery Info ###
 (selected from https://assets.planet.com/docs/Combined-Imagery-Product-Spec-Dec-2018.pdf): 


- This proposal will use Planet satellite ‘Analytic’  Imagery - 3-band natural color (red, green, blue) or 4-band multispectral image (blue, green, red, near-infrared)
- Planet Image Tiles are in GeoTIFF format with size  25 km (8000 lines) by 25 km (8000 columns).   Data size is up to 500 Mbytes per Tile for 4 bands at 3.125 m pixel size.
- Planet.com satellite software overview is available at: https://github.com/kscottz/PythonFromSpace/blob/master/Pycon2017.pdf
- Planet.com software environment uses python  based open standard tools [GeoJSN](http://geojson.org/), [GDAL](https://www.gdal.org/), [QGIS](https://qgis.org/en/site/),  [Rasterio](https://github.com/mapbox/rasterio) , and [GRASS GIS](https://grass.osgeo.org/) to manipulate geoTiffs. 
The tools enable (Application Processing Interface) APIs  that allow listing, filtering, and downloading of data to anyone using a valid API key.    
-  Planet.com  has a [software development environment](https://developers.planet.com/) for advanced processing functions such as image mosaicing and  change detection.  While these tools are not currently available for web-based platforms such as Image Sequencer, this proposal can be adapted  to develop specialized programs specific to public lab applications.


### Timeline/milestones
** Community Bonding period (May 6 - 27, 2019) **
* Familiarize with Planet software/processing pipeline 
* Explore all image sequence functions
* Submit Public Lab questionnaire for satellite analysis locations 
* Identify procedures for porting opencv.js to image sequencer
* Connect with mentor(s)

**Phase 1 Adapting openCV for Image sequencer: (May 27 to June 28)**

- Week 1 - First draft of Image Sequencer User manual/establish local environment of opencv.js/begin daily satellite downloads   
- Week 2 - Establish opencv porting /upload  procedures/begin satellite collections
- Week 3 - Opencv/Image sequencer interface and testing  
- Week 4 - Prepare documentation/final evaluation

**Phase 2 Processing satellite data with openCV/Image sequencer: (June 29  to July26) **

- Week 5 – Segment/ crop geoTIFF data based on lat/long radius
- Week 6 -  convert geoTIFF to R,G,B,IR
- Week 7 -  optimize histogram correction and color balance routines
- Week 8 - Prepare documentation/final evaluation

**Phase 3 Processing satellite data with openCV/Image sequencer (cont)  (July 27 to Aug 26)**

- Week 9 -  advanced processing functions TBD
- Week 10 - Geo reference w/mapKnitter module
- Week 11 - End satellite date downloads/Process satellite data/update Image sequencer user manual
- Week 12 -Prepare documentation/final evaluation


### Needs

** Satellite data:** 
To gain access to satellite imagery, I have enrolled in [Planet satellite student development  program](https://www.planet.com/markets/education-and-research/).  Student developers can access up to 10,000sq km or about 30 satellite  images per month. 
  
Links below provide examples of 3m satellite imagery available from Planet.com:
-[Boston](https://mapknitter.org/maps/planet-imagery-test--3)
-[New Orleans](https://mapknitter.org/maps/satellite-imagery)
-This [MapKnitter link](https://mapknitter.org/maps/planet-imagery-test--6) provides an example of how Image Sequencer and  MapKnitter can be combined to process Planet satellite imagery.   The GIF displays portions of the processing workflow (RGB, R, IR , NDVI (grayscale), NDVI (Fastie), NDVI (stretched)) for a scene near the Mississippi River (Oakville, LA).

** Adding OpenCV.js and GDAL  to Public Labs may require additional support. ** 
 Porting OpenCV.js and GDAL-js (GDAL  can be considered a kind of OpenCV for geoTiffs) may require [emscripten](https://github.com/emscripten-core/emscripten) to compile OpenCV functions and a supporting server environment. 

### Contribution
New colormaps added to image sequencer.   Work was done in javascript and provides an example of processed satellite data.   
https://publiclab.org/notes/MaggPi/01-14-2019/updated-image-sequencer-colormaps

In addition, I have developed a [microscope image stitching prototype](https://publiclab.org/notes/MaggPi/03-23-2019/raspberry-pi-microscope-image-stitching) designed for public lab hardware and software.  



****

### Experience

[Examples of prior work](https://publiclab.org/profile/MaggPi) and [github files](https://github.com/MargaretAN9)

Other areas of experience include a familiarity with Public Lab equipment (microscope, spectrometer) and have used Public Lab software (MapKnitter, Image Sequencer) to process imagery. 





### Teamwork
- GSOC 2018 [participation with Public Lab](https://publiclab.org/notes/MaggPi/03-20-2018/gsoc-proposal-computer-vision-enhancements-for-raspberry-pi-based-public-lab-science-projects)
- Participation is several University team assignments ranging from robotics, computer programming and French.   
- My work for a NASA program called VASTS (Virginia Aerospace Science and Technology Scholars). The program selects 30 high school students to work with NASA engineers to design a hypothetical human Mission to Mars. I lead the strategic communications team that developed a consolidated system design across the different engineering teams. You can see the final design in a short video at: https://www.youtube.com/watch?v=gOZS4kw82cE&feature=youtu.be

****

### Passion

I am hoping to use the Public Lab software developed under the project  to analyze remote sensing data from environmentally stressed areas.  I can’t think of a better opportunity (or community) to help develop the tools to monitor the environment and develop a better understanding of our planet’s future.    

### Audience

The availability of new satellite systems such as [Planet.com](https://www.planet.com/) creates opportunity to review three meter resolution environmental data more frequently.  I’m hoping my project will help anyone interested in their local environment download, display and analyze satellite imagery.   Possible public lab applications include monitoring of [algae blooms](https://publiclab.org/questions/stevie/08-14-2018/what-are-ways-to-monitor-algae-blooms), [oil spills](https://publiclab.org/notes/warren/1-30-2011/article-modis-detects-oil-spills-lake-maracaibo-venezuela) and [water pollution](https://dnr.wi.gov/lakes/clmn/remotesensing/). 

 Many people, like myself, are visual learners and need to see the entire picture in order to fully grasp a concept.  In computer programming one rarely comes across visual representations since topics are usually extremely abstract.  I hope that my project can help people who are still learning about  microscopes, satellites, and image processing to see the bigger picture and gain a greater understanding of several abstract concepts.




### Commitment

Strong commitment because I think I can make a difference.   If we can make it easier to understand our  local neighborhood ecology maybe  we can determine better ways to shape the planet’s future.   

