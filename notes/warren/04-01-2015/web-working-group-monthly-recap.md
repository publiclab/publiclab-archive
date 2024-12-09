---
title: 'Web Working Group Monthly Recap'
tagnames: mapknitter, software, plots2, spectral-workbench, web-wg, wwg, webwg
author: warren
path: /notes/warren/04-01-2015/web-working-group-monthly-recap.md
nid: 11734
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/009/522/original/waffleio.png)

# Web Working Group Monthly Recap

by [warren](../profile/warren) April 01, 2015 15:43

April 01, 2015 15:43 | Tags: [mapknitter](../tag/mapknitter), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [web-wg](../tag/web-wg), [wwg](../tag/wwg), [webwg](../tag/webwg)

----

###Overall goals for the coming month

We've begun tracking prioritization of all Public Lab coding in this Waffle.io board: https://waffle.io/publiclab/plots2, where "Ready" are on deck for the next week or two, and "Priority" are requests from community or staff for important coding projects to be taken on in the coming weeks. Some of these are big projects -- like MapKnitter Annotations 2.0 -- but many are also simple bug fixes. In general, **we're beginning to pivot away from MapKnitter towards Spectral Workbench** and anticipate big changes in calibration, graphing, and more, especially taking advantage of the huge infrastructural work that's gone on in the past month.

