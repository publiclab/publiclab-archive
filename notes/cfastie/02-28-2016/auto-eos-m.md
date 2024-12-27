---
title: "Auto EOS M"

tagnames: 'balloon-mapping, arduino, vermont, kite-aerial-photography, camera-triggering, kite, kap, camera, aerial-mapping, canon, skyshield, eos_m, mirrorless, response:12752, difficulty:hard, activity:camera-triggering'
author: cfastie
path: /notes/cfastie/02-28-2016/auto-eos-m.md
nid: 12757
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/014/607/original/EOSIR-731-8.jpg)

# Auto EOS M

by [cfastie](../../../profile/cfastie) | February 28, 2016 05:08

February 28, 2016 05:08 | Tags: [balloon-mapping](../tag/balloon-mapping), [arduino](../tag/arduino), [vermont](../tag/vermont), [kite-aerial-photography](../tag/kite-aerial-photography), [camera-triggering](../tag/camera-triggering), [kite](../tag/kite), [kap](../tag/kap), [camera](../tag/camera), [aerial-mapping](../tag/aerial-mapping), [canon](../tag/canon), [skyshield](../tag/skyshield), [eos_m](../tag/eos_m), [mirrorless](../tag/mirrorless), [response:12752](../tag/response:12752), [difficulty:hard](../tag/difficulty:hard), [activity:camera-triggering](../tag/activity:camera-triggering)

----

If I am going to use a Canon EOS M for kite aerial photography, I have to figure out how to trigger the shutter remotely. The EOS M is not a PowerShot, so CHDK is not an option. The EOS M does not have a port for a remote shutter cable, and there is no system for sending shutter commands through the USB port. The EOS M does not have an intervalometer feature to take photos at regular intervals.

There seem to be three other options with great promise:

1. Although CHDK cannot be used, there is a similar firmware hack that works on the EOS M and on many Canon DSLRs. [Magic Lantern](http://www.magiclantern.fm/) adds many features including an intervalometer. So interval shooting is easy, and I have that working.
2. The EOS M has an infrared remote sensor and Canon sells little infrared remote controls to trip the shutter or start recording video. The precise signal of infrared micro pulses required for most cameras is known, and there are even [Arduino libraries](https://github.com/z3t0/Arduino-IRremote) with functions to produce the correct signal for many cameras. There are also [commercial products designed for kite photography](http://www.gentles.ltd.uk/gentled/shutter-zoom.htm?filter=eos%20m) which trigger the shutter via infrared when a pulse is sent from an autoKAP controller or radio receiver.  I modified the [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller) to interact with the EOS M via infrared (more below).
3. Magic Lantern adds a feature called Audio RemoteShot which allows you to take a photo by clapping or making some other noise. The EOS M has a built in microphone and also an external microphone port, and either can be used to interact with the Audio RemoteShot feature. If you plug in an external microphone, the camera’s microphone is disabled and you can trigger the shutter by speaking into the external mic. Or another device can send a pulse to the microphone port. This is much tidier than the infrared solution because a standard 1/8” stereo jack is more secure than an infrared LED stuck on the front of the camera. I got this working, and the SkyShield was triggering the EOS M shutter via the mic port, but Audio RemoteShot does not always work. Sometimes it does not listen to the signal from any mic. So more testing is required. 

I hope to figure out what’s wrong with Audio RemoteShot, but in the meantime it was fun to get infrared triggering working. The key is finding the pattern of pulses required by the EOS M. I found some code in a [blog post from 2010]( http://controlyourcamera.blogspot.com/2010/01/infrared-controlled-timelapse.html) which worked great. The post also had this nice diagram of the pulse pattern.

[![Canon-RC-1.png](//i.publiclab.org/system/images/photos/000/014/605/large/Canon-RC-1.png)](//i.publiclab.org/system/images/photos/000/014/605/original/Canon-RC-1.png)  
*This figure predates the EOS M by a couple of years, but the pattern seems to work on the EOS M.*


Here is the Arduino code snippet to recreate that pattern (or something close):

    for(int i=0; i<16; i++) 
    { 
    digitalWrite(irLED, HIGH);
    delayMicroseconds(11);
    digitalWrite(irLED, LOW);
    delayMicroseconds(11);
    } 
    delayMicroseconds(7330); 

    for(int i=0; i<16; i++) 
    { 
    digitalWrite(irLED, HIGH);
    delayMicroseconds(11);
    digitalWrite(irLED, LOW);
    delayMicroseconds(11);
    }   

I plopped that into the sketch for the SkyShield’s Nano and it worked perfectly. The only other thing I had to do to the SkyShield was swap the USB cable that triggers PowerShots running CHDK for a cable with a 950 nm infrared LED and a 180 ohm resistor. The video below shows it in operation.

[![EOSIR-732-3.jpg](//i.publiclab.org/system/images/photos/000/014/606/large/EOSIR-732-3.jpg)](//i.publiclab.org/system/images/photos/000/014/606/original/EOSIR-732-3.jpg)  
*This is the only new hardware required. I will have to make a tidier version for aerial use.*  
.  

<iframe width="640" height="360" src="https://www.youtube.com/embed/OHCFZkP2hDk?rel=0" frameborder="0" allowfullscreen></iframe>