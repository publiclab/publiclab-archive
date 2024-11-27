---
nid: 11723
title: NDVI cape for the beagle bone.
path: public/static/notes/gpenzo/03-25-2015/ndvi-cape-for-the-beagle-bone.md
uid: 420719
tagnames: ndvi,camera,barnstar:basic,barnstar:excessive-enthusiasm,two,beaglebone,black,response:4471,response:11448
---

# NDVI cape for the beagle bone.

###What I want to do
This is a follow up of [Accessible Vegetation Indices](http://publiclab.org/notes/gpenzo/12-11-2014/accessible-vegetation-indices)
I want to make a dual camera setup NDVI camera. All the calculations and image manipulation is in the camera system it self.

###My attempt and results
I made a cape for a beaglebone black with two cameras and an lipo battery for power source, the cameras are mono cameras. One camera has  650nm +/- 30nm band filter. And the other has a pass filter from 800nm to 1100nm. See my previous post for more camera information. Below you can find two exmaple of NDVI, where the exposure of each camera was done manually. Pictures are not 100% on focus yet.

**Camera system**

[![ndvi_cap_v1_crop.jpg](https://i.publiclab.org/system/images/photos/000/009/413/medium/ndvi_cap_v1_crop.jpg)](https://i.publiclab.org/system/images/photos/000/009/413/original/ndvi_cap_v1_crop.jpg)

**Garden red filter**

[![garden_vis.jpeg](https://i.publiclab.org/system/images/photos/000/009/406/original/garden_vis.jpeg)](https://i.publiclab.org/system/images/photos/000/009/406/original/garden_vis.jpeg)

**Garden IR filter**

[![garden_ir.jpeg](https://i.publiclab.org/system/images/photos/000/009/407/original/garden_ir.jpeg)](https://i.publiclab.org/system/images/photos/000/009/407/original/garden_ir.jpeg)

**Garden NDVI**
[![garden_ndvi.jpg](https://i.publiclab.org/system/images/photos/000/009/412/medium/garden_ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/009/412/original/garden_ndvi.jpg)

**Grass land red filter**

[![field_vis.jpg](https://i.publiclab.org/system/images/photos/000/009/409/medium/field_vis.jpg)](https://i.publiclab.org/system/images/photos/000/009/409/original/field_vis.jpg)

**Grass land IR filter**

[![filed_ir.jpg](https://i.publiclab.org/system/images/photos/000/009/410/medium/filed_ir.jpg)](https://i.publiclab.org/system/images/photos/000/009/410/original/filed_ir.jpg)

**Grass land NDVI filter**

[![field_ndvi.jpg](https://i.publiclab.org/system/images/photos/000/009/411/medium/field_ndvi.jpg)](https://i.publiclab.org/system/images/photos/000/009/411/original/field_ndvi.jpg)

**Cape needs to replace current setup.**

[![img_0472.jpg](https://i.publiclab.org/system/images/photos/000/009/497/medium/img_0472.jpg)](https://i.publiclab.org/system/images/photos/000/009/497/original/img_0472.jpg)

##Next stpes.
At this moment the exposure of the camera is set manually.
The cape has a light sensor for visible light and infrared ligth.
I still need to make an algoritm which will automaticlly set the exposure of both cameras.
Also working on the code which will do the image mapping and calclate NDVI. At this moment I'm using the Fiji plugin.
Also working on a website which wil run on the beagleboneblack. All the configuration and viewing will be done by the website.
Waiting for my eom gps modules, all images will be geotaged.
My drone is broken at this moment but hopefully next month I can make pictures from the sky.
So allot of work to do.

What do you guys think of the pictures. The camera are low resolution 752x480. As a farmer told me "I do not need mega pixels images to know if my corps are doing well" and I agree. This pictures are good enough to make a conclusion of the land.

Regards Grayson










