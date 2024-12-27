---
title: "New WheeStat Hardware"

tagnames: 'wheestat'
author: JSummers
path: /notes/JSummers/07-23-2015/new-wheestat-hardware.md
nid: 12096
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/010/851/original/WheeStat7PrototypeA.jpg)

# New WheeStat Hardware

by [JSummers](../../../profile/JSummers) | July 23, 2015 21:53

July 23, 2015 21:53 | Tags: [wheestat](../tag/wheestat)

----

###What I want to do
As outlined in an earlier research note ([here](http://publiclab.org/notes/JSummers/06-19-2015/booster-hardware-improves-the-usable-wheestat-voltage-range)), the original WheeStat was limited to voltages between +/- 1.65 volts on both the working and counter electrodes.  In this research note, I describe how we redesigned the potentiostat to give +/- 12 volts on the counter electrode and up to +/- 5 volts on the working electrode, all without a detectable frying (yet anyway) of the 0-3.3 volt compatible electronics.
###My attempt and results
So the last research note discussed using a DC-DC converter to increase the available voltage on  the board from 0-5 volts to +/- 12 volts.  This higher voltage was used to feed a booster amplifier that amplified the signal coming out of a previous amplifier on the counter electrode circuit.  This lead to feedback noise and a lot of burned up electronics.  While it occurred to me that the best way to handle the feedback issue was to use a higher voltage op amp in the WheeStat counter electrode circuit, that would expose the voltage-read circuit to unacceptably high voltage.  The answer to this problem was to use a high voltage amplifier as a voltage follower on the reference electrode and de-amplify the signal for the voltage read circuit.  This can be seen in the simplified schematic below: 


[![voltageReadSchem.png](https://i.publiclab.org/system/images/photos/000/010/852/medium/voltageReadSchem.png)](https://i.publiclab.org/system/images/photos/000/010/852/original/voltageReadSchem.png)

In the schematic above, R2 is three times R1 and R3 is three times R4.  This causes the voltage difference between the working and reference electrodes to be three times the signal voltage and the voltage read at the VRead pin will be one third the true value of the voltage difference.  That means that the effective voltage range that can be applied will be three times that of the original WheeStat; +/- 4.95 volts instead of +/- 1.65.  A little bit of hocus-pocus in the computer code and the correct current and voltage values magically appear as the output to the GUI.

So that addresses the voltage range issue, and as long as the voltage at the working electrode and at the voltage reading op amp remain within the safe range (0 to 3.3 volts) everything will be OK.  As long as the circuit remains intact, the output at the counter electrode is controlled by feedback and all the voltages will remain within spec.  So in theory, we have the problem beat.  The only remaining problem is that we don't live in theory, we live in reality.  In reality, the operator sometimes removes an electrode from solution at an inopportune time, or an alligator clip slips off of an electrode.  When this happens, the feedback loop on the counter electrode is broken and the voltage at this electrode spikes to its most extreme value, frying any unprotected circuits.  So that means that we had to come up with a way of dissipating voltages outside of the 0 to 3.3 volt range that find their way to the wrong circuit.  We tried a couple of things that did not work, and the one that did work is illustrated in the simplified schematic below:


[![protectionCircuitSchem.png](https://i.publiclab.org/system/images/photos/000/010/885/medium/protectionCircuitSchem.png)](https://i.publiclab.org/system/images/photos/000/010/885/original/protectionCircuitSchem.png)

 In the schematic above, the current following circuit attached to the working electrode (labeled WE) is protected against voltage spikes.  If the voltage at WE goes above +3 volts, current is passed upwards through the diode.  If the voltage goes below 0 volts, current passes downward through the diode.  The voltages immediately above and below the diodes are maintained by the two op amps, which are also set up to be current followers.  The output from IC3A is 3.3 - iR5 where i is the current passing through the upper diode.  The output from IC3B is +iR6 where i is, in this case, the current passing through the lower diode.  In this case, R5 and R6 are both 200 ohms and the remaining resistors are 1K.   In the absence of a current passing through one or the other diode, the outputs from the two amps are 3.3 and 0 volts, and the voltage of the junction between R7 and R8 will be 1.65 volts.  A negative deviation from this value would indicate that current is passing through the upper diode, while a positive deviation would indicate that current is passing through the lower diode.  This deviation is amplified by op amp IC1C and is read at the READ_OVER_VOLTS pin of the microcontroller.  If the microcontroller reads a value that deviates from the expected 1.65 volts, the code can determine whether the voltage at the working electrode is too high or too low and adjust the applied voltage accordingly (right now it is just set to throw an error message and shut down).
  

###Questions and next steps
Q1:  So, does it work?  A:  So far it appears to.  The voltages I measure with my Fluke multimeter are consistent with what we predict.
Q2:  But did the protection circuit stop the horrible massacre of innocent microcontrollers?  A: Has so far.  Of course, testing has been kind of limited as of now.
Q3:  Have you submitted an Eagle file to OSH Park and gotten any professionally fab'd boards back yet?  A: Yep.  The Eagle board file looks like the screenshot below:

[![BoardLayout-WheeStat7.png](https://i.publiclab.org/system/images/photos/000/010/886/medium/BoardLayout-WheeStat7.png)](https://i.publiclab.org/system/images/photos/000/010/886/original/BoardLayout-WheeStat7.png)
Q4:  Those chips look really small.  Did you change the spec on the resistors and caps?  A: Yeah, we went to 603 package this time.  That makes the boards cheaper but it is kind of a pain in the but to place all the little buggers on where they are supposed to be and you can not even see the little markings on them.
Q5:  Have you tried running any voltammagrams using the new boards?  A:  Yes.  Below is a screenshot of some stripping voltammagrams of lead containing solutions.

[![ASV-Pb.png](https://i.publiclab.org/system/images/photos/000/010/887/medium/ASV-Pb.png)](https://i.publiclab.org/system/images/photos/000/010/887/original/ASV-Pb.png)

 Q6:  Whoa, dude!  Is that an entirely new user interface?  A:  Yep.  Very perceptive of you to notice.  The new interface has an automatic com port connection feature and the improved file manipulation scheme described in an earlier research note.
Q7:  Sweet!  A: That is not a question.
Q8:  Oh, sorry.  How do I get one of the new boards?  A: They are not available yet.  I will let you know when they are.
Q9:  Can I make one myself?  A:  Of course, this is all open source stuff.  Just let me know you want to and I will put the board file on the share list at OSH Park. Then you can order a board and build it up yourself.
Q10: Where can I get the schematic?  A: Um, I haven't put it online yet.  When I do it will be on[ this](https://github.com/SmokyMountainScientific) site.
  
###Why I'm interested
Gotta do something with my summer.