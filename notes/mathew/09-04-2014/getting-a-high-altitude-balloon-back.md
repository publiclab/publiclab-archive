---
title: "Getting a high altitude balloon back"

tagnames: 'balloon-mapping, solar-balloon, mapping, balloon, arhab'
author: mathew
path: /notes/mathew/09-04-2014/getting-a-high-altitude-balloon-back.md
nid: 11101
uid: 4
cids: 10190,10196,10209,10924,12721
---

![](https://publiclab.org/public/system/images/photos/000/006/584/original/Screen_Shot_2014-09-03_at_10.08.19_PM.png)

# Getting a high altitude balloon back

by [mathew](/profile/mathew) | September 04, 2014 05:11

September 04, 2014 05:11 | Tags: [balloon-mapping](/tag/balloon-mapping), [solar-balloon](/tag/solar-balloon), [mapping](/tag/mapping), [balloon](/tag/balloon), [arhab](/tag/arhab)

----

###What I want to do
fly a high altitude balloon and get it back.  This means tracking where it goes and calling home.
I want to use GPS to track the flight, and see what different radios will send back location data.

###My attempt and results
I thought I would do this through APRS, an amateur radio data network, but with the advent of cheap satellite-based commercial trackers it is cheaper to buy a pre-made device. I went with a [Spot 2](http://www.findmespot.com/en/). It [cost $60](http://www.amazon.com/gp/offer-listing/B002PHRDO2/ref=sr_1_2_olp?s=gps&ie=UTF8&qid=undefined&sr=1-2&keywords=spot&condition=used), but the Iridium satellite service costs $150 per year to send GPS coordinates every 10 minutes when it is on. Luckily, I can transfer the service to a new device if I lose this one. That is appealing. And its satellite system doesn't require an amateur radio license.  

[![Screen_Shot_2014-09-03_at_9.56.48_PM.png](https://i.publiclab.org/system/images/photos/000/006/582/medium/Screen_Shot_2014-09-03_at_9.56.48_PM.png)](https://i.publiclab.org/system/images/photos/000/006/582/original/Screen_Shot_2014-09-03_at_9.56.48_PM.png)

I could have gone with other satellite systems. things like:

* [Habduino](http://www.habduino.org/), an arduino telemetry board that costs 105 british pounds.
* [Build-my-own Spot clone](https://www.sparkfun.com/products/retired/11088) with Sparkfun's plans for their discontinued product.
* Use [the RockBLOCK](https://www.rock7mobile.com/products-rockblock.php), a serial modem for [sending 50 character text messages](http://arduiniana.org/libraries/iridiumsbd/) into Iridium for ~10 british pence a message.  

#####Amateur radio systems
I have an a amateur radio license for doing just this very thing, and have looked at it. 
The amateur radio system I liked was an all-in-one transmitter called the [BeelineGPS](http://www.bigredbee.com/zc139/index.php?main_page=product_info&cPath=66&products_id=207). I also looked at [were the Tiny Track 4](http://www.byonics.com/tinytrak4/) and a [transmitter, a system of this sort.](http://simsat.net/carrollsat/), But this radio would probably not be able to communicate with a tower at lower altitudes.  So with an amateur radio system, we would need a ground tracker

#####Ground Trackers

This [Balloon News article has several options.](http://balloonnews.wordpress.com/2013/07/03/buzz-off-recovering-your-payload-from-dense-vegetation/) 

######[Doppler radio setups]
[Doppler Radio](http://members.chello.nl/~w.hofman/pa8w/dopplerRDF.htm), or Time Difference Of Arrival, [TDOA Radio](http://www.handi-finder.com/) or Radio Direction Finding, [RDF](http://wiki.spench.net/wiki/SDRDF) is a way of finding a simple transmitter.

[Finding the direction to the transmitter requires one to measure phase difference of pseudo-doppler signal against a known reference (e.g. 'North'). The pseudo-doppler signal is introduced (superimposed on the demodulated signal) by electronically rotating the antenna array against a reference signal of the same frequency as half the switching rate.](http://wiki.spench.net/wiki/SDRDF)

[![Screen_Shot_2014-09-03_at_9.20.04_PM.png](https://i.publiclab.org/system/images/photos/000/006/581/medium/Screen_Shot_2014-09-03_at_9.20.04_PM.png)](http://www.handi-finder.com/)

#####Questions and next steps
I got the Spot... I need to fly the balloon. It seems to report more regularly when facing upwards. 