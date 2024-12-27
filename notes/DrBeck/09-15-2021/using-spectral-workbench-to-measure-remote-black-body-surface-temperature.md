---
title: "Using Spectral Workbench to measure remote "black-body" surface temperature"

tagnames: 'lat:0, lon:0, first-time-poster, zoom:1'
author: DrBeck
path: /notes/DrBeck/09-15-2021/using-spectral-workbench-to-measure-remote-black-body-surface-temperature.md
nid: 27726
uid: 754147

cids: 29321,29322,29323,29328,29331

---

![](https://publiclab.org/public/system/images/photos/000/044/822/original/Screen_Shot_2021-09-12_at_17.38.54.png)

# Using Spectral Workbench to measure remote "black-body" surface temperature

by [DrBeck](../../../profile/DrBeck) | September 15, 2021 03:22

September 15, 2021 03:22 | Tags: [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [first-time-poster](../tag/first-time-poster), [zoom:1](../tag/zoom:1)

----

GOAL: To acquire spectra of stellar objects and calibrate/analyze them with the Spectral Workbench tool, so that one may easily extract a surface temperature from these 'black-body' emitters.  By so doing, we can refine yet another approach to remote sensing of temperature from gaseous emitters at great distance.  And..its fun!

  
Finally had time, and clear skies to acquire stellar spectra a new, inexpensive binoculars setup.

![](https://img1.wsimg.com/isteam/ip/96478455-f00d-4fdd-b057-228b6c7fa103/Screen%20Shot%202021-09-12%20at%2017.09.42.png/:/rs=w:1280/:/rs=w:1280)

---------

![](https://img1.wsimg.com/isteam/ip/96478455-f00d-4fdd-b057-228b6c7fa103/Screen%20Shot%202021-09-11%20at%2023.30.45.png/:/rs=w:1280)

You can see the raw spectra for Capella, above. We obtained this on the night of 11SEP21, with a 200 line/mm flat transmission grating placed between the binocular eyepiece and the camera phone lens and uploaded the image the following day.  We are still working on real-time means to do this.  Although it appears to be a single star to the naked eye, Capella is actually a prominent binary star system made up of the stars Capella Aa and Capella Ab, with a weak companion binary known as Capella H, and Capella L.   The companion pair, Capella H and Capella L, are two faint, small, relatively cool red dwarfs. Capella Aa and Capella Ab have exhausted their core hydrogen, cooled and expanded.

  
AIM THIS SPECIFIC EXPERIMENT: Can we determine two surface temperatures?  That is, the surface temperatures for both yellow giants? We will use a technique known as Wien's Displacement.  Let's see!

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  
WIEN'S DISPLACEMENT

![From Wikipedia on Wien's Displacement](https://img1.wsimg.com/isteam/ip/96478455-f00d-4fdd-b057-228b6c7fa103/Screen%20Shot%202021-08-04%20at%2013.30.42.png/:/rs=w:1280/:/rs=w:1280/:/rs=w:1280 "From Wikipedia on Wien's Displacement")

What Prof. Dr. Wien realized was this: that if _what_ we are observing absorbs light, as well as, it emits light (that is, it is a "black-body") then its spectrum and the maximum wavelength emitted from it will be displaced depending on temperature. Hotter objects will emit maximum light in the blue-green region at shorter wavelengths, as is displayed above in a graph from Wikipedia - Wien Displacement.  The formula to determine temperature (T) in Kelvin is straightforward, where b is Boltzmann's constant:T in Kelvin = b/Maximum wavelength in nanometers =  2,898,000 nm⋅K/ maximum wavelength in nanometers. That is, divide your maximum wavelength into Boltzmann's  constant.  Apply the formula to the spectra in the figure.  Does it work for you?  Great!  This formula will work for any emission or object that emits light like a "black-body". 

---------

[](https://publiclab.org/research)

[![](https://img1.wsimg.com/isteam/ip/96478455-f00d-4fdd-b057-228b6c7fa103/Screen%20Shot%202021-09-12%20at%2017.38.54.png/:/cr=t:11.54%25,l:11.54%25,w:76.92%25,h:76.92%25/rs=w:1280)](https://publiclab.org/research)

From our [Public Lab's](https://publiclab.org/research) calibrated Capella spectra, we observe two peak regions (black line contour) determine that for a primary maximum peak in the blue-green, T = b/Maximum wavelength (490 nm) ~ 5900 K. With a secondary maximum peak in the yellow (570 nm), T ~ 5000 K. How close do we come to the surface temperatures in refereed journals?  From this June 25, 2015 article (below), we can compare T= 4970 ± 50 K with our temperature of 5000 K and T= 5730 ± 60 K to our temperature of 5900 K.  They both represent less than 10% difference, which is an acceptable error margin.

---------

_"CAPELLA (α AURIGAE) REVISITED: NEW BINARY ORBIT, PHYSICAL PROPERTIES, AND EVOLUTIONARY STATE_

"Guillermo Torres, Antonio Claret, Krešimir Pavlovski, and Aaron Dotter_The Astrophysical Journal_, Volume 807, Number 1; Citation Guillermo Torres et al 2015 ApJ 807 26

_ABSTRACT_

"Knowledge of the chemical composition and absolute masses of Capella are key to understanding the evolutionary state of this benchmark binary system comprising two giant stars...Here we report a revision of the physical properties of the components incorporating recently published high-precision radial velocity measurements, and a new detailed chemical analysis providing abundances for more than 20 elements...effective temperatures of 4970 ± 50 and 5730 ± 60 K, and independently measured luminosities based on the orbital parallax... We find an excellent match to stellar evolution models at the measured composition..."

---------

_It appears that with this inexpensive binocular setup, reasonable spectra of luminous gaseous clouds may be obtained,  Using Public Lab's Spectral Workbench, calibrating our spectra and using Wien's Displacement, affords an adequate means to measure surface temperature remotely._