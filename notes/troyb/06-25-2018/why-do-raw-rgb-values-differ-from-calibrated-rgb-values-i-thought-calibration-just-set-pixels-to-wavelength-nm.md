---
title: 'Why do raw RGB values differ from calibrated RGB values? I thought calibration just set pixels to wavelength (nm)?'
tagnames: spectral-workbench, question:spectral-workbench
author: troyb
path: /notes/troyb/06-25-2018/why-do-raw-rgb-values-differ-from-calibrated-rgb-values-i-thought-calibration-just-set-pixels-to-wavelength-nm.md
nid: 16568
uid: 536769

---

# Why do raw RGB values differ from calibrated RGB values? I thought calibration just set pixels to wavelength (nm)?

by [troyb](../profile/troyb) June 25, 2018 08:50

June 25, 2018 08:50 | Tags: [spectral-workbench](../tag/spectral-workbench), [question:spectral-workbench](../tag/question:spectral-workbench)

----

Here are the first lines of spectra 137547\.

Calibrated:

| Average| Red| Green| Blue|
| 12.7| 7.65| 10.2| 22.95|
| 12.7| 7.65| 10.2| 22.95|
| 12.7| 7.65| 10.2| 22.95|
| 12.7| 7.65| 10.2| 22.95|
| 12.7| 7.65| 10.2| 22.95|

|  |  |  |
|--|--|--|

Uncalibrated:

| Average| Red| Green| Blue|
| 15| 10| 12| 23|
| 15| 10| 12| 23|
| 15| 10| 12| 25|
| 14| 8| 11| 24|
| 14| 8| 11| 24|
  

The small differences could matter for my daughter's project, measuring a greenness index (green minus blue) to estimate whether algae are growing, especially after we had to recalibrate.