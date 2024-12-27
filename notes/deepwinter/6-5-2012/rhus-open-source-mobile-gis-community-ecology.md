---
title: "Rhus - Open Source Mobile GIS for Community Ecology "

tagnames: 'first-time-poster'
author: deepwinter
path: /notes/deepwinter/6-5-2012/rhus-open-source-mobile-gis-community-ecology.md
nid: 2348
uid: 808

cids: 876,8049,8052

---

![](https://publiclab.org/sites/default/files/anotherMainImage.png)

# Rhus - Open Source Mobile GIS for Community Ecology 

by [deepwinter](../../../profile/deepwinter) | June 05, 2012 07:34

June 05, 2012 07:34 | Tags: [first-time-poster](../tag/first-time-poster)

----

Several months ago we were inspired to start building an open source mobile GIS platform for community ecology, and want to share the current state of our work.  We knew that there were a lot of applications out there for creating geo-tagged imagery and uploading to social media, but we wanted something that was more geared towards citizen science data collection.  We saw the main goals as being offline usability, geo-spatial queries, open source customization, and visualizing change over time.  For community projects, it's also important to have seamless integration between mobile apps and a community website to facilitate social data collection.

Rhus consists of open source projects for iPhone, Android, and Web (see http://github.com/deepwinter for sources_ which all sync transparently and don't require continuous wifi access.  We're excited to leverage an emerging technology called TouchDB and bring it to the citizen science community.

<img src="http://www.winterroot.net/images/SyncingDiagram.png" />

All platforms use a <strong>schemaless database</strong>, which makes it very straightforward to support documents containing different data (fields).   The web app and data store is implemented as a 'couch app' which can be deployed and hosted for free at iriscouch.com. 

The applications we've build with this platform so far focus on collecting geotagged photos and showing change over time in specific geo-spatial 'zones' - Wildflowers of Detroit is the main example right now, but we a have a generic white label version too.   Also, as a simple proof of concept we recently deployed a copy of Rhus at a PLOTs community balloon mapping event to add geotagged ground level images to their map.  Clearly one aspect of this is to enhance the story telling capablility provided by the map, but we are interested in pushing this further to collect more detailed citizen science data.

Generic 'White Label' Demo: http://brat.winterroot.net
Wildflowers of Detroit : http://wildflowers.winterroot.net/ 
PLOTS at Dolores Park: http://wildbay.iriscouch.com/plots_dolores/_design/couchapp/_rewrite/index

<img src="http://www.winterroot.net/images/androidOne.jpeg" alt="Android App" />

Beyond this, we are aiming Rhus toward projects where smart phones can be used to collect <strong>scientific measurements</strong>, readings, and observations when detailed data points that can be crossreferenced with maps are needed, or a site is returned to several times between mapping events.

<strong>One of our ideas is that working in the community context requires an interface that is far more simple and intuitive than complex GIS software.</strong>   A couple of features we're currently excited about are the ability to filter datapoints by date range, and to let users do geo-spatial subqueries both of suggested regions and also zones of their own creation.

<img src="http://www.winterroot.net/images/firstScreenshot.png" alt="Drawing a custome zone" width="700" />
<img src="http://www.winterroot.net/images/secondScreenshot.png" alt="Getting results from a custom zone" width="700" />

Rhus aims to be a simple tool for launching community driven ecological data collection.  Perhaps a community wants to encourage citizens to participate in geo-tagging the locations of certain invasive species, photographing particularly nasty chemical discharges, or monitoring stream levels.   It's fairly straightforward to make small modifications to our open source projects and launch applications to do just this.   Also, a soon to be released 'generic' Rhus app will allow users to join specific projects without having to download a project specific app.  

The software is now moving out of the 'alpha' stage and is fairly stable, so we wanted to share the current state of our work, and will update with further research notes as we add features!   We're encouraging other developers to fork us and contribute on github. Checkout http://rhus.winterroot.net for more info and deployment basics.

<h2><a href="http://rhus.winterroot.net">http://rhus.winterroot.net</a></h2>
<img src="http://www.winterroot.net/images/mainImage.png" alt="Our logo" />