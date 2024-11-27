---
nid: 13166
title: Streak
path: public/static/wiki/streak.md
uid: 1
tagnames: community,website,streak,streaks
---

# Streak

[![Screenshot_2016-06-03_at_4.43.29_PM.png](//i.publiclab.org/system/images/photos/000/016/496/large/Screenshot_2016-06-03_at_4.43.29_PM.png)](//i.publiclab.org/system/images/photos/000/016/496/original/Screenshot_2016-06-03_at_4.43.29_PM.png)

## What's a "streak"?

A "streak" -- shown as a flame icon, as in the example above -- refers to the number of consecutive days a community member has been active on PublicLab.org. Activity is measured in terms of notes, wiki edits and comments. The [code behind streaks](https://github.com/publiclab/plots2/pull/539#issuecomment-220784262) was written by @ananyo2012 as part of the [Google Summer of Code program](/wiki/gsoc).

If someone has posted a note, comment or wiki edit on a particular day, they are marked as "active" on that day. If they are active for more than 7 consecutive days, a "streak" icon is displayed beside their thumbnail picture in comments. The # of days in a streak is the # of consecutive days the user has been active. The total # of notes, comments and wiki edits are counted in these days and displayed in the tooltip accordingly. 

So suppose the community member has been "active" for 30 consecutive days with 50 notes, 100 comments and 30 wiki edits in these 30 days. The tooltip would then show:

> You're on fire! 50 notes, 30 wiki edits, and 100 wiki edits in the last 30 days
