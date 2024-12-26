---
title: "GSoC"22 Proposal: Refine User Interfaces across PublicLab.org "\ntagnames: 'software, gsoc, soc, first-time-poster, lon:76, lat:28.704059, lon:77.10249, zoom:6, lat:27, gsoc-2022, gsoc-2022-proposals'
author: keshavraturi333
path: /notes/keshavraturi333/04-13-2022/gsoc-proposal-refine-user-interfaces-across-publiclab-org.md
nid: 30354
uid: 794628

---

![](https://publiclab.org/public/system/images/photos/000/045/720/original/gsoc.png)

# GSoC"22 Proposal: Refine User Interfaces across PublicLab.org 

by [keshavraturi333](../profile/keshavraturi333) | April 13, 2022 16:30

April 13, 2022 16:30 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [lon:76](../tag/lon:76), [lat:28.704059](../tag/lat:28.704059), [lon:77.10249](../tag/lon:77.10249), [zoom:6](../tag/zoom:6), [lat:27](../tag/lat:27), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals)

----

## About me

**Name**_: Keshav Raturi_

__**Gitter handle**_: [keshavgbpecdelhi](https://gitter.im/keshavgbpecdelhi)_

_**Email**: [keshavraturi333@gmail.com](mailto:keshavraturi333@gmail.com)_

_**Github**: [keshavgbpecdelhi](https://github.com/keshavgbpecdelhi)_

_**Location**: New Delhi, India_

_**Time Zone**: UTC+05:30_

**Typical working hours**: 10 AM to 12:00 PM and 5 PM to 1 AM.(UTC+05:30) (4:30 AM to 6:30 AM and 11:30 AM to 7:30 PM UTC). _On college days, occupied between 9 AM to 2 PM.(UTC+05:30) (3:30 AM to 8:30 AM **UTC)**_

**Affiliation** [GGSIPU](https://g.co/kgs/eSzH3n)

**Location:** Delhi, India

## Project description

Abstract/summary (<20 words):

This project aims to improve a collection of User Interface/User eXperience (UI/UX) and related features on the platform. Some are navigational, some are stylistic, and some introduce new interfaces or ways of browsing content.

### Problem

The Project solves the following problems :

- Interlinking navigation between pages
- Creating Template for random "generator"
- Disambiguating navbar search box
- Developing a category tree at /topic-tree with nested topics in a tree view
- Adding a date-picker to new timeframe selector for /tag/\_\_\_\_ pages
- Changing information hierarchy on Profile Pages to feature user-generated content
- Streamlining the process for teachers becoming moderators

  
  
**Interlinking navigation between pages\***

Brainstorm better interlinked navigation between [https://publiclab.org/wiki](https://publiclab.org/wiki) pages <\> [https://store.publiclab.org](https://store.publiclab.org/) <\> individual tag pages

This actually deals with the interlinking of 3 different pages related to same product or topic, like if someone is reading about a particular product and how it is implemented in the wiki section of PublicLab, then he/she might be interested in more related products which can be accessed in the tag page of that product related tag.

Likewise if they get a link for that product store page, or if they might be interested in purchasing that product, interlinking would give a smooth user experience.

This either could be done by manually inserting HTML in the wiki page, or we could also change the site template for this functionality.

Flowcharts :

![image description](/i/45828.png "backend-paint.PNG")

![image description](/i/45830.png "frontend-paint.PNG")

  
**Creating Template for random "generator"\***

Template for random "generator" will bring up a random piece of content for a given topic, for use around the site to re-surface old content. It may need some tuning to ensure old content meets some threshold minimum # of views, comments, etc - to ensure it's interesting enough!

For random generator we can fetch recommended nodes using active record based on :

**Tag Popularity** : Tag popularity propositional to the follower count. We can select the best 2\.

**Published Date** : We can check within the range of dates available.

**People Liked** : The View to Like ratio can be considered for node recommendation.

We can implement the change in [wiki\_controller](https://github.com/publiclab/plots2/blob/main/app/controllers/wiki_controller.rb)'s function "show" : ![image description](/i/45877.png "wiki_controller_show.PNG")

as well as can create the respective recommendation function in [tag.rb](https://github.com/publiclab/plots2/blob/main/app/models/tag.rb)

Talking about **frontend** we can do this in three ways :

1\. Let the suggested connect come at bottom of the page which can take more page leads to scrolling

2\. To reduce page length, we can make horizontally scrollable bar and lazy load.

3\. Can implement in the side bar with small divs of content related to the viewers page.

![image description](/i/45879.png "frontend_recommendations.PNG")

  
  
**Disambiguating navbar search box\***

Better disambiguate "search for this term" vs. "Go to the page for this topic" in navbar search box UI. Pressing Enter for "water" goes to tag page /tag/water, but pressing escape then enter searches for the string "water" - let's manage this better and use better textual hints using Bootstrap UI elements!

As we want to manage search whether it is a Term or Page, we can do by defining a way for users to choose between two in the following ways :

- when a query is searched there will be two wraps popped below the search box which future contains the terms or pages respectively![image description](/i/45942.png "search1.PNG")
- when a query is searched there will be two tag-like boxes having number on right side for the number of results they contain if any of the two is crossed it will lead to termination of that page/term related searches.

![image description](/i/45943.png "search2.PNG")

  
  
  
**Developing a category tree at /topic-tree with nested topics in a tree view\***

Develop a category tree interactive feature at /topic-tree with nested topics in a tree view like: [https://www.appropedia.org/Appropedia:Fundamental\_category\_tree](https://www.appropedia.org/Appropedia:Fundamental_category_tree) using asynchronous calls to Rails and JavaScript code to insert nested [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) elements

For developing a topic tree we can feed inside the sup-topics while grouping the major topics.

Simple dropdown approach can be used to display the topics and subtopics

If major topics like air we will append links to the sub-topic related to it for easy user navigations.

![image description](/i/45944.png "topic-tree.PNG")

  
**Adding a date-picker to new timeframe selector for /tag/\_\_\_\_ pages\***

Add a date-picker to new timeframe selector for /tag/\_\_\_\_ pages: [https://github.com/publiclab/plots2/issues/2439](https://github.com/publiclab/plots2/issues/2439)

We can do this by customizing the date range in the "VIEW DATE RANGE" section where we can directly set date ranges with or without using those pre-existing past month or past year options as it's going to cover when a person is setting the date range.

Past month and year seems ambiguous terms as the person might be interested in some specific date ranges then that "VIEW DATE RANGE" button will be sufficient for the show.

For example in : [https://publiclab.org/tag/water](https://publiclab.org/tag/water)

![image description](/i/45946.png "date-range.PNG")

While some one click on "[VIEW DATE RANGE](https://bbbootstrap.com/snippets/blue-themed-date-picker-date-range-and-week-number-61366925)" it will show a bootstrap date picker, which after uses jQuery selector, which will filter out parameters for the selected range.

![image description](/i/45947.png "date-bootstap.PNG")

  
  
**Changing information hierarchy on Profile Pages to feature user-generated content\***

Change information hierarchy on Profile Pages to feature user-generated content, not group content, in topical "cards" shown in main column, for example on [https://publiclab.org/profile/sarasage](https://publiclab.org/profile/sarasage) each card shows posts by other users![image description](/i/45970.png "current-profile.PNG")

Currently there are three parameters of [tag.name](http://tag.name), type and limit in the below code present in [profilecard section](https://github.com/publiclab/plots2/blob/main/app/views/tag/_profileCard.html.erb#L10) we can add up a new "user\_id" parameter to fix it to the specific user profile.

![image description](/i/45968.png "l10.PNG")

Futher we can do the changes [app \> models \> tag](https://github.com/publiclab/plots2/blob/main/app/models/tag.rb#L96-L111) section in the below code corresponding to the user\_id so as to get the blog and everything of the specific person only, of which the profile we are checking.

![image description](/i/45969.png "l111.PNG")

Further we can modify the codebase to omit the username which is repeating again, as it being obvious for the profile which we checking.

**Streamlining the process for teachers becoming moderators**

Streamline the process for teachers ([https://publiclab.org/education](https://publiclab.org/education "https://publiclab.org/education")) becoming moderators ([https://publiclab.org/moderation](https://publiclab.org/moderation)) (this may be a refinement of process)

**\* : the ideas mentioned are inspired from [P](https://publiclab.org/notes/mittalparth22/04-12-2022/gsoc-2022-proposal-refine-user-interfaces-across-publiclab-org)[arth](https://publiclab.org/notes/mittalparth22/04-12-2022/gsoc-2022-proposal-refine-user-interfaces-across-publiclab-org "https://publiclab.org/notes/mittalparth22/04-12-2022/gsoc-2022-proposal-refine-user-interfaces-across-publiclab-org") porposal.**

  
---------

### Timeline/milestones

Pre-GSoC Period - Till 17th May

- Understanding the idea and getting doubts resolved as soon as possible.
- Going through already available code, understanding its working.
- Solving already opened issues related to the project.
- Writing some tests to head start.

Community Bonding (17 May, 2021 - 6 June, 2021)

- Get familiar with the ruby concepts that will be most required during the internship.
- Get familiar with the community and attend Public Lab open calls to get an idea what needs to be done.
- Discuss Project with mentors and brainstorm some ideas which could have multiple approaches.

Week 1 (7 June, 2021 - 13 June, 2021 )

- Start working on Interlinking navigation between pages.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 2 (14 June, 2021 - 20 June, 2021)

- Work on disambiguating the navbar search box suggestions.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 3 (21 June, 2021 - 27 June, 2021)

- Work on developing a category tree with nested topics in a tree view.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.
- Attend PubicLab open call for feedback from the user community.

Week 4 (28 June, 2021 - 4 July, 2021)

- Work on adding a date-picker to new timeframe selector.
- Make corresponding UI changes.
- Create FTO's whenever possible
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 5 (5 July, 2021 - 11 July, 2021)

- Work on Tag Moderation for first-time-users
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 6 (12 July, 2021 - 18 July, 2021)

- Mid-Evaluation
- Changing information hierarchy on Profile Pages.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 7 (19 July, 2021 - 25 July, 2021)

- Streamlining the process for teachers becoming moderators.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 8 (26 July, 2021 - 1 August, 2021)

- By this time, I'd be much more familiar with the codebase, So, I will get my hands on the bugs in the User Interfaces issues.
- Also, look for other existing bugs around UI/UX or if bugs introduced by the changes made during internship.

Week 9 (2 August 2021 - 8 August, 2021)

- Continue with fixing bugs.
- Create FTO's for newcomers.
- Write/modify documentations for the change made during internship.

Week 10 (9 August, 2021 - 15 August, 2021)

- Continue with documentation and reports for evaluation.
- Finish up the tasks
- Take reviews from mentors and the user community.

Submission Period (16 August, 2021 - 23 August, 2021)

- Submitting work for evaluation
- Writing project summaries and blog about the feature built.

Post GSoC (After 23 August, 2021)

- Getting feedback on above features and catching up with further needs.
- Help and mentor new contributors at Public Lab and review PRs and report issues.
- Continue with more contributions and maintaining the `plots2` repository.

---------

### Needs

_I will need guidance from my counselors. suggestions or feedback from all members of the PublicLab will be positive and will help me build, complete my project and contribute to the community._

---------

### Experience

I'm an undergraduate, pursuing a degree in Computer Science from G. B. Pant Govt. Engineering College, New Delhi, India. I'm in the 6th semester of my eight-semester program. I will graduate in May 2023\. As an open-source enthusiast, I've attended various technical and open events and workshops on Git, Github, Open Source, etc, I was first introduced to Open-Source last year and Hacktoberfest helped a lot to gear up my interest and skills. I'm also an active member in all the technical communities of my college. I'm the executive team member of the CodeChef Chapter of my college. My technical skills include web development with python backend frameworks like Django. I also have some experience in Deep Learning around the computer Vision area. I have some experience with Ruby and currently learning Ruby on Rails from online tutorials and documentations.

---------

### Public Lab contributions

- Community Involvement : [Here](https://github.com/search?utf8=%E2%9C%93&q=commenter:Keshavgbpecdelhi%20org:publiclab&type=Issues)
- Open issues: [Here](https://github.com/publiclab/plots2/issues/created_by/Keshavgbpecdelhi)
- Closed PRs: [Here](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:keshavgbpecdelhi%20is:closed)

---------

### Teamwork

I have always loved Open Source for the collaboration and teamwork it offers to experience. I'm an active member of various technical communities at my college. I'm the executive team member of the CodeChef Chapter of my college and have organized various events along with my team for educating Data Structure Concepts and Competitive Programming to the juniors. I've also participated in various hackathons in a team and shown great leadership skills and collaboration with my teammates.

---------

### Passion

The most amazing thing I like about Public Lab is that it is welcoming for beginners and newcomers. The mentors are really appreciative and encouraging. I am happy to see my PR getting merged. I am passionate about contributing to Public Lab more.

---------

### Audience

This project aims to improve UX/UI for teachers and people using PublicLab and related features on the platform. Making them lot easier in navigations, stylizing and lot more. It will help the public lab community members to experience a better organization of contents and will make their experience a bit more smoother and easier to use.

---------

### Commitment

Yes, I do understand the commitment and I can devote 40-45 hours weekly for the completion of this project. Only in the last week, College will overlap for last 2 weeks(August). In that semester, I am free to choose the number of courses since all my core courses will be over by this semester. No examination session will occur during that month. Also, I've added less workload in the last weeks in the Timeline/Milestones to finish up everything in time.