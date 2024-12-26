---
title: "Reading the individual pixel data from a piCamera sensor sans-lens?"\ntagnames: 'spectrometer, spectroscopy, question:spectrometer, spectrometers, question:general, general, picamera'
author: wln215
path: /notes/wln215/10-11-2019/reading-the-individual-pixel-data-from-a-picamera-sensor-sans-lens.md
nid: 21139
uid: 578478

---

# Reading the individual pixel data from a piCamera sensor sans-lens?

by [wln215](../profile/wln215) | October 11, 2019 17:44

October 11, 2019 17:44 | Tags: [spectrometer](../tag/spectrometer), [spectroscopy](../tag/spectroscopy), [question:spectrometer](../tag/question:spectrometer), [spectrometers](../tag/spectrometers), [question:general](../tag/question:general), [general](../tag/general), [picamera](../tag/picamera)

----

I am using a CCD to read the output of a (Lens-Grating-Lens) spectrometer. I am trying to calculate the angle of separation of two given wavelengths by reading the sensor output. The pixel pitch of the sensor (1.12 um for V2 and 1.4 um for V1) can be multiplied by the pixel count to measure the separation. The angular separation is the tangent of this pixel measurement and focal length of my focusing lens (.66m and 1.0m). 
![My captured image centered around 650nm.][1]

To find this angle, I upload the CCD image to spectral workbench. By default with no reference spectra or calibrations, spectral workbench outputs a graph of the JPEG values from which I can get a rough estimate of the pixel count as the PiBuilder OS outputs a minimally compressed JPEG. This way of measuring is alternative to using reference spectra. 

Rather than rely on these hacky coincidences I'd like to get a more precise output. I can do this by taking a RAW image from the command line and figuring out how to get the spectral data from the appended data (either through spectral workbench or by counting the pixels with an image editor). The other option is to scale the JPEG image to the resolution of the camera's sensor (which differs between sensor versions). 

How would you go about doing this? Is there something in spectral workbench that can be tweaked to work with this sort of measurement, seeing as how it already does it by default? How would you work with the RAW data captured from the sensor and what kind of pitfalls (like the Bayer filter) should I look out for with this method? 

Thanks for the input. My first post is [Here.][2] More write-ups coming soon. 

  [1]: /i/35672.jpg "im_0050_20181010_043954.jpg"
  [2]: https://publiclab.org/n/18522