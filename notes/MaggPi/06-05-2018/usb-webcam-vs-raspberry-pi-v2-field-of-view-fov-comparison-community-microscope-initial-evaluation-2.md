---
title: USB Webcam vs Raspberry Pi V2 Field of View (FOV) comparison /  Community microscope initial evaluation #2 
tagnames: calibration, webcam, gsoc, pi, raspberry, microscope, pi-camera, soc, gsoc-2018, soc-2018, activity:community-microscope, fov, bee, pi-microscope, camera-comparison, series:community-microscope-tests, community-microscope-prototyping
author: MaggPi
path: /notes/MaggPi/06-05-2018/usb-webcam-vs-raspberry-pi-v2-field-of-view-fov-comparison-community-microscope-initial-evaluation-2.md
nid: 16431
uid: 501996

---

# USB Webcam vs Raspberry Pi V2 Field of View (FOV) comparison /  Community microscope initial evaluation #2 

by [MaggPi](../profile/MaggPi) June 05, 2018 06:40

June 05, 2018 06:40 | Tags: [calibration](../tag/calibration), [webcam](../tag/webcam), [gsoc](../tag/gsoc), [pi](../tag/pi), [raspberry](../tag/raspberry), [microscope](../tag/microscope), [pi-camera](../tag/pi-camera), [soc](../tag/soc), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [activity:community-microscope](../tag/activity:community-microscope), [fov](../tag/fov), [bee](../tag/bee), [pi-microscope](../tag/pi-microscope), [camera-comparison](../tag/camera-comparison), [series:community-microscope-tests](../tag/series:community-microscope-tests), [community-microscope-prototyping](../tag/community-microscope-prototyping)

The research note compares the USB and Raspberry Pi V2 cameras that are typically used for the community microscope.  

Four different observations were made.   The first observation compares the FOV without any camera modifications and has different lenses.   The other three observations compare FOV with the same lens.   Measurements were calibrated against a .5x.5 inch grid or with a 1 micron calibration reference slide. 

1)	Comparison with supplied /standard lens
--Raspberry Pi visible V2 detector with Lens FOV (59.17  deg (H)×58.3  deg (V))
      --USB WebCam, detector and lens to be determined  


2)	 Comparison  with USB Webcam lens on both cameras 
--Raspberry Pi detector with USB Webcam Lens 
      --USB WebCam, detector with USB Webcam Lens


3)	Comparison with 2.8 mm lens on both cameras 
--Raspberry Pi detector with 2.8mm Lens 
      --USB WebCam detector with 2.8mm Lens 

4)	Microscope comparison on both cameras with 10x objective.  

----------------------------------
1)	Comparison with supplied /standard lens –This comparison provides the ‘as is’ comparison of the two cameras.   

[![Slide1.JPG](/i/25101)](/i/25101)


2)	Comparison  with USB Webcam lens on both cameras

The raspberry Pi detector was fitted with a M12 mount so a comparison could be made between cameras with the same USB Webcam (M12) lens.   Pictures below show that Raspberry PI images never came into focus.    Potential explanation is that the resolution of the  Raspberry Pi detector is better than the USB webcam lens or that the M12 lens holder does not permit the lens to achieve focus.  ( See  https://publiclab.org/notes/MaggPi/04-08-2018/raspberry-pi-microscope-close-up-lens-system for   M12 lens mount description.)



[![Slide2.JPG](/i/25102)](/i/25102)

3)	Comparison with 2.8 mm lens on both cameras.  A 2.8 mm lens was used for both the Raspberry camera and USB Webcam.   FOV Results are similar to comparison #1.   Lens distortion indicates the better  quality of the Raspberry PI standard lens.



[![Slide3.JPG](/i/25103)](/i/25103)

4)	To compare cameras with the same microscope objective lens, a celestron microscope was modified to hold  the Raspberry Pi or USB detectors.    Pictures  below show a calibration slide and honey bee leg that was imaged with the same 10 objective lens.     

[![Slide4.JPG](/i/25104)](/i/25104)




[![Slide5.JPG](/i/25105)](/i/25105)




The Raspberry camera also has the option to display high resolution modes while the USB camera is limited to 640x480 resolution.  



[![Slide6.JPG](/i/25106)](/i/25106)
Summary


Raspberry PI detector always has a FOV greater than the USB webcamera no matter what lens is used.

For  10x microscope objective (used with the celestron microscope) the USB Webcam has 140 x 105 micron FOV vs the Raspberry Pi which  has a 360 x 270 micron FOV. 

Recommendations:

Comparing  results from #1 vs #3 indicates the Raspberry PI lens provides better quality than other lenses.   Additional work could explore whether the lens could be used in the reverse mode.    This may provide a low cost (non- microscopic objective) lens option for the community microscope with raspberry pi camera.

