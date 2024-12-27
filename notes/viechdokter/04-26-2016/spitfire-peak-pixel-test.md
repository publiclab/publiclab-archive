---
title: "Spitfire peak pixel test"

tagnames: 'spectrometer, cfl, desktop-spectrometer, timeseries, spectrum, peak_wavelengths, intensities'
author: viechdokter
path: /notes/viechdokter/04-26-2016/spitfire-peak-pixel-test.md
nid: 13033
uid: 468990
cids: 14467
---

![](https://publiclab.org/public/system/images/photos/000/015/802/original/571_nm_peak.jpg)

# Spitfire peak pixel test

by [viechdokter](/profile/viechdokter) | April 26, 2016 22:45

April 26, 2016 22:45 | Tags: [spectrometer](/tag/spectrometer), [cfl](/tag/cfl), [desktop-spectrometer](/tag/desktop-spectrometer), [timeseries](/tag/timeseries), [spectrum](/tag/spectrum), [peak_wavelengths](/tag/peak_wavelengths), [intensities](/tag/intensities)

----

**What I wanted to do** this time is to take a series of spectra of the same CFL lamp in fast succession ("spitfire") at 0.1 seconds intervals over a period of 10 seconds and have a look at the sharpest intensity peaks only. 

**The questions were:** do the peaks move side to side? Do the intensities vary? How much? This is part of my examinations of reproducibility of data using the PLab spectrometer 3.0. I expected to find variations in intensity curves as the lamp was flickering noticably. But will the peaks always stay at the same wavelengths, thus giving a "light fingerprint" of the lamp that is reproducible? 

I try to build up on the results of @stoft who found out that single webcam pixels (in my case the peak at a certain wavelength) are not affected by neighbouring pixels at all and that intensity variations in single pixels (wavelengths) occur pretty randomly and not predictably. I also refer to my own earlier noise-by-colour studies.

**First the intensities during the first 10 seconds:**

For this study I will look at _two very distinct peaks_ - one at 571.1 nanometers and the other at 566-567 nanometers.

_571.1 nm curves:_

[![571_nm_peak.jpg](//i.publiclab.org/system/images/photos/000/015/803/large/571_nm_peak.jpg)](//i.publiclab.org/system/images/photos/000/015/803/original/571_nm_peak.jpg)

Here are the intensity curves by channel:

[![Peak_intensity_wobble_at_571_nm.jpg](//i.publiclab.org/system/images/photos/000/015/804/large/Peak_intensity_wobble_at_571_nm.jpg)](//i.publiclab.org/system/images/photos/000/015/804/original/Peak_intensity_wobble_at_571_nm.jpg)

The blue curve again has the biggest intensity changes. (The green channel was clipped.) In the next diagram I subtracted the minimum values of each channel from the actual values measured each 0.1 second over a period of 10 seconds to get a kind of "base curve":

[![Peak_intensity_wobble_minus_minimum_values_at_571_nm.jpg](//i.publiclab.org/system/images/photos/000/015/805/large/Peak_intensity_wobble_minus_minimum_values_at_571_nm.jpg)](//i.publiclab.org/system/images/photos/000/015/805/original/Peak_intensity_wobble_minus_minimum_values_at_571_nm.jpg)

Although red and blue (and of course average) seem to follow roughly the same wobble pattern, the blue curve wobbles much more at this peak.

_The 566.1 nm curves:_

[![566_nm_peak.jpg](//i.publiclab.org/system/images/photos/000/015/811/large/566_nm_peak.jpg)](//i.publiclab.org/system/images/photos/000/015/811/original/566_nm_peak.jpg)

[![Peak_intensity_wobble_at_566_nm.jpg](//i.publiclab.org/system/images/photos/000/015/812/large/Peak_intensity_wobble_at_566_nm.jpg)](//i.publiclab.org/system/images/photos/000/015/812/original/Peak_intensity_wobble_at_566_nm.jpg)

[![Peak_intensity_wobble_minus_minimum_values_at_566_nm.jpg](//i.publiclab.org/system/images/photos/000/015/813/large/Peak_intensity_wobble_minus_minimum_values_at_566_nm.jpg)](//i.publiclab.org/system/images/photos/000/015/813/original/Peak_intensity_wobble_minus_minimum_values_at_566_nm.jpg)

Although it is not as clearly visible at this peak the blue curve still has a greater "wobble" than the other channels. But what is more interesting, is that at this peak the overall noise is much higher than at 571.1 nm at the same points in time. 

_**We have different peak intensity changes at different peaks at the same time!**_

_This fits with @stoft s results that each pixel reacts independantly but makes reproducible results for intensities (for example in oil dilution experiment rows) much more difficult to achieve._

Here you can see a comparison between the blue peak intensities at the same points in time at 566.1 and 571.1 nanometers. There is no recognizable pattern between them. 

[![comparison_of_blue_peak_intensities_at_different_peaks.jpg](//i.publiclab.org/system/images/photos/000/015/814/large/comparison_of_blue_peak_intensities_at_different_peaks.jpg)](//i.publiclab.org/system/images/photos/000/015/814/original/comparison_of_blue_peak_intensities_at_different_peaks.jpg)

I don't know what exactly happens that creates such strong differences between between those peaks' intensities but

a) it can't be due to Automatic Gain Control as AGC would not work on single pixels and

_b) I think we probably can bury the idea that spectral intensities always relate to ammounts of a certain atom or to a certain type of atom when taking spectra with our PLab 3.0 spectrometer._ 

**The next step** will be to assess if the peaks always stay at the same exact wavelengths. 

I didn't do this mathematically/statistically but rather "optically" by marking the peak wavelengths per channel in their respective colour on the spreadsheet. Here are screenshots of sections of the different colours with marked maximums:

[![red_peak_wavelength_a.jpg](//i.publiclab.org/system/images/photos/000/015/817/large/red_peak_wavelength_a.jpg)](//i.publiclab.org/system/images/photos/000/015/817/original/red_peak_wavelength_a.jpg)

[![green_peak_wavelength_a.jpg](//i.publiclab.org/system/images/photos/000/015/818/large/green_peak_wavelength_a.jpg)](//i.publiclab.org/system/images/photos/000/015/818/original/green_peak_wavelength_a.jpg)

[![blue_peak_wavelength_a.jpg](//i.publiclab.org/system/images/photos/000/015/816/large/blue_peak_wavelength_a.jpg)](//i.publiclab.org/system/images/photos/000/015/816/original/blue_peak_wavelength_a.jpg)

These screenshots show that the peaks are pretty stable wavelengthswise. The blue peak is broader than the red peak so you notice a slight wiggle in the red over three or four pixels. Although green is clipped it is always clipped at the exact same place (wavelength).

**These are the first hints that concerning the wavelengths the peaks are pretty stable to sideways wiggle.**

For anyone wanting to check things, look at the values, curves or data I attach my spreadsheet with all data for the _ten seconds spitfire pixel test_ here:

<a href="//i.publiclab.org/system/images/photos/000/015/819/original/spitfire_all.ods"><i class="fa fa-file"></i> spitfire_all.ods</a>



