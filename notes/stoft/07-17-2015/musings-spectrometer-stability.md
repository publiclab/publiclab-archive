---
title: "Musings: Spectrometer Stability"

tagnames: 'spectrometer, oil, kit, test, response:11649'
author: stoft
path: /notes/stoft/07-17-2015/musings-spectrometer-stability.md
nid: 12074
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/010/707/original/P3U-3.jpg)

# Musings: Spectrometer Stability

by [stoft](../../../profile/stoft) | July 17, 2015 05:46

July 17, 2015 05:46 | Tags: [spectrometer](../tag/spectrometer), [oil](../tag/oil), [kit](../tag/kit), [test](../tag/test), [response:11649](../tag/response:11649)

----

My experiments with the PLab 3.0 spectrometer and PLab oil-test kit prototypes demonstrated the requirement to build mechanically stable devices. While it can be educational to observe a working webcam+DVD spectrometer and recover colorful plots, performing real measurements requires repeatability which means stability.

I'd like to propose some design guidelines for these PLab kits:

1 - The optical path from slit to DVD to camera must be a) rigid and b) allow for precise alignment.

2 - Black paper is good for low reflections and can provide a low cost light-tight volume space, but is useless in terms of mechanical rigidity.

3 - Given the slit-camera distance, with a narrow photo-image slit, the slit material must be held fixed relative to the DVD/Camera to reduce spectral noise (for better resolution).

4 - Any "add-on", such as the oil-test-kit module, must be mechanically tied to the spectrometer "frame" (which provides the spectrometer optical path stability) -- a paper interface is not enough.

5 - The UV laser illumination of an oil sample (to be viewed by the spectrometer) must also be rigid so as to eliminate amplitude variations in the spectral signal. (Remember, if you are comparing signatures of samples where the major difference is amplitude of a broad peak, amplitude variations can easily create measurement noise that is a large fraction of the signal you want to measure.

6 - Mounting of oil-test-kit components must be rigid, relative to each other and relative to the spectrometer because any variation or vibration can cause poor measurement repeatability and sample-to-sample repeatability.

7 - Reflections. Light from the UV laser can easily reflect off the black paper and cause intensity variations. Black paper is good, but reflections from it, and from distortions in the cuvettes, can cause significant variations.

8 - At such "close range", the alignment (and alignment stability) of the spectrometer optical path through the slit becomes critical.

A measure of stability of such a system could be verified by repeat set-up, calibration and measurement of multiple samples and comparing the resulting data to calculate the measurement noise error.

Comments are welcome.
