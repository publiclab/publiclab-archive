---
title: Waterproof Housing for Arduino Conductivity Meter-- Part 2: results and other containers
tagnames: water-sensing, water-quality-monitoring, water-quality, umass-amherst, publiclab-at-umass
author: markwh
path: /notes/markwh/11-19-2014/waterproof-housing-for-arduino-conductivity-meter-part-2-results-and-other-containers.md
nid: 11368
uid: 428820

---

# Waterproof Housing for Arduino Conductivity Meter-- Part 2: results and other containers

by [markwh](../profile/markwh) November 19, 2014 15:33

November 19, 2014 15:33 | Tags: [water-sensing](../tag/water-sensing), [water-quality-monitoring](../tag/water-quality-monitoring), [water-quality](../tag/water-quality), [umass-amherst](../tag/umass-amherst), [publiclab-at-umass](../tag/publiclab-at-umass)

*This is a follow-up to [this research note](http://publiclab.org/notes/jenniferdsara/11-13-2014/waterproof-housing-for-the-arduino-conductivity-meter)*

###What I want to do

The hope is to make a simple waterproof housing for an arduino-based conductivity meter. From talking to Ben Gamari, who's been active in the [Riffle](http://publiclab.org/wiki/riffle), I learned that the biggest issue they're having is waterproofing the device. Since we're using a school-owned Arduino, we're trying to err on the side of overkill keeping ours dry. As I understand it, the Riffle has two main objectives: low-cost/ease of production and accuracy/quality of data. To the first objective, the Riffle team is trying to deploy it in a plastic soda bottle--something presumably anyone could get ahold of. In our interest of physical integrity, we opted for PVC--still relatively easy to get, but requires a fairly specific parts list and a trip to the hardware store. The thought was that this would ensure watertightness, making it worth the extra effort.


###My attempt and results

See [this research note](http://publiclab.org/notes/jenniferdsara/11-13-2014/waterproof-housing-for-the-arduino-conductivity-meter) for the setup. Quick synopsis: we assembled PVC pipe with our conductivity meter and thermistor integrated into the cap (no electronics inside), filled the assembled unit with steel chain to weigh it down, and submerged it in a bucket of water (approx. 10 inches deep). 24 hours later we opened it up to discover the following: 

[![20141113_230053.jpg](https://i.publiclab.org/system/images/photos/000/008/003/medium/20141113_230053.jpg)](https://i.publiclab.org/system/images/photos/000/008/003/original/20141113_230053.jpg)

That's approximately **2 oz of water** at the bottom of the pipe. Clearly this is not quite watertight. 

Another container we tried was a pint-size peanut butter jar. This didn't have any wires or screws protruding, but we wanted to test it since it fit the Arduino, and it's something people could get ahold of easily. This also was not completely watertight, and after 24 hours it had about 2 tsp of water inside: 

[![20141113_225807.jpg](https://i.publiclab.org/system/images/photos/000/008/004/medium/20141113_225807.jpg)](https://i.publiclab.org/system/images/photos/000/008/004/original/20141113_225807.jpg)

 Next we tried modifying the peanut butter jar assembly. We found that a mason-jar lid (regular size, 70mm) fits nicely on the peanut butter jar, and lo! makes it seemingly waterproof. A 36-hour submersion showed no discernible water intrusion. 


[![20141113_230636.jpg](https://i.publiclab.org/system/images/photos/000/008/006/medium/20141113_230636.jpg)](https://i.publiclab.org/system/images/photos/000/008/006/original/20141113_230636.jpg) [![20141113_230655.jpg](https://i.publiclab.org/system/images/photos/000/008/007/medium/20141113_230655.jpg)](https://i.publiclab.org/system/images/photos/000/008/007/original/20141113_230655.jpg)
[![20141113_230704.jpg](https://i.publiclab.org/system/images/photos/000/008/008/medium/20141113_230704.jpg)](https://i.publiclab.org/system/images/photos/000/008/008/original/20141113_230704.jpg) [![20141113_230736.jpg](https://i.publiclab.org/system/images/photos/000/008/005/medium/20141113_230736.jpg)](https://i.publiclab.org/system/images/photos/000/008/005/original/20141113_230736.jpg) 


###Questions and next steps

At this point the project seems to have [forked](http://en.wikipedia.org/wiki/Fork_(software_development), with one branch trying to waterproof the PVC enclosure and the other working on the peanut butter jar. The former will probably involve a different rubber stopper and a lot of silicon caulk. There was also a suggestion from @amysoyka to use melted milk-jug plastic for sealing. If anyone has experience or thoughts on this, please leave a comment. 

For the peanut butter jar, I am trying to design a 3D-printable module to attach through the cap that would make a watertight seal, contain the thermistor and conductivity electrodes, and securely attach the Arduino. I'm currently designing this in Sketchup. Stay tuned for updates!

