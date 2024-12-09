---
title: 'Web Working Group Update 14: January + 2016'
tagnames: community, web-development, software, plots2, outreach, gsoc, developers, wwg, webwg, first-timers-only, software-outreach, response:13841
author: warren
path: /notes/warren/02-01-2017/web-working-group-update-14-january-2016.md
nid: 13894
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/019/404/original/routes-diagramming.png)

# Web Working Group Update 14: January + 2016

by [warren](../profile/warren) February 01, 2017 16:14

February 01, 2017 16:14 | Tags: [community](../tag/community), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [outreach](../tag/outreach), [gsoc](../tag/gsoc), [developers](../tag/developers), [wwg](../tag/wwg), [webwg](../tag/webwg), [first-timers-only](../tag/first-timers-only), [software-outreach](../tag/software-outreach), [response:13841](../tag/response:13841)

----

This #wwg report will be our fourteenth, and also a look back at the past year's worth of work!

## Growth

To recap some of what I've been writing about recently (#software-outreach), over the past year, we've seen a dramatic shift in how code is produced at Public Lab. We've received new contributions to [the PublicLab.org code repository][1] from 10 contributors having added code in the first 3 years of the project, to 54 in the past year. January has been a smaller month, but still huge compared to one year ago; more people contributed in the past 30 days than in our first three years:

> Excluding merges, **14 authors have pushed 39 commits** to master and 58 commits to all branches. On master, **105 files have changed** and there have been **1,621 additions and 729 deletions**.

Look at the activity in more depth at [GitHub Pulse][2].

I've also been writing (at #software-outreach) about how we've achieved this community growth and our continuing refinements and initiatives to increase both the size of our contributor base, but its diversity, through #first-timers-only outreach strategies. Look at the spike in the past year on this graph!

![image description][3]

## Features and changes

Over the past year, the big projects we've launched include:

- the Rich Editor (now at [https://publiclab.org/post][4], and code at [https://github.com/publiclab/PublicLab.Editor][5])
- the Q&A system: [https://publiclab.org/questions][6]
- the new Dashboard
- Internationalization: [https://github.com/publiclab/plots2#internationalization][7]
- in the Spectral Workbench project, we were able to launch the Operations analysis tool suite: [https://publiclab.org/wiki/spectral-workbench-operations][8]
- we spun out Spectral Workbench's core JavaScript libraries as an independent module: [https://github.com/publiclab/spectral-workbench.js][9]

We've also:

- created a welcoming landing page for new contributors: [https://github.com/publiclab/plots2/projects/2][10]
- launched a REST API: [https://github.com/publiclab/plots2/wiki/API][11]
- gone from from 0% to 85% test coverage
- created a staging server to automatically test code on live data before publishing it
- launched a highly active Gitter chat channel: [https://gitter.im/publiclab/publiclab][12]

Even just in this past month, we've seen

- Lots of geographic features progress - see prototype at [https://publiclab.org/locations/form][13]
- Prompts/rich wikis work - see [https://publiclab.org/wiki/power-tags#Prompts][14]![image description][15]

## Summer fellowships

After a fantastic 2016 Google Summer of Code with 5 great students (read more at [https://opensource.googleblog.com/2016/12/google-summer-of-code-2016-wrap-up\_21.html][16]), we're now applying for the 2017 GSoC program, as well as the [Rails Girls Summer of Code][17] program; our project ideas are being compiled at:

[https://publiclab.org/wiki/gsoc-ideas#Ideas][18]

We also, with leadership and an \*\*enormous amount of work \*\*from @ananyo2012, participated in Google Code-In over December-January, where we helped dozens of high school students around the world to contribute to Public Lab code. **Thanks!**

## Miscellaneous

We've also made lots of progress on better understanding and presenting how the Public Lab site works:

Diagramming: [https://publiclab.org/notes/warren/01-27-2017/diagramming-knowledge-production-on-publiclab-org][19]

Data model: [https://github.com/publiclab/plots2/blob/master/doc/DATA\_MODEL.md][20]

![image description][21]

## Coming up

For the next few weeks, I'm focusing on the [Rich Wikis project][22], with an emphasis on making our wiki pages more interactive. This may include "[editable subsections][23]" and commenting and subscriptions. I'm also helping shepherd along projects related to [our upcoming Topics page][24], our planned [Geographic features][25], and more. 

What are you interested in seeing built, or helping out with?

And finally, a huge thanks to **everybody** for such a great year!

  
P.S. on a closing note, last week we passed 10,000 contributors on Spectral Workbench. What a milestone!

  
![image description][26]

  

[1]: https://github.com/publiclab/plots2
[2]: https://github.com/publiclab/plots2/pulse/monthly
[3]: https://publiclab.org/system/images/photos/000/019/405/large/Screenshot_2017-02-01_at_10.05.50_AM.png "Screenshot_2017-02-01_at_10.05.50_AM.png"
[4]: https://publiclab.org/post
[5]: https://github.com/publiclab/PublicLab.Editor
[6]: https://publiclab.org/questions
[7]: https://github.com/publiclab/plots2#internationalization
[8]: https://publiclab.org/wiki/spectral-workbench-operations
[9]: https://github.com/publiclab/spectral-workbench.js
[10]: https://github.com/publiclab/plots2/projects/2
[11]: https://github.com/publiclab/plots2/wiki/API
[12]: https://gitter.im/publiclab/publiclab
[13]: https://publiclab.org/locations/form
[14]: https://publiclab.org/wiki/power-tags#Prompts
[15]: https://publiclab.org/system/images/photos/000/019/406/large/Screenshot_2017-02-01_at_11.02.49_AM.png "Screenshot_2017-02-01_at_11.02.49_AM.png"
[16]: https://opensource.googleblog.com/2016/12/google-summer-of-code-2016-wrap-up_21.html
[17]: http://railsgirlssummerofcode.org
[18]: https://publiclab.org/wiki/gsoc-ideas#Ideas
[19]: https://publiclab.org/notes/warren/01-27-2017/diagramming-knowledge-production-on-publiclab-org
[20]: https://github.com/publiclab/plots2/blob/master/doc/DATA_MODEL.md
[21]: https://publiclab.org/system/images/photos/000/019/407/large/Screenshot_2017-02-01_at_11.12.13_AM.png "Screenshot_2017-02-01_at_11.12.13_AM.png"
[22]: https://github.com/publiclab/plots2/milestone/3
[23]: https://github.com/publiclab/plots2/issues/1005
[24]: https://github.com/publiclab/plots2/issues/1047
[25]: https://github.com/publiclab/plots2/issues/1070
[26]: https://publiclab.org/system/images/photos/000/019/408/large/screen_shot_2017-01-26_at_3.48.46_pm.png "screen_shot_2017-01-26_at_3.48.46_pm.png"