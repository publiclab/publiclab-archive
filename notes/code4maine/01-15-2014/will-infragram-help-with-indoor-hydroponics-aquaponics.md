---
title: "Will Infragram help with Indoor Hydroponics/Aquaponics?"

tagnames: 'infragram, hydroponics, question:infragram, question:hydroponics'
author: ajawitz
path: /notes/code4maine/01-15-2014/will-infragram-help-with-indoor-hydroponics-aquaponics.md
nid: 9946
uid: 294634

cids: 8034,8046,8047,8306

---

![](https://publiclab.org/public/system/images/photos/000/002/593/original/HouseDay.png)

# Will Infragram help with Indoor Hydroponics/Aquaponics?

by [ajawitz](../../../profile/ajawitz) | January 15, 2014 17:51

January 15, 2014 17:51 | Tags: [infragram](../tag/infragram), [hydroponics](../tag/hydroponics), [question:infragram](../tag/question:infragram), [question:hydroponics](../tag/question:hydroponics)

----

###What I want to do
Monitor and _control_ optimal light conditions for indoor plant growth using Infrared imagery and LED lights controller. 

Hydroponics, Aquaponics and other high yield, indoor cultivation techniques are becoming increasingly popular in urban areas and northern regions with short growing seasons.  "DIY-R&D" efforts like those of [our.windowfarms.org](our.windowfarms.org) and [HAPI](http://hapihq.com/about-hapi/) in Ohio are two of the more successful efforts marrying the indoor cultivation techniques with DIY technology.

Lighting has always been the trickiest (and costliest) issue facing indoor growers though advances in LED technology may be on the verge of significantly reducing this barrier.  Cutting-edge artificial lighting techniques known as "[pinkhousing](http://www.npr.org/blogs/thesalt/2013/05/21/185758529/vertical-pinkhouses-the-future-of-urban-farming)" operate under the theory that plant growth can be more effectively, and efficiently managed through various subtle combinations of red and blue lighting (and by eliminating green altogether).  LED technology allows for exactly such lighting interactions to be digitally programmed according to each plants specific needs.  

The problem is that so far, very little is known about what these needs are.  This is where an infrared imaging tool like Infragram could come in real handy.  One could envision programming a script that interprets visual imagery from Infragram into a precise combination of Red-Blue LED lighting that responds to a specific area.  Or at the very least it would enable indoor farmers to have a better grasp of lighting effects on plant health.

One immediate issue is related to the method used by Infragram-compatible cameras in the first place.  If the imaging process is based on capturing reflected IR rays then would it be nullified by the "Red/Blue Spectrum only" technique?  Would it be possible to replicate the IR reflection by introducing artificial IR LEDs?  Or would the number of LEDs required for such a process render it unfeasible? 

### 1st Attempt  and Results
I couldnt wait to start testing this hypothesis so I ordered the [DIY Infrablue Filter pack   ](http://store.publiclab.org/collections/diy-infrared-photography/products/infragram-diy-filter-pack) from the PublicLab Store to make my own camera conversions, while also ordering the new [PiNoir Webcam ](http://www.raspberrypi.org/archives/tag/infragram) for the Raspberry Pi. As of the present writing (1/20/14 I have had the filter pack for about a week and am still waiting for the PiNOIR to arrive.  
I actually have the same exact webcam that appears on the main [PubicLab IR Cam wiki](http://publiclab.org/wiki/near-infrared-camera) 
[![infragram2_610x259.png](https://i.publiclab.org/system/images/photos/000/002/587/medium/infragram2_610x259.png)](https://i.publiclab.org/system/images/photos/000/002/587/original/infragram2_610x259.png).
So I assumed this would be the logical choice for modding as I assumed the process would be well-documented.  Unfortunately, the only other information I could find pertaining to this particular camera was another photo showing the lens with the two different filters- 
[![Filter-1_1024x1024.jpg](https://i.publiclab.org/system/images/photos/000/002/588/medium/Filter-1_1024x1024.jpg)](https://i.publiclab.org/system/images/photos/000/002/588/original/Filter-1_1024x1024.jpg)
But after removing the blocking filter, I couldn't find any documentation about where to actually install the blue filter.  So I instead opted to use a more common Logitech webcam as installation seemed to be more straightforward-
[![InfraCam.jpg](https://i.publiclab.org/system/images/photos/000/002/589/medium/InfraCam.jpg)](https://i.publiclab.org/system/images/photos/000/002/589/original/InfraCam.jpg)

The latter attempt seemed to work well-enough and after testing the cam with infragram.org on my laptop I then connected it to my Nexus 7 through an OTG USB adapter cable and an app called [SnapexWebcam](https://play.google.com/store/apps/details?id=snapexwebcam.com&hl=en) (which requires root access).

Thus far, the results have been somewhat inconclusive.  Initial images were promising.  As the first experiment was performed in the evening, I chose to compare characteristics between two different artificial lighting sources on a planted aquarium.
The first image was taken using the standard tank light which I believe is a "ZooMed FloraSun" purchased at a standard pet store-

[![AquariumInfra1.png](https://i.publiclab.org/system/images/photos/000/002/590/medium/AquariumInfra1.png)](https://i.publiclab.org/system/images/photos/000/002/590/original/AquariumInfra1.png)

 Contrasted with a common Flourescent grow light called the "VitaLume Plus Grow" by "Sun Leaves"-

[![AquariumInfra2.png](https://i.publiclab.org/system/images/photos/000/002/591/medium/AquariumInfra2.png)](https://i.publiclab.org/system/images/photos/000/002/591/original/AquariumInfra2.png)

This test yielded clear differences in the green range.  However, according to the spectrum reference the exposure was still far below the norm for what a plant would be emitting.  Also, while there are observable differences between the images, it is unclear whether this is actually highlighting photosynthesis or simply highlighting differences between IR emissions from the two lighting sources which would reflect off of anything.
Daylight tests were even less conclusive.
It being winter and somewhat devoid of broad leaf trees outdoors, I tried taking pictures of some houseplants for the next test and the results were somewhat confusing-

[![HouseDay.png](https://i.publiclab.org/system/images/photos/000/002/592/medium/HouseDay.png)](https://i.publiclab.org/system/images/photos/000/002/592/original/HouseDay.png)

The parts of the plants where photosynthesis would be expected actually came up closer to the _BLUE_ spectrum so something was clearly off in either the post-processing or the camera itself.  Hopefully, its not a problem of "bleeding" between the Red and Blue bands as a hardware fix is much trickier than a simple change in post processing.  Hopefully, the PiNOIR will arrive soon as it should provide a much more stable platform. 
I will be keeping the images in[ this Picasa Folder](https://plus.google.com/photos/107186102357963872918/albums/5971005892501302577?authkey=CLzzkcDB3fvD3QE) for those who are interested.

###Questions and next steps
With the PiNOIR I hope to master the process of capturing imagery from standard CFL Grow Lights first.  This will provide me with a reference to start experimenting with "Red/Blue" LED lighting and the required amount of supplemental IR LEDS as explained so well [by commenter "cfastie" below](http://publiclab.org/notes/code4maine/01-15-2014/will-infragram-help-with-indoor-hydroponics-aquaponics#c8034).  My pipe dream is to create real-time controllable LED strips akin to [these commercial offerings] (http://www.elementalled.com/fertilight-led-grow-light-kit.html) only using open source, digital, individually controllable strips like [Adafruit's NeoPixel](http://www.adafruit.com/products/1506) or a high density version of [BlinkyTape](http://www.adafruit.com/products/1605).  The latter even includes a GUI interface allowing the user to adjust the lighting via an RGB slider.  Such a function could be added to possible Raspberry Pi/Beaglebone Infragram client to respond to plant health needs in real time.

###Update 2/18/14
While its been some time since I've worked this project specifically, I have incorporated it into a much larger Hydroponics Investigation with a master wiki at- http://publiclab.org/wiki/new-concepts-for-oshw-in-indoor-gardening.  However, I recently got a hold of two different tools that could possibly yield good results.

 A. I got a hold of the Raspberry Pi NOIR Camera module and

 B. I started working with the[ TSL2561 Digital Luminosity Sensor](http://learn.adafruit.com/tsl2561/overview) available at Adafruit.  


[![tsl2561_LRG.jpg](https://i.publiclab.org/system/images/photos/000/002/942/medium/tsl2561_LRG.jpg)](https://i.publiclab.org/system/images/photos/000/002/942/original/tsl2561_LRG.jpg)


  The TSL2561 is capable of detecting the full spectrum of IR to UV light, and its i2c interface makes it surprisingly easy to use.  As I will be using a system similar to the Arduino Yun for my Hydroponics system, my initial tests have been using the Yun-Google Spreadsheet example provided by Temboo.com.  However, The Raspberry Pi is still the best platform for incorporating video imagery and if rumors of an RPi App for Infragram turn out to be true, then the TSL2561 might be a powerful addition!
  As I mentioned eariler, the usage of the sensor is relatively straight-forward, and at less than $5 per, it doesn't get more affordable.  The only major obstacle will be making sure the numbers its spitting out make any sense.  The basic example sketch provided by Adafruit calculates Lux values, or human readable light.  As far as I know, PAR (Photosynthetically active radiation) is a much more accurate metric for vegetation monitoring, and I'm not sure how easy it is to convert the TSL2561 output to reflect PAR instead of Lux.  Even without such conversions however, I simple program that logs a sensor reading while capturing Infragram imagery would go a long way towards helping us understand how to adequately provide indoor plants with the lighting they need.