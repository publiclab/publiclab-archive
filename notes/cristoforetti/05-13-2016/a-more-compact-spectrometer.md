---
title: 'A more compact spectrometer'
tagnames: spectrometer, spectrometry, italy, diy-spectrometer, webvalley, upgrade:spectrometry, raspberry-pi-spectrometer, activity:raspberry-pi-spectrometer, first-time-poster
author: cristoforetti
path: /notes/cristoforetti/05-13-2016/a-more-compact-spectrometer.md
nid: 13112
uid: 470966

---

![](https://publiclab.org/public/system/images/photos/000/016/166/original/project1.jpg)

# A more compact spectrometer

by [cristoforetti](../profile/cristoforetti) May 13, 2016 16:59

May 13, 2016 16:59 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [italy](../tag/italy), [diy-spectrometer](../tag/diy-spectrometer), [webvalley](../tag/webvalley), [upgrade:spectrometry](../tag/upgrade:spectrometry), [raspberry-pi-spectrometer](../tag/raspberry-pi-spectrometer), [activity:raspberry-pi-spectrometer](../tag/activity:raspberry-pi-spectrometer), [first-time-poster](../tag/first-time-poster)

----

###What I want to do

For the WebValley 2016 Summer School (https://webvalley.fbk.eu), together with the other tutors of the school, we are looking for the feasibility of building a portable spectrometer for field use outdoor.
 
In principle, we could try to use the v3.0 spectrometer as it is, but I want to try to make it a little bit more compact.

###Design

As far as I have understood, the problem with reducing the length of the spectrometer is related to the focus of the webcam which looks optimized for a distance from the slit close to 20cm.
If this distance cannot be changed, there are not so many ways to reduce the size of the whole object: we need to alter the optical path of the light using mirrors inside the box. In my project I cut small pieces from a mirror bought in a supermarket. These are placed inside the spectrometer taking care of the right reflection angles.
 
After some trial and error, the final design of the spectrometer is shown in the figure.


[![project1.jpg](//i.publiclab.org/system/images/photos/000/016/167/medium/project1.jpg)](//i.publiclab.org/system/images/photos/000/016/167/original/project1.jpg)  

The size is 70x70mm, as the height can change a bit consistently with the size of the webcam.

The light enters through the slit (at the bottom in the figure) and is reflected the first time with an incident angle of 50 deg. After that, other three reflections follow before the beam hits the diffracting surface with an incident angle of 69 deg. This last angle is fixed for collecting the spectrum on a (hopefully) wide range of wavelengths. If I did the math correctly, using a DVD as diffraction grating, we will find light with wavelength of 380nm at around -25 deg from the normal and with wavelength of 1000nm at +24 deg. You can see the two angles at the top of the figure.
 
In Fig. 1 you can also see that the central mirrors are rotated by 6 deg with respect to the border of the box. This allows avoiding inclination both of the diffraction grating, saving the optimal choice of 69 deg, and of the webcam.
 
The total path length of the light is between 19cm and 20cm, which is exactly what we want.
 
First I realized a prototype in polystyrene (see the figures)

[![IMG_2334.jpg](//i.publiclab.org/system/images/photos/000/016/168/thumb/IMG_2334.jpg)](//i.publiclab.org/system/images/photos/000/016/168/original/IMG_2334.jpg)[![IMG_2340.jpg](//i.publiclab.org/system/images/photos/000/016/169/thumb/IMG_2340.jpg)](//i.publiclab.org/system/images/photos/000/016/169/original/IMG_2340.jpg)[![IMG_2336.jpg](//i.publiclab.org/system/images/photos/000/016/170/thumb/IMG_2336.jpg)](//i.publiclab.org/system/images/photos/000/016/170/original/IMG_2336.jpg)


At least the angles were right because I can see the spectrum. It is really bad shaped but this is due to problems with my very old webcam.
As you can imagine, the stability of the system is quite low so I did a 3D model of the layout with Sketchup and thanks to a colleague that has a 3D printer in his lab I’ve got the new plastic version.
The model and the printed spectrometer are in the last two figures. The cover is still missing but I wait for the new webcam before fixing the details of that part and before posting some spectra.


[![3Dspectrometer.jpg](//i.publiclab.org/system/images/photos/000/016/171/thumb/3Dspectrometer.jpg)](//i.publiclab.org/system/images/photos/000/016/171/original/3Dspectrometer.jpg)[![IMG_2342.jpg](//i.publiclab.org/system/images/photos/000/016/172/thumb/IMG_2342.jpg)](//i.publiclab.org/system/images/photos/000/016/172/original/IMG_2342.jpg)

This were I am now, still lot of works to do before having the full prototype for open field data collection and before WebValley 2016... 
