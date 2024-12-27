---
title: "Desktop Spectrometry Kit (V3) for VNIR Field Spectroscopy"

tagnames: 'spectrometer, bamboo, radiometric-calibration, spectroscopy, desktop-spectrometry-kit, vegetation, barnstar:basic, enclosure'
author: lukebrown
path: /notes/lukebrown/07-11-2015/desktop-spectrometry-kit-v3-for-vnir-field-spectroscopy.md
nid: 12047
uid: 444973

cids: 12149,12154,12172,12173,12174,12180,12183,12391

---

![](https://publiclab.org/public/system/images/photos/000/010/627/original/mail.google.com.jpg)

# Desktop Spectrometry Kit (V3) for VNIR Field Spectroscopy

by [lukebrown](../../../profile/lukebrown) | July 11, 2015 11:29

July 11, 2015 11:29 | Tags: [spectrometer](../tag/spectrometer), [bamboo](../tag/bamboo), [radiometric-calibration](../tag/radiometric-calibration), [spectroscopy](../tag/spectroscopy), [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [vegetation](../tag/vegetation), [barnstar:basic](../tag/barnstar:basic), [enclosure](../tag/enclosure)

----

###Introduction

I was interested in whether the Desktop Spectrometry Kit (V3) could be successfully used for VNIR field spectroscopy, in the context of vegetation analysis.  I conducted a quick experiment outside using a bamboo leaf and a sheet of white paper to act as a reference target.  It should be noted the IR filter was removed from the webcam before this experiment was carried out.

###Suitability of the card enclosure

Having taken the spectrometer outside, I suspected there may be substantial transmittance through the enclosure, as the spectra displayed on screen varied considerably depending on how I held the unit.  I fashioned an external sleeve out of thicker cardboard and recorded two spectra, holding the spectrometer to my body to prevent light entering through the slit.  The degree of recorded background noise was greatly reduced using the sleeve (Figure 1).

[![noise.png](https://i.publiclab.org/system/images/photos/000/010/631/medium/noise.png)](https://i.publiclab.org/system/images/photos/000/010/631/original/noise.png)

Figure 1: Background noise recorded with and without the use of an external cardboard sleeve.

###Spectral 'reflectance' of a bamboo leaf

At each wavelength, the ratio between the DN associated with the bamboo leaf and the sheet of white paper was calculated.  It is important to note the resulting values are not true reflectance factors because no radiometric calibration was carried out prior to this calculation.  Additionally, the sheet of paper is by no means a well characterised reference target!  

Nevertheless, some key features can be easily identified, including the chlorophyll absorption features and the red edge (Figure 2).  The magnitude of values is greater than would be expected, particularly at visible wavelengths.  This perhaps highlights the need for radiometric calibration.  The spectral reflectance of a bamboo leaf obtained using an ASD FieldSpec 3 is provided for some context.

[![bamboo.png](https://i.publiclab.org/system/images/photos/000/010/628/medium/bamboo.png)](https://i.publiclab.org/system/images/photos/000/010/628/original/bamboo.png)

Figure 2: Reflectance spectra for a bamboo leaf obtained using the Desktop Spectrometry Kit (V3) and an ASD FieldSpec 3.

###Next steps

To reduce background noise, I believe the design of the enclosure needs to be revised.  The results presented here suggest that thicker cardboard may be advantageous.

To be of real use for VNIR field spectroscopy, a means of radiometric calibration is required, enabling measurements of radiance to be obtained.  True reflectance factors could then be calculated, enabling recorded spectra to be directly compared to measurements from other instruments.