---
nid: 15288
title: Putting sensor data to work
path: public/static/notes/cfastie/12-03-2017/putting-sensor-data-to-work.md
uid: 554
tagnames: arduino,temperature,datalogger,barnstar:photo-documentation,data-logging,activity:data-logging,feather,thermal-infrared,gy90614,relay,activity:feather,series:woodstove-control
---

# Putting sensor data to work

I have been using a [Nano Data Logger](https://publiclab.org/tag/nano-data-logger) to [monitor the temperature of my woodstove](https://publiclab.org/notes/cfastie/11-27-2017/yule-logging) for a couple of weeks. My goal is not just monitoring but using the temperature sensor to turn the stove's fan on and off to get the most heat out of the stove without wasting electricity. Instead of using the Nano Logger for this, I tried an [Adafruit Feather](https://www.adafruit.com/feather) for the first time. The [Feather ecosystem has lots of options for data logging](https://publiclab.org/notes/cfastie/11-14-2017/adafruit-feathers-for-datalogging), and also has some FeatherWings with relays--switches which can be operated by an electrical signal.

[![Feather_20171111-1504.JPG](https://publiclab.org/system/images/photos/000/022/730/medium/Feather_20171111-1504.JPG)](https://publiclab.org/system/images/photos/000/022/730/original/Feather_20171111-1504.JPG)  
_Figure 1: The [Power Relay FeatherWing](https://www.adafruit.com/product/3191). A signal from a Feather (or any microcontroller) can flip a switch to power a small household appliance._

My plan was to use a bare bones Feather and the Power Relay FeatherWing, plus an infrared sensor. But that is not a datalogger, and capturing the woodstove's temperature for a week with the Nano Logger convinced me that I should add a microSD card. Why not save all that fascinating data streaming from the sensor?

[![Feather_20171112-1618.JPG](https://publiclab.org/system/images/photos/000/022/731/medium/Feather_20171112-1618.JPG)](https://publiclab.org/system/images/photos/000/022/731/original/Feather_20171112-1618.JPG)  
_Figure 2\. A thermal switch made from a [Feather 32u4 Basic Proto](https://www.adafruit.com/product/2771) (lower), a Power Relay FeatherWing (upper), and a GY-90615 infrared sensor (upper left). But none of the data are saved. Bad Feather._

There are a few options to make this thermal switch save all the data. There are Feathers and FeatherWings with microSD sockets on them. There are also FeatherWings with both a microSD socket and a real time clock.

[![stove_20171202-1811.JPG](https://publiclab.org/system/images/photos/000/022/732/large/stove_20171202-1811.JPG)](https://publiclab.org/system/images/photos/000/022/732/original/stove_20171202-1811.JPG)  
_Figure 3\. One of several ways to build a data logging switch using Feather things. The lower PCB is a [Feather M0 Adalogger](https://www.adafruit.com/product/2796) with integrated microSD socket. On top of that is a [DS3231 Precision RTC FeatherWing](https://www.adafruit.com/product/3028). On top of that is a Power Relay FeatherWing. This is $48 sandwich of Feather stuff. I have not tried this yet but it should log temperature data to microSD card with precise time stamps and also control a fan. Good Feather._

My solution was to just connect a $1.00 MicroSD breakout board to the basic Feather and Power Relay FeatherWing. There was no real time clock, but I didn't think I needed great time precision. I added some code to the sketch to count seconds which I used as a timestamp for each logging event. I also wrote down the actual time when I turned it on. This is fine, but it's a bit of a pain compared to having a clock that always knows what time it is. I decided it's really worthwhile adding a real time clock to this sort of thing.

[![StoveRelay_20171122-1717.JPG](https://publiclab.org/system/images/photos/000/022/733/medium/StoveRelay_20171122-1717.JPG)](https://publiclab.org/system/images/photos/000/022/733/original/StoveRelay_20171122-1717.JPG)  
_Figure 4\. My hybrid data-logging Feather switch. A Power Relay FeatherWing is plugged into a Feather 32u4 Basic Proto. A little microSD socket (upper left) is wired to the Feather._

[![StoveRelay_20171122-1707.JPG](https://publiclab.org/system/images/photos/000/022/757/medium/StoveRelay_20171122-1707.JPG)](https://publiclab.org/system/images/photos/000/022/757/original/StoveRelay_20171122-1707.JPG)  
_Figure 5\. I did not use stacking headers on the Feather (they make it all spidery and big). Instead I used the prototyping area on the Feather to painstakingly build an I2C hub (for sensors, etc) and SPI headers to connect the microSD board._

To connect the fan on the woodstove, I procured a damaged household extension cord and cut it in half. One end was connected to the relay on the FeatherWing. This creates a special type of danger because Arduinos generally do not have enough current to harm you, but this FeatherWing is going to have actual 110 volts AC current flowing through it. So I used hot glue and electrical tape to cover all the critical solder points and the screws on the terminal block.

[![StoveRelay_20171122-1690.JPG](https://publiclab.org/system/images/photos/000/022/735/medium/StoveRelay_20171122-1690.JPG)](https://publiclab.org/system/images/photos/000/022/735/original/StoveRelay_20171122-1690.JPG)  
_Figure 6\. The Power Relay FeatherWing with cord to the 110 volt fan on the stove. All the exposed 110 volt contacts are well protected with hot glue or tape._

[![stove_20171130-1797.JPG](https://publiclab.org/system/images/photos/000/022/736/medium/stove_20171130-1797.JPG)](https://publiclab.org/system/images/photos/000/022/736/original/stove_20171130-1797.JPG)  
_Figure 7\. The hot half of the extension cord connects to the woodstove fan (right) and has the female connector. The other half connects to the relay which has been insulated and is also inside a 3D printed box (yellow, upper left). The extension cord can be unplugged whenever the box is opened. Safety first. The fan blows room air through ducting inside the stove but outside the firebox ([details](https://publiclab.org/notes/cfastie/11-27-2017/yule-logging))._

The wide angle field of view of the thermal infrared sensors (90°) presents a problem. My woodstove is tucked into a fireplace so it's hard to find a place for the sensor that allows it to "see" only the woodstove and not be so close that it melts. Like most visible light, thermal infrared radiation is strongly reflected from metal surfaces. So an aluminum tube could shield the sensor from everything that is not the woodstove and also reflect some woodstove heat to the sensor.

[![b9dac1cf645bf06cc8a57243725c7956.gif](https://publiclab.org/system/images/photos/000/022/741/medium/b9dac1cf645bf06cc8a57243725c7956.gif)](https://publiclab.org/system/images/photos/000/022/741/original/b9dac1cf645bf06cc8a57243725c7956.gif)  
_Figure 8\. Aluminum, gold, and silver are good reflectors of thermal infrared radiation. I don't know the range of sensitivity of the Melexis sensors, but __thermal infrared spans__3 to 15 µm, and all of that is strongly reflected._

[![stove_20171130-1752.JPG](https://publiclab.org/system/images/photos/000/022/739/medium/stove_20171130-1752.JPG)](https://publiclab.org/system/images/photos/000/022/739/original/stove_20171130-1752.JPG)  
_Figure 9\. Among the many packaged beverages brought to LEAFFEST was a tall boy of craft beer. With the top, bottom, and beer removed, this made a handsome shield for the infrared sensor. Thank you LEAFFEST person._

[![stove_20171130-1783.JPG](https://publiclab.org/system/images/photos/000/022/742/medium/stove_20171130-1783.JPG)](https://publiclab.org/system/images/photos/000/022/742/original/stove_20171130-1783.JPG)  
_Figure 10\. Two Melexis 90614 infrared sensors inside the internally thermally-reflective tall boy shield. The Nano Logger and Feather logger were both collecting data from their own sensor._

The reflective shield around the sensors makes it hard to interpret the temperature readings. A focused reflector could direct so much infrared radiation to the sensor that the temperature reading could be higher than the temperature of the object in view. But this reflector is not designed well for focusing. I think it's primary effect is to ensure that almost all of the thermal radiation reaching the sensor is from the woodstove. I don't know how close the sensor readings are to the actual temperature of the woodstove, but the results suggest that they are a good index of how hot the stove is.

[![5daygraph.PNG](https://publiclab.org/system/images/photos/000/022/743/large/5daygraph.PNG)](https://publiclab.org/system/images/photos/000/022/743/original/5daygraph.PNG)  
_Figure 11\. Five days of data from a GY-90614 (Melexis) infrared sensor and a BME280 air temperature sensor (Room temp, blue). The infrared sensor reports the infrared radiation impacting it (red) and also the temperature of the sensor (yellow). The infrared data were used to switch the woodstove fan on when the stove temperature reached 60°C and switch it off when the temperature dropped to 58°C (dashed green line). The state of the fan was included in each data logging event (green lines at top and bottom)._

[![2daygraph.PNG](https://publiclab.org/system/images/photos/000/022/744/large/2daygraph.PNG)](https://publiclab.org/system/images/photos/000/022/744/original/2daygraph.PNG)  
_Figure 12\. The first two days in Figure 11 (see above for description). A symbol indicates each time wood was added to the stove (1-3 logs). The fan was turned off when the stove temperature trace (red) declined across the 58°C line (dashed green)._

[I interpreted the data from the Nano Logger](https://publiclab.org/notes/cfastie/11-27-2017/yule-logging) to indicate that I loaded wood into the stove four times a day. That was wrong. During this period of data logging, I made a note whenever I put wood in the stove, and it happened more like 8 to 10 times per day (Figure 12).

As the stove was cooling, the sketch instructed the relay to turn off the fan when the sensed infrared "stove" temperature dropped to 58°C. Several minutes after the fan had turned off, the stove temperature began to rise as heat was no longer being blown away into the room. After 30 or 40 minutes, the stove continued to cool (Figure 12).

The temperature of the sensor itself (yellow) responds very differently to the fan turning off--it immediately drops about 10°C. This was puzzling at first (if the stove is warming, why is the sensor cooling?), but the simple observation in the video below solved the mystery. When the fan is on, turbulence pushes some stove-warmed air away from the stove and through the tall boy shield. When the fan turns off, hot air rising around the stove reverses the flow and pulls cooler room air through the tall boy toward the stove. I was wondering whether data from a regular temperature sensor, like the BME280, could drive the fan relay, but this result suggests that the infrared sensor provides a much more reliable indicator of stove temperature.
<iframe width="853" height="480" src="https://www.youtube.com/embed/Ir0CJ2Q0Mow?rel=0" frameborder="0" allowfullscreen=""></iframe>
. 

I plan to change the set point so the fan turns off when the temperature drops to 68° instead of 58°C. That will keep the firebox hotter (better combustion) and use less electricity.

The datalogging Feather infrared fan-switch will be a permanent fixture by the woodstove. But I am going to add a $1.00 real time clock to it. I have also become partial to the little LCD display on the Nano Logger. It has been good to learn about how the stove responds in real time. The 16x2 LCD displays I have don't work at 3 volts, so I have ordered some little 3 volt OLED displays which will work with Feathers and [Mini Pearl Loggers](https://publiclab.org/tag/mini-pearl-logger). I might have to enlarge the 3D printed box to accommodate the upgrades.

Here is the sketch running on the Feather 32u4:[\_\_ StoveIR32u4\_614.txt](https://publiclab.org/system/images/photos/000/022/745/original/StoveIR32u4_614.txt)