---
nid: 11693
title: Automatic placement of images in MapKnitter using GPS metadata
path: public/static/notes/warren/03-19-2015/automatic-placement-of-images-in-mapknitter-using-gps-metadata.md
uid: 1
tagnames: mapknitter,gps,gsoc,gsoc-2014,auto-placement,response:10999
---

# Automatic placement of images in MapKnitter using GPS metadata

After a long wait, I've finally integrated @xvidun's feature of [automatically placing images](http://publiclab.org/notes/xvidun/07-31-2014/gsoc-upadate-upload-interface) on a MapKnitter map if they have GPS EXIF metadata -- that is, if they've been taken from a smartphone or camera with a GPS. I implemented only placement in latitude/longitude so far, but we should be able to expand this to figure out rough compass heading and altitude with a bit of extra work. 

To use this new feature, just drag images which have GPS EXIF data in them onto a MapKnitter map, then click "Auto-place with GPS". [MapKnitter](https://mapknitter.org) does the rest! 

Watch this video to see it in action, or try it yourself:

<iframe width="640" height="480" src="//www.youtube.com/embed/ARUjq12WQok?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>