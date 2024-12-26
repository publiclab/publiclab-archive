---
title: "WIP Raspberry Pi Spectrometry automation "\ntagnames: 'spectrometry, activity:spectrometry'
author: jaksch
path: /notes/jaksch/07-23-2018/raspberry-pi-spectrometry-automation.md
nid: 16771
uid: 542671

---

# WIP Raspberry Pi Spectrometry automation 

by [jaksch](../profile/jaksch) | July 23, 2018 15:04

July 23, 2018 15:04 | Tags: [spectrometry](../tag/spectrometry), [activity:spectrometry](../tag/activity:spectrometry)

----

This is a rough idea for a project I'll be working on during a hacker camp in two weeks. I want to share my ideas already now, so I can get your input early on and still have time to order parts if needed. Please note that this is a project mainly for fun and not scientific accuracy, so sorry if it might seem a bit messy ;)

The result should be one single device, at the core of which will be a lego spectrometer (RPI camera) controlled by a Raspberry Pi. It should work like this:

1. Insert the sample cuvette
2. Push a button
3. A python script on the RPi reads the image from the camera, derives the spectrum, compares to a control (solvent only) and triggers some further processing
4. The result of the processing (I will describe in detail later) is represented by some RPi controlled LEDs

The main challenge for me will be to automate the whole process, s.t. only one button is necessary. Some ideas:

- [https://publiclab.org/n/15880](https://publiclab.org/n/15880) looks great and I think I can use its capturing logic.
- I could use spectralworkbench via POST to get the spectrum as a csv from the image, but I'm not sure if it's worth it. Also it would involve posting all the captures to SWB and it might be more than one per hour (the suggested limit)
- Alternatively I can do it myself: Transform the one-line cross section camera readout to wavelength domain using the positions of B2 and G2 found by CFL calibration. Then, for each wavelength, average the intensity of R, G and B to obtain the intensity. Is this actually correct?
- I didn't check out how to deal with background/solvent only, but I guess it's really just a simple subtraction...

This is really just a quick record, I will add more details later. Any ideas are very welcome! Thanks and looking forward :)

Jakob