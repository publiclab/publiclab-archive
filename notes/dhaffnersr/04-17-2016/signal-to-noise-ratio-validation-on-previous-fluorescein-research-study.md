---
title: 'Signal to Noise ratio validation on previous fluorescein research study'
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/04-17-2016/signal-to-noise-ratio-validation-on-previous-fluorescein-research-study.md
nid: 12991
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/015/616/original/PIC_0113.JPG)

# Signal to Noise ratio validation on previous fluorescein research study

by [dhaffnersr](../profile/dhaffnersr) April 17, 2016 10:52

April 17, 2016 10:52 | Tags: 

----

I have analysed the SNR data for my previous work on fluorescein concentration study and these are my results.

A few explanations are in order first, so there is no confusion on how I arrived at my conclusions:

**Background radiance**= the analyte wavelength in (nm)
**Analyte flicker factor** is measured in electron volts
**Analyte’s radiance** is measured as its concentration, meaning also the analyte noise signal is proportional to its concentration level.
**Detector noise** is measured in mA,volts and milli volts, also temperature of ccd camera can be a factor, if that factor can be known and measured.
Noise is the strength of the blank without the analyte
Combining all these factors together with this excel program, knowing that my sample exposure time is within a 30 second time frame, these SNR readings are valid.

Below is an explanation of spectral radiance:
[![spectral_radiance_apr17.png](//i.publiclab.org/system/images/photos/000/015/617/large/spectral_radiance_apr17.png)](//i.publiclab.org/system/images/photos/000/015/617/original/spectral_radiance_apr17.png)


[![SNR_data_for_fluorescein_study_on_apr16.png](//i.publiclab.org/system/images/photos/000/015/618/large/SNR_data_for_fluorescein_study_on_apr16.png)](//i.publiclab.org/system/images/photos/000/015/618/original/SNR_data_for_fluorescein_study_on_apr16.png)

references:

https://www.researchgate.net/post/How_do_I_determine_Signal_to_Noise_Ratio_for_analytical_chemistry
http://www.asdlib.org/onlineArticles/ecourseware/Petrovic%20S-N%20ModuleV2/Complete%20Module%20(2014)1.HTM
https://en.wikipedia.org/wiki/Radiance


