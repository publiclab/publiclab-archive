---
title: Foldable Spectrometer Workshop for Cities
tagnames: spectrometry, replication:13410, replication:13577, foldable-spec
author: nicholas
path: /notes/nicholas/02-28-2017/foldable-spectrometer-workshop-for-cities.md
nid: 13969
uid: 53894

---

![](https://publiclab.org/public/system/images/photos/000/019/677/original/Screen_Shot_2017-02-28_at_10.44.29_AM.png)

# Foldable Spectrometer Workshop for Cities

by [nicholas](../profile/nicholas) February 28, 2017 15:51

February 28, 2017 15:51 | Tags: [spectrometry](../tag/spectrometry), [replication:13410](../tag/replication:13410), [replication:13577](../tag/replication:13577), [foldable-spec](../tag/foldable-spec)

----

The foldable spectrometer workshop was held with ten students as a part of the Remote Sensing Class at NYU's Center for Urban Science and Progress.  An initial overview of spectrometry was provided describing the fundamentals of using a diffraction gradient to split light into its component spectra.  
  
The workshop goals were to:

1. Build a foldable spectrometer (largely following [this research note](https://publiclab.org/notes/abdul/10-19-2016/foldable-paper-spectrometer-instructions))
2. Collect sample spectra from light sources in the room (CFL bulbs, LEDs and sunlight)
3. Create a profile and upload images to Spectral Workbench
4. Calibrate the device using Spectral Workbench

The workshop last approximately one hour which was just enough time to achieve goals 1-3.  Some students were able to start calibrating but did not have much time to thoroughly understand the process via spectral workbench.
  
##General Observations and Challenges
We used Gaffers tape to build the foldable spectrometers which worked really well.  The tape is strong but can easily be removed without destroying the material underneath.

One challenge that I encounter was understanding the fundamental analysis techniques of capture spectra.  For example, @dhaffner describes [in this note](https://publiclab.org/wiki/how-to-obtain-transmittance-absorbance-spectra) dividing a sample spectra with a reference spectra in order to obtain transmittance which can then be used to calculate absorption.  However, @straylight describes analyzing concentrations in this [excellent post](https://publiclab.org/notes/straylight/05-13-2013/using-the-spectroscope-for-analysis-of-concentration-beer-s-law), by subtracting a sample spectrum from a reference spectrum in order to obtain absorption. I would like to be able to capture an image and perform the fundamental analytical techniques use Python though I'm not clear on the overarching methods for doing this.
  
I also noticed students were timid to attach the spectrometer to their phones.  Over and over I observed students holding the spectrometer in front of the phone's camera while led to light leakage and stray light entering into the device. As a moderator, I continued to explain that they would observe better results if they attached the device to their phone but very few of them did.  I think this might be from a concern of applying an adhesive to their mobile device.

We also found in two of the spectrometers, the slit allowing light to pass into the spectrometer at one end was not entirely 'open'.  We manually used a pair of scissors to further create a larger slit to allow the appropriate amount of light to enter.  I'm not sure if this resulted from a 'rugged' folder who mistakenly applied too much tap and thus warped the inlet slit or if the material was supplied like this.   

Most students had difficult in determining the proper placement of the DVD-R diffraction gradient.  This was partly the fault of the instructor (myself) but reflects the need for special attention in the splitting and cutting of the diffraction gradient.  Most students immediately started cutting and quickly lost track of how the DVD-R should be placed.  In most situations we had to find the side with the strongest rainbow.  

Several students were entirely unsuccessful in splitting the DVD-R into two 'clean' sections.  The aluminum part peeld off and stayed with the clear layer leaving only a small usable section.  I'm curious if there are better methods for splitting the DVD-R and removing the dye.  [This post](https://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating) by @MrBumper is excellent but I wasnt able to remove the purple dye after washing in warm water with soap.  I'll try using other material to clean in the future.

in the calibration process, students immediately used their mobile devices to access spectral workbench.  Several people were having difficulty navigating the interface and noted a few 'bugs' or lack of response from the site via the mobile interface.  I advised them that the desktop version would probably be a better experience

## What's next:
[This post](https://publiclab.org/notes/warren/09-18-2016/see-the-fraunhofer-absorption-lines-in-sunlight) by @warren about Fraunhofer absorption lines in sunlight is very interesting and I'd like to explore this more.  One thought is to use a raspberry pi to capture spectra images periodically (every hour?) as well as basic weather information temp/humidity etc.  I'm curious 1) what is the sensitivity of the spectrometer and what can be measured and 2) what can be learned from repeated measurements of the Fraunhofer absorption lines and 3) what other gases (if any) can be detected.  Does this require further modification to the camera (remove ir filter) and/or the diffraction gradient?  