---
title: Example: using free SFM tools for calculation of volume of earth mound on construction site 
tagnames: kap, sfm, structure-from-motion, measurement, response:9977, autostitch, 3dmodeling, volume, response:10159
author: patcoyle
path: /notes/patcoyle/03-27-2014/example-using-free-sfm-tools-for-calculation-of-volume-of-earth-mound-on-construction-site.md
nid: 10233
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/003/418/original/Knitter_ss_w_annotation.jpg)

# Example: using free SFM tools for calculation of volume of earth mound on construction site 

by [patcoyle](../profile/patcoyle) March 27, 2014 21:33

March 27, 2014 21:33 | Tags: [kap](../tag/kap), [sfm](../tag/sfm), [structure-from-motion](../tag/structure-from-motion), [measurement](../tag/measurement), [response:9977](../tag/response:9977), [autostitch](../tag/autostitch), [3dmodeling](../tag/3dmodeling), [volume](../tag/volume), [response:10159](../tag/response:10159)

----

<a href="https://i.publiclab.org/system/images/photos/000/003/426/original/KAP_const_near_BART_mesh_v2.xlsx"><i class="icon icon-file"></i> KAP_const_near_BART_mesh_v2.xlsx</a>

### What I want to do

Continue to explore free Surface From Motion (SFM) tools for autostitching aerial images, making scaled measurements and area and volume calculations. It builds on [initial observations](http://publiclab.org/notes/patcoyle/03-16-2014/initial-observations-free-sfm-tools-for-scaled-measurements-and-volume-calculations) and came up in context of a recent note, [Estimating Volume and Weight of Petroleum Waste Piles in Southeast Chicago](http://publiclab.org/notes/Holden/03-11-2014/estimating-volume-and-weight-of-petroleum-waste-piles-in-southeast-chicago).

### My attempt and results

I did a KAP session (Delta Levitation, SX260HS w CHDK intervalometer, juice bottle rig) near the Dublin-Pleasanton BART station to capture aerial images that included the mound of dirt annotated in the main image. I also took several ground-based images of the mound. [I stitched a few images in MapKnitter.](https://mapknitter.org/map/view/construction-near-bart-dublin-pleasanton-ca)

<iframe style="border:none;" width="500" height="375" src="https://archive.publiclaboratory.org/leaflet/?tms=https://mapknitter.org/tms/construction-near-bart-dublin-pleasanton-ca/&lat=37.7053601391&lon=-121.8954183981"></iframe>

I used [Autodesk's 123DCatch web tool](http://www.123dapp.com/catch) make a 3D model from 70 images (max number allowed). 

<iframe id='embed3DViewer'  src='https://www.123dapp.com/fullpreview/embedViewer?assetId=2231720&size=medium' scrolling='no' style='border:none; width: 495px; height: 555px'> </iframe>

I downloaded model and used [MeshLab](http://meshlab.sourceforge.net/) to scale and make measurements to estimate the volume of the mound manually. I have not solved the problem of "closing the mesh" to be able to use the automatic volume measurement capability within MeshLab.

After applying scaling factor have reasonable agreement between the known distance from Google Earth (GE) and the model. The following measurements were used to calculate a simplified estimate of the volume of the mound. See images from GE the model for scaled measurements used in EXCEL sheet (available above) and summarized below:	

length	288.0; 
bottom width 	53.0; 
top width	20.1;
slope length	25.0
	
For simplicity, treat as a  prism, where height  is given by solving right triangle with base:	
 ~(53/2) -(20/2) = 16.4
slope:	25.0
so height is: 	18.8
So Volume in cu ft  is ~197,699 or 7,322 cu yards

Measured distance from Google Earth

[![GE_measure_455_pt_26_feet.jpg](https://i.publiclab.org/system/images/photos/000/003/419/medium/GE_measure_455_pt_26_feet.jpg)](https://i.publiclab.org/system/images/photos/000/003/419/original/GE_measure_455_pt_26_feet.jpg)

Same measured feature in MeshLab (to be able to scale the model)

[![meshlab_measure_26_pt_1397.jpg](https://i.publiclab.org/system/images/photos/000/003/425/medium/meshlab_measure_26_pt_1397.jpg)](https://i.publiclab.org/system/images/photos/000/003/425/original/meshlab_measure_26_pt_1397.jpg)


Length of mound from scaled model (done on underside of model, where easier to see edges)

[![meshlab_measure_lgth_288_pt_032_.jpg](https://i.publiclab.org/system/images/photos/000/003/420/medium/meshlab_measure_lgth_288_pt_032_.jpg)](https://i.publiclab.org/system/images/photos/000/003/420/original/meshlab_measure_lgth_288_pt_032_.jpg)

Width of mound from scaled model ((done on underside of model, where easier to see edges)

[![meshlab_measure_wdth_52_pt_986_.jpg](https://i.publiclab.org/system/images/photos/000/003/424/medium/meshlab_measure_wdth_52_pt_986_.jpg)](https://i.publiclab.org/system/images/photos/000/003/424/original/meshlab_measure_wdth_52_pt_986_.jpg)


Width of top flat part of mound (done on top side of model)

[![meshlab_measure_top_wdth_20_pt_089_.jpg](https://i.publiclab.org/system/images/photos/000/003/421/medium/meshlab_measure_top_wdth_20_pt_089_.jpg)](https://i.publiclab.org/system/images/photos/000/003/421/original/meshlab_measure_top_wdth_20_pt_089_.jpg)

Length sloped side from ground up to top flat part of mound (done on top side of model)

[![meshlab_measure_slp_24_pt_969.jpg](https://i.publiclab.org/system/images/photos/000/003/422/medium/meshlab_measure_slp_24_pt_969.jpg)](https://i.publiclab.org/system/images/photos/000/003/422/original/meshlab_measure_slp_24_pt_969.jpg)



###Questions and next steps
While I've use the scaled measurements from the model to do manual area and volume calculations offline, I'd like to continue to explore Meshlab's automatic volume measurement capabilities. In prior observations noted above, I was able to prepare an example closed base cube shell model which used this feature to get meaningful results. However, I have not addressed an actual SFM model like this one from aerial mapping piles or mounds. Perhaps others are already familiar with doing that.

It is also worth noting there are a number of other mesh editing and viewing packages that are free or open source.
###Why I'm interested
The capability to use the free and open-sourced cloud-based tools to autostitch images into maps and use their 3D models for area and volume calculations is powerful.