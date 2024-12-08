---
title: Accessible Vegetation Indices.
tagnames: ndvi, nir, cameras, bone, two, beagle
author: gpenzo
path: /notes/gpenzo/12-11-2014/accessible-vegetation-indices.md
nid: 11448
uid: 420719

---

# Accessible Vegetation Indices.

by [gpenzo](../profile/gpenzo) December 11, 2014 12:45

December 11, 2014 12:45 | Tags: [ndvi](../tag/ndvi), [nir](../tag/nir), [cameras](../tag/cameras), [bone](../tag/bone), [two](../tag/two), [beagle](../tag/beagle)

###What I want to do
I want to get Vegetation Indices, like NDVI, WDVI, NDRE ,EVI
I want to make a cape for a beaglebone black which will hold 2 or more cmos cameras to capture diffrent wave lenght for each camera.

I have been seaching for days for a cheap camera that has good response from 600nm till 800 nm.
And I found it.

**Camerea wavelenght response**
[![wave_length_response.png](https://i.publiclab.org/system/images/photos/000/008/332/medium/wave_length_response.png)](https://i.publiclab.org/system/images/photos/000/008/332/original/wave_length_response.png)

**Camerea monochrome wavelenght response**

[![wave_length_mono_response.png](https://i.publiclab.org/system/images/photos/000/008/337/medium/wave_length_mono_response.png)](https://i.publiclab.org/system/images/photos/000/008/337/original/wave_length_mono_response.png)






Resolution is not that high 752*480. But I want to use it for earial imaging. 
I do not need 12MP images of a piece of farmland too get an idea how the land is doing this is good enough. Can always make allot of pictures and stich them together.
Looking at the wavelenght response two of these cameras will make very good NDVI, WDVI images. 

I also want to try NDRE and EVI. But these indices require a smaller band than NDVI.
This can be a problem becuase less light will get to the sensor.
Looking at the spectral response you can see that both blue and red have the same response at 850nm.
I presume that all the pixel have the same respons only they are covered with color filters.
I have two solutions.
1. Use monochrome on each camera
2. Remove the Color filter array from these cameras like the astro guys and see If I can use all the pixels for 600nm too 850nm.

[CFA removal](http://petapixel.com/2013/08/04/scratching-the-color-filter-array-layer-off-a-dslr-sensor-for-sharper-bw-photos/)

###My attempt and results
Both cameras are working. But is looks like I have some fixed patern noise. After long testing and measuring I think that these sensors are not good or the camera pc has not enough of digitaal and analog power filtering.

**Visible light Only IR cut filter. I should use a red band filter but that is for later.**

[![vis_Clipped.jpg](https://i.publiclab.org/system/images/photos/000/008/633/medium/vis_Clipped.jpg)](https://i.publiclab.org/system/images/photos/000/008/633/original/vis_Clipped.jpg)

**IR cut filter removed and used 720 IR filter.**

[![ir.JPG](https://i.publiclab.org/system/images/photos/000/008/634/medium/ir.JPG)](https://i.publiclab.org/system/images/photos/000/008/634/original/ir.JPG)

**NDVI**

[![vis_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/008/635/medium/vis_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/008/635/original/vis_NDVI_Color.jpg)

###Questions and next steps
Try the new sensors to see If I can remove the interference, If everything work as it should, I will order my pcb for the cape. I want the cameras to have a cs mount so diffrent lenses can be tried and better qality. All kind of cs mount lenses can be bought online for cheap.
And I want to make a web interface on the beaglebone for configuring this.

###Why I'm interested
If have made NDVI pictures with to canon cameras (search my notes).
I do not find it user friendly, to much steps that can go wrong. I want the image processing to be automatically, overlay on google maps etc.
This needs to be more accessible. Especially farmers that I know do not want to mess arround with hardware it just needs to work. 
I want to make something more lighter for my drone. Need to get 20-25 minutes fligth.

Regards 
Grayson Penzo

[![Test1.JPG](https://i.publiclab.org/system/images/photos/000/008/333/medium/Test1.JPG)](https://i.publiclab.org/system/images/photos/000/008/333/original/Test1.JPG)

**First PCB design without lens**

[![pcb_v1.JPG](https://i.publiclab.org/system/images/photos/000/008/993/medium/pcb_v1.JPG)](https://i.publiclab.org/system/images/photos/000/008/993/original/pcb_v1.JPG)


