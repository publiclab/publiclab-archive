---
title: "Removing ambient interference from turbidity measurements through signal modulation"

tagnames: 'water-quality, water, turbidity, open-water, barnstar:basic'
author: donblair
path: /notes/donblair/03-08-2016/removing-ambient-background-light-from-turbidity-measurements-through-signal-modulation.md
nid: 12782
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/014/674/original/fig9.png)

# Removing ambient interference from turbidity measurements through signal modulation

by [donblair](../../../profile/donblair) | March 08, 2016 04:12

March 08, 2016 04:12 | Tags: [water-quality](../tag/water-quality), [water](../tag/water), [turbidity](../tag/turbidity), [open-water](../tag/open-water), [barnstar:basic](../tag/barnstar:basic)

----

Turbidity is an optical measurement of suspended solids in solution -- a broadly useful water quality parameter. Typical methods for measuring turbidity involve shining light into a solution, and measuring how much light either passes through the solution, or is scattered back at an angle. 

While there are several 'gotchas' in turbidity measurements -- including the effect of temperature on typical LEDs and photodiodes, and differences in light scattering intensity and angle depending on the color and size of particles -- one very basic, immediate issue is:  any changes in ambient lighting (e.g. sunlight, or light from electric lights in a room) can affect the light level measurements.

How to block ambient light? Mechanical methods are certainly possible, but they add significant complexity to enclosure designs.  One wants water to flow freely past a light sensor (so that the sensor responds to sudden changes in turbidity), but wants the requisite opening to somehow also block light.  

Are there non-mechanical means of reducing the impact of ambient light? Yes.

I'd recently been exposed to the concept of a [phase locked loop](https://en.wikipedia.org/wiki/Phase-locked_loop), and, thinking it might be relevant to this issue of ambient light removal, did a little searching online.

I found one a particularly clear exposition of this concept -- relating it directly to photodiode measurements -- in Analog Devices' 'Technical Article MS-2624: Optimizing Precision Photodiode Sensor Circuit Design', by Luis Orozco -- which you can find it online, [here](http://www.analog.com/media/en/technical-documentation/technical-articles/Optimizing-Precision-Photodiode-Sensor-Circuit-Design-MS-2624.pdf);  a local copy is [here](https://raw.githubusercontent.com/p-v-o-s/turbidity-research/master/assets/ms2624.pdf).

## Frequency filters

The basic idea, here, revolves around the fact that, on the signal detection side of things, there exist fairly straightforward techniques for filtering measured signals in such a way that we remove any frequencies in the signal that are outside a specificed range.  

