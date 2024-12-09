---
title: Bio-Climatic Housing Monitoring
tagnames: sensors, central-america, housing, heat, community-science, el-salvador, lat:13.69294, lon:-89.218191
author: dbsnp
path: /notes/dbsnp/04-09-2019/bio-climatic-housing-monitoring.md
nid: 19014
uid: 543056

---

![](https://publiclab.org/public/system/images/photos/000/031/361/original/DSC_0322.JPG)

# Bio-Climatic Housing Monitoring

by [dbsnp](../profile/dbsnp) April 09, 2019 23:38

April 09, 2019 23:38 | Tags: [sensors](../tag/sensors), [central-america](../tag/central-america), [housing](../tag/housing), [heat](../tag/heat), [community-science](../tag/community-science), [el-salvador](../tag/el-salvador), [lat:13.69294](../tag/lat:13.69294), [lon:-89.218191](../tag/lon:-89.218191)

----

## Description
An interesting conversation arose during the Texas Barnraising with a few participants, regarding the idea of developing a simple device to measure the quality of housing in El Salvador where I am based. I am currently part of an effort to improve housing design for social interest housing organizations such as [Habitat for Humanity](https://www.habitatelsalvador.org.sv/) and [Techo](https://www.techo.org/elsalvador/) in El Salvador, by using bio-climatic analyses that take into account things such as the home orientation, green roofs and ventilation.

The plan will be to design a very simple sensor to compare and evaluate three things: how home designs improve the comfort level of families living in them, human perception of comfort, and other environmental variables related to where the home is located and that might be influenced by communities, like the amount of trees, or presence of water.

## Characteristics of the device

We convened that the first step on this conversation was to think of what we needed for this project. Some of the ideas that have come up, that might help us limit the characteristics of the solution are:

* The device will be designed for low-cost housing (in El Salvador, this is less than USD 15 000). This is important due to certain limitations that the home should have: less options of where to set the sensors, which means less variability of temperature in different spaces.
* To be used mostly in rural areas with no Internet access in El Salvador. This may rule out the use of IoT solutions.
* To measure at least the minimum amount of usable environmental variables for doing some analysis. On this line, perhaps, is the idea of measuring variables that people might be aware of regularly, like temperature and humidity, because it opens the door to compare perceptions and automatic measurements.
* A very low cost and the possibility of local assembly. I am considering around $15-20 for each kit. A great personal inspiration for this is the [Coqui](https://publiclab.org/wiki/coqui), being currently developed mainly by [Jeff](https://publiclab.org/profile/warren)
* A non-intrusive design for families who are not used to technological tools such as environmental sensors being put on a wall in their houses, and that uses the least amount of space possible. 

## Proposal

My first proposal for this is to develop a simple sensor based off a bare ATmega328 microcontroller, which means a bare Arduino chip. The chip can be programmed in the Arduino, which reduces the cost. Other ideas are:

- Buliding the sensor into a wall clock to turn it into a more friendly accesory around the house. Perhaps some degree of interaction with the user would be pretty interesting as well.
- Data will be recorded in an SD card, so an important part of the development of the sensor will have to do with logging data correctly.
- Using cheap batteries. [If done correctly, a low-voltage sensor can simply use AAA batteries](https://www.instructables.com/id/The-RRRRRRRRRRBA-or-What-They-Dont-Teach-You-in-/).

My biggest challenge with this idea is thinking about interaction with data from the users. A researcher can make use of the data, but what about homeowners? What actions can they choose, based upon the available information? Part of this exploratory study will try to answer these questions, by talking to users and designing procedures alongside them.

The next step after this will be to develop a simple prototype and put it to the test through a couple of organizations in El Salvador which have expressed interest in this.