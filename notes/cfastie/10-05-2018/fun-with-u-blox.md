---
title: Fun with u-blox
tagnames: arduino, kite-aerial-photography, gps, ublox, skypod-gps-logger, activity:skypod-gps-logger
author: cfastie
path: /notes/cfastie/10-05-2018/fun-with-u-blox.md
nid: 17228
uid: 554

---

# Fun with u-blox

by [cfastie](../profile/cfastie) October 05, 2018 03:23

October 05, 2018 03:23 | Tags: [arduino](../tag/arduino), [kite-aerial-photography](../tag/kite-aerial-photography), [gps](../tag/gps), [ublox](../tag/ublox), [skypod-gps-logger](../tag/skypod-gps-logger), [activity:skypod-gps-logger](../tag/activity:skypod-gps-logger)

The [SkyPod GPS Logger](https://publiclab.org/tag/skypod-gps-logger) is designed to attach to a kite or balloon photography rig and log the GPS coordinates (longitude, latitude, altitude) every few seconds. These data can be graphed along with sensor data collected during the flight. For example, air temperature, humidity, barometric pressure, and wind speed data can be collected and related to location or time. [Here are some examples](https://publiclab.org/tag/skypod/author/cfastie).

[![skypodcu.jpg](/i/26794)](/i/26794)  
*Above: The heart of a [SkyPod GPS Logger](https://publiclab.org/tag/skypod-gps-logger) is the u-blox NEO 7m GPS module. The included GPS antenna sits atop the SkyPod (beige).*

The SkyPod GPS Logger includes a u-blox NEO 7m GPS module, a GPS antenna, an Arduino microcontroller to control it, and a microSD card module for saving the data. The Arduino Nano allows precise control over which data are saved, how they are formatted, and how often they are saved. The microcontroller can also read and save data from other sensors (included in the standard KAPtery kit). 

[![Crown265gif.gif](/i/26795)](/i/26795)  
*Above: A u-blox NEO 7m on a SkyPod GPS logger recorded the green trace during a two hour kite flight. The same length of kite line was out as I walked around and recorded my own GPS location with my phone (orange).*

The u-blox NEO 7m does not require an Arduino microcontroller. It can be connected directly to a computer and the data from the GPS satellites can be displayed or saved. U-blox is a large Swiss company with revenue in 2017 of 400 million Swiss francs. The company has developed software for Windows which allows customers to evaluate the u-blox GPS hardware. With this free software installed, a u-blox module can be connected using a UART adapter (the u-blox module does not have a USB port) and the copious data streaming from GPS satellites can be examined.

[![ublox_20181001-3874.JPG](/i/26796)](/i/26796)  
*Above: The u-blox NEO 7m GPS module and antenna on my windowsill. All of the photos and video here were made with the antenna in this position, so most of the sky was not "visible" to the antenna.*

The u-blox NEO 7m module can be purchased for about $20 (e.g., [Amazon](https://www.amazon.com/Eztronics-NEO-7M-Aircraft-Controller-Arduino/dp/B01HGG26WK/)) or less from eBay sellers in Asia. The u-blox software is called u-center. It is very easy to start streaming GPS data from the u-blox module and displaying it in u-center. By default the software auto-detects the module and most of the time just starts showing where the satellites are.

[![ublox_20181001-3870.JPG](/i/26797)](/i/26797)  
*Above: The u-blox module and antenna (right) connected to a UART adapter (red) which is connected to a USB port on my computer.*

U-center has many different displays of satellite data. A couple of them are live (animated) maps of where the satellites are in the sky. There is a world map of where the GPS module is (I already knew where it was). There is a closeup map of the live GPS coordinates of the module, and various live graphs of the data streaming from the satellites. Most of these displays have options for additional detail, for example you can display the orbits of the satellites as traces following the satellite icons (see lead image above).

[![ubloxpanel.PNG](/i/26799)](/i/26799)  
*Above: Three of the displays offered by u-center. Upper left: a sky map of all the US and European GPS satellites from horizon to horizon. Green satellites are being used to determine position. Upper right: Ground view (10 m radius) of the location of the GPS module over the last 2.5 hours. Lower: Elevation of the GPS module during the last 2.5 hours. The module was not moving, so the green traces record errors in the GPS fix.*

U-center will also display text values for various types of GPS satellite information. The default refresh rate is once per second (1Hz), but fresh satellite data can also be streamed at 10Hz (10 times per second). These data can be saved to a file as they are being displayed if you want to make graphs or do analysis later.

<iframe width="853" height="480" src="https://www.youtube.com/embed/_gn3Y6LHI4I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  
*Above: A one-minute video timelapse of a few of the displays possible with u-center software for Windows.*

The u-center software also allows you to modify the behavior of the GPS module. By default, lots of standard NMEA sentences chocked full of GPS data are output by the module every second. If you want to get data more frequently, you can change the data rate. If you want to get less data, you can use u-center to set the GPS module to send just the latitude, longitude, and altitude. This can be an important feature if an Arduino microcontroller is processing the incoming data. A lowly Arduino Nano can handle all the data at 1Hz, but if it also has to gather data from other sensors or do other things it can run out of memory. 

[![PacketConsole.jpg](/i/26800)](/i/26800)  
*Above: Screen capture of a live stream of data from the GPS module. The green rectangle includes the nine different data packets that are sent by default every second. Most of this information is not needed for most applications. The u-center software allows you to modify which data are sent.*

There is a very [detailed YouTube video](https://www.youtube.com/watch?v=TwhCX0c8Xe0) about how to use u-center to modify the behavior of a u-blox module so an Arduino sketch can acquire simple GPS information while using only 1.5% of the RAM required by the default settings. 

[![messageView.PNG](/i/26801)](/i/26801)  
*The dialog in u-center which allows you to modify which messages are sent by the GPS module. There are many options, and these can be saved to the module so they are the active defaults until u-center is used again to change them.*

One of the options with the NEO 7m GPS module is to receive data from the Russian GLONASS GPS satellites. The GLONASS satellites cannot be used simultaneously with the US satellites. By default, the US and European (and maybe others?) satellites are used.

Kits to build a SkyPod GPS Logger are available at the [Public Lab Store](https://store.publiclab.org/collections/water-monitoring/products/skypod-gps-kit?variant=12516120330349) and at the [KAPtery](http://kaptery.com/product/skypod-kit). The kits includes the u-blox NEO 7m but not a UART adapter. If you order a SkyPod GPS Logger Kit from the KAPtery in the next week or so, I will include a UART adapter and cable for no extra charge. Just enter the code "HeyWouldYouPleaseIncludeTheFreeUARTAdapter." (Actually there is no place to enter codes so just let me know that you want the adapter.)

The u-center software can be [downloaded for free here](https://www.u-blox.com/en/product/u-center).
