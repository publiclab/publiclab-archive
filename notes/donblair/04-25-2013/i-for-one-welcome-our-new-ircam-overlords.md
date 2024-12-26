---
title: "I For One Welcome Our New IRCAM Overlords"\ntagnames: 'near-infrared-camera, raspberry-pi, infrared-camera, nvdi'
author: donblair
path: /notes/donblair/04-25-2013/i-for-one-welcome-our-new-ircam-overlords.md
nid: 7036
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/000/114/original/overlord.png)

# I For One Welcome Our New IRCAM Overlords

by [donblair](../profile/donblair) | April 25, 2013 00:34

April 25, 2013 00:34 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [raspberry-pi](../tag/raspberry-pi), [infrared-camera](../tag/infrared-camera), [nvdi](../tag/nvdi)

----

<iframe width="420" height="315" src="https://www.youtube.com/embed/cglic_UuFP4" frameborder="0" allowfullscreen></iframe>

A Raspberry Pi or other Linux-running portable computer can be used as a small sensing platform; typical USB computer peripherals like webcams can be plugged in directly and controlled via simple Python scripts.  There are already many easy-to-follow tutorials online for accomplishing this, and the associated instructions are usually even easier to follow that typical Linux OS instructions:  the first step is usually to grab a Raspberry Pi and download a 'fresh distribution' of the operating system, so everyone following the tutorial starts with precisely the same hardware and software. So, if you've any interest in playing around with Linux, it's a great way to start -- there's a huge, supportive community online, and the hardware is relatively cheap.

Below I'm posting some quick notes on setting up a Raspberry Pi with button control, so that arbitrary python scripts can be run on the device by pressing a button -- in this case, taking a webcam snapshot.  Then, for fun, I added in servo control -- for a 'panning timelapse', perhaps. 

### Controlling a python script with a button on the Raspberry Pi

1. Download [Occidentalis](http://learn.adafruit.com/adafruit-raspberry-pi-educational-linux-distro/occidentalis-v0-dot-2) image and burn it to an SD card
2. Boot up the RPi with the SD card, and configure settings on pi as prompted -- especially "expand root" and "locale" and "timezone". This, and any of the software-update steps below, will require that the RPi is connected via ethernet.
3. "sudo apt-get update"
4. "sudo apt-get install python-dev" 
5. "sudo apt-get install python-rpi.gpio"
6. "supo apt-get install fswebcam" 
7. Grab a webcam and plug it into the USB port
8. For button action, wire up as per diagram [here](http://learn.adafruit.com/playing-sounds-and-using-buttons-with-raspberry-pi/bread-board-setup-for-input-buttons)
9. Demo python code for using a button [here](http://learn.adafruit.com/playing-sounds-and-using-buttons-with-raspberry-pi/code)

Sample code for triggering a webcam with a button:

    #!/usr/bin/env python

    from time import sleep
    import os
    import RPi.GPIO as GPIO

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(25, GPIO.IN)

    while True:
        if ( GPIO.input(25)== False ):
                #os.system('mpg321 vader.mp3 &')
                #os.system('fswebcam test.jpeg')
                print "Switch connected"
                os.system('fswebcam test.jpeg')
        else:
                print "Switch disconnected"
        sleep(0.1);

### Adding servo control

There's a great tutorial on adafruit on how to wire up the RPi to control a servo motor [here](http://learn.adafruit.com/adafruits-raspberry-pi-lesson-8-using-a-servo-motor/hardware).  And there's info on multiple servos [here](http://www.adafruit.com/products/815).

Code for combining button presses with camera shots and servo action:

    #!/usr/bin/env python

    from time import sleep
    import os
    import RPi.GPIO as GPIO

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(25, GPIO.IN)

    def set(property, value):
        try:
            f = open('/sys/class/rpi-pwm/pwm0/' + property, 'w')
            f.write(value)
            f.close()	
        except:
            print('Error writing to: ' + property + " value: " + value)

    def setServo(angle):
	    set('servo', str(angle))
	
    set("delayed", "0")
    set("mode", "servo")
    set("servo_max", "180")
    set("active", "1")

    delay_period = 3 

    while True:
        if ( GPIO.input(25)== False ):
		    print "switch connected"
		    setServo(45)
		    sleep(1)
		    os.system('fswebcam test.jpeg')
		    sleep(2)
		    setServo(90)
		    sleep(1)
		    os.system('fswebcam test.jpeg')
                sleep(2)
	    else:
		    print "waiting ..."        
	    sleep(0.1);
