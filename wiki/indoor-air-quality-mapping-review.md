---
nid: 704
title: indoor air quality mapping review
path: public/static/wiki/indoor-air-quality-mapping-review.md
uid: 12
tagnames: air-quality,review
---

# indoor air quality mapping review

Questions for Indoor Air Quality Monitoring

Healthy Homes, Community Science, Sustainable Futures

Goal for month: gallery show in montreal
Proposed goal for three months: try other delivery methods? building up community to work on indoor air quality mapping. Work with Formaldehyde.
Proposed goal for six months:
Proposed over all goal for year:

* Issues: the Roomba is a limiting factor due to cost - consider other hollow ball type. It is also limiting to the project because the roomba moves faster than the sensor can sense.
* Issues: formaldehyde has to be sensed at only a few parts per million, there are sensors available to achieve this, but also has paths forward for taking remediative action. 
* Issues: lower priority than H2S or Env. Est. 

###History/context of tool###

* what inspired it? to use the Roomba’s excellent “space filling algorithm” to carry a sensor (NH3, NOx, alcohol, benzene, smoke and CO2) + RGB LED around an interior space to assess air quality. 
* who (all) designed/developed/tested it? Where? Jae Ok Lee and Byeongwon Ha at the RISD Environmental Justice Research Cluster in Providence, New England. Ha successfully did a proof of concept with the tool and a gas leak in his home (Youtube)
* where has it been used and how did it go? not specified (should add Montreal?)
* how specialized is demand for the tool? broadly applicable or very site/condition specific? broadly applicable -- homes and schools. 

###Replicability###
 
* documentation, transmission to new users? unknown
* tools needed? Roomba, arduino board, Volatile Organic Chemical gas sensor, 20K resistors, 5V regulator set, freeduino, breadboard, tri RGB LED, wires, USB BUB?, JeeNode
* skills needed? - what knowledge does it assume? difficulty? early stage / unknown but seems advanced
  * materials needed - supply chain limitations - unspecified but seems like mail order required
  * safety - unspecified
  * what is “Hello World” for this tool?

###Development###

* what is it costing us in staff hours? offering this as a paid university class may be saving money in staff hours. 
* what is it costing in materials? unspecified
* COTS (consumer-off-the-shelf) effects 
  * Roomba cost is bound to go down, possible alternative for sensor mobility? Used roombas

###Maintenance###

* what are the per-use costs? each kit seems to require a lot of electronics, including camera + tripod - but this is unspecified
* what are wearing parts? (frequency of replacement) early stage / unknown

###Accessibility/legibility###

* are there opportunities for people to participate/contribute
* formats: online/offline? very visual timelapse photos, archiving protocol unclear
* cost? (dollars, time) early stage / unknown
* access to materials, components early stage / unknown
* language barrier? N/A
* language: domain-specific, insider/outsider seems like it requires microcontroller knowledge. 

###Change effected###

* how has it measurably/materially affected:
  * local ecology early stage / unknown
  * available/actionable information? early stage / unknown
  * decision making early stage / unknown
  * legal, policy, regulatory? early stage / unknown
  * enables participation in a formerly closed information loop? early stage / unknown

##Future:##

2012 tool goals:

* expand to formaldehyde
* sync up the Toxic Mapper's movements to the sensor speed (one reading per 15-20 seconds)
* get it used on actual homes
* discover best practices, perhaps too early to know, such as taking pictures from 7’ up to capture panorama of room, how much blur to add to the RGB light trails so that the color in the final image is at the same resolution as the volume of air being measured. 

Idea--move away from roomba entirely and generate Formaldehyde Flashlight and VOC Flashlight?