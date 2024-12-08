---
title: White balance for all
tagnames: near-infrared-camera, vermont, white-balance, infragram, list:plots-infrared, infrablue, led, ccd, response:8900, bg3, wratten25a, super-red, activity:white-balance
author: cfastie
path: /notes/cfastie/11-22-2013/white-balance-for-all.md
nid: 9816
uid: 554

---

# White balance for all

by [cfastie](../profile/cfastie) November 22, 2013 19:04

November 22, 2013 19:04 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [vermont](../tag/vermont), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [list:plots-infrared](../tag/list:plots-infrared), [infrablue](../tag/infrablue), [led](../tag/led), [ccd](../tag/ccd), [response:8900](../tag/response:8900), [bg3](../tag/bg3), [wratten25a](../tag/wratten25a), [super-red](../tag/super-red), [activity:white-balance](../tag/activity:white-balance)

I have been doing a custom white balance on my CCD Powershot Infragram cameras by [filling the frame with a piece of origami paper as I press the designated button](http://publiclab.org/wiki/infrablue-white-balance). It works great to get the resulting NDVI into the right ballpark. But I'm the only one with that particular origami paper, so we were looking for a standardized white balance protocol that anyone could do. Ned had some colored LEDs, so we tried using an individual narrow band LED as the only source of light during the white balance procedure. The LEDs cost less than a US dollar and are available online. Here are the ones we used:

- Basic Red: 620-625 nm https://www.sparkfun.com/products/9590
- Super Bright Blue: 465-467.5 nm   https://www.sparkfun.com/products/529

The red LED was used to white balance the Canon A2200 with the IR block filter replaced with a Wratten 25A filter. The blue LED was used to white balance a Canon A2200 with the IR block filter replaced with a glass BG3 filter. We tried two procedures for each in a dark room:

- First we illuminated a spot on cheap white printer paper and pointed the camera at that. The colored spot did not fill the frame during the white balance procedure, but it could have had we moved the camera closer. 
- Then we put the LED inside a frosted glass globe. The color field filled the frame, although it was brighter near the center, especially with the bright blue LED.

We compared results with white balance done with blue origami paper under blue sky in the shade (BG3 camera) or red origami paper in direct sunlight (Wratten 25A camera).

We took test photos of a scene including lawn, young winter rye, an orange pumpkin, a gray stone, bare wood, dry oak leaves, and some dying plant parts. The false color IR images below were made in Photoshop by swapping various color channels and making other adjustments. The NDVI images were made in Ned's Fiji plugin by using the red and blue (Wratten 25A) or blue and red (BG3) channels to represent visible and NIR light, respectively. Both histograms were stretched (parameter=5) but no other adjustments were made.
.
  

[![LEDRGB-283-2.jpg](https://i.publiclab.org/system/images/photos/000/002/296/medium/LEDRGB-283-2.jpg)](https://i.publiclab.org/system/images/photos/000/002/296/original/LEDRGB-283-2.jpg)  
*The red LED illuminating white paper.*  
.  
  

[![LEDRGB-283.jpg](https://i.publiclab.org/system/images/photos/000/002/297/medium/LEDRGB-283.jpg)](https://i.publiclab.org/system/images/photos/000/002/297/original/LEDRGB-283.jpg)  
*The spot on paper illuminated by a blue LED.*  
.  
  

[![LEDRGB-283-14.jpg](https://i.publiclab.org/system/images/photos/000/002/298/medium/LEDRGB-283-14.jpg)](https://i.publiclab.org/system/images/photos/000/002/298/original/LEDRGB-283-14.jpg)  
*The test scene. Lawn is to the left, winter rye to the right.*  
.  
  

[![WartLED6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/299/large/WartLED6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/299/original/WartLED6pan2k.jpg)  
*Photos, false color IR images, and NDVI after white balance on **LED illuminated paper**.  Upper row: Wratten 25A. Lower row: Schott BG3.*  
.  
  

[![LEDRGB-283-17.jpg](https://i.publiclab.org/system/images/photos/000/002/300/medium/LEDRGB-283-17.jpg)](https://i.publiclab.org/system/images/photos/000/002/300/original/LEDRGB-283-17.jpg)  
*The frosted globe illuminated from inside with a red LED.*  
.  

[![LEDGlobe6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/301/large/LEDGlobe6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/301/original/LEDGlobe6pan2k.jpg)  
*Photos, false color IR images, and NDVI after white balance on a **frosted globe illuminated from inside with an LED**. Upper row: Wratten 25A. Lower row: Schott BG3.*   
.  
  

[![LEDRGB-283-31.jpg](https://i.publiclab.org/system/images/photos/000/002/302/medium/LEDRGB-283-31.jpg)](https://i.publiclab.org/system/images/photos/000/002/302/original/LEDRGB-283-31.jpg)  
*The test scene for the origami paper tests below. The first scene got shaded while we discussed important things, so everything had to be moved back into the sun.*  
.  
  


[![WartOrigNDVI6pan2k.jpg](https://i.publiclab.org/system/images/photos/000/002/303/large/WartOrigNDVI6pan2k.jpg)](https://i.publiclab.org/system/images/photos/000/002/303/original/WartOrigNDVI6pan2k.jpg)  
*Photos, false color IR images, and NDVI after white balance on either red (upper) or blue (lower) **origami paper**.  Upper row: Wratten 25A. Lower row: Schott BG3.*   
.  
  
**Conclusions:**

- Either method of using LEDs for white balance produces results very similar to those using origami paper. The BG3 photos straight from the camera are a little redder with LEDs vs origami paper, but the false color and NDVI images are similar.
- Among the BG3 NDVI images, wood and stone were more clearly differentiated from plants when the camera was white balanced with origami paper.
- It appears that using LEDs might be a good way to standardize the white balance procedure. Anybody can purchase identical or similar LEDs very inexpensively.
- White balance no longer must depend on having a sunny day. 
- This will have to be tested for CMOS Powershots which do not behave the same as CCD cameras.

**Other observations:**

- False color IR images from the Wratten 25A (red filter) camera are a little better than those from the BG3 (blue filter) camera at discriminating between plant and non-plant. However, I have learned some Photoshop tricks for making them look similar.
- NDVI images from the Wratten 25A (red filter) camera are a little better than those from the BG3 (blue filter) camera at discriminating between plant and non-plant.
- Orange pumpkins always look like green plants to the BG3 (blue filter) camera because pigments in the pumpkins are absorbing at the blue end of the spectrum where the BG3 camera gets its visible light data.














