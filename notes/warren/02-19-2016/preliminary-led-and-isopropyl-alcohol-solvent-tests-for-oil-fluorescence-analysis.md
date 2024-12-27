---
title: "Preliminary LED and isopropyl alcohol solvent tests for oil fluorescence analysis"

tagnames: 'new-york-city, spectrometer, oil, workshop, extraction, oil-testing-kit, otk, pig, isopropyl, response:12713, response:10074, activity:spectrometry-sampling'
author: warren
path: /notes/warren/02-19-2016/preliminary-led-and-isopropyl-alcohol-solvent-tests-for-oil-fluorescence-analysis.md
nid: 12716
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/014/497/original/IMG_20160210_135231.jpg)

# Preliminary LED and isopropyl alcohol solvent tests for oil fluorescence analysis

by [warren](../../../profile/warren) | February 19, 2016 23:26

February 19, 2016 23:26 | Tags: [new-york-city](../tag/new-york-city), [spectrometer](../tag/spectrometer), [oil](../tag/oil), [workshop](../tag/workshop), [extraction](../tag/extraction), [oil-testing-kit](../tag/oil-testing-kit), [otk](../tag/otk), [pig](../tag/pig), [isopropyl](../tag/isopropyl), [response:12713](../tag/response:12713), [response:10074](../tag/response:10074), [activity:spectrometry-sampling](../tag/activity:spectrometry-sampling)

----

Just wanted to post a followup to @matej's post about the Sunview Luncheonette event -- we had a couple important successes which merit some more detail.

We'd long been meaning to test dissolving petroleum pollutants like crude oil in a different solvent than the mineral oil we'd been using, but things like methanol or especially hexane are quite toxic, and we wanted to avoid them. But we were hoping for a solvent that was as ubiquitous as mineral oil, yet possible to evaporatively concentrate. On @mattp's suggestion from the [2015 Barnraising](/barnraising), we tried isopropyl alcohol, at 91% from a pharmacy. 

