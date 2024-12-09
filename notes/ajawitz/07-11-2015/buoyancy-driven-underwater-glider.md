---
title: 'Buoyancy-Driven Underwater Glider'
tagnames: open-water, robotics, oceanography
author: ajawitz
path: /notes/ajawitz/07-11-2015/buoyancy-driven-underwater-glider.md
nid: 12049
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/011/009/original/BallGlider.jpg)

# Buoyancy-Driven Underwater Glider

by [ajawitz](../profile/ajawitz) July 11, 2015 17:51

July 11, 2015 17:51 | Tags: [open-water](../tag/open-water), [robotics](../tag/robotics), [oceanography](../tag/oceanography)

----

###What I want to do
  I want to develop an underwater autonomous vehicle based on a design the US Navy developed for a school program called the "Seaglide". 
###SeaGlider Background
 Note:  This research and documentation was initially posted as a research question in relation to the thermal fishing bob- http://publiclab.org/notes/ajawitz/06-17-2015/question-would-the-thermal-fishing-bob-concept-work-as-a-seaglider-robot
  As the project has evolved it probably deserves a dedicated page.  The documentation from the initial post has been copied over and new updates will be posted here.
A "SeaGlider" is a type of autonomous underwater vehicle that mimics a "porpoising" motion to propel itself through the water. The method uses far less energy than a conventional propeller-driven method and is being researched for long endurance vehicles.

