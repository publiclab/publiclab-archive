---
title: "Portable thermal IR temperature logger unit"\ntagnames: 'arduino, sensors, data-logging, arduino-nano, nano-data-logger, 16x2_lcd, ds18b20, gy90615, activity:nano-data-logger'
author: cfastie
path: /notes/cfastie/05-26-2017/portable-thermal-ir-temperature-logger-unit.md
nid: 14229
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/020/551/original/Deek_18B20_20170524-9159.JPG)

# Portable thermal IR temperature logger unit

by [cfastie](../profile/cfastie) | May 26, 2017 20:37

May 26, 2017 20:37 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [data-logging](../tag/data-logging), [arduino-nano](../tag/arduino-nano), [nano-data-logger](../tag/nano-data-logger), [16x2_lcd](../tag/16x2_lcd), [ds18b20](../tag/ds18b20), [gy90615](../tag/gy90615), [activity:nano-data-logger](../tag/activity:nano-data-logger)

----

*Above: The infrared sensor on this data logger unit can read the temperature of an object without touching it.*
  
Public Lab has been incorporating a thermal infrared sensor into projects for more than five years. The [Thermal Flashlight](https://publiclab.org/search/thermal%20flashlight?page=5) is based on [Melexis MLX90614](https://www.adafruit.com/product/1748) sensor which determines the temperature of an object by sensing the thermal infrared radiation emitted from it. I hooked up a similar sensor to the [Nano Data Logger](http://kaptery.com/product/nano-logger-kit) to see how it worked.  
.  

[![Nanolog_20170509-8854.JPG](https://publiclab.org/system/images/photos/000/020/552/medium/Nanolog_20170509-8854.JPG)](https://publiclab.org/system/images/photos/000/020/552/original/Nanolog_20170509-8854.JPG)  
*Above: This tiny PCB incorporates a thermal infrared sensor (MLX90615) to make a handy I2C device that works at 3.3 or 5 volts.*  
.  

[![Deek_18B20_20170524-9166.JPG](https://publiclab.org/system/images/photos/000/020/553/medium/Deek_18B20_20170524-9166.JPG)](https://publiclab.org/system/images/photos/000/020/553/original/Deek_18B20_20170524-9166.JPG)  
*Above: The thermal logger unit incorporates an Arduino Nano, data logging shield, an LCD monitor, six AA batteries, and the GY-90615 IR sensor (far left).*  
.   

[![Deek_18B20_20170524-9148.JPG](https://publiclab.org/system/images/photos/000/020/554/medium/Deek_18B20_20170524-9148.JPG)](https://publiclab.org/system/images/photos/000/020/554/original/Deek_18B20_20170524-9148.JPG)
[![Deek_18B20_20170524-9139.JPG](https://publiclab.org/system/images/photos/000/020/555/medium/Deek_18B20_20170524-9139.JPG)](https://publiclab.org/system/images/photos/000/020/555/original/Deek_18B20_20170524-9139.JPG)  
*Above two: In the summer the propane in a tank is usually colder than the air, so the temperature of the metal tank can indicate where the level of propane is. The IR data logger unit could easily detect the propane level by finding the area of temperature difference, but so could your hand placed on the side of the tank.*  
.  

[![Deek_18B20_20170524-9325.JPG](https://publiclab.org/system/images/photos/000/020/556/medium/Deek_18B20_20170524-9325.JPG)](https://publiclab.org/system/images/photos/000/020/556/original/Deek_18B20_20170524-9325.JPG)  
*Above: I added a cabled temperature sensor (DS18B20) to the thermal IR data logger to compare temperature results between the non-contact and contact sensors. Here the IR sensor (left) is pointed at the stream water surface (from about 30 cm away) and the cabled sensor (right) is submerged in the water. Readings from both sensors are being saved to microSD card every few seconds. The DS18B20 is a one-wire sensor (not an I2C sensor).*  
.  

[![BareTemps.JPG](https://publiclab.org/system/images/photos/000/020/557/large/BareTemps.JPG)](https://publiclab.org/system/images/photos/000/020/557/original/BareTemps.JPG)  
*Above: The non-contact IR sensor (GY-90615) produced results very similar to the contact sensor (DS18B20) in the water. The GY-90615 has a second sensor which reports the temperature of the sensor itself which is typically close to the surrounding air temperature (orange dots).*  
.  

[![Deek_18B20_20170524-9242.JPG](https://publiclab.org/system/images/photos/000/020/558/medium/Deek_18B20_20170524-9242.JPG)](https://publiclab.org/system/images/photos/000/020/558/original/Deek_18B20_20170524-9242.JPG)[![Deek_18B20_20170524-9222.JPG](https://publiclab.org/system/images/photos/000/020/559/medium/Deek_18B20_20170524-9222.JPG)](https://publiclab.org/system/images/photos/000/020/559/original/Deek_18B20_20170524-9222.JPG)  
*Above two: The IR sensor has a field of view of 90°, so it must be held close to an object so the temperature of nearby objects does not influence the reading. I added a shield made of styrofoam to narrow the field of view.*  
.  

[![StyroTemps.JPG](https://publiclab.org/system/images/photos/000/020/560/large/StyroTemps.JPG)](https://publiclab.org/system/images/photos/000/020/560/original/StyroTemps.JPG)  
*Above: With the styrofoam shield surrounding the IR sensor, the temperature readings of the water surface (red) were higher than the submerged probe readings (blue). I guess the styrofoam has enough thermal mass that its temperature influenced the readings. So that's no good.*  
.  

[![IR_20170525-9379.JPG](https://publiclab.org/system/images/photos/000/020/561/medium/IR_20170525-9379.JPG)](https://publiclab.org/system/images/photos/000/020/561/original/IR_20170525-9379.JPG)[![IR_20170525-9371.JPG](https://publiclab.org/system/images/photos/000/020/562/medium/IR_20170525-9371.JPG)](https://publiclab.org/system/images/photos/000/020/562/original/IR_20170525-9371.JPG)[![IR_20170525-9373.JPG](https://publiclab.org/system/images/photos/000/020/563/medium/IR_20170525-9373.JPG)](https://publiclab.org/system/images/photos/000/020/563/original/IR_20170525-9373.JPG)  
*Above three: I tried a shield made of aluminum foil around the IR sensor. Aluminum foil does not have much thermal mass (you can touch it when it comes out of a hot oven). The foil is also reflective, so the thermal infrared rays from the water could reflect off the inside surface of the shield toward the sensor.*  
.  

[![foilTemps.JPG](https://publiclab.org/system/images/photos/000/020/564/large/foilTemps.JPG)](https://publiclab.org/system/images/photos/000/020/564/original/foilTemps.JPG)  
*Above: The IR sensor shielded with aluminum foil produced temperature results for the water surface close to those of the submerged sensor. The IR results were about 1°C higher than the submerged results.*  
.  

The infrared sensor has great potential for producing temperature results without being in contact with the object of interest. If the object fills the field of view of the sensor (90°), the accuracy of the IR sensor seems to be similar to a contact sensor. 

The wide field of view of the sensor could make it tricky to eliminate temperature influences of nearby objects or surfaces. A shield made from thin, shiny material (e.g., aluminum foil) has the potential to narrow the field of view of the sensor.

Narrowing the field of view could make it easier to collect useful data. For example, walking along a stream or river in search of discharges of warmer water from human infrastructure would benefit from being able to aim the sensor more precisely. An aluminum foil shield could serve this purpose.

**Parts list for this logger unit** (for components ordered from China on eBay)

 Arduino Nano---------------------$3.00  (can require soldering the headers)  
Logging shield--------------------$4.00  
LCD display----------------------- $2.00  
I2C converter for LCD---------- $1.00  (requires soldering)  
Battery case-----------------------$2.00  
4GB µSD card--------------------$5.00  
Coin cell battery------------------$0.30  
I2C hub----------------------------$0.00  (DIY, requires soldering)  
GY-90615-------------------------$5.00  (requires soldering header)  
DS18B20--------------------------$2.00  (requires soldering  a resistor)  
11 Dupont wires------------------$0.40    
**Total**------------------------------ **$24.70**   
.  


A kit with all the parts to make the [Nano Data Logger is available here for $29.00](http://kaptery.com/product/nano-logger-kit), and all the soldering has been done and a program is loaded so the logger can be snapped together, powered on, and it will start to save data. The [LCD and thermal IR sensor are also available here](http://kaptery.com/product/addon-sensors-etc). 
 
Here is the Arduino sketch I used with the two sensor logger unit: 
<a href="https://publiclab.org/system/images/photos/000/020/565/original/Deek_MLX90615_DS18B20.txt"><i class="fa fa-file"></i> Deek_MLX90615_DS18B20.txt</a>

























