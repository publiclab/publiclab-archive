---
title: "Expanded Q & A System for Publiclab.org"

tagnames: 'software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827, first-time-poster'
author: ananyo2012
path: /notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org.md
nid: 12890
uid: 468506
cids: 
---

# Expanded Q & A System for Publiclab.org

by [ananyo2012](/profile/ananyo2012) | March 25, 2016 19:06

March 25, 2016 19:06 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [coding](/tag/coding), [hidden:response](/tag/hidden:response), [gsoc-2016](/tag/gsoc-2016), [gsoc-2016-proposals](/tag/gsoc-2016-proposals), [response:12827](/tag/response:12827), [first-time-poster](/tag/first-time-poster)

----

**Name:** Ananya Maiti

**Affiliation (school/degree)** National Institute of Technology, Durgapur

B. Tech, Electronics and Communication Engineering

**Location (where you are):** Durgapur, India (GMT +5:30)

**Email:** ananyoevo@gmail.com

**Phone:** +918900253322

**Project(s) you're working on or want to**:Publiclab.org

**Project title**: [Expanded Q & A system for Publiclab.org](https://publiclab.org/wiki/gsoc-ideas#Expanded+Q&A+system+for+PublicLab.org)
 

## Project description

#### Abstract/summary (<20 words)

Developing proper Q & A system for Publiclab.org with improved User Experience.

#### Describe the need your project fulfills

For a community driven website like Publiclab.org that deals with a large no. of questions there should be a proper way so that Users can ask questions as well as get answer to them, at the same time reducing redundancy and searching quickly any thoughts they have in mind. Also Users should get to know who all are more involved in the community for getting more reliable answers.

#### How will your project meet this need

The Project fulfills all these issues by creating a Question/Answer type forum. The  overview of the Work would be:

* Create Question and Answer system for posting questions and answers.
* Create Commenting system by using the Drupal_comment model or creating a new one.
* Create upvote and downvote system for Questions and Answers and tagging system.
* Create subscription system so that Users can subscribe to various newsletter or feeds of Publiclab.org.
* Provide Authorization to Question and Answer model.
* Create badges or User reputation system.

#### Timeline/milestones

**Community Bonding Period( Before 23rd May)**

* Get more familiar with the codebase of [plots2](https://github.com/publiclab/plots2)
* Read documentation on various gems we will be going to use and the existing ones.
* Discuss ideas with Mentors and interact with them.
* Working on fixing the bugs so that i gain more experience and contribute more towards the Project.

**Phase 1 -  Implementation of Question & Answer System (23rd May - 9th June)
**

* Creating the Question model and controllers or we can use the existing DrupalNode Model
* Creating Answers model and controllers
* Establishing relations between User, Question and Answer model and writing methods for fetching the corresponding Answers to the Questions.
* Creating the views required to render the Questions and Answers and Posting them
* Write functional and unit tests for them
* Creating Pagination system using [will_paginate](https://github.com/mislav/will_paginate)

**Phase 2 - Creating Commenting System (10th June - 19th June)**

* Creating comments model or use Drupal_comments model to achieve the same.
* Associating them to Questions and Answers and methods to link them.
* Creating views for comments and corresponding Ajax calls to render them.
* Writing corresponding tests for them.
* Working on design related issues.

**Mid-term Evaluation Period(20th June - 28th June)
**

I will use this time to fix any bugs and checking that all tests pass and submitting evaluations.

**Phase 3 - Create email notification system for Q & A system (29th June – 11th July)
**

* Create system for marking answers as accepted.
* Creating friendly URLs with [friendly_id gem](https://github.com/norman/friendly_id) which changes with the node title.
* Create email notification system for questions and answers.
* Write tests for relevant changes.

Once the notification system is complete I will put the links for the Q & A pages in various areas of the website. This includes Ask question link in question tags page , Ask question link in dashboard , Question links in dashboard , Question page link in navbar.

**Phase 4 - Modified views and Rich Editor adaptation(12th July – 1st August)
**

* Create distinct Sidebar for question show page and recently answered view in question index page as mentioned in Issue [#554(comment)](https://github.com/publiclab/plots2/issues/554#issuecomment-223768908).
* Adapting Publiclab [Rich editor](https://github.com/publiclab/PublicLab.Editor) for use in the Q & A system. 

* Writing tests for relevant changes.
* Working on the UI of the Question & Answer pages.

**Phase 5 - Sorting system for questions based on tags (2nd August – 15th August)**

* Develop a Sorting functionality of questions based on tags.
* Create a better Streak function and create corresponding views. Need feedback from the community on this.

**Final Submission Period(16th August - 24th August) 
**

I will use this time for writing final documentation according to GSoC guidelines and checking that all tests pass or any Bug fixes in the code and submitting final evaluations.

Apart from that I also intend to write tests for JavaScript based functionalities using jasmine and work to develop a good testing suite for plots2 codebase.

#### What broader goal is your project working towards?

Q & A websites have become the major sources of information these days. The Project  shares similar goals and objectives. By making a good Q & A system for the website we can encourage people on using the website and searching relevant information and raising their questions, thus spreading our message for various environmental issues . So we can listen to a greater mass and take initiatives for environmental issues which is one of the major  aim of Publiclab.

#### What resources will you need: people, documentation, literature, sample data, hardware if applicable

Well the open source community is a big place and we can almost get any information by asking the contributors and finding the right documentation. I believe my Mentors guidance will perhaps be the greatest resource for me. I also intend on studying more on Rails Testing and read any relevant documentation on it to write better tests.

### Setup

_Have you forked the relevant codebases? Installed them in a dev environment such as Cloud9.io? Need help doing so? Please provide a link to each of the above._
Yes I have forked the github repo and deployed it on Cloud9.io. I have the Project succesfully running on my local machine

* [Forked Repository](https://github.com/ananyo2012/plots2)
* [Cloud9 deployment](https://c9.io/ananyo2012/plots2)

### Experience

_Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at https://publiclab.org/wiki/contributing-to-public-lab-software and are you comfortable submitting pull requests?_

 I am an enthusiastic Web developer and want to explore and learn more on Web development and Open Source projects. I am quite new to open source and just getting a hang of it. But I have the eagerness to learn and complete any Projects assigned to me with full dedication. I love to code and share. Being a student of Electronics and Communication I also have knowledge of coding in Matlab and Embedded development.

**Skills and expertise:**

**Languages **           	C, C++, Embedded C, Ruby

**Web Technologies**  HTML5, CSS3, JavaScript (jQuery and Ajax), PHP, Ruby on Rails, MySQL, PostgreSQL

**Graphic Design **   	Basic Photoshop and CorelDRAW

**Version Control System ** 	Git

Github Profile : https://github.com/ananyo2012

Quick Links to Projects:

* [Cat-Forum](https://github.com/ananyo2012/cat-forum) – This is a rails app of a forum developed by our college Club I am in. I was a contributor in the app. You can see my contribution [here](https://github.com/ananyo2012/cat-forum/graphs/contributors).
* [MNTC](https://github.com/ananyo2012/mntc2015) – This is the 2015 website of MNTC, a college club I am in. It is a fully front end website made with JavaScript and CSS.
* [E-commerce](https://github.com/ananyo2012/E-Commerce) – This a PHP based app of an E-commerce website I made as a Project.

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

I work as a Web Developer and Designer of  [MNTC](http://mntc.in/), a college club which organises a Knowledge Fest. I have developed its website(you can see its repository mentioned above) based on its activities. We are developing our own [CAT-Forum](http://catforum.mntc.in/) and we have its repository in github. We are developing it as an open source Project and we worked throughout the last summer. So I am quite versed with working online and collaborating with a team. 

I am also a Senior Fest Coordinator of the Club and I am involved with organising various events of the club along with my team members. There were events that were designed by me and the technical aspects were handled by me like designing fields in presentations that were used in the events.

Apart from that I also participated in different collaborative Projects based on Proposing Research ideas. You can see them in this [link](https://goo.gl/bsrE8b). I also did a Training on Embedded Systems where we developed a smart Vehicle locking system in a team. Here is the [code](https://github.com/ananyo2012/VehicleLock) and related [documents](https://goo.gl/kAao1w). 

### Expertise

_Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?_

Well I am quite new to open source but it is also true that GSoC is meant for encouraging newcomers to become open source developers and I can really give my word on that you won’t be disappointed taking me at the end. I can really work hard and devotedly. I have started learning Ruby on Rails from last summer and covered a lot of topics to get a clear understanding. I have done multiple courses on Ruby on Rails and Web development since them. Here are a list of them:  [Ruby on Rails 4 Essential Training](http://www.lynda.com/Ruby-Rails-tutorials/Ruby-Rails-4-Essential-Training/139989-2.html),[ RSpec Testing Framework with Ruby](http://www.lynda.com/Ruby-tutorials/RSpec-Testing-Framework-Ruby/183884-2.html), [Ruby Essential Training](http://www.lynda.com/Ruby-tutorials/essential-training/47905-2.html),  Up and Running with Bootstrap 3, [JavaScript Essential Training](http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html?srchtrk=index:1%0Alinktypeid:2%0Aq:javascript%0Apage:1%0As:relevance%0Asa:true%0Aproducttypeid:2),[ jQuery Essential Training](http://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training/183382-2.html) from [lynda.com](http://www.lynda.com/). I have done a [Git and Github Tutorial series](https://www.youtube.com/watch?v=mYjZtU1-u9Y&list=PL1F56EA413018EEE1) from youtube. After that I learnt Git from the  [Pro Git](http://git-scm.com/book/en/v2) book.

Now getting down to my work I am already working on a similar Q & A website, [CAT-Forum](http://catforum.mntc.in/) for my college club. So I am quite familiar with the concepts. Here is the latest [deployment](http://catforum-ananyo.rhcloud.com/) of it.

Talking about my contribution in plots2 here are my pull requests that I am working on now PR [#452](https://github.com/publiclab/plots2/pull/452) and [#456](https://github.com/publiclab/plots2/pull/456). I am also motivated to contribute to plots2 regularly and give my best for completing the Project.

Apart from that I am also good at designing. Though the Project doesn’t involve any design issues but I can pretty quickly design any mockups required for the Project. Here is the [link](https://goo.gl/Ht7enl) to some of my designs.

### Interest

_Do you have prior interest in or work towards open science or environmental justice goals?_

Yes I am quite concerned for environmental related issues and fulfilling environmental justice goals. We have our own environment club of our college named **Prakriti**(meaning Nature in Hindi). It organises various environmental drives and Nature friendly events throughout the year and I am an active participant of its events. Few days ago it organise Earth hour on Earth day by switching of all lights in our campus for 2 hours. It also organises Plantation movements in and around our college and extempores on environmental issues to spread awareness.

### Audience

_Whom will your work serve? Lay users, other programmers, non-technical people or nerds? While exploring advanced techniques is great, we especially appreciate proposals which make technologies and techniques more legible and user-friendly to non-technical users._

The Q & A system would benefit both technical and non - technical people. For the non - technical people it would greatly help them to search through relevant content and raising their questions effectively and sharing their proposed solutions. For technical people and open source contributors it would greatly attract them to contribute more towards improving its functionalities and views of like minded people for improving the website thus popularising the Project.

### Context

_What motivates you to do the proposed work? Do you also have coursework or degree related reasons for pursuing it? This wouldn't necessarily be a bad thing - if you are for example looking to explore work related to a thesis topic._

I have always wanted to become a good Web developer as well as open source developer. Working on this Project would greatly help me towards fulfilling this goal as well as learn great many things. Moreover I have developed a great interest on Ruby on Rails since my work on CAT-Forum. So it’s the best Project to work on. Also I have seen [plots2](https://github.com/publiclab/plots2) is very encouraging for new developers. And Working on a Q & A website is fun as it gives motivation to serve thousands of people.

### Ongoing involvement

_Explain how you intend to continue being an active member of your project and/or Public Laboratory AFTER the summer is over._

Even after the summer gets over I want to continue contributing to [plots2](https://github.com/publiclab/plots2) and become an active member of Publiclab community. I also have other features in mind that can be be implemented. One such idea is introducing Suggest a user for answering a question which [Quora](https://www.quora.com/) uses.

Another is to improve the Authorization system of [plots2](https://github.com/publiclab/plots2). Perhaps a complete overhaul of the RBAC of [plots2](https://github.com/publiclab/plots2) may be required. [cancancan](https://github.com/CanCanCommunity/cancancan) seems to be a good gem for implementing Role based authorizations.

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time paid summer internship or summer job?_

Yes I am fully aware that it is a full time summer internship and Google is paying me for it. I am fully committed to work on it throughout the summer.