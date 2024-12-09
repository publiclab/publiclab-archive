---
title: Pasture measurement using NIR camera
tagnames: near-infrared-camera, nir, infrared, filter, infragram, infrablue, canon, grass, pasture, measurement, crops, activity:infragram
author: drkatnz
path: /notes/drkatnz/01-24-2014/pasture-measurement-using-nir-camera.md
nid: 9971
uid: 420159

---

![](https://publiclab.org/public/system/images/photos/000/002/634/original/IMG_0116.JPG)

# Pasture measurement using NIR camera

by [drkatnz](../profile/drkatnz) January 24, 2014 02:01

January 24, 2014 02:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nir](../tag/nir), [infrared](../tag/infrared), [filter](../tag/filter), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [canon](../tag/canon), [grass](../tag/grass), [pasture](../tag/pasture), [measurement](../tag/measurement), [crops](../tag/crops), [activity:infragram](../tag/activity:infragram)

----

###The Problem

Ranking paddocks is extremely important in New Zealand, we rely on grass to feed the cows profitably, and only use other feeds to supplement the diets.  Therefore you need to know which paddock has the most grass (and how much) in order to make sure you can feed the cows enough to make milk.  We rank paddocks by measuring how much grass is in each, and drawing a feed wedge.  
  
  
###Historical pasture measurement

At present, pasture covers are measured (in pastoral based farming systems like New Zealand, Australia and Ireland) by taking a device known as a rising plate meter out on farm, and walking around the farm.  The meter isn't sophisticated - it's a plate attached to a stick.  You place the stick on the ground and the plate will sit on top of the grass.  The difference between the bottom of the stick and the bottom of the plate gives you a measure of height (and to some
extent, density).  By taking many measurements (20-40) per paddock, and converting with a formula. you end up with a representative measure on how much grass is present in the paddock.  In NZ, this is measured in kilograms of dry matter per hectare (kgDM/ha).   
  
Here's a link to some more details if you are interested: 
[http://www.dairynz.co.nz/page/pageid/2145861220/Rising_Plate_Meter](http://www.dairynz.co.nz/page/pageid/2145861220/Rising_Plate_Meter)
  
There are other methods of measuring grass too, there's an automated trailer pulled behind a quad bike known as a CDAX unit, and this uses photoeyes to determine the height of grass passing through it.  It's susceptible to overestimating when there are lots of stalks (and not much green matter).  There's also the 'look and guess' method where farmers will simply use their eye to measure how much they think is there.  A project ~10 years ago looked at 'pastures from space' using NIR, but the cloud cover in NZ was prohibitive to getting regular measurements. The rising plate meter is pretty standard, and although it has a reasonable margin of error, if operated by the same person it will give you a good ranking of paddocks on farm.  
  
  
###Proposed solution
  
We thought it would be interesting to investigate 'nearer space' NIR - using a near-infrared camera mounted on a quad bike or other vehicle to quickly measure pasture cover.  We think if it was easier to measure covers and less time consuming, more farmers would do it and the dairy farming industry would be more profitable.  
 
  
### Results so far

A distance shot of a paddock:  
  
[![IMG_0093.JPG](https://i.publiclab.org/system/images/photos/000/002/636/medium/IMG_0093.JPG)](https://i.publiclab.org/system/images/photos/000/002/636/original/IMG_0093.JPG)
    
  
Example shot used for analysis:  
  
[![IMG_0116.JPG](https://i.publiclab.org/system/images/photos/000/002/637/medium/IMG_0116.JPG)](https://i.publiclab.org/system/images/photos/000/002/637/original/IMG_0116.JPG)
  
  
  
We took my modified A495 out to a dairy farm and took at least 20 photos per paddock for three paddocks. The same paddocks were also measured for average cover using a plate meter.  The photos were taken at about waist height, pointed right in front of my feet (so a photo of the same place as we'd put a plate meter down).  As expected (and the same as a plate meter) a single photograph does not correlate with the average cover in the paddock as measured by the plate meter.  However looking at the average plate meter cover vs NDVI average found:  
  
Paddock,Actual,Mean NDVI  
1,2124,0.28417334  
2,2698,0.30852255  
3,2614,0.29607964  
  
This is only the results from 3 paddocks, but is encouraging: the mean NDVI increases with the actual cover.  The standard deviation could potentially be used as a measure of uniformity across the paddock.  I am now planning to do more paddocks, and in a more uniform way to test the correlations further.    
    
  
###Questions and next steps  
  
A few other things I'd like to test that I'd like to hear people's thoughts on:  
 - modifying a gopro with the infragram filter - there is some detail on the wiki but it seems like I may have to replace the lens, rather than simply remove a filter  
 - using dual cameras - one with an NIR filter, the other without, mounted such that they have the same detail in frame   
 - using two cameras as above, one after the other on the same paddock (may have problems with natural light variation)   
  
  
Please feel free to contact me at kat |at| sonic.net.nz (or post here) if you can help out.  
  
The full set of photographs can be [downloaded here](https://www.dropbox.com/s/xh6s4q8b3ltfge5/paddockphotos.zip) (90MB).  There's also a CSV file with the following NDVI information for each paddock/photo: min, max, mean, standard dev, median.  The NDVI for each pixel was calculated as: ((nir + green)  - (2 x blue)) / ((nir + green) + (2 x blue));
  
