---
nid: 10620
title: Broadcast dust readings from a smartphone
path: public/static/notes/Schroyer/06-26-2014/broadcast-dust-readings-from-a-smartphone.md
uid: 381809
tagnames: particulate-sensing,air-quality,dustduino,dust,particulates,particulate,pm,dylos,air-sensors
---

# Broadcast dust readings from a smartphone

The DustDuino project has been working for several months with environmental journalists around the globe thanks to a collaboration with the Earth Journalism Network. Based on the Shinyei dust sensor, which can detect airborne particulate matter in the PM10 and PM2.5 ranges, the DustDuino is an Arduino-based sensor node.

For information on how to build your own dust-sensing node, [you can visit the DustDuino research note.](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino)

Development is ongoing, but in May, 10 journalists received prototype DustDuinos and training, as part of an EJN training seminar in Berkley and San Francisco, California. These DustDuinos were capable of connecting to WiFi networks to broadcast particulate readings to Xively, where the readings are stored and graphed for anyone to see.

These units were primarily meant to be kept in a home or office, where WiFi and power is readily available. Clara, an environmental journalist based in Indonesia, came up with a new method of broadcasting the readings from the dust sensor, wherever a cellular data network is available.

##Step 1: create hotspot

Basically, if you have a smartphone or tablet that can generate a wireless hotspot, and your cell provider allows you use this feature on your wireless device, you can use this to connect to the internet and send dust readings from the DustDuino to Xively.

Alternatively, you can purchase a "MiFi" or similar mobile WiFi, and use that as your wireless hotspot.

Whichever the case, turn on the wireless device's hotspot feature or the mobile hotspot, and make note this wireless network's SSID and password.

##Step 2: configure DustDuino

Make sure to configure the DustDuino's WiFly RN-XV WiFi module to connect to this wireless network, using the SSID and password. You will know the WiFly has been able to connect to the hotspot when the WiFly's red LED goes dark and remains off.

##Step 3: find mobile power for DustDuino

You'll need to find a way to power the DustDuino, since you'll be away from mains power. You have several options to choose from.


[![80-01.jpg](https://i.publiclab.org/system/images/photos/000/004/998/medium/80-01.jpg)](https://i.publiclab.org/system/images/photos/000/004/998/original/80-01.jpg)



If you've built your DustDuino out of the Arduino Uno and Arduino Wireless Shield, as outlined in the Public Lab research note, you can power the DustDuino using the Uno's 2.1mm DC power jack and a 9V battery. You'll need an adapter [such as this](https://www.adafruit.com/products/80?gclid=CjkKEQjw5qmdBRCn--70gPSo074BEiQAJCe7zaGhb3HV_8mI84LDbd7C69ZtkDGK1hXp7TGVdwGifwrw_wcB) to connect the 9v battery to the Arduino.

[![usb_portable_battery_power_charger_with_2500mah_capacity_639.jpg](https://i.publiclab.org/system/images/photos/000/004/997/medium/usb_portable_battery_power_charger_with_2500mah_capacity_639.jpg)](https://i.publiclab.org/system/images/photos/000/004/997/original/usb_portable_battery_power_charger_with_2500mah_capacity_639.jpg)


Alternatively, you can power the DustDuino using the Uno's USB connection. Here, you can use a mobile cell phone power charger, [such as this](http://www.brookstone.com/mobile-2600-mah-charger). These are essentially large lithium batteries that are regulated to output 5 volts, and supply that power over a USB connection.


[![gmgvpq1281075090393.jpg](https://i.publiclab.org/system/images/photos/000/004/999/medium/gmgvpq1281075090393.jpg)](https://i.publiclab.org/system/images/photos/000/004/999/original/gmgvpq1281075090393.jpg)



If you are traveling in a car, yet another option is to supply power using a 5V USB adapter, plugged into your car's 12V outlet. Like the mobile cell charger, these were designed to charge your cell phone, but they'll power your Arduino Uno just fine.

Finally, failing those options, bring a laptop computer, and power the DustDuino via the laptop's USB ports. The advantage here is your laptop can connect to the wireless hotspot, so you can monitor the DustDuino's readings live from Xively.

##Step 4: transmit!

If your wireless hotspot is active, and your WiFly module is configured correctly, and your DustDuino has adequate power, you should immediately be sending dust readings every 30 seconds to Xively.

With a mobile DustDuino, you can make and transmit particulate readings nearly anywhere. Clara obtained her readings while driving around. Where will you take your DustDuino?


[![ClaraDuino.png](https://i.publiclab.org/system/images/photos/000/005/000/medium/ClaraDuino.png)](https://i.publiclab.org/system/images/photos/000/005/000/original/ClaraDuino.png)

