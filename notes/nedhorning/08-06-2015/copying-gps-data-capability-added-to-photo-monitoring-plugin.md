---
nid: 12124
title: Copying GPS data capability added to photo monitoring plugin
path: public/static/notes/nedhorning/08-06-2015/copying-gps-data-capability-added-to-photo-monitoring-plugin.md
uid: 133
tagnames: gps,photomonitoring,geo-tagging
---

# Copying GPS data capability added to photo monitoring plugin

The most frequent feature request for the photo monitoring plugin is to be able to copy GPS data from the original photo to the output NDVI or DVI image. This capability now exists in the most recent version of the plugin. The entire EXIF metadata set will be copied which includes GPS data (if they exist), time image was acquired, camera setting and over a hundred other pieces of information. 

One caveat is that the EXIF metadata can only be copied from JPEG images at this time but that seems to be the most frequent case. 

For dual-camera processing there is an option to select if the EXIF data should come from the visible or near-infrared camera.

Another related change is that I removed the option to specify the output image format. This was causing confusion so now color index images will be output in the JPEG format and the raw floating point (decimal) NDVI and DVI images will be output in the TIFF format. At this time only the JPEG images will have the EXIF metadata copied form the original photo. 

The plugin and user guide are available on the Github site: https://github.com/nedhorning/PhotoMonitoringPlugin

I also fixed a few bugs. If you have any issues running the plugin please let me know.