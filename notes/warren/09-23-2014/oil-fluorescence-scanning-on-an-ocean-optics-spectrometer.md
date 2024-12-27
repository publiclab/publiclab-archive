---
title: "Oil fluorescence scanning on an Ocean Optics spectrometer"

tagnames: 'spectrometer, vermont, calibration, leaffest, ultraviolet, fluorescence, crude, oil-testing-kit, leaffest2014, ocean-optics'
author: warren
path: /notes/warren/09-23-2014/oil-fluorescence-scanning-on-an-ocean-optics-spectrometer.md
nid: 11176
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/006/971/original/ocean-optics.jpg)

# Oil fluorescence scanning on an Ocean Optics spectrometer

by [warren](../../../profile/warren) | September 23, 2014 17:42

September 23, 2014 17:42 | Tags: [spectrometer](../tag/spectrometer), [vermont](../tag/vermont), [calibration](../tag/calibration), [leaffest](../tag/leaffest), [ultraviolet](../tag/ultraviolet), [fluorescence](../tag/fluorescence), [crude](../tag/crude), [oil-testing-kit](../tag/oil-testing-kit), [leaffest2014](../tag/leaffest2014), [ocean-optics](../tag/ocean-optics)

----

###What I want to do

At [LEAFFEST 2014](/tag/LEAFFEST2014), Mary, Luisa, and others reproduced the kind of fluorescence spectrometry scanning we've been doing with the [Oil Testing Kit](/wiki/oil-testing-kit) using a lab spectrometer, an Ocean Optics device. We used the same 405nm laser pointer and the same samples -- of suspected BP crude, fish oil, and mail-ordered [crude from ONTA](/tag/onta), all dissolved in mineral oil, and plain mineral oil. Here are the graph and the files, which Louisa emailed to me: 

[![oilsamples_oceanoptics.png](https://i.publiclab.org/system/images/photos/000/006/982/large/oilsamples_oceanoptics.png)](https://i.publiclab.org/system/images/photos/000/006/982/original/oilsamples_oceanoptics.png)

**Update: Mary sent me specs on the device, below:**

> Spectra were measured with an OceanOptics SD2000 dual spectrometer
(http://oceanoptics.com/wp-content/uploads/OEM-Data-Sheet-S2000.pdf),
using the first spectrometer (wavelength range: 200-850nm; grating: 600 lines at 300nm; 25um slit).

> Spectrometer is spectrally calibrated with a mercury/argon calibration
source (http://oceanoptics.com/product/hg-1/). Values are relative DN, and 
are not radiometrically calibrated.

****
I had to add ".txt" to the end of each file to get them to upload, but that also makes them easier to open up. 

<a href="https://i.publiclab.org/system/images/photos/000/006/981/original/BP_2014_256_15_59_12.fos.rdb.txt"><i class="icon icon-file"></i> BP_2014_256_15_59_12.fos.rdb.txt</a>

<a href="https://i.publiclab.org/system/images/photos/000/006/978/original/Mineral_2014_256_16_01_28.fos.rdb.txt"><i class="icon icon-file"></i> Mineral_2014_256_16_01_28.fos.rdb.txt</a>

<a href="https://i.publiclab.org/system/images/photos/000/006/979/original/Fish_2014_256_16_00_46.fos.rdb.txt"><i class="icon icon-file"></i> Fish_2014_256_16_00_46.fos.rdb.txt</a>

<a href="https://i.publiclab.org/system/images/photos/000/006/980/original/ONTA_2014_256_16_02_03.fos.rdb.txt"><i class="icon icon-file"></i> ONTA_2014_256_16_02_03.fos.rdb.txt</a>

###Questions and next steps

Presumably the calibration is OK? And the intensities are adjusted -- linear -- unlike [our own spectrometer](/wiki/spectrometer). So it's could be a basis for calibrating our device, if we assume that the setup is similar enough.

I'm especially interested in importing this data into Spectral Workbench, and am working on a way to upload this format. For now, you can view one of the files on Github too; they're just a column of wavelengths, a column of intensities, and an index column counting from 0 upwards: 

<script src="https://gist.github.com/jywarren/84c86770ecf07aedf9a1.js"></script>