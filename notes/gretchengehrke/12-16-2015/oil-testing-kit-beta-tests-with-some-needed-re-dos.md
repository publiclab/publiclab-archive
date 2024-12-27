---
title: "Oil Testing Kit -- Beta tests (with some needed re-dos)"

tagnames: 'oil-testing-kit, oil-testing-kit-beta'
author: gretchengehrke
path: /notes/gretchengehrke/12-16-2015/oil-testing-kit-beta-tests-with-some-needed-re-dos.md
nid: 12523
uid: 430549

---

![](https://publiclab.org/public/system/images/photos/000/013/362/original/OTK_NDCrude_20151215.png)

# Oil Testing Kit -- Beta tests (with some needed re-dos)

by [gretchengehrke](../../../profile/gretchengehrke) | December 16, 2015 22:13

December 16, 2015 22:13 | Tags: [oil-testing-kit](../tag/oil-testing-kit), [oil-testing-kit-beta](../tag/oil-testing-kit-beta)

----

###Purpose: Oil Testing Kit Beta Testing

These are sets of spectra scanned using my Public Lab spectrometer and the oil samples provided in the Oil Testing Kit. As a beta-test contributor, my aim is to contribute to the data that will allow us to evaluate the precision of the spectra obtained by a single tool and the reproducibility of spectra obtained by multiple tools. 

###Attempts and Results

Note that a lot of my spectra have very low intensities, such that I need to re-analyze those samples to get useful data. I am posting the results from all of the oil samples, but plan to re-do Auto Diesel, 5W30, and probably 20W50 too. The reason the spectra have such low intensities is that I did not notice that my attenuator was inserted, and it was as low as it would go, obscuring quite a bit of light. I will re-analyze them, being sure to remove the attenuator! 

To compare the spectra, as the beta tester instructions detailed, I took triplicate scans of each type of oil and saved them as a set.  I smoothed the curves, and then used the function "Find graph centers only between 410-700 nm." Jeff (@warren) and I have had a discussion about using this function, and also about reporting the lambda-max (the wavelength at which fluorescence intensity is greatest), which is likely to be impacted by the webcam's differing sensitivity over the range of wavelengths, especially at the edges of each band (R, G, B).  Here, I report the graph centers and lambda maxima for each spectra within each set. 

**North Dakota Crude:** 

[![OTK_NDCrude_20151215.png](//i.publiclab.org/system/images/photos/000/013/356/medium/OTK_NDCrude_20151215.png)](//i.publiclab.org/system/images/photos/000/013/356/original/OTK_NDCrude_20151215.png)

North Dakota Crude Graph Centers: 
* scan b: 534 nm 
* scan c: 531 nm 
* scan d: 530 nm 

North Dakota Crude Lambda-Max: 
* scan b: 532-542 nm 
* scan c: 536 nm 
* scan d: 533-541 nm 


**80W90:**

[![OTK_80W90_20151214.png](//i.publiclab.org/system/images/photos/000/013/357/medium/OTK_80W90_20151214.png)](//i.publiclab.org/system/images/photos/000/013/357/original/OTK_80W90_20151214.png)

80W90 Graph Centers: 
* scan a: 479 nm 
* scan b: 481 nm 
* scan c: 489 nm 

80W90 Lambda-Max: 
* scan a: 468 nm 
* scan b: 465-473 nm 
* scan c: 466-477 nm 

For 80W90, reported precision is much better using lambda-max, even though there are ranges. 


**20W30:** 

[![OTK_20W50_20151214.png](//i.publiclab.org/system/images/photos/000/013/358/medium/OTK_20W50_20151214.png)](//i.publiclab.org/system/images/photos/000/013/358/original/OTK_20W50_20151214.png)

20W50 Graph Centers: 
* scan a: 464 nm 
* scan b: 468 nm 
* scan c: 481 nm 

20W50 Lambda-Max: 
* scan a: 436-439 nm 
* scan b: 462-468 nm 
* scan c: 464-468 nm 

These shapes of these spectra are not very similar, and warrant a re-do. 


**5W30:** 

[![OTK_5W30_20151214.png](//i.publiclab.org/system/images/photos/000/013/359/medium/OTK_5W30_20151214.png)](//i.publiclab.org/system/images/photos/000/013/359/original/OTK_5W30_20151214.png)

The recorded intensities are too low and the peaks are too broad to actually provide useful information. I am simply posting here to provide a complete (albeit flawed) set. 


**Auto Diesel:** 

[![OTK_AutoDiesel_20151214.png](//i.publiclab.org/system/images/photos/000/013/360/medium/OTK_AutoDiesel_20151214.png)](//i.publiclab.org/system/images/photos/000/013/360/original/OTK_AutoDiesel_20151214.png)

Auto Diesel Graph Centers: 
* scan a: 460 nm 
* scan b: 462 nm 
* scan c: 464 nm 

Auto Diesel Lambda-Max: 
* scan a: 436-441 nm 
* scan b: 431-450 nm 
* scan c: 436-444 nm 

The intensities recorded here are, again, too low and too broad to be very useful and warrant a re-do. 


**Mineral Oil:** 

[![OTK_MineralOil_20151214.png](//i.publiclab.org/system/images/photos/000/013/361/medium/OTK_MineralOil_20151214.png)](//i.publiclab.org/system/images/photos/000/013/361/original/OTK_MineralOil_20151214.png)

Mineral Oil excitation light wavelengths: 
* scan a: 391 nm 
* scan b: 393 nm 
* scan c: 393 nm 

I thought this was interesting, as the excitation source was the same Blue Ray laser, and there is some variability in the recorded wavelength. I think the variability observed here is more likely due to the spectrometer than to the light source itself. 

Two questions arise for me here regarding the excitation light: 
* (1) The Blue Ray laser is reportedly 405 nm, so is my calibration way off? 
* (2) All of my spectra except the ones for crude oil include this incident light in the 390-400 nm range. Did I fail to have my spectrometer snuggly engaged with the cuvette-holder attachment such that incident light entered my spectrometer in all of my analyses except for the ones I did with crude oil? Again, this warrants a re-do.  


###Next Steps: 
* Analyze Auto Diesel, 5W30, and 20W50 with the attenuator removed. 
* Try diluting samples in mineral oil and observing any effects of dilution on the shape or position of the fluorescence spectra. 
* Try mixing oil samples and observing whether or not it is possible to discern the different oil components of the mixture from the mixture spectra.

