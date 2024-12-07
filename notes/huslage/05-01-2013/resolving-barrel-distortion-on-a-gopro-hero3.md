---
nid: 7192
title: Resolving Barrel Distortion on a GoPro Hero3
path: public/static/notes/huslage/05-01-2013/resolving-barrel-distortion-on-a-gopro-hero3.md
uid: 716
tagnames: balloon-mapping,development,distortion,fisheye
---

# Resolving Barrel Distortion on a GoPro Hero3

##Details about the problem

On our recent balloon mapping expedition in Qatar, we used a GoPro Hero3 Black to capture images. This camera doesn't put any lens information into the EXIF data, so post-processing the images is quite difficult.

I've tried to use photoshop's "Lens Correction" filter to remove the distortion:

![Screenshot_5_1_13_4_25_PM-2.png](https://i.publiclab.org/system/images/photos/000/000/150/medium/Screenshot_5_1_13_4_25_PM-2.png)

but this produces sub-par results:

![Before-after.jpg](https://i.publiclab.org/system/images/photos/000/000/151/medium/Before-after.jpg)

And even after doing this in Photoshop, creating the [map](https://mapknitter.org/map/view/al-dhakira-mangroves) proves labor intensive at best. I'd like to hear any ideas about how to combat this problem and how to correct things properly.
