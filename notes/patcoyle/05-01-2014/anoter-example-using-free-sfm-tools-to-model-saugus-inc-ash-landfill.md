---
title: "Another example: using free SFM tools to model Saugus Inc. Ash Landfill"

tagnames: 'kite-mapping, boston, saugus, landfill, sfm, structure-from-motion, waste, basurama, response:9977, northeast, volume, midwest, response:10159'
author: patcoyle
path: /notes/patcoyle/05-01-2014/anoter-example-using-free-sfm-tools-to-model-saugus-inc-ash-landfill.md
nid: 10390
uid: 77
cids: 8949,10429
---

![](https://publiclab.org/public/system/images/photos/000/003/961/original/Sagus_MA_model_views00.png)

# Another example: using free SFM tools to model Saugus Inc. Ash Landfill

by [patcoyle](/profile/patcoyle) | May 01, 2014 22:17

May 01, 2014 22:17 | Tags: [kite-mapping](/tag/kite-mapping), [boston](/tag/boston), [saugus](/tag/saugus), [landfill](/tag/landfill), [sfm](/tag/sfm), [structure-from-motion](/tag/structure-from-motion), [waste](/tag/waste), [basurama](/tag/basurama), [response:9977](/tag/response:9977), [northeast](/tag/northeast), [volume](/tag/volume), [midwest](/tag/midwest), [response:10159](/tag/response:10159)

----

###What I want to do
Continue to explore use of  free Surface From Motion (SFM) tools for autostitching aerial images, making scaled measurements and area and volume calculations. It builds on [initial observations](http://publiclab.org/notes/patcoyle/03-16-2014/initial-observations-free-sfm-tools-for-scaled-measurements-and-volume-calculations) and [followup observations](http://publiclab.org/notes/patcoyle/03-27-2014/example-using-free-sfm-tools-for-calculation-of-volume-of-earth-mound-on-construction-site), [more followup](http://publiclab.org/notes/patcoyle/04-07-2014/using-free-sfm-tools-for-automatic-volume-calculation), and came up in context of a recent note, [Estimating Volume and Weight of Petroleum Waste Piles in Southeast Chicago.](http://publiclab.org/notes/Holden/03-11-2014/estimating-volume-and-weight-of-petroleum-waste-piles-in-southeast-chicago)

Public Lab and others have been aerial photomapping a landfill where the ashes of Cambridge waste are deposited In what seems to be an old quarry: the Landfill Wheelabrator Saugus Inc. Ash Landfill. Cambridge’s Trash is burnt in the waste incinerator plant beside it. Multiple mapping sessions have been done over a few years. Photos used for this model are from a set used to make [this map](https://mapknitter.org/map/view/saugus-ash-landfill) on Mapknitter: 

<iframe style="border:none;" width="500" height="375" src="https://archive.publiclab.org/leaflet/?tms=https://mapknitter.org/tms/saugus-ash-landfill/&lat=42.4394102246&lon=-70.9854098544"></iframe>

In May 2014, the site in Googlemaps shows as: 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3606934523486!2d-70.98818869999864!3d42.43909702876155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI2JzIwLjgiTiA3MMKwNTknMTcuNSJX!5e1!3m2!1sen!2sus!4v1398982102587" width="600" height="450" frameborder="0" style="border:0"></iframe>


###My attempt and results

Jeff Warren shared the directory of images used to make the map (27 images were used in the map). I selected additional images for a set of 70 and uploaded them to  [Autodesk's 123DCatch web tool](http://www.123dapp.com/catch) make a 3D model (70 images is max number allowed).

<iframe id='embed3DViewer'  src='https://www.123dapp.com/fullpreview/embedViewer?assetId=2348547&size=medium' scrolling='no' style='border:none; width: 495px; height: 555px'> </iframe>

I downloaded the model and used [MeshLab](http://meshlab.sourceforge.net/) to view the model.  I also used [Meshmixer ](http://www.meshmixer.com/help/index.html)to examine the model. Next steps will be to scale the model and select regions to make measurements if that appears useful. I posted the model and asked Jeff whether there was as steep an edge as appears at the edge of the black material with equipment at lower level, or is this a processing glitch. Several people reported issues viewing the web-based model and Jeff suggested taking a few screenshots of the model and sharing them, especially the steep edge I’d mentioned.

Images from the model appear below:

Meshmixer screenshots: orientation different from Meshlab, operator in training ...


[![meshmixer_model1.jpg](https://i.publiclab.org/system/images/photos/000/003/963/medium/meshmixer_model1.jpg)](https://i.publiclab.org/system/images/photos/000/003/963/original/meshmixer_model1.jpg)

Steep section shows:

[![meshmixer_model3.jpg](https://i.publiclab.org/system/images/photos/000/003/965/medium/meshmixer_model3.jpg)](https://i.publiclab.org/system/images/photos/000/003/965/original/meshmixer_model3.jpg)

Meshlab view of steep feature:

[![snapshot11.png](https://i.publiclab.org/system/images/photos/000/003/967/medium/snapshot11.png)](https://i.publiclab.org/system/images/photos/000/003/967/original/snapshot11.png)


[![snapshot12.png](https://i.publiclab.org/system/images/photos/000/003/968/medium/snapshot12.png)](https://i.publiclab.org/system/images/photos/000/003/968/original/snapshot12.png)


[![snapshot13.png](https://i.publiclab.org/system/images/photos/000/003/969/medium/snapshot13.png)](https://i.publiclab.org/system/images/photos/000/003/969/original/snapshot13.png)






###Questions and next steps

I'd like to continue to explore Meshlab and Meshmixer's model manipulation and automatic volume measurement capabilities. These and earlier initial results from an actual SFM model from aerial mapping of mounds are encouraging. Others are likely more familiar with using the capabilities of Blender and other tools. It is also worth noting there are a number of other mesh editing and viewing packages that are free or open source.

###Why I'm interested

I'd like to continue to explore Meshlab and Meshmixer's automatic volume measurement capabilities. The initial results from an actual SFM model from aerial mapping of mounds are encouraging. Others are likely more familiar with using the capabilities of Blender and other tools. It is also worth noting there are a number of other mesh editing and viewing packages that are free or open source.