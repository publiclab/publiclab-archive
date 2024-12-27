---
title: "Testing Riffle Documentation - 1wire"

tagnames: 'riffle, riffle-beta, activities:riffle'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/10-13-2016/testing-riffle-documentation-1wire.md
nid: 13559
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/018/517/original/realonewire.png)

# Testing Riffle Documentation - 1wire

by [pdhixenbaugh](../../../profile/pdhixenbaugh) | October 13, 2016 18:39

October 13, 2016 18:39 | Tags: [riffle](../tag/riffle), [riffle-beta](../tag/riffle-beta), [activities:riffle](../tag/activities:riffle)

----

**Status: Code working, incorrect temperatures.** Need to resolve this. Does documentation need a troubleshooting section? See comments for latest.

###What I want to do

There's some great documentation up for how to use sensors with the riffle, and I'm pretty new to electronics, so I'm going to test them out by setting up my first sensors to use with the riffle. This first post will start with the 1-wire sensor, and will have more introductory material as I figure stuff out -- the next ones will focus more on setting up the hardware.

###Context

@donblair sent me a package with 4 sensors to test out. My inexperience is showing since I'm not confident with how to use them, or even what they are and what they do. But I do recognize the 1-wire temp sensor, so let's get to work. **EDIT** I incorrectly identified these parts. The red circled thing is the thermistor.

