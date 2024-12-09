---
title: 'A standalone aerial sensor pod'
tagnames: arduino, gps, logging, barnstar:basic, saturnv, activity:arduino, data_logging, response:13850, activity:datalogger, skypod
author: cfastie
path: /notes/cfastie/03-15-2017/a-standalone-aerial-sensor-pod.md
nid: 14020
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/019/813/original/GPSpod_parts.jpg)

# A standalone aerial sensor pod

by [cfastie](../profile/cfastie) March 15, 2017 04:44

March 15, 2017 04:44 | Tags: [arduino](../tag/arduino), [gps](../tag/gps), [logging](../tag/logging), [barnstar:basic](../tag/barnstar:basic), [saturnv](../tag/saturnv), [activity:arduino](../tag/activity:arduino), [data_logging](../tag/data_logging), [response:13850](../tag/response:13850), [activity:datalogger](../tag/activity:datalogger), [skypod](../tag/skypod)

----

*Above: The new bracket to hold a self contained GPS + sensor data logger on a Saturn V Rig. The components are not wired together here.*

In January, I posted two research notes about capturing GPS data with an Arduino-based microSD logger. The [first one]( https://publiclab.org/notes/cfastie/01-08-2017/adding-gps-logging-to-a-kite-or-balloon-aerial-photography-rig) was about learning to use the Adafruit GPS board and showing that the Adafruit GPS gathered very good data. The [second one]( https://publiclab.org/notes/cfastie/01-14-2017/add-gps-logging-to-microsd-card-to-a-saturn-v-rig) was about operating the logger with the SkyShield AutoKAP controller so GPS data could be collected at the same time each aerial photo was taken.

[![GPSpod_20170314-7606.JPG](https://publiclab.org/system/images/photos/000/019/814/medium/GPSpod_20170314-7606.JPG)](https://publiclab.org/system/images/photos/000/019/814/original/GPSpod_20170314-7606.JPG)  
*Above: The key component of the data logger. The Adafruit Ultimate GPS board captures very good location data. There is good documentation at Adafruit.com and sample sketches, but I ended up using somebody else's GPS library (TinyGPS).*

Since then I learned that operating the pan/tilt autoKAP rig and the GPS board with a single Arduino microcontroller doesn’t seem to work. I had not tested the GPS logging while a SkyShield on the Saturn V Rig was actually operating servos. The servos which pan and tilt the camera require a continuous signal from the Arduino when they are either moving or holding their position. The serial communication with the GPS board requires that the microcontroller be interrupted. So every time the GPS data was read (every few seconds) the servos would twitch, and control over the photo shooting pattern was lost. I beat my head against this issue for far longer than I should have, and then implemented Plan B.

[![GPSpod_20170314-7599.JPG](https://publiclab.org/system/images/photos/000/019/815/medium/GPSpod_20170314-7599.JPG)](https://publiclab.org/system/images/photos/000/019/815/original/GPSpod_20170314-7599.JPG)  
*Above: The Adafruit micro SD card board logs data reliably (when my sketch leaves enough memory to keep the Nano happy).*

Although it would be tidy to have GPS data collected exactly at the same time a photo was taken, there is not necessarily much of an advantage to that synchrony. Generally, a photo is taken every four seconds, and the camera rig does not move very much in that time. If I can get a data file with GPS data at four second intervals, even out of sync with the photos, the location data can be matched up with the closest photo using time stamps on both (it would be done that way even if the data were perfectly synced). So my Plan B was to add a second Arduino Nano to control just the GPS and microSD board (the first Nano is part of the SkyShield autoKAP controller).

[![GPSpod_20170314-7608.JPG](https://publiclab.org/system/images/photos/000/019/816/medium/GPSpod_20170314-7608.JPG)](https://publiclab.org/system/images/photos/000/019/816/original/GPSpod_20170314-7608.JPG)  
*Above: The second Nano (the first is part of the SkyShield) is a $3.00 clone. It does not have headers so it takes up little space. I soldered the wires directly to the PCB.*

It turned out that this is probably a better way to do it. In addition to logging GPS data, I also wanted to log environmental data. I have put tiny sensors for [barometric pressure, temperature, and humidity on the Saturn V Rig]( https://publiclab.org/notes/cfastie/06-02-2016/soaring-riffle), and data traces during a kite flight have intriguing potential. An Arduino Nano can do a lot of stuff, but I have learned that even asking one to deal with GPS, microSD, and two sensors can tax its little CPU.    

[![GPSpod_20170314-7620.JPG](https://publiclab.org/system/images/photos/000/019/817/medium/GPSpod_20170314-7620.JPG)](https://publiclab.org/system/images/photos/000/019/817/original/GPSpod_20170314-7620.JPG)  
*Above: The BMP180 senses barometric pressure and temperature. This clone costs $2.00 on eBay, but has been replaced with newer models (e.g., BME280) which also sense humidity. One sensor instead of two different types can make memory management easier.*

[![GPSpod_20170314-7590.JPG](https://publiclab.org/system/images/photos/000/019/824/medium/GPSpod_20170314-7590.JPG)](https://publiclab.org/system/images/photos/000/019/824/original/GPSpod_20170314-7590.JPG)  
*Above: The DHT22 senses humidity and temperature. It costs $3.00 on eBay (delivered from China). I have ordered some BME280 (~$6.00) which are I2C sensors which do pressure, temperature, and humidity. The DHT is not an I2C sensor, so I might not use it for much anymore.*

I didn’t think those four components would be any trouble for an Arduino. But I was using two different kinds of sensor, each of which required their own code. Those four components required eight libraries, and functions from each were compiled into the code loaded onto the Nano. It took many hours for me to realize that the failure of my sketches was because the Atmega 328p was running out of memory. The IDE warns you when memory is running low and “instability” is possible, but the Arduino offers no friendly alert that its bizarre behavior is a memory issue.  

[![GPSBMPDHT2a.jpg](https://publiclab.org/system/images/photos/000/019/818/large/GPSBMPDHT2a.jpg)](https://publiclab.org/system/images/photos/000/019/818/original/GPSBMPDHT2a.jpg)  
*Above: Wiring diagram for the standalone logger. It can be used with a battery pack as shown or powered by the SkyShield (well, I haven't tested that yet).*

So I had to trim my sketches to free up memory. There are probably many clever things an actual programmer could have done to tighten up memory usage, but even so it might not be possible to run two servos, camera, GPS, SD card, and sensors on one 328p Arduino. This is a cautionary tale for those considering data logging with a 328p logger like the Riffle. If you ask it to log to SD card from a few sensors, it will be fine. But if you start to add different types of sensors or other devices, beware. The basic sketch that runs the Riffle without anything attached to it (“riffle_basic_logging.ino”) uses about 60% of the 328p’s memory. When 75% of the memory is used, the IDE gives you a warning, and that’s when my sketches became devil children. So it is something to consider that the Mayfly logger has four times the flash memory of a 328p (like the Nano, Uno, Pro micro, Cave Pearl logger, or Riffle) and the Feather Adalogger has twice as much as the Mayfly.

[![GPSpod_20170314-7581.JPG](https://publiclab.org/system/images/photos/000/019/819/large/GPSpod_20170314-7581.JPG)](https://publiclab.org/system/images/photos/000/019/819/original/GPSpod_20170314-7581.JPG)  
*Above: Everything is wired together for a working test. I plan to shorten the wires to reduce the rat's nest when it's tucked into the new 3D printed bracket.*

So I finally got a sketch to reliably log data from the GPS board, a BMP180 barometric pressure sensor (I2C), and a DHT22 humidity sensor. I modified the design of the bracket to carry everything on the Saturn V Rig. I have not tested everything yet, but maybe I will take it all for a little ski tour this week. 

Here is a text file of the sketch that seems to run the logger pretty well: 
<a href="https://publiclab.org/system/images/photos/000/019/820/original/GPSBMPDHTprt.txt"><i class="fa fa-file"></i> GPSBMPDHTprt.txt</a>

Change the extension to "ino" to open it in the Arduino IDE.

