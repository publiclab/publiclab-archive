---
title: Preliminary Plymouth Plant Plume Ponderings
tagnames: thermal-photography, plume, massachusetts, tac, plymouth, thermal-imaging, cape-cod-bay-watch, landsat, nuclear, thermal-pollution, snowfest, satellite-imagery, northeast, barnstar:basic, response:7189, snowfest2014, lat:41.942861, lon:-70.576729, place:plymouth-nuclear-station
author: donblair
path: /notes/donblair/02-23-2014/preliminary-plymouth-plant-plume-ponderings.md
nid: 10057
uid: 43651

---

# Preliminary Plymouth Plant Plume Ponderings

by [donblair](../profile/donblair) February 23, 2014 03:56

February 23, 2014 03:56 | Tags: [thermal-photography](../tag/thermal-photography), [plume](../tag/plume), [massachusetts](../tag/massachusetts), [tac](../tag/tac), [plymouth](../tag/plymouth), [thermal-imaging](../tag/thermal-imaging), [cape-cod-bay-watch](../tag/cape-cod-bay-watch), [landsat](../tag/landsat), [nuclear](../tag/nuclear), [thermal-pollution](../tag/thermal-pollution), [snowfest](../tag/snowfest), [satellite-imagery](../tag/satellite-imagery), [northeast](../tag/northeast), [barnstar:basic](../tag/barnstar:basic), [response:7189](../tag/response:7189), [snowfest2014](../tag/snowfest2014), [lat:41.942861](../tag/lat:41.942861), [lon:-70.576729](../tag/lon:-70.576729), [place:plymouth-nuclear-station](../tag/place:plymouth-nuclear-station)

(with: Ned Horning, Ben Gamari, Laura Dietz, Jeff Warren, Galen Fastie, and Chris Fastie at SNOWFEST)

###What I want to do

Characterize the extent of the thermal plume that extends outward from the Plymouth power plant into Cape Cod Bay.  Here's a Google Map of where it's located:

[![pilgrim.png](https://i.publiclab.org/system/images/photos/000/002/987/medium/pilgrim.png)](https://i.publiclab.org/system/images/photos/000/002/987/original/pilgrim.png)

###My attempt and results

At SNOWFEST, a local aquaculture enthusiast and LANDSAT historian suggested looking at thermal imagery in the LANDSAT archive corresponding to the geographic area around the Plymouth nuclear power generating plant.  

LANDSAT-8 acquires thermal imagery every 16 days of the same location; we visited http://glovis.usgs.gov in order to find the most recent LANDSAT-8 image that wasn't obscured by cloud cover:  2014-01-13.

Here's a zoomed-in Google Map screenshot: 

<a href="http://goo.gl/maps/MkVdv"><img src="https://i.publiclab.org/system/images/photos/000/002/992/medium/pilgrimCLOSE.png" height = 200></a>

... and here's the LANDSAT-8 imagery from the 'thermal' part of the spectrum (for reference, this was "Band 11").  In this image, the brightness of the pixels corresponds to temperature (brighter = warmer):

<!--<a href="https://i.publiclab.org/system/images/photos/000/002/989/original/small.png"><img src="https://i.publiclab.org/system/images/photos/000/002/989/medium/small.png" height = 200></a> -->

[![plumeScale.png](https://i.publiclab.org/system/images/photos/000/002/993/medium/plumeScale.png)](https://i.publiclab.org/system/images/photos/000/002/993/original/plumeScale.png)


You can clearly see the spatial extent of the thermal plume -- you can click on the above image to zoom in.

<!-- Using this approach, we were able to generate a temperature scale:-->

###Questions and next steps

The satellite instrumentation is calibrated such that we're able to determine the temperature of individual pixels from their brightness levels, according to a formula -- we're looking into how we might derive an actual temperature for the plume.

We'll be aiming to go through this process again soon, and we'll try to better document the process of downloading imagery from the "glovis" site.

###Why I'm interested

The Plymouth plant's cooling system ejects heat into the Cape Cod bay, and this post demonstrates a possible way of characterizing the spatial extent of thermal plume.