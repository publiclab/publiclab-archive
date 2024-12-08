---
title: (GSOC 2014 Proposal) Porting ImageDistortion class in the Mapknitter interface to Leaflet.js
tagnames: mapknitter, gsoc, gsoc-2014, first-time-poster
author: anishshah101
path: /notes/anishshah101/03-08-2014/gsoc-2014-proposal-porting-imagedistortion-class-in-the-mapknitter-interface-to-leaflet-js.md
nid: 10141
uid: 421046

---

# (GSOC 2014 Proposal) Porting ImageDistortion class in the Mapknitter interface to Leaflet.js

by [anishshah101](../profile/anishshah101) March 08, 2014 09:31

March 08, 2014 09:31 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [first-time-poster](../tag/first-time-poster)

_**Name**_: Anish Shah

_**Affiliation**_: BITS Pilani (B.E.(Hons) Civil Engineering)

_**Location**_: India

_**Email**_: [anishshah101@gmail.com](mailto:anishshah101@gmail.com)

_**Phone**:_ +91 7877799788

_**Project(s) you're working on or want to**_: MapKnitter

_**Project title**_: Implementing Rubbersheeting in Leaflet.js as a first step to porting the Mapknitter interface to Leaflet.

###What I want to do

_**Abstract**_: MapKnitter tool is used for 'combining a series of these aerial images into a flat, projected map ' which can be browsed in the same way as Google Maps. Currently Mapknitter is built on old and legacy code and uses Open Layers for it's editing interface. Open Layers is a complex library following strict design principles so it requires time to master and develop features on it, also it is a heavy library which takes time to load on smartphones and hand held devices. I want to port the Mapknitter editing interface from Open Layers to Leaflet and make the start by porting a few important features initially. Leaflet.js is a light weight library (33 KB) in which adding and editing features is easy because of it's object model. 

_**The broader goal my project is working towards**_: Creating a simpler user friendly tool for making maps.

_**The specific need my project fulfills**_: My project aims to make the development and use of Mapknitter tool easy, thus making the development processes (rubbersheeting maps) quick.

_**How will my project meet this need**_: The porting of the interface to Leaflet will help in quicker feature addition and accelerated development and debugging. It will also significantly reduce the time it currently takes to load maps. This will help the users to use the tool through hand held devices and smart-phones. Also, the look and feel of Leaflet is more modern which will make the interface more intuitive and easy to use. Broadly steps which will be followed to do this are:

1) Check the implementation of the Control_point.js, warper.js and image.js to examine the code which supports draggable points, polygonal bounds and image distortion as used in the present Mapknitter tool.

2) Identify algorithms for Distortion as present in:
https://github.com/jywarren/mapknitter/tree/master/public/cartagen/src/warper
and Matrix classes in the present tool from the code present in:
https://github.com/jywarren/mapknitter/blob/master/public/cartagen/lib/matrix.js

3) Emulate the above findings to extend the ImageOverlay class in Leaflet.js to support polygon bounds for images and build a distortion interface in it.
_(An alternate approach to this is the exact flipside where a similar solution might be possible by extending the vector polygon classes in Leaflet.js to support ImageOverlay instead of just color overlay. As of now I have discarded this because the distortions of vectors are scalable to any unit, a feature which is not possible with rasters. This can be tweaked and customized to limit the scale suitable for images so possibilities here can be explored.)_

4) Port the existing ImageDistortion class and Matrix class into the above coded Leaflet plugin as a first step to porting the entire Mapknitter editor to Leaflet.

###Timeline/milestones: 
Throughout the development process I will be recording the ongoing development on a blog (once a week), making it easier for the mentor to track my progress.

Pre-Summer Period (up to May 19): Get familiar with MapKnitter and the code base. Investigate and learn the required tools required for the project. Bond with community while identifying required resources for learning or help. Check the implementation of the ImageDistortion and Matrix class in the present tool.

May 19 - May 26: Creation of a new JS file where I will be building the code for imageDistortion as a Leaflet Plugin. This file will comprise all the code snippets which are to follow. This will start with the Creation of DOM elements for the HTML canvas element.

