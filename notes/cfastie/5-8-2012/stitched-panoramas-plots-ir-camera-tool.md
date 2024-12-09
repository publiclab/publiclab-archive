---
title: 'Stitched panoramas from the PLOTS IR camera tool'
tagnames: near-infrared-camera, nrg, ndvi, nir, gigapan
author: cfastie
path: /notes/cfastie/5-8-2012/stitched-panoramas-plots-ir-camera-tool.md
nid: 1927
uid: 554

---

![](https://publiclab.org/sites/default/files/FledIRshots-20120503-153-34.jpg)

# Stitched panoramas from the PLOTS IR camera tool

by [cfastie](../profile/cfastie) May 08, 2012 18:13

May 08, 2012 18:13 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [nir](../tag/nir), [gigapan](../tag/gigapan)

----

There was not enough wind for a kite to lift my <a href="http://publiclaboratory.org/wiki/dual-camera-kit-guide">PLOTS IR cameras </a>last week, so I walked around with the dual camera KAP rig and took synchronous pairs of normal and NIR photos. This allowed me to check the alignment of the cameras, see how focus and exposure operated, and try stitching NDVI images into panoramas.

There is more detail, more photos, video, and a 170 megapixel Gigapan of the poster <a href="http://fastie.net/?p=1492">at my site</a>. A direct link to the <a href="http://www.gigapan.com/gigapans/104697">Gigapan is here</a>.

<strong>Some things I learned:</strong>

<strong>Camera alignment:</strong> The alignment is close, so the two images are offset by about 60 pixels (both x and y).  Alignment is important because it makes rectifying the images more productive -- each pair of rectified images yields more final image when the stacked images coincide. And it can be tedious to rectify the photos, so cropping away lots of non-overlapped image is painful. 

<strong>Exposure:</strong> The NIR camera needs about three times more light than the unmodified camera to make a decent exposure. I think increasing the ISO from 80 (the lowest setting on the A495) to 200 will be standard procedure for the NIR camera. With the unmodified camera at ISO 80 and 1/800 second, setting the NIR camera at ISO 200 and 1/640 second will give it 3.1 times more light at the same f-stop. For very bright scenes, even 1/800 second and ISO 200 will allow the NIR camera to make well exposed images. I was using shutter speed priority via CHDK.

<strong>Focus:</strong> The NIR camera has a harder time finding the correct focus. I tried both <em>Normal </em>and <em>Infinity </em>focus mode. Both seem to be automatic focus modes, but I think <em>Infinity </em>does not bother to search closer than about 10 feet. That is an important advantage, but it still results in the camera continuing to search for focus when it is time to shoot. In some situations this could cause the A495 to refuse to shoot and miss a photo. Using CHDK to fire both cameras simultaneously after a timer signals the USB port eliminates that problem because the camera shoots even if it is displaying an error due to failure to focus. So failure to focus in time will not cause missed photos, but the NIR camera will probably produce more out-of-focus shots than the normal camera. A camera with a true manual focus mode would be preferable. Although CHDK offers no menu control to lock focus, it does offer focus control via scripts. This will have to be investigated.

<strong>Stitching:</strong> I used Microsoft ICE to do the stitching. The NIR photos from the modified A495 stitch together into panoramas about as well as normal photos.  The other images, all of which start with one image aligned on top of another, are harder for stitching programs to match because adjacent images might have been aligned slightly differently. The false color NDVI is very hard to stitch because it has much less detail (nearby pixels with similar values are all assigned the same color which obscures fine detail). I had to do much of that NDVI stitching manually in Photoshop.

<a href="https://www.flickr.com/photos/52862669@N08/7159282338/" title="Standard presentations of NIR and visible data"><img src="https://farm6.staticflickr.com/5465/7159282338_ba68988b91_z.jpg" width="549" height="640" alt="Standard presentations of NIR and visible data"></a>
<p>Caption: Five panoramas each stitched from five images made using the PLOTS IR camera tool. The top panorama is made with photos from the unmodified Canon A495. The second one is made with the PLOTS NIR-modified A495. The middle panel is a false color infrared (NRG) image made with NIR and visible information from both cameras. The lower two panoramas are grayscale and false color NDVI, an index computed from NIR and red values which highlights plant productivity.</p>

<strong>The poster above can be <a href="http://www.gigapan.com/gigapans/104697">explored in great detail at Gigapan.com</a>.</strong> This gigapan is embedded below, but the view and the information is richer at gigapan.com.

<iframe src="https://www.gigapan.com/gigapans/104697/snapshots/273576,273577,273574,273575,273572,273573,273570,273568,273564,273562/options/hidetitle/iframe/flash.html?height=500" frameborder="0" height="620" scrolling="no" width="1000"></iframe>