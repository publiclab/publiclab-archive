---
title: "Getting a Raspberry Pi to output data by emulating a keyboard"

tagnames: 'raspberry-pi, usb, ease-of-use, keyboard, hid, question:raspberry-pi, question:data-logging'
author: warren
path: /notes/warren/04-29-2017/getting-a-raspberry-pi-to-output-data-by-emulating-a-keyboard.md
nid: 14151
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/020/273/original/IMG_20170429_162416.jpg)

# Getting a Raspberry Pi to output data by emulating a keyboard

by [warren](../../../profile/warren) | April 29, 2017 20:28

April 29, 2017 20:28 | Tags: [raspberry-pi](../tag/raspberry-pi), [usb](../tag/usb), [ease-of-use](../tag/ease-of-use), [keyboard](../tag/keyboard), [hid](../tag/hid), [question:raspberry-pi](../tag/question:raspberry-pi), [question:data-logging](../tag/question:data-logging)

----

### What I want to do

Folks are using the [Raspberry Pi](http://raspberrypi.org), a cheap stripped-down computer available for as little as $5, to connect to sensors, record weather data, and even [run a DIY spectrometer](/tag/webvalley). But it's hard to get data off of them easily, and hard to set them up.

But there seem to be ways to get them to "act like a keyboard" and, when connected to a computer by USB, to simply "virtually type" out data. This would work on Windows, Linux, and Mac, and be really simple -- no mucking around with Bluetooth, WiFi, SD cards, etc.

I've found a lot of resources on this:

Two approaches to getting a Pi to "act like a keyboard" using the "USB Gadget" system and the "HID" (human interface device) spec:

- [https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget?view=all](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget?view=all)
- [http://blog.gbaman.info/?p=699](http://blog.gbaman.info/?p=699), updated version here: [http://blog.gbaman.info/?p=791](http://blog.gbaman.info/?p=791)

There's guidance on how to actually use and test it here:

[https://github.com/torvalds/linux/blob/master/Documentation/usb/gadget-testing.txt#L207-L220](https://github.com/torvalds/linux/blob/master/Documentation/usb/gadget-testing.txt#L207-L220)

And a bit more on the actual codes and how to get it to "type" any text here:

- [http://isticktoit.net/?p=1383](http://isticktoit.net/?p=1383)
- [https://github.com/girst/hardpass-sendHID/blob/master/scancodes.c](https://github.com/girst/hardpass-sendHID/blob/master/scancodes.c)

### Ideal outcome

What I'd really like is an image of an SD card with all of this set up already -- or a script that'll run on an image very straightforwardly. That way this could be set up with minimal difficulty by folks who are trying to do sensing with Raspberry Pis!

Anyone want to take a crack at it?

****

#### Updates:

Made some progress; i've gotten the "ethernet" usb gadget to work [as shown here](https://gist.github.com/gbaman/975e2db164b3ca2b51ae11e45e8fd40a#gistcomment-2079349) (and found this much simpler instruction set with lots of helpful comments)

I found there's an actual utility for piping text to the "virtual keyboard" from the commandline: https://github.com/girst/hardpass-passwordmanager/blob/master/send_hid/hardpass-demo.sh

Also found this Android-based implementation with a utility to actually output the correct codes to the device once it's running: https://github.com/pelya/android-keyboard-gadget#scripting (although the above does this too)