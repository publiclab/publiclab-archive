---
nid: 10181
title: Mapknitter Annotations (GSOC)
path: public/static/notes/mathew/03-14-2014/mapknitter-annotations-gsoc.md
uid: 4
tagnames: balloon-mapping,mapknitter,archive,gsoc,annotation,map-annotations,qgis
---

# Mapknitter Annotations (GSOC)

###What I want to do
There is no single page to find all the work we've done thinking about map annotations. I want to summarize the map annotation needs of our community, work thus far, and provide examples.

###Work to Date
Public Lab has invested some development and discussion time in map annotation. [Here is our 2013 Winter Camp brainstorming session.](/notes/shannon/1-9-2013/map-annotation-brainstorming-notes)  And a [2012 brainstorm.](http://publiclab.org/notes/warren/5-15-2012/annotated-maps-roundup).

Work progressed on a Leaflet-based annotation system that is not currently running in Mapknitter. It can do polygons and Google-style pins. The [server code for the Annotation Controller is here.](https://github.com/jywarren/mapknitter/blob/master/app/controllers/annotation_controller.rb) and [the client-side Javascript is here.](https://github.com/jywarren/mapknitter/blob/master/public/javascripts/annotation.js).  Issues with that system are [discussed in Github here](https://github.com/jywarren/mapknitter/issues/89).

###Examples of Annotation
Currently, annotated maps using online interfaces are kind of crumby. It is easy to do something like this:

![Google Maps being stupid](https://i.publiclab.org/system/images/photos/000/003/252/original/Screen_Shot_2014-03-14_at_11.47.53_AM.png)

but lots of pins and labels turn into a completely unreadable mess.  Historically, people have written text at a variety of angles, at scale:

[![Stadtplan1895.png](https://i.publiclab.org/system/images/photos/000/003/253/medium/Stadtplan1895.png)

[BERLIN, F.A. Brockhaus´ Geographisch-artistische Anstalt, Leipzig 1895, Wikimedia Commons](https://en.wikipedia.org/wiki/File:Stadtplan1895.png)

Unfortunately, there is no way to place text on a map and lock it to a specific location, rotation, and scale, even though that is the most obvious and intuitive way to present information on a map.   So most Public Lab community members add text either in a pro GIS program, Adobe Suite, or, most likely, in Powerpoint. Powerpoint is actually awesome at this.  

![Eustatic's example](https://sphotos-a.xx.fbcdn.net/hphotos-prn1/539167_10151303967718612_1323166878_n.jpg)
From [Eustatic's note on annotations](http://publiclab.org/notes/eustatic/2-5-2013/bayou-manchac-map-sewerage-problem):

* Note that the text is not in bubbles, but generally a yellow, red, or orange color to contrast with the browns and greys of the forested landscape.

* Note the use of arrows and dots.

* Note the white underneath the text that is unclear.

* Whether or not this map was drawn in microsoft paint (or equiv. apple software) it is something that can be drawn in these widely available formats.

* This aesthetic of "text directly on image" is something that has been done since photography began.

[Eymund does a lot of Paint/Powerpont annotations as well](/notes/eymund-diegel/11-13-2012/grassroots-image-helps-influence-local-land-use-debate):
[![Cracks in pavement](//publiclab.org/sites/default/files/11_2012%207%20July_suspected_Marylander%20Burial%20Ground%20at%208th%20St%20and%203rd%20Avenue_a%20visible%20pattern%20of%20cracks%20in%20concrete%20may%20give%20clues%20to%20mass%20grave%20trenches%20facing%20the%20rising%20sun_IMG_6490%20w%20notes.jpg)

**Also take a look at [Hagit Kaysar's work using Adobe tools and wonderful writeup](/notes/hagitkeysar/11-18-2013/where-do-the-maps-go) and [Gina Wirth's work in ArcGIS](http://publiclab.org/notes/gwirth/10-13-2012/yellow-bar-island-habitat-creation)**.  While using more complicated tools, these are beautiful, well thought out, and aesthetic examples.

Here is a non-public lab example using powerpoint, from [Andrew Millison (video link)](https://www.youtube.com/watch?v=_X-BMbLBozA&list=UUgb_TbreMgfDdLKkr4yYJHw)  Andrew uses lots of arrows and text to explain the motion of water.  These are the sorts of annotations we want to encourage.

[![Screen_Shot_2014-03-14_at_11.39.25_AM.png](https://i.publiclab.org/system/images/photos/000/003/254/medium/Screen_Shot_2014-03-14_at_11.39.25_AM.png)](https://i.publiclab.org/system/images/photos/000/003/254/original/Screen_Shot_2014-03-14_at_11.39.25_AM.png)


###Questions and next steps
As a sort of minimal feature set it would be wonderful to add arrows, dots, and text in different colors and angles, locked to the map scale, like this:

[![Screen_Shot_2014-03-14_at_11.38.31_AM.png](https://i.publiclab.org/system/images/photos/000/003/255/medium/Screen_Shot_2014-03-14_at_11.38.31_AM.png)](https://i.publiclab.org/system/images/photos/000/003/255/original/Screen_Shot_2014-03-14_at_11.38.31_AM.png)

A mock-up made by [Liz](/profile/liz)

embedding images or video, or linking to notes would also be very useful.  This would help people situate maps within a narrative.

###Why I'm interested
In the Public Lab [Archive](/archive) it is hard to see why a map is being made, and to collaboratively embed observations into maps.  These sorts of annotations are how Grassroots Mapping maps are usually presented in public, but these low-res, powerpoint modified maps rarely make it back to the Public Lab community. I would like to see this process simplified and built around sharing.