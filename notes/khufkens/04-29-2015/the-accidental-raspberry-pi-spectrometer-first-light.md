---
title: "The accidental raspberry pi spectrometer: first light"

tagnames: 'spectrometer, diy, light, first'
author: khufkens
path: /notes/khufkens/04-29-2015/the-accidental-raspberry-pi-spectrometer-first-light.md
nid: 11774
uid: 438931

---

![](https://publiclab.org/public/system/images/photos/000/009/737/original/spectrum.jpg)

# The accidental raspberry pi spectrometer: first light

by [khufkens](../../../profile/khufkens) | April 29, 2015 02:28

April 29, 2015 02:28 | Tags: [spectrometer](../tag/spectrometer), [diy](../tag/diy), [light](../tag/light), [first](../tag/first)

----

I put my design together today. The design used is shown below, but has some issues still. General layout: slit on the left, baffle and grating  / sensor array on the right.

![](https://farm8.staticflickr.com/7694/16686565663_fd9ee13a2f_z_d.jpg)

A first spectrum can be found below.

<iframe width='500px' height='300px' border='0' src='https://spectralworkbench.org/spectra/embed/48767'></iframe>

#### Accomplished:

- Seems like the incident angle was pretty much perfect, aligning the red part of the spectrum to the center of the image
- the sensor array setup works nicely (compact unit)

#### Issues:

- focus, had to mess with the raspberry pi camera lens
- I didn't calculate the needed distance between the grating and the sensor as to maximize the used pixels (I admit, I was lazy). The small exit angles of the 300l/mm grating require a large distance from the grating to expose the whole image sensor. The peak at 0 nm is the 0th order peak, the little peaks > 1000nm are the second and third order peaks which also make it onto the sensor.

Lessons learned: do the math before making a design.

Back to the drawing board, more later...
