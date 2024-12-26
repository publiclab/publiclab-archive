---
title: "Airpup: designing a kite balloon"\ntagnames: 'balloon-mapping, kite-mapping, kite-balloon-hybrid, photo-rig'
author: mathew
path: /notes/mathew/10-18-2018/airpup-designing-a-kite-balloon.md
nid: 17322
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/027/030/original/P2400006_1.jpg)

# Airpup: designing a kite balloon

by [mathew](../profile/mathew) | October 18, 2018 05:42

October 18, 2018 05:42 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [kite-balloon-hybrid](../tag/kite-balloon-hybrid), [photo-rig](../tag/photo-rig)

----

## Overview

[Airpup](https://headfullofair/com/tags/airpup) is a small kite balloon designed for quiet, long-duration flight in most weather without the restrictions placed on drones. You can [read more about Airpup](https://headfullofair.com/tags/airpup) on my blog, [get Airpup on Crowd Supply](https://crowdsupply.com/head-full-of-air/airpup), and download Airpup's [assembly patterns on github](https://github.com/mathewlippincott/airpup-balloon).

Airpup is stable and maneuverable. At 37 cubic feet of helium, Airpup takes about 60% of the gas needed to fly a Balloon Mapping Kit. Payloads up to 500g fly in winds from 0mph to surpassing 20mph.

I've been enjoying taking aerial video using a [phone gimbal](https://www.bhphotovideo.com/c/product/1321842-REG/feiyu_fyspg_spg_3_axis_handheld_gimbal.html).

Airpup navigating the air between kites at the Lincoln City Fall Kite Festival:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dfNq1N3qnPg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You can download the [patterns for Airpup on Github](https://github.com/mathewlippincott/airpup-balloon). All 2D plans are made with open source [QCAD](https://www.qcad.org). 3D models are made with Autodesk's [Fusion 360](https://www.autodesk.com/products/fusion-360/overview).

## Design goals

Airpup's design grew out of the ways people have used [balloon and kite mapping](https://publiclab.org/wiki/balloon-mapping), and the issues they faced moving helium tanks, moving inflated balloons and long kites, and flying on their own schedule-- not the wind's.

I wanted to combine the reliability and simplicity of a balloon with the ability to fly in higher winds like a kite. I also wanted to make payload attachment simple, so there are few strings to get tangled and no stabilizers to set up.

I built rails into the belly that accept a standard 1/4-20 tripod mount, based on @ranon's [rail mounts](https://publiclab.org/notes/ranon/08-10-2016/reconfigurable-rig-pole-configuration-and-github-repository). 

![Airpup's belly rails][1]

*Kestrel 5500 weather station, Feiyu SPG gimbal & phone, Canon camera is mounted on an [Aerobee Bracket](http://kaptery.com/product/aerobee-rig-kit)*

Although the resulting balloon is more expensive than a rubber balloon-based kit, Airpup packs down small and can be [borrowed by mail](https://crowdsupply.com/head-full-of-air/airpup).

![image description][2]

## Field testing

I walked the balloon and tank 4 miles round trip to the beach. At 25lbs, it was manageable in daypack with a hip band. 

![image description][4]

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0rGuT0tnSNg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Using a Kestrel 5500 from my [Aeropod](https://publiclab.org/notes/cfastie/10-17-2017/winds-aloft-sensor-overload), I recorded the winds in 30 second averages and overlaid them on the video.

To simulate higher wind speeds, I do tow tests by bike:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2imR-zk1Fjo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Winder

Airpup will come with a flat winder. The winder's figure-eight winding doesn't cause line twisting. Its narrow profile fits in a mailing tube.

![winder with string][5]

Line can be tossed off of the winder for smooth line control.

![image description][6]

More on [how to use the winder](https://www.headfullofair.com/post/flat-line-winder/) on my blog. [Plans](https://github.com/mathewlippincott/flat-winder) are on Github. 

## Previously in kite balloons

This project has been on my mind for a while. A kite balloon featured in the [first real-world conversation](https://www.headfullofair.com/2010/09/24/kite-balloon-construction-ideas-with-boston-folks/) I had with @warren and my first time e-mailing with @danbeavers. A DIY kite balloon was the first thing I flew with @gonzoearth and @olivia, and the [wiki page for a Kite-Balloon Hybrid](https://publiclab.org/wiki/kite-balloon-hybrid) was the first thing I posted to Publiclaboratory.org in January 2011, trying to collect @warren, @liz, @eymund's experimental designs with some sources I'd collected.

![image description][7]

*Flying a kite balloon with Stewart Long and Olivia Everett, March 2011. It flew alright but leaked helium over 20 minutes and got stuck in a tree*

The project didn't go very far because we couldn't seem to make a small, lightweight balloon that both held helium and held up in the force of the wind. Our DIY mylar balloons were taped together and all leaked. The heat-seamed plastics I was working with couldn't hold pressure. A double envelope on top of a rubber balloon was over-weight. Party balloons weren't big enough to be kites and hold a camera. The manufacturer we worked with at the time, the now-defunct Southern Balloon Works only had 4 mil polyurethane that was too thick and heavy to make anything small. The idea of a Helikite-like balloon, as @warren and I talked about, was still under patent. 

Some hints have been posted of functional DIY designs, such as @Alex_the_Ukranian's [carbon-fiber framed polyethylene balloon](https://publiclab.org/notes/Alex_the_Ukrainian/03-21-2015/small-diy-aerostat-made-in-kharkiv-ukraine). 

#### Prototypes:

* @Shannon [Prototype 'pufferfish' balloon from EcoHack](https://publiclab.org/notes/shannon/4-21-2012/prototype-pufferfish-balloon-ecohack)

#### Concepts:

* @Valerie [Balloon Kite design and prototype](https://publiclab.org/notes/valerie/4-21-2012/balloon-kite-design-and-prototype)
* @Eustatic [Sketches for "Corset-Chiton" idea for Pufferfish mod](https://publiclab.org/notes/eustatic/5-2-2012/sketches-corset-chiton-idea-pufferfish-mod)
* [Making a balloon making jig](https://publiclab.org/notes/mathew/5-18-2012/making-balloon-making-jig)

#### Examples:

* [American Kite Fishing, low-tech Kite-Balloon hybrid](https://publiclab.org/notes/mathew/2-1-2013/american-kite-fishing-low-tech-kite-balloon-hybrid)
* [Arthur W. Mears Kite Balloon, archetype for Kingfisher, Skystar?](https://publiclab.org/notes/mathew/4-13-2012/arthur-w-mears-kite-balloon-archetype-kingfisher-skystar)
* [Kite balloon of R.H. Upson](https://publiclab.org/notes/mathew/4-13-2012/kite-balloon-rh-upson)
* @liz [1967 dart balloon](https://publiclab.org/notes/liz/1-31-2013/dart-balloon-1967)

  [1]: /i/27031.jpg "airpup-config-wide.jpg"
  [2]: /i/27032.jpg "airpup-packedup-inbox.jpg"
  [3]: /i/27037.gif "takeoff2.gif"
  [4]: /i/27035.jpg "P2390691-contrast.jpg"
  [5]: /i/27033.png "string.png"
  [6]: /i/27034.gif "winder-sm.gif"
  [7]: /i/27036.jpg "1299869655936-orig.jpg"