---
nid: 11582
title: Announcing MapKnitter 2.0
path: public/static/notes/warren/02-13-2015/announcing-mapknitter-2-0.md
uid: 1
tagnames: balloon-mapping,kite-mapping,grassrootsmapping,mapknitter,image-stitching,web-development,software,grassrootsmappingforum,gsoc,developers,gsoc-2014,stitching,mapknitter2,gmf-8
---

# Announcing MapKnitter 2.0

Hello, mapmakers!

The Web Working Group has just launched the final version of MapKnitter 2, integrating all of the past summer's work and a **great deal more** into a near-complete overhaul of the platform. Much has changed for the better.

Try it out at https://mapknitter.org

This is such a major revamp that we're SURE there are lots of issues, bugs, oddnesses, etc. -- so PLEASE use Github to report any issues, and mention your browser and OS:

https://github.com/publiclab/mapknitter/issues/new

Also, check out the issues I've already posted here: https://github.com/publiclab/mapknitter/issues

In particular, **exporting is not running smoothly for everyone yet** -- however, this seems to potentially be a memory issue that was affecting the system before MapKnitter 2; we're not convinced this is due to the new code. Stay tuned for updates on that, and apologies for the trouble.

All old maps should work in the new interface, and for the time being we've preserved most of the "Legacy" MapKnitter interface to ease the transition for folks.

###What makes MapKnitter 2 different?

* it can handle more images, more smoothly; >60 images are still smooth
* no odd gridlines or artifacts during distortion
* finger-friendly on smartphones and tablets with touch interfaces
* more modular, extensible -- based on the [widely used and simple Leaflet map library](http://leafletjs.com)
* the new [image distortion code](https://github.com/publiclab/Leaflet.DistortableImage) can be used in any Leaflet-based project, thanks to hard work by [Anish](/profile/anishshah101) and [Justin's](/profile/justinmanley)
* it features new upload interface based on [Vidhun](/profile/xvidun) and [Justin's](/profile/justinmanley) work

[![mapknitter2.png](https://i.publiclab.org/system/images/photos/000/008/966/medium/mapknitter2.png)](https://i.publiclab.org/system/images/photos/000/008/966/original/mapknitter2.png)

###Upcoming features:

* using GPS EXIF tags in images to roughly place each one
* brand new MapKnitter Annotations 2 by Justin Manley
* full resolution imagery mode if you've got the bandwidth and CPU
* potentially live-editing, so you can see other peoples' edits in near-realtime

###New intro video

I also spent some time yesterday recording a new introduction video to the new interface, which you can see here:

<iframe width="640" height="480" src="//www.youtube.com/embed/0h6MBH6f2js?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Thanks to everybody who's put their valuable time into this project, especially our [Google Summer of Code 2014 students and mentors](/wiki/gsoc-2014)!

****

###The Public Lab developer community

**P.S.** Interested in contributing code to Public Lab open source software projects? 
Join the developers group at http://publiclab.org/wiki/developers

