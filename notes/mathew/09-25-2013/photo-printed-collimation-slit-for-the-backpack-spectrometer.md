---
title: Photo-printed collimation slit for the Backpack Spectrometer 
tagnames: spectrometer, slit, stepped-slit, slit-width
author: mathew
path: /notes/mathew/09-25-2013/photo-printed-collimation-slit-for-the-backpack-spectrometer.md
nid: 9366
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/001/671/original/9925545636_602ee6e16d_z.jpg)

# Photo-printed collimation slit for the Backpack Spectrometer 

by [mathew](../profile/mathew) September 25, 2013 02:02

September 25, 2013 02:02 | Tags: [spectrometer](../tag/spectrometer), [slit](../tag/slit), [stepped-slit](../tag/stepped-slit), [slit-width](../tag/slit-width)

----

##What I want to do
Photo emulsion print a more accurate collimation slit based on ideas from [Jeff](/profile/warren) and [Dave Stoft](/profile/stoft).  Photoprinting was done by Camera Graphics in Portland, depositing silver halides on an acetate sheet.  since the deposition layer is extremely thin, it would constitute a superior slit to a cut material.  By being slightly reflective, acetate will also help minimize chromatic aberations and internal reflections.

<a href="https://www.flickr.com/photos/14397636@N07/9925545636/" title="spectrometer pieces by mathew.lippincott, on Flickr"><img src="https://farm6.staticflickr.com/5443/9925545636_602ee6e16d.jpg" width="375" height="500" alt="spectrometer pieces"></a>

[Jeff](/users/warren) had also mentioned that he thought a stepped slit, with a wider and thinner section, might help to control exposure by providing an over and under exposed area of spectra.  I could not find any evidence for this occurring during my tests.

The phone used was a Samsung Galaxy SII

##My attempt and results
I printed a variety of slits in .03mm increments, each one with a wide section twice the width of the slit.  Above .12mm there was a lot of blur to the spectral lines, and the finer slits provided cleaner spectra. 
<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/612'></iframe>

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/13011'></iframe>

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/13013'></iframe>

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/13009'></iframe>

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/13010'></iframe>

I also did some distance tests.  the .03mm slit could only pick up the faintest blue line in a fluorescent spectra from ~2 meters, while the .06mm slit was good to 5 meters.  The .09mm spectra was good beyond 6 meters, but i didn't take it outside to test its farthest accuracy.
 
##Questions and next steps
In the balance between accurate spectra and light sensitivity, the .09mm slit  seems to be the best.  Its spectral peaks were just as pointy and clear as at .03mm but it produced brighter spectra, without the cutoff and internal reflections that began to be an issue at .12mm.

The stepped slit concept appears promising, but I believe the two widths of slit would need to be closer to eachother to become useful in the spectrometer.  I'd like to try the same approach with something closer to a checker pattern.  For now, I'm going to setup the backpack spectrometers at .09mm.