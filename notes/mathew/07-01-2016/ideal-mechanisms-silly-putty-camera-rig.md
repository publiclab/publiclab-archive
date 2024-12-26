---
title: "ideal mechanisms & silly putty camera rig"\ntagnames: 'kite-mapping, kap, photo-rig, autokap, kap-rigs, silly-putty, reconfigurable-rig'
author: mathew
path: /notes/mathew/07-01-2016/ideal-mechanisms-silly-putty-camera-rig.md
nid: 13255
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/016/831/original/C01-01.gif)

# ideal mechanisms & silly putty camera rig

by [mathew](../profile/mathew) | July 01, 2016 23:25

July 01, 2016 23:25 | Tags: [kite-mapping](../tag/kite-mapping), [kap](../tag/kap), [photo-rig](../tag/photo-rig), [autokap](../tag/autokap), [kap-rigs](../tag/kap-rigs), [silly-putty](../tag/silly-putty), [reconfigurable-rig](../tag/reconfigurable-rig)

----

###Goals
@Ranon is working on a [silly putty and rubber band powered automatic pan and tilt rigging for cameras](/notes/ranon/06-13-2016/silly-putty-kap-rig). The pan functionality was easy, but the tilt has been hard to implement.  I wanted to look at some ideal mechanisms and see what guidance I could find on improving/designing a better tilt system.

I started by browsing [KMODDL](http://kmoddl.library.cornell.edu/model.php) (Kinematic Models for Design Digital Library) at Cornell, a library of classic engineering teaching models of idealized mechanisms.  I found that the tilt mechanism is a version of a [4-bar linkage, well described on KMODDL](http://kmoddl.library.cornell.edu/model.php?m=234&movie=show) with mathematics tutorials, example videos, and CAD models for making a demonstration model.

[![C01-01.gif](//i.publiclab.org/system/images/photos/000/016/841/large/C01-01.gif)](//i.publiclab.org/system/images/photos/000/016/841/original/C01-01.gif)

###Lessons learned and paper prototyping
I learned that one issue with Ranon's 4-bar linkage was that the steady and moving bar were equal lengths, which lead to sticking points in the rotation.  The moving bar should remain smaller than the stable bar.

I didn't feel the need to get too far into the mathematical modeling of the system, and instead built a paper prototype to determine the lengths of the different bars in the linkage. Its just a few strips of paper held together with pins.  By pinning it in different places, rotating it, and then measuring the distance between the pins, an idealized version of the mechanism can be quickly adjusted and tried out.

I set some goals: I wanted approximately 30 degrees of angle change for the camera, and I wanted the mechanism to sit below the camera platform. 

In the paper prototype, the camera platform is on the left. Here it is at its maximum and minimum extension:

[![P_20160628_131249_HDR.jpg](//i.publiclab.org/system/images/photos/000/016/839/large/P_20160628_131249_HDR.jpg)](//i.publiclab.org/system/images/photos/000/016/839/original/P_20160628_131249_HDR.jpg)

[![P_20160628_131222_HDR.jpg](//i.publiclab.org/system/images/photos/000/016/840/large/P_20160628_131222_HDR.jpg)](//i.publiclab.org/system/images/photos/000/016/840/original/P_20160628_131222_HDR.jpg)




