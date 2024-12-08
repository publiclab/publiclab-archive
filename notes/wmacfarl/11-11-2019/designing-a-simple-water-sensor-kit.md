---
title: Designing a Simple Water Sensor Kit
tagnames: arduino, sensors, water-quality, oil-and-gas-water-trio, simple-water-sensor-platform
author: wmacfarl
path: /notes/wmacfarl/11-11-2019/designing-a-simple-water-sensor-kit.md
nid: 21439
uid: 424597

---

# Designing a Simple Water Sensor Kit

by [wmacfarl](../profile/wmacfarl) November 10, 2019 23:12

November 10, 2019 23:12 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio), [simple-water-sensor-platform](../tag/simple-water-sensor-platform)

This is a research note describing some of the thinking involved in designing a prototype "Simple Water Sensor" kit along similar lines as the [Simple Air Sensor](https://publiclab.org/wiki/simple-air-sensor).

  
The Simple Water Sensor is an Arduino interface to one of a number of analog sensors to measure different common water quality indicators. The simple sensor platform reads data from these sensors and displays it in two ways:

  
- Visually, as a flashing LED -- flashing more rapidly with higher measurements

- Digitally, using the USB connection from the Arduino to send data to an attached computer or cell-phone. When you plug the sensor into your computer it appears as a USB "Human Interface Device" and is programmed to mimic a keyboard.

  
When you plug the sensor into your computer and turn it on it begins "typing" out lines of data. The user can open up their spreadsheet of choice and the sensor will fill it out as if it was a person at a keyboard typing out lines of data.

  
This combination of data outputs does a couple of pretty desirable things:

  
- Provides an immediate visual feedback for changes in measurements

- Gets data to a computer in a flexible, software-agnostic way without requiring any additional software or driver installation

- Provides a very simple interface that additional software could be built on top of

  
The rest of this research note goes into greater detail about the goals of the project and the reasoning behind this design as well as some notes and possible further explorations. For an overview of the design and build instructions see: building the simple turbidity sensor prototype.

  
#### Why Make a Simple Water Sensor Kit?  

  
I have been working on [documenting the use of a series of analog water quality sensors](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors "https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors") as part of a project to explore the use of DIY hardware and sensor tools for monitoring and investigating the impacts of oil and gas industry pollution on water.

  
While working with these sensors and making this documentation, I became aware of the fact that most of what I was writing was a "sensor-flavored" guide for using and programming the Arduino.  There is nothing inherently wrong with this, and environmental sensing is a really compelling first-Arduino-project, but for people who had never done any electronics or programming, my guide was asking them to simultaneously learn/think about:

  
- Building a circuit

- Looking at Arduino code

- Uploading code to a board

- Troubleshooting hardware problems/installing drivers, etc..

  
all in addition to the things that they might actually care about:

  
- Water quality measurements

- Calibrating a sensor

- Collecting and using data

  
A lot of the process of building a simple circuit, uploading code to an Arduino, and reading data from the "Serial Monitor" felt like kind of accidental and unnecessary complexity with some needlessly confusing potential pitfalls.

  
One solution to this problem is to move away from DIY electronics and [use off-the-shelf water quality sensors](https://publiclab.org/questions/warren/10-01-2019/pros-cons-to-cheap-handheld-water-meters-for-ph-tds-conductivity).  There is a lot to recommend for this approach (and I want to investigate it further), but I think that the process of building a tool yourself is a compelling one and that the Arduino platform is accessible and powerful enough to be worth learning about.

  
### What to Simplify?

  
The Arduino is an amazing tool and has lowered the barrier-to-entry for hobbyist electronics and programming an incredible amount.  At the same time, the process of getting your computer to interface with your Arduino in order to upload code (or even just to read data from a sensor) can be frustratingly fiddly -- there can be driver problems, incorrect board setups, problems with virtual COM ports -- and it can be hard to do in schools and other institutional environments where computer might be locked-down and installing software might be impossible.

Because of this, I think that the best way to simplify the project is to remove the process of uploading code to the Arduino and using the "Serial Monitor" in the Arduino IDE to read the sensor data.  

  
Users of the kit will still have to build a simple circuit attached to the Arduino -- this helps them develop familiarity with electronics components, circuit boards, pin numbers, etc, without having to do anything with the Arduino software itself, and also preserves the sense of ownership, connection, and intuitive understanding that you get from making something yourself.

  
### Design Constraints and Considerations

  
This kit is inspired by and very similar to the Public Lab [Simple Air Sensor](https://publiclab.org/wiki/simple-air-sensor) and has many of the same design goals and questions.  At the same time, there are some important differences between water quality and air quality monitoring, as well as between the different kinds of sensors available.

In particular, the qualitative, color-coded feedback of the tri-color LED seems well-suited to measuring particulates in the air around your environment where:

  
- there is an objective goodness/badness of the measured property -- roughly speaking, certain known levels of particulates are "fine" and other known levels are "bad", "worse" and "terrible"

- you can set the sensor up somewhere to be constantly collecting data

- you will see the sensor regularly enough to develop intuitions about what colors are "normal" for your environment

  
Broadly speaking, none of these things are true for most water-quality measurements:

  
- Most common water quality measures vary wildly from source-to-source.  There is no objectively "good" or "bad" turbidity or conductivity, so measurements need to be compared to a baseline "normal" for that particular water-source 

- Many water-quality sensors can't be deployed in water for long periods of time and most people don't have easy access to install sensors in the bodies of water that they care about

- Most water-sources aren't in people's ambient, everyday environment so it would be very difficult to develop intuitions about qualitative data like color. 

  
Consequently, it feels important to me that the "Simple Water Sensor" be able to collect _numerical _data in a way that is easy to log so that people can use it to compare data from samples across space (up and downstream of a suspected contamination source) and time (before and after an event such as a storm.)

  
The most-basic way to use various Arduino sensors is to have the Arduino send data back to the computer over USB and read it inside the Arduino IDE using the "Serial Monitor."  I don't think that this works for a simple onboarding kit because it involves downloading and installing the Arduino IDE and potentially installing USB-Serial drivers (which can become broken when software manufacturers update their operating systems or hardware manufacturers update their chip designs.)

  
Other options involve adding additional components to the circuit to collect or display the data.  These could include:

  
- An LCD or set of 7-segment displays

- An SD-card writer

- Wireless transmission to an available device (bluetooth, wifi, 5g...)All of these options have upsides but they add both expense and complexity to the circuit design.  

  
The choice that we have made is to communicate the data from the sensor in two ways.

  
- a blinking LED

- sending the data to a computer over USB as keystrokes

  
### Why These Outputs?

  
By programming the Arduino to act like a USB keyboard and simply type out the data we want as it comes in, we can get the data from our sensor to a computer without adding any extra hardware.  Because all computers (and most phones!) work with USB keyboard off-the-shelf, we don't have to worry about any kind of compatibility problems or software installation.

  
Because we are sending the data as plain-text in the form of keystrokes, it is very easy for users to use any piece of software for logging.  I imagine that people will most commonly use a popular spreadsheet tool, like Google Sheets or Microsoft Excel, but you could really use anything.  

Using a tool like Google Sheets that has a scripting-language built-in could also allow people to write scripts and formulas to do complex data-processing in the spreadsheet itself on-the-fly as data comes in.  

It is also easy to imagine writing a custom smartphone or web app designed around a set of sensors.  Such a tool could be designed to interface with the Public Lab website as well as other civic science and open-data communities.

Adding a single flashing LED is very simple and provides a visual indication that the circuit is working without having to be plugged into a computer and gives us another way to experience the data that doesn't require a screen.  This can be particularly useful in a larger workshop setting.  

A blinking LED could also be used to send quantitative data to a smartphone or a computer with a webcam.  It would be relatively straightforward to make a tool to detect the frequency of the flashing LED (under reasonable lighting conditions) and turn that back into a piece of numerical data.  

None of these software extensions are necessary to make the sensor useful, but the possibility of writing simple additional software tools on top of the basic sensor is potentially a powerful one and it's something that we get from using these two forms of input which all computers and phones are automatically able to receive.

### Other Notes

  
This project uses a capability that some Arduino boards have:  the ability to mimic a "USB HID Device" (i.e. a mouse+keyboard.)  Most Arduino boards do not have this capability -- in particular, the most popular boards,  the Arduino UNO and its smaller cousin the Arduino NANO, cannot do this.

We are using a [(cheaper) clone](https://www.amazon.com/HiLetgo-Atmega32U4-Bootloadered-Development-Microcontroller/dp/B01MTU9GOB/ref=sr_1_3?keywords=arduino%20micro&qid=1573425843&sr=8-3) of the [Arduino Micro](https://store.arduino.cc/usa/arduino-micro), which is a small version of the [Arduino Leonardo](https://www.arduino.cc/en/Main/Arduino_BoardLeonardo).  You can also use many of the varieties of [Adafruit Trinket](https://www.adafruit.com/product/3500) as well as many other boards.  If you are trying to decide if a given board will work, just look at the documentation and make sure:

  
- it can be used as a USB HID device (one way to know this is to look at what kind of chip it uses -- the Leonardo and Micro use the ATmega32U4 which has this capability built-in, but other chips may also work)

- it has "5V logic" -- most of the sensors we might want to use expect 5 volt logic but many newer micocontrollers use 3.3 volts.