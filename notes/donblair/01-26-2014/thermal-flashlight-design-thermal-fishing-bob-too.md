---
title: "Thermal flashlight design (+ thermal fishing bob, too?)"

tagnames: 'thermal-photography, thermal-flashlight, water-quality, thermal-fishing-bob, thermal, thermal-pollution, heat, upgrade:thermal-flashlight, upgrade:thermal-fishing-bob'
author: donblair
path: /notes/donblair/01-26-2014/thermal-flashlight-design-thermal-fishing-bob-too.md
nid: 9981
uid: 43651

cids: 8088,8089,8090,8100,8102,8107,8140,8147

---

![](https://publiclab.org/public/system/images/photos/000/002/666/original/thermalFlashMain.png)

# Thermal flashlight design (+ thermal fishing bob, too?)

by [donblair](../../../profile/donblair) | January 26, 2014 18:44

January 26, 2014 18:44 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-flashlight](../tag/thermal-flashlight), [water-quality](../tag/water-quality), [thermal-fishing-bob](../tag/thermal-fishing-bob), [thermal](../tag/thermal), [thermal-pollution](../tag/thermal-pollution), [heat](../tag/heat), [upgrade:thermal-flashlight](../tag/upgrade:thermal-flashlight), [upgrade:thermal-fishing-bob](../tag/upgrade:thermal-fishing-bob)

----

###What I want to do

I'm trying to come up with a single-board prototype for Public Lab's [Thermal Flashlight project](http://publiclab.org/wiki/thermal-camera).  I'm trying to build on the great design ideas put forth in recent research notes -- the idea of [adding a thermal flashlight shield to a Visuallight board](http://publiclab.org/notes/warren/01-25-2014/thermal-flashlight-visualight-shield), and the [proposal to mash up the Sparkfun IR breakout board with a 32u4 processorand an RGB Led](http://publiclab.org/notes/code4maine/01-22-2014/thermal-flashlight-using-mlx90614-ir-evaluation-board-from-sparkfun).  I'm still rather new to designing boards, but I was inspired to do this mashup when I found Rui Wang's [open source wearable computing project](http://rayshobby.net/?page_id=2686), which places an RGB, two rechargeable battery options (coin battery, or lipo via JST connector), and a piezo buzzer ('geiger counter' indications of temperature, whee!) all on a beautiful little board. Rui also added a light sensor, an ambient temperature sensor, a button, and has some nice large pin holes for attaching conductive thread.  Those might be great things to include here, too, but I figured I'd drop them for now, for simplicity's sake.

###My attempt and results

I've created a [thermal flashlight board design github repo](https://github.com/Pioneer-Valley-Open-Science/thermal-flashlight), where I'm working on an Eagle board.  The basic layout idea was this:


[![thermalFlashlightBoard.png](https://i.publiclab.org/system/images/photos/000/002/673/medium/thermalFlashlightBoard.png)](https://i.publiclab.org/system/images/photos/000/002/673/original/thermalFlashlightBoard.png)



Which, on the actual board, came out looking like this:

<a href="https://github.com/Pioneer-Valley-Open-Science/thermal-flashlight/blob/master/thermal-flash-32u4-board.png"><img src="https://raw.github.com/Pioneer-Valley-Open-Science/thermal-flashlight/master/thermal-flash-32u4-board.png" width=300></a>

I've added four holes on the corners of the board -- I'm imagining that it can thus be attached to the end of a stick or cardboard tube, so that it feels like a 'flashlight' -- but then it occurred to me that it'd make a pretty cool "Iron Man"-style device, too:

[![ironManMode.png](https://i.publiclab.org/system/images/photos/000/002/665/medium/ironManMode.png)](https://i.publiclab.org/system/images/photos/000/002/665/original/ironManMode.png)

**Thermal fishing bob tie-in**.  I also figured that I should add a screw terminal to the board to allow for connecting a thermistor probe -- that way the same board could serve as a [thermal fishing bob](http://publiclab.org/wiki/thermal-fishing-bob) prototype (imagined here as simply sitting inside the translucent plastic 'powdered lemonade' container design, pioneered by Sara and Catherine):


[![thermalFishingBob.png](https://i.publiclab.org/system/images/photos/000/002/669/medium/thermalFishingBob.png)](https://i.publiclab.org/system/images/photos/000/002/669/original/thermalFishingBob.png)


###Questions and next steps

**Further work on layout and schematic.** The design isn't finished yet -- still need to figure out the layout on the board, and I'm thinking that it might be a good idea to put breakout pins for a through-hole RGB LED for the thermal fishing bob case -- so that the LED could be bent at an angle and displaced away from the board, and would be more of a 'beacon' -- rather than being placed in the middle of the board.  Also note:  for the thermal fishing bob case, we could just opt not to place the IR sensor on the board, to make the design less expensive.

**NOTE**:  in the github repo, the "32u4" design (which I think is where we should head) is the set of schematics / board designs that have "32u4" somewhere in the label. 

**Kit options**. All of the board components are surface mount, except for the IR sensor and the screw terminal.  So a good plan might be:  have the board produced with only the surface mount components;  then, when distributing a kit, include that board + a coin battery, and then additionally include a) the IR sensor, for a 'thermal flashlight' kit, or b) the screw terminal + a thermistor, for the 'thermal fishing bob' kit.  Most folks could likely handle soldering those parts on themselves. 

Anyone who knows something about Eagle design -- please feel free to [download and tweak the board design](https://github.com/Pioneer-Valley-Open-Science/thermal-flashlight) and play around with the layout! 

###Why I'm interested

Seems like a single-sided, all-in-one thermal flashlight design would simplify production and reduce costs ... so here's my attempt at that ... 