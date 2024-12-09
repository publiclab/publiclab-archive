---
title: 'The Magic Behind MapKnitter: Leaflet.DistortableImage'
tagnames: balloon-mapping, kite-mapping, mapknitter, software, tools, barnstar:basic
author: justinmanley
path: /notes/justinmanley/05-21-2015/the-magic-behind-mapknitter-leaflet-distortableimage.md
nid: 11826
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/009/940/original/Leaflet.DistortableImage.png)

# The Magic Behind MapKnitter: Leaflet.DistortableImage

by [justinmanley](../profile/justinmanley) May 21, 2015 03:24

May 21, 2015 03:24 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [mapknitter](../tag/mapknitter), [software](../tag/software), [tools](../tag/tools), [barnstar:basic](../tag/barnstar:basic)

----

[Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage) is a new plugin for the JavaScript mapping library  [Leaflet](http://leafletjs.com/), written by Public Lab contributors to make [MapKnitter](mapknitter.org) better. Here's why we wrote Leaflet.DistortableImage, the challenges we faced, and how you can participate in developing Public Lab's open-source software tools for environmental research.

### The Problem

Turning grassroots, citizen-gathered aerial imagery into legible maps is a challenge. Balloons bob, kites swoop, and the resulting aerial photographs don't always fit together neatly. Nevertheless, citizen mapmakers and scientists can produce legible maps from aerial images by stretching ([rubbersheeting](http://en.wikipedia.org/wiki/Rubbersheeting)) and rotating images, a process called georectification. [Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage) is a new plugin by Public Lab contributors for the JavaScript mapping library Leaflet that makes georectifying images fast, smooth, and simple.

MapKnitter, created by Public Lab, has long been one of the best tools for doing georectification in the browser. Under the hood, MapKnitter relies on a JavaScript library for rendering base maps and handling user interactions. For a long time, MapKnitter relied on [OpenLayers](http://openlayers.org/) for rendering maps and [Cartagen](https://github.com/jywarren/cartagen/) for positioning and warping aerial photographs. During the summer of 2014, with help from Google Summer of Code students, Public Lab began porting MapKnitter over to the Leaflet mapping library. 

Leaflet.DistortableImage is a Leaflet plugin, developed as part of this port, for resizing, rotating, and stretching images on top of Leaflet maps. Try it out here:

<iframe style="width: 100%; height: 300px; border: 0" src="https://publiclab.github.io/Leaflet.DistortableImage/examples/index.html"></iframe>

### The math under the hood

Basic georectification can be done by composing a few simple image transformations: rotation, scaling, and distortion. Built-in CSS functions made it easy to add rotating and scaling functionality to the Leaflet plugin. Distorting images, the third component of georectification, was much more difficult. Ideally, a rectangular aerial photograph should correspond to a rectangular outline on the surface of the earth. This is roughly the case if the camera's orientation can be fixed so that it is pointed straight down at the surface of the earth. In practice, the movement of the supporting kite or balloon and the vagaries of the wind deflect the camera from this ideal angle. The resulting oblique orientation of the camera to the ground causes the field of view of the camera to intersect the surface of the earth in an irregular quadrilateral, rather than a rectangle. The purpose of distorting images during georectification is to recover the irregular geographic outline from the rectangular form of the image. 

There are many distortion algorithms that might be used to transform rectangular into irregular quadrilaterals. We chose to use a [projective transformation](http://en.wikipedia.org/wiki/Homography), which is well-suited to georectification because it captures the perspectival nature of the distortion introduced by the swinging of the camera.

[![Kite_Mapping_Distortions.png](https://i.publiclab.org/system/images/photos/000/009/939/medium/Kite_Mapping_Distortions.png)](https://i.publiclab.org/system/images/photos/000/009/939/original/Kite_Mapping_Distortions.png)

Mathematically, a projective transformation is a function which acts on the projective plane, a two-dimensional space which captures many of the features of perspectival vision. In the projective plane, two parallel lines can converge, just as railroad tracks converge in our own vision. We can apply a projective transformation to shapes in the Euclidean (ordinary) plane by embedding them in 3-dimensional space, multiplying by a 3 * 3 square matrix. This accords with the commonsense observation that our everyday perspectival experience is the result of fitting the 3-dimensional world we occupy into the two-dimensional picture plane of our vision.

[Cartagen](http://cartagen.org/), built before the adoption of 3d CSS transformations ([first proposed in 2009](http://www.w3.org/TR/2009/WD-css3-3d-transforms-20090320/)), approximated the perspectival distortion of the projective transformation by placing the image in an HTML canvas element, subdividing the image into many small quadrilateral tiles, and applying a slightly different affine transformation to each tile. It wasn't possible for Cartagen to use the [two-dimensional matrix transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#matrix) because the `matrix()` function, designed to apply [affine transformations](http://en.wikipedia.org/wiki/Shear_mapping), lacks the degrees of freedom necessary for the projective transformation.

We implemented the projective transformation for Leaflet.DistortableImage using the CSS transform property and the matrix3d function. Leaflet.DistortableImage does the hard work of calculating a 4*4 projective transformation matrix mapping each corner of the aerial photograph to a geographic coordinate on the map. This matrix is then handed off to the matrix3d function, which applies the transformation. This approach allowed us to delegate the pixel-pushing mechanics of the transformation to the browser's renderer. Because we're using a three-dimensional transformation, the browser delegates much of the work, in turn, to the GPU. The speed of the browser's renderer, combined with the hardware acceleration of the GPU, combined to produce smoother, faster distortions.

### Challenges
Understanding the mathematics behind the projective transformation was one of the most challenging aspects of designing Leaflet.DistortableImage. This was truly a team effort; [Anish](http://publiclab.org/profile/anishshah101), [Bryan](http://publiclab.org/profile/btbonval), [Jeff](http://publiclab.org/profile/warren), and [Vidun](http://publiclab.org/profile/xvidun) all contributed to making sense of projective distortions. Franklin Ta's outstandingly clear blog post, [Computing CSS matrix3d transforms](http://franklinta.com/2014/09/08/computing-css-matrix3d-transforms/), was also invaluable in helping us understand the mathematics of the transformation.

Mathematics aside, applying custom CSS transforms to Leaflet map layers turned out to be tricky in practice. Leaflet uses CSS translations to position image overlays on the base map and CSS scaling to animate images while the map is zooming. All CSS transformations are set via a single CSS `transform` property. This means that complex transformations must be set by combining rotations, translations, scalings, and other primitive transformations into a single transform string. for example:

    .crazy-transformation {
        transform: matrix(1, -0.2, 0, 1, 0, 0) scale(5) translate(100);
    }

This translates an element, then scales it, then skews it according to a (two-dimensional) affine transformation. Once set, it is difficult to selectively update the components of the CSS transform property. We wanted to be able to exclusively update the `matrix3d` component of the transform when a distorted the image, leaving Leaflet's `translate` transform alone. We opted to combine rotation and scaling (each conceptually distinct transformations) into the 4*4 distortion matrix and to recalculate the base translation for the image (ordinarily handled by Leaflet core), then completely overwrite the CSS transform property each time the image was modified. Such a degree of interference with the Leaflet backend seems inevitable as long as we rely on CSS transforms to carry out image distortions (although there are other approaches - see [this Github issue](https://github.com/Leaflet/Leaflet/issues/1370#issuecomment-13453684)).

### Future development
Theoretically, a perspectival distortion should be sufficient to georectify even the most distorted aerial images depicting a relatively flat landscape. In practice, it can be easier to visually georectify images using distortion methods which provide even more flexibility than the projective transformation - and, of course, not all interesting land is flat! It might be helpful to provide users with more powerful warping algorithms, such as [Shepard's Distortion](http://www.imagemagick.org/Usage/distorts/#shepards) and [spline mesh distortions](http://www.gson.org/thesis/warping-thesis.pdf). CSS transforms, while convenient, might not be sufficiently powerful to implement these transformations, so this would likely involve a return to a canvas-based approach.

There's also room for improvement in the image editing interface. We designed Leaflet.DistortableImage to support all of MapKnitter's image manipulation functionalities, which, in addition to image rotation, scaling, and distortion, include toggling image outline and transparency, and locking images in place. We've experimented with various static and contextual toolbars (now using [Leaflet.toolbar](https://github.com/Leaflet/Leaflet.toolbar)!) for exposing these options to users, but we haven't yet found a presentation which is intuitive and unobtrusive.

### Get Involved!

If this project interests you, we encourage you to get involved, either as a developer by [contributing on GitHub](https://github.com/publiclab/Leaflet.DistortableImage), or, as a user, by telling us in the comments, or [on GitHub issues](https://github.com/publiclab/Leaflet.DistortableImage/issues) how Leaflet.DistortableImage is useful to you and how it might be improved. Public Lab is a community of citizen environmental researchers and activists, and [we always welcome technical and non-technical contributors to help build the software tools we use](http://publiclab.org/wiki/contributing-to-public-lab-software) to make change in the world! Come join us!