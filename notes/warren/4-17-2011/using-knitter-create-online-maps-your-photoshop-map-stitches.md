---
nid: 175
title: Using Knitter to create online maps from your Photoshop map stitches
path: public/static/notes/warren/4-17-2011/using-knitter-create-online-maps-your-photoshop-map-stitches.md
uid: 1
tagnames: peru,mapknitter,photoshop,gdal
---

# Using Knitter to create online maps from your Photoshop map stitches

For those who are comfortable doing their map stitching in Photoshop, but for whom the GDAL tools for creating an online version of that map (a tileset) are a bit overwhelming, it does work to just take your Photoshop map and upload it to Knitter: http://cartagen.org/maps

Here's an example:

http://cartagen.org/maps/lima-morflex-nrg

then i pressed Export in the upper right corner, and it generated a GeoTiff (a geo-tagged Tiff), a TMS tile service, and an OpenLayers viewer:

http://cartagen.org/tms/lima-morflex-nrg/openlayers.html

This makes sense because Knitter is built on GDAL -- however, it can be a much easier interface for creating all the export formats.

It's also just a great way to share your maps online -- sometimes if you send a link around to a gigantic TIFF file you made in Photoshop, it crashes peoples' browsers when they try to open it... yikes.

<a href="https://www.flickr.com/photos/jeffreywarren/5627942653/" title="Exporting maps in Knitter by jeferonix, on Flickr"><img src="http://farm6.static.flickr.com/5222/5627942653_10c2e5a3e4.jpg" width="500" height="423" alt="Exporting maps in Knitter"></a>