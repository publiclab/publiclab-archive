---
title: "Software Outreach"

tagnames: 'software, outreach, gsoc, web, wwg, first-timers-only, software-outreach, soc'
author: warren
path: /wiki/software-outreach.md
nid: 15062
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/026/657/original/Screen_Shot_2018-09-24_at_12.06.14_PM.png)

# Software Outreach

by [warren](/profile/warren)

October 17, 2017 14:50 | Tags: [software](/tag/software), [outreach](/tag/outreach), [gsoc](/tag/gsoc), [web](/tag/web), [wwg](/tag/wwg), [first-timers-only](/tag/first-timers-only), [software-outreach](/tag/software-outreach), [soc](/tag/soc)

----

Since early 2016, Public Lab has worked to make our open source software projects more welcoming and inclusive & to grow our software contributor community in diversity and size. This page collects some of those strategies and initiatives. 

First, if you're interested in contributing as a first-timer, welcome! Please check out our welcome page at:

> https://code.publiclab.org/

We hope these will be useful for other free and open source projects as well. Please [ask a question](#Questions) if you'd like to know more, and contact jeff@publiclab.org if you'd like to contribute a post. Thanks!

### Quick links

* See [this post](https://publiclab.org/notes/liz/04-15-2019/report-2019-software-contributors-survey) for the results of our 2019 software contributors survey (including demographic information)
* See [this post](https://publiclab.org/notes/warren/03-22-2018/libreplanet-talk-sharing-strategies-for-welcoming-newcomers-into-floss-projects-first-timers-only-list-moderation-and-more) for a presentation on these strategies as presented at LibrePlanet 2019 (with video)

## Transformation

First, one thing we've learned is that doing good software outreach means acknowledging that your own work must change. Not only in shifting from direct coding work to organizing and cultural work, but also in transforming your own coding style and architecture (see **Modularity**, below) to make it easier for others to enter into your work and work with you. So, lessons we've learned are: 

* The code will have to change
* Good outreach will make you a better coder!


## Inspiration

Since 2016, we have learned from and incorporated strategies from other communties like [the Hoodie project](http://hood.ie/), SpinachCon, [FirstTimersOnly.com](http://firsttimersonly.com), [UpForGrabs.net](http://up-for-grabs.net), and [Outreachy](http://outreachy.org), and also shared our own ideas, and this session will cover a range of principles and strategies that have emerged across a number of separate efforts in different open source projects.

**Read more about this on the Software Outreach blog series:**

## The complete series (so far)

[series:software-outreach](/tag/series:software-outreach)

****

## Quick installation

There's more to say on this, but the very first thing we started to do at Public Lab to make our code more welcoming was to aggressively refine our installation process so that the whole system could be installed in 10-15 minutes. This took weeks of work -- cleaning up libraries, documenting, removing unnecessary parts, and above all **testing installation on different environments** -- but the real proof is posting a screencast video of installation on a freshly installed environment, like [this one for MapKnitter.org](https://youtu.be/iGYGpS8rZMY). Real-time video makes you honest! :-P

Resources: https://the-pastry-box-project.net/charlotte-spencer/2015-september-16

## Codes of Conduct

An even more important counterpart to friendliness is to ensure people feel safe by clearly forbidding inappropriate behavior in a [Code of Conduct](/conduct), and by making sure people know the Code of Conduct and follow it.

[code-of-conduct](/tag/code-of-conduct)

Also: 

- our introductory post about [Public Lab's CoC](/conduct) and [how we wrote it together](/notes/Shannon/07-06-2016/public-lab-code-of-conduct), packed with references, inspirations, and good advice
- [Ada Initiative's How to Design a Code of Conduct for your Community](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)

## Friendliness

As highlighted by [the Hoodie community](http://hood.ie/about/) and the [First-timers only movement](http://www.firsttimersonly.com/), one of the first steps to having a more welcoming and inclusive community is to be really nice. 

This can come through in documentation, in discussions, by providing positive and constructive support, and when thanking people for their work. Modeling and talking about welcoming and friendly tone is important to establishing and sustaining a welcoming culture for newcomers and long-time contributors alike. 

**Read more in this post: https://publiclab.org/notes/warren/12-12-2017/software-outreach-codes-of-conduct-and-friendliness**

Also see this mini study on emoji use! https://dev.to/ben/ruby-has-the-kindest-programming-community-and-i-have-the-data-to-prove-it-4f60

## First-timers-only

As pioneered by the site http://firsttimersonly.com and championed by [Hoodie](http://hood.ie/about/), we provide newcomers a chance to learn how we collaborate by going through a step-by-step guided issue to make their first contribution. 

These issues take longer to make than fixing the actual bug, but the purpose is to engage with a new community member and show them how to work with us in an encouraging and supported way.

They are also **small enough issues that they can be done in a fairly short period of time**, and this encourages modularity (see below) -- complex, layered processes must be **broken into smaller, simpler modules** in a sequence, or there's "no way for others to enter the work"!

[first-timers-only-blog](/tag/first-timers-only-blog)


![welcoming page](https://publiclab.org/system/images/photos/000/022/004/large/Screenshot_2017-10-23_at_12.03.37_PM.png)

## Welcoming pages

One key strategy adapted from [Rasmus Praestholm](https://github.com/Cervator) of the [Terasology project](http://terasology.org/) is to have a  page specifically for welcoming and supporting newcomers, as shown in the screenshot above (Rasmus developed several Trello pages to help organize the welcoming process). This page is **friendly**, provides newcomer-specific resources and also features a call to action with #first-timers-only issues (see above).

See our **Newcomer Welcoming Page** here: http://publiclab.github.io/community-toolbox#r=all

See our [older version here](https://github.com/publiclab/plots2/projects/2), and create your own at: https://github.com/publiclab/community-toolbox

(more coming soon)


## Hosting events

Hosting local events is a great way to build out a local coding community -- as demonstrated impressively by @stella of [Rails Girls Nairobi](https://twitter.com/railsgirlsnbo) -- read more here:

[coding-events](/tag/coding-events)


## Modularity

Modularity may sound kind of boring as a topic -- and it's relationship to outreach and onboarding not immediately apparent. The basic idea is to isolate functionality in smaller chunks of code which are easier to reuse, understand, and maintain.

But this is exactly what newcomers need -- to not have to know a much larger whole system to be able to get your bearings, and to know what a chunk of code will receive as input, and should generate as output. It also makes for very test-able code, and code which has a minimal "entanglement" with other parts of a complex system.

I encourage ANYONE doing open source work to think hard about how their project can be better modularized -- along with the various other strategies on this page, it can lead to a major influx of new contributors!

**Read more here: https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration**

## Evaluation

How can we understand what's working and not working in our efforts to welcome a broader and more diverse group of contributors into our community? Evaluation techniques are critical to understanding what we're doing poorly and what's working. 

Read some about our work in evaluation [on this page](/evaluation), and read about [our Software Community Survey here](https://publiclab.org/questions/warren/10-25-2017/help-with-a-standard-mini-evaluation-for-assessing-software-outreach-efforts) 

(more coming soon)

## Ladders of participation/leadership

Once you've gotten a lot of people to take their first step in contributing, what's next? We ask new contributors, once they've taken the initial step, to **create their own** `first-timers-only` issues. After all, they're now *experts in being first-timers*!

[Community Toolbox](https://publiclab.github.io/community-toolbox/) asks people to take the next step by [writing their own](https://publiclab.org/n/13667).

(more coming soon)

## Social media outreach

Social media outreach can be a surprisingly powerful way to recruit people, by making them feel truly welcome, encouraged, and -- once they've made a contribution -- thanked! We're learning to do this better, but thanks to efforts like [FirstTimersOnly.com](http://firsttimersonly.com) for helping to get out the word on social media.

(more coming soon)

## Continuous integration

This is obvious to some, but using a continuous integration testing service like TravisCI can be a crucial way to support newcomers. TravisCI and Dangerbot provide immediate helpful feedback to new folks who open pull requests:

https://github.com/publiclab/plots2/pulls

But there are things to look out for -- like ensuring automated messages are themselves friendly and encouraging, not harsh and intimidating. Language matters!

But the key here is that people can share what they've got done so far, and ask for help early. We encourage folks to open a PR as early as possible so other community members can "look over their shoulder" and offer support. Some issues can be solved without even installing a project locally (scary!).

(more coming soon)

## Fellowship & funding programs

We participate in several and there are lots out there! 

* Rails Girls Summer of Code
* Google Summer of Code
* Outreachy
* http://rubyme.org

## Friendly Bots

We use **[Welcomebot](https://probot.github.io/apps/welcome/)** and **[First-Timers-Bot](https://github.com/hoodiehq/first-timers-bot/)** to great effect at Public Lab code projects, and you're free to [copy our templates from here](https://github.com/publiclab/plots2/issues/3681). Each plays a number of roles.

**Welcomebot** leaves a nice comment at three moments: 

1. when you open your first issue
2. when you open your first pull request
3. when your first pull request is merged

Each is an opportunity to a) be friendly and encouraging, b) offer resources and support, c) guide people through the process in a "trickle onboarding" way, so that they didn't have to face all the information up front, but could get it just when they need it, gradually.

I'll be writing more about this soon, but see this screenshot for the kind of welcoming moments we're able to provide using Welcomebot:

![image description](/i/30267.png?s=o)

****

## Resources

A page for resources on outreach, diversity, inclusivity, and related topics!

### Orgs and programs

* https://Outreachy.org
* [Mozilla Diversity and Inclusion](https://wiki.mozilla.org/Diversity_and_Inclusion_for_Communities_and_Contributors)
* Bridge Foundry (`@bridgefoundry` on Twitter)
* NumFOCUS Diversity and Inclusion in Scientific Computing (DISC) - [mailing list](https://groups.google.com/a/numfocus.org/forum/#!forum/disc/join), [website](https://numfocus.org/programs/diversity-inclusion)
* Rails Girls Nairobi https://twitter.com/railsgirlsnbo
* 500 Women Scientists (for possible outreach to scientific communities) https://twitter.com/500womensci

* add more and help organize the page!

### Tools and resources

* [DISCOVER Cookbook](https://discover-cookbook.numfocus.org/) for inclusive events (NumFOCUS DISC Program resource)
* OpenDemographics 
https://github.com/drnikki/open-demographics
* http://code.publiclab.org - https://publiclab.org/software-outreach [@PublicLab](http://twitter.com/publiclab)

## System diagram

Here is a system diagram of all of our welcoming systems, conventions, tools, and habits:


[![plots2_Data_Model.png](/i/42841)](/i/42841?s=o)

(from [this document](https://docs.google.com/presentation/d/1aquQKyih8vvtD7U-AI0NlbAcgT-BVu9G8hloYg-c-QI/edit#slide=id.g4d3f64d275f539e8_0))

****

## Questions

[software-outreach](/tag/question:software-outreach)

****

For a list of many features we've implemented for outreach efforts on the PublicLab.org website, see: 

https://publiclab.org/wiki/community-development
