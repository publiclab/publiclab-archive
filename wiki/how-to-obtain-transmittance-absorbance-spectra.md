---
title: "How To Obtain Transmittance/ Absorbance Spectra"

tagnames: 'gam'
author: dhaffnersr
path: /wiki/how-to-obtain-transmittance-absorbance-spectra.md
nid: 13291
uid: 461120
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/017/068/original/ALL_3_together_july_14_last_pic.png)

# How To Obtain Transmittance/ Absorbance Spectra

by [dhaffnersr](/profile/dhaffnersr)

July 15, 2016 19:16 | Tags: [gam](/tag/gam)

----

**1)** Setup: 
  a) a full-spectrum light source (e.g. a white light LED). The light source has to cover    the_ full spectral range_ you want to measure
  b) the Plab spectrometer
  c) a 180° geometry, that is: shine the light through your sample

**2)** Measure: 
  a)  a first spectrum without sample. Let's call it reference spectrum.
  b) a second spectrum with sample. Let's call it sample spectrum.

**3)** Calculate:
  a) the transmittance spectrum by a division: transmittance = sample / reference . 
  b) the absorbance spectrum by applying a logarithm: absorbance = -1 * log(transmittance)

That's all. No subtraction involved, but a division.

**Some more hints: **
- As long as the light source is stable both in intensity and spectrum shape, you don't have to repeat 2) a) for every sample measurement.(1)

In order to obtain the absorbance properties of_ only the sample_ without influence of container + solvent, the 2) a) step is done with a sample container filled with the solvent used for the sample measurement. Of course, both containers should then behave identical for reference and sample measurement.
- Negative transmission is meaningless. Transmission above 100% is meaningless. If this occurs, errors have occurred (lamp intensity drifting, swapped sample/reference, ...)
- absorbance and transmittance spectra have a "common data base", you can display any absorbance spectrum as transmittance and vice versa. However, you cannot (!) display an intensity spectrum as absorbance. this would be totally meaningless.
- For any work on concentration determination, you have to go to absorbance domain. Only there you can use the Lambert-Beer relationship.

Ok, so armed with this knowledge, lets show you step by step how this is done for obtaining absorption measurements of my** Rhodamine B in Ethanol** sample:

**First graph shows STEP 2**_ (a)(b)_ 

