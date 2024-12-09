---
title: 'MapKnitter Annotations: Interface Refactoring Underway'
tagnames: mapknitter, map-annotations, annotations
author: justinmanley
path: /notes/justinmanley/08-19-2014/mapknitter-annotations-interface-refactoring-underway.md
nid: 11062
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/006/328/original/Screenshot_from_2014-08-18_18_53_28.png)

# MapKnitter Annotations: Interface Refactoring Underway

by [justinmanley](../profile/justinmanley) August 19, 2014 00:03

August 19, 2014 00:03 | Tags: [mapknitter](../tag/mapknitter), [map-annotations](../tag/map-annotations), [annotations](../tag/annotations)

----

### Background ###

I am working to add rich annotation functionality to MapKnitter as part of Google Summer of Code (read about my project here: http://publiclab.org/notes/justinmanley/03-18-2014/mapknitter-annotations-using-fabric-js-gsoc-2014-proposal). This is my ninth week of coding.

The goal of this research note is to provide an update to the community on my progress with refactoring the MapKnitter interface.

If you're interested in reading about `Leaflet.Illustrate`, the Leaflet plugin that I wrote over the past few weeks to power MapKnitter's annotations, you can check out my [last research note](http://publiclab.org/notes/justinmanley/07-29-2014/mapknitter-annotations-version-0-0-2-released-with-l-illustrate-textbox-and-l-illustrate-pointer).

You can check out our previous discussion of this interface refactorinng in my previous research note:

[August 6, 2014 - MapKnitter Annotations: Interface Refactoring](http://publiclab.org/notes/justinmanley/08-06-2014/mapknitter-annotations-interface-refactoring) 

### Progress ###

Screenshot with Vidun's upload modal!

[![Screenshot_from_2014-08-18_19_00_27.png](https://i.publiclab.org/system/images/photos/000/006/329/medium/Screenshot_from_2014-08-18_19_00_27.png)](https://i.publiclab.org/system/images/photos/000/006/329/original/Screenshot_from_2014-08-18_19_00_27.png)

#### Overview ####

So far, I have:

* Added commenting and tagging to MapKnitter maps
* Begun integrating @vidun's work on the upload interface

Under the hood, I've done a lot of work to make it easier for future developers to improve MapKnitter.  I've: 

* Set up [Bundler](http://bundler.io/) to handle MapKnitter's' dependencies
* Set up [Sprockets](https://github.com/sstephenson/sprockets) and [bower](bower.io) for handling all of MapKnitter's static assets.
* Given MapKnitter a RESTful API using Rails' resourceful routes.

#### Commenting and Tagging ####

I borrowed a *lot* of the commenting and tagging functionality from the Public Lab website.  That means that commenting and tagging works pretty much the same in MapKnitter as it does on Public Lab.  Among other things, users can write comments *and* the descriptions of their maps in Markdown.

#### Sprockets & bower ####

MapKnitter's static assets were a *mess* before this.  

MapKnitter uses quite a few third-party libraries: Bootstrap, JQuery-Fileupload, Leaflet, Leaflet.Draw, etc.  Using bower will make it clearer which javascript and css files are maintained by third parties and easier to upgrade to newer versions.

Using Sprockets enables MapKnitter to handle static assets in a much more elegant and maintanable way.  Because this method of asset pipelining is the default in Rails 3.1+, this will also make it much easier should Public Lab ever upgrade MapKnitter to a more modern version of Ruby or Rails.

I found these articles helpful for integrating MapKnitter with Sprockets:

* [Giving Rails 2 the Asset Pipeline](http://pivotallabs.com/giving-rails-2-the-asset-pipeline-/)
* [Sprockets 2 With Rails 2.3](http://jaredonline.github.io/blog/2012/05/16/sprockets-2-with-rails-2-dot-3/)
  (most of the code hooking Sprockets in MapKnitter is copied directly from here).

#### RESTful API ####

  MapKnitter was previously *not* RESTful.  Most significantly, resources were created, modified, and deleted using HTTP POST requests (as opposed to POST, PUT, and DELETE requests, respectively).  Providing a RESTful API for MapKnitter will enable folks to use MapKnitter from the command line with `curl`.  More importantly, it makes the code clearer, more logical, and more maintainable.  For example, the [routes](https://github.com/manleyjster/mapknitter/blob/annotation-interface/config/routes.rb) can now be declared as: 

    app.resources :maps do |maps|
        maps.resources :tags
        maps.resources :comments
        maps.resources :uploads
    end

### TODO ###

* Integrate Vidun's work on the MapKnitter upload interface.  I've already merged Vidun's work into my MapKnitter branch, so now it's a matter of making sure everything works with the new routes, etc.

* Merge Anish's LeafletImageDistort plugin.

* Push MapKnitter site to beta server that @dogi set up for beta testing by MapKnitter community.  (It will be ready for 

beta-testing as soon as I merge Vidun and Anish's work).

* Integrate the annotation features that I have developed in `Leaflet.Illustrate`.  This will mean adding methods to `Leaflet.Illustrate` to serialize annotations to GeoJSON, adding routes, models, and controllers for annotations, and designing an annotation toolbar that will allow folks to change the colors and styles of polyline, polygon, and text annotations.

  I am also interested in enable users to add Riffle data to the map as annotations, so I'd like to talk to @mathew and others to figure out how to best implement this.

* Create a workflow for generating Public Lab research notes from MapKnitter maps.  This means generating an HTML POST query from MapKnitter map data that will be submitted to the Public Lab website to create a research note.