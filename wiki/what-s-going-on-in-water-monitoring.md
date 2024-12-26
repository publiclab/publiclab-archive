---
title: "What's going on in Water Monitoring?"\ntagnames: 'water-sensing, water-quality, water, open-water, parent:water-quality'
author: kanarinka
path: /wiki/what-s-going-on-in-water-monitoring.md
nid: 10392
uid: 994

---

# What's going on in Water Monitoring?

by [kanarinka](../profile/kanarinka), [danbeavers](../profile/danbeavers), [cfastie](../profile/cfastie)

May 02, 2014 13:52 | Tags: [water-sensing](../tag/water-sensing), [water-quality](../tag/water-quality), [water](../tag/water), [open-water](../tag/open-water), [parent:water-quality](../tag/parent:water-quality)

----

For development of Public Lab's [Open Water Project](http://publiclab.org/wiki/open-water) we wanted to do a "lit review" of what other work is going on in the space of community water monitoring, low-cost water sensing, and open source/open hardware in relation to water. This will help us highlight areas we might collaborate with others or potentially improve our own technology. It has already been useful in improving the conductivity measurement for the Riffle (thanks to the CATTFISH project at CMU that shared how they were doing their conductivity monitoring). Please add to this list as you come across other projects!  
[edit]  


##I. Water Provision Monitoring

###[Tariffa](http://blog.ushahidi.com/2011/10/28/rhok-water-hackathon-%E2%80%93-team-taarifa-won/):
Came out of a RHoK and is a fork of Ushahidi. They were frustrated because maps seemed to be the end goal, but not much being done with maps. They created a reporting platform based on Ushahidi focusing on water points. Citizens send unique identifier to SMS service (Twilio), and then message gets queued in the public sector responsible for implementing that service / infrastructure.  

###[Maji Matone](http://blog.daraja.org/2011/12/maji-matone-hasnt-delivered-time-to.html)
Encourages citizens to pressure government to fix rural water supply issues. People provide SMS based feedback on rural water supply in Tanzania. Have media partnerships so tried to amplify problems via media to pressure government to change. At end of three year trial, only had about 50 messages and concluded the project was a failure (they wrote set of fascinating blog posts reflecting on the failure). Concluded that obstacles to success included technology (electricity, etc.), political risk, and social norms (e.g. gender).

###[CharityWater](http://www.charitywater.org/)
CharityWater is an NGO that brings clean water to people in “developing” countries. Their model involves providing funding to local organizations. Have funding from Google to to develop remote sensor technology to monitor whether water is flowing at specific project sites. Will install 4,000 remote sensors in various countries.


##II. Water Quality Testing

###[Water Canary](http://www.watercanary.com/)
Inexpensive water testing device that came out of NYU ITP. They use inexpensive spectral analysis and provide results in minutes; data is uploaded to water canary servers and they have software for mapping the geotagged data. Some of their material seems to indicate it’s for testing for drinking water and others indicate it’s for first alert for pollutants or spills. Say it’s for “emergency water potability testing” and they’re for-profit business model markets to disaster relief communities. 

###[3M™ Petrifilm™ E.coli/Coliform Count Plates](http://solutions.3m.com/wps/portal/3M/en_US/Microbiology/FoodSafety/product-information/product-catalog/?PC_Z7_RJH9U523003DC023S7P92O3O87000000_nid=C0WJ62882Vbe29BDXSBJ7Fgl)
The 3M™ Petrifilm™ E.coli/Coliform Count Plate identifies both E. coli and other coliforms with confirmed results in just 24-48 hours.  Tape it to your body to incubate it!


##III. Open Community 

###[Acqualta](http://www.acqualta.org/faq-eng)
Depth sensor created by Eraclit and used for citizen monitoring by #opendatavenezia in Venice, Italy. The hardware is patented but the data is open and logged continuously to the Internet by the depth sensor. 

###[Community Water Center](http://www.communitywatercenter.org/)
They are a catalyst for “community-driven water solutions” in California’s San Joaquin Valley. They focus on rural, low-income communities. They train clean water advocates, provide legal counsel, etc. to tackle to causes of unsafe drinking water. They’re on the community organizing side (not hardware / software development). The most common contaminant in the region is nitrate, although there are others as well (arsenic, chlorine, etc.). I like how they’re taking a community approach and working with domestic water issues.  

