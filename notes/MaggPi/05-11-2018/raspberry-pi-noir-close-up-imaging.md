---
title: "Raspberry PI NoIR close-up Imaging "

tagnames: 'near-infrared, raspberry-pi, gsoc, barnstar:basic, tool-focused, pi-camera, pinoir, soc, raspberry-pi-cameras, activity:microscope, gsoc-2018, soc-2018, activity:community-microscope, pi-microscope, series:community-microscope-tests, activity:community-microscope-usage'
author: MaggPi
path: /notes/MaggPi/05-11-2018/raspberry-pi-noir-close-up-imaging.md
nid: 16326
uid: 501996

---

![](https://publiclab.org/public/system/images/photos/000/024/898/original/ir_pic.png)

# Raspberry PI NoIR close-up Imaging 

by [MaggPi](../../../profile/MaggPi) | May 11, 2018 04:14

May 11, 2018 04:14 | Tags: [near-infrared](../tag/near-infrared), [raspberry-pi](../tag/raspberry-pi), [gsoc](../tag/gsoc), [barnstar:basic](../tag/barnstar:basic), [tool-focused](../tag/tool-focused), [pi-camera](../tag/pi-camera), [pinoir](../tag/pinoir), [soc](../tag/soc), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [activity:microscope](../tag/activity:microscope), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [activity:community-microscope](../tag/activity:community-microscope), [pi-microscope](../tag/pi-microscope), [series:community-microscope-tests](../tag/series:community-microscope-tests), [activity:community-microscope-usage](../tag/activity:community-microscope-usage)

----


Objectives include:

-Adjust focus for a NoIR camera lens by using a specially designed tool. 
-Test the impact of visible/near infrared lighting conditions on NoIR  images
-Explore the capability of the NoIR camera w/standard lens to maintain focus across a wide 400 to 900nm spectral bandwidth.   

----------------

Since the Raspberry Pi NoIR v2camera lens is preset to focus at infinity, this typically restricts quality imaging to ranges > 1 meter.  Options for adjusting the focus consist of adding external lenses or refocusing the supplied lens.  Each approach has its own benefits and disadvantages – external lenses require a separate mount and additional lens purchase, adjusting the supplied lens risks potentially damaging the camera.  A good summary of camera and lens performance is available at: [https://elinux.org/Rpi_Camera_Module#cite_note](https://elinux.org/Rpi_Camera_Module#cite_note)-. and [https://www.spiedigitallibrary.org/journals/journal-of-electronic-imaging/volume-26/issue-01/013014/Laying-the-foundation-to-use-Raspberry-Pi-3-V2-camera/10.1117/1.JEI.26.1.013014.full?SSO=1 and https://raspberrypi.stackexchange.com/questions/34747/camera-board-colors-issue]

The tool method was selected for a series of imaging observations since it permits diverse camera modes ranging from lens-less to  multi-lens camera configurations.   Three tool designs are depicted below and general instructions are available at:
. https://publiclab.org/notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens  

[![Slide1.JPG](/i/24890)](/i/24890)

Note the initial material selected for  the lens adjustment tool https://www.thingiverse.com/thing:1574661  did not match the design goals.  Picture below shows the importance of selecting the right material for 3d fabrication. Thanks to Treatstock (https://www.treatstock.com/) who provided an upgraded material reprint at no additional cost.  

[![Slide2.JPG](/i/24891)](/i/24891)

Camera set-up is shown below.  In order to observe visible/infrared (IR) imaging performance of the NoIR camera, florescent white light and infrared (IR) lighting (two 850nm Light Emitting Diodes (LEDs)) were used for illumination.  50cm, 25cm and 3cm camera to object distances were selected to provide different fields of view and magnification.  A python picamera program was used to help perform video focus adjustments before recording high resolution images.  Images are recorded and shown with the same digital format. Code is available at:  https://github.com/MargaretAN9/Camera-Test.   

 [![Slide3.JPG](/i/24892)](/i/24892)

Objects were selected to demonstrate different aspects of imaging across  the 400 to 900 nm spectral response of the NOIR camera. Objects include:
-5 dollar bill
-Raspberry Pi camera box
-Public lab stickers
-Red Filter  - From Infragram Plant Analysis Filter Kit
(https://publiclab.myshopify.com/collections/diy-infrared-photography/products/infragram-diy-filter-pack?variant=1058088684)
-Green Filter – Roscolux Moss Green Filter (520nm center peak)
(http://us.rosco.com/en/products/filters/r89-moss-green)
-Blue Filter – Supplied with NoIR Camera
(https://www.raspberrypi.org/blog/whats-that-blue-thing-doing-here/)

Picture below was taken at 50 cm camera to object distance and show how refocusing the preset NoIR lens permits imaging at < 1m.

[![Slide4.JPG](/i/24899)](/i/24899)


Picture below was taken at 25 cm camera to object distance with white and/ or infrared  light.  The images show how the camera’s overlapping spectral bands provide realistic color (white light), unique infrared features (IR light) and green/yellow color subtraction (IR and white light)

[![Slide5.JPG](/i/24895)](/i/24895)

Picture below was taken at 3 cm camera to object distance with white or Infrared (IR) light.  The images show that it  is difficult to simultaneously focus both the visible and IR images at very close distances with the standard NoIR lens.    

[![Slide6.JPG](/i/24896)](/i/24896)

