---
title: "Klorauto - Automated Chlorination"\ntagnames: 'potentiostat, water, chlorine'
author: Markos
path: /notes/Markos/08-24-2015/klorauto-automated-chlorination.md
nid: 12164
uid: 46525

---

# Klorauto - Automated Chlorination

by [Markos](../profile/Markos) | August 24, 2015 15:26

August 24, 2015 15:26 | Tags: [potentiostat](../tag/potentiostat), [water](../tag/water), [chlorine](../tag/chlorine)

----

###What I want to do
I'm not an expert in chlorination, but I am just sharing some information from my survey. Trying to show how to use Free Software and Open Hardware (Arduino) to improve the use of chlorination in a more appropriate and controlled manner.

###Why I'm interested
For over 100 years, the chlorination of drinking water became the most used method of water disinfection, and “despite the negative side effects” is until today the most widely used form of disinfection in water treatment.

But nowadays, due to global water crisis, is growing the use of alternative sources (rainwater, wells, lakes, rivers or reservoirs) outside the conventional urban water supply systems, and the people use homemade methods of disinfection like boiling and/or chlorination.

A very important issue in any chlorination process is the monitoring of chlorine levels to ensure a minimum concentration for an effective disinfection but avoid high concentrations, harmful for consumption.

The ORP (Oxidation Reduction Potential), or REDOX potential, may be a “complementary” indicator for monitoring the “microbiological quality” of water. (http://www.sbcontrol.com/ppmorp.pdf)

I don't believe that chlorine is the best alternative for disinfection, but it is one of the most widespread and accessible way to controll waterborne diseases. So while it is still not feasible to replace it on a large scale, we intend, at least, help for it to be used in a more controlled way.

###My attempt and results
I decided to do some simple tests using just a multimeter (ICEL-MD-606 PRO) connected to the terminals of a commercial sensor ORP (SenTix ™) and making measurements with distilled water (no chlorine) and tap water (chlorine).

In distilled water (no chlorine), without agitation, the Meter displays readings in the range of 0,209V. But stirring the readings increase and stabilize around 0,304V.

But if I change from V to mV scale the readings begins to increase and apparently does not stabilize, reaching over 340.0 mV. But if you return to the V scale the readings fall to 0,225V.

To make a comparison with a commercial potentiometer I used the same ORP sensor with the Multi 340i from WTW (http://www.c2o.pro.br/automacao/figuras/Multi_340i.jpg) and the readings began at 270mV and rised until 314mV (no stabilization).

The readings in stirred solutions are always greater than in unstirred.

In tap water (with chlorine) the readings with the multimeter are in the range of 0,640V. 

Then I started to think about a home-made circuit to interface the sensor with an Arduino board to replace a commercial pot or a multimeter.

So I began  with the paper: J. Chem. Educ, "From Christmas Ornament to Glass Electrode". 1995, 1135-1136.

The proposed circuit in this paper is:
www.c2o.pro.br/hackaguas/figuras/potenciometro_00.png
 
The circuit has been proposed to be used with a pH electrode, but I plan to use with it a commercial electrode for ORP "SenTix" (ORP 103 648 -catalog: (www.wtw.de/fileadmin/upload/Kataloge/Labor/US/Lab_046_047_ORP_326-kb_US-pdf.pdf)

To check the operation of the opamp I mounted on the breadboard a follower voltage circuit with three different models of operational amplifiers (OP07, TL071 and CA3130), and applied a voltage of a battery (1.5V).

The TL071 and OP07 opamp worked fine but CA3130 showed strange behavior. I don't know if it is due a defect or CA3130 is a feature of this opamp model.

The next step will be to test the voltage follower circuit with a commercial sensor ORP "SenTix". 

Another issue to solve will be the calibration with standards of chlorine solutions. But it's troublesome to prepare chlorine solutions with known concentration (with accuracy). Chlorine solutions are unstable and need to be recalibrated daily.

The bleach is an affordable source of chlorine (as sodium hypochlorite), but it is very unstable and decompose with time. I think that an alternative "home-made" would be to use the calcium hypochlorite which is sold as a solid in 65-70% of active chlorine for swimming pools treatment.
