---
nid: 13086
title: sandbox-riffle
path: public/static/wiki/sandbox-riffle.md
uid: 459085
tagnames: 
---

# sandbox-riffle

Created to test out formatting for the riffle documentation on google drive (access it via the plots-waterquality) for Formatting testing purposes only. Any changes made here should be merged upstream by the authors of the change, or it will not be kept. :)

~~~

What capitalization scheme should we stick to?
“Sandbox” for testing formatting: https://publiclab.org/wiki/edit/sandbox-riffle 
Direct link to the google document: https://docs.google.com/document/d/1GTvRDV9Nq2zN6RFu4cQ-sCIWIaHGoIJzElE1nrMCmr4/edit?usp=sharing

#Getting started with the RIFFLE datalogger

The RIFFLE is a datalogger that records water quality data, such as temperature, conductivity, and turbidity, from sensor boards that attach to it. The Riffle runs Arduino code, and is small enough to fit inside the mouth of a standard plastic water bottle for a low-cost, waterproof field deployment. For examples of what the Riffle can do, visit https://publiclab.org/tag/riffle

****

** What?** This document contains step-by-step instructions for Getting Started with the Riffle. 

**For Whom?** This guide was created for people who have no prior experience with microelectronics to begin working with bits of circuitry related to water sensing

**Why?** To provide a clear step-by-step process for setting up a Riffle datalogger

**When?** With a Riffle and a computer, following this guide should take about an afternoon. 

**So That…** People with concerns about water quality can engage with the technical development process for creating sensors. 

**What For?** After going through this guide, you / your group will have…

* **Open** up the Riffle package you received
* **Plug in** a power source to the RIFFLE
* **Check** that the BLINK program preloaded onto the RIFFLE is working
* **Set up** your computer to program the Riffle using Arduino software
* **Connect** your first sensor and record data 
* **Add more steps here…**

****

##Table of Contents

* Overview
* Receiving the Riffle
* Setting up the Arduino IDE
  * Installing the driver
  * Blink Test
  * Install the Arduino IDE and libraries
  * Arduino tutorials
* Basic Datalogging
* Connecting Other Sensors
  * one wire temperature sensors
  * thermistors
  * light sensors
* Charging the Battery
* Next Steps
  * Field Deployment
  * Setting up a Github account

****

##Overview

Welcome to **R**emote **I**ndependent **F**riendly **F**ield-**L**ogger **E**lectronics, or RIFFLE, an open source datalogging system. 

The Riffle (version 0.1.8):

* is designed to be completely compatible with the Arduino ecosystem
* can be programmed in the Arduino IDE as an "Arduino UNO" board
* has an onboard temperature compensated real time clock (RTC) for recording time very accurately
* The temperature sensor in the RTC can also be used for a simple data logging demonstration (see “Basic datalogging’ below). 
- maybe briefly cover the different methods of powering the Riffle as well, as that is a significant difference from an UNO. 

****

##Receiving the Riffle

Check that you received all the Riffle pieces in your shipment: 

* one datalogger
* two protoboards
* a Lithium Ion battery
* a button-cell battery



****

#Setting up the Arduino IDE

The RIFFLE can be programmed in the Arduino IDE (“integrated development environment”) as an "Arduino UNO" board. To get started working with the RIFFLE,
* Install the Driver, so the computer and RIFFLE can communicate
* Perform the Blink Test, to check that the RIFFLE is working
* Install the Arduino IDE and work through Arduino tutorials “X” and “Y” - become familiar with the Arduino “sketches” used to program the RIFFLE
* Start Basic Datalogging
* Connect other Sensors


##Installing the Driver

FYI this step involves your computer only, no Riffle needed just yet. 

Because the RIFFLE uses a slightly different **USB ←→ Serial** converter from the traditional Arduino, we need to install a special driver on our computer. 

Step by Step:

1. Download the driver for your operating system: 

  * Do you have a windows computer? If so, download http://raysfiles.com/drivers/ch341ser.exe 
  * On mac, follow these instructions: http://www.instructables.com/id/Arduino-Nano-CH340/

2. Unzip the package (may happen automatically)
3. Doubleclick the ch34xinstaller.pkg file, and follow the instructions in the pop-up windows to install the driver: 


