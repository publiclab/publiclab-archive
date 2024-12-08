---
title: Web Working Group Update 18: May 2017
tagnames: community, web-development, software, plots2, outreach, gsoc, developers, wwg, webwg, first-timers-only, software-outreach, rgsoc, wwg-update, response:14163
author: warren
path: /notes/warren/06-12-2017/web-working-group-update-18-may-2017.md
nid: 14526
uid: 1

---

# Web Working Group Update 18: May 2017

by [warren](../profile/warren) June 12, 2017 22:32

June 12, 2017 22:32 | Tags: [community](../tag/community), [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [outreach](../tag/outreach), [gsoc](../tag/gsoc), [developers](../tag/developers), [wwg](../tag/wwg), [webwg](../tag/webwg), [first-timers-only](../tag/first-timers-only), [software-outreach](../tag/software-outreach), [rgsoc](../tag/rgsoc), [wwg-update](../tag/wwg-update), [response:14163](../tag/response:14163)

Many apologies for a late monthly update -- it's been busy! Brief summary as per GitHub Pulse: [https://github.com/publiclab/plots2/pulse/monthly](https://github.com/publiclab/plots2/pulse/monthly)

**May 7 - June 7:** Excluding merges, 12 authors have pushed 28 commits to master and 57 commits to all branches. On master, 43 files have changed and there have been 770 additions and 419 deletions.

Google Summer of Code projects have begun, and shortly, Rails Girls Summer of Code will too! #RGSOC #GSOC -- this accounts in part for my late posting :-)

## Summer of Code

Over the past two weeks, members of our Summer of Code program have been posting planning issues to guide their work over the summer:

- @stella: [https://github.com/publiclab/plots2/issues/1421](https://github.com/publiclab/plots2/issues/1421)
- @Ashan: [https://github.com/publiclab/plots2/issues/1438](https://github.com/publiclab/plots2/issues/1438)
- @mridulnagpal: [https://github.com/publiclab/leaflet-blurred-location/issues/1](https://github.com/publiclab/leaflet-blurred-location/issues/1)
- @ryzokuken: [https://github.com/publiclab/plotsbot/milestone/2](https://github.com/publiclab/plotsbot/issues)
- @ccpandhare: [https://github.com/publiclab/image-sequencer/issues/23](https://github.com/publiclab/image-sequencer/issues/23)
- @david-days has also added: [https://github.com/publiclab/plots2/issues/1449](https://github.com/publiclab/plots2/issues/1449)

Thanks to everybody (@ryzokuken, @stella, @ccpandhare, @mridulnagpal, @Ashan, @david-days, @ananyo2012, @Ujitha, @stevie, @liz, @icarito) for helping get these in order and we'll continue to refine them

It's also fantastic to see students starting to post #first-timers-only issues: [https://github.com/publiclab/plots2/labels/first-timers-only](https://github.com/publiclab/plots2/labels/first-timers-only) -- some of you have already gotten a response!

---------

Project updates

Here are 1-line updates from folks from last week -- the first week of the summer's work:

First, @ananyo2012 (working with @ryzokuken):

> Under the Bot Project a lot of progress has been made. The repo of the project is at [https://github.com/publiclab/plotsbot](https://github.com/publiclab/plotsbot). A simple nodejs bot has been made that greets new users and responds with help message when pinged. 2 interfaces IRC and cli has been integrated. The bot is residing at `#publiclab-test channel` in OFTC IRC. The channel is bridged with riot so you can also test it at [https://riot.im/app/#/room/#publiclab-testing:matrix.org](https://riot.im/app/#/room/#publiclab-testing:matrix.org) . The code is also well modularized into interfaces and services module with code linting. Presently we are setting up tests for the bot. We have chosen jasmine for tests. Progress regarding that can be found at [https://github.com/publiclab/plotsbot/pull/22](https://github.com/publiclab/plotsbot/pull/22) and [https://github.com/publiclab/plotsbot/pull/20](https://github.com/publiclab/plotsbot/pull/20).

> Ujjwal (@ryzokuken) has been doing a great work and there are already 10 PRs out of which 8 are merged. Sorry for the long update. I didn't want to miss any one of them!

and @ryzokuken adds:

> At plotsbot, we have really only started to achieve basic things and have taken some baby steps towards our end goal but soon we will finish making the groundwork by setting up linting, testing and CI for the project. This would make the further heavy lifting easier. Also, the project​ has started to get some real direction as we have fleshed out a basic set of issues to hack on.

and @david-days:

> Under RESTful services, the development and testing UI PR has passed and should be ready for review. This will complete Phase 1, and will be the basis for development and integration with the other projects.

and @aspriya:

> Under project "Wiki Discussion" I added tests to check commenting functionality of wiki pages and now I'm working on phase 1.5 of my project which is to add a form for posting questions from a wiki.

and @ccpandhare:

> Under the project "Image Sequencer", I implemented basic functionality of the library with JSON support, added multiple image support, and Node.js support. I am currently working on phase 1/4 as per my timeline.

and @stella:

> Added a new method called `new_tag` added in subscription mailer, send email when a new tag is added, controller test for that method, templates in both html and text. Any issues that arose I have asked them in the PR: [https://github.com/publiclab/plots2/pull/1452](https://github.com/publiclab/plots2/pull/1452). Am now working on the method called `followers_who_dont_follow_tags(tags)`. The easiest way to know whether an email has been sent is to check whether the time attribute was updated or not but I also welcome your idea.

Thanks, everyone!

## Mini projects & demos

I also asked folks to try to break off an initial "Mini" project to complete in the first couple weeks. I know people are getting their initial work set up, but **if you have a demo to share, please post it in the comments and tell people how to try it out**.

These "mini" projects are a good exercise in accomplishing your big project goals in small, self-contained parts, and not creating a lot of interdependent code that's hard to understand all at once. I and your mentors (and your fellow students!) are here to help you break big projects down into small parts that can be independently tested, published, and are small enough to be easily understood in one or a few pull requests. It's MUCH easier to debug things separately! So you may have more than one PR active at a time.

It's also **really satisfying and helpful** to show your work to others in the community and get feedback!

If your demo needs to be published to the live site, please talk to me about whether it's been merged, and I can get back to you about the publication schedule.

### Systems

@icarito may be able to add more here, but he's recently completed:

- Upgrading [PublicLab.org](http://PublicLab.org) to MySQL 5.6
- Upgrading it to Debian Jessie
- work with me in getting the Solr integration going -- we're so close!

### Closing thoughts

Thanks to our great Summer of Code team -- a few thoughts to leave you with:

- Keep adding detail to your planning issues, and breaking them out into sub-issues with "problem and proposed solution" context, links to relevant code, and ask the rest of us for help doing this!
- Remember to explain what your Pull Request is intending to accomplish, so that when others review it, they can assess whether they think it does so successfully
- Ask each other for help -- I, and your mentors, are not always available at the moment you ask, but we're a big team now! Write down your questions in an issue, then ask (and link to them) in the chatroom: [https://publiclab.org/chat](https://publiclab.org/chat)

Thanks again -- and good luck!