---
title: "Software outreach: Modularity is great for collaboration"\ntagnames: 'website, software, gsoc, web, developers, wwg, software-outreach, soc, response:15093, response:13687, series:software-outreach, gsoc-2018, soc-2018, modularity'
author: warren
path: /notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration.md
nid: 15543
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/023/197/original/Screenshot_20180117-193940.png)

# Software outreach: Modularity is great for collaboration

by [warren](../profile/warren) | January 18, 2018 00:42

January 18, 2018 00:42 | Tags: [website](../tag/website), [software](../tag/software), [gsoc](../tag/gsoc), [web](../tag/web), [developers](../tag/developers), [wwg](../tag/wwg), [software-outreach](../tag/software-outreach), [soc](../tag/soc), [response:15093](../tag/response:15093), [response:13687](../tag/response:13687), [series:software-outreach](../tag/series:software-outreach), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [modularity](../tag/modularity)

----

Just as [Summer of Code](/n/7963) deadlines are looming, I wanted to write a bit about modularity, as I think it'll be useful for our mentors and students this coming SoC season.

I'm mostly talking about open source software collaboration here, but I really believe that this approach can work for collaboration of all kinds -- from writing projects to hardware prototyping. We're getting better at modularizing things like [the new microscope projects](/microscopes), the [spectrometer](/spectrometry), and of course various [datalogging projects](/data-logging).

## Small modular changes are great for newcomers -- and for everybody else!

Modularity may sound kind of boring as a topic -- and it's relationship to outreach and onboarding not immediately apparent. The basic idea is to **isolate functionality in smaller chunks of code which are easier to reuse, understand, and maintain**.

But this is exactly what newcomers need -- to **not** have to know a much larger whole system to be able to get your bearings, and to know what a chunk of code will receive as input, and should generate as output. It also makes for very test-able code, and code which has a minimal "entanglement" with other parts of a complex system.

