---
title: "Updated initial experience with Saturn V and SkyShield beta"

tagnames: 'chdk, kap, autokap, kap-rigs, kaptery, saturnv, skyshield'
author: patcoyle
path: /notes/patcoyle/06-04-2015/initial-experience-with-saturn-v-and-skyshield-beta.md
nid: 11952
uid: 77

cids: 11916,11961

---

![](https://publiclab.org/public/system/images/photos/000/010/249/original/Untitled_Panorama_exp-2.75.jpg)

# Updated initial experience with Saturn V and SkyShield beta

by [patcoyle](../../../profile/patcoyle) | June 04, 2015 23:30

June 04, 2015 23:30 | Tags: [chdk](../tag/chdk), [kap](../tag/kap), [autokap](../tag/autokap), [kap-rigs](../tag/kap-rigs), [kaptery](../tag/kaptery), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield)

----

###What I want to do
(Updated 6-5-15 and 6-7-15) 
Try the [Chris Fastie](http://publiclab.org/profile/cfastie) and [Don Blair ](http://publiclab.org/profile/donblair)Arduino controlled [Saturn V and SkyShield beta ](http://publiclab.org/notes/cfastie/05-29-2015/saturn-v-and-skyshield-beta)with pan and tilt and CHDK for aerial panoramas. [I've tried some of this myself with a different pan-only rig.](http://publiclab.org/notes/patcoyle/05-22-2014/initial-results-kap-with-arduino-driven-servo-with-chdk-for-panoramas)

###My attempt and results

(Updated 6-7-15)

Main image above is a Photoshop automated Photomerge of several images, with overexposure compensated (in part). 

Earlier results follow.

[![IMG_5725.JPG](https://i.publiclab.org/system/images/photos/000/010/220/medium/IMG_5725.JPG)](https://i.publiclab.org/system/images/photos/000/010/220/original/IMG_5725.JPG)



I assembled and tried powering up without servos and Canon A495 camera connected. As indicated in this video, the mode selection using button wasn't working.
<iframe width="420" height="315" src="https://www.youtube.com/embed/042gN-jP5ag" frameborder="0" allowfullscreen></iframe>

(Updated 6-5-15) After II emailed Chris and Don, Chris replied, pointing out the technique for mode selection requires prompt button press. With this tip ( also included in the guide  at bottom of [this page)](http://kaptery.com/product/saturn-v-rig-beta), worked fine as indicated in video below. It cycled through the modes, I could reset with the white button on the Nano, and then select desired mode, "2" as indicated by the green light.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nXAa8Nxs09Q" frameborder="0" allowfullscreen></iframe>

Proceeded to connect servos and camera and powered up again. Action as indicated in video below.

<iframe width="420" height="315" src="https://www.youtube.com/embed/XW7Yugsaw10" frameborder="0" allowfullscreen></iframe>

I then turned on the camera and powered up again. CHDK triggering is working as well as can see in video below.

<iframe width="420" height="315" src="https://www.youtube.com/embed/U3kuWOTHX9k" frameborder="0" allowfullscreen></iframe>

(Updated 6-5-15)

My initial flight attempt problems are mostly not related to the rig, but: Picavet lacings, moving parts, gears, ... what could go wrong? All kidding aside, having another person to help could have avoided these issues of getting Picavet lacings tangled in the rotating gears. I also had trouble with one of the kite line clips coming off. Since I usually use Brooks hangups, this could have just been an operator error. I had trouble with the camera cable coming loose, didn't capture any images on the initial flight. The shield pins for the camera connection are a bit vulnerable to bending, when working in the field. 

Delta 9' Levitation ready for rig attachment.

[![IMG_5732.JPG](https://i.publiclab.org/system/images/photos/000/010/231/medium/IMG_5732.JPG)](https://i.publiclab.org/system/images/photos/000/010/231/original/IMG_5732.JPG)

Rig not ready for attachment after first try.

[![IMG_5731.JPG](https://i.publiclab.org/system/images/photos/000/010/232/medium/IMG_5731.JPG)](https://i.publiclab.org/system/images/photos/000/010/232/original/IMG_5731.JPG)

Launched with Picavet tangled, clipped on with one line clip, and other tucked away. On descent, further tangled in kite line. Will try again. As indicated, most of these problems have nothing to do with the rig.
<iframe width="560" height="315" src="https://www.youtube.com/embed/TCRmlUedSOc" frameborder="0" allowfullscreen></iframe>

(Updated 6-8-15) Successful flight, but poor exposure on images. Didn't set shutter speed. Also, haven't checked coverage through the sequence to be sure camera is saving and storing fast enough or if additional delays are needed in the sketch for the A495. Other observations: Used Brooks hangups, but should have had more separation between attachment points. Didn't attach the SkyShield on its own Velcro pad or use the small piece of Velcro on the servo support with the Velcro strap to keep the cable in place. Again, camera cable came lose from the shield pins in flight. Considering other ways to ways to make the connection more secure.

[![IMG_5749_crpd.jpg](https://i.publiclab.org/system/images/photos/000/010/250/medium/IMG_5749_crpd.jpg)](https://i.publiclab.org/system/images/photos/000/010/250/original/IMG_5749_crpd.jpg)

Having someone help during start up and launch was useful. Thanks to Kathy, shown flying in video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1PIxhoQqUa8" frameborder="0" allowfullscreen></iframe>






###Questions and next steps
(Updated 6-5-15) Fly and continue to evaluate.

###Why I'm interested
Integration of simple computing capability into our projects can provide flexibility and versatility and I'd like to learn more about using these small boards. People have expressed interest in making aerial panoramas. Chris and Don fielded this in a few weeks. Kudos to them!