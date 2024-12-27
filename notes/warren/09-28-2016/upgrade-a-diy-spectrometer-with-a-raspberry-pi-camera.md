---
title: "Can I upgrade a DIY spectrometer with a Raspberry Pi camera?"

tagnames: 'spectrometer, calibration, spectrometry, webcam, raspberry-pi, question:spectrometry, exposure, rpi, pi-camera, gain-correction, gain-control, webvalley, exposure-calibration, question:pi-camera, question:spectrometry-challenge, question:spectrometry-turbidity, raspberry-pi-spectrometer, question:raspberry-pi-spectrometer, question:lego-spectrometer'
author: warren
path: /notes/warren/09-28-2016/upgrade-a-diy-spectrometer-with-a-raspberry-pi-camera.md
nid: 13499
uid: 1

---

# Can I upgrade a DIY spectrometer with a Raspberry Pi camera?

by [warren](../../../profile/warren) | September 28, 2016 19:13

September 28, 2016 19:13 | Tags: [spectrometer](../tag/spectrometer), [calibration](../tag/calibration), [spectrometry](../tag/spectrometry), [webcam](../tag/webcam), [raspberry-pi](../tag/raspberry-pi), [question:spectrometry](../tag/question:spectrometry), [exposure](../tag/exposure), [rpi](../tag/rpi), [pi-camera](../tag/pi-camera), [gain-correction](../tag/gain-correction), [gain-control](../tag/gain-control), [webvalley](../tag/webvalley), [exposure-calibration](../tag/exposure-calibration), [question:pi-camera](../tag/question:pi-camera), [question:spectrometry-challenge](../tag/question:spectrometry-challenge), [question:spectrometry-turbidity](../tag/question:spectrometry-turbidity), [raspberry-pi-spectrometer](../tag/raspberry-pi-spectrometer), [question:raspberry-pi-spectrometer](../tag/question:raspberry-pi-spectrometer), [question:lego-spectrometer](../tag/question:lego-spectrometer)

----

### What I want to do or know

I've seen some of the really great work by @cristoforetti and the #webvalley group -- which I was lucky enough to help a bit on -- to build a version of our spectrometry kits around the camera from a Raspberry Pi mini computer board.

I'd like to think about how this could be done in a standard [Desktop Spectrometry Starter Kit](https://publiclab.org/wiki/desktop-spectrometry-kit-3-0), as an upgrade -- or with a [foldable mini-spectrometry kit](https://publiclab.org/wiki/foldable-spec).

![webcam](https://i.publiclab.org/system/images/photos/000/018/083/medium/build-spec.jpg)

On a hardware basis, this'd hopefully be as simple as gluing the Raspberry Pi camera ($40 with the Pi Zero version board [on Adafruit](https://www.adafruit.com/products/3171)) in place of the webcam that comes with the kit, shown above.

### Why?

Raspberry Pi cameras can have auto exposure/gain compensation shut off, and a specific shutter speed manually set. This could do a lot to improve #exposure-calibration, perhaps adding to work by @stoft on #gain-correction.

Has anyone tried that?

  
(photo via Adafruit)![image description](https://publiclab.org/system/images/photos/000/021/058/large/download.jpg "download.jpg")

  
  
### Software

Getting the software running could be harder -- the Raspberry Pi isn't like a USB webcam, and if you're using it with a monitor & mouse, I'm not sure the camera would show up like a USB camera in a browser.

**Note:** see possible solution with V4L2 library, below in comments!

While the [spectral-workbench.js](https://github.com/publiclab/spectral-workbench.js) library is capable of uploading data to [SpectralWorkbench.org](https://SpectralWorkbench.org), meaning you can run it on the commandline of a Raspberry Pi,

Aside from uploading it as a still image, what more easier, simpler ways are there to use a Raspberry Pi-based camera using the live web interface at [https://spectralworkbench.org/capture](https://spectralworkbench.org/capture) ?