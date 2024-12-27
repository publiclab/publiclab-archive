---
title: "WebJack: Testers needed!"

tagnames: 'arduino, alphatest, sensors, gsoc, barnstar:basic, webjack, headphone-jack, category:build, include, activity:webjack'
author: rmeister
path: /notes/rmeister/07-18-2016/webjack-testers-needed.md
nid: 13295
uid: 468994
cids: 14961,14968,14969,14972,14975,14977,14979,14982,14984,14985,14986,14987,14988,14989,14990,14991,14993,15001,15003,15006,15007,15008,15009,15010,15011,15012,15013,15021,15022,15023,15124,15376,15382,15384,15385,15386,15387,16062,16066,16067,16471,16516,16525,16526,17811
---

![](https://publiclab.org/public/system/images/photos/000/017/111/original/IMG_0138_web_thumb.JPG)

# WebJack: Testers needed!

by [rmeister](/profile/rmeister) | July 18, 2016 11:52

July 18, 2016 11:52 | Tags: [arduino](/tag/arduino), [alphatest](/tag/alphatest), [sensors](/tag/sensors), [gsoc](/tag/gsoc), [barnstar:basic](/tag/barnstar:basic), [webjack](/tag/webjack), [headphone-jack](/tag/headphone-jack), [category:build](/tag/category:build), [include](/tag/include), [activity:webjack](/tag/activity:webjack)

----

This is a tutorial on how to test WebJack.

__What is WebJack?__
WebJack is a JavaScript library that allows to communicate with an Arduino microcontroller via headphone jack. There is no need of a usual serial connection via USB or whatever, and therefore no drivers need to be installed. Instead, you can plug a cable into the headphone jack and open a website to begin data transfer. The aim of WebJack is to enable communication between smartphones (equipped with a browser) and Arduinos, without installing additional software on the phone.

I successfully tested WebJack with a handful of different mobile devices. To get WebJack working with as much devices as possible, I kindly ask for your help on testing at real life conditions! 

What do you need to test WebJack?

__Hardware:__

- Arduino/Genuino (currently only tested with the Uno)
- 3 resistors
- 1 capacitor
- a 4-pin headphone connector (tip-ring-ring-sleeve)


__Software:__

- Arduino IDE of your choice
- SoftModem library

_Everyone not equipped with an Arduino can switch to this_ [alternative tutorial](https://publiclab.org/notes/rmeister/07-18-2016/webjack-test-without-arduino).

Now these are the steps to get it running:

###1. Install SoftModem to your 'libraries' directory
Get the pre-configured version from the webjack branch: https://github.com/rmeister/SoftModem/tree/webjack

###2. Load this sketch to the Arduino

	#include <SoftModem.h>

	SoftModem modem = SoftModem();

	void setup() {
	  Serial.begin(115200);
	  Serial.println("Booting");
	  delay(100);
	  modem.begin();
	}

	void loop() {
	  delay(150);
	  uint8_t c[7] = {'W', 'e', 'b', 'J', 'a', 'c', 'k'};
	  modem.write(c, 7);
	}

It will repeat sending "WebJack" all the time.

### 3. Patch the hardware together
__Use this circuit at your own risk.__ Just want to make sure I'm not responsible if you damage your phone or your Arduino ;) 

[![SoftModem_sending_circuit.png](//i.publiclab.org/system/images/photos/000/017/058/large/SoftModem_sending_circuit.png)](//i.publiclab.org/system/images/photos/000/017/058/original/SoftModem_sending_circuit.png)

Ring 2 is the one closer to the sleeve. The resistors and the capacitor don't necessarily have to be of exactly the same values. I've build the circuit with three resistors of 1k Ohm and it worked well, too. The sum of R1 and R3 should not be much less than 1k Ohm. You also don't need a jack as pictured above, I just ripped of a cable and connected the wires of ring 2 and sleeve. 


Here is a photo of my setup:

[![IMG_0138_web.JPG](//i.publiclab.org/system/images/photos/000/017/089/large/IMG_0138_web.JPG)](//i.publiclab.org/system/images/photos/000/017/089/original/IMG_0138_web.JPG)


### 4. Plug in the headphone connector
...and visit the [demo page](https://publiclab.github.io/webjack/examples) of WebJack. Here's a QR code for that, so you don't have to type it:

[![qr_webjack_demo.gif](//i.publiclab.org/system/images/photos/000/017/088/large/qr_webjack_demo.gif)](//i.publiclab.org/system/images/photos/000/017/088/original/qr_webjack_demo.gif)

_Hint for Safari users: please switch to Chrome/Firefox/Opera. Safari does not support WebRTC yet._

 The browser may ask if you permit to take recordings from the microphone: answer 'yes'. You should see the string "WebJack" ocurring multiple times in the "Received Data" box. If nothing appears after a couple of seconds, or if the output is very cryptic text, the test failed. Else, it was successful and you can skip the following step.

### 5. Feedback
Nothing appeared in the mentioned box? Then please go to this [WebRTC recorder](https://webaudiodemos.appspot.com/AudioRecorder/index.html) and record for about 5 seconds. Please save the recording and attach it with this information about your setup in the comments:

- resistor/capacitor values
- smartphone model
- browser


__That's it, thank you for your help!__ And of course I would also love to hear your feedback and suggestions in the comments if the test was successful!