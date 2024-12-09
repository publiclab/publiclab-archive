---
title: DIY injection device for chemical reaction kinetics.
tagnames: hardware, enzyme-kinetics, chemical-kinetics, reaction-mechanisms, lab-instruments
author: JSummers
path: /notes/JSummers/12-31-2018/diy-injection-device-for-chemical-reaction-kinetics.md
nid: 18031
uid: 304279

---

![](https://publiclab.org/public/system/images/photos/000/028/563/original/Injector4_25.jpg)

# DIY injection device for chemical reaction kinetics.

by [JSummers](../profile/JSummers) December 31, 2018 21:28

December 31, 2018 21:28 | Tags: [hardware](../tag/hardware), [enzyme-kinetics](../tag/enzyme-kinetics), [chemical-kinetics](../tag/chemical-kinetics), [reaction-mechanisms](../tag/reaction-mechanisms), [lab-instruments](../tag/lab-instruments)

----

_\*\*\*\*work by Jack S. Summers, Taylor Stack,
Hailey Medder, Kristen Eggles._

**Introduction:** The study of chemical reaction
rates provides fundamental information about reaction mechanisms that can be
determined in no other way. Knowledge of enzyme reaction mechanisms
provides greater understanding of biological processes and can be used to devise
rational approaches to drug design. Despite their importance, the measurement
of reaction rates is seldom taught at the undergraduate level. We believe
this is due to the high cost of instruments used in this field. One of
the most widely used methods for studying reaction kinetics is stopped flow
spectroscopy. Stopped flow methods involve the rapid mixing of two
reaction solutions and the introduction of the resulting solution into a spectrophotometer cell for analysis. The spectrometer must be capable of acquiring data rapidly and must be triggered soon after the solutions are mixed. In this research note, we describe a minimal injection device
consisting of a dual syringe pump, servo-driven injection valve, motor driving and acquisition
triggering electronics and software. The device can be built with minimal tools and
experience. We also fabricated a flow cell that withstands the pressures generated in the experiment. We wrote code to interface the device with a relatively low cost, commercially available uv-visible spectrometer and another program to help analyze the data. As proof of concept, we characterized the rate
of the reaction of crystal violet (CV) with hydroxide in aqueous solution by
monitoring bleaching of the CV visible absorbance with time. Our results were consistent with the known
chemistry of this system.

Hardware: The following description of the hardware is seriously abreviated.  For more information, ask below.  The hardware for the current prototype is based
on the 250 mm C-beam linear actuator sold at [OpenBuilds.com](http://OpenBuilds.com). The kit was assemble according to the [online
instructions](https://www.youtube.com/watch?v=nTzX6c8_8l4). Additional hardware was fabricated from plate
and angle aluminum. We chose plastic 3 mL syringes that are
available with luer locks at a low cost.

Teflon tubing 1/16" od with ¼" 24
fittings were purchased from [Idex-hs.com](http://Idex-hs.com). The mixing chamber is a standard T-fitting
with ¼" 24 fittings. The valve is a
Hamilton Company HVXL 6-6 manual [valve](http://The%20valve%20cost%20$188%20plus%20shipping%20and%20can%20be%20purchased%20from%20this%20web%20page:%20https://www.hamiltoncompany.com/products/liquid-handling-components/manual-valves/hvx-large-body-valves).[](#_edn1) This is a six port valve with the flow path
shown in the Figure below. The ports were
connected such that inputs from the two syringes were 180 degrees apart and the
two cell connections were next to each other (ie, the syringes are attached to
the top and bottom ports in the Figure and the mixing chamber is connected to
the two ports on the right). The
remaining two ports (those on the left) are attached to the reservoirs for the
two reagents. In this way, ports for the
syringes can be switched between the cell and the reservoirs by rotating the
valve 60 degrees.![image description](/i/28564.png "ValveFlowDiagram.png")

Spectrometer: The CCS100 Spectrometer from Thor Laboratories is capable of measuring between 350 and 700 nm light and costs a little over $2000 USD. The uv-vis light source was a BDS130 from BWTek. This setup also requires two fiber optic cables to connect the cell to the light source and
spectrometer.

**Electronic Hardware: **The electronic hardware for the spectrometer builds
on the Texas Instruments Tiva Launchpad development board. The Launchpad interfaces with the
spectrometer and mechanical hardware through a printed circuit board that we
developed to run our auto-titrator.
The auto-titrator board has connectivity for a Pololu stepper motor driver board and a servo
controlled valve (which requires a voltage converter). It also has connectivity for a pH probe with is not used.  While it might seem straightforward to leave the
handle on the valve and not use a servo, we were unable to irreducibly align the ports by hand, making servo control a much better option.  Spectral acquisition is triggered by +5 volt pulses, via a solid state relay on a separate small circuit board.  

  
**Microcontroller firmware:**
Firmware for the microcontroller was written using the program
Energia. Energia is available for free
download from this site: [www.energia.nu](http://www.energia.nu). The code is available from our github
site, [here](https://github.com/SmokyMountainScientific/StoppedFlowThorEnergia4).    
**Graphic
User Interface: **The Thor spectrometer required use of a C library, preventing us from writing a user interface in our usual Java based program, Processing.  Instead, we wrote a program in C# using Visual Studio.  That program is available [here](https://github.com/SmokyMountainScientific/ChemicalKinetics1).  <iframe src="https://www.youtube.com/embed/_c-mqip4BPc" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
We were unable to find a freeware set of tools to make graphics for this user interface and decided to write a second program using the
program Processing to do the analysis.  Processing is available for free download from www.processing
.org. <iframe src="https://www.youtube.com/embed/96o9U5J_IpM" allowfullscreen="" width="547" height="360" frameborder="0"></iframe>
The spectral analysis software is available [here](https://github.com/SmokyMountainScientific/ThorSpectAnalysisA).