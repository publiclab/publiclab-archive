---
title: "Remove lens distortion from photos with FisheyeGL"\ntagnames: 'nasa, infragram, fisheye, gopro, mobius, mobius-action-cam, javascript, lens-distortion, web-based, browser, activity:mobius, activity:mini-balloon-kit, activity:mini-kite-kit, activity:aerial-mapping, response:13826, activity:lens-distortion, aren, lens-swapping, lens-correction, activity:lens-correction, activity:mobius-action-cam, activity:infragram-point-shoot, mini-camera, activity:mini-camera'
author: warren
path: /notes/warren/08-25-2017/remove-lens-distortion-from-photos-with-fisheyegl.md
nid: 14792
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/021/423/original/PublicLab_copy.png)

# Remove lens distortion from photos with FisheyeGL

by [warren](../profile/warren) | August 25, 2017 16:04

August 25, 2017 16:04 | Tags: [nasa](../tag/nasa), [infragram](../tag/infragram), [fisheye](../tag/fisheye), [gopro](../tag/gopro), [mobius](../tag/mobius), [mobius-action-cam](../tag/mobius-action-cam), [javascript](../tag/javascript), [lens-distortion](../tag/lens-distortion), [web-based](../tag/web-based), [browser](../tag/browser), [activity:mobius](../tag/activity:mobius), [activity:mini-balloon-kit](../tag/activity:mini-balloon-kit), [activity:mini-kite-kit](../tag/activity:mini-kite-kit), [activity:aerial-mapping](../tag/activity:aerial-mapping), [response:13826](../tag/response:13826), [activity:lens-distortion](../tag/activity:lens-distortion), [aren](../tag/aren), [lens-swapping](../tag/lens-swapping), [lens-correction](../tag/lens-correction), [activity:lens-correction](../tag/activity:lens-correction), [activity:mobius-action-cam](../tag/activity:mobius-action-cam), [activity:infragram-point-shoot](../tag/activity:infragram-point-shoot), [mini-camera](../tag/mini-camera), [activity:mini-camera](../tag/activity:mini-camera)

----

[FisheyeGL](https://jywarren.github.io/fisheyegl/example/) is a new online tool for removing lens distortion ("fisheye" effect or "barrel distortion") from images, especially those taken with a #GoPro or [Mobius Action Cam](https://publiclab.myshopify.com/products/mobius-actioncam) (Public Lab's [Infragram Point & Shoot](https://publiclab.myshopify.com/collections/diy-infrared-photography/products/infragram-point-shoot-plant-cam)). Note that another way to do this is to install a different lens on your camera if that's possible (see #lens-swapping). 

For example, the left image below has a characteristic "bulge" from a wide-angle lens. **FisheyeGL** can (like other #lens-distortion techniques) remove this, resulting in a "flatter" image, like the one to the right, below.

_This work was made possible in part by by [NASA](https://science.nasa.gov/stem-activation-team) through the [AREN project](https://www.globe.gov/web/aren-project/)._

  
![image description](https://publiclab.org/system/images/photos/000/021/421/large/Screen_Shot_2017-08-25_at_11.40.41_AM.png "Screen_Shot_2017-08-25_at_11.40.41_AM.png")

With a real image, the effect is as shown below, again left/before, right/after. This is especially useful for making maps in MapKnitter, because distorted images make it extremely difficult to stitch images together into a map -- it's like trying to flatten a bunch of orange peels into a flat surface (or something).

Note that the corners of the image are cropped out when you do this, however!

![image description](https://publiclab.org/system/images/photos/000/021/422/large/before-after-mobius.png "before-after-mobius.png")

### Settings

The distortion varies for different lenses. Sliders are provided, and while each has a meaning in the formula used to correct the distortion, the easiest way to find the right settings is to take a picture of a grid (a checkerboard or graph paper, or a tiled wall) and play with the sliders until the lines are straight. Then you can use the URL of the page (it'll change as you tweak the sliders) to open to that exact setting again.

### Processing lots of images

If you drag a different image onto the canvas, it'll save the previous one (distorted) below for download. So you can drag a set of these onto the page one by one, and download them later. But be careful; sometimes large images can make the page crash, so save your images periodically so you don't lose them!

### Presets

The settings for a given camera and lens stay the same, so we've collected some for common cameras used at Public Lab here:

- Mobius Action Cam (default lens): [https://jywarren.github.io/fisheyegl/example/#a=1.048&b=1.059&Fx=0.09&Fy=0.22&scale=1.087&x=1&y=1](https://jywarren.github.io/fisheyegl/example/#a=1.048&b=1.059&Fx=0.09&Fy=0.22&scale=1.087&x=1&y=1)
- [GoPro alternatives](https://publiclab.org/questions/warren/05-20-2017/cheap-lightweight-gopro-alternatives-for-aerial-mapping): (many are almost identical) - [https://jywarren.github.io/fisheyegl/example/#a=1&b=1&Fx=0.16&Fy=0.16&scale=1.087&x=1&y=1](https://jywarren.github.io/fisheyegl/example/#a=1&b=1&Fx=0.16&Fy=0.16&scale=1.087&x=1&y=1)

Please help submit more presets for different cameras!

### Get started

Here's the link to the online tool; please leave comments/suggestions below here, and help one another use and refine this technique!

[https://jywarren.github.io/fisheyegl/example/](https://jywarren.github.io/fisheyegl/example/)

## Video

This got cut off at the first few seconds of audio, but is not a bad walkthrough of the process:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QDshMJjK6NM?list=PLtkXft9eBSzjOdlOlsWFZLzcQMiKj2uOl&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

### Help out with presets!

If you have a camera not on the presets list, please help out by:

1. Taking a picture of some kind of grid -- a chessboard, a tile floor or brick wall.
2. Uploading the original photo in full (in the comments below).
3. Upload the image and try correcting it using FisheyeGL: https://jywarren.github.io/fisheyegl/example/
4. Download the corrected version and upload it here alongside the original
5. Copy in the URL (which now has the corrections you've made in it) into the comment too for others to use.

Thanks!