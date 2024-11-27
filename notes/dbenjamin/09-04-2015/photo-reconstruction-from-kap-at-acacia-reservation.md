---
nid: 12199
title: Photo Reconstruction from KAP at Acacia Reservation
path: public/static/notes/dbenjamin/09-04-2015/photo-reconstruction-from-kap-at-acacia-reservation.md
uid: 444468
tagnames: kite-aerial-photography,kap,autokap,kaptery,saturnv,skyshield,point-cloud
---

# Photo Reconstruction from KAP at Acacia Reservation

###What I want to do
We decided to check out [Acacia Reservation](http://maps.clevelandmetroparks.com/url/Nrg), which was an old golf course that has been allowed to grow freely for the past year. We also wanted to test our new helikite using the Saturn V aerial rig. 

###My attempt and results
We used Mode 2 (9,9,8,6,3, slow) on a Canon S100 RGB Camera mounted on the Saturn V w/ Skyshield v2.041. 

[![IMG_5019.JPG](https://i.publiclab.org/system/images/photos/000/011/479/medium/IMG_5019.JPG)](https://i.publiclab.org/system/images/photos/000/011/479/original/IMG_5019.JPG)

[![IMG_5018.JPG](https://i.publiclab.org/system/images/photos/000/011/477/medium/IMG_5018.JPG)](https://i.publiclab.org/system/images/photos/000/011/477/original/IMG_5018.JPG)

I discovered afterwards that the camera was only taking a photo every other angle, so we did not have enough photos to input into ICE, but I still tried to perform a 3D reconstruction using [OpenDroneMap](https://github.com/OpenDroneMap/OpenDroneMap). I was unable to create a textured mesh, but still produced a decent dense point cloud:

http://plas.io/?s=https://cleveland-metroparks.github.io/acacia-point-cloud/acacia.las

You can download the original ply file [here](https://github.com/cleveland-metroparks/acacia-point-cloud/) and view it using software such as Meshlab.

Here are a few photos from the flight:


[![IMG_1736.JPG](https://i.publiclab.org/system/images/photos/000/011/480/medium/IMG_1736.JPG)](https://i.publiclab.org/system/images/photos/000/011/480/original/IMG_1736.JPG)
[![IMG_1738.JPG](https://i.publiclab.org/system/images/photos/000/011/481/medium/IMG_1738.JPG)](https://i.publiclab.org/system/images/photos/000/011/481/original/IMG_1738.JPG)


[![IMG_1735.JPG](https://i.publiclab.org/system/images/photos/000/011/482/medium/IMG_1735.JPG)](https://i.publiclab.org/system/images/photos/000/011/482/original/IMG_1735.JPG)


[![IMG_1732.JPG](https://i.publiclab.org/system/images/photos/000/011/483/medium/IMG_1732.JPG)](https://i.publiclab.org/system/images/photos/000/011/483/original/IMG_1732.JPG)


[![IMG_1737.JPG](https://i.publiclab.org/system/images/photos/000/011/484/medium/IMG_1737.JPG)](https://i.publiclab.org/system/images/photos/000/011/484/original/IMG_1737.JPG)


[![IMG_1733.JPG](https://i.publiclab.org/system/images/photos/000/011/485/medium/IMG_1733.JPG)](https://i.publiclab.org/system/images/photos/000/011/485/original/IMG_1733.JPG)

[![IMG_1734.JPG](https://i.publiclab.org/system/images/photos/000/011/486/medium/IMG_1734.JPG)](https://i.publiclab.org/system/images/photos/000/011/486/original/IMG_1734.JPG)

###Questions and next steps
Why did the camera only take photos every other angle? Is it a CHDK setting, or something in SkyShield? 

We would like to fly acacia a few more times to get a full reconstruction. It would be interesting to see how the land has changed since the Metroparks acquired the property. 




