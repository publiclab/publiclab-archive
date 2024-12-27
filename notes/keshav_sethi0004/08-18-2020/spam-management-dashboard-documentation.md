---
title: "Spam Management Dashboard (Documentation)"

tagnames: 'software, gsoc, spam, publiclab, management, dashboard, soc, summer-of-code, jeff, soc-2020, keshav, smd, gsoc2020, moderator, ebary, dashbaord, soc-2020-final'
author: keshav_sethi0004
path: /notes/keshav_sethi0004/08-18-2020/spam-management-dashboard-documentation.md
nid: 24349
uid: 653396
cids: 27247,27249,27253,27266,27399,27542
---

![](https://publiclab.org/public/system/images/photos/000/040/553/original/1.png)

# Spam Management Dashboard (Documentation)

by [keshav_sethi0004](/profile/keshav_sethi0004) | August 18, 2020 20:17

August 18, 2020 20:17 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [spam](/tag/spam), [publiclab](/tag/publiclab), [management](/tag/management), [dashboard](/tag/dashboard), [soc](/tag/soc), [summer-of-code](/tag/summer-of-code), [jeff](/tag/jeff), [soc-2020](/tag/soc-2020), [keshav](/tag/keshav), [smd](/tag/smd), [gsoc2020](/tag/gsoc2020), [moderator](/tag/moderator), [ebary](/tag/ebary), [dashbaord](/tag/dashbaord), [soc-2020-final](/tag/soc-2020-final)

----

# **Spam Management Dashboard**

**Spam Management** is one of the most crucial features of an organization. It keeps the user feed reliable, interesting, and informative. Public Lab actively works on spam filtration and has a great team of moderators to take care of that. For their ease of spam moderation, a new spam moderation dashboard is introduced.

This is the formal documentation of the **_Spam Management Dashboard_** (/spam2).

---------

# Table of contents

- Introduction of Spam2
- Menu
- Bulk Moderation
- Features of moderation table, Pagination and page preview
- Wiki and revision filter
- Flag
- Queue
- User Moderation
- Comment Moderation
- Insights
- Digest
- Responsive Design
- Codebase
- Remarks

---------

# Introduction of Spam2

Spam Management Dashboard is available on [https://publiclab.org/spam2](https://publiclab.org/spam2). Only Moderators and admins have access to it. The previous version of the spam management dashboard is available at [https://publiclab.org/spam](https://publiclab.org/spam).

/spam2 will redirect moderators to the bulk moderation page as shown below.![image description](/i/40548.png "1.png")

All the spammed and unmoderated Nodes are present along with filters and bulk moderation features.

---------

# Menu

All the navigation links related to spam2 are present in this menu and the current page will be highlighted with blue color. At the top of this menu, the role of the user is also present (Admin or Moderator). Contents of Menu are Insights | Moderation, Wiki, Queue, Revision, Comment, Flag, and User moderation.

![image description](/i/40549.png "2.png")

---------

# Bulk Moderation

There are in general five Bulk moderation buttons which are as follows:

- Spam
- Publish
- Delete
- Ban
- Unban

![](https://lh3.googleusercontent.com/kpxq41p3-Dc2v1Tb8HXytKPBvqqaurOcptSsJO8dxv2e0EqgLKEkdSuFOUqnFiA-pUgAVaD1yIiEa3t9BnbBftSiFcvbE0Zx_Gct8I2EDGgKLvUoMK34A8WoSuLYrjgFzqvNg9MJ)

- Spam will mark nodes as spam(status: 0 ), ban its user(status:0) and unflag that node(flag:0 ).
- Publish will mark nodes as publish(status:1) and unban its user(status: 1) and unflag that node(flag:0 ).
- Delete will delete selected node permanently
- Ban will ban the users of selected nodes
- Unban will unban the users of selected nodes
- Unflag will unflag selected nodes (Flag section)

All the bulk moderation buttons are disabled until nodes are selected. If one or more than one node is selected then all the buttons will get activated.

The select button will select all the nodes and remove all the selections if pressed again.

Bulk moderation nav is fully responsive and has a horizontal scroll in mobile and tablet screen sizes.

---------

# Moderation

![](https://lh3.googleusercontent.com/Gzv5UFWKjotCI4Abl4_wnbyUJ0JGGVwU2lhaCGsEKIMvAoPqk6--FNPk7bTDeR7W62Vqn2FkzdDCozIWewOdrTqzzRk0vHNQoU58qPb9DFJUmPT4dFegz1FrDA9XwAuhAbCQP8Jz)

This is the main moderation page which has all the nodes and wiki which has status of 0 or 4 which means they are either spammed or unmoderated. Spammed are marked with red badge and unmoderated with blue badge for easier identification.

Columns of moderation table:

- Title column contains the title of the node with its type and creation date. Title is also linked to the node.
- Author column has the name of the author and the number of nodes that belong to that user. It is linked to the user profile.
- Status has the status of node i.e spammed or unmoderated
- Updated at is the time at which node is updated
- Action column as all the action like publish, unban, ban, delete and spam post. According to the status of the node, these buttons will be active or inactive.

There is also a pagination select button where moderators can change items per page. By default the number of nodes per page is 30\.

![image description](/i/40550.png "5.png")

_Moderator can select the number of pages_

![image description](/i/40551.png "6.png")

_Moderator can move to the desired page_

At the top and bottom of the table, page stats are also present shows the number of pages and total nodes.

Moderator can also filter nodes based on the following criteria:

- New activity: Sort nodes by their update time.
- Recent: Sort nodes by their creation time.
- Spammed: Filter by 0 status and its count is also displayed in the badge.
- Unmoderated Filter by 4 status.

![](https://lh6.googleusercontent.com/JjbadM9Y5436VBJ3ahLOsm2YE-m0AsoOxHbWQRvO0V6Rlr79hKHv7wDSPrd9uZ4SrFB15GvLBA8fMhcj3fkoEW9wmUmwfEm047FXuJTBgBc0oi15J8G0QkvilDfQYRuOb-yrYcnX)

"Selected" nav item will show the count of selected nodes.

![](https://lh6.googleusercontent.com/w5bSOVc8QGKqgq13yLmGfxRg653c-rtyYqjhj5ddcoyZvS46_DpNxH5IDuOsrjp2_ATHenQKUTWKlA7JksQARuugfYn4JvYp-79a4sawsiVxoISINMU4wegva7qh2qx-xq5SAH8L)

Here Info dropdown button will provide basic moderation information. This section also shows some stats related to unmoderated and flag nodes. This will help moderators to keep track of remaining tasks.

---------

# Page preview

![](https://lh6.googleusercontent.com/oURAOpSmynVsgmnUiGZBg-TT4tMnYuN7QUCOGrQbiJkGD0M3ukM_Bn8r4YKpDfu3BrvJiB8jcSEPT9I1cSzKHY0fU-ABjSnAClD3nRKsH-QeQcnaUHRwBB6YDFTtT47yT2VnUOVI)

On clicking the node's title, the modal will appear which has all the body of node, 4 tags, and creation date. This can be closed by clicking anywhere on the screen.

---------

# Wiki and Revisions

Wiki page has all the published(status: 1) wikis and revision has all the spammed(status: 0) revisions.

![](https://lh6.googleusercontent.com/pUjcFM8mRc6Jc4Sn0nV-jsdKoASBkuI7Wsd3yLbmbpR3jjb2uq_E3jfaANzsYRGEh6kbBZigmopTDrmhItQw4u6oI72fBUIXr-qrWowcpsOLQLBEWnP9zFL4zjcTuFoQbVSiUABW)

All the main features mentioned above are present and wiki and revision.

---------

# Flag

![](https://lh4.googleusercontent.com/ySlc0a4AOmIMDvd2-xdt_26SYDqKvvOVacUzd4deUap1EQXOJ83MtjIGF6OFvnbPPYLWUX74Wp3jkujH79J846wZIF3RfMjR9KsuCfsH12rOKNWp-rtknuDX3uBApPk6TAQvJSiv)

This page contains all the nodes which are flagged by normal users. The moderation table contains columns mentioned in the moderation section. Count of flags is shown in the status column.

Filters available in the flag are following:

![](https://lh5.googleusercontent.com/IhE7Ad00dj7_zy56_QSIWZ2hePZVGvTJfG8fF-ojj9LNK93Af5s2_QvfwRYT3XBqq8_v8aLV3qzIxVxgPMoGvKeVyRubmMtrIf-8A7gpS3mdef8DCvShhcLPZzUzq93SoxUWXTcW)

- Flagged filter has all the nodes.
- Spammed filter has nodes with 0 status.
- Unmoderated filter has nodes with 4 status.
- Page filter has only wikis
- Notes filter doesn't show wikis

Flagged nodes can be unflagged by unflag action as shown below.

![](https://lh5.googleusercontent.com/DhdeLDLf4CWAKHy7Z_OcolmvaaK5vQQ6JjkMF_x2lY7etcq97EGAwVdQQdL-u58BF9Jmchyi_5cB54xLp9DQDXwhk2lESkltBzh-PiPSDloXQD1PjOJY9Huxx7XtBLLMgHZU4aLm)

---------

# How can users flag a node?

![](https://lh3.googleusercontent.com/lTGNugxfHH2x6vcxnYOKPayrDhYtxgvrvCTneOxo2OF8D37YKLyFdxm3ydEpm2oXpcyjjLp5WSeduBwqg8WcGIo-PymYHtnbAs9xxa_3m2aSrW8dHhWgHx9ftaufw5z6QnXG_V-3)

Users can click on the flag icon present in the dashboard after that alert will come will stating that node is flagged.

![](https://lh6.googleusercontent.com/-XUHQ8qJOTxHc_Bhg77Fu08MHPosNl5TdzW0Pwiqs_VQK7_pEoF88oYLqZxhDaDkceTISaSSGFlSDTynmnhI-yh0oLUIhblkOTgoCdO69uu_Kl_pAi9tAZHH-4LYVbbo6jF4u2oz)

Users can also flag a node in tools popup as shown below

![](https://lh5.googleusercontent.com/cDYGQMIFVrTQeGpyW6kHl0oYDNPGjDert0Mxra3oGyNj6LOl3JKpvRzptWkaXVpGeHDwP9ZczIU0eytaVgXr3UShwggT29yp3seTxvus9zWkTycJS-2uzGbyU5keQnZgrKbMOuw4)

---------

# Queue

This section of spam2 has all the nodes with tags that the moderator is following. Moderators can divide tasks with this section and moderate effectively.

![](https://lh4.googleusercontent.com/4n2YP3cyI7TQVQjKfZksfedYkwXUr_FggQI7Q-hCDgibkxY3z0D2fcFCTETsnuDql7lJ_caXQYMwcI3D5i0JGH1vMG-2XyvAUdlTLewXUJPjuTEmP0K7nXdolg3cJfv8hR1mRqit)

All the tags which the moderator is following are mentioned above the moderation table. Count of followers who are moderators or admin is shown in badge with tag.

Moderators can add/remove tags from + icon.

Moderators can also filter nodes with tag by clicking on the tag as shown below. The selected tag is highlighted with blue color and nodes are filtered with respect to the tag.

![](https://lh3.googleusercontent.com/H7nOvliGM56hfNKMa2Ts0nCQhTlg3S05EdhMiAYq1jtWX-zbT_HVxEyZUjkMOzc850CKIqgeEWMoPhnJfepY5E92Mtwfq7HypjBJJLU3DmV533OPIvrhJ_tv2R06ZsrNOf4XtRjN)

Filtered nodes as per tags

---------

# User Moderation

![](https://lh6.googleusercontent.com/FTIQ77jUsAqwJVCvyTKs2EEk4HcveXvVcd7mdmYJwphDxFkNzhy5qAnrGV4-f3ewUwvEsfRCs5bmM3wyX932bX7x3Zy8-otk3iZLXSkuRtVC4-9fc4FepUNiMvlkxe15oABb5drL)

This page has all the active users with 1 status including moderators and admins. The moderation table has features to ban and unban users as shown.

Columns of user moderation table are:

- Username has all the user names. If a user is banned then the icon is red and if the user is moderator or admin then the icon is blue.
- The Posts section has all the stats of that user which includes nodes count and flagged count.
- Created at column time when the user had joined the public lab.
- Email column has email id of the users
- Action column has features to ban and unban users.

Filters in user moderation is shown below

![](https://lh4.googleusercontent.com/6d2zPK1ACHrPXnB0RowMsZ1VsD1vsygrVvBCTAjJzBpke2JEYutkcKj1TrTxVIuQ5CU4BE2KoZfEXe53fZDdn19kLspQJJxxa9AAMowzy7-AiXVRVoWIoyBbfGga2o5wb4wuj15i)

- Active user filter has all the users
- Banned filter has all the users who are banned.
- Moderator filter has all the moderators
- Admin filter has all the Admins

\*count of all the filters are also shown

![](https://lh3.googleusercontent.com/iYiz4ri1rHxKtjt-zuJv1izwt0_7BqUaP6ac3bjo6m-o8zN-0DeAJw9kgnjjt6Jwyi0wxblXJ2xRWhfsVyKtseaNTwJTQXj5y2WljusUeFN1VAO3VmQmaAMi8300hzTkg8y-NjK5)

Bulk ban and bulk unban features are also present in user moderation.

---------

# Comment Moderation

![](https://lh6.googleusercontent.com/SIaQqaZ58GbQ8FQyji_KZlgSdtYX67RADYjc9iEskCxgPgQy0v13k44HDm93txarnz-fF8EenalJXuV9v70s0aZBfBRKyEVkFCP6KikJkRYxmvbAnxSg754OsFQibP8OfbKXGLA_)

The comment section of spam2 has all the comments which are scammed or unmoderated or flagged.

Action buttons are disabled according to the status of the comment.

Columns of comment moderation page are shown below:

- The node column has the title of the node along with its type and creation date.
- The content column has a content of that comment
- Author column has a user name of the author of comment and flag count of that comment
- Created date has a creation time of comment
- Action column has all the moderation features like spam, publish, ban, unban and unflag comment.

Filters in comment moderation are shown below:

![](https://lh5.googleusercontent.com/l9Y-VjA27qf8XjiIs8JhHSKS8NhSEZQG04yJtksmb_LBLGkJM_UAWDU7Fli59fpWqBMq3i8_4K5on004Gc3sZtdaDtTcIYh8ujgZMQrse-QVPzOgaA1mbIP_j8GSJCXGr-oEJWX8)

- New activity has all the comments which are flagged or spammed or unmoderated
- Spammed filter has all the spammed comments
- Unmoderated filter has all the unmoderated comments
- Flagged filter has all the flagged comments

![](https://lh6.googleusercontent.com/shMG-pzSWH3ZGB-xQupj76d1KrSmktyG2KWkorphVxssP6kep9HTo8xnL8Ks5c4J3z82GRE8wVFZb5aQUQN2oLDpisqUStPyZjzLi6cqDJvrtPXC2hpio6ElLcS7OxtoQNl49L1g)

Comment bulk moderation

- Spam: It marks comments as spam and ban users.
- Publish: It marks comments as published and unban users.
- Delete: it deletes selected comments
- Select: select and unselect comments

Stats of unmoderated and flagged comments are also shown.

---------

# How can users flag a node?

Any user can mark a comment as a flag with flag button![image description](/i/40555.png "Screenshot_from_2020-08-19_02-15-40.png")

---------

# Insights

![image description](/i/40556.png "Screenshot_from_2020-08-19_02-17-46.png")

This section has all the statistics for moderators for the past one month. It has count of unmoderated nodes, unmoderated comments, spammed nodes, spammed comments, flagged nodes, flagged comments, published comments, and published comments.

\* These are stats are for past one month

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

![image description](/i/40552.png "Screenshot_from_2020-08-19_00-36-08.png")

---------

# Codebase

Code specifically to spam2

Controllers:

- app/controllers/spam2\_controller.rb
- app/controllers/batch\_controller.rb

Views:

- app/views/spam2/\_comments.html.erb
- app/views/spam2/\_flags.html.erb
- app/views/spam2/\_insights.html.erb
- app/views/spam2/\_nodes.html.erb
- app/views/spam2/\_queue.html.erb
- app/views/spam2/\_revisions.html.erb
- app/views/spam2/\_spam.html.erb
- app/views/spam2/\_users.html.erb

Jobs:

- app/jobs/digest\_spam\_job.rb

Mailers:

- app/mailers/admin\_mailer.rb

Tests:

- test/functional/spam2\_controller\_test.rb
- test/functional/batch\_controller\_test.rb
- test/system/spam2\_test.rb

\*There are many changes at different places as well but most of them are here.

---------

# Remarks

Everything in this world has a scope of improvement and this project is no different. There are many changes and new feature requirements which arrive from time to time after testing it with real data.

So, I request everyone to please suggest changes and feature addition if needed. I am eagerly waiting for your review and suggestions.

I will surely try to improve it.

At last, I want to thank all members of Public Lab for their continuous support and suggestions

  
# Thanks a lot!

---------