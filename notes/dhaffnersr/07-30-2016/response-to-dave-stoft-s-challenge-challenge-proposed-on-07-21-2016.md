---
title: 'Response to: Dave stoft's challenge (challenge proposed on 07/21/2016)'
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/07-30-2016/response-to-dave-stoft-s-challenge-challenge-proposed-on-07-21-2016.md
nid: 13315
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/017/261/original/17mg_crude_oil_july28.png)

# Response to: Dave stoft's challenge (challenge proposed on 07/21/2016)

by [dhaffnersr](../profile/dhaffnersr) July 30, 2016 15:20

July 30, 2016 15:20 | Tags: 

----

##**To qualify (for this challenge) the application concept needs 1) some detail about the degree of oil detection (it must be better than detecting oil at a level far below that which I can already detect it by sight and smell) and 2) details showing the measurement concept has a viable technique of acquiring reproducible data..**

First I want to discuss the instrumentation and data capture techniques involved with this challenge, I think it will be helpful in making clear how the data was captured and finally processed.

The title image above is the main sample (17mg Sweet Wyoming Crude oil, dissolved in 95% purity lab grade Ethanol (200 proof) purchased from Duda energy LLc. I am illuminating the sample with a 405nm UV laser pointer to demonstrate why the sample glows a bluish white color (anthracene a PAH, is the reason why.)

Crude oil is a very complex organic compound, containing a vast array of aromatic hydrocarbons, because of this factor, it is difficult to pin point it's exact molecular weight, so in calculating PPM, I had to use an industry average of 199.5 to 208.5 mol/l.

This still did not present a big problem in values when calculating PPM, the variations were miniscule (within 1 hundredth of a thousand mol/l difference.) According to the EPA, legal discharge for oil into sea water is 15PPM, because it cannot be seen, I am presenting two comparisons at 17mg and 9mg, which translates mathematically to 17PPM and 9PPM, relative to a discharge into 100 tons of sea water.

Instrumentation used was the Plab v2.5 Spectrometer (with my custom upgrades) and absorption spectra acquired with a Solux 4700K 12vdc Lamp, 1 quartz cuvette was used for all captures, UV range for Quartz cuvette is 220nm - 2200nm. 

A path length of 1cm, with an absorbance of less than 0.1 at the excitation and all emission wavelengths to uniformly illuminate across the sample, and to avoid the inner-filter effect. The dark counts were subtracted and the spectra were corrected for wavelength-dependent instrument sensitivity.

The image below is a screen capture of Spekwin32's hardware control program, which I used for this study, it shows obviously, the Solux spectrum image on screen as it appears to me, the white box with the 4 small green points allows me to resize the cross section on the image. I am able to capture both the horizontal pixels and the vertical pixels for a much truer data capture.


[![spekwin_capture.png](//i.publiclab.org/system/images/photos/000/017/262/large/spekwin_capture.png)](//i.publiclab.org/system/images/photos/000/017/262/original/spekwin_capture.png)

The next screen image is the control platform itself, here I can select to save the dark spectrum, (which will be explained latter,) reference spectrum ect., I can also select wavelength range, webcam control features and the data I wish to aquire.


[![spekwin_capture_part_2.png](//i.publiclab.org/system/images/photos/000/017/263/large/spekwin_capture_part_2.png)](//i.publiclab.org/system/images/photos/000/017/263/original/spekwin_capture_part_2.png)

 The next plot is all 3 spectrum's, my reference, solvent and sample (17mg crude oil.) 


[![ALL_3_spectrums.png](//i.publiclab.org/system/images/photos/000/017/264/large/ALL_3_spectrums.png)](//i.publiclab.org/system/images/photos/000/017/264/original/ALL_3_spectrums.png)

My next plot is to show how the dark spectrum feature works, this is an excellent feature in this program because I have the ability to subtract this noise from my spectra

[![dark_spectrum_chart.png](//i.publiclab.org/system/images/photos/000/017/265/large/dark_spectrum_chart.png)](//i.publiclab.org/system/images/photos/000/017/265/original/dark_spectrum_chart.png)

Here is the absorption spectrum for my 17mg crude oil sample after it has been divided by the solvent spectrum


[![SAMPLE_1_ethanol_solux_4700K_360_537.png](//i.publiclab.org/system/images/photos/000/017/266/large/SAMPLE_1_ethanol_solux_4700K_360_537.png)](//i.publiclab.org/system/images/photos/000/017/266/original/SAMPLE_1_ethanol_solux_4700K_360_537.png)

You will notice a clear and prominent absorption peak at 371nm, and an emission peak at 482nm farther up the plot, how do I know that the two are related? I have Lange's hand book of chemistry sixteenth edition which is an invaluable resource in identifying chemical compounds. Section 3 page 3.61 and page 3.62 have many excitation and emission wavelengths for organic compounds.

I choose this peak namely, because it approached the spectrometer's limits and it was a clear match for dibenzopyrene, which the literature states its max absorption at 370,335,390,410nm and emission at 480nm and 510nm.

The next plot is the absorption peak isolated at 371.05nm


[![absorption_paek_371nm_part_4.png](//i.publiclab.org/system/images/photos/000/017/267/large/absorption_paek_371nm_part_4.png)](//i.publiclab.org/system/images/photos/000/017/267/original/absorption_paek_371nm_part_4.png)

This next series of plots are to explain the process for calculation concentration and PPM


[![molar_concentration_chart.png](//i.publiclab.org/system/images/photos/000/017/268/large/molar_concentration_chart.png)](//i.publiclab.org/system/images/photos/000/017/268/original/molar_concentration_chart.png)

The first thing to notice is the absorption and transmittance numbers, 0.0126 for absorption and 0.9715 for transmittance. You will see in the graph that absorption is 2 percent and transmittance is 10 percent, you can convert these values easily in Lange's hand book of chemistry using the transmittance and absorbance conversion table.

The molar concentration for the sample s 0.0284 mol/l which has a mathematical coefficient ratio of 0.000085213131 [mol/l] for this challenge though, I am only concentrating on the main points of, the degree of oil detection and showing the measurement concept. 

The next charts in the series will explain the measurements and math required to make them


[![conversion_chart_grams_to_ppm.png](//i.publiclab.org/system/images/photos/000/017/269/large/conversion_chart_grams_to_ppm.png)](//i.publiclab.org/system/images/photos/000/017/269/original/conversion_chart_grams_to_ppm.png)


[![conversion_chart_part_2.png](//i.publiclab.org/system/images/photos/000/017/270/large/conversion_chart_part_2.png)](//i.publiclab.org/system/images/photos/000/017/270/original/conversion_chart_part_2.png)


[![conversion_chart.png](//i.publiclab.org/system/images/photos/000/017/271/large/conversion_chart.png)](//i.publiclab.org/system/images/photos/000/017/271/original/conversion_chart.png)

My next comparison is a sample taken at 9mg (the same oil {sweet Wyoming crude}


[![SP_scan_05_9_mg_crude.png](//i.publiclab.org/system/images/photos/000/017/272/large/SP_scan_05_9_mg_crude.png)](//i.publiclab.org/system/images/photos/000/017/272/original/SP_scan_05_9_mg_crude.png)

This next plot includes my control sample (17mg anti-bacterial dish detergent,generic brand in ethanol)


[![SOLVENT_and_Dish_detergent_crude_oil_sample__july_30.png](//i.publiclab.org/system/images/photos/000/017/273/large/SOLVENT_and_Dish_detergent_crude_oil_sample__july_30.png)](//i.publiclab.org/system/images/photos/000/017/273/original/SOLVENT_and_Dish_detergent_crude_oil_sample__july_30.png)


[![dish_detergent_scan.png](//i.publiclab.org/system/images/photos/000/017/274/large/dish_detergent_scan.png)](//i.publiclab.org/system/images/photos/000/017/274/original/dish_detergent_scan.png)

There is a clear distinction in absorption peaks for the detergent and crude oil, so both chemical compounds can be easily identified just by waveform. (in my opinion.) 

Conclusion, did I meet Mr. Stoft's challenge?

No, and here is why, first the sample at 9mg (crude oil) was completely transparent, meeting in part the challenge, it could not be seen nor smelled, but failing in begin detected by the spectrometer.

2, at 17mg (crude oil) a very slight opaque color could be seen in the cuvette, very slight, and was indeed detected by the spectrometer, but failed at detection below 15PPM, which is the EPA's rules for acceptable oil discharge in sea water.

 A minor success though, I think I did demonstrate that this spectrometer at its current specifications, can differentiate between different organic and non organic compounds in the range of 370nm.

My summation is, that the Plab v2.5 spectrometer has its value as a real world instrument, if applied within its limitations. Which I do not feel can be exceeded any further than what is present. 

Also, in order for this device to be a significant tool in the field, it would need major modifications both in physical design and internal, for example, in my opinion the USB capability of any field device is invaluable because of the flexability and mobility factors involved. The down side is, the device would need to operate in a similar fashion as the high end products function, like internal firmware, a microprocessor and CCD rig of some kind. 

Some sort of software would have to be pre-loaded so the user could have instant results at the scene of the study site, as far as I am aware, there is no reliable online "free" data base for absorption spectral data, and the data that is available in on CD-ROM and is very expensive (also, there are subscription services available for this data, that is just as expensive.)

References provided below:

http://www.marpoltraining.com/MMSKOREAN/MARPOL/Annex_I/r15.htm - Control of operational discharge of oil

http://www.epa.gov/oil-spills-prevention-and-preparedness-regulations/overview-discharge-oil-regulation-sheen-rule - Section 311(j)(1)(C) of the Clean Water Act as amended by the Oil Pollution Act of 1990

http://www.rapidtables.com/math/number/PPM.htm#ppm to hz - What is ppm?

http://www.epa.gov/oil-spills-prevention-and-preparedness-regulations/overview-discharge-oil-regulation-sheen-rule

http://www.marpoltraining.com/MMSKOREAN/MARPOL/Annex_I/r15.htm - specifies <15ppm oil discharge into the ocean

http://en.wikipedia.org/wiki/Anthracene

http://en.wikipedia.org/wiki/Petroleum - average molecular weight for crude oils

