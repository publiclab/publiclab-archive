---
title: "Leaflet.DistortableImage full resolution download"

tagnames: 'balloon-mapping, kite-mapping, mapknitter, aerial-photography, blog, leaflet, pole-mapping, code, exporting, leaflet-distortable-image, orthorectification, rubber-sheeting'
author: warren
path: /notes/warren/02-15-2019/leaflet-distortableimage-full-resolution-download.md
nid: 18316
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/029/250/original/Screenshot_2019-02-08_at_12.08.36_PM.png)

# Leaflet.DistortableImage full resolution download

by [warren](../../../profile/warren) | February 08, 2019 17:19

February 08, 2019 17:19 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [mapknitter](../tag/mapknitter), [aerial-photography](../tag/aerial-photography), [blog](../tag/blog), [leaflet](../tag/leaflet), [pole-mapping](../tag/pole-mapping), [code](../tag/code), [exporting](../tag/exporting), [leaflet-distortable-image](../tag/leaflet-distortable-image), [orthorectification](../tag/orthorectification), [rubber-sheeting](../tag/rubber-sheeting)

----

Across the Public Lab community, people are making their own maps using aerial photos (by [balloon mapping](/balloon-mapping), [kite mapping](/kite-mapping), and the like) with the [MapKnitter website](https://mapknitter.org) - which helps people "stitch" or "knit" images into a combined map, using an existing satellite map base layer as a reference.

The core of [MapKnitter's](https://mapknitter.org) interface, the [Leaflet.DistortableImage library](https://github.com/publiclab/Leaflet.DistortableImage), is seeing some new life as members of [our coding community](https://code.publiclab.org) have started to dig in and make improvements! Its main goal of letting people distort aerial images to fit onto a map is being refined, debugged, and expanded. (This was made possible in part with support from NASA's [AREN project](https://www.globe.gov/web/aren-project)) 

Above, a new feature you can see in the menu is a [full resolution download](https://github.com/publiclab/Leaflet.DistortableImage/pull/100) -- with no server-side processing at all. This was made possible through a lot of work by [John905](https://github.com/John905 "https://github.com/John905") and [rexagod](https://github.com/rexagod).

Try it out in the demo: [https://publiclab.github.io/Leaflet.DistortableImage/examples/](https://publiclab.github.io/Leaflet.DistortableImage/examples/ "https://publiclab.github.io/Leaflet.DistortableImage/examples/")

This takes the original full resolution image and distorts it in your browser (you may need to allow popups), and then downloads.

For example, the lead image generated this full-res distorted image: [full.png](/i/29251.png) (2304x1536 pixels)

See the preview below.

This may mean that for some smaller MapKnitter maps, you won't need to run a full export, which can take a while. This code should publish on MapKnitter within the next few days. Down the road, we're looking at more ways to [refine the export process](https://github.com/publiclab/mapknitter/issues/298) to make it even easier to make your own maps using [balloon](/balloon-mapping), [kite](/kite-mapping), [pole](/pole-mapping), or drone mapping.

![image description](https://publiclab.org/i/29252.png "preview.png")