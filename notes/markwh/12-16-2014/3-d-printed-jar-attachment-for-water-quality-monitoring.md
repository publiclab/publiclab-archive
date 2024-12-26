---
title: "3-D printed jar attachment for water-quality monitoring"\ntagnames: 'water-sensing, water-quality-monitoring, umass-amherst, publiclab-at-umass'
author: markwh
path: /notes/markwh/12-16-2014/3-d-printed-jar-attachment-for-water-quality-monitoring.md
nid: 11467
uid: 428820

---

![](https://publiclab.org/public/system/images/photos/000/008/440/original/module_withBoltholes_.png)

# 3-D printed jar attachment for water-quality monitoring

by [markwh](../profile/markwh) | December 16, 2014 21:07

December 16, 2014 21:07 | Tags: [water-sensing](../tag/water-sensing), [water-quality-monitoring](../tag/water-quality-monitoring), [umass-amherst](../tag/umass-amherst), [publiclab-at-umass](../tag/publiclab-at-umass)

----

*This is a follow-up to previous research notes [here](http://publiclab.org/notes/jenniferdsara/11-13-2014/waterproof-housing-for-the-arduino-conductivity-meter) and [here](http://publiclab.org/notes/markwh/11-19-2014/waterproof-housing-for-arduino-conductivity-meter-part-2-results-and-other-containers).*

###What I want to do

We are trying to make a waterproof conductivity meter that is field-deployable, accurate, and cheap and easy to make. This came out of learning that waterproofing issues have been a major issue hampering [Riffle]() deployment. We had similar issues with an earlier PVC enclosure for a conductivity meter. Unlike the Riffle, our electronics consist of an Arduino Uno, limiting the range of sizes our enclosure can take. 


###My attempt and results

We designed a module in Google SketchUp that serves three purposes:

1. It mounts the Arduino Uno and SD shield to the lid of a peanut butter jar (or similar). 
2. It forms a waterproof seal on the lid of the jar.
3. It provides sealable ports for water-quality probes to pass through, giving them access to both the water (outside) and the Arduino (inside).

The module is also designed so that the internals are accessible simply by unscrewing the lid from the jar, in order to change the battery and transfer data.

####Printing

Big thanks to [Alex Schreyer](http://www.alexschreyer.net/about-me/) at the UMass Eco department, for printing the module for us. The first (and current) form was printed at low-density, just to make sure everything fits and functions as intended. And it does! The Arduino fits on the module--although we didn't mount it, for fear of breaking the fragile prototype. The probe components pass easily through the port holes and the module fits nicely on the peanut butter jar lid. The potential passageways for water were easy to seal up with silicone caulk (although a classmate suggested epoxy might be a better choice). 


Based on the first prototype, we made only minor modifications to the design, mainly beefing up supports to minimize the likelihood of breakage. Here is the modified design:

[![module_withBoltholes_v2.png](https://i.publiclab.org/system/images/photos/000/008/442/medium/module_withBoltholes_v2.png)](https://i.publiclab.org/system/images/photos/000/008/442/original/module_withBoltholes_v2.png)



####Does it work?

Because of the time constraints a semester imposes, we couldn't wait for a more robust version to be printed. So we wired up the low-density prototype just to make sure the unit functions as a conductivity probe and gives us numbers. 

[![Jen_soldering.jpg](https://i.publiclab.org/system/images/photos/000/008/441/medium/Jen_soldering.jpg)](https://i.publiclab.org/system/images/photos/000/008/441/original/Jen_soldering.jpg)


As we were able to demonstrate at a local open-science event, the probes (temperature and counductivity) appear to function as intended. The conductivity meter needs calibration, like we did in a [previous incarnation](http://publiclab.org/notes/markwh/10-29-2014/calibrating-arduino-based-conductivity-meter), but qualitatively it does what it is supposed to. We modified a data-logging script to push the data to the SD card, but ultimately we weren't able to test this experimentally.

#### Project files

The sketchup files and data logging script can be found on our group's [Github repository](https://github.com/FiveCollegeMakers/waterQuality). 

###Questions and next steps

As mentioned above, the first next step will be to print a version that is capable of mounting an Arduino Uno. Then, naturally, we'll have to re-wire and re-mount the module, and--again--calibrate the conductivity meter. *Then* we should be all set to test the waterproofness of the device and deploy it in the field. One issue that we've so far considered trivial, but that may prove to be more problematic, is weighing the thing down in such a way that it doesn't interfere with the electronics inside the jar. But that's a bridge we're not ready to cross yet.

###Why I'm interested

This was the final part of a class project that we were able to produce by semester's end. Jen will be on the other side of the planet beginning in a couple of weeks, but I (Mark) will hopefully be continuing to improve the device in the new year. 
