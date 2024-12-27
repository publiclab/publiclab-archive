---
title: "CFL Spectral Irradiance Study using Spekwin32"

tagnames: ''
author: dhaffnersr
path: /notes/dhaffnersr/09-01-2016/cfl-spectral-irradiance-study-using-spekwin32.md
nid: 13409
uid: 461120
cids: 15284
---

![](https://publiclab.org/public/system/images/photos/000/017/876/original/CFL_lamp_set_up_title_picture.png)

# CFL Spectral Irradiance Study using Spekwin32

by [dhaffnersr](/profile/dhaffnersr) | September 01, 2016 13:11

September 01, 2016 13:11 | Tags: 

----

##10 CFL Scans using a 13W 2300K CFL (LTS brand_Generic)



A CFL (compact fluorescent light,) mimics the solar spectrum by super heating an element such as Mercury inside its vacuum chamber, depending on that temperature rating is what the relative luminous flux will be. The mean temperature of the Sun is about 5500K, which is 9440.33 Fahrenheit, of course this is ever changing since many nuclear forces are always occurring within the Sun's core.

This being said, any calibration of a spectrometer that is done with a CFL or any radiant light source, should be viewed as a _relative_ calibration at best. This is because this calibration is solely based on the thermal properties of the light source itself and not the true absolute irradiance factor.

The table below are the emission lines that are used as the reference standard  for Zinc, Cadmium and Mercury;

[![calibration_reference_chart_aug31_C.png](//i.publiclab.org/system/images/photos/000/017/877/large/calibration_reference_chart_aug31_C.png)](//i.publiclab.org/system/images/photos/000/017/877/original/calibration_reference_chart_aug31_C.png)

So what I wanted to investigate was the relative luminous flux of the CFL that I use for calibration both with Plab and Spekwin32, and how both those spectral comparisons are effected by the software's algorithms at the same wavelength ranges.

This first plot are the 10 spectral scans I did on Spekwin32 using the laser mount I built, since it's movement is very precise( in mm per step,) I secured the CFL lamp to it (as can be seen in my title picture,) and positioned it 4 feet (121.91cm) away from the detector, keeping the angle of the lamp at 45 degrees pointed down to simulate the sun rising.

[![All_10_CFL_scans_aug31_spectropic_view_A.png](//i.publiclab.org/system/images/photos/000/017/878/large/All_10_CFL_scans_aug31_spectropic_view_A.png)](//i.publiclab.org/system/images/photos/000/017/878/original/All_10_CFL_scans_aug31_spectropic_view_A.png)

[![All_10_cfl_scans_data_chart_aug31_B.png](//i.publiclab.org/system/images/photos/000/017/879/large/All_10_cfl_scans_data_chart_aug31_B.png)](//i.publiclab.org/system/images/photos/000/017/879/original/All_10_cfl_scans_data_chart_aug31_B.png)
Table.1 Data for all 10 cfl scans, second blue band and green band.

Fig.1 Second Blue peak, zoomed in view

[![CFL_blue_peak_data_pic1_fig1.png](//i.publiclab.org/system/images/photos/000/017/880/large/CFL_blue_peak_data_pic1_fig1.png)](//i.publiclab.org/system/images/photos/000/017/880/original/CFL_blue_peak_data_pic1_fig1.png)

Fig.2 Green peak, zoomed in view

[![CFL_green_peak_data_pic1_fig2.png](//i.publiclab.org/system/images/photos/000/017/881/large/CFL_green_peak_data_pic1_fig2.png)](//i.publiclab.org/system/images/photos/000/017/881/original/CFL_green_peak_data_pic1_fig2.png)

Now here is Fig.3, showing the CFL scan from Spekwin32 and that of the scan I did from Plab, in the top right corner of the plot, is the quality fit calculations for both spectra's

[![both_plab_spekwin_CFL_scans_aug31_fig3.png](//i.publiclab.org/system/images/photos/000/017/882/large/both_plab_spekwin_CFL_scans_aug31_fig3.png)](//i.publiclab.org/system/images/photos/000/017/882/original/both_plab_spekwin_CFL_scans_aug31_fig3.png)

Both spectral scans have the same wavelength range of 376nm - 766nm, I cut the Plab scan off from 400 to 766nm and it is indicated on the plot.

Fig.4 and 5 are the zoomed in view of both peak comparisons

[![Blue_peak__both_plab_spekwin_aug31_fig4.png](//i.publiclab.org/system/images/photos/000/017/883/large/Blue_peak__both_plab_spekwin_aug31_fig4.png)](//i.publiclab.org/system/images/photos/000/017/883/original/Blue_peak__both_plab_spekwin_aug31_fig4.png)

[![green_peak__both_plab_spekwin_aug31_fig5.png](//i.publiclab.org/system/images/photos/000/017/884/large/green_peak__both_plab_spekwin_aug31_fig5.png)](//i.publiclab.org/system/images/photos/000/017/884/original/green_peak__both_plab_spekwin_aug31_fig5.png)

Some conclusions from this I think is, in my opinion, CFL calibrations of those done from thermal radiant light sources should be considered as _relative_  calibrations at best and _not_ the gospel, I am finding too many variables in my data and it is increasingly difficult to get consistent results because of this inherent error factor.

I am trying to figure out a mathematical solution that may solve this problem, because I think this is only a problem for devices such as the one's we construct here and perhaps with any home built design, where absolute quality control cannot be assured because of limited resources.

references

file:///C:/Users/dhaff/Downloads/CalibracionEspectrofotometro_24858.pdf - uv/vis spectrometer calibration procedures

 













