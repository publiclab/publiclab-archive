---
title: "notes on setting up a Dustduino"\ntagnames: 'arduino, air-quality, dustduino, dust, silica, particle-monitoring, shinyei, replication:9818, air-sensors'
author: mathew
path: /notes/mathew/10-27-2014/notes-on-setting-up-a-dustduino.md
nid: 11303
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/007/643/original/IMG_20141026_170648.jpg)

# notes on setting up a Dustduino

by [mathew](../profile/mathew) | October 27, 2014 04:14

October 27, 2014 04:14 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [dustduino](../tag/dustduino), [dust](../tag/dust), [silica](../tag/silica), [particle-monitoring](../tag/particle-monitoring), [shinyei](../tag/shinyei), [replication:9818](../tag/replication:9818), [air-sensors](../tag/air-sensors)

----

###What I want to do
setup a [Dustduino](http://publiclab.org/wiki/dustduino) per Matthew @Schoyer's [instructions](/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino)

###My attempt and results
I had trouble with the RN-XV 
I couldn't get it working per @Schoyer's [instructions](http://www.mentalmunition.com/2013/06/step-by-step-guide-to-programming-rn-xv.html)

so I switched to WiFi configuration, as [described in the manual.](http://dlnmh9ip6v2uc.cloudfront.net/datasheets/Wireless/WiFi/rn-wiflycr-ug-v1.2r.pdf)  First I found which pin was actually GPIO9 (it ewas pin 8) through the sparkfun [comments page on the device.](https://www.sparkfun.com/products/10822)

[![IMG_20141026_170648.jpg](https://i.publiclab.org/system/images/photos/000/007/635/medium/IMG_20141026_170648.jpg)](https://i.publiclab.org/system/images/photos/000/007/635/original/IMG_20141026_170648.jpg)

that got it to spit out a wifi network but I couldn't for the life of me telnet in as the manual suggested.  No connection.

I also looked at a few other sets of instructions i found [here](http://forum.arduino.cc/index.php/topic,95681.0.html)

In the end, I just gave up on DHCP and figured I'd manually configure everything by serial.  

@Schoyer's original instructions:
- With no shield attached, load a bare minimum sketch to Arduino UNO

- Attach the RN-XV to the shield, and attach the shield to the UNO

- Switch serial select on the shield to "USB"

- Launch the Arduino IDE, and open serial monitor

- Select "no line ending" in the serial monitor

- Enter "$$$"

- RN-XV will respond with "CMD"

- Change serial monitor to "carriage return"

My commands:
factory Reset

repeat:

- Select "no line ending" in the serial monitor

- Enter "$$$"

- RN-XV will respond with "CMD"

- Change serial monitor to "carriage return"

More commands:

set wlan join 1

set ip dhcp 0

set ip address 192.168.43.100

set ip netmask 255.255.255.0

set wlan ssid bananaslug

set wlan phrase oregonslimetrail

save

reboot

This got WiFi working, but since [Xively](http://Xively.com) isn't taking development memberships, I had nowhere to send the data....

so I just hooked it up as a serial device, as per @Schoyer's [code](https://github.com/NodeJournalism/DustDuino)

Here were the pinouts, from Shinyei sensor to arduino
[![Screen_Shot_2014-10-26_at_9.49.04_PM.png](https://i.publiclab.org/system/images/photos/000/007/636/medium/Screen_Shot_2014-10-26_at_9.49.04_PM.png)](https://i.publiclab.org/system/images/photos/000/007/636/original/Screen_Shot_2014-10-26_at_9.49.04_PM.png)

[![Screen_Shot_2014-10-26_at_9.48.54_PM.png](https://i.publiclab.org/system/images/photos/000/007/642/medium/Screen_Shot_2014-10-26_at_9.48.54_PM.png)](https://i.publiclab.org/system/images/photos/000/007/642/original/Screen_Shot_2014-10-26_at_9.48.54_PM.png)


###Questions and next steps



###Why I'm interested

