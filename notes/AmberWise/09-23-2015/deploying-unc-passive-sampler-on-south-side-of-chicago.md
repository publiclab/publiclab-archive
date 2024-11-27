---
nid: 12238
title: Deploying UNC passive sampler on South Side of Chicago
path: public/static/notes/AmberWise/09-23-2015/deploying-unc-passive-sampler-on-south-side-of-chicago.md
uid: 450902
tagnames: imagej,air-quality,tools,dust,chicago,pm,barnstar:empiricism,particle-sensing,particle-monitoring,openair,passive-particle-monitors,damarquis,monterrior,pagyebo,passive-pm,activity:pm,activity:passive-particle-monitors,activity:passive-pm
---

# Deploying UNC passive sampler on South Side of Chicago

###Why we're interested
We're a group of 3 undergraduate students and 2 faculty at Chicago State University working with Publiclab to collect data on aerosol particles in the environment.  Our university has optical and electron microscope capabilities, so we hope to provide data to support this method as a reliable way to monitor aerosol particulate matter.  
###What we want to do
Our plan is to place passive monitors at different locations - near petcoke piles and then comparison samples at other locations.  Our first location is near 99th St. and Interstate 94 on the South Side of Chicago.  We chose this for its proximity to campus, and its proximity to a major highway in the hopes we can identify diesel particles and compare urban traffic air pollution to petcoke pile particles.
As has been [detailed previously](http://publiclab.org/notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method), passive sampler devices are used to collect air samples and are then analyzed [using optical microscopy](http://publiclab.org/notes/mathew/09-04-2015/analyzing-passive-monitors) and scanning electron microscopy (SEM).  The optical microscopy will be [analyzed by software](http://publiclab.org/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples) and should give us answers about the concentration of particles in the air, while the electron microscope data will hopefully tell us what elements are present in the particles.  This will be useful when trying to determine if particles are sand (Silicon and oxygen atoms mainly present) or if they're carbon-based (petcoke and/or diesel should contain mostly carbon, possibly other elements).  
  
###Our attempt and results
Our first attempt at receiving the device and setting it up outside is as follows:
We rinsed the glass coverslip with ethanol from a wash bottle, dried mostly with a low-lint wipe (Kimwipes brand) and then dried completely using compressed air from an electronics duster as seen in the photo.

[![drying_slide_w__air.JPG](https://i.publiclab.org/system/images/photos/000/011/659/medium/drying_slide_w__air.JPG)](https://i.publiclab.org/system/images/photos/000/011/659/original/drying_slide_w__air.JPG)

we then quickly place the coverslip on the SEM stub, and cover with the cap/screen that's been sealed with a post-it tag.  
We placed the collection device (SEM stub with mesh cap) into the passive sampler attached to a clamp and placed outside. We waited until everything was set up before removing the protective post-it cover with a tweezer (difficult to reach in with your hand now that the device is assembled). 
[![post_it_removal.JPG](https://i.publiclab.org/system/images/photos/000/011/673/medium/post_it_removal.JPG)](https://i.publiclab.org/system/images/photos/000/011/673/original/post_it_removal.JPG)


The door in the photo is normally closed, so the sampler is in the open air.  The interstate is 50-100 feet from the sampler, on the other side of the chainlink fence/bushes.

[![device_not_level.JPG](https://i.publiclab.org/system/images/photos/000/011/660/medium/device_not_level.JPG)](https://i.publiclab.org/system/images/photos/000/011/660/original/device_not_level.JPG)

The sampler was collected 72 hours later and imaged using a Zeiss optical microscope.
We were unable to detect any dark colored particles.  The images below are taken at 40X magnification and show some particles that I suspect are either fingerprints/incomplete cleaning or glass dust from the slides because they appear transparent.  

[![ARW_091815_1150918_002.JPG](https://i.publiclab.org/system/images/photos/000/011/662/medium/ARW_091815_1150918_002.JPG)](https://i.publiclab.org/system/images/photos/000/011/662/original/ARW_091815_1150918_002.JPG)

We also imaged a calibration spot so we can check image analysis software.  The circle is exactly 0.07mm in diameter and was taken with the 40x lens.  

[![ARW_091815_40x_1optivar_0_07mm.jpg](https://i.publiclab.org/system/images/photos/000/011/663/medium/ARW_091815_40x_1optivar_0_07mm.jpg)](https://i.publiclab.org/system/images/photos/000/011/663/original/ARW_091815_40x_1optivar_0_07mm.jpg)

 

###Questions and next steps
The next sample is already deployed and collecting particles now in the same location, but no glass coverslip, only bare metal SEM stub.  Reasoning: the two different microscopy methods have different limitations, and the electron microscope cannot image glass slides without significant charging effects interfering with the image collection.  So, we are using a metal surface for the next experiment, and leaving the sampler out for a longer period of time to ensure sufficient numbers of particles are collected and we can use the SEM to image them. 
 
Some other things to be aware of: there are some challenges to manipulating the tiny screws that keep the plastic cap on the SEM

Some issues to focus on next will be how to make the device more level, and creating a reproduceable, clean sample collection protocol.  
There are more sampling devices arriving very shortly, so we'll be deploying some near the petcoke piles and will keep updating as our data comes in.