I encourage ANYONE doing open source work to think hard about how their project can be better modularized -- along with the [various other strategies we've been covering in this series](/software-outreach), it can lead to a major influx of new contributors!

(There's been [a lot written about](https://ponyfoo.com/books/practical-modern-javascript/chapters/1#read) the modular design pattern of much modern JavaScript, too!)

For these reasons, **we now require all contributions to work in small pieces which we can scan through quickly, write simple tests for, and publish to our live site within a day or two**. This applies to [Summer of Code projects](/gsoc) as well as any given feature or bug fix on the site.

One big benefit is that you'll see your work published on the live site very quickly! Sometimes even the same day it's written. We ask Summer of Code students to present a new PR at least once per week; many submit several.

---------

![image description](https://publiclab.org/system/images/photos/000/023/195/large/Screen_Shot_2018-01-17_at_7.30.16_PM.png "Screen_Shot_2018-01-17_at_7.30.16_PM.png")

## Breaking it up

When a bug or a feature request is first proposed (even after there's been a consensus on exactly what it should do, which can take a while!) it's rarely something small and self-contained enough to be a good "chunk" for solving -- for either newcomers or long-time contributors. So we ask everyone to try to **break bigger projects down** into smaller, separately solve-able parts.

It often takes a lot of work to do this -- and it's a bit of a skill! Sometimes it can take some deeper familiarity with the code organization, but not always. Here are some tips:

- separate how a **feature will look** from **what it will do**
- develop back-end functions and test them before developing user interface - so the code can be published and tested BEFORE we invite users to try them out!
- think of reducing the amount of context a function needs. Writing a test is a great way to do this -- **what's the minimum amount of test** data a function needs to demonstrate that it works?
- make a checklist of different parts -- say, how it'll look to the author, vs. how it'll look to someone else, vs. to a moderator, for example
- make sure you have all the needed info -- exact text that'll appear, exact URLs where it'll show up
- generally, each part should be **less than 100 lines of code** -- and many are far less; just a couple lines, or 10-line features are common. This makes pull requests easier to read through, among other benefits.

For an example, check out this beautifully broken-up giant project: [https://github.com/publiclab/plots2/issues/1416](https://github.com/publiclab/plots2/issues/1416)

What's worked for you, in terms of breaking things up?

---------

## Versioning and cross-repository work

Sometimes, for a big enough feature, we've found that it's worth actually spinning out a separate project; we've done this for:

- **PublicLab.Editor**, our rich text editor: [https://github.com/publiclab/PublicLab.Editor](https://github.com/publiclab/PublicLab.Editor)
- **Leaflet.DistortableImage**: [https://github.com/publiclab/Leaflet.DistortableImage/](https://github.com/publiclab/Leaflet.DistortableImage/)
- **Leaflet Blurred Location**: [https://github.com/publiclab/leaflet-blurred-location/](https://github.com/publiclab/leaflet-blurred-location/)
- **Inline Markdown Editor**: [https://github.com/publiclab/inline-markdown-editor/](https://github.com/publiclab/inline-markdown-editor/)
- **Image Sequencer**: [https://github.com/publiclab/image-sequencer/](https://github.com/publiclab/image-sequencer/)

And many more! [https://github.com/publiclab](https://github.com/publiclab)

We've done this when, for example, the sub-project is largely **in a different language** (like JavaScript), or when we think **other projects might be interested in using it**. The benefit is that people working on a highly specialized function can do so in a more controlled, self-contained -- and simpler! -- environment. And that it's possible to recruit help from other projects who may want to use that function along with you (read below for more on this).

However, this can tend to split your community -- the issues listings aren't shared, and it can be hard to maintain a sense of continuity across projects. We've solved this a bit with our cross-project **Community Toolbox** welcoming page:

[https://publiclab.github.io/community-toolbox/#r=all](https://publiclab.github.io/community-toolbox/#r=all)

This lists `first-timers-only` and other issues for all Public Lab projects on GitHub. But we can surely do even better, and experimenting with GitHub "teams" as well.

---------

## A bit of history

Although modularity is something fundamental in basically all coding, our first major foray into broader structural came with GSOC 2014 student Justin Manley's (@justinmanley) work on MapKnitter. He pushed us not only to develop clearer welcoming documentation for newcomers, but also to spin out projects like the heart of MapKnitter, [Leaflet DistortableImage](/notes/justinmanley/05-21-2015/the-magic-behind-mapknitter-leaflet-distortableimage). We also took major inspiration from the work of the [Hoodie project](http://hood.ie/), which champions the "first-timers-only" workflow [we use today](https://publiclab.github.io/community-toolbox/#r=all).

Small modules as a design pattern has been championed by the Node.js community, where the [NPM repository of modules](http://npmjs.org) has led to people developing tiny programs which, for example, provide formatting for numerals, or can just capitalize words. These tiny modules are interconnected into collections of thousands to form bigger programs, and to do this without constantly breaking, they follow something called [Semantic Versioning](http://semver.org). This means that the version number of each "release" of a mini-program carries information about what's changed.

These modules do their utmost to "not break" projects they've been used in, and so a version change from `v1.0.0` to `v2.0.0` indicates that some behaviors have been changed -- any lesser change, for example just adding new functionality without breaking old functionality -- would be indicated by a minor version bump, like `v1.1.0` to `v1.2.0`. Bug fixes are the last digit. This may seem extraordinarily persnickity, but it provides **confidence that a program will be pretty stable** -- it's a kind of "agreement" between upstream and downstream programmers in interrelated projects.

We strive for something similar with tests. By accompanying your code with tests, and limiting the size of your changes, you can **give other coders the confidence that your code won't break**, or if it does, it'll complain by failing some tests! When done right, this can actually give newcomers a lot more confidence that they can make major changes and know (if tests are well-written) that they haven't broken anything.

---------

![image description](https://publiclab.org/system/images/photos/000/023/194/large/Screen_Shot_2018-01-17_at_7.28.42_PM.png "Screen_Shot_2018-01-17_at_7.28.42_PM.png")

_Above, a checklist by @mridulnagpal for our [Geographic features](https://github.com/publiclab/plots2/issues/1416)_

## Putting it in practice

OK, so what does this mean for you?

If you're part of the PL code reviewers group, and you're there to help people out, try looking at [GitHub issues that are too big to be solved in one big chunk](https://github.com/publiclab/plots2/labels/break-me-up), especially for newcomers. We use the tag `break-me-up` for these.

In the comments of an issue that could use breaking up, try to **develop a checklist** of things you can see happening one by one. Checklists can also help you **recruit people** to take on one or more steps, sharing the work. Do any of the make [great first-timers-only issues](https://publiclab.org/notes/warren/10-31-2016/create-a-welcoming-first-timers-only-issue-to-invite-new-software-contributors)?

As you complete each item, check it off the list and link to the issue or pull request where it was solved -- and thank the person who solved it!

Finally, if you propose a feature or bug fix, work with others to plan out these steps -- and ask for help! We're eager to pitch in.