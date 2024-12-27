---
title: "[Outreachy Proposal] Public Lab New Dashboard Implementation Project."

tagnames: 'software, first-time-poster, outreachy-winter-2020, outreachy-2020-winter-proposals, response:24687'
author: inyangasi4
path: /notes/inyangasi4/10-30-2020/outreachy-proposal-public-lab-new-dashboard-implementation-project.md
nid: 24881
uid: 726717

cids: 

---

# [Outreachy Proposal] Public Lab New Dashboard Implementation Project.

by [inyangasi4](../../../profile/inyangasi4) | October 30, 2020 22:31

October 30, 2020 22:31 | Tags: [software](../tag/software), [first-time-poster](../tag/first-time-poster), [outreachy-winter-2020](../tag/outreachy-winter-2020), [outreachy-2020-winter-proposals](../tag/outreachy-2020-winter-proposals), [response:24687](../tag/response:24687)

----

[](null)
## About me

Name: Abigael Irene Nyangasi

Email: inyangasi4@gmail.com

Github:https://github.com/IjayAbby

Timezone: Africa/Nairobi (UTC+3 hours)

Location: Kisumu, Kenya.

Mentor 1 : Cess Wairimu

Menror 2 : Sneha Mishra

Mentor 3 :Jeffrey Warren


## Project description
# New Dashboard Implementation Project: Bootstrap 4 and Rails
* Our newly designed Dashboard has been refined for months, and we are now ready to code it up and implement it on the Public Lab site. We’ve done a lot of preparation by finalizing and refining common components in our Style Guide (https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab) which includes “card” components and more.This project involves implementation from a completed Bootstrap 4-based design; we would love someone with attention to designed details, and who can fill in gaps in designs, but the project does not need re-imagining at this stage.
* The Bootstrap 4 components, and other re-usable UI patterns from the Style Guide will be woven together into a new page alongside the existing Dashboard, plugging into a Ruby on Rails website at https://github.com/publiclab/plots2/. It will provide a new alternative to https://publiclab.org/dashboard (login required but free) to give site users an overview of recent activity on the site, but organized into “topics” -- essentially topical forum, or interest groups -- which the user is following. The page will (following the mockups linked below) re-use components from https://publiclab.org/tags (no login required) and will encourage users to “follow” more topics.
* If an applicant has a lot of React experience, we would consider a React implementation, but are cautious about a refactor and would like to see past React work before considering such a path.

### Abstract/summary (<20 words):
Code implemantation of the Public Lab New Dashboard Implementation using Bootstrap 4 and Ruby on Rails.


