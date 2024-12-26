---
title: "New possibilities for a low-cost gas camera"\ntagnames: 'thermal-photography, thermal-imaging, camera, flir, methane, thermal, gas, gas-sensor, heat, vocs, thermopile, response:11377, gasfinder'
author: loganw
path: /notes/loganw/09-29-2016/new-possibilities-for-a-low-cost-gas-camera.md
nid: 13507
uid: 493273

---

![](https://publiclab.org/public/system/images/photos/000/018/204/original/blob)

# New possibilities for a low-cost gas camera

by [loganw](../profile/loganw) | September 29, 2016 19:21

September 29, 2016 19:21 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-imaging](../tag/thermal-imaging), [camera](../tag/camera), [flir](../tag/flir), [methane](../tag/methane), [thermal](../tag/thermal), [gas](../tag/gas), [gas-sensor](../tag/gas-sensor), [heat](../tag/heat), [vocs](../tag/vocs), [thermopile](../tag/thermopile), [response:11377](../tag/response:11377), [gasfinder](../tag/gasfinder)

----

This is an extension of the [research started by Mathew Lippincot](https://www.publiclab.org/notes/mathew/11-21-2014/a-diy-gas-finding-camera#c10814) to create a low cost gas sensitive camera.

The high sensitivity semiconductor sensors are all very expensive, and scanning in two axes would require a significant scanning apparatus.

My investigation has been looking at what we might be able to accomplish with significantly less sensitivity. Can we slow down the time resolution or sacrifice the ability to detect/document all but the largest leaks in order to make something affordable?

Specifically, I've been looking at the use of thermopiles, all the way down near the bottom of the graph that Mathew found. A company called [Heimann](http://www.heimannsensor.com/) makes a 32x32 pixel thermopile sensor for $70, including the lens, amplifier, digital readout, etc. I am currently in the process of ordering one of these sensors through their Boston-area distributor, Boselec.

Another Boston-area company, Precision Micro-Optics, distributes a [3.4um narrow bandpass filter](http://www.pmoptics.com/ir_narrow_band_pass_filters_3400.html) at the affordable price of $62. Combining these optical components with a Raspberry Pi, a display, and a visible camera to increase the perceived resolution of the IR sensor could put the camera in the $250 range.

But can we even detect anything with that low a sensitivity?

32x32 pixel sensor datasheet: <a href="//i.publiclab.org/system/images/photos/000/018/206/original/HTPA_32x32d_L2.1_0.8_%28Hi%29S_Rev2_Datasheet.pdf"><i class="fa fa-file"></i> HTPA_32x32d_L2.1_0.8_-Hi-S_Rev2_Datasheet.pdf</a>

## Thinking about noise

I'm not an expert or even particularly knowledgeable in this field, so the few methods of analyzing feasibility have given me several different answers.

There's a [Github repository](https://github.com/loganwilliams/gas-camera) where I'm storing some relevant files, and an [iPython notebook](https://github.com/loganwilliams/gas-camera/blob/master/solar-data.ipynb) I've been using for performing some calculations.

### Noise floor of the sensor

The noise equivalent temperature difference of the sensor is 150 mK / Hz^0.5. Order of magnitude, a change in temperature of 150 mK, at human temperature scales, results in a change of power output of 1 W/m^2. With a lens with a FOV of 33 degrees (L5 Ge), this means that the noise floor for each pixel, at 1 Hz, is 1 nW of incident power.

### How much does methane absorb?

[At 150 mmHg of pressure, which is roughly 140 g/m^3, looking through 5cm of methane will reduce the total transmissivity of the Precision Micro Optics filter by approximately 25%.](https://github.com/loganwilliams/gas-camera/blob/master/solar-data.ipynb)

Let's assume that this is a reasonable amount of methane to try to measure (unverified assumption! it seems high, but maybe we'll be looking through more methane (10m instead of 5cm) at a lower concentration in a real world environment. I have scrawled in some notes that 200ppm methane = .245g/m^3, but I may have screwed up somewhere.) This means that, order of magnitude, we need 10nW of power incident on each pixel in the array in order to see variation caused by methane (either through variation over time or through subtraction of two sensors or by chopping the filter.)

### Where does that power come from?

In the iPython notebook, I tried to evaluate what the baseline power is from the scattered illumination of the blue sky. (Assuming we're looking at outdoor leaks against a clear sky.) I found a received power of 0.0056 W/m^2 from the entire blue sky. This doesn't look good, from this I calculated a received power of .015 nW per pixel.

But maybe it would work against a cloudy sky? Maybe it would work against a buildings or other thermal radiators? More to investigate.

## Comparison with existing gas cameras

[FLIR's gas camera](http://www.flir.com/ogi/display/?id=55671) has a NETD of 15mK/Hz^0.5, about an order of magnitude better than the sensor I'm evaluating. A factor of 10 doesn't sound so bad! But, I think it's worse than that -- the NETD of the thermopile array is assuming it's receiving a whole bunch of radiation in the 5-12um range, where as the sensor in the FLIR camera can only receive in the 2-5um range. (And maybe this figure is even reported with the gas-sensitive IR filter taken into account.) If this is the case, then we lose another 1.5 orders of magnitude, and the cheap sensor is maybe .3% as sensitive. Guessing from FLIR's reported sensitivity, maybe this means that leaks in the 200g/hr range could be detectable? I believe this is around what a typical stove burns, so this seems like a reasonable range to try testing and measuring.

## Next steps

I'm a bit overwhelmed by assumptions and uncertainty over figures in datasheets, so my plan is to order one of the sensors, start measuring things with it, and try evaluating empirically whether any of this looks feasible. Worst case scenario, I made an expensive DIY thermal camera.