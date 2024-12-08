---
title: Visualize data from a Simple Air Sensor using onboard serial hardware
tagnames: arduino, air-quality, activity:air-quality, data-visualization, simple-air-sensor, activity:simple-air-sensor, presenting-data, activity:presenting-data, air-quality-data, activity:air-quality-data, activity:data-visualization, simple-air-sensor-data
author: bhamster
path: /notes/bhamster/12-17-2021/visualize-data-from-a-simple-air-sensor-using-onboard-serial-hardware.md
nid: 28508
uid: 664477

---

# Visualize data from a Simple Air Sensor using onboard serial hardware

by [bhamster](../profile/bhamster) December 17, 2021 17:56

December 17, 2021 17:56 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [activity:air-quality](../tag/activity:air-quality), [data-visualization](../tag/data-visualization), [simple-air-sensor](../tag/simple-air-sensor), [activity:simple-air-sensor](../tag/activity:simple-air-sensor), [presenting-data](../tag/presenting-data), [activity:presenting-data](../tag/activity:presenting-data), [air-quality-data](../tag/air-quality-data), [activity:air-quality-data](../tag/activity:air-quality-data), [activity:data-visualization](../tag/activity:data-visualization), [simple-air-sensor-data](../tag/simple-air-sensor-data)

## Purpose

