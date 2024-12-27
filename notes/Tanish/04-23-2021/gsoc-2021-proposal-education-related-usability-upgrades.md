---
title: "GSoC 2021 proposal:  Education-related usability upgrades"

tagnames: 'software, soc, lat:30, lon:77, first-time-poster, zoom:7, gsoc-2021, gsoc-2021-proposals'
author: Tanish
path: /notes/Tanish/04-23-2021/gsoc-2021-proposal-education-related-usability-upgrades.md
nid: 26311
uid: 749103
cids: 28653,28654,28687,28688,28712,28714
---

# GSoC 2021 proposal:  Education-related usability upgrades

by [Tanish](/profile/Tanish) | April 23, 2021 16:58

April 23, 2021 16:58 | Tags: [software](/tag/software), [soc](/tag/soc), [lat:30](/tag/lat:30), [lon:77](/tag/lon:77), [first-time-poster](/tag/first-time-poster), [zoom:7](/tag/zoom:7), [gsoc-2021](/tag/gsoc-2021), [gsoc-2021-proposals](/tag/gsoc-2021-proposals)

----

This is a draft shared for feedback.  

---------

## 

About
Me 

I am Tanish BE
CSE student at Chitkara University Punjab, India. I have learnt web development
from coding ninjas and all my concepts are clear. Also I have also made many
projects using CSS and JS (uploaded on LinkedIn). I am very hardworking and
have scored 94.2% in 12th. I also have experience of **GSSOC** (Girl Script summer of code) by **GSOC** coding time (as GSSOC coding period ends by 31st May
, 2021 and GSOC coding period starts from June 7 , 2021) , where I have made
merged pull requests .

Github: https://github.com/SharmaTanish

