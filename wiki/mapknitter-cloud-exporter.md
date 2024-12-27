---
title: "MapKnitter Cloud Exporter"

tagnames: 'mapknitter, mapknitter-development, parent:mapknitter, location:blurred, zoom:15, lat:57.11, lon:-2.23'
author: warren
path: /wiki/mapknitter-cloud-exporter.md
nid: 23345
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/045/085/original/Screen_Shot_2021-11-17_at_12.55.41_PM.png)

# MapKnitter Cloud Exporter

by [warren](/profile/warren), [liz](/profile/liz)

April 08, 2020 23:30 | Tags: [mapknitter](/tag/mapknitter), [mapknitter-development](/tag/mapknitter-development), [parent:mapknitter](/tag/parent:mapknitter), [location:blurred](/tag/location:blurred), [zoom:15](/tag/zoom:15), [lat:57.11](/tag/lat:57.11), [lon:-2.23](/tag/lon:-2.23)

----

The new Cloud Exporter for MapKnitter uses a cloud-based process to produce full-resolution exported images and map tiles from [MapKnitter.org](https://mapknitter.org) maps.

To use it, shift-drag, shift-click, or long-press (on tablets) the images you want to export, then press the "download" button in the upper left of the screen, as shown here:

![cloud-export-gif](https://old.publiclab.org/mapknitter-cloud-demo.gif)

Your export will appear under the Exports tab alongside previous exports. 

## Overview

From the Export tab, you can export a map in a variety of formats. If you've changed the map at all since last exporting, you can re-run the export and the previous export outputs will be saved. All formats are       generated sequentially, so if you're waiting for a JPG you will have to let all the other formats complete first.
 
This may take some time - a large map could take as long as **an hour or more**. Closing the page will not stop the export.

### Comparison to the previous export system

**What is the same?**

* Same: all previous formats are still exported
* Same: closing the page will not stop the export.
* Same: privacy or lack thereof in anonymous maps

**What are the differences?**

* New: each export is now saved in a list, rather than overwriting previous exports
* New: you must select images in order to export
* New: exports run only on selected images, not all images
* New: where to find the “start export” button

### Get Involved

Please help provide feedback here: https://github.com/publiclab/mapknitter/issues/1244

Here is another demo at higher resolution:

![cloud-export-gif](https://publiclab.org/mk-cloud-export.gif)


### TMS

The Tiled Map Service format can be used from a MapKnitter export to use the output of a MapKnitter map in another program, like the OpenStreetMap's editor, ID. (as shown in lead image)

To do so, you take the TMS URL provided (like this example):

`https://mapknitter-exports-warps.storage.googleapis.com/1637088561/tms/`

And you add a formatting string to the end, forming:

`https://mapknitter-exports-warps.storage.googleapis.com/1637088561/tms/{z}/{x}/{y}.png`

(Some editors will require a negative `y` coordinate, so they would get: `
`https://mapknitter-exports-warps.storage.googleapis.com/1637088561/{zoom}/{x}/{-y}.png``)

Then the ID editor will be able to display map tiles from MapKnitter's export directly in the editor for tracing. 

If you want to make it even smoother, you can add that same URL to a longer URL directly in the OSM iD editor, like this:

`https://www.openstreetmap.org/edit#map=19/41.82003/-71.40364&background=custom:https://mapknitter-exports-warps.storage.googleapis.com/1637088561/tms/{z}/{x}/{-y}.png`

See the screenshot below:

[![Screen_Shot_2021-11-01_at_6.32.31_PM.png](/i/45021)](/i/45021?s=o)

Note that the integer in the above URL (1637088561) is the unique ID of the export, which is returned from our Exporter service as part of the `status.json`URL response when the export is first started. If you're a coder, you could use that to fetch things programmatically too. Learn more at https://github.com/publiclab/Leaflet.DistortableImage/

### Background

Mapknitter Cloud Exporter was one of four main coding projects of 2019's Google’s Community Atlas Grant to Public Lab. These four parts are: 

* Redesigning MapKnitter’s overall UI: tour feature, gallery, etc. 
* Rewriting the foundation of MapKnitter’s backend to 2019 standards (up from 2012 standards)
* Overhauling and rewriting Leaflet Distortable Image Library for the rubbersheeting we use
* Cloud Exporter! 

Sasha, Vladimir, Varun, Sebastian, and others spent several months working on this system in 2019. It connected with this global collaboration involving over a dozen people: https://publiclab.org/notes/warren/07-26-2019/community-atlas-an-around-the-world-collaboration-on-mapknitter  :D
