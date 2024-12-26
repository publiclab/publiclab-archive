---
title: "Remixing Kina and Don's Code - low power temperature logging"\ntagnames: 'riffle, riffle-beta'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/07-11-2016/remixing-kina-and-don-s-code-low-power-temperature-logging.md
nid: 13282
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/016/985/original/Capture.PNG)

# Remixing Kina and Don's Code - low power temperature logging

by [pdhixenbaugh](../profile/pdhixenbaugh) | July 11, 2016 23:11

July 11, 2016 23:11 | Tags: [riffle](../tag/riffle), [riffle-beta](../tag/riffle-beta)

----

###What I want to do

I want to adapt Kina and Don's basic logging code to incorporate the power saving features into a simple temperature logger.

###My attempt and results

I downloaded Kina’s sketches on 7/9/2016. It took a while to wrangle all the libraries into the right places (especially SdFat), but it was a good learning opportunity. In reading Kina’s well-documented code, I realized it referenced a humidity sensor I didn’t have. I combined Don’s RTC code with Kina’s code with the goal of making something that would work with just the riffle and no attachments. The result can be found at my github here: https://github.com/pdhixenbaugh/Riffle-Getting-Started/blob/master/RTC_Logger.ino

In reading Kina’s code, I realized that, as written, it wouldn’t read any temperature or humidity values. Those lines were commented out, and temp = 0 and humidity = 0 were written instead. Was this for debug purposes? I removed humidity, changed the order of the datafile to be time,temperature,voltage, and started working on programming the Riffle to read temperature from the RTC.

The Debug feature was very useful, once I realized that different Arduino sketches in the IDE had different associated Serial Monitors. I was looking at the wrong serial monitor for a long time, wondering why debug wasn’t working.

In adapting the Don’s code, the line “float rtcTemp = RTC.temperature() / 4.;” would not work as RTC was not recognized in the scope, due to it using Kina’s forked library. After sleuthing around in the sketch and in the library folder, I changed it to rtc.getTemperature, and removed the “/4.”. Not really sure what I’m doing, but this seemed to result in Celsius temperature readings.

Since everything seemed to be working ok, I changed debug to 0, and started the experiment. For a few minutes, the Riffle would be exposed to room temperature, before going into the walk-in cooler for about an hour. I don’t really know how to convert/graph unixtime, but I’ll cross that bridge later.

Context: the extent of my programming background is self-taught TI-89 BASIC, high-school level C++ (stopped after one semester), one college-level semester of Python for Chemists, rudimentary MATLAB, and using the linux commandline. I had never used Arduino or Github before trying the Riffle. I found modifying Arduino code to be somewhat challenging, but doable.

###Getting Results:

When I retrieved the riffle, I wanted to get data and put it right back into collecting data. I used the battery switch as an off switch for when I wanted to pull data, then put the SD card back, and flipped the switch back to using the battery in the Gen battery slot. It continued to take data.

The first set of data looks good! There was no change in voltage over the course of one night in the cooler. Raw data here: http://paste.ubuntu.com/19124001/

###Questions and next steps
Is there any way I can share data or results files? Can github be used for that?
What is a good technique or software to use to graph data vs date/time?
What is a good way to share data and results / graphs?

Currently the riffle is logging data in the cooler for the rest of the week. After that, I will let it sit at room temperature and continue to log data for at least a day.

###Why I'm interested
I'm excited about a new powersaving mode for the riffle, and getting code ready for new testers and users!