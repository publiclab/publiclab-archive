---
title: "Infragram convertible cameras"\ntagnames: 'near-infrared-camera, conversion, filter, infragram, parent:infragram, 74'
author: warren
path: /wiki/infragram-convertible-cameras.md
nid: 7823
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/009/704/original/Canon_IXUS_40_medium.JPG)

# Infragram convertible cameras

by [warren](../profile/warren), [jenjimah](../profile/jenjimah), [cfastie](../profile/cfastie), [cindy_excites](../profile/cindy_excites), [funkycbj](../profile/funkycbj), [SWeedenWright](../profile/SWeedenWright), [limon93](../profile/limon93), [arsenix](../profile/arsenix), [davidminn](../profile/davidminn), [carlozousa](../profile/carlozousa), [allie01](../profile/allie01), [AerieWorks](../profile/AerieWorks), [ajchavar](../profile/ajchavar), [Korartiz](../profile/Korartiz), [gpenzo](../profile/gpenzo), [Chernabog](../profile/Chernabog), [danbeavers](../profile/danbeavers), [carllipo](../profile/carllipo)

May 22, 2013 19:11 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [conversion](../tag/conversion), [filter](../tag/filter), [infragram](../tag/infragram), [parent:infragram](../tag/parent:infragram), [74](../tag/74)

----

A page listing cameras which can be [converted for near-infrared](/wiki/near-infrared-camera), and requests for photos/documentation of cameras to be converted.

## Overview

Converting a camera for use as an [Infragram camera](/wiki/infragram) for taking [NDVI images](/wiki/ndvi) typically involves:

1. removing the infrared blocking filter that's in most cameras
2. installing a filter to block visible light from one color channel, making that available for infrared

This makes the camera into a **multispectral camera** -- capable of taking an infrared photo and a visible light photo at the same time. 

