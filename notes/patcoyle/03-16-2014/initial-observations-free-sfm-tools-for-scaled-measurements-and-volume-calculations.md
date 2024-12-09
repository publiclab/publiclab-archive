---
title: initial observations (revised): free SFM tools for scaled measurements and volume calculations
tagnames: sfm, structure-from-motion, measurement, autostitch, 3dmodeling
author: patcoyle
path: /notes/patcoyle/03-16-2014/initial-observations-free-sfm-tools-for-scaled-measurements-and-volume-calculations.md
nid: 10188
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/003/269/original/image_from_123D_model_on_site.jpg)

# initial observations (revised): free SFM tools for scaled measurements and volume calculations

by [patcoyle](../profile/patcoyle) March 16, 2014 00:04

March 16, 2014 00:04 | Tags: [sfm](../tag/sfm), [structure-from-motion](../tag/structure-from-motion), [measurement](../tag/measurement), [autostitch](../tag/autostitch), [3dmodeling](../tag/3dmodeling)

----

###What I want to do

(See revisions to incorporate automeasurements from meshlab and issues.) Continue to explore free Surface From Motion (SFM) tools for autostitching aerial images, making scaled measurements and area and volume calculations. In recent discussions, Jeff and I recalled [Nathan Craig's note](http://publiclab.org/notes/ncraig/11-25-2011/photographs-scaled-3d-model-using-free-software ) about using free Surface From Motion (SFM) tools for scaled measurements. It came up in context of a recent note, [Estimating Volume and Weight of Petroleum Waste Piles in Southeast Chicago](http://publiclab.org/notes/Holden/03-11-2014/estimating-volume-and-weight-of-petroleum-waste-piles-in-southeast-chicago)

I commented on the note, that they might also consider these tools for this application to measure volume. In addition to aerial photos,using the same camera to take a set of ground-based photos of the mound of interest would help with the SFM modeling. These tools also offer the ability to capture a orthomosaic, "map view" either as a specific export or as an image of that view.  I referred to [recent discussions](http://publiclab.org/notes/mathew/02-25-2014/3d-data-from-image-sets-autostitching) on some of these tools.

In Nathan Craig's note, the first part of the video deals with a free tool, Hypr3D, that has changed, to Cubify. Since the change, I've not had luck using it. [However earlier examples were promising.](http://publiclab.org/notes/warren/2-10-2012/thatchmore-farms-hypr3d-model) 
At 3:45 into the video Nathan Craig shows downloading and working with a model in [Meshlab](http://meshlab.sourceforge.net/) and demonstrates ability to scale and make measurements. With this one should be able to make volumetric measurements. I commented that I'd see what I could do with the Hoover dam example.

However, [Autodesk](http://www.123dapp.com/) offers free desktop and web-based tools that allow one to make and download 3D models. 

###My attempt and results

Results from ~80 images, using the Autodesk web tool:

<iframe id='embed3DViewer'  src='http://www.123dapp.com/fullpreview/embedViewer?assetId=2184862&size=medium' scrolling='no' style='border:none; width: 495px; height: 555px'> </iframe>

I downloaded the model unzipped it and opened the mesh.obj file in Meshlab. [There are a number of tutorials on use of Meshlab.](https://www.youtube.com/user/MrPMeshLabTutorials) After eliminating the areas of the model behind the dam, I was able to use a known distance measured in Google Earth with a corresponding model distance to define a scaling factor and rescale the model. Views from the scaled model with the scaled distances (too small to see on screen, but in light numbers on the images at the end of the colored lines) follow:

[![snapshot1_w_400_ft00.png](https://i.publiclab.org/system/images/photos/000/003/270/medium/snapshot1_w_400_ft00.png)](https://i.publiclab.org/system/images/photos/000/003/270/original/snapshot1_w_400_ft00.png)

[![snapshot2_w_554_ft01.png](https://i.publiclab.org/system/images/photos/000/003/271/medium/snapshot2_w_554_ft01.png)](https://i.publiclab.org/system/images/photos/000/003/271/original/snapshot2_w_554_ft01.png)

Revisions follow: I made simple models of a cube and a cube shell on a base in [SketchUp](http://www.sketchup.com/) and exported them as 3D models in obj format. The cube shell on a base is similar to the kind of model one might generate from aerial images of a waste pile or mound. I opened them in meshlaab and applied the filter, Compute Geometric Measures,  in the Quality Measures and Computations set. Results are displayed in the Layer Dialog window. I copied the text into an EXCEL sheet to check the measured vs readily calculated values for a 10 ft by 10 ft cube. Screenshots of the results are shown below. In summary, it appears that unless the model is "closed", which my Hoover dam and cube shell examples are not, the calculated volume is not useful for our purposes. In the case of the "closed"cube, the difference is small, larger by less than one percent. I am a novice in use of these tools, but speculate that the edge of the mesh has some non-zero dimension which is being included.
However, in a further revision, I "closed" the shell with base model in SketchUp and exported it as obj file. Using the same method in Meshlab, the autocalculated volume is very close to that calculated for a 10 ft by 10 ft cube . See last two screen shots below.


[![grab_of_cube_w_measurements.jpg](https://i.publiclab.org/system/images/photos/000/003/286/medium/grab_of_cube_w_measurements.jpg)](https://i.publiclab.org/system/images/photos/000/003/286/original/grab_of_cube_w_measurements.jpg)


[![grab_cube_shell_w_base_measurements.jpg](https://i.publiclab.org/system/images/photos/000/003/287/medium/grab_cube_shell_w_base_measurements.jpg)](https://i.publiclab.org/system/images/photos/000/003/287/original/grab_cube_shell_w_base_measurements.jpg)


[![grab_compare_cube_shell_w_base_measurements.jpg](https://i.publiclab.org/system/images/photos/000/003/288/medium/grab_compare_cube_shell_w_base_measurements.jpg)](https://i.publiclab.org/system/images/photos/000/003/288/original/grab_compare_cube_shell_w_base_measurements.jpg)

Further revision screenshots of closed base cube shell as noted above:

[![compare_cube_shell_w_base_closed_measurements.jpg](https://i.publiclab.org/system/images/photos/000/003/289/medium/compare_cube_shell_w_base_closed_measurements.jpg)](https://i.publiclab.org/system/images/photos/000/003/289/original/compare_cube_shell_w_base_closed_measurements.jpg)


[![grab_compare_cube_shell_w_base_closed_measurements.jpg](https://i.publiclab.org/system/images/photos/000/003/290/medium/grab_compare_cube_shell_w_base_closed_measurements.jpg)](https://i.publiclab.org/system/images/photos/000/003/290/original/grab_compare_cube_shell_w_base_closed_measurements.jpg)



###Questions and next steps

While I could use the scaled measurements from the model to do area and volume calculations offline, I'd like to explore Meshlab's automatic volume measurement capabilities. (See revisions noted above, to incorporate automeasurements from meshlab and issues.) With the further revision, I was able to prepare an example closed base cube shell model which used this feature to get meaningful results. However, I have not addressed an actual SFM model as we might expect from aerial mapping piles or mounds. Perhaps others are already familiar with doing that.

It is also worth noting there are a number of other mesh editing and viewing packages that are free or open source.

###Why I'm interested

The capability to use the free and open-sourced cloud-based tools to autostitch images into maps and use their 3D models for area and volume calculations is powerful.