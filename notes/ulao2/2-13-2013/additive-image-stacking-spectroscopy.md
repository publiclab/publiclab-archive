---
title: "Additive Image Stacking In Spectroscopy"\ntagnames: ''
author: Ulao2
path: /notes/ulao2/2-13-2013/additive-image-stacking-spectroscopy.md
nid: 5973
uid: 48699

---

# Additive Image Stacking In Spectroscopy

by [Ulao2](../profile/Ulao2) | February 14, 2013 04:18

February 14, 2013 04:18 | Tags: 

----

Additive Image Stacking In Spectroscopy

When doing spectroscopy we are usually concerned with identifying radiation at particular wavelengths.  Whether in astronomy where we may be concerned with doppler shifts, broadening of lines or adsorption by gasses or in chemistry where we might be interested in emission or adsorption by particular elements or even isotopes what is often most important is the ability to measure the wavelength precisely.  All spectroscopists are forced to deal with the limitations of their instruments.  No material known to man is for example equally transparent nor linearly refractive across the entire useable electromagnetic spectrum.  Similarly no known sensor has a perfectly flat response curve across that same spectrum.  Thus any equipment used to produce spectrograms must be both radiometrically and geometrically calibrated.  In order to do this it is helpful to have as sharply defined lines as possible. 


Below you will find several versions of a spectrum taken of a compact fluorescent lamp (the sharp line at 532 nm is from a green laser pointer). These all represent the same spectrum.  The difference is in the way the data were processed.  Figure 1 represents the spectrum displayed as three separate bands red, green ,and blue.  Figure 2 is a plot of the same spectrum converted to grayscale using Irfanview.   Note that while the main peaks are not so much affected, some of the minor peaks have considerably less amplitude.   Note further that the green curve in figure 1 overlaps the red and blue curves in paces.  I am not sure just how the algorithm that produces a grayscale image from a color image works but it looks kike it essentially averages the bands.  I can’t say for sure but it looks to me like we are wasting energy that in many cases we have gone to great lengths to capture.  Now let’s examine figure 3.  Even on casual inspection we find considerable differences between figure 2 and figure 3.  What accounts for this difference?  The curve in figure 3 was produced using a technique borrowed from amateur astronomers called stacking.  For deep sky images where the object of concern is usually quite dim the goal is to add together several images to effectively lengthen the exposure while for bright planetary images the goal is usually to average several images to gain fine detail.  We have chosen to additively stack the red, green, and blue bands from the same image to effectively utilize all the energy collected by the sensor.  Note that the red peak in figure 1 is just below the highest peak in the green.  In figure 3 that red peak is now slightly higher than the green.  The difference is no doubt at least partly due to the contribution from that little green squiggle directly beneath it. Also note that the peak in the blue of figure 1 is less than half the height of the green peak while in figure 3 it exceeds half the height.

Fig.1 Displayed as three separate bands.
Fig.2  Color image converted to grayscale.
Fig.3 Additively stacked. 
Fig.4 Top, original color spectrum.  Middle, conventional grayscale Bottom, Additively stacked.

Software used:
Irfanview
Image j
Registax6
Visual Spec
Fitswork4

All are some version of freeware

Please let me know what y'all think.
