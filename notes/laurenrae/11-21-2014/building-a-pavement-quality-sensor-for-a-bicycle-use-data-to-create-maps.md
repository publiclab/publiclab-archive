---
title: "Building a pavement quality sensor for a bicycle, use data to create maps"\ntagnames: 'grassrootsmapping, remote-sensing, arduino, sensing, sensors, transportation, first-time-poster'
author: laurenrae
path: /notes/laurenrae/11-21-2014/building-a-pavement-quality-sensor-for-a-bicycle-use-data-to-create-maps.md
nid: 11380
uid: 431676

---

![](https://publiclab.org/public/system/images/photos/000/008/050/original/IMG_4026.JPG)

# Building a pavement quality sensor for a bicycle, use data to create maps

by [laurenrae](../profile/laurenrae) | November 21, 2014 19:15

November 21, 2014 19:15 | Tags: [grassrootsmapping](../tag/grassrootsmapping), [remote-sensing](../tag/remote-sensing), [arduino](../tag/arduino), [sensing](../tag/sensing), [sensors](../tag/sensors), [transportation](../tag/transportation), [first-time-poster](../tag/first-time-poster)

----

###What I want to do

During the barn raising, I talked to a few people about an older, low-tech community mapping project I headed called [NolaCycle](http://nolacycle.blogspot.com/).  During the Water Hackathon workshop last night, I came across a little piece of hardware that might make it possible to create a crowd-sourced pavement quality database.  This dude is called a Gravity Plug and it's the tool that allows a phone to know what direction is it oriented.  Could we build an Arduino-based tool utilizing this extension to create a pothole mapper? 

So my idea is that we build a little data-logger that you can attach to a bike, or even a car, that would record the amount of shaking the rider endures during a normal trip.  We'd have to include some type of GPS locater too (shouldn't be hard based on what Don and Dan talked about last night).  Then the data could be sent to an online data base via a wireless data network or later uploaded if loaded to an SD card.  We could create some type of program that would color or texture code a street segment based on the amount of shaking recorded.

Yes, we could do this with a phone and make an app like Hit the Pothole (RIP) or [Street Bump](http://www.cityofboston.gov/DoIT/apps/streetbump.asp), but when a person is cycling, they're cellphone is often in a backpack (which may absorb some of the shock) or in a pocket (which may bounce too much with moving legs).  If you could build a tool that was mounted to the seat post or handlebars (on bikes without shocks), then the tool would get a pretty accurate reading.  Also, it wouldn't drain cellphone batteries or use up a lot of data like Hit the Pothole did. 

###My attempt and results

Okay...I'm just starting with this open-source electrics stuff, so I haven't even tried to build it yet.  I'm just throwing it out there. 

###Questions and next steps

Would anyone care about a pavement quality map outside of New Orleans?  Everyone else's roads seem much nicer.

Also, many people avoid the worst parts of a road then they bike.  I'm not going to hit a pothole on purpose! 

###Why I'm interested

It was very difficult and time-consuming to update the [NolaCycle map](http://nolacycle.noladata.org/).  It would be awesome to create a high-tech, low-cost way to create road quality maps and update them with every ride.