---
title: "MapKnitter Long-Term Development"

tagnames: 'mapknitter, developers, coding, mapknitter-development, parent:mapknitter'
author: justinmanley
path: /wiki/mapknitter-long-term-development.md
nid: 11164
uid: 421556
cids: 
---

# MapKnitter Long-Term Development

by [justinmanley](/profile/justinmanley)

September 19, 2014 19:31 | Tags: [mapknitter](/tag/mapknitter), [developers](/tag/developers), [coding](/tag/coding), [mapknitter-development](/tag/mapknitter-development), [parent:mapknitter](/tag/parent:mapknitter)

----

## Goals ###

### Make MapKnitter more accessible to new users

* Create a sandbox example map based on one of the best maps from the MapKnitter archives, and encourage new users to play with the map.  There's no better way to learn how to use a new tool than to simply tinker with it.  A sandbox mode, where any changes that users make will be discarded at the end of their session (i.e. nothing is saved  to the database) would be helpful to users.
* Highlight a few maps, along with their complete stories, on the front page.  What was the impulse or environmental problem that prompted the map?  What were the challenges in acquiring the images?  How was the map used to teach, inform, or record (i.e. what was the impact)?  This will help users to understand the *why* of grassroots mapping.

### Make MapKnitter a more powerful tool for storing maps

* Unify maps created in MapKnitter so that the default view in MapKnitter is a ["supermap"](http://publiclab.org/notes/justinmanley/08-06-2014/mapknitter-annotations-interface-refactoring) of all images uploaded and stitched together at each location.
* Make it easier to search for maps by time, subject, and location (the "supermap" will help with this).

### Build an active group of community contributors

One of the great things about open source projects is the support of the community.  MapKnitter has a great community, but that's mostly a community of users, not of technical contributors.  Let's change that by making it easier to contribute to MapKnitter.

* Add tests.  It's difficult to solicit active contributors without a test suite.
* Make it easier to install MapKnitter.  Ideally provide an installation script along with MapKnitter that installs all necessary dependencies.
* Upgrade MapKnitter to more recent versions of Rails and Ruby.  There are gems (`jbuilder`, `guard`, etc.) which could make MapKnitter more powerful and easier to develop which cannot be used because they are not compatible with Ruby 1.8.7 and Rails 2.3.15.

  