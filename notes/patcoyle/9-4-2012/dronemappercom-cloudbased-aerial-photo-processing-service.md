---
title: "dronemapper.com cloudbased aerial photo processing service "

tagnames: ''
author: patcoyle
path: /notes/patcoyle/9-4-2012/dronemappercom-cloudbased-aerial-photo-processing-service.md
nid: 3645
uid: 77
cids: 1255,1270
---

![](https://publiclab.org/sites/default/files/OrthoN-DroneMapper_test1.jpg)

# dronemapper.com cloudbased aerial photo processing service 

by [patcoyle](/profile/patcoyle) | September 05, 2012 03:59

September 05, 2012 03:59 | Tags: 

----

I learned of another cloudbased aerial photo processing service  http://dronemapper.com/

I tried their free 25 image upload.

The process stalled and when I contacted them, Jon-Pierre Stoermer advised that, "...the problem with your flights is that each image doesn't have a unique lat, lon, and elevation geo-tag. I can create maps without geo-reference if you like. I'll take a look at your latest uploads and see what I can do..."

I replied, "... Makes sense, the photos were taken in continuous mode, ~1 per second. However, the gps track was from a QStarz BT-Q1300 at 5 second interval so in geotagging, same coordinates were applied to more than one image. If you can process without, I'd like to see the results. I'm pleased to see your service and wish you well. I found it through Conservation Drones connection."

After I saw the results, I wrote back, "One thing I have been doing which should avoid the gps issue you noted, is that I have been flying an iPhone with GPS-Trk app, which writes a track point every second. It can run in background while Time Fugit intervalometer runs in foreground, triggering a custom circuit to drive a pair of CHDK enabled Canon A490/495s running remote shutter (There is also a simple 555 based timer circuit to trigger the cameras). One is modified to shoot IR, the other captures visible. Ned Horning's application at  https://github.com/nedhorning/RegisterPhotos co-registers near-IR and visible photo pairs. Still have to geotag the images, but should have better time resolution in the gps track than in the image sets (with remote shutter, they trigger every 2nd pulse and the minimal interval is one second).

I've just done a little testing but others have produced nice results with this combination, e. g., Chris Fastie's work: http://publiclaboratory.org/notes/cfastie/6-3-2012/nrg-images-cover-crop-trials



    