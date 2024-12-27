---
title: "Infrared behavior of A810"

tagnames: 'near-infrared-camera, spectrometer, vermont, infrared, leaffest, white-balance, infragram, histogram, led, leaffest2013, leds, a810, frosted-globe'
author: cfastie
path: /notes/cfastie/09-11-2013/infrared-behavior-of-a810.md
nid: 9313
uid: 554
cids: 6804,6808,6809,9663
---

![](https://publiclab.org/public/system/images/photos/000/001/476/original/NIRLED-226-29CU2.jpg)

# Infrared behavior of A810

by [cfastie](/profile/cfastie) | September 11, 2013 14:10

September 11, 2013 14:10 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [spectrometer](/tag/spectrometer), [vermont](/tag/vermont), [infrared](/tag/infrared), [leaffest](/tag/leaffest), [white-balance](/tag/white-balance), [infragram](/tag/infragram), [histogram](/tag/histogram), [led](/tag/led), [leaffest2013](/tag/leaffest2013), [leds](/tag/leds), [a810](/tag/a810), [frosted-globe](/tag/frosted-globe)

----

*Image above: NIR selfie. The NIR LED (foreground) is the only source of light. Taken with a modified Canon Powershot A495 with Wratten 87 filter. (ISO 400, 1.0 second at f/3.0)*

A big project at [LEAFFEST](http://publiclab.org/tag/leaffest2013) was to characterize the infrared response of Infragram cameras. Ideally, an Infragram camera will capture only infrared light in the red channel and capture no infrared light in the blue and green channels. Some cameras, especially those with CMOS instead of CCD sensors, behave differently, apparently because lots of near infrared (NIR) light is captured in the blue channel, although we have not explicitly demonstrated that. So a plan was hatched to take photos with potential Infragram cameras of light sources of known, narrow, wavelength bands and see which channels those wavelengths ended up in. Lots of different colored light emitting diodes (LEDs) were brought to LEAFFEST, and [Jeff characterized the emissions of several](http://publiclab.org/notes/warren/09-10-2013/spectra-of-sparkfun-multicolor-led-kit) with the new molded smartphone spectrometer.  

[![NIRLED-225-3.jpg](https://i.publiclab.org/system/images/photos/000/001/477/medium/NIRLED-225-3.jpg)](https://i.publiclab.org/system/images/photos/000/001/477/original/NIRLED-225-3.jpg)  
*NIR LED captured with an unmodified camera (Canon Powershot A495). Although the camera still has its IR block filter, some NIR light passes through it. This light is completely invisible to our eyes. (ISO 200, 1.0 second at f/3.0, Sunny WB preset)*  

Jeff had some LEDs that he said were NIR, but they had no other specification. I used [Ebert](http://publiclab.org/notes/cfastie/2-19-2013/ebert) to determine that these LEDs emit pure near infrared light between 900 and 1000 nm. So all of the histograms below are from photos illuminated with pure infrared light that is completely invisible to the naked eye. [Histograms are explained here](http://publiclab.org/notes/cfastie/06-13-2013/histograms).  

[![NIR_LED_spectrum700-1000b.jpg](https://i.publiclab.org/system/images/photos/000/001/478/medium/NIR_LED_spectrum700-1000b.jpg)](https://i.publiclab.org/system/images/photos/000/001/478/original/NIR_LED_spectrum700-1000b.jpg)  
*Spectral response of an NIR LED. All light emitted by these LEDs is longer than 900 nm. I didn't even know that consumer cameras were sensitive to those wavelengths, but Ebert using the Canon Powershot A810 with no IR block filter captured this. The upper (right) end of this band might be determined by the camera's sensitivity and not the LED's emission. White balance was set to fluorescent, which determined the relative brightness in each channel (colored lines).*  

To photograph the emission from the NIR LED, I held it inside a white frosted-glass lamp globe while pressing the two leads to either side of a 3 volt coin cell battery. The LED is directional, and the hot spot in the photos below is because I pointed the LED at that spot. This was done in a completely dark room.  

[![G11_BG3_light-on_228-26.jpg](https://i.publiclab.org/system/images/photos/000/001/479/medium/G11_BG3_light-on_228-26.jpg)](https://i.publiclab.org/system/images/photos/000/001/479/original/G11_BG3_light-on_228-26.jpg)  
*The white frosted-glass lamp globe. Photo taken by a Canon G11 with BG3 filter under tungsten light. The NIR emission from the LED is captured by the modified camera. (ISO 200, 1/6 second at f/2.8, desaturated photo)*  

Infrared light from the LED is captured in all three channels by the Canon A810. When the custom white balance preset that works well for Infragram photos was used, the histograms of the red and blue channels are well separated, with the red channel much brighter than (to the right of) the blue channel, a condition that has produced meaningful NDVI results in full spectrum light. Even the color of the photo resembles the yellow-orange hue of "good" Infragram photos. It is a surprise to see the same histogram pattern when **only pure NIR light** is involved. More NIR light was captured in the green channel than the blue channel (the x axis is essentially brightness). The basic pattern was the same whether the Rosco filter was in front of the lens or not, but the Rosco #74 filter required twice as much light to make a similar exposure.  


[![A810blueWBcompHist.jpg](https://i.publiclab.org/system/images/photos/000/001/480/large/A810blueWBcompHist.jpg)](https://i.publiclab.org/system/images/photos/000/001/480/original/A810blueWBcompHist.jpg)  
*Histograms for small areas (square marquees) of photos of the white globe with the NIR LED inside. Both photos were taken with the modified (no IR block filter) Canon A810 set on the custom white balance preset I have been using for Infragram photos (blue origami paper under blue sky in shade). For the top photo, a Rosco #74 filter was in front of the lens. For the bottom photo, no filter was used. (1.0 second at f/2.8; upper photo: ISO 200, lower photo: ISO 100)*   

When the camera's "Sunny" white balance preset is used, the photos are pinkish, just as they are when regular Infragram photos are taken with one of camera's white balance presets. This color is due to the similar brightness of the red and blue channels, which show little separation. In this case, we know that the blue  channel is as bright as the red channel because both have captured similar amounts of NIR light. As with the custom WB preset above, the same histogram pattern emerges with or without a Rosco infrablue filter, but about twice as much light is required to make a good exposure with the filter in place.  

[![A810sunWBcompHist.jpg](https://i.publiclab.org/system/images/photos/000/001/481/large/A810sunWBcompHist.jpg)](https://i.publiclab.org/system/images/photos/000/001/481/original/A810sunWBcompHist.jpg)  
*Histograms for small areas (square marquees) of photos of the white globe with the NIR LED inside. Both photos were taken with the modified (no IR block filter) Canon A810 set on the camera's "Sunny" white balance preset. For the top photo, a Rosco #74 filter was in front of the lens. For the bottom photo, no filter was used. (upper photo: ISO 200, 0.8 second at f/2.8; lower photo: ISO 100, 1.0 second at f/2.8)*   

I don't know what I expected from this exercise, but it was not this result. Lots of NIR light is being captured in all three channels of the A810, which has been producing meaningful Infragram NDVI images. When certain white balance settings are used, the camera captures much less NIR in the blue channel compared to the red, and that allows the photo to produce good NDVI results. Without such a white balance setting, the amount of NIR in both the red and blue channels is similar. Meaningful NDVI results might still be possible if the NIR signal in the blue channel is swamped with visible blue light, and visible red light is kept out of the red channel. This must be why good NDVI results are possible even when proper white balance settings are used and some NIR light is captured in the blue "visible light" channel. I guess.









