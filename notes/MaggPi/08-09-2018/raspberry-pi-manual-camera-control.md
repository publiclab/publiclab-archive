---
title: "Raspberry Pi Manual Camera Control"

tagnames: 'near-infrared-camera, raspberry-pi, infrared-camera, barnstar:basic, rasperry, exposure, manual, pi-camera, picamera, control, gsoc-2018, noir, pi-calibration'
author: MaggPi
path: /notes/MaggPi/08-09-2018/raspberry-pi-manual-camera-control.md
nid: 16887
uid: 501996
cids: 20343,20363,20365,20366
---

![](https://publiclab.org/public/system/images/photos/000/026/127/original/manual_controller.png)

# Raspberry Pi Manual Camera Control

by [MaggPi](/profile/MaggPi) | August 09, 2018 02:46

August 09, 2018 02:46 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [raspberry-pi](/tag/raspberry-pi), [infrared-camera](/tag/infrared-camera), [barnstar:basic](/tag/barnstar:basic), [rasperry](/tag/rasperry), [exposure](/tag/exposure), [manual](/tag/manual), [pi-camera](/tag/pi-camera), [picamera](/tag/picamera), [control](/tag/control), [gsoc-2018](/tag/gsoc-2018), [noir](/tag/noir), [pi-calibration](/tag/pi-calibration)

----

**Summary: ** 
This note describes software that enables manual control of Raspberry Pi camera settings while displaying video output in near real time.  Project video can be seen at: https://youtu.be/agDl9JWxJt0 

[](https://youtu.be/agDl9JWxJt0)   	
**Introduction: **
While automatic camera controls perform very well for many photographic applications, there may be times when manual control may be desired.   This note describes software that permits the user to   adjust and visualize the impact of manually selected settings in near real time.  Potential Public Lab applications include infrared imaging, microscopy and spectroscopy.    


**Project description:**
  Major elements of the system design (with key features) include:

-Raspberry Pi NoIR camera v2 with picamera interface.   Picamera permits manual control for the following settings: red gain, blue gain, exposure compensation, frame rate, contrast, brightness, saturation, sharpness, exposure and image effects.    These camera settings can be set while recordings or previews are in progress.   Note that some camera settings such as ISO must be preset and cannot be updated while the camera is operation.  
-Raspberry PI 3B+:   The latest version with improved processing speeds.  
-OpenCV  -  Computer Vision video processing software to display camera settings and images.  A quad video format is used to show how different settings impact different portions of the image pipeline.    


[![Slide1.JPG](/i/26122)](/i/26122)





**Software Display**:

The software generates two windows:  a trackbar control window and a video image display split into four viewing areas.   Trackbar/camera settings are displayed in the upper left quadrant and can be viewed while the user is selecting camera settings.  The other video quad areas can display different aspects of computer vison processing as needed.   For this project, the video shows the impact of different camera settings with R, B, and RGB image components.   

Pictures below show the trackbar control window and video image display.   Since OpenCV generated trackbars are limited to integer variables, the software scales trackbar values to match picamera range settings.  







	 
**Complete list of settings:**

Upper left -  Displays camera settings with picamera range values:
	--Exposure Compensation(-25 to 25)
	--Blue gain(0 to 8)
	--Red Gain(0 to 8)
	--Frame Rate(1 to 60 frame per second)
	--Contrast(-100 to 100)
	--Brightness: (0 to 100)
	--Saturation(-100 to 100):
	--Sharpness(-100 to 100)
	--Exposure Modes: 'auto','off','night', 'nightpreview', 'backlight','spotlight', sports', 'snow', 			‘beach','verylong','fixedfps','antishake','fireworks'.
	--Image Effects: ‘none','negative','solarize',colorswap','washedout', 'colorbalance', 'cartoon', 	'sketch', 'denoise','emboss',‘oilpaint','hatch','gpen','pastel',' watercolor', 'film',’blur'.


 
[![Slide2.JPG](/i/26117)](/i/26117)




 Other information displayed (no manual control)
	--ISO
	--Exposure Speed (sec)
	--Analog Gain
	--Digital Gain 	








**Limitations: (read picamera manual for more info)**
1) Some modes have precedence and override other settings.
2) Not all settings can be manually controlled.  Some settings such as ISO need to be preset. 
3) There is a one or two frame time lag between the setting and image displays. 
4) I could never see any image difference by changing the ‘Sharpness’ setting.   Not sure when it is useful.   


**Camera Control Video description:** 
Video describes different scenes during setting adjustment:  https://youtu.be/agDl9JWxJt0   

In the first video scene, The camera configuration uses an image similar to another post (https://publiclab.org/notes/MaggPi/06-02-2018/raspberry-pi-camera-visible-and-noir-v2-picamera-effects-demos ) and is pictured below. Imaging objects include a resolution chart and Camera Trax Color Card for resolution comparison and color identification.


[![Slide3.JPG](/i/26113)](/i/26113)









In the second video scene, different spectroscopy applications are viewed to see how different gain settings impact the spectrum display.   For comparison see: https://publiclab.org/notes/MaggPi/07-17-2018/high-dynamic-range-hdr-imaging-revisited







Final thoughts:
While this example is designed for a Raspberry Pi camera, the software could be adapted for other cameras if an appropriate interface is provided. 

Software code at: https://github.com/MargaretAN9/Peggy/blob/master/Pi%20Camera/picmaeramancontrol.py

Related posts: 
https://publiclab.org/notes/MaggPi/08-03-2018/ngb-ndvi-video-optimization-red-blue-manual-gain-control
https://publiclab.org/questions/MaggPi/07-24-2018/ndvi-led-simulator

@warren, @icarito, @amirberAgain, 





