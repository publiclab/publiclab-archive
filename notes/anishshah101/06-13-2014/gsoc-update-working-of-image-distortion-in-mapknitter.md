---
nid: 10557
title: GSoC Update- Working of Image Distortion In Mapknitter 
path: public/static/notes/anishshah101/06-13-2014/gsoc-update-working-of-image-distortion-in-mapknitter.md
uid: 421046
tagnames: mapknitter,gsoc,developers,gsoc-2014,barnstar:basic
---

# GSoC Update- Working of Image Distortion In Mapknitter 

The image distortion in the editing interface in Mapknitter is one of the complex operations taking place in the tool.

This steps which take place when we are distorting an image are:
1) The image gets unlocked to allow editing on it.

[![1.png](https://i.publiclab.org/system/images/photos/000/004/695/medium/1.png)](https://i.publiclab.org/system/images/photos/000/004/695/original/1.png)

2) The corners of the image(also known as control points) are dragged by the user to allow distortion.

[![2.png](https://i.publiclab.org/system/images/photos/000/004/697/medium/2.png)](https://i.publiclab.org/system/images/photos/000/004/697/original/2.png)

3) When the control points are dragged, the image gets divided into a large number of small triangles and on each of these triangles, [affine transformation](http://en.wikipedia.org/wiki/Affine_transformation) takes place. As a result of many affine transformations and some end corrections, it appears as if the image as a whole is undergoing non-affine transformation or more specifically [projective transformation](http://www.geom.uiuc.edu/docs/reference/CRC-formulas/node16.html).

In step 3, since each triangle will have a different plane of transformation, it is not possible to find a simple unique rule common to transforming all the triangles. To overcome this drawback, the Cartesian coordinates of the triangle are converted into [homogeneous coordinates](http://en.wikipedia.org/wiki/Homogeneous_coordinates) which helps to transform the triangles with a common rule.




