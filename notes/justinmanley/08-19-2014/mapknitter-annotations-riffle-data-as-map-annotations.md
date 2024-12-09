---
title: 'MapKnitter Annotations: Riffle Data as Map Annotations'
tagnames: mapknitter, gsoc, riffle, gsoc-2014, annotations
author: justinmanley
path: /notes/justinmanley/08-19-2014/mapknitter-annotations-riffle-data-as-map-annotations.md
nid: 11064
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/006/340/original/IMAG0382.jpg)

# MapKnitter Annotations: Riffle Data as Map Annotations

by [justinmanley](../profile/justinmanley) August 19, 2014 18:56

August 19, 2014 18:56 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [riffle](../tag/riffle), [gsoc-2014](../tag/gsoc-2014), [annotations](../tag/annotations)

----

### What I want to do

I want to have a discussion about how we might embed Riffle data in MapKnitter as map annotations.

@mathew suggested in [this comment](http://publiclab.org/notes/donblair/08-11-2014/research-note-workflows#c9933) that it might be possible to embed Riffle data in MapKnitter maps - which I thought was an awesome idea!

I think that the *goal* here is to enable users to upload data directly from Riffle sensors and have that data displayed on or beside the map in a way that will substantively augment the information payload of the map.

### What I've done

I looked around the Public Lab website and found some research notes that discuss or use Riffle data.  In particular: 

[Wiki: Open Water](http://publiclab.org/wiki/open-water)
[Wiki: RIFFLE](http://publiclab.org/wiki/riffle)
[Kayak Deployment on 8-7-2014](http://publiclab.org/notes/walkerjeffd/08-11-2014/kayak-deployment-on-8-7-2014)

[Visualization by @WalkerJeffD](http://phd.walkerjeff.com/d3/hubbard/)
[Baseflow separation visualization](http://phd.walkerjeff.com/talks/20131105/baseflow.html)

I also found a [sample data set](https://i.publiclab.org/system/images/photos/000/002/567/original/ALB006.txt) from a Riffle.  [EDIT: Turns out that wasn't actually a RIFFLE data set.  Here's a [RIFFLE data set](https://github.com/walkerjeffd/riffle-ito-apps/blob/master/analyses/20140807_kayak/data/LOGGER22.CSV) from @WalkerJeffD.  It's *much* more manageable!]

There's a *lot* of data here.  I don't think it's feasible or even desirable to want to present the data set to the users in raw form, or even to try to visualize *all* of the data.  I think it *would* be nice if we could create templates that automatically visualized one or two key parameters from the data.

The workflow / processsing pipeline that I envision is:

* User uploads Riffle data set (the data set above is in `.tsv.` format
* Built-in templates display Riffle directly on the map - no "embedded" charts or graphs - using d3 and Leaflet.
* A link to the data set is added to the sidebar so that viewers can click through and see the full, raw dataset.

[![IMAG0381.jpg](https://i.publiclab.org/system/images/photos/000/006/341/medium/IMAG0381.jpg)](https://i.publiclab.org/system/images/photos/000/006/341/original/IMAG0381.jpg)

### Next Steps / Additional Questions

The key question is: What default templates should we provide for visualizing the Riffle data?  @mathew? @WalkerJeffD?  @donblair? @warren?  Let's start with a single data visualization.  What is the data that will be most helpful to the most number of people?  (I'm thinking maybe temperature plotted against location, as @WalkerJeffD has done [here](http://walkerjeffd.github.io/riffle-ito-apps/analyses/20140807_kayak/index.html#temperature-map)).

How flexible / extensible should this system be?  Is it desirable to allow users to create their own custom visualizations using their own d3 and Leaflet code, or should we assume that users who are savvy enough to use d3 and Leaflet are savvy enough to do that kind of analysis on their own and publish it to GitHub, etc.

How much should users be able to customize the way that the data is displayed?