---
title: "Mapknitter Annotations using Fabric.js (GSOC 2014 Proposal)"

tagnames: 'mapknitter, gsoc, annotation, gsoc-2014, map-annotations, first-time-poster'
author: justinmanley
path: /notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal.md
nid: 10198
uid: 421556

---

# Mapknitter Annotations using Fabric.js (GSOC 2014 Proposal)

by [justinmanley](../../../profile/justinmanley) | March 18, 2014 10:12

March 18, 2014 10:12 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [annotation](../tag/annotation), [gsoc-2014](../tag/gsoc-2014), [map-annotations](../tag/map-annotations), [first-time-poster](../tag/first-time-poster)

----

##MapKnitter Annotations (GSOC 2014 Proposal)##

**Name:** Justin Manley

**Affiliation:** University of Chicago/ B.S. in Mathematics (third-year)

**Location:** Chicago, IL

**Email:** manleyjster@gmail.com

**Phone:** see email

**Project I want to work on:** MapKnitter

**Project title:** Add rich, narrative annotation functionality to Mapknitter using &lt;canvas&gt; elements and Fabric.js. 

###What the MapKnitter community needs###

Since 2012, members of the MapKnitter community have [expressed a desire](http://publiclab.org/notes/warren/5-15-2012/annotated-maps-roundup) for an annotation tool built into the MapKnitter interface that would allow users building maps to add notes, arrows, drawings, and rich media content to maps in order to 

* Convey the purpose of their map
* More effectively use their map as evidence to create an argument or tell a story

This desire was echoed again by [the latest brainstorming session in 2013](http://publiclab.org/notes/shannon/1-9-2013/map-annotation-brainstorming-notes) and most recently in an [excellent post](http://publiclab.org/notes/mathew/03-14-2014/mapknitter-annotations-gsoc) by @michael.  As @michael notes, [work has begun](https://github.com/jywarren/mapknitter/commits/master/public/javascripts/annotation.js) on an annotation tool for MapKnitter.  However, this annotation toolkit only supports pop-up bubble notes attached to markers on the map.  As @michael notes, both historically, and currently, people have annotated maps in a much richer and more immersive way.  My project aims to enable rich annotations that are fully integrated into MapKnitter maps, following [this GSoC project idea](http://publiclab.org/wiki/gsoc-ideas#Add+an+annotations+layer+to+Mapknitter).

###What I want to do###

The goal of my project is to create a Leaflet plugin using HTML &lt;canvas&gt; elements along with Fabric.js to allow users to annotate Leaflet maps, and then to integrate this plugin into MapKnitter.

####Specific project goals####

1. Integrate Fabric.js with Leaflet so that canvas and map can function separately, even as each canvas element is linked to a specific coordinate on the map.  This will allow users to write and draw directly on the map.
2. Allow users to define a sequence of annotations (canvas elements).  Combined with simple transitions (i.e. panning the map between annotations), this will allow users to construct narratives out of their annotations, which is something that many requests have been aimed at.
3. Integrate annotation feature into the MapKnitter.  This will include:
    * Integrating annotation functionality into MapKnitter UI.  This will include usability testing.
    * Integrating annotations into MapKnitter database so that they can be saved along with user-created maps.
4. Improve the narrative potential of maps by allowing users to attach an audio clip (either an upload from their computer or a link to SoundCloud) to a map, and then to link points in the audio to annotations on the map.

####Stretch goals####

I will attempt to implement these if I finish the previous primary goals early.

1.  Add rich media annotations, including attaching YouTube videos, audio from SoundCloud, photos, and file attachments.  The variety of file types that it would be feasible to support would depend on the existing structure of the database.
3. Link commenting into the annotation system so that users can comment on each annotation.

####Tools####

It makes sense to use HTML &lt;canvas&gt; elements because these, along with several Javascript libraries, already support many of the annotation functionalities that we are looking for (albeit in a non-geographic context).  [Fabric.js](http://fabricjs.com/), [EaselJS](http://www.createjs.com/#!/EaselJS), and [Paper.js](http://paperjs.org/) are a few of the most popular.  I chose to go with Fabric.js (although I'm open to other suggestions) because it is well-documented and seemed to have the best support for the kind of interactivity that we are looking for.

[Leaflet.CanvasLayer](https://github.com/CartoDB/Leaflet.CanvasLayer) is a plugin from CartoDB which extends Leaflet's native L.TileLayer.Canvas functionality by providing a canvas covering the entire map, rather than an individual canvas for each tile.  I would use this as the canvas for Fabric.js. 

####Timeline/Milestones####

The University of Chicago, along with a few other U.S. schools - i.e. Stanford, Northwestern, Dartmouth - is on a quarter system, which means I'm not done with school until June 14, 2014.  This means that I would need to start my project a bit later than other GSoC participants.  However, if permitted, I could work until mid-September, since my fall quarter would not begin until September 29, 2014.  The timeline below is scheduled according to that ideal setup.

**May 19 - June 23 (pre-summer period)**
Read Fabric.js, Leaflet.js and Mapknitter documentation.  Get to know my mentors and the community members most invested in this project.

**June 23**
Begin coding Leaflet.js plugin.

**July 4 (End of Week 2)**
Complete Leaflet.js plugin, with key methods `Leaflet.Annotate.text()`, `Leaflet.Annotate.arrow()`, `Leaflet.Annotate.shape()` and `Leaflet.Annotate.narrative()` (essentially an array of text, arrow, or shape types).

**July 7 - July 11 (Week 3)**
Develop plan for storing the annotations to the database.  Could use `Fabric.Canvas.toSVG()` or `Fabric.Canvas.toObject()`, depending on whether JSON or SVG output is preferred.  Either method will have to be extended to include the geographic data.

**July 7 - August 8 (Week 3 - Week 7)** 
Integrate Leaflet.js plugin with MapKnitter.  Integrate with MapKnitter UI and database system.

**August 8 - August 25**
Add narrative functionality/Soundcloud integration.

**August 25 - September 5**
Run usability testing/focus group with ~20 volunteer MapKnitter community members in order to ensure that the annotation UI is intuitive and useful.  Modify UI based on feedback.

**September 5 - September 12**
Continue to develop and modify UI based on feedback from usability testing.

**Up to September 22**
Complete tests and write up documentation for added features.

**September 22**
Wrap up completed project.  Revel in the awesome power of the new features!

Ultimately, the goal of this project is to make people at the grassroots level better able to communicate their concerns and their stories using MapKnitter.

####Support####

I will especially need the support and cooperation of the MapKnitter community when conducting usability testing, as I will depend on people being willing to volunteer some of their time to experiment with the beta UI and give constructive feedback.

####About me####

**Experience:**

I recently completed a major project building a [Javascript framework for administering geographic/spatial surveys](https://github.com/manleyjster/dowsing-js) using the Google Maps API.  Some details:
* Approx. 3000 lines of code (mostly in [core.js](https://github.com/manleyjster/dowsing-js/blob/master/core.js).
* Few dependencies, not even jQuery
* Meant to provide a complete framework for users so that users need only input static HTML content, not write Javascript 

I also built a [survey application for The University of Chicago]() using this framework, which we rolled out to 5000 undergraduates.
* From this project, as well as developing the framework, I have experience working with a large maps API and with addressing the UI challenges peculiar to maps.

I have approx. 1 year of experience coding with Javascript and 3 years of experience with Python, Haskell, and PHP.  Check out some of my other projects on Github at [https://github.com/manleyjster](https://github.com/manleyjster?tab=repositories).

**Interest**

I am interested in architecture and the built environment, and my interest in mapping comes out of this.  Maps of all sorts are critical tools for architects as well as for planners making decisions that will shape the future of cities.  Maps are also key instruments that citizens can use against architects and planners to demonstrate when proposed projects are destructive or otherwise problematic.  The survey framework I developed at The University of Chicago (described above) is an example of this interest in action.  It was used by the University of Chicago planning department to guide campus planning decisions.

I am also interested in UI/UX design, and I explored this as well with the survey framework I developed.

**Audience**

This feature is intended to make it easy for lay-users to create rich maps that will present a complete narrative.

**Context**

I'm very interested in UI/UX design and in the open maps/map technology community.  I'm interested in working in the map technology community after I graduate, so this project relates strongly to my personal interests as well as my long-term career goals.

**Commitment**

I have no other commitment this summer, and would be able to work 40 hours/week on this project.  As I mentioned above, The University of Chicago is on a quarter system, which means that I am done with school on June 14, 2014 and begin again on September 29, 2014.  Ideally, I would be able to start GSoC late and end late to accommodate my schoolwork and final exams.  I would work for the same amount of time as all other GSoC participants, but on a slightly different schedule.  I am currently checking with the GSoC organizers to see if this would work.

If this is not an option, then I am willing to take three classes (instead of my normal four) this quarter, which would allow me to commit more time to this project while in school and complete it according to the standard GSoC timeline. 

I am happy to have a conversation about the GSoC schedule/timeline and how my academic schedule relates to this if you have any questions!

####What I've done so far####
So far, I've mocked up a page combining Fabric.js with Leaflet.js, using Leaflet.CanvasLayer as the canvas for Fabric.js.  The [code is on Github](https://github.com/manleyjster/cartannotate).

As it stands, this code has a bunch of problems (obviously, since it's just smashing these two libraries together), the most serious of which are:

* Both the canvas and the map are trying to respond to `click` and `mousemove` events.  This leads to erratic behavior from canvas elements.  In order to solve this, I will most likely need to establish UI conventions for when a `click` is supposed to interact with the map, and when it is supposed to interact with the canvas.
* The canvas element is not linked to a geographic location on the map, it is located to a point within the browser window.

My first steps working on the Leaflet plugin for GSoC will be to approach these problems.

####Resources####
Some resources, both on Public Labs, and outside of it, that I have found useful in researching this project.

https://github.com/jywarren/plots/issues/131#issuecomment-5990177
https://github.com/jywarren/mapknitter/issues/89
https://github.com/makinacorpus/Leaflet.TextPath	
https://www.mapbox.com/osmdev/2012/11/20/getting-serious-about-svg/
http://www.axismaps.com/blog/2012/07/the-why-not-the-best-map-thematic-mapping-with-leaflet/
http://giscollective.org/slippy-map-projections-explained/
https://github.com/Leaflet/Leaflet.label

http://publiclab.org/notes/mathew/03-14-2014/mapknitter-annotations-gsoc
http://publiclab.org/notes/hagitkeysar/11-18-2013/where-do-the-maps-go
http://publiclab.org/notes/shannon/1-9-2013/map-annotation-brainstorming-notes
http://publiclab.org/notes/warren/5-15-2012/annotated-maps-roundup
https://github.com/jywarren/mapknitter/blob/master/app/controllers/annotation_controller.rb