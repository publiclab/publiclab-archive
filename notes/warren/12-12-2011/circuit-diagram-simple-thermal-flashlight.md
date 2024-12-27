---
title: "Build a simple Thermal Flashlight"

tagnames: 'thermal-photography, arduino, thermal-flashlight, fritzing, activity:thermal-flashlight, activity:thermal-flashlight-assembly'
author: warren
path: /notes/warren/12-12-2011/circuit-diagram-simple-thermal-flashlight.md
nid: 625
uid: 1

cids: 374,383,394,535,537,545,546,547,552,1026,7881,10755,23601

---

![](https://publiclab.org/public/system/images/photos/000/031/651/original/IMG_20190419_103107.jpg)

# Build a simple Thermal Flashlight

by [warren](../../../profile/warren) | December 12, 2011 05:40

December 12, 2011 05:40 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [fritzing](../tag/fritzing), [activity:thermal-flashlight](../tag/activity:thermal-flashlight), [activity:thermal-flashlight-assembly](../tag/activity:thermal-flashlight-assembly)

----

### Assemble the Thermal Flashlight

Assembly is a bit easier in this new version (April 2019); below is the diagram both on and off of a mini breadboard; we've eliminated some unnecessary parts.

**Parts list:**

- 1 [Melexis MLX90614 non-contact IR thermometer](http://----%3E%20https://www.adafruit.com/products/1747 "http://----%3E%20https//www.adafruit.com/products/1747") (3v)
- 1 RGB common-cathode LED
- 2 4.7k Ohm resistors (or close to that)
- a short wire (to extend one leg of the thermometer)  
- a mini breadboard
- an Arduino Nano
- a mini USB cable to power it (and a USB battery)

(step-by-step coming soon!)

  
[![image description](/i/31652.png "thermal-flashlight.png")](/i/31652.png?s=o)

  
### Program the Arduino

If it's not already programmed, you'll need to upload a program to your Arduino in the Arduino IDE (https://arduino.cc or the online editor at https://create.arduino.cc) using the following code:

  
[https://gist.github.com/jywarren/1ad7dd997b6319ccb2525958709125ab](https://gist.github.com/jywarren/1ad7dd997b6319ccb2525958709125ab)  

  
You'll need to install the Adafruit Melexis library here: 

  
https://learn.adafruit.com/using-melexis-mlx90614-non-contact-sensors?view=all#download-adafruit-mlx90614-2-7

  
[![](https://publiclab.org/sites/default/files/imagecache/default/Screen%20shot%202011-12-12%20at%204.57.29%20PM.png)](http://publiclaboratory.org/notes/warren/12-12-2011/thermal-flashlight-tests-pirateship)

###   
Using the Thermal Flashlight

You can use this program to "paint" colored light with your Thermal Flashlight:

  
- [http://glowdoodle.com](http://glowdoodle.com/)  
- Also try (and modify) this version in p5js: [https://editor.p5js.org/jywarren/full/dl7B2Upp-](https://editor.p5js.org/jywarren/full/dl7B2Upp- "https://editor.p5js.org/jywarren/full/dl7B2Upp-")

  
See examples of use below!

All code and Fritzing files available here: [https://github.com/publiclab/thermal-flashlight/](https://github.com/publiclab/thermal-flashlight/)

---------

  
#### Old documentation:

[https://gist.github.com/sdosemagen/1739961#file-thermalflashlight-ino](https://gist.github.com/sdosemagen/1739961#file-thermalflashlight-ino)  

Based on a redrawn diagram of the thermal flashlight posted by @ad: [http://publiclaboratory.org/notes/ad/11-28-2011/thermal-camera-arduino-uno-mlx90614-ir-thermometer](http://publiclaboratory.org/notes/ad/11-28-2011/thermal-camera-arduino-uno-mlx90614-ir-thermometer)