---
title: "using image texture to find Trapa"

tagnames: 'balloon-mapping, near-infrared-camera, amherst, infragram, invasive, classification, h2onutz, trapa, response:9019, activity:classification'
author: ttaylor
path: /notes/ttaylor/08-18-2013/using-image-texture-to-find-trapa.md
nid: 9034
uid: 58398

cids: 6689

---

![](https://publiclab.org/public/system/images/photos/000/001/207/original/TrapaPlant.jpg)

# using image texture to find Trapa

by [ttaylor](../../../profile/ttaylor) | August 18, 2013 21:00

August 18, 2013 21:00 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [amherst](../tag/amherst), [infragram](../tag/infragram), [invasive](../tag/invasive), [classification](../tag/classification), [h2onutz](../tag/h2onutz), [trapa](../tag/trapa), [response:9019](../tag/response:9019), [activity:classification](../tag/activity:classification)

----

With the limited success of using color to find Trapa as described in my post <a href="http://publiclab.org/notes/ttaylor/08-16-2013/a-little-background-work-for-trapa-classification-from-color">here</a> and with Chris Fastie's words about his cognitive process for finding Trapa based on the "repeating pattern of leaves of Trapa which are smaller than the leaves of other plants there" ringing in my head, I took advantage of my strong need to procrastinate some other chores to take *rough* hack at this problem.  In the Chris'  <a href="http://fastie.net/Bin/12WarnerVIS/WarnerLkVis7075.JPG">Vis7075</a> image, the identified Trapa patches in the top center and bottom center of the image looked to me to have less small scale variability than some other places in the image.   This suggested to me that the Laplacian of this image (see this <a hreft="http://homepages.inf.ed.ac.uk/rbf/HIPR2/log.htm">link</a> among many others) would be useful to highlight locations where Trapa might be present.  It's possible to implement a Laplacian filter in imageJ, and I can tell you how, but fortunately imageJ already has a variance filter (Process->Filters->Variance) what is closely related to the Laplacian and basically gives the same information.

Below is an animated gif which I made which shows that, sure enough, the Laplacian and Variance filters give particularly low values to patches of Trapa.

![texture7075a.gif](/system/images/photos/000/001/201/medium/texture7075a.gif)

 In this GIF, the first frame is just Chris' Vis7075 image, the second is the Laplacian filter of 7075, the third is the Variance filter of 7075 (radius=3 pixels), and the fourth (and best, in my opinion) is a Gaussian filter (sigma=2.0) of 7075 followed by the Variance filter.  This suggests that in looking at images with this resolution we can restrict to looking in regions where the variance filter is small, at least when we are looking for fully developed patches of Trapa.

To make the image below I took the Gaussian+Variance filter and used imageJ's Process->Binary->Convert to mask utility, followed by many dilate operations to make the masked region more contiguous.  

![smoothMask.jpg](/system/images/photos/000/001/202/medium/smoothMask.jpg)

The result is a masked version of Vis7075 which preserves those parts of the image where there is not much variation on the scale of 3x3 pixel patches.  The identified Trapa patches are nicely outlined, but there are also large patches of open water, which we would like to exclude.  I built another mask from the green channel of Vis7075: most values in the green channel corresponding to water plants had a 8 bit intensity of above 140, so I used Process->Math->Divide to divide the image by 140, then multiplied by 10 then used Convert to Mask as before, which gave me an image where G  values bigger than 140 were converted to 255, and values less than 140 are converted to 0.  Divide this image by 255 to get a green mask image taking values 0 and 1.  In a parallel workflow, I use Image->Color->Split Channels, followed by Image->Stack->Images to Stack to convert the smooth mask image above to a stack with three 8 bit black and white images corresponding to the RGB. I then use Process->Image Calculator to multiply the stack with the green mask and use Image->Color->Stack to RGB to obtain a color image again. The result


![smooth_greenMask.jpg](/system/images/photos/000/001/203/medium/smooth_greenMask.jpg)

 
provides a focus on regions where the image is smooth and green.  The green region overlap with a good many of Chris Fastie's <a href="http://publiclab.org/system/images/photos/000/001/003/large/WarnerLkVis7075Trapa2500.jpg">circles</a>. Small Trapa patches surrounded by other types of water plants would not be expected to show for a couple of reasons: 1) there may be a large change in patches there due to different colors in the plants and 2) I tried to make the texture mask have larger connected regions.  

In a higher resolution image such as Chris Fastie's Vis7136,
<img src="http://fastie.net/Bin/12WarnerVIS/WarnerLkVis7136.JPG">

the situation is very different.  Zooming in on the patch of Trapa in the upper central portion of the image we see that individual Trapa leaves and plants are resolved

![TrapaPlant.jpg](/system/images/photos/000/001/204/medium/TrapaPlant.jpg)

Correspondingly, there is a lot of variation in this image on the scale of 3x3 pixel patches, and the Variance filter, instead of zeroing out Trapa, emphasizes it:

![WarnerLkVis7136b.jpg](/system/images/photos/000/001/205/medium/WarnerLkVis7136b.jpg)

On the other hand, if we first do a Gaussian filter as before at sigma=2.0, and then Variance filter,
we see that the Gaussian filter has killed off almost of the information about individual leaves


![7136Gauss-Variance.jpg](/system/images/photos/000/001/206/medium/7136Gauss-Variance.jpg)


