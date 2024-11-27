---
nid: 15459
title: How to bootload a Riffle #Arduino #water #science #tech
path: public/static/notes/Zengirl2/01-04-2018/how-to-bootload-a-riffle.md
uid: 423961
tagnames: arduino,air-quality,water-quality,water,environment,data-collection,riffle,barnstar:basic,seeks:replications,data-logging,activity:riffle,activity:arduino
---

# How to bootload a Riffle #Arduino #water #science #tech

## Goal

Perhaps you ordered a Riffle without Arduino installed, or maybe you uploaded some code that you thought was correct but ended up bricking your board. Either way you have the capability to load Arduino and get your Riffle ready for action.

## What You'll Need

- Riffle and its battery with JST connector
- USB cable A/micro B (the one used to get your Riffle to the computer)
- Computer with latest version of Arduino installed and open
- USB Tiny ISP Programmer ([like this one](https://www.amazon.com/USBtinyISP-AVR-ISP-Programmer-Arduino/dp/B00N8EVQ30/ref=pd_day0_469_4?_encoding=UTF8&pd_rd_i=B00N8EVQ30&pd_rd_r=M4ARZD47DEM652RCZ3RH&pd_rd_w=gUeFS&pd_rd_wg=lt4Bd&psc=1&refRID=M4ARZD47DEM652RCZ3RH)) with its USB cable. Note that this resembles the old ATMEL programmers, but they are not the same! If you are unsure take the plastic box apart and check the board as these directions are only for the generic USB Tiny ISP style.

## Procedure

![image description](https://publiclab.org/system/images/photos/000/023/097/medium/Switchsm.jpg "Switchsm.jpg")

1\. Set switch on Riffle to USB/Lith (left position)

  
![image description](https://publiclab.org/system/images/photos/000/023/098/medium/Battsm.jpg "Battsm.jpg")

2\. Plug battery into JST port marked _Lithium 3.7V_. The board needs power to be programmed.

  
![image description](https://publiclab.org/system/images/photos/000/023/101/medium/Programmersm.jpg "Programmersm.jpg")

3\. Plug the USB cable from the computer (not shown) into the programmer. An LED inside will glow green.

  
![image description](https://publiclab.org/system/images/photos/000/023/103/medium/Holessm.jpg "Holessm.jpg")

4\. Now locate the six holes that the programmer's pins will need on your Riffle.

  
![image description](https://publiclab.org/system/images/photos/000/023/104/medium/RedWiresm.jpg "RedWiresm.jpg")

5\. Take the programmer's cable and hold the pins so the red wire pin is oriented to go into the top right hole on the Riffle marked _MISO._

  
![image description](https://publiclab.org/system/images/photos/000/023/105/medium/BootSetupsm.jpg "BootSetupsm.jpg")

6\. Go ahead and plug the connector into the holes on the board.

  
![image description](https://publiclab.org/system/images/photos/000/023/106/medium/Screenshot_%2813%29.png "Screenshot_(13).png")

7\. In the Arduino menu go to _Tools_ --\>_Board_ and choose _Arduino/Genuino_. Then go to _Tools_ --\> _Programmer:_ and choose _USB Tiny ISP_.

  
![image description](https://publiclab.org/system/images/photos/000/023/107/medium/Screenshot_%2814%29.png "Screenshot_(14).png")  

8\. Now go to _Tools_ --\> _Burn Bootloader_. The Riffle should blink and in a few seconds Arduino will be loaded. If you get any error reading, try holding the programmer's connector firmly into the board as it can be a bit unstable.

  
![image description](https://publiclab.org/system/images/photos/000/023/108/medium/Blink.JPG "Blink.JPG")

9\. Try taking the Riffle for a test drive by loading the classic _Blink_ program. Make sure the code is set for Pin 9 to activate Riffle's built-in LED.

  
That's it!