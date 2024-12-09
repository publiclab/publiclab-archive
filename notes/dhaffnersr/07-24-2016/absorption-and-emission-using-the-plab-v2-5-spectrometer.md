---
title: Absorption And Emission - Using The Plab v2.5 Spectrometer
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/07-24-2016/absorption-and-emission-using-the-plab-v2-5-spectrometer.md
nid: 13305
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/017/195/original/cuvette_holder_apparates.png)

# Absorption And Emission - Using The Plab v2.5 Spectrometer

by [dhaffnersr](../profile/dhaffnersr) July 24, 2016 11:48

July 24, 2016 11:48 | Tags: 

----

##A continuation on this series of **Absorption Spectroscopy**

We are going to examine the dye Rhodamine B, because its properties are very well documented. This presentation will attempt to illustrate the sometimes complex concepts of absorption spectroscopy by using a more visual, representational approach.

The first illustration demonstrates the first steps already outlined in previous posts both in my wiki pages and here, references are provided at the end. 


[![SAMPLE_and_SOLVENT_rhod_b_july_23_FIRST.png](//i.publiclab.org/system/images/photos/000/017/196/large/SAMPLE_and_SOLVENT_rhod_b_july_23_FIRST.png)](//i.publiclab.org/system/images/photos/000/017/196/original/SAMPLE_and_SOLVENT_rhod_b_july_23_FIRST.png)

 In the above chart, the_ absorption _ spectra is clearly identified. No extensive sample preparation is really needed to examine the chemical properties of your sample, whether it is a known sample with a known or unknown concentration.

All that is needed is a steady radiant white light source, your spectrometer and a little prep work.

This is the step where we would do our dividing calculations, by taking the_ sample_ and dividing it by the_ solvent sample_. 

The next plot, illustrates how our final result looks like after we have done all our data processing for our absorption spectra.


[![absplot_FINISHED_july_22_SECOND.png](//i.publiclab.org/system/images/photos/000/017/197/large/absplot_FINISHED_july_22_SECOND.png)](//i.publiclab.org/system/images/photos/000/017/197/original/absplot_FINISHED_july_22_SECOND.png)

I have presented the plot in it's proper configuration as would be presented for chemical analysis in a body of related work. 

Next, is the emission plot for Rhodamine B in ethanol, using a DPSS 532nm green laser excitation source, the literature states that I should have a maximum peak wavelength at 565nm, even after removing Rayleigh/Raman scattering from the data, I have a peak wavelength of 563nm.

This peak is also corroborated in part, by the absorption spectra taken earlier. I speculate either, a resolution discrepancy with the spectrometer, or operator error?


[![Spekwin_scan_rhod_b_10_drops_stock_soluti0n_in_etho_july_22_THIRD.png](//i.publiclab.org/system/images/photos/000/017/198/large/Spekwin_scan_rhod_b_10_drops_stock_soluti0n_in_etho_july_22_THIRD.png)](//i.publiclab.org/system/images/photos/000/017/198/original/Spekwin_scan_rhod_b_10_drops_stock_soluti0n_in_etho_july_22_THIRD.png)

The next plot, is my correction curve plot, were I show how well my "best fit" falls with my reference spectra of Rhodamine B in ethanol, from the Oregon Laser Medical Center. 


[![cal_curve_absorption_omlc_and_plab_FOURTH.png](//i.publiclab.org/system/images/photos/000/017/199/large/cal_curve_absorption_omlc_and_plab_FOURTH.png)](//i.publiclab.org/system/images/photos/000/017/199/original/cal_curve_absorption_omlc_and_plab_FOURTH.png)

The next two plots are my calibration curves, the first is my reference which of course is the OMLC and my scan of Rhodamine B. 


[![cal_curve_emission_OMLC_FIFTH.png](//i.publiclab.org/system/images/photos/000/017/200/large/cal_curve_emission_OMLC_FIFTH.png)](//i.publiclab.org/system/images/photos/000/017/200/original/cal_curve_emission_OMLC_FIFTH.png)



[![cal_curve_emission_SIXTH.png](//i.publiclab.org/system/images/photos/000/017/201/large/cal_curve_emission_SIXTH.png)](//i.publiclab.org/system/images/photos/000/017/201/original/cal_curve_emission_SIXTH.png)

Here I can see how my trend line compares to that of my reference, the reason for these calibration curves is to find the unknown concentration of my reference, since the original data does not state it. I will explain my process,

What you do is make up a number of solutions of the compound you are investigating - each of accurately known concentration. Those concentrations should bracket the concentration you are trying to find - some less concentrated; some more concentrated. With colored solutions, this isn't a problem. You would just make up solutions of accurately known concentrations some of which are a bit lighter and some a bit darker in color.

For each solution, you measure the absorbance at the wavelength of strongest absorption - using the same container for each one. Then you plot a graph of that absorbance against concentration. This is a calibration curve.

According to the Beer-Lambert Law, absorbance is proportional to concentration, and so you would expect a straight line. That is true as long as the solutions are dilute, but the Law breaks down for solutions of higher concentration, and so you might get a curve under these circumstances.

As long as you are working from values either side of the one you are trying to find, that isn't a problem. 

Fortunately, I can have Excel do all the work for me, and make a clear and nicely done plot, that makes sense.

So, by examining these two calibration plots I can determine that my reference has a Molar concentration of 1 and I have a Molar concentration of 1.026.

Doing it this way you don't have to rely on a value of molar absorptivity, the reliability of the Beer-Lambert Law, or even know the dimensions of the cell containing the solution.

_references:_

http://publiclab.org/wiki/how-to-obtain-transmittance-absorbance-spectra

http://publiclab.org/notes/dhaffnersr/07-20-2016/absorption-and-fluorescence-spectra-of-safranin-o-aka-basic-red-2

http://en.wikipedia.org/wiki/Absorption_spectroscopy#Applications

http://fptl.ru/biblioteka/spravo4niki/dean.pdf - Lange’s hand book of chemistry, free online 15th edition. (1276 pages.)





