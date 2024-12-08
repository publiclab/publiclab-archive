---
title: Riffle CT (Conductivity & Temp) Beta Design: Electronics, Enclosure, Probes, Data Collection
tagnames: water-quality, datalogger, logging, riffle, beta
author: donblair
path: /notes/donblair/12-13-2015/riffle-ct-conductivity-temp-beta-design-enclosure-probes-data-collection.md
nid: 12511
uid: 43651

---

# Riffle CT (Conductivity & Temp) Beta Design: Electronics, Enclosure, Probes, Data Collection

by [donblair](../profile/donblair) December 13, 2015 23:30

December 13, 2015 23:30 | Tags: [water-quality](../tag/water-quality), [datalogger](../tag/datalogger), [logging](../tag/logging), [riffle](../tag/riffle), [beta](../tag/beta)

Hi All,

For our "Beta Release" of the Riffle datalogger hardware, we're focusing on a particular use-case that has driven the project from the beginning:  logging temperature and conductivity data in a water body.  

So, for this initial release, we want to nail down the "canonical hardware" for our initial tests:  what is the basic kit required in order to have a field-deployable, underwater conductivity and temperature datalogger?

Based on recent experiences with limited deployments in Wisconsin, Cambridge, West Virginia, and Colombia, I'd say that we've got the following as our basic water monitor prototype:

### Riffle Beta Temp & Conductivity Datalogger

#### Enclosure

- A 500 mL water bottle as a standard, accessible enclosure

#### Electronics

- A Riffle datalogger, with microSD card (files [here](https://github.com/OpenWaterProject/riffle))
- A 'Coqui' conductivity and temperature sensor board see the "Beta" boards -- which I'm beginning to refer to as a "riffle-sensorboard-CT", [here](https://github.com/OpenWaterProject/riffle-sensorboard-CT)
- A ["AA" size 3.7 lithium battery](https://www.adafruit.com/products/1781) that fits inside a 500 mL water bottle mouth

#### Conductivity Probe

- Stainless steel metal screws through a bottle cap secured using rubber washers and nuts.  
- Alligator clip wires to connect the sensor board to the screws. 

#### Temperature Probe

Either a 10K Thermistor, or a Dallas 1-wire temperature probe (the new riffle-sensorboard-CT should accommodate both).

#### Data collection and data format

At this point, the default method for the "Beta 0.1.0" version is to seal up the bottle, deploy underwater, record to microSD card, then retrieve it.  The default data format is CSV. 

### Thoughts?

Is this the best basic kit, to start with?  Any thoughts on improvements / additions greatly appreciated!





