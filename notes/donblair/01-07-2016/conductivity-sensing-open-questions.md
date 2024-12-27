---
title: "Conductivity Sensing: Open Questions"

tagnames: 'water-sensing, water-monitoring, conductivity, riffle, open-water, 555'
author: donblair
path: /notes/donblair/01-07-2016/conductivity-sensing-open-questions.md
nid: 12569
uid: 43651

cids: 13287,13288,13803,13805,16293,16294,18403

---

![](https://publiclab.org/public/system/images/photos/000/013/539/original/strayLines.gif)

# Conductivity Sensing: Open Questions

by [donblair](../../../profile/donblair) | January 07, 2016 17:55

January 07, 2016 17:55 | Tags: [water-sensing](../tag/water-sensing), [water-monitoring](../tag/water-monitoring), [conductivity](../tag/conductivity), [riffle](../tag/riffle), [open-water](../tag/open-water), [555](../tag/555)

----

### Design Goals

A lot of people are interested in measuring conductivity in liquids -- because it provides a useful picture of how much stuff has dissolved in the liquid, it has applications in monitoring contaminants in water, as well as a host of other applications.  I've been finding through readings online that are many subtleties to measuring conductivity, and typical commercial instruments employ lots of little tricks to get the most accurate and precise measurements possible.  The goal of the Riffle project has been to make effective water monitoring as accessible as possible; so, if some of these tricks involve e.g. platinum electrodes, we might consider a tradeoff between e.g. sensor reliability and accessibility -- maybe stainless steel screws provide good enough reliability for most of what we want to do. One complication is that we don't yet know what sort of instrument quality we're aiming for; so, at this point, the goal has been "as good & accessible as possible".  

So, in that spirit, here are some questions that have arisen.  Some of them are already fairly well settled.

### Probe material

There are a lot of options here, but we were encouraged to see that some expensive commercial instruments use stainless steel screws for this purpose, so we were encouraged that we can simply go with that. So: probably 'solved', for now.

### Probe geometry and calibration container size

This is interesting.  The trick here is that electric field lines between the two probes "blossom out".  In a small container, this means that the field lines can interact with the container walls [REF NEEDED], affecting the measurement.  This isn't a problem for field measurements, necessarily (unless the device is inside another container, like PVC pipe) -- but it makes calibration in small containers a challenge -- we have found that the size of the small container, and how deep the probe is situated within it, affect the measurement significantly.  How 'small' is a small container, and how 'significant' is the effect?  We haven't really answered these questions yet, but they'll be important if we want to characterize the accuracy of our sensor. Some ideas:

- We can try to assess the effect that container size has on our measurement.  Likely the effect drops off asymptotically, and we can specify a particular minimal container size to get the error under X%. Issue: large quantities of standard conductivity solution might be a pain to source / create. 
- We can come up with a standard container geometry (i.e. a large yogurt container) and probe depth for making calibration measurements.  Then we can see how this changes in the field, and attempt to the relate the two measurements. 
- We can see what effect probe spacing and size has on the 'stray field' effect.  There are indications online [REF NEEDED] that the field effect is maximized (i.e., worst) when the probe spacing (the space between the screws) is comparable to the probe size (the head of the screws).  
- There are distinct advantages to using four probes, in lieu of two probes -- in terms of field effects, but also in terms of avoiding issues of corrosion.  This would require redesigning the circuit completely; but there are some examples of simple four probe circuit geometries out there to follow.

### Voltage level

Right now we're using a 555 timer running at 3.3V to make our measurement, which means that we're putting 3.3 Volts into the water when making the measurement.  All indications in my readings are that this is a Bad Idea, because electrolysis occurs above about 1.2 volts.  Most of the instrument schematics I've seen try to drop the voltage down at least below .5 volts.  Ideas:

- Try to run the 555 timer at < 1.2 volts.  There is, in fact, a [variant of the 555](http://www.digikey.com/product-detail/en/TLC551CD/296-11822-5-ND/382211) that runs as low as 1V.  This isn't great, but it's better than > 1.2 volts.  This approach would mean that we'd need to power the device via a voltage divider circuit (and an op-amp voltage follower, potentially?); then we'd need to amplify (via an op-amp, presumably) the output of the 555 back up to 3.3V, so that the Atmel328, running at 3.3V, could register the 'on / off' states of the 555 output as the full [0, 3.3V], and count the pulses appropriately.
- Use a different circuit for measuring conductivity.  There are several that I've found out there, and some of them seem fairly straightforward, would be lower-power than the 555, and have behavior that is easier to troubleshoot (the innards of the 555 are nicely understandable as far as ICs go, but they're still a bit complex to understand compared to e.g. a few resistors and a capacitor). 

### References

Here I'm going to throw in a bunch of useful references I've found recently (with help from Yagiz)

Great general references:
http://www.nist.gov/srm/upload/260-142-2ndVersion.pdf
http://www3.epa.gov/epawaste/hazard/testmethods/sw846/pdfs/9050a.pdf
http://www.currentseparations.com/issues/18-3/cs18-3c.pdf <-- really good

great thesis from the 60's:
http://scholarsmine.mst.edu/cgi/viewcontent.cgi?article=6741&context=masters_theses

description of the wein bridge oscillator
http://www.electronics-tutorials.ws/oscillator/wien_bridge.html

nice thesis on salinity
http://scholarcommons.usf.edu/cgi/viewcontent.cgi?article=3783&context=etd

nice guide to conductivity measurements
http://www.tau.ac.il/~chemlaba/Files/conductivity_guide_EN%20(2).pdf

great guide to AC current
http://www.allaboutcircuits.com/textbook/alternating-current/chpt-4/ac-capacitor-circuits/

great guide to bridge circuits
http://www.allaboutcircuits.com/textbook/alternating-current/chpt-12/ac-bridge-circuits/
-- symmetrical bridge measures unknown capacitor

"Addition of low-pass filter to “twin-T” feeds pure DC to measurement indicator", at this link:
twin-t circuit for differential capacitance:
http://www.allaboutcircuits.com/textbook/alternating-current/chpt-12/ac-instrumentation-transducers/

more good explanation of bridge circuits for measuring AC:
http://www.faqs.org/docs/electric/AC/AC_12.html

(same discussion as above link)

further explanation of twin-T filters
http://www.ele.uri.edu/courses/ele339/summer2015/LabElManualS06_rev2.pdf

self-calibrating twin-t circuit:
http://nvlpubs.nist.gov/nistpubs/jres/69C/jresv69Cn2p115_A1b.pdf

twin-t circuit in seawater analysis:
http://www.scirp.org/journal/PaperDownload.aspx?paperID=31248

good description of twin-t resistivity measurement circuit
http://www.ietlabs.com/pdf/Manuals/GR/821-A%20Twin-T%20Ckt.pdf

soil moisture measurements -- great description:
http://www.martechcon.com/SoilResist3c.PDF

history of impedance measurements -- fascinating
http://www.ietlabs.com/pdf/GenRad_History/A_History_of_Z_Measurement.pdf

explanation of four probe measurement
http://pec.sjtu.edu.cn/ols/DocumentLib/synthesis/072013010/unprotected-four-probe.pdf

this paper uses both methods (including 555 timer):
http://www.scirp.org/journal/PaperDownload.aspx?paperID=31248
and uses this chip:
http://www.njr.com/semicon/PDF/NJM4151_E.pdf


four probe measurement circuit:
http://leanhtuan.com/pdf/EC-4Electrode-Eng.pdf

good references on the four probe measurements
http://www.landviser.net/webfm_send/10

appropedia four probe measurements
http://www.appropedia.org/Four_Point_Resistivity_and_Conductivity_Type_Measurements_protocol:_MOST

great reference circuit, with precautions taken by instrument **** study this

http://www.mosaic-industries.com/embedded-systems/instrumentation/conductivity-meter/measurement-conductance-cell-constant

Fantastic reference!!
http://www.currentseparations.com/issues/18-3/cs18-3c.pdf

