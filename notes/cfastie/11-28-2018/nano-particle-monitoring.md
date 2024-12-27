---
title: "Nano particle monitoring"

tagnames: 'arduino, air-quality, sensors, dust, barnstar:basic, indoor-air-quality-monitoring, data-logging, activity:particulate-monitoring, activity:arduino, nano-data-logger, activity:nano-data-logger, activity:data-logging, air-sensors, purpleair, plantower, pms7003, ccs811-gas-sensor'
author: cfastie
path: /notes/cfastie/11-28-2018/nano-particle-monitoring.md
nid: 17768
uid: 554
cids: 21390,21391,21392,21395,21398,21399,21504,31405
---

![](https://publiclab.org/public/system/images/photos/000/027/872/original/Dust_20181127-4203.JPG)

# Nano particle monitoring

by [cfastie](/profile/cfastie) | November 28, 2018 04:44

November 28, 2018 04:44 | Tags: [arduino](/tag/arduino), [air-quality](/tag/air-quality), [sensors](/tag/sensors), [dust](/tag/dust), [barnstar:basic](/tag/barnstar:basic), [indoor-air-quality-monitoring](/tag/indoor-air-quality-monitoring), [data-logging](/tag/data-logging), [activity:particulate-monitoring](/tag/activity:particulate-monitoring), [activity:arduino](/tag/activity:arduino), [nano-data-logger](/tag/nano-data-logger), [activity:nano-data-logger](/tag/activity:nano-data-logger), [activity:data-logging](/tag/activity:data-logging), [air-sensors](/tag/air-sensors), [purpleair](/tag/purpleair), [plantower](/tag/plantower), [pms7003](/tag/pms7003), [ccs811-gas-sensor](/tag/ccs811-gas-sensor)

----

PurpleAir air quality monitors send data about particles in the air to the web via WiFi. One version of the PurpleAir monitor saves the data to a microSD card. The number of particles in five size classes is reported in addition to three EPA PM standards (PM 10, PM 2.5, and PM 1.0). The devices cost $180 to $260\. PurpleAir is not open source, but they provide a lot of information about the hardware. The $259 PA-II-SD seems to include the following components:

1. Plantower PMS5003 air particle sensor
2. BME280 temperature, humidity, and pressure sensor
3. ESP8266 microcontroller
4. microSD card module and card
5. Real-time clock

The PA-II and PA-II-SD monitors have "dual laser counters." I don't know what this means. Do they have two Plantower PMS5003 sensors? The ESP8266 is an Arduino-like microcontroller with integrated WiFi. All PurpleAir monitors use this microcontroller.

[![Dust_20181120-4159.JPG](/i/27870)](/i/27870)  
_Figure 1\. A Plantower PMS7003 particle sensor. This is a newer model than the PMS5003 and is half the size. It seems to operate the same as the PMS5003 and uses the same connections and code. A tiny fan circulates air through the sensor._

I bought the five components above on eBay for $32.00\. As a test, I built a prototype monitor with a [Nano Data Logger](https://publiclab.org/tag/nano-data-logger) instead of the ESP8266\. This poor man's version does not have WiFi capability but instead saves the data to microSD card like the PA-II-SD.

[![Dust_nano.jpg](/i/27871)](/i/27871)  
_Figure 2\. A Nano Data Logger with PMS7003 sensor and BME280 sensor. Data from both sensors are saved to the microSD card every minute. The Nano logging shield includes a microSD card slot and real-time clock. Especially for outdoor monitoring, it is handy to have temperature and humidity data when interpreting the particle results._

The Nano Data Logger version of the particle monitor can be assembled without soldering. The Arduino Nano snaps into the logging shield which includes an SD card slot and real-time clock. The Nano is a 5 volt Arduino and the Plantower sensor requires 5 volts. The BME280 sensor requires 3 volts. The Nano has one 5v pin, one 3v pin, and two ground pins so seven DuPont wires can be slid on to make all the needed connections.

[![Dust_20181120-4168.JPG](/i/27873)](/i/27873)  
_Figure 3\. The PMS7003 particle sensor (blue, top) and a CCS-811 gas sensor (left, purple) installed in the case. The gas sensor and the BME280 are both I2C sensors and connect the same way (SDA to A4, SCL to A5, and the CCS-811 needs one additional wire)._

[![Dust_20181120-4173.JPG](/i/27874)](/i/27874)  
_Figure 4\. The Nano Data Logger (Arduino Nano plus logging shield) installed in the case. A USB cable plugs into the Nano to supply 5 volts of power from a phone charger._

Making connections to the PMS7003 sensor is a little confusing. It has a 10-pin connector which does not fit anything I have around the house. Mine came with a handy connector and cable with [Molex 053261-0871](https://www.molex.com/molex/products/datasheet.jsp?part=active/0532610871_PCB_HEADERS.xml) terminations. I didn't have anything to plug that connector into, but that is not required. The connector that plugs into the sensor also has regular 0.1 inch pins for the four important connections. In fact, only three of these are required to use the sensor (power, ground, TX). Adafruit has [good instructions](https://learn.adafruit.com/pm25-air-quality-sensor/arduino-code) for making the connections.

[![Dust_20181120-4138.JPG](/i/27875)](/i/27875)  
_Figure 5\. The 10 pin connector on the PMS7003 sensor._

[![Dust_20181120-4164.JPG](/i/27876)](/i/27876)  
_Figure 6\. The connector and cable that came with the sensor. The cable is not needed. Three of the four pins broken out on the connector board are all that is needed to operate the sensor._

[![Dust_20181120-4137.JPG](/i/27877)](/i/27877)  
_Figure 7\. The connector plugged into the sensor and three DuPont wires connecting it to the Arduino._

I built three data loggers with PMS7003 sensors. Two also had CCS-811 gas sensors which report an estimate of volatile organic compounds (VOCs). These seemed more interesting than the BME280 temperature-humidity-pressure sensors in the PurpleAir monitors. The third monitor I built had an LCD which displayed PM 2.5 in real time (which helps explain all the ashes thrown into the woodstove fan below).

[![Dust_20181125-4178-4.JPG](/i/27882)](/i/27882)  
_Figure 8\. The three monitors with PMS7003 sensors were on my mantle for several days. The woodstove directly below was burning 24/7 for those days. Each monitor has an LED which blinks each time data is saved to the microSD card. That makes it possible to plan the timing of removing the SD card or powering down the logger so you don't do those things while data is being written to the card. I think that might corrupt the card and your data._

The first test of the monitors was to operate three of them together to see if they sensed the same thing. The monitors were directly above my woodstove so I assumed I would record a pulse of particles and gas everytime I opened the stove door to add wood. The monitors collected data from the sensors every second and computed an average of 60 readings. So an average result was saved to SD card about once per minute.

[![6Days7003.PNG](/i/27883)](/i/27883)  
_Figure 9\. Six days of PM 2.5 data from three PMS7003 particle sensors on my mantle. The letters in the middle panel: a. I cooked some bacon (I have no kitchen exhaust fan and the kitchen is 15 feet from the woodstove.) b. I tossed some wood ashes into the woodstove fan (which blows into the room). c. I was invited to Thanksgiving so I took Sensor #2 and ran it during dinner. The other two sensors stayed home. d. I tossed some more ashes into the fan (fun things should be done more than once). e. I vacuumed the room (some fun things make a mess). f. I accidentally spilled some wood ashes into the fan. g. I cooked pancakes (Wow). h. I don't know what this or the later peaks are because I got tired of writing everything down._

During the test the three PMS7003 sensors responded very similarly to indoor pollution events. This is very encouraging. Wood ashes must be too big to register strongly as PM 2.5 because there were a lot of ashes in the room and the sensor response was subtle. Cooking with oil in a hot pan and adding pancake batter produces a lot of PM 2.5 (also PM 1.0 and PM 10). It was 5°F outside so I didn't open a window, but I have to remember to do that next time. It took several hours to clear the air.

<h4 id="Figure10">Figure 10</h4>
[![2days7003.PNG](/i/27884)](/i/27884)  
_Figure 10\. A closer look at the data from the two days after the pancake cloud dispersed. All three PM indexes are included from one of the three sensors. Each point is the mean of 60 readings taken about once per second and saved about once per minute._

I could not detect an association between opening the woodstove door and increased particulate matter. I have not yet looked closely at the gas sensor results for the period of this test.

The files to print the small case for the Nano Data Logger and Plantower PMS7003 are at [Thingiverse](https://www.thingiverse.com/thing:3243457).

The sketch running on the Nano Data Logger (with PMS7003 and CCS-811) is here:
[\_\_ NanoVOC7003v1.0.txt](/i/27885)