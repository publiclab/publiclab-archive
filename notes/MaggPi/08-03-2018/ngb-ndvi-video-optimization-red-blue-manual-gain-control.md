---
title: NGB NDVI Video Optimization (Red/Blue Manual Gain Control)
tagnames: video, ndvi, raspberry-pi, ngb, pi-camera, opencv, gsoc-2018, noir, awb
author: MaggPi
path: /notes/MaggPi/08-03-2018/ngb-ndvi-video-optimization-red-blue-manual-gain-control.md
nid: 16844
uid: 501996

---

# NGB NDVI Video Optimization (Red/Blue Manual Gain Control)

by [MaggPi](../profile/MaggPi) August 03, 2018 02:06

August 03, 2018 02:06 | Tags: [video](../tag/video), [ndvi](../tag/ndvi), [raspberry-pi](../tag/raspberry-pi), [ngb](../tag/ngb), [pi-camera](../tag/pi-camera), [opencv](../tag/opencv), [gsoc-2018](../tag/gsoc-2018), [noir](../tag/noir), [awb](../tag/awb)

**Introduction:**  
This project demonstrates the impact of different Raspberry Pi camera gain settings when collecting NGB NDVI images.  
The project's goal is to  identify camera settings so that camera levels can be optimized for [high resolution image processing such as image sequencer][1].
Project video can be seen at: https://youtu.be/sc5gePWAfPc

**Project Description:** 
NGB NDVI (Normalized Difference Vegetative Index) cameras work by sorting blue (B), green (G) and  near infrared (N) light into the blue/green/red channels of a color camera (without infrared filter).  Since the NGB NDVI equation,  NDVI=(NIR-B)/(NIR+B), depends on NIR and B light levels, it is useful to optimize  NIR and B channel camera gain for quality NDVI imaging.   
The project demonstrates software  to alter camera gain settings and observe the impact on NDVI imagery in (near) real time.  Major elements of the system design (with key features) include:

 - Raspberry Pi NoIR camera v2: [Auto White Balance (AWB)][2] has ability for separate red/blue channel gain 
 
 - Raspberry PI 3B+:   The latest version with [improved processing][3]
   speeds.

   

 - OpenCV  -  Computer Vision video processing software to calculate and
   display NDVI.

   

 - Blue Filter – The [same one that comes with every Raspberry Pi NoIR
   camera][4] or is [available at Public Lab][5]. Picture below describes the 
   camera set up used for the video test

![image description][6]
**Related Work**:
Major efforts that provided invaluable insight to the project include:

Discussions on NGB design/processing:
-https://publiclab.org/notes/warren/08-02-2018/use-image-sequencer-for-ndvi-plant-analysis-with-a-modified-mini-sport-camera
--https://publiclab.org/wiki/infragram
--https://publiclab.org/wiki/near-infrared-camera
--https://publiclab.org/wiki/ndvi-plots-ir-kit

NDVI processing algorithm(s)

--Robert Wilson’s - [NDVI processing algorithm][7]

--https://publiclab.org/wiki/python-webcam-codes

 Fastie colormap:
  --https://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap

AWB discussions:
--https://publiclab.org/questions/LaPa/12-03-2015/how-do-i-set-a-costum-white-balance-of-the-noir-modulo-cam
--https://publiclab.org/notes/Claytonb/08-13-2016/plant-health-ndvi-white-balance

Image stretching: 
--https://publiclab.org/questions/cfastie/12-05-2015/how-can-one-infragram-photo-produce-different-ndvi-results

**Software Display:**
Picture below describes the  quad format used to display video input  frames and processed NDVI images:

 - Upper left -  RGB image with blue gain setting (this was originally
   the blue channel but its much more exciting to see the color  balance
   shift when adjusting gains)
 - Upper right – Red(N)  image with red gain setting
  - Lower left  - NDVI with fastie colorap
 - Lower right -  NDVI with Jet colormap  







![image description][8]




![image description][9]

**Image Processing Steps:**
Picture below describes the major processing steps:
Code available at: https://github.com/MargaretAN9/Peggy/blob/master/Image%20Processing/NDVIvideogainoptimization.py










![image description][10]


**Live NDVI/Video description**: 
Video describes different scenes during gain adjustment.  Some portions of the video demonstrate very high gain settings to observe the impact on RGB and NDVI images.   





![image description][11]

In the first video scene, the nearest tree is 20 m away with leaves as close as 10m.  There is a wide range of sun illumination  conditions due to  sunlight filtering through the trees and clouds.

In the  second  video scene, the nearest tree is 200m.  Sun illumination is more consistent but was done in the late afternoon.



Related posts: 

https://publiclab.org/questions/MaggPi/07-24-2018/ndvi-led-simulator
https://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap..  

@warren, @icarito, @amirberAgain, @cfastie @tech4gt

  [1]: https://publiclab.org/notes/tech4gt/04-03-2018/image-sequencer-on-raspberry-pi
  [2]: https://picamera.readthedocs.io/en/release-1.13/fov.html
  [3]: https://en.wikipedia.org/wiki/Raspberry_Pi
  [4]: https://www.raspberrypi.org/blog/whats-that-blue-thing-doing-here/
  [5]: https://publiclab.myshopify.com/collections/diy-infrared-photography/products/infragram-diy-filter-pack?variant=5974845358108
  [6]: /i/26052.jpg "Slide1.JPG"
  [7]: https://github.com/robintw/RPiNDVI
  [8]: /i/26053.jpg "Slide3.JPG"
  [9]: /i/26054.jpg "Slide4.JPG"
  [10]: /i/26055.jpg "Slide2.JPG"
  [11]: /i/26056.jpg "Slide5.JPG"