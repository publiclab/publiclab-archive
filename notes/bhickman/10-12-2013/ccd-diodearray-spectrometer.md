---
title: "CCD Photodiode Array Spectrometer"

tagnames: 'spectrometer, cuvette, beers-law, first-time-poster'
author: bhickman
path: /notes/bhickman/10-12-2013/ccd-diodearray-spectrometer.md
nid: 9442
uid: 201929

---

![](https://publiclab.org/public/system/images/photos/000/001/912/original/103_3314.JPG)

# CCD Photodiode Array Spectrometer

by [bhickman](../../../profile/bhickman) | October 12, 2013 00:23

October 12, 2013 00:23 | Tags: [spectrometer](../tag/spectrometer), [cuvette](../tag/cuvette), [beers-law](../tag/beers-law), [first-time-poster](../tag/first-time-poster)

----

##Overview
The goal was to make an affordable spectrometer with a resolution that is comparable to some lower end commercially available spectrometers. The current design give approximately 0.6 nm wavelength resolution and around 12 bit intensity resolution.

##Design
The spectrometer is made from a Texas Instruments Stellaris LaunchPad microcontroller (programmed with Energia which is nearly identical to the Arduino IDE), a TSL1406R 768 X 1 element photodiode array (pda), a light source (white 5mm LED, or incandescent lamp), a 5mm LED holder, a collimating lens, a diffraction grating (1000 lines/mm), two project boxes, a wooden cuvette holder, and a wooded base as the optical platform. The total cost for all the parts was around $50. A general diagram of the setup is shown in Figure 1 and a more detailed diagram of the dimensions of the optical platform are shown in Figure 2.


[![diodearray_spectrometer3D.png](https://i.publiclab.org/system/images/photos/000/001/904/medium/diodearray_spectrometer3D.png)](https://i.publiclab.org/system/images/photos/000/001/904/original/diodearray_spectrometer3D.png)



Since making a spectrometer to read the UV range of light becomes prohibitively expensive, the target wavelength range for this spectrometer is 400 nm to 900 nm.  In order to determine the geometry needed to accommodate this desired wavelength range the diffraction grating equation (Equation 1) was used. Where d  is the distance between lines on the grating (0.001 mm/line), λ is the wavelength of interest being diffracted, θ is the diffraction angle of wavelength λ, and m is the order of diffraction (1 in this spectrometers design). 

[![spectrometer_equations_1.png](https://i.publiclab.org/system/images/photos/000/001/903/medium/spectrometer_equations_1.png)](https://i.publiclab.org/system/images/photos/000/001/903/original/spectrometer_equations_1.png)

By solving the diffraction grating equating for θ (Equation 2), then using Equation 2 to find θ for the extreme wavelengths of interest (400nm and 900nm) the bounds of the system can be found. Plugging 400 nm into Equation 2 gives an angle of 23.58°, and plugging 900 nm into Equation 2 gives an angle of 64.16°.

Since the intensity of light decreases with distance, the distance of each photodiode should be as close to an equal distance from the diffraction gratin as possible. This further restricts the geometry of the system so that one edge of the photodiode is 23.58° from the grating’s normal a certain distance away from the grating, and that the other edge 64.16° from the grating’s normal the same distance from the grating. Using this fact, the grating’s length (1.93 in), the law of cosigns (Equation 3. d1 is the distance from the grating to the array and d2 is the length of the array), and the angles found above, the distance that each end of the photodiode should be from the grating is found to be 2.78 inches. A diagram with the angles and distances of the optical platform is shown in Figure 2.


[![diodearray_spectrometer3.png](https://i.publiclab.org/system/images/photos/000/001/905/medium/diodearray_spectrometer3.png)](https://i.publiclab.org/system/images/photos/000/001/905/original/diodearray_spectrometer3.png)


##Photos

I am using Energia to program a Texas Instruments Stellaris LaunchPad and Processing to make a GUI. The code is still very much in development but it currently offers some basic functionality.
https://github.com/bhickman/PDA-Spectrometer

##Photos
Below are photos of the spectrometer using a 5mm white LED as the light source. 

A small project box was used to house the light source, 

[![103_3307.JPG](https://i.publiclab.org/system/images/photos/000/001/906/medium/103_3307.JPG)](https://i.publiclab.org/system/images/photos/000/001/906/original/103_3307.JPG)

A hole was drilled on one side to hold the LED. On the opposite side a hole was drilled for plastic collimating lens.

[![103_3309.JPG](https://i.publiclab.org/system/images/photos/000/001/907/medium/103_3309.JPG)](https://i.publiclab.org/system/images/photos/000/001/907/original/103_3309.JPG)

A cuvette holder was made by drilling a 1" hole through a block of wood (I know the hole for the cuvette should be square for absorbance measurements, but this was easier...). Then a smaller hole was drilled though the block for the light to pass though the sample. 

[![103_3310.JPG](https://i.publiclab.org/system/images/photos/000/001/908/medium/103_3310.JPG)](https://i.publiclab.org/system/images/photos/000/001/908/original/103_3310.JPG)

A pice of black paper with a ~1mm slit was glued to the exit side of the cuvette holder. Then the 1000 lines/mm transmission grating was glued to the black paper.

[![103_3311.JPG](https://i.publiclab.org/system/images/photos/000/001/909/medium/103_3311.JPG)](https://i.publiclab.org/system/images/photos/000/001/909/original/103_3311.JPG)

The photodiodearray was mounted on a block of wood. Then the block of wood was secured into place so that the photodiodearray was aligned as best as cold be managed to the specifications shown in figure 2 above. 

[![103_3314.JPG](https://i.publiclab.org/system/images/photos/000/001/910/medium/103_3314.JPG)](https://i.publiclab.org/system/images/photos/000/001/910/original/103_3314.JPG)

A hole was drilled in the cover of the larger project box so that it aligned with the hole in the cuvette holder.

[![103_3320.JPG](https://i.publiclab.org/system/images/photos/000/001/911/medium/103_3320.JPG)](https://i.publiclab.org/system/images/photos/000/001/911/original/103_3320.JPG)

##Initial Data
The performance of the spectrometer was tested with a serial dilution of Nyquil (red type. Its all I had laying around...). This was done for both the white LED and an incandescent bulb as the light source. 


[![LED_plots.png](https://i.publiclab.org/system/images/photos/000/001/913/medium/LED_plots.png)](https://i.publiclab.org/system/images/photos/000/001/913/original/LED_plots.png)



[![Incadescent_plots.png](https://i.publiclab.org/system/images/photos/000/001/914/medium/Incadescent_plots.png)](https://i.publiclab.org/system/images/photos/000/001/914/original/Incadescent_plots.png)

##Processing GUI screenshots

There is a lot that needs to be done to the GUI but it currently provides limited functionality.


Below is a screen shot of a water blank.

[![GUIblank.png](https://i.publiclab.org/system/images/photos/000/002/102/medium/GUIblank.png)](https://i.publiclab.org/system/images/photos/000/002/102/original/GUIblank.png)

Below is a screen shot of the absorbance spectrum of approximately 10uM rhodamine B.

[![BUIRB.png](https://i.publiclab.org/system/images/photos/000/002/103/medium/BUIRB.png)](https://i.publiclab.org/system/images/photos/000/002/103/original/BUIRB.png)





##Stuff to do

Mathematically the spectrometer should operate in the 400-900 nm wavelength range. However a calibration needs to be done to get the exact wavelengths due to discrepancies between the theoretical and actual design.

I would like to use a halogen bulb as the light source, but the design need to be modified to handle the heat generated.

Develop a way to eliminate/reduce higher order light interference. 
