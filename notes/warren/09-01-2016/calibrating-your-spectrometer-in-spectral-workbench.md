---
title: 'Calibrate your spectrometer in Spectral Workbench'
tagnames: spectrometer, spectrometry, guide, response:12258, cross-section, activity:spectrometry, difficulty:easy, seeks:replications, activity:dssk, activity:foldable-spec, time:15m, response:748, status:review-me, category:verify, parent:spectral-workbench-calibration, activity:papercraft-spec, spectral-workbench-calibration, pin:activity:papercraft-spec, pin:spectrometry, spectrometry-calibration, activity:spectrometry-calibration
author: warren
path: /notes/warren/09-01-2016/calibrating-your-spectrometer-in-spectral-workbench.md
nid: 13410
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/017/886/original/calibration.png)

# Calibrate your spectrometer in Spectral Workbench

by [warren](../profile/warren) September 01, 2016 20:57

September 01, 2016 20:57 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [guide](../tag/guide), [response:12258](../tag/response:12258), [cross-section](../tag/cross-section), [activity:spectrometry](../tag/activity:spectrometry), [difficulty:easy](../tag/difficulty:easy), [seeks:replications](../tag/seeks:replications), [activity:dssk](../tag/activity:dssk), [activity:foldable-spec](../tag/activity:foldable-spec), [time:15m](../tag/time:15m), [response:748](../tag/response:748), [status:review-me](../tag/status:review-me), [category:verify](../tag/category:verify), [parent:spectral-workbench-calibration](../tag/parent:spectral-workbench-calibration), [activity:papercraft-spec](../tag/activity:papercraft-spec), [spectral-workbench-calibration](../tag/spectral-workbench-calibration), [pin:activity:papercraft-spec](../tag/pin:activity:papercraft-spec), [pin:spectrometry](../tag/pin:spectrometry), [spectrometry-calibration](../tag/spectrometry-calibration), [activity:spectrometry-calibration](../tag/activity:spectrometry-calibration)

----

## Goals

In Public Lab's [spectrometry project][1], we've long used compact fluorescent lamps (CFLs) as a reference to wavelength calibrate our DIY spectrometers. This guide will show you how to do this in about 15 minutes. 

