---
title: "Web Working Group Monthly Recap 9: December 2015"

tagnames: 'mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12392'
author: warren
path: /notes/warren/01-04-2016/web-working-group-monthly-recap-9-december-2015.md
nid: 12557
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/013/499/original/Screenshot_2016-01-04_at_2.44.07_PM.png)

# Web Working Group Monthly Recap 9: December 2015

by [warren](/profile/warren) | January 04, 2016 20:39

January 04, 2016 20:39 | Tags: [mapknitter](/tag/mapknitter), [web-development](/tag/web-development), [software](/tag/software), [plots2](/tag/plots2), [spectral-workbench](/tag/spectral-workbench), [wwg](/tag/wwg), [webwg](/tag/webwg), [response:12392](/tag/response:12392)

----

Happy new year, folks!

This is Recap 9, but we missed the month of November, so we'll be covering 2 months of work here. However, essentially all of my work for that period has been on Spectral Workbench 2.0. But I'll recap a few of the other changes first:

###PublicLab.org/plots2

We had a few small tweaks to PublicLab.org, some related to the SSL rollout, but I wanted to highlight that @ebarry file her first commit in November, making fixes to both the site footer and the home page:

* [footer fixes](https://github.com/publiclab/plots2/commit/51ceaf57bb514fa384e9c41a7a1597f27b6523c5 - Nov. 16
* [homepage fixes](https://github.com/publiclab/plots2/commit/54fe93d5b615e8fd24c99c12b3f3e8230d4815dc) - Nov. 16

We also made fixes to email notifications and callouts, including image display in emails, and added a long-requested feature to allow [viewing of raw Markdown for any research note](https://github.com/publiclab/plots2/commit/adfc0daec8268426f2e17ffef600f2f2baa239ad). Finally, [revision history comparisons](https://github.com/publiclab/plots2/pull/348) was also fixed.

We also struggled with three attempts ([one](https://github.com/publiclab/plots2/pull/356), [two](https://github.com/publiclab/plots2/pull/357), [three](https://github.com/publiclab/plots2/pull/359)) to generate an iCalendar feed of all events posted on the PublicLab.org site, but while the Drupal calendars module will read it, and it validates properly, Google Calendar seems not to be able to parse it, and I gave up. 

###[Spectral Workbench](https://spectralworkbench.org)

A broad overview of the progress on Spectral Workbench 2.0 can be seen in the [Milestones page](https://github.com/publiclab/spectral-workbench/milestones), but the 60% complete figure is a bit inaccurate as some of the completed issues were the bulk of the work. 

For example, [the pull request I opened today](https://github.com/publiclab/spectral-workbench/pull/244), including the entire Snapshots system, includes 35 commits, and [91 sub-issues](https://github.com/publiclab/spectral-workbench/issues/192); I just batched them all on one page so I could track and order them more closely. 

Still, about 30 issues remain, of which 5 or so are documentation related. Documentation will be the big project this month, as I hope to document the API as well as produce tutorial videos. In addition, there's still some work to be done on Sets features, as well as a good deal of tweaking and bugfixing. But the bulk of the work is complete, which is really encouraging!

I'm also circling back to @stoft's [post about gain correction](/notes/stoft/02-25-2015/plab-spectrometer-gain-correction) as I believe we might be able to try that out with the new `subtract` or `blend` features. 

Anyhow, here's a screenshot of the new Snapshots system, which should go live in a day or so:


[![Screenshot_2016-01-04_at_11.47.44_AM.png](//i.publiclab.org/system/images/photos/000/013/498/large/Screenshot_2016-01-04_at_11.47.44_AM.png)](//i.publiclab.org/system/images/photos/000/013/498/original/Screenshot_2016-01-04_at_11.47.44_AM.png)

