---
title: "Getting to know plotsbot"\ntagnames: 'gsoc, google-summer-of-code, gsoc-2017, soc, soc-2017, plotsbot, publiclab-testing, response:14788'
author: ryzokuken
path: /notes/ryzokuken/08-23-2017/getting-to-know-plotsbot.md
nid: 14779
uid: 493113

---

![](https://publiclab.org/public/system/images/photos/000/021/397/original/PublicLab.png)

# Getting to know plotsbot

by [ryzokuken](../profile/ryzokuken) | August 23, 2017 14:23

August 23, 2017 14:23 | Tags: [gsoc](../tag/gsoc), [google-summer-of-code](../tag/google-summer-of-code), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [plotsbot](../tag/plotsbot), [publiclab-testing](../tag/publiclab-testing), [response:14788](../tag/response:14788)

----

BTW: Here's where it all started (https://publiclab.org/notes/ryzokuken/02-28-2017/bot-for-publiclab)

Plotsbot is the codename for the chatbot we are building and operating here at Publiclab. Work on plotsbot started as a Google Summer of Code project assigned to me (@ryzokuken) under the mentorship of @warren, @liz, @ananyo2012, @david-days and under the constant guidance of @icarito.

## About plotsbot

Plotsbot is written completely in JavaScript and runs on Node. As of now, it runs on our testing channel, #publiclab-testing on OFTC IRC server, which is also mirrored to a chatroom on matrix under the same name. The codebase for the bot lives at https://github.com/publiclab/plotsbot.

## Issues

The bot project has a decent set of issues, most of which could be found here: https://github.com/publiclab/plotsbot/issues. However, some of the changes for the project need to be done in the plots2 codebase, and such issues would be appropriately labelled, 'plotsbot'.

## Work Done

1. Built the core logic of that chatbot
2. Built an IRC interface
3. Built the greet and help behaviors
4. Built the CLI interface
5. Built the FTO behavior
6. Revamped the entire core bot logic with improved behavior triggering
7. Changed the core bot logic to use promises behind the scenes
8. Wrote the heat behavior
9. Build the say and tell behaviors (in progress)
10. Add a new class of behavior triggers (in talks)
11. Port the core bot logic to a separate npm module (in talks)

Also, wrote tests for each part bringing the code coverage upto over 92%

## Walkthrough

An easy way of testing out the chatbot is to join the testing channel mentioned above (it was made precisely for this kind of thing). If it's your first time joining the channel, the bot will greet you using the predefined greet behavior and try to guide you:

```
[19:33] == john-doe [~oftc-webi@14.139.238.98] has joined #publiclab-testing
[19:33] <plotsbot1> Welcome to Publiclab, john-doe! For a quick walkthrough, send the message: `plotsbot help`
```

You could try asking the bot to help by typing in `plotsbot help`. The bot will respond with a(n outdated) help message.

```
[19:34] <john-doe> plotsbot help
[19:34] <plotsbot1> # chatbot
[19:34] <plotsbot1> `plotsbot help [<module>...]`: Prints out this descriptive help message for each mentioned module. If no modules are specified, print the help message for ALL modules.
```

The help behavior needs some more work, and needs to be added to constantly whenever new behaviors are added. You could try to help us with this.

Also, you could ask the chatbot about the current FTO issues -

```
[19:37] <john-doe> plotsbot fto
[19:37] <plotsbot1> You need to mention the name of a repository.
```

Aw, it needs us to mention the names of the repositories for which we need the FTO issues. Let's try looking for the plots2 repository.

```
[19:38] <john-doe> plotsbot fto plots2
[19:38] <plotsbot1> publiclab/plots2
[19:38] <plotsbot1> 1418 => Add more functional tests to each method in Search API
[19:38] <plotsbot1> 171 => rss feeds empty for banned users
```

Viola! The bot found us two FTO issues on the plots2 repository. Time to start hacking on them.

Also, you could check the status of the publiclab server by typing in `plotsbot heat`, which would inform you about the current temperature levels of the hard drives.

```
[19:46] <john-doe> plotsbot heat
[19:46] <plotsbot1> /dev/sda: ST6000DM001-1XY17Z: 49°C
[19:46] <plotsbot1> /dev/sdb: ST6000DM001-1XY17Z: 47°C
[19:46] <plotsbot1> /dev/sdc: WDC WD1001FALS-00E8B0: 35°C
[19:46] <plotsbot1> /dev/sdd: WDC WD15EARS-00MVWB0: 30°C
[19:46] <plotsbot1> /dev/sde: WDC WD1002FAEX-00Z3A0: 34°C
[19:46] <plotsbot1> /dev/sdf: WDC WD15EARS-00MVWB0: 28°C
[19:46] <plotsbot1> /dev/sdg: ST2000DM001-1CH164: 35°C
```

That was convenient.

Feel free to wade through the source code of the bot in order to learn more awesome stuff about how the engine works behind the scenes in order to provide a good conversational experience.

## First Timers Only

First Timers Only is an open source initiative which encourages open source projects to write simple first-timers-only issues and only accept PRs from people who are contributing to a project for the first time. Apart from the bot behavior that makes the bot fetch such issues from different publiclab repos, the bot's source code in itself has had a set of such issues for introducing beginners to the beautiful world of open source software.

These issues, which mainly involved adding different cool badges to the project's README, are on the Github issue (#27)[https://github.com/publiclab/plotsbot/issues/27].

At the time of writing this research note, there weren't any first-timers-only issues on the plotsbot project, but an interested person could take a look at the [fto-candidate issues](https://github.com/publiclab/plotsbot/labels/fto-candidate) instead, which are almost equivalent to FTOs with the exception of formatting, but for that we'd be happy to guide you through it.

## Possible Behaviors

Possible behaviors include (but aren't necessarily limited to)

1. Show and Tell
2. Respond to unheeded messages
3. Respond to unanswered question

## What next

For setting up the bot locally, contributing to its codebase or just figuring out how it works, take a look at the project's README here: https://github.com/publiclab/plotsbot/blob/master/README.md