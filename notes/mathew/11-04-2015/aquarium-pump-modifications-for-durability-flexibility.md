---
title: Aquarium Pump modifications for Durability & Flexibility
tagnames: air-quality, air, pm, formaldehyde, open-air, particle-monitoring, indoor-air-quality, replication:11317
author: mathew
path: /notes/mathew/11-04-2015/aquarium-pump-modifications-for-durability-flexibility.md
nid: 12361
uid: 4

---

# Aquarium Pump modifications for Durability & Flexibility

by [mathew](../profile/mathew) November 04, 2015 00:18

November 04, 2015 00:18 | Tags: [air-quality](../tag/air-quality), [air](../tag/air), [pm](../tag/pm), [formaldehyde](../tag/formaldehyde), [open-air](../tag/open-air), [particle-monitoring](../tag/particle-monitoring), [indoor-air-quality](../tag/indoor-air-quality), [replication:11317](../tag/replication:11317)

###What I want to do
Create a version of the modified aquarium pump in the [formaldehyde test kit](/wiki/formaldehyde-test-kit#DIY+kit) that is flexible and can be adjusted across a widest flow range, and also protected from damage by particulates getting into the pump.

###Matching commercial pump volumes

Following @Nshapiro's [directions](/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit) I've been modifying one side of a Tetra Whisper 100 aquarium pump:

![modify the pump](https://i.publiclab.org/system/images/photos/000/010/602/original/output_ra01xV-loop.gif)

a DIY test kit: 

[![IMG_2188-edit.jpg](https://i.publiclab.org/system/images/photos/000/012/377/medium/IMG_2188-edit.jpg)](https://i.publiclab.org/system/images/photos/000/012/377/original/IMG_2188-edit.jpg)

A single-sided pump has difficulty pulling more than 300ml through a formaldehyde test tube.  Modified on both sides, it is capable of pulling  2+L/m of air through a tube or ten times as much.  Joining both sides seems to more than double the pump's capabilities, which can be adjusted from 100ml/m to 2L/m which should accomodate a range of testing tubes, and is the same spec as the $1800 Draeger X-Act 5000.  The pump came with a "T" to plug both sides together: 

[![IMG_3498.JPG](https://i.publiclab.org/system/images/photos/000/012/378/medium/IMG_3498.JPG)](https://i.publiclab.org/system/images/photos/000/012/378/original/IMG_3498.JPG)

###Filters for reliability

The air pump comes with an intake filter by default,  by modifying it to be a vacuum pump (pulling air) rather than a pressure pump (pushing air), we bypass this intake filter. While in limited testing the pumps have held their calibration, fouling will definitely ruin the pump long-term.

Most bio lab-grade vacuum pumps have [1um filters inside that are $100+](http://www.thomassci.com/Equipment/Pumps/Vacuum/_/VACU-GUARD-VACUUM-PROTECTION-FILTER?q=Vacuum%20Pump%20Tubing), which is more than 3x the cost of the pump.  This guarantees a clean airflow out the end of the pump, but if we're only concerned with fouling the interior of the pump, I think a courser industrial-grade filter will do the trick.

I found a number of $3-10 filters that filter from 25-65um in McMaster-Carr and Grainger supply catalogs. The only brand I could identify was a [KMC HFO-006](http://www.kmccontrols.com/component/kmcproducts/?view=product&amp;alias=HFO-0006), which is about [$4 in quantity](http://www.grainger.com/product/KMC-CONTROLS-Inline-Control-Air-Filters-4DDZ1?s_pp=false&picUrl=//static.grainger.com/rp/s/is/image/Grainger/4DDZ1_AS01?$smthumb$). 

All the filters I found were for 1/4" hosing, rather than the 1/8" hosing that comes with the aquarium pump and fits the formaldehyde test tubes.  I therefore had to order some 1/4" air hosing and two 1/8" - 1/4" reducer barbs. 

here's what the air setup looks like:

[![IMG_3499.JPG](https://i.publiclab.org/system/images/photos/000/012/379/medium/IMG_3499.JPG)](https://i.publiclab.org/system/images/photos/000/012/379/original/IMG_3499.JPG)


Here are the additional parts to add to the [pump's parts list](h/wiki/formaldehyde-test-kit#DIY+kit):

  * [Mcmaster filter](http://www.mcmaster.com/#8991t31/=znl0wp) or [KMC HFO-0006](http://www.grainger.com/product/KMC-CONTROLS-Inline-Control-Air-Filters-4DDZ1?s_pp=false&picUrl=//static.grainger.com/rp/s/is/image/Grainger/4DDZ1_AS01?$smthumb$)
  * requires [1/4" tubing](http://www.mcmaster.com/#5231k331/=znlp9w) and [1/8"-1/4" reducer barb fittings](http://www.mcmaster.com/#91355k31/=znloha)
