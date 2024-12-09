---
title: Raspberry Pi spectrometer GUI
tagnames: spectrometry, raspberry-pi, barnstar:basic, seeks:replications, activity:raspberry-pi, activity:lego-spectrometer, lego-spectrometer
author: cedarlodge
path: /notes/cedarlodge/03-07-2018/raspberry-pi-spectrometer-gui.md
nid: 15880
uid: 523507

---

![](https://publiclab.org/public/system/images/photos/000/023/927/original/spectrometer_demo.JPG)

# Raspberry Pi spectrometer GUI

by [cedarlodge](../profile/cedarlodge) March 07, 2018 16:12

March 07, 2018 16:12 | Tags: [spectrometry](../tag/spectrometry), [raspberry-pi](../tag/raspberry-pi), [barnstar:basic](../tag/barnstar:basic), [seeks:replications](../tag/seeks:replications), [activity:raspberry-pi](../tag/activity:raspberry-pi), [activity:lego-spectrometer](../tag/activity:lego-spectrometer), [lego-spectrometer](../tag/lego-spectrometer)

----

\*\*\*Update\*\*\*

The interface now includes keyboard controls for capturing images.

Settings can be changed in the settings menu, but will return to default when the program exits.

Spectra can now be viewed by clicking on the spectrum image. 

-------------------------------------------------------------------------------------------------------------------------------------------------------

My own experiment with making a graphical interface for the Lego Spectrometer.

The program will capture the image, pull out the middle line of pixels and expand it into a spectrum for uploading to spectral workbench.

Alternately the middle line of pixels is preserved in a different folder for use with scripts such as spectral-workbench.js.

Right now the camera is set to a 30 second timer, but I am working on finding a way to capture keyboard events in python to trigger the image capture. Failing that I will instead install a tactile button, but I would rather avoid this as I would like this script to be as useful to as many people as possible.

I also have plans to include menu options such as changing the camera timer and exposure settings.

please note that the script uses a fair few libraries, but IDLE will tell you which ones to install.

[https://github.com/classimago/Pi-Spectrometer/tree/master](https://github.com/classimago/Pi-Spectrometer/tree/master)

If you have any issues or suggestions please let me know, either here on or the github repository.