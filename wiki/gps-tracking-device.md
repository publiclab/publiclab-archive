---
title: GPS tracking device
tagnames: gps, umass-amherst, amherst-media, 5-college, publiclab-at-amherst-media, publiclab-at-umass, makers-and-amherst-media
author: najwa
path: /wiki/gps-tracking-device.md
nid: 11171
uid: 428842

---

# GPS tracking device

by [najwa](../profile/najwa)

September 23, 2014 01:28 | Tags: [gps](../tag/gps), [umass-amherst](../tag/umass-amherst), [amherst-media](../tag/amherst-media), [5-college](../tag/5-college), [publiclab-at-amherst-media](../tag/publiclab-at-amherst-media), [publiclab-at-umass](../tag/publiclab-at-umass), [makers-and-amherst-media](../tag/makers-and-amherst-media)

  
     I am one of the students of the Public Laboratory for Science class at Umass Amherst in collaboration with the five colleges. The project that I am working on is  a GPS device set on an animal collar using cheap technology and open source software to track animals. It should be capable of being used whether for tracking domestic animals ( dogs) or wild animals. 

     The tracking device will be based on an arduino. For GPS tracking and data logging, there is the ultimate GPS shield  from Adafruit that is 2 in 1 and that is easily connected to the arduino. I will be using the Adafruit GPS and SD logging libraries and uploading them to the Arduino using the arduino IDE. 

      One of the main challenges of this project is to keep the device as light as possible so it could be handled by smaller animals. So to power the system, i need a small and light battery that can run the system long enough. A small rechargeable lithium ion battery can give me up to 6 hours of logging. This could be enough for domestic animals tracking.  To study the movement of wild animals we might want logging that can go for weeks. So i though that a solar powered device could be the best idea for a self rechargeable device, but this would be the solution only and particularly for animals of medium size that live in deserted/warm areas.  
   
     I thought about battery saving by turning off GPS logging when the animal is immobile. I will have to search on how to program the Arduino to stop the data logging after a set period of time that returns the same location. However, makers have experimented with this technique before and found a very small decrease in battery usage that is in the mA level. 

    The tracking device should be waterproof. The best way to make a perfect sized waterproof container is to use a 3D printer. And a PVC Polyester collar would be the cheapest waterproof material that could be used. 

    I have a list of the parts that i need to make the device:
**
__Arduino UNO

- Adafruit shield that is a two in one GPS/MicroSd shield http://www.adafruit.com/products/1272  

- Battery, lithium ion polymer, 3.7V, 150mAh ( + Lithium ion battery charger)

- JST-PH battery extension cable_**

I will make my tracking device in 2 main stages. 

Stage1 : make a GPS tracker (using an Arduino Uno <for prototyping> and the Adafruit ultimate GPS shield)
So this GPS  log the data on a micro SD card that has to be connected to the computer after the logging is done.

Stage2 : Make a 3D printed case for the GPS. 

    Now, i received my Arduino uno and Adafruit ultimate GPS shield, and i already have a micro SD card that i can use. So i can start Stage1.

Since it's my first time working with an Arduino, i tried the simple LED circuit first. I had a problem uploading the sketch to the Arduino, after checking out their help page, i found that i didn't set the Arduino to use the right serial port in Tools. I also made the circuit differently, so that i fully understand how the circuit works. 

   Assembly: 
  To assemble the Arduino with the GPS shield , i used male headers that came with the Adafruit package. 

