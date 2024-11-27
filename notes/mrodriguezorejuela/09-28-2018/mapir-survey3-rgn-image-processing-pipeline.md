---
nid: 17185
title: Mapir Survey3 RGN image processing pipeline
path: public/static/notes/mrodriguezorejuela/09-28-2018/mapir-survey3-rgn-image-processing-pipeline.md
uid: 550339
tagnames: ndvi,question:question,rgn,mapir
---

# Mapir Survey3 RGN image processing pipeline

Hi there. I need some input regarding how to process some images from our Mapir Survey3 camera in some very specific conditions. 

  
General info: the camera collects red, green and nir channels and is set in an incubation chamber pointing at the plants. The light in the chamber is very stable, intensity wise, but it's 'redder' than the usual fluorescent. 

  
Now, if I wanted to calculate the NDVI for a given picture, i would need to calculate (NIR - VIS) / (NIR + VIS) but in this case i don't have visible. I've seen that some people use the red channel as visible since there's the notion some nir also gets into the green channel.

  
Given these parameters, would you consider calculating the NDVI from the red and nir channel okay? I am concerned regarding having a redder light input, as the red channel pixel intensity seems very high compared to the blue one (which is very sparse). Should I be concerned about not capturing enough NIR? 

  
Thanks in advance, hope to get some discussion started here!