[![sample_and_NO_sample__together_july_14_first_pic.png](//i.publiclab.org/system/images/photos/000/017/064/large/sample_and_NO_sample__together_july_14_first_pic.png)](//i.publiclab.org/system/images/photos/000/017/064/original/sample_and_NO_sample__together_july_14_first_pic.png)

**The next graph shows the sample and that of the solvent (ethanol)**

[![SAMPLE_AND_SOLVENT_new_july14CUTOFF_second_pic.png](//i.publiclab.org/system/images/photos/000/017/065/large/SAMPLE_AND_SOLVENT_new_july14CUTOFF_second_pic.png)](//i.publiclab.org/system/images/photos/000/017/065/original/SAMPLE_AND_SOLVENT_new_july14CUTOFF_second_pic.png)

**Here is the sample divided by the solvent**

[![sample_divided_by_solvent_july_14_smoothed_third_pic.png](//i.publiclab.org/system/images/photos/000/017/066/large/sample_divided_by_solvent_july_14_smoothed_third_pic.png)](//i.publiclab.org/system/images/photos/000/017/066/original/sample_divided_by_solvent_july_14_smoothed_third_pic.png)

**The fourth graph shows the transmittance/reflectance**

[![sample__july_14_transmtt_relctnce_fourth_pic.png](//i.publiclab.org/system/images/photos/000/017/067/large/sample__july_14_transmtt_relctnce_fourth_pic.png)](//i.publiclab.org/system/images/photos/000/017/067/original/sample__july_14_transmtt_relctnce_fourth_pic.png)


[![maxima_minima_for_rhod_b_part_1.png](//i.publiclab.org/system/images/photos/000/017/069/large/maxima_minima_for_rhod_b_part_1.png)](//i.publiclab.org/system/images/photos/000/017/069/original/maxima_minima_for_rhod_b_part_1.png)

Here is were I can access the inverted minima and transmission maxima for the absorption spectra of my sample (rhodamine b,) is highlighted, maximum absorption at 0.2259 at 540nm.

Next, when this value of 0.2259 is entered for calculating PPM of my sample, I just take that number and place it under molar concentration and I get a value of 108PPM for my stock solution of rhodamine b.

[![PPM_calculations_part_4.png](//i.publiclab.org/system/images/photos/000/017/070/large/PPM_calculations_part_4.png)](//i.publiclab.org/system/images/photos/000/017/070/original/PPM_calculations_part_4.png)

**This is an easy explanation of the Beer-Lambert Law**

[![beer_lambert_law_part2.png](//i.publiclab.org/system/images/photos/000/017/071/large/beer_lambert_law_part2.png)](//i.publiclab.org/system/images/photos/000/017/071/original/beer_lambert_law_part2.png)

[![beer_lambert_law_part_3.png](//i.publiclab.org/system/images/photos/000/017/072/large/beer_lambert_law_part_3.png)](//i.publiclab.org/system/images/photos/000/017/072/original/beer_lambert_law_part_3.png)

**Ref:**
(1) Originally explained by Dr. Freidrich Menges  PhD in physical chemistry.
http://www.effemm2.de/spekwin/spekwin_kontakt_en.html

http://hplc.chem.shu.edu/NEW/Undergrad/Molec_Spectr/Lambert.html

There was a question about a "dip" in the no-sample spectrum plot about why it was there, so I compared it to a plot done by Dave @Stoft back in March of 2015, so here is what mine looks like, one without normalizing and one with normalization:

[![dave_stofts_sanm_webcam_solux_scan_july_16.png](//i.publiclab.org/system/images/photos/000/017/086/large/dave_stofts_sanm_webcam_solux_scan_july_16.png)](//i.publiclab.org/system/images/photos/000/017/086/original/dave_stofts_sanm_webcam_solux_scan_july_16.png)


[![dave_stofts_sanm_webcam_solux_scan_july_16_part_2.png](//i.publiclab.org/system/images/photos/000/017/087/large/dave_stofts_sanm_webcam_solux_scan_july_16_part_2.png)](//i.publiclab.org/system/images/photos/000/017/087/original/dave_stofts_sanm_webcam_solux_scan_july_16_part_2.png)

@stoft I made a mistake on these plots and I am in the process of redoing a new set of scans using 5 biological dyes as my absorbance study, so first I wanted to show the present scans I did on Spekwin32 prototype hardware control program, using the procedures above minus the divisions because this is just the raw data, but what had happened is I had my wavelength range set incorrectly when I captured my original data, so I corrected that discrepancy and this is what it should look like on the X axes:

[![solux_scan_plus_all_5_dyes__july_16.png](//i.publiclab.org/system/images/photos/000/017/090/large/solux_scan_plus_all_5_dyes__july_16.png)](//i.publiclab.org/system/images/photos/000/017/090/original/solux_scan_plus_all_5_dyes__july_16.png)

@stoft I also wanted to illustrate how Spekwin32 averages the RGB channels as compared to Spectral Workbench here at Plab:


[![solux_scan_plab_and_spekwin32_july_17.png](//i.publiclab.org/system/images/photos/000/017/094/large/solux_scan_plab_and_spekwin32_july_17.png)](//i.publiclab.org/system/images/photos/000/017/094/original/solux_scan_plab_and_spekwin32_july_17.png)


@stoft I was experimenting today with the "set wavelength range" function in Spekwin32 proto type hardware control program, and I was curious to know if I set the wavelength range to match my latest CFL calibration how would that affect the X axes of the Solux scan, so I did that, and perhaps that was a problem I was having because my Solux plot fell more in line with that of Dave Stoft's plot done in 2015.

Here is the latest plot comparison:


[![solux_4700k_DAVE_STOFT_SCAN_JULY_17.png](//i.publiclab.org/system/images/photos/000/017/092/large/solux_4700k_DAVE_STOFT_SCAN_JULY_17.png)](//i.publiclab.org/system/images/photos/000/017/092/original/solux_4700k_DAVE_STOFT_SCAN_JULY_17.png)

@stoft Here is another perspective of the plot comparision between mine and Dave Stoft's Solux scan, this is after I divided my plot with the Solux reference from the Solux website data:

[![solux_4700k_DAVE_STOFT_SCAN_JULY_17.png](//i.publiclab.org/system/images/photos/000/017/096/large/solux_4700k_DAVE_STOFT_SCAN_JULY_17.png)](//i.publiclab.org/system/images/photos/000/017/096/original/solux_4700k_DAVE_STOFT_SCAN_JULY_17.png)




