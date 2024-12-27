---
title: "WheeTrometer Optics and Wavelength Calibration"

tagnames: 'spectrometer, wheetrometer, spectrophotometry'
author: JSummers
path: /notes/JSummers/07-18-2019/wheetrometer-optics-and-wavelength-calibration.md
nid: 20183
uid: 304279

cids: 25228,29288

---

![](https://publiclab.org/public/system/images/photos/000/033/850/original/3DPrintedWheetrometer07-18-2016.png)

# WheeTrometer Optics and Wavelength Calibration

by [JSummers](../../../profile/JSummers) | July 18, 2019 19:55

July 18, 2019 19:55 | Tags: [spectrometer](../tag/spectrometer), [wheetrometer](../tag/wheetrometer), [spectrophotometry](../tag/spectrophotometry)

----

We are working to develop low cost spectrometers for UV-vis-near IR wavelengths based on the Toshiba TCD1304 charge coupled device. This is an update on our earlier work, which can be found [here](https://publiclab.org/notes/JSummers/08-16-2018/wheetrometer-spectrometer-update-part-2) and [here](https://publiclab.org/notes/JSummers/06-03-2018/updating-the-wheetrometer-code-for-running-the-ccd) and [here](https://publiclab.org/notes/JSummers/12-29-2018/programming-texas-instruments-microcontrollers-using-the-tiva-c-launchpad). It has been quite a while since we wrote about this and we have made and tested quite a few prototypes. In this research note, I am presenting some of our work on this effort.

Housings for some early prototypes were made from medium density fiberboard (mdf), plywood and foam insulation. Once we settled on an optical geometery, we began 3D printing the housings out of PLA. Optical components were mounted in 3D printed mounts and secured with either M3 machine screws or #4 sheet metal screws. We chose a crossed Czerny Turner optical geometry, as shown in the figure below. In this figure, light enters via the slit at the bottom, travels vertically to the collimating mirror, is reflected to the grating, then to the focusing mirror and on to the detector.

![image description](/i/33851.png "CzernyTurnerA.png")

Early prototypes employed optical slits milled using a low cost CNC
router but we later switched to having them manufactured overseas. While we were able to achieve slit widths of ~0.2 mm using the router, our goal for this project is to offer a kit with the necessary optical and electronic components and the router method is not suitable for high volume production. Looking on [Alibaba.com](http://Alibaba.com), I was able to connect with Donguan Electronics Company that made me 100 stainless steel pieces with the design below for a few bucks each. The slit width is 0.15 mm.  
![image description](/i/33852.png "slit_5.png")

Our initial prototypes employed concave mirrors and gratings purchased from either Thor Labs or Edmund Optics. If you have ever looked into this stuff, you know these things are not cheap. Once we decided on the optical components, however, we were able to get a substantial discount from overseas vendors by purchasing in bulk. The photo below shows one of our more recent designs. In the back, you can see a 20 mm x 50 mm concave mirror we had manufactured for this project. The CCD detector is on a small circuit board that has wires connecting it to the microcontroller board in the foreground.  
![image description](/i/33853.jpg "3DPrintedWheetrometer-2019-JuneB.jpg")

We tested the response of our prototypes by measuring the output from a compact fluorescent lamp (CFL). The results can be seen in the main image for this research note. We have made some good progress on writing the firmware and user interface. The user interface has a built-in wavelength calibration method based on the known CFL emission wavelengths. I put a demo of the calibration method on YouTube. You can watch it [here.](https://www.youtube.com/watch?v=Ql2YdYYC7Ww)

Guess that is about all the typing I feel like doing. Let me know if you have questions.