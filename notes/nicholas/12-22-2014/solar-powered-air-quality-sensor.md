---
title: Solar Powered Air Quality Sensor
tagnames: air-quality, cellular, dustduino, dust-monitoring, solar, gsm, shinyei, activity:dustduino, activity:pm, activity:arduino, replication:9818, activity:pm-monitoring, activity:dust, activity:sensors, activity:air-quality, activity:data-logging-power, air-sensors
author: nicholas
path: /notes/nicholas/12-22-2014/solar-powered-air-quality-sensor.md
nid: 11492
uid: 53894

---

![](https://publiclab.org/public/system/images/photos/000/008/520/original/Screen_Shot_2014-12-22_at_1.38.26_PM.png)

# Solar Powered Air Quality Sensor

by [nicholas](../profile/nicholas) December 22, 2014 18:44

December 22, 2014 18:44 | Tags: [air-quality](../tag/air-quality), [cellular](../tag/cellular), [dustduino](../tag/dustduino), [dust-monitoring](../tag/dust-monitoring), [solar](../tag/solar), [gsm](../tag/gsm), [shinyei](../tag/shinyei), [activity:dustduino](../tag/activity:dustduino), [activity:pm](../tag/activity:pm), [activity:arduino](../tag/activity:arduino), [replication:9818](../tag/replication:9818), [activity:pm-monitoring](../tag/activity:pm-monitoring), [activity:dust](../tag/activity:dust), [activity:sensors](../tag/activity:sensors), [activity:air-quality](../tag/activity:air-quality), [activity:data-logging-power](../tag/activity:data-logging-power), [air-sensors](../tag/air-sensors)

----

###What I want to do
Recently I've been working with sending data back and forth over cellular networks using the Arduino GSM module.  The ability to send text messages, transmit data and connect to websites over a cellular network has created a great opportunity for collecting sensor data and sending it directly to the web.  After reading about the [Dustuino project](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino), I wanted to take it a step further and combine the air quality sensor with a GSM network.  This would allow a more 'stand alone' capability to monitoring air quality.  

In order to round out the project, making the project solar powered was a must which would allow for long-term monitoring.  Collaborating with Voltaic to implement the solar powered component, we were able to launch and test the prototype.  Below is an overview 'how-to' on connecting the air quality sensor to an Arduino module and sending data to Xively.  Voltaic also posted a how-to on building the weather-proof housing and a more detailed overview of incorporating the solar panel on [their blog](http://www.voltaicsystems.com/blog/).

###Overview
This tutorial covers the fundamentals of deploying a solar powered air quality monitor using the cellular network. Though we are using a dust particle sensor to measure air quality, the same setup could easily be modified for other sensors including tempurature/humidity sensors, gas sensors and water quality sensors. This setup also uses the Xively platform which allows for real-time data streams to be displayed on the web. To begin, you will need:

- Arduino Uno
- Arduino GSM Shield
- Active SIM Card (AT&T or T-Mobile)
- [Dust Particle Sensor](http://www.seeedstudio.com/depot/Grove-Dust-Sensor-p-1050.html)
- Xively Account
- Voltaic Solar Kit
- [Aruino Code](https://github.com/nejohnson2/air_quality)

The Arduino GSM shield is a powerful module that enables connection to the cellular network. Using this shield, we can make phone calls, send text messages and even access web pages. All of this functionality relies on an active SIM card from any GSM carrier. We are using T-Mobile for our example.

<img src="https://farm6.staticflickr.com/5572/15223608562_c14b0e1a5a.jpg" width="500" height="346" alt="_MG_5727">

The Dust Particle Sensor from Groove uses a small LED to detect the number of particles passing through the housing. To incorporate the sensor into the Arduino GSM shield, connect the black wire to the Arduino's GND pin, the red wire to 5v and the yellow wire to pin 8. The sensor ships with a connector which we simple cut off and soldered header pins onto the wires individually.

<img src="https://farm6.staticflickr.com/5561/15223985955_2d4d0940f5.jpg" width="500" height="387" alt="_MG_5531">

<img src="https://farm6.staticflickr.com/5588/15037415397_d239579ed3.jpg" width="500" height="324" alt="_MG_5530">

Following the hardware setup, we will need to setup a Xively account in order to display our data on the web. You can sign up for a Xively account [here](https://xively.com/signup).  After signing up for an account, click on "Add Device" which will setup your new data stream. Also, keep track of your 'Feed ID' and 'API Key' which will be needed in the Arduino code.

The Arduino code for this tutorial uses Xively's API to automatically set three streams of data for each PUT request which should automatically populate in your Xivly feed. These streams are the concentration(con) of particles, the ratio(ratio) of the particles to air and the low pulse occupancy(lpo) which is the raw data from the sensor. Each of these data points are sent in the content of the PUT request and should appear as three separate streams of data. 

The final stage in this tutorial is implementing the Arduino code to connect both to your Xively account as well as your cellular network. All of the code can be found [here](https://github.com/nejohnson2/air_quality). To begin, open the code in the Arduino IDE and modify the 'credentials.h' file to include your Xively API key, the 'Feed ID' and the name of the module(Xively User Agent). Then modify the 'air_quality.ino' file to change the GPRS_APN to match you carrier. For T-Mobile the GPRS_APN is "epc.tmobile.com" and for AT&T the GPRS_APN is "wap.cingular".

<img src="https://farm6.staticflickr.com/5577/15220981241_f289578a68.jpg" width="600" alt="con-graph">

The final piece to modify is the frequency that data is sent to Xively. This can be change by modifying the postingInterval variable which is set in milliseconds. Setting this will dramatically affect the battery life.

Once the sensor and all of the code are in place, you can connect the Arduino module to the voltaic v39's USB port labeled 'Tablets'.  This port supplies 2000mA which is needed in order to power the GSM module.  The GSM module has a power consumption spike initally while it is connecting to a network and during data transmission.  As such, it is important to consider the frequency of data transmission as it has a direct impact on the power consumption from the battery.  The code is initialized to send data every 30s. 

[View the Xively feed](https://xively.com/feeds/195396285)

###Questions and next steps
Voltaic has posted a more in-depth how-to on building a weather-proof housing unit for the device and a technical overview of the solar panel requirements on [their blog](http://www.voltaicsystems.com/blog/).  They've also posted their results from testing the device throughout the city.  I hope other people give this a try and can improve/modify to make it more effective.  Ultimately, it would be great to deploy these throughout the city and let in order create a long-term data stream on air quality.  

<img src="http://www.voltaicsystems.com/blog/wp-content/uploads/2014/12/case1.jpg" width="500">