---
title: 'Google Summer of Code @ Public Lab: 3rd and 4th Week'
tagnames: gsoc, progress, soc, gsoc-2019, soc-2019
author: rexagod
path: /notes/rexagod/06-22-2019/google-summer-of-code-public-lab-3rd-and-4th-week.md
nid: 19815
uid: 564358

---

# Google Summer of Code @ Public Lab: 3rd and 4th Week

by [rexagod](../profile/rexagod) June 22, 2019 21:06

June 22, 2019 21:06 | Tags: [gsoc](../tag/gsoc), [progress](../tag/progress), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019)

----

# Public Lab: 3rd & 4th Week

> Having a robust initial codebase is all that matters. Integration will be frictionless, and you can be sure of a much more stable environment, right from the beginning.

The third and forth week was an interesting time slice. What made it so, was the fact that the codebase now had a sturdy foundation, so in a way the hard part was over. It was really relaxing to see that the long nights of laboring had been done with, which meant I could now shift my topic of concern from establishing a strong codebase to working on its integrations and add-ons, the interesting stuff!

Other than reviewing PRs, opening FTOs, and general debugging, these two weeks can be best characterized by the undertaking of the following tasks, in this order, and detailed further below, in the same order.

- Integrate [`matcher-core`](https://github.com/publiclab/matcher-core) algorithm into [`Leaflet.DistortableImage`](https://github.com/rexagod/Leaflet.DistortableImage/commits/rexa-soc-ldi).
- : Setup a UI for visualizing [`matcher-core`](https://github.com/publiclab/matcher-core)'s results inside [`Leaflet.DistortableImage`](https://github.com/rexagod/Leaflet.DistortableImage/commits/rexa-soc-ldi) using only `Leaflet` as the helper library.
- Setting up Babel, Browserify, ESLint, and Terser in both of the modules to abide by code standards, and to ensure a fine level of code quality in the future.
- Finishing up on [`matcher-cli`](https://github.com/publiclab/matcher-cli), i.e., incorporating support for background processing, dynamic command assignments, removing [unwanted dependencies](https://github.com/publiclab/matcher-cli/commit/343c4e8ba4a07c4c6b43a618e59a0a6e02c625f6), and adding necessary `npm scripts` in general.
- Setting up support for Continuous Integration platforms as discussed in the previous post, and actually demonstrating the same on a PR, in order to expose its dynamic nature.
- Setting up Jest as a testing, mocking, and visualizing framework for the [`matcher-cli`](https://github.com/publiclab/matcher-cli) library, and demonstrate how the users can exploit this new "headless" dimension for expanding on the traditional approaches towards testing.

Starting off with integrating the `core` algorithm in the [`Leaflet.DistortableImage`](https://github.com/rexagod/Leaflet.DistortableImage/commits/rexa-soc-ldi) library, in doing so I didn't face any issues whatsoever, and you should not too if you, one, modularize your code into logical components that actually make sense, and not because everyone's talking about it, and two, embrace functional programming, and for the love of god, use only a limited amount of syntactic sugar, only as much as you need. You can't go around town telling people you've actually embraced functional programming, while there still exist big clunky `class`es in your code. So just keep that in mind, or not, since this is just how I feel, and it's just my take on it.

```javascript
if(document.querySelectorAll("svg > g > path").length) {
      [].slice
      .call(document.querySelectorAll("svg > g > path"))
      .slice(0,3)
      .map(function(x) {
        x.parentNode.removeChild(x);
      });
    }
    var lat_offset = -best_point.lat + corresponding_best_point.lat;
    var lng_offset = -best_point.lng + corresponding_best_point.lng;
    // relocation code
    // getCorners -> formal values -> copy of values -> not useful here
    // _corners -> actual values -> copy of reference
    // hence can be useful to mutate states (position of the images)
    overlay._corners[0] = [
      processedPoints.images[1].getCorner(0).lat - lat_offset,
      processedPoints.images[1].getCorner(0).lng - lng_offset
    ];
    overlay._corners[1] = [
      processedPoints.images[1].getCorner(1).lat - lat_offset,
      processedPoints.images[1].getCorner(1).lng - lng_offset
    ];
    overlay._corners[2] = [
      processedPoints.images[1].getCorner(2).lat - lat_offset,
      processedPoints.images[1].getCorner(2).lng - lng_offset
    ];
    overlay._corners[3] = [
      processedPoints.images[1].getCorner(3).lat - lat_offset,
      processedPoints.images[1].getCorner(3).lng - lng_offset
    ];
    var zoom_level = map.getZoom();
    map.setView(overlay.getCenter(), (zoom_level%2?zoom_level+1:zoom_level-1));
    L.DomEvent.on(overlay._image, 'mousedrag', overlay.editing.enable, overlay.editing);
```

Setting up the `auto-stitcher` module was all about converting independent image-pixel space coordinates back to their respective latitudes and longitudes, then "projecting" the identified points of interests, along with connecting `polylines` for the top three most confident matches, onto the images, while keeping away any induced latency that might have crept in due to the drag, so I had to account for that as well. After that, came the "stitching" part, which essentially required the mutation of the overlay corners, translating them along certain "connecting paths" connecting the two.

Setting up Babel, Browserify, ESLint, and Terser was pretty straight-forward and there isn't much to discuss here, although one should never undermine the importance of such "quality-maintaining" modules.

[Automating the CLI on CI](https://travis-ci.org/publiclab/matcher-cli) was one of the things I had in mind for a while, and was really interested to see its potential as well, so without wasting any time, I spun up a `.travis.yml` script that allowed me to deploy [`matcher-cli`](https://github.com/publiclab/matcher-cli) on `Travis` exactly how I wanted to. The testing however required some victim issues to checkout the automated cross-posting tech before finally making it dynamic for PRs, and so [issue#2](https://github.com/publiclab/matcher-core/issues/2) was, I think over a span of a few hours, spammed with exactly 36 messages right form the CI, in sets of three (Node 8, 10, and 12) due to the 12 different configurations of the same script I had to test, in order to get a perfect CI log, along with a snapshot of the virtual page right in the CI! Among many other possibilities, this would also allow the user to change the configurations right in their forks, submit a PR, all inside GitHub, and without even cloning the repository on their local, and `Travis` would report every thing they need to know right in their PRs. Headless automation FTW!

Going with Jest as the ultimate testing, mocking, and visualizing framework for the `matcher-cli` library was actually something we discussed about on one of the [issues](https://github.com/publiclab/simple-data-grapher/issues/49) and seeing the maximum amount of advantages along with headless and async compatibility, with support for almost anything you'd expect, or rather want out of a test runner, made this my first choice fot the same module.

This pretty much summarizes my third and fourth week of Google Summer of Code at Public Lab, and be sure to chime in for the future ones!

Thank you for giving this a read, ciao!