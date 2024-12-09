---
title: 405nm LED vs Laser
tagnames: spectrometer, laser, led, oil-testing-kit, 405nm, otk, uv-laser, uv-laser-405nm
author: stoft
path: /notes/stoft/02-23-2016/405nm-led-vs-laser.md
nid: 12725
uid: 54025

---

![](https://publiclab.org/public/system/images/photos/000/014/529/original/OTKP3_LED_VS_LASER.gif)

# 405nm LED vs Laser

by [stoft](../profile/stoft) February 23, 2016 22:34

February 23, 2016 22:34 | Tags: [spectrometer](../tag/spectrometer), [laser](../tag/laser), [led](../tag/led), [oil-testing-kit](../tag/oil-testing-kit), [405nm](../tag/405nm), [otk](../tag/otk), [uv-laser](../tag/uv-laser), [uv-laser-405nm](../tag/uv-laser-405nm)

----

**Abstract**

405nm Lasers provide a powerful, narrow-band, pin-point source of monochromatic UV light to cause fluorescence in oils. The resulting spectra continues to be investigated as a means of contaminant detection using the PLab spectrometers. However, with hopes for a more compact design, new high-power UV LEDs have been proposed as an alternative to the pocket laser. Unfortunately, LEDs are relatively unfocused, have a very wide spectral bandwidth, require significant power supply current and, with the specific device tested for this note, still appear unsuitable for the task.

**405nm UV LED**

[@Jeff](https://publiclab.org/profile/warren) recently found an inexpensive, high-power 405nm UV LED ( https://publiclab.org/notes/warren/01-05-2016/testing-high-brightness-405nm-leds-in-fluorescence-spectroscopy-of-oils ) which provided an easy means for performing some comparative tests using my OTK-V3 Proto hardware ( https://publiclab.org/notes/stoft/01-19-2016/otk-proto3 ).

As an easy initial test, the LED was mounted about 1 inch from the cuvette but it became clear that the unfocused light intensity would be insufficient. So the LED was re-mounted within about 2mm of the cuvette and the spectrometer configured with zero attenuation. This resulted in better UV levels as shown below:

[![OTKP3_LED_WATER_MA.gif](//i.publiclab.org/system/images/photos/000/014/535/medium/OTKP3_LED_WATER_MA.gif)](//i.publiclab.org/system/images/photos/000/014/535/original/OTKP3_LED_WATER_MA.gif)

While not linear with applied current, the intensity can easily be controlled. However, the wide bandwidth of the LED, as opposed to the laser, is clearly a disadvantage as the 400-450nm data will be potentially corrupted by this wide signal. Also note, that this plot suggests that significant current will be required which is beyond the capability of most USB ports.

**Fluorescence**

The next plot (below) shows a comparison of the fluorescence spectra of several OTK test chemicals. The negative influence of the LED's broad bandwidth signal is clear. What is also interesting is that the LED's spectral intensity within the fluorescence spectra, seems variable with the type of chemical. My guess is that scattering is the most likely cause since the LED source has a high dispersion (120-deg viewing angle); unlike the laser.

[![OTKP3_LED_OILS.gif](//i.publiclab.org/system/images/photos/000/014/536/medium/OTKP3_LED_OILS.gif)](//i.publiclab.org/system/images/photos/000/014/536/original/OTKP3_LED_OILS.gif)

**LED vs Laser**

The last comparison was of an ND-Crude sample, exposed by the LED and then by the laser. Admittedly, there is some difference in UV exposure intensities, but looking beyond that difference, the impact of the LED on the fluorescence spectra seems obvious. The fluorescence spectra are simply different; which might be related to the oil molecules being excited in different modes than those from the monochromatic laser.

[![OTKP3_LED_VS_LASER.gif](//i.publiclab.org/system/images/photos/000/014/538/medium/OTKP3_LED_VS_LASER.gif)](//i.publiclab.org/system/images/photos/000/014/538/original/OTKP3_LED_VS_LASER.gif)

**UV Power**

The device is described as a 3W "Hyper-Violet" LED "grow light" with 640-680mW of output power. The 405nm UV pocket laser is rated at 5mW but my observations during testing show that comparing single-value power ratings is not sufficient. Clearly, the LED's ability to stimulate fluorescence was not 100x that of the laser.

However, the LED's rated output power is distributed over at least 25nm of bandwidth and it is presently not possible to identify the relationship between the fluorescence stimulation efficiency of a monochromatic source vs a broad-band LED source. However, my observations suggest that the broad-band LED source is much less efficient at producing fluorescence. This is likely a product of energy distributed over a wide bandwidth and inherent dispersion and scattering.

**Observations**

- UV LEDs are becoming more available and at lower costs but there are significant performance tradeoffs vs lasers

- Because of they are unfocused, LEDs appear to cause significantly more scattering within test samples which degrades performance

- This testing suggests that relative to output power level, LEDs appear to be much less efficient at stimulating fluorescence in the cuvettes than a UV pocket laser. This is likely a product of energy distributed over a wide bandwidth and inherent dispersion and scattering.

- Fluorescence spectra performance is degraded by the wide bandwidth of LEDs

- There is some evidence that the generated fluorescence spectra are only similar between the LED (broad spectrum) and Laser (monochromatic) stimulation. I believe that most commercial devices use one or more monochromatic sources.

- Significant, controlled current would be required which is generally beyond the capability of most USB ports.

- The 405nm UV pocket laser still appears as the better solution

**Appendix**

**LED Power**

LEDs are doide semiconductors with a higher, and more variable, voltage drop when voltage is applied. Therefore, what is of interest is controlling the current by providing a variable power supply with a series resistor. Without the resistor, the supply voltage would be very difficult to control, especially above 50mA, and so damage to the LED is easy. This specific diode has a max current limit of 750mA -- though my bench supply was limited to about 550mA for testing. The current limiting series resistor was 3 ea 10 ohm, 1watt resistors in parallel for about 3.5 ohms which was reasonable for my 20V adjustable supply.

Be aware that the heat sink the LED is mounted on warms to about 90-deg F with 500mA of current. This is not too high for the device, but in close proximity to the sample, the cuvettes get warm very quickly.

