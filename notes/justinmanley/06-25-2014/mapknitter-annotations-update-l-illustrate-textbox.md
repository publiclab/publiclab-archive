---
title: 'MapKnitter Annotations Update: L.Illustrate.Textbox'
tagnames: mapknitter, gsoc, developers, gsoc-2014, barnstar:basic
author: justinmanley
path: /notes/justinmanley/06-25-2014/mapknitter-annotations-update-l-illustrate-textbox.md
nid: 10613
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/004/963/original/Screenshot_from_2014-06-24_17_42_45.png)

# MapKnitter Annotations Update: L.Illustrate.Textbox

by [justinmanley](../profile/justinmanley) June 25, 2014 05:49

June 25, 2014 05:49 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [developers](../tag/developers), [gsoc-2014](../tag/gsoc-2014), [barnstar:basic](../tag/barnstar:basic)

----

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). I just started coding this week, on Monday. The purpose of this research note is to provide an update on the approach that I've chosen (see my [last research note](http://publiclab.org/notes/justinmanley/06-17-2014/mapknitter-annotations-plugin-preliminary-specification)) for implementing basic annotation functionality.

### Implementation Update ###

Last week, I was trying to decide whether to implement visual annotation for Leaflet using SVG or HTML canvas.  After meeting with Jeff, we decided to go with SVG.  This was for a number of reasons:

* Leaflet core has built-in classes for handling SVG drawing ([L.Rectangle](http://leafletjs.com/reference.html#rectangle), [L.Polyline](http://leafletjs.com/reference.html#polyline), [L.Circle](http://leafletjs.com/reference.html#circle), etc), and there is already a high-quality drawing plugin, [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw), which extends Leaflet core SVG functionality with an excellent UI.
* SVG performance profile is more appropriate. If a user started at a high zoom level, annotations could potentially cover a very large pixel area.  Canvas performance degrades quickly with pixel area, while SVG performance is constant with respect to pixel area (SVG performance degrades in proportion to the number of objects).
* SVG text looks better, and text annotation is one of the most fundamental visual annotation features that the MapKnitter community is looking for
* We have more options for zooming/scaling behavior with SVG

Jeff and I talked about developing a Leaflet plugin containing the rich annotation functionality that we are looking for - functionality going beyond what is offered in Leaflet.draw.  To this end, I've begun development on a new Leaflet plugin, which I've called  Leaflet.Illustrate.  Jeff and I threw around a bunch of names: Illuminate, Annotate, Explain, Uncover, Storyteller, Cartographer...  We wanted a name that would communicate succinctly that the plugin is designed to allow and encourage users to mark up maps in ways that clarify the purpose and background of the map.  Leaflet.Illustrate is a working name.

The first feature I've begun to implement is text drawing.  This functionality is contained in the classes [Leaflet.Illustrate.Create.Textbox](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/create/L.Illustrate.Create.Textbox.js) and [Leaflet.Illustrate.Edit.Textbox](https://github.com/manleyjster/Leaflet.Illustrate/blob/master/src/edit/L.Illustrate.Edit.Textbox.js), which, respectively, extend Leaflet.Edit.Rectangle and Leaflet.Draw.Rectangle (both exported by Leaflet.draw).

So far, I have added a 'Textbox' button to the drawing toolbar which users can select to draw a textbox on the map.  This will enable text annotation in the style of Powerpoint or Photoshop, in which a user designates a rectangular area in which to enable text entry.  The textbox is composed of two elements: an SVG rectangle, drawn using L.Draw.Rectangle which displays the outline of the textbox, and an HTML `<textarea>` element inside of an [L.DivIcon](http://leafletjs.com/reference.html#divicon), where the user can enter text.  Right now, users can draw a textbox and enter text in it.  What remains to be done to round out basic textbox functionality is to:

*  Allow users to select text inside of the `<textarea>`.  Currently, trying to select text inside the `<textarea>` only results in dragging the map.
* Determine how the `<textarea>` will behave on zoom.  Should it shrink along with the map, or maintain constant size on the screen?
* Correct that initial latlng position of the `<textarea>`.
* Make sure that the `<textarea>` resizes properly along with the SVG rectangle.

Some higher-level questions that have occurred to me at this point: 

If I continue to implement textboxes using HTML `<textarea>` elements, then the L.Draw.Rectangle outline is not really necessary.  If I want an outline to show up around the `<textarea>` when it is focused, I can do that easily using CSS.  The weakness of using `<textarea>` elements is that, as far as I am aware, HTML elements cannot be rotated arbitrarily, which means that any text annotations on the map would always have to be oriented horizontally.  I don't think this is necessarily a bad thing, since horizontally-oriented text is most readable.  However, if there is a need in the community for text that can be rotated, then we will need to implement textboxes using SVG text elements.  This will be more complicated, as it will most likely involve extending Leaflet core, which currently does not support SVG text, only SVG graphics.

Finally, I'm not sure yet if it's really necessary to encapsulate all of this functionality in a separate Leaflet plugin.  It may be sufficient to simply add functionality to Leaflet.draw.  Leaflet.draw is conveniently designed in that the drawing functionality is only loosely coupled to the toolbar.  The more that I think about it, the more it seems to me that, for MapKnitter, we don't really need that much new functionality - we just need existing functionality presented in a specific way (i.e. it's more of a UI problem than a plugin design problem).  Accordingly, it may make the most sense to add a few classes to Leaflet.draw and then design a completely new and separate toolbar UI for MapKnitter.  This will become clearer as I get further with my coding.

Weigh in!  Let me know what you think of all this.