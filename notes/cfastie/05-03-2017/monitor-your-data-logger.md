---
title: 'Monitor your data logger'
tagnames: arduino, sensors, humidity, data-logging, arduino-nano, response:14152, nano-data-logger, 16x2_lcd, bme280, activity:nano-data-logger
author: cfastie
path: /notes/cfastie/05-03-2017/monitor-your-data-logger.md
nid: 14160
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/020/374/original/LCD3.gif)

# Monitor your data logger

by [cfastie](../profile/cfastie) May 03, 2017 17:12

May 03, 2017 17:12 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [humidity](../tag/humidity), [data-logging](../tag/data-logging), [arduino-nano](../tag/arduino-nano), [response:14152](../tag/response:14152), [nano-data-logger](../tag/nano-data-logger), [16x2_lcd](../tag/16x2_lcd), [bme280](../tag/bme280), [activity:nano-data-logger](../tag/activity:nano-data-logger)

----

*Above: An LCD module displays the data that are being periodically written to SD card.*

Some 3D printer filaments can absorb water and then misbehave during printing. So in some environments, storing opened spools of filament requires controlling the humidity. I store my spools in a big plastic tote with a lid, and I bought some big bags of silica gel to soak up excess moisture. I had no way of telling if the silica gel was helping, until now.

[![nanolog_20170502-8380.JPG](https://publiclab.org/system/images/photos/000/020/353/medium/nanolog_20170502-8380.JPG)](https://publiclab.org/system/images/photos/000/020/353/original/nanolog_20170502-8380.JPG)  
*Above: I used duct tape to cover some holes in the tote at the side handles.*

[![nanolog_20170502-8376.JPG](https://publiclab.org/system/images/photos/000/020/354/medium/nanolog_20170502-8376.JPG)](https://publiclab.org/system/images/photos/000/020/354/original/nanolog_20170502-8376.JPG)  
*Above: Six big bags of silica gel (lower) and my collection of the little packets that come with lots of different things (top). The silica gel has not been reactivated in a couple of years, so I baked it in the oven at 220° F for several hours to remove water.*

[![dryXL.JPG](https://publiclab.org/system/images/photos/000/020/357/medium/dryXL.JPG)](https://publiclab.org/system/images/photos/000/020/357/original/dryXL.JPG)  
*Above: After a couple of years in the tote, I was able to remove water so the mass of the silica gel returned to where it was the last time I cooked it. The heat reduced its mass by 12.2% which means that 266 grams (9 ounces) of water were removed.*

[![m002276030_sc7.jpg](https://publiclab.org/system/images/photos/000/020/355/medium/m002276030_sc7.jpg)](https://publiclab.org/system/images/photos/000/020/355/original/m002276030_sc7.jpg)  
*Above: Nine ounces is a lot of water to lose from 2.2 kg (4.9 pounds) of silica gel. Eight ounce bottle is shown.*

[![nanolog_20170502-8387.JPG](https://publiclab.org/system/images/photos/000/020/356/medium/nanolog_20170502-8387.JPG)](https://publiclab.org/system/images/photos/000/020/356/original/nanolog_20170502-8387.JPG)  
*Above: All the dry silica gel went into the tote with the filament.*

[![nanolog_20170502-8399.JPG](https://publiclab.org/system/images/photos/000/020/358/medium/nanolog_20170502-8399.JPG)](https://publiclab.org/system/images/photos/000/020/358/original/nanolog_20170502-8399.JPG)  
*Above: Humidity is an easy thing to measure with an Arduino and cheap sensor. Logging humidity with the [data logging shield for an Arduino Nano](https://publiclab.org/notes/cfastie/04-30-2017/data-logger-shield-for-nano) is especially easy when there is a power outlet nearby. The Nano data logger does not last very long when powered by batteries, but it's really handy when it's right next to a wall socket.*


[![nanolog_20170502-8436.JPG](https://publiclab.org/system/images/photos/000/020/359/medium/nanolog_20170502-8436.JPG)](https://publiclab.org/system/images/photos/000/020/359/original/nanolog_20170502-8436.JPG)  
*Above: I powered the logger with the DC adapter for a phone. This supplies 5 volts and up to 1800 mA. I replaced the micro USB cable (for Android) with a mini USB cable for the Nano.*  

[![nanolog_20170502-8508ps.jpg](https://publiclab.org/system/images/photos/000/020/360/medium/nanolog_20170502-8508ps.jpg)](https://publiclab.org/system/images/photos/000/020/360/original/nanolog_20170502-8508ps.jpg)  
*Above: With plenty of power, I was able to add a little LCD module to monitor the data while the logger was logging the data to microSD card. These nifty LCDs cost $1.65 and are bright, crisp, and decidedly retro. The LCD cycled through the display of five different parameters (see lead image above). Each was displayed for five seconds (the lead image gif is sped up some).*  

[![nanolog_20170503-8522.JPG](https://publiclab.org/system/images/photos/000/020/361/medium/nanolog_20170503-8522.JPG)](https://publiclab.org/system/images/photos/000/020/361/original/nanolog_20170503-8522.JPG)  
*Above: The LCD module (left) has a smaller black PCB attached to it (with red LED and blue potentiometer). This costs an extra dollar, and turns the LCD module into an I2C device. That reduces the number of wires needed to connect the LCD from eight to four.*  

[![nanolog_20170502-8513pinp.jpg](https://publiclab.org/system/images/photos/000/020/362/medium/nanolog_20170502-8513pinp.jpg)](https://publiclab.org/system/images/photos/000/020/362/original/nanolog_20170502-8513pinp.jpg)  
*Above: To monitor the humidity inside the tote and also in the room, I used two BME280 I2C sensors. Four wires run from the logger (upper right) to a makeshift I2C hub (inset). Then three I2C devices connect to the hub: a sensor in the tote, a sensor in the room air, and the LCD.*  

[![nanolog_20170503-8531-2.JPG](https://publiclab.org/system/images/photos/000/020/363/medium/nanolog_20170503-8531-2.JPG)](https://publiclab.org/system/images/photos/000/020/363/original/nanolog_20170503-8531-2.JPG)  
*Above: Each I2C device must have a unique address. To change the address of one of the BME280 sensors, I cut the trace between the two leftmost copper pads (above the letters "BMP") and soldered a new connection (glob of solder) between the two rightmost pads (glob not shown here).*  

[![drytrace.JPG](https://publiclab.org/system/images/photos/000/020/364/large/drytrace.JPG)](https://publiclab.org/system/images/photos/000/020/364/original/drytrace.JPG)  
*Above: Humidity inside a tote full of 3D printer filament and in the room air next to the tote. The data logging started about an hour before the silica gel was placed in the tote (arrow). Data were written to the SD card every five minutes. Within 30 minutes of closing the tote lid with the freshly dried silica gel inside, the humidity in the tote dropped from 35% to 24%. The humidity continued to drop slowly for the next 20 hours to 15%.*  

So five pounds of silica gel can definitely dry out the air inside a tote. I guess there is some water being removed from the filament, but I haven't learned anything about that. I don't have the tools to weigh the filament. But if the silica gel adsorbs more water than the air in the tote could have been holding at 35% humidity, then we know the excess will have been removed from the filament. 

In the meantime, I really like the pretty blue LCD telling me about the tote.
Here is the sketch running on the Nano: 
<a href="https://publiclab.org/system/images/photos/000/020/375/original/Deek_LCD_2BME.txt"><i class="fa fa-file"></i> Deek_LCD_2BME.txt</a>

A kit with all the parts to make the [Nano Data Logger is available here for $29.00][1].














 

  [1]: http://kaptery.com/product/nano-logger-kit