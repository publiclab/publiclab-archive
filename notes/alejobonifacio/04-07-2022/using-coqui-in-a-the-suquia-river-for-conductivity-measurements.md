---
title: "Using Coqui in a the Suquía river for conductivity measurements"

tagnames: 'water-quality, pollution, conductivity, coqui, south-america, argentina, total-dissolved-solids, zoom:6, zoom:15, zoom:18, lon:-64, lat:-31, research-curation-fellows, lat:-31.403172, lon:-64.204284, lat:-31.403099, lon:-64.20428'
author: alejobonifacio
path: /notes/alejobonifacio/04-07-2022/using-coqui-in-a-the-suquia-river-for-conductivity-measurements.md
nid: 30293
uid: 639376

---

![](https://publiclab.org/public/system/images/photos/000/045/648/original/Portada.png)

# Using Coqui in a the Suquía river for conductivity measurements

by [alejobonifacio](../../../profile/alejobonifacio) | April 07, 2022 18:29

April 07, 2022 18:29 | Tags: [water-quality](../tag/water-quality), [pollution](../tag/pollution), [conductivity](../tag/conductivity), [coqui](../tag/coqui), [south-america](../tag/south-america), [argentina](../tag/argentina), [total-dissolved-solids](../tag/total-dissolved-solids), [zoom:6](../tag/zoom:6), [zoom:15](../tag/zoom:15), [zoom:18](../tag/zoom:18), [lon:-64](../tag/lon:-64), [lat:-31](../tag/lat:-31), [research-curation-fellows](../tag/research-curation-fellows), [lat:-31.403172](../tag/lat:-31.403172), [lon:-64.204284](../tag/lon:-64.204284), [lat:-31.403099](../tag/lat:-31.403099), [lon:-64.20428](../tag/lon:-64.20428)

----

#Intro

After trying to [calibrate the conductivity of water with a coqui](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) I decided to make a try in the field. Then go to the Suquía river, one of the most polluted rivers in central Argentina, but I chose a relatively low polluted site called Isla de los Patos (Duck’s island). I used a Coqui with a 10 kohm resistor and a 10uf capacitor. After seeing [some issues with the calibration of Coqui](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) I remembered that the TDS (total dissolved solids, are directly related with conductivity) of water in that site was in the range of best linearity (0.1-1g/L) of the calibration. **Then the goal of that trip was to see if Coqui gives some accurate data, using as control a TDS meter**. 

# Materials

* Coqui
* Commercial TDS meter
* Mobile phone or some device to record audio
* Glass to collect water
* Something to take notes
* [Audacity software](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor)

# Study site
The chosen place for the study was the Isla de los Patos (Duck’s island) in the Suquía river. This site was previously studied in a [Case of Study Note](https://publiclab.org/notes/alejobonifacio/11-12-2021/the-suspicious-drain-on-the-suquia-river), with 3 points of sampling, upstream of a suspicious drainage (S1), the suspicious drainage itself (S2) and downstream of the suspicious drainage (S3).

![image description][1]

# Results

## The good news :smiley:
The relationship between TDS and distance between peaks of sound produced by Coqui ([as explained in a previous note](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor)) was **really linear**!!! That is so good for the reliability of the Coqui measurements. 

![image description][2]


## The bad news :worried:
The relationship between TDS and distance between peaks was inversely proportional. That is strange because in the [previous calibration note](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor) the relationship was directly proportional. Is noteworthy that the water temperature was not the same and the difference between samples in TDS values was smaller than the one used for the calibration curve.

# Some thoughts :thought_balloon:
It will be interesting to calibrate the Coqui for smaller ranges and with more points that were used for the [previous calibration note](https://publiclab.org/notes/alejobonifacio/03-24-2022/be-careful-calibrating-coqui-conductivity-sensor). Also, it will be interesting to take in consideration the effect of temperature in conductivity. 

  [1]: /i/45649.png "sitios_de_muestreo.png"
  [2]: /i/45651.png "Coqui_río.png"