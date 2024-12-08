---
title: Pine Hill
tagnames: near-infrared-camera, nrg, vermont, infrared, conversion, filter, infragram, list:plots-infrared, infrablue, bg3, wratten25a, scattering, nbn, nnr, super-red, response:9769, gigapan
author: cfastie
path: /notes/cfastie/11-17-2013/pine-hill.md
nid: 9792
uid: 554

---

# Pine Hill

by [cfastie](../profile/cfastie) November 17, 2013 02:01

November 17, 2013 02:01 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [vermont](../tag/vermont), [infrared](../tag/infrared), [conversion](../tag/conversion), [filter](../tag/filter), [infragram](../tag/infragram), [list:plots-infrared](../tag/list:plots-infrared), [infrablue](../tag/infrablue), [bg3](../tag/bg3), [wratten25a](../tag/wratten25a), [scattering](../tag/scattering), [nbn](../tag/nbn), [nnr](../tag/nnr), [super-red](../tag/super-red), [response:9769](../tag/response:9769), [gigapan](../tag/gigapan)

*Image above: A Gigapan Epic 100 imager with Powershot A2200 modified with a Wratten 25A red filter. This robotic device automatically shoots a grid of photos which can be stitched together into a seamless, high resolution panorama.*  
  
Pine Hill is a knoll near my house covered with a forest of oaks. Maybe things were different when it was named.  I had hoped to shoot a gigapan from there looking west toward the Adirondacks, but the southerly view is the only one not blocked by tree tops. So I made two gigapans looking south into the sun toward Mount Moosalamoo. One panorama was stitched from 161 photos taken by a Canon Powershot A2200 with a Wratten 25A filter replacing the IR block filter. The Gigapan imager shot the photos in a 7 row by 23 column grid with photos overlapping by about 40%. The lens was zoomed all the way in to an equivalent of 112 mm. 

