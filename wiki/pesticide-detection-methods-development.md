---
title: Pesticide Detection Methods Development
tagnames: spectrometer, spectrometry, pesticides, quantitative, extraction, reagents, solvent
author: silverhammer
path: /wiki/pesticide-detection-methods-development.md
nid: 10015
uid: 420530

---

# Pesticide Detection Methods Development

by [silverhammer](../profile/silverhammer)

February 06, 2014 17:10 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [pesticides](../tag/pesticides), [quantitative](../tag/quantitative), [extraction](../tag/extraction), [reagents](../tag/reagents), [solvent](../tag/solvent)

####*Experiment 7 (started on 11/11/2014)*
##**Purpose:**
Been awhile.  I need to develop positive controls for the pesticide detection assay I've proposed here: [(http://publiclab.org/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentation)].  I have found two commercially available pesticides that I can use - Malathion (an organophosphate), and Sevin (a carbamate).  The methodology I have been using up to this point in time has been to use a negative control (no cholinesterase inhibition) as a control, but I have been challenged with regards to the validity of that approach by some inquisitive folks at Cal Tech. 

##**Procedure**
Repeat the work done in determining the molar absorptivity coefficient, which can by found here: [(http://publiclab.org/notes/silverhammer/03-06-2014/molar-absorptivity-coefficient-of-enzyme-substrate-complex-in-pesticide-detection-assay)]

Instead of reducing the amount of enzyme used (cholinesterase), I will keep the enzyme concentration constant and instead run a log dilution using Malathion and Sevin (I dose several controls runs with an increasing amount of pesticide).  I want to determine the minimum concentration for each pesticide to induce total inhibition of cholinesterase.

##**Where to go from here:**
Link Chart object to Map object to enabled linked event triggers (click on one, something happens on the other).


####*Experiment 6 (started on 5/1/2014)*
##**Purpose:**
Update pesticide monitoring website with data from strawberry tests and add functionality to the graph so data can be sorted.  Also added data from other sites (Whole Foods in Cupertino).

##**Results:**
Google Visualization API using a dashboard enabled adding sorting functionality relatively easily.  

http://mylatech.com/pages/pesticidemonitoring

##**Where to go from here:**
Link Chart object to Map object to enabled linked event triggers (click on one, something happens on the other).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

####*Experiment 5 (started on 4/18/2014)*
##**Purpose:**
[Mathew](http://publiclab.org/profile/mathew) has mentioned that glyphosate monitoring is something of interest to the community in this [wiki](http://publiclab.org/wiki/common-water-contaminants).  Based on that, I did some research and found a possible method for measuring glyphosate contamination in water.  Glyphosate = Round-up, a broad spectrum herbicide used for controlling weeds.  Its a low toxicity herbicide, but based on just a glance at consumption data this stuff is used **_a lot_**.  As Glyphosate has a phosphate function group, therefore I propose using a Phosphate detection assay to try and measure Round-up.

##**Procedure:**
I'm lifting this straight from another site.  My affinity for using both the PublicLab spectrometer in tandem with the IO Rodeo Colorimeter is well-documented on this site in my profile.  I'm taking a procedure they have posted for using the Hach PhosVer® 3 ascorbic acid method and measuring Absorbance at 880nm, and it can be found [here](https://sites.google.com/site/colorimeterwiki/tables/Colorimetric-assays/phosphate/hach-phosver-3-phosphate-reagent).  What is needed to meet Mathew's criteria are a) some easy for people to follow, b) needs to be cheap.  I think this meets both with some minor modifications.  Based on my estimates, a test can be run for about $1.00.  

To build a standard curve, we need to build a serial dilution schedule using Round-Up, and then measure absorbance at 880nm for each dilution and build the curve.  From there, people should be able to use this curve to calibrate their measurements against, so they don't need to build the standard curve each time they take a sample (just a control).

This section is a copy/paste from IO Rodeo's [assay wiki](https://sites.google.com/site/colorimeterwiki/tables/Colorimetric-assays/phosphate/hach-phosver-3-phosphate-reagent).  I've added in the method for creating a stock solution of Round-up using a the 51% glyphosate product and diluting it in distilled H2O.

_Equipment:_
PublicLab Spectrometer with the IR filter removed so it can operate in the 880nm range.
Fluorescent light source
stir plate
Stir bar
Macro cuvettes (glass ??)
1mL pipette
100 mL volumetric flask
10 mL sample tubes

_Reagents_
PhosVer3 Hach Part # 21060-69 for 10 mL samples, pack of 100. $31.29. Hach Method 8048 (Ascorbic acid method).
1,000 ppm PO4 (330 ppm P) Phosphate standard, Labchem
Round-up (can be bought at hardware store) - 51% 
Distilled water


_Standard Curve (phosphate & Round-up)_
Prepare standard curve between 0 - 1.80 ppm Phosphate (as P) & Round-up. 

Dilute the 330 ppm (as P) stock to a 2.0 ppm working stock (6.06 ppm PO4). 0.606 mL in 100 mL distilled water in volumetric flask.

Dilute  0.12 oz (as Round-up) to 1 gallon of distilled H2O.  This should give us stock solution matching very closely in ppm the phosphate control.

Prepare the standard curve solutions as shown in the tables below using 10 mL capped tubes.
Add the contents of 1 packet of PhosVer3 to a tube. Instructions recommend shaking vigorously for 15 seconds. To make this stop consistent and easier, use a stir bar and stir plate and mix for 30 seconds. You will see a blue color develop.
After 30 seconds, take the tube off the stir plate and repeat for the next sample.
After the last sample has been prepared, pour some solution from each sample into a cuvette

Serial Dilution Schedules - each sample needs to be measured at 880nm.  


[![Screen_Shot_2014-04-18_at_8.43.17_AM.png](https://i.publiclab.org/system/images/photos/000/003/715/medium/Screen_Shot_2014-04-18_at_8.43.17_AM.png)](https://i.publiclab.org/system/images/photos/000/003/715/original/Screen_Shot_2014-04-18_at_8.43.17_AM.png)

_table 1 serial dilution schedule for phosphate control_


[![Screen_Shot_2014-04-18_at_8.45.35_AM.png](https://i.publiclab.org/system/images/photos/000/003/716/medium/Screen_Shot_2014-04-18_at_8.45.35_AM.png)](https://i.publiclab.org/system/images/photos/000/003/716/original/Screen_Shot_2014-04-18_at_8.45.35_AM.png)


_table 2 serial dilution schedule for Round-up_

The data from the PublicLab spectrometer is in the units of Intensity, so it needs to be converted to absorbance using the following:

Absorbance = Log10(Io/I)

I = intensity on spectrometer at a particular wavelength through the sample

Io = intensity on spectrometer at a particular wavelength uninhibited

Once this is done, we can check our method against what IO Rodeo has reported for using this assay to test Phosphate, which looks like this:


[![Screen_Shot_2014-04-18_at_8.29.29_AM.png](https://i.publiclab.org/system/images/photos/000/003/714/medium/Screen_Shot_2014-04-18_at_8.29.29_AM.png)](https://i.publiclab.org/system/images/photos/000/003/714/original/Screen_Shot_2014-04-18_at_8.29.29_AM.png)



_fig 1  IO Rodeo phosphate standard curve using PhosVer3 to measure phosphate_

##**Results:**
TBD
##**Conclusion:**
TBD

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

####*Experiment 4 (finished on 4/4/2014)*

##**Purpose:**
Adapt methodology used for testing pesticide levels in organic and conventional raspberries to organic and conventional strawberries.  Where raspberries are advertised as being neither overly contaminated or clean using the Clean 15 & Dirty Dozen guidelines, strawberries are almost always ranked as the most contaminated fruit or vegetable on the market.  There are a lot of reasons for this (I'm assuming because they grow close to the ground).

##**Procedure:**
Using exact same procedure outlined in the raspberry protocol, prepare and test strawberries.  The first difference that needs to be accounted for is that strawberries are much bigger than raspberries, so they need to be cut down differently.  By taking 3 berries from a container and cutting into eight pieces of approximately equal size, then taking 3 pieces from each berry and placing it into the extraction container I was able to get about the same mass of material to analyze.  

Samples were purchased at a Safeway in Sunnyvale, CA on 2/28/2014.  Tracking numbers of samples were documented

_Conventional Brand_
6365 7014
5131 DS11
source info TBD

5255 4450
2160 DS11
source info TBD

_Organic Brand_
9750 9060
9919 DS11
source info TBD

3698 7296
1396 DS11
source info TBD

The strawberries were all sold under the Driscoll brand.  I was not able to carry out the assay as planned, so the berries sat for 6 days in a refrigerator until I got around to running the analysis.

##**Results:**

The strawberries held up much better to the extraction process than the raspberries.  There was less debris in the extraction solvent to deal with.  

Spectrums for all samples after 5min of incubation:


[![Screen_Shot_2014-03-27_at_8.53.26_AM.png](https://i.publiclab.org/system/images/photos/000/003/417/medium/Screen_Shot_2014-03-27_at_8.53.26_AM.png)](https://i.publiclab.org/system/images/photos/000/003/417/original/Screen_Shot_2014-03-27_at_8.53.26_AM.png)

Absorbance data at 415nm at various stages of incubation: 


[![Screen_Shot_2014-04-07_at_8.09.04_AM.png](https://i.publiclab.org/system/images/photos/000/003/525/medium/Screen_Shot_2014-04-07_at_8.09.04_AM.png)](https://i.publiclab.org/system/images/photos/000/003/525/original/Screen_Shot_2014-04-07_at_8.09.04_AM.png)



[![Screen_Shot_2014-04-07_at_8.09.47_AM.png](https://i.publiclab.org/system/images/photos/000/003/526/medium/Screen_Shot_2014-04-07_at_8.09.47_AM.png)](https://i.publiclab.org/system/images/photos/000/003/526/original/Screen_Shot_2014-04-07_at_8.09.47_AM.png)



##**Conclusion:**

The results were somewhat confounding compared to the raspberry assay results as there was an expectation that they strawberry results were expected to show more signs of contamination (in the form of cholinesterase inhibition).  What was found was that the results appears to track more closely with the behavior of the control used for the strawberry assay.  This is a new kit with a different lot number than what was used for the raspberry work, and some of the material was packaged differently.  

Comparison of the control behavior between the two kits used so far:



[![Screen_Shot_2014-04-07_at_8.22.28_AM.png](https://i.publiclab.org/system/images/photos/000/003/528/medium/Screen_Shot_2014-04-07_at_8.22.28_AM.png)](https://i.publiclab.org/system/images/photos/000/003/528/original/Screen_Shot_2014-04-07_at_8.22.28_AM.png)


Though its clear from a visual inspection that they look different, the R^2 values for the two graphs are very closely matched to one another.  Therefore, at this time we think that these results are real.  

Based on the dwell time between purchase and assay (~ 1 week, under refrigeration), its possible that any residual organophosphates and/or carbamates on the surface of the strawberries decomposed.  This, coupled with the fact that the strawberries did not break down during extraction the way that they raspberries did, its possible the the interior flesh of the strawberries were not exposed to the extraction process at all.  This could lead to a "cleaner" result.

At this time, we think we need to modify our extraction process with strawberries.  Specifically, we think we need to break the strawberries down more than cutting them into section prior to extraction.  We also need to test different dwell times (time from purchase to test).  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

####*Experiment 3 (Finished on 3/2/14)*
##**Purpose:**
Estimate the Molar Absorptivity Coefficient (e) of the measurable component of the pesticide detection (cholinesterase inhibition) assay used for testing organic and conventional raspberries.  
##**Procedure:**
Generate a serial dilution of the control solution using the following schedule (fig.1) and measure the absorbance of each dilution at each step of the dilution:


[![Screen_Shot_2014-03-02_at_9.35.21_PM.png](https://i.publiclab.org/system/images/photos/000/003/115/medium/Screen_Shot_2014-03-02_at_9.35.21_PM.png)](https://i.publiclab.org/system/images/photos/000/003/115/original/Screen_Shot_2014-03-02_at_9.35.21_PM.png)

_fig.1 serial dilution schedule_

##**Results:**
Observed that the there is a small amount of measurable absorbance in the substrate (Solution 2) at high concentrations.  There there is no measurable absorbance when the substrate is mixed with Cholinesterase.  Once the mixture of substrate and enzyme is buffered with Solution 3 (sodium acetate) and the pH is stabilized, there is a measurable absorbance for mixtures that are at least 25% stock solution (Solution 1 + 2 + 3 + 5min incubation).  Figure 2 show that there we can extract a Molar Absorptivity Coefficient from the region between 25% to 100% stock solution.


[![Screen_Shot_2014-03-02_at_9.31.10_PM.png](https://i.publiclab.org/system/images/photos/000/003/116/medium/Screen_Shot_2014-03-02_at_9.31.10_PM.png)](https://i.publiclab.org/system/images/photos/000/003/116/original/Screen_Shot_2014-03-02_at_9.31.10_PM.png)

_fig 2.  absorbance for various dilutions of the assay at various stages of preparation._

Figure 3 shows how the Molar Absorptivity Coefficient is calculated for stock dilutions between 25% to 100% (the dilutions were converted to Cholinesterase concentration (M)).  Based on the following formula:

**A = e*c*l**

_Where A = Absorbance @ 415nm, e = Molar Absorptivity Coefficient (M-1 cm-1), c = concentration (M), l = pathlength (1 cm for cuvettes used)._

**Molar Absorptivity Coefficient (e) = A/cl = 2865/M*cm**


[![Screen_Shot_2014-03-02_at_9.58.43_PM.png](https://i.publiclab.org/system/images/photos/000/003/117/medium/Screen_Shot_2014-03-02_at_9.58.43_PM.png)](https://i.publiclab.org/system/images/photos/000/003/117/original/Screen_Shot_2014-03-02_at_9.58.43_PM.png)

_fig 3.  absorbance for 25% to 100% stock dilutions, converted to M for Molar Absorptivity Coefficient calculations._

##**Conclusion:**
The assay appears to be very sensitive to pH, which is expected for any type of biochemical system.  As we were not able to measure the absorbance of substrate or substrate + enzyme, its clear that enzyme will not start to convert substrate until the system has a buffer in place to stabilize the pH (which needs to be measured).  For the above calculations, we are assuming a 1-to-1 conversion between substrate & enzyme.  But, this may not be the case and should be investigated further.  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
####*Experiment 2 (Finished on 2/27/14)*
##**Purpose:**
Compare a methanol extraction to the results from using the extraction solution provided by the kit manufacturer.  Use Raspberries from the same batch and run with a control.

##**Procedure:**
Samples:  Driscoll's Organic Raspberries (purchased at Costco in Mountain View, CA).  I used the website mydriscolls.com and got specific information about the farm, and its located in Oxnard, CA.
Driscolls now has a link on this portal to something called HarvestMark.   I followed it and entered the barcode information and got the following information:

Bar Code:  5997 4716 5149 DS08



[![Screen_Shot_2014-02-27_at_10.16.55_AM.png](https://i.publiclab.org/system/images/photos/000/003/065/medium/Screen_Shot_2014-02-27_at_10.16.55_AM.png)](https://i.publiclab.org/system/images/photos/000/003/065/original/Screen_Shot_2014-02-27_at_10.16.55_AM.png)



I don't know what Ranch ID and UPC mean, but I will look into it and see if I can find out more information.

Methods used are the same as those outline in my original post with regards to sample prep:
http://publiclab.org/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentation

To better control the experiment, I will use 6 raspberries from the same container, and then each berry will be cut in half and then one half will be used for the methanol extraction, while the other half will be used with the kit extraction solvent (dichloromethane).

The evaporation of methanol will take longer at the water temperatures used for the kit extraction solvent, so the water temperature will brought to ~77C to ensure that the methanol evaporates.

Samples will be monitored at 1min intervals on the PublicLab spectrometer as well as the IO Rodeo Colorimeter with a 415nm LED.  PublicLab spectrometer setup will be 9" pathlength, 40W fluorescent backlight.

##**Results**

The extract solutions look very different from each other after the extraction.  The kit extract solution has a slight pink color to it, but otherwise is fairly clear.  The methanol extract takes on a very dark red color.  

The extraction process using methanol proved to be more challenging than expected. The boiling point for methanol is ~77C.  After 30 minutes of evaporation at ~77C, there was still 0.5ml of dark red solution at the bottom of the test tube.  I was not able to completely evaporate this prior to adding solution 2 (substrate).  The process was followed regardless of this as the standard procedure is to retain ~1 drop of extract solution before adding substrate.

Figure 1 shows the results of checking the spectrum on the PublicLab desktop spectrometer of each solution after 5minutes of incubation


[![Screen_Shot_2014-02-27_at_10.07.42_AM.png](https://i.publiclab.org/system/images/photos/000/003/067/medium/Screen_Shot_2014-02-27_at_10.07.42_AM.png)](https://i.publiclab.org/system/images/photos/000/003/067/original/Screen_Shot_2014-02-27_at_10.07.42_AM.png)

Figure 2 shows the differences observed at ~433nm, and there is a clear change in intensity between the control, dichloromethane extraction sample, and the methanol extraction sample.  The methanol results show a much lower intensity.


[![Screen_Shot_2014-02-27_at_10.08.34_AM.png](https://i.publiclab.org/system/images/photos/000/003/068/medium/Screen_Shot_2014-02-27_at_10.08.34_AM.png)](https://i.publiclab.org/system/images/photos/000/003/068/original/Screen_Shot_2014-02-27_at_10.08.34_AM.png)



Figure 3 shows the absorbance results obtained at 415nm from a colorimeter from IO Rodeo.  The 415nm wavelength is obtained with a customized LED board.  There is a clear difference between the control, dichloromethane extract, and methanol extract.  Based on previous work, there is a known offset between the IO Rodeo 415nm results and what is observed on the PublicLab spectrometer when running this assay, and this was observed here as well (IO Rodeo @ 415nm = PublicLab @ 433nm)


[![Screen_Shot_2014-02-27_at_10.00.49_AM.png](https://i.publiclab.org/system/images/photos/000/003/066/medium/Screen_Shot_2014-02-27_at_10.00.49_AM.png)](https://i.publiclab.org/system/images/photos/000/003/066/original/Screen_Shot_2014-02-27_at_10.00.49_AM.png)



##**Conclusion**

The purpose of this experiment was to determine if methanol could be used as an alternative to dichloromethane as the extract solvent used in the raspberry pesticide detection assay.  Given the higher boiling point, residual liquids, and absorbance results obtained from checking the sample against the known controls, at this time it does not appear that methanol is a good alternative for this assay.  


####**//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**

####*Experiment 1 (Finished on 2/7/14)*
##**Purpose:**
Explore alternative extract solvents that are easier to work with and environmentally friendly(er).  The extraction solvent in the pesticide detection kit from RenekaBio (part# 003RT).  When the solvent was dispensed into a plastic cuvette to measure background, the plastic melted.  A new solvent needs to be found that can do the same job but is compatible with plastics.

##**Procedure:**
Use different solvents found in The Literature, as well as anything that can be found through trial and error.
*[Please add to this list as you see fit]*

1. 70% IPA
2. Ethanol
3.  Methanol
4.  Extraction Solvent from Kit (with a quartz or glass cuvette).

Absorbance = Log10(Io/I)

I = intensity on spectrometer at a particular wavelength through the sample

Io = intensity on spectrometer at a particular wavelength uninhibited

**70% IPA**
Max absorbance at 204nm.  On the spectrometer there should be 0% or close to 0% intensity at this wavelength.  
Light source:  Deuterium Lamp (Shimadzu LH-80 would work, $369 on Amazon).  Expected intensity spectrum would look like:


[![Screen_Shot_2014-02-06_at_8.39.30_AM.png](https://i.publiclab.org/system/images/photos/000/002/810/medium/Screen_Shot_2014-02-06_at_8.39.30_AM.png)](https://i.publiclab.org/system/images/photos/000/002/810/original/Screen_Shot_2014-02-06_at_8.39.30_AM.png)



**Ethanol**
Ethanol is a weak absorber.    
Light source:  Broad range, something a like a W-filament (are those even legal?).  

**100% Methanol**
Max absorbance at 177nm.  Yikes.  Not sure if the deuterium lamp can even do that.
Light source:  Deuterium Lamp.  See IPA above for details.

**Extraction Solvent from Kit**


*Control Setup*
Use a quartz cuvette, adjust back light distance from camera to minimize saturation (not sure what this distance would be, but its 9" for fluorescent lights and 5" for RGB LED and a 425nm UV LED).  Add 1.5mL of clean extract solvent to cuvette, mount cuvette directly in front of opening on spectrometer and use black tape to close off exposed sides.  Cover setup with a box and measure spectrum.

*Sample Extraction*
We want to use the various alcohols mentioned above to try and remove pesticide residues from various fruits and vegetables.  Prepare sample (in this case raspberries).  Take 3 raspberries, use a clean screw-top container and dispense 6mL of extract solvent onto sample and then shake for 2 minutes.  Let sample sit for 5 minutes then extract ~3ml of extract solvent from bottom of container (typically, raspberry mass floats to the top).  Spin down this solution in a centrifuge, and then dispense supernatant into the cuvette. 

*Measure Extracted Sample*
Using exact same setup as the control, measure the spectrum and compare to the control.

##**Results**
Setup:  40W Fluorescent bulb, 9" pathlength, raspberry ID: 366208816148DS12
**70% IPA**
Visual - Dark red in color, clear.  Very little debris.  Most of extract taken from TOP of mixing vial, as this didn't separate out like the kit extract solution.

Red peak still visible after extraction, but the green band and the two ultraviolet bands are gone.  

[![Screen_Shot_2014-02-07_at_5.02.28_PM.png](https://i.publiclab.org/system/images/photos/000/002/825/medium/Screen_Shot_2014-02-07_at_5.02.28_PM.png)](https://i.publiclab.org/system/images/photos/000/002/825/original/Screen_Shot_2014-02-07_at_5.02.28_PM.png)

_fig.1  white line is solvent + sample._

**100% Methanol**
Setup:  40W Fluorescent bulb, 9" pathlength, raspberry ID: 366208816148DS12

Visual - Red in color, clear (lighter than 70% IPA).  Some debris.  Most of extract taken from TOP of mixing vial, as this didn't separate out like the kit extract solution.

All peaks still visible after extraction.  They are actually almost identical. 

[![Screen_Shot_2014-02-07_at_5.08.57_PM.png](https://i.publiclab.org/system/images/photos/000/002/826/medium/Screen_Shot_2014-02-07_at_5.08.57_PM.png)](https://i.publiclab.org/system/images/photos/000/002/826/original/Screen_Shot_2014-02-07_at_5.08.57_PM.png)

_fig.2  white line is solvent + sample._

##**Conclusion**
Didn't see any change from methanol, though the solution color did change.  Not sure then if I've got the right light source for this extract solvent.  Need to remove IR filter from my camera and rerun the experiment.

IPA does show an actual change, and its quite significant.  Almost all peaks are hidden are gone with the exception of red.  This means that there is something (or multiply somethings) in the extract solution that are absorbing light.  I think this big signal change is probably due to something inherent in the raspberry coming out during the extraction, and probably not related as much to pesticide residue.

Need to rerun after centrifuge the samples for a few minutes to see if that changes the signal.  Suprised by the methanol signal.  Need to try this with the IR filter removed from the camera.