---
title: "Simple Water Sensor Platform"\ntagnames: 'arduino, water-sensing, water-quality-mapping, water-quality-monitoring, sensors, water-quality, method, oil-and-gas-water-trio, simple-water-sensor-platform'
author: wmacfarl
path: /wiki/simple-water-sensor-platform.md
nid: 22362
uid: 424597

---

# Simple Water Sensor Platform

by [wmacfarl](../profile/wmacfarl)

January 21, 2020 17:36 | Tags: [arduino](../tag/arduino), [water-sensing](../tag/water-sensing), [water-quality-mapping](../tag/water-quality-mapping), [water-quality-monitoring](../tag/water-quality-monitoring), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [method](../tag/method), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio), [simple-water-sensor-platform](../tag/simple-water-sensor-platform)

----

The simple water sensor platform is a simple, accessible tool for using a variety of water quality parameter sensors to collect and log data about water samples.

## Design

It is designed around the [DF Robot series of open-hardware liquid sensors](https://www.dfrobot.com/blog-1138.html) and is built on top of the [Arduino Micro](https://store.arduino.cc/usa/arduino-micro). 

The sensor collects data and sends it to an attached computer or smartphone by acting like a USB-keyboard -- this means that you plug it in, turn it on, and it just starts typing out your data readings on your screen one at a time.  This means that the sensor doesn't require any particular hardware or software and can be used by anyone with any kind of computer.

For more information on design consideration see [Designing a Simple Water Sensor Kit](https://publiclab.org/notes/wmacfarl/11-11-2019/designing-a-simple-water-sensor-kit)

## Building the Platform

Instructions for building and using the simple water sensor are broken into two parts:  a set of general build instructions for assembling the platform, and specific build+usage instructions for connecting different kinds of sensors.

- [Building the Simple Water Sensor Platform](https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform)
- [pH](https://publiclab.org/notes/wmacfarl/12-09-2019/building-the-simple-ph-sensor-prototype)
- [ORP (Oxygen Reduction Potential](https://publiclab.org/notes/wmacfarl/01-11-2020/how-to-connect-an-orp-sensor-to-the-simple-water-sensor-platform)
- Turbidity
- Conductivity
- Dissolved Oxygen
- TDS (Total Dissolved Solids)

## Using the Sensors

The sensors provide data feedback in two different ways:
- a blinking LED that blinks faster for higher readings
- USB-keyboard emulation that sends the data readings to a computer by "typing" them out

The blinking LED is in place primarily as a troubleshooting tool and way for users to get immediate feedback without having to be connected to a computer.  This can streamline troubleshooting and is also helpful in a workshop setting where you might have more workshop participants then you have computers.  

Outside of troubleshooting and introductory workshops, the main way you get data from your sensor is by plugging it into a computer or smartphone and opening up a spreadsheet.  

The software is designed to be used with spreadsheet software and uses a keyboard shortcuts for getting the current date and time.  These keyboard shortcuts are the same in  [Libre Office](https://www.libreoffice.org/), [Google Sheets](https://sheets.google.com), and [Microsoft Excel](https://www.microsoft.com/en-us/p/excel/cfq7ttc0k7dx?activetab=pivot%3aoverviewtab).

## Calibrating the Sensors

At the moment we have no straightforward procedure for calibrating the sensors.  Each individual sensor has software and calibration steps described on the [DF Robot Wiki](https://wiki.dfrobot.com/) but performing these steps involves modifying Arduino code and uploading these changes to the board.  

This process is not beginner-friendly.  A better approach would be to move all of the math out of the Arduino software and into spreadsheet formulas and develop a calibration procedure from there.  

This could allow people to calibrate the sensor by modifying data in cells on a spreadsheet rather than changing variables in Arduino code.

## Source Code

You can look at the source code for the platform using the [Arduino Web Editor](https://create.arduino.cc/editor/wmacfarl/07772f5b-09af-4376-9e51-80fdd73db911/preview) or [on our github repository](https://github.com/wmacfarl/simple-water-sensor-platform).

The current version of the source code just consists of all of the code for the various sensors taking from the DF Robot Wiki and messily-concatenated together.  It currently works to get data for all of the different sensor-types but is kind of a disaster for trying to calibrate them.  

This *could* be improved to allow easier modification of the code for calibration purposes but the approach of pulling all of the math out into a spreadsheet seems like a much better path forward.

##Questions + Next Steps

Because the goal of this project is to make a tool that is usable and useful for people unfamiliar with sensors, data collection, electronics, etc, there is a lot to do to improve the documentation and usability of the platform.

These break down roughly into:
- Hardware Usability
- Software Usability
- Calibration Methods
- Deployment Considerations

###Hardware Usability
The actual sensor-platform build is relatively straightforward as far as Arduino breadboarding projects go, but we want to make sure that it is be easily buildable by people without any electronics/hardware experience.  

###Testing
The whole project is very under-tested at the moment, so it would be really valuable for interested people to just try to build the platform with as many people and under as many conditions as possible.  This will help us get a sense for what the common pitfalls and difficulties are.

###Creating a Troubleshooting Guide
The build instructions have very little information for what to do in the event that something goes wrong or isn't working.  User testing will help us identify common difficulties but we also need to document them in a way that walks new users through a testing, diagnosis and troubleshooting process.  This is probably the most important part of project documentation for new users, and is basically completely absent from this project.

###Software Usability
There is no way for a user to do any sensor-calibration without using the Arduino editor to modify values in code and upload your modifications to the board.

Given that the goal of the project is to make it possible for users to collect reasonable data without having to do any programming or install any extra software on their computers, this is a pretty big problem.

The basic workflow of the sensor is pretty streamlined:

1. Plug your sensor-probe into the sensor-platform.
2. Open up a blank spreadsheet.
3. Place probe in sample
4. Turn on data-logging
5. Collect data until it seems stable and consistent

This is a pretty big contrast to the unacceptably complicated calibration-procedures at the moment, which are, roughly:

1. Find your sensor on the DF Robot wiki.
2. Read wiki for the particular calibration procedures.
3. Copy and paste code from the wiki into the Arduino editor.
4. Upload code.
5. Take calibration measurements using Arduino Serial Monitor.
6. Change variable values in software (as described in wiki)
7. Repeat steps 4-7 until you get the correct output value.

My proposal to fix this problem is to move all of the calculation and calibration *off of the Arduino* and *into a spreadsheet*.  All of the sensors work in basically the same way: they send a *voltage* to the Arduino that corresponds to the thing being measured.  In order to make sense of this *voltage* reading, we have our software do a bunch of math to get the corresponding number for the water-quality parameter.  This math is a set of calculations that the sensor manufacturers and other people have figured out through experimentation.

**In the current software, all of this math happens *on the Arduino* **.  Our software does a bunch of calculations based on the voltage and then sends the resulting numbers to your computer.  This means that if we want to change anything about how the math is performed, we need to change the *Arduino software*.

**Instead, we can perform all of the calculations *in our spreadsheet* **.  We can rewrite the Arduino software to just send the raw voltage data, and have all of the conversion happen through spreadsheet formulas.  Then we can have users change the parameters of the calculations by putting different numbers in labelled cells of a spreadsheet and they won't have to modify or even look at Arduino code.

###Calibration Methods
After we make it *possible* for users to calibrate their sensors, we will need to document clear and easy-to-follow procedures for actually doing so.

This will be a little bit different for each sensor.  The DF Robot wiki provides a good starting point for documenting each of these procedures but I think we would like to document these processes a bit more fully and include more information about, for example:
- Procedures for collecting good measurements
- Sourcing information for calibration solutions
- Potential low-cost, commonly-available liquids to use in place of expensive calibration solutions

###Deployment Considerations
We also want to research and document procedures to help people collect data in consistent ways.  Some of this is documentation of known procedures and some of it will require research and experimentation.  Most of these questions will have different answers for the different sensor-types.

- How do you clean sensor probes effectively?
- How often do you need to calibrate the sensors to keep getting good data?
- What are good ways/places to deploy the sensor/take measurements?  Anywhere?  Upstream/downstream from contamination sources?  How do you get access to waterways?
- When do you take measurements?  Daily?  Weekly?  After a rainstorm?
- What kinds of other environmental information are worth collecting along  with measurements?  Temperature?  Weather?  Recent events?
- What water-quality parameters are worth collecting for investigating different kinds of contamination types and sources?
- Which sensors are easier/harder to collect good, consistent data with?
- Are there particular sensors/parameters that are a good combination of cheap, easy-to-use, and useful for a variety of health-issues and kinds of contamination?  If so, can we document using this sensor as a "default" onboarding investigation? 
- How to collect a good sample?  (how much liquid do you need, what makes a good sample-container, what depth should you collect from, etc)
- Are any of the sensors a good candidate for long-term, continuous use?  If so, should we create another hardware+software+enclosure design for long-term data-logging?

### Other Methods/Activities
[simple-water-sensor-platform](../../tag/activity:simple-water-sensor-platform)

### Other Questions
[simple-water-sensor-platform](../../tag/question:simple-water-sensor-platform)