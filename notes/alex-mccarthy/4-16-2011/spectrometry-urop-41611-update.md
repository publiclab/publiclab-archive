---
title: "Spectrometry UROP 4/16/11 update"

tagnames: 'spectrometer, uv, fluorescence, pah, detergent, fluorometer'
author: Alex-McCarthy
path: /notes/alex-mccarthy/4-16-2011/spectrometry-urop-41611-update.md
nid: 174
uid: 125
cids: 
---

![](https://publiclab.org/sites/default/files/PD vs PL.png)

# Spectrometry UROP 4/16/11 update

by [Alex-McCarthy](/profile/Alex-McCarthy) | April 16, 2011 04:59

April 16, 2011 04:59 | Tags: [spectrometer](/tag/spectrometer), [uv](/tag/uv), [fluorescence](/tag/fluorescence), [pah](/tag/pah), [detergent](/tag/detergent), [fluorometer](/tag/fluorometer)

----

At the beginning of the week I put my <a href="https://picasaweb.google.com/104647791428259934971/SpectrometryUROP#5593370706669813266">spectrometer 2.0</a> to the test of detecting a compound dissolved in water. I choose detergent, because it forms a transparent solution with water, yet fluoresces in the blue/purple wavelengths when exposed to UV light, due to the "brightening agents" added to detergent to make clothes seem brighter in day light (UV). My first approach at this was not very successful, for several reasons. The light source I used was a halogen lamp, which does generate UV light, and even has a UV filter built into it. I lined the sample up in front of my spectrometer 2.0, and aimed the halogen lamp at the sample. I took dozens of photos, of different concentrations of detergent, with and without the UV filter, and compared the <a href="https://picasaweb.google.com/104647791428259934971/SpectrometryUROP#5596040872541345634">spectra</a>- these can be seen at spectrometer.publiclaboratory.org, labeled as "Tap Hal+Filt Det1/2 (1)" (Tap water (~40 ml), with 1/2 teaspoon detergent, under halogen lamp, withe filter removed) and so forth. After analyzing these spectrum it was obvious that there was still way to much variability in the spectrum I was taking- just shifting the camera a couple degrees changed spectra intensities visibly. There was no significance between spectra with or without the UV filter in place. 

<img width="500px" src="https://lh4.googleusercontent.com/_fnwaq7QvPD0/TakhhkRk12I/AAAAAAAAAKo/vaNQ43aZuA8/s720/grouped%20spectra.png" />

One of the inherent problems is that any fluorescence that do get from the sample will be dwarfed by the intensity of the halogen lamp. After reviewing this <a href="http://costperformance.org/monitoring/pdf/uvfluorescence_2.pdf">paper</a> I changed gears, and set out to build a fluorometer, rather than a standard spectrometer. A fluorometer spectrum only shows the wavelengths of the fluoresced light from the sample, which allows them to be analyzed without the light source out shining the fluorescence. This is done by placing the spectrometer perpendicular to the light source, rather than parallel, as seen in the above image, which shows the spectra resulting from both parallel and perpendicular placement of the spectrometer. In this case, I used a black light LED flashlight, rather than the halogen lamp, which was closer to the optimal wavelength for exciting the detergent brighteners, as you can visibly in the overhead photo of the <a href="https://picasaweb.google.com/104647791428259934971/SpectrometryUROP#5596027479627088194">perpendicular arrangement</a> and this photo of the inside of the <a href="https://picasaweb.google.com/104647791428259934971/SpectrometryUROP#5596027477201598450">perpendicular arrangement</a>

The box blocks all outside light, and having the whole system immobile allowed for more reproducible pictures.

As expected, the fluorescence spectra were much weaker in intensity, so I increased the exposure time of the photos to 4 seconds to get adequate photos. Next week I plan to try this set up again, but with much lower concentrations of detergent to see what kind of concentration operating range I could expect when I comes to testing samples with crude oil instead of detergent. 

This <a href="http://www.springerlink.com/content/n7204821364h3684/fulltext.pdf">research</a> goes into great depth of fluorescence spectroscopy of crude oils. It seems promising that using similar methods to the ones preformed with the detergent, that crude oils could be detected in the visible range. It may require a stronger UV light source (more concentrated? magnifying glass?) to get visible results, as I am sure crude oil doesn't fluoresce as intense light as detergent brighteners.

Another idea I tinkered with a bit today is the idea of a reflective diffraction grating, which as the advantage that the light doesn't have to pass through the CD plastic to be diffracted- this could be useful if the CD was adsorbing jst the wavelengths you wanted to detect. I found that when removing the foil off of the CD's, by applying packing tape, and peeling the label off, the <a href="https://picasaweb.google.com/104647791428259934971/SpectrometryUROP#5596027589007407442">foil</a> stuck to the tape was diffracting the light- the only trouble is how flexible the foil is, making it difficult to get a linear spectrum. I presume that if it was wrapped tightly around something it would be straight enough to use. 

<img width="500px" src="https://lh5.googleusercontent.com/_fnwaq7QvPD0/TakVWjMdhhI/AAAAAAAAAJw/eeOPkbSZKRo/s640/PD%20setup%20%282%29.JPG" />