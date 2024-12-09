---
title: 'Repeatability'
tagnames: spectrometer, oil-testing-kit, barnstar:empiricism, repeatability, empiricism
author: viechdokter
path: /notes/viechdokter/04-11-2016/repeatability.md
nid: 12959
uid: 468990

---

![](https://publiclab.org/public/system/images/photos/000/015/496/original/Repeatability_-_header.jpg)

# Repeatability

by [viechdokter](../profile/viechdokter) April 11, 2016 22:26

April 11, 2016 22:26 | Tags: [spectrometer](../tag/spectrometer), [oil-testing-kit](../tag/oil-testing-kit), [barnstar:empiricism](../tag/barnstar:empiricism), [repeatability](../tag/repeatability), [empiricism](../tag/empiricism)

----

I am not sure if this word even exists in the English language but well... I browsed this forum and found some notes by "stoft" about rigidness of the PLab spectrometer and proposals how to make the setup more stable. Because I had some stability problems, too, when I put together my PLab Spec. 3.0 I found the proposals and the comments very interesting. One point in this discussion was that results should be repeatable (even for different users with different spectrometers) so that for instance an oil pollution spectra database could make any sense at all.

As I said I am not a scientist, but this discussion urged me to find out how repeatable the results of my own spectrometer were. So I took my table lamp (IKEA style) and aimed it at the slit of my spectrometer and collected 4 spectra within 13 minutes. There was no additional light from any other source and I did not change anything in the path of the light. (I also calibrated them all with the same calibration spectrum.) Here are the results:

[![Repeatability_-_intensity_curve_comparison.jpg](//i.publiclab.org/system/images/photos/000/015/491/large/Repeatability_-_intensity_curve_comparison.jpg)](//i.publiclab.org/system/images/photos/000/015/491/original/Repeatability_-_intensity_curve_comparison.jpg)

In the first picture I stitched the four spectra together in Photoshop, lined them up and marked the peak wavelengths and the peak intensities of the R-,G-, and B-channels. The "waterfall" image shows that the light intensity of the bulb or of the camera sensor perception was not constant. (When I find out how to switch off automatic gain control of the camera I might repeat this experiment.) 

Then I took the CSV files and looked for exact wavelengths of the peak intensities and marked them with their respective colours (R, G and B).

[![Repeatability_reds.jpg](//i.publiclab.org/system/images/photos/000/015/492/large/Repeatability_reds.jpg)](//i.publiclab.org/system/images/photos/000/015/492/original/Repeatability_reds.jpg)

[![Repeatability_greens.jpg](//i.publiclab.org/system/images/photos/000/015/493/large/Repeatability_greens.jpg)](//i.publiclab.org/system/images/photos/000/015/493/original/Repeatability_greens.jpg)

[![Repeatability_blues.jpg](//i.publiclab.org/system/images/photos/000/015/494/large/Repeatability_blues.jpg)](//i.publiclab.org/system/images/photos/000/015/494/original/Repeatability_blues.jpg)

For anyone interested in the whole data, here is the CSV for all channels:

<a href="//i.publiclab.org/system/images/photos/000/015/495/original/repeatability_all.csv"><i class="fa fa-file"></i> repeatability_all.csv</a>

So... what do we make of it? 
Well, the blue peaks happen at 461 and 470 nm. Thats 9 nm difference.
Greens 512 to 518 nm, 6 nm difference.
Reds about 579 to 589 nm, 10 nm difference.
Average peaks 512 to 518 just like the greens.

As I said: I did not change the path of light. The only ways such differences could occur, could be
a) a different temperature of the lamp over time (perhaps because of small changes in electrical current)
b) an automatic gain control issue concerning the webcam
c) both effects overlaying

Comments or further experiments welcome.




