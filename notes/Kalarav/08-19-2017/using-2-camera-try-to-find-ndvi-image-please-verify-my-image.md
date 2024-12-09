---
title: 'Using 2 camera try to find NDVI Image. Please verify my image .'
tagnames: ndvi, nera-infrared
author: Kalarav
path: /notes/Kalarav/08-19-2017/using-2-camera-try-to-find-ndvi-image-please-verify-my-image.md
nid: 14769
uid: 512890

---

# Using 2 camera try to find NDVI Image. Please verify my image .

by [Kalarav](../profile/Kalarav) August 19, 2017 07:14

August 19, 2017 07:14 | Tags: [ndvi](../tag/ndvi), [nera-infrared](../tag/nera-infrared)

----

Hello to all, 
I am An Embedded enthusiast  right now I’m working on to find NDVI images and it's index.
I have already purchased Infagram plant camera and lens to explore it.
I'm Using OV5642 camera to capture images using different lenses so it is working fine. I have purchased different lenses from http://midopt.com/ Which is list is as per below.
1. RGB Generic camera lens
2. 650  (Red Interface Bandpass)
3. 850  (Near - IR Bandpass)
4. 660/850  (Red + NIR)
5. 475/550/850  (Blue+green+NIR)
6. 550/660/850  (Green+Red+NIR)

So , As per standard method I'm using 2 different Camera for Image Capture 1.RGB  & 2.NIR at same time, using this RGB camera I can easily extract the Red Channel Image it is possible using 650(Red Interface Bandpass lens) also using NIR I’m able take images in Good Sunlight.

I'm Using this standard equation for evaluating using Python + Opencv.
**(nir_img-red_img)/(nir_img+red_img)
**
So I’m Getting this kind of image as NDVI Output. Please find the below hyper linked text for images.

[RGB Input Image](http://imgur.com/M1jjF7O)
[NIR Input Image](http://imgur.com/ksdvN3g)
[NDVI Output Image](http://imgur.com/ScKCEU2)

Due to different camera it is not aligned same together. so , I need to take some images from internet for reference purpose to check Python code is working or not so , I have taken another two images from internet and evaluate it using my code which as per below.

[Reference RGB input image](http://imgur.com/I3JkXOV)
[Reference NIR input image](http://imgur.com/hyaLfQT)
[Reference Image NDVI output.](http://imgur.com/61kCrlc)

Please verify my Input Images and NDVI output Image it is Perfect or Not. It is Two camera solution.
Here is the link for 
[camera set-up Image](http://imgur.com/KayI9vQ)

Is it possible to Find perfect NDVI using Single camera solution (Due to alignment error of two camera) using below lens.?
1. 475/550/850  (Blue+green+NIR)
2. 550/660/850  (Green+Red+NIR)

Thanks in Advance.

Best Regards 
_Kalarav_
