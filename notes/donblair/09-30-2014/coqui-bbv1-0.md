---
title: "Build a Coqui BBv1.0"

tagnames: 'water-sensing, water-quality, upverter, riffle, barnstar:photo-documentation, coqui, activity:coqui-version'
author: donblair
path: /notes/donblair/09-30-2014/coqui-bbv1-0.md
nid: 11209
uid: 43651

cids: 10473,12293,13303,13429,13755,14239,21998

---

![](https://publiclab.org/public/system/images/photos/000/007/213/original/IMG_0734.JPG)

# Build a Coqui BBv1.0

by [donblair](../../../profile/donblair) | September 30, 2014 19:43

September 30, 2014 19:43 | Tags: [water-sensing](../tag/water-sensing), [water-quality](../tag/water-quality), [upverter](../tag/upverter), [riffle](../tag/riffle), [barnstar:photo-documentation](../tag/barnstar:photo-documentation), [coqui](../tag/coqui), [activity:coqui-version](../tag/activity:coqui-version)

----

A Coqui is a device that generates an audible output frequency that is a function of any resistance-based measurement. For example, a Coqui can measure:

- [conductivity](http://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0-testing-conductivity-of-a-solution)
- [temperature](http://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0-using-a-thermistor-as-a-temperature-probe)
- [ambient light](http://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0-assessing-ambient-light-with-a-photoresistor)
- [LED light](http://publiclab.org/notes/donblair/09-30-2014/coqui-bbv1-0-reacting-to-an-led-with-sound) - particularly fun!

Coqui BBv1.0 is a version of the Coqui that is made on a breadboard, with just a few simple parts. Learn how to make one below!

NOTE: a new version of this tutorial [can be found here](https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor).

  
# Making your own Coqui

### Ingredients

- Breadboard
- Batteries (greater than 1.5 V)
- a piezo speaker
- a capacitor (e.g 0.1 uF, 1 uF, or 10 uF)
- prototyping wires
- (pick one or several) -- a photoresistor; a potentiometer; a thermistor

Here's a [digikey shopping cart](http://www.digikey.com/short/7trj4w) with enough of the above ingredients (+ extras) for Coqui kits, at a cost of $19 per kit + shipping.

### Schematic

The basic circuit for Coqui BBv1.0 is this:

[![buzzerDiagram.png](https://i.publiclab.org/system/images/photos/000/007/215/medium/buzzerDiagram.png)](https://i.publiclab.org/system/images/photos/000/007/215/original/buzzerDiagram.png)

The frequency of the output is a function both of the resistance, 'R' (which can be either a resistor, or some water between two electrodes, or a photoresistor, or a thermistor, or a potentiometer ... anything that will provide an electrical connection, with some resistance), and a capacitor, 'C'.

> The frequency of output is given by: 0.7/(R\*C).

**Note** -- the 555 chip is oriented in this picture such that the little 'circle' or 'divot' in the chip is oriented **downwards**. E.g., this chip (which has both a 'circle' _and_ a 'divot') share the same orientation in this photo:

[![555a.JPG](https://i.publiclab.org/system/images/photos/000/007/127/medium/555a.JPG)](https://i.publiclab.org/system/images/photos/000/007/127/original/555a.JPG)

And this is what it looks like on the breadboard:

[![555b.JPG](https://i.publiclab.org/system/images/photos/000/007/128/medium/555b.JPG)](https://i.publiclab.org/system/images/photos/000/007/128/original/555b.JPG)

Quick notes:

- the green 'R' in the diagram is a resistor that tunes the frequency of the 555 output (which we'll be hearing via a speaker)
- the blue 'C' in the diagram is a capacitor. For low conductivity solutions, 0.1 uF is a good range to use. For higher conductivity solutions (like salt water), 1.0 uF, or even 10.0 uF, might be better values to use, in order to keep the output frequency in the audible range.

Below are the step-by-step instructions for assembling the circuit.

### Step-by-Step instructions

Step 1: Pin # 4 to VCC

[![IMG_0690.JPG](https://i.publiclab.org/system/images/photos/000/007/140/medium/IMG_0690.JPG)](https://i.publiclab.org/system/images/photos/000/007/140/original/IMG_0690.JPG)

Step 2: Pin #8 to VCC

[![IMG_0691R.JPG](https://i.publiclab.org/system/images/photos/000/007/177/medium/IMG_0691R.JPG)](https://i.publiclab.org/system/images/photos/000/007/177/original/IMG_0691R.JPG)

Step 3: Pin #2 to Pin #6

[![IMG_0692R.JPG](https://i.publiclab.org/system/images/photos/000/007/208/medium/IMG_0692R.JPG)](https://i.publiclab.org/system/images/photos/000/007/208/original/IMG_0692R.JPG)

Step 4: Pin #3 --> speaker -<center> GND<p></p>
<p>Here’s a picture of how the speaker is connected on the board:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/207/original/IMG_0693R.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/207/medium/IMG_0693R.JPG" alt="IMG_0693R.JPG"></a></p>
<p>Here’s what it looks like using the typical speaker from kit (which has the wires on the bottom):</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/144/original/IMG_0694.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/144/medium/IMG_0694.JPG" alt="IMG_0694.JPG"></a></p>
<p>Step 5: Pin # 3 to some row:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/205/original/IMG_0706R.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/205/medium/IMG_0706R.JPG" alt="IMG_0706R.JPG"></a></p>
<p>Step 6: Pin #2 to a row right below previous:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/146/original/IMG_0707.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/146/medium/IMG_0707.JPG" alt="IMG_0707.JPG"></a></p>
<p>Step 7: Add a capacitor from previous pin to GND:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/191/original/IMG_0711R.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/191/medium/IMG_0711R.JPG" alt="IMG_0711R.JPG"></a></p>
<p>Step 8: Connect pin 1 to GND (sorry, no pic yet!)</p>
<p>Step 9: Using a photocell as a sensor: add the photocell between the previous two wires:</p>
<p>The photocell:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/151/original/IMG_0721.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/151/medium/IMG_0721.JPG" alt="IMG_0721.JPG"></a></p>
<p>The circuit:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/166/original/IMG_0712R.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/166/medium/IMG_0712R.JPG" alt="IMG_0712R.JPG"></a></p>
<p>Step 10: Connect the battery (positive / red to VCC, negative / black to GND):</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/204/original/IMG_0713R.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/204/medium/IMG_0713R.JPG" alt="IMG_0713R.JPG"></a></p>
<p>Step 11: Optional: place an LED between VCC and GND to make sure there’s power, when debugging:</p>
<p><a href="https://i.publiclab.org/system/images/photos/000/007/150/original/IMG_0714.JPG"><img src="https://i.publiclab.org/system/images/photos/000/007/150/medium/IMG_0714.JPG" alt="IMG_0714.JPG"></a></p>
<h3 id="done">Done!</h3>
<p>Here’s a demo of playing with the photocell …</p>
<iframe width="560" height="315" src="//www.youtube.com/embed/S1GoPiRVTD0?list=UUmmEmOGni0fzzDsXiZEVWNw" frameborder="0" allowfullscreen=""></iframe>
</center><-