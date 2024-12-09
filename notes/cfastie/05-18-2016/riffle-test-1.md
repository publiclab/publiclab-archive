---
title: Riffle test 1
tagnames: arduino, water-quality, riffle, micro-sd, category:verify, activity:riffle, activity:datalogger, activity:data-logging
author: cfastie
path: /notes/cfastie/05-18-2016/riffle-test-1.md
nid: 13122
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/016/198/original/riffle_20160517-5561.jpg)

# Riffle test 1

by [cfastie](../profile/cfastie) May 18, 2016 05:01

May 18, 2016 05:01 | Tags: [arduino](../tag/arduino), [water-quality](../tag/water-quality), [riffle](../tag/riffle), [micro-sd](../tag/micro-sd), [category:verify](../tag/category:verify), [activity:riffle](../tag/activity:riffle), [activity:datalogger](../tag/activity:datalogger), [activity:data-logging](../tag/activity:data-logging)

----

A beta Riffle arrived today for testing. The Riffle is a custom microcontroller board optimized for collecting data from sensors during long deployments in the field. It is based on a common Arduino processor, but standard Arduino boards sometimes last only a few days on battery power. The Riffle integrates some features that standard Arduinos do not have (e.g, a micro SD card slot, a clock that runs even when the board is off or asleep, some custom circuitry for smart power management) so it can collect data for months on a small battery. It does not have any environmental sensors, it just does the work of collecting and saving data from any sensor connected to it.

I have used Arduinos before so I already had the Arduino program (IDE) installed. I made good progress until the micro SD card got corrupted or something. Below are some notes ordered by the headings from the draft document “Getting started with the Riffle datalogger.” I followed the steps in that document until things went downhill.

##Installing the Driver
The Riffle uses a very inexpensive chip for handling USB transfers. This non-standard hardware requires that a special driver be installed on your computer. I followed the directions for installing the driver for Windows 10 and it failed with an error. There was no hint about why it might have failed, but it’s possible that it failed because I already had that driver installed. I was able to connect to the Riffle via USB, so maybe the driver is installed. I don’t really know so I just moved on.

[![DriverFailureCH340.JPG](//i.publiclab.org/system/images/photos/000/016/199/large/DriverFailureCH340.JPG)](//i.publiclab.org/system/images/photos/000/016/199/original/DriverFailureCH340.JPG)  
*The error when the CH340 driver failed to install.*

##Blink Test  
An Arduino sketch installed on the Riffle blinks a blue LED once per second when power is applied. The result I got from this test was:

1. With the supplied battery plugged into the “General” plug and the power selector switch on "GEN," the blue LED blinks as expected. With the power selector on  “USB/LITH,” the blue LED does not blink.
2. With the supplied battery plugged into the “Lithium” plug and the power selector switch on "USB/LITH," the blue LED blinks as expected. With the power selector on  “GEN,” the blue LED does not blink.
3. With USB power from a computer and the power selector switch on “USB/LITH,” the blue LED blinks as expected. With USB power and the switch on “GEN” the blue LED does not blink.
4. With USB power from a computer, the yellow LED “D1” flashes quickly regardless of power switch position. With battery power, the D1 LED is not lit.
5. The blue LED stops blinking when the Arduino IDE program is started on the connected computer. The blinking resumes if the Arduino IDE program is closed. However, I could not reproduce this result later, maybe because the IDE was not recognizing the Riffle at that time.

###Required hardware  
The USB connector on the Riffle is micro-B USB. If you don’t hang out with Android phones, a micro USB cable might not be something you will find around the house. People should probably be warned about this.

##Install the Arduino IDE and libraries  
The document says “install the following libraries in a 'libraries' folder within your Arduino IDE sketchbook folder:” When each library is downloaded and unzipped, a folder of files is created. “Installing” a library means copying the entire directory full of stuff from each library into the Arduino libraries folder. I don’t know what an “Arduino IDE sketchbook folder” is. My computer has three different Arduino “Libraries” folders and I don’t know how the Arduino IDE knows about all of them. It’s sort of confusing.

Some of the libraries must be downloaded from GitHub. The easiest way to do that is probably to click “Download zip” on the GitHub page and then unzip to create the folder.

After copying the folders into the Library folder and restarting the Arduino IDE, you should be able to see the libraries. In the Arduino IDE under Sketch/Include Libraries you should see under “Contributed libraries” these entries:  
Time  
Streaming  
Low-Power  
DS3232RTC-master  

##Basic datalogging  
**Setting the Real Time Clock**  
Setting the real time clock went well. In the document, the “Arduino Serial Monitor” is referred to as the “Arduino Serial Terminal.” There is no mention in the document of selecting a port in the Arduino Tools menu. I had a choice of COM1 and COM4 and only COM4 worked.

** Basic datalogging **  
When I installed Don’s test logging sketch on the Riffle, the IDE reported that the “Sketch uses 20,884 bytes (64%) of program storage space. Maximum is 32,256 bytes. Global variables use 1,177 bytes (57%) of dynamic memory…" This seemed like a lot of the memory to use for just a test sketch. I guess it loads a lot of libraries. 

I didn’t know whether the micro SD card had to be formatted, so I plugged it into my computer and copied a couple of files to it. I could see those files on the card so I knew it was ready to go. I put the SD card into the Riffle for the datalogging test (the data are saved to the SD card).

After installing the sketch, the blue LED started blinking every 8 or 9 seconds which suggested that the sketch was running properly. I switched from USB to battery power and the blue LED was again blinking about every 9 seconds and I let it run for 30 minutes while moving it between hot and cold places (an internal thermistor was being read and recorded). The blue LED continued to blink as expected for the entire 30 minutes. Then I unplugged the battery and removed the micro SD card and put it in my computer.

Windows no longer recognized the micro SD card. It said the card needed to be formatted and said the size of the card was 30.6 MB (it is an 8 GB card). I proceeded to format the card, but Windows gave an error and would not format it.  So the card seems to be corrupted. I put the SD card back into the Riffle and when powered on the blue LED did not blink every 8 or 9 seconds but instead blinked rapidly. I think this is an error code because the SD card is not detected. I reinstalled the riffle_blink.ino sketch to test the Riffle and everything operated as expected.

The failure of the micro SD card might be due to my micro SD card reader which I have never used before. I guess I will try again with a new card. And hope for a better outcome.
