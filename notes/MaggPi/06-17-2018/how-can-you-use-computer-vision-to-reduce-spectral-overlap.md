---
title: How can you use  computer vision to reduce spectral overlap? 
tagnames: spectrometer, raspberry-pi, spectral-analysis, pi-camera, gsoc-2018, soc-2018, spectral-staircase, noir
author: MaggPi
path: /notes/MaggPi/06-17-2018/how-can-you-use-computer-vision-to-reduce-spectral-overlap.md
nid: 16513
uid: 501996

---

# How can you use  computer vision to reduce spectral overlap? 

by [MaggPi](../profile/MaggPi) June 17, 2018 19:34

June 17, 2018 19:34 | Tags: [spectrometer](../tag/spectrometer), [raspberry-pi](../tag/raspberry-pi), [spectral-analysis](../tag/spectral-analysis), [pi-camera](../tag/pi-camera), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [spectral-staircase](../tag/spectral-staircase), [noir](../tag/noir)

Research question: Can  image processing /computer vision be used to increase the free spectral range (or reduce spectral overlap) of spectrometer designs? 

Background:Many  spectrometer designs are limited by the ‘spectral overlap’ problem which occurs when  light spills over from one order  to another.   The general approach to solve the spectral overlap problem is to use an order sorting filter that blocks unwanted light but also reduces the overall spectral range.   My research question is whether a software version of a blocking filter could quantify and  compensate the spectral overlap.  Please see  http://www.vikdhillon.staff.shef.ac.uk/teaching/phy217/instruments/phy217_inst_fsr.htmlfor more info.

Spectral overlap demonstration: 
  In order to demonstrate spectral overlap  impact, a slitless boxless imaging spectrograph  was created using a Raspberry PI NoIR V2 camera.  Schematic below shows the camera setup consisting  of a   NoIR camera with a 500 line/mm transmission grating that receives light from a vertical row of different color Light Emitting Diodes (LEDs).  









[![Slide1.JPG](/i/25231)](/i/25231)

This goal of the design is to   create a spectrum staircase effect that permits observations of multiple light orders diffracted across the NoIR camera.  List of light sources (from top to bottom) and significant spectral features  are listed below:
-1)Red Laser diode (~650nm) -  Spectral marker with narrow output. 
-2)IR LED (~940 nm) –Marks edge of NoIR camera spectral range 
-3)IR LED (~850nm) – Center Near Infrared Band
-4)White light LED –  High intensity to observe second order spectrum
-5)RED Laser Diode – Laser diode (used primarily to keep the staircase jumps even) 
-6)UV/Blue LED/White paper  – Same LED as #7  but with white paper that creates green florescence spectra. 
-7)UV/Blue LED –Marks edge of NoIR camera spectral range
The pictures  below shows typical images from the spectrograph and demonstrate several types of spectral overlap.   For example, blue LED second order overlaps with  first order of IR LEDs, bright white LED overlaps with IR LEDs and blue/UV LED overlaps with paper fluorescence spectra. 






[![Slide2.JPG](/i/25232)](/i/25232)


[![Slide3.JPG](/i/25233)](/i/25233)


Initial review: 

The following pictures display 3d intensity profiles for the RGB components of the spectral staircase spectrograph example above.   The goal of the 3D intensity profiles is to provide insight into how computer vision ‘sees’ the spectral images.    The hope is that the profiles will help develop algorithms for a software  order sorting filter.     



[![Slide4.JPG](/i/25234)](/i/25234)



Since the full array 3d profiles are quite complex,  the white light 2nd order spectrum was extracted.  The picture below shows the Blue/Green/Red  ‘rolling hill’ pattern typical of white light spectrum. 

[![Slide5.JPG](/i/25235)](/i/25235)


Code used for  image/ capture display and staircase example spectrograph  is available  at: https://github.com/MargaretAN9/Peggy


Related posts: 

https://publiclab.org/notes/MaggPi/05-14-2018/is-there-a-way-to-use-the-rgb-spectral-overlap-to-make-better-spectral-measurements


@warren, @icarito, @amirberAgain