---
title: "3D visualizations from aerial photos of a landfill (video)"

tagnames: 'vermont, kite-aerial-photography, landfill, kap, sfm, structure-from-motion, saturnv, skyshield, recap-360, autodesk, bristol-vt'
author: cfastie
path: /notes/cfastie/10-23-2016/3d-visualizations-from-aerial-photos-of-a-landfill-video.md
nid: 13640
uid: 554
cids: 15715,15724,15731
---

![](https://publiclab.org/public/system/images/photos/000/018/546/original/gravelpit.JPG)

# 3D visualizations from aerial photos of a landfill (video)

by [cfastie](/profile/cfastie) | October 23, 2016 00:36

October 23, 2016 00:36 | Tags: [vermont](/tag/vermont), [kite-aerial-photography](/tag/kite-aerial-photography), [landfill](/tag/landfill), [kap](/tag/kap), [sfm](/tag/sfm), [structure-from-motion](/tag/structure-from-motion), [saturnv](/tag/saturnv), [skyshield](/tag/skyshield), [recap-360](/tag/recap-360), [autodesk](/tag/autodesk), [bristol-vt](/tag/bristol-vt)

----

*Above: A 3D model of the landfill at Bristol, Vermont created from aerial photos in ReCap 360, an online structure-from-motion service. The gravel quarry in front of and to the left of the landfill has been excavated to a level which appears to be beneath the level of the garbage in the landfill.*

Stitching aerial photos from a kite flight over the landfill in Bristol, Vermont has produced an [orthophoto of the landfill](https://publiclab.org/notes/cfastie/10-08-2016/aerial-mapping-a-reclaimed-landfill) and an [immersive spherical panorama](https://publiclab.org/notes/cfastie/10-09-2016/360-views-of-the-bristol-landfill) of the landfill and its surroundings. Below is a video describing the creation of 3D models of the landfill. 

[![Ball7849_50_2k.jpg](https://publiclab.org/system/images/photos/000/018/547/medium/Ball7849_50_2k.jpg)](https://publiclab.org/system/images/photos/000/018/547/original/Ball7849_50_2k.jpg)  
*Above: A kite photo taken over the landfill showing the balloon as it is being landed at the edge of the high school playing fields south of the landfill.*

Below the embedded video is the text of the narration of the video. The 3D visualization from Autodesk ReCap 360 can be manipulated in a 3D viewer here: http://recap.autodesk.com/gallery/project/654/bristol-landfill

<iframe width="853" height="480" src="https://www.youtube.com/embed/doWTUuwvKOg?rel=0" frameborder="0" allowfullscreen></iframe>

###Video narration

Sara Wylie led a Public Lab balloon mapping workshop on October 7, 2016 at the recently closed and capped municipal landfill at Bristol Vermont. I snuck away from the ballooning and flew a Saturn V Rig under a Fled kite. 

The Saturn V Rig pans and tilts the camera, and every 90 seconds takes 25 photos covering most of the viewsphere. 

I walked the kite around the landfill for 50 minutes and captured 1000 photos. A few dozen of the vertical, or nadir, photos were stitched together in Microsoft ICE. 

I kept repeating the stitching with fewer and fewer photos until there were no glaring stitching artifacts. ICE allows you to display the scene with different projections, but these don’t make much difference with a simple panorama like this. I had ICE export a flat jpeg image of the final panorama.

An easy way to visualize this scene in three dimensions is to add the flat image to Google Earth as an image overlay. You can scale and rotate the image to align it with the base imagery, and you can also wrap the image over the terrain model in Google Earth. The terrain model for this area is derived from satellite LIDAR data, not the old USGS DEM. Unfortunately, the LIDAR data predate the final capping of the landfill, so it’s not a perfect visualization of the topography here. But it is quick and free and might be all that’s needed for your project. The tan colored areas are where the new cap eroded away and was recently repaired and reseeded.

Another way to visualize the landfill in 3D is to stitch the aerial photos in Autodesk’s ReCap 360 online. This time I submitted not only nadir photos but some of the lowest angle oblique photos taken by the Saturn V Rig. ReCap 360 used all 55 photos I gave it to make a 3D model of the scene. The photo files did not have GPS data in them, so the only data used were the photos themselves, and probably the focal length information for the lens.

This online structure-from-motion service produced a mesh with 2.7 million vertices and 5.5 million faces. In addition, it knows how to paint this mesh with the aerial photos. ReCap 360 is the best online service I have tried, and it is free, although certain enhancements are not free. Your model lives online, and you can share a link so others can manipulate it in a 3D viewer, but it can’t be embedded in another web page.

The same mesh made by ReCap 360 can be opened in the free program MeshLab, which seems to have a slightly crisper display of the surface. The little grooves in the surface of the landfill are where vehicles or people moved through the three-foot-tall grass, so that gives you an idea of the detail possible where lots of overlapping photos contribute to the model. I think it’s also possible to do some quantitative analysis, like volume calculations, in MeshLab, but I haven’t tried that.

Another Autodesk program that can accept the output of ReCap 360 is ReCap 360 Pro, a desktop program which is not free. Instead of manipulating the mesh, ReCap 360 Pro constructs the model from voxels, or 3D pixels. This raster-based approach requires less computation, and ReCap 360 Pro allows you to fly around the model. You can see the model decompose into voxels when you get close to the surface. It’s not clear what else ReCap 360 Pro can do, but just being able to fly around might be enough.  

One thing you notice as you fly around is that the detail of the model degrades as you approach the outer edges where fewer photos overlapped and contributed to the mesh, and where the ground surface was always far from the camera.

Another Autodesk program, ReMake, can apparently do volume calculations and other analyses, but I haven’t tried that yet.

###Fade to black



