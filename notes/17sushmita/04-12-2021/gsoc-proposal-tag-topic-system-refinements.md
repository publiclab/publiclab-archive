---
title: "GSoC Proposal : Tag/Topic System Refinements"

tagnames: 'gsoc, location:blurred, lat:28, lon:77, place:india, first-time-poster, zoom:6, gsoc-2021-proposals'
author: 17sushmita
path: /notes/17sushmita/04-12-2021/gsoc-proposal-tag-topic-system-refinements.md
nid: 26208
uid: 741338
cids: 28541,28542,28544,28545,28546,28551,28552,28555,28556
---

![](https://publiclab.org/public/system/images/photos/000/043/276/original/gsoc.png)

# GSoC Proposal : Tag/Topic System Refinements

by [17sushmita](/profile/17sushmita) | April 12, 2021 22:32

April 12, 2021 22:32 | Tags: [gsoc](/tag/gsoc), [location:blurred](/tag/location:blurred), [lat:28](/tag/lat:28), [lon:77](/tag/lon:77), [place:india](/tag/place:india), [first-time-poster](/tag/first-time-poster), [zoom:6](/tag/zoom:6), [gsoc-2021-proposals](/tag/gsoc-2021-proposals)

----

Note: Feedback is welcomed. I have collected some resources that I think will be helpful during this project [https://docs.google.com/document/d/1TEj_u99Zp1ktO8eNtORsJhLRtU3dWeltflxpAWMueWM/edit?usp=sharing][1]

**Name**: Sushmita  
**Gitter handle**: [17sushmita][2]   
**Email**: [17sushmita@gmail.com][3]   
**Github**: [17sushmita][4]  
**Location**: New Delhi, India  
**Time Zone**: UTC+05:30  
**Typical working hours**: 10 AM to 12:00 PM  and 5 PM to 1 AM.(UTC+05:30) (4:30 AM to 6:30 AM and 11:30 AM to 7:30 PM UTC)  
On college days, occupied between 9 AM to 2 PM.(UTC+05:30) (3:30 AM to 8:30 AM UTC)


## Project Description

This project aims at improving the Tag/Topic system at Publiclab.org by fixing some known bugs and implementing various features like Topic Tree, Clarifying Power tag and General Tag View, Tag locking, some UI improvements in Tag/Topics display in sidebar deleting tags added by banned users etc.  

## Abstract

Public Lab has been providing the right platform for environment researchers to collaborate online and provide content that helps environmental enthusiasts to explore and learn new stuff. The growing community at Public Lab has seen a major reorganization of content and activity around topic areas recently. Tagging content is a very important feature in the organization of the large variety of content in any Content Management System. At Public lab, there is a vast variety of contents in the form of ‘research notes’ and ‘wiki’. The existing Tag/Topic system at Public Lab is quite basic in what it delivers and there exist some bugs and some confusions which need to be fixed and refined for a better user experience by the Public Lab research community. This project aims to fix the existing bugs and improve the Tag/Topic System by also taking continuous feedback from the Public Lab community.   

**Possible Mentors**: [@cess][5], [@warren][6]
## Problem

After doing some research in the current Tag/Topic system and following up on the issues mentioned in the proposed idea, I concluded some of the problems with the existing Tag/Topic system as follows -

Let’s see each of them by following an example- 

 - As mentioned in the issue, the tags are showing the incorrect count
   of the subscribers on the subscription stats page.     
[![stats.png](/i/43250)](/i/43250?s=o)
 - Now, let's see the count of subscribers of balloon-mapping on a
   research note sidebar    
[![n.png](/i/43251)](/i/43251?s=o)
 - The difference can be clearly seen between the subscribers count on both pages.    
 - Now, let’s see the balloon-mapping Tag’s own page   
[![p.png](/i/43252)](/i/43252?s=o)       
 - Here, we see two columns in the People section- People who've 
   posted and People who are following. From the name itself and my
   observations, I believe that People who’ve posted lists down the
   users who have posted any research notes or wiki with the tag
   ‘balloon-mapping’. But, let’s see an example-    
[![j.png](/i/43253)](/i/43253?s=o)       
 - Here, this user is listed in the People who’ve posted in the
   balloon-mapping tag. But, when clicked on the Notes on the right of
   its username, we see he has not posted any research note on
   balloon-mapping   
[![unnamed.png](/i/43254)](/i/43254?s=o)
 - And, further, he has not posted any research note yet. So why is this
   user listed in the balloon-mapping tag’s contributor section which
   says People who’ve posted. On further investigating, I observed that
   users who have even commented to a post tagged with balloon-mapping,
   were listed in the mentioned list. In my opinion, either the heading
   which says People who’ve posted must be changed to something - People
   who’ve contributed or the underlying Query should be fixed to only
   display people who’ve posted some note on balloon-mapping.
 - Balloon Mapping is one of the popular tags at Public Lab and so, the
   number of posts and subscribers are large, so, let’s take an example
   of tag ‘pipeline-monitoring’-    
[![s.png](/i/43255)](/i/43255?s=o)
- Here see the people count is 9, Now see all the users listed in both the sections People who’ve posted and People who are following-
[![pasted_image_0.png](/i/43256)](/i/43256?s=o)  
- From this example and observing other tags, it was concluded that the people count is only the number of users listed under People who’ve posted and the People who’ve followed is not included. My idea is to add both the list counts considering the users should be distinct so that users listed under both sections do not count twice. 

- In the existing Tag/Topic system, there is no way to restrict first-time-posters from tagging work except their own.

- Tags added by banned users are not being deleted automatically.

- There is an ambiguity around ‘general-tags’ and ‘Power tags’. Both of them occur at the same place and so, it is very common for a new user to get confused between the two.
- Tag locked comment

## Project Goals and Implementation

**Fixing Bugs**  

 - **Incorrect Tag counts**
 - This task will need a fair amount of hit and trials because on small
   data the query works fine. To replicate the bug, access to the
   database of unstable version of the web application will be required.
 - I plan to make use of the existing queries which provide the number
   of subscribers of the tag at their particular page(which gives
   correct count) to extract the subscribers count of each tag.
 - **Commenters showing up in ‘People who have posted’**
 - For this part, If the heading needs to be changed, I’ll create an FTO
   for this issue.
 - If the underlying query needs to be fixed, I’ll alter these lines to
   include only those users who’ve posted something.

[![pasted_image_0_(1).png](/i/43257)](/i/43257?s=o)

 - I’ll identify more bugs if anyTag/Topic System, and fix them. If the
   issue could break up to smaller parts, I’ll try to create as many
   FTO’s as possible to welcome the new contributors.

**Tag locking**   

 - There could be two approaches for this -

 - Introducing a new boolean field called ‘locked’ to the node model and
   set the default to false.

 - Create a view for locking the node and make it accessible to
   moderator/admin only similar to spam and delete which will modify the
   locked field to true.

 - When a moderator/admin is logged in display an option to lock the
   node along with delete/spam options.

[![unnamed_(1).png](/i/43258)](/i/43258?s=o)

 - A node with a locked field as true will display a lock icon to normal
   users instead of an `+` icon in the sidebar where new tags can be
   added and show a tooltip on hover that says “This note is locked. New
   tags cannot be added. ”

[![pasted_image_0_(2).png](/i/43259)](/i/43259?s=o)

 - Another approach would be to add a “power tag” or “type”(discussed
   later) called “locked” to the content and restrict it to
   admin/moderators. A content tagged with “locked” would be restricted
   from any addition/deletion of tag by any other user than
   admin/moderator or the user itself.

**Topic Tree**    

 - The Topics mentioned in the wiki page
   [https://publiclab.org/wiki/topics][7] can be useful to categorize tags.

 - Introduce a Topic-Tree which has a similar relationship to Topics in
   the Public Lab at [https://publiclab.org/topic-tree][8]. The broader
   Topics as mentioned in  [https://publiclab.org/wiki/topics][9] will be
   treated as the parent tags and it can have any number of child tags.
   UI of the Tag-Tree may look like this-

[![pasted_image_0_(3).png](/i/43260)](/i/43260?s=o)

 - And each tag will be a link to that particular tag’s own page where
   all the research notes on that tag can be visited.

**Delete tags added by Banned Users**  

 - When a user is banned, one SQL query should be executed to delete the
   tags added by that user which will delete any references if any of
   the content has the tag, the tag will be removed from the node.

**Tag Moderation for first-time-users**   

 - When a new user tries to add a tag to a node, a flash will be
   displayed which says “You do not have the right privilege to
   add/remove tags on other user’s content. Please post a note or other
   content for moderation”.

 - Once the user passes through moderation by either posting content or
   comment on a post. He/She would be eligible to tag other contents.

**Moderation Emails to Admins/Moderator when a user adds a tag** 

 - This is an important feature to add to keep an eye on tags added by
   users. When a user adds a tag, A notification should be sent to the
   moderators to prevent spam or misleading tags to be added on
   unrelated content.

**Tweak co-authorship author link display on note pages by separating author names with commas, not “with”**  

 - For this part, I’ll be creating FTO issues, for first-timer
   contributors to work on.

	
**Ambiguity between Power Tags and General Tags**  

 - There is confusion regarding Power Tags and general tags because they
   occur at the same place in the UI.
 - There can be multiple approaches to solve this problem.  
 - The name “Power Tag” could be changed to something else. There is no
   use to call it a tag because it is used to distinguish the content
   type. So, “Power Tag” can be called simply “Type” of the content.
 - This will also solve the problem of having the power to a single tag
   associated with the power having multiple other tags.
 - UI for the power tag could be modified to be displayed below the
   Title and in grey colour.
[![pasted_image_0_(4).png](/i/43261)](/i/43261?s=o)  

**Refine display of interrelationship of topics.**  

 - Currently, the interrelationship of tags is not shown anywhere in the
   sidebar.  

 - We can use the interrelationship of the tags to be shown as
   parent-child tags. The parent tags will be shown as cards and the
   child tags could be shown beside them as mini-cards or labels as
   follows -
[![pasted_image_0_(5).png](/i/43262)](/i/43262?s=o)

**Refine Cytoscape visualization of tags**

 - Take inputs from user communities on how to enhance the Cytoscape
   visualization of Tags.
 - Currently, on zoom out the cytoscape visualization seems to diminish
   infinitely and does not have a limit to stop. At a level, it goes out
   of sight. Make fixes to this issue.

## Timeline/Milestones
**Pre-GSoC Period - Till 17th May**

 - Understanding the idea and getting doubts resolved as soon as
   possible.
 - Going through already available code, understanding its working.
 - Solving already opened issues related to the project.
 - Writing some tests to head start.

**Community Bonding (17 May, 2021 - 6 June, 2021)**

 - Get familiar with the ruby concepts that will be most required during
   the internship.
 - Get familiar with the community and attend Public Lab open calls to
   get an idea what needs to be done.
 - Discuss Project with mentors and brainstorm some ideas which could
   have multiple approaches.

**Week 1 (7 June, 2021 - 13 June, 2021 )**

 - Start working on Tag locking feature and implementing all the
   moderation tasks required.
 - Make corresponding UI changes.
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.

**Week 2 (14 June, 2021 - 20 June, 2021)**

 - Work on implementing the Tag Tree feature.
 - Make corresponding UI changes.
 - Write Tests for the changes made. 
 - Take feedback from mentors and improve.

**Week 3 (21 June, 2021 - 27 June, 2021)**

 - Work on differentiating Power Tags and general Tags.
 - Make corresponding UI changes.
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.
 - Attend PubicLab open call for feedback from the user community.

**Week 4 (28 June, 2021 - 4 July, 2021)**

 - Work on Deleting Tags added by banned users.
 - Make refinements to the Cytoscape Visualization.
 - Make corresponding UI changes.
 - Create FTO’s whenever possible
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.

**Week 5 (5 July, 2021 - 11 July, 2021)**

 - Work on Tag Moderation for first-time-users
 - Make corresponding UI changes.
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.

**Week 6 (12 July, 2021 - 18 July, 2021)**

 - Mid-Evaluation
 - Moderation Emails to Admins/Moderator when a user adds a tag
 - Tweak co-authorship author link display on note pages by separating
   author names with commas, not “with”
 - Make corresponding UI changes.
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.

**Week 7 (19 July, 2021 - 25 July, 2021)**

 - Refine display of interrelationship of topics.
 - Make corresponding UI changes.
 - Write Tests for the changes made.
 - Take feedback from mentors and improve.

**Week 8 (26 July, 2021 - 1 August, 2021)**

 - By this time, I’d be much more familiar with the codebase, So, I will
   get my hands on the bugs in the Tag Subscription page.
 - Also, look for other existing bugs in the Tag/Topic System or if bugs
   introduced by the changes made during internship.

**Week 9 (2 August 2021 - 8 August, 2021)**

 - Continue with fixing bugs.
 - Create FTO’s for newcomers.
 - Write/modify documentations for the change made during internship.

**Week 10 (9 August, 2021 - 15 August, 2021)**

 - Continue with documentation and reports for evaluation.
 - Finish up the tasks
 - Take reviews from mentors and the user community.

**Submission Period (16 August, 2021 - 23 August, 2021)**

 - Submitting work for evaluation
 - Writing project summaries and blog about the feature built.

**Post GSoC (After 23 August, 2021)**

 - Getting feedback on above features and catching up with further
   needs.
 - Help and mentor new contributors at Public Lab and review PRs and
   report issues.
 - Continue with more contributions and maintaining the `plots2` repository.

## About Me

I’m an undergraduate, pursuing a degree in Computer Science from G. B. Pant Govt. Engineering College, New Delhi, India. I’m in the 6th semester of my eight-semester program. I will graduate in May 2022. As an open-source enthusiast, I’ve attended various technical and open events and workshops on Git, Github, Open Source, How to contribute to Fossasia, Facebook Jest etc, I was first introduced to Open-Source last year and Hacktoberfest helped a lot to gear up my interest and skills. I’m also an active member in all the technical communities of my college. I’m the executive team member of the CodeChef Chapter of my college.
My technical skills include web development with python backend frameworks Django and Flask and a good understanding of REST APIs and implementing ORM. I also have some experience in Deep Learning around the computer Vision area. I have some experience with Ruby and currently learning Ruby on Rails from online tutorials and documentations.

## Experience

- Currently I’m interning as a Django Developer where most of my work 
  includes handling REST API’s, Querying Databases and handing other 
  Backend tasks.
- Previously, I’ve worked as a Flask Developer where I built and 
  published two libraries in Python which required computer vision 
  applications. 
- I’ve done a few projects in python(Flask and Django) which shows my 
  ability and understanding of Web Technologies and handling 
  Databases. Some of them can be found on my Github profile i.e. 
  [17sushmita](https://github.com/17sushmita)

## Motivation for Open Source

I feel open source development and the communities help people a lot to experience the real-time software development. Open source is more about collaboration than just code and that is the most amazing part of it. Anyone can contribute to it in their own way and collaborate with people, learn new things and be a part of an actual software development which is being deployed and used by many users. When I do certain enhancements or changes and see it getting deployed online make me feel proud that people are using the feature which I had developed. 



## Contribution made for the Public Lab

I joined Public Lab as a contributor in March 2021 and have been an active on gitter and made some contributions to the project.
These are the Pull Requests I made on `plots2` project.   
https://github.com/pulls?q=is%3Apr+author%3A17sushmita+org%3Apubliclab+

These are the issues I created for some new UI enhancements and 1 FTO.   
https://github.com/search?q=is%3Aissue+author%3A17sushmita+org%3Apubliclab




## Past Experience with Open Source Software

As a user, I’ve been using Open source software since the time I started using the internet. I use Wikipedia to search contents online, VLC Player for watching videos, audios etc. I’ve been a linux user since last year and that helped me a lot in development.
As a contributor, I started my journey to open source last year wherein Hacktoberfest motivated me to make contributions to some of the big organizations.
I’ve previously contributed to AnitaB-org by fixing some bugs and adding tests. These are the contributions I’ve made to anitab-org:   
https://github.com/pulls?q=is%3Apr+author%3A17sushmita+org%3Aanitab-org+

## How do I plan to implement the project?

**Writing Tests**

 - I’ll write/modify tests for every change made.
 - Functional tests for every new feature added/modified.
 - System Test whenever required

**Taking Feedbacks**

 - I always love to get feedback for the work I do to improve and
   identify what needs to be done and what should be avoided.

 - I’ll take feedback from the Public lab community members who are also
   the end-users by joining open calls which are held weekly and see if
   the feature helps them or make their work difficult. I’d take regular
   feedback and work on improving it.

**First Timer Issues**

 - This is the most amazing thing about the Public Lab which I found.
   The Public Lab community is always welcoming towards the new
   contributors and always helps them in setting up the environment or
   make their first PR.

 - FTO’s are a great start for those who are new to open source or the
   public lab codebase.

 - I’ll try to create as many FTO’s I can to welcome the new
   contributors. I’ll break up the tasks into smaller parts and create
   FTO’s.

# Needs

I would like to receive continuous reviews from mentors to be able to improve my work and make this project successful. Also, if I get stuck on an issue, I would like to get some guidance on how to approach the problem.

## Teamwork

I have always loved Open Source for the collaboration and teamwork it offers to experience. 
I’m an active member of various technical communities at my college. I’m the executive team member of the CodeChef Chapter of my college and have organized various events along with my team for educating Data Structure Concepts and Competitive Programming to the juniors.
I’ve also participated in various hackathons in a team and shown great leadership skills and collaboration with my teammates.

## Passion

The most amazing thing I like about Public Lab is that it is welcoming for beginners and newcomers. The mentors are really appreciative and encouraging. When I started contributing to Public Lab and got reviews on my PR, the appreciation I got was enough to make my day. On 16th March 2021, 3 of my PRs got merged and I was overwhelmed by the happiness I got after getting them merged. I was eager to see the changes I made published on the live site and on 17th the changes were published, and I was happy to see my changes being publicly available and also showed them to my friends. I’ve attended the presentation by the outreachy interns [@ruthwaiganjo][10] and [@noi5e][11]. It was a great experience interacting with the community and I am passionate about contributing to Public Lab more.   

## Audience

This project is aimed to refine the Tag/Topic system at Public Lab, which is an important feature for organizing the large variety of content at Public Lab. It will help the public lab community members to experience a better organization of contents and will make their experience a bit more smoother and easier to use.

## Commitment

I fully understand that this is a serious commitment and I can devote 40-45 hours weekly for the completion of this project. Only in the last week, College will overlap for last 2 weeks(August). In that semester, I am free to choose the number of courses since all my core courses will be over by this semester. No examination session will occur during that month. Also, I've added less workload in the last weeks in the Timeline/Milestones to finish up everything in time.

  [1]: https://docs.google.com/document/d/1TEj_u99Zp1ktO8eNtORsJhLRtU3dWeltflxpAWMueWM/edit?usp=sharing
  [2]: https://gitter.im/17sushmita
  [3]: http://mailto:17sushmita@gmail.com
  [4]: https://github.com/17sushmita
  [5]: https://publiclab.org/profile/cess
  [6]: https://publiclab.org/profile/warren
  [7]: https://publiclab.org/wiki/topics
  [8]: https://publiclab.org/wiki/topics
  [9]: https://publiclab.org/wiki/topics
  [10]: https://publiclab.org/profile/ruthnwaiganjo
  [11]: https://publiclab.org/profile/noi5e