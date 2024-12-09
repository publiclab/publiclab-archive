---
title: Open-Lux
tagnames: thermal-photography, ndvi, infrared, thermal-flashlight, thermal-imaging, thermal-technology, infragram, mercury, test-strips
author: donblair
path: /notes/donblair/04-07-2014/open-lux.md
nid: 10274
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/003/535/original/open-lux-design.png)

# Open-Lux

by [donblair](../profile/donblair) April 07, 2014 17:53

April 07, 2014 17:53 | Tags: [thermal-photography](../tag/thermal-photography), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [thermal-flashlight](../tag/thermal-flashlight), [thermal-imaging](../tag/thermal-imaging), [thermal-technology](../tag/thermal-technology), [infragram](../tag/infragram), [mercury](../tag/mercury), [test-strips](../tag/test-strips)

----

Revision of a Thermal Flashlight prototype, with added RGB+NIR sensors.

## Previously ...

Public Lab's [Thermal Flashlight design](http://publiclab.org/wiki/thermal-camera) is intended to provide an accessible and engaging tool for identifying thermal leaks in a home or building. The design requires a bunch of bright, RGB LEDs, and a sensor that can detect thermal-band radiation.  When beginning to put together a prototype for the Thermal Flashlight, though, it became clear that simply adding a thermistor to the same device might also make the device useful for Public Lab's [Thermal Fishing bob] idea, in which one measures the temperature of water, and display that temperature visually with color.  This was what led to the configuration in the [Thermal Flashlight REV A](http://publiclab.org/notes/donblair/03-02-2014/thermal-flashlight-reva-first-tests) prototype.  Well, and then I kept a buzzer in there, too, because the entire prototype design I was using was based off Rui Wang's wearable computing [Square Wear](http://rayshobby.net/?page_id=2686) design, which had a buzzer.  (Gieger counter-like indications of temperature might be fun?)

## ... now, with added LUX!

Okay, so here's the updated version -- which I'm calling **"Open-Lux"** (we can always switch back to "Thermal Flashlight" -- read on to see why I'm considering a different name for this particular device): 

[![open-lux-osh-front.png](https://i.publiclab.org/system/images/photos/000/003/531/medium/open-lux-osh-front.png)](https://i.publiclab.org/system/images/photos/000/003/531/original/open-lux-osh-front.png)

[![open-lux-osh-back.png](https://i.publiclab.org/system/images/photos/000/003/536/medium/open-lux-osh-back.png)](https://i.publiclab.org/system/images/photos/000/003/536/original/open-lux-osh-back.png)

For those who don't aren't fluent in circuit board (I'm not), here's a rough depiction of the components of the design:

[![open-lux-design-full.png](https://i.publiclab.org/system/images/photos/000/003/537/medium/open-lux-design-full.png)](https://i.publiclab.org/system/images/photos/000/003/537/original/open-lux-design-full.png)

Changes from Thermal Flashlight REVA include:

- a switch to the Atmega 328P chip, and the use of VUSB to communicate over USB (more about this in a subsequent research note -- I promise).  

- now we're powering the LEDs directly from the battery, rather than via the microcontroller -- which means that they should be significantly brighter.  

So, no big deal.  But Open-Lux has two other interesting additions: 

- It's got an RGB sensor, the same one used on Adafruit's [RGB Color Sensor board](http://www.adafruit.com/products/1334?gclid=CN2H-p7qzr0CFcEdpQodlkQAeg):

[![rgb.jpg](https://i.publiclab.org/system/images/photos/000/003/532/medium/rgb.jpg)](https://i.publiclab.org/system/images/photos/000/003/532/original/rgb.jpg)

- It's got a 'White + NIR' sensor, the same one used on Adafruit's [Luminosity sensor board](http://www.adafruit.com/products/439) :

[![luminosity.jpg](https://i.publiclab.org/system/images/photos/000/003/533/medium/luminosity.jpg)](https://i.publiclab.org/system/images/photos/000/003/533/original/luminosity.jpg)

So, what could the Open-Lux be useful for?

- **Thermal Flashlight mode**. Write code that changes the LED colors / buzzer tone as a function of temperature sensed via the **IR sensor**.

-  **Thermal Fishing Bob mode**. Write code that changes the LED colors / buzzer tone as a function of temperature sensed by the **thermistor**. 

But now we've also got two sensors that ought to provide very *standard, factory-calibrated* way of measuring RGB and NIR light.  And they're situated between these very bright LEDs, which can also provide a "standard" illumination for whatever the RGB and NIR sensors are pointing at.

Here are some (hare brained?) ideas for how that could be useful:

- **Standardized test strip analysis.**  Make a light-tight box into which the Open-Lux fits, so that a test strip or film that indicates the presence of a chemical via color change can be analyzed in a standard way. Perhaps a cardboard box or 3D printed enclosure that accepts a hydrogen sulfide or mercury test strip, like one of these:

[![mercury_test_strips.jpg](https://i.publiclab.org/system/images/photos/000/003/541/medium/mercury_test_strips.jpg)](https://i.publiclab.org/system/images/photos/000/003/541/original/mercury_test_strips.jpg)

- **Surface albedo / NDVI-like measurements.**  Albedo would require adding another pair of sensors on the back of the board, so that we have two facing 'up at the sky' and two facing 'down at the ground'. 

- **Calibration of consumer webcams, digital cameras, and displays.** Perhaps this could be useful as a device for characterizing consumer camera sensors that are being considered for use as spectrometers or infragram-like devices?  E.g. make a light box and set up the camera and the Open-Lux side-by-side, pointing at the same materials; use the Open-Lux LEDs to illuminate the material, and compare the RGB and NIR results gotten from both devices .... 

(Several of the application ideas I mentioned above emerged out of great conversations with Mat Lippincott, Mary Martin, Chris Fastie, Ned Horning, Annette Schloss, and many others, and the simple technique for measuring surface albedo / NDVI was inspired by Rick Shory's [Green Logger](http://www.rickshory.com/greenlogger.htm) project.  If the ideas here are sensible, these folks ought to be credited; if the ideas don't make sense, it simply means I wasn't clever enough to follow their reasoning.)

Do any of these ideas make sense to y'all?  What else might an Open-Lux be useful for?

Oops!  I forgot to mention two other additions to the design:

- **Use as external sensor for a Raspberry Pi / Beagle Bone / laptop**. I've broken out RX / TX pins, so that the Open-Lux can be hooked up to e.g. a laptop or Raspberry Pi, as a sort of external sensor device.  This should allow for the creation of visualizations of data and control of the device using e.g. browser-based apps for analyzing samples.  (And: yes, we should mount the Open-Lux on a servo so that it can scan a room / across a sample and analyze temp / color / etc. Right?)

- **LCD display**. I've added a header for a [Nokia 5110 display](http://www.adafruit.com/products/338), mounted on the back of the device.  That way, the device can be used as a sort of 'stand alone light meter / thermometer', and you can see e.g. the actual RGB / NIR / temp values without having to connect to an external device. The display looks like this:

[![nokia.jpg](https://i.publiclab.org/system/images/photos/000/003/530/medium/nokia.jpg)](https://i.publiclab.org/system/images/photos/000/003/530/original/nokia.jpg)

Let me know what y'all think?  

Eagle design files are on github, [here](https://github.com/Pioneer-Valley-Open-Science/open-lux/tree/master/REVA).

## Update

I found a mistake in REVA, and while fixing it, I decided to add optional RGB and NIR sensors on the back of the board, too, so that we can more easily measure surface albedo:

[![open-lux-REVB-osh-back.png](https://i.publiclab.org/system/images/photos/000/003/553/medium/open-lux-REVB-osh-back.png)](https://i.publiclab.org/system/images/photos/000/003/553/original/open-lux-REVB-osh-back.png)

The revised Eagle files (I'm callling it REVB now) are [here](https://github.com/Pioneer-Valley-Open-Science/open-lux/tree/master/REVB). 