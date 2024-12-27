---
title: "GSoC 2021 Proposal : Tag / topic system refinements"

tagnames: 'software, soc, first-time-poster, gsoc-2021, gsoc-2021-proposals, outreachy-summer-2021'
author: Manasa2850
path: /notes/Manasa2850/04-10-2021/gsoc-2021-proposal-tag-topic-system-refinements.md
nid: 26184
uid: 752279

cids: 28514,28517,28526,28536,28537,28610,28612,28655,28656,28657,28670,28671,28672,28673,28693,28695,28696,28710

---

![](https://publiclab.org/public/system/images/photos/000/043/209/original/1.png)

# GSoC 2021 Proposal : Tag / topic system refinements

by [Manasa2850](../../../profile/Manasa2850) | April 10, 2021 17:45

April 10, 2021 17:45 | Tags: [software](../tag/software), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2021](../tag/gsoc-2021), [gsoc-2021-proposals](../tag/gsoc-2021-proposals), [outreachy-summer-2021](../tag/outreachy-summer-2021)

----

## **About me**

**Name:** Manasa Kashyap

**Email:** manasakashyap@iiitb.org

**Github:** https://github.com/Manasa2850

**Affiliation:**  International Institute of Information Technology, Bangalore

**Location:**  Bangalore, India

**Timezone:** Indian Standard Time (UTC + 05:30)
<hr/>

## **Project description**

