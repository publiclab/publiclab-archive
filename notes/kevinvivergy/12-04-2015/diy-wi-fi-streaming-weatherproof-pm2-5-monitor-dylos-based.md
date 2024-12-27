---
title: "DIY: Wi-Fi Streaming Weatherproof PM2.5 Monitor (Dylos-based)"

tagnames: 'particulate-sensing, raspberry-pi, air-quality, dust, particulates, pm, particulate-monitoring, pm-sensing, time:5h, difficulty:medium, activity:open-air, category:monitor, status:complete'
author: kevinvivergy
path: /notes/kevinvivergy/12-04-2015/diy-wi-fi-streaming-weatherproof-pm2-5-monitor-dylos-based.md
nid: 12481
uid: 456612

cids: 13033,13034,13035,13039,13043,13045,13046,14245,14250,14251,14253,14254,14255,14756,14759,15622,15625,15627

---

![](https://publiclab.org/public/system/images/photos/000/013/192/original/20151204_112527.jpg)

# DIY: Wi-Fi Streaming Weatherproof PM2.5 Monitor (Dylos-based)

by [kevinvivergy](../../../profile/kevinvivergy) | December 04, 2015 23:10

December 04, 2015 23:10 | Tags: [particulate-sensing](../tag/particulate-sensing), [raspberry-pi](../tag/raspberry-pi), [air-quality](../tag/air-quality), [dust](../tag/dust), [particulates](../tag/particulates), [pm](../tag/pm), [particulate-monitoring](../tag/particulate-monitoring), [pm-sensing](../tag/pm-sensing), [time:5h](../tag/time:5h), [difficulty:medium](../tag/difficulty:medium), [activity:open-air](../tag/activity:open-air), [category:monitor](../tag/category:monitor), [status:complete](../tag/status:complete)

----

Air pollution, specifically particulate matter 2.5, can vary significantly over space and time. Although the EPA's [AirNow](https://docs.airnowapi.org/) system is good in the sense that it has highly accurate monitors and releases the data hourly to the public, I was dissatisfied with its coverage in my area, the greater Boston area. There are 5 monitors that provide data to 4.7 million people... not very granular! Furthermore, this data is pretty impersonal- these monitors are not located in publicly visible places, and simply reporting an air quality value for a massive area is not going to make it feel very real to people after considering that air pollution is not in a high enough concentration to be visible here 95% of days.

So, I wanted to bring air pollution data down to a very human level so the average Boston resident could understand its relevance to their lives. My requirements for the monitor were:

1. A technology that was proven accurate in independent testing for a reasonable price
2. Live streaming to the web via Wi-fi for ease of sharing the data
3. Weatherproof down to 0 degrees Fahrenheit, able to withstand the Massachusetts winter
4. Power and internet demands that were easily available in the US
5. Minimal maintenance for ease of use by end-user
6. 100% uptime, no interruptions in service by device.

The following instructions show how I built V1 for approximately $500. I settled on creating a system based around the following 3 technologies:

1. Dylos DC 1100 Pro with PC interface ([link](http://www.dylosproducts.com/dcproairqumo.html))
2. CanaKit Raspberry Pi w/ Wi-Fi ([link](http://www.amazon.com/CanaKit-Raspberry-Complete-Original-Preloaded/dp/B008XVAVAW))
3. Primex P1000 weatherproof case ([link](http://primexfits.com/enclosures/our-products/p1000nid))

Other things you will need:
-Reflectix Insulation ([link](http://www.homedepot.com/p/Reflectix-16-in-x-25-ft-Double-Reflective-Insulation-with-Staple-Tab-ST16025/100012574))
-Velcro adhesives ([link](http://www.amazon.com/dp/B00006RSWT/ref=twister_B00Q2PLY20?_encoding=UTF8&psc=1))
-Zipties
-Incandescent rope lights for heating([link](http://www.homedepot.com/p/Commercial-Electric-6-ft-Incandescent-Clear-Rope-Light-Kit-ML-2W-6Ft-Ex-E/203740364))
-Trendnet Serial to USB cable([link](http://www.amazon.com/TRENDnet-TU-S9-USB-Serial-Converter/dp/B0007T27H8))
-3 Way Wall Outlet Plug Adapter ([link](http://www.amazon.com/Outlet-Wall-Adapter-Shaped-Prong/dp/B0081A4GEC))
-Scissors
-Box cutter

And it looks like this:

[![20151204_112527.jpg](//i.publiclab.org/system/images/photos/000/013/193/medium/20151204_112527.jpg)](//i.publiclab.org/system/images/photos/000/013/193/original/20151204_112527.jpg)

Here are 4 key resources I consulted to make this:
1. Drexel senior design project, outdoor Dylos system ([link](http://www.cleanair.org/sites/default/files/Drexel%20Air%20Monitoring_-_Final_Report_-_Team_19_0.pdf))
2. WorldAQI Build Your Own Wi-Fi Enabled Dylos Monitor ([link](http://aqicn.org/faq/2013-09-08/dylos-air-particule-counter-experimentation-part-1/))
3. Outdoor Cat Enclosure, heated and insulated for cheap ([link](http://www.instructables.com/id/Cat-House/step3/Parts/))
4. Accuracy testing for Dylos monitor ([link1](http://www.aqmd.gov/aq-spec/evaluations#&MainContent_C001_Col00=2))([link2](http://www2.epa.gov/air-research/air-sensor-toolbox-citizen-scientists-resources#ASG))([link3](http://aqicn.org/sensor/))

Live experiment streaming currently at [joinvivergy.com/schools](joinvivergy.com/schools)

The heating method is needed for proper functionality of the Dylos. In order for the Dylos to read accurately, it needs to be at a temp above 32 degrees Fahrenheit, I aim for 40 degrees to be safe.

###Part 1: Connecting Raspberry Pi to Dylos/ Wi-Fi Enabled

1. Set up your Raspberry Pi with Raspbian OS, as provided
2. Connect your Raspberry Pi to the Dylos with the Serial to USB cable.
3. Download the PHP scripts from the WorldAQI project ([link](https://github.com/aqicn/dylos)) to the Pi and follow included instructions. You are also going to want to set it up so that they run on startup of the Pi, instructions at that link as well. Furthermore, you may want to stream the results to your personal server if you want to manipulate the data yourself. Check line 82 of /dylos.php to change to destination of data.

Finished picture:

[![AirwatchOutdoors2.jpg](//i.publiclab.org/system/images/photos/000/013/196/medium/AirwatchOutdoors2.jpg)](//i.publiclab.org/system/images/photos/000/013/196/original/AirwatchOutdoors2.jpg)



###Part 2: Setting Up the Enclosure

Start by lining your Primex P1000 with insulation, attached with Velcro.

Bare enclosure

[![20151125_005519.jpg](//i.publiclab.org/system/images/photos/000/013/197/medium/20151125_005519.jpg)](//i.publiclab.org/system/images/photos/000/013/197/original/20151125_005519.jpg)

Plan for velcro on Primex

[![PrimexSetup.png](//i.publiclab.org/system/images/photos/000/013/199/medium/PrimexSetup.png)](//i.publiclab.org/system/images/photos/000/013/199/original/PrimexSetup.png)

And Reflectix Insulation
[![ReflectixBottom.png](//i.publiclab.org/system/images/photos/000/013/200/medium/ReflectixBottom.png)](//i.publiclab.org/system/images/photos/000/013/200/original/ReflectixBottom.png)


[![ReflectixTop.png](//i.publiclab.org/system/images/photos/000/013/201/medium/ReflectixTop.png)](//i.publiclab.org/system/images/photos/000/013/201/original/ReflectixTop.png)

Finished picture with velcro attached (minus second strip of velcro for attaching incandescent lights

[![20151201_220717.jpg](//i.publiclab.org/system/images/photos/000/013/202/medium/20151201_220717.jpg)](//i.publiclab.org/system/images/photos/000/013/202/original/20151201_220717.jpg)


###Part 3: Assembling pieces within enclosure

First, the lighting/heating. Coil the incandescent rope light into a loop that fits on the left side of enclosure, then use a zip tie to hold the form. Use two loops of Velcro to attach to the top, the attach to the two lines of Velcro "hooks" on top.

Diagram

[![Incandescentlightloopdiagram.png](//i.publiclab.org/system/images/photos/000/013/207/medium/Incandescentlightloopdiagram.png)](//i.publiclab.org/system/images/photos/000/013/207/original/Incandescentlightloopdiagram.png)

Pic
[![20151204_112535.jpg](//i.publiclab.org/system/images/photos/000/013/208/medium/20151204_112535.jpg)](//i.publiclab.org/system/images/photos/000/013/208/original/20151204_112535.jpg)

Second, everything else. It is going to be a tight fit. You need to add one strip of Velcro "loop" side along the bottom of the Pi, then one strip "loop" side at the top of the Dylos and one at the bottom.

Diagram
[![Boxlabeleddiagram.png](//i.publiclab.org/system/images/photos/000/013/209/medium/Boxlabeleddiagram.png)](//i.publiclab.org/system/images/photos/000/013/209/original/Boxlabeleddiagram.png)

Pic

[![BoxDiagram.png](//i.publiclab.org/system/images/photos/000/013/210/medium/BoxDiagram.png)](//i.publiclab.org/system/images/photos/000/013/210/original/BoxDiagram.png)

Make sure to remember to turn the Dylos on before putting it in place!

###Feedback Needed/Next Steps

2 major things I am concerned with/ looking for more elegant solution

1. Worried about re-circulation/separating intake and exhaust. I could not find a good way to create a separate tube or method for separating intake and exhaust for the Dylos, which is a big deal because I don't want the same air to continually recirculate through the system. To test it, last night I lit a cigarette next to one of the intake holes in the Primex to see how long it would take that particulate plume to circulate. Was pretty happy with results, you can check it out at joinvivergy.com/schools, occured on night of 12/3/15. Would love to use a better method though.

2. Heating method
Using waste heat from incandescent lights is less than ideal. Would love to hear ways other people have made it work, I also tried a seedling heat map ([link](http://www.amazon.com/Hydrofarm-MT10006-19-1-2-Inch-Seedling/dp/B0001WV010)), but it took up too much space. Major constraints are space and cost. The method needs to keep the box above 40 degrees when the outdoor temp is down to 0 degrees.

My next step is installing a humidity sensor in the Pi to make sure it does not get too humid in the enclosure.

###Application

I plan on installing one of these at a school, likely an elementary school, to get some real readings and see the effect of cars and buses on particulates. Schools are ideal places for a couple reasons:

1. Since it is inclusive for all parents/kids, great place to have a conversation about environmental health. 
2. Showing trends caused by personal decisions like car driving is a very accessible way to present the data, minimizes need to discuss atmospheric chemistry, brings the personal decisions/air pollution creation feedback loop down to a very understandable level.

Got any questions/comments? Would love to hear 'em. Leave a comment or reach me at kevin (at) joinvivergy (dot) com.