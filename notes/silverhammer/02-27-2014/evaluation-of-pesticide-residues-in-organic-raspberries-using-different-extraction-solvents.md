---
nid: 10074
title: Evaluation of Pesticide Residues in Organic Raspberries using Different Extraction Solvents
path: public/static/notes/silverhammer/02-27-2014/evaluation-of-pesticide-residues-in-organic-raspberries-using-different-extraction-solvents.md
uid: 420530
tagnames: spectrometer,agriculture,pesticides,extraction,reagents,raspberries,organic,response:10014,solvents
---

# Evaluation of Pesticide Residues in Organic Raspberries using Different Extraction Solvents

####**Purpose**
Explore alternative extract solvents that are easier to work with or more readily accessible than what is used as the extraction solvent in the pesticide detection kit from RenekaBio (part# 003RT).   

This work was started when we tried to get a spectrum from an extract during an experiment using a plastic cuvette as the sample holder.  The cuvette started to melt, and it was later verified that the solvent melts plastics.  To make getting spectrums from extracts prior to evaporation new solvent needs to be found that can do the same job but is compatible with plastics, or we need to transition to quartz cuvettes, which is much more expensive.  Request to the kit manufacturer to identify the solvent used went unanswered.

####**Procedure**
The following two solvents were identified as potential substitutes to the extract solvent found in the pesticide detection kit.

**70% IPA**
**Methanol**

*Phase 1 - Extraction & Spectrum Analysis*
Sample Extraction :  Raspberries were used.  Driscoll's Organic Raspberries (purchased at Safeway in Sunnvyale, CA).  I used the website mydriscolls.com and got non-specific information about the farm.  HarvestMark information is as follows:

Bar Code: 3662 0881 6148 DS12

[![Screen_Shot_2014-02-27_at_1.07.26_PM.png](https://i.publiclab.org/system/images/photos/000/003/070/medium/Screen_Shot_2014-02-27_at_1.07.26_PM.png)](https://i.publiclab.org/system/images/photos/000/003/070/original/Screen_Shot_2014-02-27_at_1.07.26_PM.png)


Using the two alcohols mentioned above, we performed extracts on raspberries in the same fashion as has been outlined elsewhere(1).  Each extract was then measured on a desktop Spectrometer (PublicLabs part# SKIT 2.0) using a 40W fluorescent back-light and a 9 inch path length.

*Phase 2 - Assay*
Assay : Raspberries were used to assay as there is an established baseline.   Driscoll's Organic Raspberries (purchased at Costco in Mountain View, CA). I used the website mydriscolls.com and got specific information about the farm, and its located in Oxnard, CA. HarvestMark information is as following information:

Bar Code: 5997 4716 5149 DS08


[![Screen_Shot_2014-02-27_at_10.16.55_AM.png](https://i.publiclab.org/system/images/photos/000/003/071/medium/Screen_Shot_2014-02-27_at_10.16.55_AM.png)](https://i.publiclab.org/system/images/photos/000/003/071/original/Screen_Shot_2014-02-27_at_10.16.55_AM.png)


Methods used to perform the assay are the same as what has been posted by us earlier(1): http://publiclab.org/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentation

To better control the experiment, 6 raspberries from the same container will be used and then each berry will be cut in half and then one half will be used for the methanol extraction, while the other half will be used with the kit extraction solvent.

Samples will be monitored at 1min intervals on the PublicLab spectrometer as well as the IO Rodeo Colorimeter (part# Colorimeter-001) with a custom board with a 415nm LED and PublicLab spectrometer setup with a 40W fluorescent back-light and a 9 inch path length.

####**Setup**

Instrumentation setup is depicted in figure 1.


[![IMG_1260.jpg](https://i.publiclab.org/system/images/photos/000/003/093/medium/IMG_1260.jpg)](https://i.publiclab.org/system/images/photos/000/003/093/original/IMG_1260.jpg)





[![IMG_1264.jpg](https://i.publiclab.org/system/images/photos/000/003/095/medium/IMG_1264.jpg)](https://i.publiclab.org/system/images/photos/000/003/095/original/IMG_1264.jpg)




_fig1A & fig1B. setup and integration of spectrometer and colorimeter.  a hole has been drilled through both sides of the colorimeter housing to enable light to pass through)._

Sample prep setup (for extraction) is depicted in figure 2.



[![2014-02-27_20.46.02.jpg](https://i.publiclab.org/system/images/photos/000/003/094/medium/2014-02-27_20.46.02.jpg)](https://i.publiclab.org/system/images/photos/000/003/094/original/2014-02-27_20.46.02.jpg)




_fig2. setup for evaporating extraction solvent prior to assay._

####**Results**

**Phase 1 Results**
*70% IPA*
Visual - Dark red in color, clear.  Very little debris.  Most of extract taken from TOP of mixing vial, as this didn't separate out like the kit extract solution.



[![IMG_1266.jpg](https://i.publiclab.org/system/images/photos/000/003/090/medium/IMG_1266.jpg)](https://i.publiclab.org/system/images/photos/000/003/090/original/IMG_1266.jpg)




Red peak still visible after extraction, but the green band and the two ultraviolet bands are gone.  
[![Screen_Shot_2014-02-07_at_5.02.28_PM.png](https://i.publiclab.org/system/images/photos/000/002/825/medium/Screen_Shot_2014-02-07_at_5.02.28_PM.png)](https://i.publiclab.org/system/images/photos/000/002/825/original/Screen_Shot_2014-02-07_at_5.02.28_PM.png)

_fig.3  white line is solvent + sample._

*100% Methanol*
Setup:  40W Fluorescent bulb, 9" pathlength, raspberry ID: 366208816148DS12

Visual - Red in color, clear (lighter than 70% IPA).  Some debris.  Most of extract taken from TOP of mixing vial, as this didn't separate out like the kit extract solution.


[![IMG_1267.jpg](https://i.publiclab.org/system/images/photos/000/003/091/medium/IMG_1267.jpg)](https://i.publiclab.org/system/images/photos/000/003/091/original/IMG_1267.jpg)




All peaks still visible after extraction.  They are actually almost identical. 

[![Screen_Shot_2014-02-07_at_5.08.57_PM.png](https://i.publiclab.org/system/images/photos/000/002/826/medium/Screen_Shot_2014-02-07_at_5.08.57_PM.png)](https://i.publiclab.org/system/images/photos/000/002/826/original/Screen_Shot_2014-02-07_at_5.08.57_PM.png)

_fig.4  white line is solvent + sample._

Based on the results from phase 1, we decided to test 100% methanol against the baseline assay.

**Phase 2 Results**
To better understand what we were working with, we performed a boiling point study on the kit extract solvent and found that its boiling point was 40C.  Using this data and what is reported in the literature as a standard solvent used for this type of extraction, we concluded that this solvent must be dichloromethane, CH2Cl2

The boiling point for methanol is ~77C.  After 30 minutes of evaporation at ~77C, there was still 0.5ml of dark red solution at the bottom of the test tube. We were not able to completely evaporate this prior to adding solution 2 (substrate), even after raising the temperature in the water bath to 100C.  The process was followed regardless of this as the standard procedure is to retain ~1 drop of extract solution before adding substrate.

Figure 5 shows the results of checking the spectrum on the PublicLab desktop spectrometer of each solution after 5minutes of incubation


[![Screen_Shot_2014-02-27_at_10.07.42_AM.png](https://i.publiclab.org/system/images/photos/000/003/067/medium/Screen_Shot_2014-02-27_at_10.07.42_AM.png)](https://i.publiclab.org/system/images/photos/000/003/067/original/Screen_Shot_2014-02-27_at_10.07.42_AM.png)

_fig.5 spectrum of methanol & dichloromethane extracted samples used in assay after 5 min incubation._

Figure 6 shows the differences observed at ~433nm, and there is a clear change in intensity between the control, dichloromethane extraction sample, and the methanol extraction sample.  The methanol results show a much lower intensity.


[![Screen_Shot_2014-02-27_at_10.08.34_AM.png](https://i.publiclab.org/system/images/photos/000/003/068/medium/Screen_Shot_2014-02-27_at_10.08.34_AM.png)](https://i.publiclab.org/system/images/photos/000/003/068/original/Screen_Shot_2014-02-27_at_10.08.34_AM.png)

_fig.6 intensity difference in assay at the expected wavelength._

Figure 7 shows the absorbance results obtained at 415nm from a colorimeter from IO Rodeo.  The 415nm wavelength is obtained with a customized LED board.  There is a clear difference between the control, dichloromethane extract, and methanol extract.  Based on previous work, there is a known offset between the IO Rodeo 415nm results and what is observed on the PublicLab spectrometer when running this assay, and this was observed here as well (IO Rodeo @ 415nm = PublicLab @ 433nm).  It is unclear if the low reading on the methanol extract sample is due to other compounds extracted from the raspberries during extraction using methanol, which was obvious from the distinct color change in the methanol after the extraction was done (it was dark red).


[![Screen_Shot_2014-02-27_at_10.00.49_AM.png](https://i.publiclab.org/system/images/photos/000/003/066/medium/Screen_Shot_2014-02-27_at_10.00.49_AM.png)](https://i.publiclab.org/system/images/photos/000/003/066/original/Screen_Shot_2014-02-27_at_10.00.49_AM.png)

_fig.7 absorbance difference @ 415nm between a control, dichloromethane, and methanol extract over time._

####**Conclusion**

We have outlined a method to determine the feasibility of alternative extract solvents to be used with the RenekaBio pesticide detection kit when evaluating raspberries.  70% IPA was ruled out quickly as it appears that it extracted other compounds from the raspberries and masked the sample.  100% methanol initially looked like a potential candidate as it did not appear to extract other compounds from the raspberries based on the spectrum analysis.  But, we think that the the residual liquid left at the bottom of the test tube during Phase 2 test while using methanol as the extract solvent might not be methanol, but instead might be water from the rapsberries.  It was unclear to us why it would not evaporate while at elevated temperatures.  Its possible that a second extraction could be explored against the residual in the methanol test tube.  One embodiment of this would be to use a much smaller amount of dichloromethane on the residual and determine if there is a separation.  If a separation occurs, then the supernatant could be removed and the dichloromethane-suspended sample could be evaporated.  Of concern regarding this approach would be that evaluated thermal budget that the samples were exposed to, which could result in unintentional volatilization of extracted pesticides.  Given the higher boiling point, residual liquids, and absorbance results obtained from checking the sample against the known controls, at this time it does not appear that methanol is a good alternative for this assay.  

####**References**

1.  Maxwell, Steven (Feb, 2013). http://publiclab.org/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentationbee-colony-collapses/. 