---
title: 'Equalizing area of spectral graphs for comparison'
tagnames: spectrometer, fluorescence, spectral-workbench, spectral-workbench-api, macros, normalizing, equalizing, equal-area
author: warren
path: /notes/warren/07-30-2014/equalizing-area-of-spectral-graphs-for-comparison.md
nid: 10997
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/005/680/original/comparisons.jpg)

# Equalizing area of spectral graphs for comparison

by [warren](../profile/warren) July 30, 2014 22:58

July 30, 2014 22:58 | Tags: [spectrometer](../tag/spectrometer), [fluorescence](../tag/fluorescence), [spectral-workbench](../tag/spectral-workbench), [spectral-workbench-api](../tag/spectral-workbench-api), [macros](../tag/macros), [normalizing](../tag/normalizing), [equalizing](../tag/equalizing), [equal-area](../tag/equal-area)

----

###What I want to do

During the development of testing techniques with spectrometers in the Public Lab community, we've often talked about whether exposure calibration is necessary -- that is, do we have to know the total amount of light measured to be able to compare spectra of different things?

Some research I've done suggests (though I'd love to read more about it, if you have citations or links) that we can simply equalize the area under the graph line of two spectra, and compare them. We've [discussed this years ago](/notes/joshmc/4-28-2012/setup-uv-testing-specrtrometer) but never created a means to equalize spectra in software. I gave it a stab today and got some interesting results.

###My attempt and results

I saved my code in a Gist here: https://gist.github.com/jywarren/a30ea77ad54e8aa9ae1f

And on Spectral Workbench here: https://spectralworkbench.org/macro/warren/equalize_area

You can access it by going to "More Tools" on a spectrum page, then "Macros" and choosing the "equal_area" macro. I ran it on a couple spectra of suspected crude oil from the [event months ago at Parts & Crafts](/notes/warren/12-11-2013/spectrometry-sample-extraction-at-the-parts-crafts-toolshed-raising), but one of the two I got had low exposure and there's a lot of noise. 

Here's what it looks like before; just a raw comparison: 

[![raw-comparison.png](https://i.publiclab.org/system/images/photos/000/005/681/large/raw-comparison.png)](https://i.publiclab.org/system/images/photos/000/005/681/original/raw-comparison.png)

And here they are equalized -- the y-axis no longer means anything, but they are the same area under the curve:

[![equalized.png](https://i.publiclab.org/system/images/photos/000/005/682/large/equalized.png)](https://i.publiclab.org/system/images/photos/000/005/682/original/equalized.png)

###Questions and next steps

So, it's interesting, but mostly just as a proof of concept for the script. We should really get 3-4 scans of the same sample, all at reasonable exposure (25-75% intensity) and see if they really are similar. 

We should also reuse [the smoothing macro](/notes/warren/07-19-2013/smoothing-macro-using-spectral-workbench-api) in conjunction with this code, to get a closer match. I also have to work on getting both to SAVE their output, so that analyses can be shared and don't have to be run over and over. But that's a bigger project. 

###Why I'm interested

If we can show empirically that exposure equalization makes exposure calibration unnecessary for fluorescence spectroscopy, that would dramatically simplify [the process of identifying unknown oils](/wiki/oil-testing-kit). 