This project focuses on expanding and refining the tag and topic system in the [Public Lab](https://publiclab.org/) website. It also aims to improve the design of tags and power tags. Some of the important features which are going to be implemented as part of this project are tag locking, deleting tags by banned users, differentiating between normal tags and power tags, alerting first time users from tagging posts other than their own.

****
### **Abstract/summary (<20 words):**

Expanding and refining the tag and topic system along with improvements to the UI.

****
### **Problem**

Being part of the Public Lab community has allowed me to take a deep dive into the code base as well as made me realize how important the tag and topic system is. However, by spending a lot of time on it, I have identified some problems which are present in the tag and topic system currently.

- Bugs in SQL queries driving the tag system due to which the number of followers for tags is shown incorrectly.

[![1.png](/i/43188)](/i/43188?s=o)

- But the number of followers for balloon-mapping as shown in the sidebar is 89 which indicates that there’s a discrepancy and hence a bug.

[![2.png](/i/43309)](/i/43309?s=o)

- There is no field in the Tag database table which keeps track of the user who has added that tag to some particular content. Because of this, it is not possible to delete by default the tags added by users who are banned.

[![tag_no_creator.png](/i/43365)](/i/43365?s=o)

- No difference between power tags and regular tags for a user which leads to confusion - power tags are used to prompt a page to do something specific. For example the power tag "question:foo" prompts that page into the questions stream. But currently, because of the UI, it is difficult for users to differentiate between tags and power tags which leads to power tags not being used efficiently.

- Currently, on the tags page clicking on 'sort by name', 'sort by # of people' and 'sort by # of uses' sorts the topics in ascending order based of the parameter selected. There is no option for users to select descending order by clicking on that. 

- There is no way of preventing first time users from tagging work other than their own - this can lead to a lot of spam so restricting the tagging privileges of first time users is necessary.

<hr/>

### **Project Goals and Implementation**

**1. Tag Locking**

- Introduce a tag called ‘locked’ which can be put on some content only by     the moderator / administrator. No other user can put the ‘locked’ tag.

-  When a user is logged in as admin or moderator, they are given an option to lock any post.
      The UI for this would look like the image below

[![admin_lock.png](/i/43310)](/i/43310?s=o)

- To implement tag locking, we need to have a new field in the database table called ‘locked’ which is by default set to ‘false’. For any post which has been locked, this field is set to ‘true’ and no one other than admin / moderators can add / delete tags. 

- For any content which is tagged ‘locked’, tags can be added / modified / deleted only by the moderators or administrator.

- Any content which has been locked by the moderator will have a lock icon instead of the edit icon which means no one else other than the moderators can add / delete tags.

The figure below shows how the UI will potentially look like, for posts which have been tagged 'locked'.

[![lock_icon.png](/i/43249)](/i/43249?s=o)

Here is how I plan to implement it

[![only_admin_can_lock.png](/i/43221)](/i/43221?s=o)


[![tagged_locked.png](/i/43224)](/i/43224?s=o)


**2. Restrict privileges of first time users and allow them to tag only their work**

There are multiple ways to restrict first time users from tagging any post. They are as follows:

- Add an alert whenever first time users are tagging work other than their own and prevent them from doing so.

[![first_time_poster_alert.png](/i/43223)](/i/43223?s=o)

The UI for this would look like

[![alert1.png](/i/43368)](/i/43368?s=o)



- Hide the tag form from first time users. Even though this option solves the problem, it might lead to confusion among first time users as to whether there’s an option to add / delete tags on a particular page. Compared to this, the first option seems more user friendly.

- Having a moderation system similar to what is there for first time posters i.e first time users can add / delete tags on any page and it’s held for moderation. It will be reflected only after it is approved by a moderator.
The below figure shows the workflow if we decide to go ahead with this implementation.

[![approve_tag.png](/i/43195)](/i/43195?s=o)

- **New idea:** We can introduce credibility points, similar to what is present in websites like Stackoverflow. Every time users post a question or comment, they earn points. Only users having points more than 50 will be allowed to add or delete tags. This would help first time users understand progression of privileges in a much more easy and interesting manner.

The UI for this would look like

[![alert2.png](/i/43369)](/i/43369?s=o)



**3. Delete tags added by banned users**

- Tags added by users are removed as soon as they are banned.

- We need to introduce two new fields in the Tag database table - user id of the user who is adding it and the id of the content to which it is being added.

- We can have a join table which maps tags and users with the foreign key as user id. If the user who has added a tag has been marked as ‘banned’ in the users table, that tag will be deleted.

[![ban_flow.png](/i/43366)](/i/43366?s=o)


- Banned users are not allowed to add / delete tags from any page.



**4. Differentiate between tags and power tags**

- As explained before, power tags are used to prompt the page to do something specific. However, because of the current UI, it is very difficult for users to differentiate between the two.

- Currently, power tags and regular tags appear in the same place on a page as shown in the figure below


[![tag_1.png](/i/43227)](/i/43227?s=o)


- 'question:water' is a power tag whereas 'pollution' is a regular tag. But since they look the same and appear in the same place on the page, it's difficult to differentiate between the two.

- Have regular tags and power tags in different parts of the page. 

- Have different colors for regular tags and power tags so that they can be differentiated easily. Power tags can be grey whereas the regular tag can be white.

- One of the main issues with power tagging is that power sorting is applied only to the tags the power is used with. If we use the tags 'question:water' and 'pollution', the page would recognize that the question power is only for 'water'. 


[![tag_2.png](/i/43228)](/i/43228?s=o)


- As shown in the above figure, users can tag a content as 'question' for one topic and 'wiki' for another topic. But there is never a case where something is a question for one topic and a normal research note or wiki for another topic.

- In order to resolve the problem mentioned in the previous two points, users can be prompted to mention the 'type' of the content before publishing it.

This is how the UI will potentially look like

[![power_tag_mockup.png](/i/43377)](/i/43377?s=o)




**5. Category Tree Interactive Feature**

- As shown in the figure below, on the [topics](https://publiclab.org/wiki/topics) page on the Public Lab website, topics and their hierarchy is listed in a table.

[![topics_current.png](/i/43371)](/i/43371?s=o)



- The design can be improved by using a categorical tree structure to display the interrelationship of topics, as shown in the figure below.

[![topics_category_tree.png](/i/43203)](/i/43203?s=o)

- This makes it much more simpler to organize and understand topics and subtopics.

- Here is some pseudo code which will help me build the category tree

[![category_tree_code.png](/i/43207)](/i/43207?s=o)



**6. Continued refinements to cytoscape visualization**

- I will take community input to make improvements to the cytoscape visualization on https://publiclab.org/tags.

Some ideas which I have for improving it are:

- Have a search bar – this would help users search for a particular tag and see it’s relationship with other tags.

- Hovering over a particular tag should highlight the relationship links of that tag with other tags.


**7. Improving UI of the tags page**

- Have a search bar for users to search for a tag in the cytoscape visualization.

- Add an option for users to either select sorting based on ascending order or descending order.

[![ui_tags_page.png](/i/43373)](/i/43373?s=o)



**8. Spam Tag feature**

- Create a tag called 'spam'. Any users who are not banned or who are not first time users can add this tag to content which they find to be spam.

- Whenever this tag is added, admins / moderators receive an email notification. After approval, that content is considered as spam and deleted.

- If the admins / moderators find the content to be appropriate and that the 'spam' tag was unnecessary, the user loses credibility points. 

[![spam_tag.png](/i/43370)](/i/43370?s=o)



****
### **Additional Goals**
**1. Testing** 

- I will focus on test driven development and ensure 100% test coverage for the code I write.

- Functional tests will be written for every new feature added.

- System tests will be written / modified whenever changes are made to the UI.

**2. Accessibility** 

- Accessibility is extremely important since it helps us create an inclusive environment on our website.

- I will follow best accessibility practices by maintaining the semantic structure of the pages, by using element tags that describe the content such as header tags and button tags. For example, using a button tag to create a button as opposed to the span element that will not be easily read by accessibility readers.

**3. Translation**

Translations will be added in all possible places. Some of the places are

- Alert message given to first time users when they try to add / delete tags.

- Notification message for new posts on topics that a user follows.

- Alert message given to all users other than moderators when they try to edit locked pages.

**4. First Timer Issues**

One of the best aspects of working with Public Lab is that everyone is encouraged to create first timer issues to help new contributors. I will create FTOs as well as be an active member of the community and help onboard new contributors.

****
### **Timeline/milestones**

**May 17 - June 6 2021** (Community Bonding Period)

- Take a deeper look at the codebase and discuss project goals with mentors.

- Fix the existing bugs related to the tag/topic system.

**June 7 - June 13 2021** (Week 1)

- Implement tag locking along with the associated UI changes.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**June 14 - June 20 2021** (Week 2)

- Prevent first time users from tagging work other than their own.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**June 21 - June 27 2021** (Week 3)

- Implement the feature to prevent banned users from adding tags and removing tags added by them, as soon as they’re banned.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**June 28 - July 4 2021** (Week 4)

- Refine display of interrelationship of topics.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**July 5 - July 11 2021** (Week 5)

- Differentiate between tags and power tags. 

- Write system tests for the UI changes made.

- Make changes based on the feedback of mentors.

**July 12 - July 18 2021** (Week 6)

- Add the category tree visualization feature.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**July 19 - July 25 2021** (Week 7)

- Improve the display of tag cards. 

- Refine cytoscape visualization.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**July 26 - August 1 2021** (Week 8)

- Implement the spam tag feature to mark some content as spam.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**August 2 - August 8 2021** (Week 9)

- Improve the display of tags/topics in the sidebar.

- Write tests for all changes introduced.

- Make changes based on the feedback of mentors.

**August 9 - August 15 2021** (Week 10)

- Buffer week - complete any pending task.

****
### **Needs**

I would like to recieve feedback on my PRs from the mentors which will help me improve the quality of my work and in turn complete the project effectively.

****
### **Contributions with Public Lab**

I have been working with Public Lab, on the plots2 repository since January 2021. These are my contributions

[Merged Pull Requests](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AManasa2850+is%3Amerged)

- 17 merged PRs - these PRs solve a variety of issues like adding tests, adding new features, improving the UI and refactoring deprecated code.

[Open Pull Requests](https://github.com/publiclab/plots2/pulls/Manasa2850)

- 3 open PRs

[FTOs Created](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AManasa2850+label%3Afirst-timers-only+is%3Aclosed)

- 14 FTOs created to help newcomers start their Public Lab journey.

[Issues](https://github.com/publiclab/plots2/issues/created_by/Manasa2850)

- 6 issues created to add new features / report bugs in publiclab.org.

[Reviewed PRs](https://github.com/publiclab/plots2/pulls?q=is%3Apr+reviewed-by%3AManasa2850+is%3Aclosed)

- I have reviewed several pull requests and helped in the onboarding of newcomers. 

****
### **Experience**
I have been doing web development with Ruby on Rails and JavaScript for the past 2 years. Detailed experience and my projects can be found on my resume. I am also passionate about Open Source and have contributed to various open source organizations.

- [if-me.org](https://www.if-me.org/) : This is a community for mental health experiences. The backend is in ruby on rails and the front-end in React Js. I contributed for over 6 months and added new features apart from fixing bugs.
  Some of my major contributions to if-me are :
  - Adding Facebook authentication – I added Facebook authentication to the app along with associated UI changes. Also added elaborate tests to ensure that the code doesn’t break. [Pull Request](https://github.com/ifmeorg/ifme/pull/1705)
  - Added show password feature – This feature enables users to see the password they’re typing. [Pull Request](https://github.com/ifmeorg/ifme/pull/1685)

- [MLH Open Source Fellowship](https://fellowship.mlh.io/) : I was one the top 100 people amongst more than 2000 applicants selected for this fellowship. I worked on [dev.to](https://dev.to/) for 3 months where the main tech stack was Ruby on Rails.
Some of my major contributions to dev.to are :
  - Added a podcast ownership feature – this allows admins to add owners to a podcast. [Pull Request](https://github.com/forem/forem/pull/11728)
  - Added podcast edit feature - this enables podcast owners to edit a podcast. [Pull Request](https://github.com/forem/forem/pull/11410)

****
### **Teamwork**

I am a core member of the LeanIn IIIT Bangalore chapter. I have organized several classes for junior girls to teach them programming concepts and introduce them to Open Source.

I was the organizer of TEDxIIITBangalore where I managed a team of 20 people.

I have worked on several course projects in my college, where the team size is around 3-4 people. I have also participated in many team-based hackathons, one of them being Smart India Hackathon.

As for Public Lab, I have had a wonderful experience contributing. The mentors, especially @jywarren and @cesswairimu have been extremely encouraging and have provided valuable feedback on my PRs which has helped me to make better contributions.

****
### **Passion**

I really like the Public Lab community and the work they’ve been doing to protect the environment. It is such a welcoming community. I really appreciate the way newcomers are welcomed, and encouraged to contribute to the project.
Love for the environment and passion to contribute to Open Source inspired me to work on this project.

****
### **Audience**

This project will benefit all users of publiclab.org because topics and the associated tagging system are one of the fundamental features used by everyone. Improvised design of topics and tagging system will make it much easier for users to use. Features like tag locking and deleting tags added by banned users will limit spam and enhance the quality of content for all users.

****
### **Commitment**

I am available to work full time throughout the duration of the internship.

