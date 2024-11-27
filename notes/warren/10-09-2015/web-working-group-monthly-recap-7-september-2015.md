---
nid: 12284
title: Web Working Group Monthly Recap 7: September 2015
path: public/static/notes/warren/10-09-2015/web-working-group-monthly-recap-7-september-2015.md
uid: 1
tagnames: mapknitter,web-development,software,plots2,spectral-workbench,wwg,webwg,response:12207
---

# Web Working Group Monthly Recap 7: September 2015

This month's work was a bit sporatic (for me, at least) because of the Public Lab staff retreat and the following week's desperate catch-up. Still, lots of work has continued on Spectral Workbench, and there've been a few other highlights as well.

Many apologies for the late update this month! I was just too overwhelmed with post-retreat work to get this out the door until now.


##Systems administration

Sebastian Silva (@icarito), our sysadmin, has been hard at work tuning and optimizing our systems, and I've worked with him to push through a few fixes and changes, including:

* a fix for callouts, which is where in comments you can use @username syntax to ensure someone gets an email notification of your comment (this had been broken for some time, unfortunately!)
* a mix of small fixes for notification emails
* a [MapKnitter process optimization](https://github.com/publiclab/mapknitter/pull/198) which was tested last night, and seems to work (please report any exporting trouble you have)
* an upcoming mail server switch which we hope will resolve some of the issues with PL email going to some folks' spam inboxes



[![Screenshot_2015-10-09_at_12.41.24_PM.png](https://i.publiclab.org/system/images/photos/000/011/893/medium/Screenshot_2015-10-09_at_12.41.24_PM.png)](https://i.publiclab.org/system/images/photos/000/011/893/original/Screenshot_2015-10-09_at_12.41.24_PM.png)



##Mapmill.org

Sebastian has also put up the long-awaited MapMill.org 2.0, although there's a remaning bug where uploading doesn't actually work (so it's not useful yet!) but we hope to have that resolved shortly and will announce then. 

##Spectral Workbench 2.0

Finally, LOTS of work has gone into a new calibration system for SWB 2.0, [as documented here](/notes/warren/09-30-2015/new-wavelength-calibration-procedure-preview-for-spectral-workbench-2-0), which has also led into a very interesting and productive discussion of calibration references, NIST, and [possible errors in Wikipedia's published fluorescent bulb reference](/notes/cfastie/10-06-2015/twin-peaks-tb-or-hg).

![swb](https://i.publiclab.org/system/images/photos/000/011/718/large/Screenshot_2015-09-30_at_3.45.31_PM.png)

The calibration system and [a new root-mean-square-error based assessement metric](https://github.com/publiclab/spectral-workbench/issues/209) for calibrations are big features which promise to improve accuracy and precision for everyone, while relating our data more explicitly to well-known external references like NIST. 

I've also begun to worry about how much longer this big upgrade is taking -- there've been plenty of distractions and urgent other work, but I also decided to move 12 issues into a 2.1 release, for some future date. 

Still remaining [in 2.0 and the graphing overhaul milestones](https://github.com/publiclab/spectral-workbench/milestones) are 44 issues. Gosh, I hope I can get most of those done by the end of October, but I don't know.

Next up will be automated JavaScript testing -- this'll help speed development since I'll be able to tell if JavaScript changes are breaking any of the more complex systems which now exist only on the client side. 

In all, 32 issues were closed since Sept 1 -- a full list is as follows:

* https://github.com/publiclab/spectral-workbench/issues/52 - spectra calibrated with a macro do not get tagged "calibrated" an hour ago
* https://github.com/publiclab/spectral-workbench/issues/82 - Controlling the size of related sets listed on the left hand side an hour ago
* https://github.com/publiclab/spectral-workbench/issues/103 - resolve redundancies in spectrums views an hour ago
* https://github.com/publiclab/spectral-workbench/issues/47 - move auto-calibration code into production, refine interface 9 days ago
* https://github.com/publiclab/spectral-workbench/issues/9 - prompt, don't require re-calibration after selecting a new sample row 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/37 - downloadable data for whole sets 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/39 - close "More tools" dialog after selection 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/48 - create "subtract spectrum" button 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/56 - show pixel position of mouse in a hover during mouseover 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/62 - click on peak "snaps to" highest point near click, or middle of plateau 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/110 - Change calibration procedure to account for double green peak 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/121 - base API calls around Spectrum class 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/125 - calibration issue 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/124 - calibration not finishing in Firefox on mac os 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/141 - list operations "smoothed:" under spectrum 23 days ago
* https://github.com/publiclab/spectral-workbench/issues/173 - overhaul zooming system for x-axis zooming only 28 days ago
* https://github.com/publiclab/spectral-workbench/issues/169 - display "find similar" as comparisons, not on their own page 28 days ago
* https://github.com/publiclab/spectral-workbench/issues/149 - spinner for tag ajax submission 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/158 - show operations to graph below the graph, with `clear` button 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/188 - double check how JS handles tag invaldation 29 days ago
* https://github.com/publiclab/spectral-workbench/issues/157 - show spectrum comparisons in key, below a line, with a clear button on Sep 9
* https://github.com/publiclab/spectral-workbench/issues/188 updated 29 days ago - double check how JS handles tag invaldation
* https://github.com/publiclab/spectral-workbench/issues/157 updated on Sep 9 - show spectrum comparisons in key, below a line, with a clear button
* https://github.com/publiclab/spectral-workbench/issues/176 updated on Sep 4 - implement smoothing as a tag processed core api call
* https://github.com/publiclab/spectral-workbench/issues/184 updated on Sep 4 - add Spectrum.getTransformed() for post-transform exporting
* https://github.com/publiclab/spectral-workbench/issues/185 updated on Sep 4 - add Spectrum.getImg(x,y) and Spectrum.overwrite() as stepping stone to client-side extraction
* https://github.com/publiclab/spectral-workbench/issues/179 updated on Sep 3 - adapt range to new Tool system
* https://github.com/publiclab/spectral-workbench/issues/189 updated on Sep 3 - add graph.refreshImage() and run it after clearing a range tag
* https://github.com/publiclab/spectral-workbench/issues/172 updated on Sep 2 - detect all-black spectra and offer to "find brightest cross section" with example image
* https://github.com/publiclab/spectral-workbench/issues/1 updated on Sep 2 - design UI for wavelength range limiting analysis enhancement
* https://github.com/publiclab/spectral-workbench/issues/187 updated on Sep 1 - figure out why R, G, B, and A channels are different lengths in d3
* https://github.com/publiclab/spectral-workbench/issues/182 updated on Sep 1 - prevent Choose from returning self

Thanks again to our contributors, both coders and non-coders -- and if you know any coders who might like to get involved, point the at http://publiclab.org/wiki/developers!