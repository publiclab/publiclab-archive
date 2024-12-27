---
title: "Does leaving the dye on a DVD-R grating make any difference?"

tagnames: 'spectrometer-design'
author: MrBumper
path: /notes/MrBumper/02-04-2015/does-leaving-the-dye-on-a-dvd-r-grating-make-any-difference.md
nid: 11552
uid: 432766

cids: 11113,11114,11115,11116,11117,11118,11119,11122,11123,11124,11125,11127

---

![](https://publiclab.org/public/system/images/photos/000/008/784/original/400peak.png)

# Does leaving the dye on a DVD-R grating make any difference?

by [MrBumper](../../../profile/MrBumper) | February 04, 2015 14:00

February 04, 2015 14:00 | Tags: [spectrometer-design](../tag/spectrometer-design)

----

In a previous research note - <a href="http://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating">Preparing a DVD-R to act as a diffraction grating</a> I described how to remove both the aluminium reflective silvering and the blue/violet photosensitive dye from a DVD-R to produce a section that could be used as a 'clear' diffraction grating.

[![DyeNoDyeGratings.png](https://i.publiclab.org/system/images/photos/000/008/783/medium/DyeNoDyeGratings.png)](https://i.publiclab.org/system/images/photos/000/008/783/original/DyeNoDyeGratings.png)

_A section of DVD-R with the dye removed next to a section with the dye still present_


Having just completed construction of the Public Lab Spectrometer 3.0 kit I decided to do a quick test to see if I could produce results that would show that the dye has a significant effect on the response of the spectrometer. Using the same light source and the 0.2mm photo printed slit, I captured two plots for comparison. One plot using a grating that still had dye on it and then a second plot using a grating that had the dye removed. As far as possible all the other conditions were unchanged. 

[![ButterflyClip.png](https://i.publiclab.org/system/images/photos/000/008/785/medium/ButterflyClip.png)](https://i.publiclab.org/system/images/photos/000/008/785/original/ButterflyClip.png)

_A section of DVD-R grating held with a small butterfly clip and one of the chrome wire levers shown removed._ 
_For convenience, the black card shown happens to be a slit frame, standing in for the grating support._ 


Rather than use the double sided tape to stick my gratings to the grating support in the Spectrometer 3.0, I used a small office butterfly clip to clamp the grating to the support. This makes it much easier to adjust the grating for angle, or to swap a grating section with the dye, for a section with the dye removed. The butterfly clip has a folded spring steel body with two chromed wire levers to open the jaws of the body. Once the clip is put in place, the two wire levers can each be squeezed width-wise and removed, leaving just the low profile body behind. 

One difficulty with trying to capture two plots from a spectrometer for comparison, is that ideally a wide band light source with a fairly smooth response might be used, so that differences in amplitude across the entire range of wavelengths would clearly show up. I don't have access to such a light source, so I stuck with the old standby, the fluorescent lamp (a cool white) as used for spectrometer calibration. It is at least a familiar source and does emit light across the visible spectrum, albeit in a rather spiky fashion.


[![DyeCompSettings.png](https://i.publiclab.org/system/images/photos/000/008/786/medium/DyeCompSettings.png)](https://i.publiclab.org/system/images/photos/000/008/786/original/DyeCompSettings.png)

_Guvcview settings used for the comparison. First factory default was selected, then WB auto off and Exposure manual mode were selected. Sharpness and Backlight comp were set to zero, WB to 5,000. Gain and exposure were set to produce an image just at the point of clipping._


Fortunately the new camera supplied with the Public Lab Spectrometer 3.0 supports the control of Gain and Exposure. I used the Guvcview software controls to adjust the exposure for my two test captures so that the dual green peaks were just clipping in Spectral Workbench. The data  for both captures were exported from Spectral Workbench as a .CSV files and imported into LibreOffice Calc to be plotted as an XY Scatter graph. A scaling factor was applied to the data for the 'no dye' capture and this was adjusted so that the green peaks for the two data sets were the same amplitude.

##The test result and conclusion

If the dye makes a significant difference what you would expect to see is that the purple/blue dye would reduce the levels of the light from the green and red phosphors in the fluorescent lamp, relative to the blue and violet. This should be demonstrable by making two plots of the light from a fluorescent lamp, one using a grating with the dye and one without, with the exposure adjusted so the longer wavelengths are at the point of clipping. When the plots are compared, and the longer wavelengths equalised by scaling, it should be apparent that the violet and blue peaks for the plot made using a grating with the dye removed are reduced in amplitude, compared to the plot made using a grating with dye remaining.

The test produced two plots that are obviously not the same. The plot made using the grating with the dye has a clear bias towards higher amplitude peaks for the shorter wavelengths and a smaller amplitude peak for the red phosphor at the long wavelength end of the graph. The clearest difference is for the violet peak at around 400nm, which is twice the height of the violet peak for the plot made using the grating with the dye removed.

[![Dye_no_Dye_plot_700.png](https://i.publiclab.org/system/images/photos/000/008/787/medium/Dye_no_Dye_plot_700.png)](https://i.publiclab.org/system/images/photos/000/008/787/original/Dye_no_Dye_plot_700.png)

_The plotted test results_


My conclusion from this test is that leaving the dye on the grating made from a DVD-R results in a significant distortion of the spectrometers amplitude response. As I eventually found, removing the dye by soaking fragments cut from the bottom layer of a split DVD-R in warm, soapy water, is a simple and safe procedure and I believe is well worth doing.

##Calibration

The two curves also show a small difference in wavelength calibration. At its worst this difference is about 3 to 4nm. This is probably due to the accuracy with which it is possible to select the middle blue and the green peak during the calibration procedure. The wavelength calibration procedure for Spectral Workbench was probably arrived at using much earlier versions of the spectrometer with possibly lower resolution. In my plots I see that the green peak from a fluorescent lamp appears to be two peaks rather than a single peak as shown in the calibration procedure (or this may be a peculiarity of the phosphors in the lamp I used). Also, with the filter bias of the DVD-R dye removed, the most violet of the three blue peaks is much lower  in amplitude and can be hard to see, which can make identifying the middle of the three peaks more difficult.

Adjusting the exposure so that the green peak just clips can also cause the green peak / peaks to be distorted, again making it difficult to pinpoint the exact peak for calibration.

##A Re-test

Following discussion in the comments section after I first published this research note I decided to repeat the test. This time around I was extremely careful to adjust the exposure so that the captures were right on the point of clipping. This meant I could capture sharper peaks for the calibration points. Tthe double green peak was much clearer and I could select the sample points for the calibration procedure with greater accuracy. I chose to use the longer wavelength of the two green peaks for the calibration for both captures.

The resulting graph I think still supports my conclusion that leaving the purple/blue dye on the DVD-R diffraction grating will significantly distort the spectrometer amplitude response by attenuating the longer wavelengths. It shows just how careful you have to be in adjusting the exposure precisely to the point of clipping because, in this retest, the red end of the graph shows much higher amplitudes for the 'no dye' plot than in my first test. I did allow rather more clipping for the original test and it seems this limited the response more than I realised.


[![Dye_No_Dye_retest_1.png](https://i.publiclab.org/system/images/photos/000/008/789/medium/Dye_No_Dye_retest_1.png)](https://i.publiclab.org/system/images/photos/000/008/789/original/Dye_No_Dye_retest_1.png)

Note - I used a Crompton 22W Cool White circular lamp for all my testing. It uses Crompton's SPECTRA-PLUS Tri-phosphor, is rated at 4,000 K CT and has a colour rendering index of 81. To my eyes it is not a particularly cold/blue light. It is not a new, straight out of the box, lamp. I use it as my everyday workbench lamp.

