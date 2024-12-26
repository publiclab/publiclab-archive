---
title: "MapKnitter Annotations: Version 0.0.2 released with L.Illustrate.Textbox and L.Illustrate.Pointer"\ntagnames: 'mapknitter, gsoc, gsoc-2014, annotations'
author: justinmanley
path: /notes/justinmanley/07-29-2014/mapknitter-annotations-version-0-0-2-released-with-l-illustrate-textbox-and-l-illustrate-pointer.md
nid: 10990
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/005/650/original/header.png)

# MapKnitter Annotations: Version 0.0.2 released with L.Illustrate.Textbox and L.Illustrate.Pointer

by [justinmanley](../profile/justinmanley) | July 29, 2014 07:02

July 29, 2014 07:02 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [annotations](../tag/annotations)

----

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). This is my sixth week of coding. The purpose of this research note is to provide an update on my progress with implementing text annotation for Leaflet.

To trace the discussions that have led me up to this point, you can look back through the following research notes, listed in chronological order.

March 18, 2014 - [MapKnitter Annotations Using Fabric.js (GSoC 2014 Proposal)](http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal)

June 17, 2014 - [MapKnitter Annotations Plugin: Preliminary Specification](http://publiclab.org/notes/justinmanley/06-17-2014/mapknitter-annotations-plugin-preliminary-specification)

June 25, 2014 - [MapKnitter Annotations Update: L.Illustrate.Textbox](http://publiclab.org/notes/justinmanley/06-25-2014/mapknitter-annotations-update-l-illustrate-textbox)

July 2, 2014 - [MapKnitter Annotations: Textbox Rotation using CSS Transforms](http://publiclab.org/notes/justinmanley/07-02-2014/mapknitter-annotations-textbox-rotation-using-css-transforms)

July 14, 2014 - [MapKnitter Annotations: Leaflet.Illustrate.EditHandle and Leaflet.Illustrate.Pointer](http://publiclab.org/notes/justinmanley/07-14-2014/mapknitter-annotations-leaflet-illustrate-edithandle-and-leaflet-illustrate-pointer)

You can view the [code for Leaflet.Illustrate on GitHub](https://github.com/manleyjster/Leaflet.Illustrate) and you can view a demo using the version of Leaflet.Illustrate (0.0.2) released along with this research note on GitHub at [http://manleyjster.github.io/Leaflet.Illustrate/examples/0.0.2/simple/](http://manleyjster.github.io/Leaflet.Illustrate/examples/0.0.2/simple/):

### Progress ###

`Leaflet.Illustrate` is done!  

Well, maybe not done.  `Leaflet.Illustrate` has reached the point where it can provide basic text annotation capability to the MapKnitter community, so I figure it's a good time to start integrating it with MapKnitter.  There's still much that can be done to improve `Leaflet.Illustrate` to ensure that it is a fast, robust, and dependable library for Leaflet text annotation.  Specifically:

* Tooltip text should be added to `Leaflet.Illustrate.tooltipText` to guide users through the annotation process
* `Leaflet.Illustrate.PointerHandle` should be refactored into two subclasses: `Leaflet.Illustrate.PointerVertexHandle` and `Leaflet.Illustrate.PointerMidpointHandle`
* All `Leaflet.Illustrate` code should be reviewed for instances of `L.Point` arithmetic, and, where possible, arithmetic methods should be replaced by their underscore-prefixed cousins (i.e. `L.Point._add` should be used instead of `L.Point.add`).  This is purely for efficiency.

Here's what I've been up to since I last posted:

#### Leaflet.Illustrate.Textbox ####

I fixed the [annoying flickering](http://publiclab.org/notes/justinmanley/07-14-2014/mapknitter-annotations-leaflet-illustrate-edithandle-and-leaflet-illustrate-pointer#Current+Challenges+and+TODO) with the pointer connecting the rotate handle to the textbox in editing mode by making the pointer an instance of `L.Illustrate.Pointer`.  Of course, this required implementing `L.Illustrate.Pointer` from scratch - more on this below.

I was also able to fix text selection and cursor placement in textboxes by calling `L.DomEvent.stopPropagation` on `mousedown`, `mousemove`, and `mouseup` events from the `<textarea>`, thanks to a helpful suggestion from [@danzel](https://github.com/danzel) on the GitHub issue I posted: [How do I get text selection working for a textarea on top of the map?](https://github.com/Leaflet/Leaflet/issues/2813).  

I encapsulated this functionality as [`L.Illustrate.Selectable`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/core/L.Illustrate.Textbox.js#L148).  However, I still feel (as I wrote in the GitHub issue thread) that `L.Illustrate.Selectable` should be unecessary, as this should be taken care of by [`map.dragging.disable()`](https://github.com/Leaflet/Leaflet/blob/stable/src/dom/Draggable.js#L39) or by calling [`L.DomUtil.enableTextSelection`](https://github.com/Leaflet/Leaflet/blob/stable/src/dom/DomUtil.js#L254) directly.

#### Leaflet.Illustrate.Pointer ####

I spent a lot of my time over the past two weeks implementing `L.Illustrate.Pointer`.  A pointer is a line with only a single geographically-fixed point (the "anchor" point).  The coordinates of the line are given in pixels with respect to the anchor point.  The line thus maintains constant size through zoom events (it does not scale with the map):

```
new L.Illustrate.Pointer(
    <LatLng> anchor, 
    <Point[]> coordinates, 
    <Polyline options> options?
) 
```

The immediate purpose for the `L.Illustrate.Pointer` class was to provide a robust pointer for `L.Illustrate.Textbox` (see above), but `L.Illustrate.Pointer` can serve as a general-purpose pointer linking any large annotation to a single point on the map.

A few notes on the design of `L.Illustrate.Pointer`:

Each instance of `L.Illustrate.Pointer` has [its own containing `<svg>` element](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/core/L.Illustrate.Pointer.SVG.js#L23).  This was done so that pointers would zoom smoothly using CSS3 transitions (CSS properties can only be applied to `<svg>` elements, and not their `<g>` or `<path>` children), since pointers with different anchor points would require different `css-transform` translations.  It is possible that this will raise performance issues if there are *lots* of pointers on the map, but I think that for most of our use cases it will present no issues.

In other respects, much of the code for `L.Illustrate.Pointer` is borrowed directly from [`L.Path`](https://github.com/Leaflet/Leaflet/blob/stable/src/layer/vector/Path.js),  [`L.Path.SVG`](https://github.com/Leaflet/Leaflet/blob/stable/src/layer/vector/Path.SVG.js), and [`L.Polyline`](https://github.com/Leaflet/Leaflet/blob/stable/src/layer/vector/Polyline.js) when it was not possible for it to inherit from them explicitly.

As it turns out, the editing handles for `L.Illustrate.Pointer` were *much* more difficult to design than those for `L.Illustrate.Textbox`.  This is because the position of an editing handle for `L.Illustrate.Textbox` is fixed: a handle which starts out at the upper left corner will always be at the upper left corner (disregarding rotations).  Editing handles for polylines, by contrast, can change position as vertices are added and deleted - and throughout, they must be in exact correspondence with the coordinates of the polyline so that dragging a handle updates the correct vertex.

My approach, similar to the approach I used for [`L.Illustrate.RotateHandle`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/handles/L.Illustrate.RotateHandle.js), etc. - but different from [@jacobtoye](https://github.com/jacobtoye)'s approach in [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw), was to delegate as much as possible of the UI logic to the handles themselves.

The way I ended up implementing this was that `drag` or `click` events on a handle call the [`_addVertex`](https://github.com/manleyjster/Leaflet.Illustrate/blob/v0.0.2/src/edit/L.Illustrate.Edit.Pointer.js#L75), [`_removeVertex`](https://github.com/manleyjster/Leaflet.Illustrate/blob/v0.0.2/src/edit/L.Illustrate.Edit.Pointer.js#L48), or [`_updateVertex`](https://github.com/manleyjster/Leaflet.Illustrate/blob/v0.0.2/src/edit/L.Illustrate.Edit.Pointer.js#L95) methods of `L.Illustrate.Edit.Pointer`.  These methods of `L.Illustrate.Edit.Pointer` handle the creation and destruction of instances of `L.Illustrate.PointerHandle` as necessary to add and remove vertices from the pointer.  Once this is complete, the method fires an `edit:add-vertex`, `edit:remove-vertex`, or `edit:update-vertex` event.  Instances of `L.Illustrate.PointerHandle` listen for these events and each is responsible for updating its own `_id` property (the `_id` property indicates which vertex the handle controls).

My hope was that implementing editing handles in this way would enable the editing handles to be highly decoupled from `L.Illustrate.Pointer` and `L.Illustrate.Edit.Pointer`.  I think that the implementation was relatively successful from that perspective - but it is excessively complicated by the need for each handle to maintain an accurate internal `_id` property linking it to the correct coordinate.  This might be simplified by splitting `L.Illustrate.PointerHandle` into two separate classes and giving each vertex handle responsibility for the midpoint handles to either side.

#### Miscellaneous Updates ####

Since my last research note, I completed a number of housekeeping tasks:

*  Connected `Leaflet.Illustrate` repo to [Travis CI](https://travis-ci.org/manleyjster/Leaflet.Illustrate)
* Connected `Leaflet.Illustrate` repo to [Coveralls](https://coveralls.io/r/manleyjster/Leaflet.Illustrate)
* Published `Leaflet.Illustrate` to `npm` as [`leaflet-illustrate`](https://www.npmjs.org/package/leaflet-illustrate)
* Added release tags for v0.0.1 and v0.0.2 in git
* Added build, coverage, and version badges to the [`README`](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/README.md).

It is my hope that these additions will give others confidence in the quality of this Leaflet plugin and encourage them to contribute or to use it for their own projects.

### Next Steps & Future Improvements ###

* Fork MapKnitter repo and begin working on integrating `Leaflet.Illustrate` into MapKnitter.
* Refactor `L.Illustrate.PointerHandle`
* Extend `L.Illustrate.Toolbar` to provide an intuitive interface for users to change the color, font, font-size, and other styles on the textbox and other features.
* Implement `toGeoJSON` methods for `L.Illustrate.Pointer` and `L.Illustrate.Textbox` (will probably use `toGeoJSON` to serialize these objects for storage in the MapKnitter database)
* Allow textboxes to be fixed at points other than their center points
* Fix feature deletion button in toolbar
