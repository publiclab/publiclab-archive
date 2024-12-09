---
title: 'Riffle (and Arduino) first impressions - notes'
tagnames: documentation, github, draft, riffle-beta, first-time-poster
author: pdhixenbaugh
path: /notes/pdhixenbaugh/05-22-2016/riffle-and-arduino-first-impressions-notes.md
nid: 13137
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/016/255/original/blinkRiffleMod___Arduino_2_1.0.5_dfsg2-4_011.png)

# Riffle (and Arduino) first impressions - notes

by [pdhixenbaugh](../profile/pdhixenbaugh) May 22, 2016 19:34

May 22, 2016 19:34 | Tags: [documentation](../tag/documentation), [github](../tag/github), [draft](../tag/draft), [riffle-beta](../tag/riffle-beta), [first-time-poster](../tag/first-time-poster)

----

###What I want to do

Test the Riffle and the Riffle Documentation. From the point of view of a user new to Arduino.

 Jot down my notes, stream of consciousness-style. Will follow up with a more useful writeup with pictures, screenshots, and complete sentences. 

###My attempt and results

Tools needed:
Knife to open box
USB to microusb cable (From phone charger)
Optional tool:
microSD to SD adapter (to doublecheck that the microSD card was properly formatted after reading cfastie's note).

First thing I did was look for the battery switch (found it after a short time searching).
Then I plugged the blue battery jst into the 'lithium' slot, with the switch in its default 'lithium/usb position'
(Later I read the documentation and read that I need to plug the battery into "gen" and have the switch turned to "gen" -- why is that.

Blink works fine.
USB charging light comes on fine.

Testing the blue battery in the 'gen' configuration: the JST is easy enough to plug in, but when pulling it out, I feel like I'm going to break it (never used JST before). Took a lot of force to unplug the JST. I discovered that for testing purposes, you don't have to plug it in until it clicks.

Blink works in the 'gen' configuration,
When I plug the microUSB with the switch to 'gen', and the battery still attached to Gen" the charging light flickers rapidly and sporatically. When I unplug the battery jst, the charging light stops, and blink stops. I unplugged the microUSB in case I could cause damage by having the switch in the wrong position.

Flipped switch to USB, and plugged microusb in. Charging light flickered rapidly for a second, and stopped. Blink is working :)

Next thing I'm thinking about - try to send over a modified 'blink' to test that the arduino IDE is working correctly.

I'm using Ubuntu Mate 15.10 (an old, possibly unsupported version). Arduino IDE was already installed -- I will do another research note that walks through installing it fresh on Ubuntu (because it wasn't obvious).

Under 'tools' in the IDE, it detects /dev/ttyUSB0, without me installing any special drivers. so far so good.

When I flip the switch to USB,  and when powered by microUSB

Meanwhile, I'm not using great protection from ESD electrostatic discharge. 

Carpeted floors. Trying not to walk too much, and grounding myself on a metal lamp pole sometimes.

Wanted to verify that I could send sketches to the Riffle, so I wrote up my very first Arduino Sketch!!! I previously created a github so I could share it here: https://github.com/pdhixenbaugh/Riffle-Getting-Started/tree/master

There are easier ways to share code, for example, this
http://paste.ubuntu.com/16616336/ (I used C++ syntax highlighting, for lack of an Arduino-specific highlight).

Well that's all I had time for this week! Please ask me anything, and I will get back to it as soon as I can (I will be leaving tonight on vacation, and coming back after Memorial Day 5/30)

###Questions and next steps

*Include a 1 sided quick start guide for the Riffle (plug this in, then that, then open the documentation)

*Why does the documentation say to plug the battery in as "Gen" ?

###Why I'm interested
I want to use the Riffle to measure water quality downstream of a local Municipal work yard (think road salt and other municipal stuff), to see what kind of conductivity data I get.

I want to make the Riffle documentation stellar (and also use it as a chance to showcase documentation/writing and editing ability!) 