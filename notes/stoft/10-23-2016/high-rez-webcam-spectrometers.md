---
nid: 13641
title: High-Rez WebCam Spectrometers
path: public/static/notes/stoft/10-23-2016/high-rez-webcam-spectrometers.md
uid: 54025
tagnames: spectrometer,spectrometry,desktop-spectrometer,diy-spectrometer,resolution
---

# High-Rez WebCam Spectrometers

**Abstract**

Having experimented with software algorithms to enhance the PLab-3 spectrometer data, I decided to experiment with a two higher pixel-density webcams; with monochrome as one of those. The objective was to look at the effect of the hardware sensor on the recovered spectrum and to gain a better understanding of the cost / performance trade-off. The same source light conditions were created for each spectrometer test and the Matlab test software was designed to recover only native-mode pixel data. The data presented here raises additional questions not answered by any of these three designs so this note just represents a starting point. Finally, an advantage with programming the interface for all three (3) cameras is that the exposure can be set to 'manual' and other features such as brightness, gain, contrast, temp deg-k, etc can be controlled -- though the specific setting options is not all the same for each camera (and the monochrome has only a couple).

More observations may be added later......

**Hardware**

The three spectrometers are 1) the orignal PLab-3 SANM CM-020 color webcam 1600x1200 native, 2)  an OVA-2710 based webcam at 1920x1080 native and 3) an MT9P031-based monochrome webcam at 2592x1944 native. This first image is of the OVA2710 camera + diffraction assembly:

[ One additional observation is that the tiny polycarbonate 60-deg lenses of th SANM type webcams is a definite disadvantage. The other two webcams were fitted with 8mm glass lenses where focus was considerably more accurate. ]

[![Color.jpg](https://publiclab.org/system/images/photos/000/018/550/large/Color.jpg)](https://publiclab.org/system/images/photos/000/018/550/original/Color.jpg)

...and this image is of the monochrome webcam + diffraction assembly:

[![Monochrome.jpg](https://publiclab.org/system/images/photos/000/018/551/large/Monochrome.jpg)](https://publiclab.org/system/images/photos/000/018/551/original/Monochrome.jpg)

While the monochrome webcam is quite expensive, it was valuable to include because it is 1) higher native resolution, 2) it does not have the RGGB Bayer filter or the JPEG effects and 3) it has 12-bit dynamic range (as opposed to the RGB cameras at 8-bit depth. The 1920x1080 resolution webcam is moderately priced so provides an interesting combination of price-performance.

**Components**

[SANM] Obviously, the PLab-3 SANM camera is available from PLab.

[OVA-2710] This camera is from ELP and can be found on [Amazon for about $45](https://www.amazon.com/ELP-Driver-Camera-Module-ELP-USBFHD01M-L21/dp/B00KA7WSSU/ref=sr_1_1?ie=UTF8&qid=1477343679&sr=8-1&keywords=ELP-USBFHD01M-L21).

[MT9P031] The monochrome camera is available from the Mfg [E-Con and is expensive](https://www.e-consystems.com/Monochrome-USB-Camera-board.asp).

[LENS] Both of these camera will require a new 8mm M12 lens from [Amazon for about $6](https://www.amazon.com/1080P-Board-Black-Security-Camera/dp/B01GH6LJG4/ref=sr_1_1?ie=UTF8&qid=1477343765&sr=8-1&keywords=M12+8mm+lens); a minor additional cost.

**Plots**

All plots show normalized values, CFL-calibrated wavelengths to a calculated 0.1nm resolution and Solux 4700K gain-corrected intensity.

The first plot is the now-traditional comparison of a 2700K CFL.

[![CompareCFL2700k.jpg](https://publiclab.org/system/images/photos/000/018/552/large/CompareCFL2700k.jpg)](https://publiclab.org/system/images/photos/000/018/552/original/CompareCFL2700k.jpg)

This next plot is the same data; just a "zoom-in" look at the green 546nm peak to observe the differentiation of the "double peak" to give a general sense of resolution.

[![CompareCFL546pk.jpg](https://publiclab.org/system/images/photos/000/018/553/large/CompareCFL546pk.jpg)](https://publiclab.org/system/images/photos/000/018/553/original/CompareCFL546pk.jpg)

The next plot looks to observe the effect of using a 0.12mm slit made from two sharp blade edges and a film-based slit while looking closely at the green 546nm double-peak of the SANM camera.

[![CompareSlits.jpg](https://publiclab.org/system/images/photos/000/018/554/large/CompareSlits.jpg)](https://publiclab.org/system/images/photos/000/018/554/original/CompareSlits.jpg)

Next, I attempted to measure the true spectrometer resolution by observing a ~650nm pocket laser and calculating the approximate Full Width Half Max (FWHM) bandwidth. Using a laser for this measurement is valid because lasers are extremely narrow bandwidth so the measured value is going to be many, many times wider than the actual source. It appears possible to achieve ~1nm resolution.

[ Specs of laser point BW are very hard to find, but one reference claims the typical laser pointer at 630nm (red) has a spectral linewidth of 100MHz (i.e. the 'noise bandwidth') which can be converted to **~0.0001nm**. While there is likely to be significant variation between laser devices, relative to a PLab spectrometer, a laser pointer would appear to be a near ideal source. LEDs, of course, will not work because their BWs can be 10-20nm. ]

[![CompareLaser650nm.jpg](https://publiclab.org/system/images/photos/000/018/555/large/CompareLaser650nm.jpg)](https://publiclab.org/system/images/photos/000/018/555/original/CompareLaser650nm.jpg)

The plot below shows 1) the reference  Solux 4700K output spectrum and the gain-calibrated measured Solux spectras of each of the webcams. Note that while all corrected spectra closely fit the Solux curve, each webcam shows its own sensitivity bandwidth.

[![CompareSolux.jpg](https://publiclab.org/system/images/photos/000/018/556/large/CompareSolux.jpg)](https://publiclab.org/system/images/photos/000/018/556/original/CompareSolux.jpg)

Finally, this plot shows the Solux gain-corrected spectra of November mid-day sun (as measured through a double-glazed window) as compared with a "typical ideal" solar spectra. The fact that they are all different from the "ideal" was not too surprising. It should also be noted that taking a solar spectra is a difficult challenge.

[![CompareSun.jpg](https://publiclab.org/system/images/photos/000/018/557/large/CompareSun.jpg)](https://publiclab.org/system/images/photos/000/018/557/original/CompareSun.jpg)

