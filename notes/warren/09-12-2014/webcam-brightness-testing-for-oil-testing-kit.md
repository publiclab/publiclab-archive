---
title: "Webcam brightness testing for Oil Testing Kit"

tagnames: 'spectrometer, uv, fluorescence, fold-up, foldable, response:11132'
author: warren
path: /notes/warren/09-12-2014/webcam-brightness-testing-for-oil-testing-kit.md
nid: 11133
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/006/789/original/IMG_20140911_205427.jpg)

# Webcam brightness testing for Oil Testing Kit

by [warren](../../../profile/warren) | September 12, 2014 15:44

September 12, 2014 15:44 | Tags: [spectrometer](../tag/spectrometer), [uv](../tag/uv), [fluorescence](../tag/fluorescence), [fold-up](../tag/fold-up), [foldable](../tag/foldable), [response:11132](../tag/response:11132)

----

###What I want to do

We've had trouble getting bright enough spectra in the Oil Testing Kit [with the SANM webcam that ships in the current Desktop Spectrometry Kit](/notes/mathew/09-05-2014/using-gelatin-caps-for-oil-fluorescence#c10247), but other cameras seem to do all right. @mathew and I are testing a range of cameras to see if we can solve the brightness problem primarily through camera choice, but also using reflectors and other design modifications to maximize brightness. We need to do a lot better than this: https://spectralworkbench.org/analyze/spectrum/33804, and @mathew and I have been going for over 25% intensity.

###My attempt and results

I tried both a Creative Live Notebook webcam and the old SYBA cam with a UV ultro-micro cuvette. The results were really solid; peaks were close to 50%. Note that none of the spectra on this page are calibrated; the graphs are just to show relative intensity and are not aligned by wavelength:

[![oil-camera-tests.png](https://i.publiclab.org/system/images/photos/000/006/785/medium/oil-camera-tests.png)](https://i.publiclab.org/system/images/photos/000/006/785/original/oil-camera-tests.png)

Aligning the cuvette wasn't super easy by hand, but if we create a shelf or guide it should be pretty easy to get the laser aligned just right.

###Questions and next steps

I'm also curious about how we're combining color channels; the percentage exposure per channel is much better, and if we could have a better means of combining them, maybe we'd be more confident in the data:

**Creative Live webcam w/ 'nail polish' bottle**

[![creative-sciplus.png](https://i.publiclab.org/system/images/photos/000/006/786/medium/creative-sciplus.png)](https://i.publiclab.org/system/images/photos/000/006/786/original/creative-sciplus.png)

**Creative Live webcam w/ cuvette**

[![creative-cuvette.png](https://i.publiclab.org/system/images/photos/000/006/787/medium/creative-cuvette.png)](https://i.publiclab.org/system/images/photos/000/006/787/original/creative-cuvette.png)

**Syba webcam w/ cuvette**

[![syba-cuvette.png](https://i.publiclab.org/system/images/photos/000/006/788/medium/syba-cuvette.png)](https://i.publiclab.org/system/images/photos/000/006/788/original/syba-cuvette.png)

Here are all the links to the spectra themselves:

* Creative Live webcam w/ cuvette: https://spectralworkbench.org/analyze/spectrum/33841
* Creative Live webcam w/ 'nail polish bottle': https://spectralworkbench.org/analyze/spectrum/33843
* Syba webcam w/ cuvette: https://spectralworkbench.org/analyze/spectrum/33844