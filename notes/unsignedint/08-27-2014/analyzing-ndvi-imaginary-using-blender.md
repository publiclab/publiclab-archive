---
title: "Analyzing NDVI Imagery Using Blender"\ntagnames: 'near-infrared-camera, ndvi, image-processing, software, blender'
author: unsignedint
path: /notes/unsignedint/08-27-2014/analyzing-ndvi-imaginary-using-blender.md
nid: 11080
uid: 427535

---

![](https://publiclab.org/public/system/images/photos/000/006/451/original/infragram.blend.png)

# Analyzing NDVI Imagery Using Blender

by [unsignedint](../profile/unsignedint) | August 27, 2014 11:33

August 27, 2014 11:33 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [image-processing](../tag/image-processing), [software](../tag/software), [blender](../tag/blender)

----

##Blender
[Blender](http://www.blender.org/) is a Free Software for 3D modeling and rendering. The software also contains an extensive suite of image adjustments and composition.

##Motivations
Using software, I have attempted to create node settings that allow researchers easy and efficient way to generate a composite image for NDVI imageries.

The advantage of this setting includes:

1) The software is free, and runs on various platforms

2) It's easy to adjust individual components, such as color maps, as well as channel adjustments.

3) Image files can be packed into single "blend" file. Research can send others one file containing the complete set up of the original researcher. ("Lab in a file")

4) Processing movie files or set of image sequences (such as time lapse) is no harder than processing a still image.

##Process
First, for this example, I have used an image that came with a Infragram point-and-shoot camera. (Mobius Actioncam)

This file was named example-before-processing.jpg. I wanted to plug this into Blender process, therefore I have imported this image into Blender, using a input node.

[![example-before-processing.jpg](https://i.publiclab.org/system/images/photos/000/006/453/medium/example-before-processing.jpg)](https://i.publiclab.org/system/images/photos/000/006/453/original/example-before-processing.jpg)

The process pass is as follows. (Please see the attached .BLEND file for details.)

1) Image input is separated to RGBA, breaking B component, connecting the rest to RGBA combiner.

2) I have applied color map, I have tried with [Ned's protanopia-friendly lut](http://publiclab.org/wiki/ndvi-gradients) as a color map for this example. I have also included a color ramp using one of the examples in the [New NDVI colormap](http://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap) 

3) Finally coloring is mixed, 50/50, coming from "GB" component of the image, as well as "B" component mapped to the color ramp -- balance for this component can be adjusted to fit your need, too.

##Result
I have obtained the following result using this process.

