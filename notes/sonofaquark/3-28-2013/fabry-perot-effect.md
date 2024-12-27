---
title: "Fabry-Perot Effect"

tagnames: 'spectrometer'
author: sonofaquark
path: /notes/sonofaquark/3-28-2013/fabry-perot-effect.md
nid: 6581
uid: 54330

cids: 4274,4282,4283,4290,4295,4299,4306,4475,4524

---

# Fabry-Perot Effect

by [sonofaquark](../../../profile/sonofaquark) | March 28, 2013 17:56

March 28, 2013 17:56 | Tags: [spectrometer](../tag/spectrometer)

----

I have seen this interferometer effect before between the array cover glass and the array. It is demonstrated quite clearly in this spectrum.https://spectralworkbench.org/analyze/spectrum/5479

We tried AR coated cover glass with little improvement. The effect was virtually eliminated with a simple correction.

1) create a file with the spectral radiance data of the full spectrum light source

2) show that source to the spectrometer

3) produce a pixel by pixel amplitude scaling factor to force the display to agree with the file created in step 1, and use that correction thereafter when displaying subsequent readings.

I know this sounds too simple to work, but it really does.

The spectral emissivity of tungsten can be found in materials handbooks. This might be substituted for step 1 and the spectrometer shown a light bulb for the correction to see how well it works. It might be very interesting. I have posted a link to a paper on the subject.

http://eprints.lancs.ac.uk/6736/1/inproc_326.pdf