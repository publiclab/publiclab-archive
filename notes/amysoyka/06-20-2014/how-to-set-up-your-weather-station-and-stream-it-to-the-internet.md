---
title: "How to set up your weather station and stream it to the internet."\ntagnames: 'raspberry-pi, air-quality, data-collection, data, weather, rasperry, pi, weather-station, raspbian, collection, meteorological, activity:weather, activity:wind, first-time-poster'
author: amysoyka
path: /notes/amysoyka/06-20-2014/how-to-set-up-your-weather-station-and-stream-it-to-the-internet.md
nid: 10595
uid: 422627

---

![](https://publiclab.org/public/system/images/photos/000/004/906/original/weatherstation.jpg)

# How to set up your weather station and stream it to the internet.

by [amysoyka](../profile/amysoyka) | June 20, 2014 13:40

June 20, 2014 13:40 | Tags: [raspberry-pi](../tag/raspberry-pi), [air-quality](../tag/air-quality), [data-collection](../tag/data-collection), [data](../tag/data), [weather](../tag/weather), [rasperry](../tag/rasperry), [pi](../tag/pi), [weather-station](../tag/weather-station), [raspbian](../tag/raspbian), [collection](../tag/collection), [meteorological](../tag/meteorological), [activity:weather](../tag/activity:weather), [activity:wind](../tag/activity:wind), [first-time-poster](../tag/first-time-poster)

----

By Amy & Adam Darbyshire.

#You will need the following:#
##Hardware##

*A Weather Station (FineOffsetUSB).
*A Rasperry Pi (Rasbian Distribution).
*An Internet Connection.

##Software##

*Rasbian Distribution (http://www.raspbian.org/).
*Weewx (http://www.weewx.com/)

##Websites##

*An account with Weather Underground (http://weatherunderground.com/).

#Steps#
##Step 1: Setting Up.##

Install Rasbian Distribution onto the SD card of your Rasperry Pi.
Switch on your Rasperry Pi, ensuring it has internet connection.
In Rasbian, load the Console application from the main menu.
Type the following command:
*sudo apt-get install weewx*
Press enter & follow the prompts.

##Step 2:##

After WeeWX has installed successfully type the following command:
*nano /etc/weewx/weewx.cfg*
Then press enter.
This will open up a txt editor containing your configuration file.
This file is very well documented & you have to uncomment the settings that you need. You can do this by removing the # symbol in-front of the setting you want in place.
When you have finished selecting the settings that you need, use *ctrl + x* to quit. A prompt should appear, push *y* to save your file.

##Step 3:##

Type the following command:
service weewx restart

##Step 4:##

Step away for 5 minutes & make yourself a warm beverage.
If weewx restarted successfully you first results should appear after 5 minutes.

##Step 5:##

Open your Pi's internet browser.
Goto http://127.0.0.1/weewx
This is the localhost URI for your weather stations results.

#Additional Notes:#

###Note 1: For you to be able to steam to weather underground then all you need is to sign up with an account & alter the settings mentioned in step 2 accordingly.###

###Note 2: If you want to be able to access your weather station remotely then you will need to lookup your pi's ip address on your local network. Then open a port on your router & direct it to your pi's ip address. The URI you then use will be something that looks like this:
http://your.pi's.ip.address:port/weewx###

Edit: Screenshot composition added as per request in the comments.