[![IMG_20161013_114138.png](//i.publiclab.org/system/images/photos/000/018/391/large/IMG_20161013_114138.png)](//i.publiclab.org/system/images/photos/000/018/391/original/IMG_20161013_114138.png)

### Look up information

I started by getting to the riffle documentation. Navigating from Projects>Tools was one way, or just by visiting http://publiclab.org/wiki/riffle. If you search "Riffle," this wiki page does not come up.


[![snip_20161013121853.png](//i.publiclab.org/system/images/photos/000/018/392/large/snip_20161013121853.png)](//i.publiclab.org/system/images/photos/000/018/392/original/snip_20161013121853.png)


[![1.png](//i.publiclab.org/system/images/photos/000/018/393/large/1.png)](//i.publiclab.org/system/images/photos/000/018/393/original/1.png)

From the Wiki page, there's a list of sensor types, so let's click on the one we have, 1-wire.

[![snip_20161013122247.png](//i.publiclab.org/system/images/photos/000/018/394/large/snip_20161013122247.png)](//i.publiclab.org/system/images/photos/000/018/394/original/snip_20161013122247.png)

It takes you to the github page, which has the arduino code and the instructions for setting up this type of sensor. So getting started with the instructions...

[![snip_20161013122449.png](//i.publiclab.org/system/images/photos/000/018/395/large/snip_20161013122449.png)](//i.publiclab.org/system/images/photos/000/018/395/original/snip_20161013122449.png)

[![snip_20161013122723.png](//i.publiclab.org/system/images/photos/000/018/396/large/snip_20161013122723.png)](//i.publiclab.org/system/images/photos/000/018/396/original/snip_20161013122723.png)

Oops, looks like what I thought was the one-wire temp sensor must be something else, or a different type. But I do have this sensor too, so I'll use it.

Reading further into this, it looks like some 1-wire sensors have 2 wires instead of three like the one pictured. So my original guess might be correct.


[![snip_20161013123534.png](//i.publiclab.org/system/images/photos/000/018/397/large/snip_20161013123534.png)](//i.publiclab.org/system/images/photos/000/018/397/original/snip_20161013123534.png)

This seems easy enough, except I don't have my guide to resistors handy, so searched "resistor color chart" on google. I then realized that some of the resistors were difficult to read, starting and ending with the same color, with no obvious "start with this side" indications. So I ended up using a multimeter.

**The Documentation** says use a 4.7k pull up resistor, but in one place it says 10k. I don't have a 4.7k resistor, so I'm going with the 10 k.


[![snip_20161013140709.png](//i.publiclab.org/system/images/photos/000/018/398/large/snip_20161013140709.png)](//i.publiclab.org/system/images/photos/000/018/398/original/snip_20161013140709.png)


Finished building the circuit on the protoboard. I tried best I could to secure the wires by bending them on the underside of the protoboard, without shorting out with other things. Still the connections felt loose since I'm not soldering. Also, I made sure to use the pinboard schematic on the documentation rather than the flipped labels on this (beta) version of the protoboard.


[![snip_20161013140809.png](//i.publiclab.org/system/images/photos/000/018/399/large/snip_20161013140809.png)](//i.publiclab.org/system/images/photos/000/018/399/original/snip_20161013140809.png)

To me, a novice with electronics, this picture *looks* really busy, but it only took a few minutes to do. Copying from the pinboard diagram was straightforward. I verified column by column that everything was connected to the right other things.

###Step 2, Software

Now that the circuit is built, time to load the software onto the riffle. I downloaded the repository, and unzipped it into the Arduino's sketch folder, accessed from the Arduino IDE. (Side note: The IDE prompted me that some of my libraries and boards had updates available, but I'm not sure if those would break functionality so I leave them alone).


[![snip_20161013141645.png](//i.publiclab.org/system/images/photos/000/018/400/large/snip_20161013141645.png)](//i.publiclab.org/system/images/photos/000/018/400/original/snip_20161013141645.png)


It looks like I already have versions of some of these libraries, but just hoping that it's ok for them to be side by side. I'll find out if it's not when I compile I suppose.


[![snip_20161013142052.png](//i.publiclab.org/system/images/photos/000/018/401/large/snip_20161013142052.png)](//i.publiclab.org/system/images/photos/000/018/401/original/snip_20161013142052.png)

On the first compile -- I found a missing ";" in the code! So I submitted a pull request to fix it. Ain't github grand!?

Second time, it compiled ok -- with some warnings saying I had a bunch of duplicate libraries. So I plug in the riffle, and upload. Seems to be taking longer than some other sketches I've uploaded...

Hmm, I get a failure and a weird message:
    Sketch uses 22,408 bytes (69%) of program storage space. Maximum is 32,256 bytes.
    Global variables use 1,476 bytes (72%) of dynamic memory, leaving 572 bytes for local variables. Maximum is 2,048 bytes.
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 1 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 2 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 3 of 10: not in sync: resp=0xb3
    Problem uploading to board.  See http://www.arduino.cc/en/Guide/Troubleshooting#upload for suggestions.
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 4 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 5 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 6 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 7 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 8 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 9 of 10: not in sync: resp=0xb3
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 10 of 10: not in sync: resp=0xb3

Trying again...

Looks like the same thing (verbose)... that baud rate looks odd... I'm not sure what it means, but wasn't it supposed to be 9600?


    Sketch uses 22,408 bytes (69%) of program storage space. Maximum is 32,256 bytes.
    Global variables use 1,476 bytes (72%) of dynamic memory, leaving 572 bytes for local variables. Maximum is 2,048 bytes.
    C:\Program Files (x86)\Arduino\hardware\tools\avr/bin/avrdude -CC:\Program Files (x86)\Arduino\hardware\tools\avr/etc/avrdude.conf -v -patmega328p -carduino -PCOM3 -b115200 -D -Uflash:w:C:\Users\phixn\AppData\Local\Temp\buildaf0471be2ea1e659444741fc39ffe879.tmp/riffle_one_wire.ino.hex:i 
    
    avrdude: Version 6.0.1, compiled on Apr 15 2015 at 19:59:58
             Copyright (c) 2000-2005 Brian Dean, http://www.bdmicro.com/
             Copyright (c) 2007-2009 Joerg Wunsch
    
             System wide configuration file is "C:\Program Files (x86)\Arduino\hardware\tools\avr/etc/avrdude.conf"
    
             Using Port                    : COM3
             Using Programmer              : arduino
             Overriding Baud Rate          : 115200
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 1 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 2 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 3 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 4 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 5 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 6 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 7 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 8 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 9 of 10: not in sync: resp=0xca
    avrdude: stk500_recv(): programmer is not responding
    avrdude: stk500_getsync() attempt 10 of 10: not in sync: resp=0xca
    
    avrdude done.  Thank you.

### Troubleshooting

With @donblair's help, I was able to successfully troubleshoot the upload. The riffle-specific troubleshooting steps seem to be:
- Confirm that the switch is set to "USB/lith"
- Unplug everything that may be plugged into the Riffle (including the battery)

### Serial Monitor

Using the serial monitor shows that the Riffle is reading SOME type of signal, but I'm not sure that it's really temperature.


[![snip_20161013201241.png](//i.publiclab.org/system/images/photos/000/018/403/large/snip_20161013201241.png)](//i.publiclab.org/system/images/photos/000/018/403/original/snip_20161013201241.png)

### Transfer to breadboard

Seeing if this helps get better connections, and maybe better readings, but it doesn't.
Pausing here for now. 

###Questions and next steps

**Troubleshoot temperature sensor and get it working.**
* Doublecheck the circuit is set up properly and well connected
* Double check that the resistor is the right size -- does anyone have input about whether it's ok to use 10k or 4.7k for the pullup resistor?
* Fix the image so it shows the one wire sensor instead of the thermistor. (done).