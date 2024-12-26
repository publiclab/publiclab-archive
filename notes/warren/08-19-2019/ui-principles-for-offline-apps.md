---
title: "UI principles for offline apps"\ntagnames: 'software, code, wwg, ui'
author: warren
path: /notes/warren/08-19-2019/ui-principles-for-offline-apps.md
nid: 20580
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/034/657/original/Screen_Shot_2019-08-19_at_12.25.13_PM.png)

# UI principles for offline apps

by [warren](../profile/warren) | August 19, 2019 16:26

August 19, 2019 16:26 | Tags: [software](../tag/software), [code](../tag/code), [wwg](../tag/wwg), [ui](../tag/ui)

----

Public Lab has offered "offline apps" for a long time, starting with [Spectral Workbench's capture feature](http://spectralworkbench.org/capture), and with our Software Roadmap ([https://publiclab.org/notes/warren/05-22-2019/draft-of-a-public-lab-software-roadmap-comments-welcome](https://publiclab.org/notes/warren/05-22-2019/draft-of-a-public-lab-software-roadmap-comments-welcome "https://publiclab.org/notes/warren/05-22-2019/draft-of-a-public-lab-software-roadmap-comments-welcome")) we are increasingly developing stand-alone JavaScript apps that have (or should have) offline features, like:

- [Image Sequencer](http://sequencer.publiclab.org)
- [Infragram](https://publiclab.github.io/infragram/)
- [spectral-workbench.js](https://github.com/publiclab/spectral-workbench.js/)
- [WebJack](http://webjack.io)
- and many more!

Offline apps are apps which, once loaded in your browser, no longer require an internet connection to work; they're saved or cached in your browser the first time. This is really useful for limited connectivity situations.

I wanted to talk through this so we approach offline apps in a consistent way at Public Lab, but also have some broader UI principles and ideas that should be relevant to any offline app.

**PWAs**

The recent PWA "standard" (Progressive Web Apps) is really exciting, and brings together some powerful features to web-based apps, basically allowing them to be "installed" on your phone's home screen just like a regular app, even though they're just fancy web pages. PWA features actually help address **two different primary goals**:

- fast load time
- offline use

And, there is a whole checklist of requirements for PWAs to ensure they meet common user expectations; Google's PWA documentation is really strong overall: [https://developers.google.com/web/progressive-web-apps/checklist](https://developers.google.com/web/progressive-web-apps/checklist)

#### Pitfalls

However, there are some common pitfalls for PWAs that I've seen over and over, which can affect both developers and users. These fall into a few categories:

1. version transparency  
2. status and source of current version
3. user ability to flush cache

**Version transparency** is about letting the user (or developer) know exactly what version of an app is actually being used, without having to interact with the code or console. What often happens is that a PWA version is cached, and later makes the app available immediately. But if bugfixes or new features are published, it's often very hard to know if you're using the latest version. This complicates bug tracking, as people may report old bugs, and it makes it unclear to the user if they are using the latest version, if their page reload has successfully loaded the latest version, etc.

I recommend:

a. displaying a version number unobtrusively at the bottom of the page (an NPM version number AND/OR a publication date, or at least a Git hash)

b. displaying a banner or a prompt to refresh the page once a new version has successfully been fetched

c. you may consider displaying a version number faintly in the upper right corner, or by the page title, so that screenshots of the app can capture it

**Status and source of current version:** While displaying the version number, it also makes sense to show whether we're running a locally cached version or a freshly downloaded version. A notice like "**App was loaded from _[myCoolApp.com](http://myCoolApp.com)_ 7 seconds ago.**" versus "**App was cached in browser 12 days ago."** is still minimal, and really helpful.

**User ability to flush cache:** this is primarily useful for developers, and especially new contributors to a project, who can make repeated mistakes in trying out new code. A button or link saying "**_Refresh cached app_**" or "_**Flush app cache**_" can make this straightforward, and is especially nice when paired with version numbering or date-of-download as noted above.

These features are clear and present in the Application tab of the Chrome Dev tools:

![image description](/i/34658.png "Screen_Shot_2019-08-19_at_12.23.43_PM.png")

However, in an open source project, the user community is often actively engaged in finding and documenting bugs, suggesting and testing new features. So I think the 3 suggestions above make for really useful and minimal information for users as well, without adding unnecessary complexity or confusion.

What do you think? Leave a comment!