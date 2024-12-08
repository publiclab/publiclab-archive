---
title: Orange is the new red
tagnames: ndvi, vermont, calibration, infrared, infragram, wratten25a, super-red, wratten15, response:9717, upgrade:multispectral-imaging
author: cfastie
path: /notes/cfastie/01-16-2015/orange-is-the-new-red.md
nid: 11527
uid: 554

---

# Orange is the new red

by [cfastie](../profile/cfastie) January 16, 2015 21:57

January 16, 2015 21:57 | Tags: [ndvi](../tag/ndvi), [vermont](../tag/vermont), [calibration](../tag/calibration), [infrared](../tag/infrared), [infragram](../tag/infragram), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [wratten15](../tag/wratten15), [response:9717](../tag/response:9717), [upgrade:multispectral-imaging](../tag/upgrade:multispectral-imaging)

A couple of weeks ago Joe Sommer from Penn State [asked about using an orange filter instead of a red filter](https://groups.google.com/forum/#!topic/plots-infrared/v8hxKDse190) for single camera infrared plant health photos. He thought it would preserve more information about green light which could be useful for image interpretation. This sounded like a clever idea, so I bought a Wratten15 gelatin filter on ebay and taped a piece in front of the lens on my full spectrum PowerShot A810.  The filter is really more yellow than orange.  
.  
[![Wratten15_25.png](https://i.publiclab.org/system/images/photos/000/008/618/medium/Wratten15_25.png)](https://i.publiclab.org/system/images/photos/000/008/618/original/Wratten15_25.png)  
*Density curves for Wratten 15 (blue line) and 25A (black line) filters. High numbers for density (y axis) mean the filter blocks those wavelengths. Both filters block all blue light and pass all red light. Only the Wratten 15 passes green light.*  
.  
The Wratten 15 and 25A filters both work as "super-red" filters because they both do two things: they block all blue light and pass all red and near infrared light (NIR). This allows the camera's blue channel to capture mostly NIR light and allows the red channel to capture a mix of red and NIR. The red and blue channels are used to compute NDVI. The difference between the two filters is that the Wratten 15 passes green and Wratten 25A does not. So photos taken with the Wratten 25A filter have no information about green -- the camera's green channel captures mostly NIR light. Green information is not important for NDVI, but it can be used for other visualizations of vegetation patterns. The classic false-color infrared (CIR) images which display NIR as red also display green information as blue. So you can't make very good CIR images with a Wratten 25A filter but CIR from a Wratten 15 camera could be more useful.  
.  
[![IMG_0028_2k.jpg](https://i.publiclab.org/system/images/photos/000/008/620/medium/IMG_0028_2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/620/original/IMG_0028_2k.jpg)  
*It's not a very good time of year to take plant health photos, but these white pines should provide some idea of how the filters are working.*  
.  
[![PineBank6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/008/619/large/PineBank6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/619/original/PineBank6pan2k.jpg)  
*White pine trees captured by infrared converted Canon PowerShots with Wratten 25A filter (top row) or Wratten 15 filter (bottom row). False color infrared (NRG) images are made by swapping color channels. NDVI images highlight the difference between the red and infrared channels.*  
.  
I did the same custom white balance on both cameras by pointing them at a piece of bright red origami paper in direct sunlight. I often tweak levels or color balance when I produce CIR or NDVI images from single camera photos, but I did not do that here to highlight the differences between the two filters. 

The addition of actual green light in the Wratten 15 photos makes a big difference in the photos captured by the camera -- they look very green compared to the Wratten 25A photo. The CIR images (NRG) are made by swapping color channels in Photoshop. Instead of R, G, and B data being displayed as R, G, B respectively, the CIR images from both cameras display NIR, R, and G data as R, G, B respectively. So the greenish sky and snow of the Wratten 15 photo become very blue in the CIR image because green data is displayed as blue. The sky is dark in the Wratten 25A images because the atmosphere does not scatter much red or NIR back to us, but it scatters more green so the Wratten 15 images have a brighter sky. The pine trees are less pink in the Wratten 15 CIR image and slightly closer to the reddish color of vegetation in legacy CIR images. 

The NDVI images look very similar.  
.  
[![IMG_0032_2k.jpg](https://i.publiclab.org/system/images/photos/000/008/623/medium/IMG_0032_2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/623/original/IMG_0032_2k.jpg)  
*This scene was also photographed with two PowerShots with Wratten 15 or Wratten 25A filters (see below).*  
.  
[![PineRoad6pan3k.jpg](https://i.publiclab.org/system/images/photos/000/008/621/large/PineRoad6pan3k.jpg)](https://i.publiclab.org/system/images/photos/000/008/621/original/PineRoad6pan3k.jpg)  
*White pine trees captured by infrared converted Canon PowerShots with Wratten 25A filter (top row) or Wratten 15 filter (bottom row). False color infrared (NRG) images are made by swapping color channels. NDVI images highlight the difference between the red and infrared channels.*  
.  
[![PineYard6pan3k.jpg](https://i.publiclab.org/system/images/photos/000/008/622/large/PineYard6pan3k.jpg)](https://i.publiclab.org/system/images/photos/000/008/622/original/PineYard6pan3k.jpg)  
*White pine trees captured by infrared converted Canon PowerShots with Wratten 25A filter (top row) or Wratten 15 filter (bottom row). False color infrared (NRG) images are made by swapping color channels. NDVI images highlight the difference between the red and infrared channels.*  
.  
All three of the composite figures above show pretty much the same results. It appears that both filters will produce very similar NDVI images, but distinct CIR images. It is not obvious from these comparisons which CIR images are more useful or have more information about vegetation. We know *a priori* that the Wratten 15 images have more information because green data is added. It is a good assumption that those images will allow more reliable interpretation of vegetation patterns, but I don't know how much more useful they will be. I look forward to seeing some Wratten 15 aerial CIR images when lots of plants have leaves again.  

In order to capture the green information, the Wratten 15 filter has to allow some green light to be captured in the blue channel (the camera's channels have a lot of overlap). The blue channel is used as a source of NIR information, so that source is more contaminated with non-NIR data in Wratten 15 images. The Wratten 25A filter blocks everything at the blue end of the spectrum so mostly NIR gets captured in the blue channel. I don't know how much difference this will make in the interpretability of images from these filters. If your goal is NDVI, the Wratten 25A is probably a better choice because the blue channel will be purer NIR. If you are interested in CIR images, the Wratten 15 could be the better choice because green data is captured.  
.  
[![TetracamADC.JPG](https://i.publiclab.org/system/images/photos/000/008/624/medium/TetracamADC.JPG)](https://i.publiclab.org/system/images/photos/000/008/624/original/TetracamADC.JPG)  
*Figure from the user manual of a Tetracam ADC camera. The "blue blocking filter" is probably similar to the Wratten 15.*  
.  
The Tetracam ADC camera is a commercial product for plant health analysis that uses a filter very similar to the Wratten 15. The photos from that camera might be very similar to the Wratten 15 photos above. Tetracam cameras are sold with software that does some serious post processing of the photos to make NDVI and other images. I don't know how the photos are processed, which is evident from my discussion [here](https://groups.google.com/forum/#!topic/plots-infrared/v8hxKDse190). That discussion of Tetracam cameras has some images attached which show the spectral response of some Rosco filters that could be used instead of Wratten 15. Wratten 12 filters are also similar and could be a good choice. You can buy a small piece of Wratten 15 gelatin filter [here](http://kaptery.com/product/wratten-15-filter).
