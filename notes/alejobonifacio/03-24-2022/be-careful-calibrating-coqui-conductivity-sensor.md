---
title: Be careful calibrating Coqui conductivity sensor
tagnames: calibration, water-quality, water, conductivity, coqui, zoom:9, lon:-64, lat:-31, research-curation-fellows
author: alejobonifacio
path: /notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor.md
nid: 30185
uid: 639376

---

![](https://publiclab.org/public/system/images/photos/000/045/563/original/DistbetpeaksVsConc.png)

# Be careful calibrating Coqui conductivity sensor

by [alejobonifacio](../profile/alejobonifacio) March 24, 2022 19:24

March 24, 2022 19:24 | Tags: [calibration](../tag/calibration), [water-quality](../tag/water-quality), [water](../tag/water), [conductivity](../tag/conductivity), [coqui](../tag/coqui), [zoom:9](../tag/zoom:9), [lon:-64](../tag/lon:-64), [lat:-31](../tag/lat:-31), [research-curation-fellows](../tag/research-curation-fellows)

----

#Intro

I tried to calibrate the Coqui conductivity sensor but I wanted to avoid the [overheating of the buzzer](https://publiclab.org/questions/alejobonifacio/03-23-2022/did-anyone-feel-a-strong-heating-of-the-buzzer-in-the-coqui-sensor-is-too-hot). Then I used a 10 kohm resistor and a 10uf capacitor.  
![image description][1]
 
#The problem
Later I recorded the sound of different water samples. I did it that because I wanted to get a numerical data from the sound produced by the Coqui as was proposed in different notes ([analyzing coqui signal](https://publiclab.org/notes/imvec/06-11-2018/analizing-the-signal-of-the-coqui-using-audacity) and [building a coqui and analyzing its sound](https://publiclab.org/notes/bhamster/08-06-2021/building-a-coqui-water-conductivity-sensor-and-analyzing-its-sound)). But I didn’t get a good linearity. I get these curves:  

![image description][2]  
_Nominal concentrations of salt in tap water vs average frequency of the sound produced by the buzzer. This method I taken from @bhamster [note](https://publiclab.org/notes/bhamster/08-06-2021/building-a-coqui-water-conductivity-sensor-and-analyzing-its-sound)_

Because the linearity was not so good I decided to try another variable to see if I get better fitting. I remember that 555 works like giving pulses, then I decided to measure the distance between peaks as measurement of conductivity.  

![image description][3]  
_In audacity software you could measure the distance between peaks in milliseconds_  

The problem continues there, the curve gets no good linearity.    

![image description][4]  
_Nominal concentrations of salt in tap water vs the distance between the peak of loud sound produced the buzzer_  

In both cases, the first problem was on the tap water (0 g/L) and its higher value than the low salt concentration samples (0.1 g/L). The second problem was the flattening in the more salty samples (5 and 10 g/L).

# Conclusions
The possibility of contamination of the samples I dismissed because I measured the total dissolved solids in the samples and I see bigger TDS lectures as bigger was the nominal concentration of salt. Although, at more salty samples the curve gets flatten.   
![image description][5]  
_Relationship between nominal concentrations of salt and TDS._  

I think that this coqui could be useful at a small range of salinities/conductivity. Seeing the results that I get the range more usable could be between 0.1 - 1 g/L. Also, in this range are the salinities of most rivers in my zone.

# Next steps
* To make a new curve with more points between 0.1 - 1 g/L.
* Improve the design of coqui following the Don Blair recommendations. Later doing the curve, I began to search for answers on the publiclab website, then I read this [old post of Don Blair](https://publiclab.org/notes/donblair/09-18-2014/duty-cycles-555s-linearity) talking about the bias in the duty cycle of 555 IC. 

  [1]: /i/45568.jpg "coqui.jpg"
  [2]: /i/45569.png "FreqVsConc.png"
  [3]: /i/45567.png "distanciaEntrePicos.png"
  [4]: /i/45570.png "DistbetpeaksVsConc.png"
  [5]: /i/45571.png "ConcVsTDS.png"