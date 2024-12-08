---
title: Software outreach: a blog series
tagnames: web-development, software, outreach, development, gsoc, blog, code, wwg, software-outreach, gsoc-2017, soc, response:15093, response:13687, series:software-outreach
author: warren
path: /notes/warren/10-28-2017/software-outreach-a-blog-series.md
nid: 15126
uid: 1

---

# Software outreach: a blog series

by [warren](../profile/warren) October 28, 2017 13:48

October 28, 2017 13:48 | Tags: [web-development](../tag/web-development), [software](../tag/software), [outreach](../tag/outreach), [development](../tag/development), [gsoc](../tag/gsoc), [blog](../tag/blog), [code](../tag/code), [wwg](../tag/wwg), [software-outreach](../tag/software-outreach), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [response:15093](../tag/response:15093), [response:13687](../tag/response:13687), [series:software-outreach](../tag/series:software-outreach)

> Since early 2016, Public Lab has worked to [make our open source software projects more welcoming and inclusive](/wiki/software-outreach); to grow our software contributor community in diversity and size. This series collects some of those strategies and initiatives.

I've written a bit before [about software outreach](/tag/software-outreach) at Public Lab, but I'm interested in taking a broad overall look at the specific strategies we've developed, borrowed, and built on since around April 2016, when we started this initiative. This will be a series, and I'll be collecting resources [on this page](/wiki/software-outreach). (Above: GitHub profile icons of some of our [contributors](https://github.com/publiclab/plots2/graphs/contributors))

What's this series for? A set of experimental new strategies and patterns for outreach have emerged over the past 2-3 years which are rapidly changing the landscape for newcomer engagement. I'm excited because they hold promise for more welcoming (and technically superior!) project growth which also support more diverse and equitable communities.

### Starting point

We started out pretty "stuck," like many open source projects. From 2010-2016, [we had only 16 contributors](https://github.com/publiclab/plots2/graphs/contributors?from=2010-09-23&to=2016-04-10&type=c), total, 6 of whom were part of our [Google Summer of Code programs](/tag/soc) (today we have [over 100](https://github.com/publiclab/plots2/graphs/contributors); we're still a small project, but growing fast). Our code was byzantine -- not because we were terrible coders, but because we were all busy, and we put new feature development before all else. **Documentation, code cleanliness, install process, and even updating to the latest versions of our dependencies, all fell by the wayside as we made pragmatic decisions** -- after all, I was the only consistent long-term developer, and I had something like 1/3 or 1/4 time devoted to this.

Our first foray into better onboarding was led by @justinmanley, one of our earliest and best GSoC contributors, who wrote [this excellent post](https://publiclab.org/notes/justinmanley/12-21-2014/growing-the-public-lab-software-development-community) on how to reform and improve our code and outreach strategy. He did a huge amount to rework our code and systems to set us on the right track. With his help, we were ready for the next step...

### SpinachCon

Three events led to our completely changing our direction. First, **[SpinachCon](https://www.fsf.org/blogs/community/the-0th-spinachcon)** (in 2016), hosted by Shauna Gordon-McKeon and Deb Nicholson, was a great -- and humbling -- opportunity to try to get our code to be installable by newcomers. We'd estimated 30-60 minutes, after much work (even worse, in the past our GSoC students had sometimes taken more than a day to get dependencies installed!). We found several people who **couldn't install our code at all** over a couple hours. We spent a lot of time after that to get the install process down below 15 minutes, with an install video and a standard install environment in a free VM service, Cloud9, and things have improved a huge amount since then. Without this initial step, none of the following strategies would have worked!

### First-timers-only

Second, in the spring of 2016 I attended [a fantastic set of talks at BostonJS](https://publiclab.org/notes/warren/03-04-2016/bostonjs-talks-focused-on-welcoming-new-coding-contributors), which highlighted both the need for [a wider conception of who contributes](https://www.npmjs.com/package/name-your-contributors) (including issue creators, commenters, etc) and, from [Gregor Martynus](https://github.com/gr2m) of the Hoodie project, a whole new framework for thinking about building a contributor community. Click the link above to read more, and I'll be writing more about this soon, but I learned about the [First-Timers-Only](http://firsttimersonly.com) "movement", and really loved Gregor's attitude of "rolling out the red carpet for new contributors."

![image description](https://publiclab.org/system/images/photos/000/022/146/large/Screenshot_2017-10-28_at_9.35.00_AM.png "Screenshot_2017-10-28_at_9.35.00_AM.png")

### Diversity and project growth

It really seemed to me that Hoodie might even be more interested in recruiting and welcoming newcomers than in actually writing code! I was game -- writing a first-timers-only issue usually takes longer than solving the issue yourself. It's aimed at inviting someone new into the project, using a small but substantive issue to be solved as your initial point of collaboration, **and as the start of a conversation and a relationship**.

But I was wrong about one thing; as I learned in the coming months as we adopted this approach, a focus on first-timers really is an investment in the long-term growth of a community, both in size and [diversity](https://opensource.com/life/16/2/hoodie-open-source-community). It's a commitment to supporting people to take their first steps, but it recognizes that it takes work to do so, and that this work is totally worth it.

And in my mind, it emphasizes equity and diversity as core values, not only because they match our personal values, but because we recognize that they are fundamental to improving our work and ourselves. At the recent Google Summer of Code Mentor Summit, one thing I really appreciated hearing from a few people was that diversity was important to the success and growth of their project -- to incorporate new ideas and perspectives, and to be shaped -- transformed -- by them. It's a relief to hear people acknowledge that they're not just looking for someone to type out some code, but some insight, some human qualities, that they can't achieve without diversity.

### Transformation

So, before we start diving into the actual strategies in subsequent posts, I'll say that one thing I've learned is that doing good software outreach means acknowledging that your own work must change. Not only in shifting from direct coding work to organizing and cultural work, but also in transforming your own coding style and even your project architecture (see Modularity, in an upcoming post) to make it easier for others to enter into your work and work with you. Good outreach will make you a better coder!

So thanks to everyone who's helped make this journey possible! I'm sure I'll be naming a lot of amazing people and projects as this series develops.

> _**Up next:** Friendliness, codes of conduct, and first-timers-only. Read more of this series [on this page](/software-outreach)._

> _Also: do you have ideas or suggestions? We're seeking submissions for this series -- leave a comment or reach out to [jeff@publiclab.org](mailto:jeff@publiclab.org)!_