---
nid: 11494
title: OpenDroneMap: Open Source Toolkit for processing Civilian Drone Imagery gets orthophotos
path: public/static/notes/smathermather/12-23-2014/opendronemap-open-source-toolkit-for-processing-civilian-drone-imagery-gets-orthophotos.md
uid: 431062
tagnames: balloon-mapping,kite-aerial-photography,drones,aerial-photography,aerial-mapping,aerial-photos,code,northeast,uas,opendronemap,suas
---

# OpenDroneMap: Open Source Toolkit for processing Civilian Drone Imagery gets orthophotos

##What I want to do

OpenDroneMap (http://opendronemap.github.io/odm/) is a tool to postprocess small Unmanned Aerial Vehicle (sUAS), balloon, kite, and street view data to geographic data. With the current update, we are adding the ability to create orthophotos from drone, balloon, and kite imagery which has GPS ephemeris. Future versions will permit the use of GCPs with no onboard GPS.

##My attempt and results

Good news to report, though I haven’t finished my own testing yet… but OpenDroneMap, which previously would just create point clouds from drone images, now also produces:

*     Meshes!
*     Textured meshes!
*     Georeferenced textured meshes (if the exif data has geographic coordinates)
*     Georeferenced orthophotos! (if the exif data has geographic coordinates)

Now, I’d like those ifs to go away, but that requires a bit of thoughtful interface work. In the mean time, give it a whirl on your data.

Work left to do:

*     Refine processing chain
*     Allow for input of GCPs for images without GPS in their exif
*     Blending / brightness correction, etc. of input images
*     Digital surface model output

See this branch on github for the whole package : https://github.com/OpenDroneMap/OpenDroneMap/tree/texturing_orthophoto_spotscale_additions.

[![seneca_screen.jpg](https://i.publiclab.org/system/images/photos/000/008/524/medium/seneca_screen.jpg)](https://i.publiclab.org/system/images/photos/000/008/524/original/seneca_screen.jpg)

[![odm_orthphoto.png](https://i.publiclab.org/system/images/photos/000/008/525/medium/odm_orthphoto.png)](https://i.publiclab.org/system/images/photos/000/008/525/original/odm_orthphoto.png)

##Conclusions

There's still plenty of work to do to bring this to really low tech use cases, but this project now has a good skeleton to build toward that outcome.