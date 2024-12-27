---
title: "Quantifying Airborne Hydrogen Sulfide"

tagnames: 'hydrogen-sulfide-sensing, calibration, hydrogen-sulfide, h2s, wheestat, h2s-detection-method, h2s-potentiometry, potentiometer, potentiometry'
author: JSummers
path: /notes/JSummers/03-10-2014/quantifying-airborne-hydrogen-sulfide.md
nid: 10152
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/003/203/original/data_analyzed.png)

# Quantifying Airborne Hydrogen Sulfide

by [JSummers](../../../profile/JSummers) | March 10, 2014 20:49

March 10, 2014 20:49 | Tags: [hydrogen-sulfide-sensing](../tag/hydrogen-sulfide-sensing), [calibration](../tag/calibration), [hydrogen-sulfide](../tag/hydrogen-sulfide), [h2s](../tag/h2s), [wheestat](../tag/wheestat), [h2s-detection-method](../tag/h2s-detection-method), [h2s-potentiometry](../tag/h2s-potentiometry), [potentiometer](../tag/potentiometer), [potentiometry](../tag/potentiometry)

----

###Authors
Jack Summers, Alexandra Shuey and Taylor Royalty
###What I want to do
The goal of our project was to develop a low cost / non-toxic method for accurately measuring concentrations of airborne hydrogen sulfide.  We want the method to be appropriate for use by community activists, DIYers and Maker communities.
###Background
When I first heard that Public Lab was interested in quantifying airborne hydrogen sulfide, I thought that this might be a good project for our lab since we were working on a potentiostat at the time and I hypothesized that it should be possible to quantify H2S by measuring its affect on an electrochemcially active metal ion.  A quick library search showed that aqueous copper(II) reacts with hydrogen sulfide to give insoluble CuS.  The idea here was originally that the H2S was going to cause the copper to precipitate and that would result in a diminished peak for copper reduction.  Reduction means the copper would pick up an electron to give a lower positive charge:
        Cu2+   + e-    ->  Cu1+
 The opposite reaction is called oxidation (where the Cu1+ loses an electron, becoming Cu2+).  