##IV. Open Hardware Projects

###[AirBot / WaterBot](http://www.engadget.com/2012/10/25/airbot-and-waterbot-help-localize-pollution-data-collection-vid/)
Came out of Carnegie Mellon’s CREATE Lab. WaterBot allows you to measure purity information for streams, etc. and it uploads data to the web via ZigBee module. Takes conductivity and temperature reading. Could put a bunch of WaterBots along a waterway and see how the quality changes longitudinally over time. Can be powered for up to 12 months on batteries.

Also have CATTFish (Conductivity and Temperature in the Toilet), which you can use to measure water quality in your toilet (this data is uploaded to web via USB). Good for rural areas because you are sampling your well (aquifer) and get a new batch of water to test every time you flush the toilet. Costs $50. Ideal application is fracking regions.

The WaterBot seems pretty closely related to RIFFLE, although the encasement is quite different (WaterBot doesn’t completely submerge; you put an extension down into the water and the primary hardware is above-water).   

###[OpenCTD](http://www.rockethub.com/projects/26388-oceanography-for-everyone-the-openctd)
OpenCTD is a project aimed at building a low-cost CTD (conductivity-temperature-depth) and will cost about $200. Here’s an article about the project. This project is aimed at marine science research. Looks like they’re trying to fund the development (in-progress). They aim to have an instrument that can work at 200 meter depths. The encasement seems similar to RIFFLE, although the target users are different (they’re target marine researchers without the funding to purchase expensive CTD equipment).=

###[ORP / pH / Temperature Data Logger](http://www.instructables.com/id/ORP-pH-Temperature-Data-Logger/)
This project involves building a DIY data logger to measure pH, ORP (oxidation-reduction potential), and temperature. Could be used for drinking water, aquariums, pools / spas. Have full instructions on Instructables.

##V. Water orgs / communities / education:

###[Miya](http://www.miya-water.com/)
Miya is a company that improves drinking water infrastructure by conducting audits of city water systems and providing maintenance and training. Goal is to improve water efficiency and decrease underground leaks and mismanagement (“more than a third of the world’s drinking water is lost from urban supply systems”). They partner with utilities to implement technology based solutions. 

###[WaterAid](http://www.wateraid.org/)
WaterAid is an international NGO that helps develop water, sanitation, and hygiene projects (WASH) and works on campaigns to change water policy. They work in partnership with local organizations to implement low-cost technologies such as rainwater harvesting, borehole drilling rigs, gravity systems, etc. They work in 27 countries.

###[Columbia Water Center (at Earth Center)](http://water.columbia.edu/)
Research institute focusing on the challenges of “a rapidly changing world where water and climate interact with food, energy, ecosystems and urbanization.” They conduct inquiry into understanding and improving issues of freshwater scarcity around the world. Founded in 2008 through a grant from PepsiCo.


##VI. Water Purification

###[Water is Life](http://www.waterislife.com/)
Developed [The Straw](http://www.waterislife.com/the-straw/what-is-the-straw/), which is a small filtration device (filters out waterborne diseases such as typhoid, cholera, etc.). Straws cost $10. Has charcoal filter, iodine crystals, and membrane filters. Made of plastic, about 10” by 1”. I’m curious if people actually use these; seems like something you pour water through could be more helpful than a straw because it takes a lot less time.

###[PureMadi](http://www.puremadi.org)
PureMadi creates and tests appropriate technologies to improve water quality and overall human health globally. Projects include sustainable, ceramic water filter factory in South Africa, and MadiDrop, a point of use water treatment technology. “The MadiDrop is a porous ceramic tablet that has been impregnated with silver or copper by a unique process.” 


##VII. Online software / water quality data aggregation

###[Open Waters](http://open-environment.org/openwaters.html)
Open Waters is an open-source water quality data manegment system aimed at government agencies (tribal, state, local water quality data managers). Intended for people who already monitor water; this tool allows them easily submit their data to the [EPA’s WQX program](http://www.epa.gov/STORET/wqx/index.html) (WQX makes it easier for states, tribes, etc. to share water quality data online). Users can view their data on a map, export data (Excel), etc. Data is automatically synchronized with EPA’s system.


###Tegabrain.com
http://water.org
Write description here [edit]  
