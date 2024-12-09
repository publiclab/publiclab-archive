---
title: 'Willow Creek Water Quality Monitoring'
tagnames: arduino, colorado, water-quality, water, riffle, open-water, barnstar:basic, china, data-logging, project, knowflow, replication:14511, mountain-west, reclamation
author: MadTinker
path: /notes/MadTinker/07-31-2017/willow-creek-water-quality-monitoring.md
nid: 14702
uid: 461206

---

![](https://publiclab.org/public/system/images/photos/000/021/236/original/IMG_7302.jpg)

# Willow Creek Water Quality Monitoring

by [MadTinker](../profile/MadTinker) July 31, 2017 17:45

July 31, 2017 17:45 | Tags: [arduino](../tag/arduino), [colorado](../tag/colorado), [water-quality](../tag/water-quality), [water](../tag/water), [riffle](../tag/riffle), [open-water](../tag/open-water), [barnstar:basic](../tag/barnstar:basic), [china](../tag/china), [data-logging](../tag/data-logging), [project](../tag/project), [knowflow](../tag/knowflow), [replication:14511](../tag/replication:14511), [mountain-west](../tag/mountain-west), [reclamation](../tag/reclamation)

----

I am currently active with the [Willow Creek Reclamation Committee](http://www.willowcreede.org), in Creede, Colorado, US. At one time Creede was one of the top silver producing mining areas. Many of the names associated with the wild days of the West spent considerable time frequenting the gambling halls, ladies of the evening, and of course, the mines. Bat Masterson was the sheriff, Calamity Jane, Soapy Smith, Poker Alice and many others were residents. Creede went through many boom and bust cycles from 1893 through 1973 with the last of the active mines closing operations in the mid-1980s. The nature of Creede changed significantly over the years and is now considered one of the largest open air asylums in the world. It's a beautiful and unique place to live and vacation.

The downside of these mines was the tailings and mining waste that remained. There has been a large, active and generally successful effort at reclamation of the area. The majority of this effort is supported by local volunteers. Periodic sampling is done with analyses done professionally.

A major goal of this water quality monitoring effort is to supplement this periodic sampling with local sampling for a variety of obvious reasons: promote community stewardship and establish a monitoring baseline to improve reaction time in the event of unforeseen events (flooding, mine breach, etc.). There are three objectives:

1. development of a portable water quality sampling system for periodic discrete sampling,
2. a series of in situ water sensors for continuous monitoring of a subset of the water quality metrics, and
3. a formal statistical comparison of the the three water quality sampling data streams.

Objective 1 will be supported through construction of a portable unit that will have a foundation based on the KnowFlow system developed by @shanlter for the Pearl River water quality monitoring.

Objective 2 will be based on the Public Laboratory Riffle system.

Objective 3 will involve a very formal statistical analysis of three data streams: the professional lab results, the results from the portable unit, and finally the data from in situ system.

This research note will focus on the construction of the portable water quality sampling system in support of Objective 1\.

---------

# Update **A**

I have finally gotten all my hardware together (I hope!). Thanks to @rockets for the couple extra cables from DFRobot. I had to reorder a sensor, and then decided on an additional sensor and a few other bells and whistles. Unfortunately, as life insists on doing, my life has gotten a bit complicated so progress will be a bit slower.

I had hoped to reconcile my data with those based on samples taken professionally. Since I had to reorder the sensor, I missed that window which may limit the strength of any conclusions. However, I'll still be making a comparison for historical purposes and hopefully be on track for the next round of watershed samples.

There are some differences between the Creede setup and the KnowFlow. The Creede setup will:

- not have an oxygen sensor,
- have ORP, PH, conductivity, temperature sensors,
- have a GPS unit,
- include a small screen readout to scroll sensor activity.

A full parts list will be provided. The entire unit is being built into a bright orange, waterproof, ammo box commonly found in most sporting good stores in the US. There should be room for the electronics, sensors, notebook, and other miscellaneous flotsam that seems to become attached to things like this.

**Future**: The rest of August and September are busy for me (daughters wedding, a couple of surgeries, a couple of art commissions, etc) and then in October I will be attending a [River Watch](https://coloradowater.charityfinders.com/RiverWatch) conference to make sure that everything I do is up to snuff relative to the existing rules, procedures, yada, yada, yada. Hopefully, somewhere in there, I'll get all the pieces together, software developed, and do some initial testing. I'm sure there will be lots of questions posted around the Public Lab and thank you in advance for your patience. dR

# Update B

Unfortunately, there was another error on the parts list for the KnowFlow and construction was again delayed while emails were exchanged, decisions made, and orders placed. The costs of the extra parts has led to some needed design compromises. \[From my area, the shipping cost to return a package was about $50 each time so return for credit was not cost effective.\] I will be dropping the GPS as well as the LCD screen.

# Initial Assembly ![image description](https://publiclab.org/system/images/photos/000/021/648/large/IMG_2565.JPG "IMG_2565.JPG")

![image description](https://publiclab.org/system/images/photos/000/021/647/large/IMG_2570.JPG "IMG_2570.JPG")

![image description](https://publiclab.org/system/images/photos/000/021/680/large/IMG_2580.JPG "IMG_2580.JPG")

I'm stumbling a bit on both the original and the modified sketches and was getting anxious to have a success. I spent an hour or so working on the field packaging. The electronics are laid out on a lexan sheet which is then Velcro'd to the inside of a waterproof ammo box I had. Velcro was used since I'm expecting to have this board in/out of the case often while the devlopment is going on. Also, I didn't want any protrusions outside the box that might catch on something. The ammo box is a slight overkill for a package box, but it allows sensors, notebooks, etc to be included.

![image description](https://publiclab.org/system/images/photos/000/021/685/large/IMG_2584.JPG "IMG_2584.JPG")

![image description](https://publiclab.org/system/images/photos/000/021/688/large/IMG_2582.JPG "IMG_2582.JPG")

![image description](https://publiclab.org/system/images/photos/000/021/689/large/IMG_2583.JPG "IMG_2583.JPG")

# Update C

Well, as life is driven by Entropy, things got complicated. In generally positive ways. Unfortunately, this project took a back seat to many of those events. Since my last update, some parts of the hardware side of things were put on hold. In particular, I need to get a handle on the KnowFlow hardware and software before I invest too much more money and time. 

However, things are not completely at a standstill. I've taken a formal course in water quality sampling, gotten certified by Colorado Parks and Wildlife. I learned a great deal, relative to water sampling, about what is needed to assure/prove data quality. A lot of those collection and analysis requirements will carry over to all of my sampling.  

In addition, I've started to build a simpler sensor and data logger system based on the mini-pearl package developed by (cfastie)\[/profile/cfastie\]. This effort will be followed by building and implementing a sensor/data logger package based on the Riffle and comparing the results. 

Finally, I've been invited to present my efforts (such as they are) to the (San Juan Mining and Reclamation Conference)\[[http://www.mountainstudies.org/sjmrc/](http://www.mountainstudies.org/sjmrc/)\] in May of this year (2018).