See [Single of double camera](http://#Single+or+double+camera), below, for alternative techniques.

![removing filter](/system/images/photos/000/001/170/medium/converting.png)

## Single or double camera

There are two main ways to make Do-It-Yourself [NDVI photos](/wiki/ndvi) -- using one or two cameras.

**Dual camera techniques** involve using a pair of cameras, one for near-infrared and one for visible light. The two images can be well separated, with no visible light leaking into the infrared image or vice versa. But the two must be taken simultaneously, from exactly the same angle, and the images must be aligned before [producing NDVI](/wiki/infrared-software). 

**Single camera techniques** like those of the kits in the [Public Lab Store](https://store.publiclab.org/collections/diy-infrared-photography) use different color channels of a camera to record near-infrared light and visible light at the same time, in different color channels of the same image. This means no alignment of 2 images is needed (see above) and no synchronizing. But there can be some light leakage between channels, depending on the camera, the overall light level, and the filters used, making the NDVI values more muddled. 

****


## Filter color

Newly installed DIY filters may be red (most commonly) or blue, or made from exposed film negative (to block all visible light and allow only infrared). 

A red filter (the most common conversion we see on Public Lab as of October 2017) results in vegetation appearing pale blue, and a blue filter typically results in vegetation appearing pale yellow. 

_Left: pale blue from a RED filter; Right: pale yellow from a BLUE filter. Images by @mathew and [Eclectis students](https://publiclab.org/n/9372)_

![](/system/images/photos/000/018/533/thumb/Rosco_26_filtered.JPG) ![](https://i.publiclab.org/system/images/photos/000/001/647/thumb/IMG_0025.JPG)

Read more about filter choice at the [Infragram filters page](/wiki/infragram-filters)

****

## Questions

[infrared-camera-conversion](../../tag/question:infrared-camera-conversion)


****

## Activities

While this page has accumulated a great list of cameras, we're hoping to provide more step-by-step activity guides to converting specific cameras, with photos. If you can share a conversion process you've successfully worked on, consider posting it as an activity:

[infrared-camera-conversion](../../tag/activity:infrared-camera-conversion)

****

# Cameras

Here's a list of cameras organized by how easy they were to convert and how well the conversion worked:

## Excellent

Cameras which are easy to convert and work well:

* [Mobius ActionCam](http://publiclab.org/notes/cfastie/04-22-2014/mobius-ir-conversion) The Mobius is very easy to open, and it's very easy to expose the IR block filter. But the filter is glued on and must be broken into shards to remove. This camera works well with a red filter, and a [custom white balance](/wiki/infragram-point-shoot)
* [Toshiba Camileo S10](http://publiclab.org/notes/limon93/02-26-2015/toshiba-camileo-s10-infragram-conversion) - Very easy to open, the lens are fixed by two metal hooks, it's sufficient to remove them to get to the filter, take care of the screw in the hole for tripod mounting when disassembling.

### Canon

Canons usually convert easily and are a favorite:

* [Canon A480](http://publiclab.org/notes/Chernabog/01-28-2014/canon-a480-nir-conversion) - Almost the same as the A490, but watch out for the springs!  
* Canon A490 or A495 ([see conversion on YouTube](https://www.youtube.com/watch?feature=player_embedded&v=XFOHWaL7XsM)) or [below](#Videos) (~$50, 10 megapixel).  
* [Canon A2200](http://publiclab.org/notes/nedhorning/9-25-2012/canon-a2200-nir-conversion)  A lightweight (135 g) camera with features typical for small PowerShots.  After the back shell is removed, the LCD assembly (LCD plus plate) must be detached and removed completely to expose the sensor plate. The buttons on the back of the camera have an internal button pad with a ribbon cable. Note how that ribbon cable is threaded around things before you move those things.  To detach the LCD assembly, four screws must be removed and one ribbon cable connector (at upper right under the button pad ribbon cable) must be disconnected.This ribbon cable connector has a clamp and is not too hard to open and close. After the IR filter has been removed (and replaced) the LCD assembly can be replaced, the ribbon cable connector reconnected, and one of the four screws replaced, and then the camera can be powered on to check focus. At this point, adjusting focus with the three sensor plate screws  requires removing one screw, opening the ribbon cable connector, and removing the LCD assembly.
* [Canon A1200](http://publiclab.org/notes/patcoyle/11-6-2012/canon-a1200-ir-conversion-november-2-4-2012-plots-barnraising-cocodrie-la-l): This might be the easiest to convert of the 11 Powershot models I have tried. So easy I opened it up 10 different times to adjust the focus just right.
* Canon A1300. Virtually the same procedure as with the A1200 above.
* Canon A1400. Similar to the A1200. Very easy to convert. It's easy to power up the camera to check focus without reassembling very much.
* Canon A800 It was really straight forward like the other cameras.
* [Canon A810:](http://publiclab.org/notes/cfastie/04-20-2013/superblue) ([Here's an instructable specific to the A810](http://www.instructables.com/id/Infrared-Camera-Mod/)): The IR block filter removal went smoothly and was successful even though I had never opened up a camera before. Its 16 megapixels is more than you really need.
    * [another A810 conversion](https://publiclab.org/notes/ikerluna/10-22-2013/bio-ceramic-system)
* Canon A2500. Straightforward like the other cameras. Only you need to flip the LCD (which is held by a piece of tape). Behind the LCD there are 4 screw you need to loose. The rest is simple.
* Canon A2500. Different experience than above. Similar to A2400. LCD is held by screws not tape. There is a tricky screw that holds in the LCD tray under the ON/OFF button. It must be removed to access the CCD.
* Canon A4000 IS - The camera is very tightly built but not hard to open and convert, and works well with Rosco #74 filters. ([Step by step tutorial on converting](http://hardtechlife.com/near-infrared-conversion-on-a-canon-a4000-is-hd-camera/) Some additional notes below as well )
* Canon powershot IXUS 40 - very few screws, very easy to open, no ribbons to dislodge - the only tricky part is getting the filter out because it is glued in - but only on two sides. I used a fine needle to loosen the glue and release the filter:
[![Canon_IXUS_40_medium.JPG](https://i.publiclab.org/system/images/photos/000/009/704/original/Canon_IXUS_40_medium.JPG)](https://i.publiclab.org/system/images/photos/000/009/704/original/Canon_IXUS_40_medium.JPG)

* Canon S95.   A high-end model with f/2, 28 mm (equiv) lens, 1/1.7" CCD sensor, DIGIC 4 processor, and aluminum body. Weight is 195 g.  A very easy conversion to do. Seven identical screws remove the rear shell, and removing just one internal screw allows the LCD to be lifted up exposing the sensor. It's tricky to learn how to release the metal tabs holding the LCD in place. The LCD is attached by two ribbon cables, so I propped it vertically with tape while working:  
[![S95Convert-512-7.jpg](https://i.publiclab.org/system/images/photos/000/006/969/medium/S95Convert-512-7.jpg)](https://i.publiclab.org/system/images/photos/000/006/969/original/S95Convert-512-7.jpg)  
The sensor plate is held away from the lens with three springs (which can fall out), so mark the screws before unscrewing and count the turns so you know how to return them to the same position. The IR block filter measured 10.2 x 8.4 mm. After the sensor plate and the one screw holding the LCD in place has been replaced, the camera can be powered on to take photos to check focus. This is important because I had to adjust the sensor screws several times to get good focus again, and only one screw must be removed to access the sensor screws between tests.
* Canon S100.  A high-end model with f/2, 24 mm (equiv) lens, 1/1.7" CMOS sensor, GPS, and DIGIC 5 processor (most Powershots on this list have none of these features). Body is aluminum and weight is 198 g. The general construction of this camera is very similar to that of the S95. A very easy conversion to do. Seven screws remove the rear shell, and removing just one internal screw and a slim metal band allows the LCD to be lifted up exposing the sensor. It's tricky to learn how to release the metal tabs holding the LCD in place. The LCD is attached by two ribbon cables, and to protect them I propped the LCD vertically with tape while working:   
.  
[![S100Convert-513-10.jpg](https://i.publiclab.org/system/images/photos/000/007/039/medium/S100Convert-513-10.jpg)](https://i.publiclab.org/system/images/photos/000/007/039/original/S100Convert-513-10.jpg)  
.  
The CMOS sensor plate is large compared to CCD cameras, and has hard glue not only on the three screws but in two other places. The internal IR block filter is held in place under a rubber gasket.  The sensor plate rests on four rubber posts arising from this gasket, and the posts are compressed when the plate is screwed down (in other models springs do this), so mark the screws before unscrewing and count the turns so you know how to return them to the same position.  Sometimes a washer is used as a spacer under the sensor on one or two of the three sensor screws. Watch for these and replace them.The IR block filter measured 10.2 x 8.4 mm and is easily replaced with polyester or gelatin.  After the sensor plate and the one screw holding the LCD in place has been replaced, the camera can be powered on to take photos to check focus. This is important because fine adjustments of the sensor plate screws can improve focus, and only one screw must be removed to access the sensor screws between tests.
* Canon Elph 130IS - see this fantastic [tutorial video on converting a Canon Elph 130IS camera](#Canon+Elph+130IS) by Dennis Baldwin. Note that the IR block filter and replacement Infragram filter are shown on top of the rubber gasket. The rubber gasket must be removed to access the IR block filter, and the new filter must be installed under this gasket, not on top of it. 
* list cameras here [edit]

### Generic brand mini-cameras

These typically have 720p or 1080p sensors and sometimes come with waterproof cases. 

* [several examples here](/notes/warren/06-19-2013/small-camera-conversion-tests) have been very easy conversions, but have **not** worked well for infrablue photos, due to the blue channel leaking infrared light. We're currently looking for cameras with better characteristics.

### Webcams

* [Logitech C270](http://publiclab.org/notes/joshmc/10-12-2012/webcam-conversion-near-infrared) - This camera no longer has a removable IF filter, it has a coated IF filter. Therefore you cannot change the filter.
* [SYBA CAM63014](http://publiclab.org/wiki/dsk#Unscrew+the+lens+and+remove+the+infrared+filter) (shows removal, but not filter placement, but that's an easy next step)
* [Creative Notebook Live webcam](http://publiclab.org/wiki/webcam-filter-removal)
* [Sanm webcam module](http://publiclaboratory.org/notes/mathew/3-18-2013/sanm-camera-board-spectrometer-kit): Really easy except that the lens is tiny. Suffers from blue/infrared leakage.
* [Microsoft LifeCam Cinema HD](http://ghonis2.ho8.com/lifecam/lifecam1.html) (external site)
* list any additional cameras here [edit]

****

## Acceptable

Cameras which **can be converted** although it may not be ideal (please state why!)

* Canon A590. An old model (2008) with lots of features appropriate for aerial photography (shutter priority, manual focus, filter mounting bracket, 8 MP, 2 AA, $30 on ebay). Four ribbon cables must be unplugged (one of them is a real challenge to connect again), and 17 screws must be removed to reach the sensor. So it is not the easiest conversion to do, but the photos are pretty sharp with no filter replacing the removed IR cut filter or with a Wratten 25A gel or Wratten 87 polyester filter installed. The sensor is held in place by springs, so mark the three final screws before unscrewing them so you can screw them back in the same number of rotations. The IR cut filter is 8 x 9 x 0.36 mm.  The 10th hardest of the 11 Powershot models I have tried to convert. Four for four success rate.
* Canon A2300.  A very lightweight (125 g) camera with typical features for small, recent PowerShots (16 MP, 28–140 mm f/2.8 lens, NB-11L battery, 1/2.3" CCD sensor). Opening the camera to replace the IR block filter suffers from the same problems as the Canon A4000 (and apparently the A2400). Both the front and back of the case must be removed and the top button assembly must be loosened, so the camera gets mostly disassembled. The LCD is stuck on with a hidden adhesive pad, so you have to blindly pry it up from the end opposite its ribbon cable.There is a metal plate between the LCD and the sensor which must be removed. In order to access one of the screws, one ribbon cable (to the flash) must be disconnected (it has a latch and is easy to reconnect). Six external and nine internal screws must be removed to access the three screws holding the sensor plate. There are no springs under the sensor plate. It took me four hours, and is probably the ninth hardest of the 11 PowerShot models I have tried to convert. After replacing the filter and most of the internal screws, the camera can be powered on to take photos to check focus (for distant subjects as in aerial work). The three sensor screws can be accessed for adjustment by lifting the LCD and without removing any screws, so focus can be checked repeatedly until it is acceptable, and then the camera can be reassembled.
* Canon A4000. A very nice lightweight (145 g) camera with 16 MP, 28-224mm (equiv) zoom, DIGIC 4 processor, and an NB-11L battery pack. Both the front and back of the case must be removed and the top button assembly must be loosened, so the camera gets mostly disassembled. One ribbon cable (to the flash) must be disconnected (it has a latch and is easy to reconnect). There are 17 screws of four different sizes to remove and some of them were extremely tight. The LCD is stuck on with a hidden adhesive pad, so you have to blindly pry it up from the end opposite its ribbon cable. The IR cut filter is 8 x 9 x 0.36 mm.  The eighth hardest of the 11 Powershot models I have tried to convert. The third time I opened one up, I almost finished in one hour. The A2300 and A2400 is similar but others have had a hard time with the A2400 because additional ribbon cables came unplugged accidentally (see below).
* Olympus FE-4020 - Very easy to convert to infrablue. A major plus: no ribbon cables had to be removed like in the Canons. However infrablue photos don't work because there is no option to create a custom white balance.

### Smartphones

Extra difficult, but could be very exciting to have a smartphone that can do this!

* http://www.eigenimaging.com/DIY/NexusDYI - for a Galaxy Nexus (Android) phone

### Difficult cameras to convert

* Canon Powershot A470: I had this camera lying around and saw that there were no instructions on this model for conversion (however I found instructions for the Powershot A460 and A480). I thought to convert this and upload instructions. After opening up the camera I found that there is probably a reason no one has tried to convert this camera! It is not impossible, however, likely more hassle than it is worth to convert. There is a circuit board located above the sensor and just below the screen. This board has several ribbon cables and many more soldered wires making access to the sensor difficult at best. I would suggest just investing in the Canon Powershot A490 (you can get one ~$50 used online, see above) which has a nice video and is fairly easy to convert.
* Canon Powershot SX120 IS: This camera has full manual controls and a 360 mm (eqiv.) zoom lens. The goal was to take infrablue Gigapans. One ribbon cable must be unplugged, but it's pretty easy. Twenty-five screws must be accessed from the outside or back, as usual, but two deep internal screws must be accessed from the front, so the entire camera must be disassembled (31 screws total). The IR block filter is under a plate which is attached to the front of the sensor with two screws. While removing the filter, it touched the sensor.  The reassembled camera worked fine, but there was a blotch where the sensor is damaged (see image). So I bought a new sensor ($13 ebay), but after three adjustments (one hour each) the focus was still unacceptable. It would be hard to install a film or polyester filter instead of the IR block filter -- it would not stay in place unless you glue it first.  The hardest of the 11 Powershot models I have tried to convert.  
* I [carlozousa] tried this on a powershot sx120, but to my avail, it doesn't turn on after the re-assembley. Disassembled and reassembley a second time and still nothing. Ran out of ideas.  
.  
[![SX120convert.jpg](https://i.publiclab.org/system/images/photos/000/000/516/thumb/SX120convert.jpg)](https://i.publiclab.org/system/images/photos/000/000/516/medium/SX120convert.jpg)  
*Guide to most of the screws to get to the IR block filter in a Canon SX120. Note damage to sensor (photo taken by reassembled camera).*   
.  
* Canon PowerShot A2400: [conversion tutorial here](/notes/jbest/11-06-2013/canon-a2400-ir-conversion) - very difficult one due to the ribbon cables coming unclamped repeatedly; some have reported only a 66% success rate. This camera is constructed just like the A4000 which was listed above under "acceptable."
* [Canon Digital Rebel](http://ghonis2.ho8.com/rebelmod450d1.html) (various, external site, very involved)

* Fujifilm Finepix HS10: Very difficult camera to convert, but once finished, I'd say it's well worth the effort. It's a "bridge" camera with 30x optical zoom, basically a digicam with the look and feel of a DSLR (lots of useful settings too). Once the hotfilter was replaced with a piece of clear microscope slide, the camera will record VIS + IR so the waveband can customized easily with standard screw-on 58mm filters. The difficulty was in elaborate disassembly to access the sensor, which is built in to the back of the lens and requires soldering/desoldering wires to access it. 
STEPS: 1) 14 screws and 1 ribbon removal for the hot shoe and housing. 2) 5 more screws for the circuit board cover 3) discharge the capacitor. Careful! 4) 4+ more ribbons to unclip 5) Desolder 4 wires and remove 2 screws to flip up the circuit board 5) 4 screws to release the lens 6) 7+ screws and careful fiddling to get the sensor unit out 7) slicing off the hotfilter with a razor blade, replacing with a microscope slide 8) reassembly includes getting 3 teensy springs back in place in front of the sensor unit, resoldering the 4 wires, not losing any parts!

* list cameras here [edit]

## Requests

Cameras which have not yet been converted -- if you've done it, please move it up!

* [BOSCAM HD19](http://www.omgfly.com/index.php?main_page=product_info&products_id=837)
* [Samsung NV24HD](http://www.amazon.com/Samsung-NV24HD-Digital-Optical-Stabilization/dp/B001283GIM) I have one of these (several years old) that I plan on trying to convert when my kit comes! It has a very sharp lens and decent sensor so hoping it all goes well! If anyone else has tried a conversion with this camera please post about it!

## Videos

This video, listed above, shows the **removal** of a filter on a Canon A495, but then shows a film negative filter taped to the front. For Infragram conversions, we recommend you put the Infragram filter **inside the camera** -- exactly where the IR-block filter used to be.

<iframe width="640" height="480" src="https://www.youtube.com/embed/XFOHWaL7XsM" frameborder="0" allowfullscreen></iframe>

## Focus

Some people report blurry photos after installing a new filter. Some of these people have been able to fix this by adjusting the screws which hold the sensor down. It's possible that the rubber gasket under the sensor has been shifted and has prevented the sensor from properly screwing in. In some cameras the sensor is held a particular distance from the lens by springs or rubber posts (part of the rubber gasket), so the screws must be turned in exactly the same amount as they were at the factory. Marking the screw positions before unscrewing them and counting the turns during removal can help return them to the proper position. Camera models that are easy to disassemble can be opened repeatedly to make adjustments to those final screws, and some cameras allow access to those screws without doing the complete disassembly. A few models allow the camera to be powered on before it is completely reassembled to check for focus (take it outside and capture a landscape shot to check of distant focus near the frame edges).

After conversion to NIR, a camera will generally produce slightly blurrier photos. At least three factors can contribute to this:

1. The filter material (film, plastic, or gel) is inferior to glass as an optical element. 
2. Infrared light is refracted by the lens less than visible light, which cameras are designed to focus. After conversion, the edges of photos often display chromatic aberration in which colored "ghosts" of objects are visible near the frame edges. 
3. When a new filter replaces the IR block filter, that filter usually transmits less light, so exposures have to be longer, ISO has to be higher, or the aperture has to be wider. All three of these things can make photos less sharp, and finding a compromise among them is important.  

If you critically examine the resolution of a photo from a converted camera, be sure to compare it with photos from that camera before it was converted. The inexpensive cameras that are commonly converted often exhibit surprisingly soft focus around the edges when the subject is far away. This effect should not be blamed on the conversion.

Read more about this and peoples' solutions here: https://groups.google.com/forum/#!searchin/plots-infrared/blurry/plots-infrared/cqX3zqfzes8/LPGeGuCMwuQJ and here: https://groups.google.com/forum/#!topic/grassrootsmapping/wjQd2Twq_pY, and here:http://publiclab.org/notes/cfastie/11-07-2013/focus-on-filters#comments.

## Spots  

If a speck of dust adheres to the sensor while it is exposed, a spot will appear on photos. This spot is often inconspicuous unless a clear surface or sky is the background. To check for spots after a conversion, take several photos of the sky and look for a blurry spot. To avoid spots, use canned air to remove dust before exposing the sensor and just before replacing it.  Check the surface of the sensor for specks just before replacing it.

### Canon Elph 130IS

<iframe width="640" height="360" src="//www.youtube.com/embed/lgBNznwiMJQ?rel=0" frameborder="0" allowfullscreen></iframe>

_Video by Dennis Baldwin_  
There seem to be two misleading things in this video. The original IR block filter is shown on top of the rubber gasket and the replacement filter is shown being installed on top of this gasket. That position allows the filter to bounce around and knock against the sensor which could be damaging. The filters should be "under" the rubber gasket, between the gasket and the lens. Also, the photos from the converted camera were apparently taken with one of the standard preset white balance settings. With the common filters used in single camera NDVI systems, a custom white balance must be done in order to get meaningful NDVI results.