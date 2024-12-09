---
title: 'Record data from a Simple Air Sensor'
tagnames: air-quality, seeks:replications, data-logging, simple-air-sensor, activity:simple-air-sensor, simple-air-sensor-data
author: warren
path: /notes/warren/09-10-2019/record-data-from-a-simple-air-sensor.md
nid: 20818
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/035/200/original/IMG_20190910_173314_867.jpg)

# Record data from a Simple Air Sensor

by [warren](../profile/warren) September 10, 2019 21:32

September 10, 2019 21:32 | Tags: [air-quality](../tag/air-quality), [seeks:replications](../tag/seeks:replications), [data-logging](../tag/data-logging), [simple-air-sensor](../tag/simple-air-sensor), [activity:simple-air-sensor](../tag/activity:simple-air-sensor), [simple-air-sensor-data](../tag/simple-air-sensor-data)

----

Simple Air Sensors have no on-board logging (although there are some efforts to add #data-logging), but you can read data off of them in two ways, both of which produce comma-separated values (CSV) that you can use to make a graph.

### Serial

The first way requires no extra components, but does require both the Arduino software (downloadable at [https://arduino.cc](https://arduino.cc)) as well as the correct drivers for your computer (the Simple Air Sensor uses a variant of the Arduino Nano design that has a "CH340" serial chip, so it [needs special drivers](https://publiclab.org/questions/warren/07-03-2017/how-do-i-install-a-bootloader-on-a-riffle-data-logger#c22518)).

Once you have the right drivers, you can use the Serial Monitor (as well as the plotter!) in the Arduino app to view the output.

The drivers and such can be a bit complicated, so there is another way:

### WebJack

In a parallel project, some folks across Public Lab (myself included) have been developing a means of connecting an Arduino to a web browser using only an audio cable. This is part of a project called WebJack, and you can read more here:

* https://publiclab.org/webjack
* https://webjack.io

Basically, it generates modem tones which the computer or smartphone "hears" and those are transcribed into numbers.

Here is [a tutorial on how to do it](https://publiclab.org/notes/warren/02-08-2018/visualize-live-sensor-data-with-p5js-and-an-arduino), but I wanted to note the exact wires and pins needed to get this to work on a Simple Air Sensor. The important pin for getting data OFF is pin D3, and the other wire is just a ground wire. At the top of this post is a photo of these plugged into a TRRS jack, which is the kind of 1/8 inch jack that has both microphone and speaker data -- a 2-way cable.

If you don't need 2-way, or aren't going to connect to a port that does both input and output (like a smartphone), you can use just a simple stereo plug or even a mono plug, with 2 or 3 pins. This will work with speakers, for example. But many if not most headphone jacks these days do 2-way, so the photo I'm including here is for that type of 4-pin jack.