### Project Details.
The project aims at impementing the following:

 * Make a new page to display “all posts”
   * Use tag page as a model for this “all posts” page: https://publiclab.org/tag/water-quality
 
    ![tags_page](https://user-images.githubusercontent.com/43843720/97717382-caefc700-1ad5-11eb-9987-b0fa6cf865da.png)
 
   * Add a “comments” tab instead of a “people” tab, since the old dashboard listed comments
 
     ![comments_tab](https://user-images.githubusercontent.com/43843720/97720353-4010cb80-1ad9-11eb-9fb4-c4487e2ab4d4.png)
 
   * Comments entries may need to be displayed in a “card” format, like notes, but should show the fields: author, link to node, permalink, # of comments on            parent node, time ago.
 
    ![screenshot-publiclab org-2020 10 30-18_11_22](https://user-images.githubusercontent.com/43843720/97723193-95021100-1adc-11eb-9c63-9ab63c9625bd.png)
 
   * No “Sort by” function is needed, as normally appears on a tag page. Sorted only by recency.
 
     ![Screenshot from 2020-10-30 18-26-31](https://user-images.githubusercontent.com/43843720/97724168-a5ff5200-1add-11eb-909c-bc45adc09566.png)

  * Add a link to the “all posts” page from dashboard, probably next to Dashboard title, like: “Updates from community members on topics you follow | all posts”

    ![aww-board (1)](https://user-images.githubusercontent.com/43843720/97743699-1cf51480-1af7-11eb-9ba1-70b9b2b3b4f2.png)

 * Create a new Dashboard page at /dashboard2 so we can publish it for testing without breaking existing dashboard
 
 ![Screenshot from 2020-10-30 21-16-29](https://user-images.githubusercontent.com/43843720/97742501-6a708200-1af5-11eb-8ac3-4b259ce7e0a9.png)
 
 * Display a list of topics subscribed to 
 
 * Resolve odd line folding on individual posts in topic cards (see /tags for example)
 
 * Display list of “more topics to follow”, excluding those already subscribed to.
 
 * add a dynamic Feature (https://github.com/publiclab/plots2/blob/main/doc/DATA_MODEL.md#features) in sidebar, and under the list of topics, and at top of page (full width), to allow admins to configure content to display there without codebase changes, using the admin panel at /features
 
  Here's an example for a Feature with the key footer-notice:
  
  ![screenshot-github com-2020 10 30-21_37_20](https://user-images.githubusercontent.com/43843720/97744398-2fbc1900-1af8-11eb-82d2-7c017e43bb35.png)
  
  * Ensure page renders well in mobile view, collapsing “more tags to follow” feature as shown in #6072
  
  ![mobile_view](https://user-images.githubusercontent.com/43843720/97745528-0c926900-1afa-11eb-933c-167e1061a902.png)
  
  * Display Blog topic pinned at the top of the dashboard topics list, and exclude “blog” from the subscribed list below (to avoid double-display). Consider how       to allow people to subscribe to blog updates by email using the subscribe system, even though the blog will be an exception to normal topics display as           displayed on the dashboard - #6787
  
  ![featured](https://user-images.githubusercontent.com/43843720/97749068-78c39b80-1aff-11eb-9e36-3013c3adf915.png)
  
  * Connect topics search to autocomplete dropdown, similarly to the one at /tags
  
 * Make new topics to follow work synchronously first, with /subscribe/tag/water-quality URLs. Circle back at end of project to implement AJAX if time available
 
 * Connect “add location” button to work similarly to adding location in the tags input of profile pages; it will reload the page.
 
 ![Screenshot from 2020-10-30 22-49-37](https://user-images.githubusercontent.com/43843720/97751145-e45b3800-1b02-11eb-871e-c9fbacb2ebb4.png)
 
 * Connect “Nearby activity” button to display once a location is added, leading to a map view of recent posts at in format https://publiclab.org/map/#6/41/-71      (see example of such a button here: https://publiclab.org/n/24484 )
 
 ![Screenshot from 2020-10-30 22-57-44](https://user-images.githubusercontent.com/43843720/97751828-086b4900-1b04-11eb-8422-4c5e40d40321.png)
 
 * Add Trending topics, using code as shown in current dashboard design
 
 * Mid-way through project, assess and discuss w/ staff if new dashboard now fulfills basic needs and can replace old dashboard already; consider making new          dashboard appear at /dashboard now.
 
 * Consider using AJAX to add/remove new subscribed-to topics
 
 #### Needs more discussion: 
 *  Each “post” button on topic cards should lead to the /post/choose?tags=XX URL - what to do here?

### Timeline/milestone

| **Deliverable** | **Sprint** | **Key Dates** |
|:------|:---------| :------ |
| Blog Prompt: Introducing myself | 1 | December 1st 2020 |
| - Make a new page to display “all posts” at the URL /research<br> - Use tag page as a model for this “all posts” page |   | December 1st 2020 - December 7th 2020 |
| Introduction Chat | 2 |  December 8th 2020 |
| Add a “comments” tab instead of a “people” tab, since the old dashboard listed comments |  | December 8th 2020 - December 14th 2020 |
| Blog Prompt: "Everybody Struggles" | 3 | December 15th 2020 |
| - Comments entries may need to be displayed in a “card” format, like notes, but should show the fields: author, link to node, permalink, # of comments on parent node, time ago<br> - No “Sort by” function is needed, as normally appears on a tag page. Sorted only by recency. | | December 15th 2020 - December 21st 2020 |
| Chat: Sharing blockers | 4 | December 22nd 2020 |
| Add a link to the “all posts” page from dashboard, probably next to Dashboard title, like: “Updates from community members on topics you follow all posts” | | December 22nd 2020 - December 28th 2020 |
| Create a new Dashboard page at /dashboard2 so we can publish it for testing without breaking existing dashboard |  5 | December 23rd 2020 - December 29th 2020 | 
| Blog prompt: "Think about your audience" | 6 | December 29th 2020 |
|  - Display a list of topics subscribed to <br> - Resolve odd line folding on individual posts in topic cards (see /tags for example) | | December 29th 2020 - January 4th 2021 |
| Chat: Share why I am passionate about your project or community | 6 | January 5th 2021 |
|  - Display list of “more topics to follow”, excluding those already subscribed to <br> -add a dynamic Feature in sidebar, and under the list of topics, and at top of page (full width), to allow admins to configure content to display there without codebase changes, using the admin panel at /features | | January 5th 2021 - January 11th 2021 |
| Blog Prompt: Mid-point project progress blog post | 7 | January 12th 2021 |
| - Ensure page renders well in mobile view, collapsing “more tags to follow” feature<br> - Display Blog topic pinned at the top of the dashboard topics list, and exclude “blog” from the subscribed list below. Consider how to allow people to subscribe to blog updates by email using the subscribe system, even though the blog will be an exception to normal topics display as displayed on the dashboard<br> - Don’t display X to dismiss card | | January 12 2021 - January 18th 2021 |
| Chat Share one "easy" project goal that took longer than expected | 8 | January 19th 2021 |
| - Connect topics search to autocomplete dropdown, similarly to the one at /tags <br> - Make new topics to follow work synchronously first, with /subscribe/tag/water-quality URLs. Circle back at end of project to implement AJAX if time available | | January 19th 2021 - January 25th 2021 |
| Blog Prompt: Career Opportunities | 9 | January 26th 2021 |
| Connect “add location” button to work similarly to adding location in the tags input of profile pages; it will reload the page | | January 26th 2020 - February 1st 2021 |
| Chat: (Alums invited!) Advancing your career | 10 | February 2nd 2021 |
| Connect “Nearby activity” button to display once a location is added, leading to a map view of recent posts at in format || February 2nd 2021 - February 8th 2021 |
| Resume Drafting | 11 | February 9th 2021 |
| Add Trending topics, using code as shown in current dashboard design | | February 10th 2021 - February 15th 2021 |
| Chat Networking skills | 12 | February 16th 2021 |
| Mid-way through project, assess and discuss w/ staff if new dashboard now fulfills basic needs and can replace old dashboard already; consider making new dashboard appear at /dashboard now. | | February 16th 2021 - February 22nd 2021 |
| Final project progress blog post | 13 | February 23rd 2021 |
| Consider using AJAX to add/remove new subscribed-to topics | | February 23rd 2021 - March 1st 2021 |
| Internship wrap up chat | 14 | March 2nd 2021 |


### Communication

I believe that communication is a vital aspect of Outreachy Community and to ensure that the status of the project is communicated properly, I will be undertaking the following steps:
 *  Publish a blog post bi-weekly detailing:
      * Actionable items delivered that week.
      * Hurdles faced while tackling the issues.
      * How I overcame the hurdles.
      * Career opportunities.
 *  5 hours per week of mentoring - including answering questions, reviewing contributions, and meeting
 *  A real-time meeting at least once a week - either through real-time chat, video conference, or phone
 *  Participate in bi-weekly chats with other interns, mentors and alums
 *  Try to maintain a google doc with daily updates to the work done for the day. (Even if I am stuck at some issue, I’ll be writing that down).
 *  Maintain a github meta-tracker repository containing the following, so that everything is available at one place:
     * A notes folder containing all notes that I took while getting to understand the task at hand.
     * A link to the google doc with daily update.
     * Link to blog posts (weekly updates).
     * List of issues that I am currently working on/have closed.
     * List of Pull Requests that I have opened for the project.

### Obligations.
I will be available to work full time (a minimum of 40 hours per week) during the Outreachy Internship period. 

### Why Me.
* I have been contributing to Free and Open Source Software as a Volunteer at [Wikonnect](https://github.com/tunapanda/wikonnect) since June 2020. I have been able to acquire skills in working with Agile and Scrum methods and using methodologies in contributing to Open Source.
* I am familiar with the tech stack ie Bootstrap 4 and Ruby on Rails I have used them in different personal projects which  makes me a perfect fit for this project.
* I have been coding in Vanilla Javascript for since February 2020 and I have worked with React Framework in a few projects. I am proficient in MERN STACK and I have a keen interest in FrontEnd Development.Link to my Github account [Github link](https://github.com/IjayAbby) 
* Sample Project:
   * Newsweek Clone Project using Bootstrap 4.5 [Newsweek Clone](https://github.com/IjayAbby/Newsweek-Clone-Bootstrap-4.5)

### First-time contribution
* I have began contributing to Public Lab since October 2020. The issue I was working on was to replace .length with .size on the https://github.com/publiclab/plots2/blob/main/app/views/home/subscriptions.html.erb file. 
The instructions were to set the replace the .length with .size that was on the file. I used GitHub for the editing of the file committed my changes with a descriptive commit message. Made sure all the test were passing before opening a pull request. On opening the pull request I filled the checklist that was provided then submitted my pull request. It was reviewed and merged successfully.
* Link to approved pull request(https://github.com/publiclab/plots2/issues/8615)
* I have also been helping other first-timers with their issues if they needed help.

### Teamwork
* As a volunteer at Wikonnect I took part at Wikonnect Hackathon which took part  27th June, 2020 As a team player I helped my hackathon team members work around setting up the project and installation of the necessary dependencies for the project. I helped the new comers with the Onboarding Process by helping them understand how the code works and the various frameworks and technologies used.

### Passion
* For over the years we have been struggling to fight environmental degredation but we still have the same problems. The reason being is lack of proper knowledge of what we are dealing with. At Public Lab, they aim to open research from the exclusive hands of scientific experts. By doing so, communities facing environmental justice issues are able to own the science and advocate for the changes they want to see. By promoting a hands-on, do-it-yourself ethos, we support each other’s exploration, which leads to technical development and real applications in our communities.

### Audience
* The goal for any existing problem is to have a solution that soots the needs of its people. At Public Lab having a website that is User friendly is our major goal. We work towards Implementation of a New Dashboard which will make it easier for our users to maneuver an also make the pages more interactive with its users.
* Making the page responsive to different screen sizes will come in handy because it will increase the number of its users by making their sites to be accessible and easy to use even in mobile view.
[](Ijay_Abby/Outreachy_public_lab)