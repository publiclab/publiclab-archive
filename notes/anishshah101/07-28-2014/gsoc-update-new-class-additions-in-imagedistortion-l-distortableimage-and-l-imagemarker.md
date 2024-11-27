---
nid: 10985
title: GSoC Update- New class additions in ImageDistortion (L.DistortableImage and L.ImageMarker)
path: public/static/notes/anishshah101/07-28-2014/gsoc-update-new-class-additions-in-imagedistortion-l-distortableimage-and-l-imagemarker.md
uid: 421046
tagnames: mapknitter,gsoc,developers,gsoc-2014
---

# GSoC Update- New class additions in ImageDistortion (L.DistortableImage and L.ImageMarker)

The working demo of the latest version of ImageDistortion can be viewed here: http://128.199.208.55/

You can click and drag any control point to distort the image. The code can be viewed here: https://github.com/anishshah101/ImageDistortLeaflet


[![2.PNG](https://i.publiclab.org/system/images/photos/000/005/604/medium/2.PNG)](https://i.publiclab.org/system/images/photos/000/005/604/original/2.PNG)


On Zooming, the image behaves weirdly, that still remains to be corrected.

Important changes/additions in plugin:

1) Extended the [L.ImageOverlay](https://github.com/Leaflet/Leaflet/blob/7829c729eb4a80ee815a7fda74f3eba76d932e39/src/layer/ImageOverlay.js#L5) class to [L.DistortableImage](https://github.com/anishshah101/ImageDistortLeaflet/blob/master/imagedistort/distortableimage.js#L2):  . This was done to add the DOM attribute ```id``` to make every image unique.

2) Extended the [L.Marker](https://github.com/Leaflet/Leaflet/blob/f773a16c864b88ad9b3ea46a0c551cabe0bb2829/src/layer/marker/Marker.js#L5) class to [L.ImageMarker](https://github.com/anishshah101/ImageDistortLeaflet/blob/master/imagedistort/imagemarker.js#L1):  .This was done to make the image control points ```draggable``` and ```clickable``` by default. Also, the ```riseonhover``` property provides it with a high ```z-index``` value so that it remains on top of everything else for selection. Any custom image can be used as an image marker.

Things which still remain to be done:

1) Correcting the zoom event by preserving the last state of the distorted image.
