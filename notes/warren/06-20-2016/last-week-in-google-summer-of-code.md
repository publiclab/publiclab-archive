---
nid: 13214
title: Last week in Google Summer of Code
path: public/static/notes/warren/06-20-2016/last-week-in-google-summer-of-code.md
uid: 1
tagnames: website,software,gsoc,developers,coding,wwg,gsoc-2016,response:13191
---

# Last week in Google Summer of Code

I'm away this week, but will still be trying to do the usual twice-weekly merge from [PublicLab.org][1] code contributors while teaching a workshop; we'll see how that works out.

Last week was a flurry of changes:

Richard Meister writes of the [WebJack project][2] (pictured above):

> Implemented an encoder #4, that currently works on machines using 44,1kHz sampling rate.

Lalith Rallabhandi writes of the [Rich Profiles project][3]:

> As part of this week, I implemented location tag design and map which points location of the user. A circle which is highlighted in map which is mainly used to user privacy. My work can be found here: [https://github.com/publiclab/plots2/pull/578][4]

Ujitha Perera writes of the [Advanced Search project][5]:

> I have started developing advanced search page. Necessary UI components and controller level structure built last week. Working on this week to make this functionality more stable and error free. And I'm using sunspot to enable advanced searching features.

Jitesh Jha writes of the [Internationalization project][6]:

> This week I worked on making my previous week's locale settings more clean and adding I18n translating methods to more pages (home/ login/ signup) with a pull request coming up in a short time. :)

Ananyo Maiti writes of the [Question and Answer project][7]:

> This week I completed work on the Answering system with #566 being merged. I m now working on  new commenting system for the Q & A page. You can see it in #589. I am following the design idea as given below.

![image description][8]

  
For my own part, I managed to complete most of the Rich Editor integration, and editing/authoring posts in the new editor is now possible on the live site, although at URLs I have not publicized. I'd like to keep working on bugs and complete the History system before announcing an open beta. You can try it out here: [http://publiclab.github.io/PublicLab.Editor/examples/][9]

Thanks to all the Google Summer of Code students for their hard work -- I hope to provide some minimal feedback on code this week (less than the usual, but I'll do my best!). Also changes submitted as of last Friday are live on the site (I was able to publish code on Friday as expected.)

[1]: http://PublicLab.org
[2]: https://publiclab.org/notes/rmeister/03-24-2016/browser-based-arduino-sensor-data-transfer-using-webrtc-and-headphone-jack
[3]: https://publiclab.org/notes/Lalithr95/03-23-2016/rich-profile-tags-and-improving-the-performance-of-publiclab-org
[4]: https://github.com/publiclab/plots2/pull/578
[5]: https://publiclab.org/notes/Ujitha/03-12-2016/advanced-searching-and-sorting-tool-for-publiclab-org
[6]: https://publiclab.org/notes/jiteshxyz/03-20-2016/internationalization-of-publiclab-org
[7]: https://publiclab.org/notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org
[8]: //i.publiclab.org/system/images/photos/000/016/686/large/comments_show.jpg "comments_show.jpg"
[9]: http://publiclab.github.io/PublicLab.Editor/examples/