---
nid: 18142
title: RV SensorShip V 
path: public/static/notes/cfastie/01-18-2019/rv-sensorship-v.md
uid: 554
tagnames: arduino,sensors,blog,wi-fi,hardware,data-logging,bme280,tsl2561,activity:data-logging,mma8451,vl53lox,esp8266,blynk,iot,data-monitoring,mlx90615
---

# RV SensorShip V 

The [original SensorShip](https://publiclab.org/notes/cfastie/01-10-2019/what-would-you-do-with-sensorship) had four environmental sensors and it was hard to cram all the wiring into the sailboat I printed for it. I was also concerned that a sailboat is not a ship. I also wanted a SensorShip with more sensors. So I searched Thingiverse for a more appropriate vessel. 


[![8266_20190102-4437.JPG](/i/28931)](/i/28931)  
*Figure 1. An ESP8266 board and the bi- and trifurcating wiring harness for five I²C sensors (each sensor gets connected to the same four pins on the board). Plus three LEDs and a piezo buzzer. I’m going to need a bigger boat.*

I quickly found [Peter Sripol’s Utility Ship](https://www.thingiverse.com/thing:2192118) and the easier to print ["make" of it by 08stanis](https://www.thingiverse.com/thing:2700107). I immediately liked this ship because I had just reread Steinbeck’s *The Log from the Sea of Cortez* and the model reminded me of the *Western Flyer*. 


[![080213TB_Steinbeck.jpg](/i/28932)](/i/28932)  
*Figure 2. The Western Flyer was built in 1937 and spent six weeks in 1940 in the Sea of Cortez with John Steinbeck and Ed Ricketts aboard. She had a long, hard life and was recently lifted off the harbor bottom and brought onto the hard.*


[![WestFly.JPG](/i/28933)](/i/28933)  
*Figure 3. The Western Flyer is being restored in Port Townsend, WA and will be used as a floating classroom and memorial to the poorly-formed ideas of Steinbeck and Ricketts about ecology and politics. [Learn more here.](http://westernflyer.org/)*


The new model is not really a ship, but it is a bigger boat and is designed to be easy to open to install stuff inside. It is intended for printing about two feet long, but it works well when printed 7.5 inches long.


[![8266_20190102-4440.JPG](/i/28934)](/i/28934)  
*Figure 4. The new RV SensorShip V is easy to print in 15 pieces and fun to glue together especially if assembling model boats is one of your favorite things to do. I used superglue.*


[![8266_20190104-4514.JPG](/i/28935)](/i/28935)  
*Figure 5. The entire deck of RV SensorShip V can be used like a lid so it’s easy to install important stuff inside.*


[![8266_20190102-4458.JPG](/i/28936)](/i/28936)  
*Figure 6. RV SensorShip V has five I²C sensors. Clockwise from upper left: BME280 (temperature, humidity, pressure), MLX90615 (thermal IR), VL53LOX (laser rangefinder), TSL2561 (light level), and MMA8451 (3 axis accelerometer). The paperclip on the left is for scale.*


[![8266_20190104-4542.JPG](/i/28937)](/i/28937)  
*Figure 7. Two sensors are mounted on the stern deck of RV SensorShip V so they can be directed together at areas of interest. The laser rangefinder (right) and thermal IR (left) sensors are both directional.*


[![Screenshot_(Jan_5__2019_11_44_57_PM).png](/i/28938)](/i/28938)  
*Figure 8. Screen capture from the Blynk app of three hours of the data records from three of the five sensors on RV SensorShip V. The ship was next to my 3D printer when a 30-minute print was running. The laser rangefinder and thermal IR sensors were pointed toward the print head.*

SensorShips incorporate ESP8266 microcontroller boards with integrated Wi-Fi. Data from the sensors are sent via Wi-Fi to the internet. This SensorShip sends its data to a Blynk server and the data can be viewed on a mobile device in real time.

A new feature of this SensorShip is the pair of directional sensors on the stern deck. I oriented the ship so these sensors were pointed near the print head while a short 3D print was made. Both of these sensors and also the accelerometer captured a clear record of when the 3D printer was operating (Figure 8). 

This past weekend there were three days in a row with nighttime temperatures near 0°F. I have been heating my house with a woodstove this winter and was concerned that the cold snap might freeze pipes in the basement. I placed RV SensorShip V in the crawlspace where the most vulnerable pipes are. Fortunately we had some snow before the weekend, so I was able to bank the foundation with snow to provide some insulation.


[![banked.jpg](/i/28939)](/i/28939)  
*Figure 9. I banked snow around the entire house before the cold weekend.*

[![ShedRoomCellarPix.jpg](/i/28940)](/i/28940)  
*Figure 10. Temperature results from three different SensorShips for a week including a very cold weekend. RV SensorShip V (bottom) had its directional sensors pointed at the most vulnerable pipes in the crawlspace. The rangefinder was well positioned to detect raccoons. On Tuesday the 15th (dashed line) I surrendered and started using the oil furnace in addition to the woodstove. This figure is made from three screen captures from the Blynk app which were combined and annotated in Photoshop.*

The basement low temperature dropped about one degree F for each of the cold nights finally dropping into the 30s F. I thought I had weathered the weather, but more cold nights were forecast, and in a few days the daytime high is forecast to be not much above 0°F. The woodstove would have a difficult time counteracting such temperatures, and provides almost no heat to the basement, so I ordered more heating oil for the furnace (which is in the basement). 

I ran the furnace four times (Figure 10) in the first three days after the delivery (I had been out of oil since April). I learned that in order to raise the temperature on the first floor of the house into the 60s F, the temperature in the basement has to be warmed into the 50s F. That’s one reason I don’t like to use the furnace, but I think I will be very thankful for it over the next several days when the four-day average temperature will be very close to 0°F.

All three of the SensorShips use an ESP8266 board and connect to the internet via the integrated Wi-Fi. So SensorShips must remain in the range of my home Wi-Fi signal. I was pleased that RV SensorShip V had no problem connecting from the basement, even though the Wi-Fi router is on the second floor at the other end of the house. 

All of the SensorShips are powered by 5V phone chargers plugged into the wall. They would last only a couple of days if powered by batteries because everything is powered continuously. I have not yet figured out how to sleep the ESP8266 boards or to use a low power external timer with them (my first attempt to use a timer failed). Let me know if you know a trick for using these boards with a TPL5110 timer.