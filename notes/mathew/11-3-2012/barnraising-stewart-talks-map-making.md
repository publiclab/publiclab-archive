---
title: Barnraising: Stewart talks map making
tagnames: balloon-mapping, kite-mapping, mapknitter, photoshop, balloon-mapping-kit, barnraising2012
author: mathew
path: /notes/mathew/11-3-2012/barnraising-stewart-talks-map-making.md
nid: 4760
uid: 4

---

# Barnraising: Stewart talks map making

by [mathew](../profile/mathew) November 03, 2012 15:30

November 03, 2012 15:30 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [mapknitter](../tag/mapknitter), [photoshop](../tag/photoshop), [balloon-mapping-kit](../tag/balloon-mapping-kit), [barnraising2012](../tag/barnraising2012)

Stewart: Mapmaking tips
##What a Flight looks like##
<a href="https://www.flickr.com/photos/gonzoearth/4897001954/" title="Ft. Morgan tracks in Google Earth by GonzoEarth, on Flickr"><img src="https://farm5.staticflickr.com/4077/4897001954_729db173b2_b.jpg" width="512" height="320" alt="Ft. Morgan tracks in Google Earth"></a>

<object type="application/x-shockwave-flash" width="400" height="250" data="https://www.flickr.com/apps/video/stewart.swf?v=109786" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"> <param name="flashvars" value="intl_lang=en-us&photo_secret=1f10d8e545&photo_id=4701646651"></param> <param name="movie" value="https://www.flickr.com/apps/video/stewart.swf?v=109786"></param> <param name="bgcolor" value="#000000"></param> <param name="allowFullScreen" value="true"></param><embed type="application/x-shockwave-flash" src="https://www.flickr.com/apps/video/stewart.swf?v=109786" bgcolor="#000000" allowfullscreen="true" flashvars="intl_lang=en-us&photo_secret=1f10d8e545&photo_id=4701646651" height="250" width="400"></embed></object>


<a href="https://www.flickr.com/photos/gonzoearth/5339315847/" title="June 21 Zones by GonzoEarth, on Flickr"><img src="https://farm6.staticflickr.com/5201/5339315847_427c3228a3_b.jpg" width="512" height="314" alt="June 21 Zones"></a>
the red zone is high res, low altitude, the rest of the map is high altitude, low res.

## Image Sorting Tips##
first thing I do is to look at the pictures chronologically through the flight and get a  perspective on how the flight went

use thumbnails in file browser, or preview in mac and image viewer on windows, the default picture browsing programs.  Stewart scrolls through the thumbnails add to a folder.

<iframe width="420" height="315" src="https://www.youtube.com/embed/zm8Y-CokOLY" frameborder="0" allowfullscreen></iframe>

Chris Fastie: sometimes you get dark images back, and you might want to pre-process them. 

Stewart: the better your small set, the easier the stitching, so spend some time on it.

What part of the flight do you want to grab images from? do you want up close images or big images from high altitude?  The easiest pictures are from high up.   grab the set you make will make them.

Jeff: I made a [prototype program that sorts by file size.](http://archive.publiclaboratory.org/aerial-image-analytics/dragdrop-js/)  Generally, images without blur and lots of ground features are big photos.  so I made this prototype image sorter that cuts out small photos.  Its often useful for building 3D models like in [Hyper3D](http://www.hypr3d.com/).  But look at this set-- the largest images are just gravel close to the ground. so you still have to do things manually, but this program might help.

##General Image Rectification Advice##
Don't build on your photos, one after the other, always go back to the base imagery and rectify one picture at a time, fitting to the background.  Otherwise, distortions in your images will be compounded as you build up.

When there are road lines and ground features, use those for the ground reference because they're at ground level and are nice, clean lines.  Don't use the roofs of buildings or tops of trees, because those will result in ground distortion.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/oakland/2011-11-02-california-oakland-occupy-10am/tms-10am/&lon=-122.2720204535&lat=37.80566667545&zoom=17"></iframe>

####Note on coastal region####
Sand is very hard to use, as the sand shifts.  look for stones, big trees, things that are there year after year.  If there are roads nearby, you can rectify to the road, and then use those images to rectify beach images.  It will introduce a little inaccuracy, but is the best you can do.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/gulf-coast/2011-02-25-louisiana-grandisle/tms/&lon=-90.0032202423&lat=29.2266240187&zoom=17"></iframe>

In open water, sometimes rocks and features underneath the water can help you place the images, often they're visible in satellite imagery, in this one, look at the rocks in the middle of the map, they wree the reference we had

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/gulf-coast/2010-05-09-louisiana-chandeleur/tms/&lon=-88.8661187322&lat=29.8029111678&zoom=17"></iframe>

Then there are big projects, like this Burning Man map with over 300 images.  In planning the flight, we flew back and forth like a lawnmower to build up th imagery.   And in this case, it was just desert, there was no ground control imagery.  Only with vector data of an engineering plan of the city could we rectify the imagery.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/black-rock-desert/2010-09-04-nevada-blackrockdesert-burningman/tms/&lon=-119.206886238&lat=40.782333846&zoom=17"></iframe>
Mathew: long-term do we to use GPS registered ground control points, because we are stitching maps on top of our own maps, because they're the best existing imagery?  

Chris: Maybe, but US surveys every 3 years, so we'll probably be alright


##Mapknitter##
Jeff: Steep hills are problems too, and Mapknitter can't do true fluid distortion-- you can only manipulate the corners- so extreme landscapes prevent you from getting accurate stitching, unless you go to a very high altitude with your balloon.  

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/rio/2011-08-25-brazil-rio-morro-dos-prazeres/tms/&lon=-43.20307731435&lat=-22.9347286996&zoom=17"></iframe>

If all you have is low-altitude images, you may want to use Photoshop.

Jeff: we limit resources in mapknitter in order not to overload our server.  The server has to render a full-resolution rectangle including all the imagery you have.  For example.  Drop an image in new york, and another in paris, and you'll have a 5cm resolution map of the north atlantic. We can't do that on our server.

Stewart: We now have this feature called "related maps" so that you can build several smaller mapknitter maps and relate and overlay them when you've put them together.

You can also grab a base map from the USGS National Map Viewer, and then use that imagery in Photoshop or GIMP or Mapknitter

##Photoshop & GDAL##
See Stewart's [earlier notes for more details.](/notes/gonzoearth/7-11-2012/notes-large-map-project)

The photoset from Dolores Park, San Francisco, was too big, too high res for mapknitter, had to be done in Photoshop.

<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=http://archive.publiclaboratory.org/san-francisco/2012-05-12-california-san-francisco-mission-dolores-park/tms/&lon=-122.426859118&lat=37.75975708525&zoom=17"></iframe>

Started with Google Earth, putting in Ground Control points in google earth, setting down known pins.  Export as KML, and get the Lat/Long coordinates.  Then enters these into GDAL.  This takes 1-2 hours and if you mess up, you have to do it over again. Its great that we have Mapknitter, because this is a pain.