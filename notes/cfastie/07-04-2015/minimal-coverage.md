---
title: "Minimal coverage"

tagnames: 'kite-aerial-photography, alaska, kap, autokap, kaptery, saturnv, skyshield, half-spherical, response:11997'
author: cfastie
path: /notes/cfastie/07-04-2015/minimal-coverage.md
nid: 12032
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/010/535/original/Murphy_008_2k.jpg)

# Minimal coverage

by [cfastie](../../../profile/cfastie) | July 04, 2015 16:05

July 04, 2015 16:05 | Tags: [kite-aerial-photography](../tag/kite-aerial-photography), [alaska](../tag/alaska), [kap](../tag/kap), [autokap](../tag/autokap), [kaptery](../tag/kaptery), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [response:11997](../tag/response:11997)

----

*Above: Launching the Saturn V Rig on its first flight over tundra.*  

AutoKAP rigs typically have two servos to aim the camera by tilting or panning (rotating) the camera. To cover the entire scene, a systematic grid of photos is taken while the camera pans 360º at each of several tilt angles. A minimum number of pan angles is needed to get complete coverage with 30 to 40% overlap among photos so stitching software can match adjacent photos and create a continuous panorama. When the camera is tilted downwards, fewer pan angles are needed for good coverage, and when the camera is pointed at the nadir (straight down) only one photo might be needed.  
.  
[![MurphyD31_024.JPG](https://i.publiclab.org/system/images/photos/000/010/534/medium/MurphyD31_024.JPG)](https://i.publiclab.org/system/images/photos/000/010/534/original/MurphyD31_024.JPG)   
.   
So I modified the sketch that controls the SkyShield autoKAP controller to reduce the number of pan positions as the camera tilts down toward the nadir. This reduces the time it takes to complete a full routine and capture all the photos needed for a part-spherical panorama. The faster that happens, the more likely it is that the rig has stayed in the same place and captured photos with minimal parallax error -- a prerequisite for good stitching.  

With a typical PowerShot, about nine photos are required for good 360º coverage of the horizon, and five tilt positions work well to get everything between looking up at 45º and looking down at the nadir. Instead of 45 photos (9x5), the new routine takes only 35, reducing the time for a full routine from about two minutes to 1.5 minutes.   
.   
[![Murphy_104_2k.jpg](https://i.publiclab.org/system/images/photos/000/010/532/medium/Murphy_104_2k.jpg)](https://i.publiclab.org/system/images/photos/000/010/532/original/Murphy_104_2k.jpg)   
*Driving large vehicles over the tundra is a favorite pastime in Alaska. We bucked the trend and walked here.*  
.   
I tried the mode for a PowerShot with a wider angle lens that needs only eight pan positions and four tilt angles. Instead of 32 photos (8x4) only 25 are captured. The wind was not adequate to keep the camera in the same place or to get it very high. When the camera is high above the ground, parallax errors become less important and some camera motion during each pan/tilt routine is tolerable. I didn't have that luxury, so stitching the panorama was very messy. The example below does not include the upper row of photos which were mostly sky. So the 17 photos that are included were all captured in less than a minute.   
.   
<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=bd60591e-3c02-42d1-a7d3-aa92901db472&delayLoad=true&slideShowPlaying=false" width="800" height="500"></iframe>   
*Chrome no longer displays these Photosynth embeds very well. All other browsers work better.*  
.  
Although the stitching has some egregious errors, they are mostly near the horizon. The lower part of the scene stitched well, suggesting that the new routine was capturing enough photos at the lower tilt angles even though the number of pan positions had been systematically reduced. 

The new sketch with this feature is currently available only for the version of the SkyShield with a DIP switch ([get it here](http://kaptery.com/guides/)). I still have to port the changes to the version for SkyShields with LEDs. 

###Flight notes
Camera:

- Model: PowerShot S100
- ISO: 125
- Shutter speed: 1/800 second (Tv)
- Focus: manual on infinity
- Focal length: 24mm (eq.)

SkyShield:

- Version: 2.0 (4-switch DIP)
- Sketch: version 2.04
- Mode: Mode 0 (slower version of 8 pan positions at horizon, 3 at nadir, 4 tilt angles)

Flight:

- Duration: 35 minutes
- Photos taken: 540