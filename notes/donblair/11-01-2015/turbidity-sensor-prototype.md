---
nid: 12350
title: Turbidity sensor prototype
path: public/static/notes/donblair/11-01-2015/turbidity-sensor-prototype.md
uid: 43651
tagnames: water-quality,water,water-quality-sensor,turbidity,riffle,openwater,activity:turbidity,water-sensors
---

# Turbidity sensor prototype

Surrounded by friends who were putting together Dracula, Zombie, and etc equipment, I decided to: work on turbidity!

### Background

In conversations with folks who monitor turbidity, I'd gotten the impression that it's a difficult measurement to standardize / keep calibrated in the field -- also, there are quite a few ways of measuring turbidity out there, with [different associated units](http://publiclab.org/notes/donblair/08-25-2015/turbidity-001).  

But for many applications, what we're interested in is not an absolute measure of turbidity, suitable for comparison across locations -- what we really want to know is the *trend* -- has the water suddenly become much more turbid (due to a dumping event, or a storm -- etc)?  

For these 'sudden changes from baseline' measurements, we might be able to get away with a very simple design ... let's see!

### Setup

Because we've been playing around with putting sensors in water bottles, I wanted to see: what's the simplest, easiest-to-assemble approach for monitoring changes in turbidity?  Here's the idea:

[![IMG_20151102_150636785.jpg](https://i.publiclab.org/system/images/photos/000/012/340/medium/IMG_20151102_150636785.jpg)](https://i.publiclab.org/system/images/photos/000/012/340/original/IMG_20151102_150636785.jpg)

What if we just put a light sensor right up against the inside of the water bottle, looking out into the water ... and placed an LED right up against the inside of the water bottle, shining into the water?

The expectation: the amount of light reflected back from the water should change if there is an increase in the amount of stuff suspended in the water.  

To test this idea, I used a [$10 light sensor from Adafruit](https://www.adafruit.com/products/1980):

[![tsl2591.jpg](https://i.publiclab.org/system/images/photos/000/012/323/medium/tsl2591.jpg)](https://i.publiclab.org/system/images/photos/000/012/323/original/tsl2591.jpg)

It has two channels -- one 'full spectrum' channel ("CH0") that is sensitive to a wide range of wavelengths, including a bunch of visible light and some near-IR -- as well as an 'IR-only' channel ("CH1") that is mostly sensitive up in the red / near-infrared region 

Here's the light detector's response curve (from the [datasheet](http://www.adafruit.com/datasheets/TSL25911_Datasheet_EN_v1.pdf
)  (with the channels labeled), showing how sensitive it is to various wavelengths:

[![responsivity.png](https://i.publiclab.org/system/images/photos/000/012/324/medium/responsivity.png)](https://i.publiclab.org/system/images/photos/000/012/324/original/responsivity.png)

I tried to make a little 'baffle' so that the light emitted by the LED wouldn't go directly into the light detector ...

[![IMG_20151031_192501791_HDR.jpg](https://i.publiclab.org/system/images/photos/000/012/317/medium/IMG_20151031_192501791_HDR.jpg)](https://i.publiclab.org/system/images/photos/000/012/317/original/IMG_20151031_192501791_HDR.jpg)

... but it got pretty smooshed when inside the bottle, so probably didn't do much as a baffle (better design next round!):

[![IMG_20151031_192600764.jpg](https://i.publiclab.org/system/images/photos/000/012/318/medium/IMG_20151031_192600764.jpg)](https://i.publiclab.org/system/images/photos/000/012/318/original/IMG_20151031_192600764.jpg)

Because folks have already determined that [near-infrared light often has more useful scattering properties for assessing turbidity](http://publiclab.org/notes/donblair/08-25-2015/turbidity-001), my first thought was to use an IR LED and the IR channel of this detector.  I gave this a go, but with only one IR led of unknown wavelength, I wasn't able to get a reasonable signal on the detector.  I'll give this a go with LEDs of known wavelength, later.  

So for this run, I just picked a random 'white' LED from a box at hand (not sure what the actual spectral output of the LED is -- that's another thing to get right next time!), and used the following prototcol:

- Turn the LED on
- Measure the light level 
- Turn the LED off
- Measure the light level
- Repeat!

The rationale:  changes to ambient light (light not coming from the LED) over time might make it hard to assess changes in turbidity ... but if we always look at the *difference* between measuring-with-the-LED-on and measuring-with-the-LED-off, maybe that *difference* will be more robust to changes in ambient light. 

I put the half-water bottle I was using as a test rig into a glass of water, and just played around with adding different amounts of coffee-with-creamer to the solution.  This is what the protocol looked like:

<iframe width="420" height="315" src="https://www.youtube.com/embed/Zci89BjnqCU" frameborder="0" allowfullscreen></iframe>

In order to simulate conditions underwater (and perhaps the addition of an external enclosure that would shield from ambient light), I placed the entire setup under a relatively opaque recycling bin:

[![t2.png](https://i.publiclab.org/system/images/photos/000/012/319/medium/t2.png)](https://i.publiclab.org/system/images/photos/000/012/319/original/t2.png)

I then ran this "ON/OFF" protocol for a while for several 'turbidity' preparations -- i.e., I made a measurement, removed the recycling bin shroud, added some coffee, made another measurement, repeated ...

Here's what the sample preparations looked like (I labeled them 'a', 'b', 'c', etc):

[![turbiditySamples.png](https://i.publiclab.org/system/images/photos/000/012/315/medium/turbiditySamples.png)](https://i.publiclab.org/system/images/photos/000/012/315/original/turbiditySamples.png)

### Results

The raw data I collected is in the first two columns (A: 'index', B: 'lux'), here:

https://docs.google.com/spreadsheets/d/1LOKQlfaRRVGEd4b5-_a1dDo8b4amicLkzn9PnjPZoRo/edit?usp=sharing

The raw data (including the measurements made when I was removing the recycling bin shroud in order to add more coffee) is here:

[![raw-lux.png](https://i.publiclab.org/system/images/photos/000/012/341/medium/raw-lux.png)](https://i.publiclab.org/system/images/photos/000/012/341/original/raw-lux.png)

Once I removed the datapoints associated with the 'recycling bin transition' measurements, and simply focus on the times that the sensor was underneath the recycling bin, here's what I get:

[![lux.png](https://i.publiclab.org/system/images/photos/000/012/316/medium/lux.png)](https://i.publiclab.org/system/images/photos/000/012/316/original/lux.png)

I labeled the "LED ON" and "LED OFF" parts of the light measurements, and also used labels so you can see which measurements are associated with which turbidity preparations ('a', 'b', 'c') in the photo above.

Pretty cool!  I notice two trends:

- as the water becomes more turbid, there is more light reflected back when the LED i son (as expected!) 
- as the water becomes more turbid, there is less ambient light being measured (the recycling bin wasn't completely opaque, so the sensor is picking up light from the room, transmitted through the turbid water, and into the bottle

At this point, it looks like we might have a pretty good indicator of changes in turbidity -- as the turbidity increases, we just look to see what the difference is between the LED-on and LED-off measurements ... neat!

### Next steps 

- Need to see how this affected by changes in ambient light.  It may be the case that we could simply 'normalize' the difference between LED-on and LED-off by e.g. dividing that difference by the LED-off value (the ambient measurement) -- or some more complicated function -- and not really need to use an external baffle.  This would be nice, in that we wouldn't need to complicate the currently simple enclosure design -- just put the light sensor and emitter inside the bottle with some adhesive, and done!  (But need to check to see if this'll work ...)

- It might be important to check the effect of e.g. temperature on the light sensor's sensitivity.  The datasheet indicates that the effect isn't enormous, but it could still be significant: 

[![temp_response.png](https://i.publiclab.org/system/images/photos/000/012/325/medium/temp_response.png)](https://i.publiclab.org/system/images/photos/000/012/325/original/temp_response.png)

e.g. we might want to normalize the measurements by some function of the temperature, if it's a significant effect.  

- try more IR leds of known wavelength!

- It'd be nice to come up with a simple PCB mount that holds the Adafruit sensor, an LED or two, and positions a baffle of sorts in between them ... perhaps this could be combined with the conductivity + temp sensor board, to get temp + conductivity + turbidity all-in-one ...

Fun!