Input and feedback -- not to mention testing -- from community members is essential; thanks for your help! If you'd like to bump up or request priority for a feature or bug, please feel free to leave a comment here and we'll see what we can do. For a more complete look at our planned work in the next month, [check out the Waffle.io board](https://waffle.io/publiclab/plots2) in the Priority and Ready column.

The major milestones we're working on this month are:

* parts of [Spectral Workbench 2.0](https://github.com/publiclab/spectral-workbench/milestones/2.0%20launch) (6 of 57 issues done, yikes!)
* parts of the [Spectral Workbench graphing system](https://github.com/publiclab/spectral-workbench/milestones/Graphing%20design%20overhaul) (9 open issues)
* parts of [MapKnitter 2.1](https://github.com/publiclab/mapknitter/milestones/2.1%20release) (29 open issues)

This is also a good moment to try to recruit some more coding contributors! We provide a lot of software for free, and it's the contributions of community members which enable us to keep refining, expanding, and improving these systems! If you code, or know someone who does, consider [joining the Developers discussion list](/wiki/developers), introduce yourself, and see where you can pitch in!

[![mapknitter-new.png](https://i.publiclab.org/system/images/photos/000/009/523/medium/mapknitter-new.png)](https://i.publiclab.org/system/images/photos/000/009/523/original/mapknitter-new.png)

###MapKnitter

LOTS of work was done on [MapKnitter](https://mapknitter.org) since the MapKnitter 2.0 launch in mid-February; 1,452 files have changed since the start of March and there have been 983 lines of code changed or added. Most was to do with exporting, embedding, and tagging, along with lots of bugfixes, but the biggest change was [image auto-placement with GPS tags](/notes/warren/03-19-2015/automatic-placement-of-images-in-mapknitter-using-gps-metadata). We also got a new logo and "look" -- as pictured above. [15 new issues](https://github.com/publiclab/mapknitter/pulse/monthly) were also created, however, and we have a major one with Firefox compatibility. 

12 issues were closed, total -- [read more in Github Pulse](https://github.com/publiclab/mapknitter/pulse/monthly)

* https://github.com/publiclab/mapknitter/issues/138 remove recaptcha prompt from export tab 4 minutes ago
* https://github.com/publiclab/mapknitter/issues/155 selecting multiple images to upload from system dialog a day ago
* https://github.com/publiclab/mapknitter/issues/157 display notice when export takes longer than 4 hours 2 days ago
* https://github.com/publiclab/mapknitter/issues/147 tag adding, display seems broken; also add tests 5 days ago
* https://github.com/publiclab/mapknitter/issues/151 need 'Access-Control-Allow-Origin' header on AWS for exif geotagging 6 days ago
* https://github.com/publiclab/mapknitter/issues/150 alert when ppl try to export >30 images 6 days ago
* https://github.com/publiclab/mapknitter/issues/144 Embed code issues 6 days ago
* https://github.com/publiclab/mapknitter/issues/148 Add help link by export progress bar and set default 5cm export min 6 days ago
* https://github.com/publiclab/mapknitter/issues/145 Broken legacy links at /map/view/foo 13 days ago
* https://github.com/publiclab/mapknitter/issues/67 Use exif.js to attempt to place images 13 days ago
* https://github.com/publiclab/mapknitter/issues/137 can't download exported map 27 days ago
* https://github.com/publiclab/mapknitter/issues/133 can't download exported map 27 days ago

###SpectralWorkbench

[Spectral Workbench](https://spectralworkbench.org) is gearing up for some big changes; some of these have been delayed by ongoing MapKnitter work and some plots2 work, but this month, 4 authors pushed 42 commits to our master branch. 110 files and 2,651 lines of code changed! This was mostly cleanup and debugging, as well as some login sequence reworking, but also included moving all SW's static assets into the Rails asset pipeline, which makes development much easier and more legible, and slimmed down the project overall. It's now **much easier** to install the Spectral Workbench codebase!

14 issues were closed, total -- [read more in Github Pulse](https://github.com/publiclab/spectral-workbench/pulse/monthly) -- and 15 new issues were opened, largely through the excellent [feedback in this call for input](/notes/warren/02-10-2015/planning-for-spectral-workbench-2-0)

* https://github.com/publiclab/spectral-workbench/issues/106 searching for spectra to compare to doesn't work 9 days ago
* https://github.com/publiclab/spectral-workbench/issues/113 Log in issue with smartphone 12 days ago
* https://github.com/publiclab/spectral-workbench/issues/114 CSV Download Broken 13 days ago
* https://github.com/publiclab/spectral-workbench/issues/98 can't select existing calibration (chrome & firefox, mac & windows) 15 days ago
* https://github.com/publiclab/spectral-workbench/issues/105 unable to apply macros to spectra 20 days ago
* https://github.com/publiclab/spectral-workbench/issues/49 enable markdown in comments 28 days ago
* https://github.com/publiclab/spectral-workbench/issues/88 comment posting says "There was an error" in popup, but still posts 28 days ago
* https://github.com/publiclab/spectral-workbench/issues/89 comments show html tags 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/92 update README with Bower instructions 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/25 paginate /tags, /contributors, and sets on profiles 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/97 app hanging; possible long queries 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/94 set up back_to parameters for login sequences on Mar 2
* https://github.com/publiclab/spectral-workbench/issues/78 custom 404 error not showing on Mar 2
* https://github.com/publiclab/spectral-workbench/issues/74 port assets into asset pipeline; make compatible with index.manifest on Mar 1

###Plots2 (PublicLab.org)

PublicLab.org saw quite a bit of activity as well; as in Spectral Workbench, it was ported into the Rails asset pipeline, and login sequence, menus, page sorting, and the wiki index were all improved. 2 authors pushed 41 commits to the project, 449 files and 9,996 lines of code were changed and 66,047 were deleted -- mostly in the asset pipeline reorganization. It's now **much easier** to install the plots2 codebase, too!

23 issues were closed, total -- [read more in Github Pulse](https://github.com/publiclab/plots2/pulse/monthly) -- and 14 new issues were opened. (This number increased after, late in the day, I combed through old issues and closed a bunch. Check the Pulse to see the extras not included in the list below.)

* https://github.com/publiclab/plots2/issues/252 Change research tab categories 18 hours ago
* https://github.com/publiclab/plots2/issues/259 wiki index ordering 2 days ago
* https://github.com/publiclab/plots2/issues/130 Wiki index page not showing recent updates 6 days ago
* https://github.com/publiclab/plots2/issues/258 sort places and tools by "most recently edited" 6 days ago
* https://github.com/publiclab/plots2/issues/255 Add more space to the list line-spacing 13 days ago
* https://github.com/publiclab/plots2/issues/237 Top menu bar: "participate" 13 days ago
* https://github.com/publiclab/plots2/issues/251 Update mapping mailing list to include poles 21 days ago
* https://github.com/publiclab/plots2/issues/238 create publiclab.org/openhour 21 days ago
* https://github.com/publiclab/plots2/issues/248 wiki page form is off, can easily be missed 23 days ago
* https://github.com/publiclab/plots2/issues/246 searching borked 26 days ago
* https://github.com/publiclab/plots2/issues/241 set up back_to parameters for login sequences 28 days ago
* https://github.com/publiclab/plots2/issues/197 reorganize static assets to use Rails Asset Pipeline & Bower 28 days ago

Thanks to everyone for your contributions!