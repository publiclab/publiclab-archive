---
title: 'DJI UAV mapping with Gimp correction of fisheye effect'
tagnames: fisheye, aerial-mapping, uav-mapping, gimp, dji, lens-distortion, activity:lens-distortion, lens-correction, activity:lens-correction
author: patcoyle
path: /notes/patcoyle/03-17-2015/dji-uav-with-gimp-correction-of-fisheye-effect.md
nid: 11684
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/009/284/original/both_w_DJI_frm_ppt.jpg)

# DJI UAV mapping with Gimp correction of fisheye effect

by [patcoyle](../profile/patcoyle) March 17, 2015 03:18

March 17, 2015 03:18 | Tags: [fisheye](../tag/fisheye), [aerial-mapping](../tag/aerial-mapping), [uav-mapping](../tag/uav-mapping), [gimp](../tag/gimp), [dji](../tag/dji), [lens-distortion](../tag/lens-distortion), [activity:lens-distortion](../tag/activity:lens-distortion), [lens-correction](../tag/lens-correction), [activity:lens-correction](../tag/activity:lens-correction)

----

###What I want to do
Continue to explore mapping with corrections to fisheye effect in images from low altitude UAVs (like this DJI Phantom flight). See [prior note](http://publiclab.org/notes/patcoyle/11-27-2014/initial-results-pl-mobius-infragram-point-and-shoot-on-parrot-ar-drone-2-0) and [note](http://publiclab.org/notes/patcoyle/11-27-2014/initial-results-using-ptlens-to-correct-fisheye-effect-in-pl-mobius-infragram-point-and-shoot).

###My attempt and results
Peter Swigert returned my helium tanks, kite gear, and cameras and demonstrated the DJI Phantom their team is using. 

Peter is a graduate student at the UC Berkeley School of Information studying information management and systems. Their team is working on an initiative is to increase the ability of educators, community leaders and activists to gather and analyze imagery data about their community. They are focusing on the use case of helping people understand the effects of water use and drought in their community through imagery analysis, and are hoping to build off of the work that Public Lab has already done with tools like Mapknitter and Infragram.

This short video shows the set up, flight, and stowing of the DJI and Peter discusses its use in the context of their project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lqN0jm4v44U" frameborder="0" allowfullscreen></iframe>

Peter shared a few images from the quick flight and I [used Gimp to apply lens correction distortion to correct for fisheye effect](http://classroom.synonym.com/correct-fisheye-gimp-19646.html) from the DJI Phantom Vision FC200 on-board camera and cropped to a an interior selection with minimal distortion. 


[![Gimp_ss_crpd.jpg](https://i.publiclab.org/system/images/photos/000/009/287/medium/Gimp_ss_crpd.jpg)](https://i.publiclab.org/system/images/photos/000/009/287/original/Gimp_ss_crpd.jpg)



I made this [single image map](https://mapknitter.org/maps/dji-gimp-lens-corrected-image) from the highest altitude image from the flight of DJI quad. I'm having a few issues with MapKnitter 2, that I've noted in GitHub.

[![map_ss.jpg](https://i.publiclab.org/system/images/photos/000/009/286/medium/map_ss.jpg)](https://i.publiclab.org/system/images/photos/000/009/286/original/map_ss.jpg)



###Questions and next steps
Continue to explore situations where this combination of gear makes sense.
###Why I'm interested
The increasing availability of inexpensive UAVs, like the DJI Phantom, together with ability to correct fisheye effect, makes for another aerial mapping tool in the toolbox.