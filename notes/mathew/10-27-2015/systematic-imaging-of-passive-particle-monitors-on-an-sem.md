---
title: "Systematic Imaging of Passive particle monitors on an SEM"

tagnames: 'image-processing, air-quality, dust, silica, particle-sensing, image-analysis, passive-particle-monitors, passive-pm, with:damarquis, with:amberwise, particle-imaging'
author: mathew
path: /notes/mathew/10-27-2015/systematic-imaging-of-passive-particle-monitors-on-an-sem.md
nid: 12338
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/012/179/original/SND_on_carbon3.jpg)

# Systematic Imaging of Passive particle monitors on an SEM

by [mathew](../../../profile/mathew) | October 27, 2015 20:39

October 27, 2015 20:39 | Tags: [image-processing](../tag/image-processing), [air-quality](../tag/air-quality), [dust](../tag/dust), [silica](../tag/silica), [particle-sensing](../tag/particle-sensing), [image-analysis](../tag/image-analysis), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [with:damarquis](../tag/with:damarquis), [with:amberwise](../tag/with:amberwise), [particle-imaging](../tag/particle-imaging)

----

I did this work with Paul, @Damarquis, Dr. @AmberWise and Dr. Andrew Marselli on the SEM

###Goals
We are comparing samples setup with materials appropriate to Scanning Electron Microscopy (SEM) with materials appropriate to visible light microscopy.  We want to co-deploy samples for both methods and see if we get pretty good correspondence, and whether we can use the same [analysis methods in ImageJ](/notes/mathew/09-04-2015/analyzing-passive-monitors).  Correspondence would help validate our visible light technique, and while SEM equipment is a good bit more expensive the process could potentially be more automated. 

###Setup
@AmberWise and I picked up a one-week sample set out behind the Jays Potato Chip Factory, and brought it in so Paul, @Damarquis, and I could analyze it on a SEM with the help of Dr. Andrew Marselli.  The Sample didn’t have glass on top of an aluminum stub, instead, the stub was graphite with carbon tape as the collection surface. 

Unlike the microscope, the JEOL 6016 SEM has an indexed stage, so we can track where the image is on the sample.  We are not sure whether we can script the taking of images on the SEM, but it seems likely.  As a proprietary instrument with proprietary software, there’s very little we can do ourselves without he assistance of [Jeol.](http://www.jeolusa.com).  

###Systematic Imaging Brainstorm
We brainstormed some goals and decided to find a magnification level that seemed to produce a clear perimeter around PM10 particles, determine the survey area, then determine a pattern that would give us a series of images of the survey area.

We had difficulty on the stub identifying the sample area, so we decided 
1) we should probably mark it more clearly next time, and; 
2) we would survey only a 5mm circle within the 6.8mm sample area, in order to control for any slop in our assumptions about the center of the sample area.

My [supposition about the optical methods documented by Ott](/notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors) was that they took a series of 40 rectangular images across the survey area. We thought about taking that many photos manually and stepping through the pattern, then we collectively sighed.  It sounded kind of horrible.  Then @Damarquis suggested it would be easier and produce plenty of test images to run two transects across the image, indexed as a set of “steps” away from center.  That sounded more doable.

My version of Ott's survey and Damarquis's suggestion illustrated:

[![sample_directions.png](https://i.publiclab.org/system/images/photos/000/012/178/medium/sample_directions.png)](https://i.publiclab.org/system/images/photos/000/012/178/original/sample_directions.png)

Our steps in order were:

* Found the center
* Setup a magnification of 300 at a  Z height of 11mm and a working distance of 9mm
* determined the dimensions of our field fo view, which was 420um wide and 310um high
* Used a calculator to calculate vertical (Y) and horizontal (X) offsets for our two transects.
* Stepped through and saved our images along those two transects.
