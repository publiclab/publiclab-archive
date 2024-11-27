---
nid: 5381
title: Spectrometer calibration
path: public/static/notes/wiebew/12-30-2012/spectrometer-calibration.md
uid: 44887
tagnames: spectrometer,calibration,spectrometer-calibration,intensity-calibration,wavelength
---

# Spectrometer calibration

Recently, I posted a note regarding further calibration of the spectrometer to the mailing list. Below is a restructured version of my post. It starts with a summary of different calibration steps that can be performed and then explains how these could be done. Some of these calibrations pose some challenges to the current spectrometer workflow.

There are four calibration steps that can be performed:

1.   **(1) Wavelength calibration**. The spectrum is projected onto the ccd of the webcam. A pixel position on the ccd/image needs to be linked to the wavelength that ends up at that position. For this a light source with narrow peaks at known positions is used. This calibration is enough for identifying a peak in flame spectrometry or the wavelength of a certain absorption.


2.   **(2) Signal linearization**. With this calibration, it is ensured that the measured value at a certain wavelength scales linearly with the intensity. This is not the case with jpegs and movies (see below), so needs to be corrected. This calibration step is essential if you want to compare two spectra (for instance in a reflection or absorption experiment). 


3.   **(3) Relative intensity calibration**. If you want to compare the signal at one wavelength with another wavelength, they should be calibrated to compensate for wavelength dependent ccd sensitivity and the effect of color filters. This calibration is not needed for absorption or reflection measurements because the calibration factors obtained in this step are divided out in the calculation. However, for calculating colors, identifying lamps or comparing the ratio's of two compounds emitting at different wavelengths, this calibration is needed.


4.   **(4) Radiometric calibration**. This calibration finds the single scaling factor that converts the spectrum after (3) to W/m^2/nm. This calibration is probably mostly for scientific completeness. It will also be hard to maintain.


Below, I briefly explain how the calibrations could be performed. Each calibration needs the calibrations above it to be performed first.

### 1. Wavelength calibration

Here, you're looking for a function that converts the pixel positions x into a wavelength: lambda = f(x). This can be done by using a light source with several known narrow emission lines. Typically [[http://en.wikipedia.org/wiki/Gas-discharge_lamp|gas-discharge lamps]] are used. A readily and commonly available lamp is a [[http://en.wikipedia.org/wiki/File:Fluorescent_lighting_spectrum_peaks_labelled.png|CFL]]; however, because of the phosphor in the lamp, several 'exotic' peaks can be present, and these can be different from lamp to lamp. It is therefore probably best to stick with the mercury and argon peaks.

In the current software (Spectral Workbench), this calibration is done with a linear correction: f(x) = c0 + c1*x. However, usually it is done with a [[http://www.coseti.org/pc2000_2.htm|quadratic]] or [[http://www.oceanoptics.com/Technical/wavelengthcalibration.pdf|cubic]] function. For this at least three or four known peaks are needed and they need to be spread over the used wavelength range. 


### 2. Signal linearization

In jpegs, gamma compression is used to convert the raw sensor data into pixel values (see http://www.cambridgeincolour.com/tutorials/gamma-correction.htm). This means that if the intensity changes from 9 to 4, the pixel values will be 9^(1/2)=3 and 4^(1/2)=2 (here I'm assuming a gamma of 1/2). This means that, while the actual change in intensity is more than 50%, based on the pixel values you only get 30%. Ideally this is solved by using the raw sensor data (assuming that is linear with intensity), but otherwise you have to calibrate for this. 


This calibration gives you a function that converts a pixel value to an intensity: I = g(v). This is independent of the wavelength.


Here, you are calibrating the ccd sensor with additional processing performed in the camera. This calibration could be performed outside of the spectrometer and might be approximately constant for the same type of camera, assuming the exact same settings are used. This brings up a critical point: you need to be able to operate the settings of the camera [[http://publiclaboratory.org/wiki/spectral-workbench-usage#webcam-configuration|manually]]. The settings that I have so far encountered that need to be controlled are (auto)exposure, gain, (auto) white balance, saturation, sharpness, contrast. 


I have a few logitech webcams that allow for manual control in Windows, but only via their own software or through Matlab. I haven't found an easy way to do this via Processing, for instance. I think this will be a critical step to solve for both webcams and mobile cameras. Not being able to perform this calibration will severely limit the applications for which the spectrometer can be used. 

I'm currently looking into this type of calibration using Matlab and a technique inspired by HDR photograpy where several pictures are taken of the same scene at different exposures (see http://www.pauldebevec.com/Research/HDR/debevec-siggraph97.pdf). I will post back here once I have results.


### 3. Relative intensity calibration

Here, you're looking for a wavelength-dependent scaling factor.
This can be obtained by measuring a broad band light source and comparing this with its known spectral distribution, for instance using a tungsten light bulb (see http://eprints.lancs.ac.uk/6736/1/inproc_326.pdf and http://jethomson.wordpress.com/spectrometer-articles/system-function/). For this you don't want narrow and intense peaks.


### 4. Radiometric calibration

A radiometric calibration can be done using an additional irradiance sensor (see http://jethomson.wordpress.com/spectrometer-articles/radiometric-calibration/). This calibration will give a single calibration factor with which the whole spectrum should be multiplied.
