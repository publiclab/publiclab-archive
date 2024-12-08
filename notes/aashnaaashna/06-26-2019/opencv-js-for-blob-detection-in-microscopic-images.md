---
title: Opencv.js for blob detection in microscopic images
tagnames: dust, pm, particle, javascript, opencv, image-sequencer, particle-imaging, particle-analysis, blob-detection, opencv.js, object-marking, particle-detection
author: aashnaaashna
path: /notes/aashnaaashna/06-26-2019/opencv-js-for-blob-detection-in-microscopic-images.md
nid: 19880
uid: 553271

---

# Opencv.js for blob detection in microscopic images

by [aashnaaashna](../profile/aashnaaashna) June 26, 2019 21:39

June 26, 2019 21:39 | Tags: [dust](../tag/dust), [pm](../tag/pm), [particle](../tag/particle), [javascript](../tag/javascript), [opencv](../tag/opencv), [image-sequencer](../tag/image-sequencer), [particle-imaging](../tag/particle-imaging), [particle-analysis](../tag/particle-analysis), [blob-detection](../tag/blob-detection), [opencv.js](../tag/opencv.js), [object-marking](../tag/object-marking), [particle-detection](../tag/particle-detection)

This is a procedural guide for using Opencv.js for blob detection in microscopic images. Opencv.js provides javascript bindings for opencv, bringing the powerful image processing operations to javascripts. It can be embedded using a script tag and it is ready for use!![image description](/i/33257.png "scriopt.png")

---------

For the demonstration a simple image is taken and the various stages of processing are shown:

-><img src="/i/33255.jpeg" alt="image description" title="blob2.jpeg"><-

**Step 1:** Threshold the image for a simple segmentation of your image to identify
background and foreground regions. For our sample image it results as :

-><img src="/i/33248.png" alt="image description" title="micro-thresh.png"><br><br><-

**Step 2:** We are now certain of the background and the foreground but the region we are uncertain about is the boundary region. Now for this we use the processing functions - erode and dilate. Erosion removes the boundary pixels, so we are certain of the pixels that are inside the object. Dilation increases the region's boundary to the background.Now we use distance transformation for gray level intensities of points inside region with respect to the boundary.

-><img src="/i/33250.png" alt="image description" title="dist-transf.png"><br><br><-

**Step 3:** Finally mark the boundary regions and it is done !!

-><img src="/i/33254.png" alt="image description" title="blob-res.png"><-