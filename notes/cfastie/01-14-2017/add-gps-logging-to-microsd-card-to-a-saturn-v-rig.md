---
nid: 13850
title: Add GPS logging to a Saturn V Rig
path: public/static/notes/cfastie/01-14-2017/add-gps-logging-to-microsd-card-to-a-saturn-v-rig.md
uid: 554
tagnames: kite-mapping,arduino,kite-aerial-photography,kap,photo-rig,gps,saturnv,skyshield,difficulty:medium,category:build,activity:kite-mapping,activity:balloon-mapping,activity:photo-rig,activity:camera-triggering,response:13845,skypod
---

# Add GPS logging to a Saturn V Rig

The Adafruit Ultimate GPS breakout board was [reasonably easy to get working][1] in no small part due to the online resources at Adafruit. When I could not figure out how to save GPS data to a US$1.00 eBay microSD board ([now just $0.50 apiece][2]), I ordered one from Adafruit and got that one working. At first I had the same problems with the Adafruit board, but persevered until I figured it out. It might be that the $0.50 eBay board will work fine if you know what you are doing.

The microSD card allows the Arduino sketch to save GPS location data at the same time the camera on the KAP rig takes a photo. The GPS data can later be written to the EXIF headers of the appropriate photo files (by matching the time stamps) using a program such as [Geosetter][3], or used in other ways. The data logged to the SD card include a timestamp for each location entry.

Below are detailed instructions for adding this capability to a [Saturn V Rig][4]. The Saturn V Rig already has a power supply and an Arduino, so the additional weight required is about 25 grams and the additional cost is about US$50.00\. These instructions assume that you have a working Saturn V Rig.

### Materials

- [Saturn V Rig][5]: This rig includes a SkyShield autoKAP controller which incorporates an Arduino Nano ($110 kit)
- [Adafruit Ultimate GPS breakout board][6]: Requires minor soldering ($39.95)
- [Adafruit microSD card breakout board+][7]: Requires minor soldering ($7.50)
- Short wires or [RC servo wires][8]
- Various RC connectors (17 wire ends must be connected to pins)
- 11 male headers to solder onto the Nano and the SkyShield
- 3D printed housing for the GPS and SD boards (optional)

### Tools

- Soldering iron and solder
- 3D printer (optional)

### Step 1: Soldering

My approach is to solder on connectors, not wires. That way everything can be disconnected and used in different configurations. Instead, it is possible to solder wires to directly connect the Nano/SkyShield to the GPS and microSD boards.

- Solder the header onto the Adafruit microSD breakout board. I used 90° male headers, but the supplied straight headers are okay.
- Solder the header and the battery cage onto the Adafruit Ultimate GPS breakout board.
- Solder the extra male headers onto the Arduino Nano and the SkyShield as in the photos below.

![image description][9]

_Above: Additional male headers needed on the Nano. Pins D10, D11, and D12 (a three pin RC connector can be used for those pins). Pin D13 (I used a two pin header to strengthen the joint). The 5V and GND pins for power (I used a three pin header to strengthen the joint, and used a marker to make the GND pin black). This is not a standard way to add connections, but it can work if the soldering is done carefully. Reinforcing the solder joints with hot glue or epoxy is probably a good idea._

![image description][10]

Above: Two additional male pins are needed on the SkyShield. The GND and 5V pins are the same ones we added pins to on the Nano (These are the pins that will supply power to the GPS board and SD card board). I added a three pin header to strengthen the joint. I used a marker to make the GND pin black.

### Step 2: Make the short wires

You can buy pre-made [RC servo wires][11] in various lengths or make your own. They should be about 3 to 4 inches long. I used wires with two- or three-pin female connections, but there are various ways to hook things up so the correct pins are connected. Below are the required connections.

| microSD board | Nano 
|---------------|------
| 5V            | 5V   
| GND           | GND  
| CLK           | D13  
| Do            | D12  
| Di            | D11  
| CS            | D10  
|               |      

| GPS board | SkyShield 
|-----------|-----------
| VIN       | 5V        
| GND       | GND       
| TX        | D5        
| RX        | D3        
|           |           

Note: The D3 and D5 pins on the SkyShield are the yellow signal pins in the "S" row.

### Step 3: Mount the housing and connect everything

The 3D printed housing can be printed from the "GPSbracket03.stl" file at [Thingiverse][12]. It attaches to the shoulder of the Saturn V Rig with two small screws (holes are pre-placed in the housing). Connect all of the wires and slide the GPS board into the uppermost slot from the back. Insert the SD board (with microSD card) into the lower slot from the front. A Velcro strap will wrap around everything to keep it in place.

![image description][13]

