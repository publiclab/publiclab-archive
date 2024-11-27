---
nid: 10279
title: Using free SFM tools for automatic volume calculation
path: public/static/notes/patcoyle/04-07-2014/using-free-sfm-tools-for-automatic-volume-calculation.md
uid: 77
tagnames: 3d,kap,sfm,structure-from-motion,measurement,response:9977,autostitch,3dmodeling,volume,response:10159
---

# Using free SFM tools for automatic volume calculation

###What I want to do
Describe a workflow using free Surface From Motion (SFM) and 3D model mesh tools for automatic calculation of volume of features based on aerial and ground photos. 
###My attempt and results
This workflow example used other free 3D model mesh tools ([Meshmixer](http://www.meshmixer.com/ ) and [Blender](http://www.blender.org/) ) and [Meshlab's ](http://sourceforge.net/projects/meshlab/)automatic volume measurement capabilities. Volume is automatically calculated for an earth mound feature in a SFM model from aerial mapping piles augmented by ground-based photos. 

I used [Autodesk's 123DCatch web tool](http://www.123dapp.com/catch) make a 3D model from 70 images (max number allowed). 
<iframe id='embed3DViewer'  src='http://www.123dapp.com/fullpreview/embedViewer?assetId=2231720&size=medium' scrolling='no' style='border:none; width: 495px; height: 555px'> </iframe>
This is only an example workflow and is surely not the most elegant approach.

In [prior observations](http://publiclab.org/notes/patcoyle/03-27-2014/example-using-free-sfm-tools-for-calculation-of-volume-of-earth-mound-on-construction-site) I described the [motivation](http://publiclab.org/notes/Holden/03-11-2014/estimating-volume-and-weight-of-petroleum-waste-piles-in-southeast-chicago) and used the scaled measurements from the model to do manual area and volume calculations offline. I was also able to prepare an example closed base cube shell model which used Meshlab's automatic volume measurement capabilities feature to get meaningful results. 

Based on suggestions from Matteo Dellepiane, author of [Mr P.’s YouTube tutorials](https://www.youtube.com/user/MrPMeshLabTutorials) for MeshLab, and comments from Mathew Lippincott and others, I found one  way to obtain a closed surface, in order to use the automatic volume calculation in MeshLab. While both suggested using Blender, I primarily relied on the Meshmixer tool for the ability to select and “crop” to a subsection of the model and automatically “close” it. I also used Blender capabilities to  “close” the bottom of the earth mound feature. However, I struggled with the powerful and elegant toolset and interface for Blender and resorted to the Meshmixer tool to select and “crop” to a subsection of the model. (Meshmixer is another tool from Autodesk and one common use is for "fixing" models for 3D printing - where "closing" the base is a common requirement to make the make the model  "watertight"  for 3D printing). Both of these closed surfaces gave comparable volumes from MeshLab. The Blender model had been simplified to have fewer edges to select, so some variation is understandable. 

Screenshots illustrate steps in the Meshmixer process:

Entire SFM model with Blender filled base of mound showing need to be "fixed", make it watertight for 3D printing (or volume calculation):

[![mesmixer_ss_of_Blender_filled_w_holes.jpg](https://i.publiclab.org/system/images/photos/000/003/549/medium/mesmixer_ss_of_Blender_filled_w_holes.jpg)](https://i.publiclab.org/system/images/photos/000/003/549/original/mesmixer_ss_of_Blender_filled_w_holes.jpg)


Selected subsection of model with mound:

[![mesmixer_ss_of_Blender_filled_w_holes_selected.jpg](https://i.publiclab.org/system/images/photos/000/003/550/medium/mesmixer_ss_of_Blender_filled_w_holes_selected.jpg)](https://i.publiclab.org/system/images/photos/000/003/550/original/mesmixer_ss_of_Blender_filled_w_holes_selected.jpg)


Inverted selection of model with mound:


[![mesmixer_ss_of_Blender_filled_w_holes_inverted_selected.jpg](https://i.publiclab.org/system/images/photos/000/003/551/medium/mesmixer_ss_of_Blender_filled_w_holes_inverted_selected.jpg)](https://i.publiclab.org/system/images/photos/000/003/551/original/mesmixer_ss_of_Blender_filled_w_holes_inverted_selected.jpg)


"Cropped" selection of model with mound:


[![mesmixer_ss_of_Blender_filled_w_holes_cropped.jpg](https://i.publiclab.org/system/images/photos/000/003/552/medium/mesmixer_ss_of_Blender_filled_w_holes_cropped.jpg)](https://i.publiclab.org/system/images/photos/000/003/552/original/mesmixer_ss_of_Blender_filled_w_holes_cropped.jpg)




Selected subsection of model with mound showing after "fix all":

[![mesmixer_ss_of_Blender_filled_w_needs_fixed.jpg](https://i.publiclab.org/system/images/photos/000/003/548/medium/mesmixer_ss_of_Blender_filled_w_needs_fixed.jpg)](https://i.publiclab.org/system/images/photos/000/003/548/original/mesmixer_ss_of_Blender_filled_w_needs_fixed.jpg)

Auto calculated volumes (see EXCEL file for details and notes):

<a href="https://i.publiclab.org/system/images/photos/000/003/571/original/KAP_const_near_BART_mesh_v2.xlsx"><i class="icon icon-file"></i> KAP_const_near_BART_mesh_v2.xlsx</a>



For selected mound-only solid from Meshmixer: MeshLab calculated volume: 73,666	cu ft vs hand estimated 197,699; only 37.3% - a Big difference, need to check prior results.

[![ss_mound_only_top.jpg](https://i.publiclab.org/system/images/photos/000/003/546/medium/ss_mound_only_top.jpg)](https://i.publiclab.org/system/images/photos/000/003/546/original/ss_mound_only_top.jpg)

[![ss_mound_only_bottom.jpg](https://i.publiclab.org/system/images/photos/000/003/547/medium/ss_mound_only_bottom.jpg)](https://i.publiclab.org/system/images/photos/000/003/547/original/ss_mound_only_bottom.jpg)

For Blender smoothed, filled, then cropped in Meshmixer: MeshLab calculated volume: 83,869 cu ft vs hand estimated 197,699; only 42.4%- again a Big difference, need to check prior results.

However the MeshLab calculated volumes are close and given the Blender model had been simplified to have fewer edges to select, some variation is understandable. 


###Questions and next steps
I'd like to continue to explore Meshlab's automatic volume measurement capabilities. These initial results from an actual SFM model from aerial mapping of mounds are encouraging. Others are likely more familiar with using the capabilities of Blender and other tools. It is also worth noting there are a number of other mesh editing and viewing packages that are free or open source.

###Why I'm interested
The capability to use the free and open-sourced cloud-based tools to autostitch images into maps and use their 3D models for area and volume calculations is powerful.