---
title: "Building the Simple Water Sensor Platform"

tagnames: 'arduino, materials, sensors, water-quality, water-sensors, activity:water-sensors, dfrobot, oil-and-gas-water-trio, oil-and-gas-water-quality, activity:oil-and-gas-water-quality, simple-water-sensor-platform, activity:simple-water-sensor-platform'
author: wmacfarl
path: /notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform.md
nid: 22256
uid: 424597

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/037/539/original/sensor_platform.jpg)

# Building the Simple Water Sensor Platform

by [wmacfarl](../../../profile/wmacfarl) | January 10, 2020 18:31

January 10, 2020 18:31 | Tags: [arduino](../tag/arduino), [materials](../tag/materials), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [water-sensors](../tag/water-sensors), [activity:water-sensors](../tag/activity:water-sensors), [dfrobot](../tag/dfrobot), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio), [oil-and-gas-water-quality](../tag/oil-and-gas-water-quality), [activity:oil-and-gas-water-quality](../tag/activity:oil-and-gas-water-quality), [simple-water-sensor-platform](../tag/simple-water-sensor-platform), [activity:simple-water-sensor-platform](../tag/activity:simple-water-sensor-platform)

----

# Purpose

This is a general guide to putting together the Simple Water Sensor Kit, described in [Designing A Simple Water Sensor Kit](https://publiclab.org/notes/wmacfarl/11-11-2019/designing-a-simple-water-sensor-kit).

The Simple Water Sensor platform is a system for collecting water quality data using the [DF Robot series of liquid sensors](https://www.dfrobot.com/blog-1138.html).  

The platform runs on an [Arduino Micro](https://store.arduino.cc/usa/arduino-micro).  It outputs and displays data readings using a single flashing LED and sends data to a computer or smartphone/tablet over USB by emulating a keyboard.  

The goal of this project is to have a basic design for cheap, easy to build, water quality sensors that can be used to log quantitative data without requiring additional software, drivers, or a complicated circuit.  

In order to begin collecting data. you just plug the sensor into your computer with a spreadsheet open and turn it on -- it will begin typing out the sensor readings on your screen.

All of the DF Robot liquid sensors (and many other Arduino-based sensors) share a common basic interface.  This page will be a general guide covering the process and aspects of setup that are common across all of the sensors. I will put specific guidelines on the use of individual sensors in separate research notes.

- Turbidity Sensor
- pH Sensor
- Electrical Conductivity Sensor
- Dissolved Oxygen Sensor
- [ORP (Oxygen Reduction Potential) Sensor](https://publiclab.org/notes/wmacfarl/01-11-2020/how-to-connect-an-orp-sensor-to-the-simple-water-sensor-platform)
- TDS (Total Dissolved Solids) Sensor

This series will not address any issues around logging data or deploying these sensors in the field. These issues should be addressed but this series is  about the basic process of building the kit and connecting it to your computer.

This is a prototype project, so we would very much appreciate any thoughts or feedback you have on the design or documentation, as well as on how you might want to use these kinds of water quality sensors in your own projects and campaigns.

#Materials needed

- Your sensor of choice
This is the sensor that you have picked to collect your data. Sensors covered in this series are:
  - [Turbidity Sensor](https://www.dfrobot.com/product-1394.html)
  - [pH Sensor](https://www.dfrobot.com/product-1025.html)
  - [Electrical Conductivity Sensor](https://www.dfrobot.com/product-1797.html)
  - [Dissolved Oxygen Sensor](https://www.dfrobot.com/product-1628.html)
  - [ORP (Oxygen-Reduction Potential) Meter](https://www.dfrobot.com/product-1071.html)
- Mini-Breadboard - [$6.98 for 6 (Amazon)](https://www.amazon.com/ELEGOO-6PCS-tie-Points-Breadboard-Arduino/dp/B01EV6SBXQ/ref=sr_1_3?keywords=mini%20breadboard&qid=1573433345&sr=8-3)
- Arduino Micro - [$18.89 for 3 (Amazon)](https://www.amazon.com/HiLetgo-Atmega32U4-Bootloadered-Development-Microcontroller/dp/B01MTU9GOB/ref=sr_1_3?keywords=arduino%20micro&qid=1573433483&sr=8-3), [$4 (Ebay)](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1312.R1.TR9.TRC1.A0.H0.Xarduino%20.TRS2&_nkw=arduino%20ATmega32U4&_sacat=0)

![image description](/i/36318.jpg "IMG_20191110_183000.jpg")

- Switch or Button - [$7 for 15 rocker switches (Amazon)](https://www.amazon.com/ZUPAYIPA-Solder-Rocker-Switch-Toggle/dp/B01N2U8PK0/ref=sr_1_3?keywords=switch%20spst%20two%20pin&qid=1573433688&sr=8-3 "https://www.amazon.com/ZUPAYIPA-Solder-Rocker-Switch-Toggle/dp/B01N2U8PK0/ref=sr_1_3?keywords=switch%20spst%20two%20pin&qid=1573433688&sr=8-3"), [$8.29 for 12 push-button switches (Amazon)](https://www.amazon.com/dp/B07HBQCZV8?aaxitk=F.MxnljWurQJwR0d0f1vsw&pd_rd_i=B07HBQCZV8&pf_rd_p=44fc3e0f-4b9e-4ed8-b33b-363a7257163d&hsa_cr_id=9844770990301&sb-ci-n=productDescription&sb-ci-v=RuoFeng%202%20Pins%20SPST%20Momentary%20Mini%20Push%20Button%20Switch%201A%20250V%20AC%20Pack%20of%2012%20%28Black%29)

![image description](/i/36319.jpg "IMG_20191110_183018.jpg")

- 4 Male to Male Jumper Wires (Red, Black, Blue, Green) - [$9.99 for 80 -- assorted colors (Amazon), ](https://www.amazon.com/Aodesy-Jumper-Wires-2-54mm-Ribbon/dp/B07GYSFZRR/ref=sr_1_10?keywords=jumper%20wires%20male%20to%20male&qid=1573433902&s=hi&sr=1-10)[$6.55 for 100 with choice of color (AliExpress)](https://www.aliexpress.com/item/1726192986.html?spm=2114.12010615.8148356.5.ef15ab3c3EHa8P)

![image description](/i/36320.jpg "IMG_20191110_183104.jpg")

- USB Micro Cable - [$7 for 3 (Amazon)](https://www.amazon.com/AmazonBasics-Male-Micro-Cable-Black/dp/B072J1BSV6/ref=sr_1_3?keywords=usb%20micro&qid=1573434220&sr=8-3)

![image description](/i/36321.jpg "IMG_20191110_183119_(1).jpg")

- An LED - [$6.55 for 100 (Amazon)](https://www.amazon.com/eBoot-Pieces-Emitting-Diodes-Assorted/dp/B06XPV4CSH/ref=sxin_2_ac_d_rm?ac_md=0-0-bGVk-ac_d_rm&keywords=led&pd_rd_i=B06XPV4CSH&pd_rd_r=ba6fd1db-11e0-4fce-8342-ba9ec0a48c85&pd_rd_w=sWs7Z&pd_rd_wg=0S245&pf_rd_p=ed481207-4bea-4e19-bbad-73ed40fdc292&pf_rd_r=5QXTPWT7E1JJFF8FGRKC&psc=1&qid=1573434407)

![image description](/i/36322.jpg "an_led.jpg")

- A laptop, smartphone, or tablet with a USB port to plug in the sensor
- A USB "on the go" cable (if using a phone/tablet) - [$5 for 3 (Amazon)](https://www.amazon.com/Rankie-Female-Adapter-Convertor-3-Pack/dp/B00YOX4JU6/ref=sr_1_3?keywords=usb%20on%20the%20go&qid=1573435819&s=industrial&sr=1-3)

---------

## Part A - Assemble the Sensor Platform
#### Step 1: Attach Arduino Micro to Breadboard

The Arduino Micro has two rows of "header pins" coming off of the bottom. 
 These pins can fit into the sockets in your breadboard.

The Arduino has two rows of header pins. The breadboard has a break down the middle. Insert the Arduino so that the rows of pins are on opposite sides of the break.

![image description](/i/36323.jpg "IMG_20191110_202249.jpg")

#### Step 2:  Attach the On/Off Switch

Your On/Off switch should have two wires coming off of it.  Each of these wires are going to go into the breadboard to connect the switch to specific pins of the Arduino.  

Connect the switch to the "GND" and "10" pins on the Arduino by inserting the wires into the sockets in the breadboard next to the pins that have these labels.

![!\[Arduino in breadboard with switch attached\](/i/36323.jpg "IMG_20191110_202249.jpg")][1]

Both of the wires are the same and it doesn't matter which wire you connect to which pin.

#### Step 3:  Plug in the LED

![Breadboard with LED attached to Arduino Micro][2]

The LED has two legs, one longer, one shorter. They should be connected as follows:

| Arduino Pin | Label | LED Leg |
|-------------|-------|---------|
| Digital I/O Pin 2 | 2     | LONG    |
| Ground (-)  | GND   | SHORT   |

If the LED is plugged in backwards it will not light up.

#### Step 3: Connect Sensor Wires to Arduino

![Arduino with wwitch, LED, and jumper wires attached][3]

We will use the Male to Male jumper wires to connect the Arduino to the sensor by plugging them into sockets on the breadboard. The pins on the Arduino are labelled on the circuit board. We will connect the wires as follows:

| Arduino Pin | Label | Wire Color |
|-------------|-------|------------|
| Power (+)   | VCC   | RED        |
| Ground (-)  | GND   | BLACK      |
| Analog 0    | A0    | BLUE       |

The BLACK wire can be connected to any of the "GND" pins on the Arduino.  In this photo I have connected it to the same "GND" pin as the On/Off switch by plugging it into another socket in the same row of the breadboard.

When we are ready to attach our sensor we will do so by plugging these 3 wires into the sensor's circuit board.

#### Step 4: Connect the Sensor-Select Jumper Wire

This kit is designed to be used with any of the different DF Robot Liquid Sensors and comes pre-loaded with software that can collect data from any of them.

This software needs to know which sensor you have plugged in, though, and it can't figure it out itself.  To tell it what sensor we are using we will connect a jumper wire from "Pin 3" on the Arduino to one of the other digital i/o pins.

![Green jumper wire from pin 3 to pin 4][4]

In this photograph I have the green sensor-select jumper wire from Pin 3 to Pin 4 in order to select the "Turbidity Sensor."  See the chart below:

| Sensor Type| Arduino Pin #       |
|-------------------------------|--|
| Turbidity                                     | 4|
| pH                                                 | 5|
| Conductivity                             | 6 | 
| Dissolved Oxygen                   | 7 | 
| Oxygen Reduction Potential| 8 | 
| Total Dissolved Solids            | 9 | 

## Part B - Assemble and Attach the Sensor

This is an overview of how to attach the DF Robot sensors to the Arduino.  For sensor-specific instructions see the DF Robot wiki as well as our guides for individual sensors:

- Turbidity Sensor [wiki](https://wiki.dfrobot.com/Turbidity_sensor_SKU__SEN0189)
- pH Sensor[wiki](https://wiki.dfrobot.com/PH_meter_SKU__SEN0161_)
- Electrical Conductivity Sensor [wiki](https://wiki.dfrobot.com/Gravity__Analog_Electrical_Conductivity_Sensor___Meter_V2__K=1__SKU_DFR0300)
- Dissolved Oxygen Sensor[wiki](https://wiki.dfrobot.com/Gravity__Analog_Dissolved_Oxygen_Sensor_SKU_SEN0237)
- ORP (Oxygen-Reduction Potential) Meter [wiki](https://wiki.dfrobot.com/Analog_ORP_Meter_SKU_SEN0165_)

All of the DF Robot sensors have the same basic interface.  They consist of:
- A Sensor Probe
- A Circuit Board
- Wires and Plugs

Once you have the correct wires plugged in there will be 3 wires coming from the sensor circuit board that we need to connect to our Arduino. They will be RED, BLACK, and BLUE. Each of these wires needs to be connected to a specific pin on the Arduino.

- The RED wire is for the POWER connection. It needs to be plugged into the pin labelled 5V.
- The BLACK wire is for the GROUND connection. It needs to plugged into one of the pins labelled GND.
- The BLUE wire is the DATA or SIGNAL connection. It needs to be plugged into one of the \_Analog Input \_pins on the Arduino. We will generally use the pin labelled A0 unless the sample code provided with the sensor uses a different pin.

The RED and BLACK (POWER and GROUND) wires connect the sensor to a power supply so that it has the electricity that it needs in order to run. The BLUE (SIGNAL) wire is the wire that sends an electrical signal from the sensor corresponding to the turbidity in the liquid.

Many sensors you use will follow this pattern of having a POWER, GROUND, and SIGNAL wire and will be wired up in much the same way. The main things you have to do differently for different sensors are:

- Make sure you have the right voltage (5 volts or 3.3 volts based on the sensor)
- Understand how to interpret the signal that you get from your sensor

## Part C - Program the Arduino

If you got this project as a kit, hopefully you received a pre-programmed Arduino. If so, you can skip this step. Otherwise, you will need to use the Arduino IDE to send the correct code to the Arduino. 

Source code for the project can be found in our [github repository](https://github.com/wmacfarl/simple-water-sensor-platform).  

You can also look at it on Arduino Create below:

<iframe src=https://create.arduino.cc/editor/wmacfarl/07772f5b-09af-4376-9e51-80fdd73db911/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>


You can copy and paste it into the Arduino IDE and hit the "upload" button. For more information, see my \[note on testing and setup of the Arduino\](https://publiclab.org/notes/wmacfarl/10-22-2019/how-to-set-up-and-test-an-arduino).

_Note: if you are using the Arduino Micro you will need to choose either "Arduino Micro" or "Arduino Leonardo" as your "Board" in the "Tools" menu._

![image description](/i/36332.png "arduino_tools_board.png")

## Part D - Test the Sensor

If you just want to see if the sensor is working, you don't need to turn the switch on to send data back to the computer, you can just look at the LED, The LED will blink faster with higher turbidity.

If you want to collect data, you just need to open up any spreadsheet software, place your cursor on whatever cell you want to start typing into, and then turn the switch on. It will type out a table that looks like this:

## Addendum - Calibration 

All of these sensors require calibration to get really accurate data.  Information about how to calibrate the sensors can be found on the DF Robot wiki pages for the various sensors.

The normal way of calibrating the sensors requires you to change parameters in the software. 
 The basic procedure is to acquire a liquid with a known value for the parameter you are testing for and then modify one or two "offset"-type variables in the code until the data provided by the sensor matches the known value of the liquid.

Without calibrating the sensors, the data you get from the sensor should be useful for making comparisons to other data from the same sensor, but shouldn't be treated as an accurate measure of the parameter in question.  

## Addendum: To-Dos

We should come up with a way for people to calibrate their sensors without needing to change any values in the source code.

The program for each sensor just takes a voltage value and does some math on it.  At the moment this math is being done by the Arduino and then typed out into a spreadsheet, so various calibration values have to be set in the Arduino program.

But there is no particular reason why the math should be done by the Arduino.  A better way to do it would be to pull all of the math out of the Arduino program and put it into spreadsheet formulas.  

Then we could make a spreadsheet with the correct formulas and calibration instructions for each sensor.

## Addendum - Further Questions and Considerations

- Calibration instructions+spreadsheet for each sensor
-  Usage guidelines+pitfalls for each sensor
- Guidelines for making sense of data for each water quality measurement
- Useful designs for body/housing for various sensor form-factors and use-cases

And there are probably lots of other problems and things to improve on. I would love any feedback, thoughts, or questions you might have.

  [1]: /i/37558.jpg "micro_with_switch.jpg"
  [2]: /i/37559.jpg "add_led.jpg"
  [3]: /i/37560.jpg "add_jumper_wires.jpg"
  [4]: /i/37561.gif "add_sensor_select_jumper.gif"
  [5]: /i/37560.jpg "add_jumper_wires.jpg"