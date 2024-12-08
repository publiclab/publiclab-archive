---
title: Rich Profile tags and improving the performance of Publiclab.org
tagnames: software, event, gsoc, coding, event:rsvp, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827, first-time-poster
author: Lalithr95
path: /notes/Lalithr95/03-23-2016/rich-profile-tags-and-improving-the-performance-of-publiclab-org.md
nid: 12879
uid: 468698

---

# Rich Profile tags and improving the performance of Publiclab.org

by [Lalithr95](../profile/Lalithr95) March 23, 2016 15:44

March 23, 2016 15:44 | Tags: [software](../tag/software), [event](../tag/event), [gsoc](../tag/gsoc), [coding](../tag/coding), [event:rsvp](../tag/event:rsvp), [hidden:response](../tag/hidden:response), [gsoc-2016](../tag/gsoc-2016), [gsoc-2016-proposals](../tag/gsoc-2016-proposals), [response:12827](../tag/response:12827), [first-time-poster](../tag/first-time-poster)

**Name:** Lalith Rallabhandi

**Github:** https://github.com/lalithr95

**Linkedin:** https://linkedin.com/in/lalithr95

**Affiliation (school/degree):** BE in Computer Science at Chaitanya Bharathi Institute of Technology - Osmania University

**Location (where you are):** Hyderabad, India

**Email:** lalithr95@gmail.com

**Phone:** +918008840099

**Project:** Publiclab.org - plots2 repository

**Project title:** Rich Profile tags and improving the performance of Publiclab.org

## Project description
###Abstract/summary (<20 words):

  Implementation of various tags in profile page which improves community interaction in PublicLab.org organization and also improving the response time of profile page.
  
###Describe the need your project fulfills:

Profile tags are a creative tool that lets PublicLab.org users add tags to their profile which highlights the things that describe them. Main focus of this project is to add various profile tags such as location data, role, tools, skills to user profiles which improves user base community side interaction. Improving the current Barnstar implementation by providing a new layout in profile page. In the current system, comments are displayed with image icon and description which will be refactored based on the role user possess such as admin, moderator, organizer. On the other hand as huge amount of data is rendered in the front end of the application, response time is another important factor project will focus on.

###How will your project meet this need:

 I will be using agile software development method which includes iterative and incremental approach. Initial development starts by creating a table and model for profile_tags and writing their unit tests. This would setup the database for interacting with any controller. Next step would make architectural decision for layout in the profile page and adding necessary forms and routes. Major focus will be on implementing geolocation tags with autocomplete input. Performance of the location tags can be improved by adding a view level cache fragment for the input form. User permissions is another major privacy concern when tags are implemented. Tags should only be modified by user who created it or by admin itself. Edge cases will be taken care of during implementation. Adding tests for the same will help future developers to test any new functionality without affecting previous code. In new comment system, user comments are marked with their role which will help end users to trust the official comment from organizer or admin. 

###Timeline/milestones:
I will use Agile Development Methodology for this project. Given below is a rough timeline for my project, subject to change by mentor intervention:

 - **Community Bonding period (22 April - 23 May):** I will go through the source code of Mapknitter location tag implementation, role, skills and barnstars more thoroughly and polish my approach for this project. Since I am new to the community, I will also solve some existing bugs for it, preferably related to my project, so that I become more comfortable with the process of contributing to PublicLab.org and learn from the feedback of others.
 - **Week 1 (23 May - 29 May):** Create a generic model ProfileTags, add required columns, associations and run migrations on the model. Write Unit test for ProfileTag Model.
 - **Week 2 (30 May - 5 June):** Implement the necessary methods for functionality of autocomplete in geolocation tags and receiving the date posted through view forms for Users controller. Also modify necessary routes and helper functions. Backend functionality of location based tags is covered during this week. Complete controller tests for Users controller and other necessary controllers.
 - **Week 3 (6 June - 12 June):** Write views which include maps, autocomplete form for location tags in profile page. Complete Integration tests for the last week and current week improvements. 
 - **Week 4 (13 June - 19 June):** Once location based tagging is implemented perfectly, we move forward with other kinds of tags role, tools and skills. Write backend methods for Users controller and helpers for creating and updating role, tools, skills etc. 
 - **Week 5 (20 June - 26 June):** Write the controller tests for the functionality and other unit tests required. Add necessary validation and permission on user level and admin level for various tags.

