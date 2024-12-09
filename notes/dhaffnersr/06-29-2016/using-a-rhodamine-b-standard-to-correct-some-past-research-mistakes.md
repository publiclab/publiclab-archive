---
title: 'Using a Rhodamine B standard to correct some past research mistakes...'
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/06-29-2016/using-a-rhodamine-b-standard-to-correct-some-past-research-mistakes.md
nid: 13248
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/016/815/original/rhodamine_b_in_ethanol_june_28.png)

# Using a Rhodamine B standard to correct some past research mistakes...

by [dhaffnersr](../profile/dhaffnersr) June 29, 2016 23:03

June 29, 2016 23:03 | Tags: 

----

I was going to post a new research note on a Rhodamine B concentration study yesterday and decided to double check some anomalies that had been occurring both with Rhodamine B and Fluorescein. I found a few glaring errors in that work and decided not to post any of it. I'm going to discuss the mistake first before discussing the importance of understanding the fundamentals of spectroscopy.

First mistake, I was taking the spectra of the Blanks,ie.,(the solvents in which the samples are dissolved in) but I was not subtracting them from the samples, only using their wavelengths as my excitation values.

Second, I was using the wrong Bandwidth value for the spectrometer when inputting those numbers to remove Rayleigh/Raman scatter.

Thirdly, although the Fluorescein standard dilution is correct, the excitation wavelength I was using is NOT. The Rhodamine B solution that I use, is NOT standardized correctly according to Turner Industries specifications. I misread a critical step in their process.

So I spent all morning today, redoing ALL my standards and solutions to a tee! I have and am, re-evaluating my techniques and preps, and making the necessary adjustments in my procedures in order to preform at a more scientific and accurate pace.

Below are the results from my corrections today, I decided to use the Rhodamine B test because it has a max absorption of 543nm and emission at 565nm. 


[![Both_charts_OMLC_and_Plab_june_29.png](//i.publiclab.org/system/images/photos/000/016/816/large/Both_charts_OMLC_and_Plab_june_29.png)](//i.publiclab.org/system/images/photos/000/016/816/original/Both_charts_OMLC_and_Plab_june_29.png)

The excitation wavelength that the Oregon Medical Laser Center used for this scan was 510nm, of course I used 532nm, I believe that if I would have matched their excitation wavelength my emission line would have started at approximately the same place as the OMLC. There is still a 2nm discrepancy at the peak wavelength of 567nm, which should have been 565nm.

Next I am presenting the specifications for the laser that I am using:


[![laser_specs_june_29.png](//i.publiclab.org/system/images/photos/000/016/817/large/laser_specs_june_29.png)](//i.publiclab.org/system/images/photos/000/016/817/original/laser_specs_june_29.png)

It does have great stability for a portable laser.

I wanted to touch on how to determaine the bandwidth of the spectrometer that you are using, especially the home brew type, I understood before about bandwidth begin proportional to slit width, but instead of me actually taking the time to do the actual calculations I just assumed that since I was using a particular slit width, well it must just be the same number? Wrong!  

Below are the values transfered into the equation for determining the actual bandpass using the information from my spectrometer's specs: 0.12mm slit width, 361nm ruling density (I upgraded the DVD piece to 8.4g.) at 2770 lines per mm. at 40 degrees.


[![bandpass_calulations_plab_june29.png](//i.publiclab.org/system/images/photos/000/016/818/large/bandpass_calulations_plab_june29.png)](//i.publiclab.org/system/images/photos/000/016/818/original/bandpass_calulations_plab_june29.png)

As you can see at the end, I have a spectral bandwidth of 8.1nm, now this is for the wavelength set at 532nm (very important). If I am reading the literature correct, you have to change this value at each excitation wavelength. For fluorescein I would have had to set it at either 490nm or 495nm, those are the excitation wavelength's for that molecule, so using a 470nm Blue LED ( thanks to @stoft, for his invaluble help and knowledge on all this.)

So using a 532nm laser for fluorescein was never going to produce the expected results because of its dominating wavelength. Perhaps a Blue laser at a wavelength of 473nm might work to produce the right energy transfers. 

References:

http://www.iss.com/resources/research/technical_notes/PC1_MeasQuantumYldVinci.html

http://www.rapidtables.com/math/number/PPM.htm#conversion

http://www.turnerdesigns.com/

http://omlc.org/spectra/PhotochemCAD/html/009.html

http://chemistry.stackexchange.com/questions/9935/difference-between-an-absorbance-emission-and-excitation-spectrum-for-uv-visib




 