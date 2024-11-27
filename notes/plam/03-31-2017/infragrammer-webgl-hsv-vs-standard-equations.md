---
nid: 14069
title: Infragrammer WebGL HSV vs Standard equations
path: public/static/notes/plam/03-31-2017/infragrammer-webgl-hsv-vs-standard-equations.md
uid: 504901
tagnames: near-infrared-camera,ndvi,infrared,infragram,infragram-sandbox,question:general
---

# Infragrammer WebGL HSV vs Standard equations

What are the algorithm differences in the NDVI HSV image analysis between Standard and WebGL?

Hi all,

I'm using a PublicLabs mobius point and shoot with appropriate custom white balance, and running the resultant image through Infragram. There appears to be significant improvements between the between HSV outputs of the standard Infragram and WebGL that isn't reflected by the band calc -(R-B)/(R+B)

The arrow on the images points to a black steel post which appears to be better calibrated in the WebGL version. If I run the image through an NDVI calc on an external GIS package it gives me the same result as the first so it would appear this is more than a Color LUT variation. 

Without reading through the web source code I was wondering if there is any documentation on the algorithms used to generate the NDVI from both.

Appreciate any assistance here.

Phil



