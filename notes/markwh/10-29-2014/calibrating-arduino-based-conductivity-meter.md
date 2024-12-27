---
title: "Calibrating Arduino-based conductivity meter"

tagnames: 'umass-amherst, riffle, publiclab-at-umass, first-time-poster'
author: markwh
path: /notes/markwh/10-29-2014/calibrating-arduino-based-conductivity-meter.md
nid: 11307
uid: 428820

cids: 10659,10662,10663,10672,13353

---

![](https://publiclab.org/public/system/images/photos/000/007/672/original/calibration1.png)

# Calibrating Arduino-based conductivity meter

by [markwh](../../../profile/markwh) | October 29, 2014 01:55

October 29, 2014 01:55 | Tags: [umass-amherst](../tag/umass-amherst), [riffle](../tag/riffle), [publiclab-at-umass](../tag/publiclab-at-umass), [first-time-poster](../tag/first-time-poster)

----

###What I want to do

We want to calibrate our arduino-based conductivity meter to give true measurements of specific conductivity (in microsiemens per cm). Our current device measures conductivity on a qualitative level--adding ions to the water gives larger numbers; adding purer water gives lower numbers, but that's just not good enough. 

###My attempt and results

We used a temperature/ conductivity probe borrowed from a lab in the UMass CEE department. The idea was to take measurements using both devices--ours and the lab probe--for a range of conductivity. The steps were as follows:

1. Beginning with cold tap water, measure temperature and specific conductivity using the lab probe, record measurements
2. Remove probe, submerse our device, record measured temperature and uncalibrated "conductivity".
3. Remove device, add a smidgen of salt, stir water until dissolved. 
4. Repeat septs 1-3 until a sufficiently large range of conductivity is measured by both devices.
5. Plot data, fit a curve describing the relationship and adjust computation in Arduino code.


###Questions and next steps

The observed relationship between measurements from the two devices was strangely nonlinear. We wonder if this has something to do with the range of voltage measurements the circuit is capable of, given its configuration (e.g. voltage supplied, resistance of resitors used). Still, the data show a clear monotonic relationship that is well described using a 3rd-order polynomial function:


[![calibration1.png](https://i.publiclab.org/system/images/photos/000/007/671/medium/calibration1.png)](https://i.publiclab.org/system/images/photos/000/007/671/original/calibration1.png)

While this provides a great improvement in accuracy, further calibration will likely be necessary, particularly in the low conductivity range. 

