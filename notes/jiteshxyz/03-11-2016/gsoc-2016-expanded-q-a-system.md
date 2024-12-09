---
title: 'GSOC 2016 : Expanded Q&A System'
tagnames: software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827, first-time-poster
author: jiteshxyz
path: /notes/jiteshxyz/03-11-2016/gsoc-2016-expanded-q-a-system.md
nid: 12835
uid: 468400

---

# GSOC 2016 : Expanded Q&A System

by [jiteshxyz](../profile/jiteshxyz) March 11, 2016 23:36

March 11, 2016 23:36 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [coding](../tag/coding), [hidden:response](../tag/hidden:response), [gsoc-2016](../tag/gsoc-2016), [gsoc-2016-proposals](../tag/gsoc-2016-proposals), [response:12827](../tag/response:12827), [first-time-poster](../tag/first-time-poster)

----

**Name:** Jitesh Kumar Jha

**Affiliation (school/degree)** Manipal Institute of Technology, Manipal - 4th semester, Computer Science & Engineering

**Location (where you are):** Manipal, India

**Email:** jiteshjha96@gmail.com

**Phone:** Will email

**Project(s) you're working on or want to** Publiclab.org

**Project title** Expanded Q&A system for PublicLab.org

## Project description

* Abstract/summary (<20 words): A community-driven question and answer site for Publicab.org users which allow questions to be re-answered over time, while preserving links into the wikis and notes of PublicLab.org.
* Describe the need your project fulfills: Currently, the same kind of 'Getting Started' questions are being asked on the mail forums, and the answers posted by community members get obsolete overtime.  Hence, this site will enable users to ask questions regarding any topic and get answers from the community members of Publiclab.org.
* How will your project meet this need: [**Need to add more content here**] The question and answer website  will serve as a platform for users to ask and answer questions.
* Timeline/milestones:

