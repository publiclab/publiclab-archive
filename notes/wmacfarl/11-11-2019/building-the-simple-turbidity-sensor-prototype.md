---
title: 'Building the Simple Turbidity Sensor Prototype'
tagnames: arduino, sensors, water-quality, turbidity, new, draft, time:3h, include, activity:arduino, water-sensors, activity:water-sensors, status:request, oil-and-gas-water-trio
author: wmacfarl
path: /notes/wmacfarl/11-11-2019/building-the-simple-turbidity-sensor-prototype.md
nid: 21441
uid: 424597

---

![](https://publiclab.org/public/system/images/photos/000/036/336/original/IMG_20191110_202710_%282%29.jpg)

# Building the Simple Turbidity Sensor Prototype

by [wmacfarl](../profile/wmacfarl) November 11, 2019 03:55

November 11, 2019 03:55 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [new](../tag/new), [draft](../tag/draft), [time:3h](../tag/time:3h), [include](../tag/include), [activity:arduino](../tag/activity:arduino), [water-sensors](../tag/water-sensors), [activity:water-sensors](../tag/activity:water-sensors), [status:request](../tag/status:request), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio)

----

# Purpose

We are making an Arduino-based liquid turbidity sensor that displays readings using a single flashing LED and sends data to a computer or smartphone/tablet over USB by emulating a keyboard.

The goal of this project is to have a basic design for cheap, easy to build, water quality sensors that can be used to log quantitative data without requiring additional software, drivers, or a complicated circuit.

