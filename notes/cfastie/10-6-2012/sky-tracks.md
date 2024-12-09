---
title: Sky Tracks
tagnames: kite-mapping, vermont, mapknitter, leaffest, gps
author: cfastie
path: /notes/cfastie/10-6-2012/sky-tracks.md
nid: 4240
uid: 554

---

![](https://publiclab.org/sites/default/files/BreadLoaf-20121005-1631-2.jpg)

# Sky Tracks

by [cfastie](../profile/cfastie) October 06, 2012 20:39

October 06, 2012 20:39 | Tags: [kite-mapping](../tag/kite-mapping), [vermont](../tag/vermont), [mapknitter](../tag/mapknitter), [leaffest](../tag/leaffest), [gps](../tag/gps)

----

<em>A kite photo from yesterday at the site of the LEAFFEST flight featured below.  The colors were at their peak.</em>

Yesterday Don Blair sent me the data files from his Garmin Forerunner 305 GPS watch that flew with the camera on two kite flights at LEAFFEST two weeks ago.  The data include altitude and describe the three dimensional path the KAP rig followed during each flight.  The video below features a 40 minute flight under a Levitation delta kite at the Bread Loaf Campus of Middlebury College.  The video was recorded by the Movie Maker tool in Google Earth Pro as I flew around the scene.  Below the YouTube embed are details of the steps involved.

Update: A new, clearer version of the video is below. And because Jeff made a polite but nonetheless devastating remark about the sound track, it has been substantially upgraded.

<iframe width="540" height="360" src="https://www.youtube.com/embed/aRHqKhuDnWY?rel=0" frameborder="0" allowfullscreen></iframe>

* GPS data:
Don sent me .gmn files from the Garmin Forerunner watch and also .gpx files.  I am not sure how these files were produced, but they seem to have a data point every 1 to 6 seconds during the flight.  I guess it was saving every time the watch moved a certain distance. I tried to open the files to crop the ends off the tracks, but Garmin’s Mapsource program would not open them, and neither would GPSBabel (but that could have been user ignorance).   Google Earth opened the gpx file and saved the data in a KML file.  Mapsource would not open that either, so I used [GPS Utility]( http://www.gpsu.co.uk/) to convert it to a .gpx file that Mapsource liked. GPS Utility could not load the entire file and cropped 600 data points off the end.  These happened to be the exact 600 points that I wanted to delete anyway. Bizarre. 

* MapKnitter overlay:
Sixteen of the more or less vertical photos from the KAP flight had been aligned in MapKnitter and “exported” to various file types.  I downloaded the 547 MB GeoTIFF.  Google Earth will not open GeoTiffs, but Google Earth Pro will.  Lucky me.  This one was larger than Google Earth Pro’s limit, but it downsampled the file for me.  It also offered the option of making a “superoverlay,” but I didn’t deserve such special treatment. The GeoTIFF was automatically georeferenced and draped over the DEM surface.  Even after downsampling, it still looked good. If you don't have Google Earth Pro, you can add the regular jpg from MapKnitter and position it manually using the free Google Earth. It will look pretty much the same.

* Flying around:
The recorded flying trip around the 3D GPS track was done in two parts. In Google Earth I made a bunch of placemarks with the exact view “snapshotted,” but without an icon or label.  By clicking on these in sequence, the “point of view” flew around and looked at whatever I wanted it too. I also made a path encircling the site at a constant altitude. With that path selected, I clicked play and the “point of view” travelled along the path.  Here is the trick:  If you click and hold the cursor off to the side as you are flying along a path, the “point of view” looks over at the cursor instead of straight ahead.  It takes some practice to get what you want, but its lots of fun. I recorded the path flight as a tour so I could play that tour on cue.

* Recording a movie:
Google Earth will not record a video of your flying tours, but Google Earth Pro will. Lucky me.  With my recorded path tour and all the placemarks ready, I started Movie Maker.  I saved it as the highest quality WMV (Windows Media Video, on Macs it’s all QT). I flew live to the placemarks and tour, and turned on the GeoTIFF and GPS track on cue. If you don't have Google Earth Pro, you can use [free screen capture software](http://www.microsoft.com/expression/products/Encoder4_Overview.aspx) to record a video of what is happening on your monitor.  

* Producing the video:
I imported the WMV file into Adobe Premiere.  The main addition to the recorded tour was four photos taken by the kite-borne camera.  These can be displayed in Google Earth as the movie is being recorded, but “entering” and “exiting” a photo is not done smoothly in Google Earth. So I added the photos in Premiere.  Much nicer.  

The next step is to incorporate the temperature, barometric pressure, and accelerometer data that were also recorded on the KAP rig during the flight.  So I am hoping to see that 3D GPS track get very colorful.

Update: You can download the Google Earth kml file which includes everything I used to output the Movie Maker file here: http://fastie.net/wp-content/uploads/2012/10/LEAFFESTBreadLoaf.kmz. It has the GeoTIFF in it, so it is large (55 MB).