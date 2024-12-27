---
title: "Wiki Discussion"

tagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, soc-2017-proposals, response:13975, gsoc-2017-accepted, first-time-poster'
author: Ashan
path: /notes/Ashan/03-13-2017/wiki-discussion.md
nid: 14010
uid: 502016
cids: 16354,16364,16406,16440,16491,16494,16500,16502,16519,16520,16541,16552
---

![](https://publiclab.org/public/system/images/photos/000/019/953/original/main_image.png)

# Wiki Discussion

by [Ashan](/profile/Ashan) | March 13, 2017 19:36

March 13, 2017 19:36 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [gsoc-2017](/tag/gsoc-2017), [soc](/tag/soc), [soc-2017](/tag/soc-2017), [soc-2017-proposals](/tag/soc-2017-proposals), [response:13975](/tag/response:13975), [gsoc-2017-accepted](/tag/gsoc-2017-accepted), [first-time-poster](/tag/first-time-poster)

----

---------

## About me

**Name:** K.A.A Priyadarshana

**Email:** [ashanpriyadarshana@gmail.com](mailto:ashanpriyadarshana@gmail.com)

**Gitter nick:** aspriya

**LinkedIn profile:** [https://www.linkedin.com/in/ashan-priyadarshana-25425282/](https://www.linkedin.com/in/ashan-priyadarshana-25425282/)

**Affiliation:** Bsc(Hons) in Information Technology, Faculty of Information Technology, University of Moratuwa.

**Location:** Colombo, Sri Lanka (GMT +5:30)

**Phone:** +94711005491

## Project description

### Abstract/summary (<20 words):

Making wiki pages more interactive and discussion-oriented by adding features like commenting, suggesting and tagging special parts of wiki.

### Problem

Wiki pages are web pages that anyone can create or edit. We use them to collect information, documentation and instructions on projects. At present we can create wikis, edit them and associate tags with them. But we can not add comments to this, can not make suggestions, can not tag a user for a special part in the wiki. We can make wikis more alive by implementing these features. And as shown in the above diagram, implementing these as in Google docs would be more attractive. For this I will use the `publiclab/inline-markdown-editor`.

---------

###Implementation
After integrating wiki pages with `inline-markdown-editor`, page of a wiki will be broken down into sections. Then after that i will develop so users can view comments, view suggestion, make comments and make suggestions on those each section. Mockups for those functions are as follows.
####Active Sections
When mouse is moved over sections, those will get active and will have a emboss effect to indicate that. And then links/buttons for editing, commenting/suggesting, view comments and view suggestions will be displayed below that active section. A mockup is as follows.

![image description](https://publiclab.org/system/images/photos/000/019/954/large/active_paragraph_and_view_comments_moqups.png "active_paragraph_and_view_comments_moqups.png")

In this mockup second paragraph is the active paragraph (mouse pointer is above that section). And also the way of showing comments of a paragraph is also show here (i.e comments related to fourth paragraph is displayed).

####Commenting
When clicked the `commenting icon`, an inline form will appear below the related paragraph. A user will enter his/her comments and save. And those comments will be shown as in previous image. A mockup to show the entering of comments is as follows.

![image description](https://publiclab.org/system/images/photos/000/019/962/large/new_comment_2.png "new_comment_2.png")

####Suggestions
When clicked the `pencil` icon, an inline form will appear below the related paragraph. A user will have the ability to edit that section or to make suggestions for that section using this appeared form. And all the contents of the section will automatically be present inside the form, so that the user does not have type content of section in order to edit or suggest. A mockup of that functionality is below.

![image description](https://publiclab.org/system/images/photos/000/020/022/large/make_a_suggestion_.png "make_a_suggestion_.png")

####Viewing suggestions
When clicked the `view suggestions` button, all the suggestions will get applied to the paragraph and those suggestion parts will be displayed in red color. And all the suggestion will get a number such as `[ 1 ]`. This will happen automatically so the person who make the suggestion does not have to worry about it. And then there will be options to accept, resolve, and discard those suggestion. A sample mockup is as follows.

![image description](https://publiclab.org/system/images/photos/000/019/965/large/view_suggestions_2.png "view_suggestions_2.png")

---------

### Timeline/milestones

### ![image description](https://publiclab.org/system/images/photos/000/019/918/large/Selection_303.png "Selection_303.png")

---------

### Needs

_Additional notes or documents regarding wikis would be great. And I need guidance from Public Lab director board and from my mentor._

---------

### Setup

_Yes I have forked the publiclab/plots2 repository and I have a running version in my local. And I pulled all the updates with remote repository._

_[Forked repository](https://github.com/aspriya/plots2)_

_And I have setup the `publiclab/plots2` in an `AWS EC2 instance`. I will use this to show my work to mentors. This will be a great help for me and for my mentor to discuss by looking at a live version of `publiclab/plots2` with what I have implemented. Following is the IP address of the the account and to view it you can click the link._

_[http://35.161.83.45:3000/](http://35.161.83.45:3000/)_

---------

### Experience

_Before I attend to university I did course on higher diploma in IT. In there I learned Java, C#, PHP and other most Basic Web Technologies. I learnt fundamental web building blocks from PHP and from codeigniter framework. At University, I moved to ruby and Rails as a web development framework. I have experience in technologies such as Ruby, Java, JavaScript, HTML, CSS, GIT and frameworks/libraries such as Java SDK, Android SDK, CodeIgniter, [ASP.net](http://ASP.net), Ruby on Rails, etc. I also managed to work part time at a company called Vesess which is specialized in web application development, during the 2nd year of my undergraduate course. I mostly worked with technologies like Ruby, RoR, MySQL, GIT, JavaScript etc. In this time period I developed `ApistaCRM` by using ruby on rails And now I am an Intern at Vesess and contributing to project `Hiveage` by improving its test cases. Following is the link for `ApistaCRM` that i have developed._

[ApistaCRM](http://52.24.212.150:3000/users/sign_in)

_Yes I went through the contributor guidelines and I have good knowledge about Git and I am very much familiar with both GitHub and GitLab. And yes, I have almost contributed to Public Lab_

---------

### Teamwork

_Me as a undergraduate student, teamwork is not a strange thing. In the university for all the academic projects we work as a team. In first year we developed a tv-remote and computer controllable wall clock with another five students. And in second year we developed a mobile app which dispalys web sites attractively, human friendly and which removes advertisements.Both of these projects were one year long and were 5 member groups. So I know that there are barriers, failures and conflicts when working with a team, and also with my experience I know how to manage difficulties and how to communicate with team mates positively._

---------

### Passion

_As a deep nature lover and an observer, Public Lab always interests me. I always admire the work you guys do. And I started my open source path by this. The first feeling of getting a PR accepted was gained by Public Lab. So Yes, For sure Public Lab always interests me._

---------

### Ongoing involvement:

These are my previous contribution to the project

[https://github.com/publiclab/plots2/issues/1260](https://github.com/publiclab/plots2/issues/1260)

[https://github.com/publiclab/plots2/pull/1356](https://github.com/publiclab/plots2/pull/1356)

[https://github.com/publiclab/plots2/issues/1358](https://github.com/publiclab/plots2/issues/1358)

---------

### Commitment

_Yes I Understood that Importance of this project and I can spend required time period to complete particular task without being time oriented. and since my mentors and me are in completely different time zones I can keep my communication with my mentor organization without any interruptions and delays._