---
title: "Aerial photos with UAV and an Android phone: first results"

tagnames: 'hawaii, uav-mapping, aerial-photos, drone'
author: bdiscoe
path: /notes/bdiscoe/06-09-2013/aerial-photos-with-uav-and-an-android-phone-first-results.md
nid: 8126
uid: 46950
cids: 12281,16110,16111,16112,17973
---

![](https://publiclab.org/public/system/images/photos/000/000/496/original/tt_img_00048.jpg)

# Aerial photos with UAV and an Android phone: first results

by [bdiscoe](/profile/bdiscoe) | June 09, 2013 05:08

June 09, 2013 05:08 | Tags: [hawaii](/tag/hawaii), [uav-mapping](/tag/uav-mapping), [aerial-photos](/tag/aerial-photos), [drone](/tag/drone)

----

##What I want to do
Trying to find an affordable, reliable way for people to gather high-quality aerials with a UAV.

##My attempt and results
1. UAV: A 3D Robotics Hexa-C (http://www.udrones.com/product_p/achrtf1.htm)
It is very hard to fly.  After much practice, with an RC controller, I can mostly keep it in position horizontally, by continuous rapid adjustments, but vertical control is loose and wind makes it even more difficult.

2. Camera: A long search and study of dpreview.com shows that, in fact, there are  basically only 4 high-megapixel fixed-lens cameras which can take pictures continuously (commonly called time-lapse, or more obscurely as intervalometer): 

  a. Pentax Optio WG-2 (and WG-3), 16 MP, 192 g, $205 on amazon.
  b. Panasonic Lumix DMC-TS5, 16.1 MP, 214 g, $360 on amazon.
  c. Nikon Coolpix P510, 16 MP, (41.7× zoom!), 555 g, $370 on amazon.
  d. Ricoh GR, 16.2 megapixels, 245 g, $800 on amazon.

  The first two are similar: cheap waterproof point-and-shoots. 
The Nikon is the heavy one with the crazy zoom (not useful IMHO for aerials) 
The Ricoh is the expensive one, with (one would assume) higher image 
quality for that price. 

  A link which compares the four: 
http://www.dpreview.com/products/compare/side-by-side?products=pentax_optiowg2&products=panasonic_dmcts5&products=nikon_cpp510&products=ricoh_gr&sortDir=ascending 

  I don't have any of those cameras, so my experiment today consisted of using my Android phone (Galaxy Nexus).  I suspended my Nexus under my UAV by wrapping rubber bands tightly around the phone, then used cords through those bands to hang it under the UAV.

3. Software.  On the UAV: Ardupilot.  On the phone, an app is needed to tell the camera to capture full-resolution images, continuously (every few seconds).  I tried several "time lapse" apps, all of which were deficient (resolution limited, or unstable).  The one which worked (free app) was "Tina Time-lapse" (https://play.google.com/store/apps/details?id=com.tina.time_lapse&hl=en)

4. Test location: I flew on my farm in rural Hawaii (https://maps.google.com/?ll=20.05336,-155.509016&spn=0.000862,0.000932&t=h&z=20)  You can see in Google's image (the best available imagery) many issues with graininess, poor color depth, canopy coverage including tree parallax lean, and shadows: Hence, the need to gather our own aerials there.

5. Test conditions: Overcast day, gusty winds from the northeast (tradewinds, almost always blowing).

6. Test operation: I set the UAV on a flat, open grassy area.  I carefully reached the phone under the UAV to start the "Tina Time-lapse" app capturnig images.  I set the UAV to "stabilize" mode, and took it up 10 feet.  I then switched to "loiter" mode which, in theory, should make the UAV hold its position and elevation, but in practice, it does not; it is simply a little more stable than "stabilize" but still requires continuous correction.  In "loiter", I took the UAV up to (guessing) 80-100 feet above ground, tried to keep it stable for a very scary minute, then brought it down, dodging trees, powerline, and ground obstacles to land it safely on the grass.

7. Results:
  A. The overcast sky made the images somewhat unsaturated.
  B. The wind made piloting difficult and frightening ($800 UAV could easily drift into a tree collision)
  C. The wind and rocky UAV flight made the camera focus poor and motion blur bad.
  D. Even if conditions had been perfect, resolution is limited by the phone camera (5MP nominal but lower effective detail).
A few of the resulting images are online at https://plus.google.com/u/0/photos/100275646589690012041/albums/5886880918564651393

##Questions and next steps
Things to try:
1. Try again with better conditions.
2. Buy a Pentax camera which has time lapse as a standard feature.
3. Try to get the UAV to pilot itself. I took it as high as I dared today. It's manual piloting, so I need to see the UAV well to keep it from drifting, which limits how far up.  If i ever get the thing to actually fly itself stably, then I could let it go higher on an auto-path.﻿