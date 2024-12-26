---
title: "Air Sensor Project"\ntagnames: 'particulate-sensing, amherst, massachusetts, air-quality, umass-amherst, dust, pm, dust-monitoring, dht22, shinyei, air-sensing, air-sensors, air-sensor-projects'
author: johnb1003
path: /notes/johnb1003/10-24-2018/air-sensor-project.md
nid: 17388
uid: 556306

---

![](https://publiclab.org/public/system/images/photos/000/028/954/original/fullsizeoutput_364.jpeg)

# Air Sensor Project

by [johnb1003](../profile/johnb1003) | October 24, 2018 19:26

October 24, 2018 19:26 | Tags: [particulate-sensing](../tag/particulate-sensing), [amherst](../tag/amherst), [massachusetts](../tag/massachusetts), [air-quality](../tag/air-quality), [umass-amherst](../tag/umass-amherst), [dust](../tag/dust), [pm](../tag/pm), [dust-monitoring](../tag/dust-monitoring), [dht22](../tag/dht22), [shinyei](../tag/shinyei), [air-sensing](../tag/air-sensing), [air-sensors](../tag/air-sensors), [air-sensor-projects](../tag/air-sensor-projects)

----

Disclaimer: This project is still a work in progress! I adopted the project from a group of undergrad students that previously attended UMass Amherst and have since graduated. The function of this particular air sensor is to take measurements of air temperature, humidity, and dust particulate (in parts-per million). Here is a link for the sensor I was handed last year:

[https://b-z-l.github.io/Bottle-Sensor/SOP](https://b-z-l.github.io/Bottle-Sensor/SOP)

Originally, the sensor would take these measurements and write the data to a SD card. What I am attempting to add to this project is to give it the ability to transmit real time data to a website, as well as visualizing the data through plotting it on a graph. To do this, I am reassembling the sensor using an ESP8266 wifi shield instead of the Arduino Pro Micro so that it can connect to wifi. In addition, I have set up a [Thingspeak.com](http://Thingspeak.com) account which receives the data transmitted from the sensor and plots it automatically.

\*\*\*\*UPDATE\*\*\*\*

After trying (unsuccessfully) for several weeks to get the plans above to work, I am heading in a new direction. The plan now is to use the ESP8266 wifi shield _in addition to_ the Arduino Pro Micro, rather than \_in place of \_it. I found that the ESP8266 was giving unreliable results when trying to collect readings from the 2 different sensors by itself, and it would even completely crash at times. Now I am attempting to have the Pro Micro take the readings from the sensors and send the data to the ESP8266 which will then send the data to ThingSpeak. The means of communication between the two micro controllers will be the TX and RX pins. One thing to keep in mind and account for is that the ESP8266 is a 3.3V board while the Pro Micro is a 5V board. Thus, we must level shift the signals from the TX pins to the appropriate voltage for the RX pins on the receiving end. Below is the circuit I have come up with which I believe achieves these goals:

\*\*Note: I do not have another Arduino Pro Micro yet, so I am temporarily using an Arduino Uno in its place.![image description](/i/28953.png "Screen_Shot_2019-01-19_at_5.04.44_PM.png")

I apologize if the schematic is a bit clunky, this is my first time using Fritzing!

I am currently working on the code to run on this circuit. I am getting consistent readings from the 2 sensors but the communication between the Arduino and ESP is still in the works. The (incomplete) code I have right now can be located [here](https://github.com/johnb1003/Air-Sensor).