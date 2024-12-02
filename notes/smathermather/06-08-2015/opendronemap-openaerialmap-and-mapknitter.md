---
nid: 11955
title: OpenDroneMap,OpenAerialMap,and MapKnitter
path: public/static/notes/smathermather/06-08-2015/opendronemap-openaerialmap-and-mapknitter.md
uid: 431062
tagnames: balloon-mapping,3d,kite-aerial-photography,mapknitter,drones,bundleadjustment,aerial-photography,gps,software,leaflet,metadata,autostitch,auto-placement,opendronemap,openaerialmap,leaflet.distortimage
---

# OpenDroneMap,OpenAerialMap,and MapKnitter

[A great post a couple weeks ago from Jeff Warren](http://publiclab.org/notes/warren/05-29-2015/openaerialmap-open-imagery-network-public-lab-s-mapknitter) addressed some of the questions of what are the opportunities for integration between the great work being done on MapKnitter, OpenAerialMap, and OpenDroneMap.

So, I have [a blog post](https://smathermather.wordpress.com/2015/06/07/openaerialmap-openimagerynetwork-mapknitter-openterrain-and-opendronemap-cont-1/) answering with my perspective on integration between the three, but the summary for MapKnitter/OpenDroneMap love is as follows:

Ways MapKnitter may help OpenDroneMap:

* MapKnitter’s clever use of Leaflet to handle affine transformation of images is really exciting, and may help with improving final georeferencing for OpenDroneMap datasets.

* Regarding the above, one really useful thing for fliers launching balloons, drones, and kites without GPS would be the ability to quickly and easily perform really approximate georeferencing. I would envision a workflow where a user moves an image to its approximate position and size relative to a background aerial. OpenDroneMap would be able to take advantage of this approximate georeferencing to optimize matching.

Ways OpenDroneMap could benefit MapKnitter

* For large image datasets, matching images can be very tedious. Automatic feature extraction and matching can help. OpenDroneMap could be adapted to serve back match information to Mapknitter to ease this process. This will become increasingly important as MapKnitter raises the ~60 image limit on images that it can process.

* A near future version of OpenDroneMap will have image blending / smoothing / radiometric matching. For the server portion of the MapKnitter infrastructure, this feature could be a really useful addition for production of final mosaics.