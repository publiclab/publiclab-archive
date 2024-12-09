---
title: 'A little background work for Trapa classification from color'
tagnames: balloon-mapping, near-infrared-camera, amherst, infragram, invasive, classification, h2onutz, trapa
author: ttaylor
path: /notes/ttaylor/08-16-2013/a-little-background-work-for-trapa-classification-from-color.md
nid: 9019
uid: 58398

---

![](https://publiclab.org/public/system/images/photos/000/001/164/original/classifier2Test.jpg)

# A little background work for Trapa classification from color

by [ttaylor](../profile/ttaylor) August 16, 2013 01:14

August 16, 2013 01:14 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [amherst](../tag/amherst), [infragram](../tag/infragram), [invasive](../tag/invasive), [classification](../tag/classification), [h2onutz](../tag/h2onutz), [trapa](../tag/trapa)

----

 <a href="http://publiclab.org/notes/cfastie/08-02-2013/trapa-detection">Here</a> Chris Fastie was speculating that Trapa Natans should be detectable from balloon mapping data on the basis of it's blue green and/or leaf size.   Classification from color can be problematic, as color depends on a number of factors including the spectral content of the illumination (which depends on the weather, the season and the time of day etc), but all of these images were taken at about the same time on the same day, so I wanted to see what I can do. What follows can be considered a crude color-based classifier.  The good thing about it is that I understand what my decision criteria are in terms of simple statements about color.  Much better can probably be done with a more sophisticated classification scheme.

 <a href="http://publiclab.org/system/images/photos/000/001/003/large/WarnerLkVis7075Trapa2500.jpg">This image </a> from Chris has a nice large patch of Trapa in the large circle at the bottom center.  To sum up what I did (more technical details on request) I cut out smallest rectangle of that image that contains that circle.  


![chip.jpg](/system/images/photos/000/001/149/medium/chip.jpg)



 and measured the <a href="http://en.wikipedia.org/wiki/Chromaticity">chromaticity</a> (color) and luminance (brightness) of the pixels in this chip.  You could do this by hand in imageJ by selecting a rectangle from the dense Trapa in the circle, e.g. this one

![colorchip.jpg](/system/images/photos/000/001/150/medium/colorchip.jpg)

pasting into a new RGB color image, using Color->Split Channels to separate out the R,G,B grayscale images and then for each save as a text image to get the 8bit R,G,B values for each pixel--chromaticity can computed in an excel spread sheet for each pixel as {R/(R+G+B),G/(R+G+B)} for each pixel.  The rectangle has average chromaticity values {0.311, 0.478} with standard deviations {.007, .008}, while a pixel I picked at random just outside the circle had chromaticity values more than four standard deviations from the rectangle average.

So how good is chromaticity at detecting Trapa? Good, not perfect is my non-technical summation.  To visualize how good it is and isn't, below are two animated GIFs with three images each.  The first image in each is one of Chris Fastie's.  For the the second image, I set what I thought were reasonable thresholds for saying that the the chromaticity of a pixels was close enough to Trapa, and then zeroed to black all pixels that didn't meet that criterion. For the third image I refined the criterion to say in addition that the luminance had to be close to the luminance of Trapa as well--and this seems to have improved the results. (I wanted to keep Chris' circles, so there are also some odd white pixels also show up--the boat, flowers & glare, I think)

![ColorClassifiers_.GIF](/system/images/photos/000/001/151/medium/ColorClassifiers_.GIF)


In the above image#2 we can see that chromaticity finds the patch that I used to grab the color, and has something about the same chromaticity in the other circles.  It also finds stuff of about the same chromaticity in many places. In particular it finds some stuff below the lower right lawn chair and to the right of the lower right small circle that is clearly not Trapa, and is appreciably darker (smaller luminance), even though the chromaticity is correct.  Image #3 above selects for pixels matching luminance as well as chromaticity.  Some of the circles that were identified as having Trapa do not have pixels that match in both chromaticity and luminance.  Since I'm not sure what is the ground truth, I'm not sure if I've thrown out the baby with the bathwater.  It would make sense though that the false negative rate would go up if I increase the number of conditions to satisfy.


![ClassifierTests2.GIF](/system/images/photos/000/001/162/medium/ClassifierTests2.GIF)

The above higher resolution image provides a test of color-based classification.  Again, the second image is chromaticity-based, and the third image is both chromaticity and luminance based.  The good news is that the circles where we can clearly visually distinguish Trapa in the first image based on color and leaf shape are clearly and correctly identified as having Trapa in the second and third images.   Some of the circles where there is more going on (e.g. upper right circle, where there may be some larger-leafed plant competing with the Trapa) may not be in agreement--these may be false negatives.  In the second image there are some pixels that are clearly not Trapa with the same chromaticity but not the same luminance as Trapa that are eliminated from the third image.  In both images #2 and #3 there are many locations that pass the chromaticity or chromaticity and luminance requirements, that are identified as being Trapa--these may be false positives.