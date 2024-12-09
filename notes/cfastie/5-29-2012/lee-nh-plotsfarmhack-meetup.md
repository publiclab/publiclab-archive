---
title: Lee, NH PLOTS/FarmHack Meetup
tagnames: balloon-mapping, near-infrared-camera, grassrootsmapping, ndvi, nir, farmhack, cropcover, ifarm
author: cfastie
path: /notes/cfastie/5-29-2012/lee-nh-plotsfarmhack-meetup.md
nid: 2237
uid: 554

---

![](https://publiclab.org/sites/default/files/LeePlotGrpNDVIb.jpg)

# Lee, NH PLOTS/FarmHack Meetup

by [cfastie](../profile/cfastie) May 29, 2012 13:41

May 29, 2012 13:41 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [grassrootsmapping](../tag/grassrootsmapping), [ndvi](../tag/ndvi), [nir](../tag/nir), [farmhack](../tag/farmhack), [cropcover](../tag/cropcover), [ifarm](../tag/ifarm)

----

We had a successful day last week balloon mapping an agricultural experiment study in Lee, New Hampshire.  Dorn Cox of [GreenStart](http://www.greenstartnh.org/index.php?option=com_content&view=article&id=58&Itemid=53) hosted the day at the site of a no-till trial where hairy vetch had been seeded the previous September into established hay field turf.  Thirteen different experimental treatments with four replicates each are designed to reveal the best management practices for conserving fuel, enhancing soil carbon, and reducing weeds while switching from grass-based to legume-based cover.  This is the second year this experiment has been done, and is part of Dorn’s dissertation research.  [More photos of the activity are in this Flickr set.](https://www.flickr.com/photos/chrisfastie/sets/72157629939056310/)

A dozen people from [Farm Hack](http://www.youngfarmers.org/practical/farm-hack/), PLOTS, MIT including the [D-Lab](http://d-lab.mit.edu/), [UMass Amherst](http://www.opensciencecollaboration.cc/workshop/), the  American Museum of Natural History, Middlebury College, and elsewhere got to help with the balloon mapping exercise and learn how Dorn’s innovations are empowering New England’s farmers.  We were prepared to fly kites, but the wind was perfect for ballooning.  The first rig in the air was my dual camera rigid frame with the PLOTS near infrared (NIR) and visible pair of Canon A495 cameras. One goal was to extract an NIR band and a red band from the cameras and derive the Normalized Difference Vegetation Index (NDVI) which could be a confirmation of the biomass measurements that Dorn will make in each of the 52 study plots we flew over.  Jeff then flew a single camera and demonstrated the value of a simple lightweight rig when it flew a couple hundred feet higher than my heavier rig did.  I think both approaches resulted in complete coverage of the study plots, so we have lots of images to work with.  So far we have made a few attempts at creating a [3D model of the vegetation surface](http://www.hypr3d.com/models/4fbf7a876f0c57000100005a) using Hypr3D to extract the 3D information from the photographs.  

The first flight of the dual camera NIR rig was not completely successful.  I tried three things that I had never done before with this rig: 1) I triggered the cameras via radio with a standard transmitter/receiver pair designed for R/C airplanes, 2) I had CHDK saving camera RAW files in addition to the normal jpegs, and 3) I used newly partitioned 16GB SD cards to hold all the files.  The 16GB SD cards worked great, but it takes about four or five seconds to transfer all 17-19 MB of data for each photo to the SD card, and I think I was sometimes sending the next signal too soon.  The unmodified camera failed to capture images intermittently, and then stopped capturing altogether.  I discovered this when we brought the rig down to check on things, and then it happened again when it was redeployed.  So I switched to timer control using the [MK111 timer](http://publiclaboratory.org/notes/cfastie/5-10-2012/flight-ready-mk111-timer) that shipped with the Kickstarter NIR/visible camera kit. That was set to send a pulse every eight seconds, and worked flawlessly.  That was the first flight of Kickstarter NIR/visible camera pair and timer.  Between the three flights of the NIR /visible camera pair we will probably be able to produce full coverage of the study area in NDVI and NRG.

I suspect there will be some more notes posted here when progress is made processing the images.  I am looking for the best way to batch convert the CHDK camera RAW files to tiff.  Ned Horning is working on his script to register the NIR and visible photo pairs and compute NDVI and NRG values for each pixel.  These mapping flights broke new ground for the PLOTS NIR/visible camera tool, and it seems to have performed admirably.
