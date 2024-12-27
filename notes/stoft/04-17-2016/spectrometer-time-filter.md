---
title: "Spectrometer Time Filter"

tagnames: 'spectrometer, webcam, desktop-spectrometer, noise-reduction, signal-to-noise-ratio, stability, noise'
author: stoft
path: /notes/stoft/04-17-2016/spectrometer-time-filter.md
nid: 12996
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/015/639/original/STest_61SampleSpecDistribMaxima.gif)

# Spectrometer Time Filter

by [stoft](../../../profile/stoft) | April 17, 2016 20:40

April 17, 2016 20:40 | Tags: [spectrometer](../tag/spectrometer), [webcam](../tag/webcam), [desktop-spectrometer](../tag/desktop-spectrometer), [noise-reduction](../tag/noise-reduction), [signal-to-noise-ratio](../tag/signal-to-noise-ratio), [stability](../tag/stability), [noise](../tag/noise)

----

**Abstract**

This next 'chapter' in the stability series attempts to observe the potential for camera noise impact vs number of image frames which are averaged. The result, as expected with most noise, is the familiar non-linear trade-off of benefit vs time. The answer to "how long" can only be assigned in cooperation with the real-world limits of software interface performance; but it is likely to require at least several seconds of steady-state test conditions to be effective.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Disclaimers**

The data source is the same 6 fps frame data taken over a 15 minute period under the most stable conditions I could produce with my V3 prototype plus Solux 4700K lamp. Therefore, other, less stringent measurement configurations are likely to observe higher noise levels so any guess at "measurement settling times" would likely be longer than what this data visually suggests.

I'll admit, I'm not actually "filtering time" as the title might suggest, but the coined term just references filtering out the noise by using sampled frames over time and it provided a quick path to get these observations documented and available.

**Time Filtering**

I decided to take a somewhat novel approach to extracting the spectral signature from the time-variant noise I'd been observing. Instead of a simple running average, I constructed a histogram of each nm value over time and then plotted the peak; the maximum value of each wavelength's data distribution over the time period. The difference is only that I thought to avoid asymmetry effects of the data distribution (some of which I'd previously observed) which can coexist with very 'strong' mid-distribution peaks. My thought was to preserve spectral detail while reducing noise; something which is often a trade-off with averaging. The plot suggest the technique might be useful.

There is still the choice of how many frames to process to produce the final spectra so I plotted a selection: 7, 31 and 61 samples, representing 1, 5 and 10 sec at 6 fps:

[![STest_7SampleSpecDistribMaxima.gif](//i.publiclab.org/system/images/photos/000/015/634/large/STest_7SampleSpecDistribMaxima.gif)](//i.publiclab.org/system/images/photos/000/015/634/original/STest_7SampleSpecDistribMaxima.gif)

[![STest_31SampleSpecDistribMaxima.gif](//i.publiclab.org/system/images/photos/000/015/635/large/STest_31SampleSpecDistribMaxima.gif)](//i.publiclab.org/system/images/photos/000/015/635/original/STest_31SampleSpecDistribMaxima.gif)

[![STest_61SampleSpecDistribMaxima.gif](//i.publiclab.org/system/images/photos/000/015/636/large/STest_61SampleSpecDistribMaxima.gif)](//i.publiclab.org/system/images/photos/000/015/636/original/STest_61SampleSpecDistribMaxima.gif)

The top plot shows sets of spectra (one per time sample) all just plotted over the other which give a visual impression of the combined time-dependent drift + noise factors. The lower plot is the 'filtered' (extracted distribution peaks per nm) data to visually display the improvement. The method appears to perform well at reducing the Gaussian noise while retaining signal detail without the 'smoothing' effects often related to using just run-length averaging of a single spectra.

**Analysis**

While the above plots look promising, those visualizations need a bit more quantitative results to better understand the noise improvement vs time trade-off.

The following plot shows the results of performing a simple, per-nm run-length averaging vs number of (R+G+B)/3 pixel data for each nm wavelength of a 10nm span (545-555nm) of image frames for 1 to 91 frames (~15 sec at 6 fps). Each wavelength's time data appears as a separate plot trace; not separated by color as they are of equal importance to the spectra. The reference for calculating the error is the long-term average, for each nm, over the original 15 minute time period. That average thus includes both noise and long-term drift. As is expected, the error drops roughly exponentially (quickly at first and then improves more slowly with time).

[![STest_1-91SampleSpecPtsVsDistribErr.gif](//i.publiclab.org/system/images/photos/000/015/638/large/STest_1-91SampleSpecPtsVsDistribErr.gif)](//i.publiclab.org/system/images/photos/000/015/638/original/STest_1-91SampleSpecPtsVsDistribErr.gif)

**Conclusions**

1) There remains evidence that time-averaging is helpful in reducing what appears to be camera-related noise

2) The price will be the requirement to keep spectrometer test configurations stable for a number of seconds

3) There may be some benefit to extracting data from pixel value distribution data as opposed to simple averaging.
