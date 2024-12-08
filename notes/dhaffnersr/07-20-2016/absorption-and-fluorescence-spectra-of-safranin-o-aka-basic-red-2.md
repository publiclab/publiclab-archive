---
title: Absorption and Fluorescence Spectra of Safranin O (aka., Basic Red #2)
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/07-20-2016/absorption-and-fluorescence-spectra-of-safranin-o-aka-basic-red-2.md
nid: 13302
uid: 461120

---

# Absorption and Fluorescence Spectra of Safranin O (aka., Basic Red #2)

by [dhaffnersr](../profile/dhaffnersr) July 20, 2016 12:51

July 20, 2016 12:51 | Tags: 

##**Origin of the word “science” Latin_ Scientia_- know**

This is a fundamental tutorial using the Red dye Safranin O, to illustrate the steps for preforming absorption spectra, irregardless of whatever data processing software you are using or not. 

I am using the Public Lab v2.5 Spectrometer to demonstrate these steps. The processing and capture software I used was Spekwin32 v172.2p5 proto type, although I know that Jeff @Warren and Dave @Stoft are working diligently to incorporate this feature into Spectral Workbench. I'm no graphic artist, so please bear with this presentation, I have made every effort to be as accurate as possible, but there can still be a margin of error.

**The Set Up**:
1)Measure: 

**a)** first spectrum_ without_ sample. Let's call it reference spectrum (your SOLVENT)

**b)** second spectrum_ with_ sample. Let's call it sample spectrum (in this case Safranin O)


[![ABtest07_BOTH_spectras_july_19.png](//i.publiclab.org/system/images/photos/000/017/161/large/ABtest07_BOTH_spectras_july_19.png)](//i.publiclab.org/system/images/photos/000/017/161/original/ABtest07_BOTH_spectras_july_19.png)

In the plot above, it is_ important_ to make sure that the spectrum for the solvent is as steady and uniform as possible, with whatever white light source you are using. When transferring form the solvent cuvette to the sample cuvette, it is _equally_ important that, nothing changes, ie.,light source, spectrometer alignment, ect.,

You will notice that the intensity changes when the sample container is placed in the light path...do** NOT** try and re-adjust the light source or re-align the spectrometer to compensate for this, I already did this, yes I know, and it will invalidate everything!

Good, lets continue...

2**)Calculate**:

**a)** the transmittance spectrum by a division: transmittance = sample / reference.  
 
**b)** the absorbance spectrum by applying a logarithm: absorbance = -1 * log(transmittance)

**That's all. No subtraction involved, but a division.**

**Some more hints:** 
- As long as the light source is stable both in intensity and spectrum shape, you don't have to repeat the first step (a) for every sample measurement.

- In order to obtain the absorbance properties of only the sample without influence of container + solvent, step 1) is done with a sample container filled with the solvent used for the sample measurement. Of course, the both containers should then behave identical for reference and sample measurement.

- Negative transmission is meaningless. Transmission above 100% is meaningless. If this occurs, errors have occurred (lamp intensity drifting, swapped sample/reference, ...)

- absorbance and transmittance spectra have a "common data base", you can display any absorbance spectrum as transmittance and vice versa. However, you cannot (!) display an intensity spectrum as absorbance. this would be totally meaningless.

- For any work on concentration determination, you have to go to absorbance domain. Only there you can use the_ Lambert-Beer relationship_.

**After your sample is divided by the solvent reference spectrum, it will look something like this:**


