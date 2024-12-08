---
title: How to Monitor Indoor TVOC with Raspberry PI
tagnames: indoor-air-quality, vocs, raspberrypi, first-time-poster, iot, lat:22.543096, activity:indoor-air-quality, zoom:2, tvoc, lon:110.893802
author: Makepcb
path: /notes/Makepcb/07-12-2021/how-to-monitor-indoor-tvoc-with-raspberry-pi.md
nid: 27056
uid: 764776

---

# How to Monitor Indoor TVOC with Raspberry PI

by [Makepcb](../profile/Makepcb) July 12, 2021 02:17

July 12, 2021 02:17 | Tags: [indoor-air-quality](../tag/indoor-air-quality), [vocs](../tag/vocs), [raspberrypi](../tag/raspberrypi), [first-time-poster](../tag/first-time-poster), [iot](../tag/iot), [lat:22.543096](../tag/lat:22.543096), [activity:indoor-air-quality](../tag/activity:indoor-air-quality), [zoom:2](../tag/zoom:2), [tvoc](../tag/tvoc), [lon:110.893802](../tag/lon:110.893802)

Do you spend about 70 percent of your daily life indoor like me?

Do you pay attention to the air quality of the room? If the TVOC level is too high indoor, it will be bad for your health.

So, in this project, we will make an [indoor TVOC monitor with Raspberry Pi](https://www.makerfabs.cc/article/indoor-tvoc-monitor-with-raspberry-pi.html), with voice broadcast to remind us: Hey, time to open the window!![angry](https://app.haixiaobao.com/assets/ckeditor/plugins/smiley/images/angry_smile.png "angry")

### 1\. What is TVOC?

TVOC means Total Volatile Organic Compounds. Volatile organic compounds are organic chemicals that become a gas at room temperature. There are many kinds of VOCs and they can be at the same time present. Some VOCs are bad for the health, they will cause eye and nose irritation, shortness of breath, headaches, and so on. Higher concentrations may cause physical irritation even damage. Most people are not affected by short-term exposure to the low levels of VOCs found in homes. But for your health, it suggests avoiding exposure at high VOC levels.

VOC's come from many sources, even you can be a polluter! The Cleansers, disinfectants; Pesticides, air fresheners, construction materials, new furniture, and so on are the VOC sources. They may increase the indoor concentration of VOC's due to off-gassing that may cause serious threats to your well-being. To stayed the room at low levels, try to open the window frequently for changing the Air.

### 2\. How to Measure TVOC Value?

The VOCs are no color, no taste, and it required a specified sensor for measuring them. As the previous project showed, the SGP30 is an air quality sensor for measuring the VOC and eCO2\. Using the SGP30 senor is the best option that I have been familiar with it. To make SGP30 work, it is required to set up the I2C bus in the configuration.  
![SGP30-Sensor](https://v4-upload.goalsites.com/275/1625734732_SGP30-Sensor.jpg)![SGP30-Air-Quality-Sensor](https://v4-upload.goalsites.com/275/1625734610_SGP30-Air-Quality-Sensor.jpg)

### 3\. TVOC Monitor Based on Raspberry Pi

![TVOC-Monitor-With-Raspberry-Pi-Sketch](https://v4-upload.goalsites.com/275/1625734830_TVOC-Monitor-Sketch.jpg)  
I made a sketch for this project. For getting the TVOC reading, the SGP30 sensor was connected with raspberry Pi via I2C. For controlling and computing, I used the Raspberry platform instead of the single-chip that Raspberry has more strong computing ability. Besides, I had to prepare the speak and the audio coding part for voice reminders. The Raspberry Pi has to convert the text to audio what the speaker play. I also had to prepare an LCD to display the TVOC reading. I spent a long time looking for a platform that is suitable for this project.

[Raspberry Pi Embedded System Development Platform](https://www.makerfabs.cc/product/raspberry-pi-embedded-system-development-platform.html) is designed for designed by Makerfabs, it is based on Raspberry Pi Zero W to develop. The mainboard of the kit has a 3.2-inch SPI display with a touch for display something, and it has an audio coding part with WM8960 and a speaker for the audio output. Besides, the mainboard also provides many kinds of ports, such as UART, I2C, ADC, GPIO, that are very suitable for this embedded project. The kit also provides the SGP30 module that was no need to prepare the sensor again.  
![Raspberry-Pi-Embedded-System-Development-Platform](https://v4-upload.goalsites.com/275/1625734965_Raspberry-Pi-Embedded-System-Development-Platform.jpg)![Raspberry-Pi-Embedded-System-Development-Platform-Diagram](https://v4-upload.goalsites.com/275/1625734982_Raspberry-Pi-Embedded-System-Development-Platform-Diagram.jpg)  
I have an idea about displaying the TVOC measuring, that is showing the SGP30 reading history. The history of the SGP30 reading can help us to find the cause of the TVOC changing.

#### 3.1 Connect SGP30 with Raspberry Pi

Connect the SGP30 sensor with the I2C port of the main board via cable.  
![Connect-SGP30-Sensor-with-I2C-Port](https://v4-upload.goalsites.com/275/1625735112_Connect-SGP30-Sensor-with-I2C-Port.jpg)

#### 3.2 Program

The code is available and you can obtain it from [Github](http://github.com/Makerfabs/PI_Interface_Hat/tree/master/example/co2_check_demo).

1\. For working with the SGP30 sensor, Raspberry Pi Zero has to install the specified library for driving the SGP3O. Use the following command to install.

```
sudo pip3 install pimoroni-sgp30
sudo pip3 install smbus2
```

2\. Get the TVOC measuring.

```
sgp30 = SGP30()
result = sgp30.get_air_quality()

co2 = result.equivalent_co2
tvoc = result.total_voc
print("SGP30:")
print(co2)
print(tvoc)
```

3\. Display the historical values of the SGP30 on the LCD, these values would be composed of a historical line.  
4\. There is a function in [tts.py](http://tts.py) about TTS which converts the text to audio via the internet.

```
def request_tts(TEXT,Result_name):
```

#### 3.3 See the Result

Running the program, the TVOC reminder can work. Place it on the desk in the living room, kitchen or official. When you open the air freshener or cleanser that something will increase many VOCs, the TVOC reminder will remind you the TVOC is too high, and you have to open the window for changing the air. When the TVOC concentration is at a low level, the TVOC reminder also will remind you the level is normal.  
![Monitor-Indoor-TVOC-with-Raspberry-Pi](https://v4-upload.goalsites.com/275/1625735294_Monitor-Indoor-TVOC-with-Raspberry-Pi.jpg)