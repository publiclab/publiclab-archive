---
title: "Multispectral raspberry pi: first light (NDVI images)"

tagnames: 'ndvi, raspberry-pi, infragram, barnstar:basic, multipspectral'
author: khufkens
path: /notes/khufkens/05-10-2015/multispectral-raspberry-pi-first-light-ndvi-images.md
nid: 11805
uid: 438931

cids: 11641,11642,12354,15854,16503,18259

---

![](https://publiclab.org/public/system/images/photos/000/009/861/original/Screen_Shot_2015-05-10_at_17.30.58.png)

# Multispectral raspberry pi: first light (NDVI images)

by [khufkens](../../../profile/khufkens) | May 10, 2015 21:37

May 10, 2015 21:37 | Tags: [ndvi](../tag/ndvi), [raspberry-pi](../tag/raspberry-pi), [infragram](../tag/infragram), [barnstar:basic](../tag/barnstar:basic), [multipspectral](../tag/multipspectral)

----

### First light

I just wanted to share my first images from the [multispectral raspberry pi](http://publiclab.org/notes/khufkens/04-24-2015/tetrapi-a-well-characterized-multispectral-camera). I currently have two cameras running on the camera multiplexer. One standard RGB pi camera and one NoIR pi camera with a blue rosco filter.

Below you can find two NDVI images (plus the original RGB image) generated from either a combination of the bands from the two cameras or a standard infragram processing (using Ned Horning's [Fiji Plugin](https://github.com/nedhorning/PhotoMonitoringPlugin)). For reference, black is 0, white is 1.

Note that the fidelity of the NDVI image from the split camera setup (multiplexer) generates images with a far higher range in values then those solely generated using the NoIR infragram camera. Also note that with distance the signal decreases for the infragram as well, where the row of trees in the back for the dual camera setup shows a far less pronounced distance effect due to raleigh scattering of blue light (thanks cfastie for reminding me of this).

I ordered two glass filters, one bandpass filter (400-700nm) and one longpass filter (> 721nm). This should allow me to increase the contrast even further using two NoIR cameras. The reason for no using a single red bandpass filter is to allow me to retain a visible light image which is well defined (I know what filters I use - instead of guessing on the response of the cut filter of the raspberry pi camera ). This visible light image will allow me to calculate other indices as well e.g. a greenness index (Gcc) or maybe an enhanced vegetation index (EVI). 

I will try to characterize this spectral response of the colour raspberry pi camera as well as the NoIR one in the coming weeks or so, but until then I'll make due with two filters and two NoIR cameras.

### Two camera setup
![NDVI - two cameras](https://farm9.staticflickr.com/8876/17508553381_1942e956f5_z_d.jpg)

### single camera infragram
![NDVI - single camera](https://farm8.staticflickr.com/7674/17482393056_f86b0fe9b0_z_d.jpg)

colour scale
<img src="https://i.publiclab.org/system/images/photos/000/009/863/original/NDVI_VGYRM_lutA.jpg" alt="scale" style="width: 200px;"/>

### RGB
![RGB - single camera](https://farm9.staticflickr.com/8898/17492805451_b95390bd30_z_d.jpg)
