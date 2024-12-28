---
title: "GSoC Proposal:Editor repair and fortification"

tagnames: 'markdown, first-time-poster, soc-2020, soc-2020-proposals'
author: keshavgarg234156
path: /notes/keshavgarg234156/03-06-2020/gsoc-proposal-editor-repair-and-fortification.md
nid: 23092
uid: 613595
cids: 26437,26453,26460,26461,26478,26543,26552,26553,26554,26569,26579,26580,26581,26591,26617,26618,26667
---

# GSoC Proposal:Editor repair and fortification

by [keshavgarg234156](/profile/keshavgarg234156) | March 06, 2020 13:41

March 06, 2020 13:41 | Tags: [markdown](/tag/markdown), [first-time-poster](/tag/first-time-poster), [soc-2020](/tag/soc-2020), [soc-2020-proposals](/tag/soc-2020-proposals)

----

# About me:

---------

**Name**: Keshav Garg

**Email**: [KESHAVGARG234156@gmail.com](mailto:KESHAVGARG234156@gmail.com)

**Github:** [https://github.com/keshav234156](https://github.com/keshav234156)

**Affiliation**: Indian Institute Of Technology, Mandi

**Location**: Mandi, India

**Degree**: Bachelor of Technology in Computer Science and Engineering

**Timezone:** Indian Standard Time IST(UTC + 5:30)

# Project Description:

---------

PublicLab.Editor is a general-purpose, JavaScript modular library for rich-text posting, which provides an author-friendly minimal, mobile/desktop (fluid) interface for creating blog-like content, designed for [PublicLab.org](https://publiclab.org/) .It's built on the Woofmark library which is full of bugs. The projects aim at fixing these bugs, Interface improvements, and Development process refinements.

# Problems:

---------

### Part 1: Potential Bugs

1. **Bold and Italic formatting bug:** [https://github.com/publiclab/PublicLab.Editor/issues/307](https://github.com/publiclab/PublicLab.Editor/issues/307 "https://github.com/publiclab/PublicLab.Editor/issues/307") We are facing this bug due to [https://github.com/bevacqua/woofmark/blob/master/src/html/wrapping.js#L19-L21](https://github.com/bevacqua/woofmark/blob/master/src/html/wrapping.js#L19-L21 "https://github.com/bevacqua/woofmark/blob/master/src/html/wrapping.js#L19-L21") . Only the HTML mode is using the wrapping function. The Markdown mode is using another function and it works perfectly in Markdown mode. Solving this bug would involve introducing the woofmark in src code and making changes to this function. This will also help in solving other bugs.
2. **Converting text to Header and back again**: In the Rich view, we can't convert Header back into text. We should fix this behavior. Also, we can only add header up to "h4" tag. We should increase it to "h6".
3. **Table Borders** : Borders of tables are currently not shown.
[![Screenshot_from_2020-03-07_16-26-09.png](/i/38728)](/i/38728?s=o)
This should be changed to 
[![Screenshot_from_2020-03-07_16-24-47.png](/i/38730)](/i/38730?s=o)
4. **Exiting out of code module:** Right now there is no way by which we can start a new paragraph after we have used code module. We can solve this such that pressing the respective hotkey exits the module like in case of quoted text.
5. **Inserting Hyperlinks and File Attachment:** Default text that appears after inserting the Hyperlink and Attachment is link text and null respectively. The user most probably wants to change the name other than the default text.If we try to change there name only the first alphabet of the word is identified as link Eg. [W](https://github.com/publiclab/PublicLab.Editor/issues/307)ord (here blue represent what is identified as a link).We can improve it by asking the user to enter text and link.![](https://lh4.googleusercontent.com/_PTLWraru80wXuNNlbBBORBaamlOIMKTw2x9KFSTBGXNZhHJOcwFXBRjPftWcrkq44DTaSE8nkFCCLmh8er8svOJnNykBOKQGmQCmS0iypulDgdnjg_NHOgdf4LHzS3N4HwFCT1Y)

6. **Decentering a centered text**:If a text has already been centered by the user(and it may happen sometimes by mistake ) then it can't be uncentered. Also if you want the further paragraph to be uncentered then it's not possible now.
7. **Error Showing even after the User has removed the text causing error** :  
![](https://lh3.googleusercontent.com/3pz-Io41pSP2EusFpj6pDSOyd8QAAe4-JUTP_-__lZWsYAwdlth-szdjFj5frDZyEMUk0nTrQqQghhzlCBrnXtfaioZ96P9Nw-rk87JrtFqTq36tEE9XqiHIDCqLM1HepAuF4-so)

### Part 2: Interface and General Improvements
1. **Adding new Custom Insert Modules.**
 Inline Power tags are used to insert a list of notes for a given tag eg. [<tagname>](/tag/<tagname>). But it’s difficult for a non-programmer to know the syntax for inserting it in Markdown. So we can start with making separate modules for this, which will insert the required syntax in Markdown.
<br>
**Wikis, Notes, Nodes, Activity, Question** :

[![Screenshot_from_2020-03-26_00-13-16.png](/i/38733)](/i/38733?s=o)

It would be a separate module. It will first ask the user What they want to add? And they can select the options[Wikis, Notes, Nodes, Activity, Question] from the dropdown. Similarly, they will give input of How they want it to be inserted [List, Grid]. The third input would be the tag. Tag search will be similar to that of already present at PublicLab.org

[![Screenshot_from_2020-03-26_00-22-57.png](/i/38732)](/i/38732?s=o)


Then after pressing the add button, the relevant syntax would be added to Markdown mode.
<br>
2. **Inline Maps** : 
Similarly, we can make one more separate module for inserting inline maps which would take input as Latitude, Longitude, Zoom level and Preset Layers from the user.



[![Screenshot_from_2020-03-26_00-56-51.png](/i/38731)](/i/38731?s=o)


 

2. **Implementing the feature of darkening of all the icons**: Implementing the feature of darkening of all the icons when it in use. Eg. The bold icon would be darkened when in use. Similar to the feature that is present in Google Docs.
![](https://lh4.googleusercontent.com/CRUw3oVYOe1AGSGy0Sexl2cf2dTGJ1UBjbJ3Ust2K66VoZbOXHCV-1o3SrMzoX9cv8f9mFSnN_2fSYR1YQ2Sg0VAW4LueOO91JNtg4IwSCzhJtvKd8Q23ZIt2nQ9lKULcg2hR3zE) We can easily work on this feature after we have introduced woofmark in the source code of PublicLab.Editor.We can get status of whether we are using a particular module from [https://github.com/bevacqua/woofmark/blob/master/src/markdown/boldOrItalic.js#L15-L35](https://github.com/bevacqua/woofmark/blob/master/src/markdown/boldOrItalic.js#L15-L35) and then can implement the feature of icon highlighting for all modules so that it becomes easy for users to know which modules are currently in use.
3. **The stickiness of toolbar and Improvement** :  
The idea of a floating toolbar was introduced so that in case of long notes users don't have to scroll to the end of the page to use the toolbar. But it keeps floating even outside the text area giving a bad user experience.
![](https://lh3.googleusercontent.com/0YUT9slt4Cls403WCz9jZMDjAPVZl0CKQi6jT3y-ysFkele4W1F2QEqpch0-Dsqu_1ji8xOuH9lZjVw1hk-HQjJ7P2M_sd2UfgYBi0TRYGaYsWhJrBPUg1Tu367AKhTYcSd5X2Nr)
The better way would be to fix the toolbar at the bottom and introduce a vertical scrollbar in a Rich mode as we have in Markdown mode.
4. **Design optimization for the Bottom bar in Mobile view**: The bottom-bar occupies a lot of space in the mobile view. We should optimize it to look good in the mobile view.![](https://lh3.googleusercontent.com/ivHzHD3wXwR_WIakL9wtGAIpLXikAZYSyZXCLcajJvBdJGat8gzW0sjGxN_JG7vRQVqR_uUE-670yhI12z5C6m3sQH36JRl9-bxYIrGwdc8VKE0AvNPfnuanpuQ0V15fA4oZftrj)
5. **Making toolbar Responsive**: Toolbar is cropped in Mobile view and small Screen View.![](https://lh3.googleusercontent.com/X_51OeSCIAjjxxqXMIk5iYGP4nwM-1RsO69Cvp2o3AsQ0PPQGKmv8GZRar7ogRC2ZVmzGM4LAOtAWu8-z1t2je7UuKL83yzXd7Came31-FPovDuxAENIIRxcGJs3KUbG7BjA2UUC)

### Part 3: Development process refinement

1. Integrating the **jest-puppeteer for testing** and writing tests in
a similar way to that implemented in Image-Sequencer.jest-puppeteer
facilitates Keyboard Typing and Mouse simulation so would be best
suitable here as well.
2. Adding a test for Bold and Italic Formatting Bug.
3. **Eslint and Husky**: Eslint is a tool for identifying and reporting patterns faced in ECMAScript/JavaScript Code, with the goal of making the code more consistent. In order to force the contributor to use Eslint before they commit their code, we will use Husky.

## Timeline/Milestone:

---------

#### May 4 -  May 25 (Community Bonding Period)

Get to know the community in a better way and read documentation related to Woofmark, Eslint, Husky and jest-puppeteer

#### May 26 - June 1 Week - 1

Setting up Eslint and Husky for automatic linting

#### June 2 - June 8 Week - 2

1. Removing woofmark as a node module and including it in PublicLab.Editor source code.
2.  Making toolbar Responsive

#### June 9 - June 15 Week - 3

1. Integrating the jest-puppeteer for testing


#### June 16 - June 22

End Semester Examination

#### June 23 -June 29 Week - 4

1. Fixing Bold and Italic formatting bug
2. Adding test For Bold Formatting
3. Adding test For Italic Formatting

#### June 30  - July 6 Week - 5

1. Phase-1 Evaluation
2. Creating FTOs from the work completed till now

#### July 7 - July 13 Week - 6

1. Implementing the feature of darkening of all the icons
2. Fixing Stickiness of toolbar and Improvement

#### July 14 - July 20 Week - 7

1.Fixing Inserting Hyperlinks and File Attachment 
2.Fixing exiting out of code module
 3. Fixing converting text to Header and back again bug.

#### July 21 - July 27 Week - 8

1. Adding new Custom Insert Modules - Wikis, Notes, Nodes, Activity, Question

#### July 28 - August 3 Week - 9

1. Phase-2 Evaluation
2. Creating FTOs from the work completed till now

#### August 4 - August 10  Week - 10
1. Adding new Custom Insert Modules.-Inline Maps.

#### August 11 - August 17 Week - 11

1. Design optimization for the Bottom bar in Mobile view
2. Fixing the error Showing even after the User has removed the text causing error.
3. Decentering a centered text

#### August 18 - August 24 Week - 12

1. Writing Final Project Report
2. Complete the remaining work(if any)
3. Create FTOs from work done till now

### Needs:

---------

While working on the above-mentioned tasks, the review and suggestion from the mentors and the community members at least once a week would be highly appreciable and would be enough to complete the project.

### Contributions:

---------

I have been a part of the PublicLab community since August 2019. It is the community where I started my open source journey by contributing to the Image-Sequencer project.The contribution to  Image-Sequencer repository can be seen here https://github.com/publiclab/image-sequencer/pulls?q=is%3Apr+author%3Akeshav234156+is%3Aclosed+is%3Amerged . In total I have made 14 merged PRs and opened around 18 issues in the Image-Sequencer repository.
For the PublicLab.Editor the contribution to project Include
           1. **Issues opened** : <br>
          https://github.com/publiclab/PublicLab.Editor/issues/428 <br>
          https://github.com/publiclab/PublicLab.Editor/issues/427 <br>
          https://github.com/publiclab/PublicLab.Editor/issues/419 <br>
          https://github.com/publiclab/PublicLab.Editor/issues/400 <br>
          https://github.com/publiclab/PublicLab.Editor/issues/394 <br>
<br>
         2.  **Pull Requests** : <br>
            https://github.com/publiclab/PublicLab.Editor/pull/393 <br>
          https://github.com/publiclab/plots2/pull/7534 <br>
          https://github.com/publiclab/PublicLab.Editor/pull/392 <br>
          https://github.com/publiclab/PublicLab.Editor/pull/395 <br>
          https://github.com/publiclab/PublicLab.Editor/pull/396 <br>
          


### Experience:

---------

Currently I am a second year student of B.Tech from IIT,Mandi.I have been actively been contributing to Image-Sequencer and PublicLab.Editor projects and I am comfortable with the codebase of both the repositories

I was also a GCI 2019 Mentor in PublicLab and was chosen as the best mentor.I reviewed a lot of PRs made by the candidate during the GCI period.

### Audience:

---------

PublicLab.Editor is an important and substantial part of [PublicLab.org](http://PublicLab.org). It's used by all the users who write their ideas,views on various issue. At this point of time it's full of bugs.After completing the project I expect users will have a great experience in writing their ideas/views on various issues.

### Commitment:

---------

I fully understand that completing this big project demands commitment. So to complete this project I commit to spend at least 40 hours per week which can be increased as per the situation and work conditions.