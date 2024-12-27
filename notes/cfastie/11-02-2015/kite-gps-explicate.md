---
title: "Kite => GPS => Explicate"

tagnames: 'kite-mapping, vermont, kite, saturnv, skyshield, half-spherical, littleplanet, response:12335, birdseye, bristol-vt, s100-gps'
author: cfastie
path: /notes/cfastie/11-02-2015/kite-gps-explicate.md
nid: 12355
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/012/330/original/Brist-1083LP100ps2k.jpg)

# Kite => GPS => Explicate

by [cfastie](../../../profile/cfastie) | November 02, 2015 16:56

November 02, 2015 16:56 | Tags: [kite-mapping](../tag/kite-mapping), [vermont](../tag/vermont), [kite](../tag/kite), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [littleplanet](../tag/littleplanet), [response:12335](../tag/response:12335), [birdseye](../tag/birdseye), [bristol-vt](../tag/bristol-vt), [s100-gps](../tag/s100-gps)

----

*Above: Little planet projection of a 23 photo panorama of Bristol, VT. October 30, 2015.*

Between 1830 and 1930, when aerial views were hard to come by, American artists imagined what their landscape looked like from above, and figured out how to make money from their invented aerial scenes. It seems that oblique aerial views were of great interest to the public even before actual aerial views were possible. Before the fad waned, four dozen artists created hand drawn depictions of 2400 different towns or cities across the country (a few of these guys were prolific). Most of these were lithographs which could be produced in quantity and sold to the public. Not all of these were aerial views, but after the Civil War as the popularity of “bird’s eye maps” soared, most of them were. Any sleepy town that had several dozen people who would buy a copy or pay to have their business promoted on the map might end up with a travelling artist making sketches and taking orders. Many of the tiny Vermont villages near me had aerial views produced, and it’s not hard to find copies of them online. 

[![Bristol1889_2200.jpg](https://i.publiclab.org/system/images/photos/000/012/329/large/Bristol1889_2200.jpg)](https://i.publiclab.org/system/images/photos/000/012/329/original/Bristol1889_2200.jpg)  
*Above: A view of Bristol, Vermont made in 1889 by George E. Norris, who made similar views of 135 different towns.*   

[![Brist-1083CU1889cps2k.jpg](https://i.publiclab.org/system/images/photos/000/012/328/large/Brist-1083CU1889cps2k.jpg)](https://i.publiclab.org/system/images/photos/000/012/328/original/Brist-1083CU1889cps2k.jpg)  
*Above: A KAP panorama of Bristol, Vermont made last Friday in an attempt to honor George Norris’s work.*  

[![Brist-682-63-2.jpg](https://i.publiclab.org/system/images/photos/000/012/327/medium/Brist-682-63-2.jpg)](https://i.publiclab.org/system/images/photos/000/012/327/original/Brist-682-63-2.jpg)  
*Above:  Flying the Fled from the Mt. Abe High School soccer field in search of George Norris’s lofty vision.*  

[![ScrCapGETraces2.JPG](https://i.publiclab.org/system/images/photos/000/012/326/large/ScrCapGETraces2.JPG)](https://i.publiclab.org/system/images/photos/000/012/326/original/ScrCapGETraces2.JPG)  
*Above: Aerial tracks of the kite camera from GPS data collected by the camera during a flight over Bristol, VT. Animations of these tracks are in the video below.*   

The video below describes the problem of creating a modern version of George Norris’s 126 year old view of Bristol. The problem is that George’s customers did not know what the Bristol landscape should look like from above, so George was able to take some liberties in his depiction. No one could check his work then, and maybe no one ever has, until now.

<iframe width="853" height="480" src="https://www.youtube.com/embed/Jjccvhw7Av4?rel=0" frameborder="0" allowfullscreen></iframe>   
  
If you are interested in how the GPS data was collected and used in the above video, there is a new [article at the KAPtery](http://kaptery.com/article/kap-gps/) with lots of details.

Below is the full resolution half-spherical panorama from the Bristol flight. That panorama is made from the same 23 photos used to make the little planet image above. The Canon S100 camera was riding on a [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) with [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller) and taking a photo every three seconds as the rig pointed the camera in different directions.

<iframe frameborder="0" src="https://photosynth.net/embed.aspx?cid=176f8932-a21e-4784-aead-4cf2946a7e91&delayLoad=true&slideShowPlaying=false" width="850" height="500"></iframe>  
.  

There is a scholarly book on the early lithographs of American towns by John William Reps called [Views and Viewmakers of Urban America](https://books.google.com/books?id=3mI1wvk_o3cC&printsec=frontcover#v=onepage&q&f=false).

###Flight notes: 
Camera:

- Model: PowerShot S100
- ISO: 80
- Shutter speed: 1/800 second (Tv)
- Focus: manual on infinity
- Focal length: 24mm (eq.)
- White balance: Sunny 
- GPS: on

CHDK:

- Remote enabled: one push, quick
- The S100 has a shutter priority mode so CHDK is not needed for that

SkyShield:

- Version: 2.4 (3-switch DIP)
- Sketch: version 2.08sfm (beta)
- Mode: Mode 0  (for 24 mm lens, 25 photos/cycle)
- Power: 6 eneloop AAA
- Customization: The nadir tilt angle was changed from 20 to 11 so the camera was pointed straight down. 

Flight:

- Kite: Fled
- Wind: From N, 8 to 12 mph
- Duration: 63 minutes
- Photos taken: 1203

Panorama stitching:

- Software: Microsoft ICE
- Post processing: ICE's "auto complete" feature was used to create extra sky to fill in missing areas in the Photosynth panorama. Some stitching errors in the little planet panorama were hidden in Photoshop. Panoramas at Photosynth cannot be passed through Photoshop so what you see there is what Microsoft ICE produced.