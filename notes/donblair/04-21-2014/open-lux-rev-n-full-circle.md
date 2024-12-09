---
title: Open-Lux REV-N: Full Circle
tagnames: near-infrared-camera, thermal-photography, ndvi, calibration, thermal-flashlight, near-ir, thermal-fishing, infragram
author: donblair
path: /notes/donblair/04-21-2014/open-lux-rev-n-full-circle.md
nid: 10340
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/003/771/original/open-lux-evolution.png)

# Open-Lux REV-N: Full Circle

by [donblair](../profile/donblair) April 21, 2014 07:02

April 21, 2014 07:02 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [thermal-photography](../tag/thermal-photography), [ndvi](../tag/ndvi), [calibration](../tag/calibration), [thermal-flashlight](../tag/thermal-flashlight), [near-ir](../tag/near-ir), [thermal-fishing](../tag/thermal-fishing), [infragram](../tag/infragram)

----

(This is a quick note to post materials I've gathered after updating the Open-Lux design -- will flesh out this research note tomorrow ...)

Summary of current features (some of them new):

- NeoPixel array is now arranged in a circle, surrounding RGB and NIR sensors; can control LEDs individually;
- Added NIR LEDs, to facilitate "single pixel" NDVI measurements (e.g., of a single leaf);
- Added a microSD card reader on back.
- Internal pin breakout intended for a) adding audio jack in order to get data off the device via audio cable --> smart phone or to laptop, b) serial connection to Raspberry Pi, c) connecting to additional I2C devices, driving switches, measuring voltages, etc
- Should also be possible to transmit data from device to laptop (and from Open-Lux to Open-Lux) via IR as well
- Another pair of RGB and NIR sensors on back of board;
- Added 3 buttons and a power switch that can easily poke out sides of an enclosure -- 3 buttons are intended to navigate through menu of pre-selected measurement / display modes -- 128 kb EEPROM chip can store several programs
- Two headers for the Nokia 5100 LCD -- one accommodates the Adafruit Nokia 5110 breakout board; another accommodates a very common Nokia 5110 breakout board one can find on Ebay;
- Screw terminal and resistor footprint can accommodate Adafruit 10K thermistor, or other common thermistor types -- temperature can be displayed on LCD, or conveyed via audio (buzzer) or light (using the ring of LEDs as a 'meter')

Quick links to additional info:

- NeoPixel RGB LED [datasheet](http://www.adafruit.com/datasheets/WS2812.pdf)
- NIR LED [datasheet](http://www.everlight.com/datasheets/HIR19_21C_L11_TR8_datasheet.pdf)
- RGB sensor [datasheet](http://www.adafruit.com/datasheets/TCS34725.pdf)
- NIR-LUX sensor [datasheet](http://www.adafruit.com/datasheets/TSL2561.pdf)
- Links to [schematics](https://github.com/Pioneer-Valley-Open-Science/open-lux/blob/master/REVN/open-lux-n-schem.png) and [board designs](https://github.com/Pioneer-Valley-Open-Science/open-lux/blob/master/REVN/open-lux-N.brd) are in the [Open-Lux github repo](https://github.com/Pioneer-Valley-Open-Science/open-lux).
- IR sensor [datasheet](https://www.sparkfun.com/datasheets/Sensors/Temperature/SEN-09570-datasheet-3901090614M005.pdf)


### Pictures

- Mockup of very plain idea for a 3D case .... the front: 

[![open-lux-front.png](https://i.publiclab.org/system/images/photos/000/003/772/medium/open-lux-front.png)](https://i.publiclab.org/system/images/photos/000/003/772/original/open-lux-front.png)

- ... and the back (showing Nokia 5110 LCD):

[![open-lux-back.png](https://i.publiclab.org/system/images/photos/000/003/773/medium/open-lux-back.png)](https://i.publiclab.org/system/images/photos/000/003/773/original/open-lux-back.png)

- Closeup of a 'sticker' that I'm imagining might be useful on the back of the device:

[![open-lux-label.png](https://i.publiclab.org/system/images/photos/000/003/774/medium/open-lux-label.png)](https://i.publiclab.org/system/images/photos/000/003/774/original/open-lux-label.png)

- Info on the NIR LEDs:

[![open-lux-NIR-LED.png](https://i.publiclab.org/system/images/photos/000/003/775/medium/open-lux-NIR-LED.png)](https://i.publiclab.org/system/images/photos/000/003/775/original/open-lux-NIR-LED.png)

- Info on the RGB sensor:

[![rgb-sensor.png](https://i.publiclab.org/system/images/photos/000/003/776/medium/rgb-sensor.png)](https://i.publiclab.org/system/images/photos/000/003/776/original/rgb-sensor.png)

- Info on the LUX+NIR sensor:

[![luxnirsense.png](https://i.publiclab.org/system/images/photos/000/003/777/medium/luxnirsense.png)](https://i.publiclab.org/system/images/photos/000/003/777/original/luxnirsense.png)

- OSHPark mockup of the front of the board ...

[![open-lux-n-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/780/medium/open-lux-n-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/780/original/open-lux-n-osh-front.png)

- ... and of the back.  Note the new microSD card reader, as well as the second pair of RGB and LUX-NIR sensors (for albedo measurements):

[![open-lux-n-osh-back.png](https://i.publiclab.org/system/images/photos/000/003/781/medium/open-lux-n-osh-back.png)](https://i.publiclab.org/system/images/photos/000/003/781/original/open-lux-n-osh-back.png)

- Just the silk:

[![open-lux-n-silk-front.png](https://i.publiclab.org/system/images/photos/000/003/782/medium/open-lux-n-silk-front.png)](https://i.publiclab.org/system/images/photos/000/003/782/original/open-lux-n-silk-front.png)

- Pointless inverse image of silk:

[![open-lux-n-silk-front-inverse.png](https://i.publiclab.org/system/images/photos/000/003/778/medium/open-lux-n-silk-front-inverse.png)](https://i.publiclab.org/system/images/photos/000/003/778/original/open-lux-n-silk-front-inverse.png)

- Schematic:

[![open-lux-n-schem.png](https://i.publiclab.org/system/images/photos/000/003/779/medium/open-lux-n-schem.png)](https://i.publiclab.org/system/images/photos/000/003/779/original/open-lux-n-schem.png)