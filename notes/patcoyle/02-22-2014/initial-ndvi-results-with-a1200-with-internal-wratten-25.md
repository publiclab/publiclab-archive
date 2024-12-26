---
title: "Updated initial NDVI results from A1200 with internal Wratten 25"\ntagnames: 'ndvi, a1200, infrared-camera, infrablue, wratten25a, a490'
author: patcoyle
path: /notes/patcoyle/02-22-2014/initial-ndvi-results-with-a1200-with-internal-wratten-25.md
nid: 10055
uid: 77

---

![](https://publiclab.org/public/system/images/photos/000/002/974/original/12688716325_09458a3d4a.jpg)

# Updated initial NDVI results from A1200 with internal Wratten 25

by [patcoyle](../profile/patcoyle) | February 22, 2014 05:24

February 22, 2014 05:24 | Tags: [ndvi](../tag/ndvi), [a1200](../tag/a1200), [infrared-camera](../tag/infrared-camera), [infrablue](../tag/infrablue), [wratten25a](../tag/wratten25a), [a490](../tag/a490)

----

###What I want to do
Motivated by Chris Fastie and Ned Horning's work, change internal filter on A1200 from exposed color film (for NIR two-camera approach) to Wratten 25. [I already tried the Wratten 25 as an external filter on an A490](http://publiclab.org/notes/patcoyle/01-30-2014/initial-experience-with-wratten-25-filter-on-a490). However, I wanted to mount the gel film  inside to protect it. Try it for NDVI. 

(Updated: 
1. Took 85 more test images, revealing internal blemish in some specific lighting conditions. Not sure if it is a fingerprint on filter or sensor, or something else. Most images appear ok
2. In response to comment tried processing without stretching vis or NIR using Ned Hornings Fiji tool)




###My attempt and results

Updated as noted above: 
Composite showing example images with blemish:

[![image_issue_crpd.jpg](https://i.publiclab.org/system/images/photos/000/003/003/medium/image_issue_crpd.jpg)](https://i.publiclab.org/system/images/photos/000/003/003/original/image_issue_crpd.jpg)

 Contact sheet views of as shot images, mostly ok and portion of processed images:

[![input_images.jpg](https://i.publiclab.org/system/images/photos/000/003/004/medium/input_images.jpg)](https://i.publiclab.org/system/images/photos/000/003/004/original/input_images.jpg)


[![output_images.jpg](https://i.publiclab.org/system/images/photos/000/003/005/medium/output_images.jpg)](https://i.publiclab.org/system/images/photos/000/003/005/original/output_images.jpg)

Composite image showing result of processing without stretching vis or NIR using Ned Hornings Fiji tool


[![test_w__wo_stretching_all.jpg](https://i.publiclab.org/system/images/photos/000/003/006/medium/test_w__wo_stretching_all.jpg)](https://i.publiclab.org/system/images/photos/000/003/006/original/test_w__wo_stretching_all.jpg)




End of update

[All photos, including: before NIR, before custom white balance, and FP NDVi.](http://flic.kr/s/aHsjT3DV92)

Photos of conversion: [[For initial conversion for NIR two-camera approach, see prior note](http://publiclab.org/notes/patcoyle/11-6-2012/canon-a1200-ir-conversion-november-2-4-2012-plots-barnraising-cocodrie-la-l)].

[![12688766175_3441ef18f0.jpg](https://i.publiclab.org/system/images/photos/000/002/984/medium/12688766175_3441ef18f0.jpg)](https://i.publiclab.org/system/images/photos/000/002/984/original/12688766175_3441ef18f0.jpg)

[![12689247964_496fa75f7d.jpg](https://i.publiclab.org/system/images/photos/000/002/982/medium/12689247964_496fa75f7d.jpg)](https://i.publiclab.org/system/images/photos/000/002/982/original/12689247964_496fa75f7d.jpg)

[![12689249344_50993f8680.jpg](https://i.publiclab.org/system/images/photos/000/002/981/medium/12689249344_50993f8680.jpg)](https://i.publiclab.org/system/images/photos/000/002/981/original/12689249344_50993f8680.jpg)

[![12689246604_fac19d6599_n.jpg](https://i.publiclab.org/system/images/photos/000/002/983/medium/12689246604_fac19d6599_n.jpg)](https://i.publiclab.org/system/images/photos/000/002/983/original/12689246604_fac19d6599_n.jpg)


For Wratten 25 filter material, [see prior note](http://publiclab.org/notes/patcoyle/01-30-2014/initial-experience-with-wratten-25-filter-on-a490).

First testing image examples of my front yard in Livermore CA were shot after custom white balance in sun using red file folder:

As shot:

[![12688764185_2c402c901c.jpg](https://i.publiclab.org/system/images/photos/000/002/975/medium/12688764185_2c402c901c.jpg)](https://i.publiclab.org/system/images/photos/000/002/975/original/12688764185_2c402c901c.jpg)


[![12688762655_41b6ddc794.jpg](https://i.publiclab.org/system/images/photos/000/002/976/medium/12688762655_41b6ddc794.jpg)](https://i.publiclab.org/system/images/photos/000/002/976/original/12688762655_41b6ddc794.jpg)


[![12688900273_ece4688ae6.jpg](https://i.publiclab.org/system/images/photos/000/002/977/medium/12688900273_ece4688ae6.jpg)](https://i.publiclab.org/system/images/photos/000/002/977/original/12688900273_ece4688ae6.jpg)

Images processed with Ned Horning Fiji tool with blue channel for NIR and red channel for red; with the Chris Fasti lut. Thanks again to Chris for his helpful comments on the A490 initial test results.


[![12688856563_6589b8a595.jpg](https://i.publiclab.org/system/images/photos/000/002/979/medium/12688856563_6589b8a595.jpg)](https://i.publiclab.org/system/images/photos/000/002/979/original/12688856563_6589b8a595.jpg)


[![12688716325_09458a3d4a.jpg](https://i.publiclab.org/system/images/photos/000/002/980/medium/12688716325_09458a3d4a.jpg)](https://i.publiclab.org/system/images/photos/000/002/980/original/12688716325_09458a3d4a.jpg)


[![12688854293_eeeec81f3e.jpg](https://i.publiclab.org/system/images/photos/000/002/985/medium/12688854293_eeeec81f3e.jpg)](https://i.publiclab.org/system/images/photos/000/002/985/original/12688854293_eeeec81f3e.jpg)


###Questions and next steps
Tune white balance or other parameters to improve results.

###Why I'm interested
Continue to explore as tool to assess vegetative health.