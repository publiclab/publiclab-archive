---
title: "Building a DustDuino -- My first Arduino project"

tagnames: 'arduino, diy, air-quality, sensors, dustduino, shinyei, activity:shinyei, activity:dustduino, activity:pm, activity:particulate-monitoring, activity:arduino, replication:9818, air-sensors'
author: MeganKierstead
path: /notes/MeganKierstead/11-10-2015/building-a-dustduino-my-first-arduino-project.md
nid: 12400
uid: 457273
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/012/722/original/DustDuinoSupplies.jpg)

# Building a DustDuino -- My first Arduino project

by [MeganKierstead](/profile/MeganKierstead) | November 10, 2015 23:37

November 10, 2015 23:37 | Tags: [arduino](/tag/arduino), [diy](/tag/diy), [air-quality](/tag/air-quality), [sensors](/tag/sensors), [dustduino](/tag/dustduino), [shinyei](/tag/shinyei), [activity:shinyei](/tag/activity:shinyei), [activity:dustduino](/tag/activity:dustduino), [activity:pm](/tag/activity:pm), [activity:particulate-monitoring](/tag/activity:particulate-monitoring), [activity:arduino](/tag/activity:arduino), [replication:9818](/tag/replication:9818), [air-sensors](/tag/air-sensors)

----