4. You won’t actually know if you have succeeded until the next step when you open the Arduino IDE and see that there is a port listed until the Tools Menu: 



****

##Blink Test

FYI this step happens with your RIFFLE connected to a some kind of power source. 

The purpose of this step is to test if the program that’s already loaded onto your RIFFLE is working. The Riffle was pre-programmed by the factory to blink its onboard LED every second to indicate that the board is working. To test, we just need to apply power to the RIFFLE and watch for the blinking light. 

###Required hardware 

* a Riffle
* a power source, choose one of the following three options:
  * a USB cord with microUSB end (like for android phones) to connect RIFFLE to computer
  * a LiOH (lithium hydroxide) battery with JST connector (supplied with the Riffle)
  * a 3.5 - 6 V battery source such as three (3) AA batteries.

###Required software

* None. Wo0t!

###Procedure 

**Using the blue battery:**

1. Plug the LiOH battery’s JST connector into the general-chemistry battery connector (labeled "General" on the underside of the circuit board)


2. Visually confirm that the switch for battery type is switched to "GEN" (middle pink arrow), and look to see if the blue light is blinking (right arrow):


When the Riffle blinks, it means the firmware has been loaded properly. 
If your Riffle is not blinking, check the connection of your power supply. If still not blinking, proceed to trying other power supply options as described below. 

**Using USB cable**

Use a USB--MicroUSB cable (like for an android phone) to connect the RIFFLE to a computer or to an AC outlet. The switch position doesn’t matter for this option, so it should start blinking right away. 


****


****
##Install the Arduino IDE and libraries

###Required hardware

* a RIFFLE  
* CR1220 coin cell battery
* main battery (3.7 V - 6 v)
* microUSB cable (not included!)
* a microSD card (not included!)

### Required software

