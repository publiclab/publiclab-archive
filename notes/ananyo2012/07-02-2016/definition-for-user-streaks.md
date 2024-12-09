---
title: Definition of User Streaks 
tagnames: web, activity, seeks:responses, feature
author: ananyo2012
path: /notes/ananyo2012/07-02-2016/definition-for-user-streaks.md
nid: 13257
uid: 468506

---

# Definition of User Streaks 

by [ananyo2012](../profile/ananyo2012) July 02, 2016 09:29

July 02, 2016 09:29 | Tags: [web](../tag/web), [activity](../tag/activity), [seeks:responses](../tag/seeks:responses), [feature](../tag/feature)

----

## What is to be implemented
Show User Streaks in Publiclab User Profile Page. For this we need the proper definition of User **Streaks** that will show the User streaks on profile page.

## Present implementation
Currently there is a implementation of User Streaks that shows the User streaks as a fire icon in comments for an User **on a streak**. This is how it looks

[![streak_v1.png](//i.publiclab.org/system/images/photos/000/016/847/large/streak_v1.png)](//i.publiclab.org/system/images/photos/000/016/847/original/streak_v1.png)

### Present definition of Streaks
Presently this is the definition of Streak that I used for the implementation

<blockquote>Streak refers to the number of consecutive days a user has been active in the community.Activity is measured in terms of notes,wiki edits and comments.If the user has posted even a single note, comment or wiki edits in a particular day he is marked as "active" on that day. If the user is active for more than 7 consecutive days a fire icon is displayed beside his bio pic. So no. of days in streak is the no. of consecutive days the user has been active. The total no. of notes, comments and wiki edits are counted in these days and displayed in the tooltip accordingly. So suppose the user has been "active" for 30 consecutive days with 50 notes, 100 comments and 30 wiki edits in these 30 days then the tootlip shows:</br><strong>You are on fire! 50 notes, 30 wiki edits, 100 wiki edits in last 30 days</strong></blockquote>

## Questions and next steps
So What we need is a proper definition of Streaks that will encourage both the present users as well as encourage newcomers to the community.

There is already a lot of of discussion made on Github Pull Request [#539](https://github.com/publiclab/plots2/pull/539). You can see the actual issue in the Github Issue [#319](https://github.com/publiclab/plots2/issues/319).

@cfastie has given some good definition of Streaks that can be used for the implementation

<blockquote>The type of streak that might be more suitable could be based on how much community interaction is related to a user's contributions. So, e.g., how many comments and likes on your research notes, how many research notes posted as a response to your notes, how many times your username was mentioned in a note or comment, how many barnstars were awarded to you, maybe how many comments on notes that follow your comments on those notes. A streak could be some minimum number of these things during a week -- consecutive days might be too restrictive.</blockquote>

<blockquote>To encourage new contributors, just multiply everybody's streak score by a factor related to newness of the user, e.g., the inverse of the number of days since joining or since first posting. To account for people who posted once three years ago but not since, wipe the slate clean if a user has not posted in six months (six weeks?). This metric would need a new name because brand new users would score high with just two or three comments, which might not be much of a "streak."</blockquote>

What @liz mentioned and I too agree is:
<blockquote>this idea of "proportional streak" could be implemented to be shown privately to the user to encourage them, but not displayed publicly</blockquote>

It is best to show the Streaks on the User Profile Page similar to what Github did.

Sending out this thought to all Publiclabers and asking their response for there definition on **User Streaks** so that we can reach a concrete definition.