###What I want to do
I came across the existing [DustDuino](http://publiclab.org/wiki/dustduino) project and thought it would be a great item to build as an introduction to both environmental monitoring and hardware prototyping. I will use this page to document my progress, as someone who is new to the hardware realm. 

###My attempt and results
First order of business was to order the appropriate supplies, as outlined [here](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino). Since I am starting from scratch, I had no supplies of my own such as a soldering iron, so this inflated the cost. Some things I probably had lying around (e.g., USB cord, power supply), but decided to buy a dedicated set for prototyping. 
 
*Project cost is close $100 if you already have basic hardware supplies.  

**Amazon ($148.51 w/ tax and shipping)**  
* **$4.67**: [AmazonBasics USB 2.0 Cable - A-Male to B-Male - 6 Feet (1.8 Meters)](https://www.amazon.com/gp/product/B00NH11KIK/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1)  
* **$96.72**: [Hakko FX888D-23BY Digital Soldering Station FX-888D FX-888 (blue & yellow)](https://www.amazon.com/gp/product/B00ANZRT4M/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1)  
* **$5.49**: Wall Adapter Power Supply - [9V DC 650mA](https://www.amazon.com/gp/product/B003XZSZWO/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1)  
* **$10.45**: [MG Chemicals 8341 No Clean Flux Paste, 10 ml Syringe](https://www.amazon.com/gp/product/B00425FUW2/ref=oh_aui_detailpage_o04_s01?ie=UTF8&psc=1)  
* **$22.95**: [Arduino A000064 Wireless Proto Shield for Arduino](https://www.amazon.com/gp/product/B0084ZPIVO/ref=oh_aui_detailpage_o05_s00?ie=UTF8&psc=1)  

**SparkFun ($76.85 w/ tax and shipping)**  
* **$34.95**: [RN-XV WiFly Module - Wire Antenna ](https://www.sparkfun.com/products/10822)  
* **$24.95**: [Arduino Uno R3](https://www.sparkfun.com/products/11021)  
* **$16.95**: [Hook-Up Wire - Assortment (Solid Core, 22 AWG) ](https://www.sparkfun.com/products/11367)  

**EpicTinker ($22.00 w/ tax and shipping)**    
* **$15.00**: [Grove - Dust Sensor](https://www.epictinker.com/ProductDetails.asp?ProductCode=SEN12291P)  

**RadioShack**    
* **$5.99**: 2.5 oz 60/40 Rosin-Core solder

All the supplies gathered together ready to go  
 
[![DustDuinoSupplies.jpg](//i.publiclab.org/system/images/photos/000/012/721/medium/DustDuinoSupplies.jpg)](//i.publiclab.org/system/images/photos/000/012/721/original/DustDuinoSupplies.jpg)

**Step 1: Downloads**  
Since I haven't worked on an Arduino project in aeons, I didn't have any of the necessary software. Luckily, the IDE is readily available on the [Arduino website](https://www.arduino.cc/en/Main/Software). I downloaded the Arduino 1.6.6 IDE (which is open source) for Mac OS X 10.7 or newer. Dragged and dropped into my Applications folder without any issues.  

I also downloaded the [zipped repository](https://github.com/NodeJournalism/DustDuino/archive/master.zip) for the DustDuino project from Github, which contains background literature and Arduino sketches. From this and Googling, I learned that an Arduino sketch is the same thing as a program. Lingo and language are important, kids. The more you know.   

**Step 2: Program the RN-XV WiFi Module**  
Here's how to set one up, using the SD Wireless Shield and the Arduino IDE:  
  
[![PlugInArduino.jpg](//i.publiclab.org/system/images/photos/000/013/010/medium/PlugInArduino.jpg)](//i.publiclab.org/system/images/photos/000/013/010/original/PlugInArduino.jpg)  

* Plug in your Arduino UNO using a Type B USB cable to your computer like so. A green light should come on.  
* Open up the Arduino IDE. 
* With no shield attached, load a [bare minimum sketch](https://www.arduino.cc/en/Tutorial/BareMinimum) onto Arduino UNO. ([How to Upload a Sketch](http://www.dummies.com/how-to/content/how-to-upload-a-sketch-to-an-arduino.html))  


[![ShieldWifi.jpg](//i.publiclab.org/system/images/photos/000/013/011/medium/ShieldWifi.jpg)](//i.publiclab.org/system/images/photos/000/013/011/original/ShieldWifi.jpg)  

* Attach the RN-XV to the shield.  


[![ShieldWifiArduino.jpg](//i.publiclab.org/system/images/photos/000/013/012/medium/ShieldWifiArduino.jpg)](//i.publiclab.org/system/images/photos/000/013/012/original/ShieldWifiArduino.jpg)  

* Attach the shield to the Arduino UNO.   

[![USB_switch.jpg](//i.publiclab.org/system/images/photos/000/013/013/medium/USB_switch.jpg)](//i.publiclab.org/system/images/photos/000/013/013/original/USB_switch.jpg)  

* Switch serial select on the shield to "USB".  
* In the Arduino IDE, and Tools > Serial Monitor.  
* Select "no line ending" in the Serial Monitor.  
* Enter "$$$".    
* RN-XV will respond with "CMD".  
* Change serial monitor to "carriage return".  
* Enter "set wlan ssid \<id\>" (when entering your network's ID here, substitute any spaces with the character "$").   
* Enter "set wlan phrase \<phrase\>".
* Enter "set wlan join 1". (This is a new step that I had to add to the original instructions after troubleshooting. The RN-XV disables auto-joining networks after firmware version 4.0, so you have to enable it. [Here's the manual](http://cdn.sparkfun.com/datasheets/Wireless/WiFi/rn-wiflycr-ug-v1.2r.pdf) in case you also run into trouble.)      
* Enter "save".  
* Enter "reboot".  
* If you successfully connect to the internet, the only light blinking on your RN-XV should be green, which should be blinking slowly.  
* Next, follow the instructions [here](http://www.mentalmunition.com/2013/06/step-by-step-guide-to-programming-rn-xv.html) for updating your shield, which worked perfectly.  

**Step 3: Fun with wires** 
Most of my experience with soldering was helping my father on plumbing jobs when I was a kid, so suffice it to say, those skills aren't supremely transferrable here. Since I expect to be doing a fair amount of prototyping, I did want to get a decent soldering iron, so I invested in the Hakko FX888, which gets great reviews as a mid-level station. Originally, I actually also purchased lead-free solder because I wanted to make something that is friendlier, healthier, and generally more compliant with regulations, but after doing some reading and messing around, I discovered the lead-free solder was more difficult to work with -- this proved to be problematic since the soldering required (as described below) was a bit fiddly, so I ended up grabbing some basic 60/40 Rosin-Core solder from Radio Shack instead. MUCH EASIER. 

I also originally planned on stripping and using 22 AWG wire for the whole project, but after a separate order from Adafruit arrived, I ended up using male-to-male jumper cables for everything, since they just were less of a pain. 
 
###Questions and next steps
Xively Account setup

###Why I'm interested
Long term, I'm interested in building stylish, usable wearable environmental monitoring hardware. But, I have what can be described as "complete noob" hardware skills, so I want to get myself some basic skills in both hardware and environmental monitoring before I try something truly cutting edge. 