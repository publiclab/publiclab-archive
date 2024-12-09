---
title: 'Visualize live sensor data with p5js and an Arduino'
tagnames: air-quality, sensors, gsoc, dustduino, dust, pm, shinyei, javascript, webjack, seeks:replications, activity:webjack, activity:dustduino, activity:pm, activity:arduino, activity:dust, air-sensors, purpleair, pm10, pm2, p5js, activity:javascript
author: warren
path: /notes/warren/02-08-2018/visualize-live-sensor-data-with-p5js-and-an-arduino.md
nid: 15701
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/023/509/original/IMG_20180207_135242.jpg)

# Visualize live sensor data with p5js and an Arduino

by [warren](../profile/warren) February 08, 2018 04:39

February 08, 2018 04:39 | Tags: [air-quality](../tag/air-quality), [sensors](../tag/sensors), [gsoc](../tag/gsoc), [dustduino](../tag/dustduino), [dust](../tag/dust), [pm](../tag/pm), [shinyei](../tag/shinyei), [javascript](../tag/javascript), [webjack](../tag/webjack), [seeks:replications](../tag/seeks:replications), [activity:webjack](../tag/activity:webjack), [activity:dustduino](../tag/activity:dustduino), [activity:pm](../tag/activity:pm), [activity:arduino](../tag/activity:arduino), [activity:dust](../tag/activity:dust), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [pm10](../tag/pm10), [pm2](../tag/pm2), [p5js](../tag/p5js), [activity:javascript](../tag/activity:javascript)

----

(This is a draft!) I made a simple p5js sketch (read below) to live sensor data off of an Arduino, from a web page -- with no drivers or cables, just audio tones. It's not perfect, but it's an interesting starting point and it's pretty neat. The sketch is here:

[https://alpha.editor.p5js.org/jywarren/sketches/rkztwSt8M](https://alpha.editor.p5js.org/jywarren/sketches/rkztwSt8M)

The Arduino sketch to use with this is here, and you can load it onto most Arduinos, although I tested an Arduino Nano and an Arduino Uno:

[https://create.arduino.cc/editor/jywarren/023158d8-be51-4c78-99ff-36c63126b554/preview](https://create.arduino.cc/editor/jywarren/023158d8-be51-4c78-99ff-36c63126b554/preview)

If you don't have an Arduino on hand, you can test it out with this test audio, recorded from a sensor by @donblair: [https://www.youtube.com/watch?v=GtJW1Dlt3cg](https://www.youtube.com/watch?v=GtJW1Dlt3cg)

If you do set it up on an Arduino, WebJack will output audio from pin 3 + ground. Use (splice?) an audio cable from those to a speaker or just plug it into your computer's microphone port if it has one.\\

The demo isn't anything fancy; it just draws a pink circle higher and lower on the screen:![image description](https://publiclab.org/system/images/photos/000/023/508/large/Screen_Shot_2018-02-07_at_11.34.31_PM.png "Screen_Shot_2018-02-07_at_11.34.31_PM.png")

### The Shinyei dust sensor

The #shinyei dust sensor (the black box at the top of the lead picture) is not a perfect sensor -- it has a lot of limitations, but it's only [$20-30 on Amazon](https://www.amazon.com/Super-Sensors-Grove-Sensor-PPD42NS/dp/B06ZZ2W7VH/), and only [$8 on AliExpress](https://www.aliexpress.com/wholesale?SearchText=shinyei), and it reads #PM10 and #PM2.5 .

* [Read this great post for more on how to properly set up a Shinyei](/notes/nanocastro/04-26-2017/maca-open-air-quality-monitor-project-in-latin-america) and about its limitations.  (thanks @nanocastro !) 
* and see [this post for more options for dust sensors](/q/15751)

In the above photo, I connected it to an Arduino using the [Serial ](https://publiclab.org/notes/Willie/07-31-2015/dustduino-sketches)#DustDuino sketch, modified for #WebJack. The [DustDuino project](/dustduino) and others like the Speck project have really done a lot with this sensor, although I believe more recent projects like #PurpleAir use a different one that's trying to get better data.

Anyhow, I'd like to get this graphing nicely in p5js... shouldn't be too hard, but I'm looking for collaborators if you want to give it a try! Here, I show the basic WebJack graphing demo with the Shinyei sensor and some chalkboard dust:
<iframe width="560" height="315" src="https://www.youtube.com/embed/hjQ9DZA8EIs" frameborder="0" allowfullscreen=""></iframe>

### WebJack

WebJack (by @rmeister and I as part of Google Summer of Code -- #gsoc) is a way to read data from an Arduino (and other sources) using audio -- it basically turns your Arduino into an audio modem. Arduinos are inexpensive ($4-22) electronics boards which can read from a sensor and -- in this case -- generate audio tones with the data.

The audio tones (a kind of chirping sound) can be read by a web page without any cables or software, even on a phone. This is already a demo [at the WebJack page](/webjack).

### p5js

p5js is an awesome platform for writing short visual code sketches -- based on Processing, for those who are familiar with that platform. They recently got a really nice web editor, so you can just write sketches online now:

[https://alpha.editor.p5js.org/](https://alpha.editor.p5js.org/)