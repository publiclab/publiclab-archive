---
title: "Riffle conductivity caps and other housing ideas"

tagnames: 'arduino, water-quality, riffle, bottle, pet-bottle, data-logger-enclosures, sensor-enclosures, activity:sensor-enclosures, activity:conductivity'
author: mathew
path: /notes/mathew/02-10-2016/riffle-conductivity-caps-and-other-housing-ideas.md
nid: 12674
uid: 4

cids: 13538,13541,13543,13544,13551,13562,13564,13566,13567,13568,13569,13579,13580,13581,13582,13583,13584,13586,13587,13588,13589,13605,13606,13638,13642,13651,13992,17674

---

![](https://publiclab.org/public/system/images/photos/000/014/191/original/P_20160209_143505.jpg)

# Riffle conductivity caps and other housing ideas

by [mathew](../../../profile/mathew) | February 10, 2016 01:54

February 10, 2016 01:54 | Tags: [arduino](../tag/arduino), [water-quality](../tag/water-quality), [riffle](../tag/riffle), [bottle](../tag/bottle), [pet-bottle](../tag/pet-bottle), [data-logger-enclosures](../tag/data-logger-enclosures), [sensor-enclosures](../tag/sensor-enclosures), [activity:sensor-enclosures](../tag/activity:sensor-enclosures), [activity:conductivity](../tag/activity:conductivity)

----

###What I want to do
Follow up on @Donblair's [Riffle housing specification](/notes/donblair/12-13-2015/riffle-ct-conductivity-temp-beta-design-enclosure-probes-data-collection) with some tested parts. 

There are two design ideas I'm working from, current versions of the original [through-the-cap conductivity](https://publiclab.org/notes/donblair/07-15-2014/recap-open-water-workshop-july-12-2014) screw design, and my [preferred strategy of using rubber stoppers](https://publiclab.org/notes/mathew/02-26-2015/sensors-in-soda-bottles). 

The through-the-cap designs were subjected to a limited test between late December and early January.  They were supposed to stay at the bottom of a water filled trash can for seven days, but they freed themselves and floated to the surface a bit earlier.

[![unnamed.jpg](//i.publiclab.org/system/images/photos/000/014/192/medium/unnamed.jpg)](//i.publiclab.org/system/images/photos/000/014/192/original/unnamed.jpg)

###Cap & Screw conductivity sensors
![don's original sketch](https://i.publiclab.org/system/images/photos/000/013/299/original/riffle-ito-A.png)

I want to make sturdier elaborations on Don's original sketch of cap with screws through it, pictured below. The original design had two mechanical problems: wood screws through the plastic cap leaked. Also, the alligator clips attached to the inside are easy to dislodge and less than ideal.  

![screws and alligator clips](https://i.publiclab.org/system/images/photos/000/005/342/original/IMG_0322.JPG)

![screws and alligator clips, inside](https://i.publiclab.org/system/images/photos/000/005/343/original/IMG_0321.JPG)

More recent testing has revealed that the [size and distance of the screws may create calibration issues](/notes/donblair/01-07-2016/conductivity-sensing-open-questions), and so large screws may not be ideal. Machine screws with nuts and rubber washers work much better, and I'll show three versions of that strategy, including very small(0-80) screws for more ideal sensor placement.


####0-80 screw kit
0-80 (size 0, 80 threads per inch) screws are the smallest standard-sized screw in the US & Canada.  They are a specialty item available only from catalogs.  Not all parts (like the ring terminals) come in size 0, so the parts selection is based on best guesses of inside and outside diameter of 0-80 screws. 

Parts list (with [McMaster Carr](http://www.mcmaster.com/) part #'s)

* One 22mm bottle cap and 2x each of:
* 5/8" 0-80 pan-head machine screws, stainless steel (91772A060)
* 0-80 hex nuts, stainless steel (91841A115)
* 002 square profile rubber o-rings  (170N12)
* \#0 nylon washers (90295A310)
* \#2 ring terminals or 'stud rings' crimpable wire terminals (7113K263)
* \#0 aluminum washers 93286A153

I tested two configurations-- just screws and rubber o-rings and screws, o-rings, and nylon washers to hold them in place.

With Nylon washers:

[![P_20160209_143604_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/193/medium/P_20160209_143604_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/193/original/P_20160209_143604_HDR.jpg)
[![P_20160209_143615_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/194/medium/P_20160209_143615_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/194/original/P_20160209_143615_HDR.jpg)

This is the easiest configuration to assemble.  The bottle cap is sandwiched between rubber washers, and nylon washers hold the rubber washers in place.  On the inside of the cap, two #0 aluminum washers pin the oversized #2 ring terminals down.  The thick nylon washers make the small screw more stable, and make the tiny nut easier to tighten down by exposing it away from the cap's surface. 

The nylon washers aren't a necessity, however, and if carefully tightened down, the rubber washers will sit under the screw's head:

[![P_20160209_143705_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/195/medium/P_20160209_143705_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/195/original/P_20160209_143705_HDR.jpg)

Notice how they pucker! this isn't ideal, and as Don noticed, [they can pop out](/notes/donblair/10-31-2015/riffle-water-bottle-enclosure-rubber-stopper-w-hole-silicone-sealant-8-weeks#c12833).


####6-32 screw kit
6-32 (size #6, 32 thread per inch thread density) are the smallest screws one can regularly find at a hardware store (sometimes 4-40 is available), and the smallest size for which washers are usually purpose-made.  Two can fit in a cap and form a fine seal.  As mentioned, they may be too large for a good calibration.  Assembly is the same as the 0-80 configuration.

Parts list (with [McMaster Carr](http://www.mcmaster.com/) part #'s):

* One 22mm bottle cap and two of each:
* 5/8" 6-32 pan-head machine screws, stainless steel (91735A150)
* 6-32 hex nuts, stainless steel (90257A007)
* \#6 rubber washers (90130A007)
* \#6 nylon washers (90295A380)
* \#6 ring terminals  or 'stud rings' crimpable wire terminals (7113K265)
* aluminum washers #6 (93286A007)


[![P_20160209_143726_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/196/medium/P_20160209_143726_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/196/original/P_20160209_143726_HDR.jpg)


###Stopper-based closure & rigid holders

I have previously [advocated for a stopper-based closure](/notes/mathew/02-26-2015/sensors-in-soda-bottles), which can used instead of a cap-based closure of the top of a bottle.  @Donblair has tried this in a very simple form, [just a stopper filled with silicone](/notes/donblair/10-31-2015/riffle-water-bottle-enclosure-rubber-stopper-w-hole-silicone-sealant-8-weeks), and has also had success.  We have played around with beeswax and while it looks like a good sealant (and quick!) no one has tried a field deployment.

 I want to elaborate on a better mount. That said, no one has built sensors around this strategy yet.   I did made this prototype without all the parts listed below, and without a working Riffle (still waiting for delivery).

Parts list (with [McMaster Carr](http://www.mcmaster.com/) part #'s):

* Rubber stopper with 3/8" hole (#3 for 22mm bottles, #7 for "gatorade" sized bottles)
* 3/8" OD rigid plastic tubing, I used PET tubing (8585K11)
* Silicone aquarium sealer (7327A21) or maybe Beeswax
* \#4 or #6 hose clamp (5321K14)
* 1/16" plastic loop clamps (8876T58)
* 5/8" 4-40 pan head machine screws 	(91735A109)
* 4-40 pan head hex nut 	(90257A005)	 
* 18650 [cell battery holder purchased](https://www.sun-vapers.com/buy/rubber-battery-holder/) at a 'vape shop'

The small plastic loop clamps (If I had them in hand) would be screwed down with the riffle with the machine screws, and grip the wire, which attaches to the plastic tubing with the hose clamp.  The wire loops into the battery holder.

[![P_20160209_144928_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/200/medium/P_20160209_144928_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/200/original/P_20160209_144928_HDR.jpg)

I will need to try this out with a taller bottle like a 1-liter.

This mount was partially inspired by a moment of public transit serendipity-- watching someone change the battery in their e-cigarette on the bus.  I realized they not only had an 18650 cell in their e-cigarette, they also had a keychain battery holder.  I went to a nearby 'vape shop' and attempted to buy such a keychain holder.  The atmosphere was clouded with candy-scented foulness and I left quickly without the thing I wanted, instead getting a multi-battery holder I cut down.   I ordered the keychain holder online. 

###Presta valves and pressurization options.
Previously, I've filled a [Riffle bottles with rice](notes/mathew/02-26-2015/sensors-in-soda-bottles) for electronic protecting structure, desiccation, and pressure resistance.  Many underwater devices are filled with mineral oil for the same reasons.  But both of those are messy options.  What if the bottle could be easily pressurized and depressurized with air?

I tested whether I could fit a Presta valve into a bottle with 0-80 conductivity screws.  the answer is a qualified 'yes.'  I can regularly inflate a soda bottle to 40PSI. Tightening down the Presta valve and making sure it is fully supported requires precision in assembly; without the nylon hold washers the valves leak.

Parts List:

* Presta valve cut from a bike tube (ask a bike shop for a flat)
* Presta hold nut
* 2x 1/4" ID x 1/2" OD x 1/8" thick rubber washer
* 2x 1/4" ID x 1/2" OD nylon washer

The presta valve needs rubber washers on the inside and outside, and nylon washers holding those rubber washers in place.  The rubber excess cut off of a bike tube will hold the valve in place on the inside.  

[![P_20160209_143627_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/201/medium/P_20160209_143627_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/201/original/P_20160209_143627_HDR.jpg)

[![P_20160209_143641_HDR.jpg](//i.publiclab.org/system/images/photos/000/014/202/medium/P_20160209_143641_HDR.jpg)](//i.publiclab.org/system/images/photos/000/014/202/original/P_20160209_143641_HDR.jpg)

###Questions and next steps-- Making rubber washers?

I tried using both the laminate paper insert washers in normal sodapop caps, but also wanted something more durable.  I bought a leather hole punch and a sheet of 1/16" rubber and cut some custom washers.  I don't know if they're a success.  They stick and make it hard to tighten the cap very far.  maybe with some oil they'd work.

[![P_20160209_173734.jpg](//i.publiclab.org/system/images/photos/000/014/203/medium/P_20160209_173734.jpg)](//i.publiclab.org/system/images/photos/000/014/203/original/P_20160209_173734.jpg)
