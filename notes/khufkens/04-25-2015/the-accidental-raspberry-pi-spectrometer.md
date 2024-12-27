---
title: "The accidental raspberry pi spectrometer"

tagnames: 'diy, spectroscopy, pi, spectral, response, curve, raspberry'
author: khufkens
path: /notes/khufkens/04-25-2015/the-accidental-raspberry-pi-spectrometer.md
nid: 11770
uid: 438931

cids: 11535,11536,11545,11547,31050

---

![](https://publiclab.org/public/system/images/photos/000/009/702/original/diffraction_angle.png)

# The accidental raspberry pi spectrometer

by [khufkens](../../../profile/khufkens) | April 25, 2015 01:20

April 25, 2015 01:20 | Tags: [diy](../tag/diy), [spectroscopy](../tag/spectroscopy), [pi](../tag/pi), [spectral](../tag/spectral), [response](../tag/response), [curve](../tag/curve), [raspberry](../tag/raspberry)

----

### Introduction

#### [or how my effort to characterize the raspberry pi camera sensor made me design a spectrometer]

In a previous note I described my efforts to create a well characterized [multispectral camera](http://publiclaboratory.org/notes/khufkens/04-24-2015/tetrapi-a-well-characterized-multispectral-camera). At the end of the post I mentioned that to accomplish this task I needed the spectral response curve of the sensor chip in the raspberry pi camera. Having this spectral response curve would allow for more sophisticated inverse modeling of vegetation characteristics.

The spectral response of any imaging sensor (or most of them anyway) is determined by the formula used on the microlenses in <a href="https://en.wikipedia.org/wiki/Bayer_filter">the bayer filter</a>. In practice every imaging sensor is monochrome, it's only by adding this bayer filter, a checkerboard of tiny red/green/blue filters alternatively overlaying all pixels, that you can extract color from your imaging sensor. Sadly, most spectral responses of the imaging sensors are corporate secrets it seems. This being said, this doesn't mean you can't measure it!

Measuring the spectral response of a sensor is generally done using a <a href="https://en.wikipedia.org/wiki/Monochromator">monochromator</a>, a light source which emits a particular wavelength, and a <a href="https://en.wikipedia.org/wiki/Spectrometer">spectrometer</a>, a device to measure the intensity of that light source in function of wavelength. Here the monochromator emits light of a known wavelength which is simultaneously measured by the spectrometer and the imaging sensor. The spectrometer provides a true intensity measurement at this wavelength while the imaging sensor provides an intensity measurement for every bayer filter colour at this particular wavelength. If we cycle through all wavelengths the output of such an analysis are spectral response curves, showing the sensitivity of each bayer filter component colour across all wavelengths.Although this methodology is sound finding a monochromator is rather hard. Yet an alternative approach exists. Below you can see the spectral response of a canon 40D as measured by maxmax.com using a monochromator, this is what I'm aiming for.

<img class="" src="https://www.maxmax.com/images/Cameras/Technical/Canon_40D_Response_CurveB.jpg" alt="" width="515" height="328" /> 

A monochromator uses a diffraction grating to split a known light source into it's component wavelengths. This same diffraction grating is not selective and at any given time outputs all light components only at a slightly different angle. The monochromator only passes the desired wavelength, as shown below (left image).

<a href="http://skullsinthestars.com/2010/03/04/rolling-out-the-optical-carpet-the-talbot-effect/"><img class="" src="http://skullsinthestars.files.wordpress.com/2010/03/fourierseries_gratingapps_c.jpg?w=640" alt="" width="486" height="127" /></a>

So, in theory we could use a diffraction grating to do all the work for us without the intermediary and elusive monochormator! However, the transmission properties of a diffraction grating are wavelength dependent. This is the reason why in an ordinary (monochromator / spectrometer) setup you need to measure the true intensity as well as the image sensor response simultaneously. The only way to calculate the spectral response curve of the sensor is to factor in the wavelength dependent transmission properties of a grating. For most classroom gratings these properties are not described, but when ordering from an optical instrument builder they are!

In short, given a known light source (characterized using a spectrometer), a cheap but <a href="http://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=1123#e42a503e-ff97-45d0-9b84-312574e582f0-1123">characterized grating</a> it is possible to get a crude approximation of the spectral response of any imaging sensor using one image (well two actually as you need to calibrate the relative location of the spectrum - using a CFL light for example)!

### The accidental raspberry pi spectrometer

As mentioned above a diffraction grating splits light in it's wavelength component (intensities). This is the basic spectroscopy principle. However, the angle of the diffracted light as it 'exits' the diffraction grating is dependent on the number of slits (grooves) in the grating. To correctly align any sensor (preferably parallel) with the grating and register the diffracted light a little math is required.

For a diffraction order m, given an incident beam of light at angle sin(ti),  a given wavelength l and a slit density d; a diffracted beam will exit at an angle sin(td) according to:

d [ sin(ti) - sin(td)  ] = m \l

or in function of the 'exit' angle:

td = asin(m*d \ l + sin(ti))

Using this relationship we can calculate the incident angle at which the the exiting light at a given wavelength will be orthogonal to the grating (or parallel to a sensor), or alternatively the angle at which the detector should be placed.

Using the above equation I ran an analysis for a set number of incident angles and wavelengths to extract the overall diffraction properties for a 300 lines/mm and 1351 lines/mm grating (a professional Thorlabs grating and DVD grooves respectively). The figures from the analysis you can find below.

Optimal grating angles, where the diffracted light exits orthogonal to the grating (going straight into a sensor) is calculated to be ~12 and ~67 degrees for (300 and 1351 lines/mm respectively). 

I'll be using a 300 lines/mm grating at a 12 degree angle in my design. Some drafting in FreeCAD has rendered me an intial [design of a raspberry pi spectrometer](https://www.dropbox.com/s/gih2oe51659ndhu/spectrometer_simple.fcstd?dl=0). I have yet to laser cut the design, but I have all the parts so some time next week. So rather soon I'll be able to put everything together and calculate the spectral response curves of the raspberry pi camera sensor, which is rather exciting! 

<a href="http://www.khufkens.com/wp-content/uploads/2015/04/300_lines_mm.png"><img class=" wp-image-621" src="http://www.khufkens.com/wp-content/uploads/2015/04/300_lines_mm.png" alt="300 lines/mm grating" width="832" height="687" /></a>

<a href="http://www.khufkens.com/wp-content/uploads/2015/04/1351_lines_mm.png"><img class=" wp-image-622" src="http://www.khufkens.com/wp-content/uploads/2015/04/1351_lines_mm.png" alt="1351 lines/mm grating" width="832" height="688" /></a>