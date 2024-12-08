---
title: Toward calibrating H2S sensors.
tagnames: hydrogen-sulfide-sensing, calibration, hydrogen-sulfide, h2s, h2s-calibration
author: JSummers
path: /notes/JSummers/11-20-2014/toward-calibrating-h2s-sensors.md
nid: 11372
uid: 304279

---

# Toward calibrating H2S sensors.

by [JSummers](../profile/JSummers) November 20, 2014 22:18

November 20, 2014 22:18 | Tags: [hydrogen-sulfide-sensing](../tag/hydrogen-sulfide-sensing), [calibration](../tag/calibration), [hydrogen-sulfide](../tag/hydrogen-sulfide), [h2s](../tag/h2s), [h2s-calibration](../tag/h2s-calibration)

###What I want to do
Up front, I want to make clear that we have not gotten down the road very far on this project, mostly because I haven't gone out and recruited anyone who is particularly interested in working with toxic gasses that smell really bad.  I have, however, given some thought to how you would do this without either killing yourself or making yourself severely unpopular with your colleagues, and I have started to put together the stuff necessary to do this.  This note is intended to allow someone who has the necessary background, access to a lab, and the interest to follow up.  While the protocol should allow one to safely work in a way that keeps the stuff confined, I strongly recommend running this type of experiment in a well functioning fume hood.  You been warned.
What I want to do is to put together a reliable protocol for testing and comparing different methods for measuring airborne hydrogen sulfide at concentrations that are relevant to air quality monitoring (well below 100 ppb).  There are at least three methods for measuring hydrogen sulfide described on the PL web site; the [test strip method](http://publiclab.org/notes/ewilder/06-16-2014/hydrogen-sulfide-photopaper-sensing-tool-development-notes), the [electronic sensor](http://publiclab.org/notes/warren/9-19-2011/prototype-h2s-sensor) method, and our indirect [voltammetric method](http://publiclab.org/notes/JSummers/03-10-2014/quantifying-airborne-hydrogen-sulfide).  Recently, kensanfran published a [Note](http://publiclab.org/notes/kensanfran/11-02-2014/smart-sensor-board-for-electrochemical-gas-sensors-intro) that discusses gas sensors from a company that sells a hydrogen sulfide sensor.
###My attempt and results
So my idea was to get a bucket with a screw on top and have a way to inject a known volume of gas that contains a known concentration of hydrogen sulfide.  You can get the five gal bucket with a screw top [here](http://www.ultimatepail.com/getdoc/b7f0cefa-6368-4a47-ab61-2a439640a86b/Life-Latch--Liquid-Container.aspx).  You can get liquid tight fittings [here](http://www.mcmaster.com/?error_redirect=true#cable-glands/=sw2u8f).  You can get gas cylinders containing different concentrations of H2S [here](http://www.grainger.com/search?searchQuery=gasco) (click on the link for "calibration gas".  You will also need a pressure regulator for the gas cylinder.  You can get that from Grainger but make sure you talk to someone from technical support to make sure you get the right one.
    The figure below shows the bucket, bottom side up with three hose connections and a power cord going in:

[![bucket3.jpg](https://i.publiclab.org/system/images/photos/000/008/025/medium/bucket3.jpg)](https://i.publiclab.org/system/images/photos/000/008/025/original/bucket3.jpg)
The power cord is used to run an aquarium pump to circulate the gas.  The pump takes air from inside the bucket and passes it out of the bucket through one of the hoses.  While you are running your experiment, the output hose is connected to the input hose and the gas from inside the bucket cycles back into the bucket.  When you are done with the experiment, simply unlink the two hoses and put the output from the pump into a bottle of bleach.  This pumps the contents of the bucket through the bleach, killing off the hydrogen sulfide.
The figure below shows that two of the connectors are attached to hoses and a third has a tube that is capped with a rubber serum septum.  The plan is to inject the gas mixture into the bucket through the septum.
[![DSCN0694.JPG](https://i.publiclab.org/system/images/photos/000/008/027/medium/DSCN0694.JPG)](https://i.publiclab.org/system/images/photos/000/008/027/original/DSCN0694.JPG)
Ok, so now the question is how concentrated should the H2S gas mixture be, and what volume of the mixture should you inject into the bucket.  The answer, of course, depends on what concentration of H2S you wish to measure.  OSHA set the [limits for exposure](https://www.osha.gov/SLTC/hydrogensulfide/standards.html) for construction workers in the US at 10 ppm. The gas mixtures that I have found range from 10 to 200 ppm and one, more concentrated one at 1% by volume.  Here are some calculations for injecting 60 mL (the biggest syringe I have) of the 1 % by volume mixture into the 5 gal bucket (check these if you want):
   density of pure H2S gas at STP (1 atm, 0 C):  
       34.09 (g H2S / mol) / 22.4 (L of gas / mol) = 1.5 g H2S / L of gas 
   density of N2 gas at STP:
       28.02 (g N2 / mol) / 22.4 (L/mol) = 1.25 g N2 / L.
   concentration of  H2S in 1% by volume converted to ppm:
      1.5 (g H2S / L H2S) * 1% = 0.015 (g H2S / L gas mixture)
      0.015 (g H2S / L gas mixture) / 1.25 (g N2/L) = 0.012 (g H2S / g gas mixture)
      = 12,000 ppm
    dilution of 10 mL gas mixture to 5 gal:
      5 gal * 3800 mL / gal = 19000 mL
     12,000 ppm H2S * 60 mL syringe /  19000 mL bucket =  38 ppm
OK, so the biggest syringe I have times the highest concentration available gets you to about four times the OSHA standard for worker exposure.  That seems like an ok range to be in.
##Safely sampling a concentrated H2S gas mixture
Ok, so here is the part where I have never gotten to (yet).  The issue is to get a known volume of gas at a known concentration.  To do this, set up the apparatus in the drawing below.  The use of the mineral oil bubbler keeps the pressure of the gas sample at very close to the atmospheric pressure and the system is contained.  As the gas exits the cylinder, it bubbles through the bubbler and then is passed into a bleach solution which should kill off the unused H2S.  The gas is sampled through a rubber serum septum using a syringe before it exits the bubbler.  Use a syinge with a luer lock so that there is no chance of the needle slipping off the syringe while removing the syringe from the apparatus.  Start with the plunger depressed and withdraw the plunger to introduce gas into the syringe.  Withdraw the plunger slow enough that you never get gas from the exterior flowing into the system through the bubbler.  Once you have the correct amount of gas in the syringe, remove it from the apparatus by pulling the needle back through the rubber septum and inject the gas into the septum that allows access to the 5 gallon bucket and inject the gas into the bucket.  Do not try this unless you understand all the steps.   

[![gasSamplingFigure.jpg](https://i.publiclab.org/system/images/photos/000/008/029/medium/gasSamplingFigure.jpg)](https://i.publiclab.org/system/images/photos/000/008/029/original/gasSamplingFigure.jpg)



###Questions and next steps

###Why I'm interested