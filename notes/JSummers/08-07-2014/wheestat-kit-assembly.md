---
title: "WheeStat kit assembly"

tagnames: 'water-quality, potentiostat, wheestat, response:10658, response:10627'
author: JSummers
path: /notes/JSummers/08-07-2014/wheestat-kit-assembly.md
nid: 11020
uid: 304279
cids: 9997,9998,10001,10221,10229,11446,11457,11461,11485,11487,12167,12772,12774,16416,16428
---

![](https://publiclab.org/public/system/images/photos/000/006/121/original/WheeStatKit.jpg)

# WheeStat kit assembly

by [JSummers](/profile/JSummers) | August 07, 2014 20:38

August 07, 2014 20:38 | Tags: [water-quality](/tag/water-quality), [potentiostat](/tag/potentiostat), [wheestat](/tag/wheestat), [response:10658](/tag/response:10658), [response:10627](/tag/response:10627)

----

###What I want to do
This note describes the WheeStat kit and how to put it together.  More information on the WheeStat is available on the User's Manual wiki page, found [here](http://publiclab.org/wiki/wheestat-user-s-manual). 
###What is in the kit?
All the stuff shown in the main image should be in the WheeStat kit.  This includes; (1) a vhs tape box which is used for an enclosure. (2) A Tiva LaunchPad development board (the red circuit board). (3) An analog circuit board (green board). (4) Three alligator clips. (5) A micro usb cable (6) A three conductor cable.  (7) Two headers for connecting the boards (blue things in the lower left corner),  (8) Stuff for making a silver / silver chloride reference electrode, (9) two graphite rods and electrical tape for working and auxiliary electrodes, and (10) a 1 GB usb flash drive with the most up to date code (as of when your kit was shipped from NC).   

###How does it go together?
The first thing you should probably do is put your reference electrode together since it will take a while to equilibrate.  Inside the 15 mL conical tube you should find a glass tube, a bunch of ceramic beads, a rubber septum, and a silver wire.  Don't lose the wire.  It is not just silver colored, it is the actual metal, silver.  It's not like it is ridiculously expensive, but you don't want to have to order another one.  To make the reference electrode, follow the instructions found [here](http://publiclab.org/notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes).  Inside the tube, you should also find two pieces of graphite rod.  Those are your low cost working and counter (also called auxiliary) electrodes.  you will want to wrap those electrodes in colored electrical tape to insulate them.
To make the WheeStat shield, you need to solder the headers to the green board on the far right and left, and solder wires for the three electrodes to the wire pads in the lower center.  

[![SolderedWheeStatBoard.jpg](https://i.publiclab.org/system/images/photos/000/006/122/medium/SolderedWheeStatBoard.jpg)](https://i.publiclab.org/system/images/photos/000/006/122/original/SolderedWheeStatBoard.jpg)

 Prepare the three conductor cable by stripping the gray insulation off about 3 inches on one side (for the alligator clips) and 1 inch on the other side (to connect to the board), exposing the wires inside>  Then strip 2 to 3 mm of the red/green/black insulation off of the individual wires.  As shown in the figure above, the green wire is soldered to the left wire pad, the red wire goes in the center, and the black wire goes on the right.
I like to mount the headers on the LauchPad (red board) first, then place the green board in place and solder the headers to the green board.  This keeps everything square, but be careful not to go overboard with the solder or you may end up soldering the LaunchPad to the headers as well.  
Once the wires and headers are on, it is time to attach the alligator clips to the other side of the wires.  To remove the insulating hoods from the red and black alligator clips, first clip them onto something soft, like an extension cord, then slide the hoods off.  Put the red and black hoods on the red and black wires and attach the clips to the wires.  I push the bare wire through a hole in the clip, crimp the clip to the insulation and fill the wire/hole with solder.  While the clip is still attached to the extension cord, slide the insulating hood back into place.    

[![finishedWheeStat.jpg](https://i.publiclab.org/system/images/photos/000/006/123/medium/finishedWheeStat.jpg)](https://i.publiclab.org/system/images/photos/000/006/123/original/finishedWheeStat.jpg)

Now you need to install the drivers and the GUI files on your computer.  Instructions for downloading the drivers from Texas instruments is ([here](http://publiclab.org/notes/JSummers/07-04-2014/getting-your-wheestat-set-up)).The GUI files and the source code for both the GUI and the microcontroller program will be on the flash drive that comes with the kit. Copy the folder containing the application file (.exe) and the folders containing the source code, the libraries, and the data files to your computer. Double clicking on the exe file should open the GUI.  Note that more recent versions of the software may be available by the time you get your kit.  If so, they should be available from our GitHub site.  There is a little more information on this [here](http://publiclab.org/notes/JSummers/07-04-2014/getting-your-wheestat-set-up).

###When will kits be available?
Early September, 2014