May 26 - June 2: Generation of Markers for Image vertices using Marker Icon in Leaflet.

June 2 - June 16: **(First challenging part)** Placing these markers and the image on the canvas, also these markers should be at appropriate vertices of the image. The scale of the image and it's position will depend on image dimensions, map dimensions and their aspect ratios.

June 16 - June 22: Setting up Listeners.

June 22 - July 20: **(The most important and challenging part)** Rendering the distorted image when the user is dragging the vertices inside the canvas.

July 20 - August 11: Porting the existing ImageDistortion and Matrix Class to the newly coded Leaflet plugin.

Upto August 21: Test the overall code, fix bugs. Properly document the code developed.

In case the above formed timeline works quicker than planned then I would want to work on:
a) Speed the process of distortion maybe by caching the distorted image once the user stops to distort it.
b) Building multi-touch events for touch screen devices.
This should make the current system of distortion more or less complete.

Another feature which really interests me is True warping, which is more advanced but I would want to work on it once simple distortion in complete.

###My attempt and results
**Ongoing involvement**: I have built the ImageDistortion functionality in Leaflet for affine transformations of images, the code for which can be viewed here: https://github.com/anishshah101/ImageDistortLeaflet . The live demo of this can be viewed at: http://128.199.208.55/ .The process of building this has helped me understand the direction to follow and the tools to use to prepare new features in Leaflet.
By the end of SOC we should have the imageDistortion functionality for non-affine transformations and Matrix class of Cartagen ported to Leaflet.js

_**Experience:**_

1) I have been a freelance web developer and designer for 3 years now. In the process I have helped various companies build websites, cell phone apps and  digital and print branding material. My portfolio website can be found here: http://pingly.in

I have started (along with a colleague) an open source project:

2) Breakdown Database Management Software for Maintenance Division of Manufacturing Plants (Built for Windows 7 Platform on wxPython and Python). The code can be viewed here: https://github.com/anishshah101/DBS

Also, I have modified some open source projects for private use in hackathons, which include:

3) Balloons.IO Web Chat Application (Built on Node.js and Express.js)

4) Real time twitter feed displaying application (Built on Node.js and uses Twitter API)

Besides these I have worked as the Tech Lead in a web based start-up

5) www.Buzzbox.pw - An anonymous posting forum on the web (Built on Python Django framework, HTML, CSS and Javascript)

I have also been an active tutor on Instaedu.com for 6 months where I help students with programming Languages such as Python and Javascript.

_**Teamwork:**_  I have worked in a team for the projects 2) and 5) mentioned above. One of the greatest learnings from working in a team has been to write properly designed and documented code so that it is reusable. Effective communication makes it easy to work or projects involving large code-bases. The presence of a team helps in in-house feedback and objective opinions which I think is necessary for any project.

_**Expertise**_: I have good experience with Javascript, Node.js and Python. I am also acquainted with the use of GIS and have quickly understood the code base of Leaflet.js so I think I can take this project up very well. Having helped many companies build their websites I now consider myself a professional in Web Development and UX/UI design. I think these experiences make me worthy of taking up a challenge like this project. 


###Questions and next steps

What resources I will need: 

1) _Algorithms which implement Image distortion in the current tool._

2) Active community support from people working on similar projects and critical feedback on my progress.


###Why I'm interested
I have always been a fan of revolutionary ideas and the Mapknitter project by Public Lab appears to me a big revolution in map building and navigation. The concept of building maps by rubbersheeting clicked photos via balloons and kites is extremely fascinating and I believe the scale of the project once the tool gets easier to use is huge, something I am eagerly looking forward to.

_**Audience**_: My audience for the project include developers building features for Mapknitter tool and communtiy people who click aerial photos and rubbersheet them into maps.

_**Context**_: I deeply believe that the Mapknitter project holds lot of promise for the future in areas such as map building and navigation. The initial setting up the tool is filled with challenges I would love to face in a language I love to code in (Javascript). Even after the SOC gets over, I would love to remain involved with the project and keep on adding features to make it the best Rubbersheeting tool on the web.

_**Commitment**_: I do not have any other major commitments for this summer. I can devote 40 hours a week for my GSOC project.__