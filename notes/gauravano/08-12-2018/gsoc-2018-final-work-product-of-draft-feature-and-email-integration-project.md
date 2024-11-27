---
nid: 16913
title: GSoC 2018: Final Work Product of Draft Feature and Email Integration Project 
path: public/static/notes/gauravano/08-12-2018/gsoc-2018-final-work-product-of-draft-feature-and-email-integration-project.md
uid: 515081
tagnames: software,gsoc,soc,gsoc-2018,soc-2018,gsoc-2018-final,draft-feature,soc-2018-final-report
---

# GSoC 2018: Final Work Product of Draft Feature and Email Integration Project 

## Project Details

**Project Title:** [Draft Feature and Email Integration Project](https://publiclab.org/wiki/gsoc-ideas#Email+integration+project)

**Project Proposal:** https://publiclab.org/notes/gauravano/02-18-2018/gsoc-proposal-email-integration-project

**Link to GSoC Project:** https://summerofcode.withgoogle.com/projects/#5536963831005184

**Open source Platform Used:** [Github](https://github.com/)

**Github Organization Page:** [Publiclab](https://github.com/publiclab)

**Repository Contributed to:** [plots2](https://github.com/publiclab/plots2)

**Languages/Framework Used:** Ruby on Rails, JavaScript, HTML/CSS

**My PublicLab Profile:** https://publiclab.org/profile/gauravano

--------------

## Abstract/Summary: 
-----------

**Draft Feature:** This feature would allow users to save their research note as a draft so that user can complete it anytime. It would also allow a user to generate a secret link which he/she can share with specific users to have their review of his work.

**Email Integration Project** consists of three major parts - 
1. Reply by Email to comment: This feature would allow a user to comment on the research note or question posted at PublicLab just by replying back to the notification email they received regarding the question. -- Implemented by teammate
2. Weekly Digest: Implementation of feature by which an email would be sent to each user of Public Lab containing his/her liked topics updates. -- Implemented by teammate
3. UI for email notification settings: I have designed the user-interface which would allow users to customize their experience with PublicLab's website. 

-------

## Code Links
------------
**Links to all Commits:** https://github.com/publiclab/plots2/commits?author=gauravano

**Link to related Issues:** https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Agauravano+is%3Aclosed

**Link to Pull Requests:** https://github.com/publiclab/plots2/pulls?q=is%3Apr+label%3Asummer-of-code+author%3Agauravano+is%3Aclosed

Here is an image of the Contribution graph. Find it at this [link](https://github.com/publiclab/plots2/graphs/contributors)

![image description][1]

<br>

### First-timer-only Issues
-----------

[Plots2](https://github.com/publiclab/plots2) has a well-maintained, beginner-friendly codebase, so encourages first-timers who have either haven't contributed to open-source or have very little experience to contribute. It has some great issues labelled as ![example label](https://gh-label-svg.now.sh/label.svg?color=e99595&text=first-timers-only) which make good start for first-timers. I have also made some during the summer. They can found in the link given below.

**Link to `first-timers-only` issues:** https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Agauravano+label%3Afirst-timers-only+is%3Aclosed

----------

## Project Description

Here are the list of features that I worked on throughout the summer of code:

### Draft Feature 
----------------

Draft feature allows users to save their research note as a draft so that user can complete it anytime. It would also allow a user to generate a secret link which he/she can share with specific users to have their review on his work.

![draft_page](https://user-images.githubusercontent.com/20878070/43992240-1834122a-9d9a-11e8-92b5-22334211812d.png)

#### DEMO of Draft Feature:
----------

<iframe width="853" height="480" src="https://www.youtube.com/embed/P-ldR5fEeko" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

As a reasearch note on PublicLab is created when plots2 work with Publiclab editor so for creating a note as draft, it was required that some parameter should be sent through [PublicLab Editor](https://github.com/publiclab/PublicLab.Editor) which is easy task so I opened a FTO for this purpose and here's the merged [PR](https://github.com/publiclab/PublicLab.Editor/pull/144)

**PLANNING ISSUE for Draft Feature:** 
  https://github.com/publiclab/plots2/issues/2307
  https://github.com/publiclab/plots2/issues/2667

**Pull Requests for Draft Feature:** https://github.com/publiclab/plots2/pulls?q=is%3Apr+label%3Adraft-feature+is%3Aclosed

**Tests for Draft Feature:** https://github.com/publiclab/plots2/commits/master/test/functional/notes_controller_test.rb?author=gauravano

**Documentation for Draft Feature:** https://github.com/publiclab/plots2/pull/3206/files#diff-2e1a86fcf0c664b0f33d6ee1958eef6aR42

**Wiki for Draft Feature:** Here's the wiki explaining detailed working of Draft Feature - https://publiclab.org/wiki/draft-feature

------------

### Email Integration Project - Configurable Email Settings
------------

Email Integration Project has three parts Reply by Email to Comment, Weekly Digest and a user interface for managing digest settings and configurable email notification settings. First two parts are completed by other team members who are also assigned same project. So, my part left to Configurable Email Notification Settings.

A new page is also created by me at https://publiclab.org/settings from where user can choose which type of notification emails they want to receive. Currently, there are 5 settings available on the this page.

![settings_page](https://user-images.githubusercontent.com/20878070/43992989-786973a6-9da4-11e8-9212-84e2448836c0.png)

Settings page save user-specific settings using UserTags and not in table so a user can modify these settings by adding/deleting tags from his profile page too, if he has enough technical knowledge.

#### DEMO of Email Settings:
------------

**Like notification setting demo:**
<iframe width="822" height="411" src="https://www.youtube.com/embed/NlV3QmnMeLI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

**In-direct comment notification setting demo:**
<iframe width="837" height="422" src="https://www.youtube.com/embed/JjaN-zEikOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

**PLANNING ISSUE for Email Subscription Settings:** 
  https://github.com/publiclab/plots2/issues/213
  https://github.com/publiclab/plots2/issues/2796
  
**Pull Requests for Email Settings Part:** https://github.com/publiclab/plots2/pulls?q=is%3Apr+label%3Aemail-settings+is%3Aclosed

**Tests for Email Settings:** 
  https://github.com/publiclab/plots2/blob/master/test/functional/comment_controller_test.rb#L387-L408
  https://github.com/publiclab/plots2/blob/master/test/functional/like_controller_test.rb#L112-L128

**Documentation for Email Settings Part:** https://github.com/publiclab/plots2/blob/master/doc/EMAIL.md#email-settings

--------------

## Other significant Issues handled

There are also many issues that I worked on apart from my project during Coding period. Here are some:
 
### Comment Moderation System
-------------

Comment Moderation System allows moderators and admin to moderate comments just like nodes. The aim is to reduce spam by extending moderation options. The moderated comments can be re-published again from https://publiclab.org/spam (page accessible to moderators and admin only).

![spam_mod](https://user-images.githubusercontent.com/20878070/43997189-97535c20-9df2-11e8-9982-0c8e2d5a11a4.gif)

<br>

**Button for marking comment as spam are also included in E-mails so that moderators can easily mark them as spam**

![image description][2]

<br>

**PLANNING ISSUE for Comment Moderation System:**  https://github.com/publiclab/plots2/issues/2304
  
**Pull Requests for Comment Moderation System:** https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Agauravano+label%3Acomment-moderation+is%3Aclosed

**Tests for Comment Moderation:** https://github.com/publiclab/plots2/commits/master/test/functional/admin_controller_test.rb?author=gauravano

----------

### Welcome Email at Sign-up
-----------

A new Welcome mailer is made which is sent to user at sign-up. This mailer body is made using the **Feature functionality** i.e., admins can change the email body from https://publiclab.org/features anytime. Also, the mailer is designed such that it can parse images too, other wise normal feature body can only contain plain text. A fallback email body is also present at backend in case feature is deleted from the website.


![image description][3]

<br>


**PLANNING ISSUE for Welcome Email for :**  https://github.com/publiclab/plots2/issues/2241
  
**Pull Requests for integrating Mailer:** 
   https://github.com/publiclab/plots2/pull/3025
   https://github.com/publiclab/plots2/pull/3052

**Tests for Welcome Mailer:** https://github.com/publiclab/plots2/pull/3025/files#diff-b2c2749ebd23232d8a06b42b37913296

-----------


### Expanding Promoting Comment to Answer feature to Answer's comment
-----------

Promoting comment to answer was developed to work with normal comments only. I expanded it to promote comment of both types to answer.

**Issue associated:** https://github.com/publiclab/plots2/issues/3081

**Demo after Implementation:** https://drive.google.com/open?id=1U2gEw0KIWSqM95jNFs4jpd4vI6aM2g24

**Pull Request:** https://github.com/publiclab/plots2/pull/3195

-----------

## Some other small Issues are:
--------

**Expanding Author Subscription System**

 * Issue: https://github.com/publiclab/plots2/issues/2088
 * PR: https://github.com/publiclab/plots2/pull/2909

<br>

**Extended Query Search with extra tag**

  * Issue: https://github.com/publiclab/plots2/issues/2778
  * PR: https://github.com/publiclab/plots2/pull/2864

------- 

## Ongoing development
---------

Currently, I am working on last bit of Email Settings Project which is to implement Unsubscribe from node.

* Pull Request for the same is at https://github.com/publiclab/plots2/pull/3220. 
* Planning issue: https://github.com/publiclab/plots2/issues/1610

----------

## Presentation at OpenHour
------------

As we had an [OpenHour](https://publiclab.org/openhour#Monday,+August+6th+at+1pm+ET:+Summer+of+Code+Projects) whose topic was Summer of Code Projects, here's the presentation which I used for presenting my work.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSlZmzCyL8kutM6D0TWkCHUY9w-OwGLJfHixuoW88Eb2VJ3mQGF-0RRy-VSOrOwDnxeN8XBwQwY_cdR/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="400" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<br>

-----------------

Thank you so much to my mentors:

* Jeffrey Warren (@warren)

* Stevie Lewis (@stevie)

Thanks to PublicLab team @icarito @liz and all contributors, this was really a great summer with full of learning experiences :tada: :sparkle: !

--------------------

> Have any question :question: about my project, please feel free to comment below. If you like :thumbsup: my work then let me know by liking it :star:. And, if you want to be a part of our amazing team of PublicLab, just head over to our [Welcome Page](https://publiclab.github.io/community-toolbox/#r=all) and start your journey :rocket:.

**Happy Coding!**    


  [1]: /i/26155.png "all_time_commits.png"
  [2]: /i/26156.png "email_mod.png"
  [3]: /i/26158.png "welcome_email.png"