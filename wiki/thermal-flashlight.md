---
title: Thermal Flashlight
tagnames: thermal-photography, arduino, thermal-flashlight, thermal, heat, method, parent:thermal-photography
author: warren
path: /wiki/thermal-flashlight.md
nid: 10098
uid: 1

---

# Thermal Flashlight

by [warren](../profile/warren)

March 02, 2014 17:02 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [thermal](../tag/thermal), [heat](../tag/heat), [method](../tag/method), [parent:thermal-photography](../tag/parent:thermal-photography)

A "Thermal Flashlight" is a DIY device which lets you do a kind of "light painting" -- [thermal photography](/wiki/thermal-photography). It produces a colored "heat map" overlaid directly onto a photo of a room. This is the simplest, cheapest, and to date, most effective way we have developed of measuring heat leaks or cool leaks indoors and outdoors. Simply put, the "flashlight" puts out redder light if it's pointed at something hot (default 75 deg F or more) and bluer light if it's pointed at something cold *(default 60 deg F or less).

### Parts

The Melexis MLX90614 digital thermometer used in this kit can be found in a few places, at different price points:

* [Adafruit.com](https://www.adafruit.com/product/1747)
* [AliBaba.com](https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=Melexis+MLX90614+3V&viewtype=)

### Assembly

There are a few versions of the thermal flashlight:

[notes:grid:activity:thermal-flashlight-assembly]


### Questions

[questions:thermal-flashlight]

****

### Activities

[activities:thermal-flashlight]


****


### Using a Thermal Flashlight

To capture the light painting over time, we have been using timelapse photography or this [p5js.org sketch](https://editor.p5js.org/jywarren/present/dl7B2Upp-) ([source](https://editor.p5js.org/jywarren/sketches/dl7B2Upp-)) (or its inspiration, <a href="http://scripts.mit.edu/~eric_r/glowdoodle/">GlowDoodle</a>), as seen in the top image on this page. 

* Within view of the camera or laptop, sweep the flashlight beam over the scene at a distance of about 12 inches. 
* Try to stay out of the way of the beam, and don't point it directly at the camera or it will create a "starburst" and may mess up your image. 
* It's helpful to wear dark clothing so you don't show up in the image as you're moving around.

<a href="https://www.flickr.com/photos/jeffreywarren/6795586488/" title="Thermal flashlight diagram by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7209/6795586488_786a489c41.jpg" width="500" height="241" alt="Thermal flashlight diagram"></a>

### Building your own

**Parts list**
For a Thermal Flashlight with 3.6 V Melexis Sensor and Common Anode LED. 

* 1 [Melexis MLX90614](http://www.futureelectronics.com/en/technologies/semiconductors/analog/sensors/temperature/Pages/6314181-MLX90614ESF-DAA.aspx) non-contact IR thermometer (3v). 
Data sheet: <a href="http://www1.futureelectronics.com/doc/MELEXIS/MLX90614ESF-DAA.pdf">http://www1.futureelectronics.com/doc/MELEXIS/MLX90614ESF-DAA.pdf</a>
* 1 [common-anode RGB LED](http://www.sparkfun.com/products/10820)
* 2 4.7k Ohm resistors
* 2 100 Ohm resistors
* 1 180 Ohm resistor
* 1 0.1 μF capacitor
* wire
* [a breadboard](http://www.sparkfun.com/products/7916) or circuit board & soldering eqmt.
* [Arduino](http://arduino.cc)
* 9v battery and holder

**Software**

<a href="https://i.publiclab.org/system/images/photos/000/007/870/original/thermal-flashlight.zip"><i class="icon icon-file"></i> thermal-flashlight.zip</a>

Gist: https://gist.github.com/sdosemagen/1739961/

_Note: The goal of this file is to be a place to download everything without pursuing other links. If there are changes or updates please feel free to add and re-upload. If the file is missing anything, please comment below. You might notice that this is for the 5v Melexis, but it will work for either without issues.

Alternative variations of the Flashlight can be made with a 5.5V Melexis Sensor and Common Cathode LED. 
For the 5.5 V sensor follow this diagram: <a href="http://publiclaboratory.org/notes/sara/2-7-2012/circuit-diagram-5v-melexis-sensor">http://publiclaboratory.org/notes/sara/2-7-2012/circuit-diagram-5v-melexis-sensor</a>
For the common cathode circuit board follow this diagram: <a href="http://publiclaboratory.org/notes/warren/2-11-2012/common-cathode-variant-thermal-flashlight-code">http://publiclaboratory.org/notes/warren/2-11-2012/common-cathode-variant-thermal-flashlight-code</a>

<strong>Links to purchasing equipment:</strong>

### Consumable Parts

* LEDs (1 per flashlight, but they sell as a pack of 25): http://www.sparkfun.com/products/10818
* Arduino Uno (1 per flashlight): http://www.sparkfun.com/products/11021
* Capicator (1 per flashlight): http://www.sparkfun.com/products/8375
* Resistor pack (this pack has a 180 ohm resistor which we found other packs not to have): http://www.eio.com/p-19326-velleman-kres-e12-pack-of-610-e12-series-resistors.aspx
* 3.6 V infra red thermometer (1 per flashlight): http://www.futureelectronics.com/en/technologies/semiconductors/analog/sensors/temperature/Pages/6314181-MLX90614ESF-DAA.aspx. 
Data sheet: <a href="http://www1.futureelectronics.com/doc/MELEXIS/MLX90614ESF-DAA.pdf">http://www1.futureelectronics.com/doc/MELEXIS/MLX90614ESF-DAA.pdf</a>

If you are starting an electronics kit from scratch:

* a 40Watt soldering Iron (if you want it to be permanent otherwise duct tape or Velcro works temporarily)
* hookup wire (solid not stranded- 22 or 24 gauge, you can get this at Radio Shack)
* pliers called "wire strippers" to get the plastic wrap off the hookup wire (can get at Radio Shack)
* solder for 40Watt iron, lead-free.
* a breadboard (1 per flashlight). If you aren't soldering: http://www.adafruit.com/products/64. If you are soldering: https://www.adafruit.com/products/571.
* a USB cable to connect the arduino to the computer via USB for power 5Volts (can get at Radio Shack)
* household sponge for cleaning solder off tip
* 9 volt battery with connector wires (can get at Radio Shack- 1 per flashlight)

***Cost: ~$40-$60***

****

### Updates

All research on PublicLab.org about the thermal flashlight project:

[notes:thermal-flashlight]

****

Several meetups have been organized to build and test thermal flashlights, at RISD (Providence, RI) and in Brooklyn, NY. We are organizing one now in Somerville, MA:

* [Thermal Flashlight workshop](/wiki/thermal-flashlight-workshop)
* [May 26 AS220 workshop](http://publiclab.org/wiki/may-26th-as220-thermal-flashlight-workshop)
* [Thermal Fishing Bob presentation from NE barnraising](http://publiclab.org/notes/Kaya9804/06-09-2014/thermal-fishing-bob-presentation-from-the-ne-barnraising)

<img src="https://publiclab.org/sites/default/files/imagecache/default/Screen%20shot%202011-12-12%20at%2012.36.03%20AM.png" />

## Thermal flashlight heatmaps

<object width="500" height="375"> <param name="flashvars" value="offsite=true&lang=en-us&page_show_url=%2Fgroups%2Fthermal-flashlight%2Fpool%2Fshow%2F&page_show_back_url=%2Fgroups%2Fthermal-flashlight%2Fpool%2F&group_id=1802275@N25&jump_to=&start_index="></param> <param name="movie" value="https://www.flickr.com/apps/slideshow/show.swf?v=109615"></param> <param name="allowFullScreen" value="true"></param><embed type="application/x-shockwave-flash" src="https://www.flickr.com/apps/slideshow/show.swf?v=109615" allowFullScreen="true" flashvars="offsite=true&lang=en-us&page_show_url=%2Fgroups%2Fthermal-flashlight%2Fpool%2Fshow%2F&page_show_back_url=%2Fgroups%2Fthermal-flashlight%2Fpool%2F&group_id=1802275@N25&jump_to=&start_index=" width="500" height="375"></embed></object>

****


## Custom thermal flashlight circuit boards

Instead of building off of an #Arduino, it's possible to make a Thermal Flashlight using a custom circuit board. The circuit board files can be found here: https://github.com/Pioneer-Valley-Open-Science/thermal-flashlight

##Photos


[![IMG_0779.JPG](https://i.publiclab.org/system/images/photos/000/003/132/medium/IMG_0779.JPG)](https://i.publiclab.org/system/images/photos/000/003/132/original/IMG_0779.JPG)


[![IMG_0781.JPG](https://i.publiclab.org/system/images/photos/000/003/133/medium/IMG_0781.JPG)](https://i.publiclab.org/system/images/photos/000/003/133/original/IMG_0781.JPG)