I believe that if your spectrometer is properly constructed, you should be able to get to about 1nm resolution -- complete the activity and post your results to help determine if this is true ([read more here](https://publiclab.org/questions/warren/08-22-2016/how-can-a-spectrometer-s-wavelength-resolution-be-measured))! 

## What you'll need

- a [compact fluorescent bulb][2]
- an account on [PublicLab.org][3] to log into [Spectral Workbench][4] with
- one of our [spectrometry kits][5] or any spectrometer that outputs images

### What we're doing

Basically, when you look at a graphed spectrum (as in the image above), you see a graphed series of intensities for each color along the spectrum, but the first time you do it, you won't see the wavelengths labelled in nanometers. This is because we just start out with an image from the webcam in the spectrometer, and don't know exactly which pixel of the image is at which [frequency of light][6].

![8278433432_1a36004196_o.png][7]

A CFL bulb is filled with mercury vapor, which when energized, emits a really well known spectrum, and one with very sharp, recognizable "peaks" -- as shown in the image above. These peaks always happen at the same wavelength, so we can recognize them by color and order, and compare our spectrum to a known reference to figure out the wavelength of each pixel of our spectrum.The two peaks we look for are:

- the **mercury 2 line** - "B2" at ~435.8 nanometers
- the **mercury 3 line** - "G2" at ~546.1 nanometers

---------

## Video

There's a video walkthrough of this process here:

<iframe width="640" height="480" src="https://www.youtube.com/embed/vK4qjaNn3WI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

This 10 minute video goes into greater depth on how calibration works and how to do it well:

<iframe width="640" height="480" src="https://www.youtube.com/embed/KpQrEldgR-I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

---------

Let's start!

## Step 1: Open SpectralWorkbench

Plug in your spectrometer. Log into Spectral Workbench with a [PublicLab.org][3] ID and navigate to the Capture interface at [https://spectralworkbench.org/capture][8].

Follow the prompts to connect to your webcam -- if it's running, you should see either a black image or some rainbow patterns from stray light. Don't choose a cross section yet, though! It'll be helpful to do this while pointing it at a CFL bulb.

## Step 2: Image the bulb

Find a CFL bulb -- the spiral type is pretty common, as shown below. Point your spectrometer at it, watching the Capture window to see when the rainbow of your CFL bulb spectrum appears as in the example. If you've built your spectrometer correctly, you should be able to select a cross section of the image that cuts right through the middle of the spectrum.


[![IMG_20160907_142607-2.jpg](//i.publiclab.org/system/images/photos/000/017/962/large/IMG_20160907_142607-2.jpg)](//i.publiclab.org/system/images/photos/000/017/962/original/IMG_20160907_142607-2.jpg)



This step can be tricky -- it's good to be **within a foot of the bulb** or you might miss it, but it can also be too bright, and your colored peaks will "blow out" and have flattened peaks. Then we won't be able to find the very top of the peak -- so if this happens, _try shining the lamp closely onto a piece of white paper or on the wall_, and pointing the spectrometer up against that.

### Overexposure

Note that if your peaks /are/ "blown out," they'll look like the image below. Notice that the "color channels" represented by the blue, red, and green graph lines are hitting the "100%" mark and are really not recording data anymore, they're just completely saturated:

[![Screenshot_2016-09-07_at_2.58.12_PM.png](//i.publiclab.org/system/images/photos/000/017/963/medium/Screenshot_2016-09-07_at_2.58.12_PM.png)](//i.publiclab.org/system/images/photos/000/017/963/original/Screenshot_2016-09-07_at_2.58.12_PM.png)

If this happens, checkout [these tips](/wiki/spectral-workbench-usage#Overexposure) for reducing exposure. 

****

## Step 3: Calibrate

Once you have your CFL spectrum image saved, you'll see a blue button below marked "Calibrate" -- click it!

[![Screenshot_2016-01-28_at_5.36.06_PM.png][12]][11]

As you can see in the above screenshot, you're presented with two sliders, and a _reference spectrum_, a pre-calibrated spectrum which is actually a version of @cfastie's "[snowsky][15]" CFL calibration, one I've used a lot as it's super sharp and has very low noise.

1. When you click Calibrate, it will attempt to auto-calibrate or "guess" -- trying to automatically line up the two spectra. If it looks good, just click "Save."
2. If not, drag the sliders yourself. The "Snap" checkbox will make the sliders "stick" to nearby peaks.
3. Once you have a good match (the colored lines or "peaks" in the two spectra are lined up), click "Save."

[![calibrating][14]][13]

Your calibration will be shown as `linearCalibration` in the Operations table below. If you want to try again, be sure to **delete the previous calibration** -- and make a new one. Don't make two calibrations!

**Note:** The system sometimes does not handle image reversal well. Sometimes horizontally flipped images can cause problems, so if it looks like the auto-calibration is **opposite** -- i.e. right to left instead of left to right. If this happens, you could try to "Set new cross-section" which will get fresh graph of data out of the image. We hope to solve reversal problems once and for all [in an upcoming version][16].

### How good is your calibration?

You may notice the green indicator that says "FIT" to the right. This is an attempt to compare the expected ratio of three known peaks to the peaks found in the image. Unfortunately, it has some shortcomings, and we'll probably be switching to a [root-mean-square error approach][17], where we compare a much larger # of points to those of a known spectrum, after height-adjusting for the baseline and maximum peak height. We'll see if that works better, but for now, please be aware that the "FIT" indicator is not that reliable.

### How often to calibrate?

It's good practice to calibrate at the beginning of each session of using your spectrometer, at a minimum. Some people may calibrate at the end too, to ensure it hasn't drifted during your tests. If you find that your calibration holds (by comparing a set of previous calibrations) you may not need to as often. But if you pack it up, travel with it, or modify it, you should definitely re-calibrate to be sure.

### Cross-section

If you change the cross-section line (in the steps on the Capture page) and your spectrum is not perfectly straight, a different cross section could move your spectrum left or right, and ruin your calibration. Be sure you're using the same cross section!

### Copying calibrations

What now? Once you've calibrated a single spectrum, you'll be able to **apply that calibration** to all of the spectra you've collected with that instrument (as long as you don't change anything, like the [cross section][18]). Since both images are the same size, Spectral Workbench will copy over the wavelength position of each pixel from the calibration image to the new image, and your spectrum will then be calibrated.

### Resources

This page was adapted from these two older pages, which have some more details, especially on cross sections and brightness control:

- [https://publiclab.org/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0][19]
- [https://publiclab.org/wiki/spectral-workbench-calibration][20]

### Replicating this activity

Try it out and leave a response here, whether you need help, or if you've successfully gotten your spectrometer calibrated! And link to your spectrum so we can see how you did. And if you see a way I could improve this guide, please leave a comment!



[1]: /wiki/spectrometry
[2]: https://en.wikipedia.org/wiki/Compact_fluorescent_lamp
[3]: http://PublicLab.org
[4]: https://spectralworkbench.org
[5]: /wiki/spectrometry#Starter+Kits
[6]: https://en.wikipedia.org/wiki/Electromagnetic_spectrum
[7]: //i.publiclab.org/system/images/photos/000/013/930/original/8278433432_1a36004196_o.png
[8]: https://spectralworkbench.org/capture
[9]: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/01_Spiral_CFL_Bulb_2010-03-08_%28transparent_back%29.png/160px-01_Spiral_CFL_Bulb_2010-03-08_%28transparent_back%29.png
[10]: http://creativecommons.org/licenses/by-sa/3.0
[11]: //i.publiclab.org/system/images/photos/000/013/931/original/Screenshot_2016-01-28_at_5.36.06_PM.png
[12]: //i.publiclab.org/system/images/photos/000/013/931/medium/Screenshot_2016-01-28_at_5.36.06_PM.png
[13]: https://i.publiclab.org/system/images/photos/000/013/897/original/Screenshot_2016-01-27_at_10.51.50_AM.png
[14]: https://i.publiclab.org/system/images/photos/000/013/897/large/Screenshot_2016-01-27_at_10.51.50_AM.png
[15]: https://spectralworkbench.org/spectrums/4474
[16]: https://github.com/publiclab/spectral-workbench/issues/183
[17]: https://en.wikipedia.org/wiki/Root-mean-square_deviation
[18]: #Cross-section
[19]: https://publiclab.org/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0
[20]: https://publiclab.org/wiki/spectral-workbench-calibration