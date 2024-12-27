---
title: "Spectrometer DVD-Alignment Auto-Correction"

tagnames: 'spectrometer, desktop-spectrometer, noise-reduction, dvd-grating, dvd-alignment'
author: stoft
path: /notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction.md
nid: 13031
uid: 54025
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/015/782/original/STest_CFL-V1Proto3DSpectraY270-310.gif)

# Spectrometer DVD-Alignment Auto-Correction

by [stoft](/profile/stoft) | April 26, 2016 08:42

April 26, 2016 08:42 | Tags: [spectrometer](/tag/spectrometer), [desktop-spectrometer](/tag/desktop-spectrometer), [noise-reduction](/tag/noise-reduction), [dvd-grating](/tag/dvd-grating), [dvd-alignment](/tag/dvd-alignment)

----

**Abstract**

This is a continuation of my investigation into extracting stable data from the PLab spectrometer camera. Now that noise can be reduced by [time-averaging](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution) of pixel data from multiple frames and  small signal transcients can be recovered using [peak-hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold), wavelength-relative amplitude errors can still exist due to misalignment of the diffraction grating (DVD) with respect to the camera's X-Y image field. The solution is to extract data from a wide band of Y-Pixel lines but without the need for complex curve-fitting.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Stability](https://publiclab.org/notes/stoft/04-14-2016/spectrometer-stability)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

**Disclaimers**

This method does yield more consistent results but it should be acknowledged that this technique, like the others, is extracting data over both a spatial area and over time where all sources of noise,  drift and experimental configuration changes cannot be known ahead of time by the algorithm. Therefore these techniques 1) cannot be totally free of  error -- but I believe that any added errors to be much smaller than those the techniques are intended to address.

**Hardware**

While the previous notes have used data collected from my V3 Prototype, for these tests I needed a system with poor DVD alignment. That was easily created using parts from my older V1 bench prototype where I could adjust the DVD angle with respect to the older V1 webcam.

**Observations**

A plot of the spectral data from this example, of DVD-grating offset,  is shown in the image below:

[![STest_CFL-V1ProtoImageFrame.gif](//i.publiclab.org/system/images/photos/000/015/783/large/STest_CFL-V1ProtoImageFrame.gif)](//i.publiclab.org/system/images/photos/000/015/783/original/STest_CFL-V1ProtoImageFrame.gif)

Note the clear "slant" to the spectral band such that a horizontal "pixel line" though the band will never form a correct cross-section for obtaining a correct spectrum. This data begs the question; "Where do you place the pixel line to get the 'best' cross section to obtain the best spectra? The answer is, there isn't one; every 'Y' value pixel line will cause wavelength-dependent errors over the spectrum so the only option is to get the DVD grating to be perfectly aligned.

To understand the camera data better, just imagine performing a cross-section through the title plot (above) and plotting each of those spectrums as shown below:

[![STest_CFL-V1Proto3DYDependentSpectra.gif](//i.publiclab.org/system/images/photos/000/015/784/large/STest_CFL-V1Proto3DYDependentSpectra.gif)](//i.publiclab.org/system/images/photos/000/015/784/original/STest_CFL-V1Proto3DYDependentSpectra.gif)

Clearly, no matter which pixel line we select, some part of the spectrum will have the wrong amplitude relative to the rest of the spectrum.

**Analysis**

One approach would be to take sufficient data points to calculate the offset angle and then create a theoretical line through the spectral band's "center". However, that approach is complicated and requires more complicated analysis within the algorithm to assure such code doesn't get confused.

A simpler approach is to simply capture a span of pixel lines which cover the entire spectral band image area and then extract the maxima for each sequential wavelength. This results in the plot shown below:

[![STest_CFL-V1ProtoAutoPeak.gif](//i.publiclab.org/system/images/photos/000/015/785/large/STest_CFL-V1ProtoAutoPeak.gif)](//i.publiclab.org/system/images/photos/000/015/785/original/STest_CFL-V1ProtoAutoPeak.gif)

The reason why this works is based on the following assumptions -- which the above observations support.

1 - When properly constructed, the spectral band is consistent  and reasonably well defined.

2 - As such, at any wavelength where the intensity is clearly well above the noise, the "brightest spot" in the band is where the spectral measurement will have the best SNR.

3 - The DVD having a slight rotational offset, relative to the camera's X-Y image array, only causes a small shift in 'Y', not a change in intensity which would produce errors greater than those produced by the angular offset.

4 - Finding the 'Y' pixel line with the maximum value, for any wavelength, from the time-averaged data (not the raw data) is extracting data from a noise-reduced signal which is more stable than any 'Y pixel line data.

**Conclusions**

This technique is relatively simple, can be performed directly on the time-averaged data and does not require additional knowledge about the DVD mounting angle; only the relative width of the spectral image band so as to ensure sufficient 'Y' data. This method essentially provides auto-correction of miss-aligned diffraction gratings -- within reasonable limits.


