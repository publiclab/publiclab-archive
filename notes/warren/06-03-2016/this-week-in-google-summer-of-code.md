---
title: "This week in Google Summer of Code"

tagnames: 'website, software, gsoc, developers, coding, wwg, gsoc-2016, response:13150'
author: warren
path: /notes/warren/06-03-2016/this-week-in-google-summer-of-code.md
nid: 13161
uid: 1

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/016/472/original/Screenshot_2016-06-03_at_4.26.34_PM.png)

# This week in Google Summer of Code

by [warren](../../../profile/warren) | June 03, 2016 20:32

June 03, 2016 20:32 | Tags: [website](../tag/website), [software](../tag/software), [gsoc](../tag/gsoc), [developers](../tag/developers), [coding](../tag/coding), [wwg](../tag/wwg), [gsoc-2016](../tag/gsoc-2016), [response:13150](../tag/response:13150)

----

This week a lot's gotten done by our [Google Summer of Code](/wiki/gsoc) students. I'll jump right in:

**Ananyo Maiti** writes of the [Question and Answer project](/notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org):

> I have completed work on the Questions controller with its corresponding views and tests. Details of all changes implemented and discussions can be seen in pull requests https://github.com/publiclab/plots2/pull/550 and https://github.com/publiclab/plots2/pull/555 and https://github.com/publiclab/plots2/issue/554. I have now started my work on Answer model and controller for posting Answers for corresponding questions and displaying them.

**Lalith Rallabhandi** writes of the [Rich Profiles project](/notes/Lalithr95/03-23-2016/rich-profile-tags-and-improving-the-performance-of-publiclab-org):

> I mostly worked on adding forms for various tags and storing them in UserTag table. Information will also be displayed in the public profile. Also user can add new tags for various types such as skills, gear, tool, role. Location is next thing I'm working to save user location. Looking forward for your response in PR https://github.com/publiclab/plots2/pull/545. Autocomplete is another minor work I focused this week. 

**Richard Meister** writes of the [WebJack project](/notes/rmeister/03-24-2016/browser-based-arduino-sensor-data-transfer-using-webrtc-and-headphone-jack): 

> This week I prepared the [webjack.js stub](https://github.com/publiclab/webjack) for insertion of a decoder module and implemented a demodulator (and decoder) for SoftModem signals in Matlab/Octave. Currently I am looking for optimal parameters of the decoder and analysing what changes have to be applied to the existing modem.js library.

**Ujitha Perera** writes of the [Advanced Search project](/notes/Ujitha/03-12-2016/advanced-searching-and-sorting-tool-for-publiclab-org):

> I have started refactoring search controller. Basically I'm moving bulky database queries to separate SearchService class and optimise then inside this class. Then trying to communicate with solr service and test more nested queries. Hope to open another thread for the discussion.

**Jitesh Jha** writes of the [Internationalization project](/notes/jiteshxyz/03-20-2016/internationalization-of-publiclab-org):

> I talked with I18n maintainers this week to know more about the testing procedures, wrote few tests for the initialization of I18n locales, and moved on to header area and have almost completed the translations for header. I'll be creating a Pull Request for header I18n in a day or two.

I'm excited to see so much progress, and want to encourage students to bear the following in mind:

* break up your project as much as possible into small, well-contained modules that can be merged into master regularly
* submit distinct PRs for unrelated features, so if one needs additional work, it needn't hold up an unrelated improvement
* write and submit tests with your changes, so that debugging is easier, and I'm more likely to merge in tested code

Merging into master regularly is great because you can get feedback from community members about the new features. If your feature isn't completely done, you can have it appear only when a flag is present, like `?preview=true`. This also ensures that your development branch doesn't diverge too far from the master branch, which is changing quite quickly these days, as you probably notice. 

Most importantly, ask questions! Don't let yourself be stuck too long! Mentors are here and ready to help, as are your fellow students. 