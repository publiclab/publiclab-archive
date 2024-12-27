---
title: "Roomba Air Quality Monitoring"

tagnames: 'air-quality, formaldehyde, roomba, wherewebreathe, indoor-air-quality'
author: Shannon
path: /wiki/roomba-air-quality-monitoring.md
nid: 11691
uid: 9

---

# Roomba Air Quality Monitoring

by [Shannon](../profile/Shannon)

March 19, 2015 15:06 | Tags: [air-quality](../tag/air-quality), [formaldehyde](../tag/formaldehyde), [roomba](../tag/roomba), [wherewebreathe](../tag/wherewebreathe), [indoor-air-quality](../tag/indoor-air-quality)

----

The current work on indoor air sensing through the Where We Breathe project is located here: http://publiclab.org/wiki/roomba-indoor-air-quality-mapping
___________________________________________________________________________________________

**2011-2012 Indoor Air Quality Mapping information**

**Purpose**

This tool is being developed to experiment with mapping indoor air quality. A Roomba--the room cleaning vacuum--is programmed to travel all around a room once it is left to roam. Therefore, it is an ideal tool to assess the quality of air through out a room. 

We have attached a sensor and light system to these second-hand Roombas. When our Roomba senses a change in air quality, currently an increase in the amount of volatile organic chemicals (VOC) in the air (we use alcohol as our test VOC) it emits a different color of light.  If we take a long exposure image of our Roomba as it travels through a room, we can see the path its traveled by the light it emits. In areas where there are more VOCs, the light on Roomba changes from green to blue. Looking at this image, you can easily spot an area where there could be higher concentrations of VOCs. 

Currently, we use the [MQ 135 air quality sensor](http://www.futurlec.com/Gas_Sensors.shtml), to detect NH3, NOx, alcohol, benzene, smoke and CO2. In the future we will try adding a sensor for formaldehyde, which is a common and potentially harmful indoor air pollutant.

The U.S. EPA provides a good <a href="http://www.epa.gov/iaq/ia-intro.html">introduction to indoor air quality</a>:

<blockquote>There are many sources of indoor air pollution in any home. These include combustion sources such as oil, gas, kerosene, coal, wood, and tobacco products; building materials and furnishings as diverse as deteriorated, asbestos-containing insulation, wet or damp carpet, and cabinetry or furniture made of certain pressed wood products; products for household cleaning and maintenance, personal care, or hobbies; central heating and cooling systems and humidification devices; and outdoor sources such as radon, pesticides, and outdoor air pollution.</blockquote>

Poor indoor air quality can take many forms, including high concentrations of chemicals (like formaldehyde, radon, or carbon monoxide). Sometimes these chemicals come from the products we use (like sprays) or the materials that surround us (like carpets and vinyl flooring). Excess humidity, or inadequate ventilation or filtration, can also lead to buildups of mold, pollen, or other biological contaminants. A simple and common form of poor indoor air quality is the buildup of CO2 (carbon dioxide) in poorly ventilated rooms. This can make you feel tired and less alert but is not usually otherwise harmful.

Immediate symptoms of exposure to toxic air contaminants include irritation of the eyes, nose, and throat; headaches; dizziness; and fatigue. Longer-term exposures (to lower concentrations) have been linked to chronic disorders, such as asthma.

**Applications and example uses**

Currently, there are very few tools for citizens to use in assessing indoor air-quality. The Toxic Mapper is our first attempt to generate DIY tools for investigating one's home environment and producing data rich images that are easy to interpret. The Toxic Mapper is still in development. We aim for it to be useful in indoor spaces such as those found in homes and schools.

This annotated image shows the basic parts for our Toxic Mapper v.1:

<img src="http://25.media.tumblr.com/e6dbe42ed796cc833edebddc81d84bf8/tumblr_mjd2n1lE3J1roc24ao1_1280.jpg" alt="" width="500px" />

##How to make your own##

We are working on a step by step guide to Hacking your Roomba. We have produced a short video about the project: 

<iframe width="500" height="280" src="https://www.youtube.com/embed/L1NVqZEDYDQ?rel=0" frameborder="0" allowfullscreen></iframe>

We Also documented the Toxin-mapping Roomba Project in Montreal. 
<iframe width="500" height="280" src="https://www.youtube.com/embed/JRfn0E8fRs4?rel=0" frameborder="0" allowfullscreen></iframe>


This image shows the basic parts of the Toxic Mapper V.1:
<img src="http://24.media.tumblr.com/472062c9421f4937bbf340bedfc09995/tumblr_mjd2n1lE3J1roc24ao2_1280.jpg" alt=""  width="500px"/>

Wiring for the Toxic Mapper V.1 to connect VOC sensor to LED so the light color changes based on the sensor readings:
<img src="http://25.media.tumblr.com/9e263dd30923334c30ddec29d37c76b8/tumblr_mjd2n1lE3J1roc24ao3_1280.jpg" alt=""  width="500px" />

Close up image of wiring:
<img src="http://25.media.tumblr.com/7bb6f2e4d931a34992a884089dee5293/tumblr_mjd2n1lE3J1roc24ao5_1280.jpg" alt=""  width="500px" />

Arduino Code for VOC sensor in the Toxic Mapper V.1:
<img src="http://24.media.tumblr.com/d128623788a8b82baa32e91536808723/tumblr_mjd2n1lE3J1roc24ao4_1280.jpg" alt=""  width="500px" />

**How to use it**

* Byeongwon used the Volatile Organic Chemical Sensor to detect a gas leak in his home: [using VOC sensor to locate an apartment gas leak](http://publiclaboratory.org/notes/bha/9-11-2011/gas-leak-old-apartment)

**Get involved!**
* Research is actively being done on this project by Jae Ok Lee and Byeongwon Ha in The RISD Environmental Justice Research Cluster in [Providence](/place/providence).
* and places to start contributing-
  * Hack your roomba! 
  * Help us develop documentation.
  * advise us on indoor air-pollution issues?
* List next steps: 
  * Our next step is to try a formaldehyde rather than VOC sensor on the Toxic Mapper: [More information on Formaldehyde](http://publiclaboratory.org/notes/sara/12-13-2011/formaldehyde-sensing-indoor-air-pollution)
  * We also aim to sync up the Toxic Mapper's movements to the sensor speed. The Roomba moves much too fast to produce good readings -- the sensors take 15-30 seconds to detect anything -- so the group is working on a few ways to slow down the robot. One is to mechanically gear down the wheels with a kind of "scooter":
<a href="https://www.flickr.com/photos/jeffreywarren/6010008853/" title="Roomba scooter to slow it down by jeferonix, on Flickr"><img src="http://farm7.static.flickr.com/6012/6010008853_90cb8f309b.jpg" width="500" height="375" alt="Roomba scooter to slow it down"></a>
The second is to use a more recent model of Roomba whose speed is programmable. We have purchased a Roomba 530 model and will be attempting to slow it down computationally rather than mechanically.