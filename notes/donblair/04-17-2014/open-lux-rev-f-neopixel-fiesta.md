---
nid: 10326
title: Open-Lux REV-F: "NeoPixel" Fiesta!
path: public/static/notes/donblair/04-17-2014/open-lux-rev-f-neopixel-fiesta.md
uid: 43651
tagnames: thermal-photography,open-hardware,calibration,thermal-flashlight,spectrometer-calibration,intensity-calibration,thermal-imaging,thermal-fishing,open-lux
---

# Open-Lux REV-F: "NeoPixel" Fiesta!

### Previously ....

The [Open-Lux](http://publiclab.org/notes/donblair/04-07-2014/open-lux) is a design that's intended to accommodate the [thermal flashlight](http://publiclab.org/wiki/thermal-photography), [thermal fishing bob](http://publiclab.org/wiki/thermal-fishing-bob-plots-boston-toolshed-raising), and also -- perhaps -- some [other fun uses](http://publiclab.org/notes/donblair/04-11-2014/comparisons-canons-mobiuses-fruit). Open-Lux has an on-board, RGB and NIR sensors (on both the front and the back of the board), which can provide a standardized 'brightness value' for light in these bands (which bands precisely depends on the exact design of the sensor), since (we think) there isn't any complex 'on board image processing' of the data coming in through these channels.  What might this be useful for?  Some ideas are:

- calibrating computer displays and camera sensors for brightness, against the OpenLux's R,G,B, and NIR channels;
- assessing the color of chromatographic testing strips in a standardized, relatively inexpensive way, that isn't subject to unknown differences across typical camera sensors;
- determining surface albedo by looking at the difference between radiation above the board (facing the sun) and below the board (facing the ground);
- other fantast(-y / -ical) applications? 

This is to post what has changed in the **latest revision**, [Open-Lux REV-F](https://github.com/Pioneer-Valley-Open-Science/open-lux/tree/master/REVF), which I think might be the final revision before ordering a few prototypes.  


[![open-lux-revf-topsilk.png](https://i.publiclab.org/system/images/photos/000/003/704/medium/open-lux-revf-topsilk.png)](https://i.publiclab.org/system/images/photos/000/003/704/original/open-lux-revf-topsilk.png)



[![open-lux-revf-front.png](https://i.publiclab.org/system/images/photos/000/003/705/medium/open-lux-revf-front.png)](https://i.publiclab.org/system/images/photos/000/003/705/original/open-lux-revf-front.png)


### Different chip

I realized, after some thought, that having a standard USB interface (rather than [virtual USB](https://rayshobby.net/?p=7363) with a 328P chip, as cool as that approach was)) would be really handy, and would likely make debugging and getting data off the board easier for most folks.  So I've switched to the 32u4 chip -- the same chip used in the Arduino Leonardo.

### Firmware control of power to display 
I've added some mosfets in order to allow us to turn the Nokia 5110 display (located on the back of the board) on and off (to conserve power in some cases) by pulling a digital pin low; I've done the same for power to the LED on the display.

### Buttonz!

I've added three buttons to the board, which will stick out to one side of the device.  This should allow for e.g. setting temperature thresholds interactively, changing display or sensing modes; or scrolling through menus on the display. 

### Memory!

I've added 128k of EEPROM memory to the board, so we can store setting settings like temperature thresholds (rather than have to reprogram the device with a laptop when we want new settings).  

### NeoPixelz!

I've switched to the same RGB LEDs that Adafruit is calling their [NeoPixel](https://learn.adafruit.com/adafruit-neopixel-uberguide/) device -- one of the coolest thing about these LEDs is that one can control a bunch of them using a single digital pin.  This a) saves pins! and b) means that we can control each of the 6 LEDs on the board individually.  I'm imagining that we can give feedback on temperature or do other fun things by displaying a range of colors, in some changing pattern, across the LEDs ... 

### Pin breakouts

We've also exposed VBUS (the raw voltage into the device), VCC (3.3V), GND, RX, TX, SDA, SCL, A0, and A1.  The hope is that this will a) allow us to e.g. drive strips of LEDs if we need brighter displays (as in the thermal flashlight case) b) connect to a Raspberry Pi via serial (if we want to use this device as a peripheral), connect any I2C device we like (over SDA and SCL), or otherwise use the analog/digital capabilities of the A0 and A1 pins.

### Legoz!

Sekjal posted a wonderful research note](http://publiclab.org/notes/sekjal/04-15-2014/thermal-flashlight-reva-reading-changes-over-distance) in which he assessed the sensitivity of the onboard IR sensor as a function of distance from a measured object, using a homemade Lego contraption that allowed him to adjust this distance quite precisely.  Sekjal suggested that we add holes on the device that would accommodate a Lego 3mm rod, and that the spacing between the holes be a multiple of the standard 8mm spacing between Lego device holes.  Accordingly, we've now got four tabs on the device with holes 3 mm in diameter, and they are 48, and 71 'lego spacings' away from one another in the horizontal and vertical directions, respectively.  Whee!

### Mistakez?

Here's a link to the [OpenLux REV-F schematic](https://github.com/Pioneer-Valley-Open-Science/open-lux/blob/master/REVF/open-lux-revf-sch.png), as well as the [board layout](https://github.com/Pioneer-Valley-Open-Science/open-lux/blob/master/REVF/open-lux-revf-front.png), in the [Open-Lux REVF repo github](https://github.com/Pioneer-Valley-Open-Science/open-lux/tree/master/REVF).  If anyone sees anything goofy in these designs, let me know ... otherwise I think I'm ready to order some boards and see if it works? 