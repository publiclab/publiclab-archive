---
title: MapKnitter Annotations: Textbox Rotation using CSS Transforms
tagnames: mapknitter, gsoc, leaflet, gsoc-2014, map-annotations, leaflet.illustrate
author: justinmanley
path: /notes/justinmanley/07-02-2014/mapknitter-annotations-textbox-rotation-using-css-transforms.md
nid: 10641
uid: 421556

---

# MapKnitter Annotations: Textbox Rotation using CSS Transforms

by [justinmanley](../profile/justinmanley) July 02, 2014 01:16

July 02, 2014 01:16 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [leaflet](../tag/leaflet), [gsoc-2014](../tag/gsoc-2014), [map-annotations](../tag/map-annotations), [leaflet.illustrate](../tag/leaflet.illustrate)

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). This is my second week of coding. The purpose of this research note is to provide an update on my progress with implementing text annotation for Leaflet.

To trace the discussions that have led me up to this point, you can look back through the following research notes, listed in chronological order.

March 18, 2014 - [MapKnitter Annotations Using Fabric.js (GSoC 2014 Proposal)](http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal)

June 17, 2014 - [MapKnitter Annotations Plugin: Preliminary Specification](http://publiclab.org/notes/justinmanley/06-17-2014/mapknitter-annotations-plugin-preliminary-specification)

June 25, 2014 - [MapKnitter Annotations Update: L.Illustrate.Textbox](http://publiclab.org/notes/justinmanley/06-25-2014/mapknitter-annotations-update-l-illustrate-textbox)

### Progress ###

The first step in my project is implementing basic text annotation for Leaflet.  My solution to text annotation for Leaflet uses a textbox-based UI for text annotation which should be familiar to users of Powerpoint, Photoshop, and many other image-editing programs.  I am currently developing this functionality in a plugin for Leaflet, [Leaflet.Illustrate](https://github.com/manleyjster/Leaflet.Illustrate) which extends [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw).

[Mathew](http://publiclab.org/profile/mathew) and I determined in [discussion over my last research note](http://publiclab.org/notes/justinmanley/06-25-2014/mapknitter-annotations-update-l-illustrate-textbox#comments-container) that rotatable text was part of the core needs that this plugin aims to address.  At the time, I thought that rotatable text would have to be implemented using SVG.  After our discussion, I realized that another option could be to use [CSS transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) on HTML text.  I decided to go ahead with this, rather than jumping directly into an SVG implementation (which would likely have involved extending Leaflet's core for vector layers), since it seemed that HTML textboxes using CSS transforms would be both easier to implement and more user-friendly for application developers.

This week, I successfully implemented rotatable HTML textboxes using [L.DivIcon](http://leafletjs.com/reference.html#divicon) and CSS transforms.  You can view a demo of the functionality below: 

<iframe width=100% height="390" src="//www.youtube.com/embed/a4wf2EvSW6c" frameborder="0" allowfullscreen></iframe>

The code that makes the rotation happen is copied below:

    function _updateRotation() {
		var degrees = Math.round(this._rotation*(180/Math.PI)),
			rotationString = "rotate(" + degrees + "deg)",
			size = this.getSize(),
			translateString = "",
			center;

		if (this._map) {
			center = this._map.latLngToContainerPoint(this._latlng);
			translateString = "translate(" + center.x + "px, " + center.y + "px)";

			this._textbox._icon.style["-webkit-transform-origin"] = (center.x + Math.round(size.x/2)) + "px " + (center.y + Math.round(size.y/2)) + "px";
		}

		this._textbox._icon.style["-webkit-transform"] = rotationString + " " + translateString;
		this._textbox._icon.style["-o-transform"] = rotationString + " " + translateString;
		this._textbox._icon.style["-ms-transform"] = rotationString + " " + translateString;
		this._textbox._icon.style["-moz-transform"] = rotationString + " " + translateString;
		this._textbox._icon.style.transform = rotationString + " " + translateString;
	},


As the [MDN entry](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) notes, CSS transforms *are* an experimental technology, and that's why all of the vendor prefixes are required.  But CSS transforms have been around for quite a while, are well-tested, and with the appropriate vendor prefixes, the basic 2D CSS transforms that I use above (rotate and translate), are supported by

* Chrome (all versions)
* Firefox 3.5+
* Internet Explorer 9.0+
* Opera 10.5+
* Safari 3.1+

([click for a complete compatibility table](http://caniuse.com/transforms2d)).  I think that this will probably be sufficient for compatibility.  If we *must* make it compatible with IE 8 and below, that can be done using Microsoft's [Matrix Filters](http://msdn.microsoft.com/en-us/library/ms533014%28VS.85,loband%29.aspx).

### Issues ###

I'm not really sure why I needed the `translateString` and `transform-origin` properties in the code above - the `rotate` transform should have been enough.  I think that the CSS transforms are interacting in a strange way with the `position: absolute` property that the textbox inherits from `L.Marker`.  The code above works, but I would like to understand better the way that the CSS transforms are interacting with the positioning.

Currently, the rotation is undone on zooming in or out.  This is because Leaflet positions markers using the CSS transform translate function.  Whenever the user zooms, the translate values have to be recalculated and the `css-transform` property is reset, which overwrites the rotation and translation put in by `_updateRotation()`.  The easiest way to fix this is probably to store the rotation string and then reset the `css-transform` property once the zoom completes.

It's impossible to select text inside the textbox right now.  I think that this has to do with the handlers that Leaflet sets up for drag events occurring anywhere over the map.  Even when I call `map.enableTextSelection()`, the `selectstart` event is never fired on the `<textarea>.`  This is going to take some looking in to.

### Next Steps ###

* Add editing handles for resizing and moving (the video above implements a handle for rotation).
* Make textbox outline highlighting more natural
* Correct text selection issues.
* Fix rotation on zoom.
* Remove default `<textarea>` resizing behavior so that there is a single tool for resizing the textbox.
* Fix disturbing flickering of the rotation handle when the marker reaches an angle of -&pi;/2.
* Rotate handles along with the textbox

