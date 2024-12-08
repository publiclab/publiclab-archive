---
title: Wrapping up Google Summer of Code 2017 at Public Lab
tagnames: software, gsoc, google, google-summer-of-code, blog, code, wwg, response:13397, first-timers-only, software-outreach, gsoc-2017, rgsoc, soc, soc-2017, rgsoc-2017, response:13975, response:14788, response:14162, response:13910, summer-of-code
author: warren
path: /notes/warren/09-07-2017/wrapping-up-google-summer-of-code-2017-at-public-lab.md
nid: 14847
uid: 1

---

# Wrapping up Google Summer of Code 2017 at Public Lab

by [warren](../profile/warren) September 07, 2017 21:51

September 07, 2017 21:51 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [google](../tag/google), [google-summer-of-code](../tag/google-summer-of-code), [blog](../tag/blog), [code](../tag/code), [wwg](../tag/wwg), [response:13397](../tag/response:13397), [first-timers-only](../tag/first-timers-only), [software-outreach](../tag/software-outreach), [gsoc-2017](../tag/gsoc-2017), [rgsoc](../tag/rgsoc), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [response:13975](../tag/response:13975), [response:14788](../tag/response:14788), [response:14162](../tag/response:14162), [response:13910](../tag/response:13910), [summer-of-code](../tag/summer-of-code)

