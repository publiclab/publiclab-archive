---
title: 'WebJack'
tagnames: arduino, sensors, tool, datalogger, arduino-uno, webjack, headphone-jack, activities:webjack, upgrades:webjack, method, electronic-sensors
author: rmeister
path: /wiki/webjack.md
nid: 13658
uid: 468994

---

![](https://publiclab.org/public/system/images/photos/000/018/661/original/out.gif)

# WebJack

by [warren](../profile/warren), [rmeister](../profile/rmeister)

October 27, 2016 19:11 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [tool](../tag/tool), [datalogger](../tag/datalogger), [arduino-uno](../tag/arduino-uno), [webjack](../tag/webjack), [headphone-jack](../tag/headphone-jack), [activities:webjack](../tag/activities:webjack), [upgrades:webjack](../tag/upgrades:webjack), [method](../tag/method), [electronic-sensors](../tag/electronic-sensors)

----

## What Does It Do?

**WebJack is a wired, bidirectional data link between the Arduino Uno and your phone, established via headphone jack.** It uses two distinct frequencies for a modem-like serial transmission of data. WebJacks runs in the browser and its goal is to provide a way to read sensors without the burden to install native applications. Look for recent updates on Public Lab [here](http://publiclab.org/tag/webjack).

![webjack-circuit](/system/images/photos/000/023/509/original/IMG_20180207_135242.jpg)

## Activities

This is a list of community-generated guides for specific applications and the development of WebJack. These [activities can be categorized](https://publiclab.org/wiki/activity-categories), and some may be more reproduced -- or reproducible -- than others. Try them out to build your skills, and help improve them by leaving comments. Together, we can repeat and refine the activities into experiments.

### Activity grid

[webjack](../../tag/activity:webjack)

****

## Frequently Asked Questions

<a class="btn btn-primary" href="/post?tags=question:webjack&template=question">Ask a question about WebJack</a>

[question:webjack](../../tag/question:webjack)

****

[![IMG_0138_web.JPG](//i.publiclab.org/system/images/photos/000/017/089/large/IMG_0138_web.JPG)](//i.publiclab.org/system/images/photos/000/017/089/original/IMG_0138_web.JPG)

WebJack is an open source client-side JavaScript library that acts as audio modem. It is built for use with [SoftModem](https://github.com/arms22/SoftModem), the Arduino-side code. For example, with WebJack you can transmit:

* data as text
* binary data
* Firmata RPC messages

***



## Challenges

We're working to refine and improve WebJack on a number of fronts; here, take a look at the leading challenges we're hoping to solve, and post your own. 

Be sure to add:

* constraints: expense, complexity
* goals: performance, use cases

[webjack-challenge](../../tag/question:webjack-challenge)

****

## Build a data link with WebJack

Instructions on the circuit and software needed for WebJack can be found here:

https://publiclab.org/notes/rmeister/07-18-2016/webjack-testers-needed

### Demo WebJack applications

- [Using Firmata with WebJack as transport](https://publiclab.github.io/webjack-firmata/example):

<iframe width="560" height="315" src="https://www.youtube.com/embed/eWr3kahwo78" frameborder="0" allowfullscreen></iframe>

- [WebJack demo website](https://publiclab.github.io/webjack/examples)


###Notes:

- For more information about WebJack, post a question to the "dev" mailing list [here](https://groups.google.com/group/plots-dev)) (also listed in the left sidebar)
- The github repo of WebJack is [here](https://github.com/publiclab/webjack)
