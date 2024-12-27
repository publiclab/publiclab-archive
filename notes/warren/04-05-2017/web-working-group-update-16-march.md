---
title: "Web Working Group Update 16: March"

tagnames: 'community, web-development, software, plots2, outreach, gsoc, developers, wwg, webwg, first-timers-only, software-outreach, rich-wikis, wwg-update, response:13985'
author: warren
path: /notes/warren/04-05-2017/web-working-group-update-16-march.md
nid: 14091
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/020/093/original/Screen_Shot_2017-04-05_at_2.55.56_PM.png)

# Web Working Group Update 16: March

by [warren](/profile/warren) | April 05, 2017 19:10

April 05, 2017 19:10 | Tags: [community](/tag/community), [web-development](/tag/web-development), [software](/tag/software), [plots2](/tag/plots2), [outreach](/tag/outreach), [gsoc](/tag/gsoc), [developers](/tag/developers), [wwg](/tag/wwg), [webwg](/tag/webwg), [first-timers-only](/tag/first-timers-only), [software-outreach](/tag/software-outreach), [rich-wikis](/tag/rich-wikis), [wwg-update](/tag/wwg-update), [response:13985](/tag/response:13985)

----

The past month was a bit different from previous months, for a few reasons. I was traveling for 3 of the past 5 weeks, so I've been somewhat less able to respond to day-to-day issues and pull requests, but have been enormously helped by members of our reviewers team, including @ananyo2012 and @ryzokuken.

  
> Excluding merges, **15 authors have pushed ****67 commits**. 145 files have changed and there have been 3,311 additions and 3,541 deletions.

As usual, you can check this out [on GitHub Pulse](https://github.com/publiclab/plots2/pulse/monthly).

  
#### Summer of Code

  
It's also been the time of year for Summer of Code applications, and [we've been hearing from applicants](https://publiclab.org/notes/warren/02-28-2017/call-for-proposals) via both the Rails Girls Summer of Code and Google Summer of code -- ultimately receiving [19 proposals](https://publiclab.org/notes/warren/02-28-2017/call-for-proposals#Read+other+Proposals) by the GSoC deadline this past Monday. Thanks to EVERYONE who applied, as well as everyone who helped refine and improve one anothers' proposals.  

  
We'll be reviewing these over the next couple weeks -- looking forward to a great summer!

  
Also note that we're [still looking for mentors](https://publiclab.org/notes/warren/02-08-2017/be-a-mentor-for-public-lab-in-google-summer-of-code-2017)!

  
#### Infrastructure

  
We've also been engaged in a lot of infrastructural work, the kind of thing that actually goes most smoothly during periods of lower activity, since it can be disruptive if you're trying to solve a specific problem. These include:

  
\* **Legacy code reworking** -- we finally changed \`DrupalNode\` to \`Node\` [throughout our code](https://github.com/publiclab/plots2/pull/1342), reducing confusion and getting away from our old Drupal roots; thanks to @aayushgupta1

\* **Code style** -- most of our app was [reformatted to conform with the Ruby Style Guide](https://github.com/publiclab/plots2/pull/1355) (today, actually!); thanks so much to first time contributor @siaw23

  
  
#### Solr search

  
Finally, @icarito and I have been working hard on merging the long-running Solr integration pull request at https://github.com/publiclab/plots2/pull/1176, which would resuscitate the Solr code and also begin to integrate it into our various search interfaces. 

  
That's about it for now, but stay tuned!