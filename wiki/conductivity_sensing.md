---
title: "conductivity_sensing"

tagnames: 'conductivity, riffle, open-water, parent:conductivity'
author: donblair
path: /wiki/conductivity_sensing.md
nid: 13477
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/018/139/original/conductivity_ac.png)

# conductivity_sensing

by [donblair](../profile/donblair)

September 24, 2016 01:43 | Tags: [conductivity](../tag/conductivity), [riffle](../tag/riffle), [open-water](../tag/open-water), [parent:conductivity](../tag/parent:conductivity)

----

# DIY conductivity sensor designs

## Background

Conductivity is an important water quality parameter, and is widely used to assess environmental conditions in hydrology, oceanography, and pollution monitoring. This repository describes some efforts towards developing DIY circuits for assessing water conductivity. 

Some of the applications that have inspired this work include:

**Road Salt and the LovoTech network**. Mark Green of Plymouth State initially proposed the idea of an open source design for a conductivity data logger.  His [LoVoTECHS](http://jupiter.plymouth.edu/~mbgreen/Mark_B._Green/LoVoTECS.html) network in New Hampshire already consisted of many volunteer stewards of conductivity monitors throughout a watershed, with the idea of assessing the impact and dynamics of road salt within the local ecosystem. 

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/lovotechs.png" width=300>

More background reading on road salt:
- http://des.nh.gov/organization/divisions/water/wmb/was/salt-reduction-initiative/impacts.htm
- http://www.boston.com/news/local-news/2015/01/16/road-salt-where-does-it-come-from-where-does-it-go
- http://news.nationalgeographic.com/news/2014/02/140212-road-salt-shortages-melting-ice-snow-science/
- http://www.wired.com/2015/03/road-salt-polluting-rivers/
- http://science.howstuffworks.com/nature/climate-weather/atmospheric/road-salt.htm

**Salt water intrustion.**  [Salt water intrustion](https://en.wikipedia.org/wiki/Saltwater_intrusion) is increasingly an issue world-wide, as groundwater extraction and sea level rise result in relatively saline waters contaminating fresh water supplies.  Assessing and documenting the extent of this problem helps to inform solutions and predict trends.

**Agriculture.**  Irrigation, and other uses of water in agriculture, results in significant increases in the salinity of water, usually rendering it unsafe for drinking.  More background:

- http://www.fao.org/docrep/t0667e/t0667e05.htm

**Hydraulic Fracturing and pollution.**  The materials used in hydraulic fracturing or 'fracking' usually have very high specific conductivity; measuring conductivity of groundwater and surface water in the areas near a fracking operation may provide an indication of the extent of contamination of local water sources by fracking fluid.  More info: 

- http://www.fondriest.com/news/tracking-fracking.htm

## Basic principles of conductivity measurement

[To be added -- for now, see references below:]

- General background here: https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
- http://www2.latech.edu/~dehall/LWTL/ENGR121/notes/3_conductivity_sensor_intro.pdf
- https://www.snowpure.com/docs/FAQ_Conductivity_Thornton.pdf
- Fondriest : http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/
- http://www.analytical-chemistry.uoc.gr/files/items/6/618/agwgimometria_2.pdf
- http://www.waterboards.ca.gov/water_issues/programs/swamp/docs/cwt/guidance/3130en.pdf
- https://www.pasco.com/support/technical-support/technote/techIDlookup.cfm?TechNoteID=514
- http://www1.udel.edu/pchem/C446/Experiments/exp4.pdf

## Characteristics of a good conductivity sensor



In order to make reasonable conductivity measurements with a probe in solution, various electrochemical properties of the system have led researchers and instrumentation designers to devices that take into account the following considerations:

**Input signal**.

In order to avoid polarizing the solution being tested, and to minimize the effects of corrosion on the electrodes used in the probe, the input signal into the water should be:

- alternating current
- with a symmetric oscillation with respect to both electrodes (no net polarization)
- low voltage, significantly below the electrolysis threshold for water (1.1 Volts).

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/conductivity_ac.png" width=400>

_Source: http://www.sensorex.com/technical-education/_

**Probe design.**

The probe geometry and materials greatly affect the quality of the conductivity measurement.  Probes should:

- Use an electrode material that is less likely to corrode in the solution being tested (stainless steel and platinum are common choices)
- Be arranged in a geometry that minimized 'fringing effects', or stray electric fields that may interact with the rest of the enclosure, or e.g. a beaker of test solution.  There are indications in the literature that the fringing problem is **worst** when the individual electrode area (the exposed metal of the electrode) and the spacing between the electrodes is about equal.

**Fringing effects in two probe designs**.  If two probes consisting of 'point source' geometries are used (screws or bolts with only a small, round nub of metal exposed), relatively larger 'fringing fields' are likely to result -- meaning that the electrical measurement being made will be affected by the presence of nearby objects (a beaker wall, for example).

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/fields.gif">

This effect might not be problematic in the field (in a river, say), but can render calibration on a desktop difficult.

**'Four probe' measurements** help to mitigate some of these effects by decoupling the input probes from the measurement circuitry -- the input probes may corrode, but this does not affect the measurement. More details on this approach [here](http://www.globalspec.com/learnmore/sensors_transducers_detectors/analytical_sensors/electrodes_conductivity).

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/four_probe.gif" width=600>
_Source: http://www.globalspec.com/learnmore/sensors_transducers_detectors/analytical_sensors/electrodes_conductivity_

**Toroidal probe designs** avoid the corrosion issue altogether -- these devices are completely separated from the liquid being tested, and interact with it only via EM fields.  More detail [here](http://www.globalspec.com/learnmore/sensors_transducers_detectors/analytical_sensors/electrodes_conductivity). 

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/toroid.png" width=600>
_Source: https://www.ibt.kit.edu/img/content/prozess2_-en_markus_voelker.png_

**Simple DIY approaches**.  The relative advantages of various approaches to probe materials and geometry need to be weighed against the cost and complexity of constructing the probes.  The wide availability and durability of PVC has led to several designs using this material (see, for example, [this one](https://publiclab.org/notes/bhickman/05-09-2016/conductivity-and-temperature-meter).  

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/pvc_probe.jpg" width=300>

Plastic bottles, with probes attached either to the screw cap, or to rubber stoppers inserted into the bottle opening, have also been explored (for example, [here](https://publiclab.org/notes/mathew/02-10-2016/riffle-conductivity-caps-and-other-housing-ideas)). 

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/mathew_screws_a.jpg" width=300>

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/rubber_stopper.jpg" width=300>

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/rubber_stopper_mud.jpg" width=300>


**Temperature compensation.**

Conductivity is affected by temperature:

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/temperature1.jpg">

In order to compare conductivity across liquids at different temperatures, the concept of 'specific conductivity' is used -- that is, the conductivity of the liquid 'if it were at 25 Celsius'.  The temperature dependence of conductivity depends on the particular mixture of ions in the solution, and so the correction parameters and equations used for shifting the measured conductivity to the expected value at 25 C need to chosen appropriately for the expected chemical makeup of the solution.  For more information, see 'Specific Conductance', [here](http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/#cond3), and an extended discussion [here](http://www.reagecon.com/pdf/technicalpapers/Effect_of_Temperature_TSP-07_Issue3.pdf). 

Often, the simplest, linear correction for the effect of temperature on conductivity is used:

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/linear_correction.png" >

Here, **t** is the temperature of the sample, **C_25** is the calculated conductivity at 25 C, **C_t** is the measured conductivity at temperature **t**, and **alpha** is a temperature coefficient chosen to be appropriate for the expected ion content of the solution being tested.  (For dilute solutions of most salts, alpha = 0.02 is a fairly good approximation; better values can be chosen if more information is known about the content of the solution.)
  
## Calibration techniques

**Commercial standard solutions.** 

- http://www.davis.com/Product/Oakton_conductivity_solution_2764_S/YX-00653-20?referred_id=3388&gclid=Cj0KEQiArou2BRDcoN_c6NDI3oMBEiQANeix5up7px8eL9rByANeftTaCMyJusFlYSJtDb5ElptPo_AaAiaH8P8HAQ

**DIY options.**

- Saline solution
- Soda
- Salt and distilled water

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/hick_calibration.png" width=300>
<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/hick_calibration_2.png" width=300>

**Conductivity ranges.**

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/conductivity_averages.jpg">

## DIY sensor designs

[TODO: 

- wein bridge oscillator vs. 555 vs. square wave from microcontroller vs sine wave
- describe utility of op-amps
- describe various ways of measuring the resistance -- bridge circuits vs. op-amp voltage divider 
]

**Ben Gamari.**

Ref: RIffle design, which includes conductivity sensor.

**Coqui.**  

Design.
https://publiclab.org/wiki/coqui
https://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/coqui.png" width=600>

Problems:

- https://publiclab.org/notes/donblair/01-07-2016/conductivity-sensing-open-questions

**Ben Hickman.**

- https://publiclab.org/notes/JSummers/11-21-2013/conductivity-meter
- https://publiclab.org/notes/bhickman/05-09-2016/conductivity-and-temperature-meter

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/hickman.png" width=300>

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/hickman_labeled.png" width=300>

**Sparky's Widgets.**

- http://hackaday.com/2014/11/10/accurately-measuring-electrical-conductivity/
- https://github.com/SparkysWidgets/MinieCHW

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/sparky.png" width=300>

**openCTD.**

openCTD project
https://github.com/OceanographyforEveryone/OpenCTD
http://oceanographyforeveryone.com/

[Atlas Scientific conductivity circuit](http://www.atlas-scientific.com/product_pages/circuits/ezo_ec.html)

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/atlas.jpg" width=300>

**Vintage.**

http://www.ullasmann.eu/Doc/Salt_Concentration_Meter.pdf

<img src="https://raw.githubusercontent.com/OpenWaterProject/riffle_328-conductivity/master/pics/vintage_op_amp.png" width=300>

## Research directions


## Research Notes on Public Lab

All research notes tagged 'conductivity': 
- https://publiclab.org/tag/conductivity

'Coqui' approach:
- https://publiclab.org/wiki/coqui
- https://publiclab.org/wiki/555-conductivity-meter
- https://publiclab.org/notes/donblair/07-11-2014/simple-555-conductivity-meter
- https://publiclab.org/wiki/coqui-a-simple-water-conductivity-sensor
- https://publiclab.org/notes/donblair/01-07-2016/conductivity-sensing-open-questions
- https://publiclab.org/notes/rebeccah/08-29-2016/riffle-device-water-conductivity-sensor
- https://publiclab.org/notes/donblair/09-30-2014/making-a-diy-conductivity-probe-from-a-water-bottle-and-metal-screws

Jack Summers, Ben Hickman:
- https://publiclab.org/notes/bhickman/05-09-2016/conductivity-and-temperature-meter
- https://publiclab.org/notes/JSummers/11-21-2013/conductivity-meter

Patrick Hixenbaugh:
- https://publiclab.org/notes/pdhixenbaugh/08-20-2016/planning-for-a-new-riffle-conductivity-circuit

General:
- https://publiclab.org/notes/markwh/10-29-2014/calibrating-arduino-based-conductivity-meter
- https://publiclab.org/notes/donblair/06-18-2014/using-an-audio-jack-to-assess-conductivity

## References

- http://mediashift.org/2012/04/water-hackathon-aims-to-understand-brooklyns-water-pollution096/


## Guides to conductivity

- http://www.ott.com/blog/2015/04/measuring-conductivity-of-water-temperature-compensation-and-derivatives/
- http://www.globalspec.com/learnmore/sensors_transducers_detectors/analytical_sensors/electrodes_conductivity
- http://www.tek.com/sites/tek.com/files/media/document/resources/2615%204%20Point%20Probe%20AN.pdf
- http://www2.latech.edu/~dehall/LWTL/ENGR121/notes/3_conductivity_sensor_intro.pdf
- https://www.snowpure.com/docs/FAQ_Conductivity_Thornton.pdf
- Fondriest : http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/
- http://www.analytical-chemistry.uoc.gr/files/items/6/618/agwgimometria_2.pdf
- http://www.waterboards.ca.gov/water_issues/programs/swamp/docs/cwt/guidance/3130en.pdf
- https://www.pasco.com/support/technical-support/technote/techIDlookup.cfm?TechNoteID=514
- http://www1.udel.edu/pchem/C446/Experiments/exp4.pdf

## References for conductivity levels

- http://www.mbhes.com/conductivity_measurement.htm
- Relationship between conductivity and water quality: http://www.lenntech.com/applications/ultrapure/conductivity/water-conductivity.htm


