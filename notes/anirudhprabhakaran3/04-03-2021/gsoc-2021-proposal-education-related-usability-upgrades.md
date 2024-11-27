---
nid: 26133
title: GSoC 2021 Proposal - Education-related Usability Upgrades
path: public/static/notes/anirudhprabhakaran3/04-03-2021/gsoc-2021-proposal-education-related-usability-upgrades.md
uid: 751144
tagnames: gsoc,blog-submission,soc,application,first-time-poster,gsoc-2021-proposals
---

# GSoC 2021 Proposal - Education-related Usability Upgrades

#### GSoC 2021

# **Education-related Usability Upgrades**

## About Me

I am Anirudh Prabhakaran, a first-year Electronics and
Communication Engineering (ECE) student at the National Institute of
Technology, Karnataka, India. I live in New Delhi, India. Apart from
programming, my interests include music, physics, and literature, which I
frequently post on my social media.

I primarily work with C/C++, Python, Django and Ruby on
Rails. I am a member of the ACM and IEEE student branches at my college and the
student-built University Management System, _IRIS_.

## Project Description

The project primarily aims to improve the existing content
management system. This will be achieved by fixing/improving a collection of
systems, features, and fixes focused on educational users and incorporating
feedback from educators' PublicLab community.

Some of the fixes include:

- Adding listing of drafts to profile pages. A
minimal way to display these will also be made, keeping in mind the style
guide.
- Adding tooltips explaining latitude/longitude
tags on pages.
- Refining display of co-authored posts on profile
pages.
- Refining design and details of the newly
relaunched dashboard.
- Creating a system for pre-approved signup
invitations for students to create accounts that bypass the moderation queue.
We also have to make sure that the links expire after a week.
- Completing email notification opt-outs for
moderators to improve this system for educators. The instructions for humans
also have to be updated.
- Including usernames the user has used recently
or recently active on the site in auto-completion results with complete
wildcard matching.

## Abstract/Summary

