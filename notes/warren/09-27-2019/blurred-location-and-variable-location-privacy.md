---
nid: 21033
title: Blurred Location and variable location privacy
path: public/static/notes/warren/09-27-2019/blurred-location-and-variable-location-privacy.md
uid: 1
tagnames: blog,leaflet,code,privacy,location-privacy,leaflet-blurred-location,variable-location-privacy,blurred-location,digital-impacts,with:sagarpreet
---

# Blurred Location and variable location privacy

With increased focus on location privacy in the wake of last year's New York Times report ([Your Apps Know Where You Were Last Night, and They're Not Keeping It Secret](https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html "https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html"), image above), we felt this was a good time to talk about some of the systems for storing locations, and some of the work Public Lab has been doing on what we're calling **blurred location** and a model for **variable location privacy**. We use both these terms to refer to systems that set out to share or store locations to different degrees of precision.

Clearly there are many reasons for the abuse or misuse of location data. Corporate and government data use must be constrained and responsible. But we are interested in exploring how location data, so useful in coordinating peer-based community strategies, may be used in systems that enable a structural approach to location privacy.

![image description](https://publiclab.org/i/35505.png "Screenshot_2019-01-07_at_8.08.49_PM.png")

While there is existing work on different aspects of this problem, with the generous support of the Digital Impact Fund, we have set out to implement a prototype system that allows for some location sharing to enable community scientists to coordinate regionally, while not requiring them to share high precision location that might expose them to risk. The keys here are:

- the ability to share and integrate locations of varying precision using a prototype mapping library
- an accessible vocabulary to communicate precision
- a design vocabulary and set of UI/UX norms to respect individual decision-making in relation to location privacy

Together, we aim for these to articulate a model that is simple to use and understand, as well as universal enough---and powerful enough---to be implemented in real-world web applications.

#### Existing models

As adding location for both people and for research sites on the [PublicLab.org](http://PublicLab.org) website became increasingly important for Public Lab's mission, we began looking at how we could store location while offering a means for people to share low-precision (or obfuscated) location. We explored a number of existing options but all had drawbacks, from postal codes, to the "in this area" model used by AirBNB:

![image description](/i/35504.png "Screenshot_2019-01-07_at_7.57.52_PM.png")

One of the biggest problems we saw in general was quick legibility---the ability to know how much precision has been scrubbed, for example, or the ability to perform the "blurring" mentally without an algorithm. Finally, we chose to go with truncation of longitude/latitude values, but to work on a coherent user interface and mental model to guide the translation from different precisions to a meaningful understanding of an "amount" of privacy.

#### A mental model of location privacy

What we sought was a simple mental model, and we based it around the latitude/longitude grid, known as a graticule in cartographic terms. By using a fixed grid, or a series of fixed grids at different decimal precisions, we avoided the need to insert random data, and we ensured the given truncated coordinates could be used to give a rough sense of the amount of precision offered. ([Try it out here](https://publiclab.github.io/leaflet-blurred-location/examples/))

![image description](/i/35506.gif "lbl.gif")

But most people can't quickly recall how big a coordinate grid square is, and so the interface for choosing one had to be intuitive and visual. We settled on a simple interactive web map using Leaflet, a very popular open source web mapping library. As you pan the map, you see the square overlapping the centerpoint of the map highlighted, indicating your current position at the center, and which grid square you "fall" in.

As you zoom the map in and out, you see the grid squares expanding, and if you zoom past a precision boundary, you'll see a sub-grid appear representing the 100 subdivisions of the larger grid square. Again, the smallest square overlapping the centerpoint is highlighted.

This provides an intuitive interactive means to visualize the region within which your location falls, and the maximum precision someone else will be able to determine your location to. By showing a map, we also remind people that spatial precision offers variable privacy -- in rural areas, a square mile may likely contain just a handful of people, rendering your position quite "findable," especially if it's your house. In urban areas, the same grid square might contain thousands of people.

Conveniently, as we are truncating, unchecking the "blurred location" checkbox simply shows a marker at the centerpoint of the map, and full precision is preserved, making the mixing of high and low precision data relatively simple.

#### Upcoming

This is only a brief overview of the Leaflet Blurred Location project, and we'll be posting some follow-up blog posts to dig deeper into different challenges and issues this new model and project has involved. And be sure to check out our proposal for a "blurred location" specification, here: [https://github.com/publiclab/leaflet-blurred-location/issues/205](https://github.com/publiclab/leaflet-blurred-location/issues/205)

We're interested in tools that can offer people in online spaces the ability to organize, coordinate, and communicate in regional scopes, while placing the decision of how precisely to share location in the hands of those whose privacy is at stake. And we have worked hard to ensure that a clear mental model and user interface make it easy to quickly grasp what's being shared and how much it's being obscured.

Thanks for reading, and we'd love to hear your thoughts as this library continues to develop.

#### Resources

- [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/leaflet-blurred-location)
- [https://github.com/publiclab/leaflet-blurred-location-display](https://github.com/publiclab/leaflet-blurred-location-display)
- [https://github.com/publiclab/blurred-location](https://github.com/publiclab/blurred-location)