---
title: Prototype: filter map tiles in real-time in a browser with ImageSequencer (NDVI Landsat)
tagnames: near-infrared-camera, remote-sensing, ndvi, multispectral, mapknitter, infrared, image-processing, agriculture, nasa, mapping, infragram, gsoc, vegetation, landsat, gis, satellite-imagery, mapbox, javascript, activity:multispectral-imaging, activity:infragram, multispectral-imaging, activity:ndvi, soc, aren, gsoc-2018, soc-2018, image-sequencer, activity:image-sequencer, activity:gis, activity:aren
author: warren
path: /notes/warren/05-10-2018/prototype-filter-map-tiles-in-real-time-in-a-browser-with-imagesequencer-ndvi-landsat.md
nid: 16323
uid: 1

---

# Prototype: filter map tiles in real-time in a browser with ImageSequencer (NDVI Landsat)

by [warren](../profile/warren) May 10, 2018 16:25

May 10, 2018 16:25 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [remote-sensing](../tag/remote-sensing), [ndvi](../tag/ndvi), [multispectral](../tag/multispectral), [mapknitter](../tag/mapknitter), [infrared](../tag/infrared), [image-processing](../tag/image-processing), [agriculture](../tag/agriculture), [nasa](../tag/nasa), [mapping](../tag/mapping), [infragram](../tag/infragram), [gsoc](../tag/gsoc), [vegetation](../tag/vegetation), [landsat](../tag/landsat), [gis](../tag/gis), [satellite-imagery](../tag/satellite-imagery), [mapbox](../tag/mapbox), [javascript](../tag/javascript), [activity:multispectral-imaging](../tag/activity:multispectral-imaging), [activity:infragram](../tag/activity:infragram), [multispectral-imaging](../tag/multispectral-imaging), [activity:ndvi](../tag/activity:ndvi), [soc](../tag/soc), [aren](../tag/aren), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [image-sequencer](../tag/image-sequencer), [activity:image-sequencer](../tag/activity:image-sequencer), [activity:gis](../tag/activity:gis), [activity:aren](../tag/activity:aren)

I've been working with the new [Image Sequencer](/image-sequencer), a Public Lab project, to try see how it works as a "filter" for map tiles on another site. Working with Mapbox's [Landsat Live](https://www.mapbox.com/bites/00145/) site, which shows the most recent Landsat satellite images for anywhere on the earth, I created a [browser bookmarklet](/imagesequencerbookmarklet) which accepts an Image Sequencer "command string" and runs it on all the tiles currently shown.

This is a great use case for Image Sequencer, a project I've been working on with @ccpandhare and @tech4gt, which is supported in part by NASA's [AREN project](/aren) and by [Google Summer of Code](/gsoc).

When you click the bookmarklet, you're prompted for a command string:

![image description](https://publiclab.org/i/24877.png "Screen_Shot_2018-05-04_at_1.22.08_PM.png")

It's a little slow, but I ran the [NDVI](/ndvi) equation with the command `ndvi,colormap` (inappropriately, since the imagery shown is just RGB, not infrared, but just as a test) and you can see the results in the lead image and in this video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/4FLwW2jtuuU" frameborder="0" allowfullscreen=""></iframe>

Some caveats:

- it needs some tweaking to "detect" the right layer of tiles to apply to, or it'll apply to the labeling layers too
- it needs CORS permissions set on the tile server or JavaScript will be denied access to modify the images
- we haven't yet allowed setting options via the string syntax, but will [in this issue](https://github.com/publiclab/image-sequencer/issues/127) and that'll allow things like choosing different color maps
- we're working on doing the processing [on another thread here](https://github.com/publiclab/image-sequencer/issues/159)
- we could to run the tile processing sequentially because it'd look cool... boop boop boop boop! (the sound of each tile getting converted)

I'm reaching out to MapBox to see if they have infrared bands available, so we can do true NDVI! Any help appreciated!

  
### MapKnitter

  
This is the same kind of filtering we're now enabling in MapKnitter; update on that coming soon:

![image description](https://publiclab.org/system/images/photos/000/024/833/large/Screen_Shot_2018-05-07_at_12.16.38_PM.png)