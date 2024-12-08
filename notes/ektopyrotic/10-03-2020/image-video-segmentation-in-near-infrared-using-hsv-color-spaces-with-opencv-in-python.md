---
title: Image + Video Segmentation in Near-Infrared Using HSV Color Spaces with OpenCV in Python
tagnames: ndvi, infrared, uav, mapping, plants, camera, vegetation, environment, drone, monitoring, coding, detection, python, project, lat:28, image, zoom:6, lon:-15
author: ektopyrotic
path: /notes/ektopyrotic/10-03-2020/image-video-segmentation-in-near-infrared-using-hsv-color-spaces-with-opencv-in-python.md
nid: 24696
uid: 699450

---

# Image + Video Segmentation in Near-Infrared Using HSV Color Spaces with OpenCV in Python

by [ektopyrotic](../profile/ektopyrotic) October 03, 2020 19:08

October 03, 2020 19:08 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [uav](../tag/uav), [mapping](../tag/mapping), [plants](../tag/plants), [camera](../tag/camera), [vegetation](../tag/vegetation), [environment](../tag/environment), [drone](../tag/drone), [monitoring](../tag/monitoring), [coding](../tag/coding), [detection](../tag/detection), [python](../tag/python), [project](../tag/project), [lat:28](../tag/lat:28), [image](../tag/image), [zoom:6](../tag/zoom:6), [lon:-15](../tag/lon:-15)

Demo Video Here:https://www.youtube.com/watch?v=LR37KuKt5nQ&feature=emb\_title

Full Research Blog Article:http://muonray.blogspot.com/2020/10/image-video-segmentation-in-near.html

GitHub Coding:https://github.com/MuonRay/Image-VideoSegmentationinNIRforPlantDetection

  
Here I will be sharing a technique to perform a simple kind of image segmentation used to separate certain objects visible in the near-infrared and ultraviolet using the hue, saturation and value values (HSV) contained in the color space with OpenCV in Python. This is a useful tool in the processing of NIR images and video when we want to search for vegetation in an image using a defined threshold. Moreover, we can perform fast NDVI analysis on the examined region in the video clips.   

  
This procedure is very useful for accurate scaling of NDVI in the region of interest, the vegetation of the image, and removing the background so as to focus on the NDVI of plant material only. 

  
The potential for detecting plants in an image or video is also a field of interest for us in plant exploration and detection in desert regions and for plant counting by techniques such as ring detection. It is hoped these developments will be useful in detecting rare or well hidden plant specimens in remote areas for plant population monitoring in deserts and mountains.