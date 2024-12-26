---
title: "Potentiostat Notes 2: Software"\ntagnames: 'potentiostat, wheestat'
author: JSummers
path: /notes/JSummers/12-20-2013/potentiostat-software.md
nid: 9911
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/002/438/original/effects_of_current_gain.png)

# Potentiostat Notes 2: Software

by [JSummers](../profile/JSummers) | December 20, 2013 20:12

December 20, 2013 20:12 | Tags: [potentiostat](../tag/potentiostat), [wheestat](../tag/wheestat)

----

###What I want to do
We are working to develop laboratory instrumentation for education and environmental monitoring.  This note follows up on an earlier research note found at http://publiclab.org/notes/JSummers/11-02-2013/potentiostat-notes-1-wheestat-history.  In that note, I describe our reasons for transitioning from the Texas Instruments MSP430g2553 LaunchPad microcontroller to the Stellaris microcontroller.  At the time, we did not have the microcontroller software developed and had not begun working on the GUI.  We now have that software written and pushed to our GitHub page.  In this note, we report on some of the characteristics of the software and the Stellaris based system. 
This work was done by Ben Hickman and me.
###My attempt and results
The software described in this note can be found at https://github.com/SmokyMountainScientific/WheeStat5_0.  It consists of Energia code used to program the microcontroller board and Processing code for the GUI.   All the test data in this note were acquired with the WheeStat5.1 hardware from the earlier note.  The tests were conducted with the reference and counter electrodes attached to one side of a resistor and the working electrode attached to the other side.  Thus, all behaviors should follow Ohm's Law.  
The instrument as described will support the following experiments; voltage ramp, cyclic voltammetry, differential pulse voltammetry, anodic- and cathodic-stripping voltammetry, and a data logging version of the stripping voltammetry experiments.
The top of the  GUI (shown below) has dropdowns that allow the user to select the com port and experiment.  In the figure, Com 21 has been selected and the ramp experiment executed.  The overlay button allows you to overlay successive voltammagrams  (plots of current versus voltage)  to allow comparison.
[![GUI-top.png](https://i.publiclab.org/system/images/photos/000/002/440/medium/GUI-top.png)](https://i.publiclab.org/system/images/photos/000/002/440/original/GUI-top.png)
On the left side of the GUI are a set of text boxes that allow input of run parameters.  As you can see, values can be input for the initial and final voltages, current gain and offset, an initial delay, and the scan rate.  Below the delay and scan rate is an empty box that will become active if the log_ASV experiment is selected from the mode dropdown list.  In this case, you can enter the number of runs you wish to measure and the delay between runs.
[![controlls.png](https://i.publiclab.org/system/images/photos/000/002/441/medium/controlls.png)](https://i.publiclab.org/system/images/photos/000/002/441/original/controlls.png)
The main image for this note shows a voltammagram where the voltage is ramped from -400 mV to +400 mV at a rate of 100 mV/s.  You will notice that the early and late sections of the voltammagrams are flat-lined at the maximum and minimum values that the potentiostat can read.  The maximum is at VCC (3287 mV above GND).  The minimum is at about 600  mV and I think that reflects the limitations on the amps we chose to use (stay tuned, I have purchased different amps).  You will also notice a little bump in the data at ~100 mV.  I don't know what the heck that is.  I think it is hardware related because it is certainly reproducible. 
So anyway, to keep the current reading on scale, you adjust the gain and offset values (these are the digital inputs that replaced my beloved analog knobs, as described in the earlier note).  The figures below show the effects of systematically varying one then the other.  These voltammagrams were collected in overlay mode to allow comparison.
[![effects_of_current_gain.png](https://i.publiclab.org/system/images/photos/000/002/442/medium/effects_of_current_gain.png)](https://i.publiclab.org/system/images/photos/000/002/442/original/effects_of_current_gain.png)
The figure above shows that adjusting the current gain affects the slope of the line.  Note that there is not a linear or logarithmic correlation between the gain value and the current amplification (if you are interested in the correlation then ask).  The figure below shows that changing the offset does what you would expect, it shifts the data either up or down.
[![effects_of_offset.png](https://i.publiclab.org/system/images/photos/000/002/443/medium/effects_of_offset.png)](https://i.publiclab.org/system/images/photos/000/002/443/original/effects_of_offset.png)
If  you look closely, you will see that there is one data point in each of the two figures above that does not seem to go with anything else.  This was due to a software bug that we have since fixed.
The reproducibility of the ADC can be appreciated by considering the differential pulse voltammagram below.  In this experiment, a square wave voltage pulse is superimposed on the voltage ramp and the current is sampled at the bottom and the top of the pulse.  The current reported is the difference between the current at the low and high points of the pulse.  This type of experiment filters out Ohm's Law type of effects and (in this case) should give a constant current output equal to i = (V hi - V low)/R.  The data below show the current scale expanded to the point where the digitization is apparent (1 mV resolution on the y scale).  To me this looks like the ADC reproducibility is not too shabby since each point reflects the difference between two measured values considering we are using a 12 bit ADC. 
[![asv_screenshot.png](https://i.publiclab.org/system/images/photos/000/002/444/medium/asv_screenshot.png)](https://i.publiclab.org/system/images/photos/000/002/444/original/asv_screenshot.png)
Ok, so that is differential pulse analysis of a resistor when Ohm's Law is followed.  The figure below shows what you get when you try to measure current outside of the limits of detection:
[![asv-truncated.png](https://i.publiclab.org/system/images/photos/000/002/445/medium/asv-truncated.png)](https://i.publiclab.org/system/images/photos/000/002/445/original/asv-truncated.png)
You will notice that the scan parameters for the differential pulse voltammagram above are the same as for the ramp experiment in the main image.  That means that at voltages where the ramp voltammagram flat lined, the high and low current for the differential pulse experiment are the same, giving a zero value for the difference.  While it is really apparent in this voltammagram that something has gone wrong, that will not always be the case.  Luckily, there is an orange error message just above the graph pointing out the problem, and suggesting what to do about it.

###Questions and next steps
The next steps for me are:  (1) Make up some solutions and drop in the electrodes to evaluate performance in real-life lab environment. (2)  Evaluate the lower detection limit for this configuration.  I have a feeling that I would be happier with a 50 k ohm potentiostat (rather than the 10 k one in the instrument currently), but lets get the parameters on this one measured before calling up the digikey folks.  (3)  I need to make a new board using one of the rail-to-rail op amps we purchased and see if that does not allow us to measure a wider current range than we currently have access to.  (4) I need to write up a note describing fabrication of the WheeStat shield.  (5) Once we decide on a final hardware design, I need to order a bunch of pcb's from a fab house.  I told a colleague I would have 8 copies for her to use by  March (if you are not afraid of surface mount soldering and would like a kit, let me know and I will put one together for cost+shipping).
In the mean time, you can check out the GUI.  You should be able to download just the windows executable file, source and library files from (https://github.com/SmokyMountainScientific/WheeStat5_0/tree/master/WheeStat5GUI/WheeStatWinExe)
That should allow you to run the GUI without having to download the Processing code. 
Guess that is about it.
Jack