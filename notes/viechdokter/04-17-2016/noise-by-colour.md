---
title: Noise by colour
tagnames: spectrometer, rgb, bayer-filter, color, noise, activity:spectrometry
author: viechdokter
path: /notes/viechdokter/04-17-2016/noise-by-colour.md
nid: 12994
uid: 468990

---

![](https://publiclab.org/public/system/images/photos/000/015/627/original/noise_by_colour_header.jpg)

# Noise by colour

by [viechdokter](../profile/viechdokter) April 17, 2016 19:12

April 17, 2016 19:12 | Tags: [spectrometer](../tag/spectrometer), [rgb](../tag/rgb), [bayer-filter](../tag/bayer-filter), [color](../tag/color), [noise](../tag/noise), [activity:spectrometry](../tag/activity:spectrometry)

----

_**This is a revised note! There was a little error in my primary colour noise curves. The red curve was way too high up. That's because there was an undetected uncalibrated spectrum left when I gathered the CSV files together. I stumbled across the fact that the noise in the red channel was 140 which could not be right. So I went through the data again and found the error. Now the revised red noise curve should be right.**_



**The question:** Camera noise seems to be an issue when assessing light intensities of specimens (although I think that wavelength peaks are more important when trying to get "fingerprint evidence"). What I wondered was, which colour channel has the most noise and at which wavelength.

**The data:** I took 46 spectra of a Philips 5.5 Watts 350 lumen 2700 Kelvin energy saving LED lamp at 5 minute intervals. (Thanx again to @Warren for his macro!) It has a nice white light with a pretty smooth average curve. I then looked at the CSV files and extracted the values for

1) average
2) red
3) green
4) blue channels

per wavelength. Then I took the maximum and minimum of the average, red, green and blue values for each wavelength and calculated the difference. This should be a value for the noise. (For instance highest blue value minus lowest blue value at a certain wavelength.)

**The results:** Here are the "noise curves" per channel:

Average noise curve:

[![noise_of_average_curve_Philips_LED_reproducibility_test_01-46.jpg](//i.publiclab.org/system/images/photos/000/015/623/large/noise_of_average_curve_Philips_LED_reproducibility_test_01-46.jpg)](//i.publiclab.org/system/images/photos/000/015/623/original/noise_of_average_curve_Philips_LED_reproducibility_test_01-46.jpg)

_**Revised red noise curve:**_

[![red_curve_noise.jpg](//i.publiclab.org/system/images/photos/000/015/660/large/red_curve_noise.jpg)](//i.publiclab.org/system/images/photos/000/015/660/original/red_curve_noise.jpg)

Green noise curve:

[![noise_of_green_curve_Philips_LED_reproducibility_test_01-46.jpg](//i.publiclab.org/system/images/photos/000/015/625/large/noise_of_green_curve_Philips_LED_reproducibility_test_01-46.jpg)](//i.publiclab.org/system/images/photos/000/015/625/original/noise_of_green_curve_Philips_LED_reproducibility_test_01-46.jpg)

Blue noise curve:

[![noise_of_blue_curve_Philips_LED_reproducibility_test_01-46.jpg](//i.publiclab.org/system/images/photos/000/015/626/large/noise_of_blue_curve_Philips_LED_reproducibility_test_01-46.jpg)](//i.publiclab.org/system/images/photos/000/015/626/original/noise_of_blue_curve_Philips_LED_reproducibility_test_01-46.jpg)

**Thoughts:** When I look at any of the spectra I have captured for this test I see that there are three peaks: a red, a blue and a green one. Not surprising.

[![spectrum_and_curve_Philips_LED_reproducibility_test_44.jpg](//i.publiclab.org/system/images/photos/000/015/628/large/spectrum_and_curve_Philips_LED_reproducibility_test_44.jpg)](//i.publiclab.org/system/images/photos/000/015/628/original/spectrum_and_curve_Philips_LED_reproducibility_test_44.jpg)

The red intensity peak is almost as high as the blue peak while the green one is lower. So how about the noise? Shouldn't the red noise be as strong as the blue noise? 

As expected the green noise reaches only about 26 intensity points, whereas the blue noise gets up to 46 and the red noise reaches 52 which is close enough to blue.

**The noise curve peaks:  **

- the average curve peaks at about 430 nm and 565 and 572 nm

- the highest red noise peak is at around 420 nm

- the highest green noise peak is at about 577 although the green noise curve is much more "compact" than the other colours.  

- the highest blue noise peak is at about 565 nm

**Things I wonder about:**  One could think that noise is highest in places where is less of a colour (in dark places where the Automatic Gain Control of the webcam works hardest). We find the most red noise in the "blue" area while we see the most blue noise in "non-blue" areas. 

**Next step:** I will take the wavelengths with the peak noise and have a look how the actual red/green/blue/average values change with time.