For more information about the design of the project see [Designing A Simple Water Sensor Kit](https://publiclab.org/notes/wmacfarl/11-11-2019/designing-a-simple-water-sensor-kit).

We are using the [DF Robot Turbidity Sensor](https://www.dfrobot.com/product-1394.html "https://www.dfrobot.com/product-1394.html") for this prototype kit primarily because it is relatively cheap and measures something that's easy to understand and see. All of the [DF Robot liquid sensors](https://www.dfrobot.com/blog-1138.html) (and many other Arduino-based sensors) share a common basic interface, so it would be very easy to swap out and experiment with different sensors based on what you want to be measuring.

This is a prototype project, so we would very much appreciate any thoughts or feedback you have on the design or documentation, as well as on how you might want to use these kinds of water quality sensors in your own projects and campaigns.

Materials needed

- DF Robot Analog Turbidity Sensor - [$9.90 from DF Robot](https://www.dfrobot.com/product-1394.html), [$15.00 (Amazon)](https://www.amazon.com/DFRobot-Gravity-Analog-Turbidity-Arduino/dp/B075T3CVH6/ref=sr_1_1_sspa?crid=198G4YEVDSONL&keywords=dfrobot%20gravity%20analog%20turbidity%20sensor%20for%20arduino&qid=1573433247&sprefix=dfrobot%20turbi,aps,144&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOUpVMkpXR1pJQ1dOJmVuY3J5cHRlZElkPUEwNzI0NTQwV0NOQzkyN1laVTBIJmVuY3J5cHRlZEFkSWQ9QTA0MjEyNzcxTTFTSTFBWFlDSzBFJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)

![image description](/i/36338.jpg "IMG_20191110_182945_(1).jpg")

- Mini-Breadboard - [$6.98 for 6 (Amazon)](https://www.amazon.com/ELEGOO-6PCS-tie-Points-Breadboard-Arduino/dp/B01EV6SBXQ/ref=sr_1_3?keywords=mini%20breadboard&qid=1573433345&sr=8-3)
- Arduino Micro - [$18.89 for 3 (Amazon)](https://www.amazon.com/HiLetgo-Atmega32U4-Bootloadered-Development-Microcontroller/dp/B01MTU9GOB/ref=sr_1_3?keywords=arduino%20micro&qid=1573433483&sr=8-3), [$4 (Ebay)](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1312.R1.TR9.TRC1.A0.H0.Xarduino%20.TRS2&_nkw=arduino%20ATmega32U4&_sacat=0)

![image description](/i/36318.jpg "IMG_20191110_183000.jpg")

- Switch or Button - [$7 for 15 rocker switches (Amazon)](https://www.amazon.com/ZUPAYIPA-Solder-Rocker-Switch-Toggle/dp/B01N2U8PK0/ref=sr_1_3?keywords=switch%20spst%20two%20pin&qid=1573433688&sr=8-3 "https://www.amazon.com/ZUPAYIPA-Solder-Rocker-Switch-Toggle/dp/B01N2U8PK0/ref=sr_1_3?keywords=switch%20spst%20two%20pin&qid=1573433688&sr=8-3"), [$8.29 for 12 push-button switches (Amazon)](https://www.amazon.com/dp/B07HBQCZV8?aaxitk=F.MxnljWurQJwR0d0f1vsw&pd_rd_i=B07HBQCZV8&pf_rd_p=44fc3e0f-4b9e-4ed8-b33b-363a7257163d&hsa_cr_id=9844770990301&sb-ci-n=productDescription&sb-ci-v=RuoFeng%202%20Pins%20SPST%20Momentary%20Mini%20Push%20Button%20Switch%201A%20250V%20AC%20Pack%20of%2012%20%28Black%29)

![image description](/i/36319.jpg "IMG_20191110_183018.jpg")

- 3 Male to Male Jumper Wires (Red, Black, Blue) - [$9.99 for 80 -- assorted colors (Amazon), ](https://www.amazon.com/Aodesy-Jumper-Wires-2-54mm-Ribbon/dp/B07GYSFZRR/ref=sr_1_10?keywords=jumper%20wires%20male%20to%20male&qid=1573433902&s=hi&sr=1-10)[$6.55 for 100 with choice of color (AliExpress)](https://www.aliexpress.com/item/1726192986.html?spm=2114.12010615.8148356.5.ef15ab3c3EHa8P)

![image description](/i/36320.jpg "IMG_20191110_183104.jpg")

- USB Micro Cable - [$7 for 3 (Amazon)](https://www.amazon.com/AmazonBasics-Male-Micro-Cable-Black/dp/B072J1BSV6/ref=sr_1_3?keywords=usb%20micro&qid=1573434220&sr=8-3)

![image description](/i/36321.jpg "IMG_20191110_183119_(1).jpg")

- An LED - [$6.55 for 100 (Amazon)](https://www.amazon.com/eBoot-Pieces-Emitting-Diodes-Assorted/dp/B06XPV4CSH/ref=sxin_2_ac_d_rm?ac_md=0-0-bGVk-ac_d_rm&keywords=led&pd_rd_i=B06XPV4CSH&pd_rd_r=ba6fd1db-11e0-4fce-8342-ba9ec0a48c85&pd_rd_w=sWs7Z&pd_rd_wg=0S245&pf_rd_p=ed481207-4bea-4e19-bbad-73ed40fdc292&pf_rd_r=5QXTPWT7E1JJFF8FGRKC&psc=1&qid=1573434407)

![image description](/i/36322.jpg "an_led.jpg")

- A laptop, smartphone, or tablet with a USB port to plug in the sensor
- A USB "on the go" cable (if using a phone/tablet) - [$5 for 3 (Amazon)](https://www.amazon.com/Rankie-Female-Adapter-Convertor-3-Pack/dp/B00YOX4JU6/ref=sr_1_3?keywords=usb%20on%20the%20go&qid=1573435819&s=industrial&sr=1-3)

---------

## Step 1 - Assemble the Turbidity Sensor

The DFRobot Turbidity sensor consists of two parts, the sensor probe and the circuit board. This can be connected to each other and to your Arduino with the included sets of wires.

The sensor probe can be connected to the circuit board using the included BLACK-YELLOW-RED set of 3 wires.

These wires have a white plastic connector on both sides that will allow you to plug them into sockets on the sensor probe and the circuit board.

#### Start by plugging the wire into the plug on the circuit board. [](https://publiclab.org/notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor#Start+by+plugging+the+wire+into+the+plug+on+the+circuit+board.)

_NOTE: These wires are NOT reversible. Make sure the correct side of the wires is connected to the circuit board._

If you are looking at the circuit board from the top with the writing right-side-up, you will plug the wire into the socket on the left side of the board.

The BLACK wire will be the top wire, with YELLOW in the middle and RED on the bottom.

The plug on the other side of the wire has a small plastic clip on top of it but is otherwise identical and will fit into this socket but the wires go RED BLACK YELLOW. This setup is incorrect.![image description](https://publiclab.org/i/35629.jpg "sensor_hookup_wrong.jpg")

#### Plug the other side of the wires to the socket on the sensor probe [](https://publiclab.org/notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor#Plug+the+other+side+of+the+wires+to+the+socket+on+the+sensor+probe)

The other side of the set of wires has a small tab on the top of the plug and has a color-order of RED-BLACK-YELLOW. Plug this side into the socket on the bottom of the sensor-probe.

![image description](https://publiclab.org/i/35630.jpg "sensor_hookup_complete.jpg")

Note: if the board and probed are arranged in this way, then the wiring should be as follows:\_

- TOP wire on board connected to the BOTTOM wire on the probe
- MIDDLE wire on board connected to TOP wire on probe
- BOTTOM wire on board connected to MIDDLE wire on probe

## Step 2 - Insert the Arduino Micro into the Breadboard

The Arduino Micro has two rows of "header pins" coming off of the bottom. These pins can fit into the sockets in your breadboard.

The Arduino has two rows of header pins. The breadboard has a break down the middle. Insert the Arduino so that the rows of pins are on opposite sides of the break.![image description](/i/36323.jpg "IMG_20191110_202249.jpg")

Step 3 - Build the Circuit

The completed circuit will look something like this:

![image description](/i/36324.jpg "IMG_20191110_202710.jpg")

#### Step A: Connect Sensor to Arduino with Jumper Wires

![image description](/i/36325.jpg "arduino_jumpers.jpg")

We will use the Male to Male jumper wires to connect the Arduino to the sensor by plugging them into sockets on the breadboard. The pins on the Arduino are labelled on the circuit board. We will connect the wires as follows:

| Arduino Pin | Label | Wire Color |
|-------------|-------|------------|
| Power (+)   | VCC   | RED        |
| Ground (-)  | GND   | BLACK      |
| Analog 0    | A0    | BLUE       |

#### Step B: Plug in the LED

![image description](/i/36326.jpg "LED_to_arduino.jpg")

The LED has two legs, one longer, one shorter. They should be connected as follows:

| Arduino Pin | Label | LED Leg |
|-------------|-------|---------|
| Digital I/O Pin 2 | 2     | LONG    |
| Ground (-)  | GND   | SHORT   |

If the LED is plugged in backwards it will not light up.

#### Step C: Connect the Switch

For this part you could either use a momentary push-button switch or a rocker switch. I have not decided which makes the most sense for this project.

Both the Switch and the button have two connections coming off of them. These wires are interchangable -- it doesn't matter which one you connect to which pin. The switch just needs to connect \*\*PIN 10 \*\*to \*\*GND \*\*on the Arduino.

In this picture the grey wires are attached to the switch.

![image description](/i/36329.jpg "switch.jpg")

With the push-button switch it will type out readings as long as you hold the button down. With the rocker switch it will type out readings while the switch is in the "on" position.

It is inconvenient to have to hold the push-button down all of the time while you are collecting data. On the other hand it is easy to leave the rocker-switch on, and accidentally have the sensor be typing data into your computer while you're trying to do something else if you aren't careful. Neither of these are really huge problems. I think the rocker-switch is probably preferable but am leaving the question open for now.

## Program the Arduino

If you got this project as a kit, hopefully you received a pre-programmed Arduino. If so, you can skip this step. Otherwise, you will need to use the Arduino IDE to send the correct code to the Arduino. The test code that I am using right now looks like this:
<iframe src="https://create.arduino.cc/editor/jywarren/4eb3674f-0a45-46e1-a7f3-efab912a3484/preview?embed" style="height:510px;width:100%;margin:10px 0" frameborder="0"></iframe>
and you can copy and paste it into the Arduino IDE and hit the "upload" button. For more information, see my \[note on testing and setup of the Arduino\](https://publiclab.org/notes/wmacfarl/10-22-2019/how-to-set-up-and-test-an-arduino).

_Note: if you are using the Arduino Micro you will need to choose either "Arduino Micro" or "Arduino Leonardo" as your "Board" in the "Tools" menu._

![image description](/i/36332.png "arduino_tools_board.png")

## Test the Sensor

There is a switch on the sensor board labelled D<-->A that can be used to set whether the sensor outputs data in "Digital" or "Analog" mode.  Before you attempt to get any data from the sensor you need to make sure that it is set to "Analog" mode.  
![Location of Digital-Analog Switch][1]

If the sensor is in "Digital" mode it will output a HIGH voltage (4-4.5V) if the turbidity-reading is above a certain threshold and will output a LOW voltage (0-.5V) if it is below that threshold.  You can adjust this threshold by turning the small blue+grey screw below the switch.

This is a useful feature if you are using the sensor as part of a control system -- like if you wanted to automatically trigger a pump or filter when the water got too dirty -- but is not useful if we want to be collecting data over a range of values.

You don't need any liquid at all to test whether the sensor is working. Since the turbidity sensor works by shining a light through the liquid towards a sensor and measuring how much light makes it through, you can place any opaque object between the two probes of the sensor and you should be able to see a change.

If you are testing the sensor with a liquid, you should be aware that the casing is not waterproof. Be careful only to submerge the probes and not the rest of the sensor so you don't get water in the casing and on the circuit board.

If you just want to see if the sensor is working, you don't need to turn the switch on to send data back to the computer, you can just look at the LED, The LED will blink faster with higher turbidity.

If you want to collect data, you just need to open up any spreadsheet software, place your cursor on whatever cell you want to start typing into, and then turn the switch on. It will type out a table that looks like this:

| <br> | <br> | <br> |
|------|------|------|
| Voltage: | 3.41 | now_ |
| Voltage: | 3.40 | now_ |
| Voltage: | 3.41 | now_ |

I am using a simple script that I have written for Google Sheets that replaces the word "now\_" with the current date and time. So the resulting spreadsheet looks like this:![image description](/i/36334.png "google_sheet.png")

If you have a Google account you can look at my spreadsheet [here](https://docs.google.com/spreadsheets/d/1LgE921AXOUfEIi37stmPSTwl4uV-KC22pxnK9pf0kC0/edit#gid=0) and make your own copy of it. The copy you make \_should \_have my script attached.

It should be possible to do something similar with any other piece of spreadsheet software.

## Questions and Considerations

This project is still a prototype/proof-of-concept. In particular, off the top of my head:

- the Arduino code could be improved and made simpler
- a better non-google spreadsheet could be made for collecting data
- web software could be written to do all sorts of useful things, from processing sensor data to interfacing with this, and other, websites
- we currently have no design for the body/housing of the sensor

And there are probably lots of other problems and things to improve on. I would love any feedback, thoughts, or questions you might have.

  [1]: /i/36924.png "turbidity_board_DASwitch.png"