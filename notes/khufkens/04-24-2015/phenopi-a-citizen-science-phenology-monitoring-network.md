---
title: "PhenoPi: a citizen science phenology monitoring network"

tagnames: 'science, vegetation, phenopi, phenology, growth, citizen, first-time-poster'
author: khufkens
path: /notes/khufkens/04-24-2015/phenopi-a-citizen-science-phenology-monitoring-network.md
nid: 11766
uid: 438931
cids: 11526,11527,11528,11529,11530,11531,11532,11541,11542
---

![](https://publiclab.org/public/system/images/photos/000/009/687/original/Screen_Shot_2015-04-23_at_21.03.23.png)

# PhenoPi: a citizen science phenology monitoring network

by [khufkens](/profile/khufkens) | April 24, 2015 02:03

April 24, 2015 02:03 | Tags: [science](/tag/science), [vegetation](/tag/vegetation), [phenopi](/tag/phenopi), [phenology](/tag/phenology), [growth](/tag/growth), [citizen](/tag/citizen), [first-time-poster](/tag/first-time-poster)

----

This project needs some context, so here goes...

###What is phenology?

Phenology is the study of (the timing of) recurring life cycle events. This includes both animals and plants alike. However, my particular research interest goes out to plant phenology. Plant phenology studies when plants leaf out, when they drop their leaves or when other life cycle events happen (flowering, shoot elongation, needle drop, ... ).

Plant phenology is also tightly coupled to our climate, as it influence how much CO2 is captured through photosynthesis from the atmosphere and how bright the surface of the earth is (it's albedo). In addition it also mediates the flow of water and energy (through transpiration). In the animation below you see the seasonal changes across the globe as the growing season switches from one hemisphere to the next.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Mh4fizmiZa8" frameborder="0" allowfullscreen></iframe>

This process removes substantial amounts of CO2 from the atmosphere, more so in our warming world the growing season length is increasing by 3-5 days per decade. These extra days of photosynthesis provide a negative feedback to the CO2 induced warming of our world. However, how much more CO2 will be removed and how plants will respond to a warmer but also more CO2 rich world remains a question.  To answer these questions we can formulate mathematical constructions which model plant phenology in response to various climatological drivers. The output of detailed atmospheric model displaying variations in CO2 across a year is shown below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/x1SgmFa0r04" frameborder="0" allowfullscreen></iframe>

However, such a model must be validated against real data. One of these sources of data is remote sensing data from various satellites circling the earth. Sadly, these satellites are limited by a spatio-temporal trade off, where one can get either high resolution data at a low temporal scale or low resolution data at a high frequency. In order to optimize current phenological models a high frequency, high resolution view on plant growth would be ideal. This is where PhenoCam project comes into the picture.

###The PhenoCam Project

[The PhenoCam project](http://phenocam.sr.unh.edu/webcam/) is a project started and run by Dr. Andrew D. Richarson at Harvard University which uses PhenoCams to keep watch of vegetation at both a high spatial and temporal resolution using conventional cameras. PhenoCams register a standard RGB jpeg every half hour. These images are than converted to time series of vegetation greenness using a green chromatic coordinate (Gcc) index; which is the ratio of green pixels and the images brightness (sum of all channels). 

Below you find an image illustrating how various biomes respond to changes in both temperature and precipitation (image by A. D. Richardson). You see that vegetation growth in a temperate deciduous forest (A) is mostly triggered by temperature rather than precipitation. A Mediterranean oak forest (B) on the other hand is more dependent on pulses of precipitation. A similar response is recorded when comparing a northern temperate grassland with a moisture limited tropical grassland location. These PhenoCams provide us with the necessary data to validate our phenology models (including some recent work I did on grasslands). Currently the PhenoCam project has > 200 cameras installed across US and elsewhere.

![Gcc across various biomes](http://phenocam.sr.unh.edu/static/img/biome_image.png)
 
Most of the PhenoCams are installed by the project or researchers around the country. Unlike other projects such as [project budburst](http://budburst.org/) and the [National Phenology Network](https://www.usanpn.org/) which rely heavily on citizen scientists to observer changes in (plant) phenology the PhenoCam project does not offer such opportunity. Although citizen science involvement for data processing is being worked on, the financial burden of the current PhenoCams (~$500-900) makes involving citizen science in data collection difficult.

### PhenoPi

I recognized that people often have a window pointing towards some street trees or their garden. This is a missed opportunity I feel. I was hoping to engage citizens in collecting digital repeat imagery data. This could only be achieved if the price point of the camera used was lowered, and the process of installing the software would be rather trouble free.

Involvement of citizens would widen the coverage of the PhenoCam network, adding to our knowledge of how plants respond to a changing climate but also filling in gaps in spatial and temporal coverage. The limited distance to most garden trees also ensures a close up view of the vegetation, which is lacking in most of the current PhenoCams.

So, in order to fill this gap I design some basic hardware and software to complete automated image collection (time lapse if you will) using a simple window mounted raspberry pi camera, hence PhenoPi.

#### Hardware

I use a simple housing for a raspberry pi, which uses suction cups to stick to any window pointing at trees. The schematics in FreeCAD format can be found [here](https://www.dropbox.com/s/v1g0ernjct7mh63/phenopi.FCStd?dl=0). I also provide [DXF drawings](https://www.dropbox.com/s/qjf53ba701v0m50/phenopi.dxf?dl=0) which can be used in a laser cutter or CNC machine. For those with a 3D printer an [SLT file](https://www.dropbox.com/s/em69on4z0umzici/phenopi.stl?dl=0) is provided as well however but I'm not sure about the strength of the design. The design is the third version, and should be final. Below I show the original version which is larger and did not have a viewfinder or any buttons or indicator LEDs. An earlier version of the PhenoPi is shown below, illustrating the operation / mounting on a window.

![phenopi v1](https://farm9.staticflickr.com/8771/17042506637_de615ca4c2_z_d.jpg)

I would say that from a hardware point of view the project is finished! I did consider some alternative setups but they all lead to either increasing cost, complexity and / or degraded data (moving camera lenses would cause drift which is a major issue in post processing).

#### Software

The current sofware can be found on [my bitbucket](https://bitbucket.org/khufkens/phenopi) PhenoPi page. The code available currently covers an upload script which triggers the camera, a script which pulls additional localized weather data, an installation script for the former and a script to install a real time clock if necessary.

Currently the majority of the work is software based, trying to streamline the install to make it as painless as possible. A complete hands off install will not be possible so it will always remain sort of a DIY project I fear. The current software has been running for over four weeks at my parent’s place, capturing the onset of spring greenup nicely!

![lint](ftp://140.247.98.64/phenocam/lint/lint_2015_04_23_133002.jpg)

So, my proof of concept works. However, here is a lot of room for improvement. For example I still have to write the code interfacing the button switch and LED to accept and provide feedback.

Post processing software is already in place as this is an integral part of the PhenoCam project. All software is freely available online and can be found [here](http://phenocam.sr.unh.edu/webcam/tools/).

### Concerns / ideas to implement

*   Privacy, how to ensure privacy while still collecting data, note my dad in the image above. I was considering a privacy filter blacking out the lower part of the image only registering the canopy.
*   How easy should the software install be, where do you draw the line => major time sink
*   Ownership / licensing of the collected data, do you upload everything and retain nothing or do you retain everything (as a copy)  which would cause storage issues
* Provide added value:
  * Time lapse feature, monitor your vegetables grow
  * Security feature - keeping watch of your back door / grandchildren playing in the garden
  * Data streams would be separate to address the above mentioned privacy concerns, all data and code would be open as well
* …

### Feedback

I would like some community feedback on my project

* For one, how many people would be interested? Give me shout if so.
* If you see possible improvements, without adding cost, let me know
* If there is enough interest, how do I make this into a PublicLab kit?

### Info / Contact

My personal site can be found at [www.khufkens.com](http://www.khufkens.com), should you want to keep track of my other projects and research.