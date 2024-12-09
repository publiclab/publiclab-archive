---
title: 'Timeline of a Public Labs map project'
tagnames: balloon-mapping, near-infrared-camera, kite-mapping, idealab
author: gonzoearth
path: /notes/gonzoearth/5-8-2012/timeline-public-labs-map-project.md
nid: 1926
uid: 12

---

![](https://publiclab.org/sites/default/files/70.jpg)

# Timeline of a Public Labs map project

by [gonzoearth](../profile/gonzoearth) May 08, 2012 17:28

May 08, 2012 17:28 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [idealab](../tag/idealab)

----

> cross-posted from [PBS's IdeaLab](http://www.pbs.org/idealab/2012/05/how-we-got-here-the-road-to-public-labs-map-project118.html). How We Got Here: The Road to Public Lab's Map Project

Last week, Public Laboratory [announced](http://www.pbs.org/idealab/2012/04/public-labs-community-created-maps-land-on-google-earth109.html) that public domain maps are now starting to show up on Google Earth and Google Maps. But how did the projects get there? Here's a timeline of a Public Laboratory map project.

MAKING A MAP
Public Laboratory projects take a [community-based approach](http://www.knightfoundation.org/blogs/knightblog/2012/4/18/first-aerial-maps-produced-citizens-featured-google-earth-and-google-maps/) to making maps that differs depending on where you are and the reason you want to create a map. People map areas for a number of reasons, including because there's a need to monitor an area of environmental concern, a dynamic event is happening that there's a desire to capture, or you cannot find adequate aerial image data. Before going out to map, preparing for fieldwork starts with the Public Lab [map tools page](http://publiclaboratory.org/tool/balloon-mapping), where you can discover what type of equipment to use and how to safely use it. Multiple research notes on how to do things such as [setting up a dual camera rig](http://publiclaboratory.org/notes/cfastie/2-22-2012/dual-camera-kap-rig) and [stabilizing the camera with a picavet](http://publiclaboratory.org/notes/mathew/2-5-2012/picavet-pet-rig) can help with specific problems, but there are also hundreds of people in the online [Public Lab community](http://publiclaboratory.org/user/register) of mapmakers, sharing tips and experiences on the site.

UPON RETURN
After the mapping flight, the map making begins with backing up the images and sorting through the set, making a subset for map production. Depending on the time in the air, there will be hundreds and sometimes thousands of individual images. Depending on the area of interest, you can hone in on which images will be used in creating the map. Assuming the flight was at a steady altitude, the images that you want to select are the sharpest ones that are vertically oriented. If you have many images for the same area, pick the best one, but also pick overlapping images so that there is plenty of overlap among the different images in the next step.

<img width="500px" src="http://www.pbs.org/idealab/assets_c/2012/04/mapmill-thumb-500x255-2471.jpg" />
<center><em>MapMill.org</em></center>

Images can be sorted locally or online. Public Laboratory created an online tool where a group can do collaborative selection. MapMill.org is a web-based image sorting and ranking tool where multiple users can sort through a large dataset simultaneously.

MAP PRODUCTION
With a smaller set of the best images on hand, the images can be dynamically placed on the map in a process [known as georectification](http://www.pbs.org/idealab/2012/01/public-lab-produces-wetlands-maps-from-balloon-and-kite-flights357.html). After all the images have been added to the map, the project is exported. The MapKnitter export tool does all of the geographic information systems crunching behind the scenes with the geospatial data abstraction library (gdal.org) and produces a GeoTIFF map file. The GeoTIFF format is a public domain metadata standard that embeds geographic information into the image TIFF file. At this point, the map is now in an interchangeable format that can be easily distributed.

<img width="500px" src="http://www.pbs.org/idealab/assets_c/2012/04/MapKnitter-thumb-500x343-2472.jpg" />
<center><em>MapKnitter</em></center>

PUBLIC LABORATORY MAP ARCHIVE
Public Lab hosts its own map data archive for storing and sharing finished map projects. Each map in the archive has a "map details page" that hosts details such as: title, date, place, location, resolution, field map maker, field notes, cartographer, ground images, oblique images from the flight, and comments from website users. The map participants choose whether to publish the map as Public Domain, Creative Commons Attribution ShareAlike, Creative Commons Attribution, or Creative Commons Attribution Non-Commercial.

<img width="500px" src="http://www.pbs.org/idealab/oakland.jpg" />
<center><em>Public Laboratory Occupy Oakland, November 2, 2011 -- General Strike map in Google Earth</em></center>

Maps are viewable on the archive itself, and you can subscribe to it as an RSS feed. However, it's also a place for distribution of the data. As we announced last week, Google Earth has started licensing our public domain maps. Google Earth plans to continue to publish public domain maps from the Public Lab Archive a few times a year.

It's quite exciting to see these Public Labs maps go online with a ubiquitous data provider such as Google. We look forward to more people participating in this activity, and more publishing of public domain data.

<img width="500px" src="http://www.pbs.org/idealab/assets_c/2012/04/rifle-thumb-500x366-2473.jpg" />
<center><em>Google published some of the maps to Google Maps as well as Google Earth, which makes those maps widely accessible in the web browser and on mobile applications that use Google Maps.</em></center>