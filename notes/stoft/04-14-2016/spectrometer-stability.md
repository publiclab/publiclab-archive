---
title: "Spectrometer Stability"

tagnames: 'spectrometer, intensity-calibration, intensity, stability, response:12962'
author: stoft
path: /notes/stoft/04-14-2016/spectrometer-stability.md
nid: 12973
uid: 54025

cids: 14231,14232,14237,14241,14260,14264,14270,14277,14289

---

![](https://publiclab.org/public/system/images/photos/000/015/534/original/STest_0-60Waterfall.gif)

# Spectrometer Stability

by [stoft](../../../profile/stoft) | April 14, 2016 07:28

April 14, 2016 07:28 | Tags: [spectrometer](../tag/spectrometer), [intensity-calibration](../tag/intensity-calibration), [intensity](../tag/intensity), [stability](../tag/stability), [response:12962](../tag/response:12962)

----

**Abstract**

Continuing the effort to define the specification limits of my [Prototype PLab V3 Spectrometer](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype) (and then again for https://publiclab.org/notes/stoft/01-19-2016/otk-proto3), the issue of amplitude measurement stability had not yet been resolved. Having constructed my prototype from more rigid materials, instead of paper and Velcro, I was in a position to eliminate most of the mechanical variables; leaving only the light source and the camera. While I'm not able to independently, optically and accurately, measure the Solux halogen source light intensity, I was able to measure the lamp's current during a 15 min warm-up period and verify its very low drift. This observation, along with the collected spectral data over a 60 minute period suggests that, assuming mechanically rigid construction, the camera is the largest source of PLab spectrometer amplitude variability; easily adding 5-10% error.

**References**

[PLab 3 Spectrometer Upgrade Prototype](https://publiclab.org/notes/stoft/03-02-2015/plab-3-spectrometer-upgrade-prototype)

[Spectrometer Noise](https://publiclab.org/notes/stoft/04-16-2016/spectrometer-noise)

[Spectrometer Time Filter](https://publiclab.org/notes/stoft/04-17-2016/spectrometer-time-filter)

[Spectrometer Noise Solution?](https://publiclab.org/notes/stoft/04-20-2016/spectrometer-noise-solution)

[Spectrometer Peak-Hold](https://publiclab.org/notes/stoft/04-22-2016/spectrometer-peak-hold)

[Spectrometer DVD-Alignment Auto-Correction](https://publiclab.org/notes/stoft/04-26-2016/spectrometer-dvd-alignment-auto-correction)

**Disclaimers**

Since the development work to support automated data collection would have swamped the efforts of otherwise relatively simple observations like temperature and current, the sample interval was limited to 1 minute, for the first 15 minutes, and 5 minutes during the remaining 15-60 min test duration.

The "Raw UN-Corrected Data" label of the plots refers to the amplitude of the data NOT having been "gain-corrected" against a Solux 4700K emission curve. It does NOT refer to CFL wavelength calibration and the X-axis is labeled as "CFL-Corrected" where appropriate,

**Solux Source**

The light source for these observations is the broadband Solux 4700K halogen powered by an Anchorn halogen class-2 12VAC supply. Solux claims their 4700K halogen bulbs intensity remain stable within +/- 5% over their 4000 hour life. I interpret this to reference long-term drift but decided to make an independent measurement by monitoring the bulb's 12VAC current during the first 15 minutes after cold start from 22 degC room temperature. I also measured the lamp's surface temperature using a Kintrex, non-contact, laser thermometer. The following plot shows these two sets of data:

[![STest_1-15TempAmps.gif](//i.publiclab.org/system/images/photos/000/015/525/large/STest_1-15TempAmps.gif)](//i.publiclab.org/system/images/photos/000/015/525/original/STest_1-15TempAmps.gif)

Note that to make it easy to show both curves, the measured current (~2.72 A) was simply scaled up by 30x. Also note that following a 1-2 minute warm-up period, the bulb's current consumption varied by <0.01 Amps -- less than 0.36 %. This is important because the light output is directly related to lamp current consumption. The stability, n this case, appears to be well less than 0.5% over time. This is strong evidence that the Solux 4700K lamp is a very stable source and any spectrometer spectral intensity variation over 1% should suggest spectrometer instability rather than source instability.

[Note: While the DVM observations were only recorded once per minute, the DVM can respond above 1 sample/sec -- I observed zero "flicker" in the readings during the 15 minute test period. This gives additional weight to the longer-term measure of lamp stability.]

**Spectrometer**

As noted above, I'm using my own [Prototype V3 PLab Spectrometer](https://publiclab.org/notes/stoft/01-19-2016/otk-proto3), constructed from maple for mechanical rigidity. This assembly was secured to the same bench as the Solux source, at night, under minimal ambient room light. The source to spectrometer distance was held constant at 24 inches and thin-film attenuation was inserted directly in front of a 0.12mm film slit (provided with the PLab 'kit'). The 0.12mm slit provides sufficient accuracy to easily resolve the double-green peak of a CFL so will not add significant distortion to the detected Solux spectra.

To assure reliable spectral data acquisition, the PLab "thin-line" webcam data was extracted from USB via Matlab such that I could control the precise line of pixels providing the data to assure consistent measurements. Experiments showed that I had at least +/- 10 pixel lines to choose from with no discernible difference in data. This assured that line selection was not a variable.

**Sampling**

Two different time periods were of interest. First, there is a "warm-up" period for the lamp and second, longer-term stability was of interest. The simple solution was to observe temperature, current and spectrum on 1 minute intervals from '0' (cold start) to 15 min and then on 5 min intervals for the remainder of an hour. The choice of 15 minutes both convenient and allowed the lamp to achieve a stable operating temperature.

**Spectra**

While I have previously used the Solux lamp to research [Intensity Calibration](https://publiclab.org/notes/stoft/03-06-2015/plab-3-gain-correction) of the spectrometer, I did not use that correction of this spectral data because I wished to observe the entire detectable spectra and to observe the raw R/G/B mid-band signal data.

Following the validation of the Solux source stability, the spectrometer's configuration needed to validate the R/G/B channel data would never clip. The following plot shows that the attenuation was set to maximize the SNR while remaining linear.

[![STest_TypRGB.gif](//i.publiclab.org/system/images/photos/000/015/531/large/STest_TypRGB.gif)](//i.publiclab.org/system/images/photos/000/015/531/original/STest_TypRGB.gif)

Once the configuration was set and mechanically stable, the simplest first observation was to plot a selection of spectra acquired over time; using the same plot:

[![STest_InitSeq.gif](//i.publiclab.org/system/images/photos/000/015/529/large/STest_InitSeq.gif)](//i.publiclab.org/system/images/photos/000/015/529/original/STest_InitSeq.gif)

Clearly there is some form of variation, drift perhaps, and noise. So, to get a better visual image, all collected spectra were combined into a pseudo-3D "waterfall" plot just to visualize any dramatic trends; should they exist.

[![STest_0-60Waterfall.gif](//i.publiclab.org/system/images/photos/000/015/526/large/STest_0-60Waterfall.gif)](//i.publiclab.org/system/images/photos/000/015/526/original/STest_0-60Waterfall.gif)

**Analysis**

The above plot shows no obvious dramatic trends but does suggest the primary instabilities are drift and noise. Since we have data for the three R/G/B data channels, I extracted a 10nm "mid-band" average for each channel and plotted that average over the lifetime of the measurements:

[![STest_1-60RGBDrift.gif](//i.publiclab.org/system/images/photos/000/015/530/large/STest_1-60RGBDrift.gif)](//i.publiclab.org/system/images/photos/000/015/530/original/STest_1-60RGBDrift.gif)

However, be aware of the illusion created by the reduced sample rate from 15-60 min. The variations "appear" to be "smoother" but that is not the case; there are simply only 1/5-th the number of data points. Look at the 1-15 min segment to better visualize the random drift and noise of the spectrum.

This lead to refining the data to extract the max / min limits and the max-min relative percentage error over both the short-term (0-15 min) and long term (15-60 min).

[![STest_1-60MinMaxErr.gif](//i.publiclab.org/system/images/photos/000/015/527/large/STest_1-60MinMaxErr.gif)](//i.publiclab.org/system/images/photos/000/015/527/original/STest_1-60MinMaxErr.gif)

[![STest_15-60MinMaxErr.gif](//i.publiclab.org/system/images/photos/000/015/528/large/STest_15-60MinMaxErr.gif)](//i.publiclab.org/system/images/photos/000/015/528/original/STest_15-60MinMaxErr.gif)

Note the following in the above two plots: 1) the first 15 min warm-up does add some variation to the max-min error across the full spectrum, 2) the relative percentage error behaves roughly like an intensity "offset" as the percentage rises as the signal drops and 3) at best, the long-term spectral intensity varies by at least 5-10%.

Note: This third point is important when comparing this value with the lamp current stability of <0.5% shown above.

To further isolate the 15 min lamp warm-up period from longer-term stability, R/G/B mid-band data from the (R+G+B)/3 derived spectra was extracted and then plotted along with the initial 15 min temperature profile. While the effect is small, there is slight more "variation" in the spectral intensity during the first 15 minutes of lamp operation. However, this should be expected.

[![STest_1-60SpecTemp.gif](//i.publiclab.org/system/images/photos/000/015/532/large/STest_1-60SpecTemp.gif)](//i.publiclab.org/system/images/photos/000/015/532/original/STest_1-60SpecTemp.gif)

**Conclusions**

- There is evidence in the temperature and lamp current data which suggests the Solux 4700K lamp (with a 12VAC, halogen class-2 supply) can provide better than 0.5% long-term intensity output stability.

- There is evidence that the Solux 4700K lamps achieve best steady-state performance stability after 15 min of continuous operation from a 22 deg-C room temperature startup.

- This spectrometer V3 prototype is constructed of maple, was mounted to the same bench as the Solux lamp, no configuration changes were made during testing and data collection, the spectral band was sufficiently "wide" and did not drift during the tests and the same pixel line data was extracted for every spectra. Given the measured lamp stability and the spectrometer's configuration, the most likely component to cause the 5-10% spectral intensity variation of "drift and noise" is the webcam.

- Given the relative lack of configurability of the simplistic webcam devices as diffraction sensors, the observations presented here suggest the camera is not providing fixed exposure control. This is potentially caused by an active AGC running near full gain because of the relatively dark field presented by the spectrometer's slit, diffraction grating and usual low-light sources which are limited to prevent R/G/B signal clipping. Electronic noise and camera "dark current" noise generally contain only higher frequencies and would not appear as dramatic as the longer-term variations observed during these tests.