Due to the growing community of educators using our
[PublicLab.org](http://PublicLab.org) content management system, we are hoping to tackle a collection
of systems, features, and fixes focused on educational users and incorporating
feedback from our community of educators

## Problem

This project primarily aims to improve the website services
against the backdrop of an ever-increasing community. I hope that after working
on this, community members will be much more welcome to the platform and find
the user interface much more appealing and easier to use. This will help drive
up registrations and engagement by the community.

## Timeline/Milestones

**Community Bonding**

**May 17, 2021 -- May 21, 2021**

- Talk to the community and mentors to get more
insight into PublicLab and the project
- Work on a few issues on GitHub and provide some
guidance to other contributors
- Read resources/documentation on SQL and API
tuning
- Get community input on the newly relaunched
dashboard

**May 21, 2021 -- June 7, 2021**

- Get feedback on ideas on how to implement the project.
- Work on a few issues on GitHub and provide some
guidance to other contributors
- Read resources/documentation on complete
wildcard matching
- Get community input to refine design choices for
co-authored posts on profile pages.

**Coding**

**June 7, 2021 -- June 21, 2021**

- Refine design and details of the newly
relaunched dashboard, incorporating community input.
- Add tooltips explaining latitude/longitude tags
on pages and link to the "Location Privacy" page.

[![Screenshot_from_2021-04-13_16-41-13.png](/i/43275)](/i/43275?s=o)

In this kind of UI, there is a lot of cluttering because of the popup and the tooltip. It'll also be interesting to know what the community feels about it. Personally, I feel that either the pop-up can be removed, or incorporate the tooltip text inside the pop-up itself. 

**June 21, 2021 -- July 5, 2021**

- Refine display of co-authored posts on profile
pages, incorporating community input
- Add a list of drafts to profile pages, with a
minimal way to display these (keeping in mind the style guide).

[![Screenshot_from_2021-04-13_20-02-18.png](/i/43278)](/i/43278?s=o)

[![Screenshot_from_2021-04-13_20-05-41.png](/i/43279)](/i/43279?s=o)

```html
<a href = "/notes/author/<%= @profile_user.name %>/drafts"><%= pluralize(@profile_user.drafts_count, 'draft', plural: 'drafts')%></a> </h5></li>
```
This is my proposal. I want to work on this concept.

**July 5, 2021 -- July 19, 2021**

- Create a system for pre-approved signup
invitations for students to create accounts that bypass the moderation queue.
- Make such links expire after one week.

**July 19, 2021 -- August 2, 2021**

- Complete the email notification opt-outs for
moderators to improve the system for educators.

**August 2, 2021 -- August 16, 2021**

- Include usernames the user has used recently or recently
active, in autocompletion results will full wildcard matching.

## Needs

I have much of the technical knowledge required to complete
this task. However, I would need some guidance to complete the last task
mentioned in the Project Description regarding SQL, API tuning and wildcard
matching. The inputs and advice given by mentors will be invaluable during the
entirety of the community bonding and coding period, and I will incorporate all
their suggestions into my project submission.

## First-time Contribution

I have been active on the Gitter chat and have interacted
with mentors and other contributors, often helping them with installation and
other issues that I know. I have linked the PR and comments that I have made on
GitHub.

- **PR:** [https://github.com/publiclab/plots2/pull/9402](https://github.com/publiclab/plots2/pull/9402)

This PR has been merged!

- **Comments:**

  - [https://github.com/publiclab/plots2/issues/9366#issuecomment-809059495](https://github.com/publiclab/plots2/issues/9366#issuecomment-809059495)

  - [https://github.com/publiclab/plots2/issues/9382#issuecomment-809274836](https://github.com/publiclab/plots2/issues/9382#issuecomment-809274836)

  - [https://github.com/publiclab/plots2/issues/9382#issuecomment-810511589](https://github.com/publiclab/plots2/issues/9382#issuecomment-810511589 "https://github.com/publiclab/plots2/issues/9382#issuecomment-810511589")

- **Open Issues:** 
[https://github.com/publiclab/plots2/issues/9389](https://github.com/publiclab/plots2/issues/9389)

## Experience

Since middle school, I have been interested in programming
and have learned many languages, mainly by self-study. I have worked with open-source
software for the past four years. I participated in Google Code-In for three
years, after which I participated in DigitalOcean's Hacktoberfest. This clearly
shows that I have experience in the open-source domain.

I had also worked on a few projects of my own for my school
last year. I made a digital elections application and developed the school
blog. I also tried making a new social network, called AirSite. All links to
these projects can be seen on my GitHub profile. I also created a document that
outlines a phased timeline to implement and set up a Computer Science Club.

## Teamwork

Currently, I am part of Team IRIS at my college, which is
responsible for the maintenance and development of the University Management
System. As of now, I am just a fresher and have handled a few minor issues.

Although not formally working as a team, participating in
Google Code-In taught me a lot about collaboration in the software world.

I worked alongside my schools Student's Executive for
developing the blog and the elections application. The team comprises many
different members, including the head of our school's IT services, Executive
members, teachers, administrators, and volunteers. This was a diverse group of
people, all of whom were not very well versed with technology. Working with
such a diverse group has opened my eyes to the various issues faced in working
with stakeholders that are not from a technological background.

## Passion

Today, we live in a world facing the immediate threat of climate change and global warming. My generation will be in positions of power in a few years, and the fight against climate change
has to be stepped up. For this, information is vital. I believe that every person on the planet should have easy access to accurate, high-quality information, and PublicLab helps achieve that goal. This is why I am motivated to make this product better and more beneficial for the community.

## Audience

This project focuses on usability upgrades to the PublicLab
website. This will make the user interface more straightforward and easier to
use. Everyone that uses the PublicLab website will benefit from these,
especially educators. The audience for this project is vast, and that makes it
an important task.

## Commitment

Due to the COVID-19 outbreak, my college is conducting
classes and examinations online. These will continue during the coding period.
However, the course load of college is less, because of which I will be able to
commit to the project seriously. I will put in the required hours and the work to
make the project a success.

## Contact

You can contact me at my primary email ID ([anirudhprabhakaran.201ec106@nitk.edu.in](mailto:anirudhprabhakaran.201ec106@nitk.edu.in))
or my alternate email ([anirudhprabhakaran3@gmail.com](mailto:anirudhprabhakaran3@gmail.com)).

For instant messaging and calls, I am available on SMS and
WhatsApp on the number +918826767787\. I am also responsive to DMs on Instagram
(@anirudhprabhakaran, @an.ion.drifting) and Twitter (@anirudh23p)

