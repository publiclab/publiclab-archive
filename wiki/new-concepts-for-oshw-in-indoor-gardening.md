---
nid: 10018
title: New Concepts for OSHW in Indoor Gardening
path: public/static/wiki/new-concepts-for-oshw-in-indoor-gardening.md
uid: 294634
tagnames: sensors,garden,datalogger,hydroponics,gardening,data-logging,cannabis
---

# New Concepts for OSHW in Indoor Gardening

##The Open Source Hydroponic Garden v.2014
_**NEW! Check out the project repo on Github- https://github.com/Cribstone/OpenHydro**_
###Background
A new generation of urban homesteaders have been seeking out new ways to grow their own fresh berries, fruits and vegetables without having access to a yard, warm weather or even a window! Developed by NASA as a means for providing food to a zero-gravity space colony, advanced horticultural techniques known as hydroponics, aquaponics, aeroponics etc...  have gradually made their way out of the laboratory.  Only the journey has yet to really make it into the living room. (1)
  Enter the Makers! The growth of low-cost, high performance platforms like Arduino and Raspberry Pi, coupled with mass collaboration techniques like the"[DIY-RnD](http://www.rndiy.org/)" method used to develop [our.windowfarms.org ](our.windowfarms.org ) have transformed what were once expensive, laboratory-bound technologies into low-cost, simple projects in the living room.  Its little wonder then that the world of Open Source Hardware and Indoor Gardening would cross paths relatively frequently.  A simple search for "Arduino Hydroponics" turns up a wealth of material dating back to 2010-2011 (an eternity in the tech sector).  While the capabilities of the DIY tech sector have grown tremendously in the past year alone, the world of "Ardu-Ponics" appears to be stuck in 2011.

