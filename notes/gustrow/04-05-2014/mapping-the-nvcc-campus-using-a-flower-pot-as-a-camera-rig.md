---
title: "Mapping the NVCC campus using a flower pot as a camera rig"

tagnames: 'balloon-mapping, near-infrared-camera, triggering, chdk, field-test, photo-rig, southeast, virginia'
author: gustrow
path: /notes/gustrow/04-05-2014/mapping-the-nvcc-campus-using-a-flower-pot-as-a-camera-rig.md
nid: 10267
uid: 57645

---

![](https://publiclab.org/public/system/images/photos/000/003/510/original/DSC_0224-XL.jpg)

# Mapping the NVCC campus using a flower pot as a camera rig

by [gustrow](../../../profile/gustrow) | April 05, 2014 00:34

April 05, 2014 00:34 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [triggering](../tag/triggering), [chdk](../tag/chdk), [field-test](../tag/field-test), [photo-rig](../tag/photo-rig), [southeast](../tag/southeast), [virginia](../tag/virginia)

----

###What I want to do
This was part of my internship project at the Northern Virginia Community College (NVCC), where I did my certification in GIS.

The goal was to develop a cheap platform to capture nadir images of the campus in visual spectrum as well as NIR (Near Infrared).

More info about the project at http://blogs.nvcc.edu/spatialmatters/2013/05/07/nova-weather-balloon-initial-flight/

###My attempt and results
Because of the tight budget most of the components were re-purposed and recycled, like the old Canon cameras (Powershot a720) and $2 flower pot used as a camera rig. 

The balloon kit was purchased from Public Laboratory.

Ironically the most expensive item was the helium, at more than $200 a tank.

The mount at the bottom is plywood that I laser cut at Nova-Labs, a maker space in Reston, VA.

I uploaded the vector files I used to https://www.dropbox.com/sh/3fiw33ib9uctwmp/4QMXQPC-qc

For a video showing the laser cut https://www.youtube.com/watch?v=Ua0hD8Hs5qA

[![fr_4674_small.jpg](https://i.publiclab.org/system/images/photos/000/003/492/medium/fr_4674_small.jpg)](https://i.publiclab.org/system/images/photos/000/003/492/original/fr_4674_small.jpg)


The "flower pot" was purchased from a local hardware store and is also available online at http://www.homedepot.com/p/Dynamic-Design-Newbury-8-in-x-8-in-Lotus-Green-Poly-Planter-NB0824LO/203629861

[![flowerpots.jpg](https://i.publiclab.org/system/images/photos/000/003/558/medium/flowerpots.jpg)](https://i.publiclab.org/system/images/photos/000/003/558/original/flowerpots.jpg)


An Ardupilot, GPS and 3DR telemetry was used to see current altitude, location and attitude in real time as well as log the entire flight.

[![flower_pot_capsule_v2.png](https://i.publiclab.org/system/images/photos/000/003/513/medium/flower_pot_capsule_v2.png)](https://i.publiclab.org/system/images/photos/000/003/513/original/flower_pot_capsule_v2.png)


CHDK firmware was installed in both cameras (RGB and NIR), and an Arduino was used as a timer or intervalometer to trigger the cameras at the same time. 

Check out this link to see a working demo:  https://www.youtube.com/watch?v=MAaqCgkbVyE

[![intervalometer_v1.jpg](https://i.publiclab.org/system/images/photos/000/003/493/medium/intervalometer_v1.jpg)](https://i.publiclab.org/system/images/photos/000/003/493/original/intervalometer_v1.jpg)

[![DSC_0188-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/512/medium/DSC_0188-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/512/original/DSC_0188-XL.jpg)


[![DSC_0178-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/499/medium/DSC_0178-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/499/original/DSC_0178-XL.jpg)


[![DSC_0197-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/500/medium/DSC_0197-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/500/original/DSC_0197-XL.jpg)


[![DSC_0224-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/515/medium/DSC_0224-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/515/original/DSC_0224-XL.jpg)


[![DSC_0246-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/503/medium/DSC_0246-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/503/original/DSC_0246-XL.jpg)


[![IMG_3584.JPG](https://i.publiclab.org/system/images/photos/000/003/501/medium/IMG_3584.JPG)](https://i.publiclab.org/system/images/photos/000/003/501/original/IMG_3584.JPG)


[![DSC_0278-XL.jpg](https://i.publiclab.org/system/images/photos/000/003/502/medium/DSC_0278-XL.jpg)](https://i.publiclab.org/system/images/photos/000/003/502/original/DSC_0278-XL.jpg)


Comparison of the RGB and the NIR images

[![RGB_and_NIR.jpg](https://i.publiclab.org/system/images/photos/000/003/504/medium/RGB_and_NIR.jpg)](https://i.publiclab.org/system/images/photos/000/003/504/original/RGB_and_NIR.jpg)


NDVI processing

[![IMG_3055_envi_ndvi.png](https://i.publiclab.org/system/images/photos/000/003/507/medium/IMG_3055_envi_ndvi.png)](https://i.publiclab.org/system/images/photos/000/003/507/original/IMG_3055_envi_ndvi.png)


Stitching of 100+ images

[![stitch_rgb_planarmotion1_sm.jpg](https://i.publiclab.org/system/images/photos/000/003/505/medium/stitch_rgb_planarmotion1_sm.jpg)](https://i.publiclab.org/system/images/photos/000/003/505/original/stitch_rgb_planarmotion1_sm.jpg)


###Applications
This platform is great for educational purposes and to map small areas, like archaeological sites and small farms and to do citizen journalism. 

###Thanks
NVCC.edu Prof. Michael Krimmer, Prof. Jason Brown, Prof. Charlotte Cain, Janice Ouellette.

ScholarsLab.org

PublicLaboratory.org

Nova-Labs.org

DCdrone.org

###Contact Info
Gustavo R Zastrow 

gr2178@email.vccs.edu