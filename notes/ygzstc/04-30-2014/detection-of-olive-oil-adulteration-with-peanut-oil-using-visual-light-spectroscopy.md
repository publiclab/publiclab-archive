---
title: Detection of Olive Oil Adulteration (with Peanut Oil) Using Visual Light Spectroscopy
tagnames: spectrometer, desktop-spectrometry-kit, food, olive-oil, response:10167, adulteration, peanut-oil, food-fraud, barnstar:empiricism, food-safety, response:10295, activity:spectrometry, difficulty:medium, time:10h, activity:science-fair, activity:food, first-time-poster
author: ygzstc
path: /notes/ygzstc/04-30-2014/detection-of-olive-oil-adulteration-with-peanut-oil-using-visual-light-spectroscopy.md
nid: 10382
uid: 422489

---

![](https://publiclab.org/public/system/images/photos/000/003/940/original/Picture1.png)

# Detection of Olive Oil Adulteration (with Peanut Oil) Using Visual Light Spectroscopy

by [ygzstc](../profile/ygzstc) April 30, 2014 15:15

April 30, 2014 15:15 | Tags: [spectrometer](../tag/spectrometer), [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [food](../tag/food), [olive-oil](../tag/olive-oil), [response:10167](../tag/response:10167), [adulteration](../tag/adulteration), [peanut-oil](../tag/peanut-oil), [food-fraud](../tag/food-fraud), [barnstar:empiricism](../tag/barnstar:empiricism), [food-safety](../tag/food-safety), [response:10295](../tag/response:10295), [activity:spectrometry](../tag/activity:spectrometry), [difficulty:medium](../tag/difficulty:medium), [time:10h](../tag/time:10h), [activity:science-fair](../tag/activity:science-fair), [activity:food](../tag/activity:food), [first-time-poster](../tag/first-time-poster)

----

Disclaimer: _All the information (including hardware, software, experimental setup, procedure, and results) in this research note is provided "as is" without warranty of any kind. Author makes no warranties, express or implied, that they are free of error, or are consistent with any particular standard of merchantability, or that they will meet your requirements for any particular application and/or problem. They should not be relied on for solving a problem whose incorrect solution could result in incorrect claims which may or may not lead to any kind of monetary loss related to trade and/or legal liability. If you do use them in such a manner, it is at your own risk. The author disclaims all liability for direct, indirect, or consequential damages resulting from your experiments and claims based on their results._

###Introduction

Food fraud, especially “Economically Motivated Adulteration (EMA)” of food and food ingredients is one of the most important problems that we are facing today [1, 2]. As expected, edible oils (especially olive oil) are the top of the list of EMA and most common types of adulteration techniques for oils are “dilution” and “substitution” [1, 2]. Despite government (federal or state) level inspections, those adulterated oils end up our kitchens anyways. So the question is: Can we come up with a cheap but effective method for household use to detect edible oil adulteration?

In this preliminary study, oil olive adulteration is investigated using visual light spectroscopy. 

###Setup, Sample Preparation and Data Collection

In the study, extra virgin olive oil and peanut oil (for adulteration) are considered. In addition, Public Lab’s spectrometer (http://publiclab.org/wiki/spectrometer), and its data collection software “Spectral Workbench” (https://spectralworkbench.org/) and few extra tools are used (See Figure 1).

[![Picture1.png](https://i.publiclab.org/system/images/photos/000/003/935/medium/Picture1.png)](https://i.publiclab.org/system/images/photos/000/003/935/original/Picture1.png)

Figure 1 - Setup (left) and oils used (right)

Total 5 samples are created. Starting from pure olive oil, 25%, 50% and 75% diluted (with peanut oil) samples along with pure peanut oil sample are prepared. 

Once the spectrometer is calibrated with CFL, physical setup (shown in Figure 1) is set. First, a spectral data is recorded with the empty petri dish (90 mm diameter, glass) and a white LED work lamp (http://www.ikea.com/us/en/catalog/products/20169658/ ).  We call this spectrum as “baseline”. Later, from each sample, 20 ml is taken and poured in the petri dish and the spectral data are collected. (Those spectral data are on the Public Lab’s website and nomenclature of the data is provided in Appendix.)

Collected spectral data is then smoothed with 3th order Savitzky–Golay filter and the difference between each sample spectra and the baseline spectrum is calculated. Resulting spectral data is shown in Figure 2.

[![Picture2.png](https://i.publiclab.org/system/images/photos/000/003/936/medium/Picture2.png)](https://i.publiclab.org/system/images/photos/000/003/936/original/Picture2.png)

Figure 2 – Spectral data of the difference between the samples and baseline (zoomed region on the right)

It is worth noting the fact that, it is possible to detect/model the level of adulteration using the spectra of Red, Green or Blue Channel data as well. As an example, same plots are provided in Figure 3 for “Blue Channel”. However, please note the fact that, optimal region selection may differ for each color channel.

[![Picture3.png](https://i.publiclab.org/system/images/photos/000/003/937/medium/Picture3.png)](https://i.publiclab.org/system/images/photos/000/003/937/original/Picture3.png)

Figure 3 – Spectral data of the difference between the samples and empty petri dish for blue channel (zoomed region on the right)

As a simple measure for evaluating the level of adulteration (relative olive oil concentration in the mixture), area under the curve between the wavelengths 400 and 520 nm is selected. This is more robust measure compared to “peak height” which fluctuate more causing noisy measurements. Also note that, in order to have stable measurements (for omitting negative value from numerical integration), all spectra are lifted up by 10 (see Figure 2 and 3). 

Values of the area under the curve (AUC) with respect to different adulteration levels are shown in Figure 4. It is clear that the level of adulteration and AUC exhibit almost perfect linear relation.

[![Picture4.png](https://i.publiclab.org/system/images/photos/000/003/939/medium/Picture4.png)](https://i.publiclab.org/system/images/photos/000/003/939/original/Picture4.png)

Figure 4 – Adulteration level and AUC exhibit almost perfect linear relation (average value (left) and blue channel (right))

###Results and Discussions

It is easy to see the fact that, using visual light spectroscopy (using the spectrometer developed by Public Lab), it’s possible to detect/model/measure olive oil adulteration (with peanut oil) in an efficient and simple way. Furthermore, these results indicate that it might be possible to detect and measure other type of oil adulteration as well. 

In addition, similar approach can be used to identify the level of oil contamination in water and soil. However, it seems to be crucial to collect/maintain a nice library of spectral data from different oils in order to be able to correctly identify them.

###References

[1] http://www.fas.org/sgp/crs/misc/R43358.pdf

[2] http://nabc.cals.cornell.edu/Publications/Reports/nabc_23/23_5_3_Moore.pdf

###Appendix

test2:	CFL spectra used for calibration

d2-l2:	Spectra of the LED work lamp

d2-b: 	Spectra of empty petri dish - baseline

d2-o2: 	Spectra of sample – 0% peanut oil / 100% olive oil

d2-p25: 	Spectra of sample – 25% peanut oil / 75% olive oil

d2-po2: 	Spectra of sample – 50% peanut oil / 50% olive oil

d2-o25: 	Spectra of sample – 75% peanut oil / 25% olive oil

d2-p2: 	Spectra of sample – 100% peanut oil / 0% olive oil
