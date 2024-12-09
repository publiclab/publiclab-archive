---
title: 'Thermal Torch with Adjustable Temperature Scale'
tagnames: thermal-photography
author: dr_dbw
path: /notes/drdbw/3-28-2012/thermal-torch-adjustable-temperature-scale.md
nid: 1553
uid: 706

---

![](https://publiclab.org/sites/default/files/Circuit_Breadboard.jpg)

# Thermal Torch with Adjustable Temperature Scale

by [dr_dbw](../profile/dr_dbw) March 29, 2012 00:22

March 29, 2012 00:22 | Tags: [thermal-photography](../tag/thermal-photography)

----

This is an extension I have developed of the basic thermal torch / thermal photography project - http://publiclaboratory.org/tool/thermal-photography

What it does is measures the temperature (degrees Celsius) of an object using the infrared thermometer, map that temperature onto a sinebow colour wheel (300 degrees to -30 degree), then change the output to the RGB LED as appropriate.  The maximum and minimum temperatures for the colour scale is adjustable using switches between two values that are set in the code.  This means that the temperature scale can be set for four different temperature scales without having to recode / upload to the Arduino Uno board.

The circuit based on the one shown at - http://publiclaboratory.org/notes/warren/12-12-2011/circuit-diagram-simple-thermal-flashlight I have added three switches to this circuit and written some slightly different code.  All temperatures in this code are in degrees Celsius.

This colour scale for the temperatures is based on the sinebow colour wheel, which is discussed here http://basecase.org/env/on-rainbows

The code requires you to specify the two minimum and two maximum temperatures for the temperature scale to work between.  The selected temperature scale then maps the measured temperature onto the colour wheel from 300o to -30o, which equates to purple to pink.

Over the LED I place a Cree LED 45o collimator lens, which helps to disperse the distinct red, green and blue colours that you otherwise get.  The 5mm RGB LED fits into the base of the lens, but has to be glued into place.

This is an extension / variation of the code I initially posted http://publiclaboratory.org/notes/drdbw/3-27-2012/thermal-torch-code which will work on the basic torch circuit.

Code:
<script src="https://gist.github.com/2231626.js?file=Thermal%20Torch%20Sinebow%20Switchable"></script>