---
title: "Announcing a new dashboard for PublicLab.org"\ntagnames: 'website, design, web, posting, developers, code, wwg, dashboard, ui'
author: warren
path: /notes/warren/04-28-2016/announcing-a-new-dashboard-for-publiclab-org.md
nid: 13045
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/015/846/original/Screenshot_2016-04-26_at_6.46.19_PM.png)

# Announcing a new dashboard for PublicLab.org

by [warren](../profile/warren) | April 28, 2016 19:23

April 28, 2016 19:23 | Tags: [website](../tag/website), [design](../tag/design), [web](../tag/web), [posting](../tag/posting), [developers](../tag/developers), [code](../tag/code), [wwg](../tag/wwg), [dashboard](../tag/dashboard), [ui](../tag/ui)

----

Hello, all -- you may have noticed in the past week that [the main dashboard for PublicLab.org](/dashboard) looks a bit different. It used to look like this:


[![Screenshot_2016-04-28_at_1.17.11_PM.png](//i.publiclab.org/system/images/photos/000/015/840/large/Screenshot_2016-04-28_at_1.17.11_PM.png)](//i.publiclab.org/system/images/photos/000/015/840/original/Screenshot_2016-04-28_at_1.17.11_PM.png)


But, because of a design process which drew on a [great deal of community comment](https://github.com/publiclab/plots2/issues/289) and input [right up to this past week](https://groups.google.com/forum/#!topic/plots-dev/mGGGPG4K5ec), we've changed things a bit. Not every change will please every person in our community, but let me try to explain the major design decisions, starting at the top: 


### Weekly snapshot

The first thing you see is from the old dashboard -- a sense of the level of activity in the community over the past week, as measured by # of research notes and wiki edits. We could expand this in the future to include a small "sparkline" graph of activity over the past month, perhaps... anyhow, it's neat to see your own contributions alongside this, to relate your own work to that of the community at large.


[![Screenshot_2016-04-28_at_3.14.14_PM.png](//i.publiclab.org/system/images/photos/000/015/847/large/Screenshot_2016-04-28_at_3.14.14_PM.png)](//i.publiclab.org/system/images/photos/000/015/847/original/Screenshot_2016-04-28_at_3.14.14_PM.png)


### Blog

Fellow PL staff member @stevie has been hard at work relaunching [the Public Lab Blog](/blog), and it now has a featured place at the top of the dashboard. Want to submit to the blog? Use the "Share your work" button and choose "Share your story on the blog." Stevie will get a notification and be in touch about publication to the "featured" slot.


[![Screenshot_2016-04-28_at_1.25.34_PM.png](//i.publiclab.org/system/images/photos/000/015/841/large/Screenshot_2016-04-28_at_1.25.34_PM.png)](//i.publiclab.org/system/images/photos/000/015/841/original/Screenshot_2016-04-28_at_1.25.34_PM.png)


### Activity feed

Right below the blog feature is the new Activity feed. This is similar to what was on the old dashboard, but we had a diversity of requests for this space. Some people wanted content to be completely separate based on type (events, questions, wiki) while others wanted everything in one feed so you don't miss anything. What we ended up with was a single feed where you can choose what type of content is displayed using the "activity selector":


[![Screenshot_2016-04-28_at_3.10.55_PM.png](//i.publiclab.org/system/images/photos/000/015/842/large/Screenshot_2016-04-28_at_3.10.55_PM.png)](//i.publiclab.org/system/images/photos/000/015/842/original/Screenshot_2016-04-28_at_3.10.55_PM.png)


The selected types are displayed together, but we style them differently. This is its own challenge, as too much variation can be visually overwhelming, but too little and you can't tell if it's an event or a wiki edit. We can continue to tweak this too, but in everyday use, it seems to work for me; I'm curious to hear from others. 

We hope in the future to explore a design where you can have tag or topic based columns, but for now, this offers a good deal of flexibility. Thanks to @stevie and @cfastie for further input on the selector, which is a tough interface (balancing customizability and ease of use), but I hope we've addressed the major use cases sufficiently for now. 


[![Screenshot_2016-04-27_at_10.14.12_AM.png](//i.publiclab.org/system/images/photos/000/015/843/large/Screenshot_2016-04-27_at_10.14.12_AM.png)](//i.publiclab.org/system/images/photos/000/015/843/original/Screenshot_2016-04-27_at_10.14.12_AM.png)


### Comments

We're not totally done on comments, as there were some challenges because there can be a flood of comments. Should **all** comments appear in the feed? Just ones on your own posts? For now, we have a compromise, and are looking to make improvements. We show only one comment per post per day, but we list the # of comments on that post. We'd like to display the most recent comment, but actually (if you happen to code Ruby, or know SQL), could use some help [crafting that query](https://github.com/publiclab/plots2/blob/master/app/controllers/home_controller.rb#L88-L95)! We're also still trying to figure out how to ensure you haven't missed a comment (besides, of course, hearing via email notification) in this interface, without flooding the interface with comments. 


[![Screenshot_2016-04-26_at_6.48.59_PM.png](//i.publiclab.org/system/images/photos/000/015/844/large/Screenshot_2016-04-26_at_6.48.59_PM.png)](//i.publiclab.org/system/images/photos/000/015/844/original/Screenshot_2016-04-26_at_6.48.59_PM.png)


### Wiki

New wiki pages and revisions used to be buried in the sidebar, and for viewers with very large screens, we still separate them out -- though we've improved their display a lot. But for narrower screens and smartphones, we mix them into the Activity feed as well, which was a design challenge too. One bonus, however, is that in both views, we now show "Changes" -- a button which shows what was added and subtracted from the page by the most recent author to edit, inline. I've really enjoyed this feature from my phone over the past few weeks, and we could potentially use it elsewhere to give people a quick look without having to delve into the revisions. Thanks to @mathew for asking if this was possible. 


### Mailing lists

Finally, we used RSS to make a number of Public Lab's mailing lists visible in the sidebar on larger screens. By default, a combined feed is shown, but you can filter by list as well, and jump to the discussion by clicking the title. Working with Google Groups is not super easy, but this is a big improvement nonetheless. 


[![Screenshot_2016-04-26_at_6.47.19_PM.png](//i.publiclab.org/system/images/photos/000/015/845/large/Screenshot_2016-04-26_at_6.47.19_PM.png)](//i.publiclab.org/system/images/photos/000/015/845/original/Screenshot_2016-04-26_at_6.47.19_PM.png)


### Visible to anyone

One more thing -- the dashboard is now visible even if you're not logged in; but it says "This could be your dashboard if you joined Public Lab" -- so folks can get a glimpse of it, or can think of it basically as a blog if they're not (or not yet) interested in joining. 


As always, we're eager to welcome new contributors -- both through this new dashboard, but also in the software projects that make Public Lab run online. If you're interested in coding, check out our [Developers page](/wiki/developers), and we'd be happy to help you find a place you can make a difference. 

There's even a section on [Contributing for non-coders](/wiki/developers#Contributing+for+non-coders), where we talk about how anyone with ideas or opinions on the site can help to make this an even better place to do collaborative research. 

Thanks to everyone who's helped make the dashboard come to life!