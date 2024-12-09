---
title: Near-infrared absorption spectroscopy
tagnames: spectrometer, nir, near-infrared, absorption, cuvette, ccd, linearccd, barnstar:basic, first-time-poster
author: shubham
path: /notes/shubham/01-27-2016/near-infrared-absorption-spectroscopy.md
nid: 12625
uid: 460486

---

![](https://publiclab.org/public/system/images/photos/000/013/891/original/IMG_20160127_172904078.jpg)

# Near-infrared absorption spectroscopy

by [shubham](../profile/shubham) January 27, 2016 13:06

January 27, 2016 13:06 | Tags: [spectrometer](../tag/spectrometer), [nir](../tag/nir), [near-infrared](../tag/near-infrared), [absorption](../tag/absorption), [cuvette](../tag/cuvette), [ccd](../tag/ccd), [linearccd](../tag/linearccd), [barnstar:basic](../tag/barnstar:basic), [first-time-poster](../tag/first-time-poster)

----

##What I want to do

I am working on the design of a moderate resolution (2-3nm) visibile-near-infrared (400-1100nm) low cost (< $30) spectrometer. I aim to obtain the spectral data and determine the fingerprints of various liquids. Next, I'll extract the major variables and find their weights to determine the concentrations of those liquids (quantitative analysis).

##Work completed so far

[![IMG_20160127_173016326.jpg](//i.publiclab.org/system/images/photos/000/013/892/medium/IMG_20160127_173016326.jpg)](//i.publiclab.org/system/images/photos/000/013/892/original/IMG_20160127_173016326.jpg)

Spectrometer has been assembled. Assembly is flexible and the components can be easily modified independently without disturbing rest of the configuration.

Since I need infrared radiations, I decided to go with incandescent bulb. Cuvette holder was made by cutting a notch out of a wooden board. Using glass cuvettes.
There is space to add a collimating lens on the other side of the board (next to cuvette holder ) carrying the slit, which is made by razor blades.

Grating (DVD) mount is supported on screws and thus can be rotated easily about those screws. It stays wherever its left after adjustment. Same goes with webcam, whose mounting board is so tight in the container that it doesn't even need screws.  I removed the collimating lens as it didn't seem to do much to the spectra and added some unwanted reflections.


##Spectra

https://spectralworkbench.org/spectrums/show2/69653
This is not so well calibrated spectrum ,with a lot of scope to improve futher.

##Questions and next steps

I have been able to remove the infrared filter successfully, but the resolution of my [webcam](http://www.amazon.in/Quantum-Webcam-light-Vision-Camera/dp/B00L5AWKUM?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=a5458175-282e-4bc4-9313-a7ede3bf528a) seems very poor (VGA). It claims to have interpolated 25Megapixel camera, but I guess that's mathematically attained from a 0.3MP sensor, and thus would not add to any resolution. 

I'm planning to work on this [CCD](pdf.dzsc.com/ILX/ILX569K.pdf) which I got from an old flatbed scanner from a second hand market for Rs100 ($1.6). But interfacing the device with Atmega8 is a challenge given my non-electronics background. I asked for help from a friend but it would be great if someone could share their work on how to run CCD using Atmega8 or arduino or raspberry pi?

Well that would also require adding a lens for focusing. Finding a cylindrical lens seems a tough task in India. Hence I'll be trying luck with a glass rod (suggested by an old optical engineer, claims himself to be the first LASER developer in India).

Is there any way to get the data of the graph, to open in Excel (csv, xls, etc.)?