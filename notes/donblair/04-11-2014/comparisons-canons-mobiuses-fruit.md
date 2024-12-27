---
title: "Comparisons: Canons, Mobiuses, 'fruit"

tagnames: ''
author: donblair
path: /notes/donblair/04-11-2014/comparisons-canons-mobiuses-fruit.md
nid: 10298
uid: 43651
cids: 8737,8762
---

![](https://publiclab.org/public/system/images/photos/000/003/623/original/comparison.png)

# Comparisons: Canons, Mobiuses, 'fruit

by [donblair](/profile/donblair) | April 11, 2014 16:01

April 11, 2014 16:01 | Tags: 

----

###What I want to do

Wrap my head around the ways in which several inexpensive commercial image capture / light sensor devices transform incoming light into useful data, and the degree to which we're able to manipulate image processing settings on these devices.  

In particular, I'm interested to sort through whether the 'single pixel' sensors like those on Adafruit's RGB board and Luminosity board (linked to in my previous note about a [microcontroller design that aimed to incorporate both of those sensors](http://publiclab.org/notes/donblair/04-07-2014/open-lux) would be useful for somehow calibrating Infragram imagery. 

After [great discussions](https://groups.google.com/forum/#!topic/plots-infrared/PdNMOverG5c) with Chris on the ["plots-infrared" mailing list](https://groups.google.com/forum/#!forum/plots-infrared), in which he was helping us think through the ways in which the various devices we've been using and considering for infragram and plant health imagery, I felt like I needed a chart. 

###My attempt and results

Here's the chart.  It's not a great chart.  I'm still muddling my way through thinking about this stuff:

<a href="https://i.publiclab.org/system/images/photos/000/003/626/original/camAnalysis.pdf"><img src="https://i.publiclab.org/system/images/photos/000/003/625/medium/comparison.png"></a>


The idea is to try to sort through what type of image processing (which I'm referring to generally as a 'filter' in the chart) is occurring when using each device.  I made sense to me to break it down by a few characteristics:


[![quadrant.png](https://i.publiclab.org/system/images/photos/000/003/627/medium/quadrant.png)](https://i.publiclab.org/system/images/photos/000/003/627/original/quadrant.png)


- is the filter's behavior **scene-dependent**?  I.e. does the in-camera software, or the user (or both) decide to change the filter's behavior on a shot-by-shot basis, or is the filter's behavior fixed?
- can the user **control the behavior** of the filter?

E.g., I'm thinking of the NIR-block filter that comes with a Canon Powershot as "scene-independent", and "user-controllable" -- if the filter is in place, then it has the same effect on incoming light, regardless of the scene; but on the Canon, the user can remove the filter.

The other aspect I was interested in thinking about was:  what use might a "single-pixel" sensor be in calibrating an infragram camera?  I tried to depict the various **usage modes** of these devices, and the resultant imagery (mostly thinking about resolution), in the bottom half of the chart:


[![mobius.png](https://i.publiclab.org/system/images/photos/000/003/629/medium/mobius.png)](https://i.publiclab.org/system/images/photos/000/003/629/original/mobius.png)


For example:

- If a Luminosity "single pixel" sensor were used alongside a Mobius when capturing a scene (say, holding the devices side by side, and aiming them both at a garden) could that somehow help to 'normalize' the Mobius camera's autoexposure process, which happens automatically, and isn't (is it?) under the user's control?  This would be like using both the Mobius and the Luminosity sensors in mode "A" in the chart.   It seems that this would require understanding the relationship between the results of capturing identical scenes (some LED tests?) using Mobius and Luminosity sensors.  

- What if an investigator were to first sidle up to a single plant in the garden, and hold up a Luminosity sensor directly in front of it (i.e., using the "Luminosity" column from line "B" in the chart);  and then step back, and use a Mobius to capture the entire garden scene, including the plant (i.e. using the "Mobius" column from row "A" in the chart)? This seems like a lot of work, but could perhaps be useful when using e.g. a Mobius on a balloon to analyze crop imagery, and a Luminosity sensor to 'ground truth' the aerial imagery ...

###Questions and next steps

I'd like to expand this chart with a visualization that compares the different wavelength sensitivity bands for the various devices being considered here. 

Don't yet know how to fill in those questions marks in the chart ...
