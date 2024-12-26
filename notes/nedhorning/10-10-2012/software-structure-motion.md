---
title: "Software for structure from motion"\ntagnames: 'sfm, software, mapping, structure-from-motion'
author: nedhorning
path: /notes/nedhorning/10-10-2012/software-structure-motion.md
nid: 4328
uid: 133

---

![](https://publiclab.org/sites/default/files/TreeSmooth00.png)

# Software for structure from motion

by [nedhorning](../profile/nedhorning) | October 10, 2012 14:29

October 10, 2012 14:29 | Tags: [sfm](../tag/sfm), [software](../tag/software), [mapping](../tag/mapping), [structure-from-motion](../tag/structure-from-motion)

----

A few people who I have spoken with recently expressed an interest in accessing freely available structure from motion (SFM) software. This note provides a brief introduction to SFM with information about a set of open source software for processing SFM data sets on a desktop computer. This is quite terse but hopefully useful or at least enough to pique some interest in working with SFM. 

SFM is a process of building 3-dimensional models using images of a feature that were acquired from different locations around the feature. My personal interest is in imaging landscapes using small aerial platforms like kites/balloons/UAS but many outdoor SFM examples focus on urban features such as buildings and statues. Developments in SFM grew from time-tested approaches developed for photogrammetry – the study of making measurements from photographs. Traditional photogrammetric approaches impose constraints that are typically met by recording information about the spatial orientation of the camera (e.g., roll, tilt, yaw, x, y, z  ) or by recreating the camera orientation using precise mechanical/optical or computer simulated optical geometry. This process is very time consuming and/or requires very expensive equipment. Using SFM is much simpler from the users perspective since camera location and orientation is calculated automatically using information generated directly from the images. 

The SFM process usually involves submitting several images to the program and after a few processing steps you get information about camera location and orientation for each photo and a point cloud which is essentially a 3-dimensional set of points that is a model of the feature you had imaged. This point cloud can then be processed using software such as MeshLab (http://meshlab.sourceforge.net/) so you can drape images over it to create a 3-dimensional perspective similar to what you see in computer games. 

SFM is increasingly being used for landscape mapping since it is possible to create orthorectified maps with little user input. The camera orientation and point cloud coordinates output from SFM are scaled using a relative coordinate system so if you can georeference some points in the point cloud or some points from the camera platform you can rescale the camera orientation and point cloud coordinates to real world coordinates (e.g., latitude/longitude, UTM X/Y). In practical terms this means that if you know the coordinates of some ground features such as buildings or trees that you can see in the point cloud or if you can record the location of the camera with a GPS to register the camera coordinates (like Chris Fastie did during LEAFFEST: http://publiclaboratory.org/notes/cfastie/10-6-2012/sky-tracks) you can convert landscape images into georeferenced maps.

In addition to creating  georeferenced maps there is research going on to better understand what types of information related for vegetation structure can be generated from SFM-generated point clouds. Currently most of this type of data is being gathered using aircraft lidar systems but there is hope that point clouds derived from SFM will provide similar or complementary information. 

Although SFM has many potential applications there are some issues that still need to be developed to improve accuracy and efficiency. One limitation is that it requires significant computer, especially graphics card, resources so processing large areas at fine resolution is difficult. Another issue related to landscape imaging is that it can be difficult to generate matching points of a feature recorded on multiple photos (keypoints) since reliable feature keypoints detectable from different camera perspectives are not as common in natural landscapes as they are in urban environments which are full of sharp angles. 

There are some online sites for creating SFM point clouds (some offer free processing with limits) and derived products and also proprietary software that can be purchased but there is a great set of open source software being developed for support SFM processing. This SFM system is bundled under the name VisualSFM (http://homes.cs.washington.edu/~ccwu/vsfm/) and is a project maintained by Changchang Wu from the University of Washington at Seattle. VisualSFM is a series of open source packages that can be access through an easy-to-use graphical user interface. There are a few tutorials, videos and a Google group for discussing issues and all can be accessed from the web site. I have run VisualSFM on Windows and Ubuntu (be sure to use the instructions at: http://www.10flow.com/2012/08/15/building-visualsfm-on-ubuntu-12-04-precise-pangolin-desktop-64-bit/) and have been pleased. Documentation is still a bit scant but you should be able to run basic processing without much trouble. Additional processing of the point cloud and landscape mapping will require some research. 

I have a lot to learn and hope to experiment more with SFM in the next several months and would like to put together some guides focused on map making. If anyone out there is interested in helping with this let me know. 

Some online SFM services:
http://www.hypr3d.com
http://dronemapper.com
http://pix4d.com
http://photosynth.net
http://www.terrapanlabs.com

Some proprietary software:
http://www.123dapp.com/catch
http://www.agisoft.ru/products/photoscan
http://www.photomodeler.com