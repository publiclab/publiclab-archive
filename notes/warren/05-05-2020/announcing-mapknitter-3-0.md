---
title: Announcing MapKnitter 3.0
tagnames: balloon-mapping, kite-mapping, mapknitter, software, gsoc, blog, code, lat:41, lon:-71, community-atlas, zoom:6
author: warren
path: /notes/warren/05-05-2020/announcing-mapknitter-3-0.md
nid: 23549
uid: 1

---

# Announcing MapKnitter 3.0

by [warren](../profile/warren) May 05, 2020 22:45

May 05, 2020 22:45 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [mapknitter](../tag/mapknitter), [software](../tag/software), [gsoc](../tag/gsoc), [blog](../tag/blog), [code](../tag/code), [lat:41](../tag/lat:41), [lon:-71](../tag/lon:-71), [community-atlas](../tag/community-atlas), [zoom:6](../tag/zoom:6)

Over the past year we’ve been working hard on a new system for exporting maps in MapKnitter, and have been beta testing the new “Cloud Exporter” for the past several weeks. 

Today we’re shutting down the old exporting system as a part of the full launch of MapKnitter 3.0, and I wanted to offer a little background on this transition. 

## Exporting

What is exporting in MapKnitter? Basically, when you upload a bunch of aerial photos -- from a balloon mapping trip, for example -- you have just a collection of images on a map. It’s interactive, and it’s great for viewing online, but there are a variety of reasons you might want to download a **single, high resolution combined image** of your entire map:

* to print it out
* to use it in a GIS program
* to archive it
* to email it or embed it in a PDF

Folks have been used to being able to download a copy of their map in this way, in JPG, GeoTIFF, or even TMS format. But it hasn’t been easy!

This exporting process can often take HOURS, because it involves processing GIGANTIC images -- it’s not unusual to see a 20,000x20,000 pixel image result from a big map! This was all running on our server, and any time you’ve seen slowness on MapKnitter.org, it’s likely that the website was in the middle of a major export. It’s not a great way to run a website, and it was pretty expensive as well. 

## Cloud exporting

What we’ve done is to create a cloud-based exporting service that’s completely separate from MapKnitter.org, and to which we submit jobs, almost like a printer. That means there is no effect on the website speed, and theoretically, you can submit as many jobs as you like, and our system can scale up to handle them. It’s still not free, so please go easy (or consider [donating to support our work](/donate)!) -- but it is pay-as-you-go, so we’re not always paying for a massive server to be online all the time in case someone runs an export. We also incorporated a lot of other improvements. So, what’s changed?

## What are the differences?

* New: each export is now archived in a list, rather than overwriting previous exports
* New: you must select images in order to export, so you can export different parts of your map individually
* New: exports run only on selected images, not all images
* New: where to find the “start export” button (it appears in the upper left once you’ve selected images)
* New: you can run multiple exports at the same time

## What is the same?

* Same: all previous formats are still exported: JPG, GeoTIFF, TMS, ZIP
* Same: closing the page will not stop the export
* Same: privacy (or lack thereof) in anonymous maps was not altered in this release

This release coincides with a LOT of other changes across the entire MapKnitter.org website, many of which came out of last summer’s Google Summer of Code program, and the Google Community Atlas grant we received in 2018-19. These include:

* Separation of the "view map" page from the "edit map" page, i.e. https://mapknitter.org/maps/kinneil-roman-fortlet vs. https://mapknitter.org/maps/kinneil-roman-fortlet/edit 
* Group selection of images
* An interactive tour of maps around the world at https://mapknitter.org/
* "Nearby maps" listings on each map page

And literally thousands of other changes and refinements, many “under the hood” that you may never notice, but which have been critical to updating the MapKnitter codebase to 2020 and ensuring it is maintainable, sustainable, and reliable for years to come. 

Thanks to EVERYONE who [helped to make this happen](https://publiclab.org/notes/warren/07-26-2019/community-atlas-an-around-the-world-collaboration-on-mapknitter)!

You can read more about the exporter on this page: https://publiclab.org/wiki/mapknitter-cloud-exporter