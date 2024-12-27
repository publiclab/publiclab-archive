---
title: "S.A.L.O.R. (Submersible Autonomous Liquid Oxygen Reporter)"

tagnames: 'open-source, open-hardware, conservation, openhardware, opensource, umass, umass-amherst, dissolved-oxygen, amherst-media, publiclab-at-amherst-media, publiclab-at-umass, makers-and-amherst-media, amherstcollege'
author: dsmoliga
path: /wiki/s-a-l-o-r-submersible-autonomous-liquid-oxygen-reporter.md
nid: 11371
uid: 431747

---

# S.A.L.O.R. (Submersible Autonomous Liquid Oxygen Reporter)

by [dsmoliga](../profile/dsmoliga)

November 20, 2014 17:46 | Tags: [open-source](../tag/open-source), [open-hardware](../tag/open-hardware), [conservation](../tag/conservation), [openhardware](../tag/openhardware), [opensource](../tag/opensource), [umass](../tag/umass), [umass-amherst](../tag/umass-amherst), [dissolved-oxygen](../tag/dissolved-oxygen), [amherst-media](../tag/amherst-media), [publiclab-at-amherst-media](../tag/publiclab-at-amherst-media), [publiclab-at-umass](../tag/publiclab-at-umass), [makers-and-amherst-media](../tag/makers-and-amherst-media), [amherstcollege](../tag/amherstcollege)

----

Thais C. - Daniel S. - Leif D.

As part of the Umass Amherst makers class we are attempting to take the OpenROV underwater robot ( www.openrov.com ) and make it an autonomous underwater craft that will collect data on bodies of water related to agal bloom.

**Our Work **
This started out as a term project in a Natural Resources & Conservation class called "Applications in Do-it-Together, Environmental Monitoring Technologies". The aim of the class was to utilize inexpensive sensors and microcontroller-based embedded systems the monitor the environment or interact with it in a positive way.

Our initial idea was to build a boat that would use a localized decision-making algorithm (similar to a Roomba) to traverse a pond or lake while sampling oxygen and nitrogen levels in the water with sensors. The data collected would help up us to predict possible invasive cyannobacteria "algae" blooms that are choking native ecosystems.

The project has taken and interesting turn, though. Through the enthusiasm of our professor, Charles Schweik, as well as his faculty connections, three research professors from the Department of Environmental Conservation who study fish ecology and conservation have increased the scope of the project. With the help of their funding, we have purchased a kit from OpenROV. Once S.A.L.O.R. has been built and tested, we will hand over the robot to them for use in their research efforts.

**Attempts and Results **

***UPDATE*** 12/21/2014
We have completed the build of SALOR. Currently the calibration of the motors is a continuing problem. 

The dissolved oxygen sensor and the Combo sensor (Depth/Temp./Compass Heading) are being explored for functionality so that they can be calibrated and integrated into the build. Below the battery tubes are two threaded rods used as structural bracing that can also be used to mount payloads. While the Combo sensor is made to be submerged, the dissolved oxygen sensor contains circuitry that must be protected from water damage. This will require special housing that can either be made from off-the-shelf items from a hardware store, or can be 3D printed. Either way, the best solution would incorporate cable management and the Combo sensor to be mounted along side so that they can be used separately or in conjunction.
We are currently in the late stages of the build process and the early stages of initiating the computer control systems.


[![20141119_170033.jpg](https://i.publiclab.org/system/images/photos/000/008/023/medium/20141119_170033.jpg)](https://i.publiclab.org/system/images/photos/000/008/023/original/20141119_170033.jpg)


In addition to the hardware that is included in the kit, we will attach a sensor array that will give real-time temperature & depth readings and also direction & orientation using a magnetic compass and three accelerometers. Should the professors allow us to play with their toy, we will continue our attempts at predicting algal bloom.


[![20141119_170111.jpg](https://i.publiclab.org/system/images/photos/000/008/024/medium/20141119_170111.jpg)](https://i.publiclab.org/system/images/photos/000/008/024/original/20141119_170111.jpg)


**Questions and Next Steps**
The sensors will be tested in the environment for functionality along with the ROV, who has yet to see the water. Soon, S.A.L.O.R. will be handed off to the three research professors who have funded this project. We will remain connected to our little buddy as technical maintenance and advisers.

Further research on the robot itself will hopefully involve closed-loop orientation control modeling to increase the stability of the ROV. This will allow inexperienced pilots to navigate S.A.L.O.R. with greater control and accuracy. Currently the solution is to attach three or four vertical motor-driven propellers with an independent motor controller and integrating accelerometer and gyroscopic sensors into a feedback-loop program. This will require more power than the batteries will likely be able to provide for the current 2 hour run-time. The proposed solution is building a battery and data buoy that can supply electricity to S.A.L.O.R. and transmit/receive data and control instructions between the 'bot and the control computer. A video game-style controller for the ROV has also been proposed.