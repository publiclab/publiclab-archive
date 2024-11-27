---
nid: 15470
title: Software for Calibrating and Reading Spectrometer from USB Camera
path: public/static/notes/jkew/01-07-2018/software-for-calibrating-and-reading-spectrometer-from-usb-camera.md
uid: 521009
tagnames: spectrometer,calibration,spectral-analysis
---

# Software for Calibrating and Reading Spectrometer from USB Camera

I wrote a quick program to capture spectrums from a DYI Lego spectrometer I built using OpenCV and the GNU Scientific Library. It's pretty rough; but it helps me automate parts of the experimental process in a more fluid way. It does explicitly not support subtraction or other analysis; for that I will be using Tableau; but for data acquisition in a repeatable way I needed something that would let me quickly iterate through a number of samples.

  
[GitHub Project](https://github.com/jkew/skew-biology)

https://github.com/jkew/skew-biology