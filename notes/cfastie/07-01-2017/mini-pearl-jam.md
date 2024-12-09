---
title: Mini Pearl Jam
tagnames: arduino, sensors, data-logging, bme280, arduino-pro-mini, mcp9808, response:14518, mini-pearl-logger, activity:mini-pearl-logger
author: cfastie
path: /notes/cfastie/07-01-2017/mini-pearl-jam.md
nid: 14598
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/020/955/original/mini_20170630-9785.JPG)

# Mini Pearl Jam

by [cfastie](../profile/cfastie) July 01, 2017 05:00

July 01, 2017 05:00 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [data-logging](../tag/data-logging), [bme280](../tag/bme280), [arduino-pro-mini](../tag/arduino-pro-mini), [mcp9808](../tag/mcp9808), [response:14518](../tag/response:14518), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger)

----

*Above: Some perfectly good resistors that I removed from some perfectly good PCBs in hopes of lowering the sleep current of the Mini Pearl Logger.*

Today I deployed the [Mini Pearl Logger](https://publiclab.org/tag/mini_pearl) in the compost pile for the third time. The first two times the batteries did not last very long (Table 1), so I am continuing to apply the modifications that Ed Mallon has perfected in his [Cave Pearl Project](https://edwardmallon.wordpress.com/2016/10/27/diy-arduino-promini-data-logger-2016-build-update/). 

[![Table1longevity.PNG](https://publiclab.org/system/images/photos/000/020/956/large/Table1longevity.PNG)](https://publiclab.org/system/images/photos/000/020/956/original/Table1longevity.PNG)

The first two deployments used a microSD card board suitable for either 3.3 or 5 volt operation. That flexibility requires a voltage regulator and a level shifter on the board which makes it hard to sleep the board at low current between data logging events. So I bought some new boards and followed Ed's instructions to remove three resistors which draw current unnecessarily.

[![mini_20170630-9789.JPG](https://publiclab.org/system/images/photos/000/020/957/medium/mini_20170630-9789.JPG)](https://publiclab.org/system/images/photos/000/020/957/original/mini_20170630-9789.JPG)  
*Above: The original microSD card board (left) and the new one which operates only at 3.3 volts (right). The new board has had three resistors removed.*

Resistors were also removed from the Arduino Pro Mini and real time clock (RTC) boards. This disabled the LEDs on those boards which are not needed for long term unattended deployments. I was hopeful that these modifications would allow the Mini Pearl logger to last for many weeks on four AAA batteries. 

[![mini_20170630-9731.JPG](https://publiclab.org/system/images/photos/000/020/958/large/mini_20170630-9731.JPG)](https://publiclab.org/system/images/photos/000/020/958/original/mini_20170630-9731.JPG)  
*Above: The Mini Pearl Logger is inside the Nalgene bottle and four sensors are outside the bottle. The wires pass through [KAPtery Hull Penetrators](http://kaptery.com/product/hull-penetrator) so the Mini Pearl and battery case are weatherproof. The 70 cm PVC tubes are inserted into the compost pile and a MCP9808 sensor is slid to the bottom of each tube. A BME280 sensor for barometric pressure, temperature, and humidity collects data about ambient conditions.*

If the logger lasts a long time, I will have to wait a long time to find out how long long is. So I tried to learn how to use a multimeter to measure the actual sleep current of the logger. The sketch uses a [low power library](https://github.com/rocketscream/Low-Power) to put the Pro Mini to sleep, and the SD card should sleep when the Pro Mini does. Ed says these components should sleep with less than 0.25 milliamps of current. 

[![mini_20170630-9719.JPG](https://publiclab.org/system/images/photos/000/020/959/medium/mini_20170630-9719.JPG)](https://publiclab.org/system/images/photos/000/020/959/original/mini_20170630-9719.JPG)  
*Above: This compost pile was built a month ago and stayed hot for about three weeks. Before I inserted the temperature sensors this time, I turned the pile which entailed moving the pile's wire mesh enclosure next to the pile and forking the pile back into the enclosure. In the process I added some more of the winter rye and hairy vetch cover crop.*

The results I got from trying to measure the sleep current of the Mini Pearl were a little disappointing but nonetheless revealing. The lowest current I measured was three times higher than the 0.25mA I was hoping for. But the current was dependent on things I didn't think it would be (Table 2). 

[![Table2amperage.PNG](https://publiclab.org/system/images/photos/000/020/960/large/Table2amperage.PNG)](https://publiclab.org/system/images/photos/000/020/960/original/Table2amperage.PNG)

I was warned that the size of the microSD card would make a difference, and it did. I confirmed Ed's advice to use cards smaller than 4GB unless they are Muve Music cards. I did not expect that having sensors connected to the logger would make a big difference. When the sketch uses a sensor that sensor gets initialized and powered up. Some sensors can be explicitly put to sleep between uses, but that was not happening here. So the sleep current of just a logger is not always the same as the sleep current of a logger with sensors. 

[![mini_20170630-9740.JPG](https://publiclab.org/system/images/photos/000/020/961/medium/mini_20170630-9740.JPG)](https://publiclab.org/system/images/photos/000/020/961/original/mini_20170630-9740.JPG)  
*Above: Film vials cover the tops of the PVC tubes to keep rain out. Tape secures the vials and I hope discourages ants which laid lots of eggs in the tubes last time.*

Even more surprising was the result that even when the sketch does not initialize the sensor, its presence increases the sleep current. So to get the sleep current as low as possible (0.7mA) I had to remove the sensors from the logger. That makes the logger somewhat less useful. 

Aside from all the fascinating things I'm learning, the key finding is that the Mini Pearl Logger is not sleeping as deeply as it probably should be. I don't have any good ideas about what to try next other than to find out if I am using the multimeter correctly, and maybe whether having the wrong fuse in it makes a difference (the 250mA fuse in it was blown and nobody in Vermont seems to have anything smaller than 500mA).

At least I finally got the compost pile turned. 

Here is the sketch running in the compost pile: 
<a href="https://publiclab.org/system/images/photos/000/020/962/original/Mini_3MCP9808_0.4depy.txt"><i class="fa fa-file"></i> Mini_3MCP9808_0.4depy.txt</a>



