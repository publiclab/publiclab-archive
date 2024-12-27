---
title: "Cheap multispectral camera "

tagnames: 'near-infrared-camera, remote-sensing, ndvi, wetlands, agriculture, software, near-infrared, soil, infragram, tool, 19, question:general, method, agricultural, fertilizer, remote-'
author: maykef
path: /notes/maykef/10-12-2018/cheap-multispectral-camera.md
nid: 17281
uid: 481511

cids: 20897,20900,20943,20945,20948,20949,21085,21087,21088,21090,21091,21092,21096,21099,21169,21170

---

# Cheap multispectral camera 

by [maykef](../../../profile/maykef) | October 12, 2018 09:54

October 12, 2018 09:54 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [remote-sensing](../tag/remote-sensing), [ndvi](../tag/ndvi), [wetlands](../tag/wetlands), [agriculture](../tag/agriculture), [software](../tag/software), [near-infrared](../tag/near-infrared), [soil](../tag/soil), [infragram](../tag/infragram), [tool](../tag/tool), [19](../tag/19), [question:general](../tag/question:general), [method](../tag/method), [agricultural](../tag/agricultural), [fertilizer](../tag/fertilizer), [remote-](../tag/remote-)

----

Hi, 

A couple of years ago I developed a multispectral camera based on the compute module of the Raspberry Pi. Hardware wise, the camera is pretty much done, and I'm planning to launch a campaign in Kickstarter to produce the final product. 

  
Now, there is some work to be done in terms of data processing. So far, the camera captures images with the raw bayered data attached in a numpy array, which is demosaiced and then separated in 4 different bands and saved using opencv as a tiff image. 

  
As expected, the raw, bayered, data is quite dark and has twice as many green pixels due to the raw format being rggb. I would like to know if there is someone who would like to collaborate improving the processing pipeline. 

  
Below a test photograph I took sometime ago. I will follow up with some better pictures once I receive new lenses and NIR filters.

  
Regards, 

  
Mayke

![image description](/i/26909.jpg "FVE7SVCIPWWSSJU.LARGE.jpg")