---
title: "3D Tundra"

tagnames: 'kite-mapping, alaska, tundra, sfm, structure-from-motion, treeline, 3d-models, response:8866, akrange'
author: cfastie
path: /notes/cfastie/07-15-2013/3d-tundra.md
nid: 8895
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/805/original/MA53D.jpg)

# 3D Tundra

by [cfastie](../../../profile/cfastie) | July 15, 2013 21:11

July 15, 2013 21:11 | Tags: [kite-mapping](../tag/kite-mapping), [alaska](../tag/alaska), [tundra](../tag/tundra), [sfm](../tag/sfm), [structure-from-motion](../tag/structure-from-motion), [treeline](../tag/treeline), [3d-models](../tag/3d-models), [response:8866](../tag/response:8866), [akrange](../tag/akrange)

----

Brenden has made a [couple of tutorial videos]( http://publiclab.org/notes/geobduffy/07-13-2013/aerial-imagery-post-processing-tutorials-3d-point-clouds-orthomosaics-and-3d-models) about using free (for non-commercial use) software which creates 3D models of surfaces from multiple photographs of the surface. This process, unfortunately known as structure from motion, is a powerful way to visualize landscapes from collections of many aerial photographs.  We have tried [online tools to accomplish this]( http://publiclab.org/notes/cfastie/5-31-2012/3d-model-meshlab), but these have relatively low resolution. There are also expensive commercial programs (Agisoft Photoscan) which I have not tried. So it was good to learn about Brenden’s workflow.

I had to use four different programs to produce the model in the video below:

 1.  [VisualSFM]( http://homes.cs.washington.edu/~ccwu/vsfm/): Matches the multiple photos and makes a 3D point cloud.
 2.  [PMVS/CMVS]( http://www.di.ens.fr/cmvs/): Integrated into VisualSFM to prepare its result for the next program.
 3.  [CMPMVS]( http://ptak.felk.cvut.cz/sfmservice/websfm.pl?menu=cmpmvs): Command line tool to make the high resolution surface model and paint it with the photos.
 4.  [MeshLab]( http://meshlab.sourceforge.net/):  Display, scale, edit, and annotate the result.

The model I made is of a single 50x50m vegetation study plot which was [photographed in the rain]( http://publiclab.org/notes/cfastie/07-06-2013/showerkap-ii). The only input was 76 10MP kite photos, there was no GPS or orientation data involved. The processing time for the first three programs above was about 15 hours on a Windows 64 desktop with 3.1 GHz, quad core, 8 GB RAM, and 2 GB CUDA graphics card. The project created 4000 files totaling 40 GB. I probably won’t do this for all 18 of the study plots.

<iframe width="853" height="480" src="//www.youtube.com/embed/03LdB7jOyaQ?rel=0" frameborder="0" allowfullscreen></iframe>

CMPMVS produced several videos (below) as part of its processing (even though I tried to ask it not to). These are sequential views of versions of the 3D model from each camera position. They are not very useful videos, but with kite photos, they do make you feel like you are seeing what the kite saw as the photos were taken. The textured model used in one of these videos has a lot more detail than the model I opened in MeshLab and used for the video above. So I'm not sure I found the proper output among the 4000 files.

<iframe width="853" height="480" src="//www.youtube.com/embed/PuUlnsg4aK8?rel=0" frameborder="0" allowfullscreen></iframe>

Brenden’s first tutorial points to his zip file of everything required to install the first two programs above on a Windows 64 computer. For the second tutorial, two other programs must be installed. CMPMVS requires C++ and DirectX libraries (see readme files for links).




