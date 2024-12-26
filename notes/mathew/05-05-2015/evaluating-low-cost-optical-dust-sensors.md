---
title: "Evaluating low-cost optical dust sensors"\ntagnames: 'wisconsin, air-quality, air, dustduino, dust, particulates, speck, particle-sensing, openair, dylos, airbeam, air-sensors'
author: mathew
path: /notes/mathew/05-05-2015/evaluating-low-cost-optical-dust-sensors.md
nid: 11783
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/009/773/original/figD1.png)

# Evaluating low-cost optical dust sensors

by [mathew](../profile/mathew) | May 05, 2015 00:13

May 05, 2015 00:13 | Tags: [wisconsin](../tag/wisconsin), [air-quality](../tag/air-quality), [air](../tag/air), [dustduino](../tag/dustduino), [dust](../tag/dust), [particulates](../tag/particulates), [speck](../tag/speck), [particle-sensing](../tag/particle-sensing), [openair](../tag/openair), [dylos](../tag/dylos), [airbeam](../tag/airbeam), [air-sensors](../tag/air-sensors)

----

_image credit: @donblair_

See and contribute to the [up-to-date Wiki page made from this note](/wiki/optical-pm). 

###What I Want to Do
We are in the midst of a boom of low-cost air sensing devices, and open source particulate sensing projects have really taken off in the past year.  In this note I’ll look at four in-development projects using almost identical sensors ([Shinyei PPD42NS](/notes/Willie/04-01-2014/field-testing-the-shenyei-pm-sensor), [Syhitech DSM501A](/notes/chrisbartley/04-15-2014/speck-particle-monitor), [Shinyei PPD60PV](http://www.shinyei.co.jp/STC/optical/main_ppd60pv_e.html) ) and a low-cost commercial competitor with a similar design, the [Dylos](http://publiclab.org/notes/mathew/06-12-2014/diy-dust-monitoring-dylos-in-wisconsin).  

I'll also lay out a plan for comparing and calibrating these sensors to each other and to commercial reference equipment. Current efforts have correlated low-cost sensors with commercial reference sensors, but never to each other. [AQICN](http://aqicn.org/sensor/shinyei/), [AirBeam](http://www.takingspace.org/airbeam-technical-specifications-operation-performance/), [Sonoma Tech](http://makezine.com/2014/05/31/air-quality-sensors-how-good-is-good-enough/) [Gao et al. 2015](http://www.sciencedirect.com/science/article/pii/S0269749115000160), [Holstus et al 2014](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf).  Thanks to @Willie for many of those links.

###How the Sensors Work
All these dust sensors are optical sensors.  @DonBlair [explains how](/notes/donblair/05-03-2014/how-do-we-measure-particulate-stuff-in-the-air) optical dust sensors work:

[![figA1.png](https://i.publiclab.org/system/images/photos/000/009/764/medium/figA1.png)](https://i.publiclab.org/system/images/photos/000/009/764/original/figA1.png)

[![figB1.png](https://i.publiclab.org/system/images/photos/000/009/765/medium/figB1.png)](https://i.publiclab.org/system/images/photos/000/009/765/original/figB1.png)

[![figF1.png](https://i.publiclab.org/system/images/photos/000/009/766/medium/figF1.png)](https://i.publiclab.org/system/images/photos/000/009/766/original/figF1.png)

[![figC1.png](https://i.publiclab.org/system/images/photos/000/009/767/medium/figC1.png)](https://i.publiclab.org/system/images/photos/000/009/767/original/figC1.png)

There are issues calibrating optical sensors for not just water particles (humidity), but also for the albedo (or brightness) of the particles themselves, as [Tim Dye succinctly documents.](http://makezine.com/2014/05/31/air-quality-sensors-how-good-is-good-enough/) That said, the biggest differences between different devices is the way they control airflow.  Passive monitors rely on convection to draw in air, while active monitors blow a controlled stream of air across the sensor’s path. ** Which of these strategies is best? I don't know, so I propose co-locating all of these sensors and testing them against benchmark equipment.**


###Airflow strategies comparison:

Passive airflow:
a system that doesn't actively control for airflow, either using natural or thermal convection to drive particulates through.

Active airflow:
The use of a fan or pump to control and/or meter airflow through a sensor.

###Dylos DC1100
by [Dylos](http://dylosproducts.com/ornodcproair.html) [my previous notes](/notes/mathew/06-12-2014/diy-dust-monitoring-dylos-in-wisconsin)

[![Screen_Shot_2014-06-11_at_4.12.58_PM.png](https://i.publiclab.org/system/images/photos/000/009/768/medium/Screen_Shot_2014-06-11_at_4.12.58_PM.png)](https://i.publiclab.org/system/images/photos/000/009/768/original/Screen_Shot_2014-06-11_at_4.12.58_PM.png)

The Dylos uses a small fan.  A great teardown is here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/v25owuUboxI" frameborder="0" allowfullscreen></iframe>

###Speck 
by Carnegie Mellon’s [CREATELab](https://www.specksensor.com/), [my previous notes.](/notes/mathew/06-04-2014/two-weeks-with-a-speck)


the Speck uses a small fan:

[![14155445079_6657caf3aa_b.jpg](https://i.publiclab.org/system/images/photos/000/009/769/medium/14155445079_6657caf3aa_b.jpg)](https://i.publiclab.org/system/images/photos/000/009/769/original/14155445079_6657caf3aa_b.jpg)

hooked up to their open source [fluxtream](/notes/mathew/06-05-2014/using-fluxtream-to-look-at-speck-data) platform and designed for home use, it's being used by the [Southwest Pennsylvania Environmental Health Project.](http://www.environmentalhealthproject.org/health/air/)

###Airbeam
developed by the [HabitatMap](http://aircasting.org/), it is designed to hook to an android device.  It is [open source hardware](https://github.com/cloudformdesign/Airbeam) and uses a small fan.

[![photo-original.jpg](https://i.publiclab.org/system/images/photos/000/009/770/medium/photo-original.jpg)](https://i.publiclab.org/system/images/photos/000/009/770/original/photo-original.jpg)

###Dustduino
[in development](/tag/dustduino) by @schroyer and @willie
passive airflow via a convection current, it sends data to [xively](https://xively.com/)

[![dustduino_proto_2_desk.jpg](https://i.publiclab.org/system/images/photos/000/009/771/medium/dustduino_proto_2_desk.jpg)](https://i.publiclab.org/system/images/photos/000/009/771/original/dustduino_proto_2_desk.jpg)

[![ShinyeiPPD42NS_Insides_Labeled_600.jpg](https://i.publiclab.org/system/images/photos/000/009/772/medium/ShinyeiPPD42NS_Insides_Labeled_600.jpg)](https://i.publiclab.org/system/images/photos/000/009/772/original/ShinyeiPPD42NS_Insides_Labeled_600.jpg)

There are a few more systems using these sensors too, see “other platforms” below.

###Benchmark systems
The idea is to use a single Raspberry Pi to read all the sensors in their enclosures simultaneously, along with the reference system.

####Optical Benchmark
Currently there are only proprietary commercial services available for commercial sensors, such as [Netronix, which costs around $100/month.](http://www.tsi.com/Landing-Pages/Cloud-Data-Management-System.aspx)

I'll connect to a [TSI Dusttrak I or II](http://www.tsi.com/Dust-Monitors/) or [Thermo Scientific pDR 1500](http://www.thermoscientific.com/en/product/i-personal-i-dataram-pdr-1500-aerosol-monitor.html), as per @rjstatic's [directions](/notes/rjstatic/10-29-2014/notes-on-building-two-fidos-to-send-air-quality-data-to-the-internet-from-a-dusttrak-ii), updated for the [Open Pipe Kit](http://publiclab.org/wiki/open-pipe-kit).  


####Filter system benchmark?

Both Dusttrak and pDR-1500 have a filter for "gravimetric analysis" (weighing the quantity of dust collected) as an additional calibration.  There are extra questions about characterizing an optical sensors' response to local dust via fingerprinting the different dust particles.  That may require an extra system, and I'm looking to source some [low cost passive monitors](http://publiclab.org/notes/mathew/08-21-2014/low-cost-passive-aerosol-monitors) as well.

[image of turtle pump + tube]

###Other platforms I can’t get/not sure I’m interested:

[ManyLabs](https://www.manylabs.org/docs/project/airQualityStation/)

[clAIRity](http://clairity.mit.edu/site/html/howitworks.html)

[Pickle Jr.](http://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/)