_Above: All connections are made._

![image description][14]

_Above: One Velcro strap holds everything in place. Cutouts in the housing reveal indicator LEDs on the GPS and SD boards._

### Step 4: Load the sketch onto the Nano

The Arduino sketch I used is intended to operate everything on the Saturn V Rig. It should pan and tilt the rig and take a photo at each of 39 positions (covering most of the viewsphere). The pan-tilt-shoot sequence is appropriate for a Canon EOS M and should be modified for other cameras. Every time the camera shutter is triggered, GPS location data are written to the microSD card.

This sketch is a mashup of my pan-tilt code and Adafruit's code for the GPS board and microSD board. Adafruit's code is not well commented so I don't know what a lot of it does. The GPS logging seems to work, but the servo operation does not (still debugging). The sketch does not leave very much memory free, so very little can be added to this sketch without first improving memory handling. If I ever get it working I will post it here. [Update: I never got this to work. Operating servos and also doing serial communication (with the GPS) is fraught with error on 328p Arduinos.]

### Preliminary test

I did a dry run and compared the Adafruit GPS data logged to a microSD card with a Garmin GPSmap 76CSx logging every five seconds. The Adafruit was logging every time the pan-tilt sequence told the camera to shoot which varies from every three to four seconds. I donned the essential gear and went for a walk.![image description][16]

_Above: The testing instrumentation_

![image description][17]

_Above: Screenshot from Google Earth with the GPS tracks recorded by the two receivers. I walked around the pond and walked in a circle around a boulder and around a campfire ring (these can be seen in the Google Earth image)._

The Adafruit system controlled by the SkyShield logged reliably to the microSD card during the walk. It wrote an NMEA sentence for each logging event (every few seconds). I used GPSBabel to convert the log file to a KML file and displayed the track in Google Earth. During this walk, the Adafruit GPS seems to have recorded a more accurate track than the old Garmin GPS receiver. This suggests that the Adafruit GPS board could provide reasonably good location data during aerial missions.

![image description][18]

_Above: Closeup of the tracks where the Adafruit data is much more accurate than the Garmin data._

  [1]: https://publiclab.org/notes/cfastie/01-08-2017/adding-gps-logging-to-a-kite-or-balloon-aerial-photography-rig
  [2]: http://www.ebay.com/itm/Micro-SD-Storage-Board-Mciro-SD-TF-Card-Memory-Shield-Module-SPI-For-Arduino-FS-/391672994724?hash=item5b31879ba4:g:Zw8AAOSw-CpX90d9
  [3]: http://www.geosetter.de/en/
  [4]: https://store.publiclab.org/collections/aerial-camera-mounts/products/saturn-v-kite-aerial-photography-rig
  [5]: https://store.publiclab.org/collections/aerial-camera-mounts/products/saturn-v-kite-aerial-photography-rig
  [6]: https://www.adafruit.com/product/746
  [7]: https://www.adafruit.com/products/254
  [8]: https://www.amazon.com/VIMVIP-phantom-inspire-Control-Aircraft/dp/B01DXZ7ACY/ref=sr_1_fkmr1_1?ie=UTF8&qid=1484420497&sr=8-1-fkmr1&keywords=rc%20servo%20wires%20male%20to%20male%203%22
  [9]: https://publiclab.org/system/images/photos/000/019/268/large/GPS_20170113-7471a.jpg "GPS_20170113-7471a.jpg"
  [10]: https://publiclab.org/system/images/photos/000/019/269/large/GPS_20170113-7474a.jpg "GPS_20170113-7474a.jpg"
  [11]: https://www.amazon.com/VIMVIP-phantom-inspire-Control-Aircraft/dp/B01DXZ7ACY/ref=sr_1_fkmr1_1?ie=UTF8&qid=1484420497&sr=8-1-fkmr1&keywords=rc%20servo%20wires%20male%20to%20male%203%22
  [12]: http://www.thingiverse.com/thing:845522
  [13]: https://publiclab.org/system/images/photos/000/019/270/large/GPS_20170113-7501a.jpg "GPS_20170113-7501a.jpg"
  [14]: https://publiclab.org/system/images/photos/000/019/271/large/GPS_20170113-7491.JPG "GPS_20170113-7491.JPG"
  [16]: https://publiclab.org/system/images/photos/000/019/273/large/GPS_20170112-1282a.jpg "GPS_20170112-1282a.jpg"
  [17]: https://publiclab.org/system/images/photos/000/019/274/large/ThursAdaFull.jpg "ThursAdaFull.jpg"
  [18]: https://publiclab.org/system/images/photos/000/019/275/large/ThursAdaCU.jpg "ThursAdaCU.jpg"