[![GliderMecnaicsOverview.png](https://i.publiclab.org/system/images/photos/000/010/634/medium/GliderMecnaicsOverview.png)](https://i.publiclab.org/system/images/photos/000/010/634/original/GliderMecnaicsOverview.png)

An impressive, low-cost, DIY version called the SeaGlide has been developed as a school curriculum by the same organization that sponsored the (far less impressive IMHO) "Sea Perch" competition. The web site at http://www.seaglide.net/ includes a full lesson plan, BOM, 3D printable part files and Arduino firmware. All of which can be downloaded freely from this Dropbox-https://www.dropbox.com/sh/lattz1cupiqa6ai/AAD40WVk4Fu62y14ojnYm_D1a?dl=0 The fully functioning unit could be built for less than $100 depending on the availability of materials.

The SeaGlide already includes a "Sensor Pod" with an Arduino, temp sensor, pressure and even an RGB LED to indicate the vehicles water depth. So the vehicle could function in a manner similar to a Thermal Fishing Bob in its current configuration. The only issue is whether or not the diving motion would make a long exposure image that accurately reflects water temperature too difficult to capture. If it were possible to account for water temperature changes at different depths, then I imagine the diving motion would be an advantage, but I'm not sure how this would be accomplished.

Of course, the advantages of such a low-cost, autonomous vehicle could make it appealing for a wide variety of uses beyond thermal imaging. The arduino "sensor pod" allows for all kinds of device configurations...
I've wanted to build one myself for some time, but living as I do on the ocean, the vehicle is really more appropriate for rivers, ponds or other inland waterways where you could keep it from swimming away!


###My attempt and results

####Build Log 6/19/15 
I've managed to build most of the "buoyancy engine" with a large syringe, 3D printed parts, threaded drive bolts and metal "BBs" for ballast. I also got the right water bottle, and the Arduino Pro Mini.


[![SGengine1.jpg](https://i.publiclab.org/system/images/photos/000/010/635/medium/SGengine1.jpg)](https://i.publiclab.org/system/images/photos/000/010/635/original/SGengine1.jpg)


Cross-referencing the BOM with inventories at local Home Depot etc... got me nowhere, so I just went ahead and printed out the 3D printable pieces of the buoyancy engine to serve as a reference point. Using this method I was able to find the drive bolt, brass nut and locking washer rather easily by fitting them into the printed space. The good news is the metal parts are relatively common. The bad news is none of my standard or micro size servos would fit the very specific dimensions of the printed parts. So now I have to wait until the servo with the proper dimensions arrives in a week...

The completed Buoyancy Engine with Servo Attached should look like this image from the official instructions


[![Completeengine.png](https://i.publiclab.org/system/images/photos/000/010/636/medium/Completeengine.png)](https://i.publiclab.org/system/images/photos/000/010/636/original/Completeengine.png)


My initial impressions are that while very impressive, this is an unusually complex diy build in terms of the conceptual engineering involved. Its clear that it was designed by professional engineers as opposed to a casual tinkerer... At least as far as the buoyancy engine is concerned, this does mean that the materials used must closely match those of the original build as there is little room for alterations. This somewhat diminishes the DIY value of using common everyday objects when you really have to use the exact same water bottle, syringe, servo etc... Luckily, the parts are still relatively inexpensive and available online. I'm hoping the same rule does not apply to the "sensor pack" as this is where I would like to test some of the Open Water modules like RIFFLE.

One final observation... You can definitely tell this build came out of the Navy as more than any other DIY project I've ever worked with, I couldn't shake the feeling that I was building some kind of a bomb! Especially after loading the 3D printed cylinder with BBs for ballast and attaching what looked a lot like a triggering mechanism... Needless to say, I would avoid taking the completed glider through an airport...

####Build Log 7/11

  This is definitely one of those builds where you have very little room for improvisation as any attempt to replace even the smallest component from the original BOM with a different one has caused problems.  As a result the entire project will get held up waiting for a single 10 cent switch.  Also, the 3D Printed mount for the drive bolt proved impossible to tighten enough to hold the bolt in place.  I eventually sealed it together using polymold plastic pellets that become hand moldable when heated at high temperature.  Then, after discovering that a standard tactile button switch would be too big to sit next to the servo, I had to wait another week for a "slim" button switch to arrive before I could actually finish the drive assembly.  All thats left to do now is to seal the servo drive to the syringe enclosure and the buoyancy engine assembly will finally be complete!

[![finisheddrive.jpg](https://i.publiclab.org/system/images/photos/000/010/637/medium/finisheddrive.jpg)](https://i.publiclab.org/system/images/photos/000/010/637/original/finisheddrive.jpg)

####Build Log 7/14/15
 The buoyancy engine is ready for testing!!!  

[![SeaglideTesting.jpg](https://i.publiclab.org/system/images/photos/000/010/688/medium/SeaglideTesting.jpg)](https://i.publiclab.org/system/images/photos/000/010/688/original/SeaglideTesting.jpg)

 The next step is on somewhat more familiar terrain in that it mostly involves setting up a circuit between the servo and the Arduino.  The setup recommended by the instructions shown in the picture below, is somewhat awkward and I'm trying to decide if there's any room for modifications...

 
[![SeaglideProMini.png](https://i.publiclab.org/system/images/photos/000/010/689/medium/SeaglideProMini.png)](https://i.publiclab.org/system/images/photos/000/010/689/original/SeaglideProMini.png)

 While I have an Arduino Pro-Mini and even the same "perma-proto breadboard" from Adafruit, I'm not completely sold on the way they split the perfboard in half, though I assume this is done to fit into the bottle better.  Another alternative could be to replace the Pro-Mini with an "Arduino Fio" which has a longer but thinner footprint.  It also has the added benefit of a socket-footprint for an XBee-type transceiver.


[![FIO.png](https://i.publiclab.org/system/images/photos/000/010/690/medium/FIO.png)](https://i.publiclab.org/system/images/photos/000/010/690/original/FIO.png)


  However, as the FIO includes a bettery input port and an embedded on/off switch the power supply/switch assembly would require redesign as well.  The XBee socket could enable the IR receiver to be replaced with something like a bluetooth, WiFly or XBee radio.

 Even without modification, it occurred to me that the build could really benefit from a Fritzing diagram, so I went ahead and sketched one up (if anyone would like a copy of the original file just let me know)-

[![Seaglideengine_bb.png](https://i.publiclab.org/system/images/photos/000/010/691/medium/Seaglideengine_bb.png)](https://i.publiclab.org/system/images/photos/000/010/691/original/Seaglideengine_bb.png)

 
####Build Log 7/22/15

It took yet another week to gather enough of the exact components used in the original instructions before I could move forward with the buoyancy motor controller.  All in all, the only major difference between my current version and the default build is I ended up using two 2.2ohm resistors in parallel in lieu of a 5ohm resistor (which turned out to be yet another "too obscure to find in Radio Shack yet not worth ordering alone" situation...).


[![completeengine.jpg](https://i.publiclab.org/system/images/photos/000/010/859/medium/completeengine.jpg)](https://i.publiclab.org/system/images/photos/000/010/859/original/completeengine.jpg)

The arduino sketch in the Seaglide Dropbox folder has been updated somewhat recently and works very well thus far.  https://www.dropbox.com/s/3r7mbq8wmfe0u8t/SeaGlideV0_9_1.ino?dl=0

I'm holding my breath that the motor will actually works as it should when I get to testing it tomorrow...  

####Build Log 7/26/15
Everything appears to be ready with the buoyancy engine, even though I can't shake a nagging feeling that I'm going to have to take the whole thing apart to fix the servo and drive bolt encoder...  Nevertheless, all the motor components wrapped up as planned before fitting into the waterbottle enclosure-


[![EnginePrefitting.jpg](https://i.publiclab.org/system/images/photos/000/010/899/medium/EnginePrefitting.jpg)](https://i.publiclab.org/system/images/photos/000/010/899/original/EnginePrefitting.jpg)


So far so good-


[![EngineBottle.jpg](https://i.publiclab.org/system/images/photos/000/010/900/medium/EngineBottle.jpg)](https://i.publiclab.org/system/images/photos/000/010/900/original/EngineBottle.jpg)

I was even able to get a workable (if ugly) print for the rudder mount out of my Printrbot Simple-


[![rudderindistress.jpg](https://i.publiclab.org/system/images/photos/000/010/901/medium/rudderindistress.jpg)](https://i.publiclab.org/system/images/photos/000/010/901/original/rudderindistress.jpg)

 
[![notaprettyrudder.jpg](https://i.publiclab.org/system/images/photos/000/010/902/medium/notaprettyrudder.jpg)](https://i.publiclab.org/system/images/photos/000/010/902/original/notaprettyrudder.jpg)

Hopefully this run of good printing continues as the next step involves printing the "wing yoke" which barely squeezes into the simple's 100x100x100 build area...  If that doesn't become another hang-up, I'll only need to cut out the wings and rudder from mylar and add ballast before it should be ready for buoyancy testing!

Of course the fun part begins with the sensor pod...

####Build Log 8/2/15
 Fingers crossed...  But it should be ready for water testing!!!  Even though my 3D Printing luck has indeed come to an end, The official BOM calls for 6 inch brass weights for ballast and for the wings to be made out of 1/16" Polystyrene.  I managed to make do with a sheet of corrugated plastic sign stock and some flat metal from hinge panels at Lowes.  Instead of the 3D printed "wing yoke" I simply attached the wings and ballast using common pipe brackets.  


[![GliderHeavy.jpg](https://i.publiclab.org/system/images/photos/000/011/037/medium/GliderHeavy.jpg)](https://i.publiclab.org/system/images/photos/000/011/037/original/GliderHeavy.jpg)

The end switch next to the servo caused me some major headaches but I think I found a workable solution by lengthening its reach with a small spring.  The last test resulted in a buoyancy drive cycling as its supposed to!

  So now I'm just waiting for the chance to take it down to the water (with fishing pole attachment and my trusty sidecat...)

[![BallGlider.jpg](https://i.publiclab.org/system/images/photos/000/011/008/medium/BallGlider.jpg)](https://i.publiclab.org/system/images/photos/000/011/008/original/BallGlider.jpg)

####Build Log 8/5/15 LET THE FUN PART BEGIN!!!

While ocean testing revealed the ballasting is far too heavy, it nevertheless revealed a functional  mini-ocean glider!!!  Unfortunately, I forgot to bring my phone/camera along so I don't have any pictures from the launch but I did take this snapshot of the full build shortly after its successful dive!-

[![Gliderposttest.jpg](https://i.publiclab.org/system/images/photos/000/011/038/medium/Gliderposttest.jpg)](https://i.publiclab.org/system/images/photos/000/011/038/original/Gliderposttest.jpg)

For the next dive I'm going to use two metal ballast bars instead of four, plus it occurs to me that the wings and ballast probably don't require the metal pipe fitting brackets and can just as easily be secured with zip ties.  It's possible this may make it too LIGHT of course, but that's easy enough to fix.  As I still have plenty of plastic left, I'll also try out a few different wing designs.

####Dive Report 8/6/15 Part 1-Too Light...
Glider Version 1.2 eliminated 2 of the four ballast bars and completely redesigned the wing form and tail structure.

[![Glider_V1.2.jpg](https://i.publiclab.org/system/images/photos/000/011/044/medium/Glider_V1.2.jpg)](https://i.publiclab.org/system/images/photos/000/011/044/original/Glider_V1.2.jpg)

I also discovered an unexpected advantage of the corrugated plastic sign board that I've been using for the wing material if the wings are cut with the perforations facing vertically-

[![WingDesign.jpg](https://i.publiclab.org/system/images/photos/000/011/045/medium/WingDesign.jpg)](https://i.publiclab.org/system/images/photos/000/011/045/original/WingDesign.jpg)

The perforations act as mini water funnels providing additional forward motion...

However, it did indeed turn out that the removal of 2 of the 4 ballast weights has made the vehicle too light.  This morning's test therefore resulted in a floating glider.

[![TooLight.jpg](https://i.publiclab.org/system/images/photos/000/011/047/medium/TooLight.jpg)](https://i.publiclab.org/system/images/photos/000/011/047/original/TooLight.jpg)

Further modifications should be limited to fine ballasting for which I should be able to use a bathtub.  Hopefully, the next ocean dive will take place this evening.

####Dive Report 8/6/15 Part 2-Too Heavy Again...
Added some fishing sinkers to the bottom and it went right back to being too heavy again...
I'm thinking another design revision might be in order wherein I'll secure both the weights and wings with the same zip ties.  That way the weights will also serve to secure the wings in place.

[![Dive_Collage.jpg](https://i.publiclab.org/system/images/photos/000/011/053/medium/Dive_Collage.jpg)](https://i.publiclab.org/system/images/photos/000/011/053/original/Dive_Collage.jpg)


####Dive Report 8/8/15 
  In what I had hoped would be my final design revision, I discovered I could use the metal ballast bars to double as wing clamps by replacing the pipe clamps with zip ties which fit through the holes in the metal bars.

[![somersalt.jpg](https://i.publiclab.org/system/images/photos/000/011/075/medium/somersalt.jpg)](https://i.publiclab.org/system/images/photos/000/011/075/original/somersalt.jpg)

While range of the diving motion was far better than in previous attempts (which either sank right away or floated on the surface), the dive angle ended up being far too steep which caused the glider to tumble over itself...

 I tried to add some smaller weights to compensate but that resulted in the overall weight being too heavy.  

The problem could be the result of a number of different factors-

* the ballast weights doubled as wings clips may have set the center of gravity too high
* the perforations in the wings may be filling with air and causing instability in the downward dive
* the delta-form wing design may be better suited to shallow dive motions
* the tail may be too tall
* the buoyancy engine assembly may be settling unevenly inside the bottle after it is sealed

Hopefully, I can isolate the problem without having to scratch the ballast/wing clips design.  Once again, please do not hesitate to add your input to the comment thread if you have any ideas.

####Dive Report 8/10/15 
In order to properly isolate any problems, I made sure to adhere as closely to the default design as possible.  I set up the glider so I could add additional ballast with rubber bands while in the field, so it wouldn't need to be reconfigured every time.


[![Gliderweights.jpg](https://i.publiclab.org/system/images/photos/000/011/099/medium/Gliderweights.jpg)](https://i.publiclab.org/system/images/photos/000/011/099/original/Gliderweights.jpg)


The above photo shows the glider with small metal wing clamps and two additional metal weights under the wings.  This configuration weighs approximately 2 pounds.  next to the glider in the photo can be seen the metal weights I added for additional ballast of which each weighs approximately 1/4 pound.  @danbeavers had an excellent observation in the comments section that salty water will result in extra buoyancy, and todays dive appeared to confirm this.  Starting with no extra weights, added the 1/4 pound weights until the glider sank.  This happened at 3 weights (2 3/4 pounds) while the glider still floated on the surface with two weights (2 1/2 pounds).  The target weight would appear to be between these measurements.


###Questions and next steps

####The Sensor Pod
While the purpose of the original Seaglide was the educational value of building it in the first place, the value of such a vehicle within the Citizen Science community would be in the sensor pod. Readers are encouraged to submit ideas using the comments thread and I will update the documentation accordingly.

####Design Modifications
  The discussion thread in the original post involved whether or not the Glider could be modified to steer itself or receive remote commands. Suggestions include-
  1. adding similar electronics to those used on DIY drones including a barometer, GPS and digital compass.
  2. Adding a small AIS transmitter configured to transmit its location for retrieval.
  3. Attaching a long fishing line-tether to the front of the vehicle to jerk the front around and guide it along a return route.

#####OpenLRS
   Most recently, I became aware of an exciting new open source technology through another project that involves a DIY aerial vehicle.  [OpenLRSng](http://openlrsng.org/) was originally designed as an ultra long-range transceiver for "FPV" (i.e controlled through a realtime 'first person' video feed) RC aircraft that uses 433MHz on UHF instead of the commercial 2.4 Ghz RC transmitters.  I initially became interested in it because it represents an exciting open source alternative to the various proprietary RC control systems on the market.  Furthermore, it can even be built from scratch using common, arduino-compatible RF Modules-http://www.rcgroups.com/forums/showthread.php?t=2114859!!
  The best part in relation to the seaglide project is that it can supposedly TRANSMIT UNDERWATER!!!  Further information can be found at the following discussion threads-

http://www.subpirates.com/showthread.php?5173-OpenLRS-433mhz-RX-and-TX-modules-what-it-is-where-to-get-it

http://www.theassociationofmodelsubmariners.com/t83p60-2-4-ghz-and-submarines-also-458-9-mhz

 