---
title: "Spring Fling: Calibrating the Coqui"

tagnames: 'gulf-coast, list:plots-waterquality, coqui'
author: ddileona
path: /notes/ddileona/03-20-2015/spring-fling-calibrating-the-coqui.md
nid: 11694
uid: 436738

---

![](https://publiclab.org/public/system/images/photos/000/009/327/original/Adding_Salt.jpg)

# Spring Fling: Calibrating the Coqui

by [ddileona](../../../profile/ddileona) | March 20, 2015 03:10

March 20, 2015 03:10 | Tags: [gulf-coast](../tag/gulf-coast), [list:plots-waterquality](../tag/list:plots-waterquality), [coqui](../tag/coqui)

----

Hello again!  I have more fun from the Spring Fling for you.

We played with the Coqui, thought about how we would calibrate it, and also compared it to a borrowed YSI. For those who don't know, YSI stands for Yellow Springs Inc. They are a company in Yellow Springs, OH that makes a lot of different sensors.  The one we borrowed is for conductivity. 

If you aren't familiar with the Coqui, you might want to read up on it [here](http://publiclab.org/wiki/coqui) before going further.

**Supplies:**
Coqui
Multimeter with ability to measure frequency
Cups
Water
Epsom salt (MgSO4·7H2O)
Borrowed YSI 

This is the Coqui probe. You'll notice that the two ends of the probe are attached to a marker cap. That is because the conductivity reading will change with the distance between the two ends of the probe. Conductivity also changes with temperature so the two are normally measured together. 


[![Coqui_probe.jpg](https://i.publiclab.org/system/images/photos/000/009/329/medium/Coqui_probe.jpg)](https://i.publiclab.org/system/images/photos/000/009/329/original/Coqui_probe.jpg)


We hooked up the Coqui and filled two jars with tap water. To one jar, we added some epsom salt. At first we just played around with listening to the different pitches the Coqui made with the different solutions. 


[![Adding_Salt.jpg](https://i.publiclab.org/system/images/photos/000/009/328/medium/Adding_Salt.jpg)](https://i.publiclab.org/system/images/photos/000/009/328/original/Adding_Salt.jpg)


Then we got more scientific about it.

Dan hooked up his multimeter to the Coqui circuit so that we could measure the frequency of the sound it was making. This allows us to measure the frequency quantitatively with the multimeter instead of qualitatively with our ears. 


[![Frequency.jpg](https://i.publiclab.org/system/images/photos/000/009/330/medium/Frequency.jpg)](https://i.publiclab.org/system/images/photos/000/009/330/original/Frequency.jpg)


We need a quantitative measurement if we are going to calibrate it.

Next we pulled out the YSI.  It didn't work the first few times we tried it, but then we realized that the water in our jar wasn't high enough to actually submerge the part doing the measuring. Oops!  We got a larger glass and were on our way. 

Dan and I decided to use the YSI to measure the salinity and a few different ratios of salt and water and compare those readings with the frequency output by the Coqui.

We measured four different points. Here's a plot of the YSI measurement vs the Coqui measurement.


[![YSI-Coqui.png](https://i.publiclab.org/system/images/photos/000/009/331/medium/YSI-Coqui.png)](https://i.publiclab.org/system/images/photos/000/009/331/original/YSI-Coqui.png)

That uS unit is called microSiemens. It is the standard unit of conductivity.

This is essentially what you'd do if you were doing a real calibration, only you'd do a lot more points. With those points you could fit a line to your data.  Using the equation of that line, you could then calculate the salinity for any frequency. (Good old y = mx + b!) Excel makes this really easy.

We didn't measure the amount of salt we were putting in. We just measured the conductivity with the YSI. Since most people aren't going to have access to a YSI, you would just measure how much salt you were adding to the water so you would have a known salinity. Only make sure that you use distilled water instead of tap water because tap water already has dissolved salts in it.

**A little information about seawater**
Seawater is made up of many different salts. Sodium Chlordie (NaCl, also known as table salt) is the dominant one. The next most common one is magnesium chloride which is commonly used in road salt (MgCl2).   Here is a chart of the different salts in seawater found in this [powerpoint](http://www.soest.hawaii.edu/oceanography/courses/OCN623/Spring%202015/Salinity2015web.pdf).


[![seawater.PNG](https://i.publiclab.org/system/images/photos/000/009/332/medium/seawater.PNG)](https://i.publiclab.org/system/images/photos/000/009/332/original/seawater.PNG)

And since the most of the salt in the oceans was delivered there by rivers and streams, you are going to find similar salts and ratios in rivers and streams only is lower concentrations. Read more [here](http://www.onr.navy.mil/focus/ocean/water/salinity1.htm).

**Next Steps:**
We need to mix up several different solutions of known salinities and measure the frequency from the Coqui. Then we make a calibration curve, and test our Coqui measurements against the YSI. We should also measure temperature while doing this.

**Question for you:**
Seawater is around 35 parts per thousand salt (that's 3.5%). The different salts provide different numbers of ions per molecule dissolved. NaCl provides 2 ions for each molecule. MgCl2 provides 3 ions for each molecule. The ions are the things that allow the solution to conduct electricity. (That's why distilled water doesn't conduct electricity well.)

I can't decide if for our calibration solution we should try to match the components in seawater (ie get table salt and road salt) or if we'll get the same results using only table salt, but matching the number of dissolved ions in seawater.

Anyone want to weigh in?

Until next time,

Diana