---
nid: 15242
title: Yule logging
path: public/static/notes/cfastie/11-27-2017/yule-logging.md
uid: 554
tagnames: arduino,sensors,datalogger,data-logging,arduino-nano,nano-data-logger,16x2_lcd,bme280,gy90615,activity:nano-data-logger,thermal-infrared,gy90614,series:woodstove-control
---

# Yule logging

I heat my house in Vermont with a woodstove. There is an oil furnace which I use on really cold days or when I am away and can't feed the stove, but the woodstove supplies about 90% of the heat. I use three or four cords of wood every year, and I buy heating oil once every four years.

[![AvalonA.jpg](https://publiclab.org/system/images/photos/000/022/606/large/AvalonA.jpg)](https://publiclab.org/system/images/photos/000/022/606/original/AvalonA.jpg)  
_Above: This is a cutaway diagram of my woodstove. All the numbered details are intended to make you think this is the most clever, high tech, efficient woodstove in the world but, incredibly, there is no useful information there about how the stove works. So I added the red and blue arrows and text. That's all you need to know right now._

The stove is inset into a fireplace, so its integrated fan is critical to disperse the heat. The fan has a thermal switch so it is on only when the stove is hot. But the switch reads the temperature under the firebox where fire bricks and accumulated ash variably obscure the firebox temperature. The switch does not last very long and costs $25 to replace. The second one I bought stopped working 15 years ago so I just turn the fan on and off manually. I have been thinking about making a thermal switch with an Arduino for several years.

[![StoveRelay_20171122-1734.JPG](https://publiclab.org/system/images/photos/000/022/607/medium/StoveRelay_20171122-1734.JPG)](https://publiclab.org/system/images/photos/000/022/607/original/StoveRelay_20171122-1734.JPG)  
_Above: This is the OEM thermal switch. It is placed in contact with the iron bottom of the stove and fails after a couple of years. I have refused to buy a third one for 15 years._

To avoid the problem that a thermal switch must be in contact with the hot stove, my plan was to use an infrared sensor which can be several inches away from the hot stove. Infrared temperature sensors are common hobbyist components and cost about $5\. I [tried one last spring with a Nano Data Logger](https://publiclab.org/notes/cfastie/05-26-2017/portable-thermal-ir-temperature-logger-unit) and it was easy to use.

[![StoveRelay_20171122-1700PS.jpg](https://publiclab.org/system/images/photos/000/022/608/medium/StoveRelay_20171122-1700PS.jpg)](https://publiclab.org/system/images/photos/000/022/608/original/StoveRelay_20171122-1700PS.jpg)  
_Above: Two I2C breakout boards with non-contact infrared temperature sensors. On the left is a Melexis MLX90615 infrared sensor (range -40 to 115°C). On the right is a Melexis MLX90614 sensor (range -70 to 380°C). The MLX90614 is available in either 3.3 volt or 5 volt versions. The breakout board I am using has the 3.3 volt MLX90614ESF-BAA-000-TU-ND._

These sensors have a very wide field of view (90°). To capture an accurate temperature of the woodstove the sensor would have to be close enough (about 12 inches) so only radiation from the stove reached it. My woodstove is tucked into a fireplace and I can't install the sensor in front of it, so my best option is to put the sensor closer and point it at a corner of the stove. The sensor will "see" things that are not the stove and the temperature readings will be lower than the stove but I hope to get a good enough "stove temperature index" to work with.

[![Fever-Measurement-Melexis.jpg](https://publiclab.org/system/images/photos/000/022/609/medium/Fever-Measurement-Melexis.jpg)](https://publiclab.org/system/images/photos/000/022/609/original/Fever-Measurement-Melexis.jpg)  
_Above: This type of thermal infrared sensor is used in the non-contact thermometers which are responsible for our kids not knowing how to hold the glass thermometer under their tongues. This photo is on the Melexis web site and I thought for a minute that maybe babies came with remote controls these days which would certainly be a wonderful advance. The version of this photo at the Melexis site has the digits photoshopped to be "98.6" so viewers would not be concerned that the poor kid was in hypothermic shock._

A sensor is not a switch, so I also needed a relay which will turn the fan on when the Arduino tells it to. While I was shopping for a relay, I set up a [Nano Data Logger](https://publiclab.org/tag/nano-data-logger) to see what kind of information the IR sensor could capture from the stove.

[![StoveRelay_20171119-1624-3.JPG](https://publiclab.org/system/images/photos/000/022/610/medium/StoveRelay_20171119-1624-3.JPG)](https://publiclab.org/system/images/photos/000/022/610/original/StoveRelay_20171119-1624-3.JPG)  
_Above: The woodstove inset into a fireplace. Below the glass door is a fan unit with two squirrel cage fans which blow room air all the way around the firebox and out again above the door. The fans do not interact with the airflow into the firebox. To the left is a [Nano Data Logger](https://publiclab.org/tag/nano-data-logger)._

[![IMG_20171117_111221422.JPG](https://publiclab.org/system/images/photos/000/022/611/large/IMG_20171117_111221422.JPG)](https://publiclab.org/system/images/photos/000/022/611/original/IMG_20171117_111221422.JPG)  
_Above: A [Nano Data Logger](https://publiclab.org/tag/nano-data-logger) with LCD display. The logging shield has a real time clock and a microSD card so I can record data every five minutes and also monitor the stove temperature in real time. The Nano is powered with 5 volts from a phone charger (with mini USB instead of micro USB)._

[![StoveRelay_20171120-1673PS.jpg](https://publiclab.org/system/images/photos/000/022/612/medium/StoveRelay_20171120-1673PS.jpg)](https://publiclab.org/system/images/photos/000/022/612/original/StoveRelay_20171120-1673PS.jpg)  
_Above: A little I2C hub connects three I2C devices: LCD display, IR sensor, and BME280 sensor (left) for room temperature and humidity. The IR sensor is hidden by the black bracket which holds it pointed at the corner of the woodstove._

[![IMG_20171122_134718746.jpg](https://publiclab.org/system/images/photos/000/022/613/large/IMG_20171122_134718746.jpg)](https://publiclab.org/system/images/photos/000/022/613/original/IMG_20171122_134718746.jpg)  
_Above: The IR sensor is taped to the bracket pointed at the woodstove. The bracket helps shield the sensor from things that are not the woodstove. The bracket is made from an empty spool for PLA filament._

[![3days915.PNG](https://publiclab.org/system/images/photos/000/022/614/large/3days915.PNG)](https://publiclab.org/system/images/photos/000/022/614/original/3days915.PNG)  
_Above: Results from three days of logging with the low range sensor (MLX90615). The highest temperature this sensor will record is 121.09°C so the high peaks are truncated. The X axis begins and ends at midnight. During these days I loaded the woodstove after midnight and did not add more wood until mid-morning. It looks like I was generally adding wood four times a day (when the temperature starts to climb rapidly from a low point). The Melexis sensor reports the temperature of the sensor itself (orange trace) in addition to the temperature of the IR radiation impacting it (red trace). During this testing phase, I was sometimes adjusting things to see how the results responded, so the data above have some weird patterns that require cautious interpretation._

The common infrared sensors on eBay have a temperature range (-40 to 115°C) that might be too low for a woodstove that can reach a firebox temperature of 500°C (930°F). Fortunately I don't need to know the temperature of the firebox to know when to turn on the fan, I just need to know that the stove is really hot. So the lower temperature range would work quite well for this project. But I decided to try to capture more of the thermal range of the stove and bought a more expensive ($10.00) sensor with a temperature range of -70 to 380°C.

[![3days914.PNG](https://publiclab.org/system/images/photos/000/022/615/large/3days914.PNG)](https://publiclab.org/system/images/photos/000/022/615/original/3days914.PNG)  
_Above: Results from three days with the high range sensor (MLX90614). This sensor is calibrated to 380°C so the peaks are not truncated. The X axis begins and ends at midnight. The first of these three days is Thanksgiving when I was not around all day to tend the woodstove. Instead of loading wood in the morning, I stirred the ashes several times to mix air into them and encourage combustion of the unburned charcoal. When I returned at about 9:00 PM, I cleaned out the warm ashes and restarted the fire. On Friday and Saturday I added wood to the stove about four times each day as usual._

This will be the 20th winter that I have heated this house with this woodstove, so I didn't think there was anything else to learn about the process. These preliminary results suggest that I don't know as much as I thought I did. It's revealing to see exactly how much the stove temperature oscillates (that has to be hard on the old stove). I never thought about how often I add wood to the stove, but the answer appears to be four. This data logging system also creates the possibility of doing discrete experiments. I could compare the thermal response of loading the stove with hop hornbeam versus basswood (hop hornbeam has twice the BTUs of basswood).

Based on these data, I think I want the fan to turn off when the temperature drops to about 70°C. That will turn the fan off for about four or five hours every night. I was planning on buying a relay for $2.00 to connect to the Nano Data Logger, but then I found that there is an Adafruit FeatherWing with a relay suitable for 220 volts AC. It costs $10, but I already have a Feather and that route saves me the effort of learning how relays work. I sort of have this working (you can see its effect in the second graph above) although it sometimes refuses to flip the switch. I'll let you know if I get it debugged.

[Here is the sketch running on the Nano Data Logger.]( https://publiclab.org/system/images/photos/000/022/616/original/StoveIRnano914.txt) 