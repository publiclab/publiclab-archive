---
title: Outreachy proposal: Tag/topic system refinements
tagnames: software, outreachy, first-time-poster, outreachy-summer-2021, outreachy-2021, ofuses
author: aliciapaz
path: /notes/aliciapaz/04-28-2021/outreachy-proposal-tag-topic-system-refinements.md
nid: 26380
uid: 752301

---

# Outreachy proposal: Tag/topic system refinements

by [aliciapaz](../profile/aliciapaz) April 28, 2021 08:18

April 28, 2021 08:18 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-summer-2021](../tag/outreachy-summer-2021), [outreachy-2021](../tag/outreachy-2021), [ofuses](../tag/ofuses)

## About me

I'm Alicia Paz Rojas, a self-taught developer from Chile. Before diving into software development, I worked on ecological agriculture research and environmental education.  
In 2020 I enrolled a remote software development program where I learned Ruby, Ruby on Rails, and JavaScript while collaborating and pair-programming with students from around the world.  
I have a great interest in complex systems, collective action, and art. I also love music, plants, people, and actively dreaming (not necessarily in that order).

**Location:** Chile

## Project description

### Abstract

Smoothen the tag system-related user experience by fixing bugs and adding new features, including an interactive category tree for topics and improvements in the Cytoscape view.

### Problem

Public Lab's tag system is an important feature that allows users to categorize posts, follow topic-related content, and find users following or working on a certain topic. Thanks to the latter, the tagging system might have an important role in fostering collaboration among users, one of the fundamental purposes of the organization.  
Most environmental issues, as the ones covered in Public Lab's platform, are complex and often involve several topics or/and subtopics. Furthermore, many of these topics are often interrelated or nested within each other, which makes the organization of the content both challenging and relevant, in order to make the content easily accessible.  
Therefore, the tag and topic system is key for educators and general users to get the most out of Public Lab's website.

The current system has known bugs and feature requests that this project aims to tackle.  
For such, the MVP includes the following:

#### I. Bug fixes

The first part of the project will involve fixing the following high-priority bugs:

**I.1\. Tab subscription count displays inflated numbers on stats/subscriptions page, as described in #7908\.**

This fix will require adjustments to the SQL queries driving the stats/subscriptions.

Also, since this bug has been fixed before and then re-opened, improving the tests related to this feature will help to reinforce the fix and quickly catch bugs in the future, if they arise. This improvement includes generating better data for such tests.

**I.2\. Misbehavior when choosing #ofuses as sorting criteria**: tags are supposed to be sorted by the number of posts that used that tag in descending order -and in general terms they do-, but this is misbehaving in several places:  
![image description](/i/43535.png "sorting_tags_bug.png")

These tags seem randomly sorted, despite being under "order=desc" (see URL).

**I.3\. The contributors' page (/contributors/tagname) shows users that have not only posted but also commented a note with a certain tag.** This is inaccurate since the users appear under the title "People who've posted", but sometimes when clicking on a username, we find that this user has not posted anything under that tag. This should either change to "People who've contributed" or break down the contributor list to "People who've posted" and "People who've commented".

