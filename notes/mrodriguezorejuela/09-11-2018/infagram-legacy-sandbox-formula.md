---
nid: 17089
title: Infragram - Legacy sandbox formula
path: public/static/notes/mrodriguezorejuela/09-11-2018/infagram-legacy-sandbox-formula.md
uid: 550339
tagnames: question:general,first-time-poster
---

# Infragram - Legacy sandbox formula

I am trying to reproduce in Python the processing capabilities of the legacy (webGl) version of the sandbox, as they give the desired output. The processing pipeline is composed of a red channel normalisation (R/G) + NDVI preset (in color mode).

![image description](/i/26498.png "Screen_Shot_2018-09-11_at_14.56.16.png")

I managed to get a 100% identical picture after the R/G step, but the NDVI one is extremely bizarre. I tried applying the general formula and other variants for color/mono but to no avail. I also tried to follow all the steps detailed in the infragram.js from the same site but i only managed to get this:

![image description](/i/26499.png "Screen_Shot_2018-09-11_at_14.56.48.png")

The legacy sandbox gives me a more detailed, softer output:![image description](/i/26500.png "Screen_Shot_2018-09-11_at_16.00.27.png")

  
Could someone enlighten me about the formula behind that specific version of the sandbox? Thanks.