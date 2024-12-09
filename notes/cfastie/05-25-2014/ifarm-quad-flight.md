---
title: iFarm quad flight
tagnames: new-hampshire, farmhack, uav, farm, aerial-photography, infragram, ifarm, northeast, mobius, uas, ifarm2014, response:10503, multirotor
author: cfastie
path: /notes/cfastie/05-25-2014/ifarm-quad-flight.md
nid: 10511
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/004/454/original/iFarmSat2812-2.jpg)

# iFarm quad flight

by [cfastie](../profile/cfastie) May 25, 2014 00:33

May 25, 2014 00:33 | Tags: [new-hampshire](../tag/new-hampshire), [farmhack](../tag/farmhack), [uav](../tag/uav), [farm](../tag/farm), [aerial-photography](../tag/aerial-photography), [infragram](../tag/infragram), [ifarm](../tag/ifarm), [northeast](../tag/northeast), [mobius](../tag/mobius), [uas](../tag/uas), [ifarm2014](../tag/ifarm2014), [response:10503](../tag/response:10503), [multirotor](../tag/multirotor)

----

Saturday afternoon at [iFarm 2014](http://publiclab.org/tag/ifarm2014) was aerial photography time. Dorn's Bixler plane flew with an Infragram PowerShot A2200, I flew a [Fled kite lofting a PowerShot S95](http://publiclab.org/notes/cfastie/05-23-2014/ifarm-aeries), and Ned flew his quadcopter with an Infragram Mobius ActionCam.  
.  
[![iFarmSat2853-2.jpg](https://i.publiclab.org/system/images/photos/000/004/455/medium/iFarmSat2853-2.jpg)](https://i.publiclab.org/system/images/photos/000/004/455/original/iFarmSat2853-2.jpg)  
*The orange mass is duct tape holding a Mobius ActionCam between the landing legs of Ned's quadcopter.*  
.  
This UAV is a 3D Robotics Quad-C Frame quadcopter with an APM 2.5 autopilot. I duct taped the Mobius to a bracket made from a paper coffee cup and taped the cup on the underside of the UAV. It was in timelapse mode shooting every five seconds. Ned programmed some waypoints which the UAV visited at an elevation of 100 meters, and then he landed it manually. The camera captured 75 photos during a six minute flight over the ponds and field.  
.  

[![iFarmSat2839-2.jpg](https://i.publiclab.org/system/images/photos/000/004/456/medium/iFarmSat2839-2.jpg)](https://i.publiclab.org/system/images/photos/000/004/456/original/iFarmSat2839-2.jpg)  
*Everyone is watching the quadcopter follow it's preprogrammed route except Don who is ordering PCBs from OSH Park.*  
.  
The Mobius can be purchased with two different lenses: the standard really wide angle lens (87° FOV) or the really, really, terribly wide angle lens (116° FOV). This one had the standard lens which is good for first person view video, but has too much fish-eye distortion for aerial still photos. I think the distortion would make it hard to stitch these photos together into a map or panorama, although the distortion could be removed first.  
.  
<iframe width="853" height="480" src="//www.youtube.com/embed/pSFhkx7XQUs?rel=0" frameborder="0" allowfullscreen></iframe>  
.  
I had removed the IR block filter from this Mobius without replacing it with anything. It flew with a Wratten 25A filter in front of the lens in the [Filter-O-Matic](http://publiclab.org/notes/cfastie/04-18-2014/mobius-filter-o-matic). I think that arrangement is responsible for the fuzziness near some edges of the photos. I will install a filter inside the lens housing and hope that the photos are clearer.  The lack of sharpness could also be due to the focus being incorrect. I did not tighten the set screw holding the lens because leaving it loose allows adjusting the focus, but I might not have found the perfect adjustment for aerial photos. 
.  

[![IMAG0018sNDVI.jpg](https://i.publiclab.org/system/images/photos/000/004/457/medium/IMAG0018sNDVI.jpg)](https://i.publiclab.org/system/images/photos/000/004/457/original/IMAG0018sNDVI.jpg)  
*Red filtered Infragram from the Mobius ActionCam (left), and NDVI from that photo (right). The curved swath across the photo is where Dorn planted a barley mix last fall.*  
.  
NDVI from the Infragram photos distinguishes the established hay field from the swath that was planted in barley and vetch (and other grasses?) last fall. Planting the seed exposed some soil which is still bare and provides an NDVI value distinct from the undisturbed hay.  
.  

[![IMAG00243Pan.jpg](https://i.publiclab.org/system/images/photos/000/004/458/large/IMAG00243Pan.jpg)](https://i.publiclab.org/system/images/photos/000/004/458/original/IMAG00243Pan.jpg)  
*Another Mobius Infragram of the same field with two NDVI images. The upper NDVI image does not distinguish the young barley from the hay field as well as in the previous scene (above). More of the barley swath crosses the threshold to blue (NDVI < zero) when the DNs in the NDVI jpeg are reduced by 3 (lower image).*  
.  
These Infragram photos produce NDVI images with limited dynamic range. Each pixel has a value (DN) between 0 and 255 to reperesent NDVI values between -1 and +1. The hayfield and barley swath seem to be differentiated by only several DNs. This limited dynamic range apparently allows the two Infragram photos above to produce rather different NDVI results (the barley is either NDVI > 0 or NDVI < 0).  I might try different camera settings to increase the dynamic range. 

The settings used here are below.  The shutter speeds recorded in the EXIF header of these photos is between 1/7,000 and 1/13,000 of a second. That is obviously not a mechanical shutter.
.  

[![MobiusSet.JPG](https://i.publiclab.org/system/images/photos/000/004/459/large/MobiusSet.JPG)](https://i.publiclab.org/system/images/photos/000/004/459/original/MobiusSet.JPG)  
*Screen capture from Mobius mSetup with the photo settings used here.*  
.  

I will see if I can make some progress stitching photos from Dorn's Bixler flight with an Infragram PowerShot A2200.






