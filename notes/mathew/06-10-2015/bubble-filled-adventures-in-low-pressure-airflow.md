---
title: 'bubble-filled adventures in low-pressure airflow'
tagnames: calibration, diy, air, dustduino, open-air, openair, shinyei, particle-monitor, airflow, bubbles, soap, response:11949
author: mathew
path: /notes/mathew/06-10-2015/bubble-filled-adventures-in-low-pressure-airflow.md
nid: 11968
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/010/301/original/IMG_20150610_151055.jpg)

# bubble-filled adventures in low-pressure airflow

by [mathew](../profile/mathew) June 10, 2015 22:20

June 10, 2015 22:20 | Tags: [calibration](../tag/calibration), [diy](../tag/diy), [air](../tag/air), [dustduino](../tag/dustduino), [open-air](../tag/open-air), [openair](../tag/openair), [shinyei](../tag/shinyei), [particle-monitor](../tag/particle-monitor), [airflow](../tag/airflow), [bubbles](../tag/bubbles), [soap](../tag/soap), [response:11949](../tag/response:11949)

----

###What I want to do
I want to measure the airflow through low-cost particle sensors.  The Dylos, Speck, and AirBeam all [use small computer fans](/notes/mathew/05-05-2015/evaluating-low-cost-optical-dust-sensors) that are produce a high-volume, low pressure flow.

While I've been using the [transit of a bubble down a graduated cylinder](/notes/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration) to measure higher-pressure air pumps, such as those used in more expensive commercial particle sensors like the Dusttrak I & II and PDr-1500, the 1/4-1/8" (3-6mm) tubing used by those pumps will choke the flow of a low pressure fan.  How can I modify the soap bubble method to work with a low-pressure fan? 

###My Setup

I decided that to measure low-pressure flow I shouldn't restrict the airflow at all. I had a 1L graduated cylinder with a 6cm opening at the bottom, which was much bigger than the Speck's air intake, and bigger but not quite as wide as the Dylos 1100's air intake.  I sawed the bottom off so it would be a completely open tube.  Here were my materials:

[![Screen_Shot_2015-06-10_at_11_18_37_AM.png](https://i.publiclab.org/system/images/photos/000/010/289/medium/Screen_Shot_2015-06-10_at_11_18_37_AM.png)](https://i.publiclab.org/system/images/photos/000/010/289/original/Screen_Shot_2015-06-10_at_11_18_37_AM.png)

I was wondering how I would get a temporary but airtight seal between the monitors and the graduated cylinder.  A rubber glove was too big and slid around, but we conveniently had some [endangered-species themed condoms from the Center for Biological Diversity](http://www.endangeredspeciescondoms.com/) hanging around the office.  I unrolled the condom and washed the silicone lubricant off with soap, and then cut the tip off to make a tube.  The unlubricated condom is a very tacky latex that stuck to the monitors well:

[![IMG_6199.JPG](https://i.publiclab.org/system/images/photos/000/010/290/medium/IMG_6199.JPG)](https://i.publiclab.org/system/images/photos/000/010/290/original/IMG_6199.JPG)

[![IMG_6200.JPG](https://i.publiclab.org/system/images/photos/000/010/291/medium/IMG_6200.JPG)](https://i.publiclab.org/system/images/photos/000/010/291/original/IMG_6200.JPG)

[![IMG_6204.JPG](https://i.publiclab.org/system/images/photos/000/010/292/medium/IMG_6204.JPG)](https://i.publiclab.org/system/images/photos/000/010/292/original/IMG_6204.JPG)

###Problems
The large diameter graduated cylinder was hard to keep well-soaped up and kept drying out. Without a good coating of soap the bubbles either pop or worse: they stick to the sides of the tube and become deformed. 

Despite the large size of the graduated cylinder, the timed tests were only a few seconds for both the Dylos and Speck, so my timing was not very accurate and the volume is a bit rough. 

Popping the bubbles before they got to the dust sensors was a challenge, and I don't think I could add a [proper bubble drop-out](http://publiclab.org/notes/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration#c11923) container without changing the flow. On the Dylos I missed a bubble and it got into the intake, blocking a part of it! I noticed this in the change in my measurement time and turned the system off quickly.  The soap could potentially damage the optics and electronics, so this isn't the safest way to measure flow. 

I may have restricted the flow of the dylos through the graduated cylinder I used:

[![IMG_6204.JPG](https://i.publiclab.org/system/images/photos/000/010/292/medium/IMG_6204.JPG)](https://i.publiclab.org/system/images/photos/000/010/292/original/IMG_6204.JPG)

###Results
I measured the transit of the bubble over 800ml of the 1000ml flask, using the [same methodology as I did for testing pumps](/mathew/06-04-2015/using-soap-bubbles-for-pump-calibration).
 
**Speck flow rate:**
_3.3L/m_

time to transit 800ml in three different tests, 14.50, 14.36, 14.59.

**Dylos flow rate:**
_14.5L/m_

time to transit 800ml in five tests, 3.10, 3.03, 3.30, 3.50, 3.76.  I ignored the highest time (generated when a bubble blocked a bit of the entrance) and the lowest and averaged the middle three.

###Questions and next steps
there is a huge difference in flow between the Dylos and Speck.  The Dylos is a different sensor, but it has a similar function.  Would greater airflow improve the Speck's results? the Speck currently outputs a total particle count, not a concentration (micrograms/cubic meter).  will airflow help us derive an equivalent concentration?

###Why I'm interested
The low-cost Shinyei PPD42 sensor finding its way into [a lot of DIY air monitors](/notes/mathew/05-05-2015/evaluating-low-cost-optical-dust-sensors) appears to have a quite noisy signal, a fact that A.J. of the [Pickle Jr. team has best documented](http://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/).  The signal appears to be vastly improved by increasing the flow of air through the sensor, but thus far I haven't seen anyone documenting the volume of air moving past the Shinyei both with and without a fan.   I want to answer the following questions:

**Is a fan the best system for regulating airflow? 
**Would a squirrel cage or a pump work better?  [Almost all the professional-grade (and expensive) optical particulate monitors like the Dusttrak and PDr-1500 use pumps](/notes/mathew/05-05-2015/evaluating-low-cost-optical-dust-sensors).  It is easier to measure the flow of a pump, and a pump is less likely to be affected by wind or ambient airflow, and therefore most likely more reliable outdoors. But pumps are much more expensive (though still affordable) and much louder than fans, and their flow is likely to drift more over time.  Being able to compare different air flow methods at similar volumes of air seems important to answering this question. 

**What is the ideal volume to flow through a Shinyei PPD42 sensor?**
The Shinyei's manual indicates the minimum pulse time of 10ms, and with a unpowered airflow we get a lot of ~9ms pulses.  If we increase the airflow, can the system still catch small particles? Are we missing those pulses, or will we have timing issues if we increase airflow?  

