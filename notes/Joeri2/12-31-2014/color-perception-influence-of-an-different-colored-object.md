---
title: "Color perception: influence of an different colored object"

tagnames: 'spectralworkbench, color, perception'
author: Joeri2
path: /notes/Joeri2/12-31-2014/color-perception-influence-of-an-different-colored-object.md
nid: 11501
uid: 433286
cids: 11033,11035
---

![](https://publiclab.org/public/system/images/photos/000/008/555/original/2014-12-24_00.24.33.jpg)

# Color perception: influence of an different colored object

by [Joeri2](/profile/Joeri2) | December 31, 2014 02:53

December 31, 2014 02:53 | Tags: [spectralworkbench](/tag/spectralworkbench), [color](/tag/color), [perception](/tag/perception)

----

###What I want to do


I use the spectrometer as a relative reflectance spectrometer to measure the change in color when a 3d-object is placed in front of a card. The question is how will an object with a different color than a painted surface influence the perception of color. I don't have the time to fully research this, but I will try to measure a difference in the reflected spectrum.

I know now from one of (I think) Warren's notes that the webcam sensor is not capable to measure intensity's accurately. But I hope that by comparing value's I get a relative difference.

I use a matte black paper box and place a strong halogen light source parallel to the old videocassette style spectrometer inside. Both of them face a Matte black cardholder. This holds an A6 sized card. I start with a white colored card and place a smaller colored card near the first.

Instead of images I try to capture the combined values and compare the graphs to find estimate the difference with or without a different colored object in a near region.

###My attempt and results
This variable/command will deliver the valuables for R, G, B and the medium or combined value. I'm looking for a way to get online the combined value. Also I have no idea how to get the wavelength value's of the x-axle. 

Macro:
setup: function() {
  // code to run on startup
$W.mode = "average"  
alert($W.full_data)
},
draw: function() {
  // code to run every frame

}
end macro


###Questions and next steps

How do I get the combined values only?
How do I get the average combined values over a small time period?

How do I get the corresponding wavelength values?


###Why I'm interested