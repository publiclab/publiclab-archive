---
title: "Calculating NDVI - using PiNoIR camera and blue filter"

tagnames: 'ndvi, nir, raspberry-pi, question:question'
author: JLJ
path: /notes/JLJ/04-09-2018/calculating-ndvi-using-pinoir-camera-and-blue-filter.md
nid: 16120
uid: 530259
cids: 19338,19428,23056,23058
---

# Calculating NDVI - using PiNoIR camera and blue filter

by [JLJ](/profile/JLJ) | April 09, 2018 19:31

April 09, 2018 19:31 | Tags: [ndvi](/tag/ndvi), [nir](/tag/nir), [raspberry-pi](/tag/raspberry-pi), [question:question](/tag/question:question)

----

Hello,

  
I have been reading a lot recently about NDVI and am going to have a go at producing some images using a rpi NOiR camera with the blue filter to gather some NIR rich images. I am trying to look at plants (Lettuce) and how the NDVI changes over time as a potential quality parameter.

  
I have been searching through Public Lab's site and can't quite find the information I am seeking, so I thought I would ask the question. I know the calculation for NDVI --  (NIR - R) / (NIR + R). 

  
My question is about how i would calculate this. My current thinking is that if I take a picture with and without the filter (as the filter will only allow blue light and NIR through) and RGB image would now be NGB? and then I could simply do the calculation from those images.

  
Using the code here -- https://publiclab.org/wiki/python-webcam-codes

  
I am working out of a University in the United Kingdom