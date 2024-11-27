---
nid: 10406
title: How do we measure particulate stuff in the air?
path: public/static/notes/donblair/05-03-2014/how-do-we-measure-particulate-stuff-in-the-air.md
uid: 43651
tagnames: particulate-sensing,dust,particulate,pm,optical-pm,wind-sensor,as220-wind-sensors
---

# How do we measure particulate stuff in the air?

###What I want to do

Figure out how inexpensive particulate matter sensors, like the Shinyei, operate, in order to see whether there might be simple ways of improving the sensitivity and range of the device. 

The following is based on recent research notes on the topic:

- Willie's great [teardown of a Shenyei sensor](http://publiclab.org/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor))
- a post on the [DustDuino design](http://publiclab.org/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino)
- a post on the [Speck particle sensor]([here](http://publiclab.org/notes/chrisbartley/04-15-2014/speck-particle-monitor)). 
  
as well as on the nicely commented [DustDuino Arduino code]( [github code](https://github.com/NodeJournalism/DustDuino/blob/master/DustDuino.ino), which links to a [great description](http://www.howmuchsnow.com/arduino/airquality/grovedust/) of the sensor being used.  

I also found some useful background information in an [Arduino forum post on the topic](Arduino forum post, [here](http://forum.arduino.cc/index.php/topic,17261.0.html).

###My attempt and results

[![ShinyeiPPD42NS_Insides_Labeled_600.jpg](https://i.publiclab.org/system/images/photos/000/003/989/medium/ShinyeiPPD42NS_Insides_Labeled_600.jpg)](https://i.publiclab.org/system/images/photos/000/003/989/original/ShinyeiPPD42NS_Insides_Labeled_600.jpg)

Here's my current (crude) understanding of how these sensors work.  Would love to hear thoughts from folks as to whether they think I'm on the right track, here.

Inside the sensor (see Willie's awesome teardown pic above) is an IR LED and an IR photodiode, both pointing at a particular region of air inside the device.  There is a focusing lens, to make sure that the photodiode is receiving sufficient light from this region;  and there is a baffle in front of the IR LED, to prevent the photodiode from registering light from the IR LED directly.  

The basic idea is that the IR photodiode will see IR light only if it is reflected off some particle in the chamber.  When there's no particle ...

[![figA1.png](https://i.publiclab.org/system/images/photos/000/004/014/medium/figA1.png)](https://i.publiclab.org/system/images/photos/000/004/014/original/figA1.png)

... the photodiode is reading 'low', as it's not seeing any IR light.  But when a particle floats into the chamber ... 

[![figB1.png](https://i.publiclab.org/system/images/photos/000/004/015/medium/figB1.png)](https://i.publiclab.org/system/images/photos/000/004/015/original/figB1.png)

... some IR light from the IR LED is reflected off the particle and into the IR photodiode.  The IR photodiode then registers a 'high' signal.  

If we use a microcontroller like an Arduino, which can measure the IR photodiode signal level every few milliseconds, we can record the amount of time that the photodiode signal spends in the 'high'  state versus the 'low' states ...  

[![figC1.png](https://i.publiclab.org/system/images/photos/000/004/016/medium/figC1.png)](https://i.publiclab.org/system/images/photos/000/004/016/original/figC1.png)

... and presumably this proportion -- the amount of time the photodiode registers 'high' versus 'low' -- is related to the amount of 'particulate stuff' floating in front of the sensor during any given time interval (a 30 second measurement interval, say). 

At first I thought: but, ah!  This means we can also measure the particle diameter -- 'long' pulses would be 'large diameter' particles, and 'short' pulses would be 'small diameter' particles. Cool!

But then I realized:  we're not measuring or controlling air flow through the device.  There is a heating element inside the device to encourage air flow -- but we don't really know its effect on air flow (e.g., what if there's a small gust of wind in front of the device at the moment we're measuring the IR photodiode?  Or what if it's particularly cold in the room?) ...

[![figD1.png](https://i.publiclab.org/system/images/photos/000/004/017/medium/figD1.png)](https://i.publiclab.org/system/images/photos/000/004/017/original/figD1.png)

So this means that we can't really relate the 'pulse width' in our signal to a particle size --  a 'long' pulse *could* be due to a larger particle -- or it might actually be due to a very tiny particle taking a long time moving through the beam, because the air flow happened to be low at that moment.  Similarly, a 'short' pulse could be due to a large-diameter particle moving through the beam very quickly. Alas. 

[Note: I'm not then sure how the Shinyei is able to provide information on two different particle ranges.  Perhaps the sensor is applying two different brightness thresholds on the photodiode when registering a 'high' signal -- with the assumption that the brighter threshold is associated with larger particles (more light is reflected)? Any thoughts?]

So then I wondered -- what if we *did* know the rate of air flow through the device?  

[![figE1.png](https://i.publiclab.org/system/images/photos/000/004/018/medium/figE1.png)](https://i.publiclab.org/system/images/photos/000/004/018/original/figE1.png)

If we had this information, maybe we could assess the average air flow during a 'high pulse', and consider that to be the 'rate' of travel of the particle past the photodiode.  So then we'd have the *rate* of particle travel, and the *time* it took to travel its diameter in front of the sensor (assuming it only went in one direction).  *Rate* ... times *time* .... equals ... *distance*!  Where 'distance', in this context, is the particle diameter:

[![figF1.png](https://i.publiclab.org/system/images/photos/000/004/019/medium/figF1.png)](https://i.publiclab.org/system/images/photos/000/004/019/original/figF1.png)

Do y'all think this would work?

Some of you may be thinking:  well, sure, that might work -- but how the heck are you going to measure air flow through the sensor?  Well, look at what I found when searching for 'air flow open hardware':

[![windsensor-450x450.png](https://i.publiclab.org/system/images/photos/000/004/020/medium/windsensor-450x450.png)](https://i.publiclab.org/system/images/photos/000/004/020/original/windsensor-450x450.png)

It's a $17 open source hardware ['hot wire' anemometer from Modern Device](http://moderndevice.com/product/wind-sensor/) that is apparently very sensitive to air flow.  

The description on the page: 

> The Wind Sensor is a thermal anemometer based on a traditional technique for measuring wind speed. The technique is called the “hot-wire” technique, and involves heating an element to a constant temperature and then measuring the electrical power that is required to maintain the heated element at temperature as the wind changes. This measured electrical input is then directly proportional to the square of the wind speed. Hot wire anemometers are available in hand-held packages resembling multimeters, and tend to cost about $300 but this is the first small sensor suitable for electronic experiments. Honeywell also makes larger sensors based on the same principles. The underlying principle that makes the sensor function is the same as the traditional hot-wire technique. This technique excels at low to medium wind speed, and is the preferred technique for sensing indoor air movement, where the spinning cup anemometers typically seen on weather stations are ineffective. As an experimenters tool, the sensor is exquisitely sensitive, with a small puff of air being sensed at a distance of 18-24″. Possible applications include human breath detection, room occupancy detection, hvac system monitoring, weather stations and many more.

Do y'all think we could use something like this device in front of a Shinyei sensor to derive particle sizes -- or at least to calibrate for air flow?  