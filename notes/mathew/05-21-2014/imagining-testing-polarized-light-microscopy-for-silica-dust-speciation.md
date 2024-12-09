---
title: Imagining & testing Polarized Light Microscopy for Silica dust speciation
tagnames: particulate-sensing, air-quality, dust, particulates, silica, polarized-light, polarized-light-microscopy, open-air, particles, particle-sensing, passive-pm, activity:microscope, activity:microscopes, activity:community-microscope-usage, polarizing-filter
author: mathew
path: /notes/mathew/05-21-2014/imagining-testing-polarized-light-microscopy-for-silica-dust-speciation.md
nid: 10493
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/004/338/original/Screen_Shot_2014-05-20_at_4.17.52_PM.png)

# Imagining & testing Polarized Light Microscopy for Silica dust speciation

by [mathew](../profile/mathew) May 21, 2014 01:04

May 21, 2014 01:04 | Tags: [particulate-sensing](../tag/particulate-sensing), [air-quality](../tag/air-quality), [dust](../tag/dust), [particulates](../tag/particulates), [silica](../tag/silica), [polarized-light](../tag/polarized-light), [polarized-light-microscopy](../tag/polarized-light-microscopy), [open-air](../tag/open-air), [particles](../tag/particles), [particle-sensing](../tag/particle-sensing), [passive-pm](../tag/passive-pm), [activity:microscope](../tag/activity:microscope), [activity:microscopes](../tag/activity:microscopes), [activity:community-microscope-usage](../tag/activity:community-microscope-usage), [polarizing-filter](../tag/polarizing-filter)

----

###What I want to do
Sample and identify [silica](/wiki/silica) [dust particles](/wiki/particle-sensing) preferably at PM2.5 (2.5 μM, [roughly](/wiki/particle-sensing#Particle+Size)).  Polarized light is used in the analysis of a group of crystals that includes silica.  This [explanation from Nikon](http://www.microscopyu.com/articles/polarized/polarizedintro.html) is pretty comprehensive.

I'm interested in whether we can use polarized light microscopy to identify silica that has stuck to [sticky pads.](/wiki/particle-sensing#Sticky+Pads)

###My attempt and results
I scooped up some aggregate off the side of the road.  We had a snow storm this spring and there ought to still be sand on the road from it. 

<iframe src="https://www.flickr.com/photos/14397636@N07/14046931488/in/photostream/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

I modified my usb microscope with some black paper to block its always-on LEDs:

<iframe src="https://www.flickr.com/photos/14397636@N07/14230289811/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Then I stacked my headlamp below a polarized filter, then dust, then another polarized filter offset 90 degrees, with the microscope on top. 

<iframe src="https://www.flickr.com/photos/14397636@N07/14210441856/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

My choice of sampling tray wasn't the best-- the HDPE container's photoelasticity is visible as rainbow colors through my rapidly constructed [polariscope](https://en.wikipedia.org/wiki/Photoelasticity). 

<iframe src="https://www.flickr.com/photos/14397636@N07/14233337564/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

This photoelastic effect accounts for the rainbow background colors.  But even with that, the silica particles pop right out from the other dust as bright rainbow dots:

[![Screen_Shot_2014-05-20_at_4.17.52_PM.png](https://i.publiclab.org/system/images/photos/000/004/339/medium/Screen_Shot_2014-05-20_at_4.17.52_PM.png)](https://i.publiclab.org/system/images/photos/000/004/339/original/Screen_Shot_2014-05-20_at_4.17.52_PM.png)

There is a clear difference between the polarized light images and the unpolarized images.  While the crystals still glow on in the light, they aren't nearly as sparkley:

[![Screen_Shot_2014-05-20_at_4.16.46_PM.png](https://i.publiclab.org/system/images/photos/000/004/340/medium/Screen_Shot_2014-05-20_at_4.16.46_PM.png)](https://i.publiclab.org/system/images/photos/000/004/340/original/Screen_Shot_2014-05-20_at_4.16.46_PM.png)

###Questions and next steps
The particles I examined were only under a 50x magnification and weren't nearly as small as I want to be able to identify.  Ideally, a substantially sized sample of a sticky pad would be able to be scanned all at once.  My initial hope was that a flatbed scanner could detect small particles, and current resolutions are pretty close.  using [this DPI calculator](http://www.hdri.at/dpirechner/dpirechner_en.htm)
I figured out that a pixel on a 4800dpi scanner is 5.3μm wide.  On a 6400dpi scanner, a pixel is 4μm wide.  Not quite small enough to detect a 2.5μm particle, much less identify it.

But... its not impossible. Cameras made out of scanners are old news, its called "[Scanography.](https://en.wikipedia.org/wiki/Scanography)"  Some people have built some [elaborate scanner mods](http://home.roadrunner.com/~maccody/robotics/PanoramaScanCam/index.html). If I can enlarge the sample by a few times, say 10x-20x, a 1"-1/2" sample would clearly present 2.5μm particles.
 
<iframe src="https://www.flickr.com/photos/14397636@N07/14230286331/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
 
#####Challenges
I'm not sure a one to one half-inch sample is big enough, or if 10 pixels per dust particle is really enough, or if the optics I'll use will have too much distortion to make this work, but I think its worth a shot. I'm hoping a computer vision system could identify the silica particles.  This would go a long way to addressing a big concern with electronic dust monitors-- figuring out what the detected particles are.

I'm headed to the library to ILL this article right now. hopefully it will give a better idea of how to go about this.
Farnfield, R.A. and Birch, W.J. (1997) "Environmental Dust Monitoring Using Computer Scanned Images Obtained from Sticky Pad Poly-directional Dust Gauges", Clean Air, 27, pp73-76.