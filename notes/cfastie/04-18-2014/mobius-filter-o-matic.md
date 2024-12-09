---
title: Mobius Filter-O-Matic
tagnames: near-infrared-camera, ndvi, infrared, infragram, 3d-printing, infragram-sandbox, mobius-actioncam, response:10324, mobius, infragram-point-shoot, upgrade:multispectral-imaging, upgrade:mobius, upgrade:infragram-point-shoot, upgrade:mobius-action-cam
author: cfastie
path: /notes/cfastie/04-18-2014/mobius-filter-o-matic.md
nid: 10327
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/003/706/original/MobTest-379-83.jpg)

# Mobius Filter-O-Matic

by [cfastie](../profile/cfastie) April 18, 2014 15:14

April 18, 2014 15:14 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [3d-printing](../tag/3d-printing), [infragram-sandbox](../tag/infragram-sandbox), [mobius-actioncam](../tag/mobius-actioncam), [response:10324](../tag/response:10324), [mobius](../tag/mobius), [infragram-point-shoot](../tag/infragram-point-shoot), [upgrade:multispectral-imaging](../tag/upgrade:multispectral-imaging), [upgrade:mobius](../tag/upgrade:mobius), [upgrade:infragram-point-shoot](../tag/upgrade:infragram-point-shoot), [upgrade:mobius-action-cam](../tag/upgrade:mobius-action-cam)

----

To figure out how to get the best plant health images with a Mobius ActionCam, I will remove the IR block filter, but I want to test a few different replacement filters. So I made a device that holds the camera and has a filter holder in front of the lens.  
[![MobTest-379-24.jpg](https://i.publiclab.org/system/images/photos/000/003/707/medium/MobTest-379-24.jpg)](https://i.publiclab.org/system/images/photos/000/003/707/original/MobTest-379-24.jpg)  
*A slot allows a filter to be slid in front of the lens.*  

The Mobius comes with a bracket that slides onto the bottom of the camera and locks securely. There are a few versions of this on Thingiverse, and I started by downloading the stl file of a [simple version by nicksdesign](http://www.thingiverse.com/thing:131187). MeshLab opened the stl file and saved it as a Collada file (dae) which Sketchup can import.  When I was done tinkering in Sketchup there was not much left of the original design.  

[![mobiusFilterOrg_New.jpg](https://i.publiclab.org/system/images/photos/000/003/708/medium/mobiusFilterOrg_New.jpg)](https://i.publiclab.org/system/images/photos/000/003/708/original/mobiusFilterOrg_New.jpg)  
*The file from nicksdesign (top) and the final version (bottom).*

I added a threaded tripod socket ([by pasting from this project](http://www.thingiverse.com/thing:246855)) so I can mount the camera and easily take the same photo with different filters. The filter holder extends farther in front than it has to so it serves as a lens hood, even when no filters are being used.


[![FeaturesC.jpg](https://i.publiclab.org/system/images/photos/000/003/713/medium/FeaturesC.jpg)](https://i.publiclab.org/system/images/photos/000/003/713/original/FeaturesC.jpg)    
*The salient features of the Filter-O-Matic.*  

I made filters out of four different materials: 

- Wratten 25A gelatin: for super-red Infragram
- Rosco 2007 polyester: for infrablue Infragram
- Wratten 47B gelatin: for infrablue Infragram
- Wratten 87 polyester: for pure NIR

I wish I had a large enough piece of IR block filter so I could also take a normal photo. Has anyone converted a DSLR by removing a nice big piece of IR block filter?


[![MobTest-379-51.jpg](https://i.publiclab.org/system/images/photos/000/003/710/medium/MobTest-379-51.jpg)](https://i.publiclab.org/system/images/photos/000/003/710/original/MobTest-379-51.jpg)  
*The filters have black felt handles so I don't have to touch the filter material, and also to block light from entering behind the filter.*  

The filters are not locked in, so the rig is not for general photography or aerial photography. It's just to hold the camera in the same place and easily test different filters for the same scene under controlled conditions. 

[![MobTest-379-100.jpg](https://i.publiclab.org/system/images/photos/000/003/712/medium/MobTest-379-100.jpg)](https://i.publiclab.org/system/images/photos/000/003/712/original/MobTest-379-100.jpg)  
*The Mobius slides in along slots designed for the purpose.*

[![MobTest-379-8PS.jpg](https://i.publiclab.org/system/images/photos/000/003/711/medium/MobTest-379-8PS.jpg)](https://i.publiclab.org/system/images/photos/000/003/711/original/MobTest-379-8PS.jpg)  
*A visor prevents light from reaching the backside of the filter. I glued a piece of black felt under the visor to improve this function.*

It's surprising how much of the design is solely to facilitate 3D printing. Allowing the slicer to build support structures to hold overhangs made a mess, especially where the delicate filters had to be slid in. So the design allows the part to be printed without support. A few ceilings print strangely, but it still functions well. The files and tips for printing are available at [Thingiverse](http://www.thingiverse.com/thing:302301).




