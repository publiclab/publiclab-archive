---
title: Mesh Networks for Rural Transit
tagnames: gps, transit, openwrt, mesh
author: ajawitz
path: /notes/code4maine/03-24-2014/mesh-networks-for-rural-transit.md
nid: 10219
uid: 294634

---

# Mesh Networks for Rural Transit

by [ajawitz](../profile/ajawitz) March 24, 2014 22:00

March 24, 2014 22:00 | Tags: [gps](../tag/gps), [transit](../tag/transit), [openwrt](../tag/openwrt), [mesh](../tag/mesh)

###What I want to do
   I want to utilize open source wifi/mesh networking protocols to provide small towns and rural regions with an affordable means of tracking public sector vehicle fleets, with specific attention to improving public transit accessibility. 
  The project is part of a larger effort which combines resources from the community wireless movement ([Commotion Wireless](commotionwireless.net)), open source hardware ([openvehicletracker.org](www.openvehicletracker.org)) and open transit data specifications ([GTFS](https://developers.google.com/transit/gtfs-realtime/)) to improve public transit access in rural regions. Details about the larger project can be found at http://code4maine.org/opentransitprojects/ while aspects specifically related to citizen science are being documented at-
http://publiclab.org/wiki/expanding-rural-transit-accesibility-through-open-source
###My attempt and results
[Code for Maine ](www.code4maine.org) has been partnering with the City of Bath, Maine on an effort to improve access to the [Bath CityBus](http://www.cityofbath.com/CityBus/) since early 2012.  The initial focus of the project was 

1.. to develop a low cost method of recording and transmitting vehicle position in real-time and 

2. to present the data to users in the same format commonly used by larger agencies like the MBTA.

 The initial plan was to use widely available, open source modules like Arduino to collect location coordinates using a GPS receiver and to transmit them to a base station using a wireless module.  These efforts eventually grew into a standalone project that can be accessed at www.openvehicletracker.org.  The wide range of low cost GPS receivers currently available enabled the task of collecting location data relatively simple.  The challenging task therefore lies in the method in which the data is transmitted.
####GSM Challenges
  The first method examined was using standard GSM-cellular networks used by cell phones. While there are several GSM-enabled "shields" designed for the Arduino platform, options are far more limited than we found with GPS. 
##### SIM900
 The most common GSM shields appear to be based around the "[SIM900](http://tronixstuff.com/2014/01/08/tutorial-arduino-and-sim900-gsm-modules/)" GSM modules, though these would have to be combined with a GPS shield separately and resulted in awkward hardware arrangements not to mention considerable programming challenges when merging the various dependencies required by separate GSM and GPS libraries.  
#####GPRS-GPS Shields
 A number of shields have embedded GSM and GPS modules into one device.  Some like the [TRAlog](http://www.rocketscream.com/shop/tralog) also provide a dedicated library to handle the complex communications between receiving coordinates and transmitting data.  Such products tend to be expensive however, and push the boundaries of affordability.  Also,  libraries for obscure products tend not to get updated very often and as a result can suffer major compatibility issues when new software is released.
#####M2M Data Plans
Perhaps the greatest barrier to any GSM-Shield approach is the fact that it generally requires  a standard SIM-Card, the same cards used in our smart phones, to work.  This wouldn't be such an issue if the vast majority of prepaid SIM card plans weren't geared towards smart phone users who end up using much more data, SMS etc...  This situation creates all kinds of barriers, from activation (which usually assumes you can answer a phone call) to pricing.  Change might be in the works however, as [a new specification ](http://www.gsma.com/connectedliving/embedded-sim/)geared towards "machine2machine" communications has been released by the GSMA trade organization.
 #####Official Arduino GSM Shield
In the course of the project the closest we came to finding a solution to these GSM challenges came in the form of the "official" [Arduino GSM Shield](http://arduino.cc/en/Main/ArduinoGSMShield).  Because it was designed by the Arduino team it has a well maintained [GSM Library ](http://arduino.cc/en/Reference/GSM) and its own SIM Card Plan that was negotiated by the Arduino team before release so we don't have to go through the trouble on our own.
 The problem with this shield lies in the way it communicates to the SIM Modem through the serial port which is also needed for receiving the GPS data.  The problem can probably be overcome by specifying when to receive and when to send through interrupts, but this can be a complicated process.  As of 3/14 the issue remains unresolved on the [openvehicletracker Github](https://github.com/mainehackerclub/open_vehicle_tracker/issues/28)

[![GPSGSM_bb.png](https://i.publiclab.org/system/images/photos/000/003/382/medium/GPSGSM_bb.png)](https://i.publiclab.org/system/images/photos/000/003/382/original/GPSGSM_bb.png)


#####Mesh Networking
 Mesh Networking is often mentioned as a potential component in "Intelligent Transportation Systems" as a means of using the vehicles as network relays rather than simple receivers.  The idea has been advocated since at least 2009 by Zipcar founder Robin Chase http://www.wired.com/autopia/2009/05/the-grid-our-cars-and-the-internet-one-idea-to-link-them-all/.  The problem with all this research is its primary focus has been on private vehicles, which would entail a long process of consumer adoption.  Very little research on the other hand has examined potential uses in public transit, where vehicles are almost always operating within a defined service area, if not a fixed route and timetable.
#####XBee
At least one study of this sort was published in Japan proposing "[Flexible Bus Systems using Zigbee as a Medium](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CDIQFjAB&url=http%3A%2F%2Fwww.pgembeddedsystems.com%2Fsecurelogin%2Fupload%2Fproject%2FIEEE%2F1%2Fpg2012-2013e66%2F11_9_The%2520Flexible%2520Bus%2520Systems%2520Using%2520Zigbee%2520as%2520a%2520Communication%2520Medium.pdf&ei=baUwU5eOG4So0gHW-YHADw&usg=AFQjCNG7G9iQPKQvK9MOzJHuPzLCTBcscw&bvm=bv.62922401,d.dmQ)".  Such flexibility would fit in very well with the "demand-response" model followed by most rural transit services.


[![ZigBee_Bus_Network.027.png](https://i.publiclab.org/system/images/photos/000/003/380/medium/ZigBee_Bus_Network.027.png)](https://i.publiclab.org/system/images/photos/000/003/380/original/ZigBee_Bus_Network.027.png)



Our own research into mesh protocols initially focused on the same "Zigbee" protocol advocated by the Japanese study.  The "[Zigbee/XBee](http://www.digi.com/products/wireless-wired-embedded-solutions/zigbee-rf-modules/zigbee-mesh-module/xbee-zb-module)" protocol is familiar to Arduino developers as an efficient means of connecting devices in home automation, though some of the higher-end modules are claimed to have a range of up to 7 miles.
#####OpenWRT
Before we had a chance to test the XBees, a better solution was developed through the work of the [Commotion Wireless](commotionwireless.net/‎) team at the Open Technology Institute.  Inspired by efforts to break through internet crackdowns by repressive governments during the "Arab Spring", the CW team has focused on providing a mesh networking capability that can be used on any off-the-shelf commercial hardware like laptops, smartphones or home routers.  While thus far the team has tested only a handful of compatible devices, the minimum recommended hardware is affordable enough to get a networking radius of up to 9 miles running for under $200!
The fact that Commotion Wireless is based on OpenWRT opens up a whole new world of possibilities.  The new [Arduino Yun](http://arduino.cc/en/Main/ArduinoBoardYun), for example uses an OpenWRT-based processor to bridge Arduino functions with the web.  One of our early experiments involved [reflashing a cheap travel router with OpenWRT and a USB GSM dongle](https://forum.openwrt.org/viewtopic.php?pid=185438).  It turned out that the YUN has the same processor as the travel router we used.  
 If the version of OpenWRT used by Commotion Wireless can be ported to the YUN, or vice versa, we could extend the capabilities of a vehicle tracker considerably.

[![GPSYUN_bb.png](https://i.publiclab.org/system/images/photos/000/003/383/medium/GPSYUN_bb.png)](https://i.publiclab.org/system/images/photos/000/003/383/original/GPSYUN_bb.png)



###Questions and next steps

####Range
 We have three high-powered [Ubiquity routers](http://commotionwireless.net/docs/supported-devices/) flashed with Commotion Wireless firmware. Users have reported achieving ranges of up to 9 miles with the same routers, but this needs to be field tested.  The[ CityBus operations center in Bath City Hall](https://www.google.com/maps/vt/data=VLHX1wd2Cgu8wR6jwyh-km8JBWAkEzU4,2sgQu0SMBVPow3QGsrYkJiZgCUcywO4PcGugF29wsNTLHUfewtVt0dkbvqiZW3FYYXS6AKBl7rH6XBtSNr2In5PrGuCP4uhY5Hmui6vk6_F9Jf_Vr2gXeZnvMoo) is in a high elevation and might be sufficient to reach most of the system.  Otherwise, a new location must be secured to install the first node.
 
####CommotionYUN
Further research needs to be done in integrating the [Commotion Wireless version of OpenWRT](https://github.com/opentechinstitute/commotion-router) with the ["Linino" version on the Arduino Yun](https://github.com/arduino/linino). A sister project to CW, the [Serval Project](www.servalproject.org/‎) once used the [WR703n travel router/Yun cousin in a mesh extender prototype](www.servalproject.org/‎) so a port may not be far off...

The upcoming[ Arduino TRE](http://arduino.cc/en/Main/ArduinoBoardTre) may very well offer an even better platform promising a board with the Linux processing power of a Raspberry Pi and/or Beaglebone combined with the usability/compatibility of the Arduino community.

####RadioExtenders
The Serval Project has also been developing a device called the "[Mesh Potato 2](http://wiki.villagetelco.org/index.php?title=Mesh_Potato_HOWTOs)" which utilizes siilar OpenWRT firmware along with an [RFD900 Long Range Radio(http://plane.ardupilot.com/wiki/rfd900-radio/) often used to transmit video images from hobby UAVs.

Other possibilities may emerge in the relatively new practice of using cheap USB "RTL" radio receivers in combination with Software Defined Radio transmissions.  The practice known as [RTL-SDR](http://www.rtl-sdr.com) is already a popular means of[ tracking ocean-going vessels](http://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/) and has even been used to [decode bus location transmissions in Europe](http://www.rtl-sdr.com/rtl-sdr-tutorial-cheap-ais-ship-tracking/).

###Why I'm interested
 
Real-time transit tracking has become a common amenity in most urban transit systems. Having access to real-time feeds, released in an open format known as "GTFS", makes riding public transit more convenient by allowing riders to plan their connections more accuratately while eliminating the uncertainty of waiting at a cold bus stop. In rural regions and small cities where transit services are often dispatched by request and/or are limited to only a few trips a day, such information would be more than an added amenity but rather could decide whether or not one makes it to work, medical appointments, grocery shopping etc...
Unfortunately, the market for transit technology is almost entirely oriented towards large-scale operations (and large scale budgets). This results in a situation that priviledges those with better transit access to begin with while leaving behind those who might benefit the most.

**More Info-**

*** Full Project Wiki on PublicLab- http://publiclab.org/wiki/expanding-rural-transit-accesibility-through-open-source

* Project on Github- www.code4maine.org/opentransitprojects

* Open Vehicle Tracker- www.openvehicletracker

* Old Project Wiki- www.humblehackers.wikispaces.org****