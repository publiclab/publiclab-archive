---
title: "Riffle Beta Release: Feature Freeze this Friday! (12/11)"\ntagnames: 'riffle'
author: donblair
path: /notes/donblair/12-09-2015/riffle-beta-release-feature-freeze-this-friday-12-11.md
nid: 12493
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/013/255/original/riffleCloseup.png)

# Riffle Beta Release: Feature Freeze this Friday! (12/11)

by [donblair](../profile/donblair) | December 09, 2015 18:47

December 09, 2015 18:47 | Tags: [riffle](../tag/riffle)

----

### Thank you for the feedback!

Thanks so much to everyone for all the fantastic comments on the earlier 'request for feedback' [note](https://publiclab.org/notes/donblair/11-30-2015/riffle-beta-release-feature-requests-review) I put out there.  We had a bunch of really good exchanges about what the first 'Beta' release of the Riffle should include.

Last week, we decided that we're going to shoot for a Beta Release towards the end of January -- so it's going to be useful to lock down the design very soon -- we're shooting for THIS FRIDAY (12/11) :)  Please feel free to send in any 'feature requests' or 'wish list' items before then -- we will then try to include whatever we can for this initial release. 

The main changes we're planning on implementing by the end of this week include:

### Latest Board Design / Current Features

The latest board files are labeled "riffle-beta-0.1.0", and are here:

https://github.com/OpenWaterProject/riffle

The latest changes (already implemented!) in this design from the last round of discussion are:

- put all the surface mounts parts on one side of the board 
- add two holes for allowing people to mount the board using M3 screws 
- replace the microUSB part with one that is more mechanically stable
- add an additional JST connector, so that the design now has a JST connector for using and recharging lithium batteries, and different JST connector that allows for *any* battery chemistry (and doesn't try to recharge them :))  
- break out the RTC 'alarm' pin, so that the user can wake the Riffle from sleep using the RTC time if they like 
- stick with the 'through-hole' 2x7 connector option (we found out that assembly houses can solder these for us, for a price)
- replace the previous LDO (the MCP1700-33), which only allowed for voltage inputs up to 6V, with an different LDO, the [MIC5225](https://www.adafruit.com/datasheets/mic5225.pdf), that allows up to 16V input.  This means that a typical 9V battery, or some popular 7V hobby batteries, could be used.  

The main remaining 'todos / open questions' are:

## Mounting Options?

Would we like to place some 'notches / grooves' on the side of the board to more easily allow for using plastic ties / rubber bands to secure it in place?  @warren had suggested this in the context of attaching a surface mount verison of the 2x7 connector to the board.  We decided to stick with through-hole for that connector -- but his illustration suggests what some useful 'general mounting notches' might look like: 

[![rubber-band.jpg](//i.publiclab.org/system/images/photos/000/013/251/medium/rubber-band.jpg)](//i.publiclab.org/system/images/photos/000/013/251/original/rubber-band.jpg)

@tonyc [had suggested](https://publiclab.org/notes/tonyc/10-12-2015/mounting-rig-for-the-riffle) this idea in the context of stabilizing the riffle inside a bottle ...

[![mounting.jpg](//i.publiclab.org/system/images/photos/000/013/252/medium/mounting.jpg)](//i.publiclab.org/system/images/photos/000/013/252/original/mounting.jpg)

[![mounting2.jpg](//i.publiclab.org/system/images/photos/000/013/253/medium/mounting2.jpg)](//i.publiclab.org/system/images/photos/000/013/253/original/mounting2.jpg)

... but this approach could be more generally useful for mounting in any context.  

What do y'all think?  Shall I extend the length of the board (only constraints are: PCB price, and keeping the overall length of the datalogger small enough that it fits in as many enclosures as possible), move some parts around, and add some notches?

## Pin input / output? 

What pins should be included in the final pinout on the 2x7 connector at the end of the board?

John Keefe had done some amazing work with the Riffle in West Virginia.  His [description of his wiring setup](http://johnkeefe.net/make-every-week-message-from-a-bottle) shows how he connects the sensor board and a cellular modem to the Riffle in an elegant way -- and given that this seems to be a popular configuration currently (two other projects are planning on using it), we should probably allow it to be done with some easy cabling.  The wiring diagram for his setup is here:

[![medium_riffle_fona_diagram_full.png](//i.publiclab.org/system/images/photos/000/013/254/medium/medium_riffle_fona_diagram_full.png)](//i.publiclab.org/system/images/photos/000/013/254/original/medium_riffle_fona_diagram_full.png)

I had broken out the Atmel328p hardware serial connection pins, RX and TX, on the 2x7 connector -- but I think that the FONA cell modem, and many other devices, can simply use 'software serial' -- which would allow one to use any digital pin for serial connections (I believe).  Do RX & TX belong on the 2x7 connector?  I've also tried to break out the SPI interface (e.g. some radios use this interface) ... 

### Other?

Let me know if there are other questions / additions / anything I've missed for the next version of the datalogger ... 





