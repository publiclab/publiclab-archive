---
nid: 7368
title: MapKnitter: forcing layer order through larger scale images
path: public/static/notes/gonzoearth/05-09-2013/mapknitter-forcing-layer-order-through-larger-scale-images.md
uid: 12
tagnames: balloon-mapping,kite-mapping,mapknitter,tips
---

# MapKnitter: forcing layer order through larger scale images

MapKnitter currently has automated control over the layer ordering of the output mosaic. Order is determined by image extent size from back to front.

In this map I wanted to include the image of the mappers in a circle pattern on the ground. At first MapKnitter did not want to show the image in favor of a different image in the same scene that had a different angle. So, the image was cropped, giving it a smaller extent, and moving it to the top of the resulting output map and image mosaic.