###Proposal
  Drawing inspiration from projects like [Infragram](http://infragram.org/) and the [Thermal Visualight](http://publiclab.org/notes/warren/11-15-2013/visualight-board-for-thermal-flashlights) The goal of this project is to examine recent innovations in both the DIY tech and Indoor Gardening communities and incorporate them into a working hydroponic control unit  that could easily fit into a small apartment.
Innovations in the following categories will be examined-

####Sensors

 ** * pH**

   -[LeoPhi](http://www.sparkyswidgets.com/portfolio-item/leophi-usb-arduino-ph-sensor/) USB Enabled pH sensor based on Arduino Leonardo

**  * eC**

-[LeoeC](http://www.sparkyswidgets.com/product/leoec/) USB Enabled Electrical Conductivity sensor based on Arduino Leonardo

**  * Light**

 - [Digital Luminosity Sensor](http://www.adafruit.com/products/439)

 - IR Imager-  _Potential for using Infrared-Enabled Webcam to monitor indoor plant health as examined in [this research note](http://publiclab.org/notes/code4maine/01-15-2014/will-infragram-help-with-indoor-hydroponics-aquaponics)_
       
**  * Water Temperature **

  -[ Epoxy Thermistor]( http://www.adafruit.com/products/372)

**  * Humidity**

  - [DHT11 Humidity Sensor](http://www.adafruit.com/products/386)

**  * Water Flow**

  - [NPS Flow Meter](https://github.com/adafruit/Adafruit-Flow-Meter)

####Control

**  * pH+eC**

   -[Peristaltic Dosing Pump](http://www.adafruit.com/products/1150)

**     * Water Temp**

   - [Thermoelectric Water Chiller](http://www.banggood.com/TEC1-12705-Heatsink-Thermoelectric-Cooler-Cooling-Peltier-Plate-Module-p-909862.html?currency=USD&utm_source=google&utm_medium=shopping&utm_content=miko_ruby&utm_campaign=Electronic-xie-us&gclid=CK6E-vzxvbwCFacDOgodzW4AHQ)

  - [Tutorial ](http://garagelab.com/profiles/blogs/how-to-use-a-peltier-with-arduino?xg_source=activity)

  **  * Water Flow**

  - [Solenoid Valve](http://www.adafruit.com/products/997)

   **  * Light**

   - _See Additional Research Notes_
        
   **  * Water Tank level**
        
  - [Pressure sensor with immersed tube MPX10, MPX2010, MPX5050...](http://cache.freescale.com/files/sensors/doc/data_sheet/MPX10.pdf)


####Interface

 **Concept 1-**
Full Research Note-[ http://publiclab.org/notes/code4maine/02-10-2014/cloud-sensor-base-station](http://publiclab.org/notes/code4maine/02-10-2014/cloud-sensor-base-station)

  [Atheros AR9331](http://wiki.openwrt.org/toh/tp-link/tl-wr703n/ar9331_pinout) SOC w/OpenWRT driving a bank of dedicated ATmega32u4-based sensor/actuators

   -  [Arduino Yun](http://arduino.cc/en/Main/ArduinoBoardYun)
   -  [TP-Link WR703n/MR3020](http://wiki.openwrt.org/toh/tp-link/tl-wr703n)
   - [Dragino](http://www.dragino.com/) Development Board

**  Software Stack**
   * [Node-RED](http://nodered.org/)
   * [MQTT](http://mqtt.org/)
   * [ MongoDB](http://www.mongodb.org/) noSQL Database
   * Open IOT schema based on [ http://osiot.org/](http://osiot.org/)

**UPDATE-3/3/14**
It appears there's an aquaponics project in England with a similar software stack in mind- http://l0l.org.uk/incredible-aquaponics-control-system/.
 Its always nice to find somebody else has independently arrived at the same conclusion in similar circusmstances.  In this case, the research team is also using Node-RED as the programming interface, with MQTT as a messaging protocol http://l0l.org.uk/2014/01/simple-node-red-web-page/.  They're hosting it on a Raspberry Pi however, and while I might end up using the Pi in the end (for its superior video handling capabilities if nothing else) I see a platform capable of running the Arduino Bridge library (either Dragino, the Arduino Yun or the upcoming Arduino TRE) as most capable of handling a large number of analog sensors and actuators.
  Another interesting suggestion came up in the comments thread from the project above-        

http://www.hivemq.com/mqtt-over-websockets-with-hivemq/

http://www.hivemq.com/build-javascript-mqtt-web-application/

####Links
  * [Windowfarms](http://our.windowfarms.org/) _a vertical, indoor garden kit that allows for year-round growing in almost any window. It lets plants use natural window light, the climate control of your living space, and organic “liquid soil.”_
  * [HAPI- Hydroponic Automation Platform Initiative](http://hapihq.com/) _Scalable Technologies for  Automating Food Production in Diverse Enviroments_
  * [GrowCubes](https://www.youtube.com/watch?v=GO0M-lMrdQw&feature=youtu.be) _stackable, modular farming environments that use mobile technology and aeroponics to grow delicious organic produce indoors, providing optimum light and delivering all necessary nutrients while using 95% less water,_
  * [Arduino/LED/Hydroponics on Instructables
](http://www.instructables.com/id/Creating-a-fully-automated-LED-growbox/)

_(1) Of course there are some notable exceptions... Until recently of course, "hydroponics" would often be associated with a clandestine (though well-financed) subculture of cannabis growers. Its possible however, that such an association has served to limit the true potential of indoor gardening as growers had little incentive to share information, while an excess of cash gave little incentive for equipment suppliers to develop small-scale, affordable products._




_*Note-The research in this wiki is an outgrowth of[ this earlier research note ](http://publiclab.org/notes/code4maine/01-15-2014/will-infragram-help-with-indoor-hydroponics-aquaponics) where we first explored the concept of using Infrared Imagery processed through [Infragram](www.infragram.org) as a means of monitoring indoor plant growth.
  There is also a is a companion wiki at[ this post](http://farmhack.net/wiki/open-source-pink-gardening-using-redblue-leds-indoor-plant-growth) on FarmHack.net.
_