---
title: "Can a Linux board and Wifi Bridge be cost effective for remote environmental monitoring?"

tagnames: 'fido, open-pipe-kit'
author: rjstatic
path: /08-11-2015/can-a-linux-board-and-wifi-bridge-be-cost-effective-for-remote-environmental-monitoring.md
nid: 12137
uid: 174
cids: 12357,12358,12363
---

![](https://publiclab.org/public/system/images/photos/000/011/100/original/p6Ixe.jpg)

# Can a Linux board and Wifi Bridge be cost effective for remote environmental monitoring?

by [rjstatic](/profile/rjstatic) | August 11, 2015 01:19

August 11, 2015 01:19 | Tags: [fido](/tag/fido), [open-pipe-kit](/tag/open-pipe-kit)

----

###What I want to do
I'm doing some preliminary research on what kind of "case" would be good for an outdoor/remote Sensor Pipe and could be built with off the shelf parts. The approach here uses a Solar Panel and Battery supporting a WiFi Bridge and R-Pi running Linux. What I'm trying to figure out is if this approach is cost effective compared to approaches that use lower powered boards (ex. Arduino, Waspmote, Bee) with lower powered radio protocols (ZigBee). 

###My attempt and results
Below you'll find some off the cuff numbers. If you're interested in this topic I'd love some feedback. I try to go for an example scenario which is somewhat worst case scenario for power and using parts that are expensive. You may find that I should account for a much worse or hopefully better scenario or maybe you have some creative ideas to cut costs.

#### Parts
- Ubiquity Nano [$50](http://www.flyteccomputers.com/details.cfm?wid=3881&wb=loco5&wre=1&gclid=COP9mq7hn8cCFZMWHwodQXUHNw)
- 5 gallon bucket, upside down with electronics mounted to the bottom [$3](http://www.homedepot.com/p/The-Home-Depot-5-gal-Homer-Bucket-05GLHD2/100087613?gclid=COqd97zhn8cCFY2RHwodqhEJmg)
- solar panel with Watts high enough to produce a day's worth of electricity in 6 hours
- battery with enough Watt Hour capacity to sustain for 24 hours
- some kind of timer that manages power to the electronics, maybe just keeping them on for 10 minutes every hour. Example:  [$15](http://www.mscdirect.com/product/details/77685782?src=pla&cid=PLA-Google-PLA+-+Test&CS_003=7867724&CS_010=77685782)


#### Power profiles
##### Raspberry Pi
The Raspberry Pi runs around 5v 1A. That's about 5W. We could use some power profiling to see how much it actually requires. 

##### Ubiquity Nano
According to [this datasheet](https://dl.ubnt.com/datasheets/nanostationm/nsm_ds_web.pdf), max consumption is around 8W. It's probably much less given we won't be streaming video in most cases.


#### Example scenario
Let's say we need power for 10 minutes of every hour. The total Watt Hours needed from a battery and a Solar Panel would be...

```
(5W Raspberry Pi + 8W Nanostation) * 4 hours = 52 Watt Hours
```

The battery needs a capacity of 52 Watt Hours. A [Lithium Ion battery from Voltaic Systems with 72 Watt Hours costs $129](http://www.voltaicsystems.com/v72). Given that it's Lithium Ion and that company offers fancy consumer tech, I think we could go get much lower but let's just go with this for worst case scenario.

The Solar Panel needs to suck in 52 Watt Hours, and let's be pessimist and say you're in an area that only get 6 hours of sunlight. That means it needs to be a 9 Watt Solar Panel (52Wh/6h=8.66W). Again going with a fancy consumer tech company, Voltaic Systems offers a [9W Solar Panel for $89](http://www.voltaicsystems.com/9-watt-panel).
 
That puts us back $218 for the Solar Panel and Battery supporting a Raspberry Pi and WiFi bridge in what might be worse case scenario. A Raspberry Pi plus a Nanostation costs about $90, tack on a bucket, some mounting brackets, and a mechanical timer (which I still need to find one that would work in this scenario, $15 maybe) and we get the price to somewhere around $350 without the sensor.  


###Questions and next steps
1. I have to nail down these power profiles. I need to get a mechanical timer and a [kill a watt](http://www.altestore.com/store/Meters-Communications-Site-Analysis/Meters-Battery-Monitors/Power-Meters/Kill-A-Watt-EZ-Electricity-Cost-Usage-Meter-P4460/p6659/?gclid=CNKAmbzsn8cCFYUXHwodpSID0A) to measure the power consumption. 
2. Then I need to do some more research on batteries and solar panels, possibly a controller and inverter too. 
3. Then it will be time to test what I (hopefully we) come up with. 

###Why I'm interested
The gut reaction to this question is "no", but given that Solar Panel and battery prices are dropping, may continue to drop, and small Linux boards may become more efficient, this is something I want to keep my eye on even if the answer is currently "no". The answer may turn out to be "almost" or "no for now but next year it might be the same". 

The thing to gain here is if the answer is "yes" or when the answer is "yes", we get to utilize in remote places the modularity of the GNU Linux platform and modern computing standards like USB. That opens up remote sensing to a whole new audience where things like [Open Pipe Kit](http://openpipekit.org) could be really handy.
