---
title: Resolving Barrel Distortion on a GoPro Hero3
tagnames: balloon-mapping, development, distortion, fisheye
author: huslage
path: /notes/huslage/05-01-2013/resolving-barrel-distortion-on-a-gopro-hero3.md
nid: 7192
uid: 716

---

![](https://publiclab.org/public/system/images/photos/000/000/149/original/G0050166.jpg)

# Resolving Barrel Distortion on a GoPro Hero3

by [huslage](../profile/huslage) May 01, 2013 20:39

May 01, 2013 20:39 | Tags: [balloon-mapping](../tag/balloon-mapping), [development](../tag/development), [distortion](../tag/distortion), [fisheye](../tag/fisheye)

----

##Details about the problem

On our recent balloon mapping expedition in Qatar, we used a GoPro Hero3 Black to capture images. This camera doesn't put any lens information into the EXIF data, so post-processing the images is quite difficult.

I've tried to use photoshop's "Lens Correction" filter to remove the distortion:

![Screenshot_5_1_13_4_25_PM-2.png](https://i.publiclab.org/system/images/photos/000/000/150/medium/Screenshot_5_1_13_4_25_PM-2.png)

but this produces sub-par results:

![Before-after.jpg](https://i.publiclab.org/system/images/photos/000/000/151/medium/Before-after.jpg)

And even after doing this in Photoshop, creating the [map](https://mapknitter.org/map/view/al-dhakira-mangroves) proves labor intensive at best. I'd like to hear any ideas about how to combat this problem and how to correct things properly.
