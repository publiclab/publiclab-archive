---
title: "Raspberry Pi Microscope/close up lens system"

tagnames: 'webcam, raspberry-pi, gsoc, barnstar:basic, python, microscope, pi-camera, soc, gsoc-2018, soc-2018, pi-microscope, camera-comparison, series:community-microscope-tests'
author: MaggPi
path: /notes/MaggPi/04-08-2018/raspberry-pi-microscope-close-up-lens-system.md
nid: 16101
uid: 501996
cids: 19408,19455,19461,19475,19478,19493,19494,19495,19497,19498,19499
---

![](https://publiclab.org/public/system/images/photos/000/024/355/original/raspberry_pi_microscope_lens.jpg)

# Raspberry Pi Microscope/close up lens system

by [MaggPi](/profile/MaggPi) | April 08, 2018 07:09

April 08, 2018 07:09 | Tags: [webcam](/tag/webcam), [raspberry-pi](/tag/raspberry-pi), [gsoc](/tag/gsoc), [barnstar:basic](/tag/barnstar:basic), [python](/tag/python), [microscope](/tag/microscope), [pi-camera](/tag/pi-camera), [soc](/tag/soc), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [pi-microscope](/tag/pi-microscope), [camera-comparison](/tag/camera-comparison), [series:community-microscope-tests](/tag/series:community-microscope-tests)

----

**![Raspberry Pi Microscope/close up lens system][1]** 

This project provides a way to use a Raspberry Pi camera to take microscope/macro pictures.  The design may not be as elegant as some other  public lab microscope kits ([https://publiclab.org/notes/partsandcrafts/11-26-2017/building-a-raspberry-pi-microscope][2]) but provides an alternate approach that may be useful for a given project.  

**Key aspects of the design:**
--Lens mount convertor/adapter rings that permit a variety of lenses/microscope objectives to be used with the Raspberry Pi camera array.   Modular lens approach is very useful since  microscope objectives, close-up or  wide field of view lenses can be easily swapped for different measurements.   
--A .5 meter  flex cable for the Raspberry Pi camera.  The flex cable permits greater camera/computer separation distances than the 15cm cable that comes with the camera.   
--Mount/stage system.   A basic setup using labjacks and an LED light.   Nothing fancy but easy to set up and is essential to hold lens and focus image. 
--Python image capture software.  Software permits real time video adjustments followed by jpg image capture. 

**Major lens system  parts list (with supplier/cost):**
--Lens Mount: M12 lens mount (male metric thread with 0.5 mm pitch) with mounting screws.  Designed for Raspberry Pi camera v2.1 with 21mm hole spacing.   Mounts lens holder to camera/array board.  [http://www.m12lenses.com/CNC-Machined-Raspberry-Pi-M12-Lens-Holder-Metal-p/pt-lh024rpm.htm/%20][3], $8.50.
-- Adapter Ring: attaches onto the M12 lens mount and enables a C Lens to be mounted, [https://www.amazon.com/Pixco-Mount-Lens-All-metal-Adapter/dp/B01E536ZZ6][4], $6.59.
-- C mount to RMS adapter:  This ring has both an inside and outside thread that enables most microscope objectives (RMS mount) to connect to the C mount holder. 
[https://www.ebay.com/itm/RMS-to-C-mount-adapter-NEW-/140499913861][5] , $8.75.
--Flex cable: 1 meter  flex cable for the Raspberry Pi camera.  https://www.adafruit.com/product/2143, $ 3.95

Attached pictures provide assembly instructions: 

1.	Remove lens from Raspberry Pi camera board.   Note that lens removal voids the warranty. 
--Option1 is to unscrew the lens. This can be done by a special 3 D printed lens removal tool or a pair of pliers and a very steady hand. 
[https://publiclab.org/notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens][6]
 –Option 2 is to ‘decap’ the lens holder (and lens) from the board.  One decap method is to cut into the epoxy between the board and lens holder with end cutting pliers.  The technique chews into the epoxy until the holder pops off. 

2.    Align camera board holes w/M12 lens mount and screw  together.  
![Lens removal and lens mount][7]

3.   –Thread the C adapter ring to the M12 lens mount
      --Thread the C mount to RMS adapter on the microscope objective
      --Thread the objective to the C adapter ring
![Lens mount and adapter assembly][8]

4.  Most applications will require an adjustable height camera/objective holder.   One option is to use two lab jacks with the camera resting on two rulers.   This is a good option for quick tests but other designs should be considered for reliable results.
![Adjustable camera/lens mount holder][9]

5. Start taking pictures!  I prefer to use a python program that provides  30 seconds to optimize the focus and then automatically records a jpg picture.   Code is available at:[https://github.com/MargaretAN9/Camera-Test\][10].    

In order to compare different lens options, pictures of  Raspberry Pi camera shipping box were taken with a standard Raspberry lens (3.04mm), M12 2.8mm lens, 10X and 20X objective.  Each of the images have a different camera to object distance and show how the lens system can provide different fields of view and magnification.   Images are recorded and shown with the same digital format.
![Lens picture comparison][11]	



  [1]: https://publiclab.org/system/images/photos/000/024/357/large/Slide1.JPG "Slide1.JPG"
  [2]: https://publiclab.org/notes/partsandcrafts/11-26-2017/building-a-raspberry-pi-microscope
  [3]: http://www.m12lenses.com/CNC-Machined-Raspberry-Pi-M12-Lens-Holder-Metal-p/pt-lh024rpm.htm/%20
  [4]: https://www.amazon.com/Pixco-Mount-Lens-All-metal-Adapter/dp/B01E536ZZ6
  [5]: https://www.ebay.com/itm/RMS-to-C-mount-adapter-NEW-/140499913861
  [6]: https://publiclab.org/notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens
  [7]: https://publiclab.org/system/images/photos/000/024/351/large/Slide1.JPG "Slide1.JPG"
  [8]: https://publiclab.org/system/images/photos/000/024/352/large/Slide1.JPG "Slide1.JPG"
  [9]: https://publiclab.org/system/images/photos/000/024/353/large/Slide1.JPG "Slide1.JPG"
  [10]: https://github.com/MargaretAN9/Camera-Test
  [11]: https://publiclab.org/system/images/photos/000/024/354/large/Slide1.JPG "Slide1.JPG"
