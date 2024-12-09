---
title: 'Polynomial'
tagnames: spectrometer, vermont, calibration, spectralworkbench, cfl, ebert, nonlinear, non-linear, polynomial
author: cfastie
path: /notes/cfastie/3-6-2013/polynomial.md
nid: 6225
uid: 554

---

![](https://publiclab.org/sites/default/files/poly-Snowy-1200.jpg)

# Polynomial

by [cfastie](../profile/cfastie) March 07, 2013 04:14

March 07, 2013 04:14 | Tags: [spectrometer](../tag/spectrometer), [vermont](../tag/vermont), [calibration](../tag/calibration), [spectralworkbench](../tag/spectralworkbench), [cfl](../tag/cfl), [ebert](../tag/ebert), [nonlinear](../tag/nonlinear), [non-linear](../tag/non-linear), [polynomial](../tag/polynomial)

----

<em>Image above: Spectrum of a CFL calibrated by anchoring two well-known peaks at 405 and 650 nm (arrows). Other peaks do not align well with their known wavelengths.</em>

Calibrating a Public Lab spectrometer is a crucial step. The raw image from the spectrometer's camera has no information about which wavelengths are represented until it is associated with a wavelength scale. Typically, this is done in [Spectral Workbench](https://spectralworkbench.org) by identifying two well-known peaks in a spectral image of a compact fluorescent lamp (CFL). Spectral Workbench then knows how to stretch a wavelength scale along the image.  If the image is a faithful representation of a good diffraction pattern, a dozen other well-known peaks in the spectrum will line up with their proper wavelengths.

This week I was pleased to see that a half dozen different calibrated spectra taken by [Ebert]( http://publiclaboratory.org/notes/cfastie/2-19-2013/ebert) of CFLs all lined up nicely with each other. But I was puzzled that they did not line up so well with a diagram of the 14 major emission peaks in a CFL. I made a [set in Spectral Workbench of this result]( https://spectralworkbench.org/sets/show/183). The image above is one of the spectra in that set ([SnowSky](https://spectralworkbench.org/analyze/spectrum/4474)) with the 14 CFL peaks overlain. That spectrum was calibrated by telling Spectral Workbench the wavelength of the blue peak at 405 nm and the red peak at 650 nm (using the macro feature). The failure of many of the other peaks to line up properly suggests that the spectral images taken by Ebert are distorted. To align them properly, the image has to be rubber sheeted -- a non-linear adjustment must be made.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8534960643/" title="PolyRaw by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8107/8534960643_68d9c349c6.jpg" width="500" height="273" alt="PolyRaw"></a><p></p>
An intensity graph of the CFL spectrum above which was calibrated just by anchoring  two peaks, one near either end. Many peaks do not line up with the well-known peaks from CFLs (green dashed lines).</div>

There has been some good [discussion about calibration]( https://groups.google.com/forum/?fromgroups=#!topic/plots-spectrometry/qgRmgAmrRvw) at the plots-spectrometry Google Group, where I learned about the [technique that I describe below]( http://www.coseti.org/pc2000_2.htm) for fitting a second order polynomial to adjust the calibration spectrum above so it matches the proper peaks more closely. I used the cursor readout in Spectral Workbench to find the wavelength of each of the 14 peaks in my poorly calibrated spectrum above.  I knew the correct wavelength of these peaks from [sources like this](http://en.wikipedia.org/wiki/File:Fluorescent_lighting_spectrum_peaks_labelled.gif). Excel has a function (=LINEST() ) which will do this multiple regression properly and compute such things as the F statistic, but if you just make a scatterplot graph of the 14 wavelengths of the poorly calibrated peaks (x) against the 14 known correct wavelengths of those peaks (y) and fit a second order polynomial "trendline" to the points, Excel will print the equation for you. In this case the equation was:

y=0.0002x^2 +0.8394x+37.788

where x is the old lousy wavelength and y is the new adjusted wavelength

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8534960691/" title="Poly2nd by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8506/8534960691_9248b5e29c.jpg" width="500" height="261" alt="Poly2nd"></a><p></p>
An intensity graph of the same CFL spectrum above which has been adjusted by fitting a second order polynomial to the wavelengths. The peaks are closer to the known wavelengths of those peaks (dashed lines).</div>

Applying this function to each old wavelength shifted the spectral graph in the right direction, but was not as satisfying as I had hoped. So I got rad and clicked "Format Trendline" again and went for a third order polynomial. That improved the fit some more and probably as much as it needs. I will have to live with the remaining errors (at least until I figure out what causes them).

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8534960659/" title="Poly3rd by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8392/8534960659_6dfd41473b.jpg" width="500" height="257" alt="Poly3rd"></a><p></p>
An intensity graph of the same CFL spectrum which has been adjusted by fitting a third order polynomial to the wavelengths. The peaks are as close to the known wavelengths (dashed lines) as they are going to get.</div>

Now that I have this function (y=-0.00000141x^3 +0.0024x^2 -0.376x+250.15) I could apply it to all the spectra taken with Ebert. So when I capture a spectral image of an unknown light source, the peaks will be more accurately aligned on the wavelength scale and be more reliable clues about the atoms or molecules producing or modifying the light. It would be great to have this functionality in Spectral Workbench, so if you would like to help with the programming, get in touch.