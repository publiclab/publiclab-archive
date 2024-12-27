---
title: "Fiji Photo Monitoring Plugin issues"

tagnames: 'near-infrared-camera, ndvi, imagej, infragram, infrablue, fiji, photo-monitoring-plugin'
author: RQ-05
path: /notes/RQ-05/08-01-2015/fiji-photo-monitoring-plugin-issues.md
nid: 12114
uid: 440673

---

# Fiji Photo Monitoring Plugin issues

by [RQ-05](../../../profile/RQ-05) | August 01, 2015 22:03

August 01, 2015 22:03 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [imagej](../tag/imagej), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [fiji](../tag/fiji), [photo-monitoring-plugin](../tag/photo-monitoring-plugin)

----

**Has anyone seen this error while trying to process an NDVI image.? I can't get this to work. :  (**

(Fiji Is Just) ImageJ 2.0.0-rc-15/1.49k; Java 1.6.0_24 [64-bit]; Windows 7 6.1; 45MB of 2875MB (1%)
 
java.lang.NullPointerException

	at Create_NDVI_FromImage.run(Create_NDVI_FromImage.java:202)

	at ij.IJ.runUserPlugIn(IJ.java:202)

	at ij.IJ.runPlugIn(IJ.java:166)

	at ij.Executer.runCommand(Executer.java:131)

	at ij.Executer.run(Executer.java:64)

	at java.lang.Thread.run(Thread.java:662)

