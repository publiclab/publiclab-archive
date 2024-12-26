---
title: "Riffle dev: 'Fun w/ Five-Five-Fives'"\ntagnames: 'water-quality, water-quality-sensor, conductivity, riffle, 555'
author: donblair
path: /notes/donblair/05-28-2014/riffle-dev-fun-w-five-five-fives.md
nid: 10514
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/004/474/original/FI66X99H7996R0X.MEDIUM.jpg)

# Riffle dev: 'Fun w/ Five-Five-Fives'

by [donblair](../profile/donblair) | May 28, 2014 18:09

May 28, 2014 18:09 | Tags: [water-quality](../tag/water-quality), [water-quality-sensor](../tag/water-quality-sensor), [conductivity](../tag/conductivity), [riffle](../tag/riffle), [555](../tag/555)

----

###What I want to do

Ben Gamari had implemented an ingenious version of the Riffle hardware that measured the conductivity of water (aside: for a great tutorial on conductivity in a water quality context, pointed out to me by Jeff Walker, check out this [Fondriest guide](http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/)) by exploiting the properties of an old chestnut of an integrated circuit: the '555 timer'.  I'm looking to breadboard a similar circuit myself, in order to understand the basics of how this setup works.  


[![FI66X99H7996R0X.MEDIUM.jpg](https://i.publiclab.org/system/images/photos/000/004/473/medium/FI66X99H7996R0X.MEDIUM.jpg)](https://i.publiclab.org/system/images/photos/000/004/473/original/FI66X99H7996R0X.MEDIUM.jpg)
__Figure A: 'Astable' wiring diagram for a 555 timer.__ 

When a 555 chip -- which [costs $2 at RadioShack](http://www.radioshack.com/product/index.jsp?productId=2062596), but is available widely online for much cheaper -- is placed in a particular circuit configuration (dubbed the ['astable' configuration](http://www.instructables.com/id/555-Timer/step5/555-Timer-Astable-Mode/)) that involves a capacitor, C, and two resistors, RA and RB, all wired up a certain way, the 555 produces an output voltage (on its 'output' pin) that oscillates between high and low voltage values (where high = the input voltage, 'VCC', and low=0 Volts), with the following frequency:

f=1/(0.7*(R_A+2*R_B)*C)

where:
- f is in Hertz (cycles per second)
- R_A and R_B are in Ohms
- C is in Farads. 

Note that if you're wiring up a 555 on a breadboard and following Figure A above, the 555 pin numbers are actually arranged counter-clockwise, starting at the 'top left' of the 555, as in Figure B below:

[![555pinout.jpg](https://i.publiclab.org/system/images/photos/000/004/472/medium/555pinout.jpg)](https://i.publiclab.org/system/images/photos/000/004/472/original/555pinout.jpg)

__Fig B: The typical pinout on a 555 IC.__

###My attempt and results

For example, I just now breadboarded this arrangement, and used the following values:

- R_A=21000 Ohms (i.e., a 21 kilo-Ohm resistor);
- R_B=2300 Ohms (a 2.25 kilo-Ohm resistor);
- C = 0.000047 Farads (a 47 uF capacitor)

Plugging these values into the above equation for the frequency, 'f', we get f = 1.2 seconds -- which is about the frequency I observed when I connected an LED on the 'output' pin. 

###Why I'm interested

The motivation for this exercise is the following:  due to the straightforward relationship between the resistor and capacitor values in this 555 circuit and the oscillation frequency of the 555 output, we can use this circuit to measure the resistivity ([and, thus, the conductivity](http://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity)) of water.  The idea is:  set up the above circuit with known values of R_A and C, but connect wires ('probes') from the circuit through a water sample so that the *water* is the 'resistor' R_B.  By measuring the frequency of oscillation of the 555 output, we can back out what the effective resistance, R_B, must be between the probes.  

In lieu of using a water sample, I tried out this idea with a 10 kOhm photodiode, and took a video of the result:

<iframe width="420" height="315" src="//www.youtube.com/embed/s7vR1FUzYLE" frameborder="0" allowfullscreen></iframe>

### Next steps

- Find a nice way of measuring the frequency of this oscillation using simple Arduino code
- Try this out with a water sample, using appropriate values for the R_A and C, such that we end up with an oscillation over around 1 kHz (the frequency range above which the effects of our cicruit on the water electro-chemistry -- e.g. shifting ions around in the water -- will be sufficiently minimized)


