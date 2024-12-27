---
title: "Testing high-brightness 405nm LEDs in fluorescence spectroscopy of oils"

tagnames: 'spectrometer, fluorescence, cuvette, oil-testing-kit, response:12462, response:11063, response:12472, cuvette-frame, activity:spectrometry-sampling'
author: warren
path: /notes/warren/01-05-2016/testing-high-brightness-405nm-leds-in-fluorescence-spectroscopy-of-oils.md
nid: 12561
uid: 1

cids: 13249,13256,13277,13342,17173,29602

---

![](https://publiclab.org/public/system/images/photos/000/013/514/original/IMG_20160105_090916.jpg)

# Testing high-brightness 405nm LEDs in fluorescence spectroscopy of oils

by [warren](../../../profile/warren) | January 05, 2016 16:20

January 05, 2016 16:20 | Tags: [spectrometer](../tag/spectrometer), [fluorescence](../tag/fluorescence), [cuvette](../tag/cuvette), [oil-testing-kit](../tag/oil-testing-kit), [response:12462](../tag/response:12462), [response:11063](../tag/response:11063), [response:12472](../tag/response:12472), [cuvette-frame](../tag/cuvette-frame), [activity:spectrometry-sampling](../tag/activity:spectrometry-sampling)

----

###What I want to do

After a [great 2015 Barnraising session](/notes/warren/11-30-2015/bolt-and-acrylic-cuvette-holder-research) on the topic, @tonyc and I have been trying out a few different designs for a more compact, generalized cuvette holder for the [Desktop Spectrometer](/wiki/spectrometer) that could potentially have a dimmable LED with a brightness dial, for either absorption or fluorescence work. 

After [some discussion](/notes/warren/08-19-2014/ultra-micro-cuvette-tests-uv-led-and-low-temperature-fluorescence#c12961), I'd ordered some very bright 405nm blue/UV light emitting diodes (LEDs) [from LED Group Buy](
http://www.ledgroupbuy.com/solderless-true-violet-led-405nm/) ($5 each, although we can probably buy the component LED for cheaper, and/or in quantity) but unfortunately they're ~3-3.5v, which means USB power (or a standard Arduino) will burn them out (which I tested :-P). 

I looked at using resistors or something more complex, but Adafruit [sells a 3.3v "Trinket"](https://www.adafruit.com/products/1500) which is a tiny Arduino compatible which runs on a 3 volt circuit. Perfect! 

[![IMG_20160105_094203.jpg](//i.publiclab.org/system/images/photos/000/013/518/large/IMG_20160105_094203.jpg)](//i.publiclab.org/system/images/photos/000/013/518/original/IMG_20160105_094203.jpg)

###My attempt and results

So to start with, I just set up a test using a left over mineral-oil-diluted oil sample from the Oil Testing Kit. I don't have the original samples anymore, but this was either a motor oil or a diluted crude oil. In any case, it fluoresced quite strongly from a 405nm laser. 

To my delight, the 405nm LED was very bright, and not only did it clearly create a lot of fluorescence, it did so even when almost 6 inches away, although my smartphone camera wasn't as good at picking this out as my naked eye: 

[![IMG_20160105_093242_2.jpg](//i.publiclab.org/system/images/photos/000/013/515/large/IMG_20160105_093242_2.jpg)](//i.publiclab.org/system/images/photos/000/013/515/original/IMG_20160105_093242_2.jpg)

I then took some spectra, and they worked well; the [baseline mineral oil only spectrum](https://spectralworkbench.org/spectrums/show2/66714) wasn't as narrow as a laser peak (recorded [from a past test](https://spectralworkbench.org/spectrums/show2/55071)), but it was not bad. It extends about 25nm further to the right, so we'll keep that in mind. Below, red is laser, and black (and dimmer RGB channels) is LED:

[![Screenshot_2016-01-05_at_11.03.02_AM.png](//i.publiclab.org/system/images/photos/000/013/516/large/Screenshot_2016-01-05_at_11.03.02_AM.png)](//i.publiclab.org/system/images/photos/000/013/516/original/Screenshot_2016-01-05_at_11.03.02_AM.png)

The comparison of [the unknown oil vs the mineral oil](https://spectralworkbench.org/sets/show2/3037):

<iframe width='100%' height='700px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3037'></iframe>

Here's the same with equalized height (which you can do yourself in the "tools" menu in the embed above):

[![Screenshot_2016-01-05_at_10.36.11_AM.png](//i.publiclab.org/system/images/photos/000/013/517/original/Screenshot_2016-01-05_at_10.36.11_AM.png)](//i.publiclab.org/system/images/photos/000/013/517/original/Screenshot_2016-01-05_at_10.36.11_AM.png)

###Questions and next steps

This was all without any dimming at all, by attenuation with a filter strip or by dimming the light. The point was to see if the light was bright enough to produce as strong fluorescence as the laser. So I think this is a success; the next step will be to attach a dimmer dial so the brightness can be tuned, and perhaps reproduce the [Oil Testing Kit Public Beta](/wiki/oil-testing-kit-beta) with a full range of samples.

Doing a more thorough test and comparing to other OTK beta tests will help us decide if the broader bandwidth of the LED is an acceptable loss given all the advantages of this method.


###Why I'm interested

The advantages of this are many:

* reproducible dimming with a (numbered) dial
* potentially pairing this with a light sensor to make the brightness of the dial an absolute measure -- given a known input spectrum, this might be able to give us a reasonable intensity calibration. I.e. set the dial with no cuvette, to a known measured brightness, then insert the sample.
* more compact design
* safety: no need to worry about laser eye hits, or as much worry about eye protection
* easier to order/ship without special permission (as we need with the lasers)
* adaptable to visible light absorption work too

I'm going to move ahead (really in my spare time, as I have lots of other higher priority coding work to get done) with building one of @tonyc's stacking cuvette prototypes, based on the sketches we did: https://publiclab.org/notes/tonyc/12-02-2015/proof-of-concept-stacking-cuvette-frame-design