---
title: 'Spectrometer Peak-Hold'
tagnames: spectrometer, desktop-spectrometer, noise-reduction, signal-to-noise-ratio, noise
author: stoft
path: /notes/stoft/04-22-2016/spectrometer-peak-hold.md
nid: 13020
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/015/752/original/STest_CFL-15ptTimeAvgPeakHold320-380nm.gif)

# Spectrometer Peak-Hold

by [stoft](../profile/stoft) April 22, 2016 21:10

April 22, 2016 21:10 | Tags: [spectrometer](../tag/spectrometer), [desktop-spectrometer](../tag/desktop-spectrometer), [noise-reduction](../tag/noise-reduction), [signal-to-noise-ratio](../tag/signal-to-noise-ratio), [noise](../tag/noise)

----

**Abstract**

This is a brief follow-on to my previous note on spectrometer noise reduction via [Time-Averaging](https://publiclab.org/notes/edit/13007?t=1461350798) of pixels. This note concerns an alternative method for digging weak, sporadic signals out of the noise. As the title 3D graph shows, there appears to be a very weak signal at about 340nm but even with time-averaging, that signal disappears completely, By applying a "peak-hold" process on a per-nm basis, after the time-averaging, such signals can be captured.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Disclaimers**

Note that transient peaks are not necessarily "real" signals; but depending on the light source, they could be real. Also, in capturing very weak transient signals the user of this technique should not expect as much amplitude accuracy as with signals which easily appear above the noise by 12dB or more.

**Algorithm**

The method of peak-hold is common to spectrum analyzers and is easily performed by simply capturing, and plotting, the highest value, for each pixel, across the entire spectrum. While this also tends to increase the low-level background noise, and the resulting SNR can easily decrease, it has the unique advantage of allowing observation of non-steady-state signal. Just remember that interpretation of the results of peak-hold require greater care in analyzing what is real and what is just a transcient spike.

**Example**

Since I captured a significant volume of CFL spectral data over time, the data allowed searching for a weak signal to capture. The title 3D plot shows such a signal and the plot below shows how that peak was captured and shows it in reference to the Time-Average plot:

[![STest_CFL-15ptTimeAvgPeakHold.gif](//i.publiclab.org/system/images/photos/000/015/754/large/STest_CFL-15ptTimeAvgPeakHold.gif)](//i.publiclab.org/system/images/photos/000/015/754/original/STest_CFL-15ptTimeAvgPeakHold.gif)

**Conclusions**

The above plots clearly show Peak-Hold as an easy-to-implement and useful post-processing tool -- for application after the Time-Average algorithm. However, like any post-processing tool, it deserves to be interpreted with care.
