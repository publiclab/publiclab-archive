---
title: Calibrating a Microscope
tagnames: silica, frac-sand, pm, particle-monitoring, microscope, passive-particle-monitors, passive-pm, parent:frac-sand, microscopy, openflexure, dust-sensing, pm-sensing, particulatematter, activity:microscope, microscopes, activity:microscopes, activity:community-microscope
author: mathew
path: /notes/mathew/08-23-2016/calibrating-a-microscope.md
nid: 13391
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/017/745/original/Asakura-Oosawa_Model__Two_Plates_in_a_solution_of_Macromolecules.png)

# Calibrating a Microscope

by [mathew](../profile/mathew) August 23, 2016 17:19

August 23, 2016 17:19 | Tags: [silica](../tag/silica), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-monitoring](../tag/particle-monitoring), [microscope](../tag/microscope), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [parent:frac-sand](../tag/parent:frac-sand), [microscopy](../tag/microscopy), [openflexure](../tag/openflexure), [dust-sensing](../tag/dust-sensing), [pm-sensing](../tag/pm-sensing), [particulatematter](../tag/particulatematter), [activity:microscope](../tag/activity:microscope), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [activity:community-microscope](../tag/activity:community-microscope)

----

[image credit wikimedia](https://commons.wikimedia.org/wiki/File:Asakura-Oosawa_Model,_Two_Plates_in_a_solution_of_Macromolecules.png)

###What I want to do
I have an [openflexure microscope](/notes/mathew/07-21-2016/openflexure-microscope-high-resolution-assembly) and I want to calibrate it.  I've acquired two tools to do so, a [stage micrometer](http://meijitechno.com/ma285-1mm-divided-into-100-units), and [2.07μm Polystyrene Latex (PSL) Spheres by Ladd Research](http://www.laddresearch.com/polystyrene-latex-spheres). I have [previously documented](/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples#Setting+the+Scale) the method for calibration with the stage micrometer that i learned from @AmberWise and Andrew Maselli at Chicago State, and recently [replicated it with my OpenFlexure](/notes/mathew/07-21-2016/openflexure-microscope-high-resolution-assembly#Calibration,+Magnification,+image+defects) microscope.

But in order to check the particle sizing methods @SimonPyle has [automated](/notes/SimonPyle/05-13-2016/automating-imagej-for-particle-image-analysis) for use in [dust sensing](/wiki/passive-pm), I would like to compare particles of a known size to the measurements the analysis produces. 

###Experimental Goals
My goal is to understand whether a stage micrometer calibration is sufficient to accurately size small particles, since the stage micrometer is reusable and fairly affordable (less than $100). After analysis, I should be able to compare the average particle size of the particles (2.07μm) to the measured particles size. 

This will lay the groundwork for running (passive particle monitor samples)[https://publiclab.org/tag/passive-pm] here in support of our [development goals.](https://publiclab.org/wiki/pm-dev)

###Proposed Process
I'm going to prepare a slide with the PSL spheres, take a calibration image of the stage micrometer, and then take 40 images of the prepared slide with the microscope.  then run it through @simonpyle's ImageJ macro, followed by the [analysis spreadsheet](https://docs.google.com/spreadsheets/d/1xSVT9lxary0zZhhEqhrX3hsdIb4shbYhaOJx_RWhESg/edit#gid=0) @AmberWise and I put together. 

###Next Steps
time to do this!