---
nid: 13149
title: Riffle campout
path: public/static/notes/cfastie/05-27-2016/riffle-campout.md
uid: 554
tagnames: arduino,temperature,sensors,water-quality,riffle,noise,micro-sd,response:13128,category:test-limits,data-logging,activity:riffle,riffle-examples,activity:data-logging
---

# Riffle campout

The Riffle had a campout all by itself in the back yard last night. Here are some details about this healthy outdoor activity. 

- Location: Middle of the lawn under the stars
- Time: About 11 PM to 9 AM (sleepyhead campers)
- Sensors: Three I2C MCP9808 temperature sensor modules
- Sketch: riffle_MCP9808_logging3c.ino
- Logging interval: Every 10 seconds because I forgot to change it to something more reasonable
- Logged data: 3600 timestamps, 187KB file
- Power: Three eneloop AAA with a [Pololu boost regulator](https://publiclab.org/notes/cfastie/04-13-2016/tiny-boost)
- Enclosure: [Nalgene bottle](https://publiclab.org/notes/cfastie/03-11-2016/nalgene-submarine) for the Riffle and batteries, sensors were exposed but under cover


[![Riffle_20160527-5689.jpg](//i.publiclab.org/system/images/photos/000/016/376/large/Riffle_20160527-5689.jpg)](//i.publiclab.org/system/images/photos/000/016/376/original/Riffle_20160527-5689.jpg)  
*The ports through the bottle lid are not potted to make them waterproof, so this was just a trial run with the enclosure. A case for four AAA batteries fits into the bottle. The bottle was on its side on a wicker tray with a plastic snow sled propped several inches above everything in case of rain or dew.*

The logged data include the cooling off curve after I brought the thing out of my hot office into the cool back yard. I started the logging in the office because I don't know how to start the Riffle logging without a computer. The warm up in the morning is slow as the hazy sunshine made its way onto the lawn and finally onto the black plastic sled above the enclosure.

[![NightLawn.JPG](//i.publiclab.org/system/images/photos/000/016/377/large/NightLawn.JPG)](//i.publiclab.org/system/images/photos/000/016/377/original/NightLawn.JPG)  
*Temperature traces for three I2C temperature sensors and the sensor in the real time clock (RTC). The RTC on the Riffle was in the Nalgene bottle and the other sensors were exposed (but under cover).*

After the temperature dropped to its lowest point around 3:30 AM, the three traces for the MCP9808 sensors became very noisy. These fluctuations about every 10 to 20 minutes of about 1 to 4 degrees C look suspicious to me. That is, I don't think the air temperature varies like that at 4:00 AM. So this could be noise introduced by the switching regulator in the battery pack I used. Don warned me about that. I will have to repeat this logging with the lithium battery to see if the data behave differently. The higher frequency signal present before 3:00 AM might also be electronic noise. On the other hand, warm woodland creatures could have been dancing around the Riffle in the wee hours.

The three external sensors did not track each other perfectly, but they were separated by a few inches and some were closer to damp grass than others.

[![NightLawnbatt.JPG](//i.publiclab.org/system/images/photos/000/016/379/large/NightLawnbatt.JPG)](//i.publiclab.org/system/images/photos/000/016/379/original/NightLawnbatt.JPG)  
*The sketch logs these two parameters. I don't know what they are or what they mean. The switching regulator was adjusted to deliver 5.2 volts from the battery pack. The same time period is covered in this and the previous graph.*

I have some extra hardware for making cable ports and extra JST connectors for making battery packs. I put them [both at the KAPtery](http://kaptery.com/products/?f=category&id=39). The male JST connectors I have don't fit perfectly into the female connector on the Riffle (lax standards) so I had to whittle away some plastic on the male part to allow it to fit.

Here is the sketch that was running overnight. I had to change the extension from ino to txt to circumvent the rock solid security here at publiclab.org.
<a href="//i.publiclab.org/system/images/photos/000/016/378/original/riffle_MCP9808_logging3c.txt"><i class="fa fa-file"></i> riffle_MCP9808_logging3c.txt</a>




