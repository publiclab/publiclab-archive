---
nid: 10014
title: Detecting Pesticides in Organic and Conventional Raspberries using Open Source Instrumentation
path: public/static/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentation.md
uid: 420530
tagnames: spectrometer,pesticides,reagents,organic,nicotinoid,organophosphate,carbamate,berries,colorimetry,activity:spectrometry,difficulty:hard,activity:spectrometry-sampling,activity:reagents,activity:colorimetry,first-time-poster
---

# Detecting Pesticides in Organic and Conventional Raspberries using Open Source Instrumentation

####**Purpose**

Develop a method to quickly determine if organophosphate and/or carbamate pesticides are on Organic and Conventional Raspberries using open-source instrumentation and low cost reagents.  

####**Background**

Raspberries were selected because this fruit doesn't appear on the "Dirty Dozen" or "Clean Fifteen" lists.  These lists are commonly used as a quick resource to help guide consumers.  The "Dirty Dozen" are the twelve different types of fruits and vegetables that are more likely to be contaminated with pesticide residue.  The "Clean Fifteen" are less likely to be contaminated with pesticide residue.  

Organophosphate and carbamate pesticides were investigated because of the ongoing concern around the use of neonicotinoids. Neonicotinoids, one of the only new types of pesticide developed in the last half century [7] gained popularity in the last two decades as an alternative to organophosphates and carbamates, as they have been show to be specifically less toxic to mammals. [4] Recent published evidence shows neonicotinoids have been linked to disruption of the immune system in bees, and this could be a contributing factor to bee colony collapse disorder. [1][2][3]  Due to this, farmers will need to consider alternatives to neonicotinoids pesticides and one possibility is for them to transition back to organophosphates and carbamates.  

To determine organophosphate and carbamate pesticide contamination, a cholinesterase enzyme inhibition assay will be used. Organophosphates will permanently inactivate acetylcholinesterase, which is necessary for nerve function in humans, insects, and other animals.  When this occurs, the neurotransmitter acetylcholine will not get reduced to choline and acetic acid and thus builds up in the body of the animal or insect.  This results in overstimulation of nicotinic and muscarinic receptors.  Carbamates work in much the same fashion, but the inactivation of acetylcholinesterase is a reversible process, and because of this they are considered less toxic than organophosphates. [5]

####**Procedure**

Purchased Organic and Conventional Raspberries at a Safeway store in Sunnyvale, CA .  The "trace my berries" program at Driscoll's provides barcodes on the backs of the berry containers, and this information was collected from the samples prior to analysis.[](www.mydriscolls.com)

**_Organic brand barcodes:_**

0989   2393
9125   DS11
_(non-specific information retrieved)_

5660   8569
6180   DS11
_(non-specific information retrieved)_

2101   6851
6915   DS11
_(non-specific information retrieved)_

4814   9426
6133   DS11
_(specific information  returned about the farm and location)_

**_Conventional brand barcodes:_**

0426   3385
6658   DS11
_(non-specific information retrieved)_

1010   3441
1261   DS11
_(specific information returned about the farm and location)_

7990   6794
6532   DS09
_(error code returned that this barcode was invalid)_

The raspberries origins can be tracked using the portal at [www.mydriscolls.com](www.mydriscolls.com).  When the above barcodes were entered, non-specific information was provided about the origins of 5 different samples.  Specific information was retrieved about the berries from two farms, and both are located in Oxnard, CA.

