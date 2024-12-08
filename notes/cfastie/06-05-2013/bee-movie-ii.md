---
title: Bee Movie II
tagnames: near-infrared-camera, nrg, ndvi, vermont, infrared, imagej, infragram, nbg, infrablue
author: cfastie
path: /notes/cfastie/06-05-2013/bee-movie-ii.md
nid: 8073
uid: 554

---

# Bee Movie II

by [cfastie](../profile/cfastie) June 05, 2013 13:08

June 05, 2013 13:08 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [infrared](../tag/infrared), [imagej](../tag/imagej), [infragram](../tag/infragram), [nbg](../tag/nbg), [infrablue](../tag/infrablue)

<em>Image above: A bumble bee on a chive flower in a frame from an infrablue video. The flowers are actually blue, but the bee's colors are true to life.</em>

It's been five days since Jeff suggested using an infrablue Powershot to take videos, and the hive has been busy.  Don and Craig have added video capability to the [infrapix processor](https://github.com/Pioneer-Valley-Open-Science/infrapix) they are developing. Ned has added video processing to his [ImageJ plugin](https://github.com/nedhorning/PhotoMonitoringPlugin). And I have gotten one of them to work!

I captured some more bee video with the infrablue A810 and made a false color infrared (NBG) version in Adobe Premiere. I added a step to the [method here](http://publiclab.org/notes/cfastie/06-01-2013/bee-movie) by doing an "auto levels" (0.05%) first. None of the infrared processors being developed make this NBG version yet.

The hardest part about using Ned's ImageJ plugin to make an NDVI video is getting an infrablue video into ImageJ. No video I made with Premiere would import into Fiji. So I scrubbed the video through VirtualDub and then it worked. I just opened an AVI in VirtualDub and save as AVI.

Once in Fiji, the video becomes a stack of individual frames, but that all happens in the background. I ran the "Single image NDVI from displayed image" option in Ned's plugin and chose a range of -1 to +1 and to stretch the bands (saturation=2). The stack is processed quickly. Then I saved as AVI, and it took about 10 seconds for a 30 second video clip. I put that NDVI clip back in Premiere to add titles and replace the audio and add the NBG version.

The NDVI is still a little messy in that it has anomolously high values (lots of red) for shady places. Got to look into that.
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/iGAyotd0Ifc?rel=0" frameborder="0" allowfullscreen></iframe>