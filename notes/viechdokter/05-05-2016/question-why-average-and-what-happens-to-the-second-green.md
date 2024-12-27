---
title: "Question:  Why average? And what happens to the second Green?"

tagnames: 'spectrometer, spectroscopy, rgb, question:spectrometry, question:spectral-workbench, average'
author: viechdokter
path: /notes/viechdokter/05-05-2016/question-why-average-and-what-happens-to-the-second-green.md
nid: 13081
uid: 468990

---

![](https://publiclab.org/public/system/images/photos/000/015/969/original/Bayer_filter.jpg)

# Question:  Why average? And what happens to the second Green?

by [viechdokter](../../../profile/viechdokter) | May 05, 2016 15:51

May 05, 2016 15:51 | Tags: [spectrometer](../tag/spectrometer), [spectroscopy](../tag/spectroscopy), [rgb](../tag/rgb), [question:spectrometry](../tag/question:spectrometry), [question:spectral-workbench](../tag/question:spectral-workbench), [average](../tag/average)

----

I have been reading a lot about spectroscopy and spectral analysis lately. I got a lot of feedback from the community here and someone pointed me to how a Bayer webcam filter worked. The Bayer filter essentially is divided into 4 squares (or channels) per pixel - Red,Green, Green, Blue. For each pixel we get the four intensities (photon counts) from the webcam which will be reduced to three channels (RGGB -> RGB) by putting the two Gs together into 1 channel. 

The Spectral Workbench shows us these three channels plus another curve for "average". And that's where I got stuck. 

**Why average?** 

If we want to know how many photons hit a webcam pixel at a certain wavelength - shouldn't we _sum up_ the four (RGGB) or three (RGB) channels? We would get a much higher intensity curve that shows _all photons_. Averaging reduces the overall amount of photons per pixel.

Even the reduction of the two Greens into one channel by some "Bayering" arithmetics throws a lot of photons into the trash can. I've read that some people use CCD sensors with scratched-off filters to achieve better results but I guess it would need a change in the green channel averaging software, too, to receive more correct results counting all the photons available.

If I am wrong with my thoughts here it would be great if someone could explain to me where I was wrong. 

