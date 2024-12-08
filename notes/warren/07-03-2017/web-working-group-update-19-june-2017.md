---
title: Web Working Group Update 19: June 2017
tagnames: web-development, software, plots2, gsoc, developers, wwg, webwg, first-timers-only, soc, soc-2017, wwg-update, response:14526
author: warren
path: /notes/warren/07-03-2017/web-working-group-update-19-june-2017.md
nid: 14614
uid: 1

---

# Web Working Group Update 19: June 2017

by [warren](../profile/warren) July 03, 2017 21:22

July 03, 2017 21:22 | Tags: [web-development](../tag/web-development), [software](../tag/software), [plots2](../tag/plots2), [gsoc](../tag/gsoc), [developers](../tag/developers), [wwg](../tag/wwg), [webwg](../tag/webwg), [first-timers-only](../tag/first-timers-only), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [wwg-update](../tag/wwg-update), [response:14526](../tag/response:14526)

Shorter update this month -- I was VERY late on [last month's](https://publiclab.org/notes/warren/06-12-2017/web-working-group-update-18-may-2017), so it's only been a bit over 2 weeks :-/

> For our [PublicLab.org](http://PublicLab.org) repository: **7 authors have pushed 29 commits** to master and 88 commits to all branches. On master, **59 files have changed** and there have been 492 additions and 1,362 deletions

Above -- our graph now shows 90 contributors to the project.This of course doesn't count coding happening in adjacent repositories like:

- [https://github.com/publiclab/plotsbot](https://github.com/publiclab/plotsbot)
- [https://github.com/publiclab/inline-markdown-editor](https://github.com/publiclab/inline-markdown-editor)
- [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/leaflet-blurred-location)

### New features

A few new things have gone live -- a beta release of the Inline Rich Wiki editor, which you can activate using the green "pencil" icon on all wiki pages. It looks like this:

![image description](https://publiclab.org/system/images/photos/000/021/001/large/Screenshot_2017-07-03_at_5.00.34_PM.png "Screenshot_2017-07-03_at_5.00.34_PM.png")

There's also a beta [new Questions form](https://publiclab.org/editor/questionRich), which looks like this:

![image description](https://publiclab.org/system/images/photos/000/021/003/large/Screenshot_2017-07-03_at_5.03.48_PM.png "Screenshot_2017-07-03_at_5.03.48_PM.png")

### Summer of Code

Just to recap, students in our Summer of Code program have been cranking away; you can see their planning issues here:

- For @stella: [https://github.com/publiclab/plots2/issues/1421](https://github.com/publiclab/plots2/issues/1421)
- For @Ashan: [https://github.com/publiclab/plots2/issues/1438](https://github.com/publiclab/plots2/issues/1438)
- For @mridulnagpal: [https://github.com/publiclab/leaflet-blurred-location/issues/1](https://github.com/publiclab/leaflet-blurred-location/issues/1)
- For @ryzokuken: [https://github.com/publiclab/plotsbot/milestone/2](https://github.com/publiclab/plotsbot/milestone/2)
- For @ccpandhare: [https://github.com/publiclab/image-sequencer/issues/23](https://github.com/publiclab/image-sequencer/issues/23)
- For @david-days has also added: [https://github.com/publiclab/plots2/issues/1449](https://github.com/publiclab/plots2/issues/1449) (David's a mentor but has an ambitious project of his own!)

### Student project updates

First, @mridulnagpal writes:

> Live demo working at [https://mridulnagpal.github.io/leaflet-blurred-location/examples/](https://mridulnagpal.github.io/leaflet-blurred-location/examples/)
> 
> Input listeners added which changes the map locations
> 
> A new feature called precision added and many new methods with tests added
> 
> An element integrated which shows the current location of map in text using geocoding API
> 
> Will start working with Graticule plugin now, and integrate it to the map.

Then, @stella writes:

> I have worked on a method called **notify\_tag\_added()** that is used to email users of new tagging on notes they don't already follow. I have also written tests to ensure that the method is working properly.
> 
> Demos to show: You can pull from my branch and play around with the emails([https://github.com/publiclab/plots2/pull/1481](https://github.com/publiclab/plots2/pull/1481))
> 
> Next steps: Move to phase 2, where I will be working on active jobs.

Also, @ryzokuken writes:

> On the bot project, I have come close to finish up the FTO feature, which would allow users to check out the current first-timers-only issues for any publiclab repositories. As this was the first behaviour implemented using the new and shiny promise-based model, I did find a few shortcomings and have patched them and I hope we will strengthen the model quite a bit over the course of the next few PRs.
> 
> We also thought a lot over how to implement shared state/dependencies among multiple behaviours and ended up using the "factory function" approach, which I am quite satisfied with. Not to mention, the documentation has consistently grown and has become quite reliable.
> 
> **We had our first new contributor recently**, and they added the Travis Status badge to our README, which was super helpful.
> 
> We have been discussing recently to take away the core chatbot logic of the bot and make it a separate npm module. This would go a long way towards making the project much more successful, I think.
> 
> Next, I will start working on another feature or on a WeChat interface, whichever would be a higher priority for the organization at that point of time. Also, I feel the help behaviour needs an update.

Thanks to everybody (@ryzokuken, @stella, @ccpandhare, @mridulnagpal, @Ashan, @david-days, @ananyo2012, @Ujitha, @stevie, @liz, @icarito) for all your hard work! Please post any recent demos or completed projects in the comments.