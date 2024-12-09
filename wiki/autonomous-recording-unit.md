---
title: 'Autonomous Recording Unit'
tagnames: arduino, research, environment, audio, data-logging, parent:data-logging
author: babailey
path: /wiki/autonomous-recording-unit.md
nid: 11181
uid: 428915

---

![](https://publiclab.org/public/system/images/photos/000/009/679/original/ARU.jpg)

# Autonomous Recording Unit

by [warren](../profile/warren), [babailey](../profile/babailey)

September 24, 2014 15:28 | Tags: [arduino](../tag/arduino), [research](../tag/research), [environment](../tag/environment), [audio](../tag/audio), [data-logging](../tag/data-logging), [parent:data-logging](../tag/parent:data-logging)

----

**Current Project Phase: Prototyping & Design Improvement**

##Overview:
Final Goal: Create an autonomous recording unit for long term use outdoors

Approach: Use Arduino to record audio in 30-60 minute intervals relative to local time of sunrise and sunset.  A low cost olympus audio recorder is preferred as the actual audio recording device to insure high quality audio recording.

Audio unit: I currently have access to several Olympus dm-620 units which can be controlled via an optional rs-30w remote module operated with an infrared remote.

Other components:

* Real time clock w/ alarm
* Battery-powered operation
* Possible logging of temp\humidity
* Ir module

Input and suggestions needed:
As someone new to the Arduino community I’m looking for an approach that will allow me to complete this project in about 30-50 hours.  I do have people who can offer general programming guidance. Would you recommend avoiding any custom digital recording options? Is it feasible to try to control the recorder with an IR module? Via the usb cable?

Suggestions for battery powered Arduino projects; can Arduino run in a low power mode? I would like the Arduino to run for 2 weeks; I only need it to be active to turn on/off the recorder and collect temp/humidity data.

## Questions

[autonomous-recording-unit](../../tag/question:autonomous-recording-unit)

****

## Challenges

1.  Can IR signals being transmitted by a factory made remote be replicated? This would allow an Arduinio IR module to control the recorder?
__This is possible using AnalysIR.  The output generated from analysis of the rs-30w remote is found here: 
<a href="https://i.publiclab.org/system/images/photos/000/009/680/original/Remote_IR_Data.docx"><i class="icon icon-file"></i> Remote_IR_Data.docx</a>  The Olympus remote uses the 32-bit NEC protocol at a modulation frequency of 38kHz. The start Value Hex: 61DC01FE; Stop Value Hex: 61DC02FD
These values will allow the arduino to start & stop audio recording. __
2.  Can the recorder be controlled via USB?
__Powering on the unit is possible, but additional controls are not easily implemented. The unit can be powered on by activating a Female USB Type A  port controlled by the Arduino __
3.  How much battery power will be required for 1-2 weeks of operation?  How can power use be monitored?
__9v batteries can power the arduino unit.  A Real Time Clock with Alarm function will allow the unit to conserve power outside of recording periods.  Power monitoring is a more advanced operation that will require additional research.__
4.  What are best practices to weatherproof components?
__Continued use of a weatherproof electronic box with shielded microphone should be adequate__
5. Should I give up on the Olympus Audio Recorder interface and try to implement audio recording using Arudino?
__ High quality audio recording is not easily implemented on an arduino. An external recorder still seems ideal for high quality audio__

## Version 0.1

Based on initial research and available components a basic version of this Recording Unit can be implemented as described below:

1.	Required Components
        a.	Arduino Uno Rev3
        b.	IT receiver
        c.	DS3234, Real Time Clock with Alarm Function
        d.	Olympus dm-620 recorder
        e.	Olympus rs-30w remote receiver
        f.	Type-A female USB connector
        g.	Waterproof box
2.	Operation Overview Description:
    	The ARU will record 30 minutes of audio each morning beginning at sunrise, set start time for the following day and shutdown
3.	Pre-deployment steps
            i.	Set Latitude & Longitude Variables to location of recorder
            ii.	Connect Real Time Clock battery and set local time & date
            iii.	Connect dm-620 to Arduino usb port
            iv.	Connect rs-30w to Olympus recorder
4.	Detailed Operation
            i.	Arduino starts up at sunrise
            ii.	Arduino powers-on USB port which activates Olympus recorder
            iii.	Arduino sends out the IR code to start audio recording
            iv.	30 minutes after sunrise, Arduino sends out the IR code to stop recording
            v.	Sunrise time for the next day is calculated
                1.	http://williams.best.vwh.net/sunrise_sunset_algorithm.htm
            vi.	Alarm is set to power on the Aruduino at sunrise the following day
            vii. Arduino powers down.



## Links

**Suggestions & Related Projects**

[My request for design input on Arduino Forums](http://forum.arduino.cc/index.php?topic=266516.msg1879225#msg1879225)


**example code & Instructables**
[Wire a RTC](http://www.l8ter.com/?p=375)

[Clone a remote](http://www.instructables.com/id/Clone-a-Remote-with-Arduino/)

**IR Decoding**
[AnalysIR Software](http://www.analysir.com)

[AnalysIT User & Wiring Guide](http://www.analysir.com/downloads/AnalysIR_Getting_Started_v0914310160_User_Guide.pdf)