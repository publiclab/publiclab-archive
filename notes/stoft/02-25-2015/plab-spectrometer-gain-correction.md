---
title: 'PLab Spectrometer Gain-Correction'
tagnames: spectrometer, intensity-calibration, barnstar:basic, intensity, amplitude, gain, gain-correction
author: stoft
path: /notes/stoft/02-25-2015/plab-spectrometer-gain-correction.md
nid: 11638
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/009/085/original/GainCal-2.gif)

# PLab Spectrometer Gain-Correction

by [stoft](../profile/stoft) February 25, 2015 10:13

February 25, 2015 10:13 | Tags: [spectrometer](../tag/spectrometer), [intensity-calibration](../tag/intensity-calibration), [barnstar:basic](../tag/barnstar:basic), [intensity](../tag/intensity), [amplitude](../tag/amplitude), [gain](../tag/gain), [gain-correction](../tag/gain-correction)

----

Calibrating the PLab spectrometer for absolute intensity will likely remain a difficult and expensive concept. However, I'd like to propose a simpler method of at least improving the relative accuracy of the spectra users can display.

**Web-Cam Limits**
A Compact Florescent Lamp (CFL) provides an inexpensive source for calibrating the PLab spectrometers for wavelength because the CFL has several stable emission lines at known frequencies. However, calibrating the spectrometer for relative intensity over that same range is harder because there are no readily available light sources with uniform output energy over the full visible range of wavelengths. In addition, the sensitivity of digital camera (like the Sanm web-cam) vary substantially with the color of light. Consider this first graphic:

[![GainCal-1.gif](https://i.publiclab.org/system/images/photos/000/009/084/medium/GainCal-1.gif)](https://i.publiclab.org/system/images/photos/000/009/084/original/GainCal-1.gif)

The measurement data came from an prototype upgraded PLab 3 spectrometer (http://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype) and the solar reference data came from the web. The plot show the familiar RGB and averaged-RGB plots that are viewable in SpectralWorkBench (SWB). Notice that the 'Magenta' measured data (from observing the sun) looks only vaguely like the reference spectral curve of 5780K sunlight. Why?

Well, notice the three RGB measured curves. The Blue filtered curve not only cuts off sharply just below 400nm but it is nowhere near "flat" within its 400-500nm span. Similarly, the Green and Red curves 'roll-off' rapidly at either end of their filter ranges and their center-peak gains are different. Combining the curves together does construct a broader range, but the sun still emits significant energy well past the camera's 400nm cut-off and the gain between is non-uniform. Above 650nm the Red filter does pass some near infrared but the signal is weak and rather noisy. So, there are some inherent limits but also notice that the solar spectrum, though not flat, is relatively 'smooth' (as opposed to a CFL for instance) and does extend past either end of the Sanm camera's sensitivity range. So, why not take advantage of the sun's spectrum to improve the accuracy of PLab spectral plots?

**Solar Reference**
Below is a graphic with plots showing the process of gain-correcting the PLab data to match the reference solar spectrum:

[![GainCal-2.gif](https://i.publiclab.org/system/images/photos/000/009/082/medium/GainCal-2.gif)](https://i.publiclab.org/system/images/photos/000/009/082/original/GainCal-2.gif)

Again, the Black is the sun's spectra, the Magenta is the averaged-RGB PLab device measured spectra from the sun and the Red is the gain-corrected measured solar spectrum. Note that this gain-corrected spectra looks quite similar to the reference plot -- although it does have more noise. The Green plot is the gain-correction curve which represents the multiplier values to be applied to the device data to correct for the fact that the sensitivity (or gain) of each of the RGB channels is not "flat" -- that each channel's data rolls-off rapidly at each end of its pass-band and that simply combining them does not fix this issue.

[Side Note: The gain-correction curve is a product of several processing steps including averaging (because correcting noise just produces noise) and synthetic "repair" of the noisy spectral ends where there is little to no signal. When signal levels become buried in the noise, the potential for the gain value to mathematically 'blow up' is very real. So, below 385nm and above 715nm, I induced a cosine 'roll-off' to zero. There's no useful data at 300nm or 800nm.]

**Sanity Check**
As a sanity check, I took this same correction curve and applied it to the CFL data which was originally used to calibrate the measured sun spectra:

[![GainCal-3.gif](https://i.publiclab.org/system/images/photos/000/009/083/medium/GainCal-3.gif)](https://i.publiclab.org/system/images/photos/000/009/083/original/GainCal-3.gif)

As you can see, the gain-correction curve is well-behaved in that background noise (including the ends of the spectrum) is not over-amplified and the relative peak sizes look appropriately similar to those published on the web. In addition, the peak shapes and regions with more CFL noise (570-600nm) look well behaved.

**Final Thoughts**
Because the production of digital camera silicon devices and products is such a tightly controlled process, it may be possible to create a "standardized" gain-correction curve for each camera type or model and thereby provide a first-order correction within SWB itself. Individual gain-calibrations could always be performed but evidence suggests that noise levels alone will mean the gain-correction curve must remain smoothed approximations.
