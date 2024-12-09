---
title: 'Infragrammer WebGL HSV vs Standard equations'
tagnames: near-infrared-camera, ndvi, infrared, infragram, infragram-sandbox, question:general
author: plam
path: /notes/plam/03-31-2017/infragrammer-webgl-hsv-vs-standard-equations.md
nid: 14069
uid: 504901

---

![](https://publiclab.org/public/system/images/photos/000/019/973/original/Comparison.jpg)

# Infragrammer WebGL HSV vs Standard equations

by [plam](../profile/plam) March 31, 2017 02:32

March 31, 2017 02:32 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [infragram-sandbox](../tag/infragram-sandbox), [question:general](../tag/question:general)

----

What are the algorithm differences in the NDVI HSV image analysis between Standard and WebGL?

Hi all,

I'm using a PublicLabs mobius point and shoot with appropriate custom white balance, and running the resultant image through Infragram. There appears to be significant improvements between the between HSV outputs of the standard Infragram and WebGL that isn't reflected by the band calc -(R-B)/(R+B)

The arrow on the images points to a black steel post which appears to be better calibrated in the WebGL version. If I run the image through an NDVI calc on an external GIS package it gives me the same result as the first so it would appear this is more than a Color LUT variation. 

Without reading through the web source code I was wondering if there is any documentation on the algorithms used to generate the NDVI from both.

Appreciate any assistance here.

Phil