Hi, everyone! This past week we wrapped up our fourth year of Google Summer of Code (see #gsoc), a Google-funded summer program for students to get paid to work on open source projects. I'll be posting more thoughts as we go, but I first wanted to thank the amazing team we had. We had -- counting mentors, coaches, etc -- 17 people involved in this summer's work. (We're also wrapping up a Rails Girls Summer of Code soon -- many thanks to that team as well!)

From @stella's Email Notification Overhaul:

- Proposal: [https://publiclab.org/notes/stella/04-03-2017/email-notification-overhaul](https://publiclab.org/notes/stella/04-03-2017/email-notification-overhaul)
- Planning issue: [https://github.com/publiclab/plots2/issues/1421](https://github.com/publiclab/plots2/issues/1421)
- Wrap-up: [https://publiclab.org/notes/stella/08-24-2017/gsoc-2017-final-report](https://publiclab.org/notes/stella/08-24-2017/gsoc-2017-final-report)

From @Ashan's Wiki Discussion:

- Proposal: [https://publiclab.org/notes/Ashan/03-13-2017/wiki-discussion](https://publiclab.org/notes/Ashan/03-13-2017/wiki-discussion)
- Planning issue: [https://github.com/publiclab/plots2/issues/1438](https://github.com/publiclab/plots2/issues/1438)
- Wrap-up: [https://publiclab.org/notes/Ashan/08-23-2017/introducing-inline-commenting-for-wiki-pages](https://publiclab.org/notes/Ashan/08-23-2017/introducing-inline-commenting-for-wiki-pages)

From @mridulnagpal's Map of Projects:

- Proposal: [https://publiclab.org/notes/mridulnagpal/03-01-2017/map-of-projects](https://publiclab.org/notes/mridulnagpal/03-01-2017/map-of-projects)
- Planning issue: [https://github.com/publiclab/leaflet-blurred-location/issues/1](https://github.com/publiclab/leaflet-blurred-location/issues/1)
- Wrap-up: [https://publiclab.org/notes/mridulnagpal/08-23-2017/gsoc-submission-for-map-of-projects](https://publiclab.org/notes/mridulnagpal/08-23-2017/gsoc-submission-for-map-of-projects)

From @ryzokuken's Bot for Publiclab:

- Proposal: [https://publiclab.org/notes/ryzokuken/02-28-2017/bot-for-publiclab](https://publiclab.org/notes/ryzokuken/02-28-2017/bot-for-publiclab)
- Planning issue: [https://github.com/publiclab/plotsbot/milestone/2](https://github.com/publiclab/plotsbot/milestone/2)
- Wrap-up: [Getting to know plotsbot](https://publiclab.org/notes/ryzokuken/08-23-2017/getting-to-know-plotsbot)

From @ccpandhare's Developing Image Sequencer as a Library:

- Proposal: [https://publiclab.org/notes/ccpandhare/03-18-2017/developing-image-sequencer-as-a-library](https://publiclab.org/notes/ccpandhare/03-18-2017/developing-image-sequencer-as-a-library)
- Planning issue: [https://github.com/publiclab/image-sequencer/issues/23](https://github.com/publiclab/image-sequencer/issues/23)
- Wrap-up: [https://publiclab.org/notes/ccpandhare/08-23-2017/gsoc-2017-final-work-product-of-image-sequencer-project](https://publiclab.org/notes/ccpandhare/08-23-2017/gsoc-2017-final-work-product-of-image-sequencer-project)

Our mentors were: @david-days, @icarito, @stevie, @liz, and thanks especially to our past GSoC students who were mentors this year, @Ujitha and @ananyo2012! We really could not have had this amount of success without you.

---------

I just wanted to say that, although we've has some amazing summers in the past, this summer was once again our most successful summer yet. I think our continuous refinement of the planning process and how we run our unique Summer of Code process has really grown and allowed us to have:

- More projects succeeding
- More and better documentation
- Clearer onramps for new contributors written by students who can build out their own contributor mini-communities over the summer
- Better constant communication and inter-student collaboration
- More modular, easy-to-integrate projects
- More tests
- Better work plans
- An earlier, faster start to the summer

You can read more of the specific highlights of our projects on the most recent [Web Working Group update](https://publiclab.org/notes/warren/09-01-2017/web-working-group-update-20-august-2017). But I wanted to share some of the reflections, advice, thoughts, and ideas I've had over the course of this unique summer. I wrote some of this into each of your evals, but without sharing feedback specific to a given student, I wanted to share my notes. Apologies to non-coders if they're very software-oriented, but I think some of these apply to non-coding projects too!

---------

### 1\. Turn your remaining work into well-documented onramps for new contributors

To students who are approaching the end of their projects, an important step is re-assessing what's left, and what they can finish up in the remaining time. But rather than considering any unfinished pieces "missing", it's great to take them as an opportunity to invite others into your projects, by turning them into well-documented issues on your project repositories.

If you offer enough context, you should be able to recruit people to take up the remaining tasks once the summer ends, and whether or not you continue work afterwards, folks will be able to carry your work forward. This may mean writing a first-timers-only issue, for example, to welcome a new coder into the project.

Mentors: I think it's great to encourage students to document their work (and what's left to do) as issues that are up for grabs. It's better for morale to plan ahead for other people to pick up where you left off, and to think about your project living on, than to focus on asking them what they didn't do! And it's better for the project overall anyways!

### 2\. Write issues for yourself, but as if written for others

Ask students to write one new issue per week \*\*for someone else\*\*, which helps them think in terms of how others read their work, and encourages them to break up projects into smaller parts that newcomers can tackle. Good code is modular, not a spaghetti -- and looking at it from the outside is a powerful way to improve your planning and style.

### 3\. Learn how to develop a small community of contributors around your work

Over the course of your work, you've all become leaders in this community through your work, your collaboration, and your major contribution to the platforms we use at Public Lab. Take a look at this page for some ideas on how you can ensure your projects live on: [https://github.com/publiclab/plots2/projects/4](https://github.com/publiclab/plots2/projects/4)

### 4\. Write onboarding or "first-timers-only" issues

I think asking or even requiring projects to have "onboarding" or "first-timers-only" tasks during the recruitment phase can help improve the overall success of the project and ensure project teams are giving students the support they need early on. This also helps ensure that students have installed everything and gone through the "PR merging" process before they even begin work!

### 5\. Learn how to write a good, step-by-step first-timer issue

Start your summer by thinking about building a team by inviting others into your work. It's a key skill for any software developer, and it's never too early to think about documentation, or about designing for reuse and for other coders to read your work. As someone who's probably just gotten the project installed and set up, you're also uniquely equipped to guide others through that process! And it's a good habit both for yourself (to break down and articulate problems in writing) and for future coders. Here's a guide to writing issues for newcomers:

[https://publiclab.org/notes/warren/10-31-2016/create-a-welcoming-first-timers-only-issue-to-invite-new-software-contributors](https://publiclab.org/notes/warren/10-31-2016/create-a-welcoming-first-timers-only-issue-to-invite-new-software-contributors)

### 6\. See your own work through others' eyes

Towards the end of the summer, begin to consider how other people (who program) will use your work. Will they understand how to install it? How to adapt it to their own uses? Will they have trouble setting it up, or be confused at how things are named or organized? What can you do to make it easier for others to pick up your work and use it? A good demo? More clear documentation or examples? One great way to know if your work is readable is to ask one another to read it over and provide feedback.

### 7\. Break your work into small parts!

Students love to make giant projects that are all intertwined, and it takes discipline to break things into small, testable parts. But be hard on the students early on -- resist the temptation to just say "code the whole thing up as fast as you can!" since it can really be worth the time to work with them to plan out and break down their work. It's much easier to build on smaller self-contained modules that are clearly tested than to sift through huge amounts of less structured code, whether it's the students themselves doing it or you taking over at the end of the summer. It's also just good coding practice!

### 8\. Write a planning checklist that you can work on chunk by chunk

Write a planning issue early on, based on your proposal. Take the overall goals and break them into parts small enough that you can merge them (with tests) into the trunk branch one at a time. Before a user-facing feature goes live, you can merge in a whole set of back-end functions which underpin it, and ensure they are all working in production before making the UI that exposes it to the public.

Break things into a checklist with "phases" and really modularize down into distinct steps as much as possible, like in this example:

[https://github.com/publiclab/leaflet-blurred-location/issues/1](https://github.com/publiclab/leaflet-blurred-location/issues/1)

It's a really great way to visualize your progress over the course of the summer, and a good first step to developing a milestones.

### 9\. Publish "hidden betas" to test your work in production

When students want to publish a public-facing interface (a new feature) but you're not sure it's perfect yet, allow them to publish it in a way that's hidden, so you can see how it does "in the wild." For web projects, only enable it if people add a `?beta=true` parameter to the URL. For desktop projects, hide it behind a flag, like `--enable features`. That way, they can break up the work into smaller parts, and can get feedback from the real community as they refine their work. Just be sure the flags are clearly marked and can be removed by another contributor later.

Do you have more to suggest? I'd love to hear your tips -- leave them below in the comments.