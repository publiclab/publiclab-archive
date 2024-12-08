---
title: Create a welcoming "first-timers-only" issue to invite new software contributors
tagnames: community, outreach, gsoc, web, wwg, activity:software, first-timers-only, contributors, software-outreach, activity:soc, activity:software-outreach, first-timers-only-blog, series:software-outreach, activity:developers
author: warren
path: /notes/warren/10-31-2016/create-a-welcoming-first-timers-only-issue-to-invite-new-software-contributors.md
nid: 13667
uid: 1

---

# Create a welcoming "first-timers-only" issue to invite new software contributors

by [warren](../profile/warren) October 31, 2016 03:10

October 31, 2016 03:10 | Tags: [community](../tag/community), [outreach](../tag/outreach), [gsoc](../tag/gsoc), [web](../tag/web), [wwg](../tag/wwg), [activity:software](../tag/activity:software), [first-timers-only](../tag/first-timers-only), [contributors](../tag/contributors), [software-outreach](../tag/software-outreach), [activity:soc](../tag/activity:soc), [activity:software-outreach](../tag/activity:software-outreach), [first-timers-only-blog](../tag/first-timers-only-blog), [series:software-outreach](../tag/series:software-outreach), [activity:developers](../tag/activity:developers)

We've been doing some [serious outreach](/software-outreach) for our software contributor community -- that is, people who help us make [PublicLab.org](http://PublicLab.org) and other Public Lab software, through coding, designing, testing, and other helpful tasks.

One way we've been doing this is through `first-timers-only` issues, which are written in a very engaging, welcoming way, far differently than the usual
"just report the bug" type of GitHub issue. To read more about these, check out [firsttimersonly.com](http://firsttimersonly.com) (the lead image is from their site), which really captures how and why this works, and is beginning to be a movement in open source coding outreach! Beyond the extra welcome, this also includes getting such well-formatted issues out in front of lots of people who may be contributing to open source software for the very first time.

It takes a LOT of work to make a good issue of this type, and we often walk through each step required to actually make the requested changes -- the point is to help newcomers understand that a) they're welcome, and b) what the collaboration workflow looks like.

Our current list of unsolved `first-timers-only` issues can be found here:

> [https://code.publiclab.org#r=all](https://code.publiclab.org#r=all)

And we try to keep at least 3-4 of them in there at all times!

### What makes a good first-timers-only issue?

Good issues for newcomers are usually just a few lines of code, and provide:

- context for the change -- how it fits into the big picture
- a clear description of what's wrong and/or what needs to be different
- a link to the page on the live site where you can see where the change will go
- a link to the lines of code that need to change
- step-by-step instructions on making the change and submitting it
- who to ask for help
- friendliness!

You can see an example of one here: [https://github.com/publiclab/plots2/issues/3688](https://github.com/publiclab/plots2/issues/329)

It **should** take longer to write such an issue than it would take you to do the fix yourself if you're a coder. And you can start with an existing issue, such as a [help-wanted issue](https://publiclab.org/notes/warren/03-04-2016/bostonjs-talks-focused-on-welcoming-new-coding-contributors), which have some of this information, but not the strict formatting or extra guidance and friendliness!

### A standard template

**Update:** we now have a template we use with the `first-timers-bot` that has lots of excellent wording and nice emojis to be extra friendly! Find it here:

[https://github.com/publiclab/plots2/blob/master/.github/first-timers-issue-template.md](https://github.com/publiclab/plots2/blob/master/.github/first-timers-issue-template.md)

---------

Good candidates to source from  

We've especially marked some as `fto-candidate` issues if we think they'd make good `first-timers-only` issues, but haven't yet had the time to follow through with the formatting -- you can choose one and upgrade it: [https://github.com/publiclab/plots2/labels/fto-candidate](https://github.com/publiclab/plots2/labels/fto-candidate)

**Note:** you need not be a coder to write this kind of issue, either! Much of this is just good formatting, context, and friendliness; for the parts about the actual fix, you can ask someone who's familiar with the codebase (like me!) to help out before finally labeling it.

Copy-paste that all into a new GitHub issue, and fill it out to describe the problem and the solution:

[https://github.com/publiclab/plots2/issues/new](https://github.com/publiclab/plots2/issues/new)

This template could surely be improved or refined -- please make any suggestions or ask questions in the comments below!

#### Sources

We learned about this outreach strategy in [a talk by Gregor Martynus](https://publiclab.org/notes/warren/03-04-2016/bostonjs-talks-focused-on-welcoming-new-coding-contributors) of the Hoodie project at a BostonJS meetup, and through further reading at [firsttimersonly.com](http://firsttimersonly.com) and [up-for-grabs.net](http://up-for-grabs.net). You can also take a look at [this post on the Hoodie project](http://hood.ie/blog/starter-issues.html) for some tips about what makes a great issue description for new coding contributors.