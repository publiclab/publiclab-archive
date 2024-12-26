---
title: "Auto Knitting enhancement usefulness and implementation."\ntagnames: 'mapknitter, gsoc, auto-knitting, exif'
author: xvidun
path: /notes/xvidun/03-08-2014/auto-knitting-enhancement-usefulness-and-implementation.md
nid: 10145
uid: 421168

---

# Auto Knitting enhancement usefulness and implementation.

by [xvidun](../profile/xvidun) | March 08, 2014 20:13

March 08, 2014 20:13 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [auto-knitting](../tag/auto-knitting), [exif](../tag/exif)

----

Recently I have been working on a proposal for adding the auto knitting feature to mapknitter, thanks to Chris for most of the tips and suggestions.

##Usefulness?
First point to note for the project success would be get some facts on the number of photos that have GPS data in them. 

  * How many people are using their smartphone for capturing images?
  * Will people invest in equipment or costly cameras to get GPS data?
  * Can smartphone coupled with camera be used to get GPS data on image? This way the user can also input the GPS location of an image to mapknitter.

##Implementation

**Some useful EXIF data that can be used(Iphone sample data):**

| EXIF | Value |
--- | --- |                                          
| GPS Latitude Ref | North
|GPS Longitude Ref | West
|GPS Altitude Ref | Above Sea Level
|GPS Time Stamp | 21:08:30
|GPS Img Direction Ref | True North
|GPS Img Direction | 346.4727273
|GPS Altitude | 1222 m Above Sea Level
|GPS Latitude | 37 deg 44' 10.80" N
|GPS Longitude | 119 deg 35' 58.80" W   

  * Latitude, Longitude data can be used to lock an Image to a particular point, using the direction to rotate image accordingly with the reference map. 

  * Using the altitude data will not be an easy task. One possible approach will be to zoom in/out the map to the altitude of the image this. I'm not sure of this, is there any way to specify the altitude of the map or is it possible to find a relation of zoom to altitude.

Unless I have some sample data I cannot verify the correctness of the approach. Does anyone have some sample photos with GPS coordinates that I can use? 