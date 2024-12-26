---
title: "LeafKam"\ntagnames: 'near-infrared-camera, infrared-camera, infragram, development'
author: cfastie
path: /wiki/leafkam.md
nid: 6791
uid: 554

---

# LeafKam

by [cfastie](../profile/cfastie)

April 12, 2013 02:54 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared-camera](../tag/infrared-camera), [infragram](../tag/infragram), [development](../tag/development)

----

<strong>Five alternative models for an infrared plant health camera.</strong>

1. 1) One camera with a filter switcher which switches between IR block and IR pass filters
2. 2) Two cameras, one unmodified and one with an IR pass filter
3. 3) One camera with a "superblue" (Schott BG3) filter.
4. 4) Two cameras, one unmodified and one with a "superblue" filter.
5. 5) One camera with a filter switcher which switches between a normal IR block filter and a "superblue" filter. 


|Feature | ..1..|..2..|..3..|..4..|..5..
|:----------------------------------------------------------------|:--------------------:|:--------------------:|:-------------------:|:-----------------:|:------------------:
|number of cameras|1|2|1|2|1
|filter switcher|1|0|0|0|1
|normal RGB color output|Y|Y|N|Y|Y
|optics modified for RGB image?|Y|N|na|N|Y
|NRG output|Y|Y|N|Y|Y
|NDVI output|Y|Y|Y|Y|Y
|shutter sync for NDVI|N|Y|N|N|N
|shutter sync for NRG|N|Y|na|Y|N
|filter switcher sync for NDVI|Y|N|N|N|N
|filter switcher sync for NRG|Y|N|N|N|Y
|rectification for NDVI|Y|Y|N|N|N
|rectification for NRG|Y|Y|na|Y|Y
|parallax for NDVI|N|Y|N|N|N
|parallax for NRG|N|Y|na|Y|N
|RGB/NIR synchrony possible?|N|Y|Y|Y|N
|buy superblue filter?|N|N|Y|Y|Y


**Notes:**

1._Shutter sync:_ Is it necessary to synchronize the shutters of two cameras to make multispectral images when the cameras or subject are moving?

2._Filter switcher sync:_ Is it necessary to synchronize the camera shutter with the switching of filters?

3._Rectification:_ Is it necessary to rectify (align) data from two different photos to make multispectral images?

4._Parallax:_ Is rectifying two images subject to parallax errors when subjects in the scene are both near and far from the camera?

5._RGB/NIR synchrony:_ Is it possible to capture all the data needed for multispectral images simultaneously (which is needed when the camera[s] or subject are not stationary)?