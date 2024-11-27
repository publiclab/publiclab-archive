---
nid: 10120
title: Molar Absorptivity Coefficient of Enzyme-Substrate Complex in Pesticide Detection Assay
path: public/static/notes/silverhammer/03-06-2014/molar-absorptivity-coefficient-of-enzyme-substrate-complex-in-pesticide-detection-assay.md
uid: 420530
tagnames: spectrometer,pesticides,raspberries
---

# Molar Absorptivity Coefficient of Enzyme-Substrate Complex in Pesticide Detection Assay

##**Purpose:**
Estimate the Molar Absorptivity Coefficient (e) of the enzyme-substrate (E-S) complex of the pesticide detection (cholinesterase inhibition) assay used for testing organic and conventional raspberries (1).  This is an important metric for baselining the method.  For a given absorbance measurement, this coefficient can be used to estimate the amount of active (bound) enzyme in the assay.  This is directly proportional to the amount of inhibited enzyme.

##**Procedure:**
Generate a serial dilution of the control solution used in the methods described elsewhere(1).  Organic raspberries were used as well as the assay kit from RenekaBio (part# 003RT).  Using the following schedule (fig.1) and measure the absorbance of each dilution at each step of the dilution:


[![Screen_Shot_2014-03-02_at_9.35.21_PM.png](https://i.publiclab.org/system/images/photos/000/003/115/medium/Screen_Shot_2014-03-02_at_9.35.21_PM.png)](https://i.publiclab.org/system/images/photos/000/003/115/original/Screen_Shot_2014-03-02_at_9.35.21_PM.png)

_fig.1 serial dilution schedule_

##**Results:**
Observed that the there is a small amount of measurable absorbance in the substrate (Solution 2) at high concentrations in figure 2.  There there is no measurable absorbance when the substrate is mixed with Cholinesterase.  Once the mixture of substrate and enzyme is buffered with Solution 3 (sodium acetate) and the pH is stabilized, there is a measurable absorbance for mixtures that are at least 25% stock solution (Solution 1 + 2 + 3 + 5min incubation).  Figure 3 show that there we can extract a Molar Absorptivity Coefficient from the region between 25% to 100% stock solution.


[![Screen_Shot_2014-03-06_at_7.50.22_AM.png](https://i.publiclab.org/system/images/photos/000/003/159/medium/Screen_Shot_2014-03-06_at_7.50.22_AM.png)](https://i.publiclab.org/system/images/photos/000/003/159/original/Screen_Shot_2014-03-06_at_7.50.22_AM.png)



_fig 2. serial dilution results_




[![Screen_Shot_2014-03-06_at_8.00.01_AM.png](https://i.publiclab.org/system/images/photos/000/003/161/medium/Screen_Shot_2014-03-06_at_8.00.01_AM.png)](https://i.publiclab.org/system/images/photos/000/003/161/original/Screen_Shot_2014-03-06_at_8.00.01_AM.png)





_fig 3.  absorbance for various dilutions of the assay at various stages of preparation._

Figure 4 shows how the Molar Absorptivity Coefficient is calculated for stock dilutions between 25% to 100% (the dilutions were converted to Cholinesterase concentration (M)).  Based on the following formula:

**A = e*c*l**

_Where A = Absorbance @ 415nm, e = Molar Absorptivity Coefficient (M-1 cm-1), c = concentration (M), l = pathlength (1 cm for cuvettes used)._

**Molar Absorptivity Coefficient (e) = A/cl = 3180/M*cm**



[![Screen_Shot_2014-05-21_at_7.57.22_AM.png](https://i.publiclab.org/system/images/photos/000/004/349/medium/Screen_Shot_2014-05-21_at_7.57.22_AM.png)](https://i.publiclab.org/system/images/photos/000/004/349/original/Screen_Shot_2014-05-21_at_7.57.22_AM.png)



_fig 4.  absorbance for 25% to 100% stock dilutions, converted to M for Molar Absorptivity Coefficient calculations._

##**Conclusion:**
The assay appears to be very sensitive to pH, which is expected for any type of biochemical system.  As we were not able to measure the absorbance of substrate or substrate + enzyme, its clear that enzyme will not start to convert substrate and form the enzyme-substrate complex until the system has a buffer in place to stabilize the pH.  For the above calculations, we are assuming a 1-to-1 conversion between substrate & enzyme.  

##**References:**
1.  Maxwell, Steven (Feb, 2013). http://publiclab.org/notes/silverhammer/02-06-2014/detecting-pesticides-in-organic-and-conventional-raspberries-using-open-source-instrumentationbee-colony-collapses/. 