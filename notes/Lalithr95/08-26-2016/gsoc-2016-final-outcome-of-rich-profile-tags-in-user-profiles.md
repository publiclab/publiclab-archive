---
title: "GSOC 2016: Final outcome of Rich Profile tags in user profiles"\ntagnames: 'gsoc, developers, gsoc-2016, gsoc2016, profiles, response:13397'
author: Lalithr95
path: /notes/Lalithr95/08-26-2016/gsoc-2016-final-outcome-of-rich-profile-tags-in-user-profiles.md
nid: 13396
uid: 468698

---

![](https://publiclab.org/public/system/images/photos/000/017/768/original/rich_profile.png)

# GSOC 2016: Final outcome of Rich Profile tags in user profiles

by [Lalithr95](../profile/Lalithr95) | August 26, 2016 12:00

August 26, 2016 12:00 | Tags: [gsoc](../tag/gsoc), [developers](../tag/developers), [gsoc-2016](../tag/gsoc-2016), [gsoc2016](../tag/gsoc2016), [profiles](../tag/profiles), [response:13397](../tag/response:13397)

----

## Project Details 
**Project Title:** Rich Profile tags in PublicLab user profiles

**Project Proposal:** https://publiclab.org/notes/Lalithr95/03-23-2016/rich-profile-tags-and-improving-the-performance-of-publiclab-org

**GSoC Project Page: ** https://summerofcode.withgoogle.com/dashboard/project/6672329039937536/details/

**Abstract/Summary:** Implementation of various tags in profile page which improves community interaction in PublicLab.org organization and also improving the response time of profile page.

**Version Control:** Github

**Organization Mailing List:** https://groups.google.com/forum/?hl=en#!forum/plots-dev

**Github Organization Page:** Publiclab

**Repository Contributed to:** plots2

**Languages/Framework Used:** Ruby on Rails, JavaScript, HTML5/CSS3, Leaflet

All commits made during the period can be found here: https://github.com/publiclab/plots2/commits?author=lalithr95

Open PR to be merged: https://github.com/publiclab/plots2/pull/650

## The Project 
Profile tags are a creative tool that lets PublicLab.org users add tags to their profile which highlights the things that describe them. Main focus of this project is to add various profile tags such as location data, role, tools, skills to user profiles which improves user base community side interaction. Improving the current Barnstar implementation by providing a new layout in profile page. In the current system, comments are displayed with image icon and description which will be refactored based on the role user possess such as admin, moderator, organizer. On the other hand as huge amount of data is rendered in the front end of the application, response time is another important factor project will focus on. I will be using agile software development method which includes iterative and incremental approach

## How to Use

One of the major outcomes of the projects is provide a user friendly interface to display profile tags along with locations tag. Profile tags are classified into various categories Role, Skills, Tools, Gears. The values in each tag should be unique and you can enter a tag with entering tag name, autocomplete for this kind of project is really userful.

**Location Tag:**
Location tags are the different from above tags. Location tag allow user to tag their location based on the gps, entering their location from search field with autocomplete enabled. I used leaflet open source framework widely for generating maps. One of the major concerns was to properly handle privacy of user location. We allow a checkbox to select privacy mode, where user actual location is hidden and only the area is displayed. Location tag is not only restricted to profiles but has been extended to content such as Notes, Question.

[![2.png](//i.publiclab.org/system/images/photos/000/017/769/large/2.png)](//i.publiclab.org/system/images/photos/000/017/769/original/2.png)

[![11.png](//i.publiclab.org/system/images/photos/000/017/772/large/11.png)](//i.publiclab.org/system/images/photos/000/017/772/original/11.png)

[![9.png](//i.publiclab.org/system/images/photos/000/017/773/large/9.png)](//i.publiclab.org/system/images/photos/000/017/773/original/9.png)

**User Follow:**
Focus of the project was to improve profile pages, user follow is one of the feature that could engage the community. Currently user can follow other user at the same time unfollow user. 

[![follow.png](//i.publiclab.org/system/images/photos/000/017/770/large/follow.png)](//i.publiclab.org/system/images/photos/000/017/770/original/follow.png)

[![followers.png](//i.publiclab.org/system/images/photos/000/017/771/large/followers.png)](//i.publiclab.org/system/images/photos/000/017/771/original/followers.png)

## Pending Tasks:
Clean up location tags in profile so that user can select square part of the location which has already been implemented in Content tags. Finally get the other PR merged.

## Learning
Working with PublicLab repositories brings a great change in the learning curve. I learnt new technologies, leaflet which is one of the centric part of the project. Rails has been my favourite framework and working especially working huge codebase such as PublicLab introduced me to new concepts and idea. I would like to continue my contributions to PublicLab for growth and improvement. 

I'm officially a PublicLab github organization member :)

## Conclusion 
I'm glad to be part of the project and massively growing community. I would like to thank Jeffrey Warren and Liz Barry for their continued support and guidance with my project, right from getting code reviews and new designs from Liz.

## Contact 
You can contact me through one of the following sources. 
**Email:** lalithr95@gmail.com
**Twitter:** @lalithr95