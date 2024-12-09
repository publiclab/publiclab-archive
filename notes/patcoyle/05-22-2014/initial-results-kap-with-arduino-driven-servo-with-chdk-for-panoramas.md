---
title: 'Initial results: Arduino driven servo with CHDK for aerial panoramas'
tagnames: arduino, aerial-photography, panorama, autokap
author: patcoyle
path: /notes/patcoyle/05-22-2014/initial-results-kap-with-arduino-driven-servo-with-chdk-for-panoramas.md
nid: 10500
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/004/353/original/Untitled_Panorama1.jpg)

# Initial results: Arduino driven servo with CHDK for aerial panoramas

by [patcoyle](../profile/patcoyle) May 22, 2014 04:21

May 22, 2014 04:21 | Tags: [arduino](../tag/arduino), [aerial-photography](../tag/aerial-photography), [panorama](../tag/panorama), [autokap](../tag/autokap)

----

###What I want to do
Explore use of Arduino control of [Parallax servo](http://learn.parallax.com/KickStart/900-00005) with CHDK for aerial panoramas.
###My attempt and results
I modified a [Brooxes Electric AutoKAP Kit (BEAK) ](http://www.brooxes.com/newsite/BBKK/KITS.html) to replace the  clickPAN-IR rotator-trigger with an Arduino contolling the Parallax servo (continuous rotation) and[ CHDK remote shutter.](http://chdk.wikia.com/wiki/USB_Remote) I edited an [Arduino sketch made to trigger a pair of cameras using CHDK remote shutter.](http://publiclab.org/notes/patcoyle/1-30-2013/chdk-usb-remote-shutter-digispark-sketch) The intent, based on suggestions from [Chris Fastie](http://publiclab.org/search/cfastie), was to trigger the camera, rotate, delay, then repeat; to shoot oblique images to use for panoramas.

Here is the sketch:

<a href="https://i.publiclab.org/system/images/photos/000/004/358/original/CHDK_trgr_srv_dla.ino"><i class="icon icon-file"></i> CHDK_trgr_srv_dla.ino</a>



I also used the Picavet lacing with quick release S-biners to allow it to be moved between rigs, from the [3D-printed Redstone Rig](http://publiclab.org/notes/cfastie/04-15-2014/pierre-s-plastic-picavet) to the Brooxes BEAK, in this case.

Flew Levitation Delta with Canon A495; triggered by a [Borderless Electronics $9 Arduino clone](http://borderlesselectronics.org/). The photos' EXIF info showed they were triggered at two-second intervals, per the Arduino sketch loop.


[![P1100432.JPG](https://i.publiclab.org/system/images/photos/000/004/356/medium/P1100432.JPG)](https://i.publiclab.org/system/images/photos/000/004/356/original/P1100432.JPG)



Videos in the following playlist illustrate the development, ground testing and initial flights. Note the issues with kite turning to right, and in final moments of last video, diving for the ground:
<iframe width="560" height="315" src="//www.youtube.com/embed/videoseries?list=PL7StLcBQy0_fr5tAWs4QutwjWxEUhRQ49" frameborder="0" allowfullscreen></iframe>

Here is another panorama done with Photoshop Photomerge. Note these did not use successive images, but selected images in proximity of desired view. This suggests a shorter rotation duration is needed.

[![Untitled_Panorama2_crpd.jpg](https://i.publiclab.org/system/images/photos/000/004/355/medium/Untitled_Panorama2_crpd.jpg)](https://i.publiclab.org/system/images/photos/000/004/355/original/Untitled_Panorama2_crpd.jpg)

Here is contact sheet view of the 300-plus images from the flight, again suggesting a smaller rotation between images is in order.


[![Grab_of_Bridge_view_of_set.jpg](https://i.publiclab.org/system/images/photos/000/004/357/medium/Grab_of_Bridge_view_of_set.jpg)](https://i.publiclab.org/system/images/photos/000/004/357/original/Grab_of_Bridge_view_of_set.jpg)








###Questions and next steps
The configuration is not optimized. Next steps:

Refine the rotation time so a smaller arc is traversed at each step

Check the camera results to ensure pictures are saved at each step

Explore camera orientation for pleasing panoramas

Port the Arduino sketch to the smaller form factor [Digispark](https://www.kickstarter.com/projects/digistump/digispark-the-tiny-arduino-enabled-usb-dev-board)  board

Power the servo and the camera trigger from the battery powered Arduino 

Trouble shoot issue with kite turning to right, and in final moments of last video, diving for the ground

###Why I'm interested
Integration of simple computing capability into our projects can provide flexibility and versatility and I'd like to learn more about using these small boards. People have expressed in making aerial panoramas.