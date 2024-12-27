---
title: "Pollution to Solution: Calibrating Ozone Sensor."

tagnames: 'arduino, air-quality, sensors, umass-amherst, makerspaces, amherst-media, 5-college, air-sensors'
author: epongrat
path: /notes/epongrat/12-15-2014/calibrating-ozone-sensor.md
nid: 11459
uid: 428825

---

![](https://publiclab.org/public/system/images/photos/000/008/397/original/Screen_Shot_2014-12-05_at_2.09.39_PM.png)

# Pollution to Solution: Calibrating Ozone Sensor.

by [epongrat](../../../profile/epongrat) | December 15, 2014 03:42

December 15, 2014 03:42 | Tags: [arduino](../tag/arduino), [air-quality](../tag/air-quality), [sensors](../tag/sensors), [umass-amherst](../tag/umass-amherst), [makerspaces](../tag/makerspaces), [amherst-media](../tag/amherst-media), [5-college](../tag/5-college), [air-sensors](../tag/air-sensors)

----

###What I want to do

I want to calibrate my ozone sensor so that I can make sense of the data it collects.

###My attempt and results

Using the multi media lab at the Du Bois Library, I made a video about my research! Check it out [here!](http://youtu.be/6cVpnU7CgZI)

I met with Professor Rick Peltier in the School of Public Health at UMass Amherst. He conducts research in the really cool [Peltier Aerosol Lab](http://people.umass.edu/aerosollab/) in Morrill. We hooked up a tube to his ozone generator and fed it into a hole in a container. We plugged a usb cord into my laptop and fed the it through another hole in the container and hooked up my ozone sensor. We closed the container and pumped ozone in at varying parts per million (ppm). First we shot it up to 1000 so that we would recognize a spike in the data as our starting point. Then I generated ozone at 25->50->100->200->500->200->100->50->25 ppm, for 5 minutes at each concentration.

When I checked out the SD card on my laptop later, it only had 294 readings which came out to be about 5 minutes of data. Since I collected readings every second for over 30 minutes I should have had over 1,800 readings. I think the problem was that the wires on the sensor weren't soldered to my shield. It could also be have been a problem with the code. 

So I went back to the electrical engineering lab, M5 and I soldered the other ends of the wires to the datalogger shield as shown below. I also thought it would be a good idea to change the code so you could see the date and time that each reading was made by the sensor. So I met with Professor Steve Brewer in the Biology Department at UMass and he showed me how to change the code to include real time.



[![soldering.JPG](https://i.publiclab.org/system/images/photos/000/008/399/medium/soldering.JPG)](https://i.publiclab.org/system/images/photos/000/008/399/original/soldering.JPG)



Professor Peltier suggested that I do another test run in my room to see if my sensor could get consistent readings. I left it running in my room from 10pm to 8am. The .xls below shows my results. I believe that when the sensor is running at 5 volts, this is supposed to mean that there is no ozone, but it can also be sensitive to the gases that make up ozone, like NO2. I was hoping for the readings to have settled on one number early on in the night. 


<a href="https://i.publiclab.org/system/images/photos/000/008/396/original/Home_Test.xls"><i class="icon icon-file"></i> Home_Test.xls</a>



###Questions and next steps

I wonder if the downward trend in my data could be due to my room getting warmer as the night went on. Maybe the sensor didn't have use 5 volts to stay hot?

Another thought is that I might not have done an effective job soldering my wires.

My next steps are to run my sensor in a more controlled environment and for longer and see if I get better results. And to keep consulting with Professor Peltier until we're convinced that the sensor is accurate.

###Why I'm interested

I eventually want to set up my sensor outside of schools in Springfield and see if car exhaust is having an effect on the air that the children breath!