##### April 22, 2016 - May 22, 2016 [Community Bonding]
* Gain greater insight into [plots2](https://github.com/publiclab/plots2.git) codebase.
* Bond with the community members and become accustomed with the Publiclab.org's culture.
* Learn the tools and technologies necessary for the project.
* Start a blog about the project to help my mentor track my progress.
* Create mockups to finalize the UI of the site.

##### May 23, 2016 - June 06, 2016
* Create question model and schema, referring existing user model[I'll primarily target the existing User model instead of DrupalUser, and if time permits, could integrate both the schemas].
* Create answers model and schema and refer existing user and question models.
* Nest answers within questions.
* Add views for question and answer.
* Write unit/integration tests for question and answer model/controllers.

##### June 07, 2016 - June 20, 2016
* Create comment model and schema, referring existing user, question and answer models.
* Add comment view and more interaction with JS.
* Create subscribe option to questions[form] and subscription content.
* Write unit/integration tests for comment model/controller.
* Write documentation of code so far, tidy up the site's codebase, clean up JS and CSS files.
* Any bugs encountered to this point or project goals not implemented yet to be tackled by this time.

##### June 21, 2016 - June 28, 2016 [Midterm Evaluations]
* Mentors and students submit their evaluations of one another. These evaluations are a required step of the program.

##### June 29, 2016 - July 27, 2016 [Most challenging weeks]
* Add and use [acts_as_votable](https://github.com/ryanto/acts_as_votable) gem and create vote schema.
* Allow answer model to be voted.
* Add and use [acts-as-taggable-on](https://github.com/mbleigh/acts-as-taggable-on) gem and create tagging schema. [Important!]
* Allow question model to be associated with multiple tags.
* Add and use [sunspot_rails](https://github.com/sunspot/sunspot) gem. Add filter-search capability for tags.
* Improve the filter capability [if possible].
* Write more unit/integration tests for the existing and new models/controllers.
* Add Newest, Interesting, Unanswered and Leaderboard sub navs to the index page.

##### July 28, 2016 - August 15, 2016
* Complete any remaining tasks/fix unresolved bugs.
* Display reputation and level according to the number of contributions on the homepage, after every answer by any user as a subtext.
* This week will ideally be devoted to improving the site's UI.
* Position the visual items of the site according to mockup and fix the CSS bugs generated as a result.
* Create a sidebar to the index page, add important links to wikis, research-notes, etc.
* Deploy the site for users to play with and fix the bug(s) reported.

##### August 16, 2016 - August 24, 2016
* Add documentation for all the new stuff written since Midterm evaluations. Tidy up the ugly parts.
* Clean up the CSS and JS files, remove useless code from controllers.
* Add relevant comments to the ruby code.
* Submit sample code to the mentors.

##### August 24, 2016 - August 30, 2016
* Mentors review student code samples and determine if the students have successfully completed their Google Summer of Code 2016 project.

**************************

* What broader goal is your project working towards? Making Publiclab.org more genial and accessible to new and existing users.

* What resources will you need: people, documentation, literature, sample data, hardware if applicable: [**Can't think of any, at the moment. Need help here**]

### Setup

_Have you forked the relevant codebases? Installed them in a dev environment such as Cloud9.io? Need help doing so? Please provide a link to each of the above._

* [Forked repository](https://github.com/jiteshjha/plots2.git)
* [Development environment](https://c9.io/jiteshjha/plots2)

### Experience

_Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at https://publiclab.org/wiki/contributing-to-public-lab-software and are you comfortable submitting pull requests?_

I have a decent amount of experience with Ruby, Javascript and Python. Also, I'm well versed with C/Java as they were in my college curriculum (Mostly worked on data structure and algorthims, as evident [here](https://github.com/jiteshjha/geeksforgeeks/tree/master/DataStructures), [here](https://github.com/jiteshjha/geeksforgeeks/tree/master/Algorithms) and [here](https://github.com/jiteshjha/LeetCode.git)) [**Is this line relevant?**]. I started contributing to the university Computer Science club [website](https://iecse.xyz/) in Winter 2014, which sparked my interest in web development. Consequently, I have developed many projects mainly on Javascript(AngularJS) like [Realtime Markdown Editor](https://github.com/jiteshjha/Markdown-Editor), [Tabbed Browser](https://github.com/jiteshjha/nodewebkit-browser) and [StatusApp](https://github.com/jiteshjha/StatusApp). I have worked with databases like MySQL, Oracle SQL and MongoDB. 

I started learning development with Ruby On Rails a year ago ago with Michael Hartl amazing [book](https://www.railstutorial.org/book). I interned at Firexit Software in Winter 2015, where I worked with the web-dev team to create a dashboard webapp with Ruby on Rails + [Highcharts](https://github.com/PerfectlyNormal/highcharts-rails) and the learning process was startling here. Again, to refresh my Ruby on Rails concepts, I have created a [RSS Reader](https://github.com/jiteshjha/RSS-Reader). I have also [contributed](https://github.com/publiclab/plots2/commits?author=jiteshjha) to [plots2](https://github.com/jiteshjha/plots2.git) repository. I am active in the Ruby On Rails Mumbai, India dev group where I have volunteered at many talks and events.
In Microsoft Code.Fun.Do hackathon 2016, my app [Who's up - A networking app for Windows Platform](https://github.com/jiteshjha/who-s-up) - was voted 'One of the top 5' ideas from my university and is currently on the stage of getting published on the Windows App Store.

I have read the [Contributor Guidelines](https://publiclab.org/wiki/contributing-to-public-lab-software) and I am comfortable with git and submitting pull requests.

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

During my internship at Firexit Software, I followed the coding style guide of the organization and coordinated with the team I was working with, to make different visual modules for the dashboard web app. I'm well versed with the git pull request, compare and merge flow. Additionally, I am working with a teammate on a IMDB-like movie database webapp on Flask/Python for my Database Systems Lab, where we divide our work goals and merge our progress every week. I believe working in a team benefits the quality of code in general, speeds up the development and having a mentor is a great plus.

### Expertise

_Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?_

I reckon that I am good at problem - solving and web development and well suited for this proposed project. I am well versed with [plots2](https://github.com/publiclab/plots2.git) codebase and have strong experience with Rails and Javascript. Along with that, I have setup the development environment [here](https://c9.io/jiteshjha/plots2). I'm also acquainted with C/Java/Python and have extensive web application development experience through projects and past internships. I have already started implementing the basic functions of the project [here](https://github.com/jiteshjha/Rails-question-answer-example.git).I believe in creating pretty and responsive UI and UX , which is important for a pleasant and comfortable user experience. Hence, I consider myself to be particularly suited to the proposed project.

### Interest

_Do you have prior interest in or work towards open science or environmental justice goals?_

I have prior interest in environmental justice and nature conservation goals. I have previously volunteered in a mass plantation drive in my high school, covering small tracts of barren land with saplings. I have also worked on a tracking programme for a local NGO in Navi Mumbai, India to track the disappearance of roadside Royal Poinciana trees.

### Audience

_Whom will your work serve? Lay users, other programmers, non-technical people or nerds? While exploring advanced techniques is great, we especially appreciate proposals which make technologies and techniques more legible and user-friendly to non-technical users._

The Q&A site would serve the lay users, primarily those who are willing to get started with Publiclab.org. Likewise, experienced users could be benefited by the Q&A format. This project will bridge the gap between the non-technical users and the technical users, who are willing to help/contribute.

### Context

_What motivates you to do the proposed work? Do you also have coursework or degree related reasons for pursuing it? This wouldn't necessarily be a bad thing - if you are for example looking to explore work related to a thesis topic._

The idea of contributing to the open source and helping the non - technical people through coding and problem - solving skills is exciting; Development on Rails is easier and fun, and I would love to share my resources with those in need.

### Ongoing involvement

_Explain how you intend to continue being an active member of your project and/or Public Laboratory AFTER the summer is over._

I intend to regularly contribute to the [plots2](https://github.com/publiclab/plots2.git) codebase and be involved in the mailing lists and developer IRC. I will continue contributing to [plots2](https://github.com/publiclab/plots2.git) codebase even after the GSOC 2016 programme. Many more features, like personalized user stats is to be implemented and I intend to stay around and be a active member for Publiclab.org after the summer is over.

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time paid summer internship or summer job?_

I understand that this is a serious commitment. I don't have any other major commitments and I will devote ~50 hours a week during the entire tenure.