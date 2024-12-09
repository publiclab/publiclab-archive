---
title: '¾ Done! 75% Done! Progress Report! - [Outreachy & Public Lab Internship] Blog #4'
tagnames: outreachy, soc-2020, outreachy-2020
author: noi5e
path: /notes/noi5e/02-03-2021/done-75-done-progress-report-outreachy-public-lab-internship-blog-4.md
nid: 25587
uid: 726270

---

![](https://publiclab.org/public/system/images/photos/000/042/589/original/maxresdefault.jpg)

# ¾ Done! 75% Done! Progress Report! - [Outreachy & Public Lab Internship] Blog #4

by [noi5e](../profile/noi5e) February 03, 2021 04:40

February 03, 2021 04:40 | Tags: [outreachy](../tag/outreachy), [soc-2020](../tag/soc-2020), [outreachy-2020](../tag/outreachy-2020)

----

# 😅 😅 😅 

Phew! I've been working as an [Outreachy Intern](https://noi5e.hashnode.dev/intro-and-core-values-outreachy-and-public-lab-internship-blog-1) with [Public Lab](https://publiclab.org/) for 9 out of 13 weeks! That means it's time for a Mid-Point&mdash;*Oops*&mdash;I mean, ¾-Point Progress Report.

**The Outreachy organizers suggested we reflect on *Modifying Expectations* for this blog post.** I recently posted a [check-in issue for Public Lab's Open Source Community](https://github.com/publiclab/plots2/issues/9112) which also has this theme.

### Agendas

When I first applied for this internship, I made a rough agenda detailing the work I thought I would do. It went like this:

- **Week 1:** Write System Tests
- **Week 2:** Write System Tests
- **Week 3:** Find, Solve, and Write Up Critical Bugs
- **Week 4:** Find, Solve, and Write Up Critical Bugs
- **Week 5:** Image Upload
- **Week 6:** Image Upload
- **Week 7:** Rich-Text Entry
- **Week 8:** Rich-Text Entry
- **Week 9:** Save & Preview Text
- **Week 10:** Save & Preview Text
- **Week 11:** Overflow Week
- **Week 12:** Overflow Week
- **Week 13:** Overflow Week

So glad I wrote this so I can go back and reflect on what I've learned. Here's how my schedule actually went:

- **Week 1:** Write System Tests
- **Week 2:** Write System Tests
- **Week 3:** Write System Tests
- **Week 4:** Write System Tests
- **Week 5:** Image Upload Bugs _(Actually, I never stopped writing System Tests ✅)_
- **Week 6:** Image Upload Bugs
- **Week 7:** Rich-Text Bugs
- **Week 8:** Comment Editor Refactoring
- **Week 9:** Comment Editor Refactoring
- **Week 10:** STILL
- **Week 11:** IN
- **Week 12:** PROGRESS 🚀 🚀 🚀

### Findings

Here's what I've learned about budgeting my time as a developer:

#### Writing System Tests
  - **Expected:** I'll spend two self-contained weeks writing these, and then I'll move on to the next thing once they're all done!
  - **Actual:** I spent **four weeks** writing them! And I never stopped! On average, I write a few every week.

There's a programming philosophy called [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) in which programmers write [system tests](https://noi5e.hashnode.dev/everybody-struggles-outreachy-and-public-lab-internship-blog-2) and NOTHING BUT system tests, before they even start to write their website, program, or application.

Now that I've written plenty of system tests, I can appreciate how much discipline this practice takes, when taken to an extreme. If I were writing Public Lab's website from scratch, it probably would take me six months working full-time to create a suite of tests that I could trust were comprehensively testing all the site's functions.

**I appreciate how writing system tests was a good way of getting my bearings and understanding how things worked.** I definitely recommend it if you are just starting to get involved with an open source community!

#### Getting My Bearings
In my original agenda, I budgeted two weeks for *Finding, Solving, and Writing Up Critical Bugs*. I thought this would be necessary largely because I didn't read the copious documentation that already existed in my open source community:

![Screen Shot 2021-02-02 at 7.48.33 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612324120803/VLLmYf9QG.png)

As a newish developer, reading through GitHub issues definitely seemed very intimidating at first! I was a little afraid of it, actually. It does take some time to seriously read through an issue and understand what the bug might be, let alone setting up the local dev environment and trying to reproduce it yourself. **After having written some issues, I also understand how much time it takes to even write one myself!** I'm grateful to anyone that's participated in an open source community as a bug-finder for that reason. 🙏

Still though, those issue pages exist for a good reason, and they're very useful! In retrospect, it wasn't necessary at all to spend any time hunting down bugs. You could say the bugs found me in the end.

![maxresdefault.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1612324496320/3U7npfajM.jpeg)

#### One Bug to Rule Them All
I spent about two weeks weeks fixing a cross-wiring image upload bug. That two week allotment was on target, I'd planned for that amount of time in my original agenda. **Still though, it was a *very intense two weeks*, because it was the first time I transitioned into writing bug-fixes and features from writing system tests!** The stakes felt a lot higher.

The bug was pretty gnarly at first and unraveled with a bunch of small fixes everywhere. I described it in a [previous blog post](https://noi5e.hashnode.dev/know-your-audience-outreachy-and-public-lab-internship-blog-3) in greater detail, but basically Public Lab users would try to upload an image in one comment form, and it would end up in another, completely unrelated comment form. **OOF!**

The reason this bug happened was because the comment forms didn't have [unique IDs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id), and what I'll call the *Comment Form Overmind* wasn't keeping good track of what should go where.

Basically I had to assign unique IDs (dropping a link again because [HTML IDs should always be unique!](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)) to the comment form elements. It took some elbow grease, but it was satisfying in the end to see everything sparkly and organized.

![Spark-Joy.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1612325512776/Rxciw9Pli.jpeg)

#### Mise en Place
Assigning unique HTML IDs solved the Image Upload Cross-Wiring Bug, but I was pleasantly surprised to see that it made solving other bugs a lot easier! I thought Rich-Text Cross-Wiring Bugs would take another two weeks, but they only took one (and really more like 3 days). Similarly, I feel as if Save & Recover Bugs will only take a few days to fix. Yay! 

For me, this saved time is a lesson in the whole _Measure Twice, Cut Once_ philosophy. Cooks also refer to this as [mise en place](https://en.wikipedia.org/wiki/Mise_en_place). I've heard that firefighters say *"Slow is smooth, smooth is fast"*. **If you take extra, sometimes painstaking time to get all your ducks in a row, the work just goes smoother and faster in the end.**

![maxresdefault.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1612325934807/e7XgUV0Ro.jpeg)

**I'm also aware that everything that I'm changing in the codebase right now is actually Mise en Place for the developers down the line who will work on the code that I'm writing now!** It's very humbling to think of things that way.

#### In Summary
I think one thing I did right when I made my original agenda was that I set aside three weeks at the end of the internship as a wildcard, which I'm entering into right now. It's actually kind of exciting because I feel like once my most recent PRs are merged, I'm entering into new territory which is more creative.

I could add new features to the rich-text toolbar! I could try experimenting with building the Comment Editor in Rails + React!

I feel like things are actually going pretty well! I'm learning a lot, and having fun while doing it. Good times.

- [Part 1 of this blog series](https://noi5e.hashnode.dev/intro-and-core-values-outreachy-and-public-lab-internship-blog-1)
- [Part 2: Everybody Struggles!](https://noi5e.hashnode.dev/everybody-struggles-outreachy-and-public-lab-internship-blog-2)
- [Part 3: Know Your Audience](https://noi5e.hashnode.dev/know-your-audience-outreachy-and-public-lab-internship-blog-3)
- [Part 4: ¾ Done! 75% Done! Progress Report!](https://noi5e.hashnode.dev/done-75-done-progress-report-outreachy-and-public-lab-internship-blog-4)
- *[Connect with me on LinkedIn](https://www.linkedin.com/in/will-gutierrez-8097275/)*
- *[Track my progress in real-time at Public Lab's repo!](https://github.com/publiclab/plots2/issues/9069)*
- *[My GitHub Profile](https://github.com/noi5e)*