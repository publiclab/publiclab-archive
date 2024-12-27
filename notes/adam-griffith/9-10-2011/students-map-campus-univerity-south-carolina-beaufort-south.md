---
title: "Students map campus of University of South Carolina - Beaufort - South"

tagnames: 'southeast'
author: adam-griffith
path: /notes/adam-griffith/9-10-2011/students-map-campus-univerity-south-carolina-beaufort-south.md
nid: 457
uid: 3
cids: 
---

![](https://publiclab.org/sites/default/files/USCB_SouthMerged.jpg)

# Students map campus of University of South Carolina - Beaufort - South

by [adam-griffith](/profile/adam-griffith) | September 10, 2011 17:06

September 10, 2011 17:06 | Tags: [southeast](/tag/southeast)

----

<strong>Overview</strong>

This map was made by Robert Player and this text was written by Calle Schrader and Robert Player.  Dr. Brian Canada dedicated one week of his image processing workshop to this project.

A group of students at the University of South Carolina Beaufort were faced with the challenge of mapping their campus with a digital camera using aerial photography. The group, initially composed for a summer computational science workshop, sent a large helium balloon above and around the campus with a digital camera attached. At first we found ourselves faced with an ominous black cloud that quickly developed into a downpour muddling up the experiment.  After waiting out the storm, a part of the crew went back out for a second run and captured enough of the campus to stitch together a map using Adobe Photoshop.

Since many of us were new to such programs, such as Genie Pro and Photoshop, it required a lot of trial and error which became an interesting learning experience. Our finished mapping project ended up fairly similar to that of Google Maps, however, our digital camera gave us a much higher quality image.  Then with the help of Genie Pro, we were able to separate different objects such as buildings, grass, and trees. Overall, the experience was educational and fun; the idea of having work like this crowdsourced is a unique and exciting prospect. 

<strong>Technical/Quantitative Aspect</strong>

We calculated the height of the camera in a particular aerial photo by determining the camera’s aspect ratio using David Riallant’s ‘Aerial Camera Calculator’ guide. We took a photo of a meter stick placed against a wall, horizontal to the ground and parallel to the camera lens, from a known distance. We had to make sure the ends of the meter stick went ‘off the screen’ to get an accurate measure of the width of the photo. The width:distance-from-wall ratio is called the camera’s aspect ratio. Next, the distance along the width of an aerial photo (of a part of the USCB campus) was calculated by approximating the relative locations of two if its corners (again, along the width). Multiplying this width by the aspect ratio yields the height of the camera when the picture was taken.

The resolution of an aerial photo was calculated by dividing the distance by the number of pixels, both along the same dimension of the photo in question. A typical resolution of the aerial photos we took was ~6cm/pixel. Others, taken at a lower height, had a resolution of less than ~2cm/pixel! This resolution is far better than what is claimed to be ‘very high resolution’ satellite photos, whose resolution is ~50-100cm/pixel.

To analyze the content of these aerial photos, we performed a manual pixel classification and an automated pixel classification¬. The manual classification seemed easy enough; each of seven people in our workshop was assigned to a particular pixel type to tag by painting over it in Photoshop. Each ‘object’ was saved as a separate layer, making pixel quantification of each only a few clicks away using Photoshop’s histogram tools. The automated classification, using Genie Pro, still required some manual assistance. We had to train the program to identify pixels (or colors) for each type of object to be classified by tagging what we thought to be a good representative sample of the pixels which described that particular object. Additionally, once Genie Pro finished its classification, a manual separation of each object classified in the resulting composite photo had to be saved as a separate layer (in Photoshop) to obtain a pixel count.  Basically, Genie Pro acts as a modified magic wand tool in Photoshop, grouping what has been referenced as a specific object together by changing all pixels which match this description to the same color. Percent differences of pixels per object between Genie Pro and our group’s manual classification varied. Buildings and sidewalks resulted in less than a 2% difference, while trees, pine straw, and tennis courts were over 40% different. We concluded that these differences were primarily due to objects in shadows; their color being skewed and misclassified by Genie Pro.

<img width="500" src="https://publiclab.org/sites/default/files/USCB_GeniePro_Classification.jpg" alt="" />

<img width="500" src="https://publiclab.org/sites/default/files/IMG_2844.jpg" alt="" />