For example, if we are only interested in frequencies higher than a certain frequency threshold, we can use what is called a [high pass filter](https://en.wikipedia.org/wiki/High-pass_filter)-- a filter (in an electronic circuit, this usually consists of a resistor and a capacitor) that dampens any frequencies below the threshold, and allows all frequencies higher than the threshold to "pass" through the filter and into our detection circuitry. 

Correspondingly, if we were only interested in frequencies lower than a threshold, we'd use a [low pass filter](https://en.wikipedia.org/wiki/Low-pass_filter), which works in a similar way.

If we're only interested in frequencies that are within a certain narrow frequency band, we use a [band pass filter](https://en.wikipedia.org/wiki/Band-pass_filter). 

There are lots of tutorials and explanations for how to build filter circuits for electronics.  A nice exposition of building a band pass filter is [here](http://www.electronics-tutorials.ws/filter/filter_7.html).


Here's a nice graphic illustrating the effect of a band pass filter on a signal ([source](https://hossainhere.wordpress.com/2010/07/19/bandpass-filter/)):

<img src="https://raw.githubusercontent.com/p-v-o-s/turbidity-research/master/assets/bandpass.gif">

The main thing to notice is here is that a band pass filter allows us to select a frequency range of interest, and ignore any other frequencies in our signal.


## Modulating the emitter, filtering the detector 

So, given that we can detect certain ranges of frequencies, how does this help us?  Well, on the 'emitter' side -- the emitter being e.g. an LED that we're shining into our water sample -- we can simply e.g. switch our LED on and off at a particular frequency, $f$, and choose $f$ so that it is very different from frequencies associated with processes that we don't care about -- changes in ambient light due to day/night cycles ... shadows caused by clouds passing overhead (which might lead to light fluctuations of 1 Hz or less) ... or flickering due to electrical lighting (at e.g. 60 Hz).  

That is -- by switching the LED emitter that is shining into the water on/off at some frequency t(1 kHz, say) that is different from the noise sources -- and then, on the other side, using a band pass filter so that we're only 'listening' for signal frequencies that are near 1 kHz -- we can effectively suppress interfering signals, and get an output from the measurement photodiode whose output correlates only with the the ~ 1 kHz light pulses coming out of the water, and suppressed all other frequencies.  When the 1 kHz light pulses are sent through or scattered off the water, the amplitude of the measured pulses will still be enchanced or diminished by the presence or absence of particles in the water, so we'll still have our measure of turbidity; it's just that the input signal and the measurement signal will all be restricted to occur at 1 kHz, away from other interfering frequencies.  

This is illustrated in Figure 9 from [MS 2624](https://raw.githubusercontent.com/p-v-o-s/turbidity-research/master/assets/ms2624.pdf):

<a href="https://raw.githubusercontent.com/p-v-o-s/turbidity-research/master/assets/fig9.png"><img src="https://raw.githubusercontent.com/p-v-o-s/turbidity-research/master/assets/fig9.png" width=400></a>

One subtlety in implementing this approach: if the modulating signal is a square wave (i.e., we simply turn the LED 'on' and 'off' at a certain rate), then the resultant frequency spectrum involves lots of harmonics -- multiples of the fundamental switching frequency.  Some of these harmonics might have overlap with interfering frequencies that we wanted to avoid, and will make signal filtering more complicated.  One solution to this is use a sinusoidal modulation signal (not too difficult); another solution is to pick a modulation frequency the harmonics of which don't overlap significantly with expected interference frequencies.

Note:  these concepts are apparently quite related to [how IR remote LEDs work](https://learn.sparkfun.com/tutorials/ir-communication). Most IR remotes seem to use a 'carrier frequency' of around 30 kHz, which is a frequency chosen to be sufficiently different from most natural sources of interference (ambient light) that a detector circuit tuned that frequency can ignore those other sources.  It's also not apparently unrelated to how FM radio detector circuits work.  


## Synchronous detection 

Here's another trick:  because we are in control of modulating the signal, and because our detection circuitry for turbidity (a photodiode) is likely going to be physically proximate to our emitter circuitry (an LED), we can further reduce noise / unwanted signals by measuring our oscillating detector signal only at those times that it's in the 'on' state.  I.e., if we're switching our LED on/off at 1 kHz, we can use the same on/off timing when measuring so that we only measure the voltage on our detector photodiode at 1 kHz, in sync with our emitter.

Another 'gotcha' emerges here: we need to be careful about any phase differences between our emitter frequency and what arrives at the detector.  Because of reflections and other interactions, the 'peak' of our emitter frequency might not overlap precisely with 'peaks' at our detector.  This can either be accounted for manually (by introducing timing delays in our synchronized measuremend) or through more sophisticated circuitry ('phase lock loop' circuits often have circuits that can shift the phase of detected signals to match the modulation clock frequency) or digital signal processing techniques.

## Implementation 

Of the techniques above, the easiest to implement quickly seems to be: modulating the emitter (LED) at a particular frequency (1 kHz, say), and then place a band-pass filter on the detection circuit (a photodiode) that is fairly tightly focused on the modulation frequency (1 kHz).  The synchronous detection circuit would then not be very hard to implement as a next further step.  The basic experiment might be:  place the photodiode 

## References

Main reference article:  http://www.analog.com/media/en/technical-documentation/technical-articles/Optimizing-Precision-Photodiode-Sensor-Circuit-Design-MS-2624.pdf

IR Leds: http://www.jensign.com/opto/ledmodulator/

FM: https://en.wikipedia.org/wiki/Frequency_modulation#Noise_reduction

