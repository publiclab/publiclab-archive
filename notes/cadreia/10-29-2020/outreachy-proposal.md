---
nid: 24868
title: Outreachy Proposal: Comment Editor Overhaul
path: public/static/notes/cadreia/10-29-2020/outreachy-proposal.md
uid: 725561
tagnames: software,first-time-poster,outreachy-winter-2020,outreachy-2020-winter-proposals,response:24687
---

# Outreachy Proposal: Comment Editor Overhaul

# About Me

**Name**: Audrey Ndum

**Location**: ​Cameroon

**Timezone**: GMT+0100 (West Africa Standard Time)

**Email**: [audreyndum@gmail.com](mailto:audreyndum@gmail.com "mailto:audreyndum@gmail.com")

**Github Handle**: Cadreia

# 

# Abstract

The Comment Editor subcomponent on the [PublicLab.org](http://PublicLab.org) website needs to go through a series of improvements, refinements, and bug fixes. In addition, system tests ought to be written in order to confirm the functionalities, and the above modifications made to these different variants of the editor behave as expected.

These various variants in which the editor is used include:

- The Research Note Editor
- The Wiki Editor
- The Questions Editor
- The Comment Editor
- The Comment Response Editor

## 

## Problem

Given that this project is a huge one, I decide to split the required tasks to be performed into three main categories: fixing bugs, writing system tests, and refactoring the project's code.

1\. **BUG FIXES**

One of the main problems this project fixes is identifying bugs and fixing them. As of now, several bugs already exist in the system involving several variants of the comment editor which have been listed above. This is required so as to ensure the proper functioning of features of the comment editor.

2\. Writing **SYSTEM TESTS** using test-driven development

Tests need to be written to ensure that all the above-mentioned comment editor variants are working properly and the functionality is not broken by any change made to any other part of the code. These tests when written would also help to identify existing bugs and prevent new ones from arising since they are written before any major changes in the code are made.

3\.**CODE REFACTOR**

Another objective of this project is to reorganize or consolidate the architecture of the comment editor code. Doing this would greatly simplify and reduce redundancy and would also ease maintenance when working with the code in the future.

# Timeline/milestones

---------

### Phase 1 (System Tests)

**Week 1 (Dec 1 - Dec 7)**

- Start structuring and organization of tests such that each type is run on each variant of the comment editor.
- Write system test to confirm basic functionalities for the below situations work properly:
- Comment (preview, hide preview, publish, image upload)
- Comment Response (preview, hide preview, publish, image upload)
- Fix failing test
- Create FTO issue

**Week 2 (Dec 8 - Dec 14)**

- Writing system test to confirm the functionalities below work appropriately:
- Comment just posted
- Response to comment just posted
- Test for multiple types of comment boxes on a single page
- Fix failing test
- Create FTO issue

**Week 3 (Dec 15 - Dec 21)**

- Write system test to confirm the functionalities below work appropriately:
- Editing/Using old comments (edit, delete, flag, react)
- Editing/Using comments just posted
- Fix failing test
- Create FTO issue

**Week 4 (Dec 22 - Dec 28)**

- Write system tests to confirm
- Editing/Using comment response (edit, delete, flag, react)
- Editing/Using comment response just posted
- Fix failing test
- Create FTO issue

### Phase 2 (Bug Fixes)

**Week 5 (Dec 29 - Jan 4)**

I noticed a couple of bugs with the comment editor while drafting this proposal, so I would like to start working on them for the bug fixing phase of my internship period. ![image description](/i/41489.gif "Peek_2020-11-03_08-05.gif")

They include:

- Include a button to preview a note before publishing
- Fix publish button not working when bullets from toolbar are added
- The first modification to edit content moves the scrollbar to the bottom of the page.
- Provide functionality to add new row to table already included. Presently, it is difficult to work with tables in the comment editor because once added, once cannot modify the structure, so I would like to include the possibility for one to add or remove a row or column to an already existing table (feature)
- Create FTO issue

**Week 6 (Dec 5 - Jan 11)**

- Ensure comment likes are working properly (Issue #5113)
- Fix drag and drop functionality for comment editor (Issue #8670)
- Create FTO issue

**Week 7 (Jan 12 - Jan 18)**

- Remove templates button to simplify comment editor
- Ensure Recovery is consistently working in all editors.
- Create FTO issue

**Week 8 (Jan 19 - Jan 25)**

- Make all comment editor toolbars consistent for all variants (Issue #8475)
- Provide ability to add a main image for the question editor
- Create FTO issue

**Week 9 (Jan 26 - Feb 1)**

- Add button to preview before publishing to research note editor and question editor
- Fix add image via link not working bug for wiki, comment, and reply to comment editor
- Fix large images added extends beyond the on wiki editor![image description](/i/41494.gif "peek2.gif")
- Create FTO issue

**Week 10 (Feb 2 - Feb 8)**

- Ensure that all comment editor variants work properly
- Add toggle button to display markdown for wiki editor when writing
- Ensure formatting button on comment editors on the same page are independent
- Create FTO issue

### Phase 3 (Code Refactor)

**Week 11 (Feb 9 - Feb 15)**

- Reorganize comment editor code and code architecture in order to reduce redundancy and ease maintenance in future
- Create FTO issue

**Week 12 (Feb 16 - Feb 22)**

- Discuss with the mentor whether or not it is okay to create a new library for the comment editor sub-component
- Create FTO issue

**Week 13 (Feb 23 - Mar 1)**

- Fix any further bugs
- Make further suggested improvements
- Create FTO issue

## Needs

- I would appreciate regular feedback on pull requests I make
- I would also appreciate the availability of mentors to help assist in areas I need help with

## First-time contribution

I have made the following contributions to the publiclab/plots2 repository so far:

1\. FTO issues I opened

- Change Ruby Version in ReadMe

[https://github.com/publiclab/plots2/issues/8547](https://github.com/publiclab/plots2/issues/8547)

2\. My first PR

- Remove c9 instructions from ReadMe File

[https://github.com/publiclab/plots2/pull/8515](https://github.com/publiclab/plots2/pull/8515)

3\. Other PRs

- Blog Redesign

[https://github.com/publiclab/plots2/pull/8608](https://github.com/publiclab/plots2/pull/8608)

- Fix double pagination

[https://github.com/publiclab/plots2/pull/8689](https://github.com/publiclab/plots2/pull/8689)

## Experience

Throughout my software development journey, I have learnt to build applications involving HTML/CSS, Javascript, Jquery, Ajax, Java, Python, Php, and have built applications using frameworks like Angular, Django, Laravel, and Spring. The projects I've built using these languages include company projects, personal projects, and some freelance projects. Some of my personal projects include:

1\. A Project Management System (Php)

[https://github.com/Cadreia/project-mgmt-system-laravel](https://github.com/Cadreia/project-mgmt-system-laravel)

2\. A Movie Informative Client App (Typescript)

[https://github.com/Cadreia/movieDB-app](https://github.com/Cadreia/movieDB-app)

3\. A Fruit Quality Checking System (Python)

[https://github.com/Cadreia/fruit-grading](https://github.com/Cadreia/fruit-grading)

While I worked on all of the above-mentioned projects, I gained relevant knowledge and skills in building both the backend and frontend of web applications, making use of REST APIs and making them work well together. I also got acquainted with MVC design principles, building features and fixing bugs I am willing to put in all the effort required to see that this project is implemented properly and to the best of my ability.

## Teamwork

I've been an intern at a software company where I joined the team of developers on one of the company's projects as a front end developer. Then, I took part in developing the front-end of the application, implementing new features, and fixing existing bugs.

There, I realized the essence of constantly communicating with the members of my team, the Project Manager, and knowing I can always seek assistance from others when the need arises.

It was an ideal experience for me because I worked with project management software to keep track of tasks I was required to work on and gave weekly feedback on my progress. I also made sure to assist my colleagues whenever the need arose.

# 

# 

## Passion

Being a contributor to an open-source organization such as Public Lab has been a new and exciting adventure for me! My passion has always been and still is to make software development and open source contributions much easier for those around me to participate and build on than it ever was for me.

I hope that with the experience I have so far and with the knowledge I still hope to gain on contributing to an open-source organization such as this, I can join others, create a workshop or start a program of my own that creates a vast awareness of the open-source community and helps young developers get started as easily as possible.

# 

# 

## Audience

Public Lab is a community where members collaborate to solve environmental problems. The public lab comment editor subcomponent on the [PublicLab.org](http://PublicLab.org) website is frequently used by community members to make their work and activities public. They are required in posting research notes, events, blogs and even questions to be asked.

This set of improvements, bug fixes, and refinements to be done on the comment editor as a result of this project aim to make it bug-free and convenient to use for users, developers and will offer an overall much-improved experience.

This project is beneficial to the end-user in that system tests to be written will ensure system behaviors are preserved, and developers will see that these proposed changes made to the code will result in it being more compact, readable, and maintainable.

# 

## Commitment

I understand this to be a very serious commitment, so my intention is to commit a full 40-hour work period per week, working for a minimum of 8 hours a day on weekdays (Monday to Friday). I am very focused and persistent, thus I believe I would add great value to this project if I am chosen to work on it. I look forward to working on this project not just as an Outreachy intern, but also when the internship period is over.

Public Lab is making a great impact not only on environments but on open source as well, and I would like to take part too in contributing to the change they're bringing.