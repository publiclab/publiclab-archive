---
title: Raspberry Pi Microscope Image Stitching 
tagnames: image-stitching, raspberry-pi, stitching, microscope, microscopy, computer-vision, opencv, raspberry-pi-cameras, live
author: MaggPi
path: /notes/MaggPi/03-23-2019/raspberry-pi-microscope-image-stitching.md
nid: 18826
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/030/555/original/2wqxch.gif)

# Raspberry Pi Microscope Image Stitching 

by [MaggPi](../profile/MaggPi) March 23, 2019 05:52

March 23, 2019 05:52 | Tags: [image-stitching](../tag/image-stitching), [raspberry-pi](../tag/raspberry-pi), [stitching](../tag/stitching), [microscope](../tag/microscope), [microscopy](../tag/microscopy), [computer-vision](../tag/computer-vision), [opencv](../tag/opencv), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [live](../tag/live)

----

**Raspberry Pi Microscope Image Stitching – Trial observations**

**Abstract: ** The note considers microscope computer vision image stitching using a Raspberry Pi camera and OpenCV software.  An example real time stitching technique is [demonstrated]( https://youtu.be/xIEPgeUOURQ) and its limitations are discussed.  
Stitching demo is available at: https://youtu.be/xIEPgeUOURQ

**Introduction:** 

- The purpose of this note is to demonstrate techniques suitable for ‘live’ web based stitching with Public Lab Microscopes.   
- Image stitching combines several overlapping images into a single image.   A typical example of image stitching is the panoramic display feature available on most mobile phone camera applications.   
- The ability to quickly combine several microscope images into a single picture has several potential benefits: 1) Permits the user to identify and locate features at high resolution with expanded field of view.  2) Reduces the number of microscope objectives needed to survey the image.   A single high resolution scan can be obtained which can be then be (re)displayed at lower resolutions as needed.  3) Provides a single image rather than multiple images for easier data storage and image processing.     
- Current microscope image stitching applications include, open source  [ImageJ/MIST]( https://github.com/usnistgov/MIST ) and commercial options [Microvisioneer ](http://www.microvisioneer.com).  While these applications provide value for a wide variety of specialized applications, this note considers  image stitching designs for low cost microscope open hardware, open source software and a ‘point and click’ real time display user interface. 
- [Public Lab GSOC 2019 proposal ideas describes  ‘live microscope stitching’ as a future upgrade to MapKnitter. ](https://publiclab.org/wiki/gsoc-ideas#Ideas)
  

**System description:**
Major System components are described below:

-	[Raspberry Pi camera v2 with microscope objective](https://publiclab.org/notes/MaggPi/04-08-2018/raspberry-pi-microscope-close-up-lens-system).   Camera operates in a loop that displays consecutive images until interrupted by the operator.   
-	Microscope stage – Two microscope stages were used for testing -    a  modified Celestron microscope and a [Public lab Community Microscope Kit]( https://store.publiclab.org/collections/microscopes/products/community-microscope-pi-kit?variant=13776202203245) (see picture below).  Each microscope has an exchangeable camera mount adapter for the Raspberry Pi V2camera.

![image description][1]
 
-	Raspberry PI 3B+ computer: The computer controls the camera and display.  The USB port is used to power the microscope light when the Public lab stage is used.
-	OpenCV - Open CV ‘[stitcher]( https://docs.opencv.org/trunk/d2/d8d/classcv_1_1Stitcher.html)
’ class was used to merge images (pipeline picture below).  Stitcher combines multiple functions to enable single command image stitching.  Stitching in this context refers to identifying common image key points which are then used to overlap the pictures.

![image description][2]

-	Display - Microscope images are manually sorted (left ‘live’ video/right stitched image) as they are displayed on a monitor.   The stitched image is reduced in size (100%, 50%, 30%) as additional frames are added.    


**Observations:** 

-	Image displacement - Successful stitching depends on sufficient overlap between consecutive images.   For microscopic image stitching, fine (10-100 micron) adjustments are recommended.  Without a caliber controlled stage, position changes may be too coarse and no overlap is available for successful stitching.  A caliber stage (used in the video example) is probably the easiest adjustment method but adds another component.  Other solutions to consider are some type of positioning guide or a computer function that measure overlap (homographic indicator) status.               

-	Image degradation - The current software accurately stitches successive images but also has a shortcoming.   As each consecutive image is added the ‘stitched’ image begins to degrade.   This may be due to the compression loss each time the image is (re)stored.  Potential solutions are to adjust stitcher class functions, storing images in a different format (than jpg) or develop an image mask that protects the stitched image.   

![image description][3]

-	Image size and memory - Image size increase with each stitched image.  For the example provided in the video, the first image size is 640 x 480 (210kiB) and the last image size is 1384x2039 (267kiB).   As discussed above, using jpg format helps manage memory but is not appropriate when the image is (re)stored several times.  Ideally, the stitching technique should be able to process a high resolution mode Raspberry Pi camera image.   For high resolution images, the range would be something like 3280x2464 (4.4MiB) for the first image to several hundred megabytes (depending on number of stitches and compression).  Large stitched image sizes also provide several challenges such as increased processing time and storing/viewing the final stitched image.  

-	Microscope vs Airborne Imaging - Public lab applications such as [MapKnitter](https://mapknitter.org/#2/43.0/2.8)  permit the ability to manual align multiple pictures and create a single image mosaic.  [Adapting MapKnitter for microscope image stitching](https://publiclab.org/notes/MaggPi/02-05-2019/mapknitter-map-of-bee-leg-stitch-test) may require several program modifications (or a new application) that consider differences between airborne vs microscope imaging.  Differences include: 1) MapKnitter (kite/balloon) airborne images typically have random orientation and random perspective while microscope images have random orientation and uniform perspective, 2) airborne images may or may not have image overlap while microscope images can be controlled to guarantee image overlap and 3) MapKnitter currently is designed to overlay prestored images against a map grid vs a ‘real time’ microscope stitched image that permits user alignment feedback.    

-	Live stitching - The stitching method cycles between a ‘live’ mode for selecting the next part of the image and then an image processing mode that calculates the stitched imaged.  This approach was selected since it provides a way to select ‘good’ images while balancing computer resources.   Web based stitching will also need a way to manage image processing vs real time viewing demands.  Potential concerns are image lag, motion blur, processing required to reject identical frames/out-of-focus frames and stitching sequence failure (if no overlap).   

**Summary** An interrupted image loop using opencv stitcher class  demonstrated consecutive frame microscope image stitching.  This note discusses several design considerations for a web based application.  I could work more on the current approach but would like comments if the proposed technique is the best direction…..  

  [1]: /i/30551.jpg "Slide1.JPG"
  [2]: /i/30552.jpg "Slide2.JPG"
  [3]: /i/30554.jpg "Slide3.JPG"