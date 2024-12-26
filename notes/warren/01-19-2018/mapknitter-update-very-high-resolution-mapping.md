---
title: "MapKnitter update: very high resolution mapping"\ntagnames: 'balloon-mapping, kite-mapping, mapknitter, aerial-photography, software, blog, leaflet, upgrades, stitching, updates, leaflet-distortable-image, map-stitching, garden-mapping, gardens'
author: warren
path: /notes/warren/01-19-2018/mapknitter-update-very-high-resolution-mapping.md
nid: 15568
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/023/273/original/Screenshot_2018-01-05_at_2.01.47_PM.png)

# MapKnitter update: very high resolution mapping

by [warren](../profile/warren) | January 19, 2018 22:15

January 19, 2018 22:15 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [mapknitter](../tag/mapknitter), [aerial-photography](../tag/aerial-photography), [software](../tag/software), [blog](../tag/blog), [leaflet](../tag/leaflet), [upgrades](../tag/upgrades), [stitching](../tag/stitching), [updates](../tag/updates), [leaflet-distortable-image](../tag/leaflet-distortable-image), [map-stitching](../tag/map-stitching), [garden-mapping](../tag/garden-mapping), [gardens](../tag/gardens)

----

For the first time in a while, we've updated [MapKnitter.org](http://mapknitter.org) -- after the release of [Leaflet.DistortableImage v0.1.3](https://github.com/publiclab/Leaflet.DistortableImage/) -- incorporating new improvements from @justinmanley's [Leaflet.toolbar](https://github.com/Leaflet/Leaflet.toolbar) project, as well as some key changes to the image distortion (rubber sheeting) interface. Thanks to @icarito for the help!

  
The biggest change, however, is that, due to supporting [Leaflet v1.0](http://leafletjs.com), we now support very high zoom levels in MapKnitter -- a long-requested feature we could never get working under older versions of Leaflet. You can now zoom well past the resolution of the reference map, which will just stretch to fit. 

  
This means you can do **really really high resolution maps** -- like gardens, for example. In the example above, the left image shows a single van parking space at a YMCA near where I used to live, while the right image shows the highest zoom level available under the old version of MapKnitter -- the maximum zoom of the reference map. It just stretches, but this is really key for very small mapmaking!

  
Here's another example of a map by @radikaltech that I hope will be able to use this higher-zoom system! Please tell me if it helps!

<iframe src="https://mapknitter.org/embed/doral-parking-lot-map-dec-1-2017" style="border:none;width:100%;height:400px;"></iframe>  
  
https://mapknitter.org/embed/doral-parking-lot-map-dec-1-2017