---
title: "Valve automation for laboratory liquid handeling"\ntagnames: '3d-printing, syringe, pump, response:11500'
author: JSummers
path: /notes/JSummers/01-12-2015/valve-automation-for-laboratory-liquid-handeling.md
nid: 11519
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/008/590/original/valve1.jpg)

# Valve automation for laboratory liquid handeling

by [JSummers](../profile/JSummers) | January 12, 2015 22:52

January 12, 2015 22:52 | Tags: [3d-printing](../tag/3d-printing), [syringe](../tag/syringe), [pump](../tag/pump), [response:11500](../tag/response:11500)

----

###What I want to do
Eventually, I want to automate all kinds of lab processes.  To do that you not only have to be able to pump liquids from point A  to point B, you also need to be able to specify  what path you want the liquid to take.  The specific use for this little valve is to allow the syringe pump described earlier to withdraw from one tube, then inject into another. That way you can move a lot more sample than your syringe pump can handle in one injection.  I also want to control the valve using the same electronics and software as the syringe pump.  This will be useful for things like making buffers.  You know what a pain in the ass that is.  You add a little base and the pH goes shooting up but then slowly comes back down and you have to add more and the pH goes up again and slowly comes down ... Why spend an afternoon screwing around with your buffer when you can automate the process?  And you don't want to walk away from it and come back later to find that the syringe is empty and the buffer is still not at the required pH.  
###My attempt and results
Ok, so that is enough ranting.  This wasn't too bad a little project.  It only has four mechanical parts and some electronic control stuff. Mechanical parts are:
    Valve,  Hamilton part number 86728, $78, found [here](http://www.hamiltoncompany.com/products/valves/c/51/).
    Servo:   from [Servo CIty](https://www.servocity.com/html/hitec_servos.html), part HS-322HD, $10
    Coupler:  also from Servo City, link [here](https://www.servocity.com/html/servo_to_shaft_couplers.html#.VLRCgdLF8uc), item HSA-156, $12.99.
    Mounting:  3d printed in PLA.  
Yeah, I know the valve is ridiculously expensive.  Wait til you see the price on the 8 port distribution valve.  I printed about a half dozen mountings before I got one where I had the alignment right.  Let me know if you want the STL files. The parts are shown in the figure below:
[![Parts1.jpg](https://i.publiclab.org/system/images/photos/000/008/591/medium/Parts1.jpg)](https://i.publiclab.org/system/images/photos/000/008/591/original/Parts1.jpg)
In this figure, the coupling is already on the servo motor.  I am not really crazy about the coupling.  It takes a lot of force on the screw to tighten down on the valve stem, and the connection to the motor involves these little plastic gears so there is not a lot of room for error.  Also, you can't put the coupling on the valve first because there is a little screw inside the coupling that holds it to the motor.  
the photo below shows the valve attached to the mount.  
[![build1.jpg](https://i.publiclab.org/system/images/photos/000/008/592/medium/build1.jpg)](https://i.publiclab.org/system/images/photos/000/008/592/original/build1.jpg)

The valve has a hexagonal gland nut (I think that is what the term is) that I made the mount clamp to.  It uses a 3 mm machine screw to hold it in place.  Once the valve is in place, the servo motor bolts to the other side of the mount using 2.5 mm machine screws.  Then comes the tricky part of clamping down the coupling onto the valve stem.  To do this, grip the coupling directly with a pair of pliers and tighten down with a hex wrench.  If you try to hold onto any other part of the assembly, you will no doubt break something.
So that is all the mechanics.  The servo does require a 6 volt power source and I am using a 12 volt wall wart to power the syringe pump, so I put together a voltage regulator on a breadboard.  The schematic  below is basically copied from the spec sheet for the LM317 adjustable voltage regulator that I used.  The power jack is on the left and the motor plugs into the three pin connector on the right.  
[![powerSchem.png](https://i.publiclab.org/system/images/photos/000/008/593/medium/powerSchem.png)](https://i.publiclab.org/system/images/photos/000/008/593/original/powerSchem.png)
The top pin on the connector goes to my microcontroller to control the servo.  I was concerned that the 3.3 volt logic was not going to be sufficient to control the servo but that doesn't seem to be a problem.  I was also concerned that the servo would not develop enough torque to turn the valve (the little bugger is kind of tight) but that seemed ok as well.  I used a quick example sketch that comes with Energia to test the servo control and everything worked OK..

###Questions and next steps
I think the next steps are to get the thing calibrated to know when the holes in the valve body line up with the inlets and get the lines to hold pressure without leaking.  Then I need to write code to incorporate the valve into the Titraumatic.  
###Why I'm interested
Didn't I cover that in the first section?