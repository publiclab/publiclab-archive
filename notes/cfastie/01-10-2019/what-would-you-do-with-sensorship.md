---
title: "What would you do with SensorShip?"

tagnames: 'arduino, sensors, wi-fi, hardware, data-logging, bme280, tsl2561, activity:data-logging, mma8451, esp8266, blynk, iot, data-monitoring, mlx90615'
author: cfastie
path: /notes/cfastie/01-10-2019/what-would-you-do-with-sensorship.md
nid: 18092
uid: 554

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/028/681/original/8266_20190101-4406.JPG)

# What would you do with SensorShip?

by [cfastie](../../../profile/cfastie) | January 10, 2019 03:33

January 10, 2019 03:33 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [wi-fi](../tag/wi-fi), [hardware](../tag/hardware), [data-logging](../tag/data-logging), [bme280](../tag/bme280), [tsl2561](../tag/tsl2561), [activity:data-logging](../tag/activity:data-logging), [mma8451](../tag/mma8451), [esp8266](../tag/esp8266), [blynk](../tag/blynk), [iot](../tag/iot), [data-monitoring](../tag/data-monitoring), [mlx90615](../tag/mlx90615)

----

SensorShip is a boatload of environmental sensors whose data are sent to the internet via Wi-Fi. Instead of using an Arduino, the SensorShip uses an ESP8266 microcontroller board which has about five times the memory, clock speed, and address width of a standard Arduino (e.g., Uno, Nano, or Pro Mini). In addition, the ESP8266 board incorporates all the hardware needed to communicate via Wi-Fi (antenna included). Maybe most importantly, the ESP8266 microcontroller board costs about the same as an Arduino Nano or Pro Mini---about $3.00 on eBay.

[![8266_20190102-4430.JPG](/i/28682)](/i/28682)  
_Figure 1\. An ESP8266 development board. The ziggy line to the left is a Wi-Fi antenna. Boards like this cost $3.00\._

###Espressif Systems

The ESP8266 chip was designed by Espressif Systems and released in 2014\. It was intended to allow other devices to communicate via Wi-Fi, but within a year users recognized its potential to be a standalone microcontroller. Today the chip is incorporated into Arduino-like development boards which can be programmed with the Arduino IDE. In 2016 Espressif released the ESP32 chip with two to three times more computing power than the ESP8266 and with Bluetooth in addition to Wi-Fi. ESP32 development boards cost $6.00, so I am saving my pennies for future purchases. In many ways these boards make standard Arduinos (Atmega 328p) obsolete even when the Wi-Fi or Bluetooth capability is not needed.

[![ESPboards.jpg](/i/28683)](/i/28683)  
_Figure 2\. Specifications of a standard Arduino (left) and three ESP development boards. Prices are from eBay and include shipping from China. The three ESP boards (right) have Wi-Fi capability but the Nano does not. The ESP32 also includes Bluetooth capability. Only the ESP32 board (right) has enough memory to effectively install a Python programming environment. The ESP board I describe below is the ESP8266-12x board._

###Are these Arduinos?

The same old Arduino IDE (integrated development environment) can be used to program, debug, and upload sketches to ESP boards, but I don't think any boards designed or manufactured by Arduino use the ESP chips (yet). The boards are certainly part of the Arduino universe and expand that universe in important ways. For example, instead of using the Arduino IDE to write and upload programs to the board, a Python programming environment can be installed _on the board_ (in all that extra memory). This allows editing the program on the board instead of uploading an edited program every time a change is made (this sounds trivial but changes the way you can interact with an Arduino).

If you want to continue to use the Arduino IDE, transitioning from legacy Arduinos to ESP boards requires some accommodation:

1. Make sure you have a recent version of the Arduino IDE.
2. Definitions for ESP boards must be installed in the IDE.
3. Libraries for the specific method of communicating over Wi-Fi must be installed in the IDE.
4. There are a lot of different ESP boards and you will want to know which one you have which is not always as easy as it should be.
5. ESP boards do not respect many of the standard pin numbering conventions of legacy Arduinos, so you need a cheat sheet (ubiquitous on the web).
6. Arduino sketches which send data over Wi-Fi are generally structured differently from typical sketches to prevent spamming a server with new data 100 times a second.

[![8266_20190103-4512.JPG](/i/28684)](/i/28684)  
_Figure 3\. An ESP8266 board and BME280 sensor. This is all the hardware required to send temperature, humidity, and barometric pressure data to the internet._

###Ship building

In order to send sensor data to the internet, the only thing you must add to an ESP board is a sensor. For example, a BME280 sensor reports temperature, humidity, and barometric pressure data. These three data streams can be live on the internet when a BME280 is connected to an ESP board within the range of a Wi-Fi signal. A BME280 sensor costs $1.00, so the shocking part is that this mini weather station costs a total of $4.00\.

[![8266_20190107-4566.JPG](/i/28685)](/i/28685)  
_Figure 4\. A working SensorShip weather station including an ESP8266 board and a BME280 sensor. The cost of materials is $4.00 (not including USB cable, DuPont wires, and ship)._

Adding additional sensors and other components to an ESP device is done as with standard Arduinos. All of the sensors added to the SensorShips here are I²C sensors so adding multiple sensors is easy---they all connect to the same four pins on the ESP board. The I²C sensors in the SensorShip below include a BME280 (temperature, humidity, pressure), MLX90615 (thermal IR), MMA8451 (3 axis accelerometer), and TSL2561 (light level). The total cost of these four sensors is about $12.00\.

[![8266_20181227-4364.JPG](/i/28686)](/i/28686)  
_Figure 5\. An ESP8266 board with four I²C sensors attached. This device also has three LEDs and a piezo buzzer just for fun (there is plenty of spare memory for fun things). This is installed in the sailboat in the lead image (above)._

