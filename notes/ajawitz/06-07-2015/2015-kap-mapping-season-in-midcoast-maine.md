---
title: "2015 KAP Mapping Season in Midcoast Maine!"

tagnames: 'kite-mapping, grassrootsmapping, mapknitter, citizen-science, kap, maine, invasives, invasive-species, civic-hacking, response:10615'
author: ajawitz
path: /notes/ajawitz/06-07-2015/2015-kap-mapping-season-in-midcoast-maine.md
nid: 11954
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/010/234/original/Pottsorama.png)

# 2015 KAP Mapping Season in Midcoast Maine!

by [ajawitz](../../../profile/ajawitz) | June 07, 2015 22:13

June 07, 2015 22:13 | Tags: [kite-mapping](../tag/kite-mapping), [grassrootsmapping](../tag/grassrootsmapping), [mapknitter](../tag/mapknitter), [citizen-science](../tag/citizen-science), [kap](../tag/kap), [maine](../tag/maine), [invasives](../tag/invasives), [invasive-species](../tag/invasive-species), [civic-hacking](../tag/civic-hacking), [response:10615](../tag/response:10615)

----

##Picking up where we left off...

This project is a continuation of work documented extensively in the research note entitled-[KAP Test for Invasives Monitoring Project](http://publiclab.org/notes/code4maine/06-25-2014/kap-test-for-invasives-monitoring-project).  As winter weather definitely seems to get in the way of consistent Kite Mapping, I've decided to document recent activities in a new research note.
  
###Overview

With a long season of trial and error behind me, and my parallel [Affordable Aerial Mapping UAV](http://publiclab.org/notes/code4maine/08-05-2014/aerial-mapping-drone-for-under-60) project delayed temporarily (on account of my difficult decision to abandon an Arduino-based controller for a more capable, and complicated, 32bit system) the time seemed right to try out some new approaches to challenges faced last year.

###Lesson #1 - Camera

While I do have two Canon Powershots running CHDK, they were already reserved for a [DIY Bookscanner project](http://publiclab.org/notes/code4maine/10-07-2013/diy-time-machine) and could not be subjected to the perils of crashing into the open ocean.  Accordingly, much of the 2014 season was devoted to testing the Mobius ActionCam and [designing a waterproof/crashproof housing for it](http://publiclab.org/notes/code4maine/07-09-2014/kap-rig-for-mobius-action-cam).  The current housing is based on last years' final design and combines features of [Eustatic's Floating Camera rig](http://publiclab.org/notes/eustatic/03-12-2014/floating-camera-rig) with a waterproof camera cover.

[![rigandpica.jpg](https://i.publiclab.org/system/images/photos/000/010/235/medium/rigandpica.jpg)](https://i.publiclab.org/system/images/photos/000/010/235/original/rigandpica.jpg)


[![camerahousing.jpg](https://i.publiclab.org/system/images/photos/000/010/236/medium/camerahousing.jpg)](https://i.publiclab.org/system/images/photos/000/010/236/original/camerahousing.jpg)

The whole rig, including picavet, plastic housing and camera weighs in at barely 6 ounces.  Which is almost as much as one of my Powershots on its own!  Beyond its light weight, the Mobius has many other advantages as a kite camera.  The primary factor being affordability, which at less than $80 makes it somewhat easier to replace should it be sacrificed to an angry ocean.  Its also highly customizable with simple, hackable firmware features and a host of modular lenses and extensions that can be swapped out as the need arises (e.g. used with a UV filter...)  

The only major drawback to using the MobiusCam for aerial photography is the slight lens distortion you end up with when using the standard lens.  Luckily, there's a relatively easy fix that can be applied using Open Source software programs as outlined in this research note- [A Method for distorting Mobius Action Cam imagery in GIMP (FOSS)](http://publiclab.org/notes/eustatic/11-11-2014/a-method-for-distorting-mobius-action-cam-imagery-in-gimp-foss)

###Lesson #2 - Windspeed Data

The weather report can give you a ballpark prediction regarding flight conditions (e.g raining=no flying...) but knowing when conditions are right for kite mapping seems to be more of an art than a science in my experience.  Nevertheless, I'm never one to pass on the opportunity to collect more field data, so before every flight this year I've been taking a windspeed measurement using a smartphone attachment by Vavuud-

[![Sleipnir3.jpg](https://i.publiclab.org/system/images/photos/000/010/237/medium/Sleipnir3.jpg)]

(https://i.publiclab.org/system/images/photos/000/010/237/original/Sleipnir3.jpg)

When combined with the accompanying app, the meter will give a reading like this one-


[![22.jpg](https://i.publiclab.org/system/images/photos/000/010/238/medium/22.jpg)](https://i.publiclab.org/system/images/photos/000/010/238/original/22.jpg)


Reviews of such devices have been mixed, and while I personally believe such data could be useful, the manufacturer's unwillingness to add any .csv export function makes it little more than a toy.  So all I can do with the data at this point is include a screen capture of a reading with its corresponding photoset.  As almost every smartphone windmeter on the market uses the analog headphone jack as an input, an open source alternative should be possible.  The major challenge would be calibrating the phones audio settings to the windspeed metrics in the software, whereas various [DIY builds](http://www.instructables.com/id/Digital-Anemometer-wind-meter/) already exist for the hardware.

###Lesson #3 - Choosing the Right Kite

The next lesson I learned about flying on the Maine coast is that there's no such thing as the perfect kite that can perform well in any wind conditions.  While a delta kite with a wide enough wingspan will allow for enough lift when conditions are relatively calm, my location rarely suffers from a lack of wind.  Rather the challenge has been finding days when winds aren't too strong.  Accordingly, over the past year or so I have amassed a considerable fleet of different kites of various shapes and size of which each is well suited to different conditions.  As I mentioned earlier, matching the right kite for the right conditions is more of an art than a science and thus requires me to bring the whole fleet with me in each outing.  Considering, the camera/picavet suspension rig must be carried intact to avoid entanglement the whole kit can get quite unwieldy.  I found a simple solution in an old golf bag-

[![KiteBag.jpg](https://i.publiclab.org/system/images/photos/000/010/239/medium/KiteBag.jpg)](https://i.publiclab.org/system/images/photos/000/010/239/original/KiteBag.jpg)

###The Fleet

####HQ Power Sled (Small)
  
[![SledKite.jpg](https://i.publiclab.org/system/images/photos/000/010/240/medium/SledKite.jpg)](https://i.publiclab.org/system/images/photos/000/010/240/original/SledKite.jpg)

The Power Sled was the first kite I got last year in the hopes that it would perform well in high winds while lifting well in calmer conditions.  Unfortunately, it tends to sway from side to side in stronger winds though the addition of a tube tail stabilizes it somewhat.  If I were to go with another Sled Kite, I would definitely go for one of its larger cousins like [Gomberg's Super Sled](http://www.windpowersports.com/kites/gomberg/super-sled.php)

####HQ Rainbow Delta Coyne

[![hqdefault.jpg](https://i.publiclab.org/system/images/photos/000/010/241/medium/hqdefault.jpg)](https://i.publiclab.org/system/images/photos/000/010/241/original/hqdefault.jpg)

This ended up being my most reliable kite last season and it continues to offer the most lift in calm conditions.  With a 7ft wingspan however, it can be unstable in higher winds and higher altitudes.  I would definitely go with a 9ft Wingspan next time.

####Gomberg French Military Kite
  
[![FM_Kite1.jpg](https://i.publiclab.org/system/images/photos/000/010/243/medium/FM_Kite1.jpg)](https://i.publiclab.org/system/images/photos/000/010/243/original/FM_Kite1.jpg)

According to the [seller's description](https://www.gombergkites.com/g-advanced.html#sfmk), the French Military Kite-
  
    was invented by an American and used by the French Army over 100 years ago. Larger models flown in trains lifted observers. The design combines the best elements of a Diamond kite for stability and a Box kite for lift.

Needless to say, with a description like that, I have high hopes for this kite!  Historical photos like the image below of a "kite train" lifting a human, opened up a whole new can of worms!


[![perkinsystem.jpg](https://i.publiclab.org/system/images/photos/000/010/244/medium/perkinsystem.jpg)](https://i.publiclab.org/system/images/photos/000/010/244/original/perkinsystem.jpg)

Suffice to say, research into the kites role in the history of aerial photograhy and the prospect of using kites or balloons for antennas deserves a dedicated research note (coming soon...)  In the present context however, the French Military Kite has the potential to be my workhouse lifter, albeit one requiring significantly more adjustment than previous models.

I came to this conclusion after my first true KAP attempt of the season in what turned out to be overly high winds.  The French Military Kite jerked about so violently, and pulled the chord so tight, that it took me two hours (and an intense upper body workout) to bring it back down!  The camera was thrown around so much that the resulting imagery was useless for mapping purposes, but produced some beautiful FPV shots!


[![Pottsorama.png](https://i.publiclab.org/system/images/photos/000/010/245/medium/Pottsorama.png)](https://i.publiclab.org/system/images/photos/000/010/245/original/Pottsorama.png)

You know you've got some strong winds when you get shots of the kite instead of the ground!


[![KiteinFlight.png](https://i.publiclab.org/system/images/photos/000/010/246/medium/KiteinFlight.png)](https://i.publiclab.org/system/images/photos/000/010/246/original/KiteinFlight.png)


After a couple more tries its become clear that the bridle needs to be adjusted before I can take advantage of the kite's vaunted stability...
  
####Prism Pica Diamond Kite

[![PrismPica.jpg](https://i.publiclab.org/system/images/photos/000/010/242/medium/PrismPica.jpg)](https://i.publiclab.org/system/images/photos/000/010/242/original/PrismPica.jpg)

Surprisingly, the best high-wind performer in the fleet has turned out to be the model that most closely resembles the classic "Ben Franklin" diamond shape.  The "Prism Pica" held steady in winds measuring 18mph when all other kites went crazy.  Unfortunately, it might've been a little _too stable_ as it seemed to hit a ceiling at the height the following image was taken-

[![IMAG0247.JPG](https://i.publiclab.org/system/images/photos/000/010/247/medium/IMAG0247.JPG)](https://i.publiclab.org/system/images/photos/000/010/247/original/IMAG0247.JPG)

I'm thinking that once again, a bridle adjustment will do the trick...

####Prism Bora 7 (Coming Soon)

[![PrismBora.jpg](https://i.publiclab.org/system/images/photos/000/010/248/medium/PrismBora.jpg)](https://i.publiclab.org/system/images/photos/000/010/248/original/PrismBora.jpg)

I was impressed enough with the quality of Prism's kites, that I ordered one of their AirFoil-type designs.  Airfoils tend to provide a lot of lift and are used often for more advanced KAP shoots.  Again, those models are usually larger though so we'll have to see how this one stacks up...

Stay Tuned for the actual results!