---
title: "Spectral Irradiance Study Section ll using The DH4.0v4 Spectrometer"

tagnames: ''
author: dhaffnersr
path: /notes/dhaffnersr/09-03-2016/spectral-irradiance-study-section-ll-using-the-dh4-0v4-spectrometer.md
nid: 13414
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/017/889/original/ALL_3_light_bulbs_sept_2_title_pic.png)

# Spectral Irradiance Study Section ll using The DH4.0v4 Spectrometer

by [dhaffnersr](../../../profile/dhaffnersr) | September 03, 2016 11:52

September 03, 2016 11:52 | Tags: 

----

##**10 Scans using a 54W 1050 lumens Halogen bulb and 8 Scans using a 10W LED 2850K bright stik**



This is part two of my investigative study in the spectral radiance and irradiance of various light sources. You also will notice, 2 units of measure in the following data; "lumens" and "K" (short for Kelvin.) **Lumens** are; a unit of luminous flux in the International System of Units, that is equal to the amount of light given out through a solid angle by a source of one candela intensity radiating equally in all directions,
lumens equals brightness.

Color temperature is represented in the unit of absolute temperature, **Kelvin,** noted by the symbol _K_

The difference between _Radiance_ and _Irradiance_

One unit denotes flux density (flux per unit area) striking a target surface and is dependent on distance between source and target, this is called "irradiance," and its unit of measure is W/cm2.

The other unit of measure is "radiance," radiance is a measure of flux density per unit solid viewing angle exiting a large (not point) source and is independent of viewing distance. The corresponding photometric term is luminance (i.e. adjusting the radiance measure to approximate the response of a human eye) and its units are Lm/m2/sr, Cd/m2, or fL.

Two light sources were used in this investigative study, one; an LED bright stik made by GE and an incandescent Halogen bulb from Tailor lighting. Irradiance distance for both light sources were 76.19 cm, and both light sources were fastened on the same laser mount from my previous research study on the CFL light source.

Figure 1 illustrates an EEM (emission excitation matrix) graphic, of the 54W color view halogen bulb

[![FIG_1_color_view.png](//i.publiclab.org/system/images/photos/000/017/890/large/FIG_1_color_view.png)](//i.publiclab.org/system/images/photos/000/017/890/original/FIG_1_color_view.png)

Figure 2 is an EEM of the master Solux reference spectrum from their website, I downloaded the data for myself for the 4700K spectrum and had to input the values in excel manually, (I tried many different techniques but the info was protected some how like it was top secret, so I inputted the full data manually, from 280nm to 1100nm.) 

[![FIG_2_solux_spectrm.png](//i.publiclab.org/system/images/photos/000/017/891/large/FIG_2_solux_spectrm.png)](//i.publiclab.org/system/images/photos/000/017/891/original/FIG_2_solux_spectrm.png)

Figure 3 is all 8 LED scans as compared to the Solux master reference spectrum

[![FIG_3_leds_and_solux_ref.png](//i.publiclab.org/system/images/photos/000/017/892/large/FIG_3_leds_and_solux_ref.png)](//i.publiclab.org/system/images/photos/000/017/892/original/FIG_3_leds_and_solux_ref.png)

Now figure 4 represents LED scan #6 which I chose because its values were the closest to an actual CFL, and I chose ICL_scan #10 for its maximum flux gain value in comparison to my own Solux 4700K lamp that I use for my absorption experiments. The Solux spectrum that you see on the plot, has been divided by the Solux master reference spectrum that I discussed earlier, so now I can use my lamp as a reference spectrum.

[![FIG_4_all_3.png](//i.publiclab.org/system/images/photos/000/017/893/large/FIG_4_all_3.png)](//i.publiclab.org/system/images/photos/000/017/893/original/FIG_4_all_3.png)

Next is figure 5, another EEM representing all 8 LED scans

[![EEM_LED_stik_fig_5.png](//i.publiclab.org/system/images/photos/000/017/894/large/EEM_LED_stik_fig_5.png)](//i.publiclab.org/system/images/photos/000/017/894/original/EEM_LED_stik_fig_5.png)

Figure 6 represents the relative luminous flux of all 8 scans and figure 7 table.2 is the corresponding data for the blue and green spectral peaks

[![FIG_6_goes_with_table_2.png](//i.publiclab.org/system/images/photos/000/017/895/large/FIG_6_goes_with_table_2.png)](//i.publiclab.org/system/images/photos/000/017/895/original/FIG_6_goes_with_table_2.png)

[![table_2_data_for_blue_and_green_peaks_place_with_fig_6.png](//i.publiclab.org/system/images/photos/000/017/896/large/table_2_data_for_blue_and_green_peaks_place_with_fig_6.png)](//i.publiclab.org/system/images/photos/000/017/896/original/table_2_data_for_blue_and_green_peaks_place_with_fig_6.png)

Figure 8 is the last plot, this is another comparison between a spectral scan using Spekwin32 and that of Plab's Spectral Workbench 2.0. 

[![FIG_8_plab_and_spekwin.png](//i.publiclab.org/system/images/photos/000/017/897/large/FIG_8_plab_and_spekwin.png)](//i.publiclab.org/system/images/photos/000/017/897/original/FIG_8_plab_and_spekwin.png)

Both plots have maximum gain before clipping, so there is no distortion at peak of signal, the scan using Spekwin32 is a more "true" representation of the actual spectra because it makes use of not only the horizontal axis but the vertical one as well i.e., vertical and horizontal pixels.

Where in the spectral scan using Plab Spectral Workbench 2.0, you can see what happens when only the horizontal pixels are captured, that is were the "flat" lines are coming from. This is unacceptable, and is the main reason I use Spekwin32.

**References**

http://www.gelighting.com/LightingWeb/na/images/LEDL019-GE-LED-Bright-Stik-Spec-Sheet_tcm201-99939.pdf - specifications sheet

http://publiclab.org/notes/dhaffnersr/09-01-2016/cfl-spectral-irradiance-study-using-spekwin32

http://en.wikipedia.org/wiki/Radiance

http://en.wikipedia.org/wiki/Irradiance















 
