---
title: Web Working Group Monthly Recap 11: February 2016
tagnames: mapknitter, web-development, software, plots2, spectral-workbench, wwg, webwg, response:12660
author: warren
path: /notes/warren/03-07-2016/web-working-group-monthly-recap-11-february-2016.md
nid: 12781
uid: 1

---

# Web Working Group Monthly Recap 11: February 2016

by [warren](../profile/warren) March 07, 2016 22:15

March 07, 2016 22:15 | Tags: [mapknitter](../tag/mapknitter), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [spectral-workbench](../tag/spectral-workbench), [wwg](../tag/wwg), [webwg](../tag/webwg), [response:12660](../tag/response:12660)

This past month was very exciting -- we [announced Spectral Workbench 2](/notes/warren/02-10-2016/announcing-spectral-workbench-2) along with lots of follow-up bugfixes. 

You can see some of these on the Spectral Workbench Github Pulse page today: https://github.com/publiclab/spectral-workbench/pulse/monthly

With much of that out of the way, and [documented](/wiki/spectral-workbench), we've begun to pivot on to...


##PublicLab.org

The next couple big projects on the Web Working Group's plate are the Dashboard redesign project, the enormous Rich Editor project, and way down the line, Rich Wikis. THere's been [ongoing discussion of the design of the PublicLab.org dashboard](https://github.com/publiclab/plots2/issues/289), with the latest mockup pictured in the main image above. 

Much of the design work being complete (this is a small design refresh, and we're putting off many of the bigger features we'd eventually like to do on this page), we've also [rolled out a big upgrade](https://github.com/publiclab/plots2/pull/381) to [Bootstrap v3](https://getbootstrap.com), which sets us up for easier, more maintainable templates and styles. We're also slowly building out our test suite for that codebase, so that coordinating development (and pulling in changes from other developers) is easier and we can worry less.                                                                                           

****

##Google Summer of Code

Speaking of new contributors, both the new Bootstrap update and the tests set us up for a great summer -- we were recently accepted into the [Google Summer of Code](https://summerofcode.withgoogle.com), in which Google funds students to work for the summer on open source projects. Last year, we weren't in the program for the first time after 2 successful summers, but this year, we're back -- and already [benefitting from students' contributions](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aclosed)!                                                                                                                   

This is also the first year we're entering GSoC with the clear [Contributing to Public Lab Software page](/wiki/contributing-to-public-lab-software), originally created by @justinmanley, which is starting to pay dividends -- more than one student has submitted a pull request to solve a bug, even writing tests!                                                                                                             

[Our ideas page is here](/wiki/gsoc-ideas), and we've had interest in many of the project ideas listed there, which is great. Please jump into the discussions on the plots-dev lists and make these students feel at home -- we'll need their help come summer, and their proposals are [due this coming Monday the 14th](https://summerofcode.withgoogle.com).                                                                    


[![Screenshot_2016-03-07_at_4.05.28_PM.png](//i.publiclab.org/system/images/photos/000/014/671/large/Screenshot_2016-03-07_at_4.05.28_PM.png)](//i.publiclab.org/system/images/photos/000/014/671/original/Screenshot_2016-03-07_at_4.05.28_PM.png)

##Issues tagged 'easy'

With an eye to attracting both students and other new contributors, we have the tag [easy](https://github.com/publiclab/plots2/issues?q=is%3Aopen+is%3Aissue+label%3Aeasy), marking issues we think are good for newcomers -- although we should switch to [up-for-grabs.net's](http://up-for-grabs.net/) standard `jump-in` -- [read about it here](https://nikcodes.com/2013/05/10/new-contributor-jump-in/) or `first-timers-only` from [First Timers Only](http://www.firsttimersonly.com/).                                                                                                                                                      

The results of this can be seen [on our Github Pulse page for the past week](https://github.com/publiclab/plots2/pulse); in particular, one tagged `easy` was resolved and merged in this morning. Wahoo! 

[![Screenshot_2016-03-07_at_4.06.12_PM.png](//i.publiclab.org/system/images/photos/000/014/673/large/Screenshot_2016-03-07_at_4.06.12_PM.png)](//i.publiclab.org/system/images/photos/000/014/673/original/Screenshot_2016-03-07_at_4.06.12_PM.png)



****

##Waffle.io

Our Waffle.io board is up to date, too, and you can see some of our prioritized and on-deck issues there:

https://waffle.io/publiclab/plots2/


##Developers

As always, we're eager for new developers, so if you code, and want to help out at Public Lab, check out [our Developers page](/wiki/developers)!

I wanted to put in one last note, to [the notes I took on talks at the BostonJS meetup](/notes/warren/03-04-2016/bostonjs-talks-focused-on-welcoming-new-coding-contributors), which focused on developer outreach. We'll definitely be taking some cues from the speakers, who I wanted to thank for such an amazing playbook to recruiting new contributors!