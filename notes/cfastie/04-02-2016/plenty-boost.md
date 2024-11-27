---
nid: 12906
title: Plenty boost
path: public/static/notes/cfastie/04-02-2016/plenty-boost.md
uid: 554
tagnames: kite-mapping,arduino,vermont,kite,saturnv,skyshield,response:12330,voltage,battery
---

# Plenty boost

Switching regulators can change the voltage supplied by a battery to a higher or lower level. There are a few recent research notes ([here](https://publiclab.org/notes/donblair/03-23-2016/ttl-serial-jpeg-cameras-microcontrollers), [here](https://publiclab.org/notes/tonyc/03-22-2016/using-mobius-camera-as-a-trap-cam-in-field-deployments)) with examples of how this could be a handy thing, and I have wondered whether it would allow the [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) to [fly with fewer batteries](https://publiclab.org/notes/cfastie/10-23-2015/power-to-the-skyshield).

<iframe width="100%" height="300" src="//publiclab.org/pdf.js/web/viewer.html?file=/system/images/photos/000/015/298/original/BoosttestIC.pdf" frameborder="0" allowfullscreen="" style="border: none;"></iframe>

So I spent $9.53 and bought four DC to DC converter modules to test. One of them does not work and the others do exactly what they are supposed to do. I hooked each one up with different combinations of batteries (mostly AAA or AA, eneloop or alkaline) and measured the battery output and the output of the converter module. One of the modules (Pololu) in the table above has not been tested because I am too cheap to spend $12+, but it looks like it would be better than the ones I tested.

[![Fiveboost.jpg](//i.publiclab.org/system/images/photos/000/015/302/medium/Fiveboost.jpg)](//i.publiclab.org/system/images/photos/000/015/302/original/Fiveboost.jpg)  
*Four switching regulator modules I tested (blue PCBs) and one I would like to test. The photos are not scaled the same.*

Three of the modules I tested are adjustable, so you can choose what voltage you want it to output.  I chose about 7.5 volts because that is what I think the SkyShield autoKAP controller likes to get. 

[![2in-outV.PNG](//i.publiclab.org/system/images/photos/000/015/299/large/2in-outV.PNG)](//i.publiclab.org/system/images/photos/000/015/299/original/2in-outV.PNG)  
*Output of two switching regulators when given different inputs from batteries. The dashed vertical line is the published minimum input voltage for that module. Both of these modules are adjustable with a potentiometer which I set to output about 7.5 volts. The square data point in the upper graph is the result of supplying a higher voltage (8.35V) than the requested output voltage (7.5V). That Sunkee module is a boost (step up) converter only and cannot reduce the input voltage. The 'Practical' module in the lower graph is a buck/boost (step up and step down) converter. When higher voltages are supplied, it reduces the voltage to the requested level.*  

The results from two of the modules are above. The Sunkee module in the top graph might be the most appropriate for the SkyShield. It can output 7.5V when as little as 3V is input from a battery. So three eneloop AAA (3 x 1.2V) could be enough to run a Saturn V Rig (but four would probably be smarter). 

I don't know how long those batteries would last. The specifications for the modules generally say they are 80% to 90% efficient, but that means 10% to 20% of the battery power is being wasted (lost as heat). It might be a worthwhile price to pay to keep the voltage from dropping below the level at which the SkyShield supplies too little voltage to run servos. Without the module, I think four AAA alkaline batteries (4 x 1.5V = 6V) stop supplying sufficient power when their output drops below about 5.5 to 5.8V. With the module, the batteries could keep things running until they were drained down to 3V.

[![efficiency.png](//i.publiclab.org/system/images/photos/000/015/300/large/efficiency.png)](//i.publiclab.org/system/images/photos/000/015/300/original/efficiency.png)  
*The efficiency of a Pololu module that I did not test. When it is set to output 5V with an input of 3.3V The efficiency is between 80% and 90%.*

I like the specs of the Pololu module (in the table above) better than any of the ones I tested. Too bad it costs five times more. The Sunkee module, which is probably the most appropriate one for the SkyShield (of those I tested), has similar specs to the Pololu module represented by the red line in the graph below.

[![outputx_.png](//i.publiclab.org/system/images/photos/000/015/301/large/outputx_.png)](//i.publiclab.org/system/images/photos/000/015/301/original/outputx_.png)  
*Two different adjustable boost converter modules sold by Pololu. The blue one covers the range I need for the SkyShield, so maybe using the red one would waste more power. The $3.00 Sunkee module I tested seems to have specs similar to the red line.*

I don't really know whether the $12+ Pololu module would do a more efficient job than the $3.00 Sunkee module I tested. I also don't know whether the red or the blue curve in the graph above is more appropriate for powering the SkyShield. I guess there is only one way to find out. But since I already have two workable modules, maybe I will never know.

The Sunkee module weighs about the same as an AAA battery. If it allows me to fly the Saturn V Rig with only four AAA instead of six, then I can save the weight of one battery (11 grams). That's probably worth $3.00.



