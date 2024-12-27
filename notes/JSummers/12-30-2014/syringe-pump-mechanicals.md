---
title: "Syringe pump mechanicals."

tagnames: '3d-printing, syringe, pump'
author: JSummers
path: /notes/JSummers/12-30-2014/syringe-pump-mechanicals.md
nid: 11500
uid: 304279
cids: 11009,11010
---

![](https://publiclab.org/public/system/images/photos/000/008/547/original/A_Pump1.jpg)

# Syringe pump mechanicals.

by [JSummers](/profile/JSummers) | December 30, 2014 22:03

December 30, 2014 22:03 | Tags: [3d-printing](/tag/3d-printing), [syringe](/tag/syringe), [pump](/tag/pump)

----

###What I want to do
This research note will eventually tell you how to build a pretty reliable and accurate syringe pump using 3d printed parts.  It is going to take a while for me to get the entire thing written up and even when I do it will only cover the mechanical parts of the pump.  The electronics will be described in a later note and the software can be accessed from an earlier note that described our automatic titrator, the titraumatic.  That note is found here.
###My attempt and results
The first thing you need are a bunch of 3d printed parts.  There are nine files that are available that will give you the parts in the figure below (there is a pen and a 5.5 mm wrench in the photo for scale).  With my printer it takes about 4.5 hours to print out a set of parts
[![PrintedParts.jpg](https://i.publiclab.org/system/images/photos/000/008/548/medium/PrintedParts.jpg)](https://i.publiclab.org/system/images/photos/000/008/548/original/PrintedParts.jpg)

Motor assembly:  The motor assembly contains the motor mount, the motor and the two 8 mm steel rods.  Attach the motor to the mount using four 20 mm M3 machine screws.  Insert the metal rods into the holes and clamp in place  The motor mount assembly is shown in the figure below (the end stop switch assembly can also be seen in this figure).

[![A_MotorEnd.jpg](https://i.publiclab.org/system/images/photos/000/008/552/medium/A_MotorEnd.jpg)](https://i.publiclab.org/system/images/photos/000/008/552/original/A_MotorEnd.jpg)

End stop switch assembly:  Bolt a lever switch to the end stop switch mount using 2.5 M machine screws and nuts.  Press the assembly onto the left side rod on the motor assembly so that it looks like the photo above.  

Carriage assembly:  The carriage is the most complicated part of the assembly.  It is the part that moves on the steel rods and is attached to the syringe plunger.  The parts of the carriage include two linear bearings, the inner wedge, the outer wedge and a metal clip. The photo below shows the carriage with the two bearings installed and clamped in place.  The inner wedge is to the right of the carriage and has been fitted with a #6 steel nut.   The outer wedge is to the right of the inner wedge, and the four-hole metal clip is to the right of the outer wedge.

[![CarriageAssy2.jpg](https://i.publiclab.org/system/images/photos/000/008/549/medium/CarriageAssy2.jpg)](https://i.publiclab.org/system/images/photos/000/008/549/original/CarriageAssy2.jpg)

The metal clip was fashioned out of 3/4" by 1/8" aluminum bar.  It is important that the holes in the clip align accurately with the holes in the carriage.  This can be done by following the steps below:
1) lay out the drill pattern on the aluminum bar making the top hole locations as low on the aluminum as possible (the clip in the figure has 8 holes since my original location of the holes was too high).  Punch a divot for the first hole but not for the other three.
2) Drill and tap the first hole.  Either 6-32 or M3-.5 machine screws will work, depending on what you have available.  
3)  Screw the carriage to the clip using the first screw and insert the largest nail that will fit into a second hole (photo below).  Align the bar and printed part as parallel as you can and tap the nail with a hammer to create a divot in the aluminum.  This will give you an accurate position to drill for the second screw.

[![MetalClipFab2.jpg](https://i.publiclab.org/system/images/photos/000/008/550/medium/MetalClipFab2.jpg)](https://i.publiclab.org/system/images/photos/000/008/550/original/MetalClipFab2.jpg)

4)  Remove the first screw, then drill and tap the hole for the second screw.
5)  Reassemble the assembly with the first and second screws in place.  Use the same technique with the nail to punch divots for the third and fourth screws.
6) Disassemble, drill and tap the third and fourth screw holes.
7)  Drill and cut the clip to accept the syringe plunger(s) that you intend to use.

Once you have the clip fabricated, connect the 1/4" flange nut to the back side of the carriage with M3 screws and nuts. Place the inner wedge with the nut side down into the slot on the carriage and place the outer wedge over the inner wedge.  The outer wedge is asymmetric and the ears should lay flat on the top of the carriage.  Place the clip over the outer wedge and screw it down to the carriage.  Screw a 6-32 machine screw down into the hole in the top of the inner wedge and start the threads but do not tighten it at this time.    Thread the 1/4" lead screw into the flange nut.
Once assembled, the plunger of the syringe can be dropped into the space between the clip and the outer wedge.  The plunger is then secured by tightening the screw at the top of the carriage.  Tightening this screw draws the inner wedge up against the outer wedge forcing it against the back of the syringe plunger.  At this point, the carriage assembly should look like the figure below. 

[![A_Carriage2.jpg](https://i.publiclab.org/system/images/photos/000/008/551/medium/A_Carriage2.jpg)](https://i.publiclab.org/system/images/photos/000/008/551/original/A_Carriage2.jpg)

Syringe mount assembly:
The syringe mount assembly consists of the mount, the syringe holder, a second limit switch, and the metal clip with two screw holes.  First, press two M 2.5 nuts for the limit switch into the recessed positions formed in the syringe mount and attach the limit switch with 16 mm 2.5 M machine screws.  Fabricate the two hole clip using the technique described for the four hole metal clip in the section above. Attach the two hole clip to the syringe mount using appropriate screws but do not tighten it down.  These screws are used to tighten the hold of the syringe mount on the syringe holder and syringe
 Plans are provided for syringe holders that fit 1, 3 and 10 mL Becton Dickenson plastic syringes.  Other syringes may require specific syringe holders with specified hole dimensions.    Files for these can be made fairly easily from the existing files using the free-ware program, Sketchup.

The photo below shows how a 10 mL syringe fits into the syringe holder.  
[![A_SyringeHolder1.jpg](https://i.publiclab.org/system/images/photos/000/008/553/medium/A_SyringeHolder1.jpg)](https://i.publiclab.org/system/images/photos/000/008/553/original/A_SyringeHolder1.jpg)

The syringe and holder should slide down into the syringe mount from above and at this point the mount screws on the front can be tightened.  The photo below shows how the syringe fits into the syringe mount and carriage assemblies.


[![A_Pump2.jpg](https://i.publiclab.org/system/images/photos/000/008/554/medium/A_Pump2.jpg)](https://i.publiclab.org/system/images/photos/000/008/554/original/A_Pump2.jpg)

Notice the adjustable end stop screw toward the top of the figure above.  It is positioned to contact the end stop switch attached to the syringe mount and signal that the syringe plunger is fully depressed.  The end stop switch mounted on the rail close to the motor mount can be slid forward or backward to give an indication that the plunger is fully extended in the opposite direction.  




##Bill of Materials:
     Motor mount   printed
     stepper motor, Sparkfun, $14.95, found [here](https://www.sparkfun.com/products/9238).
     mounting screws, 4 each, M3, 20 mm length
     1/4" to 5 mm connector, ServoCity, part 625120, $4.99, found [here](https://www.servocity.com/html/set_screw_shaft_couplers.html#.VKLtKsBA).
     Carriage      printed
     Inner wedge   printed
     Outer wedge   printed
     4 hole clip   metal
     8 mm linear bearings (two each) 
    End stop contact screw and nuts
    8mm rods, ~ 160 mm, two each
    Drive screw, 1/4" 20 tpi, part 60758, $10.16/ft from [here](http://www.roton.com/Mating_Components.aspx?family=7060758).
    Flange nut, part 91940, $13.71 from same source as above.
    Syringe mount  printed
     Syringe holder  printed
     two hole metal clip 
     End stop switch mount  printed
     Two switches (like [this](http://www.radioshack.com/spdt-switch-without-roller/2750016.html#q=lever%2Bswitch&start=6) one from Radio Shack, $3.50 each)
     There is also a on-off-on toggle switch that allows the syringe to be filled or emptied without using the computer interface.  This switch is not described in this note but will be part of a future research note documenting the electronics.
###Questions and next steps
I guess the next step is to get the electronics cleaned up and documented.  I also looked into commercial 3d printing services for people who would like to make one of these but do not have access to a 3d printer, but they wanted about $600 for a set.  If you want a set, let me know and I will think about how to price use of the printer.

###Why I'm interested
Because the commercial ones cost a minimum of $400.