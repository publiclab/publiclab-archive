---
title: "CFL and LED Bulb Study Section III"\ntagnames: ''
author: dhaffnersr
path: /notes/dhaffnersr/09-06-2016/cfl-and-led-bulb-study-section-iii.md
nid: 13423
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/017/932/original/TITLE_PIC.png)

# CFL and LED Bulb Study Section III

by [dhaffnersr](../profile/dhaffnersr) | September 06, 2016 12:21

September 06, 2016 12:21 | Tags: 

----

##Author, David H. Haffner Sr.
September, 5 2016
**3 Different LED bulbs and 3 different CFL bulbs from different manufactures**



[![cfl.png](//i.publiclab.org/system/images/photos/000/017/933/large/cfl.png)](//i.publiclab.org/system/images/photos/000/017/933/original/cfl.png)


[![LED.png](//i.publiclab.org/system/images/photos/000/017/934/large/LED.png)](//i.publiclab.org/system/images/photos/000/017/934/original/LED.png)

In these experiments, I tested 3 “A” type LED bulbs (“A” type means that they have a round shape like a standard light bulb,) and 3 “twisted” type CFL bulbs (“twisted” meaning their spiral design shape.) 

The main goal for these tests were to compare the spectral shapes of three different LEDs from various manufactures and find the best match in relation to a three CFL spectrums in relation to their Mercury calibration lines. 

Fig.1 illustrates all 3 LED bulbs compared together, and their relative luminous flux, on the plot is marked where the mathematical formula for that flux is relative for that particular peak wavelength. 555nm @ 683 lumens and 480nm @ 68 lumens, the formula for converting these watts to lumens is given in table.1c.

[![FIG_1.png](//i.publiclab.org/system/images/photos/000/017/935/large/FIG_1.png)](//i.publiclab.org/system/images/photos/000/017/935/original/FIG_1.png)

[![Table_1c.png](//i.publiclab.org/system/images/photos/000/017/936/large/Table_1c.png)](//i.publiclab.org/system/images/photos/000/017/936/original/Table_1c.png)

As you can see from the spectrum in fig.1a and fig.2, how they create "white" is very different than the way other LEDs create “white” light, because the Hue has to be able to create all the colors of the rainbow, there are two ways in which these LEDs produce “white” light; One is to use individual LEDs that emit three primary colors—red, green, and blue—and then mix all the colors to form white light. 

The other, is to use a phosphor material to convert monochromatic light from a blue or UV LED to broad-spectrum white light, much in the same way a fluorescent light bulb works.

The "yellow plastic" covering, (as is the case for the DIOD-TECH LED bulb,) is actually why the spectrum looks the way it does. There's no such thing as a "white" LED. Instead, to create a white light, some LED bulbs etc., use just a blue LED, (notice the spike in the blue part of the spectrum), and a yellow phosphor is used to fill in the rest (the big hump).

[![FIG_1a.png](//i.publiclab.org/system/images/photos/000/017/937/large/FIG_1a.png)](//i.publiclab.org/system/images/photos/000/017/937/original/FIG_1a.png)

[![FIG_2.png](//i.publiclab.org/system/images/photos/000/017/938/large/FIG_2.png)](//i.publiclab.org/system/images/photos/000/017/938/original/FIG_2.png)

Fig.3 illustrates the maximum gain before clipping of the RGB channels of the 3 LED bulbs, and fig.3a are the maximum gain values for the 3 CFL spectral scans.

[![FIG_3.png](//i.publiclab.org/system/images/photos/000/017/939/large/FIG_3.png)](//i.publiclab.org/system/images/photos/000/017/939/original/FIG_3.png)

[![FIG_3a.png](//i.publiclab.org/system/images/photos/000/017/940/large/FIG_3a.png)](//i.publiclab.org/system/images/photos/000/017/940/original/FIG_3a.png)

In fig.4 this is the plot with the LED spectral scan from 9/2/2016 (LED bright stik_10W) compared with the “A” shaped LED bulbs, I made this comparison because the “bright stik,” has a “cylindrical” shape much like the CFL “twist” design. 

[![FIG_4.png](//i.publiclab.org/system/images/photos/000/017/941/large/FIG_4.png)](//i.publiclab.org/system/images/photos/000/017/941/original/FIG_4.png)

Finally, in fig.4a, I chose scan #8 the LED 10W bright stik and scan # 2 the CFL 13W 2700K bulb, both from GE (general electric corp.) 

The LED bright stik had the closest match to a CFL’s Mercury calibration lines than any of the other LED bulbs I tested and this particular CFL bulb, was the most stable [spectral wise] than any of the others tested. 

[![FIG_4a.png](//i.publiclab.org/system/images/photos/000/017/942/large/FIG_4a.png)](//i.publiclab.org/system/images/photos/000/017/942/original/FIG_4a.png)

Table 1a and 1b are the data for the blue and green spectral peaks for the 3 LEDs and the 3 CFLs;

[![Table_1a.png](//i.publiclab.org/system/images/photos/000/017/943/large/Table_1a.png)](//i.publiclab.org/system/images/photos/000/017/943/original/Table_1a.png)

[![Table_1b.png](//i.publiclab.org/system/images/photos/000/017/944/large/Table_1b.png)](//i.publiclab.org/system/images/photos/000/017/944/original/Table_1b.png)

In figure 5, I rescanned the 10W LED bright stik from GE, using Plab’s spectral-workbench capture program and compared it to the scan I did of the same LED on 9/2/2016, under the exact same experimental conditions. I did something a little different on this one, as you can see the plot from Plab is dependent on the previous CFL calibration I did and it’s “quality fit” factor.

I have the ability to choose my wavelength range, so the Plab scan does not match exactly with mine, so I adjusted for that by subtracting the X axis first by a factor of 14nm to match the blue peak, then by an additional 11nm to match my wavelength range of 400nm.

[![FIG_5.png](//i.publiclab.org/system/images/photos/000/017/945/large/FIG_5.png)](//i.publiclab.org/system/images/photos/000/017/945/original/FIG_5.png)

This is another difference in Plab’s algorithm for processing spectral data, I was careful that there was no clipping of the RGB channels in either scan, Plab’s and Spekwin32, but I still achieved maximum gain for all 3 channels for a much better representation of the spectra. 

These are the spectral plots for all three CFL bulbs that were used in this study, fig.6

[![Fig_6.png](//i.publiclab.org/system/images/photos/000/017/946/large/Fig_6.png)](//i.publiclab.org/system/images/photos/000/017/946/original/Fig_6.png)

Fig.6a and fig.6b are the blue and green spectral peaks

[![Fig_6a.png](//i.publiclab.org/system/images/photos/000/017/947/large/Fig_6a.png)](//i.publiclab.org/system/images/photos/000/017/947/original/Fig_6a.png)

[![Fig_6b.png](//i.publiclab.org/system/images/photos/000/017/948/large/Fig_6b.png)](//i.publiclab.org/system/images/photos/000/017/948/original/Fig_6b.png)

[![VIEW_2.png](//i.publiclab.org/system/images/photos/000/017/949/large/VIEW_2.png)](//i.publiclab.org/system/images/photos/000/017/949/original/VIEW_2.png)

[![VIEW_3.png](//i.publiclab.org/system/images/photos/000/017/950/large/VIEW_3.png)](//i.publiclab.org/system/images/photos/000/017/950/original/VIEW_3.png)

References
[1] http://www.gizmology.net/LEDs.htm - LED color temps and other data

[2] http://www.apogeeinstruments.com/light-intensity-measurements-for-light-emitting-diodes-leds/ - LED study done using 4 quantum sensors

*[3] http://www.colorkinetics.com/Learn/docs/Evaluating_Light_Output.pdf - Evaluating Light Output, a technical brief

[4] http://www.rapidtables.com/calc/light/watt-to-lumen-calculator.htm

[5] http://www.reefcentral.com/forums/showthread.php?t=2017939 – LEDs evaluated using an OceanOptics S2000 spectrometer part l

[6] http://s919.photobucket.com/user/redfishnc/library/LED%20TESTING?sort=3&start=all&page=1 – LEDs evaluated using an OceanOptics Spectrometer part ll

[7] http://www.soundandvision.com/content/led-vs-cfl-bulbs-color-temp-light-spectrum-and-more#MhqT0cZztz6RDMWF.97

[8] http://en.wikipedia.org/wiki/Light-emitting_diode

[9] http://www.mikewoodconsulting.com/articles/Protocol%20Winter%202011%20-%20White%20LEDs.pdf – how do white LEDs work?

[10] http://hyperphysics.phy-astr.gsu.edu/hbase/vision/lumpow.html

[11] http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/atspect2.html#c2 – mercury vapor spectral lines



















