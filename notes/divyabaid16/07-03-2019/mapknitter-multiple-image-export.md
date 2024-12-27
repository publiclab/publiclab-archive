---
title: "MapKnitter: Multiple image export"

tagnames: 'mapknitter, gsoc, export, soc, gsoc-2019, soc-2019, image'
author: divyabaid16
path: /notes/divyabaid16/07-03-2019/mapknitter-multiple-image-export.md
nid: 19969
uid: 578652

---

![](https://publiclab.org/public/system/images/photos/000/033/462/original/Selection_194.png)

# MapKnitter: Multiple image export

by [divyabaid16](../../../profile/divyabaid16) | July 03, 2019 12:35

July 03, 2019 12:35 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [export](../tag/export), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [image](../tag/image)

----

MapKnitter
is a map making open source tool. It is a unique tool which helps to
knit a map using a very simple smooth process with amazing user
experience. The user just enters the title of the map, the place or the
coordinates of the place. After the map is created, the user can upload
images and plot them, resize them and perform other functions with the
image.

Recently
I worked on the task of Multiple images export. It is a very good
function of MapKnitter that helps the user get all the images in jpg,
zip, and GeoTIFF format.

Previously, the image exporter of map knitter was as follows:  
All the images of the map were exported and then the user would download the entire zip which contains the Knitted images.  
Now, the user can select only the images he would like to export and just download them.

Now after some modifications which we've done, our functionality is improved as follows.  
If
in a map, there are a lot of images, and the user wishes to export only
a few of them, he can easily to that and the time to export also
reduces.

So for this, along with the guidance of my mentor, I implemented multiple image export.

The export function for all the images of the map was already present so I had to just modify it.

First,
I created a user interface that shows all the images placed on the grid
and the user can select any of the images he would like to export.
After selecting an image, a red border was created around it to show
that the image is selected and upon deselecting it, it comes to its
original state. I did this with the help of jQuery.

![image description](/i/33461.png "Selection_180.png")

After
completing this, when the export button is pressed, the Ajax call
associated with it records the id of the map and all the images ready
for the export. I stored all the images that have a red border just
after the Start Export button was clicked. So by this, I was sending an
array and retrieving the values in the export function of maps
controller.

The complete activity can be seen in [this](https://github.com/publiclab/mapknitter/pull/693) PR.

I would also be writing a blog on image reordering in the sidebar using drag and drop and by sorting using different parameters.