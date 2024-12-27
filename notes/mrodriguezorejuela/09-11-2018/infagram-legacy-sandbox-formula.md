---
title: "Infragram - Legacy sandbox formula"

tagnames: 'question:general, first-time-poster'
author: mrodriguezorejuela
path: /notes/mrodriguezorejuela/09-11-2018/infagram-legacy-sandbox-formula.md
nid: 17089
uid: 550339

cids: 20646,23225

---

# Infragram - Legacy sandbox formula

by [mrodriguezorejuela](../../../profile/mrodriguezorejuela) | September 11, 2018 13:03

September 11, 2018 13:03 | Tags: [question:general](../tag/question:general), [first-time-poster](../tag/first-time-poster)

----

I am trying to reproduce in Python the processing capabilities of the legacy (webGl) version of the sandbox, as they give the desired output. The processing pipeline is composed of a red channel normalisation (R/G) + NDVI preset (in color mode).

![image description](/i/26498.png "Screen_Shot_2018-09-11_at_14.56.16.png")

I managed to get a 100% identical picture after the R/G step, but the NDVI one is extremely bizarre. I tried applying the general formula and other variants for color/mono but to no avail. I also tried to follow all the steps detailed in the infragram.js from the same site but i only managed to get this:

![image description](/i/26499.png "Screen_Shot_2018-09-11_at_14.56.48.png")

The legacy sandbox gives me a more detailed, softer output:![image description](/i/26500.png "Screen_Shot_2018-09-11_at_16.00.27.png")

  
Could someone enlighten me about the formula behind that specific version of the sandbox? Thanks.