[![composite.png](https://i.publiclab.org/system/images/photos/000/006/450/medium/composite.png)](https://i.publiclab.org/system/images/photos/000/006/450/original/composite.png)

You can download the BLEND file below:

<a href="https://i.publiclab.org/system/images/photos/000/006/454/original/infragram.blend.zip"><i class="icon icon-file"></i> infragram.blend.zip</a>


###Further Improvements
(Added on 2014-08-27)

I have further investigated better separation of the needed component, by subtracting R component (visible light) from B, to filter out visible light portion of the image, which provided the sample below.

[![postsubtr.png](https://i.publiclab.org/system/images/photos/000/006/457/medium/postsubtr.png)](https://i.publiclab.org/system/images/photos/000/006/457/original/postsubtr.png)

This could be mapped to the color scale:

[![infracomp.png](https://i.publiclab.org/system/images/photos/000/006/458/medium/infracomp.png)](https://i.publiclab.org/system/images/photos/000/006/458/original/infracomp.png)

Better separation also allows me to composite the result better to the visible light, which may be appropriate for identifying possible vegitation activities.

[![inframap.png](https://i.publiclab.org/system/images/photos/000/006/459/medium/inframap.png)](https://i.publiclab.org/system/images/photos/000/006/459/original/inframap.png)

Updated version of BLEND file containing this setting is available below:

<a href="https://i.publiclab.org/system/images/photos/000/006/460/original/infragram-2014082701.blend.zip"><i class="icon icon-file"></i> infragram-2014082701.blend.zip</a>

###Yet Another Improvements
I have combined NDVI processing into group node -- which (hopefully) doing the NDVI processing correctly.

[![infragram-2014082702.blend.png](https://i.publiclab.org/system/images/photos/000/006/462/medium/infragram-2014082702.blend.png)](https://i.publiclab.org/system/images/photos/000/006/462/original/infragram-2014082702.blend.png)

[![improved-ir.png](https://i.publiclab.org/system/images/photos/000/006/463/medium/improved-ir.png)](https://i.publiclab.org/system/images/photos/000/006/463/original/improved-ir.png)

[![improved-ircomp.png](https://i.publiclab.org/system/images/photos/000/006/464/medium/improved-ircomp.png)](https://i.publiclab.org/system/images/photos/000/006/464/original/improved-ircomp.png)

[![improved-irhighlight.png](https://i.publiclab.org/system/images/photos/000/006/465/medium/improved-irhighlight.png)](https://i.publiclab.org/system/images/photos/000/006/465/original/improved-irhighlight.png)

[![improved-iroverlay.png](https://i.publiclab.org/system/images/photos/000/006/466/medium/improved-iroverlay.png)](https://i.publiclab.org/system/images/photos/000/006/466/original/improved-iroverlay.png)

[![improved-test.png](https://i.publiclab.org/system/images/photos/000/006/467/medium/improved-test.png)](https://i.publiclab.org/system/images/photos/000/006/467/original/improved-test.png)

Updated BLEND file:
<a href="https://i.publiclab.org/system/images/photos/000/006/473/original/infragram-2014082702.blend.zip"><i class="icon icon-file"></i> infragram-2014082702.blend.zip</a>
(The earlier version I have uploaded had a mistake in a fomula, please download again if you have downloaded prior.)

##Version Similar to Infragram.org Output
[Infragram.org](http://www.infragram.org/) provides web based conversion, and I have created version of BLEND file that can provide similar color maps.

<a href="https://i.publiclab.org/system/images/photos/000/006/474/original/infragram.org.blend.zip"><i class="icon icon-file"></i> infragram.org.blend.zip</a>

This can provide three type of output, similar to Basic, Colorized, and combined (basically Colorized format overlayed by visible light -- no Stretch and Fastie colormap, yet)

[![sample_basic.png](https://i.publiclab.org/system/images/photos/000/006/475/medium/sample_basic.png)](https://i.publiclab.org/system/images/photos/000/006/475/original/sample_basic.png)

[![sample_colorized.png](https://i.publiclab.org/system/images/photos/000/006/476/medium/sample_colorized.png)](https://i.publiclab.org/system/images/photos/000/006/476/original/sample_colorized.png)

[![sample_combined.png](https://i.publiclab.org/system/images/photos/000/006/477/medium/sample_combined.png)](https://i.publiclab.org/system/images/photos/000/006/477/original/sample_combined.png)

###Some Examples From My Yard (and Surroundings)
[![0001.png](https://i.publiclab.org/system/images/photos/000/006/478/medium/0001.png)](https://i.publiclab.org/system/images/photos/000/006/478/original/0001.png)

[![0002.png](https://i.publiclab.org/system/images/photos/000/006/479/medium/0002.png)](https://i.publiclab.org/system/images/photos/000/006/479/original/0002.png)

[![0003.png](https://i.publiclab.org/system/images/photos/000/006/480/medium/0003.png)](https://i.publiclab.org/system/images/photos/000/006/480/original/0003.png)

[![0005.png](https://i.publiclab.org/system/images/photos/000/006/482/medium/0005.png)](https://i.publiclab.org/system/images/photos/000/006/482/original/0005.png)

[![0004.png](https://i.publiclab.org/system/images/photos/000/006/481/medium/0004.png)](https://i.publiclab.org/system/images/photos/000/006/481/original/0004.png)

<a href="https://i.publiclab.org/system/images/photos/000/006/483/original/myyard.blend.zip"><i class="icon icon-file"></i> myyard.blend.zip</a>

##Conclusion
Blender has a potential to efficiently process image NDVI images for various applications. I would like to experiment with it further to improve the process further.

###Next Step
I am still new to NDVI, having just received the camera a day ago. My future attempts, including trying the process using additional images as well as trying better color ramps and adjustments.

Comments, suggestions and improvements are highly appreciated!

##Some Random Closing Comments
Spell check messed it up and this article used to be "Analyzing NDVI **Imaginary** Using Blender" -- I fixed it, it's not imaginary, it's a real thing :-)