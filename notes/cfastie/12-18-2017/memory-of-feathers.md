---
nid: 15394
title: Memory of Feathers
path: public/static/notes/cfastie/12-18-2017/memory-of-feathers.md
uid: 554
tagnames: arduino,sensors,datalogger,data-logging,feather,thermal-infrared,gy90614,relay,activity:feather,series:woodstove-control
---

# Memory of Feathers

I made some modifications to the data logging and control [device that is hooked up to the fan on my woodstove](https://publiclab.org/notes/cfastie/12-03-2017/putting-sensor-data-to-work):

1. The Adafruit Feather had been keeping track of time by counting seconds, but that's sort of lame so I added a real-time clock (RTC). It has its own battery and costs $1.00\.
2. I added a little display so I can see the current temperature. The [first device](https://publiclab.org/notes/cfastie/11-27-2017/yule-logging) based on a [Nano Data Logger](https://publiclab.org/wiki/nano-data-logger) had a display, but I had to buy a new 3.3 volt version for the Feather. I got a seriously cute OLED display for $3.00\.
3. I added a tactile button. It's complicated. See below.  
.

[![stove_20171217-2164.JPG](https://publiclab.org/system/images/photos/000/022/969/medium/stove_20171217-2164.JPG)](https://publiclab.org/system/images/photos/000/022/969/original/stove_20171217-2164.JPG)  
_Figure 1\. It was not easy to cram all the new stuff into the box, but I succeeded. The display (top) and RTC (bottom) are I²C devices so they just plugged into the I²C hub I had built on the Feather. The tactile button (on red and black wires) was soldered to pins on the Feather._

.

It was a tight fit getting everything into the old box, but the real obstacle was modifying the sketch to support the new components. As soon as I added the OLED code the Feather ran out of memory. The Feather 32u4 has the same amount of flash memory and RAM as typical Arduinos. All other Feathers have much more memory, so switching to a Feather MΘ would have solved the problem. That would have been the easy way. Instead I removed all the error checking and serial display code and tidied up the sketch as best I could. I also eliminated the BME280 sensor code (and the sensor) which was monitoring room temperature and humidity.

.

[![stove_20171217-2205.JPG](https://publiclab.org/system/images/photos/000/022/970/medium/stove_20171217-2205.JPG)](https://publiclab.org/system/images/photos/000/022/970/original/stove_20171217-2205.JPG)  
_Figure 2\. The diagonal of this OLED display is 0.91 inches. It has 128 by 32 pixels and can display graphics and do animation. It has nicer fonts than the blocky default one I used, but they consume precious memory. The temperature of the stove (°C) is displayed. When I return to the stove and the temperature has dropped and the fan has been turned off, I always want to know how long the fan has been off (without looking at the data on the SD card). So I modified the code to switch the display to the time the fan turned off whenever the fan turns off. That time is displayed until the stove warms up and turns on the fan again. That was great, but then I could not watch the temperature increase as the stove warmed up. So I added the tactile button. When it is pressed, the display switches back to temperature. I was very proud of myself._

.

[![stove_20171217-2175.JPG](https://publiclab.org/system/images/photos/000/022/972/medium/stove_20171217-2175.JPG)](https://publiclab.org/system/images/photos/000/022/972/original/stove_20171217-2175.JPG)  
_Figure 3\. I have not gotten around to installing the tactile button very permanently. But it's quite convenient just dangling there._

.

[![stove_20171217-2200.JPG](https://publiclab.org/system/images/photos/000/022/973/medium/stove_20171217-2200.JPG)](https://publiclab.org/system/images/photos/000/022/973/original/stove_20171217-2200.JPG)  
_Figure 4\. Can you guess where I got the tactile button? I have a lot of dead Nanos because sometimes exposed pins and solder joints touch the wrong thing through absolutely no fault of my own._

.

It was a little bit frustrating using an expensive (compared to eBay Arduinos) Feather which had less memory than I needed for my fan-switch data-logger neato-display device. I have not yet heard of a justification for the Feather 32u4 which accounts for the fact that the Feather MΘ or others cost about the same and have at least eight times more memory.

The Feather 32u4 has a slight advantage over standard 328p Arduinos because the limited memory is used differently. The Feather can use 28672 bytes of the 32KB flash memory and a Nano or Pro Mini can theoretically use 30720 bytes. But when a Nano sketch uses 75% or more of that 30720 bytes, you get a warning that memory is low and instability could happen. The Feather 32u4 can use 100% of the 28672 without instability. So another ~18% of the memory is available on the Feather. This is helpful, and the only reason I was able to make my woodstove device work with a Feather 32u4\.

To fully exploit the Feather, you should have the most recent version of the Arduino IDE. The current version is v.1.85 and my old v.1.64 seemed to work fine compiling sketches for the Feather 32u4\. Then I found that a sketch failed to compile (insufficient memory) for the Feather 32u4 in the old IDE, yet compiled in the new IDE with memory to spare (93% used). I didn't have a choice when compiling sketches for the Feather MΘ because the old IDE refused to compile at all. So moving from old Arduinos to Feathers requires making sure your Arduino IDE is up to date.

Before you upgrade your Arduino IDE make sure your Arduino libraries are not in the Arduino program folder because the installation will delete them. Mine were, and it did, but I made copies first.

Adafruit had a 20% off Black Friday sale on all Feather stuff and I bought a few Feather MΘs. I can't wait to fill up eight times more memory with sloppy code.

[\_\_Here is the sketch running on the Feather 32u4 in the woodstove device](https://publiclab.org/system/images/photos/000/022/975/original/StoveIR32u4_614v5.2.txt)

  
¥