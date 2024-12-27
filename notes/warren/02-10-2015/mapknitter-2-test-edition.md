---
title: "MapKnitter 2: Test Edition"

tagnames: 'balloon-mapping, mapknitter, web-development, webworkinggroup, software, developers, mapknitter2'
author: warren
path: /notes/warren/02-10-2015/mapknitter-2-test-edition.md
nid: 11574
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/008/884/original/mk2.png)

# MapKnitter 2: Test Edition

by [warren](../../../profile/warren) | February 10, 2015 21:46

February 10, 2015 21:46 | Tags: [balloon-mapping](../tag/balloon-mapping), [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [webworkinggroup](../tag/webworkinggroup), [software](../tag/software), [developers](../tag/developers), [mapknitter2](../tag/mapknitter2)

----

Hello, mapmakers!

The Web Working Group has set up a testing version of MapKnitter 2, integrating all of the past summer's work and a **great deal more** into a near-complete overhaul of the platform. Much has changed for the better.

This is a limited testing release, which uses a copy of real data, a snapshot from October, but does not allow image uploading or deletion, or affect the live MapKnitter.org site. 

This is such a major revamp that we're SURE there are lots of issues, bugs, oddnesses, etc. -- that's why we're launching a test server, which you can find here:

http://test.mapknitter.org:3000/

PLEASE use Github to report any issues, and mention your browser and OS:
https://github.com/publiclab/mapknitter/issues/new

Also, check out the issues I've already posted here: https://github.com/publiclab/mapknitter/issues

All old maps should work in the new interface, and for the time being we've preserved most of the "Legacy" MapKnitter interface to ease the transition for folks.

We'd like to spend the next few days ironing out issues, etc, in preparation for an actual launch. Later, we'll be adding new features on the clean, shiny new foundation that this release creates for us. We're PRETTY CLOSE to launch ready, having run this by the [Public Lab developers group](/wiki/developers) and the [Organizers group](/wiki/organizers); our outstanding feature/bug list is now at 100% complete:

[![mk2-launch.png](https://i.publiclab.org/system/images/photos/000/008/883/medium/mk2-launch.png)](https://i.publiclab.org/system/images/photos/000/008/883/original/mk2-launch.png)

Thanks to everybody who's put their valuable time into this project!

****

###What makes MapKnitter 2 different?

* can handle more images, more smoothly; >60 images are still smooth
* no odd gridlines or artifacts during distortion
* finger-friendly on smartphones and tablets with touch interfaces
* more modular, extensible -- based on widely used and simple Leaflet map library
* the image distortion code can be used in any Leaflet-based project
* new upload interface based on Vidhun and Justin's work

Upcoming features:

* using GPS EXIF tags in images to roughly place each one
* brand new MapKnitter Annotations 2 by Justin Manley
* full resolution imagery mode if you've got the bandwidth and CPU
* potentially live-editing, so you can see other peoples' edits in near-realtime

****

###The Public Lab developer community

**P.S.** Interested in contributing code to Public Lab open source software projects? 
Join the developers group at http://publiclab.org/wiki/developers