[![Screenshot_2016-02-19_at_6.09.21_PM.png](//i.publiclab.org/system/images/photos/000/014/498/medium/Screenshot_2016-02-19_at_6.09.21_PM.png)](//i.publiclab.org/system/images/photos/000/014/498/original/Screenshot_2016-02-19_at_6.09.21_PM.png)

Evaporative concentration would be basically leaving it out to evaporate away the alcohol, leaving whatever's left to become more and more concentrated. Even if we had 100:1 alcohol to oil, we could evaporate out 90% of the alcohol to achieve a 10:1 ratio. Some of the oil could evaporate as well, but this is still a standard technique in lab methods -- for example, read [this note by @silverhammer](/notes/silverhammer/02-27-2014/evaluation-of-pesticide-residues-in-organic-raspberries-using-different-extraction-solvents) about evaporating off solvents. 

In our quick test, a few drops of crude into a few ounces of 91% isopropyl dissolved quickly as I shook up the nalgene bottle, and when scanned, produced strong fluorescence:

<iframe width='100%' height='450px' style='border:none;' src='//spectralworkbench.org/spectrums/embed2/71498'></iframe>

Another test where I soaked a crude-soaked piece of [PIG mat](/tag/pig-mat) in isopropyl for 15 minutes appeared to yellow the alcohol, but when I removed the PIG mat, it looked almost clear again. But when visually compared to pure isopropyl, there was an obvious yellow tint. 

[![IMG_20160213_150057.jpg](//i.publiclab.org/system/images/photos/000/014/499/large/IMG_20160213_150057.jpg)](//i.publiclab.org/system/images/photos/000/014/499/original/IMG_20160213_150057.jpg)

In any case, not enough crude dissolved into that isopropyl to get good fluorescence (see combined graph below). I wonder if soaking longer would be helpful -- it seems like it would, along with evaporatively concentrating it, since drops of crude in isopropyl did work. 


##Acrylic/PMMA cuvettes

A big lesson learned was that alcohol apparently melts acrylic -- the cuvettes shattered from the pressure of putting their caps in. Luckily, I had some polystyrene cuvettes, which are actually more common. We'll have to see if some of the oily samples dissolve the polystyrene... they didn't during the tests we did, but we only tested crude. 

[![IMG_20160213_153422.jpg](//i.publiclab.org/system/images/photos/000/014/500/large/IMG_20160213_153422.jpg)](//i.publiclab.org/system/images/photos/000/014/500/original/IMG_20160213_153422.jpg)

I'm not sure what we'd use if we dissolved diesel in isopropyl -- the diesel would melt the polystyrene, but the isopropyl would melt the acrylic. Maybe we'd need to use glass? Anyhow, we're currently more interested in heavier residues anyhow, so we'll set that question aside for later. Here are the second set of isopropyl samples in polystyrene cuvettes (mixing was done in nalgenes):

[![IMG_20160213_154651.jpg](//i.publiclab.org/system/images/photos/000/014/502/large/IMG_20160213_154651.jpg)](//i.publiclab.org/system/images/photos/000/014/502/original/IMG_20160213_154651.jpg)



##Data

Finally, we scanned some of the crude-in-isopropyl samples and got strong fluorescence. We were testing with 405nm LEDs, and this bears separate testing with lasers, but the results seem very positive. Here's an [assorted set](https://spectralworkbench.org/sets/3169) compared to one which used a laser (by @ethanbass, actually):

<iframe width='100%' height='700px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3169'></iframe>


##405nm LED input light

As mentioned, we were also testing 405nm LEDs as a possible replacement for 405nm lasers for fluorescence testing. The advantages have been [laid out](), so the question is whether we can observe the same red shift in heavier oil samples vs. lighter ones. And a valid concern by @stoft has been that a broader peak would lower the resolution (or detail) of any fluorescent curves we get -- we'll have to see if we can distinguish oils by weight in the way we've been able to do with lasers. 

But before we get there, we just wanted to try getting decent fluorescence with LEDs at all -- just seeing if they're bright and repeatable enough in basic use. The answer to this was yes -- they're easy to use, running just off 3.3v power from an Arduino-compatible Trinket board. We didn't have to dim them much, but as @stoft has pointed out, it's best to dim the fluorescent light, not the input light, so one thing we did a bit of prototyping on was a wheel-based attenuator, which could be easier to set and use than a strip-based one. More on this soon, but as the [cuvette frame](/tag/cuvette-frame) project progresses, we'll try to integrate this as a feature.


[![IMG_20160216_140916_2.jpg](//i.publiclab.org/system/images/photos/000/014/501/large/IMG_20160216_140916_2.jpg)](//i.publiclab.org/system/images/photos/000/014/501/original/IMG_20160216_140916_2.jpg)



See the sample scans above -- as mentioned, we'll want to be testing LED lighting with known samples identically to the laser tests we've done, for comparison, and to test isopropyl with lasers, separating these two experiments in some more controlled tests. 

I'm happy to ship folks these UV LEDs for testing -- they're easy to set up without soldering by plugging into the 3v source of a standard Arduino. And while you can find the [latest cuvette frame design here](/notes/warren/01-25-2016/ongoing-design-of-compact-cuvette-frame) (latest version in the comments), I'll be posting an update with a redesigned cuvette-holding interior soon. 


##Spectrum alignment in spectrometer

I need to reproduce this and document clearly, but one more note -- we noticed that in my v3 PL spectrometer, the spectrum was slightly diagonal, which isn't a problem except that since brightness varied, we'd sometimes get the bright region of the blue and green, but the dim region of the red, as the cross-section line intersected the spectrum at an angle. There are a few things we could try to do about this, but it will be an important thing to resolve if we hope to do cross-instrument comparisons of any kind. It may not have a big effect on analyses in the same device, as long as it's not affected by cuvette position -- the cuvette should be pushed all the way to the bottom of the frame, firmly. 


Thanks to everyone who came to the event -- it was fun, engaging, and we made some really important steps and discoveries. Let's follow up with some rigorous replications!