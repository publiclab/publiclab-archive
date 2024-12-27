---
title: "Web Working Group Monthly Recap 5: July 2015"

tagnames: 'mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12028'
author: warren
path: /notes/warren/08-03-2015/web-working-group-monthly-recap-5-july-2015.md
nid: 12117
uid: 1

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/011/028/original/Screenshot_2015-08-03_at_4.46.07_PM.png)

# Web Working Group Monthly Recap 5: July 2015

by [warren](../../../profile/warren) | August 03, 2015 20:49

August 03, 2015 20:49 | Tags: [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [wwg](../tag/wwg), [webwg](../tag/webwg), [response:12028](../tag/response:12028)

----

Hello again - a lot has happened since last month's Web Working Group recap, and mostly it's happened in the [Spectral Workbench](https://spectralworkbench.org) codebase, which is great because it's been way overdue. (Originally, this work was to be done in the spring.) 

##Spectral Workbench

We'll go through the usual overview of all codebases, but first, a summary of changes to SW: 

###Database

* the database schema was thoroughly revised, with many-to-many relationships between Spectrums and Sets refactored
* large amounts of code were stripped down and cleaned up as a result of the above
* whether a spectrum is calibrated is now stored in the spectrums table, simplifying queries 

###Interface

* a new graphing system, based on the [D3.js](https://d3js.org) framework, was built
* the new graphing system was used to entirely redesign the much neglected embeds system, [which is already live](/notes/warren/07-31-2015/sneak-preview-of-new-spectral-workbench-sets-display)
* lots of new user interface features were added; in sets, when you hover over a graph, a key appears, and the table of spectra is highlighted
* spectra in sets can be hidden or shown for clarity
* the whole thing looks much nicer

###Analysis

* the idea of "powertags" (from the PublicLab.org site) was adopted, allowing us `key:value` pairs for storage of metadata in tags
* tags are now used to refer to the source of a calibration by its ID, as in `calibration:111`
* "range" powertags are now possible (and will be deployed to the live site in coming days) which allow cropping a spectrum to a given range of wavelengths, as in: `range:410-850`

There's a lot more coming, in addition to a likely revision of the API and the Macros system. The Sets and Spectrums pages will be redesigned entirely based on the new graphing system. All, hopefully, by the end of August! (Fingers crossed!) You can follow a lot of the work at this pull request, which I'm using as a giant checklist for the project: https://github.com/publiclab/spectral-workbench/pull/139

I'll list the closed issues, but many of them have been folded into the big pull request linked to above.

* https://github.com/publiclab/spectral-workbench/issues/144 old embeds broken? 11 days ago
* https://github.com/publiclab/spectral-workbench/issues/132 parse/validate client-submitted JSON data 12 days ago
* https://github.com/publiclab/spectral-workbench/issues/60 an uncalibrated spectrum tagged "calibration" can make Capture unusable 18 days ago
* https://github.com/publiclab/spectral-workbench/issues/4 improve CSV format consistency and standards-compliance 18 days ago
* https://github.com/publiclab/spectral-workbench/issues/40 use tags to refer to calibration or absorption sources 18 days ago
* https://github.com/publiclab/spectral-workbench/issues/8 should offer 'autodetection' of brightest row in capture interface 18 days ago
* https://github.com/publiclab/spectral-workbench/issues/140 Spectral workbench spectrum CSV file data error 19 days ago
* https://github.com/publiclab/spectral-workbench/issues/42 reset graph colors when switching back from RGB mode 19 days ago
* https://github.com/publiclab/spectral-workbench/issues/75 abstract flot.js calls so API is graph library agnostic 19 days ago
* https://github.com/publiclab/spectral-workbench/issues/138 Spectral Workbench website down 24 days ago
* https://github.com/publiclab/spectral-workbench/issues/136 spectra not saving 25 days ago
* https://github.com/publiclab/spectral-workbench/issues/32 fix flot label styling 27 days ago
* https://github.com/publiclab/spectral-workbench/issues/50 refresh graph on window resize 27 days ago

##MapKnitter

Across other platforms, there's been less work, as my focus has been on Spectral Workbench. But we've had some changes:

* https://github.com/publiclab/mapknitter/191 Export console displays wrong resolution of active exports 11 days ago
* https://github.com/publiclab/mapknitter/188 https://mapknitter.org/recent 404 25 days ago
* https://github.com/publiclab/mapknitter/139 Link to the forums/mailing list 28 days ago 

As always, read more on Github Pulse; there were a number of bugs and improvements filed related to the new Leaflet system: https://github.com/publiclab/mapknitter/pulse/monthly 

##PublicLab.org (plots2)

For PublicLab.org, [only one issue was closed](https://github.com/publiclab/plots2/issues/242); the platform has stabilized a lot and we aren't getting many bug reports or requests at the web@publiclab.org Web Working Group support line. Read more: https://github.com/publiclab/plots2/pulse/monthly

However, this doesn't mean we don't need help. A number of major issues are open, including our highest priority, a rich text editing system. This will be a big project but we're looking for ways to tackle it, so if you're interested, please be in touch. Smaller projects may be found at https://github.com/publiclab/plots2/issues