_Mid term evaluation are done and 27 June is the last deadline._

 - **Week 6 (27 June - 3 July):** Refactor the code written before mid term evaluation. Caching using view fragments, using memcached to cache frequently used read only data in controllers with given expiry time. 
 - **Week 7 (4 July - 10 July):** New comment system is added in this week. This includes changing the views by introducing role based comments. A label is displayed beside profile of user which shows the role of commented user.
 - **Week 8 (11 July - 17 July):** Adding new controller and integration tests for new comment system. Fixing any bugs which break the tests and fail the functionality. 
 - **Week 9 (18 July - 31 July):** New layout for barnstars are added in this week and necessary tests are written. Caching the images client side so that response time can improved.
 - **Week 11 (1 Aug - 15 Aug):** Adding documentation for the above functionalities, styling for the forms and any new improvements. 
 - **Week 12 (15 Aug - 29 Aug):** Use capybara to introduce acceptance tests for various test cases and user cases in different tagging, comments. Any further documentation changes can be done improving codebase for future contributors. Final term evaluations are submitted to Google.

**Note:**  If the proposal goes faster than expected, I will look into autocompletion for tagging in plots2.

###What broader goal is your project working towards?

_What resources will you need: people, documentation, literature, sample data, hardware if applicable:_

Major changes (Implementing various tags) to profile page are done with this project which will have significant impact on PublicLab.org users through interaction, efficient response time and also improving community user base. New comment system with their role name will help user to know trusted comment from admin, organizer. Sample data is needed which will be done through faker gem, seed.rb file. I will need guidance and feedback from mentor, members of PublicLab.org in improving the idea implementation. Some documentation is already provided with Idea such as [MapKnitter sample code](https://github.com/publiclab/mapknitter/blob/master/app/views/map/_new.html.erb#L29-L84), [User map view](https://github.com/publiclab/plots2/blob/master/app/views/notes/tools_places.html.erb#L4-L15) and [Durpal_node tag functionalities](https://github.com/publiclab/plots2/blob/master/app/models/drupal_node.rb#L235-L283). This is good to enough to start with the project.

### Setup

_Have you forked the relevant codebases? Installed them in a dev environment such as Cloud9.io? Need help doing so? Please provide a link to each of the above._

I forked plots2 repository and every day pull the new changes and update my local master branch. I could easily setup development environment locally in my machine. All the tests are passing. Additionally I use phpMyAdmin for effectively working on Mysql tables.

[Forked publiclab](https://github.com/lalithr95/plots2)

### Experience

_Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at https://publiclab.org/wiki/contributing-to-public-lab-software and are you comfortable submitting pull requests?_

Have a look at my [Github profile](https://github.com/lalithr95) which gives how I work daily on rails and ruby projects. I code daily which has become a habit. Apart from ruby on rails as backend I'm familiar with python, php and front end frameworks include backbone.js and angular.I worked on various backend frameworks and libraries which include Ruby on Rails, Django, Tornado, CodeIgniter, hubot( I use hubot for deploying my personal projects). Apart from development I'm good with best security coding practices, vulnerability assessment, pentesting and application security.

I started contributing to rails projects which include rails, shopify gem and ruby-benchmark which gives a long running benchmarks for the features in various versions of rails and ruby.

My PR's for contributions:
https://github.com/ruby-bench/ruby-bench-web/pull/148
https://github.com/ruby-bench/ruby-bench-web/pull/144
https://github.com/ruby-bench/ruby-bench-web/pull/142
https://github.com/ruby-bench/ruby-bench-web/pull/140
https://github.com/Shopify/ssllabs.rb/pull/14
https://github.com/Shopify/ssllabs.rb/pull/13

I have read the Contributor Guidelines and I'm comfortable with git and submitting pull requests.

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

I worked as Software Developer Intern at HackerRank for Summer 2015 and Winter 2015. HackerRank technology stack includes Ruby on Rails, Mysql, Redis, Memcached, Backbone.js in the front end. My work at HackerRank includes:

 - Worked on creating recommendation system for HackerRank users to improve the community network.
 - Integrated HackerRank pages with Hootsuite by developing an app which posts the updates to all the social media networks – Social Aggregator
 - Fixed on various internal issues and security bugs dealing from frontend, backend optimizations to Database migration changes.

Apart from HackerRank I worked at Synack Inc. as a Red Team Researcher and team contains top 100 world security researchers. 

 - My major focus is on security and implementing best security coding
   practices.  
 - Worked to find web application bugs and other vulnerability and helping their clients with a proper fix for the reported issues.

### Expertise

_Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?_

I would love to work for Rails development and any ruby gems. I treat every step as problem and implement a solution iteratively. Open source is something amazing and gives a lot of happiness when solving and especially implementing tests for the code written. Through open source contributions I got to know a lot of things code style, code reviews and the entire process of tests which is something I can't learn without contributing to projects. 

Yes I'm suitable for this proposed project as I started working on the day GSOC organization results were announced. I contributed a little to plots2  repository and with in a span of less than a month I currently stand in [top 5 contributors](https://github.com/publiclab/plots2/graphs/contributors) to plots2 repository.  My contribution to plots2 initially started with fixing of mysql gem version which is a small PR but fixed a major impact bug on development setup.

My PR's and contributions towards plots2:
https://github.com/publiclab/plots2/pull/415
https://github.com/publiclab/plots2/pull/394
https://github.com/publiclab/plots2/pull/390
https://github.com/publiclab/plots2/pull/387
https://github.com/publiclab/plots2/pull/385
https://github.com/publiclab/plots2/pull/384

### Interest

_Do you have prior interest in or work towards open science or environmental justice goals?_

I had a course "Environmental studies" in my course work which every university has to bring awareness among students. This turned into an interest and I worked as a volunteer for an NGO on environmental work life balance.

### Audience

_Whom will your work serve? Lay users, other programmers, non-technical people or nerds? While exploring advanced techniques is great, we especially appreciate proposals which make technologies and techniques more legible and user-friendly to non-technical users._

This project work serves for technical, non-technical users. Adding rich profile pages will improve user interaction for PublicLab users. Tags are interesting functionality which every user is familiar with, either through adding skills in social media(linkedin), filling any job application. User can enrich their profile through various tags listed in this project.

### Context

_What motivates you to do the proposed work? Do you also have coursework or degree related reasons for pursuing it? This wouldn't necessarily be a bad thing - if you are for example looking to explore work related to a thesis topic._

I used Ruby on Rails framework to develop an application as one of my academic projects, and I was immediately attracted to it. PublicLab.org allows users to add new Research notes which is another good functionality which I love. Also I like the products made by PublicLab such as Foldable Mini-Spectrometer. Participating in GSoC would be a wonderful opportunity for me to work on an Open Source Project. Working on this project full time would help me hone my developer skills and acquire new skills. The experience I'll gain from this would be immense, which I shall use in my future contributions to Open Source and Projects. 

### Ongoing involvement

_Explain how you intend to continue being an active member of your project and/or Public Laboratory AFTER the summer is over._

Currently I'm fixing issues in plots2 repository and adding tests. You can view [all contributions](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:lalithr95%20is:closed) made by me. I will be an active member of the PublicLab organization after completion of my project.  I will contribute to codebase as before through issue resolutions, adding tests, fixing any future bugs and help future contributors in their contributions. 

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time paid summer internship or summer job?_

Yes I understand this as serious commitment and importance of idea for PublicLab.org. I expect to devote full time for the improvement of project and complete the milestone tasks efficiently. I will be active to communicate with mentors and receive necessary feedback to improve further contributions.
