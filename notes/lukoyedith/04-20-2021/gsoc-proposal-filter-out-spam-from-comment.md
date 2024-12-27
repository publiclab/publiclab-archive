---
title: "GSoC!proposal: Filter out spam from comment. "

tagnames: 'software, soc, lat:-1.406108, zoom:4, gsoc-2021, gsoc-2021-proposals, outreachy-summer-2021, lon:37.440122, outreachy-proposals-2021'
author: lukoyedith
path: /notes/lukoyedith/04-20-2021/gsoc-proposal-filter-out-spam-from-comment.md
nid: 26283
uid: 751723
cids: 28591,28595,28601,28602,28603,28606,28659,28668
---

![](https://publiclab.org/public/system/images/photos/000/043/338/original/Boots-ground-02.png)

# GSoC!proposal: Filter out spam from comment. 

by [lukoyedith](/profile/lukoyedith) | April 20, 2021 15:14

April 20, 2021 15:14 | Tags: [software](/tag/software), [soc](/tag/soc), [lat:-1.406108](/tag/lat:-1.406108), [zoom:4](/tag/zoom:4), [gsoc-2021](/tag/gsoc-2021), [gsoc-2021-proposals](/tag/gsoc-2021-proposals), [outreachy-summer-2021](/tag/outreachy-summer-2021), [lon:37.440122](/tag/lon:37.440122), [outreachy-proposals-2021](/tag/outreachy-proposals-2021)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals](https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals "https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals") You can delete this line once you've started filling it out.)

---------

## About me

_My name is Emogene Lukoye. I have been coding for 1.4 years. These are some of the technologies I have used; Rails, Ruby, JavaScript, Linux, GitHub, Heroku, Docker, SQLite and PostgreSQL._

**Affiliation** (Pwani University)

**Location:** (Africa)

## Project description

_Here, you don't have to have a complete proposal when you begin. Just tell us some of your ideas and we'll help you refine it into a full proposal gradually!_

### Abstract/summary (<20 words):

### Problem

_What problem(s) does your project solve?_

_My project aims to filter out spam comments from replies on the PublicLab website. For this, I will use a gem called rakismet, build for rails using the Akismet API which is a WordPress plugin for filtering spam comments._

_Read the full project here: __https://publiclab.org/wiki/gsoc-proposal-2021-filter-out-spam-from-comment___

### Timeline/milestones

_Break your project up into small projects -- one per week!_

_**May 24 - 30**_

_-Sign Up for the Akismet account._

_-Ensure the API Key is available for use_

_-Add the rakismet gem to the Gemfile._

_Create FTO's and review PR._

**_June 1 - 7_**

_-Configure Akismet according to the Docs._

\_-Add columns to the comments table \_

_-Fix any migration errors that might arise._

_Create FTO's and review PR._

_**June 8 - 14**_

_-Implement Akismetor plugging_

_-Write tests_

_-Create FTO's and review PR._

_**June 15- 21**_

_-Ensure Akismetor pugin is working_

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**June 22 - 30**_

_-Refactor the comments model code._

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**July 1 - 7**_

_-Refactor the comments controller code._

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**July 8 - 14**_

_-Work on user dashboard to display the correct message_

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**July 15 - 22**_

_-Work on the admin dashboard to display the correct message_

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**July 23 - 31**_

_-Add approved comments to the admin dashboard_

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**Aug 1 - 7**_

_-Implement ham for spams that are false positives._

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**Aug 8 - 14**_

_-Add a link to the show ham spams on the admin dashboard._

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**Aug 15 - 21**_

_-Implement code admin to see active users on the dashboard._

_-Ensure written tests are passing_

_-Create FTO's and review PR._

_**Aug 22 - 30**_

_-Check to see that all implemented changes are working smoothly across different devices._

_-Do a final sweep to ensure all tests are passing._

_so final sweep to ensure all feedback has been documented._

_-Create FTO's and review PR_

_-Write a blog to document my journey and for learning purposes._

See this page for guidance on breaking your plan up into small, self-contained parts: [https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration)

### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

_To implement this functionality, I will need mentors and other collaborators for guidance and feedback, Akismet Documentation and Tutorials._

### First-time contribution

\_Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already made it? We're eager to see that you've had a good experience making a small initial contribution to our site. Please check out our welcoming page: \_

[https://code.publiclab.org/#r=all](https://code.publiclab.org/#r=all)

And paste in links to your initial contributions here so we can see!

You can use links like these to show recent activity:

- Comments, to show overall community involvement (like helping others): [https://github.com/publiclab/plots2/issues/9529](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues)
- [https://github.com/publiclab/plots2/pull/9452](https://github.com/publiclab/plots2/pull/9452)
- Open issues: [https://github.com/publiclab/plots2/issues/9529](https://github.com/publiclab/plots2/issues/created_by/jywarren)
- [https://github.com/publiclab/plots2/issues/9450](https://github.com/publiclab/plots2/issues/9450)
- Closed PRs: [https://github.com/publiclab/plots2/pull/9452](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed)

---------

### Experience

\_I learnt writing software through Microverse school which is a Bootcamp. I have worked on hackathon projects. Here is my GitHub repo: \_**[https://github.com/Elukoye/](https://github.com/Elukoye/__)**

---------

### Teamwork

_Describe teams you've worked with before, whether open or closed source and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

\_I have worked with teams from around the world via pair programming and mob programming. I worked on the front-end of some applications, helping with implementing design and UI. I have worked on the backend as well using rails mostly. What has kept me motivated to work on these projects is the process of figuring out the issue, collaborating to solve it and finally seeing the changes go up, it's fulfilling. \_

---------

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

_What excites me about Public land is that it's focused on sharing knowledge. I love teaching and sharing what I learn through talks or articles. Education is a topic that is dear to my heart and helping PublicLab share knowledge about environmental justice is a double win. We need to take care of our environment and earth, sharing knowledge about how to is the initial step._

### Audience

_Whom do you want your work to help? We especially appreciate proposals that make technologies and techniques more welcoming and friendly to those who've often been excluded._

_I would like for this project to help PublicLab members communicate with ease and share knowledge without having to worry about being spammed in the comments._

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

\_To give an overview, I would start work at 8 am, use 2 hrs to either research /read Docs/ watch tutorials, have a 30 min break then from 10:30 am to 12:30 pm, look at the project code, implement changes, work with a mentor where stuck, have my 1 hr lunch break, from 1:30 -3 pm continue with code implementation and completing tasks of the day. Take a 30 min break. 3:30 - 5:00 pm, review PR, help other collaborators. 5:00 pm - 5:30 pm, meet with my mentor for a discussion about progress report, feedback etc. Sign off at 5:30 pm. \_