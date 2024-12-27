---
title: "Reproducibility test of data using an IR lamp"

tagnames: 'spectrometer, infrared, ir, lamp, spectrum, repeatability, reproducibility, stability'
author: viechdokter
path: /notes/viechdokter/04-13-2016/reproducibility-test-of-data-using-an-ir-lamp.md
nid: 12962
uid: 468990

cids: 14233,14236,14238,14240

---

![](https://publiclab.org/public/system/images/photos/000/015/502/original/IR_test_setup.jpg)

# Reproducibility test of data using an IR lamp

by [viechdokter](../../../profile/viechdokter) | April 13, 2016 00:28

April 13, 2016 00:28 | Tags: [spectrometer](../tag/spectrometer), [infrared](../tag/infrared), [ir](../tag/ir), [lamp](../tag/lamp), [spectrum](../tag/spectrum), [repeatability](../tag/repeatability), [reproducibility](../tag/reproducibility), [stability](../tag/stability)

----

This was my first in-depth data reproducibility test with the PLab spectrometer 3.0. I used a Philips 250 W infrared lamp, let it shine (let it shine, let it shine...) for about 2 hours and took the "spectrum" roughly every 5 minutes. You can see the setup on the photo. I had an absolutely dark room without any stray light. Oh, you might stumble upon the time gap in my data... well, let me tell you: it is no good doing an experiment while watching StarWars... 

However, you can take the CSVs from the spectra named "Infrared lamp 1 ...24" if you want to have a closer look at the basic data. I only used the peak values for _average_, _red_ and _green_, stitched together a an Excel worksheet and saved it as pdf and jpg. Here are the results:

[![reproducibility_test_IR_3.jpg](//i.publiclab.org/system/images/photos/000/015/505/large/reproducibility_test_IR_3.jpg)](//i.publiclab.org/system/images/photos/000/015/505/original/reproducibility_test_IR_3.jpg)

<a href="//i.publiclab.org/system/images/photos/000/015/503/original/reproducibility_test_IR_3.pdf"><i class="fa fa-file"></i> reproducibility_test_IR_3.pdf</a>

The peak wavelength is stable within a 7 nm range.

The average light intensity seems to change a bit while the lamp gets warmer but then stays pretty much the same.

The reds and the greens (yes there were greens!) peaked at the same wavelengths.

The red intensity goes down while the lamp heats up but after a while it stabilizes.

The values in the CSV file are not in %!

So far it looks good for reproducibility of data, although one should repeat the test on another day with absolutely identical setup to be sure. Even better if different guys in different places with different spectrometers got the same results while sharing only the same ONE lamp for their experiments.

The next reproducibility test I will perform with a CFL lamp because there are thinner lines to detect.

