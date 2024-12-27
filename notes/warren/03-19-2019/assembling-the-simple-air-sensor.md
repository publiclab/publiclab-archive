---
title: "Assembling the Simple Air Sensor"

tagnames: 'arduino, air-quality, dust, pm, air-sensing, seeks:replications, activity:arduino, air-sensors, purpleair, plantower, purple-air, simple-air-sensor, activity:simple-air-sensor, activity:air-sensing, lat:41.809115, lon:-71.426615, pin:simple-air-sensor, pin:activity:simple-air-sensor, sas-build'
author: warren
path: /notes/warren/03-19-2019/assembling-the-simple-air-sensor.md
nid: 18563
uid: 1
cids: 22239,22240,23362,25663,26192,28446,28470,28474
---

![](https://publiclab.org/public/system/images/photos/000/030/324/original/IMG_20190320_162254_076.jpg)

# Assembling the Simple Air Sensor

by [warren](/profile/warren) | March 15, 2019 22:04

March 15, 2019 22:04 | Tags: [arduino](/tag/arduino), [air-quality](/tag/air-quality), [dust](/tag/dust), [pm](/tag/pm), [air-sensing](/tag/air-sensing), [seeks:replications](/tag/seeks:replications), [activity:arduino](/tag/activity:arduino), [air-sensors](/tag/air-sensors), [purpleair](/tag/purpleair), [plantower](/tag/plantower), [purple-air](/tag/purple-air), [simple-air-sensor](/tag/simple-air-sensor), [activity:simple-air-sensor](/tag/activity:simple-air-sensor), [activity:air-sensing](/tag/activity:air-sensing), [lat:41.809115](/tag/lat:41.809115), [lon:-71.426615](/tag/lon:-71.426615), [pin:simple-air-sensor](/tag/pin:simple-air-sensor), [pin:activity:simple-air-sensor](/tag/pin:activity:simple-air-sensor), [sas-build](/tag/sas-build)

----

The [Simple Air Sensor](/simple-air-sensor) is built using the same [Plantower](/tag/plantower) [particulate sensor](/tag/air-sensors) used in the [Purple Air](/purpleair), but only one as compared to #PurpleAir's two; does not have a BME280 temperature, humidity and pressure sensor as the #PurpleAir does; and does not [log](/data-logging) or upload data, but it shows the reading from its PM2.5 sensor as a colored light, where warmer colors indicate higher readings NOT an Air Quality Index (AQI). It's not intended for data collection, but to help you get a better understanding of how sensors work, and for use alongside fancier sensors. You can [buy one in the Public Lab store](https://store.publiclab.org/products/simple-air-sensor "https://store.publiclab.org/products/simple-air-sensor"), or find the parts (listed below) yourself.

(note: if you have the Arduino program and the right drivers, it will output data over serial, but it can be hard to set up)

Once built, try keeping it around your house or yard and seeing how it reacts when sources of particulate/dust pollution occur. I keep mine next to the stove while I cook, which is interesting to watch.

### Parts list

1. an Arduino Nano
2. an RGB LED (common anode)
3. a Plantower 5003 or 7003 sensor
4. a mini breadboard
5. a mini-USB cable

**Note** that in the below picture, the three wires connected to a square white plug are shown incorrectly; the left-most wire should be green. We'll correct this soon, but it's been corrected in the rest of the images in this guide.

![image description](/i/30097.jpg?s=o)

### Step 1: put the Arduino onto the breadboard

Plug it in - it'll take some strength, but you can push the middle quite hard. If it's sharp, try putting some cardboard over it so you don't hurt your fingers!

The exact position isn't super important since the pins are labeled.

![image description](/i/30098.jpg?s=o)

### Step 2: plug in connector cable

Connect the ribbon cable to the sensor (the blue box) as shown below, with the free wires towards the middle of the box. Use your fingernails or a small screwdriver to insert the cable solidly.

![image description](/i/30325.jpg?s=o)

### Step 3: attach breadboard and insert wires

Peel the sticker paper off the back of the breadboard and attach it in the orientation shown (you could also do this differently if you have a different enclosure, but this is nice and simple). Then insert the wires as shown into the 5V (five volt, shown in purple), GND (ground, shown in pink), and D2 (the digital pin for transferring the data, shown in blue).

On the sensor, the order is, from the **right to left** in the above image: 5V\*\*, GND, D2\*\*, and they are, again from **right to left**, the **first, second, and fifth****wires.**

The breadboard holes are connected in vertical rows (though not across the center trough), so you can insert the wires in the holes just above or below the marked pins on the Arduino, as shown below.

![image description](/i/30326.jpg?s=o)

### Step 4: attach the LED light

This is maybe the hardest step: the pins of the LED light can be bent in such a way as to let you plug it in directly "straddling" the Arduino board; this simplifies the layout and reduces wires, but it's not super simple. We'll post soon on using an "extension cable" to do this without needing to do this straddling, but for now:

Bend the longest pin (that'll go to the positive 5V source) away from the others, as shown below.

Now, space out the 3 remaining legs so they can be inserted into **D4**, **D5**, and **D7**. I found it simplest to do this first, then to bend the **5V** leg diagonally so it could be inserted into the hole next to the 5V pin of the Arduino, as shown below.

**(Note:** if you bought your own LED, it should be "common anode" so that the long pin goes to power, not ground.)

Notice that as shown below, I've **bent the 2nd leg** (counting left to right) back, and the other three towards me.

![image description](/i/30327.jpg?s=o)

### Step 5: plug it in

If you've bought this kit from Public Lab, it'll be already programmed with this program: [https://create.arduino.cc/editor/jywarren/ce8d09fc-3f5f-4d6b-bb0f-4aea24838fbe/preview](https://create.arduino.cc/editor/jywarren/ce8d09fc-3f5f-4d6b-bb0f-4aea24838fbe/preview "https://create.arduino.cc/editor/jywarren/ce8d09fc-3f5f-4d6b-bb0f-4aea24838fbe/preview") ([here's a simpler Gist link too](https://gist.github.com/jywarren/d9cdc98a4a50d8505ad04521e45ce59d)) However, if you've bought your own or got it elsewhere, [you'll need to program it first](https://www.arduino.cc/en/Tutorial/Foundations), using this program.

If it's already programmed, you can just plug it in using your USB cable, to basically any USB power source, like a battery or laptop.

![image description](/i/30103.jpg "IMG_20190315_175032_576_copy.jpg")

### Finish up

We'll post on using this sensor soon, but it may be very worthwhile to place it inside a semi-open container like a cut open bottle, a tube, or a yogurt container, so that the wires are protected from coming undone.

You can also put strong tape (or even hot glue) over the wires to protect them, although be aware that the more you affix them, the less you'll be able to make changes later. Do it only when you're sure it's working properly!

I'm sure we've missed some steps here so please offer some feedback and help us improve the guide! Thanks!