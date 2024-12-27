---
title: "Editing OpenStreetMap with balloon maps"

tagnames: 'balloon-mapping, kite-mapping'
author: warren
path: /wiki/editing-openstreetmap-balloon-maps.md
nid: 909
uid: 1

---

# Editing OpenStreetMap with balloon maps

by [liz](../profile/liz), [warren](../profile/warren)

March 09, 2012 14:52 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping)

----

It's easy to add your [MapKnitter](https://mapknitter.org) exported map as a background layer when editing OpenStreetMap. This wiki page explains how to connect to Potlatch 2 and iD editor. This slide show from State of the Map US 2013 may help illustrates these workflows: http://www.slideshare.net/LizBarry/2013-0609-sotmussf
There is also a case study of an earlier method at the bottom of this wiki page. 

![ExportFormats.png](https://i.publiclab.org/system/images/photos/000/000/495/medium/ExportFormats.png)

###Potlatch 2###

With help from Andreas Trawoeger from the OSM-talk list, we set up a "deep link" underneath the _Export formats_ area,  so you can open your map directly in OpenStreetMap's Potlatch 2 editor by clicking "Use your map to contribute to OpenStreetMap in Potlatch":

**Note:** this is only available for maps which have been released under open licenses, such as CC-BY or public domain.

###iD Editor##

In Mapknitter.org, there is a "deep link" underneath the _Export formats_ area so you can click "Use your map to contribute to OpenStreetMap in iD". This will open the iD editor hosted on openstreetmap.us. 

Manual method for adding a TMS layer on openstreetmap.org: you can click the Edit tab, choose the iD editor, then click the background tab to add a custom layer. The URL you paste in will be formatted like this: https://mapknitter.org/tms/2011-7-31-brooklyn-gowanus-vis/alt/{z}/{x}/{y}.png

![Screen_Shot_2013-06-07_at_5.12.32_PM.png](https://i.publiclab.org/system/images/photos/000/000/494/medium/Screen_Shot_2013-06-07_at_5.12.32_PM.png)

![Screen_Shot_2013-06-07_at_5.19.57_PM.png](https://i.publiclab.org/system/images/photos/000/000/493/medium/Screen_Shot_2013-06-07_at_5.19.57_PM.png)


----

###Old technique (no longer necessary)###

In this example I'm using [a map of Mestia, a city in the Svaneti region of Georgia](https://mapknitter.org/map/view/mestia).

First, open the "backgrounds" menu and choose "Add":

<a href="https://www.flickr.com/photos/jeffreywarren/6966926691/" title="Adding MapKnitter balloon map in Potlatch 2 by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7061/6966926691_2b89348ba6.jpg" width="500" height="313" alt="Adding MapKnitter balloon map in Potlatch 2"></a>

Then, add a new background layer, using your map's "**OSM-style TMS**" link, with added z,x,y like this:

    https://mapknitter.org/tms/mestia/alt/$z/$x/$y.png

Where "mestia" is your map's name. See screenshot:

<a href="https://www.flickr.com/photos/jeffreywarren/6820806370/" title="Adding MapKnitter TMS to Potlatch 2 by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7210/6820806370_e829445368.jpg" width="500" height="313" alt="Adding MapKnitter TMS to Potlatch 2"></a>

You can turn off "dimming" to see the map more clearly:

<a href="https://www.flickr.com/photos/jeffreywarren/6966926591/" title="Using MapKnitter balloon map in Potlatch 2 by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7190/6966926591_aea35e47a7.jpg" width="500" height="313" alt="Using MapKnitter balloon map in Potlatch 2"></a>

Zoom in and see how well your balloon map fits existing data. Then trace to add more features:

<a href="https://www.flickr.com/photos/jeffreywarren/6820806282/" title="Using MapKnitter balloon map in Potlatch 2 by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7202/6820806282_82124b8f8b.jpg" width="500" height="313" alt="Using MapKnitter balloon map in Potlatch 2"></a>