One thing these three bugs (I.1, I.2, and I.3) have in common is that they involve understanding the models and associations between them. I noticed that the only way to get the "big picture" of how the database is organized, is by looking at the [Public's Lab Data Model](https://github.com/publiclab/plots2/blob/master/doc/DATA_MODEL.md "https://github.com/publiclab/plots2/blob/master/doc/DATA_MODEL.md"), which is a great place to start but is not detailed enough for someone trying to go deeper. The other option is to directly look at the schema and the models, but for a newcomer, this might be a little tedious and confusing.

To provide an example, let's look at the Active Record Query that is (supposedly) causing the issue in I.1\.

![image description](/i/43564.png "query.png")

To understand the first INNER JOIN we must look a the community\_tag table on the schema. But if we want to look at the model to understand the associations with TagSelection, we won't find any "CommunityTag" model, because this table corresponds to the NodeTag model. The same happens with term\_data and the Tag model.

**Entity relational diagrams (ERD)** are a way to visualize a database with great detail, showing the different tables and associations that exist. An ERD is a great tool to improve the readability of a database and help newcomers to get on board quickly.

There are many tools available to quickly create an ERD. Among them, **[DBML](https://github.com/holistics/dbml "https://github.com/holistics/dbml") (Database Markup Language)** is an open-source DSL language that comes with a free visualization tool called [dbdiagram](https://dbdiagram.io/home "https://dbdiagram.io/home"). Since it supports Ruby on Rails integration, the ERD can be created simply by uploading the schema.rb. The result can be edited and seamlessly shared on the same platform, or it can be exported as an image file and added to the wiki of plots2\.  
As an example, this is a _partial_ ERD of the Public Lab's website database:  
For the interactive version, check out [this link](https://dbdiagram.io/d/60886073b29a09603d126871 "https://dbdiagram.io/d/60886073b29a09603d126871"). Note that when hovering on a table, the associations are highlighted.![image description](/i/43536.png "plots2ERD.png")

#### II. Improvements and feature additions

**II. 1 Retroactive deletion of tags added by banned users**  
This action should delete only the term\_node/node\_tag (instance), not the term\_data (class). The community\_tags table contains the entries to be deleted after a user is banned.

This is how I would implement it:![image description](/i/43562.png "destroy-tgs.png")

It's worth noting that this would be an irreversible change. Even if the user is unbanned, the tags will be irrecoverable. Another way would be to filter these tags in all counts and displays (probably a bit more complicated, but the tags would be recoverable).

**II.2 Tag locking**

- There is an implemented "locked" tags for nodes, that allows a moderator or admin to lock a content
- Only moderators or admins can edit a locked post
- The functionality can be extended to only allow moderators/admin users to edit, add or delete tags on locked content.![image description](https://publiclab.org/i/43561.png "tag-lock.png")
- The UI of the implementation will include a button only visible for moderators and administrators. In pseudo-code:![image description](/i/43560.png "tag-ui.png")

**II.3 Prevent first-time-posters to tag work except their own**

This is a possible implementation:![image description](/i/43559.png "first-timers.png")

**II.4 Implement a category tree-like interactive topic feature**

The current implementation of the topic list at wiki/topics displays a table.  
Because of the above-mentioned problem about complexity in environmental topics, some of the sub-topics are repeated among different topics:

![image description](/i/43538.png "category-table.png")

In the screenshot above, "oil-and-gas" is an example of a shared sub-topic among different topics. In this case, repetition is responsible for readability and effectiveness in the tag system, but is also using extra space.

For the MVP version of the feature, a simple tree-like feature will be implemented. In pseudo-code:  
![image description](/i/43558.png "category-tree.png")

By adding check-boxes to each toggleable category, a user could easily keep track of how categories are nested (styling will be improved of course).

![image description](/i/43540.png "category-tree.png")

A further extension of the feature would be to implement something more interactive/graphical like using a filtered version of the Cytoscape visualization to dynamically generate a topic tree.

**II.5 Refine display of interrelationship of topics**

The "parent: "
power tag allows to set a parent wiki page to a page, so it displays as a
side card under the label "This is part of:"

For example, a node with the tag "parent: africa" will have this card on the side:

![image description](/i/43541.png "parent-tag-card.png")

However, there is no way to differentiate this tag from any other tag (power or regular) on the content page, as other tags will appear in the same format (see II.7 and #6593).

To differentiate parent\_tags from other regular tags, the first could display under a different label, such as:  
![image description](/i/43557.png "parent_tag.png")

**II.6 Separate author names with commas instead of "with" on co-authorship author link display on notes**

Currently, the coauthorship feature uses the power tag "with", and this conditional statement adds that word between the names (in app/views/notes/show.html.erb):![image description](/i/43556.png "authorship.png")

The first problem I encountered while looking at this file is readability.  
Some lines are very long and conditional statements are written in a single line, which makes it difficult to understand and modify.  
As a part of this fix, I propose refactoring this file a little bit (which would make a nice FTO).

**II.7 Finalize display of tags and topics in the sidebar using small cards**

This feature is currently in development in #8684 and it's been already broken down into smaller tasks on #6593\.  
The main tasks on this feature would be to:

- refine the styling of the implementation
- make the tag display for JS/Ajax tags to be a card (as stated in the PR)
- revise the integration tests to ensure proper behavior in the production environment before the release

**II.8 Improve Cytoscape visualization based on community input**

- In full-screen mode is not possible to select the number of tags that are displayed, like in regular mode:

![image description](/i/43542.png "cytoscape.png")

- In full-screen mode, some tag names are still very small for someone with reduced vision.
- Many other feature ideas and fixes for this are discussed in #1502\. A good way to work on this would be to re-activate the discussion and together decide which features would be most helpful to implement.

### Needs

- I will use the constant feedback from my mentors and the Public Lab GitHub community
- To implement the Cytoscape improvements, I will require studying the documentation of this tool

### Timeline

**May 24 - May 30, 2021**

- Make changes to the internship project based on feedback from mentors\*
- Implement ERD for database friendliness
- Create FTO issue to update README with these changes
- Write a blog post (Outreachy's prompt): "Introduce yourself" or a different topic agreed with mentors

**May 31 - June 6, 2021**

- Write tests for stats\_controller, tag\_controller, and any other relevant file
- Fix bugs on topics/tag system
- Create fixes-related FTO's when possible
- Write a blog post to document the process

**June 7 - June 13, 2021**

- Write tests for the tag-locking system fixes
- Implement tag-locking system, breaking it down into smaller issues and creating FTO's when possible
- Write integration tests for the new feature to ensure appropriate behavior in the production environment
- Write a blog post (Outreachy's prompt): "Everybody struggles" or a different topic agreed with mentors

**June 14 - June 20, 2021**

- Write tests for deletion of tags added by banned users
- Implement retroactive deletion of tags added by banned users
- Create a FTO related to these changes or any other suitable area
- Write a blog post to document the process

**June 21 - June 27, 2021**

- Write tests for category topic tree-like interactive feature
- Implement feature on its MVP version, breaking it down into smaller issues and creating FTO's when possible
- Write a blog entry (Outreachy's prompt): "Think about your audience" or a different topic agreed with mentors

**June 28 - July 4, 2021**

- Write integration tests for the new category tree feature to ensure appropriate behavior in the production environment
- Open or reactivate GitHub issue to discuss Cytoscape improvements
- Write a blog entry to document the process

****July 5 - July 11, 2021****

- Refine display of interrelationship topics using parent tags, breaking it down into smaller issues and creating FTO's when possible
- Write a blog entry (Outreachy's prompt): Mid-point project progress or a different topic agreed with mentors

******July 12 - July 18, 2021******

- Write integration tests to ensure the expected behavior of the changes in the production environment
- Write a blog post to document the process
- Create a related FTO if possible, or use another suitable topic

**July 19 - July 25, 2021**

- Separate author names with commas instead of "with" on co-authorship author link display
- Implement card-like display for tags/topics in the sidebar, breaking it into smaller issues and creating FTO's when possible
- Write integration tests to ensure appropriate behavior in the production environment
- Write a blog entry (Outreachy's prompt): "Career opportunities" or a different topic agreed with mentors

**July 26 - August 1, 2021**

- Start implementing Cytoscape view improvements as discussed with the community, breaking it down into smaller tasks and creating FTO when possible
- Write integration tests to ensure appropriate behavior in the production environment
- Write a blog post to document the process

**********August 2 - August 8, 2021**********

- Continue improvements of Cytoscape view
- Write tests for these changes
- Write a blog post to document the process
- Work on Outreachy's prompt: resume

**August 9 - August 15, 2021**

- Start implementing the extension of the category tree-like feature based on community feedback, breaking it down into smaller issues and creating FTO's when possible
- Write tests for the introduced changes
- Write a blog post to document the process

**********August 16 - August 22, 2021**********

- Buffer week to complete possible pending tasks
- Write final project progress blog post, highlighting achievements, pending tasks and further work

**August 23 - August 24, 2021**

- Final feedback

\* This feedback/improvement actually starts right after I publish this proposal, but this is when the internship officially starts.

\*\* Blogging is going to be a key activity towards the documentation of the process. A post of this kind might cover a specific task of the week (i.e. something I struggled with), relevant thoughts, or pretty much anything I would like to share about that week's experience.

### First-time contribution

As a newcomer in open source and the Public Lab community, I've been contributing in small but purposeful ways, trying to do my best and asking for help when I need it:

- [My first contribution](https://github.com/publiclab/plots2/pull/9401)
- [Closed PR's](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:aliciapaz%20is:closed "https://github.com/publiclab/plots2/pulls?q=is:pr%20author:aliciapaz%20is:closed")
- [Comments and GitHub community involvement](https://github.com/search?utf8=%E2%9C%93&q=commenter:aliciapaz%20org:publiclab&type=Issues)

---------

### Experience

I've been coding for approximately a year. I started with free and open source projects like The Odin Project, and in November 2020 I joined a remote school to learn full-stack development, where I've been pair-programming and collaboratively learning with developers from Asia, Africa, Latin America, North America and Europe. I started with HTML/CSS, and then learned Ruby, Ruby on Rails and JavaScript.  
Most of my GitHub projects have been developed for learning purposes, but I'm proud and happy to share some of them, check out my pinned projects [here!](https://github.com/aliciapaz "https://github.com/aliciapaz").

### Teamwork

I enjoy working in horizontal and collaborative teams, where learning can be a multi-directional process. I like learning from others as much as helping others to learn and accomplish their goals.

During my studies of software development, I have successfully completed +15 collaborative projects, by pair programming with developers from other parts of the world.

I volunteered in a community orchard for 4 years, occupying different roles within the organization, such as community coordinator, facilitator/educator, and funding coordinator. During that time we successfully developed an environmental education and urban agriculture program, that involved more than 300 neighbors, students, and educators from the community.

I was a part of a music collective for 4 years, where I performed as a multi-instrumentalist and facilitator. During that time, I taught myself (with the help and constant feedback of my peers) to play several instruments, and shared my knowledge with other participants as an electric bass teacher.

---------

### Passion

_I'm passionate about education, collective action, and applied ecology. I believe that knowledge plays a major role in changing our immediate reality, and should be available for anyone, always._

_As an "environmental science person" diving into technology, I think that Public Lab is an awesome way of converging my interests in technology, creativity, and environmental issues._

_What I love about Public Lab is that the principles that "rule" the organization -such as diversity, collaboration, and "open-sourceness" - are very tangible across the entire workflow. I felt very welcomed when I first started contributing, as everyone is willing to help each other and share their perspective on things._

### Audience

Educators from communities facing environmental injustice are the major target group of this project. By implementing the described improvements, I aim to help them find relevant resources more efficiently and get in touch with other educators and users working on similar issues, thus fostering collaboration between them.

_Another target group is conformed by the potential contributors and newcomers that wish to get involved with Public Lab's open source community. Many of these contributors (such as myself) don't have degrees in CS or lack advanced skills, so I aim to help them get on board by creating FTO's on a regular basis and improving the readability of the source code._

### Commitment

I am ready to take a full-time commitment to the internship. I usually work better during the day, from 9 am to 6 pm.

---------

---------