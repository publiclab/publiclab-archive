---
title: "Horticultural Spectrometer Upgrade - Planning"\ntagnames: 'agriculture, spectrometry, spectroscopy, spectroscope, pi-camera, upgrade, first-time-poster, horticulture, pi-calibration'
author: jenjimah
path: /notes/jenjimah/04-07-2019/horticultural-spectroscope-upgrade-planning.md
nid: 18991
uid: 505738

---

![](https://publiclab.org/public/system/images/photos/000/031/193/original/IMG_9552.JPG)

# Horticultural Spectrometer Upgrade - Planning

by [jenjimah](../profile/jenjimah) | April 07, 2019 01:50

April 07, 2019 01:50 | Tags: [agriculture](../tag/agriculture), [spectrometry](../tag/spectrometry), [spectroscopy](../tag/spectroscopy), [spectroscope](../tag/spectroscope), [pi-camera](../tag/pi-camera), [upgrade](../tag/upgrade), [first-time-poster](../tag/first-time-poster), [horticulture](../tag/horticulture), [pi-calibration](../tag/pi-calibration)

----

**Objective: To create a spectrometer that has a few optimized functionalities for horticultural lighting research. This puts the price point up a bit, but hopefully will stay no greater than $100 USD.**

**How will this spectrometer be used?**

A calibrated spectrometer that measures ambient light is an important measurement tool for high quality horticultural lighting research. For many experiments, the goal is to evaluate various light treatments (e.g. with varying intensity or spectral quality) to see which produces desired outcomes in plant growth, flowering, or morphology (plant shape). A spectrometer is used to measure exactly how much light at which wavelengths will be received by the plants under each treatment. However, knowledge of just the lighting fixtures is not enough, because the intensity per m^2 changes with distance from the source roughly following the inverse square law, and also due to nearby reflective surfaces. Thus, the exact intensity has to be measured on a plane relevant to the plants, such as canopy height.

A practical method to characterize the light treatments is to take a series of measurements at pot-height or canopy-height after setting up the lights to get an average intensity and standard deviation, and to gauge the consistency of spectrum over the treatment area. Sometimes, if light intensity is substantially brighter in the center of the plot, this can be managed by periodically rotating the plants within a treatment (e.g. every few days) to reduce effects due to light variation.

**Functionality Needed:**

1. Extended range (at least 400 - 800 nm). UV would be great but technically too difficult to achieve
2. High resolution (1-2 nm)
3. Wavelength & Gain calibrated (using Spectral Workbench)
4. Live capture with a button to capture a "Dark spectrum" (noise subtraction), ability to set # of captures to average, and option for an output graph giving data in photon flux units (micromoles \* m^-2 \* s^-1)
5. Integration of light from 180 degrees (hemisphere) centered in the direction of the spectrometer opening, so the output represents the photon flux density on a horizontal plane.

**Upgrades required to achieve above functionality (based on the lego spectrometer kit):**

1\. NoIR camera upgrade to achieve extended range into the Near Infrared (NIR). This requires the use of a Raspberry Pi Zero W

2\. To improve resolution: In addition to the 8 MP camera, an upgraded diffraction grating and use of razor blades for the slit (target 0.1 mm) should maintain acceptable resolution. ([Photos](https://publiclab.org/notes/dhaffnersr/09-06-2016/microscopic-view-of-plab-acetate-slit-and-my-gillette-razor-blade-open-air-slit) and [Measurements](https://publiclab.org/notes/dhaffnersr/08-20-2016/eem-2d-spectrums-showing-evidence-of-attenuation-from-imperfections-in-acetate-film-strips "https://publiclab.org/notes/dhaffnersr/08-20-2016/eem-2d-spectrums-showing-evidence-of-attenuation-from-imperfections-in-acetate-film-strips") from dhaffnersr explained why using razor blades is a good choice, and see [Optimal Slit Width](https://publiclab.org/notes/stoft/03-01-2015/optimal-slit-width) post by stoft about why 0.09 mm is desirable)

3\. Calibration of wavelength can be done with a fluorescent light, gain can be calibrated using solar measurements or known light source (e.g. Solux)

4\. Live capture and processing will be achieved by programming the Pi Zero to act as a webcam, so it plugs into the USB slot in the laptop and can be used to Live Capture on Spectral Workbench just like any other webcam, except we maintain more control over the exposure time and camera settings. The extra processing required may be programmed on the Spectral Workbench capture module using Scripts, and since it's being processed on the laptop, the processing speed should still be fast.

5\. To enable light capture from 180 degrees centered on the direction of the spectrometer's opening, a cosine correcting diffusing material can be used, so that the light is collected from the entire horizontal surface of the spectrometer's tube opening rather than relying on the light being shone directly into the slit. I found a few candidates < $15 so far from ThorLabs.

---------

**Reference Professional Spectrometer:**

[STS-RAD from Ocean Optics](https://oceanoptics.com/product/sts-vis-rad/#tab-specifications "https://oceanoptics.com/product/sts-vis-rad/#tab-specifications")

Range: 350-800 nm  
Grating: 600 g/mm  
Slit: 50 µm  
Resolution: 3 nm  
Sampling Optics: CC-3-DA direct-attach cosine corrector (diameter: 7140 µm)

---------

  
**Progress:**

June 25, 2019 - [Assembly III](https://publiclab.org/notes/jenjimah/06-26-2019/horticultural-spectrometer-assembly-iii)(Final Assembly)

June 12, 2019 - Described [a Method for HDR Imaging](https://publiclab.org/notes/jenjimah/06-12-2019/a-method-for-hdr-imaging)

June 12, 2019 - [DVD vs. Holographic Film grating comparison](https://publiclab.org/notes/jenjimah/06-12-2019/dvd-grating-vs-holographic-film?_=1560329315)

June 2, 2019 - [Assembly part II](https://publiclab.org/notes/jenjimah/06-02-2019/horticultural-spectrometer-assembly-ii?_=1559501232)

May 30, 2019 - [Assembly part I](https://publiclab.org/notes/jenjimah/05-30-2019/horticultural-spectrometer-assembly)

May 26, 2019 - Raspberry pi running with IP Camera accessible over USB as an ethernet gadget using this tutorials:

- [https://publiclab.org/notes/warren/04-20-2018/prepare-an-sd-card-for-a-raspberry-pi-camera-from-scratch](https://publiclab.org/notes/warren/04-20-2018/prepare-an-sd-card-for-a-raspberry-pi-camera-from-scratch)
- [https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget#if-you-are-using-windows-as-the-host-machine](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget#if-you-are-using-windows-as-the-host-machine)

April 13, 2019 - All materials sourced except razor blades

April 2019 - Currently, I'm sourcing all the parts for this project. I just wanted to lay out my ideas in case anyone has some feedback before it's built. I'll try to update here as it progresses.

---------