---
title: "Thermal flashlight REVA -- mostly built!"

tagnames: 'thermal-photography, arduino, thermal-flashlight, thermal-fishing, thermal-fishing-bob, pcb, response:9980'
author: donblair
path: /notes/donblair/02-28-2014/thermal-flashlight-reva-mostly-built.md
nid: 10077
uid: 43651

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/003/083/original/thermal.png)

# Thermal flashlight REVA -- mostly built!

by [donblair](../../../profile/donblair) | February 28, 2014 03:59

February 28, 2014 03:59 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [thermal-fishing](../tag/thermal-fishing), [thermal-fishing-bob](../tag/thermal-fishing-bob), [pcb](../tag/pcb), [response:9980](../tag/response:9980)

----

###What I want to do

Assemble a prototype for a Thermal Flashlight board, based on the [REVA design]. This design relies heavily on Rui Wang's ["SquareWear2.0"](https://github.com/rayshobby/squarewear/tree/master/hardware/v2.0) design. I simply took his design, added an IR sensor, took off the wearable computing style pins, changed the processor he was using for a 32u4, and added a thermistor.  

###My attempt and results

Here's a video of the assembled board (assembled by none other than -- Rui himself!):
 
<iframe width="560" height="315" src="//www.youtube.com/embed/nI041unDNr8" frameborder="0" allowfullscreen></iframe>

The IR sensor hasn't yet arrived, so it isn't actually a true thermal flashlight prototype.  But it blinks!  And makes noises!  We only connected one of the LEDs for now (long story -- we had some confusion about the pinout on the board, so thought that we had done something wrong with the LED soldering, and ripped up the board a bit when trying to fix it -- turned out it was a software issue -- but now placing the resistors required would likely short the board / be quite difficult, so we'll wait til the next iteration for the full complement of LEDs.)

###Questions and next steps

It took quite a bit of debugging to get going -- I'd mislabeled the RESET pin, so an extra wire was needed to install the bootloader.  I also didn't wire up the LEDs in the cleverest way -- they're currently powered directly by the microcontroller, which can't source much current.  Based on Rui's advice, I'm going to redesign the circuit to power the LEDs directly from the battery via some switches (MOSFETs).  

Also thinking of returning to the VUSB + 328p design that Rui used in Squarewear, in order to simplify some driver issues and reduce cost. Looking into it.

###Why I'm interested

I'm keepin' on keepin' on with the thermal flashlight project!