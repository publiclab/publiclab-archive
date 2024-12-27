---
title: "Increasing brightness of fluorescence spectra"

tagnames: 'spectrometer, kits, fluorescence, desktop-spectrometer, sensitivity, oil-testing-kit, exposure, response:11006, brightness'
author: warren
path: /notes/warren/08-13-2014/increasing-brightness-of-fluorescence-spectra.md
nid: 11047
uid: 1

cids: 9982,9983,9984,9999,10006,10071,10077

---

![](https://publiclab.org/public/system/images/photos/000/006/248/original/IMG_20140813_172532.jpg)

# Increasing brightness of fluorescence spectra

by [warren](../../../profile/warren) | August 13, 2014 22:19

August 13, 2014 22:19 | Tags: [spectrometer](../tag/spectrometer), [kits](../tag/kits), [fluorescence](../tag/fluorescence), [desktop-spectrometer](../tag/desktop-spectrometer), [sensitivity](../tag/sensitivity), [oil-testing-kit](../tag/oil-testing-kit), [exposure](../tag/exposure), [response:11006](../tag/response:11006), [brightness](../tag/brightness)

----

###What I want to do

We had some trouble at [the recent oil testing kit meetup in New Orleans](/notes/stevie/08-01-2014/recap-july-31-new-orleans-oil-testing-meetup) in getting strong enough light into the spectrometer. @mathew and I have been [discussing possible solutions](https://github.com/publiclab/spectrometer3/issues/7) but we'd talked about having a very wide slit, to sacrifice resolution for brightness, as a worst-case solution. I gave it a try today.

###My attempt and results

[![Screen_Shot_2014-08-13_at_6.15.10_PM.png](https://i.publiclab.org/system/images/photos/000/006/249/medium/Screen_Shot_2014-08-13_at_6.15.10_PM.png)](https://i.publiclab.org/system/images/photos/000/006/249/original/Screen_Shot_2014-08-13_at_6.15.10_PM.png)

https://spectralworkbench.org/analyze/spectrum/32235

It seems we can get enough light to break the 25% intensity line, even without modifying exposure or anything in the webcam. I did not use a reflector or anything, just a UV laser. But the sharpness of the UV peak was very poor.

For reference, I set it up in a temporary setup like this with a webcam, DVD, and laser added:

[![IMG_20140809_131224.jpg](https://i.publiclab.org/system/images/photos/000/006/157/medium/IMG_20140809_131224.jpg)](https://i.publiclab.org/system/images/photos/000/006/157/original/IMG_20140809_131224.jpg)

###Questions and next steps

We have some other options to explore:

* reflectors behind the sample jar
* more laser!
* longer exposure, maybe through UVC USB controls
* a more sensitive camera
* a bigger lens

###Why I'm interested

We need to both simplify and increase sensitivity in the Oil Testing Kit to get clear enough results to try matching. I hope we don't have to give up resolution, but this did seem to work all right, and maybe we'd be able to distinguish spectra even with reduced resolution. 