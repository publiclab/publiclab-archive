---
title: 'Dealing with parallax'
tagnames: near-infrared-camera, image-stitching, parallax, image-registration
author: nedhorning
path: /notes/nedhorning/3-26-2013/dealing-parallax.md
nid: 6550
uid: 133

---

![](https://publiclab.org/sites/default/files/kpm1_2.png)

# Dealing with parallax

by [nedhorning](../profile/nedhorning) March 27, 2013 01:06

March 27, 2013 01:06 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [image-stitching](../tag/image-stitching), [parallax](../tag/parallax), [image-registration](../tag/image-registration)

----

Dealing with parallax

Some PLOTS folks are developing a camera/video device that will be able to acquire visible and near-infrared photos [<a href="http://publiclaboratory.org/wiki/ircam">http://publiclaboratory.org/wiki/ircam</a>] to be able to easily create NDVI and false color near-IR images. The way most people are doing this now is by using a mount with two cameras (one recording visible and the other near-infrared images) attached next to each other [<a href="http://publiclaboratory.org/notes/cfastie/5-8-2012/stitched-panoramas-plots-ir-camera-tool">http://publiclaboratory.org/notes/cfastie/5-8-2012/stitched-panoramas-plots-ir-camera-tool</a>] and then using a free software tool that fuses the two images and creates NDVI and false color near-IR images. This new device will be inexpensive and will be able to output the same images without adding an extra processing step. 

Two designs for recording both visible and near-IR images are being discussed. One approach is to use a single camera with a mechanical device to very quickly swap a filter that allow only visible light (blocks near-IR) into the camera with one that allows near-IR but prevents visible light into the camera. This camera has an advantage that it makes the work of fusing visible and near-IR images a trivial task. The primary drawback is that there is a time lag between capturing the two images (~0.2 seconds) so it's important that the camera is fixed in position and that there is little or no movement in the scene being imaged. This rules out most aerial platforms with the possible exception of a very steady pole or tower but it's ideal for close-range imaging. 

The other design is to use two-cameras mounted next to each other that can acquire images at the same time thereby making a nice system for aerial imaging.  The drawback is that it is subject to parallax [<a href="http://en.wikipedia.org/wiki/Parallax">http://en.wikipedia.org/wiki/Parallax</a>]. Parallax occurs because the two cameras are looking at the same object from a slightly different angle. It's a like your eyes. To visualize the parallax effect hold a finger, pointing up, near your nose. Blink your left and right eyes, one at a time, and you will see your finger move relative to the scene in the background. Slowly move your finger away from your nose while you keep blinking. As your finger gets farther away the relative movement decreases. Now, move your finger close to the background and you will notice that as your finger gets closer to the background the relative movement decreases until it is on the same plane as the background in which case there is no parallax.

If the two cameras are a fixed distance from each other the two factors affecting parallax are the distance the cameras are located from the scene being imaged and the depth between the nearest farthest objects in the scene (relief). Parallax effects will decrease the farther the camera is from the scene and as relief decreases. For example, if we had the cameras mounted on a balloon the higher the balloon flew the less we would notice parallax in the images. Also, if the landscape we were imaging was flat parallax would not be a problem, even at low altitudes, but it could be severe if we were imaging tall trees unless the balloon was very high. 

So, why do we care about parallax with this camera design? When there is substantial parallax in the two images (visible and near-IR) simple methods used to automatically register the two images fail. Fusing stereo images requires two steps. The first is to select matching points in the two images The second step involves transforming one image to match the other. Most algorithms used to select matching points from multiple images start by identifying keypoints in the images. Keypoints are distinctive points in the image such as object corners. Unless the image is relatively featureless it is common for hundreds of keypoints to be identified in a single image. Once image keypoints are selected it is necessary to find corresponding keypoints from the two images (points that represent the same location in the two images). This is where parallax creates a problem. Since many software packages used to find matching points between two images assume there is a simple transformation between the two images (there is often a parameter to select the type of transformation) it is not possible to identify corresponding points in two images with significant parallax since the distortions are not predictable. The second step of transforming the one image to match the other can fail for the same reason. It is not possible to apply a common transforms such as the affine transformation to an image if the image pair has parallax. It should also be noted that when there is parallax the transformation, no matter how complex, can not be fixed from one image pair to the next if the scene or camera pose changes. 

Fortunately the field of computer vision has developed some sophisticated and efficient algorithms to deal with parallax issues in stereoscopic imaging systems. A paper that does a decent jobs explaining some issues encountered with these dual-camera systems is Multimodal Image Registration with Applications to Image Fusion: [<a href="https://epubs.surrey.ac.uk/2425/1/SRF002663.pdf">https://epubs.surrey.ac.uk/2425/1/SRF002663.pdf</a>]. For additional information about algorithms that deal with the problem of matching images acquired from two cameras try to search the Internet using keywords such as: stereo correspondence, stereo matching, and multimodal image registration. There are some open source software libraries out there that support stereo matching and some can be found in OpenCV. There are is a lot of research focused on improving these methods and as robotics becomes more popular access to very sophisticated algorithms will improve. 

For what it's worth, parallax isn't all bad. It's the quality that make stereo imaging possible and allows us to create maps and 3-dimensional models of the terrain or landscape features using photos. For stereo imaging more parallax (within limits) is often better. Parallax is really only a problem when we try to fuse multiple images.

So, which is a better system – a single or dual camera? They each have their place. Why not build a frame that supports both so a user could have a single camera system for close-range imaging, a dual camera system (1 near-IR and 1 visible) with the camera lenses next to each other and a dual camera (2 near-IR or 2 visible cameras) system with the lenses farther apart (a few inches) to record stereo images so it can be used for DIY photogrammetry. Well, maybe that's enough for two frames but both will be useful. 

Disclaimer: Some of my ircam design comments might not be 100% accurate but I trust some of the more active IR Cam folks will correct me.
