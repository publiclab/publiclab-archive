---
title: "Computer vision  microscope observations of Elodea plant cells"

tagnames: 'raspberry-pi, barnstar:basic, microscope, computer-vision, gsoc-2018, color-filter'
author: MaggPi
path: /notes/MaggPi/08-14-2018/computer-vision-observations-of-elodea-plant-cells.md
nid: 16922
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/026/191/original/elodea_post_shot.JPG)

# Computer vision  microscope observations of Elodea plant cells

by [MaggPi](../../../profile/MaggPi) | August 14, 2018 03:02

August 14, 2018 03:02 | Tags: [raspberry-pi](../tag/raspberry-pi), [barnstar:basic](../tag/barnstar:basic), [microscope](../tag/microscope), [computer-vision](../tag/computer-vision), [gsoc-2018](../tag/gsoc-2018), [color-filter](../tag/color-filter)

----

   	
**Introduction: **
This note describes a general computer vision approach for microscopic real time image analysis.  Methods used in prior Public Lab research notes such as [manual gain control](https://publiclab.org/notes/MaggPi/08-09-2018/raspberry-pi-manual-camera-control) and [computer vision color detection](https://publiclab.org/notes/MaggPi/07-09-2018/computer-vision-color-detection)   have been combined into a single software program and applied to microscopic applications. Project videos can be seen at: [https://youtu.be/bJWqn8yOOtQ](https://youtu.be/bJWqn8yOOtQ)  and [http:/youtu.be/fYU-uL2CUvA.
](http:/youtu.be/fYU-uL2CUvA)



[[![microscopequad.gif](/i/26238)](/i/26238)](https://youtu.be/bJWqn8yOOtQ)





**Project description:**
  Major elements of the system design include:
-Raspberry Pi NoIR camera v2 with [picamera interface](https://picamera.readthedocs.io/en/release-1.13/fov.html).  
-Raspberry PI 3B+:   The latest version with [improved processing speeds](https://en.wikipedia.org/wiki/Raspberry_Pi).  
-Microscope objective with camera - https://publiclab.org/wiki/basic-microscope

-OpenCV  -  Computer Vision video processing software to display camera settings and images.  A quad video format is used to show different image analysis techniques. 

-Elodea plant cells – [Elodea](https://en.wikipedia.org/wiki/Elodea) was selected as an imaging object since it only has 2 cell layers and maintains cytoplasmic movement after removing the leaf from the stem. 

**Software Display:**
Software generates a video image display split into four viewing areas:  .   

-Upper left quadrant: [Camera settings are displayed in the upper left quadrant and can be viewed while the user is adjusting  camera settings](https://publiclab.org/notes/MaggPi/08-09-2018/raspberry-pi-manual-camera-control).

-Upper right quadrant: displays standard color image.

-Lower right quadrant: [Selects green image colorspace to  identify cells](https://publiclab.org/notes/MaggPi/07-09-2018/computer-vision-color-detection).  Filter settings   H:80-156, S: 80-126. V:144-255. 

-Lower  right quadrant: [Sobel filter used to extract image edges][1].   

[![Slide2.JPG](/i/26188)](/i/26188)


**Microscope slide preparation**: Elodea leaf was removed from stem and placed on a wet mount slide with cover slip (without stain).  




**Video description:** 
-[Video](https://youtu.be/bJWqn8yOOtQ) describes 3 minutes of continuous Elodea plant cell observations.  Note that the mpeg4 video format reduces  the video time from 3 minutes to 1 minute and creates a time lapse effect. Different processing options show different aspects of cell motion.  Video is best viewed at full screen.  Additional video with added colormap can be viewed at [http:/youtu.be/fYU-uL2CUvA](http:/youtu.be/fYU-uL2CUvA)


**Final thoughts**:
While this example is designed for a moving plant cells, the general technique of  camera optimization combined with computer vision processing could be applied to other areas as well.  Microplastics or other particles could be filtered by color, shape and size as discussed in the following topic areas: 

https://publiclab.org/questions/jiteovien/08-08-2018/can-the-community-microscope-analyze-ocean-microplastics

https://publiclab.org/questions/warren/02-22-2018/what-do-respirable-silica-particles-frac-sand-pollution-look-like

https://publiclab.org/notes/amirberAgain/01-12-2018/python-and-opencv-to-analyze-microscope-slide-images-of-airborne-particles

Software code at: [https://github.com/MargaretAN9/Peggy/blob/master/Image%20Processing/CVquaddisplay%20-colorandsobel%20.py](https://github.com/MargaretAN9/Peggy/blob/master/Image%20Processing/CVquaddisplay%20-colorandsobel%20.py)


**Related posts**: 
https://publiclab.org/notes/MaggPi/08-03-2018/ngb-ndvi-video-optimization-red-blue-manual-gain-control


@warren, @icarito, @amirberAgain, @Bronwen

  [1]: http://www.turbare.net/transl/scipy-lecture-notes/advanced/image_processing/auto_examples/plot_find_edges.html