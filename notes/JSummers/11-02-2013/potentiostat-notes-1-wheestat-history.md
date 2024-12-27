---
title: "Potentiostat Notes-1, WheeStat history"

tagnames: 'water-sensing, water-quality, potentiostat'
author: JSummers
path: /notes/JSummers/11-02-2013/potentiostat-notes-1-wheestat-history.md
nid: 9718
uid: 304279

cids: 9347,9348,9349,9352

---

![](https://publiclab.org/public/system/images/photos/000/002/090/original/WheeStat5_2-fig1.bmp)

# Potentiostat Notes-1, WheeStat history

by [JSummers](../../../profile/JSummers) | November 02, 2013 22:06

November 02, 2013 22:06 | Tags: [water-sensing](../tag/water-sensing), [water-quality](../tag/water-quality), [potentiostat](../tag/potentiostat)

----

###What I want to do
This note describes some recent development work on potentiostat, an instrument that measures current / voltage curves for electrode processes.  I have been told that I should worry less about having something fully developed and put more of our results online. In response, this is my attempt to be more transparent about the process.   This note just covers development history.  In the near future, I hope to write one that describes how to build one of these (it will probably be as boring as this one, but it will have more pictures).  In the not-as-near future, I will put actual code on my GitHub site (https://github.com/WheeSci).  If you are interested in design files or code and don't find what you need at the GitHub site, let me know and I will send you what I can.
The main image of this research note shows component placing and the top wire traces for version 5.2 of the WheeStat.  The design also has a few wire traces on the bottom of the board, and the whole thing stacks onto a Texas Instruments Stellaris LaunchPad microcontroller development board.   
This is our most recent design of our potentiostat.  In an earlier incarnation (described on the Pioneer Valley Open Science web site, http://pvos.org/), the instrument had a rotary switch for controlling the current gain and an analog potentiostat to control the offset.  The 4 and 5 series WheeStats replaced the analog inputs with digital ones. I really liked the analog inputs.  They gave the impression that what you did on the outside of the box really mattered to the data that came out and I hated replacing them with more electronics.  The problem was that fiddling with the wires reduces the reliability of the thing (the solder joints were always coming apart) and soldering a dozen resistors to a rotary switch was kind of a manufacturing nightmare.  
 The earlier version also relied on a +/- 12 volt dc converter to power the op amps. The dc converter had to go, partly because of cost and complexity, but mostly because when you screwed something up, the 12 volts would toast the digital hardware in the microcontroller board (TI LaunchPad MSP430g at the time).
###My attempt and results
For the sake of keeping track, lets say that versions made on a breadboard ended with version 2.0, when we started etching our own copper boards, and version 3.0 began when we started building 'shields' that stack on the microprocessor board (the LaunchPad).  Picture of a 3 series potentiostat below showing the rotary switch and potentiometer.
[![3V-PDIP-hardware-2.jpg](https://i.publiclab.org/system/images/photos/000/002/104/medium/3V-PDIP-hardware-2.jpg)](https://i.publiclab.org/system/images/photos/000/002/104/original/3V-PDIP-hardware-2.jpg)

So anyway, the +/- 12 volt version was pretty reliable but suffered from some minor annoying characteristics, as described above.   To get rid of the voltage converter, we started running the amps off of +5 volts that comes directly from the usb connection on the LaunchPad. Removing the negative voltage input, however, means you need to have a reference voltage for your working electrode somewhere between your high (+5 v) and low (gnd) available voltages.  We started using low dropout oscillators (ldo) to provide the reference signal. At some point, it occurred to us that there was no real advantage to having an external oscillator for the reference voltage when the microcontroller we were using was perfectly capable of generating the voltage we want using a pwm signal.  Similarly, the potentiometer we used to generate an offset voltage was replaced by a pwm signal from the OFFSET pin.   In version 5.2, the reference and offset voltages are supplied by pwm signals output at pins labelled VREF and OFFSET. I guess you can't talk about electronics without having a diagram to refer to, so here is the schematic for the 5.2 version:

[![WheeStat5_2-schemB.png](https://i.publiclab.org/system/images/photos/000/002/105/medium/WheeStat5_2-schemB.png)](https://i.publiclab.org/system/images/photos/000/002/105/original/WheeStat5_2-schemB.png)

The basics of how the electronics work is pretty well described in Chapter 15 of Bard and Faulkner's book "Electrochemical Methods, Fundamentals and Applications".  Look for it in your library.  For god sake though, don't stray outside of this chapter (you have been warned).

The reference voltage (Vref) is  input to the non-inverting pins of IC1C and IC1D (IC1 is a quad op amp, a TI product named LM324ADR that has, of late, been the object of much profanity in the house of jack).  The voltage difference between the working and reference electrodes (connected at solder pads labelled WE and RE) for this configuration equals Vsig - Vref, where Vsig equals the pwm input on the Signal pin.  Thus, if you have a 5 volt supply and a 2.5 volt reference, you can scan voltage space between +/- 2.5 volts which is plenty large enough to electrolyze water into H2 and O2 (that is, we have overkill in the voltage department).  So, we made these changes and the 5 volt potentiostat seemed to be working pretty well.  In fact, it worked so well that I decided that it needed fixing.  Since we were able to drop the available voltage from +/-12 volts to +/- 2.5 volts, why couldn't we run it off of VCC (3.3 volts to gnd) to give +/- 1.65 volts (still plenty of overkill in aqueous solution)?  I gave this project to Ben, who was one of my students at the time, and he came back with the pronouncement that it did not work.  Never one to let  empirical observation (It don't work) get in the way with a nifty hypothesis (it should work), I proceeded to dump a bunch of my own time and that of other students into making it work.  Long story short; It still don't work.
I have some graphs showing how the output from the amps when powered by vcc was limited to between about 1.4 and 2.8 volts.  I have another graph showing how, when powered by the +5 volt output, the voltages measured at the vRead pin covered the entire measurable 0 to 3.3 volt range.  I was going to post these graphs in here but I couldn't figure out how to get an excel graph into the note.  Anyway, the output to vRead closely tracked the expected behavior when the voltage called for was within the 1.4 to 2.8 volt range and flat-lined at either 1.4 or 2.8 when call outside the range.  So, this makes me suspect the aforementioned product named LM324ADR.  I don't think I was trying to pull more current through the vcc pin than it can handle since the voltage at vcc did not drop when the performance was sucking.  In LM324ADR's defense, I have to say that it is not listed as a "rail to rail" amp.  Still, it is rated as functioning when powered by as little as 3 volts and I find the 1.4 volt dynamic range disappointing.  I guess I could try a different product, like LMV324QDR that is listed as a rail to rail amp, but I have a whole bunch of the LM324ADRs and they work fine as long as you keep the input voltage up.
So anyway, WheeStat versions from the mid 3s to version 5.1 featured the 3.3 volt input and we went back to 5 volts for version 5.2.  


###Questions and next steps
Ok, so what I did not mention is that when we tried incorporating the multi-pwm strategy into a board interfaced to the original launchpad (WheeStat 4.0 with MSP430g) we found that it was not set up to output three pwm signals (at least it would not the way we had it configured).  This presented us with the opportunity to transition to a higher performance microcontroller development board, the Stellaris Launchpad.  That, of course means that all the code we wrote for the earlier microcontroller needs to be re-written.  I just got the output to the vRead pin looking OK the other night and the output on the iRead pin still looks like poo.  I am hoping that it is a simple issue of inputting appropriate values to the digital pot (IC2 on the schematic), but the output looks to me like there is some hardware issue that needs to be addressed.  
The voltage read on the iRead pin should be proportional to the current passed between the working and counter electrodes.  The proportionality constant should be R0*10K /  R1, where R0 and R1 are the resistances of channels 0 and 1 of the digital pot.  If you derive amusement from reading about the frustrations of others you might want to check out my misadventures with the digital pot at http://forum.stellarisiti.com/topic/1719-spi-with-16-bit-data/.  

I also need to figure out specs on the resisters and capacitors that take the ripple out of the offset and vRef pins.  For the 5.1 prototype, I just put in huge resisters (160 Kohm) to make sure the pwm signals went totally analog.  This works fine once the capacitors are charged up, but it introduces a multi-second delay between when you power the instrument up and when you can make an accurate measurement.
So that is where we are currently at.  Sorry if it rambled too wildly.  Let me know if you have questions or want eagle files or code.
Jack