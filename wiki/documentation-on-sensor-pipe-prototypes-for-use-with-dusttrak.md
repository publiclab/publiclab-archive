---
title: Documentation on Sensor Pipe prototypes for use with DustTrak
tagnames: open-pipe-kit, sensor-pipe
author: rjstatic
path: /wiki/documentation-on-sensor-pipe-prototypes-for-use-with-dusttrak.md
nid: 11333
uid: 174

---

# Documentation on Sensor Pipe prototypes for use with DustTrak

by [rjstatic](../profile/rjstatic)

November 11, 2014 01:52 | Tags: [open-pipe-kit](../tag/open-pipe-kit), [sensor-pipe](../tag/sensor-pipe)

For the first few prototypes of using Sensor Pipe for DustTrak, the following directions apply.

## Set up the Dust Track 
- Go to the Analog settings and set the lower bound to 0 mg/m^3 and the upper bound to 0.1 mg/m^3
- When figuring out how to wire up the connector ... see the attached picture (from the Dust Trak manual, here).  The arrows in the pdf are displaced rightward a little, but if shifted left would refer properly to the appropriate pins.  Then, on the actual Dust Trak model we received, the entire output connector was rotated 180 degrees; but the pin assignment on the connector still remained true, relative to its own geometry (there's a simpler way of saying this, I'm sure):  i.e.: the connections which were on the left end up on the right. I think you'll get it immediately. The cable is a '4-pin, mini-DIN connector'.  Might be avail at Radio Shack, or equivalent?


## Set up Fido with DustTrak
- Plug Fido blue wire into top right pin on DustTrak
- Plug Fido yellow wire into bottom right pin on DustTrak
- Plug Fido Micro USB power into USB power supply on DustTrak
- Configure the WiFi (or just connect Fido and Router via Ethernet)
 - Use Ethernet chord to connect Fido Pi Ethernet port and your Wifi Router
 - Plug in Fido Pi's USB power supply 
 - Wait 5 minutes
 - Go to local Fido App (see URL below)
 - Click on the gear icon in the top right
 - Enter data in the WiFi SSID and Wifi Password fields
 - Select WiFi Security type
 - Click the save button at the bottom
 - Wait 1 minute
 - Unplug Fido's power and ethernet chord
 - Plug Fido back into power supply without having the Ethernet connected
 - Wait 5 minutes
 - Verify data is flowing in on the local Fido App
 - Verify new data is going to local Hive server
 - Verify new data is going to online Hive server


## Set up Fido with DustTrak
- Plug Fido blue wire into top right pin on DustTrak
- Plug Fido yellow wire into bottom right pin on DustTrak
- Plug Fido Micro USB power into USB power supply on DustTrak
- Configure the WiFi (or just connect Fido and Router via Ethernet)
 - Use Ethernet chord to connect Fido Pi Ethernet port and your Wifi Router
 - Plug in Fido Pi's USB power supply 
 - Wait 5 minutes
 - Go to local Fido App (see URL below)
 - Click on the gear icon in the top right
 - Enter data in the WiFi SSID and Wifi Password fields
 - Select WiFi Security type
 - Click the save button at the bottom
 - Wait 1 minute
 - Unplug Fido's power and ethernet chord
 - Plug Fido back into power supply without having the Ethernet connected
 - Wait 5 minutes
 - Verify data is flowing in on the local Fido App
 - Verify new data is going to local Hive server
 - Verify new data is going to online Hive server



## grove4
- [Online Hive server: view the data online](http://hammock.media.mit.edu:5999/apps/_design/beekeeper/index.html#sensor/84cb5aa0a7c766ad1cae0c0fe500270a)
 - Data graphed as parts per thousand
- [Local Hive Server: view the data while connected to the LAN (Linux and Mac only)](http://grove4.local:5984/apps/_design/beekeeper/index.html#sensor/84cb5aa0a7c766ad1cae0c0fe500270a)
 - Data graphed as parts per thousand
- [Local Hive App: Configure the WiFi and see live values (Linux and Mac only)](http://grove4.local)


## grove3
- [Online Hive server: view the data online](http://hammock.media.mit.edu:5999/apps/_design/beekeeper/index.html#sensor/2565a02f2656502b16f1eb83c30022ba)
 - Data graphed as parts per thousand
- [Local Hive Server: view the data while connected to the LAN (Linux and Mac only)](http://grove3.local:5984/apps/_design/beekeeper/index.html#sensor/2565a02f2656502b16f1eb83c30022ba)
 - Data graphed as parts per thousand
- [Local Hive App: Configure the WiFi and see live values (Linux and Mac only)](http://grove3.local)
 - Data shows up in Celsius but is not Celsius, more software work to be done