The [Simple Air Sensor](https://publiclab.org/wiki/simple-air-sensor) is a device that detects particulate matter and displays a green, yellow, or red light to indicate low, medium, and high PM2.5 levels, respectively. An air sensor is connected to a small programmable circuit board (an Arduino), which tells the light when to change color based on the sensor reading. The colored light is a quick way to visualize relative air quality.

You can also **get quantitative data on particulate matter concentration from the device** with some extra steps. There are a couple ways documented at the links below:

- [Record data from a Simple Air Sensor](https://publiclab.org/notes/warren/09-10-2019/record-data-from-a-simple-air-sensor) using a program called WebJack, by @warren
- [Log Simple Air Sensor data to SD card](https://publiclab.org/notes/imvec/12-17-2019/logging-simple-air-sensor-data-to-sd-card), by @imvec

The purpose of this activity is to describe another way to read data from the Simple Air Sensor. We'll use **[serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/) communication hardware that's built into the device** to send air sensor data to a computer, and the **serial plotter** tool in free Arduino software to visualize the data.

## Materials needed

- An assembled [Simple Air Sensor](https://publiclab.org/wiki/simple-air-sensor) with the USB cable for connecting the device to a computer
- A computer for running the Arduino software and visualizing data
- Free [Arduino software](https://www.arduino.cc/en/software), called the Integrated Development Environment (IDE), installed on your computer (I found the downloaded desktop software to work better than the cloud-based "web editor" that Arduino also offers)
- A software program (called a "sketch" in Arduino coding lingo) named "plantower-rgb-plotter.ino". Originally written by @warren, modified by @bhamster. [Download the program here](https://create.arduino.cc/editor/jl_plots/cf9cec30-fa45-4300-b776-3c28393955e8/preview "https://create.arduino.cc/editor/jl_plots/cf9cec30-fa45-4300-b776-3c28393955e8/preview").

<br>

---------

## Steps

### Step 1\. Connecting the Simple Air Sensor to a computer

Open the Arduino IDE software on your computer. Connect the Arduino board on your Simple Air Sensor to your computer with a mini USB cable.

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/45252?s=o" alt="simple air sensor connected to computer">

<br>

### Step 2\. Choosing settings

Make sure the software is talking to the Arduino board properly by going to "Tools" in the software menu and selecting the correct **Board**, **Processor**, and **Port**:

<img style="width: 60%; height: 60%" src="https://publiclab.org/i/45256?s=o" alt="Arduino tools menu to select board, processor, and port">

<br>

- Board = "Arduino Nano" is the board model in Simple Air Sensors from the Public Lab store
- Processor = Note that "ATmega328P (Old Bootloader)" is selected. See \* below for a side story with details on why!
- Port = make sure it says "usbserial" in there

<br>

\*📖 Fun side story on the processor, or skip down to step 3.

The chip on this particular Arduino board that enables data to go from serial-to-USB is a cheaper CH430 chip. Previously, this [caused some problems](https://publiclab.org/questions/warren/07-03-2017/how-do-i-install-a-bootloader-on-a-riffle-data-logger#c22518) when Macs tried to read serial data from the board. Fixing the problem involved searching for and downloading drivers.

I did encounter a problem when I first tried to upload a program to the board. I got the error: "avrdude: stk500\_getsync() attempt 1 of 10: not in sync: resp=0x0d"

I did not know what this meant 🤷🏻‍♀️, so I copy/pasted the error into a search engine and got this:

<img style="width: 60%; height: 60%" src="https://publiclab.org/i/45257?s=o" alt="avrdude error">

<br>

In addition to a funny post where one person complains that "some mean dude named avr came along and stopped me," I found an answer. It seems that the MacOS has since fixed its issue with the chip, and [we just need to select the "old bootloader."](https://arduino.stackexchange.com/questions/51729/ch340-nano-avrdude-stk500-getsync-not-in-sync-resp-0xa4) No more messing with extra drivers.

<br>

### Step 3\. Uploading a program to the Arduino board

If you got the Simple Air Sensor from the Public Lab store, the Arduino board that came with it was already programmed with code called "plantower\_rgb\_webjack" (by @warren. [You can find the download link here](https://publiclab.org/notes/warren/03-19-2019/assembling-the-simple-air-sensor#Step+5:+plug+it+in)). This program includes code that enables the Arduino to output particulate matter data from the sensor via serial. In other words, we can "read" the sensor data from the Arduino board.

The original program produces more data than I wanted to visualize in a simple graph, though. So I modified the original code a bit to make it display **three particulate matter readings: PM1.0, PM2.5, and PM10** in standard concentrations units. ([More on what standard concentration units mean here](https://publiclab.org/questions/samr/04-07-2019/how-to-interpret-pms5003-sensor-values).)

**Download the [modified program called "plantower-rgb-plotter.ino" here](https://create.arduino.cc/editor/jl_plots/cf9cec30-fa45-4300-b776-3c28393955e8/preview)**, and then open the file. We're going to write over the original program already on the Arduino board. This should not affect how the Simple Air Sensor lights display, just what shows up when we read serial data from the device. Note that the modified program also removed code for reading sensor data via WebJack.

On the panel that opens, you'll see a circle icon with an arrow pointing right--this is the upload button. Press that button and the modified program will be written to your attached Arduino board.

<img style="width: 60%; height: 60%" src="https://publiclab.org/i/45258?s=o" alt="uploading program to the Arduino board">

<br>

### Step 4\. Using the "serial plotter" to see sensor data

One way of reading and visualizing the sensor data uses the Serial Plotter. In the Arduino menu, go to "Tools" again and select **Serial Plotter**. A new window will appear.

Within the Serial Plotter window, you'll see a dropdown with a number next to the word "baud." **Change the baud rate to 115200**. See \*\* below for another side note about why.

<img style="width: 50%; height: 50%" src="https://publiclab.org/i/45259?s=o" alt="changing baud rate on serial plotter">

<br>

Now we'll see this on the plotter!

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/45260?s=o" alt="serial plotter start">

<br> 

The air around my sensor was still clearing from an earlier test with a lit match, so the readings aren't starting right at zero.

Here's the plot I got when I tested the air sensor and plotter visual with cornstarch and then a lit match. PM1.0 is represented by the blue line, PM2.5 by the red line, and PM10 by the green line.

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/45261?s=o" alt="serial plotter spike from cornstarch and lit match">

<br>

\*\*Note about the baud rate:

I'll admit I had no idea what this meant. Someone who was helping me suggested we look in the program code for clues.

The program behind the Simple Air Sensor contains these lines showing that the baud rate for outputting data to the computer over serial is 115200\.

<img style="width: 30%; height: 30%" src="https://publiclab.org/i/45262?s=o" alt="baud rate in program code">

<br>

### Step 5 (optional). Using the "serial monitor" to see sensor data

You can also view the PM concentration numbers in a table form using the Serial Monitor. Go to "Tools" again and select **Serial Monitor**. A new window will appear and look something like this. You might need to adjust the baud rate again.

<img style="width: 80%; height: 80%" src="https://publiclab.org/i/45263?s=o" alt="serial monitor with data">

<br>

---------

## Wrap up

If you're seeing graph lines on the serial plotter that respond to sensor tests with matches or dusty substances, hooray! 🎉

I'm pretty new to the Arduino platform and one thing I learned while doing this activity is that when encountering errors, searching online for what the errors mean is super helpful.

_If you have any other ideas or tips to add to this activity, please comment below!_