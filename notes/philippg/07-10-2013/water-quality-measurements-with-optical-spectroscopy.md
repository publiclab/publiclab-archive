---
title: "Water Quality Measurements with Optical Spectroscopy"

tagnames: 'spectrometer, water-quality, water, water-monitoring, estonia, chlorophyll, eutrophication, algae, algal-blooms, cyanobacteria, activity:spectrometry, status:under-development, first-time-poster'
author: philippg
path: /notes/philippg/07-10-2013/water-quality-measurements-with-optical-spectroscopy.md
nid: 8809
uid: 121462
cids: 6247,6262,6296,6300,6302,6310,6319,6332,6442,9035,12972
---

![](https://publiclab.org/public/system/images/photos/000/000/731/original/2013-07-10_11.49.28.jpg)

# Water Quality Measurements with Optical Spectroscopy

by [philippg](/profile/philippg) | July 10, 2013 20:15

July 10, 2013 20:15 | Tags: [spectrometer](/tag/spectrometer), [water-quality](/tag/water-quality), [water](/tag/water), [water-monitoring](/tag/water-monitoring), [estonia](/tag/estonia), [chlorophyll](/tag/chlorophyll), [eutrophication](/tag/eutrophication), [algae](/tag/algae), [algal-blooms](/tag/algal-blooms), [cyanobacteria](/tag/cyanobacteria), [activity:spectrometry](/tag/activity:spectrometry), [status:under-development](/tag/status:under-development), [first-time-poster](/tag/first-time-poster)

----

## What I want to do
I'm a PhD student working on water remote sensing. In water remote sensing, or '[ocean color](http://www.oceanopticsbook.info/view/remote_sensing/ocean_color)', people extract water quality parameters from satellite imagery. Probably the most interesting parameter is [chlorophyll-a concentration](http://24.media.tumblr.com/tumblr_lretq9wY7g1qaityko1_500.jpg), which can be related to the phytoplankton (algae, cyanobacteria) biomass in the water. Applications are quite diverse, ranging from harmful algal blooms early warning systems, [eutrophication](https://en.wikipedia.org/wiki/Eutrophication) assessment to climate change research - to name a few. 

The same algorithms are used on spectra taken directly in the field to calibrate/validate remotely sensed concentrations. However, spectrometers used for these field measurements are quite expensive (>20k USD) and often not trivial to operate. This hampers the use of 'water color' by a wider audience, e.g. water managers, fisheries and especially the public that might want to know what the water quality in their pond is. 

Spectra from cheap, open source spectrometers can potentially bridge this gap. 


## Challenges
From my experience with the foldable spectrometer and the desktop kit I see three main issues: sensitivity, spectral resolution and calibration.

- Sensitivity
Water appears often very dark, especially if only little scattering substance is present. In contrast, the reflection of the direct sun light on the water surface is extremely bright. Thus, to resolve the 'true' water color, the instrument has to be relatively sensitive. 

- Spectral Calibration and Calibration
Pigment absorption, other optically active substances and the water itself cause the water's color. Pigments in phytoplankton, such as the main photosynthetic pigment chlorophyll-a, have very sharp absorption features. In order to resolve those peaks, the spectral resolution has has to be sufficiently high and the calibration sufficiently accurate. 

## First Experiments
These days I had the opportunity to take the desktop kit out on a fieldwork campaign on [Lake Peipsi](http://goo.gl/maps/rvWHE) and [Lake Vortsjarv](http://goo.gl/maps/raRI2) in Estonia. Fortunately, this little Baltic country has one of the best 3G-networks worldwide and so I could use the spectral workbench to upload my spectra straight from the boats - pretty cool! However, an offline version of the workbench is essential (couldn't get the local webserver running so far). The spectra are available here: Lake Peipsi ([R_sky](https://spectralworkbench.org/sets/show/470), [R_water](https://spectralworkbench.org/sets/show/471)), Lake Vortsjarv ([R_sky](https://spectralworkbench.org/sets/show/479), [R_water](https://spectralworkbench.org/sets/show/478)).


## First Conclusions
- Preparations / Calibration
The initial wavelength calibration with fluorescent light line peaks is pretty brilliant. Still, at least a rudimentary intensity calibration is necessary to interpret the shape of the spectra. I can use our calibration lab for this purpose and give some feedback to the community on how the spectral response curve of at least my desktop kit's webcam looks like. For public use, I'm thinking of using daylight spectra as a reference, as the shape is rather stable (not the intensity, due to atmospheric conditions). Maybe we can find a better solution for that. 

- Measurements
We need at least two measurements in order to run a spectral unmixing algorithm: upwelling radiance (light from the water) and downwelling irradiance (complete skylight). As we most likely won't be able to build a cheap spectrometer that has even vaguely defined entry optics (e.g. 9deg field of view for the radiance and a perfect cosine response for the irradiance), some improvisation is needed. For the irradiance measurement I'm thinking of using a white table-tennis ball on top of the slit as a diffusor. The radiance measurement is mainly hampered by water surface reflections. To avoid those, I'd like to measure either just underneath the water surface (--> how to make the spectrometer water tight) or to use a sun shade (such as for camera lenses). For now, a black bucket with a hole in the bottom should do the job.  

- Postprocessing
The current procedure to extract a spectrum from the webcam-video is pretty smart and straightforward but probably not optimal if sensitivity is a priority. Currently, as I understand, only one row of the 'stitched spectral image' is used to extract the spectrum ('set sample row' in the workbench). Skylight, as well as the water leaving radiance are stable on the timescales of a measurement. Therefore I'd suggest to average over all rows to improve the signal to noise ratio. If that is not enough, one could think about extracting not only one line from the webcam's video stream but e.g. ten and save the average in the stitched spectral image. In a last desperate step, one could use the whole webcam image and correct for the curvature caused by the DVD, however, I don't think this will be necessary.  