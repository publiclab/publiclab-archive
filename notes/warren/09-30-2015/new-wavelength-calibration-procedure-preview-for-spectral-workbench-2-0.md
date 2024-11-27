---
nid: 12258
title: New wavelength calibration procedure preview for Spectral Workbench 2.0
path: public/static/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0.md
uid: 1
tagnames: spectrometer,calibration,web-development,spectral-workbench,development,coding
---

# New wavelength calibration procedure preview for Spectral Workbench 2.0

###What I want to do

There's long been talk about a more intuitive, more precise, all-around better wavelength calibration procedure for Spectral Workbench, and I've spent time over the past couple weeks putting that together into a working interface. I'm generally tracking progress [in this Github issue](https://github.com/publiclab/spectral-workbench/issues/167)

It's not complete, but you can see what it's like by cloning this spectrum to play with: 

https://spectralworkbench.org/spectrums/show2/58236

###How it works

As you can see in the above screenshot, when you click on "Calibrate" in the new 2.0 Spectral Workbench beta interface, you're presented with two sliders, and a reference spectrum, which is actually @cfastie's "snowsky" CFL calibration, one I've used a lot as it's super sharp and has very low noise: https://spectralworkbench.org/spectrums/4474

The steps are:

1. Click "Calibrate" in the new 2.0 beta interface.
2. It will attempt to auto-calibrate. If it looks good, just click "Save."
3. If not, drag the sliders yourself. The "Snap" checkbox will make the sliders "stick" to nearby peaks. 
4. Once you have a good match (the red vertical lines should intersect the graph peaks very precisely), click 
"Save."

**Note:** It does not handle image reversal well. Sometimes reversed images can cause problems, so if it looks like the auto-calibration is **opposite** -- i.e. right to left instead of left to right -- you could try to "Set new cross-section" which will get fresh graph of data out of the image. We hope to solve reversal problems once and for all [in an upcoming version](https://github.com/publiclab/spectral-workbench/issues/183).

###"Fit" and next steps

You may notice the green indicator that says "FIT" to the right. This is an attempt to compare the expected ratio of three known peaks to the peaks found in the image. Unfortunately, it has some shortcomings, and we'll probably be switching to a [root-mean-square error approach](https://en.wikipedia.org/wiki/Root-mean-square_deviation), where we compare a much larger # of points to those of a known spectrum, after height-adjusting for the baseline and maximum peak height. We'll see if that works better, but for now, please be aware that the "FIT" indicator is not that reliable.

###Why I'm interested

This project has integrated several ideas:

* auto-calibration, based on @sreyanth's work during last summer's [Google Summer of Code](/wiki/gsoc)
* a better, more visual UI for calibration
* a measure of "how good" calibration is

Hopefully in the future, we can combine these -- if we can collect data on how good auto-calibration works for many different spectra, we could say that if it's "better than 90% fit" or something, it just auto-calibrates it in one click. But if it doesn't manage to get a good fit, it prompts the user for help. 

Have trouble? Input, suggestions? Leave a comment!