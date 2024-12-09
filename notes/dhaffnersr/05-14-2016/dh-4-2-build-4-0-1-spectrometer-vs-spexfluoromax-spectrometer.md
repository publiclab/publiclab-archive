---
title: DH 4.2 (build 4.0.1) spectrometer vs SpexFluoroMax spectrometer
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/05-14-2016/dh-4-2-build-4-0-1-spectrometer-vs-spexfluoromax-spectrometer.md
nid: 13117
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/016/185/original/LOG_view_rhod_b_sample_2_2drps_100ppm_may14.png)

# DH 4.2 (build 4.0.1) spectrometer vs SpexFluoroMax spectrometer

by [dhaffnersr](../profile/dhaffnersr) May 14, 2016 21:15

May 14, 2016 21:15 | Tags: 

----

****ABSTRACT
Accuracy and calibration testing for the DH 4.2 (build 4.0.1) homemade spectrometer and comparison against the SpexFluoroMax Fluorimeter
This is the first real test for the new ccd sensor in my spectrometer, so I decided to test its accuracy on a rhodamine b standard. The preparation has been explained in previous research notes, ref: http://publiclab.org/notes/dhaffnersr/05-02-2016/rhodamine-b-in-ethanol-study-may-02-2016 

I used as my reference spectrum the original data for rhodamine b in ethanol from the Oregon medical laser center because it is a “true” spectra done with a scanning fluorimeter. My goal was to match the peak emission wavelength of rhodamine b in ethanol using my 532nm green laser as the excitation source; I also wanted to match the quantum yield of rhodamine b in ethanol at room temp (22 deg C.) 

I used 6 different concentration standards, characterized by the control standard of 100ppb, the sample cuvette was filled with the control sample and each scan thereafter was added I drop per scan, equaling 6 drops for the final sample. 

The idea behind this was to find the concentration that would yield the correct result, my conclusion based on the evidence was that sample number 1, with 1 drop of rhodamine b @ 100ppm was the correct concentration.

The weight conversion per drop is: 100ppb= 0.025g/25microlitres 100ppm=0.039g/39microlitres. So subtracting 0.39g from 0.025g yields a difference of 0.014g/14microlitres of 100ppm is needed in a solution of 100ppb of rhodamine b in ethanol to achieve these results.


[![rhod_b_upload_today_may14.png](//i.publiclab.org/system/images/photos/000/016/186/large/rhod_b_upload_today_may14.png)](//i.publiclab.org/system/images/photos/000/016/186/original/rhod_b_upload_today_may14.png)

****Next is the processed image with the rayleigh/raman scatter removed:

[![thermal_rhod_b_sample_2_2drps_100ppm_may14.png](//i.publiclab.org/system/images/photos/000/016/187/large/thermal_rhod_b_sample_2_2drps_100ppm_may14.png)](//i.publiclab.org/system/images/photos/000/016/187/original/thermal_rhod_b_sample_2_2drps_100ppm_may14.png)

****The final graph will show my scan of rhodamine b as compared to the one from the Oregon medical laser center:

[![OMLC_and_my_scan_rhod_b_in_ethanol_may14.png](//i.publiclab.org/system/images/photos/000/016/188/large/OMLC_and_my_scan_rhod_b_in_ethanol_may14.png)](//i.publiclab.org/system/images/photos/000/016/188/original/OMLC_and_my_scan_rhod_b_in_ethanol_may14.png)

Also in the graph above I wanted to point out, that I used the OMLC spectrum as my reference  when I calculated the quantum yield for my spectrum, which was 49.324 percent, further verifying that my results are indeed accurate because that is what their quantum yield results were also, references below:


The fluorescence yield is reported to be 0.65 in basic ethanol (Kubin, 1982),_ 0.49 in ethanol_ (Casey, 1988), 1.0 (Kellogg, 1964), and 0.68 in 94% ethanol (Snare, 1982). The fluorescence yield is temperature dependent (Karstens, 1980).

My QY was: 49.324 percent at 22deg C

Ref: 
http://omlc.org/spectra/PhotochemCAD/html/009.html - look under notes.



