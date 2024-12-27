---
title: "GSoC!proposal: Translation System Refinements"

tagnames: 'software, soc, lat:28, first-time-poster, lon:76, zoom:6, gsoc-2021, gsoc-2021-proposals'
author: YogeshSharma01
path: /notes/YogeshSharma01/04-04-2021/gsoc-proposal.md
nid: 26136
uid: 749112
cids: 28481,28485,28497
---

# GSoC!proposal: Translation System Refinements

by [YogeshSharma01](/profile/YogeshSharma01) | April 04, 2021 18:33

April 04, 2021 18:33 | Tags: [software](/tag/software), [soc](/tag/soc), [lat:28](/tag/lat:28), [first-time-poster](/tag/first-time-poster), [lon:76](/tag/lon:76), [zoom:6](/tag/zoom:6), [gsoc-2021](/tag/gsoc-2021), [gsoc-2021-proposals](/tag/gsoc-2021-proposals)

----

# GSoC 2021 Proposal: Translation System Refinements

---------

## About me

Name: Yogesh Sharma

Personal Email: [lucksharma2017@gmail.com](mailto:lucksharma2017@gmail.com)

Github: [https://github.com/YogeshSharma01](https://github.com/YogeshSharma01)

Affiliation: Bharati Vidyapeeth's College of Engineering, New Delhi

Location: New Delhi, India

Timezone: Indian Standard Time (UTC +05:30)

## Project description

### Abstract/summary (<20 words):

In plots2 internationalization (i18n) system exists but lacks a consistent workflow for importing new translations, as well as some issues such as HTML parsing and UI shortcomings.

### Problem

What problem(s) does your project solve?

Currently, the internationalization system exists but there are a few problems such as issues with CSS alignment, missing translations, improper HTML parsing so it's difficult to see proper localization support in [publiclab.org](http://publiclab.org/) which might trouble the users across the globe due to lack of multi-language support. All these problems will be solved by this project.

Note: All the mockups/prototypes and code samples are just for reference. They can be revised/updated according to the requirements of the project, moderator preferences, or suggestions given by mentors.

### Project Goals

### 1\. Refine the custom translation helper

We need to refine this translation helper. The existing helper looks something like this

![](https://lh6.googleusercontent.com/ozjsNmuFkeyPdn45h0__7dau7cFHPnnLGcaJ4CqTL5EMk1BjS2Mbm5xPaTBH03Eww2g6BkG6xgyZICoGk3Sw4xSlNsZ8NX-_yhuH_sHTQG4MGRxv8ewZ9k-xjN0YeAwyobPsCfx-)

Ways to refine the translation assistant above...  
As for now, the translation link is not working yet it is directed to 404 pages.  
![](https://lh6.googleusercontent.com/d70EAfoqIsjo0KkBBBuKzm31jB1T8bcY0N8y3nvO_vafa_9bLmPSYxoZ_vpl0BibIGD5JK9b2qKCSCfCS74iO4OU9CcyYucnnmW7IXMBmVNRQUjGe-1h5Cq3Njg7R7urq5tAVoVt)

\[Under progress\]

### 2\. Resolving HTML parsing issues

1. Here all we need to make sure we are within the HTML attribute and not include too much HTML in these attributes.

3\. Improving CSS of missing translation prompt

Well Initially, CSS translation information needs to be adjusted to the items below

HEADER  
In the header Currently, translation information is provided in a separate tag, moving it to the title tag on the topic will fix the problem. This problem, therefore, arises as a result of Prompt's rendering of the translation.  
![](https://lh6.googleusercontent.com/UCUpRk9HuZlb2O4PquwvqXKvWz0c88xv3Un4LT6NDzQgH7w9TUpMIWsHQ3walECzTkz0nnOAZuoAfV-yD96r3C5JT5UhsElj1HKXNOtY1g6IX4yjHl0JmSHyv8vhv1qM8X6CkP5G)

![](https://lh3.googleusercontent.com/WUXZRVOkLpLQB9r7jiX3VR-00wCAe6ePtFV6wknJshy4ckkOe1JavGaR9sp6c1IqMz9WPRBET_MCK5o2VSOGnTryTfpyBchesG-iU-1Qhgf8gfXB82kLDlMFUg8vwDo7QIoKXF4R)

Share your work dropdown

![](https://lh3.googleusercontent.com/rtAMZoPI-knaNkVpcuk-u1ERZghCpFiCI_OLleQRqIICfv_msbIAg8FS3f_NI1gXHe96C_m0XiLBQcuWgu5hFcFkgl5aoM0AqurSlWA6tvK3Ws8NsZHt-kTv64V_Z5ylmtBRCCuP)  
In this share your work dropdown has a bug while we inspect the web page this dropdown moves upwards under the navbar.  
![](https://lh3.googleusercontent.com/2xsbS3HBzKlkr9XbiIdPXWcmfp-NSmJyE6Pot0L4cce5EpHuLlFAMg9L3cVJ7oQnx1QDEM0iipB0sZH6KFRC_0AY7rmaVpmSZt2FiVnEjYdcxRPgQNQp9pNA4Nc0csZnQb1JaXnD)

Profile dropdown

![](https://lh3.googleusercontent.com/CSy2vV9DN7AaNnipeOHf63zCdLJkIM4JyxhlHNeRFeAFNGj_-wHB0-FhVLKv0OKn6s-CpX18jjSLhGEUDnrQ3LbV-X4tc8omPz3gZ-AEIDUhfCWiFjXk1Vk7RrB9wDLcLoc49bTK)

The Wiki

![](https://lh3.googleusercontent.com/lpEpjaiYSmQ6xqLW66CBX4GhhbmQ-6CrY3yzvwLwDAxZ60dS0hY5mEgzEMbT9VmNtPta2tQ5trUvxEVCJTBNn9veJXcVuUR3lyK-xQpvi1w61-jBIUc5Y2HdYQpKDyMzt_zAC9Tj)

![](https://lh5.googleusercontent.com/bO_QDuFYDvZcU-qcC5-ufm7zySeRA0DB0kigYpanzmGvQZeLzskf2BTf_dreJuiKwZdlx65cCNLchcBb_QX1tFBrF8yHug4o0-earBuSOYh0Crn9_hky7JiaeE7rPKZ2npWb6eei)

Footer Language-Dropdown  
Currently, in the footer where we select the language to be translated from the Language dropdown, it should appear within the footer section in an upward direction but it comes up and crosses the footer section downwards.  
![](https://lh5.googleusercontent.com/Pu68gSYvc9fCo719ENo_FAagYMT4K5UN2t9RO8tqDnVPrSKwBuHLfEBte0CCs6ZN30_y3_DlLBHom86mfhAsAyiyfLiESdRPsAssUXc0UQDvw5qjDt4tfG1lv63QWW6AcbYA1OkY)

### 

### 4\. Page to recruit translators and document

Below are some of the changes that will be made as part of the project -  
\[Preview under process\]  
Header  
The same topic to follow.

Translation Guide:

This section will list all the details - in relation to translation projects and the nature of the work done and all previous details to be considered.

Interest Form:

This section will contain a form for those interested in joining as a translator, who need to provide basic information on the form for details to be reviewed and verified. And the process will be done.

Footer  
The same topic as follows just needs to fix that language section bug.

\*\*  
\*\*

5\. Write and provide a workflow guide for code-related tasks for translation import

- Write in Readme itself how internal performance works on the platform.
- Along with that, use GitBook to record individual job details.

6\. Improve workflow with first-time problems only based on the translation

- Easy self-testing translation
- Prepare drag-and-drop request for update: New translation template, add translation mark to the problem. And the guidelines on the PR template if it is for translation. It will help to separate translation and PR issues. Translators can submit comments to the PR itself for review by the translation community and maybe compiled over time.

Places where the translation is needed to be added.

[https://publiclab.org/post](https://publiclab.org/post): As this page is very important and helps members of the public to create posts, edit their writing so there is a need to submit translations to this page.

Footer: The website footer needs to be translated as a header.

### Timeline/milestones

![](https://lh5.googleusercontent.com/gmyqNOaGDo46ZQd74caiuulYEnnJK1NFReMhS96RSfsjVW7iLQtJAAEpV2d3cHAfwRUXYUAg4Rdx2Ve1_7jATzSoY13YAguGG481L7YaJZfNoemOhzDkBEYvGXCSs30dKThAjCB7)  

Needs  

_I will need guidance from my counselors. suggestions or feedback from all members of the PublicLab will be positive and will help me build, complete my project and contribute to the community._

### contribution

I personally started my contribution by working on the first issue only on Image-sequencer and community-toolbox, and since then the Public Lab community has been supporting me. I have been an active member of Public Lab for the past year.

Also, I have done a good number of contributions in the Public lab in the community toolbox. And helping new fellows in contribution fix issues along with them participating in discussions, welcoming new contributors, and much more.  
PRs in community-toolbox  
1\. [New Navbar added with the logo of PublicLab (](https://github.com/publiclab/community-toolbox/commit/8b2530f2a7c7d9da696fc4e9ed1fda6a87ea341b "https://github.com/publiclab/community-toolbox/commit/8b2530f2a7c7d9da696fc4e9ed1fda6a87ea341b")#420)[merged]
  
2\. [Public lab dependency chart (](https://github.com/publiclab/community-toolbox/commit/0165b1bc9cdc075e701b29cad032b0e6aaf7ee4b)#424)[merged]

3\. [Dependency chart is added to the navbar (](https://github.com/publiclab/community-toolbox/commit/022ddaa57444c140a7ab06bb17caa28850aa2366)#434)[merged]

4\. [Language section added to home page (](https://github.com/publiclab/community-toolbox/commit/2632379dff34257955bfcb4ff69f59272b51e411)#422)[merged]

5\. [Formate of web page is fixed (](https://github.com/publiclab/community-toolbox/commit/18e5aa3f30b8dae02a37950901d29ce2a864a03e)#441)[merged]

6\. [Language section is added into the navbar (](https://github.com/publiclab/community-toolbox/commit/eeecfa61f4f2187464c7f7936f4ac5473a3e182e)#447)[merged]
PR in Image-sequencer  
1\. Link Updated(publiclab/chatroom link is add in index.html page)(#1627)[merged]

---------

### Experience

I am currently a 4th-year student at Bharati Vidyapeeth's College of Engineering, New Delhi, and have been doing web development right from the second year of my college. I have worked on projects based on JavaScript, React, and Ruby.

---------

### Teamwork

Well Regarding Public Lab, I have gained a lot of experience and guidance from every member of the PublicLab especially [](https://publiclab.org/profile/jywarren "https://publiclab.org/profile/jywarren")@jywarren and Working in Public Lab has been a great journey for me till now and I hope the same for the future as well.

---------

### Passion

I started working with Public Lab as I really liked the concept of the public lab, the work they do for the environment, and the young people who open the source. Having a speaker where people can share their ideas and environmental research work on other projects like community toolbox, photo sequence. This reflects the diversity of nature and cares for the environment. All of this encourages me to work with the community.

### Audience

\_Plots project helps every user as it provides users to share their ideas in terms of posts and comments and also gives the ability to translate the website contents to their native languages. \_

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day today!_

\_Yes, I fully understand that this is a huge commitment and I am able to devote 6-7 hours every day to complete this project. According to the college education calendar, I have no dispute with the timeline and if anything arises I will be sure to inform my counselors about it.  
\_

\_  
\_