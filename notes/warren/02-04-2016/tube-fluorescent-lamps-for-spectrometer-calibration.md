---
title: "Tube fluorescent lamps for spectrometer calibration"

tagnames: 'spectrometer, calibration, spectral-workbench, response:12258, response:12270'
author: warren
path: /notes/warren/02-04-2016/tube-fluorescent-lamps-for-spectrometer-calibration.md
nid: 12654
uid: 1

cids: 13473,13474,13475,13479,13487,13490,13503,13504,13505,13506,13507,13508,13509,23850,23851,23852

---

![](https://publiclab.org/public/system/images/photos/000/014/078/original/IMG_20160204_124718.jpg)

# Tube fluorescent lamps for spectrometer calibration

by [warren](../../../profile/warren) | February 04, 2016 18:12

February 04, 2016 18:12 | Tags: [spectrometer](../tag/spectrometer), [calibration](../tag/calibration), [spectral-workbench](../tag/spectral-workbench), [response:12258](../tag/response:12258), [response:12270](../tag/response:12270)

----

###What I want to do

I wanted to follow up on this post with a couple screenshots of an attempted calibration I just tried, based on a tube fluorescent that doesn't have as many spectral lines as a compact fluorescent bulb. This seems very related to @cfastie's [Twin Peaks post](https://publiclab.org/n/12270) about uncertainties in the double green line in CFL spectra.

###My attempt and results

I took a spectrum of a tube fluorescent bulb of the kind shown in the lead image, found in suspension ceilings, and I tried calibrating it two times; first, aligning the left green peak from the reference (G1) with the single green peak in my spectrum. 

[![Screenshot_2016-02-04_at_12.41.26_PM.png](//i.publiclab.org/system/images/photos/000/014/076/large/Screenshot_2016-02-04_at_12.41.26_PM.png)](//i.publiclab.org/system/images/photos/000/014/076/original/Screenshot_2016-02-04_at_12.41.26_PM.png)

Next, I tried aligning the right green peak from the reference (G2) with the single green peak in my spectrum:

[![Screenshot_2016-02-04_at_12.44.21_PM.png](//i.publiclab.org/system/images/photos/000/014/077/large/Screenshot_2016-02-04_at_12.44.21_PM.png)](//i.publiclab.org/system/images/photos/000/014/077/original/Screenshot_2016-02-04_at_12.44.21_PM.png)

###Questions and next steps

I'm not sure which is correct, but I calibrated using a CFL, and although my slightly battered spectrometer is not in peak (haha) condition, my [calibration clearly shows two green peaks](https://spectralworkbench.org/spectrums/show2/70695). The result shows the single green from the tube bulb at ~547nm, or clearly lined up with the second, G2 green line. 

<iframe width='100%' height='450px' style='border:none;' src='//spectralworkbench.org/spectrums/embed2/70690'></iframe>

Here's a set of them overlaid:

<iframe width='100%' height='700px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3160'></iframe>

###Why I'm interested

I'd guess that these long tubes lack a lot of the phosphors found in "warmer" CFLs, and that this single green peak is likely to be a mercury peak, leaving the other to be a phosphor like terbium, perhaps. I know this conflicts with one of the theories in @cfastie's [Twin Peaks post](/n/12270), and am eager to hear his thoughts on it! 


###Update

Sorry, I realized I should've added one more thing. If what I'm hypothesizing above is correct, and the long tube fluorescents show the ~546nm second G2 green line, then they are suitable for calibration with [the new Spectral Workbench 2 calibration system](/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0), as we use the G2 line as our second calibration point. 