###Connecting to the internet

The process of connecting an ESP device to the internet will be new to many Arduino users and some important decisions must be made. Internet connections can be made several different ways:

1. Sensor data can be sent via Wi-Fi from the ESP device to a mobile device (phone) which displays the data. The phone must be capable of being a Wi-Fi node. The data never go to third party servers on the internet. [Cayenne](https://mydevices.com/cayenne/features/) provides an app for this solution.
2. Sensor data are sent via Wi-Fi to a server on a computer on that Wi-Fi network and then to a mobile device (phone). The data never go to third party servers on the internet. [Blynk](https://github.com/blynkkk/blynk-server) provides a free open-source server for this solution.
3. Sensor data are sent via Wi-Fi to the internet and then to a remote server where they can be viewed in a browser from anywhere. [ThingSpeak](https://thingspeak.com/) is one of many services offering this solution.
4. Sensor data are sent via Wi-Fi to a remote server and then to mobile devices anywhere on the internet. [Blynk](https://www.blynk.cc/) provides a free app (in-app purchases) and free accounts to allow this.

###Blynk

The only one of these solutions I have gotten to work is number 4 using the Blynk app on a phone. It was a little involved figuring out what steps I had to follow to set up Blynk (on my phone and on the ESP device), but when the correct steps are followed Blynk works very well and very reliably. The Blynk mobile app allows very capable dashboards to be built for viewing the sensor data streaming to the phone from the Blynk server somewhere in the cloud.

[![Screenshot_(Jan_9__2019_8_06_43_PM).png](/i/28687)](/i/28687)  
_Figure 6\. A dashboard I created in the Blynk mobile app to view live data from a SensorShip. This SensorShip includes the hardware in Figure 4\. The dashboard includes both live displays of the current sensor readings (top) and live, interactive graphs of the datastream from the sensor (bottom)._

Although the Blynk app is free and the fully functional phone dashboard in Figure 6 can be created for free, there is a limit to how many data widgets you can include in dashboards for free. Making a second similar dashboard (e.g., for another ESP8266 device) would require purchasing points to spend on each new dashboard widget. I have made three dashboards with almost 30 different data display widgets and Blynk has charged me about $14.00\. It does not cost anything to use the widgets--only to add them to a dashboard on your phone. You can delete a widget at any time and your points are refunded for use at any time on that or other dashboards.

[![SensorShipDash.jpg](/i/28688)](/i/28688)  
_Figure 7\. Two parts of the same dashboard for an ESP8266 SensorShip with four sensors (the one in Figure 5)._

The Blynk app is very sophisticated and easy to use and makes handsome displays and smart interactive graphs. Although all the data are passed through a Blynk server somewhere, it is not stored in an accessible archive unless the widget you put on your dashboard is a graph (a graph widget costs points equivalent to about $0.80). Older data can be displayed interactively in the graph on the dashboard, and the entire archive can be emailed to you as a CSV file at any time. Because of this feature, my SensorShips do not incorporate microSD cards or real time clocks. The only place data are saved is at the Blynk server. Eliminating the SD card and RTC reduces the hardware cost by about 50% compared to a Nano Data Logger or Mini Pearl Logger. Sketches for my SensorShips are shorter, smaller, and simpler because the code for using SD cards and RTCs is replaced with a few lines referring to Blynk libraries.

[![8266_20190101-4392.JPG](/i/28689)](/i/28689)  
_Figure 8\. A SensorShip monitoring my 3D printer. This allows me to know if the printer is operating (so regardless of where I am I can know when a long print has ended) and also whether the printer has burst into flames. I assumed at least one of the four sensors on the SensorShip would be sufficiently sensitive to reliably detect whether the printer was working. I was surprised to learn which sensor was best at this._

[![3DprintTilt.PNG](/i/28690)](/i/28690)  
_Figure 9\. Data from the accelerometer on a SensorShip next to the 3D printer. This sensor produced the cleanest signal of whether the printer was operating or not. The accelerometer records the vibrations of the solid wooden desk under the printer. These data could be viewed on my phone, but I requested a CSV file and made this graph in Excel._

The Blynk app makes it easy and quick to set up an alert triggered by any sensor on an ESP device. Blynk will send an email, a tweet, or a phone notification when your custom criterion for any sensor is met. This could be a condition you always want to be alerted about (e.g., your kitchen temperature is higher than 150°F) or a one time event (the temperature near the 3D printer is under 78°F so the print must be done). When you delete the alert your widget points are refunded in full.

[![Screenshot_20190108-190939_(1).png](/i/28691)](/i/28691)  
_Figure 10\. Thermal IR results from three hours in a room with a propane space heater. I was surprised to see how regular the temperature oscillations are (a record of when the thermostat turns the heater on and off). I expected to see more variability but there must be a very constant rate of both heat input and heat loss. The MLX90615 thermal IR sensor reports the temperature from incoming IR radiation ("Thermal IR") and also the temperature of the sensor itself ("IR ambient")._

I included a piezo buzzer in the larger SensorShip to demonstrate another capability of Blynk. It is easy to set up a widget on your phone that sends a signal to the ESP8266 device. I can play a tune on the SensorShip by moving a slider on the phone. This capability could be used to remotely operate or modify many things connected to an ESP board.

Blynk has many other features that I have not explored. The one feature I noticed was missing from Blynk is data viewing in a browser. You can see your data in their app on a mobile device but others cannot navigate to your graphs on the internet. That shortcoming is probably related to Blynk's business model of charging for data widgets used in the mobile app. I think it is possible to send your Blynk data to another service (like ThingSpeak) so it can be accessed there.

Here is the Arduino sketch for the SensorShip with one BME280 sensor: [SensrShipBME01.txt](/i/28699.txt)