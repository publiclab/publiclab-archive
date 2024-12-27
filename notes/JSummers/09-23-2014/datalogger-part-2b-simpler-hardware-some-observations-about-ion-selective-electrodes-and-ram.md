---
title: "Datalogger part 2b, simpler hardware, some observations about ion selective electrodes, and RAM."

tagnames: 'datalogger, response:10288, data-logging'
author: JSummers
path: /notes/JSummers/09-23-2014/datalogger-part-2b-simpler-hardware-some-observations-about-ion-selective-electrodes-and-ram.md
nid: 11177
uid: 304279

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/006/987/original/EagleBoardDataLogger4.png)

# Datalogger part 2b, simpler hardware, some observations about ion selective electrodes, and RAM.

by [JSummers](../../../profile/JSummers) | September 23, 2014 20:30

September 23, 2014 20:30 | Tags: [datalogger](../tag/datalogger), [response:10288](../tag/response:10288), [data-logging](../tag/data-logging)

----

###What I want to do
This note follows up on an earlier note found [here](http://publiclab.org/notes/JSummers/04-09-2014/datalogger-part-2-hardware-design).  In the earlier note, I presented a design for a datalogger that I hoped would be compatible with analog probes sold by Vernier instruments.  Specifically, I had hoped to interface the Vernier pH probe with a computer by building an amplifying shield for my microcontroller board of choice, the TI launchpad.  Put simply, the earlier design failed to work, and it failed to work because I had not done my homework on the Vernier design.  
###My attempt and results
I got back into this after a colleague expressed an interest in logging data for streams.  He told me that he wanted to record two temperatures and pH, so I knocked out the design shown in the main image of this report.  The temperature measurements will be made using thermistors attached by wires to THM1 and THM2.  These thermistors form a voltage divide between vcc and ground and the voltage is measured at an analog read pin.  Pretty simple stuff.  It works well, but it probably should be re-engineered to minimize power consumption before putting it out in the woods.
##pH measurement
Anyway, the pH measurement was what had given me trouble before. While I had assumed that Vernier pH probes were simply passive electrodes, this was not the case.  The Vernier [user's manual](http://www2.vernier.com/booklets/ph-bta.pdf) for these probes explains that the output is amplified and shifted relative to what you would get from a passive electrode.  So, clearly this has an amplifier in the probe, and it will need a voltage source and ground to function properly.  Originally, I hooked the power source to the 3.3 volts from the LaunchPad and got no signal.  A google search turned up a description of one of these electrodes interfaced with an Arduino ([here](http://forum.arduino.cc/index.php/topic,96070.0.html )) using a very similar connection scheme.  Jumping the voltage input to the 5 volt connection on my microcontroller board failed to fix the issue.  According to the pin-out diagram for the Vernier BTA connections ([here](http://www.vernier.com/support/sensor-pinouts/)) they have two pins that they use for outputs from their probes.  Not knowing which to use, I had wired them together.  Turns out that one of them is shorted to ground in the pH probe, leading to the issue described above.  Once I had the pins connected correctly, the pH probe started giving me reasonable data.  The figure below shows that the data output correlated well with that expected when the electrode was immersed in buffers of known pH.
[![pHCalibration.png](https://i.publiclab.org/system/images/photos/000/006/988/medium/pHCalibration.png)](https://i.publiclab.org/system/images/photos/000/006/988/original/pHCalibration.png)
##Ion selective electrodes
The next question I had was whether the board would work well with ion selective electrodes.  I have never before worked with ion selective electrodes and had always assumed that they behaved similarly to standard pH electrodes.  The short answer is that they do, but that they take some time to come to equilibrium.  The first thing that you need to know is that the manufacturer suggests the electrodes _not_ be stored in contact with solution.  They are supposed to be suspended in a bottle with controlled humidity.  That keeps the ion-permiable membrane from fouling, I guess.  Prior to use, you are supposed to soak the electrode in a standard solution of the ion in question for 30 min, and then it takes some time to get a stable reading.  The panel on the left in the figure below shows the response of an ammonium selective electrode upon being transferred to a dilute ammonium solution.  As you can see, it takes several minutes to stabilize.  Notice the spiky, discontinuous region.  I think I will give the electrode the benefit of the doubt and say that it is probably due to poor soldering on the board, but it dont look good.  Once you do get stable data, the values come out fairly linear (right hand panel).  While there is some pronounced curvature, I expect that arose from systematic error in preparing the standard solutions (worn out O-rings on a pipettor will do that). 
[![NH4SelElect.png](https://i.publiclab.org/system/images/photos/000/006/989/medium/NH4SelElect.png)](https://i.publiclab.org/system/images/photos/000/006/989/original/NH4SelElect.png)
So, my take on ion selective electrodes:  They are more than twice the cost of the pH electrodes, the time lag necessary to get a good measurement is kind of annoying, the membranes are supposed to be replaced periodically, and you are not supposed to leave them in the stream collecting data (I suspect they will get fouled with algae).  Not my favorite technique.  
##How much data fits in RAM?
OK, so the guy I work with wants to leave this out in the field collecting data and come by every once in a while to retrieve the results.  The question now becomes how to store the data.  Can we keep it in volatile memory, or do we need an SD card or other form of external memory?  So that brings up the issue of RAM (where the microcontroller can store data in memory).  The Tiva LaunchPads have 32 KB of RAM (for comparison, the Arduino Uno has 2 kB).  So what does that mean in terms of how much data can be acquired?  I wrote a little sketch to figure out the practical limits and found that the LaunchPad can hold between 3000 and 4000 pairs of integers in memory.  Thus, if two data are acquired every 10 min, the instrument could collect for at least 20 days without running out of memory.
NOTE ADDED JANUARY 2015:  I just put the Energia source code for this datalogger online.  You can get it from[ here](https://github.com/SmokyMountainScientific/EnvDataLogger1).


###Questions and next steps
I think the next steps involve battery power and waterproofing.  I think that once we demonstrate that it will run on its own and that we can leave it and come by later to retrieve the data, my part in this is about over.
Oh, and I also plan to help with the user interface.
One question; Are there applications that have a need for amplification?  It would be pretty straight forward to put an amplifier in the design, but the current pH measurement is precise to ~0.003 pH units and I don't think the measurement needs amplification.