[![SOLUX_ABtest07_SAFRANIN_O_in_Methanol_Transmitance.png](//i.publiclab.org/system/images/photos/000/017/162/large/SOLUX_ABtest07_SAFRANIN_O_in_Methanol_Transmitance.png)](//i.publiclab.org/system/images/photos/000/017/162/original/SOLUX_ABtest07_SAFRANIN_O_in_Methanol_Transmitance.png)

Now, depending on your software, you can look at the data for your spectra to find the absorption data that you just acquired, in this case it is for Safranin O. Lets take a look at that data:


[![inverted_data_ab.png](//i.publiclab.org/system/images/photos/000/017/163/large/inverted_data_ab.png)](//i.publiclab.org/system/images/photos/000/017/163/original/inverted_data_ab.png)


[![inverted_data_Transm.png](//i.publiclab.org/system/images/photos/000/017/164/large/inverted_data_Transm.png)](//i.publiclab.org/system/images/photos/000/017/164/original/inverted_data_Transm.png)

The first set of information is for absorption, and highlighted is the one we are looking for at 526nm, this is the max absorption for Safranin O in a 6 to 24% concentration of Methanol. The next set of data points are for transmission. which is related to absorption. 

This is how I know that I_ really_ have a sample of Safranin O! 

The next plot is going to illustrate how we can figure out what our concentration is of our sample, although I already know what it is, not only am I verifying it, but this procedure would be used in a similar fashion for an unknown concentration, where you would do a scan of 5 to 8 samples of differing dilutions.


[![SOLUX_ABtest07_SAFRANIN_O_in_Methanol_cutoff.png](//i.publiclab.org/system/images/photos/000/017/165/large/SOLUX_ABtest07_SAFRANIN_O_in_Methanol_cutoff.png)](//i.publiclab.org/system/images/photos/000/017/165/original/SOLUX_ABtest07_SAFRANIN_O_in_Methanol_cutoff.png)

Now, to my surprise, I didn't realize that Safranin O fluoresced. So I was able to do both, an absorbance plot and a fluorescence plot.


[![Asorption_plot_for_safranin_O_july_19_part_3DONE.png](//i.publiclab.org/system/images/photos/000/017/166/large/Asorption_plot_for_safranin_O_july_19_part_3DONE.png)](//i.publiclab.org/system/images/photos/000/017/166/original/Asorption_plot_for_safranin_O_july_19_part_3DONE.png)

The exciting thing about all this was, that my plots were experimentally in range of the published literature for Safranin O in Methanol!

The next graphic will illustrate the data for both the absorbance and fluorescence for our sample of Safranin O:


[![FWHM_data_for_absorp_and_fluorecnce.png](//i.publiclab.org/system/images/photos/000/017/167/large/FWHM_data_for_absorp_and_fluorecnce.png)](//i.publiclab.org/system/images/photos/000/017/167/original/FWHM_data_for_absorp_and_fluorecnce.png)


[![abs_transm.png](//i.publiclab.org/system/images/photos/000/017/168/large/abs_transm.png)](//i.publiclab.org/system/images/photos/000/017/168/original/abs_transm.png)



[![abs_log_chart.png](//i.publiclab.org/system/images/photos/000/017/169/large/abs_log_chart.png)](//i.publiclab.org/system/images/photos/000/017/169/original/abs_log_chart.png)


[![beer_lambert_law.png](//i.publiclab.org/system/images/photos/000/017/170/large/beer_lambert_law.png)](//i.publiclab.org/system/images/photos/000/017/170/original/beer_lambert_law.png)


[![beer_lambert_law2.png](//i.publiclab.org/system/images/photos/000/017/171/large/beer_lambert_law2.png)](//i.publiclab.org/system/images/photos/000/017/171/original/beer_lambert_law2.png)

**References**

http://spectralworkbench.org/sets/3285 - ABtest01 - absorption spectra of 5 biological stains

http://www.emdmillipore.com/US/en/product/New-fuchsin-%28C.I.-42520%29,MDA_CHEM-105226?bd=1  - fuchsin

http://micro.magnet.fsu.edu/primer/photomicrography/bwfilters.html - absorption spectra for various stains

http://shodhganga.inflibnet.ac.in/bitstream/10603/9919/9/09_chapter%204.pdf – Absorption and Fluorescent Spectra of Safranin O, Pg.93 SEC. 4.5.1.2

http://www.researchgate.net/publication/10769812_Spectral_studies_of_safranin-O_in_different_surfactant_solutions  - Safranin O in Methanol

http://www.umich.edu/~chem125/softchalk/Exp2_Final_2/Exp2_Final_2_print.html Chem 125 Experiment II step by step instruction for absorbance measurements and plotting




