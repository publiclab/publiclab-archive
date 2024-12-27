---
title: "Fusing 3D Modelling with NDVI in Python + VisualSFM + Meshlab"

tagnames: '3d, ndvi, photography, infrared, photogrammetry, software, near-infrared, science, garden, plants, camera, vegetation, environment, coding, eu, python, physics, imaging, model, engineering, virtual, first-time-poster, zoom:4, lat:53.349805, lon:-6.260309, modelling, visualsfm, meshlab, augmented, reality, cacti, succulents'
author: ektopyrotic
path: /notes/ektopyrotic/06-10-2020/fusing-3d-modelling-with-ndvi-in-python-visualsfm-meshlab.md
nid: 23807
uid: 699450
cids: 26995,26996,26998,31137
---

![](https://publiclab.org/public/system/images/photos/000/039/722/original/NDVIandNIR3DModelVideoTitleYoutube.png)

# Fusing 3D Modelling with NDVI in Python + VisualSFM + Meshlab

by [ektopyrotic](/profile/ektopyrotic) | June 10, 2020 00:21

June 10, 2020 00:21 | Tags: [3d](/tag/3d), [ndvi](/tag/ndvi), [photography](/tag/photography), [infrared](/tag/infrared), [photogrammetry](/tag/photogrammetry), [software](/tag/software), [near-infrared](/tag/near-infrared), [science](/tag/science), [garden](/tag/garden), [plants](/tag/plants), [camera](/tag/camera), [vegetation](/tag/vegetation), [environment](/tag/environment), [coding](/tag/coding), [eu](/tag/eu), [python](/tag/python), [physics](/tag/physics), [imaging](/tag/imaging), [model](/tag/model), [engineering](/tag/engineering), [virtual](/tag/virtual), [first-time-poster](/tag/first-time-poster), [zoom:4](/tag/zoom:4), [lat:53.349805](/tag/lat:53.349805), [lon:-6.260309](/tag/lon:-6.260309), [modelling](/tag/modelling), [visualsfm](/tag/visualsfm), [meshlab](/tag/meshlab), [augmented](/tag/augmented), [reality](/tag/reality), [cacti](/tag/cacti), [succulents](/tag/succulents)

----

Video Showcasing Use: [https://www.youtube.com/watch?v=GauAYvcdVPw](https://www.youtube.com/watch?v=GauAYvcdVPw)

  
Here is an exercise in 3D image processing I performed using Near-infrared images processed into colormap NDVI, allowing me to create a 3D model of plants for use in 3D plant monitoring/health classification. 
This was created using (1) custom Python code to process the NIR reflectance images into a graded NDVI temperature scale images and using a combination of (2) VisualSFM for point cloud and polygon generation and (3) Meshlab to tidy up and display the polygon file. An RGB reconstruction was also performed on a collection of standard images (captured using a phone camera) of the collection of plants scanned for comparison. 
The NDVI 3D model was not a perfect reconstruction however it was cleaner in general than the RGB model and considerably faster to process in VisualSFM after the Python code had processed the input RAW (DNG format) images. 
It is relatively easy to see the distinction between the healthy vegetation and the background environment, the wooden decking, the plants were placed upon in the NDVI 3D model. This has lead me to think that this technique could be further developed in machine vision of plants in an environment in 3D, especially if the 3D model can be converted into a movie using a program like CMPMVS which could then be plugged into a platform such as PyTorch or Tensorflow for use in plant health classification in 3D.
In any case this was an interesting way to demonstrate the use of NDVI and NIR imaging as applied in novel applications in the field of 3D photogrammetry and modelling with the intent of creating datasets for future explorations in machine vision research.

  
Code Available Here:https://github.com/MuonRay/PythonNDVI/blob/master/ndvibatch.py