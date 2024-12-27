---
title: "MapKnitter Annotations: Interface Refactoring"

tagnames: 'balloon-mapping, mapknitter, software, gsoc, gsoc-2014'
author: justinmanley
path: /notes/justinmanley/08-06-2014/mapknitter-annotations-interface-refactoring.md
nid: 11019
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/006/101/original/note1.png)

# MapKnitter Annotations: Interface Refactoring

by [justinmanley](../../../profile/justinmanley) | August 06, 2014 20:03

August 06, 2014 20:03 | Tags: [balloon-mapping](../tag/balloon-mapping), [mapknitter](../tag/mapknitter), [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014)

----

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). This is my seventh week of coding.

If you're interested in reading about `Leaflet.Illustrate`, the Leaflet plugin that I wrote over the past few weeks to power MapKnitter's annotations, you can check out my [last research note](http://publiclab.org/notes/justinmanley/07-29-2014/mapknitter-annotations-version-0-0-2-released-with-l-illustrate-textbox-and-l-illustrate-pointer).

The goal of this research note is to post some of my ideas for refactoring the MapKnitter interface to expose annotation functionality and solicit feedback from the community.

### Areas for Improvement ###

The MapKnitter interface currently looks like this:

[![interface-combined.png](https://i.publiclab.org/system/images/photos/000/006/091/medium/interface-combined.png)](https://i.publiclab.org/system/images/photos/000/006/091/original/interface-combined.png)

I think that there are several areas for improvement with this interface:

* I love the way that the MapKnitter homepage presents a selection of recent maps.  I think this is an awesome way to hook people in and communicate what MapKnitter is about.  However, once a user clicks on a map, they are taken to an overview page for the map, not the map itself.  Often, this overview **doesn't even show the map itself**.

* It is clear to me from looking through the archives that users seldom use the "description" field when creating a map.  Furthermore, right now, the "description" field is *worse* than useless because most are populated by spam text.

* Export functionality is scattered all over: right now, there are no fewer than **three** places on the overview page to export the map.

* The overview page doesn't make it easy to view or edit the map metadata (such as the base satellite layer), description, place, or image metadata.

[![interface-commentary.png](https://i.publiclab.org/system/images/photos/000/006/096/medium/interface-commentary.png)](https://i.publiclab.org/system/images/photos/000/006/096/original/interface-commentary.png)

### Ideas for Improvements ###

It may not be possible to eliminate the overview page entirely, but I would like to move as much functionality as possible into the map editing interface so that the full-screen, full-functionality view of the map is the main destination for all users.  This full-screen view of the map should be a self-explaining, self-documenting view of the map.

Some sketches: 

[![note1.png](https://i.publiclab.org/system/images/photos/000/006/097/medium/note1.png)](https://i.publiclab.org/system/images/photos/000/006/097/original/note1.png)

[![note2.png](https://i.publiclab.org/system/images/photos/000/006/098/medium/note2.png)](https://i.publiclab.org/system/images/photos/000/006/098/original/note2.png)

[![mapknitter-interface-sketch.png](https://i.publiclab.org/system/images/photos/000/006/099/medium/mapknitter-interface-sketch.png)](https://i.publiclab.org/system/images/photos/000/006/099/original/mapknitter-interface-sketch.png)

###  Mockup ###

I built a preliminary implementation of the interface I sketched above.  It's in the [`annotations-interface` branch](https://github.com/manleyjster/mapknitter/tree/annotation-interface) of my fork of mapknitter  - controllers and views are called `map2`.

[![mapknitter_interface.png](https://i.publiclab.org/system/images/photos/000/006/100/medium/mapknitter_interface.png)](https://i.publiclab.org/system/images/photos/000/006/100/original/mapknitter_interface.png)

### Feedback ###

Let me know what you think about taking the MapKnitter interface in this direction.  Obviously there's a *lot* more that needs to be built in to provide full-featured annotation functionality - but what do you think of combining the overview and editing pages and the split-screen editing page?
