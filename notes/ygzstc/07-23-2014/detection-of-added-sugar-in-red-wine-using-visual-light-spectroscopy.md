---
title: Detection of Added Sugar in Red Wine Using Visual Light Spectroscopy
tagnames: spectrometer, uv, concentration, food, wine, sugar, activity:spectrometry, activity:science-fair
author: ygzstc
path: /notes/ygzstc/07-23-2014/detection-of-added-sugar-in-red-wine-using-visual-light-spectroscopy.md
nid: 10955
uid: 422489

---

![](https://publiclab.org/public/system/images/photos/000/005/480/original/PictureRWS-1.png)

# Detection of Added Sugar in Red Wine Using Visual Light Spectroscopy

by [ygzstc](../profile/ygzstc) July 23, 2014 19:37

July 23, 2014 19:37 | Tags: [spectrometer](../tag/spectrometer), [uv](../tag/uv), [concentration](../tag/concentration), [food](../tag/food), [wine](../tag/wine), [sugar](../tag/sugar), [activity:spectrometry](../tag/activity:spectrometry), [activity:science-fair](../tag/activity:science-fair)

----

Disclaimer: _All the information (including hardware, software, experimental setup, procedure, and results) in this research note is provided "as is" without warranty of any kind. Author makes no warranties, express or implied, that they are free of error, or are consistent with any particular standard of merchantability, or that they will meet your requirements for any particular application and/or problem. They should not be relied on for solving a problem whose incorrect solution could result in incorrect claims which may or may not lead to any kind of monetary loss related to trade and/or legal liability. If you do use them in such a manner, it is at your own risk. The author disclaims all liability for direct, indirect, or consequential damages resulting from your experiments and claims based on their results._

###Introduction

Naturally occurring sugar is the sugar found in whole, unprocessed foods, such as milk, fruit, vegetables and some grains. The most common natural sugars are fructose, which is found in fruit, and lactose, which is found in milk products.

Added sugar is the sugar added to processed food and drinks while they are being made, as well as sugar you may add to your food at home. Food manufacturers may add both natural sugars (such as fructose) and processed sugars (such as high-fructose corn syrup) to processed food and drinks.

[](null)Why is sugar added to food and drinks? Well, while added sugar provides no nutritional value, it does serve many uses in food processing. Added sugar can: (1) Serve as a preservative for jellies and jams; (2) Assist in fermentation of breads and alcohol; (3) Maintain the freshness of baked goods. Sugar is also added to processed food and drinks because it makes them taste more appealing.

There are serious health consequences to consuming added sugar. Too much added sugar in your diet can contribute to tooth decay, obesity, difficulty controlling type 2 diabetes, higher triglyceride levels, lower high-density lipoprotein (HDL, also called “good” cholesterol) levels, and heart disease. Also, if you fill up on foods or beverages that contain added sugar, you are less likely to consume healthy foods and beverages that protect your health. 
So the question is: Can we come up with a cheap but effective method for household use to detect added sugar in our daily drinks?

In this preliminary study, detection of added sugar in red wine is investigated using visual light spectroscopy. 

(So, why did not I use grape juice? Well, wine can be considered as grape juice and I do not like non-alcoholic grape juice at all :) )

###Setup, Sample Preparation and Data Collection

In the study, red wine (Gallo Family, Cabarnet Sauvignon) and granulated white sugar are considered. In addition, Public Lab’s webcam-based spectrometer (http://publiclab.org/wiki/spectrometer), and its data collection software “Spectral Workbench” (https://spectralworkbench.org/) along with few extra tools are used (See Figure 1). 


[![PictureRWS-1.png](https://i.publiclab.org/system/images/photos/000/005/476/medium/PictureRWS-1.png)](https://i.publiclab.org/system/images/photos/000/005/476/original/PictureRWS-1.png)

Figure 1 - Setup (left) and products used (right)

Total 8 samples are created. Starting from no sugar added red wine, 1 tea spoon (~ 4 grams) of granulated white sugar is added to a cup (~ 235 ml) of red wine for each sample, up to 7 tea spoons. 

Once the spectrometer is calibrated with CFL, physical setup (shown in Figure 1) is set. First, a spectral data is recorded with the empty petri dish (90 mm diameter, glass) and a Verilux 18 Watt Natural Spectrum CFL Bulb (http://www.verilux.com/compact-fluorescent-bulbs/compact-fluorescent/ ).  We call this spectrum as “baseline”. Later, from each sample, 15 ml is taken and poured in the petri dish and the spectral data are collected.  (Those spectral data are on the Public Lab’s website and nomenclature of the data is provided in Appendix.)

Collected spectral data are then smoothed with 5th order Savitzky–Golay filter. Baseline, red wine (no added sugar) and red wine with added sugar (7 tea spoons/cup) are shown in Figure 2.


[![PictureRWS-2.png](https://i.publiclab.org/system/images/photos/000/005/477/medium/PictureRWS-2.png)](https://i.publiclab.org/system/images/photos/000/005/477/original/PictureRWS-2.png)

Figure 2 – Spectral data of the baseline, red wine (no added sugar) and red wine with added sugar (7 tea spoons/cup) - zoomed region on the right

Later, the difference between each sample spectra and the baseline spectrum is calculated. Resulting spectral data (from few samples) are shown in Figure 3.

[![PictureRWS-3.png](https://i.publiclab.org/system/images/photos/000/005/478/medium/PictureRWS-3.png)](https://i.publiclab.org/system/images/photos/000/005/478/original/PictureRWS-3.png)

Figure 3 – Spectral data of the difference between the samples and the baseline (zoomed region on the right)

As a simple metric for measuring the level of added sugar, area under the curve between the wavelengths 425-440 and 590-620 nm are selected. This is more robust measure compared to “peak height” which fluctuate more causing noisy measurements. 

Values of the area under the curve (AUC) with respect to different added sugar levels are shown in Figure 4. It is clear that the amount of added sugar and AUC exhibit almost perfect linear relation.


[![PictureRWS-4.png](https://i.publiclab.org/system/images/photos/000/005/479/medium/PictureRWS-4.png)](https://i.publiclab.org/system/images/photos/000/005/479/original/PictureRWS-4.png)

Figure 4 – Adulteration level and AUC exhibit almost perfect linear relation 

NOTE-1: The first data point which is calculated from red wine sample (without added sugar) seems to be problematic! That was the first data sample poured into the petri dish and petri dish might not be completely clean at that time. Another potential explanation is: the lamp used in this experiment takes some time to reach its stable maximum intensity as any other CFL and may be that sample spectra collected little early. However, remaining data suggest that the technique works well.


###Results and Discussions

Results of this preliminary study show that, using visual light spectroscopy (using the spectrometer developed by Public Lab), it’s possible to detect/model/measure added sugar amount in red wine in an efficient and simple way. Furthermore, these results indicate that it might be possible to detect and measure added sugar amount in other drinks such as fruit juices, coffee etc. as well. 

These results also suggest that, similar approach may be used to identify the level of salt or some other added sweeteners in drinks.

NOTE-2: Looks like the LED lamp I used in my [olive oil adulteration study](http://publiclab.org/notes/ygzstc/04-30-2014/detection-of-olive-oil-adulteration-with-peanut-oil-using-visual-light-spectroscopy) is much better than Verilux CFL that I used in this study.


###Appendix

test2: CFL spectra used for calibration

d3-L: Spectra of the Verilux CFL

d3-b: Spectra of empty petri dish - baseline

d3-rw-s0: Spectra of sample – red wine (no sugar added)

d3-rw-sx: Spectra of sample – x tea spoons of sugar added to a cup (x=1 to 7)

