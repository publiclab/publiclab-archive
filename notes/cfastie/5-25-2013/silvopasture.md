---
nid: 7915
title: Silvopasture
path: public/static/notes/cfastie/5-25-2013/silvopasture.md
uid: 554
tagnames: near-infrared-camera,kite-mapping,nrg,ndvi,vermont,infrared,new-hampshire,farmhack,imagej,agriculture,event,infragram,ifarm,infrablue,gigapan,ifarm2013
---

# Silvopasture

<p><em>Image above: New England cottontail habitat created by clearcutting forest along a stream. Native shrubs will be planted to form a wetland shrub thicket to encourage the rare rabbit.</p></em>

In February of 2013, 65 forested acres of Tuckaway Farm in New Hampshire were cleared or thinned. The removal of all trees was in areas of moist soil along streams to create habitat for the New England cottontail rabbit (<em>Sylvilagus transitionalis</em>) which has become rare as the eastern cottontail (<em>Sylvilagus floridanus</em>) has invaded its range. Native shrubs will be planted and encouraged in these areas. This will create a wetland shrub thicket which is the preferred habitat of the rare rabbit. 

The partial thinning of trees was to remove about 30% of the forest canopy to allow light to reach the forest floor and support herbaceous growth. Grasses and forbs such as orchard grass, fescue, and white clover will be seeded and eventually livestock will graze these areas. The hope is that the remaining trees will be more productive with less competition, warmer soils, and additional fertilizer from manure, and the land will also contribute to livestock production.

Aerial photos were taken during iFarm on May 18, 2013 with a dual camera visible/near-infrared KAP rig lofted by a Fled kite. Cameras were Canon Powershot A495s, one modified by replacing the infrared block filter with a Wratten 87 polyester filter.  Color channels from synchronous pairs of photos were combined to make false color infrared (NRG) and normalized difference vegetation index (NDVI) images.

The image below can be seen here: http://www.gigapan.com/gigapans/130722/
<iframe src="https://www.gigapan.com/gigapans/130722/snapshots/334455,334456,334458,334459,334460,334462,334463,334464/options/fullscreen/iframe/flash.html?height=450" frameborder="0" height="450" scrolling="no" width="100%"></iframe>

<em>An earlier air photo (Bing Maps, upper left) and three images from the May 18 kite flight. RGB: Normal color photo from the unmodified camera.  NRG: A near-infrared channel from the modified camera is displayed as red, red and green channels from the unmodified camera are displayed as green and blue, respectively. NDVI: Normalized difference vegetation index. For each pixel, NDVI=(NIR-blue)/(NIR+blue). (NIR is data from the modified near-infrared camera)</em>
<p></p>
Ned's ImageJ plugin was used to make the NRG and NDVI images. The options used were mostly standard, but I used the blue channel (channel 3) of the visible light photos instead of the red channel (channel 1) because it resulted in fewer anomalously high NDVI values in dark shadows. The color table used to color the NDVI values assigns a blue to all values below zero, so blue areas of the image should not include any live plants. Magenta is assigned to the highest NDVI values (~ 0.9 to 1.0) which should not include healthy plants but sometimes includes dark shadows (on plants or other surfaces). The visible and infrared bands used to make NDVI were "stretched" by assigning the value 0 or 255 to the darkest and brightest 1% of the pixels, respectively, and rescaling the values of the remaining pixels between 0 and 255. This tends to make all of the NDVI images more similar to each other so they stitch together into a map more seamlessly.

These are the parameters used:

Use backup registration method if primary fails? true

Select primary registration method: SIFT/Landmark correspondences

Select secondary registration method: SIFT/Landmark correspondences using last valid set of points

Select transformation type if using SIFT: Affine

Number of tries for SIFT to find correspondence points: 1

Method to improve SIFT point selection: none

Output image type: jpeg

Output NRG image? true

Clip images? true

Output clipped visible image? true

Output Color NDVI image? true

Minimum NDVI value for scaling color NDVI image: -1.0

Maximum NDVI value for scaling color NDVI image: 1.0

Output floating point NDVI image? true

Stretch the visible band before creating NDVI? true

Stretch the NIR band before creating NDVI? true

Saturation value for stretch: 2.0

Channel from visible image to use for Red band to create NDVI: 3

Channel from IR image to use for IR band to create NDVI: 1

Select output color table for color NDVI image: NDVIBlu2Mag.lut

Most of the visible light photos were stitched together in Microsoft ICE, but ICE would not stitch many of the NRG or NDVI images, so they were done by hand in Photoshop. In retrospect, it would have been better and easier to do all three maps by hand in Photoshop (or GIMP), because ICE does not impose any georeferencing control, and after the first set is aligned by hand over a base map, it is easy to place the other images over the first set. ICE did not stitch all the visible light photos included in the gigapan above, so much additional work in Photoshop was needed anyway.