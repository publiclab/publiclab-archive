---
title: "Spectrometer Noise Solution?"

tagnames: 'spectrometer, webcam, desktop-spectrometer, noise-reduction, signal-to-noise-ratio, noise'
author: stoft
path: /notes/stoft/04-20-2016/spectrometer-noise-solution.md
nid: 13007
uid: 54025
cids: 14354,14359,14413,14421,29305,29927
---

![](https://publiclab.org/public/system/images/photos/000/015/689/original/STest_CFL-15ptTimeAvgSNR.gif)

# Spectrometer Noise Solution?

by [stoft](/profile/stoft) | April 20, 2016 23:47

April 20, 2016 23:47 | Tags: [spectrometer](/tag/spectrometer), [webcam](/tag/webcam), [desktop-spectrometer](/tag/desktop-spectrometer), [noise-reduction](/tag/noise-reduction), [signal-to-noise-ratio](/tag/signal-to-noise-ratio), [noise](/tag/noise)

----

**Abstract**

This is a continuation of my series on spectrometer noise which now focuses on observations of a CFL spectra in attempting to more clearly identify the spectrometer's noise source(s) while searching for a practical methodology for improving spectral measurements. The best option appears to be time-averaging of pixel data as there appears to be little correlation between the observed noise and any other independently measurable parameter.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Disclaimers**

While significant efforts were used to assure stability and to write algorithms for the general case, these tests and the acquired data only represent a limited subset of testable light sources and possible user configurations.

**Configuration**

Again, I'm using my V3 prototype along with a 14W, 900 lumen 2700K CFL. However, to eliminate the possibility of any added mechanical-related noise, I replaced the film-based ND filter / attenuator with a baffle containing a small hole; mounted next to the lamp. The hole diameter and distance allowed precise setting of the signal intensity just below clipping but without any optical interference. All components were mounted on the same bench and nothing was disturbed during the 15-min data acquisition period.

**Data**

I enhanced the data acquisition to include 27 camera pixel lines per frame; 1) 3 lines at 100 lines above the spectral band, 2) 21 lines within and centered on the spectral band, and 3) 3 lines at 100 lines below the spectral band. All data was collected and saved to 15 data files each containing 1 min of data at 5 samples per second. The added 3 lines above and below the spectral band allowed for observing the camera's dark field to look for drift, noise and any other anomalies. Having saved all data to files, post-processing with Matlab becomes significantly easier than working in real-time.

**Observations**

First, I looked at the dark field to observe the relative background noise level and look for any obvious DC drift component. While there is some noise, it is relatively small and there is little indication of a significant offset bias.

