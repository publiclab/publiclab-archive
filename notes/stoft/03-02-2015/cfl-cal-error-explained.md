---
nid: 11647
title: CFL Cal Error Explained
path: public/static/notes/stoft/03-02-2015/cfl-cal-error-explained.md
uid: 54025
tagnames: spectrometer,cfl
---

# CFL Cal Error Explained

The PLab spectrometer can be, and should be, calibrated for wavelength. Presently this can be accomplished using SWB and a CFL light source. Two Hg (mercury) atomic spectral lines (435.833nm and 546.074nm) have precise wavelengths so make for an easy reference source. However some have observed errors in the apparent location of other peaks in that spectrum which has triggered suggestions of complex curve-fit solutions. However, most of these errors can be explained by one of two factors but correction is only possible for the second.

- Not all CFL lines are so precise (only about 5 of 12 significant peaks are precise -- the others can vary between CFLs or just be wide lines(source noise))
- The SWB 2-point linear approximation can be improved

Below is a graphic of the assumed diffraction configuration:

[![CFL-RayTrace.gif](https://i.publiclab.org/system/images/photos/000/009/138/medium/CFL-RayTrace.gif)](https://i.publiclab.org/system/images/photos/000/009/138/original/CFL-RayTrace.gif)

**Dispersion**
Notice that the spectra is nicely centered in the camera's image sensor; which is the optimal configuration. Also notice, however, that the sensor is FLAT whereas the diffraction grating spreads the light on an angular spacing between wavelengths, NOT on a flat linear spacing at the sensor. The effect of this configuration is:

- The pixel-to-nm relationship is NOT linear
- The rate of change in the pixel-to-nm relationship IS linear

When the spectrum is symmetrically positioned as in the graphic, the diffraction angle offset from the center of the sensor is zero (0) for 524nm. (The PLab 3 Upgrade proto has this configuration; http://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype). Knowing this, the exact pixel-to-nm correlation, the dispersion, can be directly calculated. The following plot shows the results:

[![CFL-DispursionCal.gif](https://i.publiclab.org/system/images/photos/000/009/139/medium/CFL-DispursionCal.gif)](https://i.publiclab.org/system/images/photos/000/009/139/original/CFL-DispursionCal.gif)

**Notice the following:**

- The 'Red' lines (which represent the precisely-known wavelengths) match the peaks quite well
- Even some of the 'Green' lines (which represent the spectral lines whose wavelengths are not as stable or repeatable) are quite close
- There is no appearance of unusual non-linearity in the assigned wavelengths

**Magnitude**

Yes, it is true that the dispersion effect is not overwhelming and, as referenced above, the variability of some CFL spectral lines is just part of the chemistry of the CFL and cannot be corrected. So, this begs the question as to how big is the dispersion effect -- specifically within the usable range of the PLab device.

Below is a combined plot of 1) the CFL spectra and 2) the required correction for the dispersion effect -- with the X-axis as pixel number instead of (nm). Part of the reason the correction is typically less than 2nm is because the diffraction angle, relative to the camera normal, is only about +/-8 deg when the incidence angle is 45-deg.

[![CFL-DispersionNM.gif](https://i.publiclab.org/system/images/photos/000/009/395/medium/CFL-DispersionNM.gif)](https://i.publiclab.org/system/images/photos/000/009/395/original/CFL-DispersionNM.gif)

**Algorithm**
The details have been implemented in Matlab, but the basic sequence is:

- Find the pixel span from 436nm to 546nm
- Knowing the diffraction angle for each, find the pixel position for 524nm
- For every pixel, calc the diffraction angle and then the wavelength

**Conclusion**
The CFL calibration of clean spectral data can be improved in SWB to properly represent the dispersion characteristics of the PLab spectrometer design. However, within the usable bounds of the PLab device (400-650nm) the correction is typically <2nm. Is it worth doing in SWB? Probably, just because that's what computers are good at and it would be transparent to the user.