* the Arduino development environment (IDE). You will need to install the[Arduino IDE](https://www.arduino.cc/en/Main/Software) on your computer. Setup instructions for Windows, Linux, and Mac can be found [here](https://www.arduino.cc/en/Guide/HomePage).





**Some libraries**

Additionally, you'll need to install the following libraries in a 'libraries' folder within your Arduino IDE sketchbook folder:
**LINK TO HOW-TO for INSTALLING LIBRARIES BY OS**
**Libraries Needed
- [Low Power](https://github.com/rocketscream/Low-Power)
- [DS3232RTC](http://github.com/JChristensen/DS3232RTC)
- [Streaming](http://arduiniana.org/libraries/streaming/)
- [Time](https://github.com/PaulStoffregen/Time)

Restart the Arduino application after installing libraries.

##Arduino Tutorials
(need more/different explanation or framing here)

If you are just getting started with Arduino, the Arduino foundation has several tutorials designed to help people become familiar with writing and modifying Sketches (programs).  You can find many at the [Arduino home page](https://www.arduino.cc/en/Tutorial/HomePage). Get familiar with “Tutorial X” and Tutorial “Y”, and then head on to the datalogging section.

##Basic datalogging
The Riffle is designed to log data, so let’s get started.

###Procedure

**Setting the Real Time Clock.** 

The goal of this activity is to set the Real Time Clock (RTC) so that it will assign accurate timestamps to the measurements we record with the Riffle. The Arduino code in [set_rtc.ino](thttps://github.com/OpenWaterProject/riffle-getting-started/blob/master/set_rtc.ino) is an Arduino sketch that allows one to set the time manually.  The Riffle will remember the time you set for as long as the Real Time Clock battery lasts (typically, a year or more). 

1. Insert a CR1220 coin cell in coin cell holder on the Riffle board.


2. Using the Arduino IDE, upload [set_rtc.ino](./set_rtc.ino) onto the Riffle, selecting "Arduino UNO" as the 'Board' in the Tools menu.
Make sure you have selected the port in the Tools menu before uploading! No port, no code.
3. Open the Arduino Serial Monitor (setting the baud rate appropriately to 9600)
4. Enter in the current date and time (in the available space at the top), using the following format (using 24hr time):

> year,month,day,hour,minute,second, 

Where:

- year can be two or four digits
- month is 1-12
- day is 1-31
- hour is 0-23, and
- minute and second are 0-59.

For example, if it was March 15th 2016 at 3:44pm, the input would look like:

> 2016,03,15,15,44,00,

Hit 'enter' after you are done

SUCCESS means you will see that the date will have changed in the Serial Monitor.



** Basic datalogging **

Now that the time is set, we're ready to set up the Riffle for basic datalogging. The code in [riffle_logger_test](./riffle_logger_test) -accesible here: https://github.com/OpenWaterProject/riffle-getting-started/blob/master/riffle_basic_logging.ino is an Arduino sketch that will repeatedly log data to the SD card, and then sleep for N seconds in between. N can be set to any multiple of 8 seconds; it comes set to N=1, so that the Riffle will log every 8 seconds. The format of the output is:

> Timestamp, RTC temperature, battery level, analog0 voltage

The code defaults to saving data to a file called 'Datalog1.csv' on the SD card.

1. Insert a microSD card into the microSD card holder on the Riffle.

2. Using the Arduino IDE, upload [set_rtc.ino](./set_rtc.ino) onto the Riffle, selecting "Arduino UNO" as the 'Board' in the Tools menu.
3. Plug a battery into the general-chemistry battery connector (labeled "General" on the underside of the circuit board)
4. Make sure that the onboard switch is switched to "GEN" 

The Riffle should initially blink a few times at a rate of once per second, which is the original software working (see Blink Test step). If everything goes well (the SD card can be accessed, etc), the Riffle should then blink every 8 seconds, which indicates that data has been recorded.

Take out the SD card and download the file onto your computer, see the CSV file….etc….
SUCCESS!!!


The SD card will contain a CSV (Comma-Separated Values) file, which can be viewed using spreadsheet software such as LibreOffice and Google Spreadsheets. (Picture of a spreadsheet and graph, link to a live google spreadsheet?)
****

##Connecting other sensors

To measure water quality data using the Riffle, we will need to attach some sensors. (Brief explanatory text)

****

###Temperature sensors

**One-wire temperature sensors**

Overview, code, and wiring diagram: http://www.hacktronics.com/Tutorials/arduino-1-wire-tutorial.html 

Image:
https://raw.githubusercontent.com/OpenWaterProject/riffle-getting-started/master/assets/1-wire-hookup.png (original source: http://bildr.org/blog/wp-content/uploads/2011/06/DS18S20-hookup.png)





(Replicate this, but for Riffle).

Ingredients: 1-wire probe, 4.7K resistor, Riffle, protoboard / breadboard
Wiring it up
Code for datalogging with 1-wire probe

****

**Thermistors**

Overview: https://learn.adafruit.com/thermistor/overview 

Wiring diagram: https://learn.adafruit.com/thermistor/using-a-thermistor 


Image: 
https://raw.githubusercontent.com/OpenWaterProject/riffle-getting-started/master/assets/temperature_thermistor_bb.png (original: https://learn.adafruit.com/thermistor/using-a-thermistor)





(Replicate, but for Riffle) 
Ingredients: 10K thermistor, 10K resistor, Riffle, protoboard / breadboard
Wiring it up
Code for datalogging with thermistor

Image of riffle with thermistor as described. Not sure where to connect things though
****

###Light sensors 

**A photocell**

Overview: https://learn.adafruit.com/photocells/overview 

Wiring diagram: https://learn.adafruit.com/photocells/using-a-photocell 




Images: https://raw.githubusercontent.com/OpenWaterProject/riffle-getting-started/master/assets/light_cdspulldowndiag.gif

https://raw.githubusercontent.com/OpenWaterProject/riffle-getting-started/master/assets/light_cdsanasch.gif




(Same sort of diagram, but with Riffle)

Ingredients: “10K” photocell, 10K resistor, Riffle, protoboard / breadboard
Wiring it up
Code for datalogging with light cell

##Charging the Battery
The Riffle has a built-in lithium battery charger, so if the lithium battery is plugged into the 'lithium' plug and the Riffle is connected to USB power, it should be charging.

There is currently no charging indicator or indicator light routine on the board. The battery is 2200 mAh at 3.7 V, and a USB port is 500 mA at 5 V, so four hours should guarantee a full charge.

****
#Next Steps

##Field deployment:  a Riffle in a bottle

- Pictures
- Step-by-step
- Different cap arrangements for different sensors

****

##Setup a Github Account 


- purpose: access the riffle code and copy, comment, or share your work
- new users guide: https://guides.github.com/activities/hello-world/
- access riffle code $here
