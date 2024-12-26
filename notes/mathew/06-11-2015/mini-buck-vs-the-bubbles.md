---
title: "Mini-Buck vs. the Bubbles"\ntagnames: 'air-quality, measurement, silica, barnstar:empiricism, formaldehyde, open-air, particle-sensing, openair, indoor-air-quality, bubbles, air-monitoring, mini-buck, response:11949'
author: mathew
path: /notes/mathew/06-11-2015/mini-buck-vs-the-bubbles.md
nid: 11969
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/010/302/original/Screen_Shot_2015-06-10_at_3_28_07_PM.png)

# Mini-Buck vs. the Bubbles

by [mathew](../profile/mathew) | June 11, 2015 00:14

June 11, 2015 00:14 | Tags: [air-quality](../tag/air-quality), [measurement](../tag/measurement), [silica](../tag/silica), [barnstar:empiricism](../tag/barnstar:empiricism), [formaldehyde](../tag/formaldehyde), [open-air](../tag/open-air), [particle-sensing](../tag/particle-sensing), [openair](../tag/openair), [indoor-air-quality](../tag/indoor-air-quality), [bubbles](../tag/bubbles), [air-monitoring](../tag/air-monitoring), [mini-buck](../tag/mini-buck), [response:11949](../tag/response:11949)

----

###What I want to do
Compare the $10 [stopwatch & bubbles](/notes/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration) airflow monitoring technique @davidmack suggested to a $970 [NIST-traceable](http://www.nist.gov/traceability/nist_traceability_policy_external.cfm) pump calibrator called the mini-buck recommended to @NickShapiro.

###My attempt and results
It was a bit sensational to call this research note "Mini-Buck vs. the Bubbles" since the Mini-Buck is an automated bubble measuring machine.  A breakdown of how it works and is designed in the bottom section, "How the mini-buck works."

For this comparison I checked the flow of [3 used formaldehyde tubes](http://publiclab.org/notes/nshapiro/11-03-2014/diy-formaldehyde-test-kit#c11886) and  our [lending library air pump prototype.](notes/mathew/05-28-2015/formaldehyde-testing-kit-for-lending) I used the Mini-buck and the same graduated cylinder and bubbles method [detailed here](/notes/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration).

**Tube#1**

_graduated cylinder flow rate: 329L/m_

Times to travel 200ml: 36.67, 36.54, 36.36.

_Mini-Buck flow rate: 335L/m_

(three identical tests)

**Tube #2 **

_graduated cylinder flow rate: 309L/m_

Times to travel 200ml: 38.90, 38.74, 38.78.

_Mini-Buck flow rate: 313L/m_

two tests at 313, one at 312



**Tube #3**

_graduated cylinder flow rate: 302L/m_

Times to travel 200ml: 39.78, 39.64, 39.57.

_Mini-Buck flow rate: 305_

(three identical tests)

###Questions and next steps
My polypropylene graduated cylinder has a flow reading 1-2% lower than the mini-Buck.  This could be the tolerances of the cylinder, or temperature dependent, as it is calibrated for 20 degrees and I did these tests at 27 (Celsius).  I'm not going to apply a correction for now, I think more work is needed to prove that.  Overall though, I'm impressed with the performance of the graduated cylinder and stopwatch. 

###how the Mini-Buck M-30 works
Mini-buck is a design in the public domain now, since its [patent (4860590)](https://www.google.com/patents/US4860590) expired several years ago.

[![IMG_6194.JPG](https://i.publiclab.org/system/images/photos/000/010/303/medium/IMG_6194.JPG)](https://i.publiclab.org/system/images/photos/000/010/303/original/IMG_6194.JPG)

**How it works:**
The measurement chamber is made out of a transparent acrylic tube*.  On the bottom is a reservoir for bubble solution, and a spring-powered bubble wand with a wider diameter than the acrylic tube.  When the button is depressed a bubble is made on the wand.  as the wand moves back up to the acrylic tube, the bubble attaches itself evenly to the tube's bottom.  

[![buttongif.gif](https://i.publiclab.org/system/images/photos/000/010/304/medium/buttongif.gif)](https://i.publiclab.org/system/images/photos/000/010/304/original/buttongif.gif)

_*I'm guessing the tube is acrylic since there are warnings about cleaning with acetone.  It may be polycarbonate, as suggested in the patent._

[![IMG_6195.JPG](https://i.publiclab.org/system/images/photos/000/010/305/medium/IMG_6195.JPG)](https://i.publiclab.org/system/images/photos/000/010/305/original/IMG_6195.JPG)

The bubbles always travel upwards, and to get the tube soaped up, one repeatedly presses the button to send bubbles up the acrylic tube until they start making it to the top (see above).

At the top of the chamber is a catchment for the bubbles to prevent them from entering the air line.  the main acrylic tube is capped, and below the cap are four holes offset evenly around the circle. These holes exit into a wider tube surrounding the capped top of the main tube.  From there a 1/4" air hose nipple draws air.

[![IMG_6218.JPG](https://i.publiclab.org/system/images/photos/000/010/307/medium/IMG_6218.JPG)](https://i.publiclab.org/system/images/photos/000/010/307/original/IMG_6218.JPG)

Depending on whether one wants to pull or push air through the chamber, the air line is attached to the top or bottom, and the second air line connector left open to the atmosphere:

[![IMG_6216.JPG](https://i.publiclab.org/system/images/photos/000/010/308/medium/IMG_6216.JPG)](https://i.publiclab.org/system/images/photos/000/010/308/original/IMG_6216.JPG)

The mini buck automates bubble detection with two matched sets of infrared emitters and sensors.  When a bubble passes up the chamber an IR diode detects an interruption in the infrared light coming off an LED.  A view of the two detectors:

[![IMG_6198.JPG](https://i.publiclab.org/system/images/photos/000/010/309/medium/IMG_6198.JPG)](https://i.publiclab.org/system/images/photos/000/010/309/original/IMG_6198.JPG)

With the chamber taken out, the sensors can be seen oriented opposite each other. Note the IR LED's light is choked down by a pinhole in the case.  That may be why I couldn't seem to get a reading on the LEDs with a [Public Lab Spectrometer](/wiki/spectrometer). I tried reflecting them off paper and other materials but to no avail. They could also be 960nm or another wavelength that the spectrometer isn't very sensitive in.

[![IMG_6215.JPG](https://i.publiclab.org/system/images/photos/000/010/310/medium/IMG_6215.JPG)](https://i.publiclab.org/system/images/photos/000/010/310/original/IMG_6215.JPG)

Inside the MiniBuck is a [PIC16F914](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en020200), an 8-bit microcontroller running at 8mhz, with an internal real time clock, and a LMC6464 amplifier I'm assuming is used to either amplify the signal from the IR photodiodes or power the LEDS.

[![IMG_20150609_130047.jpg](https://i.publiclab.org/system/images/photos/000/010/311/medium/IMG_20150609_130047.jpg)](https://i.publiclab.org/system/images/photos/000/010/311/original/IMG_20150609_130047.jpg)

**Calibrating the Mini-Buck:**
The manual recommends calibration to a NIST-traceable stopwatch and a bubble traveling through a NIST-traceable 1000ml Buret at a flow rate of 1L/m.

###Why I'm interested
We have to figure out how to measure the flow of both particle monitors and formaldehyde tubes.  One of the central questions of the Open Air projects is how much air is going through devices. It is heartening to think that the difference in precision between a $10 and a $1000 flow meter is 1-2%. That said, the mini-buck is a lot less messy and much quicker.
