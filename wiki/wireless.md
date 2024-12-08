---
title: wireless
tagnames: wireless, mobile, sensors, wi-fi, bluetooth
author: mathew
path: /wiki/wireless.md
nid: 11123
uid: 4

---

# wireless

by [willie](../profile/willie), [danbeavers](../profile/danbeavers), [mathew](../profile/mathew)

September 11, 2014 17:20 | Tags: [wireless](../tag/wireless), [mobile](../tag/mobile), [sensors](../tag/sensors), [wi-fi](../tag/wi-fi), [bluetooth](../tag/bluetooth)

#Satellite

##Iridium satellite
* satellite modem network that has had a monopoly for a while, lots of .gov use. 
* Range-- everywhere outdoors, some indoor locations. 
* CONS: $$$$ FYI, lowest cost option is $0.20 for a 50-character text.

EXAMPLES:
* http://www.rock7mobile.com/products-rockblock.php

#Direct RF to Internet

##Wi-fi 
 (Internet at a coffee shop near you.)
* Range- 300 ft on the best of days - 
* Benefits - pretty widely available, familiar, localize 
* Not-so-beneficial - often private, limited range, device can get forced out (this is why routers need resetting)

##GSM
 (the mobile phone protocol.)
* Range - pretty much line of site to tower. 
* Benefits - Its EVERYWHERE (see: Verizon commercial), 
* CONS: Cost much money per message
* ISSUES: There are a million standards
* WHERE TO FIND COVERAGE http://www.mobileworldlive.com/maps

#RF Data Transfer

##Zigbee (Xbee)  [IEEE 802.15 standard.](https://en.wikipedia.org/wiki/ZigBee)

* Pro: Mid-range depending on router placement, only one device (router) needs access to the internet. Arduino libraries available.
* CONS: Not simple to set up

##[APRS](http://en.wikipedia.org/wiki/Automatic_Packet_Reporting_System)
* Requires amateur radio license.  
* no encrypted transmissions/ all data public
* no commercial content

##900Mhz radio
* like older wireless handset phones/baby monitors/garage door openers
* Crowded frequency band, but good distance, higher power.
* example: http://www.freaklabsstore.com/index.php?main_page=product_info&products_id=211

##[bluetooth:](https://en.wikipedia.org/wiki/Bluetooth) 
* short range protocol supported by a range of devices, available as microcontroller serial modems.

##[bluetooth LE:](https://en.wikipedia.org/wiki/Bluetooth_low_energy) 
blue tooth low energy is a new bluetooth standard supported by fewer devices. Now integrated into some system on a chip packages from ARM.

##[NFC](https://en.wikipedia.org/wiki/Near_field_communication) 
very short range, low power system built on RFID.
