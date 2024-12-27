---
title: "Resolution Test Using 532nm Laser and 405nm UV Laser Pointer"

tagnames: ''
author: dhaffnersr
path: /notes/dhaffnersr/08-28-2016/resolution-test-using-532nm-laser-and-405nm-uv-laser-pointer.md
nid: 13402
uid: 461120
cids: 15246,15252,15253
---

![](https://publiclab.org/public/system/images/photos/000/017/805/original/JDEPC-ov05_sheet_3.png)

# Resolution Test Using 532nm Laser and 405nm UV Laser Pointer

by [dhaffnersr](/profile/dhaffnersr) | August 28, 2016 15:15

August 28, 2016 15:15 | Tags: 

----

##**Resolution Test for The DH 4.0 v4 Spectrometer (Replaced Slit with new 0.09mm Gillette metal razor blade open-air design.)**



Back in June of this year, Dave @Stoft helped me out considerably by explaining the principles of calculating resolution for spectrometers, especially the Plab 2.5 and 3.0, here is a quote from Mr.Stoft on this matter:

"Another, more practical, approach is to remember that the FWHM of a narrow signal (i.e. laser) being detected by a spectrometer also describes the resolution bandwidth. [This is where the resolution is worse than the actual bandwidth of the source (laser) which, in the case of simple devices like the webcams for PLab spectrometers, should be true.] I've not found a reputable measure of the BW of a pocket laser, but I suspect it is <<1nm. Assuming that is true, careful repeat measurements of the FWHM "smearing" of a pure laser source, by the PLab spectrometer, should validate calculated estimates".

I replaced the old JDEPC-ov04 webcam with the more recent modification from the same company, with the one you can purchase now from Plab store. The JDEPC-ov05 and removed its IR filter. I will be posting it's specifications here also, I preformed the same theoretical calculation for resolution below, with the new values of 0.09mm slit width and the same DVD grating of 2770 lines:

[![formula_cal_resolution.png](//i.publiclab.org/system/images/photos/000/017/806/large/formula_cal_resolution.png)](//i.publiclab.org/system/images/photos/000/017/806/original/formula_cal_resolution.png)

Now Mr.Stoft was very correct to assume that a pocket laser ( the one I used of course, the 405nm UV laser,) would have a bandwidth of less than 1nm, you will be able to see this data on figure.2 and fig.3 on the following plots. I also used my 532nm portable green laser for measurements at that wavelength. 

**This is the first plot illustrating both laser lines together**

[![405nm_532nm_laser_test02_isopropyl_alcohol.png](//i.publiclab.org/system/images/photos/000/017/807/large/405nm_532nm_laser_test02_isopropyl_alcohol.png)](//i.publiclab.org/system/images/photos/000/017/807/original/405nm_532nm_laser_test02_isopropyl_alcohol.png)

**Figure.2 and figure.3**

[![405nm_laser_zoomed_view_of_peak.png](//i.publiclab.org/system/images/photos/000/017/808/large/405nm_laser_zoomed_view_of_peak.png)](//i.publiclab.org/system/images/photos/000/017/808/original/405nm_laser_zoomed_view_of_peak.png)

[![532nm_laser_zoomed_view_of_peak.png](//i.publiclab.org/system/images/photos/000/017/809/large/532nm_laser_zoomed_view_of_peak.png)](//i.publiclab.org/system/images/photos/000/017/809/original/532nm_laser_zoomed_view_of_peak.png)

The FWHM for the 405nm laser pointer is 0.78949, which validates Dave Stoft's assumption, now notice the FWHM for the 532nm laser its 2.4577, my theoretical resolution calculation put my spectrometer at 2.13nm, but the laser line's FWHM is 0.32nm wider, my own opinion on this is, I feel more comfortable believing the value of 2.4577 for the 532nm green laser than the theoretical value.

**This next plot is my Solux 4700K lamp spectral image without an IR filter, the spectral wavelength is from 355nm - 895nm**

[![Solux_test001_no_IR_filter_aug_28_no_sample_processed.png](//i.publiclab.org/system/images/photos/000/017/810/large/Solux_test001_no_IR_filter_aug_28_no_sample_processed.png)](//i.publiclab.org/system/images/photos/000/017/810/original/Solux_test001_no_IR_filter_aug_28_no_sample_processed.png)

**Finally, here are the specs for the replaced webcam in my spectrometer**

[![JDEPC-ov05_sheet_1.png](//i.publiclab.org/system/images/photos/000/017/811/large/JDEPC-ov05_sheet_1.png)](//i.publiclab.org/system/images/photos/000/017/811/original/JDEPC-ov05_sheet_1.png)

[![JDEPC-ov05_sheet_2.png](//i.publiclab.org/system/images/photos/000/017/812/large/JDEPC-ov05_sheet_2.png)](//i.publiclab.org/system/images/photos/000/017/812/original/JDEPC-ov05_sheet_2.png)

[![JDEPC-ov05_sheet_3.png](//i.publiclab.org/system/images/photos/000/017/813/large/JDEPC-ov05_sheet_3.png)](//i.publiclab.org/system/images/photos/000/017/813/original/JDEPC-ov05_sheet_3.png)

[![JDEPC-ov05_sheet_4.png](//i.publiclab.org/system/images/photos/000/017/815/large/JDEPC-ov05_sheet_4.png)](//i.publiclab.org/system/images/photos/000/017/815/original/JDEPC-ov05_sheet_4.png)

[![JDEPC-ov05_sheet_5.png](//i.publiclab.org/system/images/photos/000/017/816/large/JDEPC-ov05_sheet_5.png)](//i.publiclab.org/system/images/photos/000/017/816/original/JDEPC-ov05_sheet_5.png)

references

http://publiclab.org/notes/dhaffnersr/06-29-2016/using-a-rhodamine-b-standard-to-correct-some-past-research-mistakes













  




   