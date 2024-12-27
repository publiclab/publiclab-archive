---
title: "WebValley 2016: improved compact spectrometer"

tagnames: 'spectrometer, spectrometry, raspberry-pi, italy, portable, webvalley, raspberry-pi-spectrometer'
author: cristoforetti
path: /notes/cristoforetti/06-22-2016/webvalley-2016-improved-compact-spectrometer.md
nid: 13225
uid: 470966

---

![](https://publiclab.org/public/system/images/photos/000/016/710/original/pl2.jpg)

# WebValley 2016: improved compact spectrometer

by [cristoforetti](../../../profile/cristoforetti) | June 22, 2016 12:38

June 22, 2016 12:38 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [raspberry-pi](../tag/raspberry-pi), [italy](../tag/italy), [portable](../tag/portable), [webvalley](../tag/webvalley), [raspberry-pi-spectrometer](../tag/raspberry-pi-spectrometer)

----

###What I want to do
Second post about the development of a portable spectrometer to be used outdoor on field during the WebValley 2016 Summer School (https://webvalley.fbk.eu).
The school just started on Monday and together with Jeff, who is here with us for the whole week, we are working hard to improve the layout of my previous post (https://publiclab.org/notes/cristoforetti/05-13-2016/a-more-compact-spectrometer).

The first prototype, used four reflections of the beam in order to increase the length of the light path. After the feedback from Public Lab users, and after receiving the new webcam we decided to simplify the design. In particular the new webcam gave us the possibility to shorten the distance between the slit and the sensor to around 10 cm. Thus, it reduced the number of reflections to one.
Following: pictures of the new prototype.


[![pl2.jpg](//i.publiclab.org/system/images/photos/000/016/711/medium/pl2.jpg)](//i.publiclab.org/system/images/photos/000/016/711/original/pl2.jpg)


###First results
Calibrated spectrum from a CFL lamp is shown in Fig. 2; it looks like mercury with some other phosphor. As  we can see a very light peak just after 700 nm, which is not usually present in the mercury spectrum (we think). 

The spectrum in Fig. 3 is obtained with a simple script we wrote in Python using opencv to capture and analyze the data.

From Fig. 2 we can check that most of the second order spectrum is also captured.
On the left side, the light spot comes from the webcam facing directly the mirror. We captured this wide angle of light due to the webcams fisheye lens.


[![pl2_2.jpg](//i.publiclab.org/system/images/photos/000/016/713/medium/pl2_2.jpg)](//i.publiclab.org/system/images/photos/000/016/713/original/pl2_2.jpg)


[![pl2_3.jpg](//i.publiclab.org/system/images/photos/000/016/714/medium/pl2_3.jpg)](//i.publiclab.org/system/images/photos/000/016/714/original/pl2_3.jpg)



###Questions and next steps
In the development of the spectrometer there are various issues that would need improvements:
1. Mirror: with our design we need a mirror. As discussed in the comments of the precedent post first surface mirror are the optimal choice. Thanks to Jeff now we have one and we will try to see how this improves the spectrum.
2. Light source: test made with the prototype show that we can also capture the second order diffraction spectrum. This means that if we are interested in capturing both the NIR range (700nm - 1100nm) and the VIS range we would need two different light sources to be able to capture the spectra separately. Otherwise, NIR would overlap with VIS at m=2. Thus, LED are probably the best solution. There are thousands of different LED with many parameters to fix. 
3. Working in reflectance: as you can see from the first figure we added a LED light immediately above the slit, in this way we can try to work in reflectance instead of transmittance. Tests are in progress
