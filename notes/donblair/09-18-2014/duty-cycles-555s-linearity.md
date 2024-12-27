---
title: "Duty Cycles & 555s --> linearity!"

tagnames: 'calibration, water-quality, conductivity, open-water, linearity, 555, coqui'
author: donblair
path: /notes/donblair/09-18-2014/duty-cycles-555s-linearity.md
nid: 11159
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/006/884/original/555-2-to1-MS-ratio-WF.jpg)

# Duty Cycles & 555s --> linearity!

by [donblair](../../../profile/donblair) | September 18, 2014 15:11

September 18, 2014 15:11 | Tags: [calibration](../tag/calibration), [water-quality](../tag/water-quality), [conductivity](../tag/conductivity), [open-water](../tag/open-water), [linearity](../tag/linearity), [555](../tag/555), [coqui](../tag/coqui)

----

I had a great long chat with [Mark Brownawell](http://www.linkedin.com/pub/mark-brownawell/5/530/666) at the [Artisan's Aslylum](http://artisansasylum.com/site/).  Mark has a long career designing instruments, and he had great insights into every project idea I brought up.  Here's one of them:

When I mentioned to Mark that we're trying to use a 555 to measure conductivity, he had a lot of useful things to say, and one of them was to point out that the way we'd hooked up the circuit, the 'duty cycle' of the 555 output square wave isn't '50%'.  

That sounds fairly technical.  What does it mean?

### Duty cycles and conductivity

'Duty cycle' is the amount of time that the oscillating circuit output spend in the 'on' vs the 'off' state -- there's a great explanation of it on Wikipedia, [here](http://en.wikipedia.org/wiki/Duty_cycle).


[![dutyCycle.JPG](https://i.publiclab.org/system/images/photos/000/006/889/medium/dutyCycle.JPG)](https://i.publiclab.org/system/images/photos/000/006/889/original/dutyCycle.JPG)

(Courtesy, SparkFun). 

> Note: most of the graphics I'm showing later in this note derive from a wonderful online explanation of duty cycles and the 555 timer, [learnabout-electronics](http://www.learnabout-electronics.org/Oscillators/osc44.php).

For the 50% duty cycle above, you can see that the output spends the same amount of time on as it does off. 

In our case, our circuit is set up so that it isn't necessarily 50%, but has a duty cycle that ranges from 50% to 100%, depending on the frequency.  That is, if we were to measure the current we're sending through the water for a few milliseconds, and plotted that current out on an oscilloscope, we'd likely get something like this:

[![555-2-to1-MS-ratio-WF.jpg](https://i.publiclab.org/system/images/photos/000/006/886/medium/555-2-to1-MS-ratio-WF.jpg)](https://i.publiclab.org/system/images/photos/000/006/886/original/555-2-to1-MS-ratio-WF.jpg)

The amount of 'on' time vs 'off' time isn't the same -- it's not a 50% duty cycle. This isn't ideal for what we want to do (measure conductivity), because it means that the electrical current flow through the water isn't unbiased: for every second that the circuit is turned on, there's a longer current flow in one direction than there is in the other, which could result in polarizing the water sample (and more corrosion on electrodes).  Worse, the amount of bias is a function of conductivity / frequency, so the amount of bias will change depending on the sample's conductivity.

### Let's make it ... 50-50

Mark pointed to a configuration of the 555 timer that dials in a 50% duty cycle:

[![555-astable-1-to-1.gif](https://i.publiclab.org/system/images/photos/000/006/887/medium/555-astable-1-to-1.gif)](https://i.publiclab.org/system/images/photos/000/006/887/original/555-astable-1-to-1.gif)


### WIN #1: Simpler Circuit

This configuration drops one of the resistors in the circuit.  So, this is already a win, because the circuit is simpler to assemble.  But *get this* ...

### WIN #2: Circuit output is easier to understand

In our previous circuit, the equation relating frequency to the resistance of the water was:

> freq = 1/(.7*(R1+R_water)*C)

This meant that when trying to figure out the 'cell constant' for our conductivity probe, and understand the relationship between coductivity and frequency, we had to fit a nonlinear curve, like this:

[![freq_vs_conductivity.png](https://i.publiclab.org/system/images/photos/000/006/885/medium/freq_vs_conductivity.png)](https://i.publiclab.org/system/images/photos/000/006/885/original/freq_vs_conductivity.png)

(graphic courtesy Jeff Walker)

Alternatively, if we wanted to calibrate the probe using a reference tone and a reference saline solution, our only option for tuning the circuit appropriately would be to change the conductivity probe itself (by moving the position of the electrodes, say), which is really awkward.  (Thanks to Jeff Walker and Jiansheng Feng for their helpful insights into this.)

With this new, 50% duty cycle circuit, however, the equation for output frequency as a function of the water resistance now becomes:

> freq = .7/(RC)

The conductivity, S = cell_constant / R, where the cell_constant comes from the particular metal and geometry of the conductivity probe (e.g., the screws, and their spacing, in the bottle cap.

Plugging in, we get:

> freq = .7 * S / cell_constant * C

A simple, **linear relationship** between frequency and conductivity, where the slope is .7/C -- wow!  

I.e., our new plot of frequency (y-value) vs conductivity (x-value) is just a straight line:

[![Image3673.gif](https://i.publiclab.org/system/images/photos/000/006/888/medium/Image3673.gif)](https://i.publiclab.org/system/images/photos/000/006/888/original/Image3673.gif)

Where 'm' is equal to .7/C, with C being the capacitor we use in the circuit.  Simple!

This means that the output of our 555 circuit is far easier to intepret.  A plot of frequency vs conductivity will yield a straight line.  And the circuit is very easy to tune in range -- the slope is .7/C, so if we want to keep our frequency values in a certain range (audio, say), we see how to change our capacitor value accordingly. For example:  larger R_water in the denominator will mean that the frequencies go down;  to bring them back up, we can use smaller C in the denominator.  This is nice! 

But it also means ...

### WIN #3: Easy calibration

> EDIT: This idea below doesn't work, because: math. See the comment section for a calibration idea involving a trimmer capacitor that should work!

We can now *calibrate a 555-based measurement device by adding a single potentiometer in series with the resistance being measured*.   Before, our only option to calibrate conductivity probes was to fiddle with the geometry of the probe.  But now, by adding a resistor to the circuit, we get:

> freq= .7/((R_tune+R_water)*C)

The difference between DIY probes will show up in R_water; by tuning R_tune, we can compensate for these differences.  NEAT!

More explanations / examples of all of this forthcoming, soon ...

Thanks again, Mark!

Cheers,
Don