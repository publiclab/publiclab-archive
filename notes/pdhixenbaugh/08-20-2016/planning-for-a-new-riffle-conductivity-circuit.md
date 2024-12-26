---
title: "Planning for a new Riffle conductivity circuit"\ntagnames: 'conductivity, riffle'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/08-20-2016/planning-for-a-new-riffle-conductivity-circuit.md
nid: 13374
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/017/705/original/images.jpg)

# Planning for a new Riffle conductivity circuit

by [pdhixenbaugh](../profile/pdhixenbaugh) | August 20, 2016 21:32

August 20, 2016 21:32 | Tags: [conductivity](../tag/conductivity), [riffle](../tag/riffle)

----

###What I want to do
I want to build a conductivity sensor that can attach to the riffle inside of a water bottle, for use measuring conductivity changes from road salts during the winter season. The coqui is a good starting point, however there are two questions I have:
* Can we use a much smaller voltage to measure the resistance across the water, since we don't want to risk hydrolyzing the water and introducing error?
* How can you tell the riffle to output a voltage to the conductivity circuit


###My plan for action
* If I remember correctly, one of my physical chemistry experiments called for creating a circuit to pass a small current across a "cell" of arbitrary design (two electrodes), and then using an opamp to amplify the signal before it was read by our MATLAB software. I will see if I can find this lab procedure in my notes.
* I will gather other research notes and emails detailing the methods others have used
* I will read more about the arduino and the riffle to find out how to interface it with such a sensor.


###Questions and next steps
* If anyone has procedures for creating sensors to use with the riffle, or conductivity sensor designs, I would be interested in reading those.
* My goal is to have an attempt by Friday 8/26
 
###Why I'm interested
Stream salinity is a growing environmental impact. If salinity spikes in small streams from de-icing salts, it can be lethal to stream life. Also, stream salinity slowly increases year after year, and does not quickly fall back down when salt use stops. Stream salinity can be readily addressed by implementing BMPs to prevent de-icing salt overuse. The local Maryland Department of the Environment is developing research and possibly a Total Maximum Daily Load (TMDL) allowance for salt. I think developing a conductivity reader that is inexpensive and works well could help cut down on stream salinity.