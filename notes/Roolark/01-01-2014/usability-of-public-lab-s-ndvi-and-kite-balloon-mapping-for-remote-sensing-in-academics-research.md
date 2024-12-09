---
title: Usability of Public Lab's NDVI and Kite/Balloon Mapping for Remote Sensing in Academics/Research
tagnames: ndvi, qgis
author: Roolark
path: /notes/Roolark/01-01-2014/usability-of-public-lab-s-ndvi-and-kite-balloon-mapping-for-remote-sensing-in-academics-research.md
nid: 9919
uid: 411681

---

# Usability of Public Lab's NDVI and Kite/Balloon Mapping for Remote Sensing in Academics/Research

by [Roolark](../profile/Roolark) January 01, 2014 02:01

January 01, 2014 02:01 | Tags: [ndvi](../tag/ndvi), [qgis](../tag/qgis)

----

###What I want to do
Traditional remote sensing of vegetation and snow, using Landsat and MODIS imagery, is useful for small scale, regional areas. Higher resolution satellite imagery from Spot / GeoEye is expensive, and the temporal resolution is limited to (mostly) set schedules.

Initially, it was my plan to try and determine the changes in vegetation and vegetation health from ski valleys in areas that receive only natural snow, versus areas that receive fairly regular, annual artificial snow. The problem is, with Landsat imagery, I am unable to get fine enough spatial resolution. This has led me to Public Labs, and while I no longer have the time to work on my initial proposal studying artificial snow and vegetation, I do have plenty of time to work on determining whether Balloon and Kite imagery, using a canon A2200 or similar camera, modified for NIR, can produce higher spatial resolution imagery, with a good enough spectral accuracy, to compare with Landsat, for use in future earth research.

Data Requirements:
Landsat 8 imagery of areas with differing vegetation, and hopefully additional imagery with snow.

Balloon / Kite imagery, using the Infragram filter from Public Labs, taken in the same areas covered by the Landsat 8 imagery.

Analysis Tools:
QGIS + semi-automatic classification plugin (free, open-source software) and ERDAS Imagine (commercial, industry/academic standard).

Process:
1. With QGIS and the classification plugin, perform USGS level 1 and level 2 classifications of the Landsat 8 imagery. Different classification algorithms will be used to provide comparisons for accuracy. The final output of this process will include the spectral signatures of the classified land covers, classified raster images with matching vector layers, and an accuracy/error assessment of the classifications. 

2. Using QGIS, I will perform the same classification process on the Balloon / Kite imagery. Final outputs of this process will be the same as with the Landsat imagery.

3. A single reference vector file, with polygons known to be properly classified, will be used for both the Landsat and the Balloon / Kite data, to determine accuracy/error.

4. Repeat steps 1-3 using ERDAS Imagine

Expected outcome:
The modified infragram camera from the balloon and kites should produce higher spatial resolution imagery and lower spectral resolution imagery than the Landsat 8 data sets. The higher spatial resolution should make it possible to discern differences in vegetation and snow types with better accuracy than the 30 meter Landsat data. The lower spectral resolution could or could not impact the ability to use semi automatic classifications with acceptable (95% or better RMS error) error. If it is found that classification error is acceptable using the balloon/kite imagery and an infragram camera, then this could be a solution for conducting research in an academic setting where results need to be consistent with current standards and costlier tools.




 

###My attempt and results

###Questions and next steps