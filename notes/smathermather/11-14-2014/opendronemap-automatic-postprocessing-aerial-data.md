---
nid: 11342
title: OpenDroneMap -- Automatic postprocessing aerial data
path: public/static/notes/smathermather/11-14-2014/opendronemap-automatic-postprocessing-aerial-data.md
uid: 431062
tagnames: new-york-city,balloon-mapping,gowanus,kite-aerial-photography,drones,aerial-photography,glam,aerial-mapping,aerial-photos,northeast,uas,opendronemap,first-time-poster
---

# OpenDroneMap -- Automatic postprocessing aerial data

###What I want to do
OpenDroneMap ([http://opendronemap.github.io/odm/](http://opendronemap.github.io/odm/)) is intended to be a tool to postprocess small Unmanned Aerial Vehicle (sUAS), balloon, kite, and street view data to geographic data.

###My attempt and results
The toolchain will currently produce a point cloud (in relative, not geographic space) using computer vision stereo matching between images (Structure from Motion and Multi-Stereo View techniques).

e.g.: One of the input images

[![image.PNG](https://i.publiclab.org/system/images/photos/000/007/845/medium/image.PNG)](https://i.publiclab.org/system/images/photos/000/007/845/original/image.PNG)

Output point cloud:

[![image_points.png](https://i.publiclab.org/system/images/photos/000/007/846/medium/image_points.png)](https://i.publiclab.org/system/images/photos/000/007/846/original/image_points.png)

[![points.PNG](https://i.publiclab.org/system/images/photos/000/007/847/medium/points.PNG)](https://i.publiclab.org/system/images/photos/000/007/847/original/points.PNG)

###Questions and next steps
Next steps to have the tool chain generate a surface model (mesh), and texture that model, as well as produce an orthophoto.

[![balloon.PNG](https://i.publiclab.org/system/images/photos/000/007/848/medium/balloon.PNG)](https://i.publiclab.org/system/images/photos/000/007/848/original/balloon.PNG)

###Why I'm interested
It is really easy, whether with balloon, kite, or drone to produce a huge number of images to process, and there is no current way to leverage the implicit information in the photos to rapidly produce a digital surface model and orthophoto. OpenDroneMap is intended to close that gap.

(the post-processed imagery above attribution to GLAM ( [Gowanus Low Altitude Mapping project](http://publiclab.org/wiki/glam) )  and @publiclab