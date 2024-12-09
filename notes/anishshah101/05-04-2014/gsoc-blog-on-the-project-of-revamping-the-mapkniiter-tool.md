---
title: 'GSoC blog on the project of revamping the Mapkniiter tool.'
tagnames: mapknitter, gsoc, leaflet, developers, code, gsoc-2014
author: anishshah101
path: /notes/anishshah101/05-04-2014/gsoc-blog-on-the-project-of-revamping-the-mapkniiter-tool.md
nid: 10410
uid: 421046

---

# GSoC blog on the project of revamping the Mapkniiter tool.

by [anishshah101](../profile/anishshah101) May 04, 2014 06:26

May 04, 2014 06:26 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [leaflet](../tag/leaflet), [developers](../tag/developers), [code](../tag/code), [gsoc-2014](../tag/gsoc-2014)

----

Hi!

I am Anish Shah, a 3rd year, Engineering student at BITS Pilani, India. I love to spend time on digital designing, web programming, discussions on start-ups and that pretty much sums up what I do besides my academics. I recently got selected in Google Summer of Code 2014 (GSoC) at The Public Laboratory. This post and the series of posts coming up will be about my SoC experience and the progress on my project.

**About my project**

My project is: “Implementing rubbersheeting in Leaflet.js for Mapknitter tool.” MapKnitter is a tool used for ‘combining a series of these aerial images into a flat, projected map ‘ which can be browsed in the same way as Google Maps. My project aims to make the development of Mapknitter easy and make the creation of maps user-friendly. This will be done by porting the existing Mapknitter interface from legacy OpenLayers framework to a fresher and lighter Leaflet.js framework. You can read more about the project here.

**Community Bonding time**

Before the actual SoC timeline starts from 19th May, 2014, I have tried to acquaint myself with the way Mapknitter works, the libraries it is dependent on and it’s ease of use for the end user. People at Public Lab have been terrific in helping me try to understand the tool and this has resulted in some excellent discussions about how the tool can be improved and the endless possibilities it holds.

An important aspect of the project is to build the image distortion interface as a Leaflet.js plugin. I feel this is filled with challenges and will be achieved by striking a chord between mathematics and code. I tried a simpler demo of image distortion in Leaflet just for affine transformations and it helped me get a feel of how things can be achieved.

Some important resources which have been helpful are:

1)    http://leafletjs.com/reference.html
2)    http://robinlovelace.net/software/2014/03/05/webmap-test.html
3)    http://tulrich.com/geekstuff/canvas/perspective.html

I am in the process of understanding the Cartagen framework and the warper and matrix classes being used in Mapknitter and I am trying to make a static map display page of an existing Mapknitter map using Leaflet. The next post would be my findings on them.

Link to original article is [here](https://medium.com/p/c0830fc7499).