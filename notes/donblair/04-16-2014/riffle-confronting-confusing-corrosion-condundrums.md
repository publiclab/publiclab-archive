---
title: "RIFFLE: Confronting Confusing Corrosion Condundrums"

tagnames: 'water-quality, water-monitoring, conductivity, riffle, open-water, coqui, corrosion'
author: donblair
path: /notes/donblair/04-16-2014/riffle-confronting-confusing-corrosion-condundrums.md
nid: 10318
uid: 43651

cids: 8788,8790,8792,8796,8809,8810,8822,9648

---

![](https://publiclab.org/public/system/images/photos/000/003/689/original/IMG_20140415_193425_%281%29.jpg)

# RIFFLE: Confronting Confusing Corrosion Condundrums

by [donblair](../../../profile/donblair) | April 16, 2014 02:09

April 16, 2014 02:09 | Tags: [water-quality](../tag/water-quality), [water-monitoring](../tag/water-monitoring), [conductivity](../tag/conductivity), [riffle](../tag/riffle), [open-water](../tag/open-water), [coqui](../tag/coqui), [corrosion](../tag/corrosion)

----

###What I want to do

In our last [research note](http://publiclab.org/notes/donblair/04-14-2014/riffle-conductivity-adhesive-updates), we left off with a question -- what was causing our odd conductivity results?  

Quick recap of our problem.  To measure the conductivity of water, we're using the following circuit -- suggested to us by kindly folks at the [CREATE lab at CMU](http://www.cmucreatelab.org/):

[![riffle-conductivity.png](https://i.publiclab.org/system/images/photos/000/003/651/medium/riffle-conductivity.png)](https://i.publiclab.org/system/images/photos/000/003/651/original/riffle-conductivity.png)

**Background.** Basically, we're monitoring the voltage across a capacitor that is in series with electrodes that are sitting in water.  When we apply a high voltage to "IN", the capacitor C starts charging up; and the rate of charging depends on the combined resistance of the resistor we've placed in the circuit, R, as well as Rwater, the resistance of the water between the two electrodes.  We then measure the time it takes for the voltage across the capacitor ("Vout" in the diagram) to reach a threshold value ("Vref" + some amount, delta), as one metric for the conductivity of the water between the electrodes.  We then apply a low voltage to "IN", and the capacitor C starts discharging -- the rate of discharge is again dependent on (R + Rwater) -- and we measure the time it takes for "Vout" to decrease down to ("Vref" - some amount, delta) .  The idea is that we measure independently the time taken to charge, and discharge, the capacitor -- and both of these numbers should reflect, in some way (yet to be determined / calibrated precisely), the relative conductivity of the solution. By continuously cycling "IN" from 'high' to 'low voltage', and monitoring these 'capacitor charge / discharge' times, we can thus track the conductivity over time.

### Weird Results

So, after putting the circuit together, our first test was to take two screws that were lying around in Ben's pad, and try our test out in some water.  Here were the confusing results:

[![figure_1.png](https://i.publiclab.org/system/images/photos/000/003/647/medium/figure_1.png)](https://i.publiclab.org/system/images/photos/000/003/647/original/figure_1.png)

The upper plot is the 'capacitor discharge time for one cycle' as a function of cycle index, and the lower plot is 'capacitor charge time for one cycle' as a function of cycle index.  You see in the plot that both numbers are exhibiting significant drift over short periods of time (each 'cycle' is take once a second, so we're seeing conductivity change significantly over the course of just a minute or so).  

### Even worse ...

Furthermore, this drift effect is huge compared to very substantial changes in salt concentration -- one of the initial 'jumps' in our signal corresponds to having dumped in a bunch saline solution, and the difference in signal was quickly overwhelmed by the signal 'drift':

[![saltdump.png](https://i.publiclab.org/system/images/photos/000/003/682/medium/saltdump.png)](https://i.publiclab.org/system/images/photos/000/003/682/original/saltdump.png)

And, on top of all that -- what's going on with the strange difference in behavior exhibited in the top and bottom curves?  Our expectation was that the time to 'charge' and 'discharge' the capacitor should be pretty similar ... 

### What is to be done?

So, Ben set about trying to figure out what was going on.  We considered ambient temperature differences, problems with the firmware, corrosion of the electrodes ... at some point we even took the probe out of water, and tried a resistor across the electrodes.

To make sure that the problem wasn't simply corrosion, we redid our setup with two stainless steel wires.  At first this seemed to fix the problem, but we were still noticing significant drift.

**Then Ben realized**:  his stainless steel wire setup was connected to a perfboard, and some of the perfboard copper, electrically connected to our circuit, was sitting in the water along with the stainless steel.  A previously unidentified source of corrosion in the system!  So Ben rearranged the probe setup so that only the wire tips were dangling into the solution:

[![IMG_20140415_193425.jpg](https://i.publiclab.org/system/images/photos/000/003/683/medium/IMG_20140415_193425.jpg)](https://i.publiclab.org/system/images/photos/000/003/683/original/IMG_20140415_193425.jpg)

(Note the picture of the oscilloscope in the background -- a very useful diagnostic tool for this sort of AC signal work!  It'd be great if digital oscilloscopes were less pricey ... alas ... )

He started collecting data, and ...

### Provisional success!

[![figB.png](https://i.publiclab.org/system/images/photos/000/003/686/medium/figB.png)](https://i.publiclab.org/system/images/photos/000/003/686/original/figB.png)

**Woohoo!**  His initial measurement of the solution's conductivity now looked as flat as ... something really, really flat!  A steady conductivity signal, over around 12 minutes (each 'cycle' number on the x-axis represents another .5 seconds).

Further, now the 'fall' (top curve) and 'fall' (bottom curve) plots resemble one another much more.  Seems like we're getting somewhere ...

### Add a pinch more salt ...

So then Ben tried the following:  he began by adding a lot of salt to some tap water, and then measured the conductivity as he diluted the solution.  Here's what he got:

[![figC.png](https://i.publiclab.org/system/images/photos/000/003/687/medium/figC.png)](https://i.publiclab.org/system/images/photos/000/003/687/original/figC.png)

**Woohoo!**  The various salt concentrations for the above plot were:

t=150 through t=275        --     2470uS/cm

t=275 through t=500        --     1550uS/cm

t=500 through t=675      --       1270uS/cm

### Many, many more pinches ...

We quickly checked a [table of some common salt concentrations](http://www.mbhes.com/conductivity_measurement.htm), and realized that it'd be nice to keep diluting further, and watch the signal evolve.  For example, here are some common salt concentrations in water, in uS/cm:

Distilled water: 0.5 uS/cm
Domestic "tap" water: 500-800
Potable water (max): 1055 uS/cm
Sea water: 56,000 uS/ cm
Brackish water: 100,000	uS/cm

He diluted the solution all the way down to near the level of Amherst tap water (94
μS/cm, at the location he was measuring): 

[![figA.png](https://i.publiclab.org/system/images/photos/000/003/688/medium/figA.png)](https://i.publiclab.org/system/images/photos/000/003/688/original/figA.png)

The corresponding concentrations in the above plot are here, where 't' is the time index on the bottom of the chart (each time tick = .5 seconds):

t=150  through t=275         --    2470 μS/cm

t=275  through t=500          --   1550 μS/cm

t=500  through t=1000        --    1270 μS/cm  (close to the max for potable water)

t=1000 through t=1600      --      588  μS/cm  (some domestic tap water)

t=1600 through t=1800      --      476  μS/cm

t=1800 through t=2100      --      410  μS/cm

t=2100 through t=2800      --      307  μS/cm

t=2800 through t=3200      --      227  μS/cm

t=3200 through t=3600      --      179  μS/cm  *

t=3600 through t=3900      --     153  μS/cm

t=3900 through t=4100       --     134  μS/cm

t=4100 onward      --             122  μS/cm  (close to Amherst tap water -- yay, Amherst!)

* slight bump during this data-point due to fiddling with scope probe
  attenuation

### Whee!

It seems that we can nicely distinguish various conductivity levels!

### Questions and next steps

**We can still see a bit of a drift issue** in that last plot at the lowest conductivity values (see how the final 'semi-plateau' in our plot trends down / up for the top / bottom curves in that last plot, above). Our current thinking about this is as follows.  Our measurement of the 'charge / discharge' on the capacitor involves an oscillatory signal (apply a 'high' voltage on the 'IN' pin, wait until the capacitor C reaches a 'high voltage' threshold, and record the time it takes for this to happen; then apply a 'low' voltage on the 'IN' pin, wait until the capacitor C reaches a 'low voltage' threshold, and record the time it takes for this to happen; repeat ...).  This oscillation a) allows us to assess the level of conductivity by measuring the capacitor C's charging / discharging time, but it also b) helps prevent polarization in the water / at the electrodes by alternating the direction of the electric field between the two electrodes -- especially if the oscillation is rapid (1 kHz or more).  A possible issue, however, is that when the conductivity of the water is very low, our circuit's oscillation frequency becomes sufficiently low that polarization becomes a significant effect.  We might be able to boost the oscillation frequency by choosing a different capacitance value, C, and we're going to try this out next.  We'll also likely have some stainless steel screws arriving in the mail tomorrow, which we're eager to try as electrodes ... stay tuned!
