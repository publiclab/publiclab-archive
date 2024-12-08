---
title: Mapir Survey3 RGN image processing pipeline
tagnames: ndvi, question:question, rgn, mapir
author: mrodriguezorejuela
path: /notes/mrodriguezorejuela/09-28-2018/mapir-survey3-rgn-image-processing-pipeline.md
nid: 17185
uid: 550339

---

# Mapir Survey3 RGN image processing pipeline

by [mrodriguezorejuela](../profile/mrodriguezorejuela) September 28, 2018 13:45

September 28, 2018 13:45 | Tags: [ndvi](../tag/ndvi), [question:question](../tag/question:question), [rgn](../tag/rgn), [mapir](../tag/mapir)

Hi there. I need some input regarding how to process some images from our Mapir Survey3 camera in some very specific conditions. 

  
General info: the camera collects red, green and nir channels and is set in an incubation chamber pointing at the plants. The light in the chamber is very stable, intensity wise, but it's 'redder' than the usual fluorescent. 

  
Now, if I wanted to calculate the NDVI for a given picture, i would need to calculate (NIR - VIS) / (NIR + VIS) but in this case i don't have visible. I've seen that some people use the red channel as visible since there's the notion some nir also gets into the green channel.

  
Given these parameters, would you consider calculating the NDVI from the red and nir channel okay? I am concerned regarding having a redder light input, as the red channel pixel intensity seems very high compared to the blue one (which is very sparse). Should I be concerned about not capturing enough NIR? 

  
Thanks in advance, hope to get some discussion started here!