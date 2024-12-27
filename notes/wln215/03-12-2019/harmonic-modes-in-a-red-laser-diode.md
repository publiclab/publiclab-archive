---
title: "Harmonic Modes in a Red Laser Diode"

tagnames: 'spectrometer, spectrometers, first-time-poster, lasers, lat:40.713955, lon:-74.014892'
author: wln215
path: /notes/wln215/03-12-2019/harmonic-modes-in-a-red-laser-diode.md
nid: 18522
uid: 578478

cids: 25669

---

![](https://publiclab.org/public/system/images/photos/000/031/556/original/Centered_spread_Grade_A.jpg)

# Harmonic Modes in a Red Laser Diode

by [wln215](../../../profile/wln215) | March 12, 2019 16:02

March 12, 2019 16:02 | Tags: [spectrometer](../tag/spectrometer), [spectrometers](../tag/spectrometers), [first-time-poster](../tag/first-time-poster), [lasers](../tag/lasers), [lat:40.713955](../tag/lat:40.713955), [lon:-74.014892](../tag/lon:-74.014892)

----

# High Resolution Laser Diode Spectroscopy

###Abstract
Laser diodes, particularly inexpensive ones, emit light at discrete wavelengths as a function of forward current and temperature. A spectrometer using a holographic grating and off-the-shelf lenses can resolve these individual wavelengths, thus providing insight into the laser's spectral quality. Using the Lens-Grating-Lens design, this spectrometer can illuminate a large number of lines across a holographic grating card resolving wavelengths down to the tenths of nanometers. 

###Some Theory

Laser diodes contain a cavity of lasing material where standing light waves emit light within a certain range of wavelengths. The lasing material can emit laser light across a continuous band (color) of light however, due to the cavity's physical length, only wavelengths which are harmonics of the laser cavity will be emitted. 

This is an inherent property of lasers and can be used to derive properties such as the length of the cavity at the semiconductor level. This geometry is designed to test laser diodes such as those found in laser pointers

![image description](/i/30985.png "opticalPath.png")

### The Experimental Rig

This spectrometer is primarily cut from wood using a laser cutter. Each end is bolted onto an extruded rail. The Spectrometer has for main parts:

1. A current driver and sensor apply a current to the laser diode
2. The Lens-Grating-Lens expands the laser beam and diffracts the light.
3. The detector, a PiCamera sans lens, looks at the first order diffraction.
4. The RaspberryPi images the CCD output.

I dubbed it "optic cube" given the cubular transmitter and detector. The laser diode sits at the focal length of the primary lens, the bulkhead the laser is mounted on can be replaced with a slit for fluorescence spectrometry.

#### The Laser

The main design goal is the ability to test many types of laser diodes electrically and optically. This part of the spectrometer starts with programmable driver circuitry to deliver constant current, or vary current over time. Lasers operate best under regulated currents.

Most off-the-shelf lasers include a lens which focuses the beam (normally an elliptical cone) into a dot. Without the lens, the laser is a bare semiconductor attached to a heatsink. This factory lens is  replaced by the condenser lens of the spectrometer. 

![image description](/i/30984.png "laser_and_lens.png")

#### The Spectrometer

The primary (condenser) lens in this experiment is the most difficult thing to source. It is an aspheric lens with a very short focal length and large-ish diameter to collaminate the unfocused light into a beam about an inch (27mm) wide. The condenser lens in the experiment came from Ali Express originally used in LED spotlights for home lighting. 

This wide beam serves to illuminate as many slits as possible in a holographic grating sourced from the amazon, or your local educational science material shop. It contains 1000 lines per mm, giving us 27,000 lines for diffracting the laser's light.

The secondary (focusing) lens has a focal length of 1m which will focus the grating's output onto the detector. The focusing lens is a repurposed welding mask cheater lens. I found this lens works better when placed on the axis of the first order. The long focal length allows for some forgiveness when setting up the CCD. 

#### The Detector/Pi

A raspberry pi and modified picamera uses PublicLab's default PiBuild. The piCamera's factory lens is twisted off to expose the bare CCD. The pixel pitch of the sensor is crucial in the experimental calculations. This spectrometer operates at such high resolution, a lens creates too much noise.

Unlike the rest of the spectrometers on PublicLab, this spectrometer cannot take a full spectrum from red to violet. Therefore it cannot rely on a known spectrum for calibration. As of now, there is no way of telling the exact wavelength the CCD detects, however using the known pixel pitch of the Pi Camera, angular separation, and therefore the difference in wavelength between each peak can be resolved. 