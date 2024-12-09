---
title: MapKnitter Annotations: First Live Release
tagnames: mapknitter, gsoc, gsoc-2014, annotations
author: justinmanley
path: /notes/justinmanley/09-02-2014/mapknitter-annotations-first-live-release.md
nid: 11096
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/006/541/original/mapknitter-3.png)

# MapKnitter Annotations: First Live Release

by [justinmanley](../profile/justinmanley) September 02, 2014 03:22

September 02, 2014 03:22 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [annotations](../tag/annotations)

----

### First Live Release! ###

The first pre-beta of the new MapKnitter interface is live!  Try it out at [test.publiclab.org:3000](http://test.publiclab.org:3000/).

<br />

<div class="text-center"><a class="btn btn-primary btn-large" href="http://test.publiclab.org:3000/">Try the new MapKnitter</a></div>

<br />

Please do note that this is an early release and that the following features, among others, have not yet been implemented.

* map deletion
* anonymous map creation and editing
* map export

In addition, only those pages which are essential to creating and viewing new maps have been refactored using the new interface.

[![mapknitter-1.png](https://i.publiclab.org/system/images/photos/000/006/542/medium/mapknitter-1.png)](https://i.publiclab.org/system/images/photos/000/006/542/original/mapknitter-1.png)

[![mapknitter-3.png](https://i.publiclab.org/system/images/photos/000/006/543/medium/mapknitter-3.png)](https://i.publiclab.org/system/images/photos/000/006/543/original/mapknitter-3.png)

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal).

The goal of this research note is to provide an update to the community on my progress with refactoring the MapKnitter interface.

You can check out our previous discussion of this interface refactoring in my previous research notes:

[August 6, 2014 - MapKnitter Annotations: Interface Refactoring](http://publiclab.org/notes/justinmanley/08-06-2014/mapknitter-annotations-interface-refactoring) 

[August 19, 2014 - MapKnitter Annotations: Interface Refactoring Underway](http://publiclab.org/notes/justinmanley/08-19-2014/mapknitter-annotations-interface-refactoring-underway)

### Progress ###

Since my last research note, I've:

* Refactored some of the code handling warpables (uploaded images)
* Integrated @xvidun's file upload interface (based on [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload)).
* Enabled `Leaflet.Illustrate` and `Leaflet.Draw` in map viewing mode.
* Enabled warpable drag-and-drop from the sidebar onto the map.

I haven't yet been able to integrate @xvidun's autoplacement features yet because those depend on Cartagen (@xvidun's autoplacement code calls `new_image` and `new_image_GPS` from Cartagen).  Unfortunately, the `Element.hide()` method in Cartagen breaks Bootstrap dropdown menus (presumably because it conflicts with jQuery's `hide()` method, so it doesn't seem to be a sustainable in the long-term.

### Up Next ###

I've spent a lot of time over the past month doing a general overhaul of the MapKnitter editing interface.  Now, I'm going to return to my own project - MapKnitter annotations.  I'm going to work over the next few weeks on integrating the work that I've done on `Leaflet.Illustrate` into the new Leaflet-based MapKnitter interface.  This will involve:

* Defining `toGeoJSON` for `Leaflet.Illustrate` annotations, deciding how `Leaflet.Illustrate` and `Leaflet.draw` objects will be stored in the MapKnitter database, and writing migrations and a new ActiveRecord model to handle them.
* Adding to the `Leaflet.Illustrate` user interface to allow people to pick different colors, fonts, etc. for their annotations.

I also *really* want to work on integrating Anish's ImageDistortLeaflet plugin into MapKnitter, since the ability to distort images placed on the map is absolutely the core functionality of MapKnitter.  This will be my primary focus as soon as I've spent some time working on annotations.
 