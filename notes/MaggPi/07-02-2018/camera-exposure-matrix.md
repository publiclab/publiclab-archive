---
title: "Camera exposure matrix"

tagnames: 'infrared, raspberry-pi, barnstar:basic, computer-vision, picamera, noir'
author: MaggPi
path: /notes/MaggPi/07-02-2018/camera-exposure-matrix.md
nid: 16605
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/025/379/original/Slide2.JPG)

# Camera exposure matrix

by [MaggPi](../../../profile/MaggPi) | July 02, 2018 09:21

July 02, 2018 09:21 | Tags: [infrared](../tag/infrared), [raspberry-pi](../tag/raspberry-pi), [barnstar:basic](../tag/barnstar:basic), [computer-vision](../tag/computer-vision), [picamera](../tag/picamera), [noir](../tag/noir)

----

This  research note provides examples of an optimization matrix or digital contact sheet that permits the user to visualize the impact of different camera settings.  

Introduction: 
Several digital camera applications such as spectroscopy or infrared imaging benefit from manual vs auto exposure settings.   While manual modes can increase application performance, finding  the right settings often requires a trial and error approach.  This research note describes image collection software that generates a matrix that compares two camera parameters.   Ideally, the comparison matrix permits the user to narrow the number of options and identify the best image collection settings.  

To demonstrate how an  optimization matrix could be used, images at different  ISO vs exposure times settings were collected with a Raspberry Pi NoIR camera.  Two different examples are provided, nighttime imaging and spectroscopy.  






Raspberry camera settings:
Manual Raspberry Pi cameras settings are described in  https://picamera.readthedocs.io/en/release-1.13/fov.html.   Some ot the major exposure control settings for the V2 camera are listed below:

-    shutter_speed  -  controls exposure times, max length is 10 sec.  Related to frame rate

 -  ISO - ISO controls sensitivity of the camera (by adjusting the analog_gain and digital_gain). Values are between 0 (auto) and 1600. The actual value used when iso is explicitly set will be one of the following values (whichever is closest): 100, 200, 320, 400, 500, 640, 800.
 
 -  AWB -  Auto white balance controls (red, blue) gains and ‘balances’ the color.

Exposure matrix description: 
The picture below show the exposure matrix layout.   The matrix is designed to show the lowest part of the exposure range at the upper left corner and the highest at the lower right corner.   Each image is numbered and can be traced to exposure settings stored on a separate file/printout. .    

[![Slide1.JPG](/i/25374)](/i/25374)




Spectroscopy Example:
The picture below demonstrates the exposure matrix with a white light LED spectrum.   Camera/grating setup was described in the spectral staircase note: https://publiclab.org/notes/MaggPi/06-17-2018/how-can-you-use-computer-vision-to-reduce-spectral-overlap   Exposure settings compared were ISO (100 to 900) and shutter speed (.1 to 1 sec) at 1 fps (frame per second).  









[![Slide2.JPG](/i/25376)](/i/25376)

 An evaluation of the white light LED exposure matrix is described below:



[![Slide3.JPG](/i/25377)](/i/25377)


Additional settings can be adjusted or alternate exposure ranges can be selected.   The left picture below captures the same scene as above but with AWB ‘off’,   The right picture shows the same setup as above but with shutter speeds set for 1 to 10 sec.  The frame rate was incorrectly set too fast (1/6fps) to image exposures longer than 6 sec. The right picture demonstrates how the exposure matrix can help detect incorrect settings. 


[![Slide4.JPG](/i/25378)](/i/25378)






 Night vision example:
The picture below show another image observed using an exposure matrix.   The image is a tree at night with no lighting (other the starlight/light scattered for street lights).   The auto settings cannot image the tree but higher ISO settings can.  Note that lighting conditions may have changed during the long exposure times and leaf movement may create blurry images. 





[![Slide5.JPG](/i/25375)](/i/25375)

Summary:
Two examples demonstrate how an exposure matrix helps optimize camera performance.   The first example (spectroscopy) shows that  shutter speed enables seeing the second/third spectral order.   The second example shows that high ISO settings enable nighttime imaging at low exposure times.    


   I am still developing the software and looking for  the best way to enter the exposure settings, adjust the range of the settings and present the comparison images.   The goal is to provide tools that ‘bracket’ exposure settings for best manual exposures.   If you have any suggestions please comment …..Software code posted at:  https://github.com/MargaretAN9

@warren, @icarito, @amirberAgain 






