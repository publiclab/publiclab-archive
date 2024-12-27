---
title: "Instrument Review: Inexpensive Digital Balances"

tagnames: ''
author: JSummers
path: /wiki/instrument-review-inexpensive-digital-balances.md
nid: 10199
uid: 304279
cids: 
---

# Instrument Review: Inexpensive Digital Balances

by [JSummers](/profile/JSummers)

March 18, 2014 19:22 | Tags: 

----

##Why?
Any time you want to measure something, you will likely need a reference sample containing a known quantity of the thing.  For example, if you want to quantify lead in water, you need to have samples with known amounts of lead that you can use to calibrate your instrument.  Frequently, preparing these samples requires you to accurately weigh out a small amount of the thing you are interested in.  The purpose of this wiki page is to review the performance of three low cost balances. 
I wrote this as a wiki so that others can contribute to the discussion.
###What we did:
When selecting a balance, important parameters are capacity, resolution, and tolerance.  The capacity is the maximum amount that you can weigh using the balance.  The resolution is the lowest number smallest number on the display and tolerance is the accuracy of the measurement.  Assuming that people want to weigh minimal amounts of sample and with the greatest precision possible.  Searching the Amazon web site for milligram balance brought up a bunch of hits.  We selected three balances with 20 g capacity and 0.001 g readability.  Two were from from one manufacturer (American Weigh Scale) while the third was from another (Smart Weigh).  Model numbers and prices are below:
     American Weigh Scales GPR-20   $54.99
     American Weigh Scales GEMINI-20   $23.51
     Smart Weigh JDS-20     $17.99  
We also purchased a set of calibration weights at the same time.
     American Weigh Scales Calibration Weight Kit WGHTKIT, Class M2, $10.79

To test the balances, we ran two series of experiments.  In the first set, we weighed each of the twelve calibration weights that fell between 20 g and 1 mg and recorded the displayed mass.  In the second set of experiments, we placed a 10 g weight on the balanced, tared the balance, and then weighed each of the eleven weight between 10 g and 1 mg without removing the 10 g weight (to illustrate, the figure below shows the measurement of the 1 g weight with the 10 g weight tared out).  
[![AWS-tare-meas.jpg](https://i.publiclab.org/system/images/photos/000/003/304/medium/AWS-tare-meas.jpg)](https://i.publiclab.org/system/images/photos/000/003/304/original/AWS-tare-meas.jpg)

###Results:
In our tests, both the GPR-20 and JDS-20 performed very well (The GEMINI-20 had not arrived at the time I began this page).  Typically, weighed values were within 3 or 4 mg of the expected mass.  The figure below shows the error in each measurement as a function of the weighed mass for the first experiment.

[![data1.png](https://i.publiclab.org/system/images/photos/000/003/305/medium/data1.png)](https://i.publiclab.org/system/images/photos/000/003/305/original/data1.png)

As shown in the figure, the GPR-20 performed somewhat better than the JDS-20, especially at the higher masses.  This is the sort of result one would expect given the relative costs of the instruments.  Still, the performance of the cheaper model was impressive.    
Results of the experiment with the 10 g weight tared out were similar to those for the above experiment, indicating no measurable loss of accuracy under this condition.
To test how much weight can be tared without loss of capacity, we loaded up the cheaper scale with calibration weights totaling 110 g, tared out the total mass, then measured the mass of calibration weights totaling 19 g.  As seen in the figure below, the measurement was accurate to 40 mg, or 0.2%:

[![tare_check.jpg](https://i.publiclab.org/system/images/photos/000/003/359/medium/tare_check.jpg)](https://i.publiclab.org/system/images/photos/000/003/359/original/tare_check.jpg)



###Conclusions:
These low cost balances performed well under the conditions of the test, reporting values within 5 mg of expectation.  The GPR-20 came with a nicer carrying case and had a larger, easier to read display.  They both came with two calibration weights and a pair of tweezers (throw the tweezers away and get a pair of curved sparkfun tweezers as shown in the photo toward the top of the wiki).  Three points where these balances show some weakness are their low capacity, the small size of their weighing chambers, and the questionable chemical compatibility of the plastic they are made from:
(1)  If you will need to weigh out samples in heavy glass vessels, these might not work.  From our tests, the mass of the vessel and any supporting stand can be at least up to 110 g without losing accuracy.  
(2) The plastic enclosures for the weighing surfaces on these balances are too small to close over a taller sample, or even the 10 g weight.  
(3)  While I did not test for this, I have my doubts whether the plastics used in these balances (specifically the transparent cover) will stand up to organic solvents used in labs.
Still, for most DIY, environmental or educational applications, these balances are probably going to do what you need them to, and will do it at a small fraction of the cost of a laboratory balance from a company like Mettler Toledo.  

  