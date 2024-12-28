---
title: "Brainstorm on ways to use colored light to show sensor readings"

tagnames: 'arduino, sensors, visualization, leds, question:sensors, plantower, purple-air, question:simple-air-sensor, simple-air-sensor, question:data-display, data-display'
author: warren
path: /notes/warren/04-18-2019/brainstorm-on-ways-to-use-colored-light-to-show-sensor-readings.md
nid: 19110
uid: 1
cids: 23949,23977,25457,25458,25459,25460,25462
---

# Brainstorm on ways to use colored light to show sensor readings

by [warren](/profile/warren) | April 18, 2019 17:52

April 18, 2019 17:52 | Tags: [arduino](/tag/arduino), [sensors](/tag/sensors), [visualization](/tag/visualization), [leds](/tag/leds), [question:sensors](/tag/question:sensors), [plantower](/tag/plantower), [purple-air](/tag/purple-air), [question:simple-air-sensor](/tag/question:simple-air-sensor), [simple-air-sensor](/tag/simple-air-sensor), [question:data-display](/tag/question:data-display), [data-display](/tag/data-display)

----

In the #simple-air-sensor's default settings, we chose to show a rough sense (think qualitative, for comparison) of the PM2.5 dust sensor readings as a colored light, in part because without calibration or accounting for humidity/temperature, it's hard to know exactly how accurate the readings are. (the Simple Air Sensor includes a single #Plantower PM sensor, while two come in each #purple-air device)

![image description](/i/31647.jpg?s=m "IMG_20190418_135549_439.jpg")

Also, this opens up a lot of possibilities for using the sensor to do group projects. It was very useful in talking as a group about how sensitive they are -- using a candle, for example, with 30 people, we had one person hold a sensor a few meters from a candle, with another right next to it. The whole group was able to see how one responded sooner, and there was a lot of other useful things we could do with it.

That said, the scale is currently set from **green to yellow to red**, and the color choices are worth some discussion -- i'd love to hear your thoughts and input. And as with any design question, we may not find there's one clear solution.

One problem is that **red and green are the most difficult colors to distinguish for people who can't see colors as well**.

A second issue is that they overlap with the colors used in the US AQI system ([read more here](https://publiclab.org/questions/sagarpreet/06-22-2018/what-is-the-correct-aqi-measure)), so could be confused with a direct indication of **"safe" or "not safe"** - which is not what the sensor is telling us, exactly.

### How it's set up now

The actual code we're using is here: ([gist link](https://gist.github.com/jywarren/d9cdc98a4a50d8505ad04521e45ce59d "https://gist.github.com/jywarren/d9cdc98a4a50d8505ad04521e45ce59d") and [Arduino Create link](https://create.arduino.cc/editor/jywarren/ce8d09fc-3f5f-4d6b-bb0f-4aea24838fbe/preview)) and is as follows:

```
    int minVal = 0;
    int maxVal = 20; // arbitrary
    // map values to a portion of the 360 degree color wheel
    int hue = max(0, min(359, map(data.pm25_standard, minVal, maxVal, 140, 0)));
    setLedColorHSV(hue, 1, 1);
```

So, as marked, we can choose the top and bottom of the range.

Basically, the value of 20 µg/m3 for PM2.5 is mapped to an angle of 0 on the color wheel, and a value of 0 µg/m3 is mapped to the angle 140, which is roughly green:

![image description](https://publiclab.org/system/images/photos/000/031/646/medium/proxy.duckduckgo.png)

### What now?

Ok, so one thing that could address the red/green issue above would be to map from blue to red.

Another could be to use blue and green, although it's becoming less clear to a majority of people what is "more".

Other options could be to use a numerical display, or multiple LEDs. Or a blinking light. Or a sound (annoying?). But it'll depend on the use case, and I'm interested in how we can make a single, simple, colored light as useful as possible.

I would love to hear input; and keep in mind, we can try a few out and see how they work, so we can discuss this a bit -- and people may opt for different solutions. Thanks!