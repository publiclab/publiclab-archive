---
nid: 10695
title: Live Infragram
path: public/static/notes/lucenk/07-15-2014/live-infragram.md
uid: 424538
tagnames: near-infrared-camera,ndvi,infragram,maxmsp
---

# Live Infragram

I want to be able to tap into a video feed of NRG images being processed live in real time.

I am working in the patch-based programming environment Max/MSP and the Infragram DIY Plant Analysis Webcam (http://www.adafruit.com/products/1722). With Max/MSP, it is possible to break a video feed into the three colour channels and for logic functions to be performed on the video streams. Using video processing patches, I have attempted to perform the equation (Near IR - Red) / (Near IR + Red) found in a tutorial on this website (https://farm6.staticflickr.com/5442/6966937874_5c1361e83c_d.jpg). This did not result in a NRG image. It is definitely possible that I made programming errors.

Is there a raw equation that can be performed on the video feed coming from the Infragram DIY Plant Analysis Webcam to produce an NRG image?

As a Landscape Architecture student, I am interested in using technology and sensors to help understand the world around us. I hope to use this live photosynthesis analysis tool to reveal this process as it is difficult to perceive.