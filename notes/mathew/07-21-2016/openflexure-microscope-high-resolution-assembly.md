---
title: "OpenFlexure Microscope: high-resolution assembly"

tagnames: 'raspberry-pi, dust, frac-sand, pm, particle-monitoring, microscope, passive-particle-monitors, passive-pm, parent:frac-sand, microscopy, openflexure, activity:microscope, microscopes, activity:microscopes'
author: mathew
path: /notes/mathew/07-21-2016/openflexure-microscope-high-resolution-assembly.md
nid: 13303
uid: 4

cids: 14997,14999,15000,15002,15580,15588,15600

---

![](https://publiclab.org/public/system/images/photos/000/017/172/original/P_20160711_151836.jpg)

# OpenFlexure Microscope: high-resolution assembly

by [mathew](../../../profile/mathew) | July 21, 2016 19:17

July 21, 2016 19:17 | Tags: [raspberry-pi](../tag/raspberry-pi), [dust](../tag/dust), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-monitoring](../tag/particle-monitoring), [microscope](../tag/microscope), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [parent:frac-sand](../tag/parent:frac-sand), [microscopy](../tag/microscopy), [openflexure](../tag/openflexure), [activity:microscope](../tag/activity:microscope), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes)

----

[previously](/notes/mathew/04-17-2016/making-an-openflexure-microscope) I assembled an [OpenFlexure microscope](http://docubricks.com/projects/openflexure-microscope) using the standard optics, achieving a low resolution, approximately 10x zoom microscope.  I plan to use it to assess [Passive particle monitor](/tag/passive-pm) samples.

I've upgraded to a larger microscope body and higher magnification 40x objective lens. 

###Tools, Parts, and Files

**Tools:**

* M3 screwdriver
* needlenose pliers
* 3/32” drill bit (specifies METRIC)
* Well-tuned 3D printer

**Materials:**

* 3x 30mm M3 hex head screws
* 6x m3 washer 
* 2x 8mm M3 screws (pan head)
* 6x rubber bands 1mm cross section by 15cm unstretched
* jumper wires for Raspberry pi to LED
* white LED, 3mm dia.  and ~40 ohm resistor (or two 22 ohm resistors in series)
* OR  [7mm 6-LED endoscope with 2 meter cable](http://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=7mm+endoscope) (optional, but allows another view of the sample and dimmable light)

**Microscope Parts**

* [objective](http://www.aliexpress.com/item/40X-L-195-Plan-Achromatic-Biological-Microscope-Objective-Lens-Laboratory-Biomicroscopy-Accessories-20-2mm-for-Medical/32600189317.html?spm=2114.40010208.4.32.A7pVmT) RMS mount objective, 160mm RMS tube distance, 195mm lens to focal plane distance.

**Raspberry pi equipment:**

* Raspberry Pi
* Raspberry Pi Camera
* Keyboard, Mouse
* HDMI TV, monitor, or converter
* microUSB power supply, 2A or above

**3D print Files**

Most files are in the [OpenFlexure Github](https://github.com/rwb27/openflexure_microscope/tree/master/stl)

* main_body_LS65.stl (this is a much larger body than standard)
* optics_rms_45mm_parfocal_60mm_stage.stl
* sample_clip.stl 2x
* large_gear.stl 3x
* tilted_foot.stl 3x
* [illumination_and_rear_foot_sample_8mmLED_25arm.stl](//i.publiclab.org/system/images/photos/000/016/977/original/illumination_and_rear_foot_sample_8mmLED_25arm.stl.zip) (file for mounting endoscope camera)


###Assembly notes

The LS-65 microscope body printed with its two rear legs detached. I repaired it with some vulcanizing rubber glue, i.e. barge cement (UHU power glue).

[![P_20160614_135103.jpg](//i.publiclab.org/system/images/photos/000/016/981/large/P_20160614_135103.jpg)](//i.publiclab.org/system/images/photos/000/016/981/original/P_20160614_135103.jpg)

[![P_20160614_135054.jpg](//i.publiclab.org/system/images/photos/000/016/982/large/P_20160614_135054.jpg)](//i.publiclab.org/system/images/photos/000/016/982/original/P_20160614_135054.jpg)

I then discovered my rear leg (illuminiation_and_rear_foot_sample_Z60) was not tall enough for the LS-65 body I'd printed. To remedy this, I edited the [OpenSCAD](http://www.openscad.org/) file.  I also changed the LED size to 8mm. At the bottom of the file are editable details for its X and Y dimensions:

[![Screen_Shot_2016-07-11_at_3.07.00_PM.png](//i.publiclab.org/system/images/photos/000/016/983/large/Screen_Shot_2016-07-11_at_3.07.00_PM.png)](//i.publiclab.org/system/images/photos/000/016/983/original/Screen_Shot_2016-07-11_at_3.07.00_PM.png)

original, my first and second tries at editing the file:

[![P_20160615_141550_HDR.jpg](//i.publiclab.org/system/images/photos/000/016/984/large/P_20160615_141550_HDR.jpg)](//i.publiclab.org/system/images/photos/000/016/984/original/P_20160615_141550_HDR.jpg)

I used much smaller rubber bands for the feet attachment, and a smaller paperclip to pull them through. This made assembly of the knobs far, far easier than [before.](https://publiclab.org/notes/mathew/04-17-2016/making-an-openflexure-microscope#The+Feet+&+Gears)

###Calibration, Magnification, image defects
I bought a stage micrometer-- a small ruler mounted on a slide-- in order to check the magnification.  There are 100 rules in a millimeter, so each one is 0.01mm, or 10μm.  The model I [bought](http://www.microscope.com/accessories/reticles-micrometers/meiji-techno-ma285-stage-micrometer-1mm-100-divisions.html) is a [MEIJI Techno MA285.](http://meijitechno.com/ma285-1mm-divided-into-100-units)

Using [ImageJ](http://fiji.sc/) I set the scale of the image.  I have almost 10 pixels per μm, and my image is approximately 210μm x 280μm. 

[![Screen_Shot_2016-07-21_at_11.21.44_AM.png](//i.publiclab.org/system/images/photos/000/017/175/large/Screen_Shot_2016-07-21_at_11.21.44_AM.png)](//i.publiclab.org/system/images/photos/000/017/175/original/Screen_Shot_2016-07-21_at_11.21.44_AM.png)

The image also reveals that I got some dust on the sensor while assembling the optics.  This raspberry pi sensor has been fit five or six times, and I'm not surprised.  The next sensor I have will experience less change-over and hopefully not get dusty:

[![Screen_Shot_2016-07-21_at_12.08.09_PM.png](//i.publiclab.org/system/images/photos/000/017/176/large/Screen_Shot_2016-07-21_at_12.08.09_PM.png)](//i.publiclab.org/system/images/photos/000/017/176/original/Screen_Shot_2016-07-21_at_12.08.09_PM.png)


###Questions
I'm not sure my rubber bands pull enough.  I'm having trouble with the knobs skipping, and I can't use the full motion of the LS_65 body. I had hoped not to double them up, as the single bands made assembly a breeze, but will go back and try that.

The stage lighting has a serious color gradient, I'm not sure what to do about exposure and white balancing.

The feet still wobble a bit, and the microscope really seems to need a mount other than just its feet.  There is also vibration when using the zoom functions.  I believe mounting it to a plate and encasing the microscope will solve this issue. 


###Next steps
I should fork the repository on Github and add my build files and bill of materials.

I'm going to build the microscope into a [box](http://seahorse.net/index.php?route=product/product&product_id=61) with a [RPi touch screen](https://www.raspberrypi.org/blog/the-eagerly-awaited-raspberry-pi-display/) so I can get it portable and off my desktop.

I'm going to calibrate the zoom with a stage micrometer and check it against 2μm Polystyrene Latex (PSL) beads.