[![STest_CFL-DarkFieldY145Y345-300-800nm.gif](//i.publiclab.org/system/images/photos/000/015/690/large/STest_CFL-DarkFieldY145Y345-300-800nm.gif)](//i.publiclab.org/system/images/photos/000/015/690/original/STest_CFL-DarkFieldY145Y345-300-800nm.gif)

However, the above data is over only a single sample in time, so the next plot shows how this data changes over time. The plots show the background noise is consistent and there does not appear to be significant long-term drift.

[![STest_CFL-DarkFieldY140Y340-Waterfall.gif](//i.publiclab.org/system/images/photos/000/015/691/large/STest_CFL-DarkFieldY140Y340-Waterfall.gif)](//i.publiclab.org/system/images/photos/000/015/691/original/STest_CFL-DarkFieldY140Y340-Waterfall.gif)

Given that the Solux test data showed much more significant noise, and if the background noise is not a major issue, then how does the CFL spectra compare? The following plot shows the CFL spectra contains significant noise like the Solux spectra.

[![STest_CFL-91pt2700K300-800nm.gif](//i.publiclab.org/system/images/photos/000/015/750/large/STest_CFL-91pt2700K300-800nm.gif)](//i.publiclab.org/system/images/photos/000/015/750/original/STest_CFL-91pt2700K300-800nm.gif)

**Analysis**

So, let's take a closer look at the central green 546 peak. Notice that while the ends (near zero intensity) have small residual noise, the peak as considerably more noise which will easily affect measurements.

[![STest_CFL-91pt2700K535-555nm.gif](//i.publiclab.org/system/images/photos/000/015/751/large/STest_CFL-91pt2700K535-555nm.gif)](//i.publiclab.org/system/images/photos/000/015/751/original/STest_CFL-91pt2700K535-555nm.gif)

This invokes several thoughts; one of which is to look at the 546nm peak noise (as described by a single pixel) and the intensity detected by the two pixels on either side of 546nm. In the plot below, it is easy to see that just one pixel describes to center of the peak as the level of the neighbor pixels are only about half.

[![STest_CFL-91pt2700K545-6-7nm.gif](//i.publiclab.org/system/images/photos/000/015/694/large/STest_CFL-91pt2700K545-6-7nm.gif)](//i.publiclab.org/system/images/photos/000/015/694/original/STest_CFL-91pt2700K545-6-7nm.gif)

The above plot covers 91 samples so represents about 20 sec and the peak intensity varies by nearly 20%.

So, what about the neighboring pixel lines (above and below the center line of the spectral band), each of which should be detecting nearly-exactly the same signal because (at least visually) the spectral band seems uniform across many lines.

[![STest_CFL-50pt546nmYadjacent.gif](//i.publiclab.org/system/images/photos/000/015/695/large/STest_CFL-50pt546nmYadjacent.gif)](//i.publiclab.org/system/images/photos/000/015/695/original/STest_CFL-50pt546nmYadjacent.gif)

The above plot shows the 546nm pixel data from 3 parallel lines over the same set of samples as the above plots. Notice that any hint of correlation between the pixel data over time, is very weak. The lower plot clearly shows mostly random error, which again, is in the range of 10-15%. Clearly, the noise of each pixel is nearly independent from every other pixel.

So, what about noise differences between different peaks. The plot below compares the peaks at 436nm and 546nm; they each have just about the same percentage noise and show no correlation with each other.

[![STest_CFL-91pt2700K546vs436nm.gif](//i.publiclab.org/system/images/photos/000/015/696/large/STest_CFL-91pt2700K546vs436nm.gif)](//i.publiclab.org/system/images/photos/000/015/696/original/STest_CFL-91pt2700K546vs436nm.gif)

Finally, is there some value to be derived from observing a long-term average of a spectra? The plot below shows the effects of a 61-point running average on 300 samples of 546nm peak data. Yes, a slow drift is recognizable but it does not appear periodic.

[![STest_CFL-300Sample61ptAvg546nm.gif](//i.publiclab.org/system/images/photos/000/015/697/large/STest_CFL-300Sample61ptAvg546nm.gif)](//i.publiclab.org/system/images/photos/000/015/697/original/STest_CFL-300Sample61ptAvg546nm.gif)

**Hypotheses**

All of these observations support the following hypotheses:

1 - Noise from pixels is inherent to the inexpensive webcam and independent from every other pixel.

2 - The observable long-term drift is the most likely source of that specific 'noise' component which could be related to an AGC effect. Most probably, the higher frequency pixel noise is completely outside the loop bandwidth of any AGC.

3 - There is no particular advantage to averaging parallel lines of pixel data as their detected noise appears uncorrelated.

4 - Collecting and analyzing background noise data is certainly possible but, since it is not correlated, would not likely help with noise reduction. However, it might still provide background DC offset correction; especially in higher ambient light conditions.

5 - Time averaging of pixel data holds the best option for spectra noise reduction. Averaging data across wavelengths from a single scan line has a low-pass filter effect and therefore damages spectral features with high transition rates (sharp peaks). However, averaging pixels over time, removes time-based noise without removing the sharp transitions of the spectra.

**A Solution?**

The following plot demonstrates this effect. Both curves were processed through 15-point averaging but: A) the Blue curve resulted from filtering 300-800nm spectral data from time sample #6 whereas B) the Red curve resulted from filtering each pixel value over 15 samples. The negative effect on the CFL spectral details is easy to see.

[![STest_CFL-15ptSpecAvgVsTimeAvg.gif](//i.publiclab.org/system/images/photos/000/015/699/large/STest_CFL-15ptSpecAvgVsTimeAvg.gif)](//i.publiclab.org/system/images/photos/000/015/699/original/STest_CFL-15ptSpecAvgVsTimeAvg.gif)

The next plot shows a 15-point (3 sec at 5 fps) running average, implemented over a 271-sample period of nearly a minute. The upper plot looks surprisingly sharp considering that all 271 time-averaged spectral plots have been written over the top of each other -- meaning,  all 271 spectra are very similar as a result of time-averaging and spectral detail appears well preserved.

[![STest_CFL-15ptTimeAvgSNR.gif](//i.publiclab.org/system/images/photos/000/015/698/large/STest_CFL-15ptTimeAvgSNR.gif)](//i.publiclab.org/system/images/photos/000/015/698/original/STest_CFL-15ptTimeAvgSNR.gif)


