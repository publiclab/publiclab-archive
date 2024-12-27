---
title: "Bridges between our community and our software contributors"

tagnames: 'community, software, outreach, gsoc, web, coding, wwg, software-outreach'
author: warren
path: /notes/warren/11-06-2016/bridges-between-our-community-and-our-software-contributors.md
nid: 13682
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/018/723/original/Screenshot_2016-11-05_at_8.12.04_PM.png)

# Bridges between our community and our software contributors

by [warren](/profile/warren) | November 06, 2016 00:24

November 06, 2016 00:24 | Tags: [community](/tag/community), [software](/tag/software), [outreach](/tag/outreach), [gsoc](/tag/gsoc), [web](/tag/web), [coding](/tag/coding), [wwg](/tag/wwg), [software-outreach](/tag/software-outreach)

----

First some background: over the past six months, we've seen a dramatic shift in how code is produced at Public Lab. We've received new contributions to [the PublicLab.org code repository][1] from 57 new contributors since August 1, (counting both issue creators and coders) -- a much higher rate than previously: compare to the total of 147 contributors for the lifetime of this software project, which goes back four years. You can see some of this activity on [GitHub Pulse][2].   

This change gets back to some key problems that many open source software projects face. While free and open source projects are "open" to contributions, **there's still a big gap between the people who use software and the people who make it.**

We feel strongly that our community, which this website is intended to serve, has the clearest and best ideas for how it should work. So we're looking for ways to help non-coders (who are the majority in our community) have more of a voice in this process, and to expand the bridge between these groups!

We'd love your input and suggestions, both in the comments below, and on the [upcoming OpenHour on software contributor outreach][3]!

## How it's supposed to work

In theory, how do you get help with a problem, or suggest a change?

1. You [file a bug report or a feature request][4]
2. If you can code, perhaps you learn how to edit the software yourself, and [submit a change to the project maintainers][5] (at Public Lab, that's me).
3. The change is incorporated into the code and published.

## The challenges

Of course, it's much more complicated. Many barriers and questions remain:

- How easy is it to find and use the bug reporting form? (on Public Lab, you can [find it here][6], listed in the footer of every page)
- Which project do you send your request to (Public Lab [has several][7])
- How do you describe what you want or need, and what do you do when your issue gets "stuck"?
- How easy is it to become a software contributor?

Those are -- relatively speaking -- the easier questions, and we've done a lot of work to make them simpler and more straightforward. But there are more:

- How do code contributors know exactly what's wrong, and what's the best way to fix it?
- How do we prioritize what fixes or features to work on?
- How do we recruit new contributors to fix problems and add features?
- Do you need to know how to write code to contribute? (hint: no!)
- How do we know a proposed solution fits the problem?

Much of this has been tackled through our [growing developer outreach program][8], and I've written about some of it from the coder perspective on [Google's Summer of Code blog][9] (to be posted at the end of November!). But the basics, [borrowed from others in the open source outreach movement][10], are:

- We make installing and testing the code really easy, and help new coders get started in a friendly and welcoming way.
- We ask people to describe the problem as clearly as possible, separately from a possible solution.
- We [make issues themselves very welcoming][11]; pointing at where in the code the problem lies, and suggesting possible fixes, even step-by-step.
- We do active outreach to new coders who are looking for ways to get involved in coding, many for the first time.

  
![image description][12]

  
However, this still has some issues:

- People who don't code at all still don't necessarily feel welcome or able to create these "welcoming" issues, so their problems don't get addressed.
- Design problems are different from code problems, and we haven't (yet) extended these strategies into design problems, or come up with ways to identify them as such.
- GitHub isn't a friendly place for everyone, no matter how hard we try!

## A way forward

I'd like to propose (and invite ideas for) some new strategies to do even better:

- A design track in our developer outreach, with guidance for and outreach specifically to designers
- A place to ask for help if your issue gets "stuck" -- perhaps the new weekly "open call"?
- A storyboarded workflow so people at least know how we hope it will work (read on!)

## Workflow

So, finally -- what is the workflow, step by step, to get your issue recognized and fixed or implemented?

1. Encounter a problem, or come up with an idea for how the [PublicLab.org][13] site could work better.
2. Post an issue at [https://github.com/publiclab/plots2/issues/new][4] (alt: ask a question at /questions!)
3. In the issue, clearly describe what went wrong, or what currently happens that you'd like to improve.
4. Then, propose a way forward (optional! we can help brainstorm this with you)
5. Scoping: maintainer/coders who write our code (like me) should help to figure out whether it's a big project or a little one; if it's big, we should be clear that it might not get done quickly, but suggest possible smaller or easier alternatives -- or break it up into smaller pieces

## Getting stuck

Here's where we often get stuck. To go from a somewhat fleshed out idea for a way forward, to a thoroughly described feature or fix to implement, we need:

- someone who knows a bit about the code
- input from the requester (or PL organizers in general) on whether the proposed solution is adequate, at least for now
- input from the same on any text needed -- this is often a point where things get stuck: what should the button say, exactly? The menu, or the email?
- a sense of urgency: is this WAY BROKEN and many people are frustrated, or is it a blue-sky idea?
- (this one is really important!) an understanding of audience: **how many people are affected or would benefit from this feature?** Does it mainly serve "power users" or will it be a multiplier that can grow our community dramatically?

And a few questions:

- can it be broken into smaller features/fixes, and ordered if some must be done first?
- is it dependent on some other feature/fix, and stuck until that's done?
- is just nobody available right now to look at it, or did people not see it get filed?
- can the requester, with assistance, help to flesh this out, break it up into separate issues, etc?

## The future

Overall, we're interested in non-coders taking more leadership of this process, and not having to wait as long, or rely as much on coders to get the improvements they want done. But clearly there's a lot to figure out to make this happen! I'd LOVE your input!

  
  

[1]: https://github.com/publiclab/plots2/
[2]: https://github.com/publiclab/plots2/pulse/monthly
[3]: /openhour
[4]: https://github.com/publiclab/plots2/issues/new
[5]: https://github.com/publiclab/plots2/pulls
[6]: /wiki/issues
[7]: https://publiclab.org/wiki/developers#Public+Lab+Software+projects
[8]: https://publiclab.org/wiki/developers
[9]: https://opensource.googleblog.com/search/label/gsoc
[10]: https://publiclab.org/notes/warren/03-04-2016/bostonjs-talks-focused-on-welcoming-new-coding-contributors
[11]: https://publiclab.org/notes/warren/10-31-2016/create-a-welcoming-first-timers-only-issue-to-invite-new-software-contributors
[12]: https://publiclab.org/system/images/photos/000/018/724/large/Screenshot_2016-11-05_at_8.21.07_PM.png "Screenshot_2016-11-05_at_8.21.07_PM.png"
[13]: http://PublicLab.org