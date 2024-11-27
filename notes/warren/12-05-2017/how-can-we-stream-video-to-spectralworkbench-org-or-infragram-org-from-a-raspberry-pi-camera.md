---
nid: 15301
title: How can we stream video to SpectralWorkbench.org or Infragram.org from a Raspberry Pi camera?
path: public/static/notes/warren/12-05-2017/how-can-we-stream-video-to-spectralworkbench-org-or-infragram-org-from-a-raspberry-pi-camera.md
uid: 1
tagnames: spectrometry,raspberry-pi,infragram,question:raspberry-pi,question:infragram-challenges,raspberry-pi-infragram,question:raspberry-pi-infragram,raspberry-pi-spectrometer,question:raspberry-pi-spectrometer,question:coding,question:lego-spectrometer
---

# How can we stream video to SpectralWorkbench.org or Infragram.org from a Raspberry Pi camera?

This is a key part of ease of use with Raspberry Pi based spectrometers, and also Infragram use with Raspberry Pi cameras:

Read more at:

* https://publiclab.org/wiki/raspberry-pi-spectrometer
* https://publiclab.org/wiki/raspberry-pi-infragram

Would love to modify both these pieces of software to be able to stream from a Rasberry Pi on a local network, or even on the same device. The relevant code sections are:

* SpectralWorkbench's "capture.js" file - https://github.com/publiclab/spectral-workbench/blob/master/app/assets/javascripts/capture.js#L44
* Infragram.org's camera.coffee - https://github.com/publiclab/infragram-js/blob/master/public/camera.coffee#L19