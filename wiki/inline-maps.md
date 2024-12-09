---
title: 'Inline maps'
tagnames: power-tags, parent:power-tags
author: warren
path: /wiki/inline-maps.md
nid: 14171
uid: 1

---

# Inline maps

by [warren](../profile/warren), [sagarpreet](../profile/sagarpreet)

May 09, 2017 22:25 | Tags: [power-tags](../tag/power-tags), [parent:power-tags](../tag/parent:power-tags)

----

A brief guide to embedding maps on PublicLab.org pages. 

> Note: these work normally when in a post, or when there is only one per page. We are [debugging](https://github.com/publiclab/plots2/issues/5678) the issues on this page where we have many maps at once. Thanks!

Inline maps are a form of `inline power tags` which you can read more about on [the power tags page](/wiki/power-tags). These will display any content tagged with `lat:____` and `lon:____` tags showing location, near the provided coordinates. 

Basic usage is with `[map:content:_latitude_:_longitude]`; for example:

`[map:content:29.9:-90.0]` gets you:

[map:content:29.9:-90.0]

`[map:content:40.7:-73.9]` gets you:

[map:content:40.7:-73.9]

A good place to quickly find lat/lon for any place is http://osm.org (the URL will change as you pan around).

### Zoom level

Note how if you specify more precise numbers (more digits), it doesn't search as widely. Also, the precision sets the zoom level of the map, so shorter (less precise) coordinates make for a more zoomed-out map.

`[map:content:40.70:-73.90]`

[map:content:40.70:-73.90]

### Maps with preset layers

This syntax can be used to show layers from [Leaflet Environmental Layers](https://github.com/publiclab/leaflet-environmental-layers/) in an embedded map:

`[map:layers:content:41.7:-71.5:Unearthing,toxicReleaseLayer]`

[map:layers:content:41.7:-71.5:Unearthing,toxicReleaseLayer]

### Tag-filtered maps

This type of inline map shows only content tagged with a given tagname. It follows the format `[map:tag:_tagname_:_latitude_:_longitude]`. For example:

`[map:tag:infragram:43:-71]` shows only nodes tagged with `infragram`.

[map:tag:infragram:43:-71]


## Questions on a topic near a place

(we don't currently have a lot of questions tagged with locations, but if we add some it'll work)

`[map:tag:question:infragram:43:-71]`

[map:tag:question:infragram:43:-71]

## People maps

[map:people:42:-71]


****

# Customization

## Customizing maps on PublicLab.org  

We've made a simple way to embed interactive maps that feature Public Lab content as well as externally hosted environmental data. We've balanced simplicity of use (for non-programmers) with customizability. From the simplest to most customized options for making maps:  

1. Simplest way: use inline maps - [https://publiclab.org/wiki/inline-maps](https://publiclab.org/wiki/inline-maps) - several customization options
    - No coding needed
2. If this won't meet your needs, consider if what you need would be useful to others; if so, request the feature on LEL: [https://github.com/publiclab/leaflet-environmental-layers](https://github.com/publiclab/leaflet-environmental-layers) (PL staff input too, re: broader community utility)
    - Consider if the inline maps syntax will accommodate this new feature?
    - OR would it be OK as a default for all maps on PL?
    - This path takes some community process and necessarily slower integration work, but comes with more future support and sustainability
3. If it wouldn't be useful for other LEL users, consider making a static instance of LEL, hosted on GH Pages, and embedding it using an `<iframe\>`
    - Here's an [example of this](https://github.com/publiclab/leaflet-environmental-layers/blob/master/example/unearthing-pvd.html) (source code [viewable on GitHub here](http://publiclab.github.io/leaflet-environmental-layers/example/unearthing))
    - This allows ANY plug-and-play leaflet code as per [http://leafletjs.com/](http://leafletjs.com/)
4. Hybrid approach: use inline JS to add leaflet settings directly as properties to a native inline map object
    - A bit brittle, a bit obscure
    - here is an example of [how to do this on a wiki page]( https://publiclab.org/wiki/inline-maps-examples)
    - Hotfix --- while development on inline syntax is built and then we can unbrittle your map. Could introduce bugs and lives outside of tested development.
        - It's a nice bridge to either B or C