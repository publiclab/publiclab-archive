---
nid: 21249
title: How to Set up and Test An Arduino
path: public/static/notes/wmacfarl/10-22-2019/how-to-set-up-and-test-an-arduino.md
uid: 424597
tagnames: arduino,new,draft,activity:new,oil-and-gas-water-trio
---

# How to Set up and Test An Arduino

## Purpose

The Arduino is a very popular microcontroller platform for hobbyist electronics and citizen-science projects and is used by many members of the Public Lab community.

This activity walks you through the process of connecting an Arduino to your computer and uploading a simple example program. This is always a good thing to do before you start working on a new Arduino project.

If you verify that the board is working before you get started it is easier to troubleshoot any problems you find yourself having later on down the road.

## Step 1: Download+Install Arduino Software [](https://publiclab.org/notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor#Step+1:+Download+Install+Arduino+Software)

We will use the Arduino IDE to program our Arduino and to read data from it. You can download it [here](https://www.arduino.cc/en/main/software).

Installation instructions can be found on the Arduino website for [Windows](https://www.arduino.cc/en/Guide/Windows), [Mac](https://www.arduino.cc/en/Guide/MacOSX), and [Linux](https://www.arduino.cc/en/Guide/Linux).

If you are using one of the cheaper clone Arduino boards you will probably also need to install the CH430 drivers. You can find them h[ere](http://sparks.gogo.co.nz/ch340.html).

## Step 2: Connect Arduino to Computer by USB [](https://publiclab.org/notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor#Step+2:+Connect+Arduino+to+Computer+by+USB)

The Arduino uses a USB cable to connect to your PC. We will use this USB connection to send the program that we want the Arduino to run from our computer and to allow the Arduino to send data back to our computer.

The Nano and the Uno have different form-factors and use different styles of USB cable but they both have a built-in USB port for programming and charging that you can plug a cable into.

## Step 3: Upload and run a test program [](https://publiclab.org/notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor#Step+3:+Upload+and+run+a+test+program)

The next thing we want to do is to upload and run an example program from the Arduino IDE so that we can see that the board is working and our program is running.

The Arduino website has instructions to do this for the [Uno](https://www.arduino.cc/en/Guide/ArduinoUno) and the [Nano](https://www.arduino.cc/en/Guide/ArduinoNano).

If you are having trouble getting your first test program uploaded to the board, the Arduino webpage has a long [troubleshooting](https://www.arduino.cc/en/guide/troubleshooting) section that you can look at. The most likely cause of trouble, though, is that your computer just isn't seeing the Arduino through the USB port.

You may get an error message when you press the upload button (usually it will say something like "An error occurred while uploading the sketch" or "Problem uploading to board.")

![image description](https://publiclab.org/i/35620.png "arduino_upload_error.png")

If you get an error like this, you will probably solve it by performing the following steps:

1. Check to make sure that your Arduino has power. There should be a power indicator light on the board that should be ON. If it is not on that means your board isn't getting power over USB. Try switching USB cables (because the cable might be broken) and try all of the different USB ports on your computer.
2. If the board is getting power but you still have an error message, you probably don't have the correct port selected. Go to the Tools-\>Port menu and try to switch to a different COM port. Try them all and try uploading your sketch with each one.
3. If your board is getting power and you've tried all of your available ports and you still get these errors when you try to upload your sketch, you should try unplugging the board and plugging it back in again, testing all the available USB ports on your computer as you do so.

This will solve the vast majority of your problems. If this doesn't help, you should have a look at the Arduino [troubleshooting](https://www.arduino.cc/en/guide/troubleshooting "https://www.arduino.cc/en/guide/troubleshooting") guide.