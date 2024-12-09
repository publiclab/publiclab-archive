---
title: 'Infrablue Kickstarter Update 3'
tagnames: nrg, ndvi, infrared, gigapan
author: cfastie
path: /wiki/infrablue-kickstarter-update-3.md
nid: 7981
uid: 554

---

# Infrablue Kickstarter Update 3

by [cfastie](../profile/cfastie)

May 30, 2013 19:37 | Tags: [nrg](../tag/nrg), [ndvi](../tag/ndvi), [infrared](../tag/infrared), [gigapan](../tag/gigapan)

----

A couple dozen members of the Public Lab and FarmHack communities got together at Tuckaway Farm in New Hampshire on May 18 to share ideas, test equipment, and capture aerial images of the farm. There were at least four different prototypes of Infragram cameras tested, including my Canon Powershot A810. I had opened up this little camera and removed the IR block filter to make it record near infrared light, then covered the front of the lens with a piece of infrablue filter (Rosco #2007 Blue polyester). This filter looks blue because it blocks most red light but passes blue and green.  It also passes near infrared which is recorded in the camera's red channel. The infrablue multispectral images below use the red channel in each photo as infrared and combine it in two ways with visible light to highlight vegetation.

![wheatInf_RGB2k.jpg](https://i.publiclab.org/system/images/photos/000/000/430/large/wheatInf_RGB2k.jpg)
<p></p><em> Aerial photos from two kite flights over a young wheat field. Background image is the raw photo from an Infragram prototype. Inset is several photos from a lower elevation flight with a dual camera visible/infrared rig. The higher resolution inset photos are from the unmodified camera of the pair.</em>

The subject of this kite aerial photography flight was a field planted in seven varieties of wheat. I made two flights, one with the Infragram prototype capturing an image straight down every 10 seconds, and a later flight with a two camera rig capturing synchronous vertical photos every 10 seconds. One of the cameras in the two camera rig had been modified to record only near infrared light, and the other was unmodified. By aligning the synchronous pairs of photos, infrared and visible light can be combined into multispectral images, but this method is trickier than the infrablue method because two cameras must fly, shutters must be synchronized, and photos must be aligned perfectly. I made the same type of multispectral images with the photos from the one-camera and two-camera flights.

![wheatduaNDVINRG.jpg](https://i.publiclab.org/system/images/photos/000/000/433/large/wheatduaNDVINRG.jpg)
<p></p><em>Multispectral images made with a two-camera visible/infrared kite photography rig. The false color infrared image (NRG) displays the data from an infrared camera as red, and data from a normal camera in the green and blue channels. The normalized difference vegetation index (NDVI) image displays a computed index which uses infrared data from one camera and blue light data from the other.</em>

The false color infrared images display the near infrared light as red. Traditional false color images (e.g., from satellites) also display the red light captured by the camera as green, and green light as blue (hence the name NRG). This is how I made the NRG images from the two camera flight. A similar image can be made from the infrablue photos, but those photos have no channel which recorded red light. So instead these display near infrared as red, blue as green, and green as blue (so they could be called NBG). 

![wheatRoscoNBGNDVI.jpg](https://i.publiclab.org/system/images/photos/000/000/434/large/wheatRoscoNBGNDVI.jpg)
<p></p><em>Multispectral images from an Infragram prototype. A single camera captured photos with infrared and visible light in separate channels. The false color infrared image displays infrared light as red. The NDVI image computes an index for each pixel which highlights the difference between light that plants reflect (near infrared) and light they absorb for photosynthesis (in this case, blue).</em>

Traditional NDVI images (normalized difference vegetation index) are made by computing the difference for each pixel between the amount of infrared light and the amount of red light. This highlights plant health because healthy plants reflect most of the near infrared light but absorb much of the red light to power photosynthesis. The higher the NDVI value (scaled from -1 to +1), the more photosynthesis is probably happening there. Plants also use blue light for photosynthesis, so the infrablue version of NDVI typically compares infrared with blue (there is no red light channel in infrablue photos). When computing NDVI from pairs of photos from the two camera system, either red or blue can be used, and I used blue in the NDVI images here.

This is one of the first direct comparisons I have done between the one- and two camera systems. The NDVI images from the two different systems do not look the same.  Several things probably contribute to this. The two camera flight was lower to the ground so those photos were higher resolution and there is much more detail in those NDVI images. The two camera flight was later in the afternoon in bright sun and everything was casting long shadows which often produce unexpected NDVI values. So the trees, the people, and even some wheat plants have crisp, dark shadows. Although the same color scheme was applied to both NDVI images, the two-camera images have many pixels at the red and magenta end of the scale, while there are very few red or magenta pixels in the wheat field or surrounding grass in the infrablue NDVI image. So the range of NDVI values computed for the infrablue images is lower -- shifted toward the blue end of the color scale. The relative differences among soil, sparse plants, and dense foliage are revealed in both types of image, so both have useful biological meaning. It is just the absolute values for NDVI which differ between the two approaches.  I hope to do some additional comparisons to learn more about why this happens.

A full resolution version of all the images here can be explored in one nice poster at gigapan: http://gigapan.com/gigapans/131049

<iframe src="https://www.gigapan.com/gigapans/131049/options/fullscreen/iframe/flash.html?height=450" frameborder="0" height="450" scrolling="no" width="100%"></iframe>