The cholinesterase inhibition assay kit was from RenekaBio (part# 003RT).  For each test, 3 raspberries were cut in half using a plastic knife and then mixed for 2 minutes with the extract solution.  After the 2 minute mixing cycle the sample sat for another 5 minutes while the extract solution of the sample separated in the mixing vessel.  3ml of extraction solution was then removed from the mixing vessel and then dispensed into a glass test tube, where a 50C water bath was used to evaporate the extract solvent.  The sample was then reconstituted with 3ml of Solution 2 and two drops of Solution 1 (0.1% cholinesterase enzyme) and allowed to incubate for 5 minutes after mixing.  The sample was then transferred into a plastic test tube  and 2 drops of Reagent 3 (0.01% sodium acetate) was added to the sample and the sample was mixed again.  While the sample prep procedure is being carried out, a control sample was prepared.  This was done using the method above, but with no sample extract.  The instructions call for the sample to incubate for 5 minutes and then compare the color of the control to the color of the sample. 

In an attempt to get more information from the prepared samples, a colorimeter from IORodeo (part# Colorimeter-001) was used to measure the absorbance of the various samples and controls to determine if there were measurable differences that could not be detected with the naked eye.  A custom board was built and fitted with a UV LED and was used to measure absorbance at 415nm.[6]  All samples were measured at the 5 minute incubation point, while other samples were measured multiply times over a range of times to determine the activity of the Cholinesterase enzyme.

Additional data was taken from a sample using a spectrophotometer from Public Labs (part# SKIT 2.0).  This was done primarily to determine if there were changes in the spectrum over time that would not be detected with the colorimeter, as it is a fixed wavelength.  

####**Results**

The raspberries were visually inspected prior to analysis, and the conventional brand raspberries have dark red appearance compared to the organic brand raspberries.  It is unclear if this is due to the level of ripeness or if there are subtle differences in the type of species of raspberries which would result in the color difference.

A standard curve was generated by diluting a control sample to various concentrations.  The stock solution (control) Cholinesterase concentration is 440uM. 


[![Screen_Shot_2014-01-29_at_8.30.52_AM.png](https://i.publiclab.org/system/images/photos/000/002/800/medium/Screen_Shot_2014-01-29_at_8.30.52_AM.png)](https://i.publiclab.org/system/images/photos/000/002/800/original/Screen_Shot_2014-01-29_at_8.30.52_AM.png)

_figure 1.  Standard curve of cholinesterase concentration vs. absorbance @ 415nm after 5 minutes of incubation._


Absorbance data was collected at various time intervals for all samples and the control.  Absorbance of the final solution was measured at 415nm.  



[![Screen_Shot_2014-02-05_at_9.41.39_PM.png](https://i.publiclab.org/system/images/photos/000/002/807/medium/Screen_Shot_2014-02-05_at_9.41.39_PM.png)](https://i.publiclab.org/system/images/photos/000/002/807/original/Screen_Shot_2014-02-05_at_9.41.39_PM.png)

_figure 2.  Change in test solution absorbance @ 415 nm vs. incubation time._



[![Screen_Shot_2014-02-04_at_1.45.46_PM.png](https://i.publiclab.org/system/images/photos/000/002/802/medium/Screen_Shot_2014-02-04_at_1.45.46_PM.png)](https://i.publiclab.org/system/images/photos/000/002/802/original/Screen_Shot_2014-02-04_at_1.45.46_PM.png)

_table 1.  Estimated active cholinesterase after 5 minutes of incubation._



[![Screen_Shot_2014-02-06_at_6.46.29_PM.png](https://i.publiclab.org/system/images/photos/000/002/812/medium/Screen_Shot_2014-02-06_at_6.46.29_PM.png)](https://i.publiclab.org/system/images/photos/000/002/812/original/Screen_Shot_2014-02-06_at_6.46.29_PM.png)

_figure 3.  Active cholinesterase concentrations in safe and unsafe zones._

After 5 minutes of incubation the kit manufacturer recommends that the color of the solution be checked and compared to the control. Using this as a valid check point of the assay using both a visual check as well as an absorbance check, the Organic brand raspberries were found to have an average absorbance of .99, or 74% of the control.  The Conventional brand raspberries had an average absorbance of .93, or 67% of the control.   This is thought to be due to there being less pesticide in the sample, thus the enzyme is not being inhibited from substrate, and the detector in turn is seeing an increase in absorbance.  We did a separate dilution study to determine what is the minimum amount of active cholinesterase to get a clean result (fig. 3).  The kit manufacture states that 15% inhibition is an unsafe result.  We think that this is an error and that its actually closer to 85% inhibition is an unsafe results.  After 10 minutes of incubation, we see that there is overlap in the signals and the average absorbance for both types of raspberries is 1.37, or 80% of the control.   

A spectrum was taken from sample 7490 6794 6532 DSO9 using the spectrometer at 1 minute intervals (fig. 4).  The backlighting was a fluorescent bulb used for calibrating the spectrometer, and the sample holder was the same cuvette used for absorbance measurements on the colorimeter.  We see that there is little change to the spectrum over time.  We think that this has to do with the wavelengths of light that we collected at, and we plan to do further investigations using different light sources.  Close examination of the spectrums at 9 & 10 minutes do show a peak appearing at 433nm (fig. 5).  We decided to then investigate the Colorimeter light source and determined that this peak would be just one deviation of the 415nm LED output (fig.6).  This would indicate that its possible there are multiply interactions occurring in solution at longer incubations.


[![Screen_Shot_2014-02-04_at_9.01.29_AM.png](https://i.publiclab.org/system/images/photos/000/002/803/medium/Screen_Shot_2014-02-04_at_9.01.29_AM.png)](https://i.publiclab.org/system/images/photos/000/002/803/original/Screen_Shot_2014-02-04_at_9.01.29_AM.png)

_figure 4.  Spectrum of sample 7490 6794 6532 DSO9 at 4, 5, 6, 9,10 minutes using a 40W fluorescent bulb as a back light.  test 6 is a spectrum of a 40W fluorescent bulb used as a calibration._


[![Screen_Shot_2014-02-05_at_7.53.58_AM.png](https://i.publiclab.org/system/images/photos/000/002/806/medium/Screen_Shot_2014-02-05_at_7.53.58_AM.png)](https://i.publiclab.org/system/images/photos/000/002/806/original/Screen_Shot_2014-02-05_at_7.53.58_AM.png)

_figure 5.  peak differentiating at 433nm after 9 minutes of incubation._


[![Screen_Shot_2014-02-05_at_8.08.31_AM.png](https://i.publiclab.org/system/images/photos/000/002/805/medium/Screen_Shot_2014-02-05_at_8.08.31_AM.png)](https://i.publiclab.org/system/images/photos/000/002/805/original/Screen_Shot_2014-02-05_at_8.08.31_AM.png)

_figure 6.  415nm LED compared to 9 minute sample, showing that the peak in fig.4 is within 1 standard deviation of the spectrum of the 415nm LED used for absorbance measurements in the colorimeter_
 
####**Conclusion**

The assay shows that its sensitive to absorbance measurements at 415 nm, and that an accurate standard curve can be constructed to estimate the amount of active cholinesterase for a given absorbance value.  Using this information we were able to construct a way to estimate what the active cholinesterase concentration is after exposure to whatever was extracted from the samples, in this case Conventional and Organic brand raspberries.  We think that we see a normal amount of variation from sample to sample for this type of experiment.  Of interest was how close the results for Organic vs Conventional berries exhibit when tested using this method.  On average, the Conventional berries do show that there is slightly more cholinesterase inhibition, which is expected given that the product is marketed as being grown using organic methods.  Given that different price points at which these berries are sold at - typically there is a $1-$2/US markup for Organic, there was some surprise that the two different types of products so closely matched one another.  Its possible that this method may not be suitable for this type of fruit, so we plan to test different types of fruits going forward to determine if there is a reoccurring pattern of similar results.  Another possibility is that the growers are matching their methods more closely in the Conventional and Organic farms.  Given there are stricter guidelines for Organic farmers to grow food under, yet a larger price differential compared to Conventional, its possible that more farmers are converging to this methodology but may not yet have the certification to sell their product on the market as Organic.

A method for quickly evaluating organophosphate and carbamate pesticide contamination of raspberries using a cholinesterase inhibition assay was evaluated.  Of critical importance in conducting these experiments was the use of open-source equipment to collect data, specifically the colorimeter from IO Rodeo and the spectrometer from Public Labs.  Using these two different instruments in a complementary fashion, we envision being able to target certain types of spectrums and then trace these back to specific types of organophosphate and carbamate pesticides.  

####**References**

1.  Bees & Pesticides: Commission goes ahead with plan to better protect bees. 30 May 2013.Charlotte McDonald-Gibson (29 April 2013).
2.  "'Victory for bees' as European Union bans neonicotinoid pesticides blamed for destroying bee population". The Independent. 
3.  Timmer, John (21 October 2013). http://arstechnica.com/science/2013/10/an-insecticide-infection-connection-in-bee-colony-collapses/. 
4.  Lee Chao, S.; Casida, J. E. (1997). "Interaction of Imidacloprid Metabolites and Analogs with the Nicotinic Acetylcholine Receptor of Mouse Brain in Relation to Toxicity". Pesticide Biochemistry and Physiology 58: 77. doi:10.1006/pest.1997.2284.
5.  Yurumez Y, Durukan P, Yavuz Y, et al. Acute organophosphate poisoning in university hospital emergency room patients. Intern Med. 2007;46(13):965-9. [Medline].
6.  Fossi C, Leonzio C (1993).  Nondestructive Biomarkers in Vertebrates (47-48).
7.  Yamamoto, Izuru (1999). "Nicotine to Nicotinoids: 1962 to 1997". In Yamamoto, Izuru; Casida, John. Nicotinoid Insecticides and the Nicotinic Acetylcholine Receptor. Tokyo: Springer-Verlag. pp. 3–27. ISBN 443170213X.