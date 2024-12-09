---
title: 'PLab 3 Gain Correction'
tagnames: spectrometer, intensity-calibration, barnstar:basic, intensity, amplitude, gain, gain-correction, response:11638, activity:spectrometry
author: stoft
path: /notes/stoft/03-06-2015/plab-3-gain-correction.md
nid: 11658
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/009/188/original/SoluxSANMGainFix.gif)

# PLab 3 Gain Correction

by [stoft](../profile/stoft) March 06, 2015 07:19

March 06, 2015 07:19 | Tags: [spectrometer](../tag/spectrometer), [intensity-calibration](../tag/intensity-calibration), [barnstar:basic](../tag/barnstar:basic), [intensity](../tag/intensity), [amplitude](../tag/amplitude), [gain](../tag/gain), [gain-correction](../tag/gain-correction), [response:11638](../tag/response:11638), [activity:spectrometry](../tag/activity:spectrometry)

----

 In a previous note ( http://publiclab.org/notes/stoft/02-25-2015/plab-spectrometer-gain-correction ) I used a very common light source (the Sun) as a broad-spectrum source for correcting the PLab spectrometer's gain un-flatness. While that source is free and available to nearly anyone, it does suffer from some variability of environmental conditions like winter, time of day and humidity so it's not always so easy. Still the technique does function well with clear mid-day sun.

**A Better Reference:**
As an alternative, with finding an inexpensive reference standard in mind, I performed the same test procedure using a 4700K 12V halogen from Solux. The raw plot data has some averaging because 'finer' measurement detail, when using a broadband source, is just noise. The results are below:

[![SoluxSANMGainFix.gif](https://i.publiclab.org/system/images/photos/000/009/189/medium/SoluxSANMGainFix.gif)](https://i.publiclab.org/system/images/photos/000/009/189/original/SoluxSANMGainFix.gif)

While not deliberately wanting to specify a brand, Solux does manufacture smooth response, broadband, halogen sources (one specifically at 4700 deg-K) and, more importantly, they publish their detailed measurement data. While it is not a true calibrated standard, it is the closest option I've found.

**Uncertainty, Not Error:**
While spectrometer measurements certainly have errors (values which are not accurate by some measure) those error values are not actually known. Instead, the potential magnitude of those errors, which is the uncertainty, can be specified.

**Source Uncertainty:**
Solux states that, for their 4700K halogen, they specify a CCT accuracy of +/- 200K for a 12.0V lamp with 3-5min warm-up which will not deviate by more than +/- 100K over its 4000 hour lifetime and output illumination intensity will remain within 5%. The Solux 4700K lamp has a similar shape to an ideal black-body curve though it has some extended output toward the infrared and the peak and its peak output is about 550nm whereas a 4700K ideal black-body curve peaks at about 625nm. The curve shape has been published so the only requirement is to calculate the accuracy uncertainty related to the potential difference in output color temperature. Since the worst case for a new lamp is +/- 200K (i.e. no aging effects at that point) then it is necessary to calculate the impact of shifting the color temp by +/- 200K.

To do this, I generated a black-body curve in Matlab and calculated this effect. The first plot (below) shows an ideal black-body curve variation for the range of 4500K - 4900K color temperature:

[![IdealBlackBodyDegKShift.gif](https://i.publiclab.org/system/images/photos/000/009/218/medium/IdealBlackBodyDegKShift.gif)](https://i.publiclab.org/system/images/photos/000/009/218/original/IdealBlackBodyDegKShift.gif)

Notice immediately that since the PLab spectrometer is limited to about 650nm, there is almost zero uncertainty there; the biggest difference is toward the UV. Below is a plot of both the difference and the percent uncertainty for this effect:

[![IdealBlackBodyDegKShiftError.gif](https://i.publiclab.org/system/images/photos/000/009/220/medium/IdealBlackBodyDegKShiftError.gif)](https://i.publiclab.org/system/images/photos/000/009/220/original/IdealBlackBodyDegKShiftError.gif)

Observe that while the uncertainty rises consistently toward 400nm, worst case is still only about 10%. Compare this to "completely unknown" for the PLab device without any form of gain compensation.

Also note that these curves are all normalized and have no absolute intensity values because the gain-correction is all relative. The Solex spec of 5% for intensity aging has no impact on gain-calibration. For this first-order gain-correction, there are only two uncertainties to include; the peak color temp uncertainty of a Solux 4700K lamp (+/- 200K) and aging shift of that color temperature over 4000 hours burn time. If a Solux 4700K 12V lamp is only used for gain-correction, it will never suffer long-term aging effects leaving the single +/- 200K uncertainty as the only significant factor.

**Cautions:**
Be aware of several factors with halogen lamps:
- They get HOT !!!
- The lamp must be warmed-up for 3-5 min to stabilize
- The 12V lamp requires a 12V supply but that is good because it keeps the voltage regulated so the lamp intensity will not wander after warm-up
- A Solux diffuser, which fits the 4700K 12V lamp, may reduce intensity variations at the spectrometer
- The spectrometer should be positioned at least 6 feet from the lamp -- the lamp is VERY bright so the distance is necessary
- A bulb housing which is designed to minimize the IR emitted from the back of the bulb could be beneficial -- though I've not tested or measured this effect

**Practical Gain-Correction:**
First consider PLab spectrometer's un-corrected response to the halogen's light (Magenta) below. The Solux data is plotted in Black.

[![SoluxSANMSensitivity.gif](https://i.publiclab.org/system/images/photos/000/009/184/medium/SoluxSANMSensitivity.gif)](https://i.publiclab.org/system/images/photos/000/009/184/original/SoluxSANMSensitivity.gif)

**Next**, observe the correction process. In the graph below, the Black shows the smooth response of the halogen while the Magenta shows the irregular sensitivity of the Sanm webcam. The Green show a 20X magnified view of the correction function and the Red shows the result. Note that the usable measurement range of the PLab device is really 400nm - 650nm. Beyond that band measurement data uncertainty increases dramatically because there is so little sensitivity to those wavelengths.

[![SoluxSANMGainCorrection.gif](https://i.publiclab.org/system/images/photos/000/009/185/medium/SoluxSANMGainCorrection.gif)](https://i.publiclab.org/system/images/photos/000/009/185/original/SoluxSANMGainCorrection.gif)

**Now look closer**, in the plot below, to see the residual uncertainty after the gain correction is applied. The 400-650nm band becomes more obvious as the Black line show the after-correction uncertainty.

In this case, the in-band error is less than 12% of the peak signal level at 530nm.

[![SoluxSANMGainCorrectionError.gif](https://i.publiclab.org/system/images/photos/000/009/186/medium/SoluxSANMGainCorrectionError.gif)](https://i.publiclab.org/system/images/photos/000/009/186/original/SoluxSANMGainCorrectionError.gif)

**Finally**, as a test, CFL data was used to verify the process.

[![SoluxSANMGainCorrectionCFL.gif](https://i.publiclab.org/system/images/photos/000/009/187/medium/SoluxSANMGainCorrectionCFL.gif)](https://i.publiclab.org/system/images/photos/000/009/187/original/SoluxSANMGainCorrectionCFL.gif)

**Conclusions:**
Because the 4700K halogen has such a smooth response, even beyond the 400-650nm band, and because there is detailed published output data, the 4700K Solux source is a viable option for PLab spectrometer gain-correction. In addition, Solux specs for this 12.0V halogen lamp include a +/-200K uncertainty (on the exact peak color temperature of any single lamp of that type) which means the primary gain-correction uncertainty is about +/- 10% worst case at 400nm (which decreases to a minimum near 650nm); a substantial improvement over the previous PLab quality of "unknown".

**UPDATE 20160108**

Using my PLab 3.0 Prototype (with the newer "gumstick" camera) and MatLab interface to acquire 1600x1200 pix resolution images, I re-acquired and re-processed fresh 4700K Solux spectral data to construct an updated broadband Gain-Correction. The combined data is provided in a single plot below:

[![PLab3Solux4700KGainCorrection.gif](//i.publiclab.org/system/images/photos/000/013/570/medium/PLab3Solux4700KGainCorrection.gif)](//i.publiclab.org/system/images/photos/000/013/570/original/PLab3Solux4700KGainCorrection.gif)

Here is the key to the plot colors:
[ RED ] A CFL wavelength calibration plot using 435.833nm (blue) and 546.074nm (2nd Green peak)

[ BLUE ] The published 4700K Solux source spectrum (intensity is unitless) [[Solux 4700K Spectrum Data](http://www.solux.net/ies_files/SoLux%20Spectral%20Data.xls.pdf)]

[ BLACK ] The PLab-3 measured raw 4700K Solux spectrum

[ YELLOW ] The raw 400nm-650nm Solux gain-correction curve (intensity is unitless) Note: The data is limited to the 400-650nm range because the curve errors explode at the ends due to the wavelength sensitivity limits of the webcam.

[ GREEN ] The cosine-extended, smoothed 300-800nm Solux gain-correction (intensity is unitless)

[ MAGENTA ] The final gain-corrected PLab-3 measured 4700K Solux curve

The .TXT data files are attached below:

[ 4700K Solux Spec ]
<a href="//i.publiclab.org/system/images/photos/000/013/571/original/Solux4700k_spec.txt"><i class="icon icon-file"></i> Solux4700k_spec.txt</a>

[ PLab-3 Measured 4700K Solux ]
<a href="//i.publiclab.org/system/images/photos/000/013/575/original/PLab3Solux4700K_300-800nm.txt"><i class="icon icon-file"></i> PLab3Solux4700K_300-800nm.txt</a>

[ Raw 400-650nm Correction ]
<a href="//i.publiclab.org/system/images/photos/000/013/573/original/GCalPLab3Solux4700K_400-650nm.txt"><i class="icon icon-file"></i> GCalPLab3Solux4700K_400-650nm.txt</a>

[ Cosine-Extended, Smoothed 300-800nm Correction ]
<a href="//i.publiclab.org/system/images/photos/000/013/574/original/GCalPLab3Solux4700K_300-800nm.txt"><i class="icon icon-file"></i> GCalPLab3Solux4700K_300-800nm.txt</a>

