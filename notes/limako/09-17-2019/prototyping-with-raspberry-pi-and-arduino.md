---
title: "Prototyping with Raspberry Pi and Arduino"

tagnames: 'arduino, education, raspberry-pi, umass-amherst, prototyping, first-time-poster'
author: limako
path: /notes/limako/09-17-2019/prototyping-with-raspberry-pi-and-arduino.md
nid: 20899
uid: 546871

cids: 25562,25567,25600,25605,27242,27250,27251

---

![](https://publiclab.org/public/system/images/photos/000/035/300/original/prototyping.jpg)

# Prototyping with Raspberry Pi and Arduino

by [limako](../../../profile/limako) | September 17, 2019 20:23

September 17, 2019 20:23 | Tags: [arduino](../tag/arduino), [education](../tag/education), [raspberry-pi](../tag/raspberry-pi), [umass-amherst](../tag/umass-amherst), [prototyping](../tag/prototyping), [first-time-poster](../tag/first-time-poster)

----

I'm beginning to build a prototyping rig for students to use for learning how to build open science instrumentation.  My thought is that most instruments students might build will use either a Raspberry Pi or Arduino-like device as the platform/data logger. My thought was to have  students learn how to set up, secure, and use a raspberry pi via ssh -- and then use the raspberry pi to program an Arduino via the command line. There's a steep learning curve for starting out, but it will encourage students to learn the foundational skills with the command line that, in the long run, will make it much easier to support and interact with their instruments.

This is my first attempt at setting this up.

I installed a fresh image of Raspbian Buster

On fresh disk image:  

```
touch /boot/ssh
vim config.txt (add clause for display I have hooked up to watch it boot)
```

After booting:  

```
sudo apt-get install vim
vi .inputrc ("set editing-mode vi")
sudo vim /etc/hostname (set hostname)
sudo vim /etc/hosts (set raspberrypi to hostname)
sudo apt-get update
sudo apt-get upgrade  
sudo raspi-config (expand file-system)
sudo reboot
```
Then set up ldap authentication:

```
sudo apt-get install libpam-ldapd libnss-ldapd 
sudo vim /etc/nslcd.conf (add browse user) 
sudo visudo (add "[username] ALL=(ALL) PASSWD: ALL" for all admin users including "pi")
sudo reboot
```

Then install our firewall script:

```
scp pifire.sh (our firewall script)  
sudo vim rc.local (to start firewall -- probably should move to networking/pre-up)  
sudo reboot
```

Then create environment for prototyping  

```
sudo apt install arduino-core  
sudo apt install arduino-mk
```

Now I can create a folder for each .ino file, create a Makefile in that directory with the following settings:

```
ARDUINO_DIR   = /usr/share/arduino
ARDMK_DIR = /usr/share/arduino
ARDUINO_LIBS =
BOARD_TAG    = uno
MONITOR_PORT = /dev/ttyACM0
include /usr/share/arduino/Arduino.mk
```

And then type "make" and "make upload" to build and upload the executable to a connected arduino.

And I found a snippet of python I could use to get data via the serial monitor:

```
#!/usr/bin/python
import serial
ser = serial.Serial('/dev/ttyACM0', 9600)
while 1: 
    if(ser.in_waiting >0):
        line = ser.readline()
        print(line)
```


It's a start. I'm still not sure how adaptable this will be for students to work with other arduino-like devices (e.g. Adafruit Feather)

