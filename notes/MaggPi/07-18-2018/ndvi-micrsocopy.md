---
title: 'NDVI microscopy'
tagnames: ndvi, raspberry-pi, barnstar:basic, microscopy, gsoc-2018, image-sequencer
author: MaggPi
path: /notes/MaggPi/07-18-2018/ndvi-micrsocopy.md
nid: 16741
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/025/742/original/ndvi.png)

# NDVI microscopy

by [MaggPi](../profile/MaggPi) July 18, 2018 09:20

July 18, 2018 09:20 | Tags: [ndvi](../tag/ndvi), [raspberry-pi](../tag/raspberry-pi), [barnstar:basic](../tag/barnstar:basic), [microscopy](../tag/microscopy), [gsoc-2018](../tag/gsoc-2018), [image-sequencer](../tag/image-sequencer)

----

My first use of  image-sequencer  https://publiclab.github.io/image-sequencer/examples/#steps=    so I am not sure what to expect..
   
Image examples are microscopic images of plant cells.  IR image was collected with a 850nm LED.  Color image with a white light LED.   I know NDVI is designed for remote sensing applications so I am not sure if this is worthwhile?  Also not sure if microscope slide and cover glass  changes image spectral properties? 

First image is a Pine Leaf example.  Is that the right image sequence for NDVI analysis?

[![Slide1.JPG](/i/25740)](/i/25740)


Second image is of a leaf and has a flat field image problem.  Can you add flat field correction to Image sequencer?    I believe the supplied version of the Raspberry Pi camera has it’s own flat field correction and we need to provide  an alternate correction when the Pi camera is used with a different (objective) lens.  
[![Slide2.JPG](/i/25741)](/i/25741)

Image sequencer works great (amazingly easy to use) but I am a little nervous as to it how it actually works.  My experience with photoshop and opencv  is that  processing steps often depend  on many decisions that depend on the situation.

@warren, @icarito, @amirberAgain, @bronwen @tech4gt


