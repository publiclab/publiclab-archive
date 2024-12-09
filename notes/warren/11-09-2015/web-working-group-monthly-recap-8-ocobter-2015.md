---
title: 'Web Working Group Monthly Recap 8: Ocobter 2015'
tagnames: mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12284
author: warren
path: /notes/warren/11-09-2015/web-working-group-monthly-recap-8-ocobter-2015.md
nid: 12392
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/012/633/original/Screenshot_2015-10-22_at_6.48.48_PM.png)

# Web Working Group Monthly Recap 8: Ocobter 2015

by [warren](../profile/warren) November 09, 2015 21:57

November 09, 2015 21:57 | Tags: [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [wwg](../tag/wwg), [webwg](../tag/webwg), [response:12284](../tag/response:12284)

----

Late again this month; apologies! Busy time of year. Let's jump right into it:


##MapMill 2.0

This is now online at: http://mapmill.org

Try it out -- it's early pre-release at the moment. We know of some queueing bugs related to large #s of simultaneous uploads. Hope to hammer them out soon now that it's online. 



[![Screenshot_2015-11-09_at_9.46.13_AM.png](https://i.publiclab.org/system/images/photos/000/012/634/medium/Screenshot_2015-11-09_at_9.46.13_AM.png)](https://i.publiclab.org/system/images/photos/000/012/634/original/Screenshot_2015-11-09_at_9.46.13_AM.png)



##SSL on PublicLab.org

This was launched over the past weekend; we had some issues with store.publiclab.org, but they are almost completely resolved at this point. Final changes should happen shortly. Thanks for your patience. Read more here:

* https://github.com/publiclab/plots2/issues/58 - https/SSL secure connection
* https://github.com/publiclab/plots2/issues/110 - insecure includes

This was a pain, but is long overdue. Thanks to @icarito for finally pushing it through. We'll make SSL mandatory shortly; some browsers already do this.


##PublicLab.org

We had 7 issues closed by 3 people on this codebase; besides the SSL stuff, mostly smaller things like some @callout testing and tweaking and some email notification fixes; [check it out on Github Pulse](https://github.com/publiclab/plots2/pulse/monthly).

* https://github.com/publiclab/plots2/issues/58 - https/SSL secure connection 2 hours ago
* https://github.com/publiclab/plots2/issues/109 - SSL site blocks older youtube embeds 2 hours ago
* https://github.com/publiclab/plots2/issues/336 - Image upload stalls when editing research notes a day ago
* https://github.com/publiclab/plots2/issues/333 - Issue Initiating Plots2 Ruby Instance on Cloud9 3 days ago
* https://github.com/publiclab/plots2/issues/331 - Barnstar email 6 days ago
* https://github.com/publiclab/plots2/issues/257 - space separated callouts break middle callouts 25 days ago
* https://github.com/publiclab/plots2/issues/323 - add unmonastery slackbot 26 days ago


##Map Knitter

No changes here; just added a Features sidebar administered from PublicLab.org on the dashboard. 


##SpectralWorkbench.org

The doozy as usual over the past few months -- LOTS of changes. Highlights: a complete test suite of 70+ Jasmine tests of almost every aspect of the JavaScript features in the upcoming 2.0 release. Not full test coverage, but not really all that far from it. Details in the README.

Otherwise, 12 issues closed; [check it out on Github Pulse](https://github.com/publiclab/spectral-workbench/pulse/monthly):

* https://github.com/publiclab/spectral-workbench/issues/196 - optimization of server-side queries - prob. most related to comparison & other SpectraPanes 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/215 - correct attribution on cloned spectra 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/199 - debug SpectraPane search, esp by title, ID, and for others' spectra 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/209 - root mean square error calibration assessment 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/211 - calibration canceling should clear UI 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/216 - refresh graph after tag deletion, test it 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/217 - clone calibration tag displays twice; clear tags before refreshing 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/223 - clear tagForm input after submission 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/143 - javascript testing with Jasmine or Teaspoon 3 days ago
* https://github.com/publiclab/spectral-workbench/issues/213 - Do not copy calibration. 27 days ago
* https://github.com/publiclab/spectral-workbench/issues/214 - incorrect display of the spectrum after calibration 27 days ago
* https://github.com/publiclab/spectral-workbench/issues/202 - Version the API with backwards compatibility on Oct 9


##Grapherate

This project, for graphing live sensor feeds, is still emerging -- early prototype warning! But check it out:

https://github.com/jywarren/grapherate/

There are plenty of to-dos, and we have it working both with OpenPipeKit streams [on Phant](http://data.sparkfun.com) and with InfoAmazonia's sensors.


Thanks again to our contributors, both coders and non-coders -- and if you know any coders who might like to get involved, point the at http://publiclab.org/wiki/developers!