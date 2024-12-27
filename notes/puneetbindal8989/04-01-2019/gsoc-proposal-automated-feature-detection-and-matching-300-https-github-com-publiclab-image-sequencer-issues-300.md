---
title: "GSoC proposal: Automated feature detection and matching #300 https://github.com/publiclab/image-sequencer/issues/300"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals'
author: puneetbindal8989
path: /notes/puneetbindal8989/04-01-2019/gsoc-proposal-automated-feature-detection-and-matching-300-https-github-com-publiclab-image-sequencer-issues-300.md
nid: 18928
uid: 580556

cids: 

---

# GSoC proposal: Automated feature detection and matching #300 https://github.com/publiclab/image-sequencer/issues/300

by [puneetbindal8989](../../../profile/puneetbindal8989) | April 01, 2019 15:11

April 01, 2019 15:11 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals](https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals) You can delete this line once you've started filling it out.)

---------

## About me

_Tell us about yourself!_

_Name : Puneet Bindal_

_Github: __https://github.com/rockstar777_

_GCI Mentor 2018 Public Lab_

Student year: 3rd year student_  
_

Field of study: Computer Science Engineering, B.Tech_  
_

  
**Affiliation** Indian Institute of Information Technology, Vadodara

**Location:** Gandhinagar, Gujrat

## Project description

_Here, you don't have to have a complete proposal when you begin. Just tell us some of your ideas and we'll help you refine it into a full proposal gradually!_

### Abstract/summary (<20 words):

Enhancement for Image-Sequencer, A module that detects the object features of an image and match them with another image.

### Problem

_What problem(s) does your project solve?_

_Computer Vision problem_

_issue no. #300 image-sequencer __https://github.com/publiclab/image-sequencer/issues/300_

### Approach

To solve this issue my approach is get around the best js libraries.

---------

  
We have 3 opensource most used libraries for computer vision i.e :-

1\. Opencvjs

2\. Jsfeat

3\. Trackingjs

  
---------

  
To find the best library lets find the difference:-

  
Opencv.js has only feature for object detection using HAAR Cascades. The tracking.js library(Light weight library ~ 7Kb ) provides the BRIEF (Binary Robust Independent Elementary Features) descriptors and its JSFeat extension---ORB (Oriented FAST and Rotated BRIEF).Which means that even if you rotate an object, the algorithm can still detect it. Moreover, the JSFeat library provide an example using the image pyramid, which is scale invariant too.

  
Implementation: 

  
---------

  
  
  
### Timeline/milestones

_Break your project up into small projects -- one per week!_

See this page for guidance on breaking your plan up into small, self-contained parts: [https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration "https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration")

  
### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

### First-time contribution

\_Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already made it? We're eager to see that you've had a good experience making a small initial contribution to our site. Please check out our welcoming page: \_

[https://code.publiclab.org/#r=all](https://code.publiclab.org/#r=all)

And paste in links to your initial contributions here so we can see!

You can use links like these to show recent activity:

- Comments, to show overall community involvement (like helping others): [https://github.com/search?utf8=✓&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues)
- Open issues: [https://github.com/publiclab/plots2/issues/created\_by/jywarren](https://github.com/publiclab/plots2/issues/created_by/jywarren)
- Closed PRs: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed)

---------

### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._

---------

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

---------

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

### Audience

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_