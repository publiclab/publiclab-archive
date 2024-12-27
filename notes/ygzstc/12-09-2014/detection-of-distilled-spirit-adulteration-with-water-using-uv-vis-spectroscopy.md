---
title: "Detection of Distilled Spirit Adulteration (with water) Using Visual Light Spectroscopy"

tagnames: 'desktop-spectrometer, barnstar:basic, food-fraud, food-safety, distilled-spirit-adulteration, replicable'
author: ygzstc
path: /notes/ygzstc/12-09-2014/detection-of-distilled-spirit-adulteration-with-water-using-uv-vis-spectroscopy.md
nid: 11444
uid: 422489
cids: 10923,10928,10934,10935
---

![](https://publiclab.org/public/system/images/photos/000/008/315/original/PictureJD-1.png)

# Detection of Distilled Spirit Adulteration (with water) Using Visual Light Spectroscopy

by [ygzstc](/profile/ygzstc) | December 09, 2014 21:12

December 09, 2014 21:12 | Tags: [desktop-spectrometer](/tag/desktop-spectrometer), [barnstar:basic](/tag/barnstar:basic), [food-fraud](/tag/food-fraud), [food-safety](/tag/food-safety), [distilled-spirit-adulteration](/tag/distilled-spirit-adulteration), [replicable](/tag/replicable)

----

Disclaimer: _All the information (including hardware, software, experimental setup, procedure, and results) in this research note is provided "as is" without warranty of any kind. Author makes no warranties, express or implied, that they are free of error, or are consistent with any particular standard of merchantability, or that they will meet your requirements for any particular application and/or problem. They should not be relied on for solving a problem whose incorrect solution could result in incorrect claims which may or may not lead to any kind of monetary loss related to trade and/or legal liability. If you do use them in such a manner, it is at your own risk. The author disclaims all liability for direct, indirect, or consequential damages resulting from your experiments and claims based on their results._

###Introduction 

Distilled spirit adulteration may also be considered as an example of “Economically Motivated Adulteration (EMA)” [1, 2]. Similar to other types of adulteration, most common types of adulteration techniques for distilled spirits are also “dilution” and “substitution” with one or more of the possible adulterants such as, water, ethanol, methanol and/or low-quality versions of the same or similar type of spirits. 

So the question is: Can we come up with a cheap but effective method (based on UV-Vis spectroscopy) for household use to detect distilled spirit adulteration? 

###Setup, Sample Preparation and Data Collection 

In this study, Jack Daniel’s whiskey and water (for adulteration) are considered. In addition, Public Lab’s spectrometer (http://publiclab.org/wiki/spectrometer), and its data collection software “Spectral Workbench” (https://spectralworkbench.org/) and few extra tools are used (See Figure 1). 


[![PictureJD-1.png](https://i.publiclab.org/system/images/photos/000/008/312/medium/PictureJD-1.png)](https://i.publiclab.org/system/images/photos/000/008/312/original/PictureJD-1.png)

Figure 1 - Setup (left) and Jack Daniel’s (right)

Total 7 samples are created. Starting from pure Jack Daniel’s whiskey, 90%, 80%, 70%, 60%, 50% and 40% diluted (with water) samples are prepared. 

Once the spectrometer is calibrated with CFL, physical setup (shown in Figure 1) is set. First, a spectral data is recorded with the empty petri dish (90 mm diameter, glass) and using a 6000K LED (http://www.amazon.com/110V-GU10-LED-Bulb-Equivalent/dp/B006DWY942).  We call this spectrum as “baseline”. 

Later, from each sample, 20 ml is taken and poured in the petri dish and the spectral data are collected. (Those spectral data are on the Public Lab’s website and nomenclature of the data is provided in Appendix.)

Collected spectral data is then smoothed with 5th order Savitzky–Golay filter and the difference between each sample spectra and the baseline spectrum is calculated. Resulting spectral data (i.e. absorbance) is shown in Figure 2.


[![PictureJD-2.png](https://i.publiclab.org/system/images/photos/000/008/313/medium/PictureJD-2.png)](https://i.publiclab.org/system/images/photos/000/008/313/original/PictureJD-2.png)

Figure 2 – Absorbance spectrum of varying concentrations and various (zoomed) regions of interest

It is worth noting the fact that, it is possible to detect/model the level of adulteration using the spectra of Red, Green or Blue Channel (or combination of them) data as well. However, optimal region selection may/will differ for each color channel.

As a measure for evaluating the level of adulteration (relative Jack Daniel’s concentration in the mixture), area under the curve (AUC) is selected [3]. This is more robust measure compared to “peak height” which fluctuate more causing noisy measurements. Also note that, in order to have stable measurements (for omitting negative value from numerical integration), all spectra are lifted up by 5 (see Figure 2). 

To calculate the AUC, three different wavelength bands ([430-500 nm], [560-640 nm] and [720-740 nm]) are selected. Note that the [560-640 nm] band is different than other two bands in the sense that, the absorbance values of different concentrations are in reverse order. In other words, absorbance values of higher concentrations are lower in this band. Therefore, AUC values calculated at [560-640 nm] band are subtracted from the summation of the AUC values calculated at [430-500 nm] and [720-740 nm] bands. More specifically:

AUC__final = AUC_[430-500] - AUC_[560-640] + AUC_[720-740]

Values of the area under the curve (AUC_final) with respect to different adulteration levels are shown in Figure 3. It is clear that the level of adulteration and AUC_final exhibit almost perfect linear relation.


[![PictureJD-3.png](https://i.publiclab.org/system/images/photos/000/008/314/medium/PictureJD-3.png)](https://i.publiclab.org/system/images/photos/000/008/314/original/PictureJD-3.png)

Figure 3 – Adulteration level and AUC_final exhibit almost perfect linear relation



###Results and Discussions 

Results of this preliminary study show that, using UV-Vis light spectroscopy (using the spectrometer developed by Public Lab), it’s possible to detect/model/measure distilled spirit adulteration (with water) in an efficient and simple way. Furthermore, these results indicate that it might be possible to detect and measure other type of alcoholic beverage adulterations as well. 

###References 

[1] “Application of Mid-infrared Spectroscopy for the Measurement of Several Quality Parameters of Alcoholic Beverages, Wine and Raki”, Burcu Ozturk, Dila Yucesoy and Banu Ozen, Food Anal. Methods (2012) 5:1435–1442.

[2] “A Flow-Batch Analyzer for UV-Vis Spectrophotometric Detection of Adulteration in Distilled Spirits”, Elaine C. L. Nascimento, Mário C. U. Araújo  and Roberto K. H. Galvão,  J. Braz. Chem. Soc., Vol. 22, No. 6, 1061-1067, 2011.

[3] “A New Method of Area under the Absorbance-Wavelength Curve for Rats Total Metabolomic Pharmacokinetics from Yangxue Injection with Multicomponents,” Lihong Zhang, Xiaojin Xiao, Zhenzhen Yang, Mengli Jiang, and Xiaodong Li, Journal of Spectroscopy, vol. 2013, Article ID 919023, 8 pages, 2013.


###Appendix 

test2:		CFL spectra used for calibration

d4-l:		        Spectra of the LED lamp

d4-b: 		Spectra of empty petri dish

d4-JDx: 	        Spectra of sample – x% Jack Daniel’s (x=40, 50, 60, 70, 80, 90 and 100)
____