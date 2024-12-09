---
title: 'Spectrometer Noise'
tagnames: spectrometer, webcam, desktop-spectrometer, barnstar:empiricism, noise-reduction, signal-to-noise-ratio, stability, noise, averaging
author: stoft
path: /notes/stoft/04-16-2016/spectrometer-noise.md
nid: 12987
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/015/581/original/STest_0-15BluDistrib.gif)

# Spectrometer Noise

by [stoft](../profile/stoft) April 16, 2016 07:01

April 16, 2016 07:01 | Tags: [spectrometer](../tag/spectrometer), [webcam](../tag/webcam), [desktop-spectrometer](../tag/desktop-spectrometer), [barnstar:empiricism](../tag/barnstar:empiricism), [noise-reduction](../tag/noise-reduction), [signal-to-noise-ratio](../tag/signal-to-noise-ratio), [stability](../tag/stability), [noise](../tag/noise), [averaging](../tag/averaging)

----

**Abstract**

This is a follow-on to my discussion of [Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability) and is an attempt to observe and compensate for what appears as significant "drift and noise" from the camera. Again, the test configuration has been designed to reduce the source and mechanical noise to zero so as to observe only camera noise. There is evidence of both drift and noise, evidence that the noise is primarily Gaussian and evidence that much of the noise can be diminished through multi-frame averaging. However, drift compensation remains an issue.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Disclaimers**

When sampling and analyzing drift and noise, it is not always easy to correlate those errors with a specific source. While camera AGC and detector noise remain the most likely causes, there may be other factors yet undiscovered.

**Sample Rate**

In the previous set of stability tests, data was accumulated only one point per minute; a useful overview, but it missed a lot of detail. The general rule for sampling is the Nyquist rate which states that the minimal number of samples to detect a periodic signal at a give frequency is 2x that frequency. (Imagine representing a sine wave by just 2 points; one at the peak and one at the valley.) However, two things result: 1) that sample rate will give a poor representation of the signal's waveform and 2) with non-periodic waveforms it will tell us nothing about what happens between those points.

Given that the camera is capable of 30 frames / sec, I wrote some Matlab code to extract one line of pixel data at ~6 frames/sec and store a total of 15 minutes of raw spectral line data (~10Mb) for later analysis. Again, the same mechanically rigid proto V3 and Solux 4700K lamp were configured exactly the same while collecting the data.

**Plots**

The first plot show 15 min of R/G/B/S ('S' means the (R+G+B)/3 spectrum curve) data with the sample number as the X-axis units. The data is the extraction of the same pixel's value (470, 550 and 620 nm for R/G/B and 550nm for S) as it is recorded over the time period. The Y-axis is the pixel intensity data from the camera.

[![STest_0-15RGBS6sps.gif](//i.publiclab.org/system/images/photos/000/015/573/large/STest_0-15RGBS6sps.gif)](//i.publiclab.org/system/images/photos/000/015/573/original/STest_0-15RGBS6sps.gif)

Note that it is easy to identify both drift and noise in these signals and that R/G/B have different noise levels which do not correlate with their average intensity value. I do not have an explanation for this as yet, The next plot is the same data only just a "zoom-in" to the middle of the above plot so as to see the noise with a bit more detail. Based on the first plot, the same "random" appearance was expected.

[![STest_0-15RGBS6spsZoom.gif](//i.publiclab.org/system/images/photos/000/015/574/large/STest_0-15RGBS6spsZoom.gif)](//i.publiclab.org/system/images/photos/000/015/574/original/STest_0-15RGBS6spsZoom.gif)

**Analysis**

First, it would be good to know a bit more about this noise and one simple method is to just plot a distribution:

[![STest_0-15RedDistrib.gif](//i.publiclab.org/system/images/photos/000/015/575/large/STest_0-15RedDistrib.gif)](//i.publiclab.org/system/images/photos/000/015/575/original/STest_0-15RedDistrib.gif)


[![STest_0-15GrnDistrib.gif](//i.publiclab.org/system/images/photos/000/015/576/large/STest_0-15GrnDistrib.gif)](//i.publiclab.org/system/images/photos/000/015/576/original/STest_0-15GrnDistrib.gif)


[![STest_0-15BluDistrib.gif](//i.publiclab.org/system/images/photos/000/015/577/large/STest_0-15BluDistrib.gif)](//i.publiclab.org/system/images/photos/000/015/577/original/STest_0-15BluDistrib.gif)


[![STest_0-15SpecDistrib.gif](//i.publiclab.org/system/images/photos/000/015/578/large/STest_0-15SpecDistrib.gif)](//i.publiclab.org/system/images/photos/000/015/578/original/STest_0-15SpecDistrib.gif)

While these distributions are not exactly the same, they are all similar to the Blue channel which appears reasonably Gaussian. This is helpful because 1) Gaussian noise was expected and 2) averaging the data is a simple and effective method to reduce it's effect. To check this, the Blue channel data was processes with a 31-sample running average and the resulting distribution is plotted below:

[![STest_0-15BluDistrib31ptAvg.gif](//i.publiclab.org/system/images/photos/000/015/579/large/STest_0-15BluDistrib31ptAvg.gif)](//i.publiclab.org/system/images/photos/000/015/579/original/STest_0-15BluDistrib31ptAvg.gif)

As another  visualization of the effectiveness of this level of averaging, the R/G/B/S plot was re-generated after averaging on each channel.

[![STest_0-15RGBS6sps31ptAvg.gif](//i.publiclab.org/system/images/photos/000/015/580/large/STest_0-15RGBS6sps31ptAvg.gif)](//i.publiclab.org/system/images/photos/000/015/580/original/STest_0-15RGBS6sps31ptAvg.gif)

**Conclusions**

These plots, especially the last two, show:

1) Camera noise can be reduced by averaging each pixel (of the selected line of pixels crossing the spectral band) over about 30 frames; roughly 5 sec of recording.

2) Some drift remains but, at least at 550 nm in the combined spectral plot, the error would be reduced to ~+/- 2.5%.

3) Doing no frame data averaging, thus including all the noise, essentially means retaining ~10% error which appears like adding a guess -- a potential for a 10% error each time a "capture" is performed. It's like a "roll of the dice".
