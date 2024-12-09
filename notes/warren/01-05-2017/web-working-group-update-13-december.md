---
title: Web Working Group Update 13: December
tagnames: community, web-development, software, plots2, outreach, gsoc, developers, wwg, webwg, gsoc-2016, rich-editor, first-timers-only, software-outreach, firsttimersonly, response:13746, google-code-in
author: warren
path: /notes/warren/01-05-2017/web-working-group-update-13-december.md
nid: 13841
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/019/219/original/diagram.png)

# Web Working Group Update 13: December

by [warren](../profile/warren) January 05, 2017 22:33

January 05, 2017 22:33 | Tags: [community](../tag/community), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [outreach](../tag/outreach), [gsoc](../tag/gsoc), [developers](../tag/developers), [wwg](../tag/wwg), [webwg](../tag/webwg), [gsoc-2016](../tag/gsoc-2016), [rich-editor](../tag/rich-editor), [first-timers-only](../tag/first-timers-only), [software-outreach](../tag/software-outreach), [firsttimersonly](../tag/firsttimersonly), [response:13746](../tag/response:13746), [google-code-in](../tag/google-code-in)

----

We've had a great month of December in the Public Lab software community:

> Excluding merges, 19 authors have pushed 58 commits to master and 68 commits to all branches. On master, 105 files have changed and there have been [2,087 additions and 780 deletions][1].

(via [GitHub Pulse][2])

A lot happened over the year-end holidays, and I'm especially grateful to @ananyo2012, who's been leading our [Google Code-In program][3] these past weeks, and putting in long hours to get high-schoolers involved in open source coding by contributing to our website! It's been a big boost to our #software-outreach efforts!

Above, you can see one thing I did over the holidays, which was to try to write documentation for how our database is organized, thanks to a request from one of our new contributors, \`@pyluftig\`. You can read these docs here: https://github.com/publiclab/plots2/blob/master/doc/DATA\_MODEL.md

  
![image description][4]  

  
One thing that's especially nice is that we've been solving issues **faster than new ones have been being made** -- so the total count is now down to 160! This is in part due to our #first-timers-only outreach, as we've seen first-timers-only issues being picked up faster and faster. This week, one was claimed _within seven minutes of being posted_! If you're a first-time coder, you can [join in here][5] on our new "Welcome page":![image description][6]

  
### Big code updates and "breaking it up"

One thing I'm particularly proud of is our community's work on the Wiki Locking mini-project, which was a complex set of changes which were solved almost entirely in the past month, by a team of people collaborating: https://github.com/publiclab/plots2/issues/397

  
This will keep spam off our most-trafficked pages ([read how it works here][7]), and was made possible by one of our new strategies: **breaking up complex problems into smaller, self-contained, and easily testable parts**. 

  
Using this strategy, we're also making some great progress on a bigger project, which adds geographic organizing features to the site -- however, it's somewhat sprawling, so it was a good candidate for our new "break it up" approach, and it's making steady progress as well:

  
![image description][8]

  
  
https://github.com/publiclab/plots2/issues/1070

  
So far it's pretty preliminary, but it's coming along:

  
![image description][9]

  
### How we made this our best Google Summer of Code ever

I wrote a blog post after this past summer about how we were able to make this our best year ever for [Google Summer of Code][10] -- it covers a lot of the specific strategies in our #software-outreach, but with more of a focus on the specifics of Git collaboration -- aimed at other GSoC program participants. Check it out!

> This was our fourth year doing Google Summer of Code (GSoC), and it was our best year ever by a wide margin! We had five hard-working students who contributed over 17,000 new lines of (very useful) code to our high-priority projects.

[https://opensource.googleblog.com/2016/12/google-summer-of-code-2016-wrap-up\_21.html][11]

  
### Rich Editor launched

Finally, the [Rich Editor][12] is now the default editor -- [try it out today][13]!

  
That's about it -- thanks, all!

[1]: https://github.com/publiclab/plots2/compare/master@%7B1480809772%7D...master
[2]: https://github.com/publiclab/plots2/pulse/monthly
[3]: https://codein.withgoogle.com
[4]: https://publiclab.org/system/images/photos/000/019/220/large/Screen_Shot_2017-01-05_at_5.24.59_PM.png "Screen_Shot_2017-01-05_at_5.24.59_PM.png"
[5]: https://github.com/publiclab/plots2/projects/2?fullscreen=true
[6]: https://publiclab.org/system/images/photos/000/019/222/large/Screen_Shot_2017-01-05_at_5.30.51_PM.png "Screen_Shot_2017-01-05_at_5.30.51_PM.png"
[7]: https://publiclab.org/wiki/power-tags
[8]: https://publiclab.org/system/images/photos/000/019/221/large/Screen_Shot_2017-01-05_at_5.27.46_PM.png "Screen_Shot_2017-01-05_at_5.27.46_PM.png"
[9]: https://publiclab.org/system/images/photos/000/019/218/large/Screen_Shot_2017-01-05_at_5.21.08_PM.png "Screen_Shot_2017-01-05_at_5.21.08_PM.png"
[10]: http://publiclab.org/wiki/gsoc
[11]: https://opensource.googleblog.com/2016/12/google-summer-of-code-2016-wrap-up_21.html
[12]: /tag/rich-editor
[13]: /post