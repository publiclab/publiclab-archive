---
title: 'Web Working Group Monthly Recap 6: August 2015'
tagnames: mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12117
author: warren
path: /notes/warren/09-08-2015/web-working-group-monthly-recap-6-august-2015.md
nid: 12207
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/011/519/original/Screenshot_2015-09-08_at_3.27.15_PM.png)

# Web Working Group Monthly Recap 6: August 2015

by [warren](../profile/warren) September 08, 2015 19:45

September 08, 2015 19:45 | Tags: [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [wwg](../tag/wwg), [webwg](../tag/webwg), [response:12117](../tag/response:12117)

----

A big month, but almost entirely for Spectral Workbench -- skip to the bottom to see those changes! And we're a few days late on this update, so apologies!

But a quick roundup of our other projects first:


[![Screenshot_2015-09-08_at_3.43.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/520/medium/Screenshot_2015-09-08_at_3.43.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/520/original/Screenshot_2015-09-08_at_3.43.18_PM.png)



##New "Easy Installation" 

[Following up on a tip](https://groups.google.com/forum/#!topic/plots-dev/3SzcjUBPUfQ) from a member of [Parts & Crafts](http://partsandcrafts.org) who has [contributed to Public Lab in the past](/notes/warren/4-20-2011/final-day-infrared-photography-parts-crafts), we posted [simple build instructions](https://github.com/publiclab/plots2/#simple-installation-with-cloud9) for both [Spectral Workbench](https://github.com/publiclab/spectral-workbench) and [plots2](https://github.com/publiclab/plots2) for the [Cloud9](https://c9.io) service, which makes it crazy easy to get a copy of the code up and running in a free Cloud9 server, in your browser, from any computer, with no downloads or anything. It's now a ~5 minute procedure to get these running from scratch, from any computer! 

This'll be useful at the...

##Somerville, MA coding meetup

Which is tomorrow, at Parts & Crafts -- see the announcement here: http://publiclab.org/notes/warren/09-03-2015/public-lab-boston-somerville-coding-meetup-parts-crafts

And for anyone looking to get up and running quickly with PL code!


##Open Pipe Kit

I submitted six new drivers, developed for the [Open Air](/tag/open-air) initiative, to [Open Pipe Kit](/wiki/open-pipe-kit)'s drivers directory at http://packages.openpipekit.org/ - for Arduino-based sensors, and several dust sensors. 



##Leaflet.DistortableImage

We had a small but welcome change submitted to [Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage/) and some possible interest in tackling other bugs: 

https://github.com/publiclab/Leaflet.DistortableImage/pull/55


##MapKnitter

Very little activity on MapKnitter this month. We had 2 MapKnitter bugs moved to the Leaflet.DistortableImage tracker, and no other development work this month: 

* https://github.com/publiclab/mapknitter/issues/196 glitch with scaling, rotating skewing 11 days ago
* https://github.com/publiclab/mapknitter/issues/136 image distortion/manipulation breaks when map corner points too close together 11 days ago

We did, however post a Cloud9 install script, as described above, although it needs testing:

* https://github.com/publiclab/mapknitter/issues/197 Cloud9 initialization -- needs testing 12 days ago


##PublicLab.org

A variety of small changes were completed and issues posted on [the plots2 codebase](https://github.com/publiclab/plots2)

The following new features were merged, and issues closed:

* https://github.com/publiclab/plots2/issues/316 link to store in header 4 days ago
* https://github.com/publiclab/plots2/issues/312 Cloud9 initialization 5 days ago
* https://github.com/publiclab/plots2/issues/311 adjusting images to be full-width for better display 13 days ago
* https://github.com/publiclab/plots2/issues/310 only detect subdomains in production mode 13 days ago
* https://github.com/publiclab/plots2/issues/306 blog tags on wiki pages 22 days ago
* https://github.com/publiclab/plots2/issues/304 Missing research note 28 days ago

Seven new issues were created: 

* https://github.com/publiclab/plots2/issues/315 Research note main image crops unpredictably 7 days ago
* https://github.com/publiclab/plots2/issues/314 Consider upgrading etherpad to hackpad, which is now open source 9 days ago
* https://github.com/publiclab/plots2/issues/313 Create powertag for "This is part of a series on Xtopic" 11 days ago
* https://github.com/publiclab/plots2/issues/309 Banned user accounts still show as having liked things 15 days ago
* https://github.com/publiclab/plots2/issues/308 filter for users who have profile bio content 16 days ago
* https://github.com/publiclab/plots2/issues/307 update front page link to /wiki/nonprofit-initiatives instead of /initiatives 16 days ago
* https://github.com/publiclab/plots2/issues/305 Blog template and design improvements 22 days ago

##Spectral Workbench

Spectral Workbench is where all the action is this month. I'm not even going to try to list it all here -- there were over 30 issues closed, and over 20 new issues opened. The bulk of Spectral Workbench 2.0 is rolled into this, with a massive redesign of the graphing library I've [written](/notes/warren/08-06-2015/wavelength-range-limiting-in-spectral-workbench) about [more than once](/warren/08-18-2015/preview-of-new-spectrums-and-sets-pages-on-spectral-workbench). To see the full set of issues opened and closed, see [this smaller merged pull request](https://github.com/publiclab/spectral-workbench/pull/165) and for the big one, take a look at this huge one involving massive change over 52 different files, and 2,100 new lines of code: 

https://github.com/publiclab/spectral-workbench/pull/174

For what it's worth, there are over 70 issues remaining open, although we may not tackle all of those in 2.0 -- some may wait for 2.1 or later. Thanks for your patience on this and we'll be announcing a beta soon!

There's also been a parallel project by @Sreyanth to implement [a "Procedures" system](/notes/Sreyanth/07-14-2015/stepwise-procedures-to-guide-users-through-testing) so people can post, share, and follow each others' experimental procedures. An early version of this is being [merged in shortly](https://github.com/publiclab/spectral-workbench/pull/194). 

We're hoping to publish many of these changes in the next few days, so stay tuned!

Thanks again to our contributors, both coders and non-coders -- and if you know any coders who might like to get involved, point the at http://publiclab.org/wiki/developers!
