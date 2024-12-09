---
title: 'Scanning thermal camera'
tagnames: thermal-photography, flir, thermal-camera, scanning
author: warren
path: /wiki/scanning-thermal-camera.md
nid: 630
uid: 1

---

# Scanning thermal camera

by [warren](../profile/warren)

December 13, 2011 16:20 | Tags: [thermal-photography](../tag/thermal-photography), [flir](../tag/flir), [thermal-camera](../tag/thermal-camera), [scanning](../tag/scanning)

----

<img src="https://publiclab.org/sites/default/files/thermal-camera_0.png" width="500px" />

The DIY thermographer is a camera which creates an image of what temperature things are -- a 'heat' camera. 

**This approach has been put on hold in favor of the "thermal flashlight" technique which is now posted on the main [Thermal Camera tool page](/tool/thermal-camera)**

We're making a 'scanning thermal imager' which means we just use a temperature sensor and sweep it back and forth across a scene, recording the temperature variation to build up an image that looks like this:

<img src="http://farm6.static.flickr.com/5012/5413696892_1870bdcbf8.jpg" width="500" height="333" alt="FLIR house" />

There are two main parts to the project: the camera itself (currently made of Legos and an <a href="http://arduino.cc">Arduino</a>, and the website, <a href="http://thermographer.publiclaboratory.org">thermographer.publiclaboratory.org</a>, which helps you create an image from your recorded temperatures. Both are under development and we don't yet have a demo to show you. Check back soon!

<iframe width="480" height="360" src="//www.youtube.com/embed/kNaCDE1cffE?rel=0" frameborder="0" allowfullscreen></iframe>

###Parts:###

* The camera currently uses a Melexis non-contact infrared thermometer:
  * http://www.melexis.com/Sensor-ICs-Infrared-and-Optical/Infrared-Thermometers/MLX90614-615.aspx
  * Datasheet: http://www.melexis.com/Assets/IR-sensor-thermometer-MLX90614-Datasheet-5152.aspx
* Lego turntables: http://www.bricklink.com/search.asp?pg=1&colorID=11&itemID=67722&sz=10&searchSort=P 
* an Arduino
* two EasyDriver stepper motor drivers and matching stepper motors

<a href="https://www.flickr.com/photos/jeffreywarren/5158457963/" title="These are roughly equivalent in price and functionality by jeferonix, on Flickr"><img src="http://farm5.static.flickr.com/4066/5158457963_f491df1ebd.jpg" width="500" height="375" alt="These are roughly equivalent in price and functionality" /></a>

(above, the first step was to 'clone' an off-the-shelf non-contact IR thermometer)

Code at: https://github.com/jywarren/thermographer