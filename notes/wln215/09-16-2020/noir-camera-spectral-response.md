---
title: "NoIR Camera Spectral Response"

tagnames: 'spectralworkbench, spectrometry, raspberrypi, picamera, noir'
author: wln215
path: /notes/wln215/09-16-2020/noir-camera-spectral-response.md
nid: 24474
uid: 578478
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/040/905/original/sidebysidespectra.001.jpeg)

# NoIR Camera Spectral Response

by [wln215](/profile/wln215) | September 16, 2020 21:30

September 16, 2020 21:30 | Tags: [spectralworkbench](/tag/spectralworkbench), [spectrometry](/tag/spectrometry), [raspberrypi](/tag/raspberrypi), [picamera](/tag/picamera), [noir](/tag/noir)

----

##Introduction

As I was going to assemble an infragram pi, I realized I had a magenta filter instead of a red one. Having recently configured my spectrometer to work with filters, I can now test the PiCamera's wavelength range and color filter response in the same experiment. I searched through the archives, and to my knowledge, nobody has tested this either on Public Lab or the rest of the internet. The only thing I found is [this post on the RPi forums][1]. So with a Pi powered spectrometer at my disposal I compared images taken on both cameras with and without filters of light from a CFL. 

This is only a preliminary experiment, a more refined one is on the way. Some things immediately obvious is the fact that CFLs are manufactured to [emit a majority of light in the visible spectrum][2] so a better light would be an incandescent for looking at more of the IR spectrum. 

## My spectrometer:

The design for the spectrometer portion takes the mounting hardware from a [previous spectrometer][3] I designed, and it uses the geometry of PublicLab's Lego spectrometer. I use bulkheads that house: a 1000 lines/mm diffraction grating, the PiCamera, color filters, and a slit from razor blades. Designs are available in one of my past posts. I put the color filters in front of the razor blades because it fits best, but this should be tested in the next iteration of this experiment. 

![image description][4]

## The spectra:

A total of six spectra were captured between two piCameras and two filters. Links to all my spectralworkbench captures will be at the end. 

First, a comparison of the two cameras without filters. 
![regular pi camera][5]

![noir pi camera][6]

The spectra could be calibrated better, but for now we can see the NoIr camera has a bit more intensity past 650 nm or so with **the intensity dropping under 10% at about 725 nm.** Additionally we can subtract the regular camera's spectrum from the noir camera to better view the wavelengths the IR filter normally attenuates. 

![image description][7]

Here the little bump in intensity at 750 nm becomes more apparent. 

## Color filters with the camera experiments. 
I calibrated my spectra with the blue filters of each test run. The blue filters out the red light which makes it easy to calibrate on spectral workbench, however my calibration might not be accurate as the zeroth order seems to be a bit to the left of where it should be. Without an incandescent to emit more IR wavelengths, the color filters do not show much, especially without NIR radiation from the source. The image taken on the NoIR camera with a blue filter shows what the blue and red sensors detect in NIR, again demonstrating a small increase in intensity at around 700-750 nm. 

![image description][8]

## Conclusion
The NoIR camera can get spectra up to at least 725 nm in the NIR spectrum, this is limited by the source in this experiment. With a larger control of light sources better results can be visited. Filters can be tested on spectral workbench to find out which wavelengths they can attenuate. Darkness in the spectrometer filters out the noise. CFLs might not make the best light sources for NIR experiments because they do not emit enough IR light for the sensor to effectively detect. 

## Next steps in this experiment:

 - Test the filters available in the Public Lab store
 - Test other light sources which may output more light in the NIR band (incandescents, sunlight)
 - Refine the design, make it darker
 - Filter positioning
 - Play with the camera's white balance settings, this may be a source for error

https://spectralworkbench.org/spectrums/188442
https://spectralworkbench.org/spectrums/188443
https://spectralworkbench.org/spectrums/188444
https://spectralworkbench.org/spectrums/188446
https://spectralworkbench.org/spectrums/188447
https://spectralworkbench.org/spectrums/188448

  [1]: https://www.raspberrypi.org/forums/viewtopic.php?t=60103
  [2]: https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/compact-fluorescent-lamps-cfls-fact-sheetfaq#4
  [3]: https://publiclab.org/notes/wln215/12-09-2019/open-source-spectrometer-for-detecting-laser-harmonics
  [4]: /i/40911.jpg "IMG_7148.jpg"
  [5]: /i/40907.png "Screen_Shot_2020-09-16_at_1.29.03_PM.png"
  [6]: /i/40908.png "Screen_Shot_2020-09-16_at_1.30.36_PM.png"
  [7]: /i/40909.png "Screen_Shot_2020-09-16_at_1.34.29_PM.png"
  [8]: /i/40910.png "Screen_Shot_2020-09-16_at_1.50.54_PM.png"