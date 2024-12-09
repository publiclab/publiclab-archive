---
title: Expanding Rural Transit Accesibility through Open Source
tagnames: transit
author: ajawitz
path: /wiki/expanding-rural-transit-accesibility-through-open-source.md
nid: 10216
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/003/369/original/BathTransitPrototype.png)

# Expanding Rural Transit Accesibility through Open Source

by [ajawitz](../profile/ajawitz)

March 21, 2014 22:38 | Tags: [transit](../tag/transit)

----

###What I want to do
 I want to model a real-time, vehicle-tracking system that would be accessible for small cities and rural regions through a combination of common, off-the-shelf components and customized open source software.   The project is a collaboration between [Bath CityBus](http://www.cityofbath.com/CityBus/), a municipal transit service in Bath, Maine and [Code for Maine](www.code4maine.org), a local ["Brigade" affiliate of Code for America](www.brigade.codeforamerica.org).  A full project wiki documenting research and planning efforts since 2012 can be found at http://code4maine.org/opentransitprojects/.

 Planning and Research efforts have thus far fallen under two distinct categories.
 **Open Transit Software** (i.e optimizing well-developed resources like [OpenTripPlanner](www.opentripplanner.org), [OneBusAway](onebusaway.org) etc... for rural transit applications)
 **Open Transit Hardware** (i.e vehicle location transmitters, GSM, RTL-SDR and OpenWRT mesh wireless configurations, Raspberry Pi-powered Transit Displays, RFID implementations, e-bikes etc...)

While extensive documentation already exists for the overall project at [www.code4maine.org/opentransitprojects](http://code4maine.org/opentransitprojects/) and for the efforts to build an open source vehicle tracker at [www.openvehicletracker.org](www.openvehicletracker.org), the research note format will allow us to explore certain areas in more detail.  

 
Unless otherwise necessary, the purpose of this wiki will be to document research notes and applications related to the _Open Transit Hardware_ category.
   
   

###Research Areas
####Mesh Networking 
[_See Full Research Note_](http://publiclab.org/notes/code4maine/03-24-2014/mesh-networks-for-rural-transit)
 
###Why I'm interested
Real-time transit tracking has become a common amenity in most urban transit systems.  Having access to real-time feeds, released in an open format known as "GTFS", makes riding public transit more convenient by allowing riders to plan their connections more accuratately while eliminating the uncertainty of waiting at a cold bus stop.
   In rural regions and small cities where transit services are often dispatched by request and/or are limited to only a few trips a day, such information would be more than an added amenity but rather could decide whether or not one makes it to work, medical appointments, grocery shopping etc...  
   Unfortunately, the market for transit technology is almost entirely oriented towards large-scale operations (and large scale budgets).  This results in a situation that priviledges those with better transit access to begin with while leaving behind those who might benefit the most.____