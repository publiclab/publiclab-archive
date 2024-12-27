---
title: "MapKnitter Annotations: Leaflet.Illustrate.EditHandle and Leaflet.Illustrate.Pointer"

tagnames: 'mapknitter, gsoc, gsoc-2014, annotations'
author: justinmanley
path: /notes/justinmanley/07-14-2014/mapknitter-annotations-leaflet-illustrate-edithandle-and-leaflet-illustrate-pointer.md
nid: 10686
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/005/260/original/chicagooooo.png)

# MapKnitter Annotations: Leaflet.Illustrate.EditHandle and Leaflet.Illustrate.Pointer

by [justinmanley](../../../profile/justinmanley) | July 14, 2014 07:23

July 14, 2014 07:23 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [annotations](../tag/annotations)

----

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). This is my fourth week of coding. The purpose of this research note is to provide an update on my progress with implementing text annotation for Leaflet.

To trace the discussions that have led me up to this point, you can look back through the following research notes, listed in chronological order.

March 18, 2014 - [MapKnitter Annotations Using Fabric.js (GSoC 2014 Proposal)](http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal)

June 17, 2014 - [MapKnitter Annotations Plugin: Preliminary Specification](http://publiclab.org/notes/justinmanley/06-17-2014/mapknitter-annotations-plugin-preliminary-specification)

June 25, 2014 - [MapKnitter Annotations Update: L.Illustrate.Textbox](http://publiclab.org/notes/justinmanley/06-25-2014/mapknitter-annotations-update-l-illustrate-textbox)

July 2, 2014 - [MapKnitter Annotations: Textbox Rotation using CSS Transforms](http://publiclab.org/notes/justinmanley/07-02-2014/mapknitter-annotations-textbox-rotation-using-css-transforms)

You can view the [code for Leaflet.Illustrate on GitHub](https://github.com/manleyjster/Leaflet.Illustrate) and you can view a demo using the version of Leaflet.Illustrate (0.0.1) released along with this research note on GitHub at [http://manleyjster.github.io/Leaflet.Illustrate/examples/0.0.1/simple/](http://manleyjster.github.io/Leaflet.Illustrate/examples/0.0.1/simple/):

### Progress ###

Since I last posted a research note, I have successfully implemented rotatable textboxes (using CSS transforms as I [proposed in a previous research note](http://publiclab.org/notes/justinmanley/07-02-2014/mapknitter-annotations-textbox-rotation-using-css-transforms)) which behave correctly and consistently during map zoom and handles for rotating, resizing, and moving textboxes.

In order to implement these features, I have implemented the following classes, many of which are general-purpose extensions of Leaflet core functionality.

* [`L.RotatableMarker`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/extends-core/L.RotatableMarker.js#L1) (extends [`L.Marker`](https://github.com/Leaflet/Leaflet/blob/master/src/layer/marker/Marker.js))

    Since textboxes ([`L.Illustrate.Texbox`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/L.Illustrate.Textbox.js)) are created as instances of `L.Marker` with HTML icons supplied by [`L.DivIcon`](https://github.com/Leaflet/Leaflet/blob/master/src/layer/marker/DivIcon.js#L6), this is the class which makes textboxes rotatable.  The editing handles rotate along with their companion textbox, and so also derive from L.RotatableMarker.

* [`Leaflet.Illustrate.EditHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.EditHandle.js) (extends [`L.RotatableMarker`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/extends-core/L.RotatableMarker.js#L1))

    A handle is a marker attached to a companion shape.  A handle:

    1. Is positioned with respect to its companion shape.  The position of the handle is given as an offset in pixel coordinates from the center of its companion shape.  The offset is given as an `L.Point` object, and its geographic position (latlng) is managed internally.  Note that the geographic position (latlng) of the handle usually changes during zooming, since the textbox maintains constant pixel size during zoom.
    2. Responds to drag events to alter the state of the textbox (classes which extend `Leaflet.Illustrate.EditHandle` must implement `_onHandleDrag` (for example, in [`Leaflet.Illustrate.ResizeHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.ResizeHandle.js#L11)).

    The key purpose of the `Leaflet.Illustrate.EditHandle` class is to allow applications to create markers which must maintain a fixed pixel position with respect to a given `latlng`.

    Child classes [`Leaflet.Illustrate.RotateHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.RotateHandle.js), [`Leaflet.Illustrate.ResizeHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.ResizeHandle.js#L1), and [`Leaflet.Illustrate.MoveHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.MoveHandle.js) all inherit from `Leaflet.Illustrate.EditHandle`.

I've also implemented several utility methods extending Leaflet core which are worth noting:

* [`L.DomUtil.getRotateString(angle, units)`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/extends-core/L.DomUtil.getRotateString.js)
   
    Returns a CSS transform string corresponding to the given angle.  The units ([radians, degrees, turns, or gradians](http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/)) must be given explicitly.  This complements the method `L.DomUtil.getTranslateString` already defined in `L.DomUtil`.

* [`L.DomUtil.setTransform(el, point, angle, disable3D)`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/extends-core/L.DomUtil.setTransform.js)

    Sets the `transform` property on the given HTML element `el` for the given offset (`point`), and rotation (`angle`).  If disable3D is set, then there is no rotation (rotation only works in browsers which support CSS transforms).

  Leaflet core provides only the method [`L.DomUtil.setPosition`](https://github.com/Leaflet/Leaflet/blob/master/src/dom/DomUtil.js#L146), which sets the absolute position of the given element using either the css-transform `translate` function or, if `disable3D` is false, setting the `top` and `left` properties on the element.  When `disable3D` is set, `L.DomUtil.setPosition` just sets the css-transform property to the newly calculated translate string, and, in the process, overwrites any rotation also set using the css-transform property.  This new method `L.DomUtil.setTransform` solves this by setting *both* the translate and rotate property as appropriate.

    There are undoubtedly ways to optimize this.  Ultimately, we think about translation and rotation as separate operations, and so it would be nice if the abstraction provided by Leaflet supported this.  This could be done by implementing `L.DomUtil.setTranslation` and `L.DomUtil.setRotation`, each of which would parse the css-transform string and reset *only* the parameters of the appropriate translate function.  Further (relatively simple) optimizations would be to delete the transform functions when unnecessary (i.e. `rotate(0,0,0,0)` could be deleted).

### Current Challenges and TODO ###

I've completed the bulk of the work that has to be done to implement textboxes.  There are quite a number of small, but crucial tasks that remain before these textboxes are truly usable.

* Add remove hooks for edit handles (implement `onRemove` or `removeHooks`)
* Coordinate textbox focus, dragging, and text selection (it is not currently possible to select text in the textbox because of how Leaflet overrides default drag behavior within the map container)
* Fix irritating flicker-on-zoom of the pointer indicating the position of the rotate handle
* Add tooltip text (`L.Illustrate.tooltipText` - the analogue of [`L.drawLocal`](https://github.com/Leaflet/Leaflet.draw/blob/master/src/Leaflet.draw.js#L7) in `Leaflet.draw`)
* Allow `L.Illustrate.Textbox` to be modified via styles given in the `options` object, *including* default text
* Finish implementing `L.Illustrate.Toolbar`.  This may involve refactoring parts of [`L.Toolbar`](https://github.com/Leaflet/Leaflet.draw/blob/master/src/Toolbar.js).

I've been working for the past few days on eliminating the annoying flickering of the rotate handle pointer on zoom.  It's turning out to be quite a thorny problem.  Markers (`L.Marker`) and polylines (`L.Path`) are implemented very differently.  The main difficulty is that each marker has an `_animateZoom` method which is called when the `zoomanim` event is fired.  In writing `L.Illustrate.EditHandle`, I simply overrode the default `_animateZoom` method and reset the position of the handle during zoom in order to maintain constant pixel position with respect to the companion shape of the handle.


[![aar84.gif](https://i.publiclab.org/system/images/photos/000/005/261/medium/aar84.gif)](https://i.publiclab.org/system/images/photos/000/005/261/original/aar84.gif)

*Notice how the pointer for the rotate handle (perpendicular blue line on top) flickers on zoom.*

Whether the polylines are drawn using Canvas, SVG, or VML (backwards-compatibility with IE), they are scaled during animation using `_animatePathZoom`, which is a method of the `L.Map` object, *not* a method of the polyline.  The `_animatePathZoom` method resets the css-transform of the root `<svg>` element, translating and scaling *all* vector objects on the map by the same amount.

This is not what we want for a pointer.

Pointers should extend paths in the same way that handles extend markers.  That is, a pointer is a path whose vertices are defined in *pixel* coordinates, given with respect to an origin which has a fixed geographic position.

After spending a fair amount of time on this, I think that the best way to approach the rotate handle pointer is to define a new class (`L.Illustrate.Pointer`) to encapsulate this functionality.  Since each pointer will be scaled and translated differently during map zooming, each will need to be given its own `<svg>` root element.

I like this approach because it animates the paths during map zoom in the same way as Leaflet core (no need for `SMIL` or javascript animations).  I'm a bit concerned that adding many `<svg>` (one for each pointer) to the page will negatively impact performance, although this thread ([How many SVGs before performance issues?](https://groups.google.com/forum/#!topic/d3-js/ZJ6pznVU5LQ)) suggests that, as long as there are tens to hundreds of pointers, that shouldn't be a big issue.

Implementing rotate handle pointers in this way will mean that `L.Illustrate.Pointer` can also be used for *any* kind of pointer meant to call out a single location or identify an annotation (like a textbox) with a single point on the map.

### Next Steps ###

Once the Leaflet.Illustrate plugin is usable, I can begin integrating it into MapKnitter.  This will involve designing a toolbar (extending either `L.Draw.Toolbar` or `L.Toolbar`) to expose the annotation functionality of `Leaflet.draw` and `Leaflet.Illustrate` to users and then integrating this toolbar into MapKnitter, among other things.