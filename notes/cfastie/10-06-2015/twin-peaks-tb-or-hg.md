---
title: "Twin Peaks, Tb or Hg?"

tagnames: 'spectrometer, calibration, web-development, cfl, ebert, spectral-workbench, development, coding, response:12258'
author: cfastie
path: /notes/cfastie/10-06-2015/twin-peaks-tb-or-hg.md
nid: 12270
uid: 554

cids: 12649,12652,12658,12659,12686,12687,12691,12695,12696,12697,12703,15758,15763,15764,15769,15770,15771,15772,15833,16875,16881,16884

---

![](https://publiclab.org/public/system/images/photos/000/011/764/original/WikiCFL.jpg)

# Twin Peaks, Tb or Hg?

by [cfastie](../../../profile/cfastie) | October 06, 2015 02:15

October 06, 2015 02:15 | Tags: [spectrometer](../tag/spectrometer), [calibration](../tag/calibration), [web-development](../tag/web-development), [cfl](../tag/cfl), [ebert](../tag/ebert), [spectral-workbench](../tag/spectral-workbench), [development](../tag/development), [coding](../tag/coding), [response:12258](../tag/response:12258)

----

Jeff is making great improvements to the way you can [calibrate spectra at Spectral Workbench]( http://publiclab.org/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0).  His nice graphical interface uses the image of a well calibrated spectrum of a compact fluorescent lamp, and for that reference image he is using a [spectrum which I made in 2013]( https://spectralworkbench.org/spectrums/4474).  Back then I noticed that this and other CFL spectra I was making [did not match well with the known emission lines]( https://spectralworkbench.org/sets/183) of CFL lamps. So I [corrected this spectrum mathematically]( http://publiclab.org/notes/cfastie/3-6-2013/polynomial) to make it match better. The correction “rubber sheeted” my spectrum data to shift some lines more than others until they fit well with the known reference. 

The new match was not perfect, and I was especially puzzled by two emission lines. These are the bright green lines in the center of the spectrum that are about 4 nm apart. The [Wikipedia reference I was using]( https://commons.wikimedia.org/wiki/File:Fluorescent_lighting_spectrum_peaks_labelled.svg) suggested that these lines should differ in wavelength by only 2 or 3 nm.  The mathematical correction could easily move lines that much, but it could not independently shift two lines which were that close together. So after the correction those two lines were still farther apart than Wikipedia said they should be. 

The types of things that could cause my spectrum to deviate probably distort large areas of the image field. I suspect that the thin plastic film diffraction grating in my spectrometer is not very flat, and the wavy surface could cause the errors. But that type of error is not likely to cause two emission lines to shift from being 3 nm apart to being 4 nm apart when other parts of the spectrum have not shifted very much. And it was not just a single CFL spectrum with this anomaly, all of my CFL spectra showed those two lines to be about 4 nm apart.  

[![polySnowyTbHg.jpg](https://i.publiclab.org/system/images/photos/000/011/765/large/polySnowyTbHg.jpg)](https://i.publiclab.org/system/images/photos/000/011/765/original/polySnowyTbHg.jpg)  
*Photos of the diffraction pattern of a CFL bulb always show the two bright green lines to be separated by about 4 nm. But the Wikipedia source identified the two lines as being only 2 or 3 nm apart. Dashed lines are at the wavelengths of emission lines identified in the Wikipedia image, the magenta trace is the intensity graph of the background image of a diffraction pattern from a CFL lamp.*    

So I took a closer look at the Wikipedia source. Those two lines are identified as being emitted from terbium (~543 to 544 nm) and mercury (546.074 nm) so they should be separated by 2.074 to 3.074 nm. That terbium line seems to be rather imprecisely described, so I checked the two sources cited at the Wikipedia page. To my surprise, the [NIST database]( http://physics.nist.gov/PhysRefData/ASD/lines_form.html) does not include any terbium lines from 543 to 544 nm. An article on phosphors cited as the other reference includes a graph of terbium emissions with a peak somewhere around 540 nm, but does not identify the peak more precisely. So those references don’t seem to offer any support for a terbium emission line between 543 and 544 nm.

The NIST database includes a very bright mercury line a 542.525 nm. The relative intensity given for that line is 8,000,000. There is no terbium line in the NIST database between 530 and 550 nm with a relative intensity greater than 160.  Without any other evidence, I am assuming that the “terbium” line is probably a mercury line at 542.525 nm. That would make it 3.55 nm away from the other mercury line at 546.074nm and much easier to reconcile with the results from my spectrometer. 

This raises doubts about the accuracy of other information in that Wikipedia source. Most of the major lines are probably identified correctly, but I don’t know how to confirm this. A couple of the orange lines identified as being emitted by europium between 586 and 600 nm don’t match well with my spectrometer’s results. I haven’t looked into possible alternative assignments for those lines. It is possible that the compact fluorescent lamp I used had different phosphors than the one used to make the Wikipedia spectrum. It will be important to remain wary of this mismatched lamp possibility when using the new tool at Spectral Workbench to calibrate a spectrum made from the CFL you happen to have on hand.  

[![polySnowyADJ2steps.jpg](https://i.publiclab.org/system/images/photos/000/011/766/large/polySnowyADJ2steps.jpg)](https://i.publiclab.org/system/images/photos/000/011/766/original/polySnowyADJ2steps.jpg)  
*Upper spectrum is the photo straight from the camera of the diffraction pattern of a CFL bulb. Lower spectrum is the same photo modified in Photoshop to match the known emission lines in a CFL lamp (white dashed lines). The magenta trace is the intensity graph from Spectral Workbench of the corrected image.*  

For further calibration work at Spectral Workbench, Jeff needs both a well calibrated data set of CFL spectrum intensity at each wavelength and an image of the CFL spectrum. I have redone the mathematical correction using a different wavelength for that terbium/mercury line, so the data part is easy. It is harder to apply a mathematical correction to a color image. So I have used Photoshop to manually move emission lines or groups of lines right or left to match with my newly corrected data set. This seems like an unscientific approach, but it is not necessarily any more arbitrary than sliding the lines around mathematically with a third order polynomial. The unscientific part is that the mathematical correction is precisely described and repeatable, while my manual manipulation is not.  

[![CFLtraceSWcorrected.JPG](https://i.publiclab.org/system/images/photos/000/011/768/large/CFLtraceSWcorrected.JPG)](https://i.publiclab.org/system/images/photos/000/011/768/original/CFLtraceSWcorrected.JPG)  
*The intensity graph from Spectral Workbench of the manually corrected image of the diffraction pattern of a CFL lamp. Vertical dashed lines are the known emission lines according to the Wikipedia source, except for the line at 542.525 nm.*  

After I created the corrected spectral image, I submitted it to Spectral Workbench, assigned wavelengths to it with a macro, and downloaded the data file of intensity at each wavelength. Now there is a corrected image and data set that match perfectly.  These don’t have a solid pedigree of traceability to repeatable physical measurements, so they are more like models of what an ideal CFL spectrum would look like. The primary weakness with using them for Spectral Workbench’s calibration procedures is their strong dependence on the information in a single Wikipedia image.  Until more of the emission lines can be confirmed, we might have to assume that they are close enough.

The corrected image of the diffraction pattern and the intensity data from that image are available at Spectral Workbench: <https://spectralworkbench.org/spectrums/58696>.