---
title: Importing spectra from NIST and WebMineral.com to Spectral Workbench
tagnames: spectrometer, flame, spectral-analysis, flare, emission, emissions, nist, spectral-databases, activity:spectrometry, activity:spectral-workbench, 10863
author: warren
path: /notes/warren/08-13-2013/importing-spectra-from-nist-and-webmineral-com-to-spectral-workbench.md
nid: 8995
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/119/original/Screen_Shot_2013-08-13_at_11.57.22_AM.png)

# Importing spectra from NIST and WebMineral.com to Spectral Workbench

by [warren](../profile/warren) August 13, 2013 16:16

August 13, 2013 16:16 | Tags: [spectrometer](../tag/spectrometer), [flame](../tag/flame), [spectral-analysis](../tag/spectral-analysis), [flare](../tag/flare), [emission](../tag/emission), [emissions](../tag/emissions), [nist](../tag/nist), [spectral-databases](../tag/spectral-databases), [activity:spectrometry](../tag/activity:spectrometry), [activity:spectral-workbench](../tag/activity:spectral-workbench), [10863](../tag/10863)

----

**Note:** this may now be possible more easily using [the JSON/CSV upload feature of Spectral Workbench](https://spectralworkbench.org/upload).

###What I want to do

To help with the [flare spectroscopy](/tag/flare) effort, I wanted to try importing some known emission spectra from an [online database](/wiki/spectral-analysis#Databases), and started with a combination of the images available at WebMineral.com (which are cited from a 1906 now-public-domain source) and the [list of emission lines at NIST](http://physics.nist.gov/PhysRefData/ASD/lines_form.html). I started with lead, which NIST displays as **Pb I**, which I believe is the basic form of lead (I think Pb II and II refer to ions?). NIST offers this chart of emission lines:

<img height="50px" src="/system/images/photos/000/001/110/medium/80381.png" />

And WebMineral.com offers [this image of the lines](http://webmineral.com/help/FlameTest.shtml): 

![lead.jpg](/system/images/photos/000/001/111/medium/lead.jpg)

Although it mentions that they are not very "decisive" which I take to mean strong or easily visible. In any case I'd like to re-try this with copper and arsenic, which are also available. But by calibrating the lead spectrum from NIST data, we'll have a calibration source to work from for all the other elements, since the images are displayed with the same range of wavelengths.

I did a rough alignment here:

![Screen_Shot_2013-08-13_at_11.38.31_AM.png](/system/images/photos/000/001/112/medium/Screen_Shot_2013-08-13_at_11.38.31_AM.png)

and it looks pretty good. So now I'll use two of the most obvious ones, at roughly 500nm and 600nm, to calibrate, using a modification/improvement on [Chris Fastie](/profile/cfastie)'s [calibration macro](https://spectralworkbench.org/macro/cfastie/CalibrateTemplate): https://spectralworkbench.org/macro/warren/linear_calibration

###My attempt and results

I used the lines at 262px, wavelength 500.5416nm and 522px, wavelength 600.1862nm and the calibration ran well:

https://spectralworkbench.org/analyze/spectrum/10863

![Screen_Shot_2013-08-13_at_11.57.22_AM.png](/system/images/photos/000/001/113/medium/Screen_Shot_2013-08-13_at_11.57.22_AM.png)

###Questions and next steps

Now we should be able to use the above spectrum #10863 to calibrate [all the spectra offered at WebMineral.com](http://webmineral.com/help/FlameTest.shtml), which include lithium, strontium, calcium, sodium, barium, molybdenum, boron, phosphorus, zinc, tellurium, antimony, lead, copper chloride, selenium, indium, arsenic, potassium, rubidium, and caesium. 

I attempted this with arsenic: https://spectralworkbench.org/analyze/spectrum/10864

![Screen_Shot_2013-08-13_at_12.04.40_PM.png](/system/images/photos/000/001/114/medium/Screen_Shot_2013-08-13_at_12.04.40_PM.png)

And with sodium, I compared the NIST/WebMineral spectrum with several independently collected sodium spectra, one of which I collected from burning salt, and one of which was made by Chris Fastie of a sodium streetlight. I also included two very distinct ones by contributor [iglinax](/profile/iglinax):

https://spectralworkbench.org/sets/show/545

![Screen_Shot_2013-08-13_at_12.09.19_PM.png](/system/images/photos/000/001/115/medium/Screen_Shot_2013-08-13_at_12.09.19_PM.png)