###My attempt and results
The experiment described here uses a DIY potentiostat similar to the WheeStat that we described earlier (link to [here](http://publiclab.org/notes/JSummers/11-02-2013/potentiostat-notes-1-wheestat-history)) and electrodes described here.  We attempted to study this chemistry using a technique called Anodic Stripping Voltammetry (ASV, discussed [here](http://www.basinc.com/mans/EC_epsilon/Techniques/Stripping/stripping.html) and [here](http://www.asaanalytics.com/asv.php)).  In ASV, the copper is analyzed by a two step process.  In the first step, the working electrode is held at a slightly negative voltage where the Cu2+ is reduced to Cu1+.  At neutral to mildly alkaline pH (and in the absence of H2S), the Cu1+ precipitates on the electrode as Cu2O (s).  This concentrates the sample where it can later be analyzed.  The analysis is done by ramping the voltage of the electrode positive, to a voltage where the Cu2O is oxidized back to soluble Cu2+.  When the voltage gets close to a characteristic value, an electrical current flows through the electrode and is used to quantify the copper.  The figure below shows data for analysis of copper by this method.

[![Cu2O.png](https://i.publiclab.org/system/images/photos/000/003/193/medium/Cu2O.png)](https://i.publiclab.org/system/images/photos/000/003/193/original/Cu2O.png)
Quick note:  the current axis has been inverted from the negative values that come out of the experiment, and the voltage axis has negative values on the left instead of on the right as is the custom in electrochemistry. There is no reason for these things, they just happened and I have been too busy to fix them.  Anyway, the figure above illustrates how we analyzed the data for this type of experiment.  The original data, represented by the filled diamonds is significantly offset from the baseline (zero on the y-axis).  We modeled the baseline (green line) using the non-peak data points from forty scans and assumed it behaved like a second order polynomial.  As you can see, there is some curvature to the line but it is not horrific.  Baseline values were subtracted and the corrected data are represented by the open diamonds in the figure.  This corrected data was modeled using  Equation (1) to give the solid red fitted line; 
        current = A(exp((E - E')s)/(1 + exp((E-E')s)^2                   (1)
In this equation, A is a parameter that determines the overall height of the peak, E is the x coordinate, E' is a characteristic voltage that defines the center of the peak, and s is a parameter that determines the peak width.  The concentration of copper is proportional to the area under the curve.  While the peak area is also influenced by experimental parameters such as the time used in the pre-concentration step and stirring efficiency, keeping these parameters constant should allow copper quantitation by comparing peak areas.  Integration of Equation (1) by the Walking method (walking down the hall and asking a math professor) gave the area under the curve as Equation (2):
          Area = A / s                                              (2)
Values of the A and s parameters were refined by minimizing the sums of the squares of the differences between the calculated and observed currents in Excel using Solver (we have since written a MatLab routine to avoid getting carpel freakin tunnel syndrome). 
So anyway, that is how we model the data to get peak areas.  The question now becomes "what happens when we add hydrogen sulfide?"  To answer this question, we made a stock alkaline solution of aqueous hydrogen sulfide by hydrolysis of thioacetamide (CH3C(S)NH2).  In alkaline solution, thioacetamide reacts according to Equation (3):
         CH3C(S)NH2  +  2 OH-    ->  HS-  +  NH3  + CH3CO2-              (3)
To generate airborne H2S, we used a syringe pump to inject an aliquot of this solution into a vessel containing excess sulfuric acid.  In the acidic medium, HS- anion is protonated, giving neutral H2S, which escapes solution.  The H2S gas is borne along a stream of air from an aquarium pump and is bubbled through the Cu2+ test solution (see figure below).  After the test solution, the air stream is bubbled through a bleach column to destroy any unreacted H2S.

[![H2S_cartoon.png](https://i.publiclab.org/system/images/photos/000/003/201/medium/H2S_cartoon.png)](https://i.publiclab.org/system/images/photos/000/003/201/original/H2S_cartoon.png)

This experiment used an automated data logging mode to acquire forty voltammagrams at 10 min intervals as the HS- solution was slowly infused into the H2SO4 solution. As the H2S is added, the appearance of subsequent voltammagrams changes dramatically, showing loss of the original Cu2O peak, and the appearance of another peak that we believe to be due to Cu2S.  The figure below shows representative voltammetry data where both the oxide and sulfide peaks are observed.  

[![mixed_Cu2O_Cu2S.png](https://i.publiclab.org/system/images/photos/000/003/204/medium/mixed_Cu2O_Cu2S.png)](https://i.publiclab.org/system/images/photos/000/003/204/original/mixed_Cu2O_Cu2S.png)
Data from the above voltammagram were analyzed in the same way as described above, using least squares refinement to give separate A, E' and s values for the two peaks.  In this figure, the peak at the more negative voltage (in blue) is believed to be that of Cu2O, the red peak is due to Cu2S, and the black line represents the sum of the two modeled peaks.   Areas were calculated for the Cu2O and Cu2S peaks using Equation (2) for each of the forty voltammagrams generated in this experiment.
Overlayed data for the last 33 voltammagrams in this experiment are presented as the Main Image of this research note.  In this experiment, the combined areas of the Cu2O and Cu2S peaks for a given voltammagram remained constant (within the limits of the measurement), indicating that CuS precipitation was not appreciable.  Instead, our results are consistent with a soluble copper(II) sulfide species being formed and that this species was reduced to give the insoluble material that we subsequently analyzed.  One possible scheme is presented in Equations (4 and 5):
           2 Cu2+  +  H2S   ->  Cu2S2+  + 2 H+                   (4)
            Cu2S2+  +  2 e-   ->  Cu2S (s)                              (5)
Our results support the use of this method for measuring airborne H2S.  The method is simple and inexpensive.  Once the system is properly characterized, there will be no further need for HS- and H2SO4 solutions.  The important parameters will be: concentration of copper, the volume of the analysis solution and the flow rate of your aquarium pump.  The concentration of H2S in the air will be proportional to the rate at which the Cu2O peak is replaced by the Cu2S peak.
###Questions and next steps
We have had significant difficulty reproducibly quantifying our hydrogen sulfide.  The evidence suggests that we do not have good control over H2S production.  I believe that this is primarily due to poor anaerobic technique (more accurately, poor teaching of anaerobic technique) leading to oxidation during preparation and storage of the alkaline HS- solution.  Until we have this under control, we really can't establish a limit of detection.   We have to get this problem beat, then purty-up our figures and get this stuff published.  
I also MUST get our most recent potentiostat software on our GitHub site.
###Why I'm interested
It is what I do.
###Previous Research Notes:
WheeStat history link [here](http://publiclab.org/notes/JSummers/11-02-2013/potentiostat-notes-1-wheestat-history)
Electrode fabrication link [here](http://publiclab.org/notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes)
Software discussed [here](http://publiclab.org/notes/JSummers/12-20-2013/potentiostat-software) and expanded on [here](http://publiclab.org/notes/JSummers/01-04-2014/potentiostat-notes-3a-timing-de-bugged)
WheeStat fabrication notes are [here](http://publiclab.org/notes/JSummers/12-30-2013/potentiostat-notes-3-wheestat-5-1-fabrication)
###References:
Bertocci, U., Turner, D. R., Encyclopedia of Electrochemistry of the Elements Vol. 2, Bard, A. J., edn., Marcel Dekker, New York, (1974) 
Lehrman, L., Schneider, P., Thioacetamide as a source of hydrogen sulfide in qualitative analysis.  J. Chem. Ed., 1955, 474.
Smith, J., Qin,  Z., King, F. . Werme , L., Shoesmith, D. W. The Electrochemistry of Copper in Aqueous Sulphide Solutions. MRS Proceedings, 2006, 932, 25.1 doi:10.1557/PROC-932-25.1.