LinkedIn: [https://www.linkedin.com/in/tanish-a54b771b3](https://www.linkedin.com/in/tanish-a54b771b3)

Email: [tanishsharma0209@gmail.com](mailto:tanishsharma0209@gmail.com)

Phone Number:
(+91)7404927210

Time zone: Indian
Standard Time (UTC +05:30)

Project
Description 

This project basically
is to improve the educational users experience over Public lab platform by
adding new features and updating previous once. This can be achieved by asking
for feedback from educators as they are familiar enough with the platform. You
can go through the rough timeline I have made for all the steps taken to make
this project successful.

Abstract/Summary 

This project going to
deal with these features ( along with these I will also try my level best to
create new issues for adding more features and also I will try to create
first-comer-issue so that we can more expand our contributors community ) :

1. Separate author names with commas instead of "with", on
pages like [https://publiclab.org/notes/otimmerman077\_stu/02-18-2020/bioluminicence-detector](https://publiclab.org/notes/otimmerman077_stu/02-18-2020/bioluminicence-detector "https://publiclab.org/notes/otimmerman077_stu/02-18-2020/bioluminicence-detector") .  
2. Add a listing of draft posts to user profile pages.
3. add Bootstrap tooltips explaining latitude/longitude
tags ("This is a geographic tag for placing this content on a map.") on
pages such as [https://publiclab.org/wiki/puerto-rico](https://publiclab.org/wiki/puerto-rico), linking to [https://publiclab.org/location-privacy](https://publiclab.org/location-privacy) as well .
4. Filter out known spam from replies to comments, as
described in: [#8854](https://github.com/publiclab/plots2/issues/8854)
5. Complete email notification opt-outs for moderators, to
improve this system for educators, as described in [#9114](https://github.com/publiclab/plots2/issues/9114)
6. Refine the display of co-authored posts on profile
pages.
7. Include high-relevance usernames you've used recently,
or who are recently active on the site, in autocompletion results while
typing into.
8. Refine design and details of newly relaunched dashboard
with community input (building on last term's project at [#8513](https://github.com/publiclab/plots2/issues/8513)
9. Ensure comment /replies/ appear on the new spam2
dashboard! [#8854
(comment)](https://github.com/publiclab/plots2/issues/8854#issuecomment-804342189)

## Project
Goals and their implementation: 

### \*
Separate author
names with commas instead of "with"

## 

As  you can see in the below screenshot that the
two authors name are separatedby
comma , but instead they must be comma which can be done by changing the JS
file which takes care of this functionality.

![image description](/i/43434.png "publiclab_proposal_1.PNG")  

\* Drafts listing on profile/tag
pages 

At
the profile page only we can add saved drafts of the user so that he/she can
keep the track of his/her drafts created or indirectly the performance status
by adding some more features like last at which time/day he/she was active on
platform etc . This can be done by saving the drafts of the user in a file and
then getting then and display. 

We
can create a separate section on profile page of user having these drafts each
in a 

.

\*
Add tooltips explaining latitude longitude tags on pages linked with
a place or a map.

If a user holds on a
particular place on map more than 0.5sec then a tooltip will appear showing
geographic location of that place. These can use API's etc to recognize.![image description](/i/43435.png "publiclab_proposal_3.PNG")

  
\*
Filter out known spam from replies to comments

We need to create a new method in comment.rb file to check the status of the comment; this is more described in issue #8854\.  

\*
Complete email notification opt-outs for
moderators, to improve this system for educators

The
steps given to "subscribe to all tags" at [https://publiclab.org/wiki/moderation#Moderation+systems](https://publiclab.org/wiki/moderation#Moderation+systems) is out-dated
and needs to be updated with the latest steps to help educators.

## \*
Invites 

## 

By this we can allow
educators to create a link by which they can invite a new person which help us to
grow our educator's community. This new person will be able to directly make
drafts by Signing in.

Also I think for security
purpose we should set a working limit of this invitation link let say 5 days or
a week etc.

## \*
Display
of coauthored posts 

## 

Add refined display of coauthored posts on the profile page,
first seeking community reps input to refine design choices.

## \*
Improvements
in auto completion  

## 

Auto completion results will Include usernames used recently, or
who are recently active on the site with full wildcard matching. I will
implement new SQL queries and update existing APIs to achieve this change.

\*
Refine
the design and details of the newly relaunched dashboard with community input.

Here we are supposed
to redesign the dashboard and make it more users friendly and smooth
functioning. See I think a good design doesn't only mean that it looks good but
also it should have proper functioning. So to do this we need to change some
pre-existing files.

\*
Ensure
comment /replies/ appear on the new spam2 dashboard!

Comment
replies don't currently appear in admin spam moderation dashboard as you can
see in below screenshot:

![image description](/i/43436.png "publiclab_proposal_2.PNG")  

  
Timeline/Milestones 

**Community Bonding ****(**May 17, 2021 - June 7, 2021)

I
will interact more with the community, share my ideas and knowledge, and
provide feedback and support to fellow contributors. I will take any received
criticism constructively.

**Coding**

**Week 1 (June 7, 2021 --
June 14, 2021)**

### \*     Separate author names with commas instead of "with".

## 

\*
Look for more bugs and finding more
features in website.

****

**Week 2 (June 14, 2021
-- June 21, 2021)**

\*
Drafts listing on profile/tag pages 

**Week 3 (June 21, 2021
-- June 28, 2021)**

\*
Add tooltips explaining latitude longitude tags on pages linked
with a place or a map.

**Week 4 (June 28, 2021
-- July 5, 2021)**

\*
Filter out known spam from replies to comments

**Week 5 (July 5, 2021 --
July 12, 2021)**

\*
Complete email notification opt-outs for
moderators, to improve this system for educators

**Week 6 (July 5, 2021 --
July 12, 2021)**

\* Invites

**Week 7 (July 12, 2021
-- July 19, 2021)**

## \*Display of coauthored posts 

## 

**Week 8 (July 19, 2021
-- July 26, 2021)**

## \*Improvements in autocompletion 

## 

**Week 9 (July 26, 2021
-- August 2, 2021)**

\* Refine the design and details of the newly relaunched dashboard
with community input.

**Week 10 (August 2,
2021 -- August 9, 2021)**

\* Ensure comment /replies/ appear on the new
spam2 dashboard!

Needs 

I
have some experience in open source but along with this I also need some guidance
and support from mentors, as they have shown till now as well.

Open
Source Contributions

I have merged pull
request in publiclab/plot2 repository:

[https://github.com/publiclab/plots2/pull/9434](https://github.com/publiclab/plots2/pull/9434)

Along with publiclab I
have made following merged pull request:

1\. [https://github.com/Vishal-raj-1/Awesome-JavaScript-Projects/pull/608](https://github.com/Vishal-raj-1/Awesome-JavaScript-Projects/pull/608)

2\. https://github.com/girlscript/Girscript-Community-Website/pull/89

  
Motivation

I
believe I am the best person to execute this project as I have quite an
experience in open source project. I have participated as open source
contributor in Girl Script of Code this year; there I have made merged pull
request and currently working on level 3 projects on developing Girl Script
Community Website. Also I am campus ambassador at kratigence, IIIT Bhopal. I
have also made several projects using CSS and JS uploaded on LinkedIn.

Public
lab organization is doing very great work as it is contributing in
environmental development in today's polluted world. This attracts me lot
towards this organization as I am also very concerned about our environment and
also part of Yuva-sewa community of my local area (Yamunanagar, Haryana,
India).

Commitment

******How
many hours will you work per week on your GSOC project?**

I will be easily able to contribute
around 40-45 hours a week.

I am sure I will be able to meet the requirements and
dedication this project needs. I will communicate effectively with my mentor
and receive any criticism open heartedly. I would love to be a part of the
project and contribute even if I am not selected for the program. 

Also, I would love to have some feedback on my
proposal. This can be of great help to me. 

Thank you so much.

Regards,

Tanish