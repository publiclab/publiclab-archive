---
title: GSoC 2020 Report: Spam Management Dashboard 
tagnames: gsoc, spam, report, keshav, gsoc-2020-report, soc-2020-final
author: keshav_sethi0004
path: /notes/keshav_sethi0004/08-29-2020/spam-management-dashboard-gsoc-2020-report.md
nid: 24481
uid: 653396

---

# GSoC 2020 Report: Spam Management Dashboard 

by [keshav_sethi0004](../profile/keshav_sethi0004) August 29, 2020 21:56

August 29, 2020 21:56 | Tags: [gsoc](../tag/gsoc), [spam](../tag/spam), [report](../tag/report), [keshav](../tag/keshav), [gsoc-2020-report](../tag/gsoc-2020-report), [soc-2020-final](../tag/soc-2020-final)

Name: Keshav Sethi

Email: [f20170657@pilani.bits-pilani.ac.in](mailto:f20170657@pilani.bits-pilani.ac.in)

Github: [https://github.com/keshavsethi](https://github.com/keshavsethi)

Affiliation: Birla Institute of Technology and Sciences, Pilani (Bits Pilani)

Timezone: Indian Standard Time (UTC +05:30)

Mentors: Emily Ashley, Jeffrey Yoo Warren, Sudipto Ghosh, Ananya Arun, Harman S

---------

# Spam Management Dashboard

Spam Management is one of the most crucial features of an organization. It keeps the user feed reliable, interesting, and informative. Public Lab actively works on spam filtration and has a great team of moderators to take care of that. For their ease of spam moderation, a new spam moderation dashboard is introduced.

In my Google Summer of Code project, I redesigned the UI and added features like bulk moderation, flag, queue, insights, and filters.

For more details please refer to my [GSoC 2020 proposal](https://publiclab.org/notes/keshav_sethi0004/03-12-2020/gsoc-2020-proposal-spam-management-dashboard) and my [Planning Issue](https://github.com/publiclab/plots2/issues/7885 "https://github.com/publiclab/plots2/issues/7885"). This will give you a basic idea about this project.

NOTE: **All my PRs are listed at last of this post** and for more detailed documentation click [here](https://publiclab.org/notes/keshav_sethi0004/08-18-2020/spam-management-dashboard-documentation)

---------

# Spam2

Spam Management Dashboard is available on [https://publiclab.org/spam2](https://publiclab.org/spam2). Only Moderators and admins have access to it. The previous version of the spam management dashboard is available at [https://publiclab.org/spam](https://publiclab.org/spam).

[/spam2](https://publiclab.org/spam2) will redirect moderators to the bulk moderation page as shown below.

![image description](https://publiclab.org/i/40726.png "Screenshot_from_2020-08-30_00-03-38.png")

All the spammed and unmoderated Nodes are present along with filters and bulk moderation features. Spammed are marked with a red badge and unmoderated with a blue badge for easier identification.

At the top count of unmoderated and flagged nodes are also present. Moderator can also change node per page with dropdown at the left. By default, it is 30\. At the top and bottom of the table, page stats are also present shows the number of pages and total nodes.

All the navigation links related to spam2 are present in this menu and the current page will be highlighted with blue color. At the top of this menu, the role of the user is also present (Admin or Moderator). Contents of Menu are Insights | Moderation, Wiki, Queue, Revision, Comment, Flag, and User moderation

---------

# Bulk Moderation

There are in general five Bulk moderation buttons which are as follows:![](https://lh3.googleusercontent.com/kpxq41p3-Dc2v1Tb8HXytKPBvqqaurOcptSsJO8dxv2e0EqgLKEkdSuFOUqnFiA-pUgAVaD1yIiEa3t9BnbBftSiFcvbE0Zx_Gct8I2EDGgKLvUoMK34A8WoSuLYrjgFzqvNg9MJ)

- Spam will mark nodes as spam(status: 0), ban its user(status: 0) and unflag that node(flag: 0).
- Publish will mark nodes as publish(status: 1) and unban its user(status: 1) and unflag that node(flag: 0).
- Delete will delete selected node permanently
- Ban will ban the authors of selected nodes
- Unban will unban the authors of selected nodes
- Unflag will unflag selected nodes (Flag section)

All the bulk moderation buttons are disabled until nodes are selected. If one or more than one node is selected then all the buttons will get activated.

The select button will select all the nodes and remove all the selections if pressed again.

Bulk moderation nav is fully responsive and has a horizontal scroll in mobile and tablet screen sizes.

---------

# Filters

Moderators can also filter nodes based on the following criteria:

- New activity: Sort nodes by their update time.
- Recent: Sort nodes by their creation time.
- Spammed: Filter by status '0' and its count is also displayed in the badge.
- Unmoderated: Filter by status '4'
- Published: Filter by status '1'
- Wiki: Filter by type 'wiki'(Present in Menu)
- Revision: Filter by the spammed revision(Present in Menu)![image description](https://publiclab.org/i/40727.png "Screenshot_from_2020-08-30_00-30-08.png")

Moderator can search, sort in every page of spam2\. The modal of the content of a node is also there which gives a better idea to the moderator about the node. Moderator is notified and alerted after every action.

---------

# Flag

This page contains all the nodes which are flagged by normal users. All the bulk moderation features are present and count of flagged nodes is mentioned in info badge. All the nodes are sorted as per flag count.![image description](https://publiclab.org/i/40729.png "Screenshot_from_2020-08-30_00-41-23.png")

The count of flag per node is shown in the Status column. In the action column, the moderator can unflag the node with an unflag button. This will change the count of the flag to 0\.

Moderators can filter flagged nodes as per their status(Unmoderated and spammed) and type(Note and wikis).

---------

# How can users flag a node?![image description](https://publiclab.org/i/40730.jpg "Screenshot_from_2020-08-30_00-55-34.jpg")

Users can click on the flag icon present in the dashboard after that alert will come. Users can also flag a node in tools popup.

---------

# Queue

This section of spam2 has all the nodes with tags that the moderator(who is currently logged in) is following.

![image description](https://publiclab.org/i/40731.png "Screenshot_from_2020-08-30_01-07-43.png")

All the tags which the moderator is following are mentioned above the moderation table. Count of followers who are moderators or the admin is shown in badge with tag.

Moderators can add/remove tags from + icon.

Moderators can also filter nodes with tag by clicking on the tag as shown below. The selected tag is highlighted with blue color and nodes are filtered with respect to the tag.![image description](https://publiclab.org/i/40732.png "Screenshot_from_2020-08-30_01-10-25.png")

---------

# User Moderation

This page has all the active users with status '1' including moderators and admins. The moderation table has features to ban and unban users as shown  
![image description](https://publiclab.org/i/40733.png "Screenshot_from_2020-08-18_21-48-15.png")

Bulk ban and bulk unban features are also present in user moderation. Moderators can filter users as per their status(Banned or active) and role(Moderator or Admin or basic). In the 'post' column Nodes dives count of published nodes and flagged gives the count of all the flagged nodes.

---------

# Comment Moderation

![](https://lh6.googleusercontent.com/SIaQqaZ58GbQ8FQyji_KZlgSdtYX67RADYjc9iEskCxgPgQy0v13k44HDm93txarnz-fF8EenalJXuV9v70s0aZBfBRKyEVkFCP6KikJkRYxmvbAnxSg754OsFQibP8OfbKXGLA_)

The comment section of spam2 has all the comments which are spammed or unmoderated or flagged. Their current status can be identified from the node column. Action buttons are disabled according to the status of the comment. Filters in comment moderation are New Activity (Sorted as per update time), spammed(status: 0), Unmoderated(status: 4), flagged(flag \> 0). Stats of unmoderated and flagged comments are also shown at the top right in info badges.

---------

# How can users flag a node?

Any user can mark a comment as a flag with the flag button![image description](https://publiclab.org/i/40734.jpg "Screenshot_from_2020-08-19_02-15-40.jpg")

---------

# Insights

![image description](https://publiclab.org/i/40556.png "Screenshot_from_2020-08-19_02-17-46.png")

This section has all the statistics for moderators for the past one month. It has a count of unmoderated nodes, unmoderated comments, spammed nodes, spammed comments, flagged nodes, flagged comments, published comments, and published comments.

![](https://lh4.googleusercontent.com/WGJJz9GmRzpl4pEV_2ulCN4JiVKzj-vPT2S95AakzF-Eg_8c6Is31XudsEIqXZyY0fblXxbqYbh1ud887nZJ2Bd5kDEdNr_50NhjW6yhhRFdwNSj7ZihdVO9tPzLNw9y8WI68BF-)

The moderation graph depicts all line graphs of flagged, spammed, and unmoderated nodes. Flagged nodes are represented by a yellow color, spammed with red color, and unmoderated with blue color.

![](https://lh6.googleusercontent.com/beDFL0rLRgoyTyOk8qthFhDY9wucUzd01j_OXBSC7w20AcaTHieJ0eCpAvheqpQQ_RQ5884Kv6R2RAwMNF6H0KijjVOSNMmKYh7JGVB1dZuyB4hMoJgQaL9GfullwmfJIbRIKx1h)

This is a bar graph of tags wrt count of followers which are moderators and admins. On the right-hand side, all tags are shown sorted as per their follower count which are moderators and admin.

---------

# Digest

Digest for moderators is created on a daily/weekly basis. Moderators can enable digest in the notifications settings page.

![](https://lh6.googleusercontent.com/T318pAs0Zff8DdTjAlveSD3TVY1BOwVDkBUZWM1eQ-GOmb_7lkRmfZElcncMJ9WhjnqIPDzikc0-KQH44au9CM5YD14mNoIEKgLuAvapJ-7hYC615iiL0iKEFCTSwhxAgmaLjayi)

![](https://lh3.googleusercontent.com/spAoZLun5EuPUz3-gNuWs2HdAJdODw23z6anz51h9-lFU-VVU2cZ3OEnMjBX7hIt6j9AEwYGiaAJdVLHUR9f8DtS07HPUJX3aj8rHHU1NVBa5CZJvDOYevfQKZ5UVlrlvZgNx7BI)

Moderators can approve and mark nodes as spam directly from mail and change frequency from notification settings.

---------

# Responsive Design

![image description](https://publiclab.org/i/40552.png "Screenshot_from_2020-08-19_00-36-08.png")

---------

# Contributions during the GSoC period

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/7969](https://github.com/publiclab/plots2/pull/7969)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8022](https://github.com/publiclab/plots2/pull/8022)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8034](https://github.com/publiclab/plots2/pull/8034)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8038](https://github.com/publiclab/plots2/pull/8038)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8058](https://github.com/publiclab/plots2/pull/8058)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8063](https://github.com/publiclab/plots2/pull/8063)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8107](https://github.com/publiclab/plots2/pull/8107)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8130](https://github.com/publiclab/plots2/pull/8130)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8145](https://github.com/publiclab/plots2/pull/8145)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8162](https://github.com/publiclab/plots2/pull/8162)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8196](https://github.com/publiclab/plots2/pull/8196)

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8203](https://github.com/publiclab/plots2/pull/8203 "https://github.com/publiclab/plots2/pull/8203")

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8289](https://github.com/publiclab/plots2/pull/8289 "https://github.com/publiclab/plots2/pull/8289")

[](https://github.com/publiclab/plots2/pull/7969https://github.com/publiclab/plots2/pull/8022https://github.com/publiclab/plots2/pull/8034https://github.com/publiclab/plots2/pull/8038https://github.com/publiclab/plots2/pull/8058https://github.com/publiclab/plots2/pull/8063https://github.com/publiclab/plots2/pull/8107https://github.com/publiclab/plots2/pull/8130https://github.com/publiclab/plots2/pull/8145https://github.com/publiclab/plots2/pull/8162https://github.com/publiclab/plots2/pull/8196https://github.com/publiclab/plots2/pull/8203https://github.com/publiclab/plots2/pull/8289https://github.com/publiclab/plots2/pull/8352)[https://github.com/publiclab/plots2/pull/8352](https://github.com/publiclab/plots2/pull/8352 "https://github.com/publiclab/plots2/pull/8352")

Apart from this, there are few PRs with gitpod setup and few FTOs (around 10) where first-timers also contributed in spam2\.

---------

Codebase

Code specifically to spam2

Controllers:

- [app/controllers/spam2\_controller.rb](https://github.com/publiclab/plots2/blob/main/app/controllers/spam2_controller.rb)
- [app/controllers/batch\_controller.rb](https://github.com/publiclab/plots2/blob/main/app/controllers/batch_controller.rb)[](https://github.com/publiclab/plots2/blob/main/app/controllers/batch_controller.rb)

Views:

- [app/views/spam2/\_comments.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_comments.html.erb)
- [app/views/spam2/\_flags.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_flag.html.erb)
- [app/views/spam2/\_insights.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_insights.html.erb)
- [app/views/spam2/\_nodes.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_nodes.html.erb)
- [app/views/spam2/\_queue.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_queue.html.erb)
- [app/views/spam2/\_revisions.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_revisions.html.erb)
- [app/views/spam2/\_spam.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_spam.html.erb)
- [app/views/spam2/\_users.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_users.html.erb)[](https://github.com/publiclab/plots2/blob/main/app/views/spam2/_users.html.erb)

Jobs:

- [app/jobs/digest\_spam\_job.rb](https://github.com/publiclab/plots2/blob/main/app/jobs/digest_spam_job.rb)[](https://github.com/publiclab/plots2/blob/main/app/jobs/digest_spam_job.rb)

Mailers:

- [app/mailers/admin\_mailer.rb](https://github.com/publiclab/plots2/blob/main/app/mailers/admin_mailer.rb)[](https://github.com/publiclab/plots2/blob/main/app/mailers/admin_mailer.rb)

Tests:

- [test/functional/spam2\_controller\_test.rb](https://github.com/publiclab/plots2/blob/main/test/functional/spam2_controller_test.rb)
- [test/functional/batch\_controller\_test.rb](https://github.com/publiclab/plots2/blob/main/test/functional/batch_controller_test.rb)
- [test/system/spam2\_test.rb](https://github.com/publiclab/plots2/blob/main/test/system/spam2_test.rb)[](https://github.com/publiclab/plots2/blob/main/test/system/spam2_test.rb)

\*There are many changes at different places as well but most of them are here.

---------

# Remarks

At last, I want to thank all the members of Public Lab and my mentors for their continuous support and suggestions.

# Thanks a lot!