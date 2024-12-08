---
title: How can one Infragram photo produce different NDVI results?
tagnames: ndvi, infrared, infragram, question:infragram
author: cfastie
path: /notes/cfastie/12-05-2015/how-can-one-infragram-photo-produce-different-ndvi-results.md
nid: 12482
uid: 554

---

# How can one Infragram photo produce different NDVI results?

by [cfastie](../profile/cfastie) December 05, 2015 15:59

December 05, 2015 15:59 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [infragram](../tag/infragram), [question:infragram](../tag/question:infragram)

Rutvij bought an infrared Mobius camera ([Infragram Point & Shoot](https://store.publiclab.org/collections/diy-infrared-photography/products/infragram-point-shoot-plant-cam)) from the Public Lab store. He took a photo of a tree and processed it three ways: at infragram.org, with Ned's Photo Monitoring plugin for Fiji, and with python code which predates infragram.org. The results from each method are quite different and he asked me why. I thought this was a good question. Which method is best, and are the others unreliable? If so, should they be removed as options for users who can find links to them at the Public Lab site? Should the process of getting reliable NDVI results be made less confusing for first-time users?

[![Mobius__camera__actual_image.jpg](//i.publiclab.org/system/images/photos/000/013/214/medium/Mobius__camera__actual_image.jpg)](//i.publiclab.org/system/images/photos/000/013/214/original/Mobius__camera__actual_image.jpg)  
*Above: Rutvij's photo with the Infragram Point & Shoot. This is a Mobius ActionCam with the internal IR block filter replaced with a Rosco Fire red filter.*

[![Converted_from_public_lab_website.png](//i.publiclab.org/system/images/photos/000/013/215/medium/Converted_from_public_lab_website.png)](//i.publiclab.org/system/images/photos/000/013/215/original/Converted_from_public_lab_website.png)  
*Above: NDVI image processed at [infragram.org](http://infragram.org/sandbox/legacy/).*

[![Fiji_plugin_defaults.JPG](//i.publiclab.org/system/images/photos/000/013/216/medium/Fiji_plugin_defaults.JPG)](//i.publiclab.org/system/images/photos/000/013/216/original/Fiji_plugin_defaults.JPG)  
*Above: NDVI image processed with Ned Horning's [Photo Monitoring plugin](https://github.com/nedhorning/PhotoMonitoringPlugin) for Fiji.*

[![Converted_from_python.jpg](//i.publiclab.org/system/images/photos/000/013/217/medium/Converted_from_python.jpg)](//i.publiclab.org/system/images/photos/000/013/217/original/Converted_from_python.jpg)  
*Above: NDVI image processed with python code from [https://github.com/p-v-o-s/infragram-js](https://github.com/p-v-o-s/infragram-js).*





