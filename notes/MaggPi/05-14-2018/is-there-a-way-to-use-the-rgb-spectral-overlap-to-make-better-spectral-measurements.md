---
title: "Is there a way to use  RGB spectral overlap to make better spectral measurements?"

tagnames: 'spectral-analysis, gsoc, pi-camera, soc, raspberry-pi-cameras, lego-spectrometer, gsoc-2018, soc-2018'
author: MaggPi
path: /notes/MaggPi/05-14-2018/is-there-a-way-to-use-the-rgb-spectral-overlap-to-make-better-spectral-measurements.md
nid: 16339
uid: 501996
cids: 19642,19644
---

![](https://publiclab.org/public/system/images/photos/000/024/938/original/spectra_rgb.jpg)

# Is there a way to use  RGB spectral overlap to make better spectral measurements?

by [MaggPi](/profile/MaggPi) | May 14, 2018 03:14

May 14, 2018 03:14 | Tags: [spectral-analysis](/tag/spectral-analysis), [gsoc](/tag/gsoc), [pi-camera](/tag/pi-camera), [soc](/tag/soc), [raspberry-pi-cameras](/tag/raspberry-pi-cameras), [lego-spectrometer](/tag/lego-spectrometer), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018)

----

Background:

In reviewing  computer vision images from a lego/raspberry pi camera   spectrometer I noticed that some of the color channels overlap.   This can be seen by splitting the spectral image into RGB components. The picture below shows  the overlap.  You can see how the light is strong enough (or the camera color filters aren’t good enough} that it can be seen in both red and blue channels.
You can also see the spectrum at 
https://spectralworkbench.org/spectrums/134212

[![Slide3.JPG](/i/24932)](/i/24932)

Looking at other spectral workbench examples you can also see examples of  rgb channel overlap.  Another  example, thanks to [cedarlodge](/profile/cedarlodge) !

[![Slide2.JPG](/i/24933)](/i/24933)

https://publiclab.org/notes/cedarlodge/03-07-2018/raspberry-pi-spectrometer-gui

Note that while the two pictures have different set-ups some characteristics are the same: there seems to a sharp edge to the red band, blue channel has red overlap and green channel seems to contain the green and yellow portions of the spectrum image.

So, is there a way to use the RGB spectral overlap to make better spectral measurements?

Could the overlap sections be added  to improve overexposure settings?   https://publiclab.org/wiki/spectral-workbench-usage#Overexposure. Could the first red edge be used for calibration?  Could the overlap sections be subtracted to make displayed spectrum colors more realistic?   

[warren](/profile/warren) 
[amirberAgain](/profile/amirberAgain)
[icarito](/profile/icarito)
