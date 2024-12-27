---
title: "Web Working Group Monthly Recap 2: April 2015"

tagnames: 'mapknitter, web-development, software, plots2, spectral-workbench, web-wg, wwg, response:11734, webwg'
author: warren
path: /notes/warren/05-05-2015/web-working-group-monthly-recap-2-april-2015.md
nid: 11786
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/009/790/original/plots2-punchcard.png)

# Web Working Group Monthly Recap 2: April 2015

by [warren](/profile/warren) | May 05, 2015 21:53

May 05, 2015 21:53 | Tags: [mapknitter](/tag/mapknitter), [web-development](/tag/web-development), [software](/tag/software), [plots2](/tag/plots2), [spectral-workbench](/tag/spectral-workbench), [web-wg](/tag/web-wg), [wwg](/tag/wwg), [response:11734](/tag/response:11734), [webwg](/tag/webwg)

----

Welcome to the 2nd monthly Web Working Group report! I'm going to try to write faster this time; last month's took 3 hours to compile, and I want to do this every month if possible. Big picture, our focus was MapKnitter Annotations 2.0, wrapping up MapKnitter 2.0 changes and debugging as much as possible, and trying to get started on Spectral Workbench 2.0. That last goal didn't see too much progress yet, as things were quite busy. 

Above, just as a treat, I've posted [Github's graph](https://github.com/publiclab/plots2/graphs/punch-card) of *when in the week work gets done* for the history of the Plots2 project. Neat visualization!

This month the PL staff retreat took a week out of the middle of development for me personally, but we still got a lot done. Main Milestones show as follows:

* parts of [Spectral Workbench 2.0](https://github.com/publiclab/spectral-workbench/milestones/2.0%20launch) (7 of 58 issues done... ug)
* parts of the [Spectral Workbench graphing system](https://github.com/publiclab/spectral-workbench/milestones/Graphing%20design%20overhaul) (9 open issues, same as last month)
* parts of [MapKnitter 2.1](https://github.com/publiclab/mapknitter/milestones/2.1%20release) (27 open issues, 12 closed)

[![wwg-update-april-2015.png](https://i.publiclab.org/system/images/photos/000/009/791/medium/wwg-update-april-2015.png)](https://i.publiclab.org/system/images/photos/000/009/791/original/wwg-update-april-2015.png)

_The [Waffle.io status board](https://waffle.io/publiclab/plots2) for PL's main code projects_

###Issue reporting and non-coder contributions

We've made a push to streamline the issue reporting process, and to emphasize the central role bug and feature reports have in developing Public Lab software. Importantly, this is a role that can be fulfilled by non-coders! See especially the [What to Report section](/wiki/issues#What+to+report) of the newly updated Issues page. 

As always, thanks for all the input and feedback -- not to mention testing -- from community members! As I mentioned last month, if you'd like to bump up or request priority for a feature or bug, please feel free to leave a comment here and we'll see what we can do. For a more complete look at our planned work in the next month, [check out the Waffle.io board](https://waffle.io/publiclab/plots2) in the Ready column. The Priority column includes tasks we're still gathering information for, and/or looking to fit into our schedule, in part due to grant support.

[![mapknitter-history.png](https://i.publiclab.org/system/images/photos/000/009/792/large/mapknitter-history.png)](https://i.publiclab.org/system/images/photos/000/009/792/original/mapknitter-history.png)

_Contributions to MapKnitter since 2009! [via Github](https://github.com/publiclab/mapknitter/graphs/contributors)_

###MapKnitter

MapKnitter 2.0's recent launch set us up for work on Annotations 2.0, and mid-month, I was able to push out a preliminary version of @justinmanley's work from the past summer. Please give it a spin and provide feedback -- [try this demo map](https://mapknitter.org/maps/newtown-creek-docsearls/annotate). We also may have [a fix for the Firefox/Mac issue](https://github.com/publiclab/mapknitter/issues/143), but that is still pending. 9 new issues were also created by 7 people.

13 issues were closed, total -- [read more in Github Pulse](https://github.com/publiclab/mapknitter/pulse/monthly)

* https://github.com/publiclab/mapknitter/issues/173 maps not shown on PublicLab.org profile page a day ago
* https://github.com/publiclab/mapknitter/issues/170 Auto place picture with skycam app crash the map 4 days ago
* https://github.com/publiclab/mapknitter/issues/164 Export map taking long 4 days ago
* https://github.com/publiclab/mapknitter/issues/168 Outline mode makes images not entirely transparent 5 days ago
* https://github.com/publiclab/mapknitter/issues/88 white edges + image offset when exporting maps 10 days ago
* https://github.com/publiclab/mapknitter/issues/166 Weird exported jpeg image: too much of the image cropped 15 days ago
* https://github.com/publiclab/mapknitter/issues/165 logging in at "www.mapknitter.org" does not log you into mapknitter.org 18 days ago
* https://github.com/publiclab/mapknitter/issues/161 Requiring a lat/lon 18 days ago
* https://github.com/publiclab/mapknitter/issues/87 Get new Annotations 2.0 running again 19 days ago
* https://github.com/publiclab/mapknitter/issues/118 Image deletion by non logged in users should return useful error 21 days ago
* https://github.com/publiclab/mapknitter/issues/146 remove image from sidebar if deleted from image popup toolbar 21 days ago
* https://github.com/publiclab/mapknitter/issues/145 Broken legacy links at /map/view/foo bug
* https://github.com/publiclab/mapknitter/issues/144 Embed code issues

###Spectral Workbench

Much less progress was made on Spectral Workbench, in part due to the staff retreat, slower than expected progress on MapKnitter Annotations 2.0, and other projects. Only one issue was closed, and [it was actually fixed a while ago](https://github.com/publiclab/spectral-workbench/issues/81). Still, only two new issues were opened, and work will probably begin soon on auto-calibration and the graphing system overhaul. Read more in [Github Pulse](https://github.com/publiclab/spectral-workbench/pulse/monthly).

###Plots2 (PublicLab.org)

Between issue cleanup and some hard work early in the month, a LOT has been done on the Plots2 codebase; a total of 25 issues were closed by @btbonval and myself, and 8 issues were opened by 3 people -- real quantitative progress vs. last month! :-P

We launched a new "Features" system which moved many temporary content features such as banners and the 5th year anniversary top bar into a database-backed editor which site admins can change without rolling out new code. This has lightened the codebase, almost eliminated content-based commits, and set us up for a possible "de-branding" of the site to make it easier for communities besides Public Lab to use the Plots2 software. We do need to add template caching to this Features system to tamp down database calls and memory use, however. 

Notable changes also include a new http://publiclab.org/people listing, a login interface revamp, and a major optimization to tag lookups (under the hood) which has lowered our memory footprint. Read more in [Github Pulse](https://github.com/publiclab/plots2/pulse/monthly).

* https://github.com/publiclab/plots2/issues/277 Parent tags no longer showing up 4 days ago
* https://github.com/publiclab/plots2/issues/276 Main header image fails to upload in edit mode 4 days ago
* https://github.com/publiclab/plots2/issues/145 site hangs on /search/mapknitter; optimize 4 days ago
* https://github.com/publiclab/plots2/issues/239 address persnickety markup warnings in tests 9 days ago
* https://github.com/publiclab/plots2/issues/273 Comment previews are blank 15 days ago
* https://github.com/publiclab/plots2/issues/206 add sorting to /profiles and alias /people 21 days ago
* https://github.com/publiclab/plots2/issues/263 make /people listing sorted by last update 21 days ago
* https://github.com/publiclab/plots2/issues/270 rails console crashes on up arrow key or back key 22 days ago
* https://github.com/publiclab/plots2/issues/200 show password reset link on profile pages 26 days ago
* https://github.com/publiclab/plots2/issues/252 Change research tab categories - Mar 31
* https://github.com/publiclab/plots2/issues/196 pdf printing having trouble with links, photos - Mar 31
* https://github.com/publiclab/plots2/issues/7 Profile Pages - Apr 1
* https://github.com/publiclab/plots2/issues/66 Subdomains for chapters - Apr 1
* https://github.com/publiclab/plots2/issues/198 ordering of wiki edits in /wiki is incorrect - Apr 1
* https://github.com/publiclab/plots2/issues/149 Adding Back 2 School Promotion to index.htm carousel - Apr 1
* https://github.com/publiclab/plots2/issues/148 right justified research note? - Apr 1
* https://github.com/publiclab/plots2/issues/144 missing page? - Apr 1
* https://github.com/publiclab/plots2/issues/134 comments say "error:there was a problem" but work anyways - Apr 1
* https://github.com/publiclab/plots2/issues/135 /wiki missing some recently updated pages - Apr 1
* https://github.com/publiclab/plots2/issues/127 lose place on website after login - Apr 1
* https://github.com/publiclab/plots2/issues/114 Embed bulk catalog on /wiki/kits - Apr 1
* https://github.com/publiclab/plots2/issues/32 Map urls not changing along with revised title - Apr 1
* https://github.com/publiclab/plots2/issues/250 talk page doesn't work for long titles - Apr 2
* https://github.com/publiclab/plots2/issues/266 error running plots2 locally - Apr 2
* https://github.com/publiclab/plots2/issues/253 can't enter new tags that are a subset of existing tagname - Apr 3

Thanks again to our contributors, both coders and non-coders -- and if you know any coders who might like to get involved, point the at http://publiclab.org/wiki/developers!