[![PineHill-276-42.jpg](https://i.publiclab.org/system/images/photos/000/002/251/medium/PineHill-276-42.jpg)](https://i.publiclab.org/system/images/photos/000/002/251/original/PineHill-276-42.jpg)  
*The Gigapan imager in the middle of a 7 row by 23 column capture. The A2200 has a Wratten 25A filter.*  
  
I then replaced the A2200 with an unmodified Powershot S95 and took a 6 row by 16 column panorama of the same scene. The S95 lens only zooms to 105 mm, and I did not overlap each photo as much, so fewer photos were needed. (The extra overlap on the A2200 grid was to compensate for the [poor focus at the edges of the photos caused by the filter replacement](http://publiclab.org/notes/cfastie/11-07-2013/focus-on-filters).  With enough overlap, only the centers of the photos are used in the stitched panorama.) The panoramas were stitched with Gigapan Stitch.
  
I also took some handheld shots of parts of the scene with another A2200 modified with a glass Schott BG3 blue filter.  

When navigating the embedded gigapans below, if the mouse scroll wheel behaves badly, use the + and - keys to zoom in and out.

<iframe src="https://www.gigapan.com/gigapans/144702/options/nosnapshots,fullscreen/iframe/flash.html?height=400" frameborder="0" height="430" scrolling="no" width="100%"></iframe>  
*Above: True color gigapan stitched from 96 10 Mp photos taken by a Powershot S95. See it here at gigapan.com: <http://www.gigapan.com/gigapans/144702/>*  
  
<iframe src="https://www.gigapan.com/gigapans/144744/options/nosnapshots,fullscreen/iframe/flash.html?height=400" frameborder="0" height="430" scrolling="no" width="100%"></iframe>  
*Above: Gigapan from 161 14 megapixel photos from a Powershot A2200 modified with a Wratten 25A red filter. The image size is 688 megapixels. The A2200 was custom white balanced while pointing at a piece of bright red origami paper in direct but hazy sunlight. See it here at gigapan.com: <http://www.gigapan.com/gigapans/144744/>*  
  
I output a half resolution version of the Wratten 25A panorama and in Photoshop swapped the red and blue channels to make a false color infrared image. This displays NIR as both red and green, and displays the red light as blue ([so instead of RGB it is NNR](http://publiclab.org/notes/cfastie/11-12-2013/red-filter-rising)). This was then uploaded to gigapan.com.  
  
<iframe src="https://www.gigapan.com/gigapans/144700/options/nosnapshots,fullscreen/iframe/flash.html?height=400" frameborder="0" height="430" scrolling="no" width="100%"></iframe>  
*Above: False color infrared gigapan made by swapping the red and blue color channels of a half resolution version of the Wratten 25A panorama. See it here at gigapan.com: <http://www.gigapan.com/gigapans/144700/>*  
  
Using Ned's Fiji plugin, I produced an NDVI image from the half resolution 26118 x 6586 pixel (172 megapixels, 248 MB) tiff file of the Wratten 25A panorama image. This is the largest image I have processed in Fiji and it did not complain a bit. This is good news for those wanting to make large maps from Infragram photos and then process them into NDVI. 
  
<iframe src="https://www.gigapan.com/gigapans/144709/options/nosnapshots,fullscreen/iframe/flash.html?height=400" frameborder="0" height="430" scrolling="no" width="100%"></iframe>  
*Above: NDVI image of the Pine Hill scene produced in Fiji.  Both histograms were stretched (parameter=2). See it here at gigapan.com: <http://www.gigapan.com/gigapans/144709/>*  
  
To compare these results with the photos I took with the A2200 with BG3 filter, I made a poster gigapan of part of the scene taken with all three cameras and processed various ways.  
  
<iframe src="https://www.gigapan.com/gigapans/144753/snapshots/366339,366338,366337,366336,366335/options/fullscreen,showcaptions/iframe/flash.html?height=400" frameborder="0" height="530" scrolling="no" width="100%"></iframe>  
*Above: Details from all cameras. Each of these details includes about eight photos stitched together. See it here at gigapan.com: <http://www.gigapan.com/gigapans/144753/>*  
  
Notes on the "Detail" panorama above:

- I included the isolated blue channel of the unmodified S95 photo to highlight the distant haze. The atmospheric scattering that causes this is strongest with blue light.
- Because the Wratten 25A photos include no blue and almost no green light, scattering is reduced (red and NIR light are not scattered as much). The BG3 photos include a lot of blue light in the blue channel so there is more scattering. Some of the difference between the Wratten 25A and BG3 photos is due to exposure -- the BG3 photos were a little over exposed.
- The NIR channel in the Wratten 25A photos is not contaminated with visible light, but the NIR channel in the BG3 photos includes some red. The NIR channel in the Wratten 25A photos had greater dynamic range (more gray tones between black and white), but the exposure difference between the two makes comparison difficult.
- The false color infrared image from the Wratten 25A photos has more contrast than the BG3 image. Sometimes these false color IR images made with BG3 photos just look like a monochrome NIR image that has been tinted pink. That is the case here. The NIR channel in the Wratten 25A version, which is displayed here as red, is pure NIR. That may be the reason that these false color IR images look better when made from red filter rather than blue filter cameras.
- The NDVI images from both cameras have very similar information in them. It's hard to know which one is more biologically accurate, but the Wratten 25A version seems to do a better job discriminating between green foliage and other things. Both were made in Fiji after stretching the histograms (parameter=2). The BG3 NDVI image had 35 subtracted from the DNs to produce an image more similar to the Wratten 25A image.

  
**To see an awesome side-by-side scrollable zoomable synchronized comparison of the normal color gigapan and the false color IR version, [go to Jason Buchheim's amazing 3DPan.org](http://www.3dpan.org/3d/144702-144700-225.381-225.381). Then click "change view." Use the IR image to navigate.**  

Is there a barnstar for the most pixels in one research note?


