---
title: "Making a balloon-making jig"

tagnames: 'balloon-mapping, kite-balloon-hybrid, diy-balloon'
author: mathew
path: /notes/mathew/5-18-2012/making-balloon-making-jig.md
nid: 2135
uid: 4
cids: 761,771
---

![](https://publiclab.org/sites/default/files/Foilballoon03.09.JPG)

# Making a balloon-making jig

by [mathew](/profile/mathew) | May 18, 2012 19:33

May 18, 2012 19:33 | Tags: [balloon-mapping](/tag/balloon-mapping), [kite-balloon-hybrid](/tag/kite-balloon-hybrid), [diy-balloon](/tag/diy-balloon)

----

We haven't had much luck finding someone willing to manufacture mylar balloons bigger than 1 meter (3 feet).  Which got me thinking about how to manufacture balloons myself.  

I've done a lot of plastic [heat seaming with an iron,](http://balloonkits.com/pages/instructions.html) but find the results with helium-resistant laminated foils not really flight-grade.  [I get good seams on thin polyethylene](http://www.headfullofair.com/2010/08/04/grassrootsmappingpdx-heat-seaming/) and that's about it.

The highest quality seams are made with a [bag sealer](http://www.uline.com/Grp_46/Poly-Bag-Sealers) because with a bag sealer, the plastic is held perfectly still through the heating and cooling process. The professional equipment is the same and hasn't changed much in the past 100 years-- heat welding rubber or plastic is done with [a gigantic, shaped bag sealer.](http://www.google.com/patents?id=LV5dAAAAEBAJ)

##materials inside a bag sealer##
The heating element is [nichrome wire.](http://en.wikipedia.org/wiki/Nichrome) covered in a sheet of PTFE (teflon).  The plastic is pressed down against the heating element with high-temperature silicone, and the nichrome wire controlled by a simple timed on/off circuit.  These products aren't too expensive from McMaster-Carr:
[Nichrome Wire](http://www.mcmaster.com/#nickel-chromium-(nichrome)-wire/=hlaehj)
[Conformable PTFE Tape](http://www.mcmaster.com/#ptfe-fastening-tape/=hlae2u)
[Extreme Temperature Silicone-Backed Rubber Strips](http://www.mcmaster.com/#silicone-rubber-bar-stock/=hlad8z)

To do more precision heating, a temperature control unit should be added.  This could be a DIY setup with an arduino, a thermocouple, and a solid-state relay, but there are also commercial units that are quite affordable:
[digital temperature controller](http://www.factorymation.com/s.nl/it.A/id.65050/.f?sc=2&category=157030)
[and another](http://www.omega.com/ppt/pptsc.asp?ref=CN740_Series)

[thermocouples that can squeeze next to nichrome](http://www.omega.com/ppt/pptsc.asp?ref=IRCO-BW)

##making a curved jig##
the bag sealer is easy because the heating element is straight.  Nichrome wire needs to be handled gently while heating, and keeping it in a smooth curve (like we want for balloon making) is potentially problematic.  My speculation is that it can be embedded into a routed channel in some material like MDF, so long as it is protected by more PTFE tape on both sides of the channel.  I'm going to try this out.

##Plastics that can be used##
Mylar is not a thermoplastic, but laminated mylar(usually with LDPE) will work.  EVOH does as well but is finicky about heat.  Both of these are purchasable from Gary at [balloonkits](balloonkits.com).  Gary also sells reusable balloon valves that can be heat seamed in.