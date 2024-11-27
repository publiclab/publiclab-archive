---
nid: 17281
title: Cheap multispectral camera 
path: public/static/notes/maykef/10-12-2018/cheap-multispectral-camera.md
uid: 481511
tagnames: near-infrared-camera,remote-sensing,ndvi,wetlands,agriculture,software,near-infrared,soil,infragram,tool,19,question:general,method,agricultural,fertilizer,remote-
---

# Cheap multispectral camera 

Hi, 

A couple of years ago I developed a multispectral camera based on the compute module of the Raspberry Pi. Hardware wise, the camera is pretty much done, and I'm planning to launch a campaign in Kickstarter to produce the final product. 

  
Now, there is some work to be done in terms of data processing. So far, the camera captures images with the raw bayered data attached in a numpy array, which is demosaiced and then separated in 4 different bands and saved using opencv as a tiff image. 

  
As expected, the raw, bayered, data is quite dark and has twice as many green pixels due to the raw format being rggb. I would like to know if there is someone who would like to collaborate improving the processing pipeline. 

  
Below a test photograph I took sometime ago. I will follow up with some better pictures once I receive new lenses and NIR filters.

  
Regards, 

  
Mayke

![image description](/i/26909.jpg "FVE7SVCIPWWSSJU.LARGE.jpg")