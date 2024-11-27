---
nid: 12114
title: Fiji Photo Monitoring Plugin issues
path: public/static/notes/RQ-05/08-01-2015/fiji-photo-monitoring-plugin-issues.md
uid: 440673
tagnames: near-infrared-camera,ndvi,imagej,infragram,infrablue,fiji,photo-monitoring-plugin
---

# Fiji Photo Monitoring Plugin issues

**Has anyone seen this error while trying to process an NDVI image.? I can't get this to work. :  (**

(Fiji Is Just) ImageJ 2.0.0-rc-15/1.49k; Java 1.6.0_24 [64-bit]; Windows 7 6.1; 45MB of 2875MB (1%)
 
java.lang.NullPointerException

	at Create_NDVI_FromImage.run(Create_NDVI_FromImage.java:202)

	at ij.IJ.runUserPlugIn(IJ.java:202)

	at ij.IJ.runPlugIn(IJ.java:166)

	at ij.Executer.runCommand(Executer.java:131)

	at ij.Executer.run(Executer.java:64)

	at java.lang.Thread.run(Thread.java:662)

