---
title: Certification of Open Sensors?
tagnames: licensing, open-hardware, sensors, licenses, creativecommons, sensor-networks, sensor-journalism
author: lilybui
path: /notes/lilybui/10-28-2014/certification-of-open-sensors.md
nid: 11305
uid: 420662

---

![](https://publiclab.org/public/system/images/photos/000/007/657/original/Screen_Shot_2014-10-28_at_12.27.49_PM.png)

# Certification of Open Sensors?

by [lilybui](../profile/lilybui) October 28, 2014 16:42

October 28, 2014 16:42 | Tags: [licensing](../tag/licensing), [open-hardware](../tag/open-hardware), [sensors](../tag/sensors), [licenses](../tag/licenses), [creativecommons](../tag/creativecommons), [sensor-networks](../tag/sensor-networks), [sensor-journalism](../tag/sensor-journalism)

----

On October 20, 2014, Creative Commons Science convened a workshop involving open hardware/software developers, lawyers, funders, researchers, entrepreneurs, and grassroots science activists around a discussion about the certification of open sensors.

Over the course of the workshop, attendees listened to sessions led by practitioners who are actively thinking about whether and how a certification process for open hardware might mitigate some of the tensions that have arisen within the field, namely around the reliability of open sensor tools and the current challenges of open licensing. 

Here's a brief summary of the issues we discussed, which I hope spurs more discussion around this in return.

**Challenges of open sensors **

At the workshop, Sonaar Luthra of [Water Canary](http://www.watercanary.com/) led a session about the complexities and challenges that accompany open sensors today. Most concerns revolve around accuracy, both of the sensor itself and the data that it produces. One reason for this is that both the manufacture and integration of sensors are separate processes (e.g. InvenSense will manufacture an accelerometer and Apple will integrate it into the iPhone). Similarly, within the open source community, the development and design of a sensor and its software can potentially be a separate process from an end user’s assembly of it (e.g. a person looks up the open schematic online, buys the necessary parts, and builds it at home). This division of labor erodes the boundaries between hardware, software, and data, obviating a need to recast how trust is established in sensor-based data.

A chief concern about sensor data, from the perspective of journalism and likely policy, is being able to ensure, with some degree of confidence, that the data collected from the sensor are not erroneous and not adding to misinformation to the public sphere if published. Of course, this entirely depends on what purpose the sensor is being used for. If the point is to gather a lot of data and look at averages or general trends, such as the case with the [Air Quality Egg](http://airqualityegg.com/), an open sensor that measures air quality, accuracy is a non-issue because engagement is the end goal. However, different purposes and paradigms require different metrics. In the case of StreetBump, a mobile app that uses accelerometer data to help identify potential potholes, accuracy might be a much more salient issue, as direct intervention from the city would mean allocating resources and labor towards something a sensor suggests. Thus, creating a model to work toward shared parameters, metrics, resources, and methods might be useful to generate consensus and to alleviate factors that threaten data integrity.

There may also be alternative methods for verification and accounting for known biases in sensor data. [Ushahidi’s Crowdmap](http://www.ushahidi.com/product/crowdmap/) is an open platform used internationally to crowdsource crisis information. The reports depend on a verification system from other users for an assessment of accuracy. One can imagine a similar system for sensor data, pre-publication or even in real time. Also, if a sensor is known to be biased in a certain direction, it’s also possible to compare data against an established standard (e.g. EPA data) and account for the bias in reporting on the data.

To further investigate these questions, we might look toward extant models of verfication in open science and technology communities. The [Open Geospatial Consortium](http://www.opengeospatial.org/standards) provides a way of thinking about interoperability among sensors, which requires that a consensus around standards or metrics to be established. The Open Sensor Platform also suggests ways of thinking about data acquisition, communication, and interpretation across various sensor platforms.

**Challenges of open licensing for sensors**

A handful of licensing options exist for open hardware, including the CERN Open Hardware License, Open Compute Project License, and Solderpad License. Other intellectual property strategies include copyright (which are easily circumvented and sometimes questionable when it comes to circuits), patenting (difficult and costly to attain), and trademark (lower barrier to entry and would best meet needs of open source approaches). However, the issue of whether or not formal licensing should be necessary for open hardware is still up for questioning, as it inevitably imposes restrictions on a design or version of hardware that — within the realm of open source — is still susceptible to modification by the original developer or the open source community writ large. In other words, a licensing or certification process would cause what would traditionally be an ongoing project to become a product.

Also, in contrast to open software, wherein the use of someone’s open code is clearly demarcated and tracked by the process of copying and pasting, it is less clear at what point a user “agrees” to using open hardware, since designs often involve a multitude of components and sometimes even come with companion software.

A few different approaches to assessing open sensors emerged during the workshop:

* **Standards**. A collaborative body establishes interoperable standards among open sensors, working for independent but overlapping efforts. Targeted toward the sensor.

* **Certification / licensing**. A central body controls a standard, facilitates testing, and and manages intellectual property. Targeted toward the sensor.

* ** Code of conduct**. A suggestion of uses and contexts for the sensor, i.e. how to use it and how not to use it. Targeted toward people using the sensor.

* **Peer assessment**. Self-defined communities test and provide feedback on sensors (see Public Lab model). Targeted toward the sensor but facilitated by people using the sensor.

In the long run, it may be that the means of assessing a sensor is largely contextual, creating a need to develop a multiplicity of models for these methods to do so.

**Questions**

* What the role would, could, should standards/certification play for open sensors -- economically, ethically, legally? Is there a need for a certification model? If so, why? If not, what are alternative models that could be implemented? (Public Lab's peer vetting/testing/review approach is definitely unique. Does this work for all open sensor tools?)

* Whom would a certification process best serve, and who would, could, should facilitate the process? In other words, what are the power structures/implications behind a certification framework?




_Image credit Lily Bui_



_References_

_Open Source Sensors: Promoting Access to Knowledge and Data Reliability. Google Slides. Accessed October 23, 2014.

Pantelopoulos, Alexandros & Nikolaos G Bourbakis. “A survey on wearable sensor-based systems for health monitoring and prognosis.” Systems, Man, and Cybernetics, Part C: Applications and Reviews, IEEE Transactions. Vol. 40, Issue 1. Published January 2010. Accessed 19 September 2014.

Open Source Hardware Association (OSHWA), http://www.oshwa.org/definition_