---
title: "Improved configuration: Arduino driven servo with CHDK for aerial panoramas"\ntagnames: 'arduino, aerial-photography, panorama, autokap'
author: patcoyle
path: /notes/patcoyle/05-25-2014/improved-configuration-arduino-driven-servo-with-chdk-for-aerial-panoramas.md
nid: 10512
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/004/460/original/IMG_4545.JPG)

# Improved configuration: Arduino driven servo with CHDK for aerial panoramas

by [patcoyle](../profile/patcoyle) | May 25, 2014 07:10

May 25, 2014 07:10 | Tags: [arduino](../tag/arduino), [aerial-photography](../tag/aerial-photography), [panorama](../tag/panorama), [autokap](../tag/autokap)

----

###What I want to do
Incorporate suggestions on [initial results](http://publiclab.org/notes/patcoyle/05-22-2014/initial-results-kap-with-arduino-driven-servo-with-chdk-for-panoramas) for Arduino control of Parallax servo with CHDK for aerial panoramas. [Also the new commets on this note.]
###My attempt and results
I incorporated Chris Fastie's suggestions on the initial results: 


For single servo (rotation only) panoramas, make a jig to hold the camera sideways to capture more of the scene with the camera in portrait position. 


[![IMG_4542.JPG](https://i.publiclab.org/system/images/photos/000/004/461/medium/IMG_4542.JPG)](https://i.publiclab.org/system/images/photos/000/004/461/original/IMG_4542.JPG)


[![IMG_4543.JPG](https://i.publiclab.org/system/images/photos/000/004/462/medium/IMG_4543.JPG)](https://i.publiclab.org/system/images/photos/000/004/462/original/IMG_4543.JPG)


[![IMG_4546.JPG](https://i.publiclab.org/system/images/photos/000/004/468/medium/IMG_4546.JPG)](https://i.publiclab.org/system/images/photos/000/004/468/original/IMG_4546.JPG)




[![IMG_4547.JPG](https://i.publiclab.org/system/images/photos/000/004/463/medium/IMG_4547.JPG)](https://i.publiclab.org/system/images/photos/000/004/463/original/IMG_4547.JPG)

Alternatively, I could have reconfigures it like it is offered at [Brooxes](http://www.brooxes.com/newsite/BBKK/KITS.html).


[![BEAKcanon3web.jpg](https://i.publiclab.org/system/images/photos/000/004/464/medium/BEAKcanon3web.jpg)](https://i.publiclab.org/system/images/photos/000/004/464/original/BEAKcanon3web.jpg)



Slow the speed of the servo, hopefully to settle the camera for the shot at that speed. This video shows results of varying servo rotation speed, duration of rotation, and delay before triggering camera again.

<iframe width="560" height="315" src="//www.youtube.com/embed/TCJa00R77wk" frameborder="0" allowfullscreen></iframe>

This video shows results of trying to incorporate  the additional suggestions Chris made: 

You could probably rotate just a bit more with each step. 

For time to have camera save, another second or so delay could be safer. 

<iframe width="560" height="315" src="//www.youtube.com/embed/OnrQmnyo_To" frameborder="0" allowfullscreen></iframe>

Here is ground-based test video. I also tried setting the shutter speed to 1/800 second per the comment by Chris. 

<iframe width="420" height="315" src="//www.youtube.com/embed/GXSKP4MM9Vc" frameborder="0" allowfullscreen></iframe>
However, looking at the images, I didn't get it right. The exposures vary, are slower than 1/800, and the images are blurry. For example:

[![IMG_0406.JPG](https://i.publiclab.org/system/images/photos/000/004/465/medium/IMG_0406.JPG)](https://i.publiclab.org/system/images/photos/000/004/465/original/IMG_0406.JPG)



So, that needs attention.

Restored CHDK defaults, then reset remote shutter parameters and retested. Here's the sketch:

<a href="https://i.publiclab.org/system/images/photos/000/004/470/original/CHDK_100_ms1450_dly4.ino"><i class="icon icon-file"></i> CHDK_100_ms1450_dly4.ino</a>



<iframe width="560" height="315" src="//www.youtube.com/embed/m4WdDcfjCG4" frameborder="0" allowfullscreen></iframe>

Better. Images ok, PhotoShop Photomerge panorama looks reasonable.

[![A495_auto_ground_test__Panorama1.jpg](https://i.publiclab.org/system/images/photos/000/004/466/medium/A495_auto_ground_test__Panorama1.jpg)](https://i.publiclab.org/system/images/photos/000/004/466/original/A495_auto_ground_test__Panorama1.jpg)


I still need to revisit setting the shutter speed to 1/800 second per the comments by Chris.

I flew it with the revised configuration. The PhotoShop Photomerge panorama shown as the main image looks reasonable. 

As the video indicates, the Delta Levitation behaved better at altitude, but dove to the ground after I had the camera down.

<iframe width="560" height="315" src="//www.youtube.com/embed/Rx83Vgb_kek" frameborder="0" allowfullscreen></iframe>




Mathew Lippincott commented that the controller looks like it can do dual camera triggers. In the past, [I've used the simpler sketch to just trigger two cameras ](http://publiclab.org/notes/patcoyle/1-30-2013/chdk-usb-remote-shutter-digispark-sketch)and it may be possible to get two into this "Beak" rig, but it looks tight. I expect the [Titan 2 dual-camera rig from Chris Fastie ](http://publiclab.org/notes/cfastie/04-28-2014/the-titan-2-rig)would be a better set up.
###Questions and next steps

See what other improvements are needed. 
###Why I'm interested

The flexibility to modify the sketch to adjust speed and timing is benefit of Integration of simple computing capability into our projects.

