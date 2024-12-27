---
title: "Flight Temperature"

tagnames: 'kite-mapping, arduino, mapknitter, leaffest, leaffest2012, gps, jeenode, qgis'
author: cfastie
path: /notes/cfastie/10-8-2012/flight-temperature.md
nid: 4260
uid: 554
cids: 1599,1600,1635
---

![](https://publiclab.org/sites/default/files/LEAFBadel-20120922-9192.jpg)

# Flight Temperature

by [cfastie](/profile/cfastie) | October 08, 2012 23:26

October 08, 2012 23:26 | Tags: [kite-mapping](/tag/kite-mapping), [arduino](/tag/arduino), [mapknitter](/tag/mapknitter), [leaffest](/tag/leaffest), [leaffest2012](/tag/leaffest2012), [gps](/tag/gps), [jeenode](/tag/jeenode), [qgis](/tag/qgis)

----

A Jeenode is a tiny programmable computer with the same type of processor (8-bit Atmel RISC microprocessor) as an Arduino, and connectors for four sensors.  During a [40 minute kite flight at LEAFFEST](http://publiclaboratory.org/notes/cfastie/10-6-2012/sky-tracks) a Jeenode was recording temperature and barometric pressure about once per second and also recording x, y, and z data from an accelerometer. You can sort of see the Jeenode under the red tape in the above photo of the rig we flew that day.  

Don sent me the data yesterday, and I matched up the temperature series with the data from a GPS watch on the rig and dragged it kicking and screaming into Google Earth.  I need help finding a more elegant way to produce a KML file from this sort of data.

<iframe width="540" height="304" src="https://www.youtube.com/embed/oPKooijSts0?rel=0" frameborder="0" allowfullscreen></iframe>

I was hoping that Google Fusion Tables would help with this task because it does a good job making Google Earth KML files from spreadsheet data if they include GPS coordinates.  But it appears that Fusion Tables do not support 3D GPS data (lat, long, and altitude).  Maybe Google Spreadsheet Mapper will do it, but I have never figured out how to use that. So I had to construct a separate KML file for each different segment of the colored GPS track.  If anyone knows a better way to get a colored path like this into Google Earth, please let me know. The temperature data vary continuously, but I dumped it into five bins to make my job simpler. It would be nice to see the continuous variation.

You can download the [KMZ file of the color coded GPS track](http://fastie.net/wp-content/uploads/2012/10/FlightTemp.kmz) (without the MapKnitter overlay) and view it in Google Earth. There is a recorded tour included (double click on it) which flies in a circle around the kite track.

If you examine the track carefully, you can probably tell which way the KAP rig was moving through the air.