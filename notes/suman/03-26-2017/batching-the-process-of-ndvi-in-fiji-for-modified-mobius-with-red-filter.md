---
title: Batching the process of NDVI in Fiji for modified mobius with red filter
tagnames: near-infrared-camera, ndvi, imagej, infragram, infrablue, fiji, photo-monitoring-plugin, answered, question:general
author: suman
path: /notes/suman/03-26-2017/batching-the-process-of-ndvi-in-fiji-for-modified-mobius-with-red-filter.md
nid: 14061
uid: 497769

---

# Batching the process of NDVI in Fiji for modified mobius with red filter

by [suman](../profile/suman) March 26, 2017 12:15

March 26, 2017 12:15 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [imagej](../tag/imagej), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [fiji](../tag/fiji), [photo-monitoring-plugin](../tag/photo-monitoring-plugin), [answered](../tag/answered), [question:general](../tag/question:general)

----

Dear All,
             Has anyone created a macro.txt file for batching the process of creating NDVI using Fiji/ImageJ. I have a macro file from Frank Aldious for batching the process but it is targetted for InfraBlue images, but i have Red Filter so this would not work for my case.

The macro is listed below. I want to modify it to suit my Modified Infrared Camera with Red Filter.

 adir = getDirectory("");
setBatchMode(true); run("Image Sequence...", "open=[adir] file=IMA sort use"); mydir = getDirectory(""); run("Split Channels"); run("infraBlueNDVI"); run("Calibration Bar...", "location=[Upper Right] fill=None label=Black number=5 decimal=0 font=12 zoom=2 overlay"); run("Image Sequence... ", "format=JPEG save=[mydir]")

run("Close All");

setBatchMode(false);