[![gpsStage1.jpg](https://i.publiclab.org/system/images/photos/000/007/380/medium/gpsStage1.jpg)](https://i.publiclab.org/system/images/photos/000/007/380/original/gpsStage1.jpg)

 I stacked the GPS shield on top of the Arduino, then, i soldered all the pins ( after many failed attempts, i should work on my soldering skills).

[![gpasStage1_2.jpg](https://i.publiclab.org/system/images/photos/000/007/381/medium/gpasStage1_2.jpg)](https://i.publiclab.org/system/images/photos/000/007/381/original/gpasStage1_2.jpg)

    The first way to test the GPS is to put the Adafruit shield on direct mode. This will make the Arduino work as if it's a USB bridge. I uploaded a blank sketch as and the GPS started giving raw GPS output that was basically blank. The GPS should get a fix outside to give valid data, but this experiment verifies that the GPS is properly working. 
    


[![Screen_Shot_2014-12-02_at_10.54.34_PM.png](https://i.publiclab.org/system/images/photos/000/008/201/medium/Screen_Shot_2014-12-02_at_10.54.34_PM.png)](https://i.publiclab.org/system/images/photos/000/008/201/original/Screen_Shot_2014-12-02_at_10.54.34_PM.png)


    After making sure that the GPS worked, I switched to soft serial connect and uploaded the Adafruit GPS library to read data from the GPS. So from this library, i uploaded the leo-echo sketch to the Arduino . I also kept the frequency update of the data to the lowest at 1 HZ (10 times a second).


[![Screen_Shot_2014-12-02_at_10.54.46_PM.png](https://i.publiclab.org/system/images/photos/000/008/202/medium/Screen_Shot_2014-12-02_at_10.54.46_PM.png)](https://i.publiclab.org/system/images/photos/000/008/202/original/Screen_Shot_2014-12-02_at_10.54.46_PM.png)



   Parsing Data : Adafruit made this task tremendously easily with their GPS library. It gives the user access to the updated information without any parsing work. I uploaded the parsing sketch to the Arduino , and did 2 small changes.  < https://learn.adafruit.com/adafruit-ultimate-gps-logger-shield > . 
    

[![Screen_Shot_2014-12-02_at_10.54.12_PM.png](https://i.publiclab.org/system/images/photos/000/008/203/medium/Screen_Shot_2014-12-02_at_10.54.12_PM.png)](https://i.publiclab.org/system/images/photos/000/008/203/original/Screen_Shot_2014-12-02_at_10.54.12_PM.png)


   SD logging: a micro Sd card has to be to the GPS shield to store all the GPS data as the internal logging is not recommended and is hard to use. I uploaded the shield_sdlog sketch to the Arduino  from the GPS library. 
Now the GPS is ready to be tested!


[![Screen_Shot_2014-12-02_at_10.56.45_PM.png](https://i.publiclab.org/system/images/photos/000/008/204/medium/Screen_Shot_2014-12-02_at_10.56.45_PM.png)](https://i.publiclab.org/system/images/photos/000/008/204/original/Screen_Shot_2014-12-02_at_10.56.45_PM.png)

   I connected the GPS to my computer ( because it has no battery yet) and took the bus from Amherst media to Mount Holyoke. 
   Then, i took the SD card from the GPS and connected it to my computer and found the file of the Data that has been logged.

    To map the data, i used Google Earth. But the file created by the GPS needs to be converted from its original format with the .TXT extension to the format accepted bt Google earth with the .gpx extension. To do that, i used this great website called " GPS visualizer"  that converted the file for me. 

[![Screen_Shot_2014-10-08_at_4.55.40_PM.png](https://i.publiclab.org/system/images/photos/000/007/471/medium/Screen_Shot_2014-10-08_at_4.55.40_PM.png)](https://i.publiclab.org/system/images/photos/000/007/471/original/Screen_Shot_2014-10-08_at_4.55.40_PM.png)

I opened the file in Google Earth and the data was mapped!

[![Screen_Shot_2014-10-09_at_2.35.51_PM.png](https://i.publiclab.org/system/images/photos/000/007/720/medium/Screen_Shot_2014-10-09_at_2.35.51_PM.png)](https://i.publiclab.org/system/images/photos/000/007/720/original/Screen_Shot_2014-10-09_at_2.35.51_PM.png)

Now it's time to add a battery to the device. I connected a lithium battery to an extension cable that i cut and soldered to the back of the Arduino where the battery pins are. 

[![10744516_709407662468855_1887329268_n.jpg](https://i.publiclab.org/system/images/photos/000/007/675/medium/10744516_709407662468855_1887329268_n.jpg)](https://i.publiclab.org/system/images/photos/000/007/675/original/10744516_709407662468855_1887329268_n.jpg)

[![10744738_709408039135484_1302069551_n.jpg](https://i.publiclab.org/system/images/photos/000/007/674/medium/10744738_709408039135484_1302069551_n.jpg)](https://i.publiclab.org/system/images/photos/000/007/674/original/10744738_709408039135484_1302069551_n.jpg)

Now i am moving to stage2 of the device. I am designing a 3D printed case for the GPS. 

-First challenge is that the case should be made with the least number of separate pieces as possible, so that it could somewhat be waterproof. 

-The case should be able to be opened to have access to the SDcard to map the data on a computer.

Given these two important points, i came up with a first design.
-have a box made of one piece with a sliding part on the front (just like in a remote control) that will enable the access to the SD card, and the usb port.
    However, it eventually seemed very challenging to make the sliding part because in needs precise measurement details at a high level which is very challenging to convert from theory to practice.

Thus, i decided to think of  a new design that i much simpler and more efficient.
The the box should be made of two halves where a smaller half will slide in the bigger one. And the inside half should have a bigger height so that when inserted, it is easy to take it out. 
I used SketchUp to make my design. 

[![Screen_Shot_2014-11-19_at_2.57.57_PM.png](https://i.publiclab.org/system/images/photos/000/008/016/medium/Screen_Shot_2014-11-19_at_2.57.57_PM.png)](https://i.publiclab.org/system/images/photos/000/008/016/original/Screen_Shot_2014-11-19_at_2.57.57_PM.png)


I added a handle on both sides of the outer container to attach the dog collar through it. There is a 0.5 mm difference between the two sides of the boxes.
[![Screen_Shot_2014-11-19_at_3.44.31_PM.png](https://i.publiclab.org/system/images/photos/000/008/015/medium/Screen_Shot_2014-11-19_at_3.44.31_PM.png)](https://i.publiclab.org/system/images/photos/000/008/015/original/Screen_Shot_2014-11-19_at_3.44.31_PM.png)


However, after a great session with professor Schreyer, and regarding his experience with 3D printing, we came up to the conclusion that even with half a millimeter of gap between the two boxes, they will still be lose.
  To address that problem, i am going to add a kind of small bumps inside the outer box to create friction between the two halves so that they hold well all together. 
                
              

[![Screen_Shot_2014-12-02_at_11.18.52_PM.png](https://i.publiclab.org/system/images/photos/000/008/211/medium/Screen_Shot_2014-12-02_at_11.18.52_PM.png)](https://i.publiclab.org/system/images/photos/000/008/211/original/Screen_Shot_2014-12-02_at_11.18.52_PM.png)


    
[![Screen_Shot_2014-12-02_at_11.18.54_PM.png](https://i.publiclab.org/system/images/photos/000/008/210/medium/Screen_Shot_2014-12-02_at_11.18.54_PM.png)](https://i.publiclab.org/system/images/photos/000/008/210/original/Screen_Shot_2014-12-02_at_11.18.54_PM.png)

NEXT STEPS 

The GPS tracker that i made has battery issues. It needs a more powerful power supply than any of the small lithium batteries can supply. The next step for students who chose to work on this project is to solve this problem and figure out a way of:

- Lowering battery usage (without coding the Arduino on sleeping modes). Or,

- Experimenting with new battery sources for the GPS.

-Solar power would be a great source of power to 
examine. 





   

  
   

   