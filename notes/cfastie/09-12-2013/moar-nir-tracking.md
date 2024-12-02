---
nid: 9316
title: Moar NIR tracking
path: public/static/notes/cfastie/09-12-2013/moar-nir-tracking.md
uid: 554
tagnames: near-infrared-camera,vermont,infrared,leaffest,infragram,histogram,led,leaffest2013,frosted-globe
---

# Moar NIR tracking

*Image above: An NIR LED under tungsten light. The faint purple glow of the LED can be discerned in this photo from an unmodified camera (Powershot A495, ISO 200, 1/4 second, f 3.0).*  

Here is the response of a couple more cameras to an NIR LED. The same [setup described here](http://publiclab.org/notes/cfastie/09-11-2013/infrared-behavior-of-a810) is used. The cameras tested are an unmodified Canon Powershot A495, and a Canon Powershot G11 modified by Lifepixel with a Schott BG3 filter replacing the IR block filter.

[![A495IRcutHist.jpg](https://i.publiclab.org/system/images/photos/000/001/494/large/A495IRcutHist.jpg)](https://i.publiclab.org/system/images/photos/000/001/494/original/A495IRcutHist.jpg)  
*Histograms for small areas (square marquees) of photos of an NIR LED in a dark room. Both photos were taken with an unmodified Canon A495. The camera's IR block filter was in place, so it was not very sensitive to NIR. The LED is casting its glow onto the white frosted-glass globe.  The camera's "Sunny" white balance preset was used for the top photo, and the "Fluorescent" preset for the bottom photo. (both: ISO 200, 1.0 second at f/3.0)*    


[![G11_WBhist.jpg](https://i.publiclab.org/system/images/photos/000/001/495/large/G11_WBhist.jpg)](https://i.publiclab.org/system/images/photos/000/001/495/original/G11_WBhist.jpg)  
*Histograms for small areas (square marquees) of photos of a white frosted-glass globe with an NIR LED inside. All photos were taken with a modified Canon G11 with a Schott BG3 filter. The camera's "Sunny" white balance preset was used for the top photo, and custom white balance presets on a gray card (in sun) or blue fabric (in shade) were used for the others (these custom white balances were done outside, not with the NIR LED). (all: ISO 200, 0.5 to 0.8 second at f/2.8)*    

The results here are consistent with the conclusion that the standard white balance presets in Powershots are all very similar, but a custom white balance can dramatically change the relative amount of light in the three color channels of a photo. These results also support the idea that flooding the sensor with blue light while performing a custom white balance reduces the amount of NIR (and visible blue) light that will be assigned to the blue channel. 

[Histograms are explained here](http://publiclab.org/notes/cfastie/06-13-2013/histograms).
