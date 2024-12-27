---
title: " 3D printed mini spectrometer"

tagnames: 'spectrometer, spectrometry, intensity-calibration, absorption, absorption-spectrometry, upgrade:spectrometry, upgrade:foldable-spec, vis-spectroscopy, 3d-print'
author: rthalman
path: /notes/rthalman/01-19-2017/3d-printed-mini-spectrometer.md
nid: 13865
uid: 495835

---

![](https://publiclab.org/public/system/images/photos/000/019/324/original/Spectrometer_Image.png)

#  3D printed mini spectrometer

by [rthalman](../../../profile/rthalman) | January 19, 2017 17:04

January 19, 2017 17:04 | Tags: [spectrometer](../tag/spectrometer), [spectrometry](../tag/spectrometry), [intensity-calibration](../tag/intensity-calibration), [absorption](../tag/absorption), [absorption-spectrometry](../tag/absorption-spectrometry), [upgrade:spectrometry](../tag/upgrade:spectrometry), [upgrade:foldable-spec](../tag/upgrade:foldable-spec), [vis-spectroscopy](../tag/vis-spectroscopy), [3d-print](../tag/3d-print)

----

###3D printed mini spectrometer and absorption cell holder with LED.
I took the basic design of the simple paper spectrometer and created a 3D printable version. 

[![IMG_20170117_125027452.jpg](https://publiclab.org/system/images/photos/000/019/316/large/IMG_20170117_125027452.jpg)](https://publiclab.org/system/images/photos/000/019/316/original/IMG_20170117_125027452.jpg)

The design is intended to interface with a Microsoft HD webcam. There are two parts - the cam interface and grating holder and the spectrometer body with the slit. This version of the spectrometer is printed using PLA filament. After initial alignment and testing the two parts are attached together using superglue (plastic is the ideal material for superglue, it bonds the parts together).

[![IMG_20170117_125049288.jpg](https://publiclab.org/system/images/photos/000/019/317/large/IMG_20170117_125049288.jpg)](https://publiclab.org/system/images/photos/000/019/317/original/IMG_20170117_125049288.jpg)

The .stl files attached fix the need for any grinding like I did here to get the grating to fit (it originally was supposed to slide in from the side, but the tight fit scratches the holographic grating off the DVD piece. I highly recommend the metallic duct tape or a good quality electrical tape for attaching anything that needs to be light tight. You could also take some flat black spray paint to the inside of the spectrometer body to reduce straylight.


[![IMG_20170117_133152371.jpg](https://publiclab.org/system/images/photos/000/019/318/large/IMG_20170117_133152371.jpg)](https://publiclab.org/system/images/photos/000/019/318/original/IMG_20170117_133152371.jpg)

For the absorption cell body, the spectrometer is a tight fit with the slit lined up vertically. An LED or LED array fits in the end (the is formed for the large style LED (not shown)). Use a piece of note card or cardstock as a diffuser so that you don't get lots of stray light in the spectrometer and can get a more uniform illumination of the slit. A standard 1cm liquid cuvette should fit in the square slot for absorption measurements.

For absorption spectroscopy you will need to be able to fix the integration time (frame-rate) of the camera. you can do this by using the computer's camera controls and then also adjust the focus, contrast, etc. Once you do this (and turn off the auto adjust settings) you should be able to go back to spectralworkbench and take spectra that will work for absorption measurements. I used IGOR (Wavemetrics) to control the camera and then also bin the rows for more photons (you can also zoom in to remove rows that aren't needed). Here is the image from the camera:

[![Spectrometer_Image.png](https://publiclab.org/system/images/photos/000/019/319/large/Spectrometer_Image.png)](https://publiclab.org/system/images/photos/000/019/319/original/Spectrometer_Image.png)

If we compress all of the columns in the picture into a spectrum of a Fluorescent tube lamp and calibrate it, we get the following:

[![MiniSpectrometer_CFL_lines.png](https://publiclab.org/system/images/photos/000/019/320/large/MiniSpectrometer_CFL_lines.png)](https://publiclab.org/system/images/photos/000/019/320/original/MiniSpectrometer_CFL_lines.png)


I approached this project because I wanted a fairly simple absorption cell that I could control the timing and focus of the camera better as well as have a reproducible placement of the absorption cell (1 cm cuvette). 3D printing seemed like a good way to go about this. Enjoy!

For a good table of CFL lines with a graph and a table: https://commons.wikimedia.org/wiki/File:Fluorescent_lighting_spectrum_peaks_labelled.gif

Camera mount: 
<a href="https://publiclab.org/system/images/photos/000/019/321/original/Cammount.STL"><i class="fa fa-file"></i> Cammount.STL</a>
Spectrometer Body: 
<a href="https://publiclab.org/system/images/photos/000/019/322/original/Spectrometerbody2.STL"><i class="fa fa-file"></i> Spectrometerbody2.STL</a>
Absorption Cell: 
<a href="https://publiclab.org/system/images/photos/000/019/323/original/AbsorptionCell_Body_final.STL"><i class="fa fa-file"></i> AbsorptionCell_Body_final.STL</a>



