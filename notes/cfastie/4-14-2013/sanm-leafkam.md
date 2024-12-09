---
title: 'Sanm LeafKam'
tagnames: near-infrared-camera, nrg, ndvi, nir, vermont, infrared-camera, infragram, plant-health, development
author: cfastie
path: /notes/cfastie/4-14-2013/sanm-leafkam.md
nid: 6817
uid: 554

---

![](https://publiclab.org/sites/default/files/Sanm-201335008.jpg)

# Sanm LeafKam

by [cfastie](../profile/cfastie) April 14, 2013 04:18

April 14, 2013 04:18 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [nir](../tag/nir), [vermont](../tag/vermont), [infrared-camera](../tag/infrared-camera), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [development](../tag/development)

----

<em> Top image: The distance between the lens centers is only 8 mm which reduces parallax errors. Gallery images from left: the setup, NIR photo, RGB photo, NRG image, NDVI image.</em>

Mathew tried out a tiny [laptop camera module](http://www.aliexpress.com/store/product/2-0-megapixel-USB2-0-Camera-Module-HM2050-cmos-board-camera-with-LED-indicator/404311_663037480.html) in a new design for the Public Lab spectrometer, and [his note about it](http://publiclaboratory.org/notes/mathew/3-18-2013/sanm-camera-board-spectrometer-kit) made me think that such cameras might work well in a new design for the Public Lab infrared camera. The printed circuit board the camera is mounted on is so narrow that two cameras can be put side by side with their lens centers only 8 mm apart. This reduces parallax error and allows close-up photography, or at least closer than most two-camera systems. Two cameras arrived a few days ago from China with a customs label that seems to declare the value at $8, even though I paid $28 for them. So I guess most of the price is for the 'free' shipping from Hong Kong.

Mathew's note made it easy to solder USB cables to the supplied connectors.  Converting one camera to infrared required unscrewing the lens (I chipped away some glue first) and popping off the IR-block filter. That filter was loose, and not at all perpendicular to the lens axis. But precision image quality is not the strong suit of this camera, especially after I dripped glue on the back of the lens and then scratched the glass cleaning up the glue.  This was during the process of adding an IR-pass filter to replace the crooked IR-block filter. The first black film I came across was color slide film, not print film.  Most Public Lab infrared cameras use exposed, developed, color negative film, but __UN__exposed, developed, color positive film has the same characteristics, so I cut a teeny disc of that and glued it over the smeared, scratched rear element of the lens.  Some of the work I do is not this sloppy, but that lens is _TINY_, and I could hardly see what I was doing. It might make more sense to add the filter in front of the lens which would be easier. If anyone breaks one of these cameras without trashing the lens, let's talk.

I mounted both cameras solidly on a scrap of plastic. A goal of this project is to make timelapse videos of plants growing, so it has to be possible to prevent any camera movement for many days.  So far I have only taken a few still images with both cameras pointed at the tomato seedlings under my grow lights. Although these 2 megapixel cameras will make 1600x1200 photos, the optics and minuscule sensor can't quite exploit that resolution, so I made 640x480 photos. These photos are strongly vignetted - they are much brighter in the center than near the edges. Even worse, they are poorly focused near the edges. That's worse because vignetting can be corrected afterwards, but focus can't. I did some experiments at different distances to confirm that the focus issue is not related to depth of field - the edges of the photos are never sharp. And that's with the unmodified camera that I did not damage. The infrared camera focused much closer after it had the new film filter inside, so I screwed the lens in 1/8 of a turn farther in than it had been to make it focus at about 15 inches.  The infrared image is very soft, as usual, so I'm not sure the damage I did even makes any difference. The unmodified camera focuses better at about 20 inches and beyond. I think I need to do some more focus adjustments.

To make timelapse videos with a Windows laptop, I downloaded a couple of programs. I need two different programs because I could not find one that I could run two instances of, one for each camera. So I am using the cleverly named [Webcam Timelapse](http://tnlsoftsolutions.com/timelapsehome.php), freeware which worked well for the [bean video](http://publiclaboratory.org/notes/cfastie/4-8-2013/bean-cam).  I also tried [HandyAvi](http://www.azcendant.com/Index.html) which will cost me $10 after 10 days.  Both programs let you chose either one of the cameras and will run simultaneously, taking photos at the same interval, although I have not tried to synchronize them yet.  Both programs allow good control over brightness, color balance, resolution, hue, etc., although you cannot lock exposure, it's always automatic exposure. 

I was pleased that with the tomato plants about 15 inches from the cameras, there was only a little parallax error in the aligned photos.  I tried to keep all the plants about the same distance from the cameras to minimize parallax problems. Before I used Ned's Fiji plugin to align the photos, I put them in Lightroom to fix the vignetting. The NDVI images don't do a great job of distinguishing between the plants and everything else in the scene (only the plants are photosynthesizing, so the NDVI should make them look different from everything else), so that will require more testing. I had to cheat with Ned's plugin to get the plants to appear green in the NDVI image by asking it to produce NDVI values in the range between -2 and +1 (NDVI is usually between -1 and +1). It was fun to learn that Ned's plugin allows you to cheat.