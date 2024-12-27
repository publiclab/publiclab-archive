---
title: "Web Working Group Monthly Recap 10: January 2016"

tagnames: 'mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12557'
author: warren
path: /notes/warren/02-05-2016/web-working-group-monthly-recap-10-january-2016.md
nid: 12660
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/014/100/original/Screenshot_2016-01-21_at_9.12.26_AM.png)

# Web Working Group Monthly Recap 10: January 2016

by [warren](../../../profile/warren) | February 05, 2016 18:26

February 05, 2016 18:26 | Tags: [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [wwg](../tag/wwg), [webwg](../tag/webwg), [response:12557](../tag/response:12557)

----

Hi, all - this month's Web Working Group recap is very exciting, as we've launched Spectral Workbench 2 -- the bulk of the work from so many past months' reports. 

This release includes many exciting new features and upgrades, including:

* a new, more precise and user-friendly calibration system
* trackable versioning of data with the [Snapshots system](https://publiclab.org/wiki/spectral-workbench-snapshots)
* reversible changes to your data with the [Operations system](https://publiclab.org/wiki/spectral-workbench-operations)
* a completely new Analysis interface
* a new, d3-based graphing system
* a [thoroughly documented JavaScript API](/wiki/spectral-workbench-api)
* a Jasmine client-side test suite
* a much-expanded Rails test suite
* improvements and fixes across most pages
* much more! a full listing of features & issues in this relesase [can be found here](https://github.com/publiclab/spectral-workbench/issues?utf8=%E2%9C%93&q=milestone%3A%222.0+launch%22)

A full announcement is coming soon (really! It's mostly already written, I'm just chasing down a few more bugs, and posting videos).

Work on all other systems has been pretty much frozen due to the big effort to get Spectral Workbench out the door, but as this wraps up, we'll be soliciting input on a redesign of the PublicLab.org dashboard and the upcoming Rich Editor project. 

You can read about all the nitty gritty details of Spectral Workbench's launch on the Github Pulse page: https://github.com/publiclab/spectral-workbench/pulse/monthly

And here's the new video introduction to Spectral Workbench:

<iframe width="853" height="480" src="https://www.youtube.com/embed/oRL-H5hTyug?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

###Systems administration

Finally, a note from @icarito, our sysadmin, as well:

> Infrastructure in the past three months has been running smoothly in production servers, mostly at the hosting location provided by Rackspace, who also provide backup and monitoring platforms. During this time, the focus has been on standardizing our deployed production apps installations to best (known) practices with the aim of reducing maintenance and deployment involvement. In December we have begun to reconfigure a server hosted at MIT Media Lab (but owned/controlled by Public Lab) which offers many possibilities. In the next period we expect to configure cold backups and a clean server for virtual machines. 

Thanks to everyone for your help, patience, and support!