---
title: Using a Cellular Modem to post directly to the web & track location 
tagnames: riffle
author: donblair
path: /notes/donblair/10-28-2015/using-a-cellular-modem-to-post-directly-to-the-web-track-location.md
nid: 12340
uid: 43651

---

# Using a Cellular Modem to post directly to the web & track location 

by [donblair](../profile/donblair) October 28, 2015 17:03

October 28, 2015 17:03 | Tags: [riffle](../tag/riffle)

Hi Folks!

More on this soon, but wanted to post a quick note on this code, in case it's helpful for anyone else ...

Recently, [John Keefe](http://johnkeefe.net/) put together an [awesome project](http://johnkeefe.net/monitoring-the-monongahela) in West Virginia, deploying water monitors that were [posting their data online 'live'](http://pages.johnkeefe.net/streamlab/) to [Sparkfun's 'phant' webservice](https://data.sparkfun.com/streams/7JLDOZZvLJFjm3lyoAL4).  These monitors used an Adafruit 'FONA' cellular modem and an arduino-compatible board to send an sms with data to [Twilio](https://www.twilio.com/), a service that can transform an SMS into a web action; Twilio was then configured to ping the relevant Sparkfun URL.  The code for doing that is [here](https://github.com/streamlab/code/blob/master/riffles/riffle_sensor_texter.ino). 

But: what if you're in a place where there isn't an easy Twilio equivalent?  I'm on my way back from Colombia, where I was working with folks at U. de Los Andes for another water monitoring project, and I was lucky enough to work with Carlos Arturo Sanchez, who really dug into the documentation for the SIM800 chip documentation, around which the FONA is based. 

Carlos figured out how to use the 'data' mode of this 2G cell chip to post directly to the web.  This was great for two reasons

- we couldn't find any easy-to-set-up-on-our-own SMS-to-web services in Colombia (though there do exist very robust services there for this, if you set up a special contract); this was an easy way to get our water monitors online quickly;

- it also meant that we were able to send each water monitoring data point for about 1 peso each -- currently, the equivalent of 0.00034 USD.  We think this is because we're essentially just hitting a special URL to send the data to Sparkfun -- we're not sending or receiving additional data -- and this is pretty much 'under the radar' with respect to any data usage fees.  I'm eager to try this trick back in Cambridge, too!

But Carlos didn't stop there ... he pushed us to grab the cell phone chip 'location' data (determined via cell towers, we think), which we also posted to our [Sparkfun phant feed](https://data.sparkfun.com/streams/v0YqYV5l1yiKYNOG6Gdd). It looks like this location data was accurate to within a few city blocks when we were trying it out.  Not great for all tracking purposes, but it might e.g. indicate whether a sensor got washed downstream ... and generally help to identify which sensor is which, out the field, for sparse deployments. 

The code we used is here: https://gist.github.com/dwblair/31e02199c5a240174082

The key lines in that code for Sparkfun posting start at line 335;  for GPS, line 226. 

Cheers!





