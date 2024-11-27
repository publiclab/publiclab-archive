---
nid: 11893
title: OpenAerialMap, Open Imagery Network & Public Lab's MapKnitter
path: public/static/notes/warren/05-29-2015/openaerialmap-open-imagery-network-public-lab-s-mapknitter.md
uid: 1
tagnames: 3d,mapknitter,bundleadjustment,gps,software,gsoc,leaflet,metadata,autostitch,auto-placement,opendronemap,openaerialmap,leaflet.distortableimage
---

# OpenAerialMap, Open Imagery Network & Public Lab's MapKnitter

The [OpenAerialMap Beta](http://beta.openaerialmap.org/) was just [launched yesterday](https://developmentseed.org/blog/2015/05/27/introducing-openaerialmap/) by DevelopmentSeed - a reboot of the old OAM from ~2008 (if I recall?). It's a global index of aerial imagery, depending on a simple standard for metadata which we now plan to support in Public Lab's MapKnitter:

https://github.com/publiclab/mapknitter/issues/178

Many of the maps in it have ~50cm/px resolution, whereas many MapKnitter maps (made from balloon, kite, and drone imagery) have 5-15cm/px resolution. And there are a lot of MapKnitter maps -- 1578 as of today. 

###Georectification metadata

I have another suggestion, though -- what if we modularized by providing georeferencing in aerial image metadata? (I know, isn't this what a GeoTiff is? :-P) There are a few reasons that'd be a good idea for individual images. First, MapKnitter approaches the problem from the other end of things when compared to auto-stitching. Instead of batch-processing huge numbers of images (which can take hours), Public Lab mappers fly balloons or kites much higher than drones typically can -- 1000-4000 feet, and capture fewer, large images. A good image from up high can cover a quarter mile! But in any case, many people just need a single good shot, like [this one by Pablo Rey in Madrid](https://mapknitter.org/maps/puerta-del-sol-madrid-17-mayo-2015): 

<iframe src="https://mapknitter.org/embed/puerta-del-sol-madrid-17-mayo-2015" style="border:none;width:100%;height:300px;"></iframe>

This means that referencing is pretty easy to do by hand - just upload the image, scale and rotate it into place. Or if your camera/smartphone has a GPS, [MapKnitter will auto-place the image for you](https://groups.google.com/forum/#!topic/plots-dev/1MqyjEQEpYc), using **GPS, GPS altitude, and compass heading**.

###Skipping re-rasterization

The other side of this is that due to our recently launched Leaflet plugin [Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage/) (read a *great* in-depth discussion in @justinmanley's [The Magic Behind MapKnitter](http://publiclab.org/notes/justinmanley/05-21-2015/the-magic-behind-mapknitter-leaflet-distortableimage)), MapKnitter 2.0 displays georectified images **natively distorted with CSS3**, in the browser. Go ahead -- right click the image above, and open it in a new tab. **It's not a tile layer.** 

This means that unless you want to print a map out, there's no longer a reason to run GDAL (which powers MapKnitter's exporting function) at all -- hundreds of images are simply rotated, scaled, distorted, and displayed in real-time. For huge batches of images, we'd prefer to simply store each image once, which also means that you don't have to lose data where images overlap -- say, if one has better exposure, but the other has better sharpness. Most of all, it means MapKnitter's exporting engine doesn't need to be fired up as often -- saving CPU and memory on our servers. For big maps like [this 48-image map by Chris Fastie](https://mapknitter.org/maps/lincoln-peak-vineyard), that makes a big difference:

<iframe src="https://mapknitter.org/embed/lincoln-peak-vineyard" style="border:none;width:100%;height:300px;"></iframe>

These aren't everyone's priorities -- they're distinct to our use case -- but there is a common thread. We've kept an eye on auto-stitching approaches such as what [OpenDroneMap](https://github.com/OpenDroneMap/OpenDroneMap) is finally making easier. But it's not an either-or situation. We feel that the ease (especially for non-programmers, or non-GIS folks) of simply placing an image on a map makes a huge difference for many folks. But a rough placement can make interest point matching much more efficient, and some automation (such as via GPS) can make manual stitching much more efficient. 

###Convergence

Let's converge by standardizing on the interchange format of the rectification data itself, so that images from MapKnitter can be used as an incoming dataset for OpenDroneMap, and eventually, we could use interest point matching to assist manual stitching -- perhaps by providing visual indications of possible matches, like semi-transparent "spiderwebs" connecting two nearby images. 

[![Screen_Shot_2015-05-29_at_11.05.26_AM.png](https://i.publiclab.org/system/images/photos/000/010/088/medium/Screen_Shot_2015-05-29_at_11.05.26_AM.png)](https://i.publiclab.org/system/images/photos/000/010/088/original/Screen_Shot_2015-05-29_at_11.05.26_AM.png)

Just to throw out one more wild idea here -- I believe the matrix distortion calculations we do for Leaflet.DistortableImage could be re-used in WebGL to (someday?) generate exportable full-resolution versions of maps, in the browser. If possible, that would make this type of mapmaking hugely scalable! 

Want to talk more? Come to the Public Lab Open Hour ("Behind the Code") this Monday the 1st at 1pm ET -- we're having an [online software development meetup](http://publiclab.org/openhour). 