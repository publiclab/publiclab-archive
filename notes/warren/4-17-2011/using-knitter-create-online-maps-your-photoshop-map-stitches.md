---
title: "Using Knitter to create online maps from your Photoshop map stitches"

tagnames: 'peru, mapknitter, photoshop, gdal'
author: warren
path: /notes/warren/4-17-2011/using-knitter-create-online-maps-your-photoshop-map-stitches.md
nid: 175
uid: 1

cids: 

---

![](https://publiclab.org/sites/default/files/Screen shot 2011-04-17 at 2.39.54 PM.png)

# Using Knitter to create online maps from your Photoshop map stitches

by [warren](../../../profile/warren) | April 17, 2011 18:40

April 17, 2011 18:40 | Tags: [peru](../tag/peru), [mapknitter](../tag/mapknitter), [photoshop](../tag/photoshop), [gdal](../tag/gdal)

----

For those who are comfortable doing their map stitching in Photoshop, but for whom the GDAL tools for creating an online version of that map (a tileset) are a bit overwhelming, it does work to just take your Photoshop map and upload it to Knitter: http://cartagen.org/maps

Here's an example:

http://cartagen.org/maps/lima-morflex-nrg

then i pressed Export in the upper right corner, and it generated a GeoTiff (a geo-tagged Tiff), a TMS tile service, and an OpenLayers viewer:

http://cartagen.org/tms/lima-morflex-nrg/openlayers.html

This makes sense because Knitter is built on GDAL -- however, it can be a much easier interface for creating all the export formats.

It's also just a great way to share your maps online -- sometimes if you send a link around to a gigantic TIFF file you made in Photoshop, it crashes peoples' browsers when they try to open it... yikes.

<a href="https://www.flickr.com/photos/jeffreywarren/5627942653/" title="Exporting maps in Knitter by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5222/5627942653_10c2e5a3e4.jpg" width="500" height="423" alt="Exporting maps in Knitter"></a>