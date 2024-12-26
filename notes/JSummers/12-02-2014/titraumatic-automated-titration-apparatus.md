---
title: "Titraumatic: An apparatus for automated pH titration."\ntagnames: 'response:9421, ph, titraumatic, titration'
author: JSummers
path: /notes/JSummers/12-02-2014/titraumatic-automated-titration-apparatus.md
nid: 11418
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/008/175/original/Titraumatic1b-11-30-14.png)

# Titraumatic: An apparatus for automated pH titration.

by [JSummers](../profile/JSummers) | December 02, 2014 01:49

December 02, 2014 01:49 | Tags: [response:9421](../tag/response:9421), [ph](../tag/ph), [titraumatic](../tag/titraumatic), [titration](../tag/titration)

----

###What I want to do
This research note documents our progress to interface a syringe pump with a pH meter.  This instrument should have a number of useful applications, like automating titrations, allowing you to adjust the pH of a buffer, and simplifying the process of monitoring the chemicals in a swimming pool.  I plan to use this as a demo in my freshman chemistry lectures on acid / base equilibria.  The idea being that I can  lecture about how pH of a solution containing a weak acid is affected by addition of base, and simultaneously have the instrument doing exactly what I am talking about and  projecting the experimental results onto a screen in real time. 
###My attempt and results
The main image for this research note shows a screen shot from a titration of a weighed sample of a weak acid (KHP potassium hydrogen phthalate) with sodium hydroxide solution. The base solution was added in 0.2 mL increments with 5 second delays between additions and the pH was measured every 200 ms during the delays.  As shown in the figure, the solution starts out mildly acidic (pH >4) and the pH increases slowly until close to the equivalence point of the titration.  At the equivalence point, the solution rapidly becomes very alkaline (pH > 13).  The inclusion of all the data points in the presentation is what gives the graph a somewhat discontinuous, vertical stripe look.  While inclusion of all the data was a mistake (I had meant to only graph the last point before each injection), it does give the viewer the impression of the time dependence of the measurement, ie, the need to allow the solution to reach equilibrium before recording the data point that you wish to graph. Anyway,this is a minor problem that I will fix the next time I have a some time to work the code.
The current iteration of our syringe pump was made using 3-d printed parts for the motor mount and the syringe mounts. An earlier version in wood was described [here](http://publiclab.org/notes/JSummers/10-08-2013/syringepump-2-3).  This version will be described in a future note, once we get some bugs worked out of the design. I should say here that designs and code for another 3d printed syringe pump recently were published by the Pearce group in the journal PLoS-one.  That paper is found [here](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0107216).   While the Pearce version of the syringe pump incorporates a Raspberry Pi, our pump was intended to be tethered to a PC by a usb cable.
Of course, the idea of interfacing a pump and a pH meter is not new.  In fact you can buy one from [here](http://www.agriculturesolutions.com/products/crop-soil-and-water-testing/titration-systems/total-acidity-mini-titrator-and-ph-meter-for-dairy-detail?gclid=Cj0KEQiAwPCjBRDZp9LWno3p7rEBEiQAGj3KJtqeKDJp3FDC1lAlikWmzEaWy8DwCFVBq6huThvxWrYaAtx58P8HAQ) or [here](http://www.sigmaaldrich.com/labware/labware-products.html?TablePage=20702410) for $840  or $930 USD.  The deal here is that we are doing it as an open-source project and we intend to get more information out of the experiment than just the endpoint of the titration.  I think you should be able to put it together for less than $150 or so.  Of course, you will need the [pH probe](http://www.vernier.com/products/sensors/ph-sensors/ph-bta/) (Vernier Instruments) that goes for about $80, and you need access to a 3d printer..  The shield for connecting to the pH probe is similar to that described [here](http://publiclab.org/notes/JSummers/09-23-2014/datalogger-part-2b-simpler-hardware-some-observations-about-ion-selective-electrodes-and-ram).  The only difference is that the current version runs off the 3.3 volt VCC connection on the LaunchPad rather than having a dedicated 5 volt power source for the probe.
 Code for this project is found [here](https://github.com/SmokyMountainScientific/Titraumatic1).  This includes Energia code for the Tiva C LaunchPad microcontroller board that runs the instrument as well as the user interface that was written using Processing.  The stepper motor is driven using an [EasyDriver](https://www.sparkfun.com/products/13226) board that we got from Sparkfun, even though cheaper models are [available](http://www.pololu.com/category/120/stepper-motor-drivers).
###Questions and next steps
We still have a bunch of little problems to work out.  One important thing I want to add is a switch on the pump that allows the user to initiate and stop a filling or dispensing motion without going to the computer.   This is necessary to keep the user from going through a box of gloves in an hour or potentially covering the computer keyboard with caustic alkali solution. It also allows you to have the computer physically removed from the wet-lab bench.  I have a few usb extension cords that allow me to connect a computer to instruments up to 25 feet away.
###Why I'm interested