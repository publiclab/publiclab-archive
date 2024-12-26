---
title: "3D Printed CCD Spectrometer (WheeTrometer 3.0)"\ntagnames: 'spectrometer, spectrometry, cuvette, 3d-printing, barnstar:basic'
author: bhickman
path: /notes/bhickman/08-27-2014/3d-printed-ccd-spectrometer-wheetrometer-3-0.md
nid: 11079
uid: 201929

---

![](https://publiclab.org/public/system/images/photos/000/006/445/original/WP_20140825_001.jpg)

# 3D Printed CCD Spectrometer (WheeTrometer 3.0)

by [bhickman](../profile/bhickman) | August 27, 2014 08:49

August 27, 2014 08:49 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [cuvette](../tag/cuvette), [3d-printing](../tag/3d-printing), [barnstar:basic](../tag/barnstar:basic)

----

##What we want to do:
We want to provide an open source and affordable CCD photodiode array spectrometer. The goal is to have 1 nm wavelength resolution and 12 bit intensity resolution. 

##Background: 
An initial attempt ([found here](http://publiclab.org/notes/bhickman/10-12-2013/ccd-diodearray-spectrometer)) lacked resolution due to no focusing element (mirror or lenses) after the diffraction grating. A second attempt ([found here](http://publiclab.org/notes/bhickman/04-21-2014/wheetrometer-2-0)) showed promise, but lacked reproducibility. These attempts, and the awesomeness of 3D printing*, has led to the current design.  

##Attempts and results: 
The spectrometers is made from a 3D printed base, a [PublicLabs slit](http://store.publiclab.org/collections/spectrometry/products/acetate-collimation-slits), a [collimating lens](http://www.edmundoptics.com/optics/optical-lenses/ball-condenser-lenses/condenser-lenses/43-483), [diffraction grating](http://www.edmundoptics.com/optics/gratings/holographic-diffraction-grating-film/01307) (1000 lines/mm), a [focusing mirror](http://www.edmundoptics.com/optics/optical-mirrors/focusing-concave-mirrors/commercial-grade-concave-spherical-mirrors/27-624), a TSL1406R 768 X 1 element [photodiode array](http://www.digikey.com/product-detail/en/TSL1406RS/TSL1406-RS-ND/3095065) (pda), and a [Tiva C series LaunchPad](http://www.digikey.com/product-detail/en/EK-TM4C123GXL/296-35760-ND/3996736) to read the PDA and send the data to a computer. A general schematic of the spectrometer is shown below.



[![diodearray_spectrometer_FocusingMirror_3.png](https://i.publiclab.org/system/images/photos/000/006/437/medium/diodearray_spectrometer_FocusingMirror_3.png)](https://i.publiclab.org/system/images/photos/000/006/437/original/diodearray_spectrometer_FocusingMirror_3.png)




In the figure above the light enters the spectrometer at the top right hand corner, passes through a sample in a cuvette, and gets attenuated by a slit. The attenuated light then gets collimated by a collimating lens. After being collimated, the light hits the holographic diffraction grating which diffracts the light according to its wavelength. After being separated by the diffraction grating, the desired wavelengths of light are directed to a focusing mirror. Once the light hits the focusing mirror it is directed to the CCD detector. The CCD detector converts the light that falls on each of its pixels to a proportional voltage. The LaunchPad mircrocontroller then reads the voltage on each of these pixels and sends the data to a computer.    





##Design:





Overview of the spectrometer. 


[![WP_20140825_001.jpg](https://i.publiclab.org/system/images/photos/000/006/438/medium/WP_20140825_001.jpg)](https://i.publiclab.org/system/images/photos/000/006/438/original/WP_20140825_001.jpg)


Light enters the spectrometer through a square hole in the cuvette holder. 


[![WP_20140825_003.jpg](https://i.publiclab.org/system/images/photos/000/006/439/medium/WP_20140825_003.jpg)](https://i.publiclab.org/system/images/photos/000/006/439/original/WP_20140825_003.jpg)


Light passes through the sample in a cuvette (not shown) and gets attenuated by a slit. The slit is mounted on a 3D printed black plastic block which is bolted to the blue plastic stand.


[![WP_20140825_004.jpg](https://i.publiclab.org/system/images/photos/000/006/440/medium/WP_20140825_004.jpg)](https://i.publiclab.org/system/images/photos/000/006/440/original/WP_20140825_004.jpg)


After passing through the slit, the light gets collimated by a collimating lens. The collimating lens is mounted on a 3D printed lens holder which then fits into a square plastic stand as shown. 


[![WP_20140825_005.jpg](https://i.publiclab.org/system/images/photos/000/006/441/medium/WP_20140825_005.jpg)](https://i.publiclab.org/system/images/photos/000/006/441/original/WP_20140825_005.jpg)

A holographic diffraction is mounted on the other side of the square plastic stand.  


[![WP_20140825_006.jpg](https://i.publiclab.org/system/images/photos/000/006/442/medium/WP_20140825_006.jpg)](https://i.publiclab.org/system/images/photos/000/006/442/original/WP_20140825_006.jpg)


The focusing mirror is mounted on a 3D printed mirror holder (black plastic square shown). The mirror holder is then mounted to the blue plastic stand using springs as spacers. The spring spacers allows fine adjustment of the mirrors angle. 


[![WP_20140825_007.jpg](https://i.publiclab.org/system/images/photos/000/006/443/medium/WP_20140825_007.jpg)](https://i.publiclab.org/system/images/photos/000/006/443/original/WP_20140825_007.jpg)

The CCD detector is bolted to a plastic stand. 


[![WP_20140825_008.jpg](https://i.publiclab.org/system/images/photos/000/006/444/medium/WP_20140825_008.jpg)](https://i.publiclab.org/system/images/photos/000/006/444/original/WP_20140825_008.jpg)







##Resolution:

[Wikipidia fluorescent lamp spectrum:](http://en.wikipedia.org/wiki/Fluorescent_lamp)



[![WikiPidia_Flourescent_Spec.png](https://i.publiclab.org/system/images/photos/000/006/446/medium/WikiPidia_Flourescent_Spec.png)](https://i.publiclab.org/system/images/photos/000/006/446/original/WikiPidia_Flourescent_Spec.png)


WheeTrometer 3.0 fluorescent lamp spectrum:

[![WheeTrometer_FlourescentSpec.png](https://i.publiclab.org/system/images/photos/000/006/447/medium/WheeTrometer_FlourescentSpec.png)](https://i.publiclab.org/system/images/photos/000/006/447/original/WheeTrometer_FlourescentSpec.png)




A rigorous analysis of the resolution of the spectrometer has not yet been done. However a comparison of the WheeTrometer's spectrum to the Wikipedia spectrum shows that the resolution is pretty good. 



## Updates:

* [Thingiverse files](http://www.thingiverse.com/thing:711557)

* [Microcontroller and GUI code](https://github.com/SmokyMountainScientific/WheeTrometer_3.0)

* An untested lid in in the Thingiverse files. Having some printer trouble but hope to see how it works soon...




##Acknowledgements:
* I'd like to thank Brian Chee at the University of Hawaii for all his help with the 3D printing.

* I'd also like to thank Dr. Summers at Western Carolina University for his never ending supply of good advice. 