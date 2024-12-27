---
title: "Water Quality Sensor"

tagnames: 'new-york-city, arduino, water-quality, water, water-quality-sensor, tool, dontflushme, method, project:water-quality'
author: liz
path: /wiki/water-quality-sensor.md
nid: 1622
uid: 7
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/036/216/original/IMG_4053.jpg)

# Water Quality Sensor

by [warren](/profile/warren), [Dana](/profile/Dana), [Shannon](/profile/Shannon), [lpercifield](/profile/lpercifield), [liz](/profile/liz)

April 05, 2012 18:33 | Tags: [new-york-city](/tag/new-york-city), [arduino](/tag/arduino), [water-quality](/tag/water-quality), [water](/tag/water), [water-quality-sensor](/tag/water-quality-sensor), [tool](/tag/tool), [dontflushme](/tag/dontflushme), [method](/tag/method), [project:water-quality](/tag/project:water-quality)

----

Developed during the Water Hackathon on March 23-25 in New York City, the water quality sensor is a multipurpose tool for collecting data remotely. This tool is rapidly changing and is being used as part of the on going research initiative called [DontFlush.me](https://web.archive.org/web/20160111004345/dontflush.me) (archived).

This tool consists of an Arduino microcontroller, a set of water quality sensors, and a network connection module. As currently developed this tool uses a GSM based cellular module to send data via SMS. 
For this design a custom arduino shield was created. This shield allows the arduino to be powered by a <a href="https://www.adafruit.com/products/353">3.7v lithium ion battery</a>. The shield includes a 3.3v to 5v setup circuit based on the <a href="http://www.ladyada.net/make/mintyboost/">Adafruit Mintyboost</a>.
Currently there are two versions of the shield. Both versions use the waterproof digital <a href="https://www.adafruit.com/products/381">temperature sensor</a> from Adafruit. The shields differ in the electrical conductivity probe they are designed to use. Electrical conductivity (EC) is basically a measure of water's purity. The more pure the water the less conductive. When pollutants enter water it usually causes an increase in EC. Lots of details about EC are available from the <a href="http://water.epa.gov/type/rsl/monitoring/vms59.cfm">EPA site</a>. 

The first probe is DIY. It was created using designs published in the book <a href="http://www.amazon.com/Environmental-Monitoring-Arduino-Building-Devices/dp/1449310567">Environmental Monitoring with Arduino</a>. This probe uses readily available parts from most Radio Shack stores. More details about this probe will hopefully be posted with permission from the book's author.
<img src="https://farm8.staticflickr.com/7083/7048557593_336bb0915a.jpg" alt="Water sensor shield diy ec" />

The second type of electrical conductivity sensor is much more expensive but is lab quality. Its available from <a href="http://atlas-scientific.com/product_pages/kits/ec-kit.html">Atlas Scientific</a>. 
Here is the shield designed for the Atlas Scientific probe.
<img src="https://farm8.staticflickr.com/7112/7048557647_4790818961.jpg" alt="water quality shield atlas ec" />
Connected between the battery and the Arduino is a <a href="https://www.adafruit.com/products/390">solar charging circuit</a>. And also use for [quality control systems](http://www.aquar-system.com/). This is connected to a <a href="https://www.adafruit.com/products/200">2w 6v solar panel</a>. Both of these are available from Adafruit.

The data from this sensor is uploaded to Pachube using a <a href="http://www.seeedstudio.com/depot/gprs-shield-p-779.html?cPath=132_134">GPRS shield</a> from Seeedstudio. The initial prototype was using a TCP/IP connection, which requires a SIM card with a data plan, but the Arduino code is poorly optimized for long durations. The second prototype is sending SMS messages directly to Pachube's beta SMS gateway. 

Here is the sensor all wired up in a pelican case with the solar panel on the top.

<img src="http://p.twimg.com/Ao2Rq7vCAAEJDYt.jpg" alt="Water quality sensor" />