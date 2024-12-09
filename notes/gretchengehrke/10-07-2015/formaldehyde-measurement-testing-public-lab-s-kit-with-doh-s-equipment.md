---
title: 'Formaldehyde Measurement: testing Public Lab's kit with DOH's equipment'
tagnames: air-quality, blog, formaldehyde, wherewebreathe, open-air, with:nshapiro, indoor-air-quality, colocation, category:test-limits
author: gretchengehrke
path: /notes/gretchengehrke/10-07-2015/formaldehyde-measurement-testing-public-lab-s-kit-with-doh-s-equipment.md
nid: 12278
uid: 430549

---

![](https://publiclab.org/public/system/images/photos/000/011/850/original/Formaldehyde_Kit_Sept2015.jpeg)

# Formaldehyde Measurement: testing Public Lab's kit with DOH's equipment

by [gretchengehrke](../profile/gretchengehrke) October 07, 2015 16:54

October 07, 2015 16:54 | Tags: [air-quality](../tag/air-quality), [blog](../tag/blog), [formaldehyde](../tag/formaldehyde), [wherewebreathe](../tag/wherewebreathe), [open-air](../tag/open-air), [with:nshapiro](../tag/with:nshapiro), [indoor-air-quality](../tag/indoor-air-quality), [colocation](../tag/colocation), [category:test-limits](../tag/category:test-limits)

----

##Motivation and Background 

Formaldehyde is one of the most common indoor air pollutants, and is a known respiratory irritant and carcinogen (for more information on formaldehyde exposure see the wiki [here](http://publiclab.org/wiki/formaldehyde-exposure)).  Meta- and paraformaldehyde are often used in industrial resins for materials like particleboard that are pervasive in many homes.  Formaldehyde can offgas from these materials and be an airborne indoor toxicant.  While formaldehyde is a known indoor contaminant, information is severely lacking on the concentrations of airborne formaldehyde people are exposed to in their homes. 

This experiment is part of the larger [Where We Breathe](http://publiclab.org/wiki/indoor-air-quality-monitoring) project of Public Lab in which we have been working on a way to make formaldehyde testing affordable so that people can measure formaldehyde in their own homes, build information about common exposure levels, and collect further information about ways to mitigate formaldehyde exposure and resultant health effects.  You can see all of the Public Lab research notes about formaldehyde [here](http://publiclab.org/tag/formaldehyde). We began by [building a prototype lower-cost version](http://publiclab.org/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit) (by @nshapiro) of the most inexpensive formaldehyde detection method we found in a [peer-reviewed publication](http://www.ncbi.nlm.nih.gov/pubmed/23278296), which is also one that does not require sending samples to a lab for analysis (which perpetuates hidden expertise and increases opportunities for sample contamination). @mathew and the kits team then began developing two versions of the kit: one sturdy kit that is calibrated and built into a case for dropping in the mail and [sharing](http://publiclab.org/notes/mathew/06-25-2015/borrowing-a-formaldehyde-kit-take-1) across a variety of communities, and one DIY kit that is even [less expensive than our original prototype](http://publiclab.org/notes/mathew/07-10-2015/my-diy-formaldehyde-test-kit) by using [a DIY bubble flow meter](http://publiclab.org/notes/mathew/06-11-2015/mini-buck-vs-the-bubbles) to calibrate airflow.  All of our test kits involve have hacking an inexpensive aquarium pump to replace expensive industrial pumps that draw air through detection tubes, lowering the cost of a sampling assembly by ~$2000.  There are inexpensive commercially available colorimetric formaldehyde detection tubes ([Kitagawa 710 tubes](http://publiclab.org/wiki/indoor-air-quality-monitoring), ~$7 per tube), that measure formaldehyde through a color-change reaction between formaldehyde and hydroxylamine phosphate in the tube.  The [manufacturer’s information sheet](http://www.komyokk.co.jp/pdata/tpdf/710_1.pdf) states the tubes are precise to 10%, though interestingly, it makes no claims of the tubes’ accuracy.  Since the reaction inside the tubes with hydroxylamine is not selective for formaldehyde, other ketones and aldehydes will have a similar reaction.  Acetone and acetaldehyde are potential co-contaminants that could thus interfere with the measurement of formaldehyde, causing erroneously high formaldehyde concentration readings.  


##Experiment

In order to assess the accuracy of our formaldehyde detection kit (including the modified aquarium pump and Kitagawa 710 tubes), we co-located our equipment with federally accepted equipment of the Department of Health in Rhode Island, which included 2,4-dinitrophenylhydrazine (DNPH) -coated silica gel cartridges and followed the EPA federal reference method TO-11A for sampling and analysis.  Analysis of the DNPH tubes by UV-HPLC provides quantitative data regarding the concentrations of formaldehyde, acetaldehyde, and acetone in the air sampled.  The Rhode Island DOH donated 10 cartridges for us to use in our comparison tests. 

With 10 DNPH cartridges, we were able to test both accuracy and precision of our formaldehyde kit by collecting three samples in each of three different homes (plus a fourth sample in one home).  We set up both instruments at approximately 3 ft above the floor on various pieces of furniture.  Prior to going into the field, we calibrated each instrument to the appropriate flow rate, which was 300 mL/min for our Public Lab formaldehyde kit and 1L/min for the DOH assembly.  In the homes, we set up the DNPH cartridge and Kitagawa tube in quick succession to minimize exposure to the air prior to official sampling.  We simultaneously turned on the pump for each instrument and recorded the time.  After either 30 minutes or 10 minutes, depending on the appearance of the Kitagawa tube, we turned off the pumps, capped and stored the DNPH cartridge, recorded the temperature and relative humidity, read the formaldehyde concentration on the Kitagawa tube, made the appropriate temperature corrections, and photographed the Kitagawa tube and its documentation sheet.  All tubes and samples were stored in a cooler on ice.  After the first round of samples (one using the Public Lab kit and a simultaneous one using the DOH instrument) were complete and recorded, we set up the second samples within 20 minutes, and third samples in similar fashion. 

We tested three homes with laminate flooring, where the age of the flooring ranged from 1 to 4+ years.  The houses are listed as Site 1, Site 2, and Site 3; the sample rounds are listed as A, B, and C.  At Site 2, sample A was above the maximum concentration detectable by the Public Lab kit, which is why that data point is not included in the graphs of the data below, and is listed simply as >95 ppb in the table below.  At Site 1, all three samples were collected in a bedroom with a closed door.  At Site 2, samples A, B, C were collected in an open living room and sample D was collected in an upstairs bedroom that was open to the atrium/living room.  At Site 3, samples were collected in a large basement.  Public Lab kit field blanks were also collected and were below the quantification limit.  


## Results
 
The data collected is listed in the table below.  All concentrations are listed in parts per billion (ppb), which can be converted to μg/m3 by multiplying by the molecular mass and dividing by molar volume of the molecule (i.e. formaldehyde).  Note that the column labeled “% Error” is the percent difference the Public Lab formaldehyde kit measurement is above the DOH cartridge measurement value for formaldehyde.  The accuracy of the Public Lab formaldehyde kit measurements was not as good as we had hoped, with errors ranging from 20 to 70%.  The highest errors (59-70%) were in a house where there was an abnormally high concentration of co-contaminants, but even when co-contaminants were in a more “reasonable” range, the Public Lab kit had errors from 21 to 46%.  The reproducibility of measurements at any given site is quite good, however: the relative standard deviations were less than 7% at each site.  This may indicate that the Public Lab formaldehyde kit could be useful as a qualitative tool monitoring formaldehyde concentration trends at a given site, with a given air chemistry (e.g. co-contaminant load).  This bodes well for use alongside the [formaldehyde plant-based remediation kit](http://publiclab.org/wiki/diy-indoor-air-quality-remediation-kit), to estimate the effectiveness of the remediation effort. 


Graphs of the data are below the table.  It appears as though there is a strong linear correlation (y = 1.87x - 27.05; R2 = 0.99) between the Public Lab formaldehyde measurement and the DOH formaldehyde measurement, even though the percent errors are high.  Interestingly, there do not appear to be correlations between the % error and the concentration of acetone or acetaldehyde (or their sum).  

Questions arise from this exercise, including: 

(1)  Is this apparent correlation between the Public Lab and DOH formaldehyde measurements real, or due to an artificially weighted regression from the high (>100 ppb) formaldehyde concentrations?  How many co-located samples would we need to build a robust empirical correlation? 

(2)  Is it possible to quantify the effect of acetone or acetaldehyde on formaldehyde detection in the Kitagawa tube?  Without distinct measurements of acetone or acetaldehyde, we would be setting up a situation with equal numbers of variables and unknowns, so the equation would have infinite solutions, but could we present basic ranges that would be realistic for each variable? 

(3)  Are the % Errors perhaps correlated with the width of the Kitagawa tube opening, which is unique to each tube because we have to score and break it, so there is user error and variability.  I’m going to borrow a caliper to measure the tube openings and will report back if there is a correlation.  The flow rate did not appreciably change between tubes with different size openings though. 

(4)  Where do we go from here?  Can we use these tubes to gather quantitative data, or are we relegated to qualitative data (which can also be very useful)? 

We appreciate any and all thoughts and ideas! 

|        |      | Public Lab   | DOH          |              | DOH          | DOH     |
|--------|------|--------------|--------------|--------------|--------------|---------|
| Sample | Site | Formaldehyde | Formaldehyde | %Error       | Acetaldehyde | Acetone |
|        |      | ppb          | ppb          | (PL-DOH)/DOH | ppb          | ppb     |
| PL1A   | 1    | 58           | 43.2         | 34%          | 15.2         | 48.8    |
| PL1B   | 1    | 56           | 43.2         | 30%          | 14.1         | 49.2    |
| PL1C   | 1    | 51           | 42.1         | 21%          | 13.5         | 52.2    |
| PL2A   | 2    | >95          | 115.8        | xx           | 50.2         | 903.6   |
| PL2B   | 2    | 192          | 115.6        | 66%          | 53.8         | 901.8   |
| PL2C   | 2    | 192          | 121.0        | 59%          | 52.6         | 905.3   |
| PL2D   | 2    | 176          | 103.2        | 70%          | 52.3         | 924.5   |
| PL3A   | 3    | 95           | 64.9         | 46%          | 37.0         | 50.2    |
| PL3B   | 3    | 92           | 67.1         | 37%          | 40.4         | 61.2    |
| PL3C   | 3    | 92           | 67.9         | 36%          | 40.3         | 61.1    |



<a href="https://i.publiclab.org/system/images/photos/000/011/817/original/undefined"><i class="icon icon-file"></i> undefined</a>


<a href="https://i.publiclab.org/system/images/photos/000/011/819/original/undefined"><i class="icon icon-file"></i> undefined</a>
