---
nid: 21539
title: DFRobot Turbidity Sensor Troubleshooting
path: public/static/notes/mimiss/11-20-2019/dfrobot-turbidity-sensor-troubleshooting.md
uid: 579821
tagnames: arduino,water-sensing,water-quality,water-monitoring,turbidity,question:water-quality,question:arduino,question:water-sensors,water-sensors,question:turbidity,water-sensor
---

# DFRobot Turbidity Sensor Troubleshooting

I attended a Use Your Sensors event yesterday hosted by @charlotte_clarke and @rollinrenola where we used the DF Robot Turbidity sensors built like this prototype by @wmacfarl (https://publiclab.org/notes/wmacfarl/11-11-2019/building-the-simple-turbidity-sensor-prototype).

We noticed that the sensors were giving very different readings. One sensor would read the voltage of the water at 0.29 and another sensor would read that same sample at 3.94. 

Here are some other observations:

 - the sensors with low/high readings stayed low or high no matter the sample
 - the LED's that blink corresponding to turbidity were blinking very quickly (even when off) on the low-reading sensors and very slowly on the high-reading sensors. See the gifs below

Blue-breadboard sensor (readings between 3.0 and 5.0) whose LED blinks slowly
![blue sensor slow blink][1]

Black-breadboard sensor (readings between 0.20 and 0.40) whose LED blinks quickly
![black sensor fast blink][2]

Here are my major questions:

 - what is a good way to test a sensor to know if it's working?
 - where do we begin when troubleshooting?
 - can I use the LED as a way to tell if my sensor is working properly?
 - how can I fix the sensor and which one is broken?

  [1]: /i/36640.gif "blue-sensor.gif"
  [2]: /i/36641.gif "black-sensor.gif"