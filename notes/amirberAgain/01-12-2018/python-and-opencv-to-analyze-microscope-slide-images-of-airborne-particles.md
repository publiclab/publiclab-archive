---
title: "Python and openCV to analyze microscope slide images of airborne particles"

tagnames: 'air-quality, pm, python, microscope, passive-particle-monitors, microscopy, opencv, particle-imaging'
author: amirberAgain
path: /notes/amirberAgain/01-12-2018/python-and-opencv-to-analyze-microscope-slide-images-of-airborne-particles.md
nid: 15519
uid: 420776

cids: 18167,18169,18196,18198,18199,18227,18349,18856,18857,18859,18867,18906,18926,19053,19054,19149,19191,19222,19232,19238,19251,19258,19466,19485,19486,19487,19488,19489,19536,19539,19540,19541,19542,19543,19545,19546,19570,19571,19573,31360

---

![](https://publiclab.org/public/system/images/photos/000/023/180/original/image.png)

# Python and openCV to analyze microscope slide images of airborne particles

by [amirberAgain](../../../profile/amirberAgain) | January 12, 2018 23:21

January 12, 2018 23:21 | Tags: [air-quality](../tag/air-quality), [pm](../tag/pm), [python](../tag/python), [microscope](../tag/microscope), [passive-particle-monitors](../tag/passive-particle-monitors), [microscopy](../tag/microscopy), [opencv](../tag/opencv), [particle-imaging](../tag/particle-imaging)

----

Following the Jan 9th air quality open call I wanted to see what can be done with a microscope slide image of airborne particles. Inspired by the work started by Mathew and Stevie a couple of years ago I set out to try and get a similar process running on Python using openCV and skimage. Based on an old tutorial to detect coins I repurposed it for a single slide example. Once more example images are obtained this process could be made more robust, could also be a great candidate for DL!

---------

Below is a code walkthrough:

1\. load image, crop out the area with the scale on it.![image description](https://publiclab.org/system/images/photos/000/023/181/large/fullframe.png "fullframe.png")

2\. Use Sobel edge detection to find particles.![image description](https://publiclab.org/system/images/photos/000/023/182/large/Sobel.png "Sobel.png")

3\. Use a simple threshold to binarize the edges image.![image description](https://publiclab.org/system/images/photos/000/023/183/large/Sobel_TH.png "Sobel_TH.png")

4\. Label binarized features.![image description](https://publiclab.org/system/images/photos/000/023/188/large/Objects.png "Objects.png")

5\. Show area distribution of the particles![image description](https://publiclab.org/system/images/photos/000/023/189/large/ParticleBreakdown.png "ParticleBreakdown.png")

6\. Sort and select only features which are larger than sizeTh (4 pX).

- **NOTE: I made a lazy assumption that each pixel is 1 um, this parameter can be adapted in the code to show real scale, this is a pixel scale - NOT um!**

Largest:![image description](https://publiclab.org/system/images/photos/000/023/185/large/Largest.png "Largest.png")

Smallest:![image description](https://publiclab.org/system/images/photos/000/023/186/large/Smallest.png "Smallest.png")

6\. TBC (use fractal dimension to detect if a particle is round or jagged). find a way to avoid false detection of two close particles, and from false detection of a section of large particles being reidentified by the label function.![image description](https://publiclab.org/system/images/photos/000/023/187/large/TwoObjects.png "TwoObjects.png")