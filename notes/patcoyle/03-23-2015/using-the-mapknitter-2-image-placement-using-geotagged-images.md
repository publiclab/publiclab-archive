---
title: "Using the Mapknitter 2 image placement using geotagged images"

tagnames: 'mapknitter, delta, kap, gps, sfm, software, structure-from-motion, sx260hs, gsoc, juice-bottle-rig, gsoc-2014, exif, auto-placement, mapknitter2'
author: patcoyle
path: /notes/patcoyle/03-23-2015/using-the-mapknitter-2-image-placement-using-geotagged-images.md
nid: 11714
uid: 77

cids: 11382,11384,11386,11393,11394,11395,11832

---

![](https://publiclab.org/public/system/images/photos/000/009/391/original/ssmap.jpg)

# Using the Mapknitter 2 image placement using geotagged images

by [patcoyle](../../../profile/patcoyle) | March 23, 2015 05:03

March 23, 2015 05:03 | Tags: [mapknitter](../tag/mapknitter), [delta](../tag/delta), [kap](../tag/kap), [gps](../tag/gps), [sfm](../tag/sfm), [software](../tag/software), [structure-from-motion](../tag/structure-from-motion), [sx260hs](../tag/sx260hs), [gsoc](../tag/gsoc), [juice-bottle-rig](../tag/juice-bottle-rig), [gsoc-2014](../tag/gsoc-2014), [exif](../tag/exif), [auto-placement](../tag/auto-placement), [mapknitter2](../tag/mapknitter2)

----

###What I want to do

Try the new  Mapknitter 2 feature to automatically place images that have gps coordinates in the EXIF  information.

### My attempt and results
I used images from Canon SX260HS, with integrated gps, in juice bottle rig with Delta 9' Levitation to make map of the pier at the Berkeley, CA marina and the parking lot in front of Skates restaurant (~1km walk). 


[![delta.jpg](https://i.publiclab.org/system/images/photos/000/009/393/medium/delta.jpg)](https://i.publiclab.org/system/images/photos/000/009/393/original/delta.jpg)


[![pier1.jpg](https://i.publiclab.org/system/images/photos/000/009/394/medium/pier1.jpg)](https://i.publiclab.org/system/images/photos/000/009/394/original/pier1.jpg)



Draft map (rough, not tweaked, first export in-progress)  is at: [https://mapknitter.org/maps/pier-at-berkeley-ca-marina#](https://mapknitter.org/maps/pier-at-berkeley-ca-marina#)


[![ssmap.jpg](https://i.publiclab.org/system/images/photos/000/009/392/medium/ssmap.jpg)](https://i.publiclab.org/system/images/photos/000/009/392/original/ssmap.jpg)



((Jeff Warren just implemented this, so now available.) I still haven't figured out how to imbed code to display the map in this note, like used to be able to in the prior version.)

<iframe src="https://mapknitter.org/embed/pier-at-berkeley-ca-marina" style="border:none;" width="100%" height="300px"></iframe>

The benefit of this feature is apparent for the images of the long pier. Without auto-placement, locating these images with little in the way of ground references is a problem. Auto-placement makes it easier. Particularly for images where a portion of the pier is near an edge of the image (rather than centered), just scaling and rotating the image, as placed, made alignment to the base map pier image pretty simple (when the key feature is centered, orientation is still potentially ambiguous after rotation). 

Here is screenshot of [demo map](https://mapknitter.org/maps/demo-auto-placing-image-with-gps-info) with two images auto-placed, with no further action.


[![sshot_of_2_auto-placed_images.jpg](https://i.publiclab.org/system/images/photos/000/009/399/medium/sshot_of_2_auto-placed_images.jpg)](https://i.publiclab.org/system/images/photos/000/009/399/original/sshot_of_2_auto-placed_images.jpg)



###Questions and next steps

The PL MK developers are pursuing additional ways to use the gps information for more than rough placement, and I'll try to follow their work. 

###Why I'm interested

Particularly in areas where the base map imagery lacks high resolution or the base map features are sparse such as: open water, prairies, jungle canopy or bush; gps placement is useful, perhaps essential, for mapping. In other areas it can be a convenient way to quickly place images in preliminary locations.